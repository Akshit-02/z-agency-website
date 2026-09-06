"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CaseStudyVisual } from "./case-study-visual";
import type { CaseStudy } from "@/types";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group relative block overflow-hidden">
      <motion.div initial="rest" whileHover="hover" animate="rest" className="relative aspect-[4/5]">
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <CaseStudyVisual
            accent={caseStudy.heroAccent}
            initial={caseStudy.client[0]}
            className="h-full w-full"
          />
        </motion.div>

        <div className="absolute left-4 top-4 font-mono-label text-xs uppercase tracking-wide text-ink-soft">
          {caseStudy.industry}
        </div>

        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-ink/85"
        />
        <motion.div
          variants={{ rest: { y: 14, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col justify-end p-6"
        >
          <p className="font-mono-label text-xs uppercase tracking-wide text-white/60">
            {caseStudy.industry} · {caseStudy.year}
          </p>
          <h3 className="mt-2 font-display text-xl font-medium leading-tight text-white">
            {caseStudy.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {caseStudy.results.slice(0, 2).map((result) => (
              <span key={result.label} className="border border-white/25 px-2 py-1 text-xs text-white/85">
                {result.metric} {result.label}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
            View case study
            <ArrowUpRight className="size-4" />
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
