import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * Server-only mail utility. Never import this from a "use client" component —
 * the "server-only" import above will throw a build error if that happens.
 *
 * Credentials come from non-NEXT_PUBLIC_ env vars so they're never inlined
 * into the client bundle. Configured for Gmail / Google Workspace today; if
 * the sending provider changes, swap the transporter below for a generic
 * SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS config instead.
 */

type MailEnv = {
  from: string;
  to: string;
  appPassword: string;
};

function readMailEnv(): MailEnv | null {
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;
  const appPassword = process.env.EMAIL_APP_PASSWORD;

  if (!from || !to || !appPassword) {
    return null;
  }

  return { from, to, appPassword };
}

let cachedTransporter: Transporter | null = null;

function getTransporter(env: MailEnv): Transporter {
  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.from,
      pass: env.appPassword,
    },
  });

  return cachedTransporter;
}

export type SendLeadEmailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export type SendMailResult = { sent: true } | { sent: false; reason: string };

/**
 * Sends a lead-notification email to the configured recipient. Never throws —
 * failures (missing config, SMTP errors) are caught and returned as a result
 * so calling API routes can respond safely without leaking internals.
 */
export async function sendLeadEmail(input: SendLeadEmailInput): Promise<SendMailResult> {
  const env = readMailEnv();

  if (!env) {
    console.error("[mailer] Missing EMAIL_FROM, EMAIL_TO, or EMAIL_APP_PASSWORD env vars.");
    return { sent: false, reason: "not_configured" };
  }

  try {
    const transporter = getTransporter(env);
    await transporter.sendMail({
      from: `"ZSpace Website" <${env.from}>`,
      to: env.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      ...(input.replyTo ? { replyTo: input.replyTo } : {}),
    });
    return { sent: true };
  } catch (error) {
    console.error("[mailer] Failed to send lead email:", error);
    return { sent: false, reason: "send_failed" };
  }
}
