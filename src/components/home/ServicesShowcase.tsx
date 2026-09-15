"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "../Container";
import { Reveal } from "../ScrollReveal";
import { Eyebrow } from "../SectionHeading";
import { services, type ServiceAccent } from "@/lib/services-data";

const accentText: Record<ServiceAccent, string> = {
  blue: "text-blue",
  orange: "text-orange",
};

const accentTextBright: Record<ServiceAccent, string> = {
  blue: "text-blue-bright",
  orange: "text-orange-bright",
};

const accentBgBright: Record<ServiceAccent, string> = {
  blue: "bg-blue-bright",
  orange: "bg-orange-bright",
};

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow accent="orange">What we do</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.6rem]">
                Six ways we help businesses build better{" "}
                <span className="text-blue">products</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="group hidden items-center gap-2 text-[0.95rem] font-medium text-blue transition-colors duration-300 hover:text-blue-deep sm:inline-flex"
            >
              View all services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal delay={0.1}>
            <ul className="flex flex-col">
              {services.map((service, i) => (
                <li key={service.slug} className="border-b border-line first:border-t">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center justify-between gap-4 py-5 text-left transition-colors ${
                      active === i ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                    aria-expanded={active === i}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className={`font-display text-sm ${accentText[service.accent]}`}>
                        {service.index}
                      </span>
                      <span className="font-display text-[1.25rem] font-medium tracking-tight sm:text-[1.5rem]">
                        {service.name}
                      </span>
                    </span>
                    <ArrowRight
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        active === i ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl bg-ink p-8 text-paper sm:p-10 lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                >
                  <span
                    className={`text-[0.8rem] font-medium uppercase tracking-[0.14em] ${accentTextBright[current.accent]}`}
                  >
                    {current.short}
                  </span>
                  <p className="mt-4 text-pretty text-[1.2rem] leading-relaxed sm:text-[1.35rem]">
                    {current.summary}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5 text-[0.95rem] text-white/70">
                    {current.whatWeDo.slice(0, 2).map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span
                          className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accentBgBright[current.accent]}`}
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${current.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[0.9rem] font-medium text-white transition-colors hover:bg-orange-deep"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-8 sm:hidden">
          <Link href="/services" className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-blue">
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
