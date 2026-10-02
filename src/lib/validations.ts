import { z } from "zod";

/**
 * Shared form schemas. Imported by the client form (via zodResolver) and by
 * the API route, so both sides validate exactly the same rules.
 */

export const contactNeeds = [
  "Website Development",
  "Mobile App Development",
  "AI Automation",
  "UI/UX Design",
  "Shopify Setup & Optimization",
  "CRO Audit",
  "Not sure yet",
] as const;

export const contactBudgets = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Let's discuss"] as const;

const phoneRegex = /^[+]?[\d\s().-]{7,20}$/;

// Honeypot: a field real users never see or fill. Any non-empty value here
// means the submission almost certainly came from a bot.
const honeypotField = z.string().max(200).optional();

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.email("Enter a valid email address.").max(200),
  company: z.string().trim().max(120).optional(),
  phone: z
    .string()
    .trim()
    .max(20)
    .optional()
    .refine((value) => !value || phoneRegex.test(value), "Enter a valid phone number."),
  need: z.enum(contactNeeds, "Select what you need."),
  budget: z.enum(contactBudgets, "Select a budget range."),
  details: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters).")
    .max(3000, "Keep your message under 3000 characters."),
  // Populated silently from ?src= when the visitor arrived from a blog or
  // service CTA. Never shown to the visitor as a form field.
  sourcePage: z.string().trim().max(200).optional(),
  honeypot: honeypotField,
});

export type ContactValues = z.infer<typeof contactSchema>;
