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
import {
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  Globe,
  PenLine,
  ShoppingBag,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Atmosphere, DarkPanel, EASE, Eyebrow, MaskLines, TiltCard, riseProps, serif } from "@/components/ui/Aesthetic";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import type { BlogBannerVariant } from "@/components/BlogBanner";
import { BlogScene } from "./BlogScene";
import type { BlogSceneData } from "@/lib/blog-scenes";
import { ScaledArt } from "@/components/home/WhatWeBuild";
import { AppsArt, AutomationArt, CroArt, ShopifyArt, UiUxArt, WebsitesArt } from "@/components/home/BuildIllustrations";
import { SceneFrame, sceneBackdrop, scenes } from "@/components/industries/IndustryScenes";

export type PostLite = {
  slug: string;
  title: string;
  excerpt?: string;
  category: string;
  readingTime?: string;
  banner: BlogBannerVariant;
  scene: BlogSceneData;
};

export type TopicLite = {
  slug: string;
  name: string;
  title: string;
  description: string;
  count: number;
  serviceSlug: string;
};

const topicIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "mobile-apps": Smartphone,
  "shopify-ecommerce": ShoppingBag,
  "ui-ux": PenLine,
  "ai-automation": Sparkles,
  cro: ChartColumn,
};

type Art = (props: { on: boolean; still: boolean }) => ReactNode;
export const serviceArt: Record<string, Art> = {
  "website-development": WebsitesArt,
  "mobile-app-development": AppsArt,
  "shopify-development": ShopifyArt,
  "ui-ux-design": UiUxArt,
  "ai-automation": AutomationArt,
  "cro-audit": CroArt,
};

function useOn<T extends Element>(amount = 0.3) {
  const ref = useRef<T>(null);
  const on = useInView(ref, { once: true, amount });
  return [ref, on] as const;
}

/* ------------------------------------------------------------------ hero */

/** Latest article banners fanned out in 3D; they spread further as the page scrolls. */
function BannerStack({ posts }: { posts: PostLite[] }) {
  const still = !!useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 80, damping: 16 };
  const rotateX = useSpring(useTransform(my, [0, 1], still ? [8, 8] : [16, 0]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], still ? [-14, -14] : [-24, -4]), spring);
  const { scrollY } = useScroll();
  const spread = useTransform(scrollY, [0, 500], still ? [1, 1] : [1, 1.7]);

  const layout = [
    { x: -60, y: -40, r: -8 },
    { x: 0, y: 0, r: 0 },
    { x: 60, y: 40, r: 8 },
  ];

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <div
      aria-hidden
      className="relative mx-auto h-[340px] w-full max-w-[520px] sm:h-[420px]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/15 blur-[80px]" />
      <motion.div className="absolute inset-0" style={{ rotateX, rotateY, transformPerspective: 1300, transformStyle: "preserve-3d" }}>
        {posts.slice(0, 3).map((p, i) => (
          <Layer key={p.slug} post={p} i={i} spread={spread} pos={layout[i]} still={still} />
        ))}
      </motion.div>
    </div>
  );
}

