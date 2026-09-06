"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, budgetRanges, type ContactFormValues } from "@/lib/validation";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const stepFields: (keyof ContactFormValues)[][] = [
  ["name", "email", "company", "website"],
  ["service", "budget", "details"],
];

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  async function goNext() {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => s + 1);
  }

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center border border-line p-10 text-center">
        <CheckCircle2 className="size-10 text-coral" />
        <h3 className="mt-5 font-display text-2xl font-medium text-ink">Message received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Thanks for reaching out. We read every inquiry personally and reply within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border border-line p-6 sm:p-10">
      <div className="mb-8 flex items-center gap-2">
        {[0, 1].map((i) => (
          <div key={i} className={cn("h-[2px] flex-1", i <= step ? "bg-ink" : "bg-line")} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
              Step 1 of 2 — About you
            </p>
            <Field label="Full name" error={errors.name?.message}>
              <input {...register("name")} className={inputClass} placeholder="Jordan Lee" />
            </Field>
            <Field label="Work email" error={errors.email?.message}>
              <input {...register("email")} className={inputClass} placeholder="jordan@company.com" />
            </Field>
            <Field label="Company" error={errors.company?.message}>
              <input {...register("company")} className={inputClass} placeholder="Company name" />
            </Field>
            <Field label="Website (optional)">
              <input {...register("website")} className={inputClass} placeholder="https://" />
            </Field>
            <button
              type="button"
              onClick={goNext}
              className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden border border-ink bg-ink py-3.5 text-sm font-medium text-white transition-colors sm:w-auto sm:px-8"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-blue transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Continue
                <ArrowRight className="size-4" />
              </span>
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
              Step 2 of 2 — Your project
            </p>
            <Field label="Service needed" error={errors.service?.message}>
              <select {...register("service")} className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </Field>
            <Field label="Budget range" error={errors.budget?.message}>
              <select {...register("budget")} className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Tell us about the project" error={errors.details?.message}>
              <textarea
                {...register("details")}
                rows={5}
                className={inputClass}
                placeholder="What are you trying to build, and what does success look like?"
              />
            </Field>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="inline-flex items-center justify-center gap-2 border border-line-strong px-6 py-3.5 text-sm font-medium text-ink-soft hover:border-ink hover:text-ink"
              >
                <ArrowLeft className="size-4" />
                Back
              </button>
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden border border-ink bg-ink py-3.5 text-sm font-medium text-white transition-colors disabled:opacity-60 sm:flex-none sm:px-8"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-blue transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  {status === "loading" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <ArrowRight className="size-4" />
                  )}
                  Send message
                </span>
              </button>
            </div>
            {status === "error" && (
              <p className="text-sm text-coral">
                Something went wrong sending that — try again, or email us directly.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

const inputClass =
  "w-full border border-line-strong bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-visible:outline-2 focus-visible:outline-blue";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-coral">{error}</span>}
    </label>
  );
}
