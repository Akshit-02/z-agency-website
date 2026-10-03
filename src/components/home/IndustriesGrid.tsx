"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Atmosphere, TiltCard } from "@/components/ui/Aesthetic";
import { industryIcons, cardSerif, type IndustryVisualKey } from "./IndustryCardArt";
import { SceneFrame, sceneBackdrop, scenes } from "@/components/industries/IndustryScenes";
import { BlogScene } from "@/components/blog/BlogScene";
import type { BlogSceneData } from "@/lib/blog-scenes";

const EASE = [0.25, 1, 0.5, 1] as const;

const items: {
  key: IndustryVisualKey;
  name: string;
  tagline: string;
  href: string;
  glow: string;
  tint: string;
}[] = [
  {
    key: "d2c",
    name: "D2C & E-commerce",
    tagline: "Stores, commerce experiences and conversion.",
    href: "/industries/d2c-consumer",
    glow: "#2563eb",
    tint: "#eaf1ff",
  },
  {
    key: "real-estate",
    name: "Real Estate",
    tagline: "Property websites, platforms and lead generation.",
    href: "/industries/real-estate",
    glow: "#ea580c",
    tint: "#fdeee7",
  },
  {
    key: "beauty",
    name: "Beauty & Personal Care",
    tagline: "Brand experiences, commerce and customer journeys.",
    href: "/industries/beauty-personal-care",
    glow: "#e94f7a",
    tint: "#fce8ee",
  },
  {
    key: "fashion",
    name: "Fashion",
    tagline: "Digital storefronts and discovery-led experiences.",
    href: "/industries/fashion-apparel",
    glow: "#7c3aed",
    tint: "#f0eafd",
  },
  {
    key: "fintech",
    name: "Fintech",
    tagline: "Clear digital experiences for complex financial products.",
    href: "/industries/fintech",
    glow: "#2563eb",
    tint: "#eaf1ff",
  },
  {
    key: "saas",
    name: "SaaS & Startups",
    tagline: "Products, platforms and MVPs.",
    href: "/industries/saas-technology",
    glow: "#10b981",
    tint: "#e6f8f1",
  },
  {
    key: "manufacturing",
    name: "Manufacturing",
    tagline: "Digital systems that simplify complex businesses.",
    href: "/industries/manufacturing",
    glow: "#7c3aed",
    tint: "#f0eafd",
  },
  {
    key: "services",
    name: "Professional Services",
    tagline: "Websites and digital experiences that generate opportunities.",
    href: "/industries",
    glow: "#2563eb",
    tint: "#eaf1ff",
  },
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

// the realistic industry scenes, matched to each card
const sceneSlug: Partial<Record<IndustryVisualKey, string>> = {
  d2c: "d2c-consumer",
  "real-estate": "real-estate",
  beauty: "beauty-personal-care",
  fashion: "fashion-apparel",
  fintech: "fintech",
  saas: "saas-technology",
  manufacturing: "manufacturing",
};

const SERVICES_SCENE: BlogSceneData = {
  kind: "crm",
  label: "New enquiries this week",
  items: ["Proposal follow-up sent"],
  seed: 6,
};

function Card({ item, index, still }: { item: (typeof items)[number]; index: number; still: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  const [hover, setHover] = useState(false);
  const Icon = industryIcons[item.key];
  const slug = sceneSlug[item.key];
  const Scene = slug ? scenes[slug] : undefined;

  return (
    <motion.div
      className="h-full"
      initial={still ? false : { opacity: 0, y: 50, rotateX: 22, filter: "blur(6px)" }}
      animate={on ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, ease: EASE, delay: (index % 3) * 0.1 }}
      style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
    >
      <TiltCard glow={item.glow} max={7} className="rounded-2xl">
        <Link
          ref={ref}
          href={item.href}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="group relative flex h-full flex-col p-3"
        >
          {/* a realistic screen from the industry */}
          <div className="overflow-hidden rounded-[14px] ring-1 ring-ink/[0.06] transition-transform duration-700 ease-out group-hover:-translate-y-1">
            {Scene && slug ? (
              <div className={`bg-gradient-to-br ${sceneBackdrop[slug] ?? "from-[#f5f5f3] to-white"}`}>
                <SceneFrame>
                  <Scene on={on} hover={hover} still={still} />
                </SceneFrame>
              </div>
            ) : (
              <div className="relative aspect-[2/1]">
                <BlogScene scene={SERVICES_SCENE} />
              </div>
            )}
          </div>

          <div className="flex items-start gap-3 px-2 pb-2 pt-4">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
              style={{ background: item.tint }}
            >
              <Icon className="h-4 w-4" style={{ color: item.glow }} strokeWidth={1.7} />
            </span>
            <div className="min-w-0 flex-1">
              <h3
                className="text-[1.02rem] font-medium tracking-tight transition-colors duration-300"
                style={{ color: hover ? item.glow : "#0b0c0e" }}
              >
                {item.name}
              </h3>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/55">{item.tagline}</p>
            </div>
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-ink/30 transition-all duration-300 group-hover:translate-x-0 group-hover:text-ink" />
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

const MORE = ["Healthcare & HealthTech", "Travel & Hospitality", "Automotive & Mobility", "Education & EdTech", "Ecommerce", "Logistics"];

export function IndustriesGrid() {
  const reduced = useReducedMotion();
  const still = !!reduced;
  const headRef = useRef<HTMLDivElement>(null);
  const headOn = useInView(headRef, { once: true, amount: 0.4 });
  const sideRef = useRef<HTMLDivElement>(null);
  const sideOn = useInView(sideRef, { once: true, amount: 0.5 });

  const rise = (on: boolean, delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 20 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div className="relative mx-auto max-w-[1180px]">
        <div ref={headRef} className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow on={headOn} still={still}>
              Who we build for
            </Eyebrow>
            <h2
              className="mt-6 max-w-[34rem] text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.8rem]"
              style={cardSerif}
            >
              {["Different industries.", "Different problems."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={still ? false : { y: "105%", rotate: 2 }}
                    animate={headOn ? { y: 0, rotate: 0 } : {}}
                    transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.12 }}
                  >
                    {i === 1 ? (
                      <>
                        Different <span className="italic text-orange">problems.</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p className="mt-5 max-w-[36rem] text-[1rem] leading-relaxed text-ink/55" {...rise(headOn, 0.4)}>
              A property platform doesn&rsquo;t need the same digital experience as a D2C brand. We adapt the product,
              technology and experience around how your business actually works.
            </motion.p>
          </div>

          <motion.div
            ref={sideRef}
            className="relative self-end overflow-hidden rounded-[24px] bg-ink p-7 text-white lg:w-[300px]"
            initial={still ? false : { opacity: 0, y: 30, rotateY: -20 }}
            animate={sideOn ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: EASE }}
            style={{ transformPerspective: 1000 }}
          >
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-600/30 blur-[60px]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "18px 18px" }}
            />
            <div className="relative">
              <p className="text-[0.82rem] text-white/55">Not seeing your industry?</p>
              <h3 className="mt-1 text-[2rem] leading-tight tracking-tight" style={cardSerif}>
                That&rsquo;s <span className="italic text-orange-bright">okay.</span>
              </h3>
              <p className="mt-1 text-[0.85rem] text-white/55">Tell us what you&rsquo;re building.</p>
              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.85rem] font-medium text-ink transition-colors duration-300 hover:bg-white/90"
              >
                Start a Project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={item.key} item={item} index={i} still={still} />
          ))}

          {/* closing cell: more industries */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white"
            initial={still ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-600/30 blur-[70px]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "18px 18px" }}
            />
            <div className="relative flex h-full flex-col">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/50">And more</p>
              <p className="mt-2 text-[1.5rem] leading-tight" style={cardSerif}>
                Different industries. <span className="italic text-orange-bright">Same obsession.</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {MORE.map((m) => (
                  <span key={m} className="rounded-full border border-white/15 px-2.5 py-1 text-[0.72rem] text-white/70">
                    {m}
                  </span>
                ))}
              </div>
              <Link
                href="/industries"
                className="group mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[0.85rem] font-medium text-white"
              >
                See all industries
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-ink">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
