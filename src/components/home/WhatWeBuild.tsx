"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, ChartColumn, Gauge, Globe, Inbox, Lightbulb, Palette, PenLine, Repeat, ShoppingBag, ShoppingCart, Smartphone, Sparkles, type LucideIcon } from "lucide-react";
import {
  AppsArt,
  AutomationArt,
  ClosingOrbit,
  CroArt,
  HeaderArt,
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
  { label: "Visitors come, but don’t convert", slug: "conversion", icon: ShoppingCart },
  { label: "Too much manual, repetitive work", slug: "automation", icon: Repeat },
  { label: "Leads and enquiries slip through", slug: "leads", icon: Inbox },
  { label: "We have an app idea, but no plan", slug: "app", icon: Lightbulb },
  { label: "Our product feels hard to use", slug: "ux", icon: Palette },
];

const items: {
  n: string;
  title: string;
  tagline: string;
  body: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
  href: string;
  Art: Art;
}[] = [
  {
    n: "01",
    title: "Websites",
    tagline: "Your website should pull its weight.",
    body: "Websites designed to communicate clearly, load quickly and give your business somewhere useful to go.",
    tags: ["Strategy", "UX/UI", "Next.js", "SEO"],
    icon: Globe,
    color: "#2563eb",
    href: "/services/website-development",
    Art: WebsitesArt,
  },
  {
    n: "02",
    title: "Apps",
    tagline: "Got an app idea? Let’s make it usable.",
    body: "From product thinking to polished interfaces and development, we turn app ideas into experiences people actually want to use.",
    tags: ["Product", "UX/UI", "React Native", "iOS", "Android"],
    icon: Smartphone,
    color: "#1d3fbf",
    href: "/services/mobile-app-development",
    Art: AppsArt,
  },
  {
    n: "03",
    title: "Shopify",
    tagline: "Make buying the easiest part.",
    body: "Shopify stores, custom features and optimisation designed around the people who actually buy from you.",
    tags: ["Shopify", "Theme Dev", "CRO", "Apps"],
    icon: ShoppingBag,
    color: "#0b0c0e",
    href: "/services/shopify-development",
    Art: ShopifyArt,
  },
  {
    n: "04",
    title: "AI & Automation",
    tagline: "Let the machines handle the boring stuff.",
    body: "Connect your tools, automate repetitive workflows and put AI to work where it actually saves time.",
    tags: ["Automation", "APIs", "Integrations"],
    icon: Sparkles,
    color: "#7c3aed",
    href: "/services/ai-automation",
    Art: AutomationArt,
  },
  {
    n: "05",
    title: "UI/UX",
    tagline: "Make complicated things feel simple.",
    body: "Interfaces, product experiences and design systems that make digital products easier to understand and use.",
    tags: ["Research", "Wireframes", "Design Systems"],
    icon: PenLine,
    color: "#2563eb",
    href: "/services/ui-ux-design",
    Art: UiUxArt,
  },
  {
    n: "06",
    title: "CRO",
    tagline: "More of the right people taking action.",
    body: "Find the friction, test what changes it and turn more of your existing traffic into meaningful actions.",
    tags: ["UX Audit", "Analytics", "A/B Testing", "Conversion"],
    icon: ChartColumn,
    color: "#2563eb",
    href: "/services/cro-audit",
    Art: CroArt,
  },
];