function Layer({
  post,
  i,
  spread,
  pos,
  still,
}: {
  post: PostLite;
  i: number;
  spread: ReturnType<typeof useTransform<number, number>>;
  pos: { x: number; y: number; r: number };
  still: boolean;
}) {
  const z = useTransform(spread, (s) => (i - 1) * 70 * s);
  const x = useTransform(spread, (s) => pos.x * s);
  const y = useTransform(spread, (s) => pos.y * s);
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2"
      style={{ z, x, y, rotate: pos.r }}
      initial={still ? false : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.3 + i * 0.15 }}
    >
      <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_40px_80px_-30px_rgba(11,12,14,0.45),0_0_0_1px_rgba(11,12,14,0.05)]">
        <div className="aspect-[16/10] overflow-hidden">
          <BlogScene scene={post.scene} />
        </div>
        <div className="flex items-center justify-between gap-3 px-3.5 py-2.5">
          <span className="truncate text-[0.72rem] font-medium text-ink">{post.title}</span>
          <span className="shrink-0 rounded-full bg-ink/[0.05] px-2 py-0.5 text-[0.6rem] text-ink/60">{post.category}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function BlogHero({
  eyebrow,
  title,
  description,
  crumbs,
  stack,
  stats,
}: {
  eyebrow: string;
  title: ReactNode[];
  description: string;
  crumbs?: Crumb[];
  stack: PostLite[];
  stats?: { label: string; value: string }[];
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.2);
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-[120px] sm:px-8 lg:pb-20 lg:pt-[140px]">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto max-w-[1180px]">
        {crumbs && (
          <motion.div className="mb-8" {...riseProps(on, still, 0)}>
            <Breadcrumbs items={crumbs} />
          </motion.div>
        )}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <Eyebrow on={on} still={still}>
              {eyebrow}
            </Eyebrow>
            <h1 className="mt-6 text-balance text-[2.9rem] leading-[1] tracking-[-0.03em] text-ink sm:text-[4rem] lg:text-[4.6rem]" style={serif}>
              <MaskLines on={on} still={still} lines={title} />
            </h1>
            <motion.p className="mt-7 max-w-[34rem] text-pretty text-[1.05rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.4)}>
              {description}
            </motion.p>
            {stats && (
              <motion.div className="mt-9 flex flex-wrap gap-3" {...riseProps(on, still, 0.55)}>
                {stats.map((s) => (
                  <span key={s.label} className="rounded-2xl border border-ink/[0.08] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(11,12,14,0.03)]">
                    <span className="block text-[1.4rem] leading-none text-ink" style={serif}>
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[0.72rem] uppercase tracking-[0.12em] text-ink/45">{s.label}</span>
                  </span>
                ))}
              </motion.div>
            )}
          </div>
          <BannerStack posts={stack} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- featured */

export function FeaturedPost({ post }: { post: PostLite }) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.25);
  return (
    <DarkPanel innerClassName="px-5 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
      <Link ref={ref as never} href={`/blogs/${post.slug}`} className="group grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <motion.div
          initial={still ? false : { opacity: 0, x: -50, rotateY: 18 }}
          animate={on ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1200 }}
        >
          <div className="rounded-[22px] bg-white/[0.06] p-2 ring-1 ring-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.01]">
            <div className="aspect-[16/11] overflow-hidden rounded-[16px] bg-white">
              <BlogScene scene={post.scene} />
            </div>
          </div>
        </motion.div>
        <div>
          <Eyebrow on={on} still={still} tone="dark">
            Featured insight
          </Eyebrow>
          <motion.div className="mt-6 flex items-center gap-3 text-[0.8rem]" {...riseProps(on, still, 0.2)}>
            <span className="rounded-full border border-white/15 px-3 py-1 text-white/70">{post.category}</span>
            {post.readingTime && <span className="text-white/45">{post.readingTime}</span>}
          </motion.div>
          <motion.h2 className="mt-5 text-balance text-[2.1rem] leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.7rem]" style={serif} {...riseProps(on, still, 0.3)}>
            {post.title}
          </motion.h2>
          {post.excerpt && (
            <motion.p className="mt-5 max-w-[34rem] text-pretty text-[1rem] leading-relaxed text-white/60" {...riseProps(on, still, 0.4)}>
              {post.excerpt}
            </motion.p>
          )}
          <motion.span className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.88rem] font-medium text-ink" {...riseProps(on, still, 0.5)}>
            Read the article
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.span>
        </div>
      </Link>
    </DarkPanel>
  );
}

/* ---------------------------------------------------------------- topics */

