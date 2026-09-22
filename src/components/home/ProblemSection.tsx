"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  Globe,
  Lightbulb,
  Settings,
  ShoppingBag,
  Smartphone,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as const;

const problems: {
  text: string;
  icon: LucideIcon;
  color: string;
  glow: string;
  x: number;
  y: number;
  w: number;
}[] = [
  {
    text: "Website feels outdated",
    icon: TriangleAlert,
    color: "#ea580c",
    glow: "#ea580c",
    x: 26,
    y: 30,
    w: 205,
  },
  {
    text: "Manual tasks",
    icon: Smartphone,
    color: "#0b1230",
    glow: "#2563eb",
    x: 82,
    y: 152,
    w: 172,
  },
  {
    text: "Traffic ≠ sales",
    icon: ChartColumn,
    color: "#5b6bb5",
    glow: "#6366f1",
    x: 56,
    y: 270,
    w: 196,
  },
  {
    text: "We have an idea, but no roadmap",
    icon: Lightbulb,
    color: "#0b1230",
    glow: "#f59e0b",
    x: 108,
    y: 382,
    w: 212,
  },
];

const solutions: {
  text: string;
  icon: LucideIcon;
  color: string;
  glow: string;
  tint: string;
  href: string;
}[] = [
  {
    text: "A website that works for your business",
    icon: Globe,
    color: "#2563eb",
    glow: "#2563eb",
    tint: "#eaf1ff",
    href: "/services/website-development",
  },
  {
    text: "An experience people enjoy using",
    icon: Smartphone,
    color: "#1d3fbf",
    glow: "#4f46e5",
    tint: "#e8edff",
    href: "/services/mobile-app-development",
  },
  {
    text: "A store built to convert",
    icon: ShoppingBag,
    color: "#ea580c",
    glow: "#ea580c",
    tint: "#fdeee7",
    href: "/services/shopify-development",
  },
  {
    text: "Automations that save your time",
    icon: Settings,
    color: "#0b0c0e",
    glow: "#10b981",
    tint: "#eeeeee",
    href: "/services/ai-automation",
  },
];

/** point on a cubic bezier, used to seat the dots exactly on the arc */
function bez(p: number[], t: number) {
  const [x0, y0, x1, y1, x2, y2, x3, y3] = p;
  const m = 1 - t;
  return [
    m * m * m * x0 + 3 * m * m * t * x1 + 3 * m * t * t * x2 + t * t * t * x3,
    m * m * m * y0 + 3 * m * m * t * y1 + 3 * m * t * t * y2 + t * t * t * y3,
  ];
}
const seg1 = [0, 12, 110, -10, 200, 30, 248, 78];
const seg2 = [248, 78, 350, 170, 385, 300, 350, 400];
const seg3 = [350, 400, 325, 462, 262, 500, 186, 520];
const blueDot = bez(seg1, 0.86);
const orangeDot = bez(seg3, 0.92);

