"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Car,
  Check,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Minus,
  Plane,
  Rocket,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
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
import { type IndustryVisualKey } from "@/components/home/IndustryCardArt";
import { SceneFrame, sceneBackdrop, scenes } from "./IndustryScenes";
import type { IndustryAccent, IndustryCategory, IndustryVisual } from "@/lib/industries-data";

export type IndustryCardData = {
  slug: string;
  name: string;
  category: IndustryCategory;
  shortDescription: string;
  accent: IndustryAccent;
  visual?: IndustryVisual;
  challenges: string[];
  solutions: string[];
};

export type IndustryChip = { slug: string; name: string; category: IndustryCategory };

const icons: Record<string, LucideIcon> = {
  "real-estate": Building2,
  "d2c-consumer": ShoppingBag,
  "beauty-personal-care": Sparkles,
  "fashion-apparel": Shirt,
  ecommerce: ShoppingCart,
  fintech: Landmark,
  "saas-technology": Rocket,
  "healthcare-healthtech": HeartPulse,
  manufacturing: Factory,
  "travel-hospitality": Plane,
  "automotive-mobility": Car,
  "education-edtech": GraduationCap,
};

const accentHex = (a: IndustryAccent) => (a === "blue" ? "#3b82f6" : "#ff6b35");

/* the homepage's industry card art, matched to each industry */
const artKey: Record<string, IndustryVisualKey> = {
  "real-estate": "real-estate",
  "d2c-consumer": "d2c",
  "beauty-personal-care": "beauty",
  "fashion-apparel": "fashion",
  ecommerce: "d2c",
  fintech: "fintech",
  "saas-technology": "saas",
  "healthcare-healthtech": "services",
  manufacturing: "manufacturing",
  "travel-hospitality": "services",
  "automotive-mobility": "manufacturing",
  "education-edtech": "saas",
};

const palette: Record<IndustryVisualKey, { glow: string; tint: string }> = {
  d2c: { glow: "#2563eb", tint: "#eaf1ff" },
  "real-estate": { glow: "#ea580c", tint: "#fdeee7" },
  beauty: { glow: "#e94f7a", tint: "#fce8ee" },
  fashion: { glow: "#7c3aed", tint: "#f0eafd" },
  fintech: { glow: "#2563eb", tint: "#eaf1ff" },
  saas: { glow: "#10b981", tint: "#e6f8f1" },
  manufacturing: { glow: "#7c3aed", tint: "#f0eafd" },
  services: { glow: "#2563eb", tint: "#eaf1ff" },
};

/* ------------------------------------------------------------------ hero */

const orbitIcons: { Icon: LucideIcon; color: string }[] = [
  { Icon: ShoppingBag, color: "#2563eb" },
  { Icon: Building2, color: "#ea580c" },
  { Icon: Sparkles, color: "#e94f7a" },
  { Icon: Landmark, color: "#2563eb" },
  { Icon: Rocket, color: "#10b981" },
  { Icon: HeartPulse, color: "#ea580c" },
  { Icon: Factory, color: "#7c3aed" },
  { Icon: Plane, color: "#2563eb" },
];
const TILT = 64;
const SPIN = 46;

