import crypto from "crypto";

export const PAYFAST_CONFIG = {
  merchantId: process.env.PAYFAST_MERCHANT_ID!,
  merchantKey: process.env.PAYFAST_MERCHANT_KEY!,
  passphrase: process.env.PAYFAST_PASSPHRASE,
  url:
    process.env.NODE_ENV === "production"
      ? "https://www.payfast.co.za/eng/process"
      : "https://sandbox.payfast.co.za/eng/process",
};

interface PayfastParams {
  applicationId: string;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  programme: string;
}

export function buildPayfastForm(params: PayfastParams): {
  actionUrl: string;
  fields: Record<string, string>;
} {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  const data: Record<string, string> = {
    merchant_id: PAYFAST_CONFIG.merchantId,
    merchant_key: PAYFAST_CONFIG.merchantKey,
    return_url: `${baseUrl}/rau/apply/success?ref=${params.applicationId}`,
    cancel_url: `${baseUrl}/rau/apply/${params.programme}?cancelled=1`,
    notify_url: `${baseUrl}/api/rau/payfast-notify`,
    name_first: params.firstName,
    name_last: params.lastName,
    email_address: params.email,
    m_payment_id: params.applicationId,
    amount: params.amount.toFixed(2),
    item_name: "RAU Application Fee",
    item_description: `Application for ${params.programme.replace(/-/g, " ").toUpperCase()}`,
    custom_str1: params.programme,
  };

  const signature = generateSignature(data, PAYFAST_CONFIG.passphrase);
  data.signature = signature;

  return { actionUrl: PAYFAST_CONFIG.url, fields: data };
}

export function generateSignature(
  data: Record<string, string>,
  passphrase?: string
): string {
  const entries = Object.entries(data).filter(([, v]) => v !== "" && v !== undefined);
  let queryString = entries
    .map(
      ([k, v]) =>
        `${encodeURIComponent(k)}=${encodeURIComponent(v.trim()).replace(/%20/g, "+")}`
    )
    .join("&");

  if (passphrase) {
    queryString += `&passphrase=${encodeURIComponent(passphrase.trim()).replace(/%20/g, "+")}`;
  }

  return crypto.createHash("md5").update(queryString).digest("hex");
}

export function verifyPayfastNotification(
  payload: Record<string, string>,
  passphrase?: string
): boolean {
  const received = payload.signature;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { signature: _sig, ...dataWithoutSig } = payload;
  const expected = generateSignature(dataWithoutSig, passphrase);
  return received === expected;
}
