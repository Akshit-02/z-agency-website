"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="border border-line"
    >
      <div className="relative min-h-[280px] p-8 sm:p-14">
        <span className="font-display text-7xl italic leading-none text-coral/25 sm:text-8xl">
          &ldquo;
        </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="-mt-6"
          >
            <blockquote className="max-w-2xl font-display text-2xl font-medium leading-snug text-ink text-pretty sm:text-3xl">
              {current.quote}
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm font-medium text-ink">{current.name}</p>
              <span className="text-ink-faint">·</span>
              <p className="text-sm text-ink-faint">{current.role}</p>
              {current.result && (
                <span className="border border-line-strong px-2 py-0.5 font-mono-label text-[0.65rem] uppercase tracking-wide text-ink-soft">
                  {current.result}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex border-t border-line">
        {testimonials.map((t, i) => (
          <button
            key={t.quote}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative flex-1 border-r border-line px-5 py-4 text-left last:border-r-0",
              i === active ? "bg-mist" : "hover:bg-mist/50",
            )}
          >
            <span className="font-mono-label text-xs text-ink-faint">0{i + 1}</span>
            {i === active && (
              <motion.span layoutId="testimonial-tab" className="absolute inset-x-0 top-0 h-[2px] bg-ink" />
            )}
          </button>
        ))}
      </div>

      <p className="border-t border-line px-8 py-3 text-xs text-ink-faint sm:px-14">
        Sample testimonials illustrating the format we present client feedback in — replaced
        with verified quotes as engagements complete.
      </p>
    </div>
  );
}