function Eyebrow({ children, on, still }: { children: ReactNode; on: boolean; still: boolean }) {
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

function Row({ item, index, still }: { item: (typeof items)[number]; index: number; still: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [26, -26]);
  // scroll choreography: the row in focus is sharp, neighbours recede; art tilts in 3D; icon turns
  const focusOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], still ? [1, 1, 1, 1] : [0.2, 1, 1, 0.2]);
  const focusScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], still ? [1, 1, 1, 1] : [0.95, 1, 1, 0.95]);
  const artRotX = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [16, -16]);
  const artRotY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [-12, 12]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [-140, 140]);
  const Icon = item.icon;

  const rise = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 26 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.85, ease: EASE, delay },
        };

  return (
    <motion.div ref={ref} className="relative" style={{ opacity: focusOpacity, scale: focusScale }}>
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-ink/10"
        initial={still ? false : { scaleX: 0 }}
        animate={on ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <Link
        href={item.href}
        className="group grid gap-x-6 gap-y-6 py-9 lg:grid-cols-[3rem_5.5rem_minmax(0,1fr)_2rem_368px] lg:items-center lg:py-7"
      >
        <motion.span className="hidden text-[0.95rem] text-ink/45 lg:block" {...rise(0)}>
          {item.n}
        </motion.span>

        <motion.span
          className="hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-[0_10px_28px_-10px_rgba(11,12,14,0.22),0_0_0_1px_rgba(11,12,14,0.03)] transition-transform duration-500 group-hover:scale-110 lg:flex"
          initial={still ? false : { opacity: 0, scale: 0.6 }}
          animate={on ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.1 }}
        >
          <motion.span style={{ rotate: iconRotate }} className="flex">
            <Icon className="h-[22px] w-[22px]" style={{ color: item.color }} strokeWidth={1.6} />
          </motion.span>
        </motion.span>

        <div>
          <motion.div className="mb-3 flex items-center gap-3 lg:hidden" {...rise(0)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_10px_28px_-10px_rgba(11,12,14,0.22)]">
              <Icon className="h-5 w-5" style={{ color: item.color }} strokeWidth={1.6} />
            </span>
            <span className="text-[0.85rem] text-ink/45">{item.n}</span>
          </motion.div>
          <motion.h3
            className="text-[2rem] leading-none tracking-[-0.01em] text-ink"
            style={serif}
            {...rise(0.05)}
          >
            <span className="bg-gradient-to-r from-ink to-ink bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {item.title}
            </span>
          </motion.h3>
          <motion.p className="mt-2.5 text-[0.9rem] font-medium text-ink" {...rise(0.12)}>
            {item.tagline}
          </motion.p>
          <motion.p className="mt-2.5 max-w-[30rem] text-[0.85rem] leading-relaxed text-ink/55" {...rise(0.18)}>
            {item.body}
          </motion.p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((t, i) => (
              <motion.li
                key={t}
                className="rounded-full border border-ink/10 px-3 py-1 text-[0.7rem] text-ink/55 transition-colors duration-300 group-hover:border-ink/20"
                initial={still ? false : { opacity: 0, y: 10, scale: 0.9 }}
                animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.07 }}
              >
                {t}
              </motion.li>
            ))}
          </ul>
        </div>

        <ArrowRight className="hidden h-4 w-4 text-ink/60 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-ink lg:block" />

        <motion.div
          className="transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          style={{ y: artY, rotateX: artRotX, rotateY: artRotY, transformPerspective: 900 }}
          initial={still ? false : { opacity: 0, x: 40 }}
          animate={on ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95, ease: EASE, delay: 0.2 + (index % 2) * 0.05 }}
        >
          <item.Art on={on} still={still} />
        </motion.div>
      </Link>
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

  // header art drifts and tilts; closing orbit turns; a progress rail follows the list
  const { scrollYProgress: headP } = useScroll({ target: headRef, offset: ["start end", "end start"] });
  const headArtY = useTransform(headP, [0, 1], still ? [0, 0] : [60, -60]);
  const headArtRot = useTransform(headP, [0, 1], still ? [0, 0] : [-5, 5]);
  const headArtScale = useTransform(headP, [0, 0.5, 1], still ? [1, 1, 1] : [0.9, 1, 1.06]);
  const { scrollYProgress: footP } = useScroll({ target: footRef, offset: ["start end", "end end"] });
  const orbitRot = useTransform(footP, [0, 1], still ? [0, 0] : [-30, 12]);
  const orbitScale = useTransform(footP, [0, 1], still ? [1, 1] : [0.75, 1]);
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: railP } = useScroll({ target: listRef, offset: ["start 0.6", "end 0.6"] });
  const railDot = useTransform(railP, (v) => `${v * 100}%`);

  const rise = (on: boolean, delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 24 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.85, ease: EASE, delay },
        };

  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] px-5 pb-16 pt-20 sm:px-8 lg:pb-20 lg:pt-28">
      <div className="mx-auto max-w-[1180px]">
        {/* header */}
        <div ref={headRef} className="grid items-center gap-10 pb-14 lg:grid-cols-[1fr_540px]">
          <div>
            <Eyebrow on={headOn} still={still}>
              What we build
            </Eyebrow>
            <h2 className="mt-6 text-[3rem] leading-[1.03] tracking-[-0.025em] text-ink sm:text-[3.8rem]" style={serif}>
              {["Things we like", "building."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.1em]">
                  <motion.span
                    className="block"
                    initial={still ? false : { y: "105%", rotate: 2 }}
                    animate={headOn ? { y: 0, rotate: 0 } : {}}
                    transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.14 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p className="mt-6 max-w-[22rem] text-[1rem] leading-relaxed text-ink/55" {...rise(headOn, 0.4)}>
              Digital products, experiences and systems that make businesses easier to run and customers happier to use.
            </motion.p>
          </div>
          <motion.div className="hidden lg:block" style={{ y: headArtY, rotate: headArtRot, scale: headArtScale }}>
            <HeaderArt on={headOn} still={still} />
          </motion.div>
        </div>

        {/* rows */}
        <div ref={listRef} className="relative">
          <div aria-hidden className="absolute -left-8 bottom-0 top-0 hidden w-px bg-ink/10 xl:block">
            <motion.span className="absolute inset-0 origin-top bg-gradient-to-b from-orange-600 to-blue" style={{ scaleY: railP }} />
            <motion.span
              className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-orange-600 shadow-[0_0_14px_3px_rgba(234,88,12,0.45)]"
              style={{ top: railDot }}
            />
          </div>
          {items.map((item, i) => (
            <Row key={item.n} item={item} index={i} still={still} />
          ))}
        </div>

        {/* closing */}
        <div ref={footRef} className="relative mt-6">
          <motion.div
            className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14"
            initial={still ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={footOn ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* atmosphere: soft brand glows, a faint dot grid and the turning orbit */}
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-600/25 blur-[90px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-28 right-[-60px] h-80 w-80 rounded-full bg-blue/30 blur-[100px]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
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
                <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/70">
                  <motion.span
                    className="h-px w-6 origin-left bg-orange-500"
                    initial={still ? false : { scaleX: 0 }}
                    animate={footOn ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                  />
                  Not sure what you need yet?
                </p>
                <h3 className="mt-5 text-[2.8rem] leading-[0.95] tracking-[-0.02em] sm:text-[3.6rem]" style={serif}>
                  <span className="block overflow-hidden pb-[0.08em]">
                    <motion.span
                      className="block"
                      initial={still ? false : { y: "105%" }}
                      animate={footOn ? { y: 0 } : {}}
                      transition={{ duration: 1, ease: EASE, delay: 0.25 }}
                    >
                      That&rsquo;s <span className="italic text-orange-bright">okay.</span>
                    </motion.span>
                  </span>
                </h3>
                <motion.p className="mt-5 max-w-[26rem] text-[1rem] leading-relaxed text-white/65" {...rise(footOn, 0.35)}>
                  Tell us what&rsquo;s not working. We&rsquo;ll help figure out what to build, and just as
                  importantly, what not to.
                </motion.p>
                <motion.div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" {...rise(footOn, 0.45)}>
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
                <motion.p className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/45" {...rise(footOn, 0.3)}>
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
                        transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.06 }}
                      >
                        <Link
                          href={`/contact?src=${encodeURIComponent(`/#not-sure-${p.slug}`)}`}
                          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors duration-300 hover:border-orange-500/60 hover:bg-white/[0.08]"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-white/80 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                          </span>
                          <span className="text-[0.9rem] leading-snug text-white/85">{p.label}</span>
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
                  {["You describe the problem", "We map the options", "You get a clear plan"].map((step, i) => (
                    <li key={step} className="relative">
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-semibold ${i === 2 ? "bg-blue text-white" : "bg-white/10 text-white/80"}`}>
                        {i + 1}
                      </span>
                      <p className="mt-2.5 text-[0.8rem] leading-snug text-white/60">{step}</p>
                    </li>
                  ))}
                </motion.ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
