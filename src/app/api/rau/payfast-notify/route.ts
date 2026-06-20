import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyPayfastNotification, PAYFAST_CONFIG } from "@/lib/payfast";

export const dynamic = "force-dynamic";

function supabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const params = Object.fromEntries(new URLSearchParams(body));

    const {
      payment_status,
      m_payment_id: applicationId,
      pf_payment_id: payfastPaymentId,
      amount_gross: amountGross,
    } = params;

    if (!applicationId) {
      return new NextResponse("Missing payment ID", { status: 400 });
    }

    if (!verifyPayfastNotification(params, PAYFAST_CONFIG.passphrase)) {
      console.warn("[rau/payfast-notify] Signature mismatch for", applicationId);
      return new NextResponse("Invalid signature", { status: 400 });
    }

    let dbStatus: "paid" | "failed" | "cancelled" = "failed";
    if (payment_status === "COMPLETE") dbStatus = "paid";
    else if (payment_status === "CANCELLED") dbStatus = "cancelled";

    const db = supabase();
    const { error } = await db
      .from("rau_applications")
      .update({
        payment_status: dbStatus,
        payfast_payment_id: payfastPaymentId ?? null,
        amount_paid: amountGross ? parseFloat(amountGross) : null,
        paid_at: dbStatus === "paid" ? new Date().toISOString() : null,
      })
      .eq("id", applicationId);

    if (error) {
      console.error("[rau/payfast-notify] DB error:", error);
      return new NextResponse("DB error", { status: 500 });
    }

    console.log(`[rau/payfast-notify] Application ${applicationId} → ${dbStatus}`);
    return new NextResponse("OK", { status: 200 });
  } catch (err) {
    console.error("[rau/payfast-notify] Error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
