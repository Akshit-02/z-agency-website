import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // TODO: wire up to email delivery (e.g. Resend, nodemailer + SMTP) and/or CRM.
  console.log("New contact inquiry:", parsed.data);

  return NextResponse.json({ ok: true });
}
