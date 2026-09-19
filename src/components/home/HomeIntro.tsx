"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Hero } from "./Hero";
import { ProblemSection } from "./ProblemSection";

/**
 * Hero + problem section as a card stack: the hero pins to the top and
 * recedes (scales down, rounds, dims, drifts up) while the next section slides over it.
 */
export function HomeIntro() {
  const reduced = useReducedMotion();
  const coverRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.16]);

  return (
    <div className="relative">
      <motion.div
        className={reduced ? "relative" : "sticky top-0 origin-center overflow-hidden"}
        style={reduced ? undefined : { scale, borderRadius: radius, y }}
      >
        <Hero />
        {!reduced && (
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: dim }} />
        )}
      </motion.div>

      <div
        ref={coverRef}
        className="relative z-10 -mt-10 overflow-hidden rounded-t-[40px] bg-[#fdfdfc] shadow-[0_-30px_70px_-30px_rgba(11,12,14,0.22)]"
      >
        <ProblemSection />
      </div>
    </div>
  );
}
