import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(1, "Enter your company name"),
  website: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  details: z.string().min(20, "Tell us a bit more — at least a couple of sentences"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const budgetRanges = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];