function Dot({
  x,
  y,
  color,
  delay,
  on,
}: {
  x: number;
  y: number;
  color: string;
  delay: number;
  on: boolean;
}) {
  return (
    <g>
      <motion.circle
        cx={x}
        cy={y}
        r="4"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={on ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: EASE, delay }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
      <motion.circle
        cx={x}
        cy={y}
        r="4"
        fill="none"
        stroke={color}
        initial={{ opacity: 0 }}
        animate={on ? { scale: [1, 3.2], opacity: [0.6, 0] } : {}}
        transition={{
          duration: 2.4,
          ease: "easeOut",
          repeat: Infinity,
          delay: delay + 1,
        }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
    </g>
  );
}

const PARAGRAPH =
  "Your website feels outdated. Your store isn\u2019t converting. Your team is still doing things manually. Or maybe you simply know there\u2019s a better way to do it.";

/** words light up one by one as the paragraph scrolls into focus */
function ScrollWord({ word, i, n, progress, still }: { word: string; i: number; n: number; progress: MotionValue<number>; still: boolean }) {
  const start = (i / n) * 0.75;
  const opacity = useTransform(progress, [start, start + 0.25], [0.16, 1]);
  const y = useTransform(progress, [start, start + 0.25], [6, 0]);
  return (
    <motion.span className="mr-[0.28em] inline-block" style={still ? undefined : { opacity, y }}>
      {word}
    </motion.span>
  );
}

/** each problem card drifts and turns on its own as the section scrolls */
function Drift({ i, progress, still, children }: { i: number; progress: MotionValue<number>; still: boolean; children: React.ReactNode }) {
  const dir = i % 2 ? -1 : 1;
  const x = useTransform(progress, [0.15, 0.85], still ? [0, 0] : [dir * -34 * (1 + i * 0.25), dir * 34 * (1 + i * 0.25)]);
  const rotate = useTransform(progress, [0.15, 0.85], still ? [0, 0] : [dir * -5, dir * 5]);
  return (
    <motion.div className="absolute inset-0" style={{ x, rotate }}>
      {children}
    </motion.div>
  );
}

function ProblemCards({ on, still, progress }: { on: boolean; still: boolean; progress: MotionValue<number> }) {
  return (
    <div className="absolute left-0 top-0 h-[520px] w-[380px] origin-top-left scale-[0.82] min-[1400px]:scale-100">
      <svg
        viewBox="0 0 380 520"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <mask
            id="path-reveal"
            maskUnits="userSpaceOnUse"
            x="-40"
            y="-20"
            width="460"
            height="560"
          >
            <motion.path
              d="M251 13 C 318 60, 330 110, 300 120 C 280 132, 230 138, 190 150 C 90 160, 5 215, 15 270 C 20 320, 95 330, 60 372 C 10 410, 5 450, 60 470 C 80 476, 95 480, 104 482"
              fill="none"
              stroke="#fff"
              strokeWidth="6"
              initial={{ pathLength: still ? 1 : 0 }}
              animate={on ? { pathLength: 1 } : {}}
              transition={{ duration: 2.4, ease: EASE, delay: 0.4 }}
            />
          </mask>
        </defs>
        <path
          d="M251 13 C 318 60, 330 110, 300 120 C 280 132, 230 138, 190 150 C 90 160, 5 215, 15 270 C 20 320, 95 330, 60 372 C 10 410, 5 450, 60 470 C 80 476, 95 480, 104 482"
          fill="none"
          stroke="#0b0c0e"
          strokeOpacity="0.55"
          strokeWidth="1.1"
          strokeDasharray="5 5"
          mask="url(#path-reveal)"
        />
        {/* curved arrow towards the solution */}
        <motion.path
          d="M312 284 Q 342 262 366 264 M357 258 L367 264 L358 271"
          fill="none"
          stroke="#0b0c0e"
          strokeOpacity="0.5"
          strokeWidth="1.1"
          strokeLinecap="round"
          initial={{ pathLength: still ? 1 : 0 }}
          animate={on ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE, delay: 1.8 }}
        />
        <Dot x={251} y={13} color="#ea580c" delay={0.3} on={on} />
        <Dot x={104} y={482} color="#2563eb" delay={2.2} on={on} />
      </svg>

      {problems.map((p, i) => {
        const Icon = p.icon;
        return (
          <Drift key={p.text} i={i} progress={progress} still={still}>
          <motion.div
            className="absolute"
            style={{ left: p.x, top: p.y, width: p.w }}
            initial={
              still
                ? false
                : { opacity: 0, x: -50, y: -40, rotate: -22, scale: 0.9 }
            }
            animate={on ? { opacity: 1, x: 0, y: 0, rotate: -9, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 14,
              delay: 0.15 + i * 0.16,
            }}
          >
            <motion.div
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 text-[0.82rem] font-medium leading-tight text-ink"
              style={{
                boxShadow: `0 0 0 1px ${p.glow}22, 0 0 26px 2px ${p.glow}30, 0 18px 40px -14px ${p.glow}59`,
              }}
              animate={
                still || !on
                  ? {}
                  : { y: [0, -6, 0], rotate: [0, i % 2 ? -1 : 1, 0] }
              }
              transition={{
                duration: 5 + i * 0.7,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1.5 + i * 0.4,
              }}
            >
              <Icon
                className="h-[22px] w-[22px] shrink-0"
                style={{ color: p.color }}
                strokeWidth={1.6}
              />
              <span className="max-w-[7.5rem]">{p.text}</span>
            </motion.div>
          </motion.div>
          </Drift>
        );
      })}
    </div>
  );
}

function Spinner({ color, still }: { color: string; still: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 48 48"
      className="pointer-events-none absolute -inset-[3px] h-[54px] w-[54px]"
      animate={still ? {} : { rotate: 360 }}
      transition={{ duration: 6, ease: "linear", repeat: Infinity }}
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke={color}
        strokeOpacity="0.55"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="14 124"
      />
    </motion.svg>
  );
}

const FULL_ARC =
  `M${seg1[0]} ${seg1[1]} C ${seg1.slice(2).join(" ")} ` +
  `C ${seg2.slice(2).join(" ")} C ${seg3.slice(2).join(" ")}`;

