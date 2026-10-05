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
import { BlogScene } from "@/components/blog/BlogScene";
import type { BlogSceneData } from "@/lib/blog-scenes";

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

        <AboutStack on={on} still={still} />
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

          {/* the real plan, not a scribble */}
          <motion.div
            className="mt-10 hidden max-w-[460px] lg:mt-auto lg:block"
            initial={still ? false : { opacity: 0, y: 40, rotateX: 25 }}
            animate={headOn ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            style={{ transformPerspective: 1000 }}
          >
            <div className="overflow-hidden rounded-[18px] bg-white/[0.06] p-1.5 ring-1 ring-white/10">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[13px]">
                <BlogScene scene={ROADMAP} />
              </div>
            </div>
          </motion.div>
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
    glow: "#ff6b35",
  },
  {
    title: "Make complexity feel simple",
    body: "Technology can be complicated. It shouldn’t feel complicated for the person using it.",
    glow: "#3b82f6",
  },
  {
    title: "Build for what’s next",
    body: "A first version should solve today’s problem without creating tomorrow’s.",
    glow: "#ff6b35",
  },
  {
    title: "Keep improving",
    body: "Launch isn’t the end. Real users reveal things that planning can’t.",
    glow: "#3b82f6",
  },
];

function BeliefCard({ b, i, still }: { b: (typeof beliefs)[number]; i: number; still: boolean }) {
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
              <div className="relative aspect-[16/10] overflow-hidden rounded-[12px]">
                <BlogScene scene={BELIEF_SCENES[i]} />
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

        <ProjectBoard on={on} still={still} />
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

/* ---------------------------------------------------- realistic graphics */

const HERO_SCENES: BlogSceneData[] = [
  { kind: "design", label: "Checkout redesign", items: ["Cart", "Shipping step", "Payment"], seed: 2 },
  { kind: "landing", label: "Things worth using", items: ["Clear in seconds", "Fast on every device", "Built to grow"], seed: 4 },
  { kind: "mobile", label: "Your week, sorted", items: ["Book in two taps", "Reminders that help", "Pay inside the app"], seed: 1 },
];

/** Real product screens fanned out in 3D; they lean toward the cursor and spread on scroll. */
function AboutStack({ on, still }: { on: boolean; still: boolean }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 80, damping: 16 };
  const rotateX = useSpring(useTransform(my, [0, 1], still ? [8, 8] : [16, 0]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], still ? [-14, -14] : [-24, -4]), spring);
  const { scrollY } = useScroll();
  const spread = useTransform(scrollY, [0, 500], still ? [1, 1] : [1, 1.6]);
  const zBack = useTransform(spread, (s) => -80 * s);
  const zFront = useTransform(spread, (s) => 80 * s);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  const layers = [
    { cls: "left-0 top-[2%] w-[72%]", z: zBack, delay: 0.3 },
    { cls: "left-[16%] top-[24%] w-[72%]", z: undefined, delay: 0.45 },
    { cls: "right-0 bottom-[2%] w-[56%]", z: zFront, delay: 0.6 },
  ];

  return (
    <div
      aria-hidden
      className="relative mx-auto h-[360px] w-full max-w-[540px] sm:h-[440px]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/15 blur-[80px]" />
      <motion.div className="absolute inset-0" style={{ rotateX, rotateY, transformPerspective: 1300, transformStyle: "preserve-3d" }}>
        {layers.map((l, i) => (
          <motion.div
            key={i}
            className={`absolute ${l.cls}`}
            style={l.z ? { z: l.z } : undefined}
            initial={still ? false : { opacity: 0, y: 60 }}
            animate={on ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: EASE, delay: l.delay }}
          >
            <div className="overflow-hidden rounded-2xl border border-white bg-white p-1 shadow-[0_40px_80px_-35px_rgba(11,12,14,0.45),0_0_0_1px_rgba(11,12,14,0.05)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[12px]">
                <BlogScene scene={HERO_SCENES[i]} />
              </div>
            </div>
          </motion.div>
        ))}
        {heroChips.map((c) => (
          <motion.div
            key={c.label}
            className={`absolute ${c.className}`}
            style={{ z: 110 }}
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

const ROADMAP: BlogSceneData = {
  kind: "roadmap",
  label: "From idea to launch",
  items: ["Discovery and questions", "Design and prototype", "Build and test", "Launch and measure"],
  seed: 3,
};

const BELIEF_SCENES: BlogSceneData[] = [
  {
    kind: "heatmap",
    label: "Discovery: what's really going wrong",
    items: ["Pricing is hard to find", "Form asks for too much", "Key pages hidden on mobile", "Product images load slowly"],
    seed: 1,
  },
  { kind: "design", label: "Simplify account settings", items: ["Profile", "Notifications", "Billing"], seed: 6 },
  { kind: "code", label: "Built to grow with you", items: ["Typed API routes", "Cached product data", "Tests on every change"], seed: 3 },
  {
    kind: "analytics",
    label: "After launch: what changed",
    items: ["Checkout completion", "Mobile sessions", "Support tickets", "Page speed"],
    seed: 4,
  },
];

type Task = { t: string; skill: string; who: string; p: number; live?: boolean };

const BOARD: { col: string; tasks: Task[] }[] = [
  {
    col: "Strategy",
    tasks: [
      { t: "Define what success looks like", skill: "Strategy", who: "AK", p: 100 },
      { t: "Map the customer journey", skill: "UX", who: "SR", p: 100 },
    ],
  },
  {
    col: "Design",
    tasks: [
      { t: "Wireframe the new checkout", skill: "UX", who: "SR", p: 100 },
      { t: "Design system tokens", skill: "Design", who: "MJ", p: 70, live: true },
    ],
  },
  {
    col: "Engineering",
    tasks: [
      { t: "Payment integration", skill: "Development", who: "DV", p: 55, live: true },
      { t: "Order sync to the ERP", skill: "Automation", who: "PN", p: 30 },
    ],
  },
  {
    col: "Growth",
    tasks: [
      { t: "Analytics and events", skill: "CRO", who: "AK", p: 20 },
      { t: "A/B test the new flow", skill: "Optimisation", who: "MJ", p: 0 },
    ],
  },
];

const skillColor: Record<string, string> = {
  Strategy: "#ea580c",
  UX: "#2563eb",
  Design: "#7c3aed",
  Development: "#0f766e",
  Automation: "#0284c7",
  CRO: "#db2777",
  Optimisation: "#ca8a04",
};

/** A realistic project board: one problem, every skill on it. */
function ProjectBoard({ on, still }: { on: boolean; still: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="relative"
      initial={still ? false : { opacity: 0, rotateX: 40, y: 40, scale: 0.92 }}
      animate={on ? { opacity: 1, rotateX: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: EASE }}
      style={{ transformPerspective: 1200 }}
    >
      <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between border-b border-ink/[0.06] px-4 py-3">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-ink/40">Project</p>
            <p className="text-[0.95rem] leading-tight" style={serif}>
              Checkout that converts
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-ink/[0.07]">
                <motion.div
                  className="h-full rounded-full bg-[#16a34a]"
                  initial={still ? false : { width: 0 }}
                  animate={on ? { width: "58%" } : {}}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
              </div>
              <span className="text-[0.62rem] text-ink/50">58%</span>
            </div>
            <div className="flex -space-x-1.5">
              {["AK", "SR", "MJ", "DV"].map((w, i) => (
                <span
                  key={w}
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[0.5rem] font-bold text-white"
                  style={{ background: ["#ea580c", "#2563eb", "#7c3aed", "#0f766e"][i] }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-4 mt-3 flex items-center gap-2 rounded-lg bg-[#fef2f2] px-3 py-2 text-[0.68rem] text-[#b91c1c]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
          <span className="font-semibold">The problem:</span> customers drop off at checkout
        </div>

        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4">
          {BOARD.map((c, ci) => (
            <div key={c.col} className="rounded-xl bg-ink/[0.03] p-2">
              <p className="flex items-center justify-between px-1 text-[0.62rem] font-semibold text-ink/60">
                {c.col}
                <span className="rounded-full bg-white px-1.5 text-ink/40">{c.tasks.length}</span>
              </p>
              {c.tasks.map((t, ti) => (
                <motion.div
                  key={t.t}
                  className="mt-2 rounded-lg bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                  initial={still ? false : { opacity: 0, y: 12 }}
                  animate={on ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.4 + ci * 0.12 + ti * 0.08 }}
                >
                  <span
                    className="inline-block rounded px-1.5 py-0.5 text-[0.52rem] font-semibold text-white"
                    style={{ background: skillColor[t.skill] }}
                  >
                    {t.skill}
                  </span>
                  <p className="mt-1.5 text-[0.66rem] font-medium leading-snug text-ink">{t.t}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="h-1 w-12 overflow-hidden rounded-full bg-ink/[0.07]">
                      <div className={`h-full rounded-full ${t.p === 100 ? "bg-[#16a34a]" : "bg-ink/40"}`} style={{ width: `${t.p}%` }} />
                    </div>
                    <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-ink/80 text-[0.42rem] font-bold text-white">
                      {t.who}
                      {t.live && !still && (
                        <motion.span
                          className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#22c55e]"
                          animate={{ scale: [1, 1.7, 1] }}
                          transition={{ duration: 1.4, repeat: Infinity }}
                        />
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------ company facts */

const facts = [
  { label: "What we are", value: "An independent technology and digital product studio. One team handles design and engineering." },
  { label: "Where we work", value: "Remote-first. We serve businesses across India and work with clients globally." },
  { label: "What we build", value: "Websites and web apps, mobile apps, Shopify stores, UI/UX, AI automation and CRO." },
  { label: "Contact", value: "connect@zspace.in, or the project form on our contact page." },
];

const publishing = [
  "We don't publish invented statistics, testimonials, client logos or awards.",
  "Our agency comparisons say clearly that we published them and list ourselves first.",
  "Other companies are described only from their own official websites, without scores or paid placement.",
  "Where we're not the right fit for a project, our articles say so.",
];

export function CompanyFacts() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto max-w-[1180px]">
        <Eyebrow on={on} still={still}>
          Company facts
        </Eyebrow>
        <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.8rem]" style={serif}>
          <MaskLines
            on={on}
            still={still}
            lines={[<>The short version,</>, <span key="h" className="italic text-orange">stated plainly.</span>]}
          />
        </h2>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <TiltCard className="rounded-[1.75rem] border border-ink/10 bg-white p-7 sm:p-9">
            <dl className="divide-y divide-ink/10">
              {facts.map((f) => (
                <div key={f.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink/45">{f.label}</dt>
                  <dd className="text-[0.98rem] leading-relaxed text-ink/80">{f.value}</dd>
                </div>
              ))}
            </dl>
          </TiltCard>

          <TiltCard className="rounded-[1.75rem] border border-ink/10 bg-[#faf8f5] p-7 sm:p-9">
            <p className="text-[1.5rem] leading-tight text-ink" style={serif}>
              How we <span className="italic text-orange">publish</span>
            </p>
            <ul className="mt-5 space-y-3">
              {publishing.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/70">
                  <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/blogs"
              className="group mt-7 inline-flex items-center gap-2 text-[0.88rem] font-medium text-ink"
            >
              Read the knowledge base
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
