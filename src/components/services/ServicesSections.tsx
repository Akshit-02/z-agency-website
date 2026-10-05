"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
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
import { ServiceScene } from "./ServiceScene";

export type ServiceSummary = {
  slug: string;
  index: string;
  name: string;
  short: string;
  summary: string;
  accent: "blue" | "orange";
};


/* ------------------------------------------------------------------ hero */

/** A few browser windows stacked in 3D; they fan apart as the page scrolls. */
function StackedScreens({ on, still }: { on: boolean; still: boolean }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 80, damping: 16 };
  const tiltX = useSpring(useTransform(my, [0, 1], still ? [10, 10] : [18, 4]), spring);
  const tiltY = useSpring(useTransform(mx, [0, 1], still ? [-22, -22] : [-32, -12]), spring);

  const { scrollY } = useScroll();
  const spread = useTransform(scrollY, [0, 500], still ? [1, 1] : [1, 1.9]);
  const zBack = useTransform(spread, (s) => -90 * s);
  const zFront = useTransform(spread, (s) => 90 * s);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  const layer = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 60 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 1.1, ease: EASE, delay },
        };

  return (
    <div
      aria-hidden
      className="relative mx-auto h-[340px] w-full max-w-[540px] sm:h-[430px]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/15 blur-[80px]" />
      <motion.div
        className="absolute inset-0"
        style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1300, transformStyle: "preserve-3d" }}
      >
        {/* back: a website */}
        <motion.div className="absolute left-[2%] top-[4%] w-[78%]" style={{ z: zBack }} {...layer(0.3)}>
          <Screen>
            <ServiceScene slug="website-development" />
          </Screen>
        </motion.div>

        {/* middle: analytics */}
        <motion.div className="absolute left-[14%] top-[30%] w-[78%]" {...layer(0.45)}>
          <Screen>
            <div className="relative aspect-[16/10] w-full">
              <BlogScene scene={GROWTH} />
            </div>
          </Screen>
        </motion.div>

        {/* front: a project brief */}
        <motion.div className="absolute bottom-[2%] right-[0%] w-[50%]" style={{ z: zFront }} {...layer(0.6)}>
          <div className="rounded-2xl border border-white bg-white/95 p-4 shadow-[0_40px_80px_-30px_rgba(37,99,235,0.45),0_0_0_1px_rgba(11,12,14,0.04)]">
            <div className="flex items-center justify-between">
              <p className="text-[0.72rem] font-semibold text-ink">New project</p>
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            </div>
            <div className="mt-3 space-y-2">
              {["Website", "Shopify store", "Automation"].map((t, i) => (
                <div key={t} className="flex items-center gap-2 rounded-lg bg-ink/[0.03] px-2.5 py-1.5">
                  <span className={`flex h-3.5 w-3.5 items-center justify-center rounded ${i < 2 ? "bg-blue" : "border border-ink/20"}`}>
                    {i < 2 && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                  </span>
                  <span className="text-[0.66rem] text-ink/70">{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-ink py-1.5 text-center text-[0.66rem] font-medium text-white">
              Send brief
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Screen({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white bg-white p-1 shadow-[0_30px_70px_-30px_rgba(11,12,14,0.35),0_0_0_1px_rgba(11,12,14,0.05)]">
      <div className="overflow-hidden rounded-[12px]">{children}</div>
    </div>
  );
}

const GROWTH: BlogSceneData = {
  kind: "analytics",
  label: "Growth overview",
  items: ["Organic search", "Paid social", "Email", "Referral"],
  seed: 4,
};

const ADVICE: BlogSceneData = {
  kind: "chat",
  label: "Which service fits what we're trying to fix?",
  items: ["Tell us what isn't working", "We map the options", "You get a clear, honest plan"],
  seed: 2,
};

export function ServicesHero() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-[130px] sm:px-8 lg:pb-24 lg:pt-[160px]">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        <div>
          <Eyebrow on={on} still={still}>
            Services
          </Eyebrow>
          <h1 className="mt-7 text-[3.3rem] leading-[0.98] tracking-[-0.03em] text-ink sm:text-[4.6rem] lg:text-[5.3rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[
                <>Built around</>,
                <>
                  your <span className="italic text-orange">problems</span>.
                </>,
              ]}
            />
          </h1>
          <motion.p className="mt-7 max-w-[32rem] text-pretty text-[1.05rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.45)}>
            Websites, apps, commerce, design, automation and optimisation for businesses across India. We bring the right combination of
            skills to help your business move forward.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" {...riseProps(on, still, 0.6)}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[0.92rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <span className="hidden h-6 w-px bg-ink/15 sm:block" />
            <a href="#all-services" className="group inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-ink">
              See our services
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <StackedScreens on={on} still={still} />
      </div>
    </section>
  );
}

/* ------------------------------------------------- more than a menu */

const skills = ["Strategy", "UX", "Design", "Development", "AI", "Automation", "CRO"];
const ROW = 44;

export function MoreThanMenu() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.35 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!on || still) return;
    const t = setInterval(() => setActive((a) => (a + 1) % skills.length), 1600);
    return () => clearInterval(t);
  }, [on, still]);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] items-center gap-14 border-t border-ink/10 pt-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:pt-20">
        <div>
          <Eyebrow on={on} still={still}>
            How we help
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.8rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[
                <>More than a menu</>,
                <>
                  of <span className="italic text-orange">services.</span>
                </>,
              ]}
            />
          </h2>
          <motion.p className="mt-6 max-w-[32rem] text-[1rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.4)}>
            Every business has different goals, challenges and opportunities. We don&rsquo;t just offer services. We
            solve problems by combining the right mix of strategy, design and technology.
          </motion.p>
        </div>

        {/* the mix: a dot travels down the rail, picking out one skill at a time */}
        <motion.div className="relative mx-auto flex w-full max-w-[320px] gap-8 lg:mx-0" {...riseProps(on, still, 0.3)}>
          <div className="relative w-10 shrink-0" style={{ height: skills.length * ROW }}>
            <span className="absolute bottom-[22px] right-0 top-[22px] w-px bg-ink/10" />
            <svg className="absolute left-0 top-0 h-full w-full overflow-visible" fill="none" aria-hidden>
              <motion.line
                x1="0"
                x2="40"
                stroke="#ea580c"
                strokeOpacity="0.5"
                animate={{ y1: (skills.length * ROW) / 2, y2: active * ROW + ROW / 2 }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </svg>
            <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-orange shadow-[0_0_16px_#ea580c]" />
            <motion.span
              className="absolute -right-[5px] h-2.5 w-2.5 rounded-full bg-orange"
              animate={{ top: active * ROW + ROW / 2 - 5 }}
              transition={{ duration: 0.6, ease: EASE }}
            />
          </div>
          <ul>
            {skills.map((s, i) => (
              <li
                key={s}
                className={`flex items-center text-[1.05rem] transition-all duration-500 ${
                  still || active === i ? "translate-x-1 font-medium text-ink" : "text-ink/35"
                }`}
                style={{ height: ROW }}
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ service rows */

function ServiceRow({ svc, i, still }: { svc: ServiceSummary; i: number; still: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [40, -40]);
  const flip = i % 2 === 1;
  const glow = svc.accent === "blue" ? "#3b82f6" : "#ff6b35";

  return (
    <motion.div
      ref={ref}
      initial={still ? false : { opacity: 0, y: 70, rotateX: 18, filter: "blur(8px)" }}
      animate={on ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, ease: EASE }}
      style={{ transformPerspective: 1400, transformOrigin: "50% 100%" }}
    >
      <TiltCard tone="dark" glow={glow} max={3}>
        <Link href={`/services/${svc.slug}`} className="group grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <span
            aria-hidden
            className={`pointer-events-none absolute -top-20 h-56 w-56 rounded-full opacity-20 blur-[80px] transition-opacity duration-700 group-hover:opacity-50 ${flip ? "-left-16" : "-right-16"}`}
            style={{ backgroundColor: glow }}
          />
          <motion.div
            className={`relative ${flip ? "lg:order-2" : ""}`}
            style={{ y: artY }}
            initial={still ? false : { opacity: 0, x: flip ? 60 : -60, rotateY: flip ? -20 : 20 }}
            animate={on ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          >
            <div className="rounded-[20px] bg-white/[0.06] p-2 ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[14px]">
                <ServiceScene slug={svc.slug} />
              </div>
            </div>
          </motion.div>

          <div className={`relative ${flip ? "lg:order-1" : ""}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[0.78rem] text-white/35">{svc.index}</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] text-white/55">{svc.short}</span>
            </div>
            <h3 className="mt-5 text-[2rem] leading-[1.05] tracking-[-0.015em] text-white sm:text-[2.5rem]" style={serif}>
              {svc.name}
            </h3>
            <p className="mt-4 max-w-[30rem] text-[0.95rem] leading-relaxed text-white/55">{svc.summary}</p>
            <span className="mt-7 inline-flex items-center gap-3 text-[0.9rem] font-medium text-white">
              Explore
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-white transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-ink">
                <ArrowRight className="h-4 w-4" />
              </span>
            </span>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

export function ServiceList({ services }: { services: ServiceSummary[] }) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.4 });

  return (
    <DarkPanel id="all-services" className="scroll-mt-20">
      <div ref={ref} className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <Eyebrow on={on} still={still} tone="dark">
            What we do
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] sm:text-[3.8rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[<>Six services.</>, <span key="m" className="italic text-orange-bright">Built to work together.</span>]}
            />
          </h2>
        </div>
        <motion.p className="max-w-[26rem] text-[1rem] leading-relaxed text-white/60 lg:justify-self-end" {...riseProps(on, still, 0.4)}>
          Each service can stand alone or combine into one engagement. Every project starts with the same question:
          what does this business actually need to move forward?
        </motion.p>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        {services.map((svc, i) => (
          <ServiceRow key={svc.slug} svc={svc} i={i} still={still} />
        ))}
      </div>
    </DarkPanel>
  );
}

/* ---------------------------------------------------------------- closing */

export function ServicesClosing() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-white px-3 pb-16 pt-4 sm:px-5 lg:px-6 lg:pb-20">
      <motion.div
        ref={ref}
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px] border border-ink/[0.07] bg-gradient-to-br from-white via-white to-blue-tint/60 px-6 py-14 sm:px-12 lg:px-16 lg:py-10"
        initial={still ? false : { opacity: 0, y: 40, scale: 0.97 }}
        animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: EASE }}
      >
        <Atmosphere tone="light" still={still} />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow on={on} still={still}>
              Not sure where to start?
            </Eyebrow>
            <h2 className="mt-6 text-[2.6rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.6rem]" style={serif}>
              <MaskLines
                on={on}
                still={still}
                lines={[
                  <>Let&rsquo;s find the</>,
                  <>
                    right <span className="italic text-orange">approach.</span>
                  </>,
                ]}
              />
            </h2>
            <motion.p className="mt-5 max-w-[30rem] text-[1rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.4)}>
              Tell us what you&rsquo;re trying to build, what isn&rsquo;t working or what you&rsquo;d like to improve.
              We&rsquo;ll help you figure out the right scope.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" {...riseProps(on, still, 0.5)}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[0.92rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/blogs" className="group inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-ink">
                Read our guides
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          <div className="mx-auto w-full max-w-[460px]">
            <div className="overflow-hidden rounded-[22px] bg-white p-1.5 shadow-[0_40px_80px_-40px_rgba(11,12,14,0.45),0_0_0_1px_rgba(11,12,14,0.06)] transition-transform duration-700 hover:-translate-y-1">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[16px]">
                <BlogScene scene={ADVICE} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
