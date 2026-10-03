"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Atmosphere, EASE, TiltCard, serif } from "@/components/ui/Aesthetic";
import { ScaledArt } from "@/components/home/WhatWeBuild";
import { AppsArt, AutomationArt, CroArt, ShopifyArt, UiUxArt, WebsitesArt } from "@/components/home/BuildIllustrations";
import { SceneFrame, sceneBackdrop, scenes } from "@/components/industries/IndustryScenes";
import {
  CardGrid,
  DetailHero,
  FaqBlock,
  HeroScreen,
  ProblemSolution,
  ReadingList,
  RelatedPanel,
  SectionHead,
  SplitIntro,
} from "./DetailKit";

type Art = (props: { on: boolean; still: boolean }) => ReactNode;

const serviceArt: Record<string, Art> = {
  "website-development": WebsitesArt,
  "mobile-app-development": AppsArt,
  "shopify-development": ShopifyArt,
  "ui-ux-design": UiUxArt,
  "ai-automation": AutomationArt,
  "cro-audit": CroArt,
};

export type IndustryDetailData = {
  slug: string;
  name: string;
  accent: "blue" | "orange";
  heroTitle?: { text: string; accent?: "blue" | "orange" }[];
  heroCopy?: string;
  description?: string;
  challenges: string[];
  solutions: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  services: { slug: string; name: string; summary: string; short: string; accent: "blue" | "orange" }[];
  posts: { slug: string; title: string; category?: string }[];
  others: { slug: string; name: string; shortDescription: string }[];
};

/** Plays a scene's interactive state on a loop, so it feels alive without a cursor. */
function useDemo(on: boolean, still: boolean, ms = 2600) {
  const [demo, setDemo] = useState(false);
  useEffect(() => {
    if (!on || still) return;
    const t = setInterval(() => setDemo((d) => !d), ms);
    return () => clearInterval(t);
  }, [on, still, ms]);
  return demo;
}

function LiveScene({ slug, still }: { slug: string; still: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  const demo = useDemo(on, still);
  const Scene = scenes[slug];
  return (
    <div ref={ref} className={`overflow-hidden rounded-xl bg-gradient-to-br ${sceneBackdrop[slug] ?? "from-[#f5f5f3] to-white"}`}>
      <SceneFrame>{Scene && <Scene on={on} hover={demo} still={still} />}</SceneFrame>
    </div>
  );
}

function OtherIndustries({ items }: { items: IndustryDetailData["others"] }) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  if (items.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div className="relative mx-auto max-w-[1180px]">
        <div ref={ref}>
          <SectionHead
            eyebrow="Other industries"
            title={[<>Same thinking,</>, <span key="d" className="italic text-orange">different markets.</span>]}
            on={on}
            still={still}
          />
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((o, i) => (
            <motion.div
              key={o.slug}
              initial={still ? false : { opacity: 0, y: 50, rotateX: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
              style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
            >
              <TiltCard glow={i % 2 ? "#2563eb" : "#ea580c"} max={6}>
                <Link href={`/industries/${o.slug}`} className="group flex h-full flex-col p-4">
                  <div className="rounded-[16px] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.06] transition-transform duration-700 ease-out group-hover:-translate-y-1">
                    <LiveScene slug={o.slug} still={still} />
                  </div>
                  <h3 className="mt-5 px-1 text-[1.45rem] leading-[1.1] text-ink" style={serif}>
                    {o.name}
                  </h3>
                  <p className="mt-2 px-1 text-[0.86rem] leading-relaxed text-ink/55">{o.shortDescription}</p>
                  <span className="mt-auto flex items-center gap-2 px-1 pt-5 text-[0.82rem] font-medium text-ink">
                    Explore
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/[0.05] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-ink group-hover:text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryDetail({ data }: { data: IndustryDetailData }) {
  const still = !!useReducedMotion();
  const contactHref = `/contact?src=${encodeURIComponent(`/industries/${data.slug}`)}`;

  const title = data.heroTitle
    ? data.heroTitle.map((part, i) =>
        part.accent ? (
          <span key={i} className="italic text-orange">
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )
    : data.name;

  return (
    <>
      <DetailHero
        crumbs={[
          { name: "Industries", href: "/industries" },
          { name: data.name, href: `/industries/${data.slug}` },
        ]}
        eyebrow={`Industry · ${data.name}`}
        title={title}
        description={data.heroCopy}
        primary={{ label: "Discuss your project", href: contactHref }}
        secondary={data.services.length ? { label: "What we build", href: "#services" } : undefined}
        visual={
          <HeroScreen chips={data.services.map((s) => s.short)} url={`zspace.in/industries/${data.slug}`}>
            <LiveScene slug={data.slug} still={still} />
          </HeroScreen>
        }
      />

      {data.description && (
        <SplitIntro
          eyebrow={`Where ${data.name.toLowerCase()} businesses are`}
          title={[<>The landscape,</>, <span key="h" className="italic text-orange">honestly.</span>]}
          paragraphs={[data.description]}
        />
      )}

      {data.challenges.length > 0 && data.solutions.length > 0 && (
        <ProblemSolution
          eyebrow="Challenges and answers"
          title={[<>What gets</>, <span key="w" className="italic text-orange-bright">in the way.</span>]}
          problems={data.challenges}
          solutions={data.solutions}
          problemLabel="Common challenges"
          solutionLabel="How we help"
        />
      )}

      {data.useCases.length > 0 && (
        <CardGrid
          eyebrow="Example use cases"
          title={[<>The kind of things</>, <span key="b" className="italic text-orange">we build here.</span>]}
          items={data.useCases.map((u) => ({ title: u }))}
          columns={data.useCases.length % 3 === 0 ? 3 : data.useCases.length === 2 ? 2 : 4}
        />
      )}

      {data.services.length > 0 && (
        <div id="services" className="scroll-mt-20">
          <RelatedPanel
            eyebrow="Recommended services"
            title={[<>Where we</>, <span key="u" className="italic text-orange-bright">usually start.</span>]}
            items={data.services.map((s) => {
              const SArt = serviceArt[s.slug] ?? WebsitesArt;
              return {
                href: `/services/${s.slug}`,
                title: s.name,
                body: s.summary,
                glow: s.accent === "blue" ? "#3b82f6" : "#ff6b35",
                visual: (
                  <div className="bg-gradient-to-br from-[#f3f3f1] to-[#fafaf8]">
                    <ScaledArt>
                      <SArt on still={still} />
                    </ScaledArt>
                  </div>
                ),
              };
            })}
          />
        </div>
      )}

      {data.faqs.length > 0 && <FaqBlock items={data.faqs} />}

      <ReadingList
        eyebrow="Related reading"
        title={[<>Worth reading</>, <span key="f" className="italic text-orange">first.</span>]}
        posts={data.posts}
      />

      <OtherIndustries items={data.others} />
    </>
  );
}
