"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { renderInline } from "@/lib/inline-content";

const EASE = [0.25, 1, 0.5, 1] as const;

/** FAQ accordion in the homepage style: each question is a card, the open one turns dark. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const still = !!useReducedMotion();

  return (
    <div className="flex flex-col gap-2.5 overflow-x-clip py-1">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={item.q}
            className={`relative overflow-hidden rounded-2xl border transition-colors duration-500 ${
              isOpen ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink hover:border-ink/25"
            }`}
            initial={still ? false : { opacity: 0, y: 24, rotateX: 25 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: Math.min(i, 6) * 0.05 }}
            style={{ transformPerspective: 900, transformOrigin: "50% 0%" }}
          >
            {isOpen && (
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-600/25 blur-[70px]" />
            )}
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group relative flex w-full items-center gap-4 px-5 py-4 text-left sm:gap-5 sm:px-6 sm:py-5"
            >
              <span className={`font-mono text-[0.78rem] tabular-nums ${isOpen ? "text-orange-bright" : "text-ink/35"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[1rem] font-medium leading-snug tracking-tight sm:text-[1.05rem]">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                  isOpen ? "rotate-45 bg-white text-ink" : "bg-ink/[0.05] text-ink/60 group-hover:bg-ink group-hover:text-white"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="relative overflow-hidden"
                >
                  <p className="max-w-[64ch] px-5 pb-6 pl-[3.1rem] text-pretty text-[0.95rem] leading-relaxed text-white/70 sm:px-6 sm:pl-[3.6rem] [&_a]:text-white [&_a]:underline [&_a]:decoration-white/30 [&_a]:underline-offset-4">
                    {renderInline(item.a)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
