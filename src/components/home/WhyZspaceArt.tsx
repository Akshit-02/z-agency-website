"use client";

import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as const;
const CARD = "rounded-lg bg-white text-[9px] font-medium text-ink shadow-[0_10px_24px_-12px_rgba(11,12,14,0.22),0_0_0_1px_rgba(11,12,14,0.04)]";

function Sticky({ children, className, on, delay }: { children: React.ReactNode; className: string; on: boolean; delay: number }) {
  return (
    <motion.div
      className={`absolute px-2.5 py-1.5 ${CARD} ${className}`}
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------- 01 */
export function ThinkArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <div className="relative h-[150px] w-full max-w-[220px]">
      <svg viewBox="0 0 220 150" className="absolute inset-0 h-full w-full" fill="none">
        <motion.circle
          cx="108"
          cy="82"
          r="32"
          stroke="#2563eb"
          strokeOpacity="0.4"
          strokeDasharray="3 4"
          initial={{ pathLength: still ? 1 : 0, opacity: still ? 1 : 0 }}
          animate={on ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        />
        {[
          { d: "M92 60 Q78 46 66 38", },
          { d: "M126 60 Q142 44 156 34", },
          { d: "M92 104 Q76 118 62 128", },
          { d: "M126 104 Q142 118 154 124", },
        ].map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke="#ea580c"
            strokeOpacity="0.55"
            strokeWidth="1.2"
            strokeLinecap="round"
            markerEnd="url(#arrow)"
            initial={{ pathLength: still ? 1 : 0, opacity: still ? 1 : 0 }}
            animate={on ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 + i * 0.1 }}
          />
        ))}
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill="#ea580c" fillOpacity="0.6" />
          </marker>
        </defs>
      </svg>

      <div className="absolute left-[86px] top-[64px] flex h-16 w-16 items-center justify-center rounded-full text-[9px] font-medium text-blue">
        Problem
      </div>

      <Sticky className="left-[14px] top-[10px]" on={on} delay={0.1}>
        Users
      </Sticky>
      <Sticky className="left-[142px] top-[6px]" on={on} delay={0.15}>
        Business
      </Sticky>
      <Sticky className="left-[4px] top-[106px]" on={on} delay={0.5}>
        Goal
      </Sticky>
      <Sticky className="left-[152px] top-[104px]" on={on} delay={0.55}>
        Tech
      </Sticky>
    </div>
  );
}

