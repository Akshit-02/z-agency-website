"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedHeroWord } from "./AnimatedHeroWord";
import { HeroOrbit } from "./HeroOrbit";
import { HeroServiceStrip } from "./HeroServiceStrip";

const EASE = [0.25, 1, 0.5, 1] as const;

const phrases = [
  "your website builder",
  "your app builder",
  "your automation builder",
  "your store builder",
  "your problem solver",
  "your growth partner",
  "your digital sidekick",
];

function rise(reduced: boolean | null, delay: number) {
  return reduced
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: EASE, delay },
      };
}

/** small corner details: registration marks + hairlines */
function Frame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-8 inset-y-0 hidden lg:block"
    >
      <span className="absolute left-0 top-6 text-lg leading-none text-ink/70">
        +
      </span>
      <span className="absolute right-0 top-6 text-lg leading-none text-ink/70">
        +
      </span>
      <span className="absolute bottom-6 left-0 top-16 w-px bg-ink/10" />
      <span className="absolute bottom-6 right-0 top-16 w-px bg-ink/10" />
      <span className="absolute left-[-4px] top-[36%] h-px w-[9px] bg-orange" />
      <span className="absolute right-[-4px] top-[36%] h-px w-[9px] bg-blue" />
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const r = !!reduced;
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // scroll choreography: content lifts, softens and recedes while the orbit expands
  const { scrollY } = useScroll();
  const span = [0, 800];
  const contentY = useTransform(scrollY, span, r ? [0, 0] : [0, -110]);
  const contentScale = useTransform(scrollY, span, r ? [1, 1] : [1, 0.92]);
  const contentOpacity = useTransform(scrollY, [0, 520], r ? [1, 1] : [1, 0.2]);
  const blur = useTransform(scrollY, [0, 620], r ? [0, 0] : [0, 8]);
  const contentFilter = useMotionTemplate`blur(${blur}px)`;
  const orbitScale = useTransform(scrollY, span, r ? [1, 1] : [1, 1.45]);
  const orbitRotate = useTransform(scrollY, span, r ? [0, 0] : [0, 7]);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#fdfdfc] pt-[100px]">
      <div className="relative flex flex-1 items-center justify-center px-5 pb-14 pt-[clamp(4.5rem,15vh,9rem)] sm:pb-16">
        <Frame />
        <HeroOrbit reduced={r} anchorRef={ctaRef} scale={orbitScale} rotate={orbitRotate} />

        <motion.div
          className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center text-center"
          style={{ y: contentY, scale: contentScale, opacity: contentOpacity, filter: contentFilter }}
        >
          <motion.h1
            aria-label="Meet ZSpace, your website builder."
            className="text-[2.35rem] leading-[1.1] tracking-[-0.03em] text-ink min-[420px]:text-[2.7rem] sm:text-[4rem] lg:text-[5rem]"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            {...rise(reduced, 0.5)}
          >
            <span className="block">Meet ZSpace,</span>
            <AnimatedHeroWord phrases={phrases} paused={r} />
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[40rem] text-pretty text-[1rem] leading-relaxed text-ink/55 sm:text-[1.12rem]"
            {...rise(reduced, 0.7)}
          >
            We turn good ideas into digital things people actually enjoy using.{" "}
            <br className="hidden sm:block" />
            Websites, apps, Shopify stores and smart automations,{" "}
            <br className="hidden sm:block" />
            all thoughtfully built around your business.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4"
            {...rise(reduced, 0.9)}
          >
            <Link
              ref={ctaRef}
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <p className="text-[0.88rem] text-ink-soft">
              or{" "}
              <Link
                href="/services"
                className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                explore our work
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* <motion.div className="pb-8 pt-2 sm:pb-10" {...rise(reduced, 1.1)}>
        <HeroServiceStrip />
      </motion.div> */}
    </section>
  );
}
