import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { deliverContactMessage } from "@/lib/leads";
import { isRateLimited, getClientKey } from "@/lib/rateLimit";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({
      success: true,
      message: "Thank you! Your details have been submitted successfully.",
    });
  }

  if (isRateLimited(getClientKey(request, "contact"))) {
    return NextResponse.json(
      { success: false, message: "You've already submitted this recently. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  const result = await deliverContactMessage(parsed.data);

  if (!result.sent) {
    return NextResponse.json(
      {
        success: false,
        message: `We couldn't send your message right now. Please try again, or email us at ${site.email}.`,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thank you! Your details have been submitted successfully.",
  });
}
