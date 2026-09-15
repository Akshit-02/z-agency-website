"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../Container";
import { HeroGraphic } from "../HeroGraphic";

const EASE = [0.25, 1, 0.5, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[130px] pb-20 sm:pt-[150px] sm:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div initial="hidden" animate="show" variants={container}>
          {/* <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-1.5 text-[0.82rem] font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            Design &amp; engineering, one team
          </motion.div> */}

          <motion.h1
            variants={item}
            className="text-balance font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-[3.4rem] lg:text-[3.8rem]"
          >
            We build <span className="text-blue">digital products</span> that
            move businesses <span className="text-orange">forward</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[52ch] text-pretty text-[1.1rem] leading-relaxed text-ink-soft"
          >
            ZSpace is a technology studio for websites, mobile apps, AI
            automation and Shopify commerce. We design and build the product,
            then keep tuning it for conversion — under one roof, without the
            handoffs.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-4 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-orange-deep"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-7 py-4 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:border-ink"
            >
              Explore our Services
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-[0.85rem] text-ink-soft"
          >
            <span>Websites &amp; Web Apps</span>
            <span className="text-line-strong">/</span>
            <span>Mobile Apps</span>
            <span className="text-line-strong">/</span>
            <span>AI Automation</span>
            <span className="text-line-strong">/</span>
            <span>UI/UX</span>
            <span className="text-line-strong">/</span>
            <span>Shopify</span>
            <span className="text-line-strong">/</span>
            <span>CRO</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <HeroGraphic />
        </motion.div>
      </Container>
    </section>
  );
}
