"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight, ArrowUpRight, Check, Minus, type LucideIcon } from "lucide-react";
import {
  Atmosphere,
  DarkPanel,
  EASE,
  Eyebrow,
  MaskLines,
  TiltCard,
  riseProps,
  serif,
} from "@/components/ui/Aesthetic";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";

/* Building blocks shared by the service and industry detail pages. */

function useOn<T extends Element>(amount = 0.3) {
  const ref = useRef<T>(null);
  const on = useInView(ref, { once: true, amount });
  return [ref, on] as const;
}

/** Italicise and colour the last word(s) of a plain title. */
export function accentTitle(title: string, words = 1, dark = false) {
  const parts = title.split(" ");
  if (parts.length <= words) return <span className={`italic ${dark ? "text-orange-bright" : "text-orange"}`}>{title}</span>;
  const head = parts.slice(0, -words).join(" ");
  const tail = parts.slice(-words).join(" ");
  return (
    <>
      {head} <span className={`italic ${dark ? "text-orange-bright" : "text-orange"}`}>{tail}</span>
    </>
  );
}

/* ------------------------------------------------------------------ hero */

/** A browser-style screen that leans toward the cursor, with floating chips in front. */
export function HeroScreen({
  children,
  chips = [],
  badge,
  url = "zspace.in",
  bare = false,
}: {
  children: ReactNode;
  chips?: string[];
  badge?: ReactNode;
  url?: string;
  /** Skip the browser chrome when the content draws its own interface. */
  bare?: boolean;
}) {
  const still = !!useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 80, damping: 16 };
  const rotateX = useSpring(useTransform(my, [0, 1], still ? [6, 6] : [14, -2]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], still ? [-10, -10] : [-20, 4]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  const chipPos = ["-left-5 top-[34%]", "-right-4 top-[16%]", "left-[8%] -bottom-4"];

  return (
    <div
      aria-hidden
      className="relative mx-auto w-full max-w-[540px] py-6"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/15 blur-[80px]" />
      <motion.div
        className="relative"
        style={{ rotateX, rotateY, transformPerspective: 1300, transformStyle: "preserve-3d" }}
        initial={still ? false : { opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
      >
        <div className="overflow-hidden rounded-2xl border border-white bg-white/85 shadow-[0_50px_100px_-40px_rgba(11,12,14,0.45),0_0_0_1px_rgba(11,12,14,0.06)] backdrop-blur">
          {bare ? (
            <div className="p-1.5">
              <div className="overflow-hidden rounded-[12px]">{children}</div>
            </div>
          ) : (
          <>
          <div className="flex items-center gap-1.5 border-b border-ink/[0.06] px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
            <span className="ml-3 flex h-5 flex-1 items-center rounded-md bg-ink/[0.04] px-2.5 font-mono text-[0.62rem] text-ink/40">
              {url}
            </span>
          </div>
          <div className="p-2.5">{children}</div>
          </>
          )}
        </div>

        {badge && (
          <motion.div
            className="absolute -bottom-5 -right-4"
            style={{ z: 80 }}
            initial={still ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1 }}
          >
            {badge}
          </motion.div>
        )}

        {chips.slice(0, 3).map((c, i) => (
          <motion.div
            key={c}
            className={`absolute ${chipPos[i]}`}
            style={{ z: 60 + i * 15 }}
            initial={still ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.9 + i * 0.12 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-[0.75rem] font-medium text-ink shadow-[0_18px_36px_-16px_rgba(11,12,14,0.35),0_0_0_1px_rgba(11,12,14,0.05)]"
              animate={still ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${i % 2 ? "bg-blue" : "bg-orange"}`} />
              {c}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function DetailHero({
  crumbs,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  visual,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual: ReactNode;
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.2);

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-[120px] sm:px-8 lg:pb-24 lg:pt-[140px]">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto max-w-[1180px]">
        <motion.div className="mb-8" {...riseProps(on, still, 0)}>
          <Breadcrumbs items={crumbs} />
        </motion.div>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <Eyebrow on={on} still={still}>
              {eyebrow}
            </Eyebrow>
            <motion.h1
              className="mt-6 text-balance text-[2.9rem] leading-[1] tracking-[-0.03em] text-ink sm:text-[4rem] lg:text-[4.4rem]"
              style={serif}
              initial={still ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={on ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p className="mt-7 max-w-[34rem] text-pretty text-[1.05rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.35)}>
                {description}
              </motion.p>
            )}
            <motion.div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" {...riseProps(on, still, 0.5)}>
              <Link
                href={primary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[0.92rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
              >
                {primary.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              {secondary && (
                <>
                  <span className="hidden h-6 w-px bg-ink/15 sm:block" />
                  <a href={secondary.href} className="group inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-ink">
                    {secondary.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </>
              )}
            </motion.div>
          </div>
          {visual}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- section head */

export function SectionHead({
  eyebrow,
  title,
  intro,
  tone = "light",
  on,
  still,
}: {
  eyebrow: string;
  title: ReactNode[];
  intro?: string;
  tone?: "light" | "dark";
  on: boolean;
  still: boolean;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
      <div>
        <Eyebrow on={on} still={still} tone={tone}>
          {eyebrow}
        </Eyebrow>
        <h2
          className={`mt-6 text-[2.5rem] leading-[1.02] tracking-[-0.025em] sm:text-[3.4rem] ${tone === "dark" ? "text-white" : "text-ink"}`}
          style={serif}
        >
          <MaskLines on={on} still={still} lines={title} />
        </h2>
      </div>
      {intro && (
        <motion.p
          className={`max-w-[28rem] text-[1rem] leading-relaxed lg:justify-self-end ${tone === "dark" ? "text-white/60" : "text-ink/60"}`}
          {...riseProps(on, still, 0.4)}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- intro */

export function SplitIntro({
  eyebrow,
  title,
  paragraphs,
  aside,
}: {
  eyebrow: string;
  title: ReactNode[];
  paragraphs: string[];
  aside?: ReactNode;
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>();
  return (
    <section className="relative bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div ref={ref} className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow on={on} still={still}>
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-6 text-balance text-[2.3rem] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3rem]" style={serif}>
            <MaskLines on={on} still={still} lines={title} />
          </h2>
          {aside && <motion.div className="mt-10" {...riseProps(on, still, 0.5)}>{aside}</motion.div>}
        </div>
        <div className="flex flex-col gap-5 lg:border-l lg:border-ink/10 lg:pl-16">
          {paragraphs.map((p, i) => (
            <motion.p key={i} className={`text-pretty leading-relaxed ${i === 0 ? "text-[1.15rem] text-ink" : "text-[1.02rem] text-ink/60"}`} {...riseProps(on, still, 0.2 + i * 0.1)}>
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- problem / solution */

export function ProblemSolution({
  eyebrow,
  title,
  problems,
  solutions,
  problemLabel = "Sound familiar?",
  solutionLabel = "What we do",
}: {
  eyebrow: string;
  title: ReactNode[];
  problems: string[];
  solutions: string[];
  problemLabel?: string;
  solutionLabel?: string;
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.2);

  return (
    <DarkPanel>
      <div ref={ref}>
        <SectionHead eyebrow={eyebrow} title={title} tone="dark" on={on} still={still} />
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {[
            { label: problemLabel, items: problems, bad: true },
            { label: solutionLabel, items: solutions, bad: false },
          ].map((col, c) => (
            <motion.div
              key={col.label}
              className={`relative overflow-hidden rounded-[24px] border p-6 sm:p-8 ${col.bad ? "border-white/10 bg-white/[0.03]" : "border-white/15 bg-white/[0.06]"}`}
              initial={still ? false : { opacity: 0, y: 40, rotateY: c ? -14 : 14 }}
              animate={on ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, ease: EASE, delay: 0.2 + c * 0.15 }}
              style={{ transformPerspective: 1200 }}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-16 h-48 w-48 rounded-full blur-[70px] ${c ? "-right-16 bg-blue/30" : "-left-16 bg-orange-600/25"}`}
              />
              <p className={`relative text-[0.72rem] font-medium uppercase tracking-[0.16em] ${col.bad ? "text-orange-bright" : "text-blue-bright"}`}>
                {col.label}
              </p>
              <ul className="relative mt-6 space-y-4">
                {col.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className={`flex gap-3.5 text-[0.98rem] leading-relaxed ${col.bad ? "text-white/65" : "text-white/90"}`}
                    initial={still ? false : { opacity: 0, x: c ? 16 : -16 }}
                    animate={on ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.5 + c * 0.2 + i * 0.08 }}
                  >
                    <span
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${col.bad ? "bg-orange-600/20 text-orange-bright" : "bg-blue text-white"}`}
                    >
                      {col.bad ? <Minus className="h-3 w-3" strokeWidth={3} /> : <Check className="h-3 w-3" strokeWidth={3} />}
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </DarkPanel>
  );
}

/* ---------------------------------------------------------------- card grid */

export function CardGrid({
  eyebrow,
  title,
  intro,
  items,
  icons,
  columns = 4,
}: {
  eyebrow: string;
  title: ReactNode[];
  intro?: string;
  items: { title: string; body?: string }[];
  icons?: LucideIcon[];
  columns?: 2 | 3 | 4;
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.3);
  const cols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div className="relative mx-auto max-w-[1180px]">
        <div ref={ref}>
          <SectionHead eyebrow={eyebrow} title={title} intro={intro} on={on} still={still} />
        </div>
        <div className={`mt-14 grid gap-4 ${cols}`}>
          {items.map((it, i) => {
            const Icon = icons?.[i % icons.length];
            return (
              <motion.div
                key={it.title}
                initial={still ? false : { opacity: 0, y: 50, rotateX: 22, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: (i % columns) * 0.1 }}
                style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
              >
                <TiltCard glow={i % 2 ? "#2563eb" : "#ea580c"} max={7}>
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      {Icon ? (
                        <span className={`flex h-11 w-11 items-center justify-center rounded-full ${i % 2 ? "bg-blue-tint text-blue" : "bg-orange-tint text-orange"}`}>
                          <Icon className="h-5 w-5" strokeWidth={1.7} />
                        </span>
                      ) : (
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 font-mono text-[0.75rem] text-ink/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                      {Icon && <span className="font-mono text-[0.72rem] text-ink/30">{String(i + 1).padStart(2, "0")}</span>}
                    </div>
                    <h3 className={`mt-6 leading-[1.15] tracking-[-0.01em] text-ink ${it.body ? "text-[1.4rem]" : "text-[1.15rem]"}`} style={serif}>
                      {it.title}
                    </h3>
                    {it.body && <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/55">{it.body}</p>}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- process */

function ProcessStep({
  step,
  i,
  n,
  progress,
  still,
}: {
  step: { title: string; body: string };
  i: number;
  n: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  still: boolean;
}) {
  const at = n > 1 ? i / (n - 1) : 0;
  const opacity = useTransform(progress, [at - 0.25, at], [0.35, 1]);
  const scale = useTransform(progress, [at - 0.25, at], [0.5, 1]);
  return (
    <motion.li className="relative pl-12 lg:pl-0 lg:pt-14" style={still ? undefined : { opacity }}>
      <span className="absolute left-0 top-0 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink ring-1 ring-white/20 lg:left-0">
        <motion.span
          className={`h-2.5 w-2.5 rounded-full ${i % 2 ? "bg-blue-bright shadow-[0_0_14px_#3b82f6]" : "bg-orange-bright shadow-[0_0_14px_#ff6b35]"}`}
          style={still ? undefined : { scale }}
        />
      </span>
      <span className="font-mono text-[0.75rem] text-white/35">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="mt-2 text-[1.5rem] leading-tight text-white" style={serif}>
        {step.title}
      </h3>
      <p className="mt-3 max-w-[22rem] text-[0.92rem] leading-relaxed text-white/55">{step.body}</p>
    </motion.li>
  );
}

export function ProcessPanel({ eyebrow, title, steps, id }: { eyebrow: string; title: ReactNode[]; steps: { title: string; body: string }[]; id?: string }) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.3);
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.85", "end 0.55"] });

  return (
    <DarkPanel id={id} className="scroll-mt-20">
      <div ref={ref}>
        <SectionHead eyebrow={eyebrow} title={title} tone="dark" on={on} still={still} />
      </div>
      <div className="relative mt-16">
        {/* rail: vertical on mobile, horizontal on desktop */}
        <span className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[15px] lg:h-px lg:w-auto" />
        <motion.span
          className="absolute bottom-0 left-[15px] top-0 w-px origin-top bg-gradient-to-b from-orange-bright to-blue-bright lg:hidden"
          style={{ scaleY: still ? 1 : scrollYProgress }}
        />
        <motion.span
          className="absolute left-0 right-0 top-[15px] hidden h-px origin-left bg-gradient-to-r from-orange-bright to-blue-bright lg:block"
          style={{ scaleX: still ? 1 : scrollYProgress }}
        />
        <ol ref={listRef} className={`relative grid gap-10 lg:gap-8 ${steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {steps.map((s, i) => (
            <ProcessStep key={s.title} step={s} i={i} n={steps.length} progress={scrollYProgress} still={still} />
          ))}
        </ol>
      </div>
    </DarkPanel>
  );
}

/* ------------------------------------------------------------------- FAQ */

export function FaqBlock({ items, title = ["Common", "questions."] }: { items: { q: string; a: string }[]; title?: string[] }) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.4);
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[360px_1fr] lg:gap-16">
        <div ref={ref} className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow on={on} still={still}>
            FAQ
          </Eyebrow>
          <h2 className="mt-6 text-[2.5rem] leading-[1.02] tracking-[-0.025em] text-ink sm:text-[3.2rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[<>{title[0]}</>, <span key="q" className="italic text-orange">{title[1]}</span>]}
            />
          </h2>
          <motion.p className="mt-5 max-w-[22rem] text-[0.98rem] leading-relaxed text-ink/55" {...riseProps(on, still, 0.35)}>
            Can&rsquo;t find what you&rsquo;re looking for?{" "}
            <Link href="/contact" className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              Ask us directly
            </Link>
            .
          </motion.p>
        </div>
        <Faq items={items} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- related links */

export function ReadingList({
  eyebrow,
  title,
  posts,
}: {
  eyebrow: string;
  title: ReactNode[];
  posts: { slug: string; title: string; category?: string; readTime?: string }[];
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.3);
  if (posts.length === 0) return null;
  return (
    <section className="relative bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div ref={ref}>
          <SectionHead eyebrow={eyebrow} title={title} on={on} still={still} />
        </div>
        <ul className="mt-12 grid gap-3 md:grid-cols-2">
          {posts.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={still ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 2) * 0.08 }}
            >
              <Link
                href={`/blogs/${p.slug}`}
                className="group flex h-full items-center gap-5 rounded-2xl border border-ink/[0.08] bg-white p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_24px_50px_-30px_rgba(11,12,14,0.3)]"
              >
                <span className="font-mono text-[0.75rem] text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">
                  {p.category && <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-ink/40">{p.category}</span>}
                  <span className="mt-1 block text-pretty text-[1.05rem] leading-snug text-ink" style={serif}>
                    {p.title}
                  </span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/[0.05] text-ink transition-all duration-500 group-hover:-rotate-45 group-hover:bg-ink group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Dark panel of related pages, each card with a light "screen" holding its graphic. */
export function RelatedPanel({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: ReactNode[];
  items: { href: string; title: string; body?: string; visual: ReactNode; glow?: string }[];
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.3);
  return (
    <DarkPanel>
      <div ref={ref}>
        <SectionHead eyebrow={eyebrow} title={title} tone="dark" on={on} still={still} />
      </div>
      <div className={`mt-14 grid gap-4 ${items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {items.map((it, i) => (
          <motion.div
            key={it.href}
            initial={still ? false : { opacity: 0, y: 50, rotateX: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
            style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
          >
            <TiltCard tone="dark" glow={it.glow ?? (i % 2 ? "#3b82f6" : "#ff6b35")} max={6}>
              <Link href={it.href} className="group flex h-full flex-col p-5">
                <div className="rounded-[18px] bg-white/[0.06] p-1.5 ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-1">
                  <div className="overflow-hidden rounded-[13px]">{it.visual}</div>
                </div>
                <h3 className="mt-5 text-[1.45rem] leading-[1.1] text-white" style={serif}>
                  {it.title}
                </h3>
                {it.body && <p className="mt-2 text-[0.86rem] leading-relaxed text-white/55">{it.body}</p>}
                <span className="mt-auto flex items-center gap-2 pt-5 text-[0.82rem] font-medium text-white/80">
                  Explore
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-ink">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </DarkPanel>
  );
}
