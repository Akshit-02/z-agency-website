"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Atmosphere,
  DarkPanel,
  EASE,
  Eyebrow,
  MaskLines,
  TiltCard,
  riseProps,
  serif,
} from "@/components/ui/Aesthetic";
import { ScaledArt } from "@/components/home/WhyZspace";
import { CycleArt, LayersArt, SimpleArt, ThinkArt } from "@/components/home/WhyZspaceArt";

/* ------------------------------------------------------------------ hero */

function ellipsePath(cx: number, cy: number, rx: number, ry: number) {
  return `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0`;
}

const rings = [
  { rot: -28, rx: 215, ry: 92, dur: 11, dots: [{ c: "#ea580c", begin: 0, t: -0.6 }, { c: "#2563eb", begin: -5.5, t: 2.4 }] },
  { rot: 32, rx: 205, ry: 84, dur: 14, dots: [{ c: "#2563eb", begin: -3, t: 0.9 }, { c: "#ea580c", begin: -9, t: 3.8 }] },
];

const heroChips = [
  { label: "Idea", className: "left-[2%] top-[16%]", delay: 0.9 },
  { label: "Design", className: "right-[0%] top-[38%]", delay: 1.05 },
  { label: "Product", className: "left-[12%] bottom-[10%]", delay: 1.2 },
];

