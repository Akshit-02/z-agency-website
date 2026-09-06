import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  // TODO: connect to email provider (e.g. Resend, Mailchimp, Klaviyo).
  console.log("Newsletter signup:", parsed.data.email);

  return NextResponse.json({ ok: true });
}