/** Industry icons orbit a glowing core on a tilted plane; icons stay facing the viewer. */
function IndustryOrbit({ on, still }: { on: boolean; still: boolean }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 70, damping: 16 };
  const rotateX = useSpring(useTransform(my, [0, 1], still ? [0, 0] : [10, -10]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], still ? [0, 0] : [-14, 14]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  const preserve = { transformStyle: "preserve-3d" as const };

  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-square w-full max-w-[500px]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/15 blur-[70px]" />
      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformPerspective: 1200, ...preserve }}
        initial={still ? false : { opacity: 0, scale: 0.85 }}
        animate={on ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
      >
        {/* the tilted plane */}
        <div className="absolute inset-[6%]" style={{ transform: `rotateX(${TILT}deg)`, ...preserve }}>
          <div className="absolute inset-0 rounded-full border border-blue/25" />
          <div className="absolute inset-[16%] rounded-full border border-dashed border-orange/30" />
          <div className="absolute inset-[34%] rounded-full bg-blue/10" />

          <motion.div
            className="absolute inset-0"
            style={preserve}
            animate={still ? undefined : { rotate: 360 }}
            transition={{ duration: SPIN, repeat: Infinity, ease: "linear" }}
          >
            {orbitIcons.map(({ Icon, color }, i) => {
              const a = (i / orbitIcons.length) * Math.PI * 2;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%`, ...preserve }}
                >
                  <motion.div
                    className="-ml-6 -mt-6"
                    style={{ rotateX: -TILT, ...preserve }}
                    animate={still ? undefined : { rotate: -360 }}
                    transition={{ duration: SPIN, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_18px_36px_-14px_rgba(11,12,14,0.35),0_0_0_1px_rgba(11,12,14,0.05)]"
                      initial={still ? false : { opacity: 0, scale: 0.4 }}
                      animate={on ? { opacity: 1, scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.7 + i * 0.08 }}
                    >
                      <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.7} />
                    </motion.span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* core */}
        <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}>
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/75 shadow-[0_0_80px_rgba(255,255,255,0.95)]">
            {!still &&
              [0, 1.4].map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute inset-0 rounded-full border border-blue/30"
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay }}
                />
              ))}
            <motion.div
              className="relative h-20 w-20 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fdba74,#ea580c_55%,#c2410c)] shadow-[0_24px_50px_-10px_rgba(234,88,12,0.6)]"
              animate={still ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="absolute left-[30%] top-[24%] h-2.5 w-2.5 rounded-full bg-white/70 blur-[2px]" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function IndustriesHero() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-[130px] sm:px-8 lg:pb-20 lg:pt-[160px]">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Eyebrow on={on} still={still}>
            Industries
          </Eyebrow>
          <h1 className="mt-7 text-[3.3rem] leading-[0.98] tracking-[-0.03em] text-ink sm:text-[4.6rem] lg:text-[5.2rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[
                <>Built for how</>,
                <>your business</>,
                <>
                  <span className="italic text-orange">actually works</span>.
                </>,
              ]}
            />
          </h1>
          <motion.p className="mt-7 max-w-[33rem] text-pretty text-[1.05rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.5)}>
            Whatever industry you&rsquo;re in, the underlying question is the same: what does this business actually
            need to move forward? A property platform doesn&rsquo;t need the same experience as a D2C brand, so we
            adapt the product, technology and experience to fit.
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
            <a href="#all-industries" className="group inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-ink">
              Find your industry
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <IndustryOrbit on={on} still={still} />
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- ribbon */

function Row({ names, reverse, still }: { names: string[]; reverse?: boolean; still: boolean }) {
  const row = [...names, ...names];
  return (
    <motion.ul
      className="flex w-max gap-3"
      animate={still ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 60, ease: "linear", repeat: Infinity }}
    >
      {row.map((n, i) => (
        <li
          key={`${n}-${i}`}
          className="flex items-center gap-3 whitespace-nowrap rounded-full border border-ink/[0.08] bg-white px-5 py-2.5 text-[0.88rem] text-ink/70"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${i % 2 ? "bg-blue" : "bg-orange"}`} />
          {n}
        </li>
      ))}
    </motion.ul>
  );
}

