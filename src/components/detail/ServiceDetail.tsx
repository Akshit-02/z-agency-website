"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Bell,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  Rocket,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";
import { Atmosphere, Eyebrow, MaskLines, TiltCard, riseProps, serif } from "@/components/ui/Aesthetic";
import { ScaledArt } from "@/components/home/WhatWeBuild";
import { AppsArt, AutomationArt, CroArt, ShopifyArt, UiUxArt, WebsitesArt } from "@/components/home/BuildIllustrations";
import {
  CardGrid,
  DetailHero,
  FaqBlock,
  HeroScreen,
  ProblemSolution,
  ProcessPanel,
  ReadingList,
  RelatedPanel,
  SplitIntro,
  accentTitle,
} from "./DetailKit";

type Art = (props: { on: boolean; still: boolean }) => ReactNode;

const artBySlug: Record<string, Art> = {
  "website-development": WebsitesArt,
  "mobile-app-development": AppsArt,
  "shopify-development": ShopifyArt,
  "ui-ux-design": UiUxArt,
  "ai-automation": AutomationArt,
  "cro-audit": CroArt,
};

export type ServiceDetailData = {
  slug: string;
  index: string;
  name: string;
  accent: "blue" | "orange";
  heroCopy: string;
  definition: { question: string; answer: string[] };
  whatWeDo: string[];
  problems: string[];
  audience: string[];
  useCases: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  deliverables: string[];
  technology: string[];
  whyZspace: string[];
  faq: { q: string; a: string }[];
  guides: { slug: string; title: string; category?: string }[];
  others: { slug: string; name: string; summary: string; accent: "blue" | "orange" }[];
  industries: { slug: string; name: string }[];
};

const BADGE = "w-[210px] rounded-2xl bg-white p-3.5 shadow-[0_24px_50px_-20px_rgba(11,12,14,0.45),0_0_0_1px_rgba(11,12,14,0.05)]";

