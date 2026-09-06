"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [email, setEmail] = useState("");
  const isDark = variant === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <p
        className={cn(
          "inline-flex items-center gap-2 border px-4 py-2.5 text-sm",
          isDark ? "border-white/20 text-white" : "border-line-strong text-ink",
        )}
      >
        <Check className="size-4" /> You&rsquo;re subscribed
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-stretch sm:w-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        className={cn(
          "w-full border px-4 py-2.5 text-sm focus-visible:outline-2",
          isDark
            ? "border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:outline-white/60"
            : "border-line-strong bg-white text-ink placeholder:text-ink-faint focus-visible:outline-blue",
        )}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className={cn(
          "flex w-11 shrink-0 items-center justify-center border border-l-0 transition-colors disabled:opacity-60",
          isDark ? "border-white/20 bg-white text-ink hover:bg-mist" : "border-ink bg-ink text-white hover:bg-blue",
        )}
      >
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
