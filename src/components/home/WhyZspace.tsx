"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Lightbulb,
  MessageSquare,
  PenTool,
  TrendingUp,
} from "lucide-react";
import { DarkPanel, EASE, Eyebrow, MaskLines, TiltCard, riseProps, serif } from "@/components/ui/Aesthetic";
import { BlogScene } from "@/components/blog/BlogScene";
import type { BlogSceneData } from "@/lib/blog-scenes";

const WHY_SCENES: BlogSceneData[] = [
  {
    kind: "heatmap",
    label: "Discovery: where it breaks",
    items: ["Visitors miss the main offer", "Checkout asks for too much", "Slow on mobile data", "Enquiries go unanswered"],
    seed: 5,
  },
  { kind: "design", label: "Simplify the booking flow", items: ["Search", "Choose a slot", "Confirm"], seed: 2 },
  { kind: "code", label: "Ready for what comes next", items: ["Typed data models", "Reusable components", "Automated tests"], seed: 7 },
  {
    kind: "analytics",
    label: "Month three: still improving",
    items: ["Conversion rate", "Page speed", "Repeat customers", "Support tickets"],
    seed: 9,
  },
];


const columns = [
  {
    n: "01",
    title: "Think before we build.",
    body: "We start with the business problem, not a technology checklist.",
  },
  {
    n: "02",
    title: "Make complexity feel simple.",
    body: "From UX to automation, we turn complicated requirements into clear experiences.",
  },
  {
    n: "03",
    title: "Build with tomorrow in mind.",
    body: "The first version matters. So does what happens when your business grows.",
  },
  {
    n: "04",
    title: "Stay beyond launch.",
    body: "We can keep improving, optimising and building as your needs change.",
  },
];

const traits = [
  { label: "Clear thinking", icon: Lightbulb },
  { label: "Thoughtful design", icon: PenTool },
  { label: "Solid technology", icon: Code2 },
  { label: "Straight communication", icon: MessageSquare },
  { label: "Long-term thinking", icon: TrendingUp },
  { label: "No unnecessary complexity", icon: Layers },
];

/* The illustrations are drawn on a fixed 220×150 canvas (absolute-positioned
   labels over an SVG). Render them at that size and scale the whole canvas to
   the column width, so labels stay where they were designed. */
const ART_W = 220;
const ART_H = 150;

export function ScaledArt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / ART_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full min-w-0 max-w-[220px]" style={{ height: ART_H * scale }}>
      {/* absolutely positioned so the fixed-size canvas never widens the grid column */}
      <div
        className="absolute left-0 top-0"
        style={{ width: ART_W, height: ART_H, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {children}
      </div>
    </div>
  );
}

function Column({ col, i, still }: { col: (typeof columns)[number]; i: number; still: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="min-w-0"
      initial={still ? false : { opacity: 0, y: 60, rotateY: i % 2 ? -16 : 16, filter: "blur(8px)" }}
      animate={on ? { opacity: 1, y: 0, rotateY: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, ease: EASE, delay: i * 0.1 }}
      style={{ transformPerspective: 1200 }}
    >
      <TiltCard tone="dark" glow={i % 2 ? "#3b82f6" : "#ff6b35"} max={6}>
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.75rem] text-white/35">{col.n}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${i % 2 ? "bg-blue-bright" : "bg-orange-bright"}`} />
          </div>
          <h3 className="mt-4 text-[1.45rem] leading-[1.12] tracking-[-0.01em] text-white" style={serif}>
            {col.title}
          </h3>
          <p className="mt-3 text-[0.85rem] leading-relaxed text-white/55">{col.body}</p>
          <div className="mt-auto pt-6">
            <div className="rounded-[16px] bg-white/[0.06] p-1.5 ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover/tilt:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[12px]">
                <BlogScene scene={WHY_SCENES[i]} />
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function WhyZspace() {
  const still = !!useReducedMotion();

  const headRef = useRef<HTMLDivElement>(null);
  const headOn = useInView(headRef, { once: true, amount: 0.4 });
  const footRef = useRef<HTMLDivElement>(null);
  const footOn = useInView(footRef, { once: true, amount: 0.3 });

  return (
    <DarkPanel>
      <div ref={headRef} className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
        <div>
          <Eyebrow on={headOn} still={still} tone="dark">
            Why ZSpace Labs
          </Eyebrow>
          <h2 className="mt-6 text-[3rem] leading-[0.98] tracking-[-0.025em] sm:text-[4rem] lg:text-[4.4rem]" style={serif}>
            <MaskLines
              on={headOn}
              still={still}
              lines={[
                <>We don&rsquo;t just build.</>,
                <>
                  We <span className="italic text-orange-bright">think.</span>
                </>,
              ]}
            />
          </h2>
        </div>
        <motion.p className="max-w-[30rem] text-[1rem] leading-relaxed text-white/60" {...riseProps(headOn, still, 0.4)}>
          Technology is the easy part to talk about. The harder part is figuring out what should actually be built,
          making it useful and making sure it keeps working for the business after launch.
        </motion.p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, i) => (
          <Column key={col.n} col={col} i={i} still={still} />
        ))}
      </div>

      {/* what you get */}
      <motion.div
        ref={footRef}
        className="relative mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-10"
        initial={still ? false : { opacity: 0, y: 32, scale: 0.98 }}
        animate={footOn ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue/20 blur-[90px]" />
        <div className="relative grid gap-10 lg:grid-cols-[240px_1fr_auto] lg:items-center lg:gap-8">
          <div>
            <Eyebrow on={footOn} still={still} tone="dark" delay={0.1}>
              What you get
            </Eyebrow>
            <h3 className="mt-4 max-w-[14rem] text-[1.8rem] leading-[1.08] tracking-[-0.01em] text-white" style={serif}>
              More than just <span className="italic text-orange-bright">technical skill.</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {traits.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.label}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 transition-colors duration-300 hover:border-orange-500/50"
                  initial={still ? false : { opacity: 0, y: 14, rotateX: 40 }}
                  animate={footOn ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.07 }}
                  style={{ transformPerspective: 800 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-blue-bright transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <p className="text-[0.82rem] leading-snug text-white/85">{t.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end lg:border-l lg:border-white/10 lg:pl-8 lg:text-right">
            <motion.p className="text-[0.82rem] text-white/50" {...riseProps(footOn, still, 0.3)}>
              Have something in mind?
            </motion.p>
            <motion.div {...riseProps(footOn, still, 0.36)}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.85rem] font-medium text-ink transition-colors duration-300 hover:bg-white/90"
              >
                Start a Project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </DarkPanel>
  );
}
