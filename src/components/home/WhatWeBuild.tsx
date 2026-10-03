"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  Check,
  Gauge,
  Globe,
  Inbox,
  Lightbulb,
  Palette,
  PenLine,
  Repeat,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { DarkPanel, TiltCard } from "@/components/ui/Aesthetic";
import {
  AppsArt,
  AutomationArt,
  ClosingOrbit,
  CroArt,
  ShopifyArt,
  UiUxArt,
  WebsitesArt,
} from "./BuildIllustrations";

const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

type Art = (props: { on: boolean; still: boolean }) => ReactNode;

/* Common starting points for people who aren't sure what they need. */
const problems: { label: string; slug: string; icon: LucideIcon }[] = [
  { label: "Our website is slow or outdated", slug: "website", icon: Gauge },
  {
    label: "Visitors come, but don’t convert",
    slug: "conversion",
    icon: ShoppingCart,
  },
  {
    label: "Too much manual, repetitive work",
    slug: "automation",
    icon: Repeat,
  },
  { label: "Leads and enquiries slip through", slug: "leads", icon: Inbox },
  { label: "We have an app idea, but no plan", slug: "app", icon: Lightbulb },
  { label: "Our product feels hard to use", slug: "ux", icon: Palette },
];

/* Technologies named on the service pages (no unverified claims). */
const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "React Native",
  "Swift",
  "Kotlin",
  "Shopify Liquid",
  "Shopify Hydrogen",
  "OpenAI & Anthropic APIs",
  "Python",
  "Figma",
];

/* What the header "terminal" cycles through while it builds. */
const builds = [
  "websites",
  "apps",
  "stores",
  "automations",
  "interfaces",
  "funnels",
];

type Item = {
  n: string;
  title: string;
  tagline: string;
  body: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
  href: string;
  Art: Art;
  span: string;
  wide?: boolean;
};

// Bento layout on large screens: 4+2 / 2+4 / 3+3 columns of a 6-column grid.
const items: Item[] = [
  {
    n: "01",
    title: "Websites",
    tagline: "Your website should pull its weight.",
    body: "Websites designed to communicate clearly, load quickly and give your business somewhere useful to go.",
    tags: ["Strategy", "UX/UI", "Next.js", "SEO"],
    icon: Globe,
    color: "#3b82f6",
    href: "/services/website-development",
    Art: WebsitesArt,
    span: "md:col-span-2 lg:col-span-4",
    wide: true,
  },
  {
    n: "02",
    title: "Apps",
    tagline: "Got an app idea? Let’s make it usable.",
    body: "From product thinking to polished interfaces and development, we turn app ideas into experiences people actually want to use.",
    tags: ["Product", "UX/UI", "React Native", "iOS", "Android"],
    icon: Smartphone,
    color: "#60a5fa",
    href: "/services/mobile-app-development",
    Art: AppsArt,
    span: "lg:col-span-2",
  },
  {
    n: "03",
    title: "Shopify",
    tagline: "Make buying the easiest part.",
    body: "Shopify stores, custom features and optimisation designed around the people who actually buy from you.",
    tags: ["Shopify", "Theme Dev", "CRO", "Apps"],
    icon: ShoppingBag,
    color: "#ff6b35",
    href: "/services/shopify-development",
    Art: ShopifyArt,
    span: "lg:col-span-2",
  },
  {
    n: "04",
    title: "AI & Automation",
    tagline: "Let the machines handle the boring stuff.",
    body: "Connect your tools, automate repetitive workflows and put AI to work where it actually saves time.",
    tags: ["Automation", "APIs", "Integrations"],
    icon: Sparkles,
    color: "#a78bfa",
    href: "/services/ai-automation",
    Art: AutomationArt,
    span: "md:col-span-2 lg:col-span-4",
    wide: true,
  },
  {
    n: "05",
    title: "UI/UX",
    tagline: "Make complicated things feel simple.",
    body: "Interfaces, product experiences and design systems that make digital products easier to understand and use.",
    tags: ["Research", "Wireframes", "Design Systems"],
    icon: PenLine,
    color: "#3b82f6",
    href: "/services/ui-ux-design",
    Art: UiUxArt,
    span: "lg:col-span-3",
  },
  {
    n: "06",
    title: "CRO",
    tagline: "More of the right people taking action.",
    body: "Find the friction, test what changes it and turn more of your existing traffic into meaningful actions.",
    tags: ["UX Audit", "Analytics", "A/B Testing", "Conversion"],
    icon: ChartColumn,
    color: "#ff6b35",
    href: "/services/cro-audit",
    Art: CroArt,
    span: "lg:col-span-3",
  },
];

/* Illustrations are drawn on a fixed 368×150 canvas; scale the whole canvas
   to the available width so their absolutely positioned parts stay aligned. */
const ART_W = 368;
const ART_H = 150;

