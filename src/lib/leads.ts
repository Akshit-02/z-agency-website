/**
 * Lead delivery layer
 * -------------------
 * This is the single seam where lead data leaves the app. It sends a
 * notification email via the shared mailer utility (src/lib/mailer.ts) to
 * the configured EMAIL_TO address.
 *
 * The calling API route validates input with Zod before this layer runs, so
 * payload shapes here can be trusted. Delivery failures are caught inside
 * sendLeadEmail and never thrown; on failure the raw payload is logged as a
 * fallback record so the enquiry isn't lost from view.
 */

import "server-only";
import type { ContactValues } from "./validations";
import { sendLeadEmail, type SendMailResult } from "./mailer";
import { buildLeadEmail } from "./emailTemplates";

export async function deliverContactMessage(payload: ContactValues): Promise<SendMailResult> {
  const { html, text } = buildLeadEmail({
    heading: "New Project Enquiry",
    fields: [
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Company", value: payload.company ?? "" },
      { label: "Phone", value: payload.phone ?? "" },
      { label: "What They Need", value: payload.need },
      { label: "Budget Range", value: payload.budget },
      { label: "Project Details", value: payload.details },
      { label: "Source Page", value: payload.sourcePage ?? "" },
    ],
    source: "ZSpace Website - Contact Form",
  });

  const result = await sendLeadEmail({
    subject: `New Enquiry: ${payload.need} | ${payload.name} | ZSpace`,
    html,
    text,
    replyTo: payload.email,
  });

  if (!result.sent) {
    console.error("[lead:contact] email delivery failed, raw payload:", JSON.stringify(payload));
  }

  return result;
}
