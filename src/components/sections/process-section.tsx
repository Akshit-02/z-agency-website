"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

/** A point becomes strategy, becomes a wireframe, becomes a product — driven
 * by scroll position rather than clicks, so the process reads as one
 * continuous transformation instead of six interchangeable tab panels. */
export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const stage = useTransform(scrollYProgress, [0, 1], [0, processSteps.length - 1]);

  useMotionValueEvent(stage, "change", (latest) => {
    const rounded = Math.min(processSteps.length - 1, Math.max(0, Math.round(latest)));
    setActive(rounded);
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${processSteps.length * 90}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-page grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr_1fr]">
          <Rail active={active} />

          <div className="relative flex aspect-square w-full max-w-[16rem] items-center justify-center border border-line bg-mist justify-self-center lg:max-w-none lg:justify-self-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.15 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <StageGraphic index={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-coral">
                  {processSteps[active].number} / {processSteps.length}
                </span>
                <h3 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
                  {processSteps[active].title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {processSteps[active].description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {processSteps[active].details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-2 size-1.5 shrink-0 bg-ink" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function Rail({ active }: { active: number }) {
  return (
    <div className="hidden flex-col items-center gap-3 justify-self-start lg:flex">
      {processSteps.map((step, i) => (
        <div key={step.number} className="flex flex-col items-center gap-3">
          <span
            className={cn(
              "size-2 rounded-full transition-colors duration-300",
              i <= active ? "bg-ink" : "bg-line-strong",
            )}
          />
          {i < processSteps.length - 1 && (
            <span className={cn("h-6 w-px transition-colors duration-300", i < active ? "bg-ink" : "bg-line")} />
          )}
        </div>
      ))}
    </div>
  );
}

function StageGraphic({ index }: { index: number }) {
  const size = "h-24 w-24 sm:h-32 sm:w-32";
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 100 100" className={size} aria-hidden>
          <circle cx="50" cy="50" r="26" fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.3" />
          <circle cx="50" cy="50" r="5" fill="var(--color-coral)" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 100 100" className={size} aria-hidden>
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="15" y1={y} x2="85" y2={y} stroke="var(--color-ink)" strokeWidth="1" opacity="0.35" />
          ))}
          <rect x="15" y="14" width="70" height="72" fill="none" stroke="var(--color-coral)" strokeWidth="1.5" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 100 100" className={size} aria-hidden>
          <rect x="14" y="16" width="72" height="68" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
          <rect x="14" y="16" width="72" height="14" fill="var(--color-coral)" opacity="0.85" />
          <rect x="22" y="40" width="24" height="34" fill="var(--color-ink)" opacity="0.1" />
          <rect x="52" y="40" width="34" height="16" fill="var(--color-ink)" opacity="0.1" />
          <rect x="52" y="60" width="34" height="14" fill="var(--color-ink)" opacity="0.1" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 100 100" className={size} aria-hidden>
          <text x="50" y="58" textAnchor="middle" fontSize="34" fill="var(--color-ink)" fontFamily="var(--font-mono)">
            {"{ }"}
          </text>
          <rect x="63" y="36" width="2" height="20" fill="var(--color-coral)" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 100 100" className={size} aria-hidden>
          <rect x="20" y="20" width="60" height="60" rx="4" fill="var(--color-ink)" />
          <path d="M35 52 L46 63 L67 38" fill="none" stroke="var(--color-coral)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={size} aria-hidden>
          <line x1="15" y1="85" x2="85" y2="85" stroke="var(--color-ink)" strokeWidth="1" opacity="0.3" />
          {[20, 45, 65, 82].map((h, i) => (
            <rect
              key={h}
              x={22 + i * 16}
              y={85 - h}
              width="10"
              height={h}
              fill={i === 3 ? "var(--color-coral)" : "var(--color-ink)"}
              opacity={i === 3 ? 1 : 0.25 + i * 0.1}
            />
          ))}
        </svg>
      );
  }
}
