import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { buildPayfastForm } from "@/lib/payfast";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";

const APPLICATION_FEE = 200;

function supabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      idNumber,
      dateOfBirth,
      highSchool,
      matricYear,
      subjects,
      programme,
    } = body as Record<string, string>;

    if (!firstName || !lastName || !email || !phone || !idNumber || !programme) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const applicationId = randomUUID();

    const db = supabase();
    const { error: dbError } = await db.from("rau_applications").insert({
      id: applicationId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      id_number: idNumber,
      date_of_birth: dateOfBirth || null,
      high_school: highSchool || null,
      matric_year: matricYear ? parseInt(matricYear) : null,
      subjects: subjects || null,
      programme,
      payment_status: "pending",
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error("[rau/apply] DB error:", dbError);
      return NextResponse.json({ error: "Failed to save application." }, { status: 500 });
    }

    const payfast = buildPayfastForm({
      applicationId,
      firstName,
      lastName,
      email,
      amount: APPLICATION_FEE,
      programme,
    });

    return NextResponse.json(payfast);
  } catch (err) {
    console.error("[rau/apply] Error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
