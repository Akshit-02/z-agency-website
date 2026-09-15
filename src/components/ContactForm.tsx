"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";

const needs = [
  "Website Development",
  "Mobile App Development",
  "AI Automation",
  "UI/UX Design",
  "Shopify Setup & Optimization",
  "CRO Audit",
  "Not sure yet",
];

const budgets = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Let's discuss"];

const inputClass =
  "w-full rounded-xl border border-line-strong bg-transparent px-4 py-3.5 text-[0.98rem] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-blue";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 rounded-2xl border border-line-strong bg-[#f3f2ee] p-10"
      >
        <CheckCircle2 className="h-9 w-9 text-blue" />
        <h3 className="font-display text-[1.4rem] font-medium tracking-tight">
          Thanks — we&apos;ve got it.
        </h3>
        <p className="max-w-[45ch] text-pretty text-[1rem] leading-relaxed text-ink-soft">
          We typically reply within one business day. If it&apos;s urgent, email us
          directly at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-blue underline">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-[0.9rem] font-medium text-ink underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[0.85rem] font-medium text-ink-soft">Name*</span>
          <input name="name" type="text" required className={inputClass} placeholder="Jordan Lee" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[0.85rem] font-medium text-ink-soft">Work email*</span>
          <input
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jordan@company.com"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[0.85rem] font-medium text-ink-soft">Company</span>
          <input name="company" type="text" className={inputClass} placeholder="Company name" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[0.85rem] font-medium text-ink-soft">Phone</span>
          <input name="phone" type="tel" className={inputClass} placeholder="Optional" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[0.85rem] font-medium text-ink-soft">What do you need?</span>
          <select name="need" className={inputClass} defaultValue={needs[0]}>
            {needs.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[0.85rem] font-medium text-ink-soft">Budget range</span>
          <select name="budget" className={inputClass} defaultValue={budgets[budgets.length - 1]}>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[0.85rem] font-medium text-ink-soft">Project details*</span>
        <textarea
          name="details"
          required
          rows={5}
          className={inputClass}
          placeholder="What are you building, and what's the timeline?"
        />
      </label>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.92rem] text-red-800"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-orange px-7 py-4 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-orange-deep disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Start the conversation"}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