export function ScaledArt({
  children,
  max = 1.15,
}: {
  children: ReactNode;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(max, el.clientWidth / ART_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [max]);

  return (
    <div
      ref={ref}
      className="relative w-full min-w-0"
      style={{ height: ART_H * scale }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: ART_W,
          height: ART_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Eyebrow({
  children,
  on,
  still,
  delay = 0,
}: {
  children: ReactNode;
  on: boolean;
  still: boolean;
  delay?: number;
}) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/70">
      <motion.span
        className="h-px w-6 origin-left bg-orange-500"
        initial={still ? false : { scaleX: 0 }}
        animate={on ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay }}
      />
      {children}
    </p>
  );
}

/* A small "build terminal": cycles through what we build with a typing
   effect and a progress bar, then ticks off the stages. */
function BuildTerminal({ on, still }: { on: boolean; still: boolean }) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(still ? builds[0] : "");

  useEffect(() => {
    if (!on || still) return;
    const word = builds[index];
    if (typed.length < word.length) {
      const t = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 70);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setTyped("");
      setIndex((i) => (i + 1) % builds.length);
    }, 2200);
    return () => clearTimeout(t);
  }, [on, still, typed, index]);

  const stages = ["design", "engineering", "launch"];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-6">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 font-mono text-[0.7rem] text-white/35">
          zspace-labs — build
        </span>
      </div>
      <p className="mt-5 font-mono text-[0.95rem] text-white/80 sm:text-[1.05rem]">
        <span className="text-orange-bright">$</span> build{" "}
        <span className="text-white">{typed}</span>
        <span className="ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] animate-pulse bg-blue-bright" />
      </p>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          key={index}
          className="h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-bright to-blue-bright"
          initial={{ width: still ? "100%" : "0%" }}
          animate={on ? { width: "100%" } : {}}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
      </div>
      <ul className="mt-5 grid grid-cols-3 gap-2">
        {stages.map((stage, i) => (
          <motion.li
            key={stage}
            className="flex items-center gap-1.5 font-mono text-[0.72rem] text-white/55"
            initial={still ? false : { opacity: 0, y: 6 }}
            animate={on ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.25 }}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue/80">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </span>
            {stage}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function Marquee({ still }: { still: boolean }) {
  const row = [...stack, ...stack];
  return (
    <div
      className="relative overflow-hidden py-1"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <motion.ul
        className="flex w-max gap-3"
        animate={still ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        {row.map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[0.75rem] text-white/60"
          >
            {tech}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

function ServiceCard({
  item,
  index,
  still,
}: {
  item: Item;
  index: number;
  still: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.25 });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      className={`relative ${item.span}`}
      initial={
        still ? false : { opacity: 0, y: 60, rotateX: 18, filter: "blur(8px)" }
      }
      animate={on ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, ease: EASE, delay: (index % 2) * 0.12 }}
      style={{ transformPerspective: 1200, transformOrigin: "50% 100%" }}
    >
      <TiltCard tone="dark" glow={item.color} max={5}>
        <Link
          href={item.href}
          className="group relative flex h-full flex-col p-5 sm:p-6"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-25 blur-[60px] transition-opacity duration-700 group-hover:opacity-60"
            style={{ backgroundColor: item.color }}
          />

          <div
            className={`relative flex h-full flex-col gap-6 ${item.wide ? "lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:items-center lg:gap-8" : ""}`}
          >
            {/* text */}
            <div
              className={`flex flex-col ${item.wide ? "lg:order-1" : "order-2"}`}
            >
              <div className="flex items-center justify-between">
                <motion.span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
                  initial={still ? false : { scale: 0.5, opacity: 0 }}
                  animate={on ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                    delay: 0.15,
                  }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: item.color }}
                    strokeWidth={1.7}
                  />
                </motion.span>
                <span className="font-mono text-[0.75rem] text-white/30">
                  {item.n}
                </span>
              </div>
              <h3
                className="mt-5 text-[1.9rem] leading-none tracking-[-0.01em] text-white sm:text-[2.1rem]"
                style={serif}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-[0.92rem] font-medium text-white/85">
                {item.tagline}
              </p>
              <p className="mt-2 max-w-[30rem] text-[0.85rem] leading-relaxed text-white/50">
                {item.body}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {item.tags.map((t, i) => (
                  <motion.span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] text-white/55 transition-colors duration-300 group-hover:border-white/20"
                    initial={still ? false : { opacity: 0, y: 8 }}
                    animate={on ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.45,
                      ease: EASE,
                      delay: 0.35 + i * 0.06,
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
                <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/60 transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-ink">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* illustration, shown as a light "screen" inside the dark card */}
            <div className={`relative ${item.wide ? "lg:order-2" : "order-1"}`}>
              <div className="rounded-[18px] bg-white/[0.06] p-1.5 ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
                <ScaledArt max={item.wide ? 1.6 : 1.15}>
                  <item.Art on={on} still={still} />
                </ScaledArt>
              </div>
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

export function WhatWeBuild() {
  const reduced = useReducedMotion();
  const still = !!reduced;
  const headRef = useRef<HTMLDivElement>(null);
  const headOn = useInView(headRef, { once: true, amount: 0.3 });
  const footRef = useRef<HTMLDivElement>(null);
  const footOn = useInView(footRef, { once: true, amount: 0.4 });

  const { scrollYProgress: footP } = useScroll({
    target: footRef,
    offset: ["start end", "end end"],
  });
  const orbitRot = useTransform(footP, [0, 1], still ? [0, 0] : [-30, 12]);
  const orbitScale = useTransform(footP, [0, 1], still ? [1, 1] : [0.75, 1]);

  const rise = (on: boolean, delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 24 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.85, ease: EASE, delay },
        };

  return (
    <DarkPanel>
      <div className="relative">
        {/* header */}
        <div
          ref={headRef}
          className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16"
        >
          <div>
            <Eyebrow on={headOn} still={still}>
              What we build
            </Eyebrow>
            <h2
              className="mt-6 text-[3rem] leading-[0.95] tracking-[-0.025em] sm:text-[4.2rem] lg:text-[4.8rem]"
              style={serif}
            >
              {[
                <>Things we like</>,
                <>
                  <span className="italic text-orange-bright">building.</span>
                </>,
              ].map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={still ? false : { y: "105%", rotate: 2 }}
                    animate={headOn ? { y: 0, rotate: 0 } : {}}
                    transition={{
                      duration: 1,
                      ease: EASE,
                      delay: 0.1 + i * 0.14,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p
              className="mt-6 max-w-[28rem] text-[1.02rem] leading-relaxed text-white/60"
              {...rise(headOn, 0.4)}
            >
              Digital products, experiences and systems that make businesses
              easier to run and customers happier to use.
            </motion.p>
          </div>
          <motion.div {...rise(headOn, 0.3)}>
            <BuildTerminal on={headOn} still={still} />
          </motion.div>
        </div>

        {/* stack marquee */}
        <motion.div className="mt-14" {...rise(headOn, 0.6)}>
          <Marquee still={still} />
        </motion.div>

        {/* bento grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {items.map((item, i) => (
            <ServiceCard key={item.n} item={item} index={i} still={still} />
          ))}
        </div>

        {/* closing */}
        <div ref={footRef} className="relative mt-4">
          <motion.div
            className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-12"
            initial={still ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={footOn ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-600/20 blur-[90px]"
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-20 hidden opacity-30 lg:block"
              style={{ rotate: orbitRot, scale: orbitScale }}
            >
              <ClosingOrbit on={footOn} still={still} />
            </motion.div>

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
              <div>
                <Eyebrow on={footOn} still={still} delay={0.2}>
                  Not sure what you need yet?
                </Eyebrow>
                <h3
                  className="mt-5 text-[2.8rem] leading-[0.95] tracking-[-0.02em] sm:text-[3.6rem]"
                  style={serif}
                >
                  <span className="block overflow-hidden pb-[0.08em]">
                    <motion.span
                      className="block"
                      initial={still ? false : { y: "105%" }}
                      animate={footOn ? { y: 0 } : {}}
                      transition={{ duration: 1, ease: EASE, delay: 0.25 }}
                    >
                      That&rsquo;s{" "}
                      <span className="italic text-orange-bright">okay.</span>
                    </motion.span>
                  </span>
                </h3>
                <motion.p
                  className="mt-5 max-w-[26rem] text-[1rem] leading-relaxed text-white/65"
                  {...rise(footOn, 0.35)}
                >
                  Tell us what&rsquo;s not working. We&rsquo;ll help figure out
                  what to build, and just as importantly, what not to.
                </motion.p>
                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
                  {...rise(footOn, 0.45)}
                >
                  <Link
                    href="/contact?src=%2F%23not-sure"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.85rem] font-medium text-ink transition-colors duration-300 hover:bg-white/90"
                  >
                    Start a Conversation
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="mailto:connect@zspace.in"
                    className="text-[0.85rem] text-white/55 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white/60"
                  >
                    or email connect@zspace.in
                  </a>
                </motion.div>
              </div>

              <div>
                <motion.p
                  className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/45"
                  {...rise(footOn, 0.3)}
                >
                  Sound familiar?
                </motion.p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {problems.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <motion.li
                        key={p.label}
                        initial={still ? false : { opacity: 0, y: 14 }}
                        animate={footOn ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.55,
                          ease: EASE,
                          delay: 0.35 + i * 0.06,
                        }}
                      >
                        <Link
                          href={`/contact?src=${encodeURIComponent(`/#not-sure-${p.slug}`)}`}
                          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors duration-300 hover:border-orange-500/60 hover:bg-white/[0.08]"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-white/80 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                          </span>
                          <span className="text-[0.9rem] leading-snug text-white/85">
                            {p.label}
                          </span>
                          <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-orange-bright" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.ol
                  className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6"
                  {...rise(footOn, 0.75)}
                >
                  {[
                    "You describe the problem",
                    "We map the options",
                    "You get a clear plan",
                  ].map((step, i) => (
                    <li key={step}>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-semibold ${i === 2 ? "bg-blue text-white" : "bg-white/10 text-white/80"}`}
                      >
                        {i + 1}
                      </span>
                      <p className="mt-2.5 text-[0.8rem] leading-snug text-white/60">
                        {step}
                      </p>
                    </li>
                  ))}
                </motion.ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DarkPanel>
  );
}
