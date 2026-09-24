"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";
import { site } from "@/lib/site";

const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

type Pill = { label: string; className: string; delay: number };

const pills: Pill[] = [
  { label: "Website", className: "left-[2%] top-[10%] -rotate-2", delay: 0.5 },
  { label: "App", className: "right-[4%] top-[8%] rotate-2", delay: 0.62 },
  { label: "Shopify Store", className: "left-0 bottom-[6%] -rotate-1", delay: 0.74 },
  { label: "Automation", className: "right-0 bottom-[24%] rotate-2", delay: 0.86 },
];

function Eyebrow({ on, still }: { on: boolean; still: boolean }) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink">
      <motion.span
        className="h-px w-6 origin-left bg-orange-600"
        initial={still ? false : { scaleX: 0 }}
        animate={on ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      />
      Let&rsquo;s build
    </p>
  );
}

function Orbit({ on, still }: { on: boolean; still: boolean }) {
  return (
    <div className="relative mx-auto h-[280px] w-full max-w-[620px] sm:h-[320px]">
      <svg viewBox="0 0 620 320" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
        <g transform="rotate(-6 310 160)">
          <motion.ellipse
            cx="310"
            cy="160"
            rx="248"
            ry="128"
            stroke="#8b93d6"
            strokeOpacity="0.5"
            strokeWidth="1"
            initial={{ pathLength: still ? 1 : 0, opacity: still ? 1 : 0 }}
            animate={on ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.8, ease: EASE, delay: 0.15 }}
          />
          <motion.circle
            cx="310"
            cy="32"
            r="4.5"
            fill="#ea580c"
            initial={still ? false : { opacity: 0, scale: 0.4 }}
            animate={on ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 1.1 }}
          />
          <motion.circle
            cx="62"
            cy="180"
            r="4.5"
            fill="#2563eb"
            initial={still ? false : { opacity: 0, scale: 0.4 }}
            animate={on ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 1.2 }}
          />
          <motion.circle
            cx="196"
            cy="286"
            r="4.5"
            fill="#ea580c"
            initial={still ? false : { opacity: 0, scale: 0.4 }}
            animate={on ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE, delay: 1.3 }}
          />
        </g>
      </svg>

      {/* the stacked note card, centred on the orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[132px] w-[122px] -translate-x-1/2 -translate-y-1/2 rotate-[7deg] rounded-xl bg-white"
        style={{ boxShadow: "0 20px 40px -18px rgba(11,12,14,0.22)" }}
        initial={still ? false : { opacity: 0, scale: 0.85, rotate: 14 }}
        animate={on ? { opacity: 1, scale: 1, rotate: 7 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-[132px] w-[122px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-2.5 rounded-xl bg-white px-4 py-4"
        style={{ boxShadow: "0 24px 48px -16px rgba(11,12,14,0.28)" }}
        initial={still ? false : { opacity: 0, scale: 0.85, rotate: -6, y: 10 }}
        animate={
          on && !still
            ? { opacity: 1, scale: 1, rotate: -2, y: [0, -5, 0] }
            : on
              ? { opacity: 1, scale: 1, rotate: -2 }
              : {}
        }
        transition={
          on && !still
            ? { rotate: { duration: 0.7, ease: EASE, delay: 0.42 }, opacity: { duration: 0.7, delay: 0.42 }, scale: { duration: 0.7, delay: 0.42 }, y: { duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1.4 } }
            : { duration: 0.7, ease: EASE, delay: 0.42 }
        }
      >
        <Asterisk className="h-5 w-5 text-orange-600" strokeWidth={2.2} />
        <p className="text-[0.92rem] italic leading-tight text-ink" style={serif}>
          Your idea
          <br />
          here&hellip;
        </p>
      </motion.div>

      {pills.map((p) => (
        <motion.div
          key={p.label}
          className={`absolute ${p.className}`}
          initial={still ? false : { opacity: 0, y: 14, scale: 0.9 }}
          animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: p.delay }}
        >
          <Float still={still} delay={p.delay}>
            <span className="inline-block whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[0.85rem] font-medium text-ink shadow-[0_14px_30px_-14px_rgba(11,12,14,0.25),0_0_0_1px_rgba(11,12,14,0.04)]">
              {p.label}
            </span>
          </Float>
        </motion.div>
      ))}
    </div>
  );
}

function Float({ children, still, delay }: { children: React.ReactNode; still: boolean; delay: number }) {
  return (
    <motion.div
      animate={still ? {} : { y: [0, -6, 0] }}
      transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: delay + 1 }}
    >
      {children}
    </motion.div>
  );
}

export function BuildCTA() {
  const reduced = useReducedMotion();
  const still = !!reduced;

  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.35 });

  const rise = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 18 },
          animate: on ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#fdfdfc] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
        <div>
          <Eyebrow on={on} still={still} />
          <h2 className="mt-6 text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3.2rem]" style={serif}>
            {["Got something", "in mind?"].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={still ? false : { y: "105%", rotate: 2 }}
                  animate={on ? { y: 0, rotate: 0 } : {}}
                  transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>
          <motion.p className="mt-5 max-w-[28rem] text-[1.02rem] leading-relaxed text-ink/55" {...rise(0.4)}>
            Whether you have a clear plan or just an idea, we&rsquo;re here to help you figure out the next step.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-5" {...rise(0.5)}>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-[0.92rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <span className="h-6 w-px bg-ink/15" />
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-ink"
            >
              Or just say hello
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <Orbit on={on} still={still} />
      </div>
    </section>
  );
}
