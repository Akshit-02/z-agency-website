"use client";

import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as const;

/**
 * Abstract slabs + orbit line + a "Got a question?" card, echoing the
 * geometric mark used elsewhere on the site (Logo / HeroGraphic).
 */
export function FaqIllustration({ on, still }: { on: boolean; still: boolean }) {
  const draw = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: on ? { pathLength: 1, opacity: 1 } : {},
          transition: { duration: 1.6, ease: EASE, delay },
        };

  const pop = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, scale: 0.85, y: 10 },
          animate: on ? { opacity: 1, scale: 1, y: 0 } : {},
          transition: { duration: 0.6, ease: EASE, delay },
        };

  return (
    <div className="relative mt-10 h-[220px] w-full max-w-[420px]">
      <svg viewBox="0 0 420 220" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
        <motion.path
          d="M60 176C40 150 34 108 70 78 C110 44 168 40 210 20"
          stroke="#8b93d6"
          strokeOpacity="0.55"
          strokeWidth="1"
          {...draw(0.1)}
        />
        <motion.path
          d="M90 170C150 190 236 176 262 120 C284 74 258 40 216 24"
          stroke="#8b93d6"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="2 6"
          strokeLinecap="round"
          {...draw(0.3)}
        />
      </svg>

      {/* translucent isometric slabs */}
      <motion.div
        className="absolute left-[64px] top-[26px] h-[112px] w-[54px] rounded-md bg-gradient-to-b from-[#dce6fb] to-[#eef1fb]"
        style={{ boxShadow: "0 16px 30px -18px rgba(37,99,235,0.35)", skewX: -10 }}
        initial={still ? false : { opacity: 0, y: 16 }}
        animate={on ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      />
      <motion.div
        className="absolute left-[104px] top-[10px] h-[128px] w-[54px] rounded-md bg-gradient-to-b from-[#eaf0fc] to-[#f5f7fd]"
        style={{ boxShadow: "0 16px 30px -18px rgba(37,99,235,0.28)", skewX: -10 }}
        initial={still ? false : { opacity: 0, y: 16 }}
        animate={on ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
      />

      {/* dots */}
      <motion.span
        className="absolute left-[212px] top-[16px] h-[7px] w-[7px] rounded-full bg-blue"
        {...pop(0.55)}
      />
      <motion.span
        className="absolute left-[58px] top-[196px] h-[7px] w-[7px] rounded-full bg-orange-600"
        {...pop(0.65)}
      />

      {/* the "got a question" card */}
      <motion.div
        className="absolute left-[46px] top-[90px] flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-[0_20px_44px_-18px_rgba(11,12,14,0.28),0_0_0_1px_rgba(11,12,14,0.04)]"
        initial={still ? false : { opacity: 0, y: 18, scale: 0.94 }}
        animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-white">
          <HelpCircle className="h-4 w-4" strokeWidth={2.2} />
        </span>
        <span className="text-[0.9rem] font-medium text-ink">Got a question?</span>
      </motion.div>

      {/* handwritten note + arrow */}
      <motion.div
        className="absolute left-[248px] top-[64px] max-w-[8rem] -rotate-3 text-[0.82rem] italic leading-tight text-ink/55"
        style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        initial={still ? false : { opacity: 0, y: 8 }}
        animate={on ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
      >
        We&rsquo;ve got you covered.
      </motion.div>
      <motion.svg
        className="absolute left-[176px] top-[92px] h-10 w-16"
        viewBox="0 0 64 40"
        fill="none"
        {...draw(0.85)}
      >
        <path d="M2 8C22 6 46 14 58 30" stroke="#0b0c0e" strokeOpacity="0.45" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M50 24 L58 30 L52 36" stroke="#0b0c0e" strokeOpacity="0.45" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.svg>
    </div>
  );
}
