"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Atmosphere, EASE, Eyebrow, MaskLines, riseProps, serif } from "@/components/ui/Aesthetic";
import { AboutOrbit } from "@/components/about/AboutSections";

export function NotFoundHero({
  quickLinks,
  services,
  industries,
}: {
  quickLinks: { label: string; href: string }[];
  services: { slug: string; name: string }[];
  industries: { slug: string; name: string }[];
}) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-24 pt-[130px] sm:px-8 lg:pt-[160px]">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow on={on} still={still}>
            Error 404
          </Eyebrow>
          <h1 className="mt-6 text-[2.9rem] leading-[1] tracking-[-0.03em] text-ink sm:text-[4rem] lg:text-[4.6rem]" style={serif}>
            <MaskLines on={on} still={still} lines={[<>This page took</>, <span key="w" className="italic text-orange">a wrong turn.</span>]} />
          </h1>
          <motion.p className="mt-6 max-w-[30rem] text-pretty text-[1.05rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.4)}>
            The page you&rsquo;re looking for doesn&rsquo;t exist, or it&rsquo;s moved. Here&rsquo;s where you probably meant to go.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-2" {...riseProps(on, still, 0.5)}>
            {quickLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-[0.88rem] font-medium transition-colors duration-300 ${
                  i === 0 ? "bg-ink text-white hover:bg-ink/85" : "border border-ink/10 text-ink hover:border-ink hover:bg-ink hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Popular services", items: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })) },
              { title: "Industries we work with", items: industries.map((s) => ({ href: `/industries/${s.slug}`, label: s.name })) },
            ].map((col, c) => (
              <motion.div
                key={col.title}
                className="rounded-[20px] border border-ink/[0.08] bg-white p-5"
                {...riseProps(on, still, 0.6 + c * 0.1, 24)}
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink/45">{col.title}</p>
                <ul className="mt-3 flex flex-col">
                  {col.items.map((it) => (
                    <li key={it.href}>
                      <Link href={it.href} className="group flex items-center justify-between gap-3 py-1.5 text-[0.92rem] text-ink">
                        {it.label}
                        <ArrowUpRight className="h-3.5 w-3.5 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.p
            aria-hidden
            className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[11rem] leading-none text-transparent sm:text-[14rem]"
            style={{ ...serif, WebkitTextStroke: "1.5px rgba(11,12,14,0.08)" }}
            initial={still ? false : { opacity: 0, scale: 0.9 }}
            animate={on ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: EASE }}
          >
            404
          </motion.p>
          <AboutOrbit on={on} still={still} />
          <Link
            href="/"
            className="group absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.88rem] font-medium text-white shadow-[0_20px_40px_-20px_rgba(11,12,14,0.6)]"
          >
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