function SolutionCards({ on, still, progress }: { on: boolean; still: boolean; progress: MotionValue<number> }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  // scrolling through the section "solves" the four problems one by one
  useMotionValueEvent(progress, "change", (v) => {
    if (hovered || still) return;
    setActive(v < 0.4 ? 0 : v < 0.47 ? 1 : v < 0.54 ? 2 : 3);
  });

  return (
    <div className="absolute right-0 top-0 h-[560px] w-[400px] origin-top-right scale-[0.82] min-[1400px]:scale-100">
      <svg viewBox="0 0 400 560" className="absolute inset-0 h-full w-full overflow-visible">
        {/* main arc, drawn in */}
        <motion.path
          d={FULL_ARC}
          fill="none"
          stroke="#8b93d6"
          strokeOpacity="0.6"
          strokeWidth="1"
          initial={{ pathLength: still ? 1 : 0 }}
          animate={on ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: EASE, delay: 0.4 }}
        />
        {/* dotted echo of the arc */}
        <motion.path
          d={FULL_ARC}
          transform="translate(20 8)"
          fill="none"
          stroke="#8b93d6"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="1.5 6"
          strokeLinecap="round"
          initial={{ opacity: still ? 1 : 0 }}
          animate={on ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 2 }}
        />

        {/* straight arrow pointing into the list */}
        <motion.path
          d="M-22 290 L10 297 M1 290 L11 297 L0 303"
          fill="none"
          stroke="#0b0c0e"
          strokeOpacity="0.5"
          strokeWidth="1.1"
          strokeLinecap="round"
          initial={{ pathLength: still ? 1 : 0 }}
          animate={on ? { pathLength: 1 } : {}}
          transition={{ duration: 1, ease: EASE, delay: 1.4 }}
        />

        <Dot x={blueDot[0]} y={blueDot[1]} color="#2563eb" delay={1.6} on={on} />
        <Dot x={orangeDot[0]} y={orangeDot[1]} color="#ea580c" delay={2.6} on={on} />

        {/* a slow satellite travelling the whole arc */}
        {on && !still && (
          <g>
            <circle r="10" fill="#6366f1" opacity="0.16">
              <animateMotion dur="16s" repeatCount="indefinite" path={FULL_ARC} />
            </circle>
            <circle r="3" fill="#6366f1">
              <animateMotion dur="16s" repeatCount="indefinite" path={FULL_ARC} />
            </circle>
          </g>
        )}
      </svg>

      <div
        className="absolute left-[50px] top-[70px] flex w-[298px] flex-col gap-4"
        onMouseLeave={() => setHovered(false)}
      >
        {solutions.map((s, i) => (
          <motion.div
            key={s.text}
            initial={still ? false : { opacity: 0, x: 60 }}
            animate={on ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 + i * 0.13 }}
            onMouseEnter={() => {
              setHovered(true);
              setActive(i);
            }}
          >
            <SolutionCard s={s} still={still} active={on && active === i} cycling={false} />
          </motion.div>
        ))}

        {/* timeline joining the icons; fills as each one becomes active */}
        {solutions.slice(0, -1).map((s, i) => (
          <span
            key={s.text}
            aria-hidden
            className="pointer-events-none absolute left-[43px] z-10 w-px overflow-hidden rounded-full bg-ink/10"
            style={{ top: i * 108 + 74, height: 52 }}
          >
            <motion.span
              className="block h-full w-full origin-top"
              style={{ background: `linear-gradient(${s.glow}, ${solutions[i + 1].glow})` }}
              initial={false}
              animate={{ scaleY: on && active > i ? 1 : 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function SolutionCard({
  s,
  still,
  active = false,
  cycling = false,
}: {
  s: (typeof solutions)[number];
  still: boolean;
  active?: boolean;
  cycling?: boolean;
}) {
  const Icon = s.icon;
  return (
    <Link
      href={s.href}
      className="group relative flex h-[92px] items-center gap-4 overflow-hidden rounded-2xl bg-white px-5 transition-all duration-500 ease-out hover:-translate-y-0.5"
      style={{
        boxShadow: active
          ? `0 0 0 1px ${s.glow}33, 0 0 30px 3px ${s.glow}38, 0 20px 44px -14px ${s.glow}66`
          : `0 0 0 1px ${s.glow}12, 0 0 18px 0 ${s.glow}14, 0 16px 36px -18px ${s.glow}3d`,
      }}
    >
      <span
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-500"
        style={{ background: s.tint, transform: active ? "scale(1.08)" : undefined }}
      >
        <Spinner color={s.color} still={still} />
        {active && !still && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${s.glow}` }}
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity }}
          />
        )}
        <Icon className="h-[22px] w-[22px]" style={{ color: s.color }} strokeWidth={1.6} />
      </span>
      <span className="flex-1 text-[0.85rem] font-medium leading-snug text-ink">{s.text}</span>
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500 group-hover:translate-x-0.5"
        style={{ background: active ? s.glow : "transparent", color: active ? "#fff" : "#0b0c0e" }}
      >
        <ArrowRight className="h-4 w-4" />
      </span>

      {active && cycling && !still && (
        <motion.span
          key="progress"
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
          style={{ background: `linear-gradient(90deg, transparent, ${s.glow})` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.8, ease: "linear" }}
        />
      )}
    </Link>
  );
}

function Reveal({
  children,
  on,
  delay,
  still,
}: {
  children: React.ReactNode;
  on: boolean;
  delay: number;
  still: boolean;
}) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={still ? false : { y: "105%", rotate: 2 }}
        animate={on ? { y: 0, rotate: 0 } : {}}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const on = useInView(ref, { once: true, amount: 0.25 });
  const reduced = useReducedMotion();
  const still = !!reduced;

  // depth: the two sides drift in opposite directions as the section scrolls past
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [90, -90]);
  const rightY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [-70, 90]);
  const centerY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [30, -30]);

  const paraRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress: paraProgress } = useScroll({ target: paraRef, offset: ["start 0.88", "end 0.5"] });

  const fade = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 18 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#fdfdfc] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1560px] items-center xl:grid-cols-[minmax(0,1fr)_minmax(0,640px)_minmax(0,1fr)]">
        {/* left: the problems */}
        <motion.div
          className="relative hidden h-[430px] w-[312px] xl:block min-[1400px]:h-[520px] min-[1400px]:w-[380px]"
          style={{ y: leftY }}
          aria-hidden
        >
          <ProblemCards on={on} still={still} progress={scrollYProgress} />
        </motion.div>

        {/* centre: the message */}
        <motion.div
          className="mx-auto flex max-w-[640px] flex-col items-center text-center"
          style={{ y: centerY }}
        >
          <motion.p
            className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink"
            {...fade(0)}
          >
            <motion.span
              className="h-px w-7 origin-left bg-orange-600"
              initial={still ? false : { scaleX: 0 }}
              animate={on ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
            />
            The problem, simplified
          </motion.p>

          <h2
            className="mt-7 text-[3rem] leading-[1.02] tracking-[-0.03em] text-ink sm:text-[4rem] xl:text-[4.4rem]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
          >
            <Reveal on={on} delay={0.15} still={still}>
              Good ideas
            </Reveal>
            <Reveal on={on} delay={0.3} still={still}>
              <span className="italic">shouldn&rsquo;t get stuck.</span>
            </Reveal>
          </h2>

          <motion.p
            ref={paraRef}
            className="mt-8 max-w-128 text-pretty text-[1.05rem] leading-[1.7] text-ink"
            {...fade(0.55)}
          >
            {PARAGRAPH.split(" ").map((w, i, all) => (
              <ScrollWord key={i} word={w} i={i} n={all.length} progress={paraProgress} still={still} />
            ))}
          </motion.p>

          <motion.p
            className="mt-7 text-[1.02rem] font-medium text-ink"
            {...fade(0.7)}
          >
            We find the friction, then build a better way through it.
          </motion.p>

          {/* <motion.div
            className="mt-8 flex flex-col items-center gap-4"
            {...fade(0.85)}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <p className="text-[0.88rem] text-ink-soft">
              or{" "}
              <Link
                href="/services"
                className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                explore our work
              </Link>
            </p>
          </motion.div> */}
        </motion.div>

        {/* right: the way through */}
        <motion.div
          className="relative hidden h-[460px] w-[328px] justify-self-end xl:block min-[1400px]:h-[560px] min-[1400px]:w-[400px]"
          style={{ y: rightY }}
        >
          <SolutionCards on={on} still={still} progress={scrollYProgress} />
        </motion.div>
      </div>

      {/* below xl the side art gives way to a simple list */}
      <div className="mx-auto mt-14 grid max-w-[640px] gap-2 sm:grid-cols-2 xl:hidden">
        {solutions.map((s) => (
          <SolutionCard key={s.text} s={s} still />
        ))}
      </div>
    </section>
  );
}