/** Two tilted orbits around a glowing core; the whole scene leans toward the cursor. */
export function AboutOrbit({ on, still }: { on: boolean; still: boolean }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 80, damping: 16 };
  const rotateX = useSpring(useTransform(my, [0, 1], still ? [0, 0] : [14, -14]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], still ? [0, 0] : [-18, 18]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
        initial={still ? false : { opacity: 0, scale: 0.85 }}
        animate={on ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
      >
        <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/15 blur-[70px]" />

        {/* frosted panes behind the core */}
        <motion.div
          className="absolute left-[27%] top-[24%] h-[46%] w-[46%] rounded-[32px] border border-white bg-gradient-to-br from-blue-tint to-white/40 shadow-[0_40px_80px_-40px_rgba(37,99,235,0.45)]"
          style={{ z: -70 }}
          initial={{ rotate: 24 }}
          animate={still ? undefined : { rotate: [24, 32, 24] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[34%] top-[30%] h-[36%] w-[36%] rounded-[26px] border border-white/80 bg-white/50 backdrop-blur-sm"
          style={{ z: -30 }}
          initial={{ rotate: -14 }}
          animate={still ? undefined : { rotate: [-14, -22, -14] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
          {rings.map((r, i) => (
            <g key={i} transform={`rotate(${r.rot} 250 250)`}>
              <motion.path
                id={`about-ring-${i}`}
                d={ellipsePath(250, 250, r.rx, r.ry)}
                stroke="#3b82f6"
                strokeOpacity={0.4}
                strokeWidth={1.2}
                initial={still ? false : { pathLength: 0, opacity: 0 }}
                animate={on ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.8, ease: EASE, delay: 0.4 + i * 0.2 }}
              />
              {r.dots.map((d, j) =>
                still ? (
                  <circle
                    key={j}
                    r={6}
                    fill={d.c}
                    cx={250 + r.rx * Math.cos(d.t)}
                    cy={250 + r.ry * Math.sin(d.t)}
                  />
                ) : (
                  <circle key={j} r={6} fill={d.c}>
                    <animateMotion dur={`${r.dur}s`} begin={`${d.begin}s`} repeatCount="indefinite">
                      <mpath href={`#about-ring-${i}`} />
                    </animateMotion>
                  </circle>
                ),
              )}
            </g>
          ))}
        </svg>

        {/* glowing core */}
        <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) translateZ(60px)" }}>
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-white/75 shadow-[0_0_90px_rgba(255,255,255,0.95)] sm:h-48 sm:w-48">
            {!still &&
              [0, 1.4].map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute inset-0 rounded-full border border-blue/30"
                  animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay }}
                />
              ))}
            <motion.div
              className="relative h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_30%,#93c5fd,#2563eb_55%,#1d4ed8)] shadow-[0_24px_50px_-10px_rgba(37,99,235,0.65)] sm:h-28 sm:w-28"
              animate={still ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="absolute left-[30%] top-[24%] h-3 w-3 rounded-full bg-white/70 blur-[2px]" />
            </motion.div>
          </div>
        </div>

        {heroChips.map((c) => (
          <motion.div
            key={c.label}
            className={`absolute ${c.className}`}
            style={{ z: 90 }}
            initial={still ? false : { opacity: 0, y: 14, scale: 0.9 }}
            animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: c.delay }}
          >
            <motion.span
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[0.82rem] font-medium text-ink shadow-[0_18px_36px_-16px_rgba(11,12,14,0.3),0_0_0_1px_rgba(11,12,14,0.04)]"
              animate={still ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              {c.label}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function AboutHero() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-[130px] sm:px-8 lg:pb-24 lg:pt-[160px]">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Eyebrow on={on} still={still}>
            About ZSpace Labs
          </Eyebrow>
          <h1
            className="mt-7 text-[3.3rem] leading-[0.98] tracking-[-0.03em] text-ink sm:text-[4.6rem] lg:text-[5.3rem]"
            style={serif}
          >
            <MaskLines
              on={on}
              still={still}
              lines={[
                <>We build</>,
                <>things worth</>,
                <>
                  <span className="italic text-orange">using</span>.
                </>,
              ]}
            />
          </h1>
          <motion.p
            className="mt-7 max-w-[34rem] text-pretty text-[1.05rem] leading-relaxed text-ink/60"
            {...riseProps(on, still, 0.5)}
          >
            ZSpace Labs is a technology and digital product studio for businesses that want better digital
            experiences, products and systems. We bring strategy, design and engineering together to turn ideas,
            problems and opportunities into things people can actually use.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" {...riseProps(on, still, 0.65)}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[0.92rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <span className="hidden h-6 w-px bg-ink/15 sm:block" />
            <Link href="/services" className="group inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-ink">
              See what we build
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <AboutOrbit on={on} still={still} />
      </div>
    </section>
  );
}

/* ------------------------------------------------- idea → something real */

const steps = [
  { label: "Idea", note: "Something worth exploring." },
  { label: "Question", note: "Who is it for, and why now?" },
  { label: "Problem", note: "The real friction, named clearly." },
  { label: "Clarity", note: "What to build, and what not to." },
  { label: "Design", note: "Flows people understand without thinking." },
  { label: "Code", note: "Built to hold up as things grow." },
  { label: "Product", note: "Launched into real hands." },
  { label: "Improvement", note: "Measured, refined, repeated." },
];

function Step({
  step,
  i,
  progress,
  still,
}: {
  step: (typeof steps)[number];
  i: number;
  progress: MotionValue<number>;
  still: boolean;
}) {
  const at = i / (steps.length - 1);
  const opacity = useTransform(progress, [at - 0.1, at], [0.3, 1]);
  const scale = useTransform(progress, [at - 0.1, at], [0.4, 1]);
  const x = useTransform(progress, [at - 0.1, at], [12, 0]);

  return (
    <motion.li className="relative" style={still ? undefined : { opacity, x }}>
      <span className="absolute -left-10 top-[5px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-ink ring-1 ring-white/20">
        <motion.span
          className={`h-2 w-2 rounded-full ${i % 2 ? "bg-blue-bright shadow-[0_0_14px_#3b82f6]" : "bg-orange-bright shadow-[0_0_14px_#ff6b35]"}`}
          style={still ? undefined : { scale }}
        />
      </span>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[0.72rem] text-white/35">{String(i + 1).padStart(2, "0")}</span>
        <h3 className="text-[1.55rem] leading-tight text-white" style={serif}>
          {step.label}
        </h3>
      </div>
      <p className="mt-1 pl-[2.1rem] text-[0.88rem] text-white/50">{step.note}</p>
    </motion.li>
  );
}

export function IdeaToReal() {
  const still = !!useReducedMotion();
  const headRef = useRef<HTMLDivElement>(null);
  const headOn = useInView(headRef, { once: true, amount: 0.3 });
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.8", "end 0.55"] });

  return (
    <DarkPanel>
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div ref={headRef} className="flex flex-col">
          <Eyebrow on={headOn} still={still} tone="dark">
            The problem &rarr; solution
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] sm:text-[3.8rem]" style={serif}>
            <MaskLines
              on={headOn}
              still={still}
              lines={[
                <>What happens</>,
                <>between an idea</>,
                <>
                  and <span className="italic text-orange-bright">something real?</span>
                </>,
              ]}
            />
          </h2>
          <motion.p className="mt-6 max-w-[28rem] text-[1rem] leading-relaxed text-white/60" {...riseProps(headOn, still, 0.45)}>
            It&rsquo;s not just about writing code. It&rsquo;s about asking the right questions, finding the clearest
            path and building something that actually works.
          </motion.p>

          {/* a path from scribble to straight line */}
          <svg viewBox="0 0 420 200" className="mt-10 hidden w-full max-w-[420px] overflow-visible lg:mt-auto lg:block" fill="none" aria-hidden>
            <motion.path
              id="idea-path"
              d="M10 170 C 60 120, 40 60, 110 80 S 170 180, 220 110 S 300 40, 410 30"
              stroke="url(#idea-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={still ? false : { pathLength: 0 }}
              animate={headOn ? { pathLength: 1 } : {}}
              transition={{ duration: 2.2, ease: EASE, delay: 0.6 }}
            />
            <defs>
              <linearGradient id="idea-grad" x1="0" x2="1">
                <stop offset="0" stopColor="#ff6b35" stopOpacity="0.2" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {!still && (
              <circle r="4.5" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 6px #3b82f6)" }}>
                <animateMotion dur="6s" repeatCount="indefinite" begin="2.6s">
                  <mpath href="#idea-path" />
                </animateMotion>
              </circle>
            )}
            <circle cx="410" cy="30" r="5" fill="#3b82f6" />
          </svg>
        </div>

        <div ref={listRef} className="relative pl-10">
          <span className="absolute bottom-3 left-[11px] top-3 w-px bg-white/10" />
          <motion.span
            className="absolute bottom-3 left-[11px] top-3 w-px origin-top bg-gradient-to-b from-orange-bright via-orange-bright to-blue-bright"
            style={{ scaleY: still ? 1 : scrollYProgress }}
          />
          <ol className="flex flex-col gap-7">
            {steps.map((s, i) => (
              <Step key={s.label} step={s} i={i} progress={scrollYProgress} still={still} />
            ))}
          </ol>
        </div>
      </div>
    </DarkPanel>
  );
}

