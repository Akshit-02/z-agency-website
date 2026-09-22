"use client";

import { motion } from "motion/react";
import { Briefcase, Building2, ChartColumn, Landmark, Rocket, Shirt, ShoppingBag, Sparkles } from "lucide-react";

export type IndustryVisualKey =
  | "d2c"
  | "real-estate"
  | "beauty"
  | "fashion"
  | "fintech"
  | "saas"
  | "manufacturing"
  | "services";

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

/** the small on-hover graphic sitting inside the card, one per industry */
export function IndustryArt({ kind, hover }: { kind: IndustryVisualKey; hover: boolean }) {
  const rise = { initial: { opacity: 0, y: 10, scale: 0.94 }, animate: hover ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.94 }, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] as const } };

  switch (kind) {
    case "d2c":
      return (
        <motion.div className="absolute -right-3 bottom-0 h-[92px] w-[62px] -rotate-6 overflow-hidden rounded-[14px] bg-[#0b0c0e] p-[3px] shadow-[0_14px_30px_-10px_rgba(37,99,235,0.45)]" {...rise}>
          <div className="h-full w-full overflow-hidden rounded-[11px] bg-gradient-to-b from-[#dce8fb] to-[#aecbf2]">
            <div className="mx-auto mt-2 h-[3px] w-4 rounded-full bg-white/70" />
            <ShoppingBag className="mx-auto mt-4 h-5 w-5 text-white/90" strokeWidth={1.6} />
            <div className="mx-2 mt-3 h-6 rounded-md bg-white/70" />
            <div className="mx-2 mt-1.5 h-[3px] w-8 rounded-full bg-white/50" />
          </div>
        </motion.div>
      );
    case "real-estate":
      return (
        <motion.div className="absolute -right-2 bottom-1 h-[64px] w-[86px]" {...rise}>
          <svg viewBox="0 0 86 64" className="h-full w-full">
            <polygon points="43,4 82,30 82,60 4,60 4,30" fill="#fdeee7" stroke="#ea580c" strokeOpacity=".4" />
            <rect x="34" y="38" width="16" height="22" fill="#ea580c" opacity=".5" />
          </svg>
        </motion.div>
      );
    case "beauty":
      return (
        <motion.div className="absolute -right-2 bottom-1 flex h-[70px] w-[80px] items-end justify-end gap-1.5" {...rise}>
          {[26, 40, 32].map((h, i) => (
            <span key={i} className="w-4 rounded-t-full bg-gradient-to-t from-[#e94f7a] to-[#f6a3bf]" style={{ height: h }} />
          ))}
        </motion.div>
      );
    case "fashion":
      return (
        <motion.div className="absolute -right-1 bottom-2 h-[62px] w-[70px]" {...rise}>
          <svg viewBox="0 0 70 62" className="h-full w-full" fill="none">
            <path d="M35 6c5 0 8 4 8 8h14l6 14-12 4v26H21V32L9 28l6-14h12c0-4 3-8 8-8Z" fill="#efe6fb" stroke="#7c3aed" strokeOpacity=".4" />
          </svg>
        </motion.div>
      );
    case "fintech":
      return (
        <motion.div className="absolute -right-2 bottom-2 h-[54px] w-[86px] rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d3fbf] p-2.5 shadow-[0_12px_26px_-10px_rgba(37,99,235,0.5)]" {...rise}>
          <div className="h-2 w-6 rounded-sm bg-white/70" />
          <p className="mt-3 text-[7px] tracking-[0.1em] text-white/80">•••• 4471</p>
        </motion.div>
      );
    case "saas":
      return (
        <motion.div className="absolute -right-2 bottom-1 h-[70px] w-[86px] rounded-lg bg-white p-2 shadow-[0_12px_26px_-12px_rgba(16,185,129,0.5)]" {...rise}>
          <svg viewBox="0 0 70 44" className="h-full w-full" fill="none">
            <path d="M2 38 L16 24 L28 30 L44 12 L58 20 L68 4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      );
    case "manufacturing":
      return (
        <motion.div className="absolute -right-2 bottom-1 flex h-[64px] w-[80px] items-end justify-end gap-2" {...rise}>
          {[22, 38, 30, 46].map((h, i) => (
            <span key={i} className="w-3 rounded-t bg-gradient-to-t from-[#7c3aed] to-[#b79cf0]" style={{ height: h }} />
          ))}
        </motion.div>
      );
    case "services":
      return (
        <motion.div className="absolute -right-2 bottom-2 h-[58px] w-[78px] rounded-lg bg-white p-2 shadow-[0_12px_26px_-12px_rgba(37,99,235,0.5)]" {...rise}>
          <div className="space-y-1.5">
            <div className="h-[3px] w-full rounded-full bg-blue/30" />
            <div className="h-[3px] w-4/5 rounded-full bg-ink/10" />
            <div className="h-[3px] w-3/5 rounded-full bg-ink/10" />
          </div>
          <div className="mt-2 h-4 w-10 rounded bg-blue/15" />
        </motion.div>
      );
  }
}

export const industryIcons: Record<IndustryVisualKey, typeof Building2> = {
  d2c: ShoppingBag,
  "real-estate": Building2,
  beauty: Sparkles,
  fashion: Shirt,
  fintech: Landmark,
  saas: Rocket,
  manufacturing: ChartColumn,
  services: Briefcase,
};

export const cardSerif = serif;
