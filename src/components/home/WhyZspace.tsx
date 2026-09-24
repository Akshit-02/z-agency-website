"use client";

import { useRef } from "react";
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
import { CycleArt, LayersArt, SimpleArt, ThinkArt } from "./WhyZspaceArt";

const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

const columns = [
  {
    n: "01",
    title: "Think before we build.",
    body: "We start with the business problem, not a technology checklist.",
    Art: ThinkArt,
  },
  {
    n: "02",
    title: "Make complexity feel simple.",
    body: "From UX to automation, we turn complicated requirements into clear experiences.",
    Art: SimpleArt,
  },
  {
    n: "03",
    title: "Build with tomorrow in mind.",
    body: "The first version matters. So does what happens when your business grows.",
    Art: LayersArt,
  },
  {
    n: "04",
    title: "Stay beyond launch.",
    body: "We can keep improving, optimising and building as your needs change.",
    Art: CycleArt,
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

function Eyebrow({ children, on, still }: { children: React.ReactNode; on: boolean; still: boolean }) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink">
      <motion.span
        className="h-px w-6 origin-left bg-orange-600"
        initial={still ? false : { scaleX: 0 }}
        animate={on ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      />
      {children}
    </p>
  );
}

function Column({ col, i, still }: { col: (typeof columns)[number]; i: number; still: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.4 });
  const Art = col.Art;

  const rise = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 18 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.7, ease: EASE, delay },
        };

  return (
    <div ref={ref} className={`relative pt-8 lg:pl-8 lg:pt-0 ${i > 0 ? "lg:border-l lg:border-ink/10" : ""}`}>
      <motion.span className="text-[0.85rem] text-ink/40" {...rise(0)}>
        {col.n}
      </motion.span>
      <motion.h3 className="mt-2 max-w-[11rem] text-[1.4rem] leading-[1.15] tracking-[-0.01em] text-ink" style={serif} {...rise(0.06)}>
        {col.title}
      </motion.h3>
      <motion.p className="mt-3 max-w-[15rem] text-[0.85rem] leading-relaxed text-ink/55" {...rise(0.12)}>
        {col.body}
      </motion.p>
      <motion.div className="mt-7" {...rise(0.2)}>
        <Art on={on} still={still} />
      </motion.div>
    </div>
  );
}

export function WhyZspace() {
  const reduced = useReducedMotion();
  const still = !!reduced;

  const headRef = useRef<HTMLDivElement>(null);
  const headOn = useInView(headRef, { once: true, amount: 0.4 });
  const footRef = useRef<HTMLDivElement>(null);
  const footOn = useInView(footRef, { once: true, amount: 0.3 });

  const rise = (on: boolean, delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 20 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <section className="relative overflow-hidden bg-[#fdfdfc] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1180px]">
        <div ref={headRef} className="grid gap-10 pb-16 lg:grid-cols-[280px_repeat(4,1fr)] lg:gap-8">
          <div>
            <Eyebrow on={headOn} still={still}>
              Why ZSpace
            </Eyebrow>
            <h2 className="mt-6 text-[2.4rem] leading-[1.04] tracking-[-0.02em] text-ink sm:text-[2.7rem]" style={serif}>
              {["We don’t just build.", "We think."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={still ? false : { y: "105%", rotate: 2 }}
                    animate={headOn ? { y: 0, rotate: 0 } : {}}
                    transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.12 }}
                  >
                    {i === 1 ? (
                      <>
                        We <span className="text-blue italic">think.</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p className="mt-5 max-w-[24rem] text-[0.92rem] leading-relaxed text-ink/55" {...rise(headOn, 0.4)}>
              Technology is the easy part to talk about. The harder part is figuring out what should actually be
              built, making it useful and making sure it keeps working for the business after launch.
            </motion.p>
          </div>

          {columns.map((col, i) => (
            <Column key={col.n} col={col} i={i} still={still} />
          ))}
        </div>

        {/* what you get */}
        <motion.div
          ref={footRef}
          className="rounded-[28px] bg-[#f1f2f6] px-6 py-10 sm:px-10"
          initial={still ? false : { opacity: 0, y: 24 }}
          animate={footOn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="grid gap-10 lg:grid-cols-[240px_1fr_auto] lg:items-center lg:gap-8">
            <div>
              <Eyebrow on={footOn} still={still}>
                What you get
              </Eyebrow>
              <h3 className="mt-4 max-w-[13rem] text-[1.6rem] leading-[1.1] tracking-[-0.01em] text-ink" style={serif}>
                More than just technical skill.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:gap-x-8">
              {traits.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={t.label}
                    initial={still ? false : { opacity: 0, y: 12 }}
                    animate={footOn ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <Icon className="h-[18px] w-[18px] text-blue" strokeWidth={1.7} />
                    <p className="mt-2.5 max-w-[8rem] text-[0.85rem] leading-snug text-ink">{t.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col items-start gap-2 lg:items-end lg:border-l lg:border-ink/10 lg:pl-8 lg:text-right">
              <motion.p className="text-[0.82rem] text-ink/50" {...rise(footOn, 0.3)}>
                Have something in mind?
              </motion.p>
              <motion.div {...rise(footOn, 0.36)}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.85rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
                >
                  Start a Project
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
