"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../Container";
import { Reveal } from "../ScrollReveal";
import { Eyebrow } from "../SectionHeading";
import { IndustryGlyph } from "../IndustryGlyph";
import { homepageIndustries } from "@/lib/industries-data";
import { getServiceBySlug } from "@/lib/services-data";

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const current = homepageIndustries[active];
  const accentText = current.accent === "blue" ? "text-blue" : "text-orange";
  const accentBg = current.accent === "blue" ? "bg-blue" : "bg-orange";

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow accent="blue">Who we work with</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-xl text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.6rem]">
                Built for businesses across{" "}
                <span className="text-blue">every industry</span> we&apos;ve
                touched.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/industries"
              className="group hidden items-center gap-2 text-[0.95rem] font-medium text-blue transition-colors duration-300 hover:text-blue-deep sm:inline-flex"
            >
              See all industries
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[62ch] text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
            We combine strategy, UI/UX, engineering, AI automation and commerce
            expertise into digital products shaped around how a specific
            industry actually works — not a one-size-fits-all build.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-2">
          {homepageIndustries.map((industry, i) => (
            <button
              key={industry.slug}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-full border px-4 py-2 text-[0.86rem] font-medium transition-colors duration-300 ${
                active === i
                  ? `${industry.accent === "blue" ? "border-blue bg-blue" : "border-orange bg-orange"} text-white`
                  : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <div className="grid gap-0 overflow-hidden rounded-2xl border border-line lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative flex items-center justify-center bg-ink p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="aspect-[11/8] w-full max-w-[320px]"
                >
                  <IndustryGlyph visual={current.visual} accent={current.accent} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative overflow-hidden p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                >
                  <span className={`text-[0.8rem] font-medium uppercase tracking-[0.14em] ${accentText}`}>
                    {current.name}
                  </span>
                  <p className="mt-4 max-w-[46ch] text-pretty text-[1.1rem] leading-relaxed">
                    {current.shortDescription}
                  </p>

                  {current.serviceSlugs && current.serviceSlugs.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {current.serviceSlugs.slice(0, 4).map((slug) => {
                        const service = getServiceBySlug(slug);
                        if (!service) return null;
                        return (
                          <span
                            key={slug}
                            className="rounded-full border border-line-strong px-3.5 py-1.5 text-[0.85rem] text-ink-soft"
                          >
                            {service.short}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  <Link
                    href={current.hasDetailPage ? `/industries/${current.slug}` : "/industries"}
                    className={`group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.9rem] font-medium text-white transition-colors ${accentBg} hover:opacity-90`}
                  >
                    Explore {current.name.toLowerCase()} solutions
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 sm:hidden">
          <Link href="/industries" className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-blue">
            See all industries
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
