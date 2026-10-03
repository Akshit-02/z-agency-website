"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { DarkPanel, Eyebrow, MaskLines, riseProps } from "@/components/ui/Aesthetic";
import { CtaVisual } from "@/components/CtaVisual";

const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

export function BuildCTA() {
  const still = !!useReducedMotion();

  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.35 });


  return (
    <DarkPanel innerClassName="px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-20">
      <div
        ref={ref}
        className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-8"
      >
        <div>
          <Eyebrow on={on} still={still} tone="dark">
            Let&rsquo;s build
          </Eyebrow>
          <h2 className="mt-6 text-[3rem] leading-[0.98] tracking-[-0.025em] sm:text-[4rem] lg:text-[4.6rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[<>Got something</>, <span key="m" className="italic text-orange-bright">in mind?</span>]}
            />
          </h2>
          <motion.p className="mt-6 max-w-[28rem] text-[1.02rem] leading-relaxed text-white/60" {...riseProps(on, still, 0.4)}>
            Whether you have a clear plan or just an idea, we&rsquo;re here to help you figure out the next step.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-5" {...riseProps(on, still, 0.5)}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-[0.92rem] font-medium text-ink"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange-500/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <span className="h-6 w-px bg-white/15" />
            <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-white/80 hover:text-white">
              Or just say hello
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <CtaVisual />
      </div>
    </DarkPanel>
  );
}