/** A small, realistic card floating in front of the hero screen. */
function Badge({ slug }: { slug: string }) {
  switch (slug) {
    case "website-development":
      return (
        <div className={BADGE}>
          <div className="flex items-center justify-between">
            <span className="text-[0.72rem] font-semibold text-ink">Core Web Vitals</span>
            <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-[0.6rem] font-semibold text-[#15803d]">Passed</span>
          </div>
          {[
            ["LCP", "1.8 s", "86%"],
            ["INP", "120 ms", "78%"],
            ["CLS", "0.02", "92%"],
          ].map(([k, v, w]) => (
            <div key={k} className="mt-2.5">
              <div className="flex justify-between text-[0.62rem] text-ink/55">
                <span>{k}</span>
                <span className="font-semibold text-ink">{v}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-ink/[0.06]">
                <div className="h-full rounded-full bg-[#22c55e]" style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
      );
    case "mobile-app-development":
      return (
        <div className={`${BADGE} flex items-start gap-2.5`}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#ff6b35] to-[#c2410c] text-white">
            <Bell className="h-4 w-4" />
          </span>
          <div className="flex-1">
            <div className="flex justify-between text-[0.6rem] text-ink/45">
              <span>YOUR APP</span>
              <span>now</span>
            </div>
            <p className="mt-0.5 text-[0.74rem] font-semibold leading-tight text-ink">Your order is on its way</p>
            <p className="text-[0.64rem] text-ink/55">Tap to track the delivery live.</p>
          </div>
        </div>
      );
    case "shopify-development":
      return (
        <div className={BADGE}>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#dcfce7] text-[#15803d]">
              <ShoppingBag className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[0.72rem] font-semibold text-ink">New order #1042</p>
              <p className="text-[0.6rem] text-ink/50">2 items · Express shipping</p>
            </div>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-lg bg-ink/[0.03] px-2.5 py-1.5">
            <span className="text-[0.8rem] font-bold text-ink">$86.00</span>
            <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-[0.6rem] font-semibold text-[#15803d]">Paid</span>
          </div>
        </div>
      );
    case "ui-ux-design":
      return (
        <div className={BADGE}>
          <p className="text-[0.72rem] font-semibold text-ink">Design tokens</p>
          <div className="mt-2 flex gap-1.5">
            {["#0b0c0e", "#2563eb", "#ff6b35", "#eaf1ff", "#fdeee7"].map((c) => (
              <span key={c} className="h-6 w-6 rounded-md ring-1 ring-ink/10" style={{ background: c }} />
            ))}
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="text-[1.1rem] leading-none text-ink" style={serif}>
              Aa
            </span>
            <span className="rounded-md bg-ink px-2.5 py-1 text-[0.6rem] font-semibold text-white">Button</span>
            <span className="rounded-md border border-ink/15 px-2.5 py-1 text-[0.6rem] text-ink">Ghost</span>
          </div>
        </div>
      );
    case "ai-automation":
      return (
        <div className={BADGE}>
          <div className="flex items-center justify-between">
            <span className="text-[0.72rem] font-semibold text-ink">Workflow run</span>
            <span className="text-[0.6rem] text-ink/45">2.4 s</span>
          </div>
          {["Lead captured from form", "Enriched and scored", "CRM updated, email sent"].map((t) => (
            <p key={t} className="mt-2 flex items-center gap-1.5 text-[0.66rem] text-ink/70">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#16a34a]" />
              {t}
            </p>
          ))}
        </div>
      );
    default:
      return (
        <div className={BADGE}>
          <div className="flex items-center justify-between">
            <span className="text-[0.72rem] font-semibold text-ink">A/B test · Checkout</span>
            <span className="rounded-full bg-[#eaf1ff] px-2 py-0.5 text-[0.6rem] font-semibold text-[#2563eb]">Running</span>
          </div>
          {[
            ["Variant A", "42%"],
            ["Variant B", "68%"],
          ].map(([k, w], i) => (
            <div key={k} className="mt-2.5">
              <div className="flex justify-between text-[0.62rem] text-ink/55">
                <span>{k}</span>
                {i === 1 && <span className="font-semibold text-[#2563eb]">Leading</span>}
              </div>
              <div className="mt-1 h-2 rounded-full bg-ink/[0.06]">
                <div className={`h-full rounded-full ${i ? "bg-[#2563eb]" : "bg-ink/25"}`} style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
      );
  }
}

function Toolkit({ data }: { data: ServiceDetailData }) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto max-w-[1180px]">
        <Eyebrow on={on} still={still}>
          What you receive
        </Eyebrow>
        <h2 className="mt-6 text-[2.5rem] leading-[1.02] tracking-[-0.025em] text-ink sm:text-[3.4rem]" style={serif}>
          <MaskLines on={on} still={still} lines={[<>Deliverables, tools</>, <span key="t" className="italic text-orange">and reasons.</span>]} />
        </h2>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <motion.div {...riseProps(on, still, 0.2, 40)}>
            <TiltCard glow="#ea580c" max={5}>
              <div className="p-6 sm:p-7">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-orange">Deliverables</p>
                <ul className="mt-5 space-y-3.5">
                  {data.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/75">
                      <span className="mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-orange-tint text-orange">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div className="relative overflow-hidden rounded-[24px] bg-ink p-6 text-white sm:p-7" {...riseProps(on, still, 0.3, 40)}>
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue/30 blur-[70px]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            <p className="relative text-[0.72rem] font-medium uppercase tracking-[0.16em] text-blue-bright">Technology</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {data.technology.map((t, i) => (
                <motion.span
                  key={t}
                  className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-2 font-mono text-[0.75rem] text-white/85"
                  initial={still ? false : { opacity: 0, scale: 0.6, rotateX: 60 }}
                  animate={on ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                  transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.5 + i * 0.06 }}
                  whileHover={still ? undefined : { y: -3, borderColor: "rgba(255,107,53,0.6)" }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <p className="relative mt-8 text-[0.85rem] leading-relaxed text-white/50">
              Chosen per project. We pick what fits your team and your roadmap, not what&rsquo;s fashionable.
            </p>
          </motion.div>

          <motion.div {...riseProps(on, still, 0.4, 40)}>
            <TiltCard glow="#2563eb" max={5}>
              <div className="p-6 sm:p-7">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-blue">Why ZSpace Labs</p>
                <ul className="mt-5 space-y-4">
                  {data.whyZspace.map((w, i) => (
                    <li key={w} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/75">
                      <span className="font-mono text-[0.72rem] text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetail({ data }: { data: ServiceDetailData }) {
  const still = !!useReducedMotion();
  const Art = artBySlug[data.slug] ?? WebsitesArt;
  const contactHref = `/contact?src=${encodeURIComponent(`/services/${data.slug}`)}`;

  return (
    <>
      <DetailHero
        crumbs={[
          { name: "Services", href: "/services" },
          { name: data.name, href: `/services/${data.slug}` },
        ]}
        eyebrow={`Service ${data.index}`}
        title={accentTitle(data.name)}
        description={data.heroCopy}
        primary={{ label: "Start a Project", href: contactHref }}
        secondary={{ label: "How we work", href: "#process" }}
        visual={
          <HeroScreen chips={data.technology} badge={<Badge slug={data.slug} />} url={`zspace.in/services/${data.slug}`}>
            <div className="rounded-xl bg-gradient-to-br from-[#f3f3f1] to-[#fafaf8]">
              <ScaledArt max={1.6}>
                <Art on still={still} />
              </ScaledArt>
            </div>
          </HeroScreen>
        }
      />

      <SplitIntro
        eyebrow="Overview"
        title={[accentTitle(data.definition.question)]}
        paragraphs={data.definition.answer}
        aside={
          data.industries.length > 0 && (
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink/45">Popular with</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.industries.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/industries/${i.slug}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-4 py-2 text-[0.85rem] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
                  >
                    {i.name}
                    <ArrowUpRight className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          )
        }
      />

      <ProblemSolution
        eyebrow="Problems we solve"
        title={[<>Where things</>, <span key="b" className="italic text-orange-bright">usually break.</span>]}
        problems={data.problems}
        solutions={data.whatWeDo}
        problemLabel="Sound familiar?"
        solutionLabel="What we do about it"
      />

      <CardGrid
        eyebrow="Who it's for"
        title={[<>Who this</>, <span key="s" className="italic text-orange">service is for.</span>]}
        items={data.audience.map((a) => ({ title: a }))}
        icons={[Rocket, Building2, Store, Briefcase, Users]}
        columns={data.audience.length % 3 === 0 ? 3 : data.audience.length === 2 ? 2 : 4}
      />

      <CardGrid
        eyebrow="Use cases"
        title={[<>What we</>, <span key="t" className="italic text-orange">typically build.</span>]}
        intro="Real project shapes, from a single focused build to a longer engagement."
        items={data.useCases}
        columns={data.useCases.length % 3 === 0 ? 3 : 4}
      />

      <ProcessPanel
        id="process"
        eyebrow="Our approach"
        title={[<>How we</>, <span key="w" className="italic text-orange-bright">work.</span>]}
        steps={data.approach}
      />

      <Toolkit data={data} />

      <FaqBlock items={data.faq} />

      <ReadingList
        eyebrow="Guides"
        title={[<>Read before</>, <span key="y" className="italic text-orange">you build.</span>]}
        posts={data.guides}
      />

      <RelatedPanel
        eyebrow="Other services"
        title={[<>Often paired</>, <span key="w" className="italic text-orange-bright">with this.</span>]}
        items={data.others.map((o) => {
          const OArt = artBySlug[o.slug] ?? WebsitesArt;
          return {
            href: `/services/${o.slug}`,
            title: o.name,
            body: o.summary,
            glow: o.accent === "blue" ? "#3b82f6" : "#ff6b35",
            visual: (
              <div className="bg-gradient-to-br from-[#f3f3f1] to-[#fafaf8]">
                <ScaledArt>
                  <OArt on still={still} />
                </ScaledArt>
              </div>
            ),
          };
        })}
      />
    </>
  );
}