export function TopicGrid({ topics }: { topics: TopicLite[] }) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.3);
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div className="relative mx-auto max-w-[1180px]">
        <div ref={ref} className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow on={on} still={still}>
              Browse by topic
            </Eyebrow>
            <h2 className="mt-6 text-[2.5rem] leading-[1.02] tracking-[-0.025em] text-ink sm:text-[3.4rem]" style={serif}>
              <MaskLines on={on} still={still} lines={[<>Six topics.</>, <span key="o" className="italic text-orange">One way of thinking.</span>]} />
            </h2>
          </div>
          <motion.p className="max-w-[26rem] text-[1rem] leading-relaxed text-ink/60 lg:justify-self-end" {...riseProps(on, still, 0.4)}>
            Each hub starts with the overview guides, then goes deep into the details.
          </motion.p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => {
            const Icon = topicIcons[t.slug] ?? Globe;
            const Art = serviceArt[t.serviceSlug] ?? WebsitesArt;
            return (
              <motion.div
                key={t.slug}
                initial={still ? false : { opacity: 0, y: 50, rotateX: 22, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.1 }}
                style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
              >
                <TiltCard glow={i % 2 ? "#2563eb" : "#ea580c"} max={7}>
                  <Link href={`/blogs/category/${t.slug}`} className="group flex h-full flex-col p-4">
                    <div className="rounded-[16px] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.06] transition-transform duration-700 ease-out group-hover:-translate-y-1">
                      <div className="rounded-[12px] bg-gradient-to-br from-[#f3f3f1] to-[#fafaf8]">
                        <ScaledArt>
                          <Art on still={still} />
                        </ScaledArt>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between px-1">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${i % 2 ? "bg-blue-tint text-blue" : "bg-orange-tint text-orange"}`}>
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span className="font-mono text-[0.72rem] text-ink/40">{t.count} articles</span>
                    </div>
                    <h3 className="mt-4 px-1 text-[1.45rem] leading-[1.1] text-ink" style={serif}>
                      {t.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 px-1 text-[0.86rem] leading-relaxed text-ink/55">{t.description}</p>
                    <span className="mt-auto flex items-center gap-2 px-1 pt-5 text-[0.82rem] font-medium text-ink">
                      Open the hub
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/[0.05] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-ink group-hover:text-white">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ section head */

export function BlogSection({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: ReactNode[];
  children: ReactNode;
  id?: string;
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.3);
  return (
    <section id={id} className="relative scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div ref={ref}>
          <Eyebrow on={on} still={still}>
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-6 text-[2.5rem] leading-[1.02] tracking-[-0.025em] text-ink sm:text-[3.4rem]" style={serif}>
            <MaskLines on={on} still={still} lines={title} />
          </h2>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- hub intro */

export function HubIntro({
  intro,
  service,
}: {
  intro: string[];
  service?: { slug: string; name: string; summary: string; label: string };
}) {
  const still = !!useReducedMotion();
  const [ref, on] = useOn<HTMLDivElement>(0.3);
  const Art = service ? serviceArt[service.slug] ?? WebsitesArt : null;
  return (
    <section className="relative bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div ref={ref} className="mx-auto grid max-w-[1180px] items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          {intro.map((p, i) => (
            <motion.p key={i} className={`text-pretty leading-relaxed ${i === 0 ? "text-[1.15rem] text-ink" : "text-[1.02rem] text-ink/60"}`} {...riseProps(on, still, 0.1 + i * 0.1)}>
              {p}
            </motion.p>
          ))}
        </div>
        {service && Art && (
          <motion.div {...riseProps(on, still, 0.2, 40)}>
            <Link
              href={`/services/${service.slug}`}
              className="group relative block overflow-hidden rounded-[24px] bg-ink p-5 text-white sm:p-6"
            >
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-600/25 blur-[70px]" />
              <div className="relative rounded-[16px] bg-white/[0.06] p-1.5 ring-1 ring-white/10 transition-transform duration-700 group-hover:-translate-y-1">
                <div className="rounded-[12px] bg-gradient-to-br from-[#f3f3f1] to-[#fafaf8]">
                  <ScaledArt max={1.4}>
                    <Art on={on} still={still} />
                  </ScaledArt>
                </div>
              </div>
              <p className="relative mt-5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/50">Related service</p>
              <p className="relative mt-2 text-[1.5rem] leading-tight" style={serif}>
                {service.name}
              </p>
              <p className="relative mt-2 text-[0.88rem] leading-relaxed text-white/60">{service.summary}</p>
              <span className="relative mt-5 inline-flex items-center gap-2 text-[0.85rem] font-medium text-white">
                {service.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- article index */

export function ArticleIndex({ posts }: { posts: { slug: string; title: string; readingTime?: string }[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {posts.map((p, i) => (
        <li key={p.slug}>
          <Link
            href={`/blogs/${p.slug}`}
            className="group flex h-full items-center gap-4 rounded-xl border border-ink/[0.06] bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_18px_40px_-28px_rgba(11,12,14,0.35)]"
          >
            <span className="font-mono text-[0.7rem] text-ink/30">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1 text-pretty text-[0.95rem] leading-snug text-ink">{p.title}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------ article bits */

/** Article cover that tilts up into place as it scrolls into view. */
export function ArticleCover({ children, label }: { children: ReactNode; label: string }) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], still ? [1, 1] : [0.93, 1]);
  return (
    <div ref={ref} style={{ perspective: 1400 }}>
      <motion.div
        className="rounded-[24px] bg-white p-2 shadow-[0_50px_100px_-50px_rgba(11,12,14,0.45),0_0_0_1px_rgba(11,12,14,0.06)]"
        style={{ rotateX, scale, transformOrigin: "50% 0%" }}
      >
        <div role="img" aria-label={label} className="aspect-[16/9] overflow-hidden rounded-[18px]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function SceneTile({ slug, still }: { slug: string; still: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  const Scene = scenes[slug];
  return (
    <div ref={ref} className={`bg-gradient-to-br ${sceneBackdrop[slug] ?? "from-[#f5f5f3] to-white"}`}>
      <SceneFrame>{Scene && <Scene on={on} hover={false} still={still} />}</SceneFrame>
    </div>
  );
}

/** Related services and industries as cards with their graphics. */
export function ArticleRelated({
  services,
  industries,
}: {
  services: { slug: string; name: string; summary: string }[];
  industries: { slug: string; name: string; shortDescription: string }[];
}) {
  const still = !!useReducedMotion();
  const items = [
    ...services.map((s) => ({
      href: `/services/${s.slug}`,
      kind: "Service",
      title: s.name,
      body: s.summary,
      visual: (() => {
        const Art = serviceArt[s.slug] ?? WebsitesArt;
        return (
          <div className="bg-gradient-to-br from-[#f3f3f1] to-[#fafaf8]">
            <ScaledArt>
              <Art on still={still} />
            </ScaledArt>
          </div>
        );
      })(),
    })),
    ...industries.map((i) => ({
      href: `/industries/${i.slug}`,
      kind: "Industry",
      title: i.name,
      body: i.shortDescription,
      visual: <SceneTile slug={i.slug} still={still} />,
    })),
  ];
  if (items.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((it, i) => (
        <motion.div
          key={it.href}
          initial={still ? false : { opacity: 0, y: 30, rotateX: 18 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
          style={{ transformPerspective: 1000 }}
        >
          <TiltCard glow={i % 2 ? "#2563eb" : "#ea580c"} max={6}>
            <Link href={it.href} className="group flex h-full flex-col p-3">
              <div className="overflow-hidden rounded-[14px] ring-1 ring-ink/[0.06]">{it.visual}</div>
              <span className="mt-4 px-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink/40">{it.kind}</span>
              <span className="mt-1 px-1 text-[1.2rem] leading-tight text-ink" style={serif}>
                {it.title}
              </span>
              <span className="mt-1.5 line-clamp-2 px-1 text-[0.84rem] leading-relaxed text-ink/55">{it.body}</span>
            </Link>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}
