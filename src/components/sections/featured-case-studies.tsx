"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyVisual } from "@/components/case-studies/case-study-visual";
import { Reveal } from "@/components/ui/reveal";

const [northgate, lumen, fieldworks] = caseStudies;

/** "Inside the Work" — three case studies, three hand-built layouts. The work
 * dictates the composition instead of forcing everything into one tile. */
export function FeaturedCaseStudies() {
  return (
    <div className="flex flex-col gap-px bg-line">
      {/* 01 — the interface story: text and a large, bleeding visual */}
      <Reveal className="bg-sky">
        <Link href={`/case-studies/${northgate.slug}`} className="group grid grid-cols-1 items-center lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 sm:p-14">
            <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
              {northgate.industry} · {northgate.year}
            </p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {northgate.title}
            </h3>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {northgate.results.map((r) => (
                <div key={r.label}>
                  <p className="font-display text-3xl font-medium text-blue">{r.metric}</p>
                  <p className="mt-1 max-w-[9rem] text-xs leading-snug text-ink-faint">{r.label}</p>
                </div>
              ))}
            </div>
            <span className="mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
              View case study
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <motion.div
            className="relative h-64 overflow-hidden sm:h-96 lg:h-full lg:min-h-[26rem]"
            initial={false}
            whileHover="hover"
          >
            <motion.div
              className="h-full w-full"
              variants={{ hover: { scale: 1.03 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <CaseStudyVisual accent={northgate.heroAccent} initial={northgate.client[0]} className="h-full w-full" />
            </motion.div>
          </motion.div>
        </Link>
      </Reveal>

      {/* 02 — the mobile story: a tall panel breaking out of its row */}
      <Reveal className="relative overflow-visible bg-peach py-16 sm:py-24">
        <Link href={`/case-studies/${lumen.slug}`} className="group relative block">
          <div className="mx-auto max-w-lg px-8 text-center sm:px-14">
            <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
              {lumen.industry} · {lumen.year}
            </p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl">
              {lumen.title}
            </h3>
            <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
              View case study
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <motion.div
            className="relative mx-auto mt-10 w-40 sm:absolute sm:right-16 sm:top-1/2 sm:mt-0 sm:w-56 sm:-translate-y-1/2 sm:rotate-3 lg:right-28"
            whileHover={{ rotate: 0, scale: 1.04 }}
            initial={{ rotate: 3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <CaseStudyVisual
              accent={lumen.heroAccent}
              initial={lumen.client[0]}
              className="aspect-[9/16] shadow-[0_30px_60px_-20px_rgba(17,24,39,0.25)]"
            />
            <div className="absolute -left-6 top-8 hidden -rotate-6 bg-white px-3 py-2 shadow-lg sm:block">
              <p className="font-display text-xl font-medium text-coral">{lumen.results[0].metric}</p>
              <p className="text-[0.65rem] text-ink-faint">{lumen.results[0].label}</p>
            </div>
          </motion.div>
        </Link>
      </Reveal>

      {/* 03 — the numbers story: dominant typography, a small preview */}
      <Reveal className="bg-mint">
        <Link href={`/case-studies/${fieldworks.slug}`} className="group grid grid-cols-1 gap-8 p-8 sm:p-14 lg:grid-cols-[1fr_20rem] lg:items-end">
          <div>
            <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
              {fieldworks.industry} · {fieldworks.year}
            </p>
            <p className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {fieldworks.results[0].metric}{" "}
              <span className="text-ink-soft">{fieldworks.results[0].label.toLowerCase()}.</span>
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">{fieldworks.summary}</p>
            <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
              View case study
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <CaseStudyVisual
            accent={fieldworks.heroAccent}
            initial={fieldworks.client[0]}
            className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      </Reveal>
    </div>
  );
}
