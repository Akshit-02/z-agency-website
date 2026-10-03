"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Check, CheckCircle2, Paperclip, Reply, Send } from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;
const SHADOW = "shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.04)]";

/** A project brief being sent, with the reply waiting behind it. */
export function CtaVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  const still = !!useReducedMotion();

  const pop = (delay: number, y = 24) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y, scale: 0.96 },
          animate: on ? { opacity: 1, y: 0, scale: 1 } : {},
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <div ref={ref} aria-hidden className="relative mx-auto h-[330px] w-full max-w-[440px] sm:h-[360px]" style={{ perspective: 1200 }}>
      {/* reply, waiting behind */}
      <motion.div
        className={`absolute right-0 top-0 w-[82%] rotate-[3deg] rounded-2xl bg-white/95 p-3.5 ${SHADOW}`}
        {...pop(0.15)}
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-[0.62rem] font-bold text-white">ZS</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="truncate text-[0.72rem] font-semibold text-ink">ZSpace Labs</p>
              <span className="shrink-0 text-[0.58rem] text-ink/40">Next business day</span>
            </div>
            <p className="truncate text-[0.66rem] text-ink/60">Re: Your project — scope and next steps</p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-md border border-ink/10 px-1.5 py-0.5 text-[0.56rem] text-ink/55">
            <Paperclip className="h-2.5 w-2.5" /> scope-notes.pdf
          </span>
          <span className="flex items-center gap-1 rounded-md bg-ink px-1.5 py-0.5 text-[0.56rem] font-medium text-white">
            <Reply className="h-2.5 w-2.5" /> Reply
          </span>
        </div>
      </motion.div>

      {/* the brief */}
      <motion.div
        className={`absolute bottom-6 left-0 w-[88%] -rotate-[2deg] rounded-2xl bg-white p-4 transition-transform duration-700 hover:-rotate-1 hover:-translate-y-1 ${SHADOW}`}
        {...pop(0.35, 40)}
      >
        <div className="flex items-center justify-between">
          <p className="text-[1rem] leading-tight text-ink" style={serif}>
            Tell us about the <span className="italic text-orange">project.</span>
          </p>
          <span className="h-2 w-2 rounded-full bg-orange" />
        </div>
        <p className="mt-3 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-ink/45">What do you need?</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {["Website", "App", "Shopify", "Automation"].map((t, i) => (
            <motion.span
              key={t}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.62rem] font-medium ${i === 0 || i === 3 ? "bg-ink text-white" : "border border-ink/12 text-ink/70"}`}
              initial={still ? false : { opacity: 0, scale: 0.8 }}
              animate={on ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.6 + i * 0.07 }}
            >
              {(i === 0 || i === 3) && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
              {t}
            </motion.span>
          ))}
        </div>
        <p className="mt-3 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-ink/45">Project details</p>
        <div className="mt-1.5 rounded-lg border border-ink/10 px-2.5 py-2 text-[0.66rem] leading-relaxed text-ink/75">
          We want our site to bring in more qualified leads, and stop copying enquiries into the CRM by hand
          {!still && (
            <motion.span
              className="ml-0.5 inline-block h-3 w-[1.5px] translate-y-0.5 bg-ink"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[0.58rem] text-ink/40">Takes about two minutes</span>
          <span className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[0.64rem] font-semibold text-white">
            Send brief <Send className="h-2.5 w-2.5" />
          </span>
        </div>
      </motion.div>

      {/* confirmation */}
      <motion.div
        className="absolute -bottom-1 right-2 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[0.68rem] font-medium text-ink shadow-[0_20px_40px_-16px_rgba(0,0,0,0.7)]"
        initial={still ? false : { opacity: 0, y: 16, scale: 0.9 }}
        animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: 1.2 }}
      >
        <CheckCircle2 className="h-4 w-4 text-[#16a34a]" />
        Brief sent · reply within one business day
      </motion.div>
    </div>
  );
}
