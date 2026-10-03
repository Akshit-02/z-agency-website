"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/* Shared building blocks for the site's look: dark rounded panels with
   drifting brand glows, a line eyebrow, serif headings with a mask reveal,
   and cards that tilt in 3D with a cursor-following spotlight. */

export const EASE = [0.25, 1, 0.5, 1] as const;
export const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

type Tone = "light" | "dark";

/** Drifting orange/blue glows and a faint dot grid. */
export function Atmosphere({ tone = "dark", still: stillProp }: { tone?: Tone; still?: boolean }) {
  const reduced = useReducedMotion();
  const still = stillProp ?? !!reduced;
  const dark = tone === "dark";
  return (
    <>
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full blur-[120px] ${dark ? "bg-orange-600/20" : "bg-orange-500/10"}`}
        animate={still ? undefined : { x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full blur-[130px] ${dark ? "bg-blue/25" : "bg-blue/10"}`}
        animate={still ? undefined : { x: [0, -90, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${dark ? "opacity-[0.06]" : "opacity-[0.5]"}`}
        style={{
          backgroundImage: `radial-gradient(${dark ? "#ffffff" : "rgba(11,12,14,0.09)"} 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
          maskImage: dark ? undefined : "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />
    </>
  );
}

/** A full-width dark rounded panel that tilts up into place as it scrolls in. */
export function DarkPanel({
  children,
  className = "",
  innerClassName = "px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24",
  id,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const still = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.4"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], still ? [1, 1] : [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], still ? [1, 1] : [0.4, 1]);

  return (
    <section id={id} ref={ref} className={`relative overflow-x-clip bg-white px-3 py-4 sm:px-5 lg:px-6 ${className}`} style={{ perspective: 1800 }}>
      <motion.div
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px] bg-ink text-white will-change-transform"
        style={{ rotateX, scale, opacity, transformOrigin: "50% 0%" }}
      >
        <Atmosphere still={still} />
        <div className={`relative ${innerClassName}`}>{children}</div>
      </motion.div>
    </section>
  );
}

export function Eyebrow({
  children,
  on,
  still,
  tone = "light",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  on: boolean;
  still: boolean;
  tone?: Tone;
  delay?: number;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] ${tone === "dark" ? "text-white/70" : "text-ink"} ${className}`}
    >
      <motion.span
        className={`h-px w-6 origin-left ${tone === "dark" ? "bg-orange-500" : "bg-orange-600"}`}
        initial={still ? false : { scaleX: 0 }}
        animate={on ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay }}
      />
      {children}
    </p>
  );
}

/** Heading lines that slide up out of a mask, one after another. */
export function MaskLines({
  lines,
  on,
  still,
  delay = 0.1,
}: {
  lines: ReactNode[];
  on: boolean;
  still: boolean;
  delay?: number;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={still ? false : { y: "105%", rotate: 2 }}
            animate={on ? { y: 0, rotate: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.13 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

/** Fade-and-rise props for in-view choreography. */
export function riseProps(on: boolean, still: boolean, delay: number, y = 22) {
  return still
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y, filter: "blur(6px)" },
        animate: on ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
        transition: { duration: 0.85, ease: EASE, delay },
      };
}

/**
 * A card that tilts toward the cursor in 3D with a spotlight that follows it.
 * Put the card's content (often a Link with `h-full`) inside.
 */
export function TiltCard({
  children,
  className = "",
  tone = "light",
  glow = "#2563eb",
  max = 7,
  style,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  glow?: string;
  max?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const still = !!useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    if (!still) {
      px.set(x / r.width);
      py.set(y / r.height);
    }
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  const dark = tone === "dark";

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group/tilt relative h-full overflow-hidden rounded-[24px] border transition-[border-color,box-shadow] duration-500 ${
        dark
          ? "border-white/10 bg-white/[0.03] hover:border-white/20"
          : "border-ink/[0.08] bg-white shadow-[0_1px_2px_rgba(11,12,14,0.03)] hover:border-ink/15 hover:shadow-[0_30px_60px_-30px_rgba(11,12,14,0.28)]"
      } ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1000, ...style }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${glow}${dark ? "26" : "1a"}, transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
