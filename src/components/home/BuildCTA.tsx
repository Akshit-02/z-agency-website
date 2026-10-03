"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";
import { site } from "@/lib/site";
import { DarkPanel, Eyebrow, MaskLines, riseProps } from "@/components/ui/Aesthetic";

const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

type Pill = { label: string; className: string; delay: number };

const pills: Pill[] = [
  { label: "Website", className: "left-[2%] top-[10%] -rotate-2", delay: 0.5 },
  { label: "App", className: "right-[4%] top-[8%] rotate-2", delay: 0.62 },
  { label: "Shopify Store", className: "left-0 bottom-[6%] -rotate-1", delay: 0.74 },
  { label: "Automation", className: "right-0 bottom-[24%] rotate-2", delay: 0.86 },
];

function Orbit({ on, still, rotateX, rotateY }: { on: boolean; still: boolean; rotateX: MotionValue<number>; rotateY: MotionValue<number> }) {
  return (
    <motion.div
      className="relative mx-auto h-[280px] w-full max-w-[620px] sm:h-[320px]"
      style={{ rotateX, rotateY, transformPerspective: 1100, transformStyle: "preserve-3d" }}
    >
      <svg viewBox="0 0 620 320" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
        <g transform="rotate(-6 310 160)">
          <motion.ellipse
            cx="310"
            cy="160"
            rx="248"
            ry="128"
            stroke="#8b93d6"
            strokeOpacity="0.6"
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
        style={{ boxShadow: "0 30px 60px -16px rgba(0,0,0,0.6)", z: 40 }}
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
          style={{ z: 70 }}
          initial={still ? false : { opacity: 0, y: 14, scale: 0.9 }}
          animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: p.delay }}
        >
          <Float still={still} delay={p.delay}>
            <span className="inline-block whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[0.85rem] font-medium text-ink shadow-[0_18px_36px_-12px_rgba(0,0,0,0.6)]">
              {p.label}
            </span>
          </Float>
        </motion.div>
      ))}
    </motion.div>
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
  const still = !!useReducedMotion();

  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.35 });

  // the orbit leans toward the cursor; pills float at a different depth
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 90, damping: 16 };
  const rotateX = useSpring(useTransform(my, [0, 1], still ? [0, 0] : [14, -14]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], still ? [0, 0] : [-18, 18]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <DarkPanel innerClassName="px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-20">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
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

        <Orbit on={on} still={still} rotateX={rotateX} rotateY={rotateY} />
      </div>
    </DarkPanel>
  );
}