/* ---------------------------------------------------------- how we think */

export function HowWeThink() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow on={on} still={still}>
            How we think
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.6rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[
                <>Technology isn&rsquo;t</>,
                <>
                  the <span className="italic text-orange">hard part.</span>
                </>,
              ]}
            />
          </h2>
          <motion.p className="mt-6 max-w-[27rem] text-[1rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.4)}>
            Building software is easier than ever. Knowing what deserves to be built isn&rsquo;t. We start with
            people, problems and outcomes, then find the simplest way to make it real.
          </motion.p>
        </div>

        <motion.span
          aria-hidden
          className="hidden h-64 w-px origin-top bg-ink/10 lg:block"
          initial={still ? false : { scaleY: 0 }}
          animate={on ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        />

        <div className="relative" style={{ perspective: 900 }}>
          <motion.p className="text-[0.85rem] text-ink/45" {...riseProps(on, still, 0.4)}>
            Don&rsquo;t ask:
          </motion.p>
          <motion.p className="relative mt-2 inline-block text-[1.7rem] text-ink/40" style={serif} {...riseProps(on, still, 0.5)}>
            &ldquo;What can we build?&rdquo;
            <motion.span
              aria-hidden
              className="absolute left-0 top-[55%] h-[2px] w-full origin-left rounded-full bg-orange"
              initial={still ? false : { scaleX: 0 }}
              animate={on ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
            />
          </motion.p>

          <motion.p className="mt-10 text-[0.85rem] text-ink/45" {...riseProps(on, still, 1.3)}>
            Ask:
          </motion.p>
          <motion.p
            className="relative mt-2 text-[2.7rem] italic leading-[1.02] tracking-[-0.02em] text-ink sm:text-[3.5rem]"
            style={{ ...serif, transformOrigin: "50% 100%" }}
            initial={still ? false : { opacity: 0, rotateX: 60, y: 20, filter: "blur(8px)" }}
            animate={on ? { opacity: 1, rotateX: 0, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1, ease: EASE, delay: 1.45 }}
          >
            &ldquo;What should <span className="text-orange">exist?</span>&rdquo;
          </motion.p>

          <svg viewBox="0 0 80 60" className="absolute -top-2 right-0 hidden h-14 w-20 sm:block" fill="none" aria-hidden>
            <motion.path
              d="M6 8 C 40 0, 70 16, 62 46"
              stroke="#2563eb"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={still ? false : { pathLength: 0 }}
              animate={on ? { pathLength: 1 } : {}}
              transition={{ duration: 0.9, ease: EASE, delay: 1.9 }}
            />
            <motion.path
              d="M54 40 L62 48 L69 39"
              stroke="#2563eb"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={still ? false : { opacity: 0 }}
              animate={on ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 2.7 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- what we believe */

const beliefs = [
  {
    title: "Think before building",
    body: "We don’t rush into development just because there’s a deadline. Every decision traces back to a problem worth solving.",
    Art: ThinkArt,
    glow: "#ff6b35",
  },
  {
    title: "Make complexity feel simple",
    body: "Technology can be complicated. It shouldn’t feel complicated for the person using it.",
    Art: SimpleArt,
    glow: "#3b82f6",
  },
  {
    title: "Build for what’s next",
    body: "A first version should solve today’s problem without creating tomorrow’s.",
    Art: LayersArt,
    glow: "#ff6b35",
  },
  {
    title: "Keep improving",
    body: "Launch isn’t the end. Real users reveal things that planning can’t.",
    Art: CycleArt,
    glow: "#3b82f6",
  },
];

function BeliefCard({ b, i, still }: { b: (typeof beliefs)[number]; i: number; still: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  const Art = b.Art;

  return (
    <motion.div
      ref={ref}
      className="min-w-0"
      initial={still ? false : { opacity: 0, y: 60, rotateY: i % 2 ? -16 : 16, filter: "blur(8px)" }}
      animate={on ? { opacity: 1, y: 0, rotateY: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, ease: EASE, delay: i * 0.1 }}
      style={{ transformPerspective: 1200 }}
    >
      <TiltCard glow={b.glow} max={6}>
        <div className="flex h-full flex-col p-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 font-mono text-[0.75rem] text-ink/70">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 text-[1.45rem] leading-[1.12] tracking-[-0.01em] text-ink" style={serif}>
            {b.title}
          </h3>
          <p className="mt-3 text-[0.86rem] leading-relaxed text-ink/55">{b.body}</p>
          <div className="mt-auto pt-6">
            <div className="rounded-[16px] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.06] transition-transform duration-700 ease-out group-hover/tilt:-translate-y-1">
              <div className="flex justify-center rounded-[12px] bg-gradient-to-br from-[#f5f5f3] to-white py-2">
                <ScaledArt>
                  <Art on={on} still={still} />
                </ScaledArt>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Beliefs() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div className="relative mx-auto max-w-[1180px]">
        <div ref={ref} className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow on={on} still={still}>
              What we believe
            </Eyebrow>
            <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.8rem]" style={serif}>
              <MaskLines
                on={on}
                still={still}
                lines={[
                  <>Good work starts</>,
                  <>
                    with <span className="italic text-orange">good questions.</span>
                  </>,
                ]}
              />
            </h2>
          </div>
          <motion.p className="max-w-[26rem] text-[1rem] leading-relaxed text-ink/60 lg:justify-self-end" {...riseProps(on, still, 0.4)}>
            Four habits that shape every project, whether it&rsquo;s a website, an app, a store or an automation.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {beliefs.map((b, i) => (
            <BeliefCard key={b.title} b={b} i={i} still={still} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ capabilities */

const skills = ["Strategy", "UX", "Design", "Development", "Automation", "CRO", "Optimisation"];
const SPIN = 90;

function SkillMap({ on, still }: { on: boolean; still: boolean }) {
  const R = 38;
  const nodes = skills.map((label, i) => {
    const a = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
    return { label, x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a), i };
  });

  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[500px]" style={{ perspective: 1200 }}>
      <motion.div
        className="absolute inset-0"
        initial={still ? false : { opacity: 0, rotateX: 50, scale: 0.85 }}
        animate={on ? { opacity: 1, rotateX: 0, scale: 1 } : {}}
        transition={{ duration: 1.3, ease: EASE }}
      >
        <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/20 blur-[70px]" />

        <motion.div
          className="absolute inset-0"
          animate={still ? undefined : { rotate: 360 }}
          transition={{ duration: SPIN, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
            <circle cx="50" cy="50" r={R} stroke="#ffffff" strokeOpacity="0.08" strokeWidth="0.3" strokeDasharray="1 1.5" />
            <circle cx="50" cy="50" r={R * 0.62} stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.3" />
            {nodes.map((n) => (
              <motion.line
                key={n.label}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke={n.i % 2 ? "#3b82f6" : "#ff6b35"}
                strokeOpacity="0.35"
                strokeWidth="0.3"
                initial={still ? false : { pathLength: 0 }}
                animate={on ? { pathLength: 1 } : {}}
                transition={{ duration: 0.9, ease: EASE, delay: 0.5 + n.i * 0.08 }}
              />
            ))}
            {!still &&
              nodes.map((n) => (
                <motion.circle
                  key={`p-${n.label}`}
                  r="0.8"
                  fill={n.i % 2 ? "#3b82f6" : "#ff6b35"}
                  initial={{ cx: 50, cy: 50, opacity: 0 }}
                  animate={on ? { cx: [50, n.x], cy: [50, n.y], opacity: [0, 1, 0] } : {}}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.4 + n.i * 0.45, repeatDelay: 1.2 }}
                />
              ))}
          </svg>

          {nodes.map((n) => (
            <div
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <motion.div
                animate={still ? undefined : { rotate: -360 }}
                transition={{ duration: SPIN, repeat: Infinity, ease: "linear" }}
              >
                <motion.span
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/12 bg-[#16181c]/90 px-3 py-1.5 text-[0.72rem] text-white/90 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.7)] backdrop-blur sm:px-4 sm:py-2 sm:text-[0.82rem]"
                  initial={still ? false : { opacity: 0, scale: 0.6 }}
                  animate={on ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.8 + n.i * 0.08 }}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${n.i % 2 ? "bg-blue-bright" : "bg-orange-bright"}`} />
                  {n.label}
                </motion.span>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* the problem at the centre */}
        <div className="absolute left-1/2 top-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          {!still &&
            [0, 1.5].map((delay) => (
              <motion.span
                key={delay}
                className="absolute inset-0 rounded-full border border-white/20"
                animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay }}
              />
            ))}
          <span className="relative flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
            <span className="text-[1rem] italic leading-tight text-white sm:text-[1.25rem]" style={serif}>
              The
              <br />
              problem
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function Capabilities() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });

  return (
    <DarkPanel>
      <div ref={ref} className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div>
          <Eyebrow on={on} still={still} tone="dark">
            Our capabilities
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] sm:text-[3.8rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[<>One problem.</>, <span key="m" className="italic text-orange-bright">Multiple skills.</span>]}
            />
          </h2>
          <motion.p className="mt-6 max-w-[28rem] text-[1rem] leading-relaxed text-white/60" {...riseProps(on, still, 0.4)}>
            A slow website might need a design fix, not a rebuild. Low conversions might need clearer UX, not more
            traffic. A manual process might need an automation, not a new app.
          </motion.p>
          <motion.p className="mt-4 max-w-[28rem] text-[1rem] leading-relaxed text-white/85" {...riseProps(on, still, 0.5)}>
            We bring the right combination of strategy, design and engineering together around the problem.
          </motion.p>
          <motion.div className="mt-8" {...riseProps(on, still, 0.6)}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.85rem] font-medium text-ink transition-colors duration-300 hover:bg-white/90"
            >
              Explore services
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <SkillMap on={on} still={still} />
      </div>
    </DarkPanel>
  );
}

/* -------------------------------------------------------- what we care about */

const feels = ["simple", "fast", "obvious"];

export function FeelsObvious() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.35 });
  const [active, setActive] = useState(0);
  const [cycled, setCycled] = useState(false);

  useEffect(() => {
    if (!on || still) return;
    const t = setInterval(() => {
      setCycled(true);
      setActive((a) => (a + 1) % feels.length);
    }, 2200);
    return () => clearInterval(t);
  }, [on, still]);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow on={on} still={still}>
            What we care about
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.8rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[
                <>Good work should</>,
                <>
                  feel <span className="italic text-orange">obvious.</span>
                </>,
              ]}
            />
          </h2>
          <motion.p className="mt-6 max-w-[34rem] text-[1rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.4)}>
            The best digital experiences don&rsquo;t make you think about how complicated they were to build. They
            simply make sense.
          </motion.p>
          <motion.p className="mt-4 max-w-[34rem] text-[1rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.5)}>
            The navigation feels natural. The interface gets out of the way. Pages load quickly. The right action
            feels obvious. That&rsquo;s the bar we hold our work to.
          </motion.p>
        </div>

        <div className="relative border-ink/10 lg:border-l lg:pl-14">
          {feels.map((word, i) => {
            const isActive = still || active === i;
            return (
              <motion.p
                key={word}
                className="relative py-1.5 text-[2.4rem] leading-tight tracking-[-0.02em] text-ink sm:text-[3rem]"
                style={serif}
                initial={still ? false : { opacity: 0, x: 30, rotateY: -30 }}
                animate={on ? { opacity: isActive ? 1 : 0.28, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE, delay: cycled ? 0 : 0.3 + i * 0.15 }}
              >
                {isActive && !still && (
                  <motion.span
                    layoutId="feels-dot"
                    className="absolute -left-[3.85rem] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange shadow-[0_0_14px_#ea580c] lg:block"
                  />
                )}
                <span className="italic text-ink/45">It feels </span>
                <span className="italic text-orange">{word}.</span>
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
