import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  need?: string;
  budget?: string;
  details: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, phone, need, budget, details } = payload;

  if (!name || !email || !details) {
    return NextResponse.json(
      { error: "Name, email and project details are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // Wire this up to an email or CRM provider using environment variables,
  // e.g. process.env.RESEND_API_KEY. No credentials are read on the client.
  const notifyUrl = process.env.CONTACT_WEBHOOK_URL;

  if (notifyUrl) {
    try {
      await fetch(notifyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, phone, need, budget, details }),
      });
    } catch {
      return NextResponse.json(
        { error: "We couldn't submit your request right now. Please email us directly." },
        { status: 502 }
      );
    }
  } else {
    console.log("[contact] new inquiry", { name, email, company, phone, need, budget });
  }

  return NextResponse.json({ ok: true });
}