/* --------------------------------------------------------------- 02 */
export function SimpleArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <div className="relative h-[150px] w-full max-w-[220px]">
      <motion.div
        className={`absolute left-0 top-2 h-[126px] w-[92px] p-2 ${CARD}`}
        initial={{ opacity: 0, x: -10 }}
        animate={on ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
      >
        <div className="h-8 rounded bg-ink/[0.09]" />
        <div className="mt-2 space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-1.5 rounded-sm bg-ink/[0.09]" style={{ width: `${88 - i * 14}%` }} />
          ))}
        </div>
        <div className="mt-2 h-1.5 w-2/3 rounded-sm bg-ink/[0.09]" />
      </motion.div>

      <motion.svg
        className="absolute left-[86px] top-[54px] h-6 w-14"
        viewBox="0 0 56 24"
        fill="none"
        initial={{ opacity: still ? 1 : 0, pathLength: still ? 1 : 0 }}
        animate={on ? { opacity: 1, pathLength: 1 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
      >
        <path d="M2 20C18 20 22 4 54 4" stroke="#ea580c" strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#arrow2)" />
        <defs>
          <marker id="arrow2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill="#ea580c" fillOpacity="0.6" />
          </marker>
        </defs>
      </motion.svg>

      <motion.div
        className={`absolute left-[132px] top-0 h-[130px] w-[86px] p-1.5 ${CARD}`}
        style={{ boxShadow: "0 14px 30px -14px rgba(37,99,235,0.32), 0 0 0 1px rgba(11,12,14,0.04)" }}
        initial={{ opacity: 0, x: 10 }}
        animate={on ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
      >
        <div className="h-[54px] overflow-hidden rounded bg-gradient-to-b from-[#bcd6f5] to-[#e5eefb]">
          <svg viewBox="0 0 86 54" className="h-full w-full" preserveAspectRatio="none">
            <polygon points="0,54 22,24 40,40 60,10 86,54" fill="#6f8fb8" />
            <polygon points="34,54 60,10 74,32 86,54" fill="#8fa9c9" />
          </svg>
        </div>
        <div className="mt-2 space-y-1.5 px-0.5">
          <div className="h-1.5 w-4/5 rounded-sm bg-ink/15" />
          <div className="h-1.5 w-1/2 rounded-sm bg-blue/40" />
        </div>
      </motion.div>

      <p className="absolute left-1 top-[136px] text-[8px] text-ink/40">Complex</p>
      <p className="absolute left-[132px] top-[136px] text-[8px] font-medium text-blue">Simple</p>
    </div>
  );
}

/* --------------------------------------------------------------- 03 */
const layers = [
  { label: "Scale", tint: "#dfe6fb", y: 4 },
  { label: "Features", tint: "#e6ebfb", y: 34 },
  { label: "Platform", tint: "#eef1fb", y: 64 },
  { label: "Foundation", tint: "#fbe9de", y: 94 },
];

export function LayersArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <div className="relative h-[150px] w-full max-w-[220px]">
      <div className="absolute left-4 top-2">
        {layers
          .slice()
          .reverse()
          .map((l, ri) => {
            const i = layers.length - 1 - ri;
            return (
              <motion.div
                key={l.label}
                className="absolute h-9 w-[104px] rounded-md"
                style={{ top: l.y, background: l.tint, boxShadow: "0 6px 14px -8px rgba(11,12,14,0.18)", skewX: -18 }}
                initial={{ opacity: 0, y: 14 }}
                animate={on ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.12 }}
              />
            );
          })}
      </div>

      {layers.map((l, i) => (
        <motion.div
          key={l.label}
          className="absolute left-[142px] flex items-center gap-2 text-[9px] font-medium text-ink/70"
          style={{ top: l.y + 10 }}
          initial={{ opacity: 0, x: 8 }}
          animate={on ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.12 }}
        >
          <span className="h-px w-4 bg-ink/20" />
          {l.label}
        </motion.div>
      ))}

      <motion.div
        className="absolute left-[24px] top-[-4px] flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-[0_8px_18px_-8px_rgba(37,99,235,0.4)]"
        initial={{ opacity: 0, y: 6 }}
        animate={on && !still ? { opacity: 1, y: [0, -5, 0] } : on ? { opacity: 1 } : {}}
        transition={on && !still ? { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 } : { duration: 0.5, delay: 0.7 }}
      >
        <ArrowUp className="h-3.5 w-3.5 text-blue" strokeWidth={2} />
      </motion.div>
    </div>
  );
}

/* --------------------------------------------------------------- 04 */
export function CycleArt({ on, still }: { on: boolean; still: boolean }) {
  const path = "M62 24A46 46 0 1 1 61.9 24";
  return (
    <div className="relative h-[150px] w-full max-w-[220px]">
      <svg viewBox="0 0 150 150" className="absolute left-0 top-0 h-[150px] w-[150px]" fill="none">
        <motion.path
          d={path}
          stroke="#c7cbe6"
          strokeWidth="1.2"
          strokeDasharray="4 5"
          initial={{ pathLength: still ? 1 : 0, opacity: still ? 1 : 0 }}
          animate={on ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
        />
        {on && !still && (
          <circle r="3" fill="#2563eb">
            <animateMotion dur="7s" repeatCount="indefinite" path={path} />
          </circle>
        )}
      </svg>

      <motion.span
        className="absolute left-[36px] top-[2px] rounded-full bg-blue px-3 py-1.5 text-[9px] font-semibold text-white shadow-[0_10px_20px_-8px_rgba(37,99,235,0.5)]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={on ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
      >
        Build
      </motion.span>
      <motion.span
        className={`absolute left-[104px] top-[62px] rounded-full px-3 py-1.5 text-[9px] font-medium ${CARD}`}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={on ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
      >
        Launch
      </motion.span>
      <motion.span
        className="absolute left-[30px] top-[118px] rounded-full bg-orange-tint px-3 py-1.5 text-[9px] font-semibold text-orange-deep shadow-[0_10px_20px_-10px_rgba(234,88,12,0.35)]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={on ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: EASE, delay: 0.65 }}
      >
        Improve
      </motion.span>
    </div>
  );
}
