"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Fragment = {
  label: string;
  color: "blue" | "purple" | "coral" | "yellow" | "mint";
  x: number;
  y: number;
  depth: number;
  kind: "panel" | "nodes" | "code" | "bars";
};

const fragments: Fragment[] = [
  { label: "Interface", color: "blue", x: 6, y: 14, depth: 1.3, kind: "panel" },
  { label: "Design system", color: "purple", x: 88, y: 10, depth: 0.9, kind: "bars" },
  { label: "if (idea) { build() }", color: "coral", x: 3, y: 66, depth: 1.6, kind: "code" },
  { label: "AI flow", color: "yellow", x: 92, y: 62, depth: 1.1, kind: "nodes" },
  { label: "Automation", color: "mint", x: 50, y: 4, depth: 0.7, kind: "bars" },
];

const colorClasses: Record<Fragment["color"], { border: string; text: string; dot: string }> = {
  blue: { border: "border-blue/40", text: "text-blue", dot: "bg-blue" },
  purple: { border: "border-purple/40", text: "text-purple", dot: "bg-purple" },
  coral: { border: "border-coral/40", text: "text-coral", dot: "bg-coral" },
  yellow: { border: "border-yellow/50", text: "text-yellow", dot: "bg-yellow" },
  mint: { border: "border-mint-line", text: "text-mint-line", dot: "bg-mint-line" },
};

function FragmentCard({ fragment, sx, sy }: { fragment: Fragment; sx: MotionValue<number>; sy: MotionValue<number> }) {
  const x = useTransform(sx, (v) => v * 30 * fragment.depth);
  const y = useTransform(sy, (v) => v * 30 * fragment.depth);
  const colors = colorClasses[fragment.color];

  return (
    <motion.div
      className="absolute hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      style={{ left: `${fragment.x}%`, top: `${fragment.y}%`, x, y }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <div className={cn("w-40 border bg-ink/60 p-3 backdrop-blur-sm", colors.border)}>
        {fragment.kind === "panel" && (
          <div className="space-y-1.5">
            <div className={cn("h-1.5 w-1/2", colors.dot)} />
            <div className="h-1 w-full bg-white/15" />
            <div className="h-1 w-4/5 bg-white/15" />
          </div>
        )}
        {fragment.kind === "bars" && (
          <div className="flex items-end gap-1">
            {[6, 10, 4, 8].map((h, i) => (
              <div key={i} className={cn("w-2", colors.dot)} style={{ height: `${h * 2}px`, opacity: 1 - i * 0.15 }} />
            ))}
          </div>
        )}
        {fragment.kind === "nodes" && (
          <svg viewBox="0 0 100 40" className="h-6 w-full">
            <line x1="8" y1="30" x2="50" y2="10" stroke="currentColor" className={colors.text} strokeWidth="1.5" />
            <line x1="50" y1="10" x2="92" y2="30" stroke="currentColor" className={colors.text} strokeWidth="1.5" />
            <circle cx="8" cy="30" r="4" className={colors.dot.replace("bg-", "fill-")} />
            <circle cx="50" cy="10" r="4" className={colors.dot.replace("bg-", "fill-")} />
            <circle cx="92" cy="30" r="4" className={colors.dot.replace("bg-", "fill-")} />
          </svg>
        )}
        {fragment.kind === "code" && (
          <p className={cn("font-mono-label text-[0.65rem] leading-snug", colors.text)}>{fragment.label}</p>
        )}
        {fragment.kind !== "code" && (
          <p className="mt-2.5 font-mono-label text-[0.6rem] uppercase tracking-wide text-white/45">
            {fragment.label}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 16 });
  const sy = useSpring(my, { stiffness: 45, damping: 16 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-ink pb-0 pt-28 text-white sm:pt-36"
    >
      <div className="grid-field-ink pointer-events-none absolute inset-0" />

      {fragments.map((fragment) => (
        <FragmentCard key={fragment.label} fragment={fragment} sx={sx} sy={sy} />
      ))}

      <Container className="relative pb-24 sm:pb-32">
        <Reveal>
          <p className="font-mono-label text-xs uppercase tracking-[0.24em] text-white/45">
            Enter Zspace
          </p>
        </Reveal>

        <div className="mt-6 max-w-4xl">
          <TextReveal
            as="h1"
            className="font-display font-medium leading-[1.03] tracking-tight text-balance"
            lines={[
              <span key="l1" className="text-4xl text-white sm:text-6xl lg:text-[4.6rem]">
                Big ideas don&rsquo;t need more noise.
              </span>,
              <span key="l2" className="text-4xl text-white/50 sm:text-6xl lg:text-[4.6rem]">
                They need <span className="text-white">room to grow.</span>
              </span>,
            ]}
          />
        </div>

        <Reveal delay={0.5}>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            Zspace is where strategy, design, engineering, and AI share a room — so your idea
            doesn&rsquo;t get lost moving between teams that never talk to each other.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <ButtonLink href="/contact" variant="light" size="lg">
              Start a Project
            </ButtonLink>
            <Link
              href="/case-studies"
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-white"
            >
              See What We Build
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>

      <div className="relative flex h-3 w-full">
        <div className="h-full flex-1 bg-blue" />
        <div className="h-full flex-1 bg-purple" />
        <div className="h-full flex-1 bg-coral" />
        <div className="h-full flex-1 bg-yellow" />
        <div className="h-full flex-1 bg-mint-line" />
      </div>
    </section>
  );
}