export function IndustryRibbon({ names }: { names: string[] }) {
  const still = !!useReducedMotion();
  const half = Math.ceil(names.length / 2);
  return (
    <section aria-label="Industries we work with" className="relative overflow-hidden bg-white pb-12">
      <div
        className="flex flex-col gap-3"
        style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}
      >
        <Row names={names.slice(0, half)} still={still} />
        <Row names={names.slice(half)} reverse still={still} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ grid */

function IndustryCard({ ind, still }: { ind: IndustryCardData; still: boolean }) {
  const Icon = icons[ind.slug] ?? Building2;
  const key = artKey[ind.slug] ?? "services";
  const { glow, tint } = palette[key];
  const Scene = scenes[ind.slug];
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      layout={!still}
      initial={still ? false : { opacity: 0, y: 40, rotateX: 25, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TiltCard tone="dark" glow={glow} max={7}>
        <Link href={`/industries/${ind.slug}`} className="group flex h-full flex-col p-5">
          {/* light "screen" with a scene from the industry */}
          <div className="rounded-[18px] bg-white/[0.06] p-1.5 ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-1">
            <div className={`relative overflow-hidden rounded-[13px] bg-gradient-to-br ${sceneBackdrop[ind.slug] ?? "from-[#f5f5f3] to-white"}`}>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full blur-2xl transition-opacity duration-500"
                style={{ background: glow, opacity: hover ? 0.22 : 0.08 }}
              />
              <SceneFrame>{Scene && <Scene on={seen} hover={hover} still={still} />}</SceneFrame>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
              style={{ background: tint }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: glow }} strokeWidth={1.8} />
            </span>
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white/40">{ind.category}</span>
          </div>
          <h3 className="mt-3 text-[1.6rem] leading-[1.08] tracking-[-0.01em] text-white" style={serif}>
            {ind.name}
          </h3>
          <p className="mt-2 text-[0.86rem] leading-relaxed text-white/55">{ind.shortDescription}</p>
          <span className="mt-auto flex items-center gap-2 pt-5 text-[0.82rem] font-medium text-white/80">
            Explore
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-ink">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

export function IndustryGrid({
  industries,
  others,
  categories,
}: {
  industries: IndustryCardData[];
  others: IndustryChip[];
  categories: IndustryCategory[];
}) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.4 });
  const [filter, setFilter] = useState<IndustryCategory | "All">("All");

  const shown = filter === "All" ? industries : industries.filter((i) => i.category === filter);
  const also = filter === "All" ? others : others.filter((o) => o.category === filter);

  return (
    <DarkPanel id="all-industries" className="scroll-mt-20">
      <div ref={ref} className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <Eyebrow on={on} still={still} tone="dark">
            Who we build for
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] sm:text-[3.8rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[<>Different industries.</>, <span key="m" className="italic text-orange-bright">Same obsession.</span>]}
            />
          </h2>
        </div>
        <motion.p className="max-w-[26rem] text-[1rem] leading-relaxed text-white/60 lg:justify-self-end" {...riseProps(on, still, 0.4)}>
          The markets we work in most, each with its own page on the problems we see and what we build.
        </motion.p>
      </div>

      {/* category filter */}
      <motion.div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category" {...riseProps(on, still, 0.5)}>
        {(["All", ...categories] as const).map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(c)}
              className={`relative rounded-full px-4 py-2 text-[0.82rem] transition-colors duration-300 ${active ? "text-ink" : "text-white/60 hover:text-white"}`}
            >
              {active && (
                <motion.span
                  layoutId="industry-filter"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {!active && <span className="absolute inset-0 rounded-full border border-white/10" />}
              <span className="relative">{c}</span>
            </button>
          );
        })}
      </motion.div>

      <motion.div layout={!still} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((ind) => (
            <IndustryCard key={ind.slug} ind={ind} still={still} />
          ))}
        </AnimatePresence>
      </motion.div>

      {also.length > 0 && (
        <motion.div layout={!still} className="mt-10 border-t border-white/10 pt-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/45">Also active in</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {also.map((o) => (
              <span key={o.slug} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.82rem] text-white/65">
                {o.name}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </DarkPanel>
  );
}

/* --------------------------------------------------------- industry lens */

export function IndustryLens({ industries }: { industries: IndustryCardData[] }) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  const [active, setActive] = useState(0);
  const ind = industries[active];
  const Icon = icons[ind.slug] ?? Building2;
  const Scene = scenes[ind.slug];
  const [demo, setDemo] = useState(false);
  const [pointer, setPointer] = useState(false);

  useEffect(() => {
    if (!on || still) return;
    const t = setInterval(() => setDemo((d) => !d), 2600);
    return () => clearInterval(t);
  }, [on, still, active]);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow on={on} still={still}>
              The same question, asked differently
            </Eyebrow>
            <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.8rem]" style={serif}>
              <MaskLines
                on={on}
                still={still}
                lines={[
                  <>Same fundamentals.</>,
                  <>
                    Different <span className="italic text-orange">problems.</span>
                  </>,
                ]}
              />
            </h2>
          </div>
          <motion.p className="max-w-[26rem] text-[1rem] leading-relaxed text-ink/60 lg:justify-self-end" {...riseProps(on, still, 0.4)}>
            Pick an industry to see what usually gets in the way, and what we build to fix it.
          </motion.p>
        </div>

        <motion.div className="mt-12 grid gap-4 lg:grid-cols-[260px_1fr]" {...riseProps(on, still, 0.5)}>
          {/* picker: a scrolling row on mobile, a list on desktop */}
          <div className="-mx-5 overflow-x-auto px-5 lg:mx-0 lg:overflow-visible lg:px-0" role="tablist" aria-label="Industries">
            <div className="flex gap-2 lg:flex-col lg:gap-1">
              {industries.map((it, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={it.slug}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActive(i);
                      setDemo(false);
                    }}
                    className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-left text-[0.88rem] transition-colors duration-300 lg:rounded-xl ${
                      isActive ? "text-white" : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="lens-pill"
                        className="absolute inset-0 rounded-full bg-ink lg:rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative">{it.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-[28px] bg-ink p-6 text-white sm:p-10" style={{ perspective: 1200 }}>
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[90px]" style={{ backgroundColor: `${accentHex(ind.accent)}40` }} />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={ind.slug}
                className="relative"
                initial={still ? false : { opacity: 0, rotateY: -12, x: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, rotateY: 0, x: 0, filter: "blur(0px)" }}
                exit={still ? undefined : { opacity: 0, rotateY: 12, x: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                      <Icon className="h-5 w-5" style={{ color: ind.accent === "blue" ? "#2563eb" : "#ea580c" }} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[1.9rem] leading-tight sm:text-[2.3rem]" style={serif}>
                        {ind.name}
                      </h3>
                      <p className="text-[0.85rem] text-white/50">{ind.shortDescription}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid items-center gap-10 xl:grid-cols-[1fr_1.05fr]">
                  <div className="space-y-7">
                  <div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-orange-bright">What gets in the way</p>
                    <ul className="mt-4 space-y-3">
                      {ind.challenges.slice(0, 3).map((c, i) => (
                        <motion.li
                          key={c}
                          className="flex gap-3 text-[0.9rem] leading-relaxed text-white/70"
                          initial={still ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, ease: EASE, delay: 0.15 + i * 0.07 }}
                        >
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-600/20 text-orange-bright">
                            <Minus className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                          {c}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-blue-bright">What we build</p>
                    <ul className="mt-4 space-y-3">
                      {ind.solutions.slice(0, 3).map((s, i) => (
                        <motion.li
                          key={s}
                          className="flex gap-3 text-[0.9rem] leading-relaxed text-white/85"
                          initial={still ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, ease: EASE, delay: 0.3 + i * 0.07 }}
                        >
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue">
                            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                          </span>
                          {s}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.85rem] font-medium text-ink transition-colors duration-300 hover:bg-white/90"
                >
                  More on {ind.name}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                  </div>

                  {/* a realistic interface from this industry, playing through its states */}
                  <motion.div
                    onMouseEnter={() => setPointer(true)}
                    onMouseLeave={() => setPointer(false)}
                    initial={still ? false : { opacity: 0, rotateY: -18, y: 20 }}
                    animate={{ opacity: 1, rotateY: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                    style={{ transformPerspective: 1000 }}
                  >
                    <div className="rounded-[20px] bg-white/[0.06] p-2 ring-1 ring-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                      <div className={`relative overflow-hidden rounded-[14px] bg-gradient-to-br ${sceneBackdrop[ind.slug] ?? "from-[#f5f5f3] to-white"}`}>
                        <SceneFrame>{Scene && <Scene on={on} hover={demo || pointer} still={still} />}</SceneFrame>
                      </div>
                    </div>
                    <p className="mt-3 flex items-center gap-2 text-[0.72rem] text-white/35">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-bright" />
                      Illustrative interface · {ind.name}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
