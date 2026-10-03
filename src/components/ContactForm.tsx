"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";
import { contactSchema, contactNeeds, contactBudgets, type ContactValues } from "@/lib/validations";

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3.5 text-[0.96rem] text-ink outline-none transition-all duration-300 placeholder:text-ink/30 focus:border-ink/50 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]";

function inputClass(hasError: boolean) {
  return `${inputBase} ${hasError ? "border-red-400" : "border-ink/10 hover:border-ink/25"}`;
}

function Field({
  label,
  htmlFor,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className="text-[0.78rem] font-medium uppercase tracking-[0.1em] text-ink/50">
        {label}
        {required && "*"}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-[0.85rem] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { need: contactNeeds[0], budget: contactBudgets[contactBudgets.length - 1] },
  });

  // Capture where the visitor came from (?src=/blogs/...) without showing it.
  useEffect(() => {
    const src = new URLSearchParams(window.location.search).get("src");
    if (src) setValue("sourcePage", src.slice(0, 200));
  }, [setValue]);

  async function onSubmit(values: ContactValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Submission failed");
      }
      reset(values);
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message !== "Submission failed"
          ? error.message
          : `Something went wrong on our end. Please try again, or email us at ${site.email}.`
      );
    }
  }

  if (isSubmitSuccessful && !submitError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        className="relative flex flex-col items-start gap-4 overflow-hidden rounded-[24px] bg-ink p-10 text-white"
      >
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-600/30 blur-[70px]" />
        <CheckCircle2 className="relative h-10 w-10 text-[#4ade80]" />
        <h3 className="relative font-serif-display text-[2rem] leading-tight">
          Thanks — we&apos;ve got it.
        </h3>
        <p className="relative max-w-[45ch] text-pretty text-[1rem] leading-relaxed text-white/65">
          We typically reply within one business day. If it&apos;s urgent, email us
          directly at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-white underline decoration-white/40 underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => reset({ need: contactNeeds[0], budget: contactBudgets[contactBudgets.length - 1] })}
          className="relative mt-2 rounded-full bg-white px-5 py-2.5 text-[0.85rem] font-medium text-ink"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative flex flex-col gap-6">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        {...register("honeypot")}
      />
      <input type="hidden" {...register("sourcePage")} />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(!!errors.name)}
            placeholder="Jordan Lee"
            {...register("name")}
          />
        </Field>
        <Field label="Work email" htmlFor="email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
            placeholder="jordan@company.com"
            {...register("email")}
          />
        </Field>
        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className={inputClass(!!errors.company)}
            placeholder="Company name"
            {...register("company")}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(!!errors.phone)}
            placeholder="Optional"
            {...register("phone")}
          />
        </Field>
        <Field label="What do you need?" htmlFor="need" error={errors.need?.message}>
          <select id="need" className={inputClass(!!errors.need)} {...register("need")}>
            {contactNeeds.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" htmlFor="budget" error={errors.budget?.message}>
          <select id="budget" className={inputClass(!!errors.budget)} {...register("budget")}>
            {contactBudgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project details" htmlFor="details" required error={errors.details?.message}>
        <textarea
          id="details"
          rows={5}
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? "details-error" : undefined}
          className={inputClass(!!errors.details)}
          placeholder="What are you building, and what's the timeline?"
          {...register("details")}
        />
      </Field>

      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            role="alert"
            className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.92rem] text-red-800"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-4 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85 disabled:opacity-60 sm:w-fit"
      >
        {isSubmitting ? "Sending…" : "Start the conversation"}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
