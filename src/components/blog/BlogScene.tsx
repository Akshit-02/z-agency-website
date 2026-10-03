"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Bot,
  Box,
  Check,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  CreditCard,
  Database,
  Eye,
  FileText,
  Filter,
  GitBranch,
  Heart,
  Home,
  Layers,
  LayoutGrid,
  Loader2,
  Lock,
  Mail,
  MapPin,
  MousePointer2,
  Package,
  Search,
  Send,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Tag,
  Terminal,
  Truck,
  User,
  Users,
  Wallet,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import type { BlogSceneData } from "@/lib/blog-scenes";

/* Realistic interface scenes for blog covers, drawn on a fixed 480×300 canvas
   and scaled to fit any frame. Text inside each scene comes from the article. */

const W = 480;
const H = 300;
const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;
const SHADOW = "shadow-[0_18px_40px_-18px_rgba(11,12,14,0.35),0_0_0_1px_rgba(11,12,14,0.06)]";

const ACCENTS = [
  { c: "#2563eb", t: "#eaf1ff", s: "#dbe7ff" },
  { c: "#ea580c", t: "#fdeee7", s: "#fbdccb" },
  { c: "#7c3aed", t: "#f0eafd", s: "#e2d6fb" },
  { c: "#059669", t: "#e6f8f1", s: "#c9efe0" },
];

type Accent = (typeof ACCENTS)[number];
type P = { d: BlogSceneData; on: boolean; still: boolean; a: Accent; r: () => number };

function rng(seed: number) {
  let s = seed % 2147483647 || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const box = (x: number, y: number, w?: number, h?: number): CSSProperties => ({
  position: "absolute",
  left: x,
  top: y,
  ...(w !== undefined ? { width: w } : {}),
  ...(h !== undefined ? { height: h } : {}),
});

function pop(on: boolean, still: boolean, delay = 0, y = 14) {
  return still
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y, scale: 0.97 },
        animate: on ? { opacity: 1, y: 0, scale: 1 } : {},
        transition: { duration: 0.6, ease: EASE, delay },
      };
}

function draw(on: boolean, still: boolean, delay = 0.3, duration = 1.3) {
  return still
    ? { initial: false as const }
    : { initial: { pathLength: 0 }, animate: on ? { pathLength: 1 } : {}, transition: { duration, ease: EASE, delay } };
}

function series(r: () => number, n: number, lo = 0.25, hi = 0.95, trend = 0.5) {
  const out: number[] = [];
  let v = lo + r() * 0.2;
  for (let i = 0; i < n; i++) {
    v = Math.min(hi, Math.max(lo, v + (r() - 0.5) * 0.25 + (trend * (hi - lo)) / n));
    out.push(v);
  }
  return out;
}

function linePath(vals: number[], w: number, h: number) {
  return vals.map((v, i) => `${i ? "L" : "M"}${((i / (vals.length - 1)) * w).toFixed(1)} ${(h - v * h).toFixed(1)}`).join(" ");
}

/* ---------------------------------------------------------------- pieces */

function Win({
  x,
  y,
  w,
  h,
  url,
  children,
  on,
  still,
  delay = 0,
  dark = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  url: string;
  children: ReactNode;
  on: boolean;
  still: boolean;
  delay?: number;
  dark?: boolean;
}) {
  return (
    <motion.div style={box(x, y, w, h)} className={`overflow-hidden rounded-xl ${dark ? "bg-[#1e1f22]" : "bg-white"} ${SHADOW}`} {...pop(on, still, delay)}>
      <div className={`flex h-[18px] items-center gap-1 px-2 ${dark ? "bg-[#2b2d31]" : "border-b border-ink/[0.06] bg-[#f7f7f6]"}`}>
        <span className="h-[5px] w-[5px] rounded-full bg-[#ff5f57]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#febc2e]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#28c840]" />
        <span className={`ml-2 h-[10px] flex-1 truncate rounded px-1.5 font-mono text-[5.5px] leading-[10px] ${dark ? "bg-white/5 text-white/40" : "bg-ink/[0.05] text-ink/40"}`}>{url}</span>
      </div>
      <div className="relative" style={{ height: h - 18 }}>
        {children}
      </div>
    </motion.div>
  );
}

function Card({
  x,
  y,
  w,
  h,
  children,
  on,
  still,
  delay = 0,
  className = "",
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  children: ReactNode;
  on: boolean;
  still: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div style={box(x, y, w, h)} className={`rounded-xl bg-white ${SHADOW} ${className}`} {...pop(on, still, delay)}>
      {children}
    </motion.div>
  );
}

const Line = ({ w, c = "bg-ink/10", h = 4 }: { w: number | string; c?: string; h?: number }) => (
  <div className={`rounded-full ${c}`} style={{ width: w, height: h }} />
);

/* ================================================================ scenes */

function SpeedScene({ d, on, still, a, r }: P) {
  const score = 90 + Math.floor(r() * 9);
  const metrics = [
    ["LCP", `${(1.4 + r() * 0.9).toFixed(1)} s`, 0.7 + r() * 0.25],
    ["INP", `${Math.floor(90 + r() * 90)} ms`, 0.6 + r() * 0.3],
    ["CLS", `0.0${Math.floor(1 + r() * 8)}`, 0.75 + r() * 0.2],
  ] as const;
  return (
    <>
      <Win x={16} y={18} w={292} h={264} url="yourbrand.com" on={on} still={still}>
        <div className="flex items-center justify-between px-3 py-2">
          <span className="h-2 w-10 rounded-full bg-ink/80" />
          <div className="flex gap-2">{[0, 1, 2].map((i) => <Line key={i} w={18} />)}</div>
        </div>
        <div className="grid grid-cols-[1fr_96px] gap-3 px-3 pt-2">
          <div>
            <p className="line-clamp-2 text-[13px] leading-[1.15] text-ink" style={serif}>{d.label}</p>
            <div className="mt-2 space-y-1"><Line w="90%" /><Line w="70%" /></div>
            <motion.div className="mt-3 inline-block rounded-md px-2.5 py-1 text-[6.5px] font-semibold text-white transition-transform duration-500 group-hover:scale-105" style={{ background: a.c }}>Get started</motion.div>
          </div>
          <div className="h-[74px] rounded-lg" style={{ background: `linear-gradient(135deg, ${a.s}, ${a.t})` }} />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 px-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-ink/[0.06] p-2">
              <div className="h-8 rounded-md bg-ink/[0.04]" />
              <div className="mt-1.5 space-y-1"><Line w="80%" /><Line w="55%" /></div>
            </div>
          ))}
        </div>
        {/* loading waterfall */}
        <div className="absolute bottom-2 left-3 right-3 space-y-[3px]">
          {[0.1, 0.25, 0.35, 0.5].map((off, i) => (
            <motion.div key={i} className="h-[3px] rounded-full" style={{ marginLeft: `${off * 60}%`, background: i === 1 ? "#f59e0b" : a.c, opacity: 0.55 }} initial={still ? false : { width: 0 }} animate={on ? { width: `${18 + r() * 22}%` } : {}} transition={{ duration: 0.8, delay: 0.6 + i * 0.12 }} />
          ))}
        </div>
      </Win>
      <Card x={288} y={34} w={176} h={236} on={on} still={still} delay={0.2} className="p-3">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-semibold text-ink">Performance</span>
          <span className="rounded-full bg-[#dcfce7] px-1.5 py-0.5 text-[6px] font-semibold text-[#15803d]">Mobile</span>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <svg viewBox="0 0 60 60" className="h-[58px] w-[58px] -rotate-90">
            <circle cx="30" cy="30" r="25" fill="#dcfce7" stroke="#bbf7d0" strokeWidth="5" />
            <motion.circle cx="30" cy="30" r="25" fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" initial={still ? false : { pathLength: 0 }} animate={on ? { pathLength: score / 100 } : {}} transition={{ duration: 1.2, ease: EASE, delay: 0.4 }} />
          </svg>
          <div>
            <p className="text-[20px] font-bold leading-none text-[#15803d]">{score}</p>
            <p className="text-[6.5px] text-ink/50">Core Web Vitals passed</p>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {metrics.map(([k, v, w]) => (
            <div key={k}>
              <div className="flex justify-between text-[6.5px] text-ink/55"><span>{k}</span><span className="font-semibold text-ink">{v}</span></div>
              <div className="mt-0.5 h-[4px] rounded-full bg-ink/[0.06]"><motion.div className="h-full rounded-full bg-[#22c55e]" initial={still ? false : { width: 0 }} animate={on ? { width: `${w * 100}%` } : {}} transition={{ duration: 1, delay: 0.5 }} /></div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[6.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Opportunities</p>
        <div className="mt-1.5 space-y-1.5">
          {d.items.slice(0, 3).map((it, i) => (
            <div key={it} className="flex items-center gap-1.5 text-[6.5px] text-ink/70">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${i ? "bg-[#f59e0b]" : "bg-[#ef4444]"}`} />
              <span className="truncate">{it}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

function LandingScene({ d, on, still, a }: P) {
  return (
    <Win x={22} y={16} w={436} h={268} url="yourbrand.com" on={on} still={still}>
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-[4px]" style={{ background: a.c }} /><span className="h-2 w-12 rounded-full bg-ink/80" /></div>
        <div className="flex items-center gap-3 text-[6.5px] text-ink/55"><span>Product</span><span>Pricing</span><span>Customers</span><span>Resources</span></div>
        <span className="rounded-md bg-ink px-2 py-1 text-[6.5px] font-semibold text-white">Book a demo</span>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr] gap-4 px-4 pt-3">
        <div>
          <span className="rounded-full px-2 py-0.5 text-[6px] font-semibold" style={{ background: a.t, color: a.c }}>New · 2026</span>
          <p className="mt-2 line-clamp-3 text-[19px] leading-[1.05] tracking-[-0.01em] text-ink" style={serif}>{d.label}</p>
          <div className="mt-2 space-y-1"><Line w="92%" /><Line w="74%" /></div>
          <div className="mt-3 flex gap-1.5">
            <span className="rounded-md px-2.5 py-1.5 text-[6.5px] font-semibold text-white transition-transform duration-500 group-hover:scale-105" style={{ background: a.c }}>Get started</span>
            <span className="rounded-md border border-ink/15 px-2.5 py-1.5 text-[6.5px] font-semibold text-ink">See how it works</span>
          </div>
        </div>
        <motion.div className="relative h-[116px] overflow-hidden rounded-xl" style={{ background: `linear-gradient(140deg, ${a.s}, ${a.t} 60%, #fff)` }} {...pop(on, still, 0.3)}>
          <div className={`absolute left-4 top-4 h-[70px] w-[110px] rounded-lg bg-white p-2 ${SHADOW}`}>
            <Line w="60%" c="bg-ink/70" />
            <svg viewBox="0 0 100 34" className="mt-2 h-[34px] w-full"><path d="M0 30 L20 24 L40 26 L60 14 L80 16 L100 4" fill="none" stroke={a.c} strokeWidth="2" /></svg>
          </div>
          <div className={`absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[6px] font-semibold text-ink ${SHADOW}`}><CheckCircle2 className="h-2.5 w-2.5 text-[#16a34a]" /> Live</div>
        </motion.div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 px-4">
        {d.items.slice(0, 3).map((it, i) => (
          <motion.div key={it} className="rounded-lg border border-ink/[0.07] p-2" {...pop(on, still, 0.4 + i * 0.1)}>
            <span className="flex h-4 w-4 items-center justify-center rounded-md" style={{ background: a.t }}>
              {[<Zap key="z" className="h-2.5 w-2.5" style={{ color: a.c }} />, <Layers key="l" className="h-2.5 w-2.5" style={{ color: a.c }} />, <ShieldCheck key="s" className="h-2.5 w-2.5" style={{ color: a.c }} />][i]}
            </span>
            <p className="mt-1.5 line-clamp-2 text-[7px] font-semibold leading-tight text-ink">{it}</p>
            <div className="mt-1"><Line w="80%" h={3} /></div>
          </motion.div>
        ))}
      </div>
    </Win>
  );
}

function ShopifyScene(p: P) {
  const v = p.d.seed % 3;
  if (v === 1) return <ThemeEditor {...p} />;
  if (v === 2) return <Storefront {...p} />;
  return <StoreAdmin {...p} />;
}

function StoreAdmin({ d, on, still, a, r }: P) {
  const vals = series(r, 14, 0.2, 0.9, 0.8);
  const sales = (8 + r() * 40).toFixed(1);
  return (
    <Win x={14} y={14} w={452} h={272} url="admin.yourstore.com" on={on} still={still}>
      <div className="flex h-full">
        <div className="w-[86px] bg-[#1a1a1a] px-2 py-2.5 text-[6.5px] text-white/60">
          <div className="mb-3 flex items-center gap-1.5"><span className="h-3 w-3 rounded" style={{ background: "#95bf47" }} /><span className="font-semibold text-white">Your Store</span></div>
          {[[Home, "Home"], [ShoppingCart, "Orders"], [Tag, "Products"], [Users, "Customers"], [BarChart3, "Analytics"], [LayoutGrid, "Apps"], [Settings, "Settings"]].map(([I, t], i) => {
            const Icon = I as typeof Home;
            return (
              <div key={t as string} className={`mb-1 flex items-center gap-1.5 rounded px-1.5 py-1 ${i === 0 ? "bg-white/10 text-white" : ""}`}>
                <Icon className="h-2.5 w-2.5" /> {t as string}
              </div>
            );
          })}
        </div>
        <div className="flex-1 bg-[#f6f6f7] p-3">
          <p className="truncate text-[9px] font-semibold text-ink">{d.label}</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[["Total sales", `$${sales}k`, "+12%"], ["Orders", `${Math.floor(200 + r() * 900)}`, "+8%"], ["Conversion", `${(1.8 + r() * 2).toFixed(1)}%`, "+0.4%"]].map(([k, v2, dlt], i) => (
              <motion.div key={k} className="rounded-lg bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.06)]" {...pop(on, still, 0.2 + i * 0.08)}>
                <p className="text-[6px] text-ink/50">{k}</p>
                <p className="text-[11px] font-bold text-ink">{v2}</p>
                <p className="text-[6px] font-semibold text-[#16a34a]">{dlt}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-[1.4fr_1fr] gap-2">
            <div className="rounded-lg bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <p className="text-[6.5px] font-semibold text-ink">Sales over time</p>
              <svg viewBox="0 0 200 80" className="mt-1 h-[86px] w-full" preserveAspectRatio="none">
                <path d={`${linePath(vals, 200, 76)} L200 80 L0 80 Z`} fill={a.t} />
                <motion.path d={linePath(vals, 200, 76)} fill="none" stroke={a.c} strokeWidth="2" {...draw(on, still)} />
              </svg>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <p className="text-[6.5px] font-semibold text-ink">Things to do</p>
              <div className="mt-1.5 space-y-1.5">
                {d.items.slice(0, 4).map((it, i) => (
                  <div key={it} className="flex items-center gap-1.5 text-[6.5px] text-ink/70">
                    <span className={`flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full ${i < 1 ? "bg-[#16a34a]" : "border border-ink/25"}`}>{i < 1 && <Check className="h-1.5 w-1.5 text-white" strokeWidth={4} />}</span>
                    <span className="truncate">{it}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Win>
  );
}

function ThemeEditor({ d, on, still, a }: P) {
  return (
    <Win x={14} y={14} w={452} h={272} url="Theme editor · Home page" on={on} still={still}>
      <div className="flex h-full">
        <div className="w-[104px] border-r border-ink/[0.07] p-2">
          <p className="text-[6.5px] font-semibold text-ink">Home page</p>
          {["Announcement bar", "Header", "Image banner", ...d.items.slice(0, 3), "Footer"].map((s, i) => (
            <div key={s + i} className={`mt-1 flex items-center justify-between rounded px-1.5 py-1 text-[6px] ${i === 2 ? "text-white" : "text-ink/65"}`} style={i === 2 ? { background: a.c } : {}}>
              <span className="truncate">{s}</span>
              <Eye className="h-2 w-2 shrink-0 opacity-60" />
            </div>
          ))}
          <div className="mt-2 rounded border border-dashed border-ink/20 px-1.5 py-1 text-[6px] text-ink/45">+ Add section</div>
        </div>
        <div className="relative flex-1 bg-[#ececec] p-3">
          <div className="h-full overflow-hidden rounded-md bg-white">
            <div className="bg-ink py-0.5 text-center text-[5px] text-white">Free shipping over $50</div>
            <div className="flex items-center justify-between px-2 py-1.5"><span className="h-1.5 w-8 rounded-full bg-ink/80" /><ShoppingBag className="h-2.5 w-2.5 text-ink" /></div>
            <div className="relative mx-2 h-[86px] overflow-hidden rounded" style={{ background: `linear-gradient(135deg, ${a.s}, ${a.t})` }}>
              <div className="absolute inset-0 rounded ring-2 ring-offset-0" style={{ boxShadow: `inset 0 0 0 1.5px ${a.c}` }} />
              <p className="absolute bottom-3 left-3 line-clamp-2 max-w-[70%] text-[11px] leading-tight text-ink" style={serif}>{d.label}</p>
              <span className="absolute left-1 top-1 rounded px-1 text-[5px] font-semibold text-white" style={{ background: a.c }}>Image banner</span>
            </div>
            <div className="mx-2 mt-2 grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <div className="h-[46px] rounded bg-ink/[0.05]" />
                  <div className="mt-1"><Line w="80%" h={3} /></div>
                  <p className="mt-0.5 text-[5.5px] font-semibold text-ink">${(24 + i * 11).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[96px] border-l border-ink/[0.07] p-2">
          <p className="text-[6.5px] font-semibold text-ink">Image banner</p>
          <p className="mt-2 text-[5.5px] text-ink/45">Colour scheme</p>
          <div className="mt-1 flex gap-1">{[a.c, "#0b0c0e", "#f5f5f4", a.s].map((c) => <span key={c} className="h-3 w-3 rounded ring-1 ring-ink/10" style={{ background: c }} />)}</div>
          <p className="mt-2 text-[5.5px] text-ink/45">Heading size</p>
          <div className="mt-1 h-1 rounded-full bg-ink/10"><div className="h-full w-2/3 rounded-full" style={{ background: a.c }} /></div>
          <p className="mt-2 text-[5.5px] text-ink/45">Button label</p>
          <div className="mt-1 rounded border border-ink/15 px-1 py-0.5 text-[5.5px] text-ink">Shop now</div>
          <div className="mt-3 rounded bg-ink py-1 text-center text-[6px] font-semibold text-white transition-transform group-hover:scale-105">Save</div>
        </div>
      </div>
    </Win>
  );
}

function Storefront({ d, on, still, a, r }: P) {
  return (
    <>
      <Win x={14} y={14} w={360} h={272} url="yourstore.com" on={on} still={still}>
        <div className="bg-ink py-0.5 text-center text-[5.5px] text-white">New season · Free returns</div>
        <div className="flex items-center justify-between px-3 py-2 text-[6px] text-ink/60">
          <span className="h-2 w-10 rounded-full bg-ink/80" />
          <div className="flex gap-2"><span>Shop</span><span>New</span><span>About</span></div>
          <div className="flex gap-1.5"><Search className="h-2.5 w-2.5" /><ShoppingBag className="h-2.5 w-2.5" /></div>
        </div>
        <div className="relative mx-3 h-[96px] overflow-hidden rounded-lg" style={{ background: `linear-gradient(120deg, ${a.s}, ${a.t})` }}>
          <p className="absolute left-3 top-4 line-clamp-2 max-w-[62%] text-[14px] leading-tight text-ink" style={serif}>{d.label}</p>
          <span className="absolute bottom-3 left-3 rounded-full bg-ink px-2.5 py-1 text-[6px] font-semibold text-white">Shop now</span>
          <div className="absolute -right-4 bottom-0 h-[86px] w-[86px] rounded-full bg-white/50" />
        </div>
        <div className="mx-3 mt-2 grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div key={i} {...pop(on, still, 0.3 + i * 0.06)}>
              <div className="h-[58px] rounded-md bg-ink/[0.05]" style={i === 1 ? { background: a.t } : {}} />
              <div className="mt-1"><Line w="85%" h={3} /></div>
              <p className="mt-0.5 text-[6px] font-semibold text-ink">${(19 + Math.floor(r() * 80)).toFixed(2)}</p>
            </motion.div>
          ))}
        </div>
      </Win>
      <Card x={300} y={60} w={166} on={on} still={still} delay={0.35} className="p-3">
        <div className="flex items-center justify-between"><span className="text-[8px] font-semibold text-ink">Your cart (2)</span><X className="h-2.5 w-2.5 text-ink/40" /></div>
        {[0, 1].map((i) => (
          <div key={i} className="mt-2 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md" style={{ background: i ? a.t : "#f1f1f0" }} />
            <div className="flex-1"><Line w="80%" h={3} /><div className="mt-1"><Line w="45%" h={3} /></div></div>
            <span className="text-[6.5px] font-semibold text-ink">${32 + i * 14}</span>
          </div>
        ))}
        <div className="mt-2.5 rounded-md p-1.5 text-[6px]" style={{ background: a.t, color: a.c }}>
          <Sparkles className="mr-1 inline h-2 w-2" />{d.items[0]}
        </div>
        <div className="mt-2 rounded-md bg-ink py-1.5 text-center text-[6.5px] font-semibold text-white transition-transform group-hover:scale-105">Checkout · $78.00</div>
      </Card>
    </>
  );
}

const PRODUCTS = ["Everyday Tote", "Trail Runner", "Hydrating Serum", "Linen Shirt", "Ceramic Mug", "Wireless Buds"];

function ProductShape({ i, c }: { i: number; c: string }) {
  const shapes = [
    <path key="0" d="M30 40 h60 l6 60 h-72 z M45 40 q15 -24 30 0" fill={c} stroke="#00000022" />,
    <path key="1" d="M14 86 q4 -30 30 -36 l26 -12 q18 4 30 22 q16 6 18 26 z" fill={c} />,
    <g key="2"><rect x="46" y="14" width="28" height="16" rx="4" fill="#1f2937" /><rect x="38" y="30" width="44" height="72" rx="10" fill={c} /><rect x="46" y="52" width="28" height="22" rx="3" fill="#fff" opacity=".8" /></g>,
    <path key="3" d="M30 30 l18 -10 q12 8 24 0 l18 10 l12 22 l-16 6 v44 h-52 v-44 l-16 -6 z" fill={c} />,
    <g key="4"><rect x="34" y="34" width="50" height="62" rx="8" fill={c} /><path d="M84 48 q22 0 0 34" fill="none" stroke={c} strokeWidth="8" /></g>,
    <g key="5"><rect x="36" y="44" width="48" height="40" rx="20" fill={c} /><circle cx="48" cy="60" r="7" fill="#fff" opacity=".7" /><circle cx="72" cy="60" r="7" fill="#fff" opacity=".7" /></g>,
  ];
  return <svg viewBox="0 0 120 120" className="h-full w-full">{shapes[i]}</svg>;
}

function PdpScene({ d, on, still, a, r }: P) {
  const pi = d.seed % PRODUCTS.length;
  return (
    <>
      <Win x={14} y={16} w={352} h={268} url={`yourstore.com/products/${PRODUCTS[pi].toLowerCase().replace(/ /g, "-")}`} on={on} still={still}>
        <div className="grid grid-cols-[1fr_1fr] gap-3 p-3">
          <div>
            <div className="relative h-[160px] rounded-lg p-6" style={{ background: `linear-gradient(150deg, ${a.t}, #f6f6f4)` }}>
              <motion.div className="h-full transition-transform duration-700 group-hover:scale-105" {...pop(on, still, 0.2)}><ProductShape i={pi} c={a.c} /></motion.div>
              <span className="absolute left-2 top-2 rounded-full bg-white px-1.5 py-0.5 text-[5.5px] font-semibold text-ink">New</span>
            </div>
            <div className="mt-1.5 grid grid-cols-4 gap-1">{[0, 1, 2, 3].map((i) => <div key={i} className={`h-7 rounded ${i === 0 ? "ring-1 ring-ink" : ""}`} style={{ background: i % 2 ? "#f1f1ef" : a.t }} />)}</div>
          </div>
          <div>
            <p className="text-[5.5px] uppercase tracking-[0.14em] text-ink/45">Brand</p>
            <p className="text-[13px] leading-tight text-ink" style={serif}>{PRODUCTS[pi]}</p>
            <div className="mt-1 flex items-center gap-0.5">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-2 w-2 fill-[#f59e0b] text-[#f59e0b]" />)}<span className="ml-1 text-[5.5px] text-ink/45">{Math.floor(40 + r() * 400)} reviews</span></div>
            <p className="mt-1.5 text-[12px] font-bold text-ink">${(29 + Math.floor(r() * 90)).toFixed(2)}</p>
            <p className="mt-2 text-[5.5px] text-ink/45">Colour</p>
            <div className="mt-1 flex gap-1">{[a.c, "#0b0c0e", "#d6d3d1"].map((c, i) => <span key={c} className={`h-3 w-3 rounded-full ${i === 0 ? "ring-1 ring-ink ring-offset-1" : ""}`} style={{ background: c }} />)}</div>
            <p className="mt-2 text-[5.5px] text-ink/45">Size · <span className="underline">Size guide</span></p>
            <div className="mt-1 flex gap-1">{["S", "M", "L", "XL"].map((s, i) => <span key={s} className={`flex h-3.5 w-4 items-center justify-center rounded text-[5.5px] ${i === 1 ? "bg-ink text-white" : "border border-ink/15 text-ink"}`}>{s}</span>)}</div>
            <div className="mt-2.5 rounded-md py-1.5 text-center text-[7px] font-semibold text-white transition-transform group-hover:scale-105" style={{ background: a.c }}>Add to cart</div>
            <p className="mt-1.5 flex items-center gap-1 text-[5.5px] text-ink/55"><Truck className="h-2.5 w-2.5" /> Free delivery by Friday</p>
          </div>
        </div>
      </Win>
      <Card x={334} y={70} w={132} on={on} still={still} delay={0.4} className="p-2.5">
        <p className="text-[6.5px] font-semibold text-ink">Page review</p>
        {d.items.slice(0, 4).map((it, i) => (
          <div key={it} className="mt-1.5 flex items-start gap-1.5">
            <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full text-[5.5px] font-bold text-white" style={{ background: a.c }}>{i + 1}</span>
            <span className="text-[6px] leading-tight text-ink/70">{it}</span>
          </div>
        ))}
      </Card>
    </>
  );
}

function CheckoutScene({ d, on, still, a, r }: P) {
  const total = (60 + r() * 140).toFixed(2);
  return (
    <>
      <Win x={14} y={14} w={452} h={272} url="checkout.yourstore.com" on={on} still={still}>
        <div className="grid h-full grid-cols-[1.25fr_1fr]">
          <div className="p-3">
            <div className="flex items-center gap-1 text-[6px] text-ink/45">
              {["Cart", "Information", "Shipping", "Payment"].map((s, i) => (
                <span key={s} className="flex items-center gap-1">
                  <span className={i === 3 ? "font-semibold text-ink" : ""}>{s}</span>
                  {i < 3 && <ChevronRight className="h-2 w-2" />}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[8px] font-semibold text-ink">Express checkout</p>
            <div className="mt-1 grid grid-cols-3 gap-1">{["Wallet", "Pay later", "Shop Pay"].map((s, i) => <div key={s} className={`rounded py-1.5 text-center text-[6px] font-semibold ${i === 0 ? "bg-ink text-white" : i === 1 ? "bg-[#ffb3c7] text-ink" : "bg-[#5a31f4] text-white"}`}>{s}</div>)}</div>
            <p className="mt-2.5 text-[8px] font-semibold text-ink">Payment</p>
            <div className="mt-1 rounded-lg border p-2" style={{ borderColor: a.c }}>
              <div className="flex items-center justify-between text-[6.5px] font-semibold text-ink"><span className="flex items-center gap-1"><CreditCard className="h-2.5 w-2.5" /> Credit card</span><span className="h-2 w-2 rounded-full border-[3px]" style={{ borderColor: a.c }} /></div>
              <div className="mt-1.5 rounded border border-ink/15 px-1.5 py-1 font-mono text-[6px] text-ink/70">4242 4242 4242 4242</div>
              <div className="mt-1 grid grid-cols-2 gap-1"><div className="rounded border border-ink/15 px-1.5 py-1 font-mono text-[6px] text-ink/50">12 / 28</div><div className="rounded border border-ink/15 px-1.5 py-1 font-mono text-[6px] text-ink/50">CVC</div></div>
            </div>
            <div className="mt-1 flex items-center justify-between rounded-lg border border-ink/10 p-2 text-[6.5px] text-ink/60"><span className="flex items-center gap-1"><Wallet className="h-2.5 w-2.5" /> Pay in 4</span><span className="h-2 w-2 rounded-full border border-ink/25" /></div>
            <div className="mt-2 flex items-center justify-center gap-1 rounded-md py-1.5 text-[7px] font-semibold text-white transition-transform group-hover:scale-[1.03]" style={{ background: a.c }}><Lock className="h-2.5 w-2.5" /> Pay now</div>
          </div>
          <div className="border-l border-ink/[0.06] bg-[#fafafa] p-3">
            {[0, 1].map((i) => (
              <div key={i} className="mb-2 flex items-center gap-2">
                <span className="relative h-8 w-8 rounded-md" style={{ background: i ? a.t : "#ececea" }}><span className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-ink/60 text-[5px] text-white">1</span></span>
                <div className="flex-1"><Line w="80%" h={3} /><div className="mt-1"><Line w="40%" h={3} /></div></div>
                <span className="text-[6.5px] font-semibold text-ink">${(24 + i * 18).toFixed(2)}</span>
              </div>
            ))}
            <div className="mt-2 flex gap-1"><div className="flex-1 rounded border border-ink/15 px-1.5 py-1 text-[6px] text-ink/40">Discount code</div><div className="rounded bg-ink/10 px-2 py-1 text-[6px] text-ink/60">Apply</div></div>
            <div className="mt-2 space-y-1 text-[6.5px] text-ink/60">
              <div className="flex justify-between"><span>Subtotal</span><span>${(Number(total) - 8).toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>$8.00</span></div>
              <div className="flex justify-between border-t border-ink/10 pt-1 text-[8px] font-bold text-ink"><span>Total</span><span>${total}</span></div>
            </div>
          </div>
        </div>
      </Win>
      <motion.div style={box(30, 236)} className={`flex flex-col gap-1`} {...pop(on, still, 0.6)}>
        {d.items.slice(0, 2).map((it) => (
          <span key={it} className={`flex w-fit items-center gap-1 rounded-full bg-white px-2 py-1 text-[6px] font-medium text-ink ${SHADOW}`}><CheckCircle2 className="h-2.5 w-2.5 text-[#16a34a]" />{it}</span>
        ))}
      </motion.div>
    </>
  );
}

function OrdersScene({ d, on, still, a, r }: P) {
  const steps = ["Ordered", "Packed", "Shipped", "Out for delivery", "Delivered"];
  const at = 3;
  return (
    <>
      <Card x={16} y={18} w={200} h={264} on={on} still={still} className="p-3">
        <p className="text-[6px] uppercase tracking-[0.14em] text-ink/45">Order #{(10000 + (d.seed % 89999)).toString()}</p>
        <p className="mt-0.5 text-[12px] text-ink" style={serif}>Arriving today</p>
        <div className="mt-3 space-y-0">
          {steps.map((s, i) => (
            <div key={s} className="flex gap-2">
              <div className="flex flex-col items-center">
                <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${i <= at ? "text-white" : "border border-ink/20"}`} style={i <= at ? { background: a.c } : {}}>{i <= at && <Check className="h-2 w-2" strokeWidth={3} />}</span>
                {i < steps.length - 1 && <span className="h-[22px] w-px" style={{ background: i < at ? a.c : "rgba(11,12,14,0.12)" }} />}
              </div>
              <div className="-mt-0.5">
                <p className={`text-[7px] ${i <= at ? "font-semibold text-ink" : "text-ink/40"}`}>{s}</p>
                <p className="text-[5.5px] text-ink/40">{i <= at ? `${8 + i * 3}:${i ? "15" : "02"} ${i < 2 ? "Mon" : "Tue"}` : "Pending"}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-ink/[0.03] p-2">
          <Package className="h-4 w-4" style={{ color: a.c }} />
          <div><p className="text-[6.5px] font-semibold text-ink">{Math.floor(1 + r() * 3)} items · Express</p><p className="text-[5.5px] text-ink/45">Carrier tracking available</p></div>
        </div>
      </Card>
      <Card x={196} y={34} w={268} h={150} on={on} still={still} delay={0.2} className="overflow-hidden">
        <svg viewBox="0 0 268 150" className="absolute inset-0 h-full w-full rounded-xl">
          <rect width="268" height="150" fill="#eef2f6" />
          <path d="M0 60 H268 M0 110 H268 M70 0 V150 M180 0 V150" stroke="#fff" strokeWidth="8" />
          <path d="M0 20 L268 140" stroke="#fff" strokeWidth="5" />
          <rect x="196" y="12" width="56" height="40" rx="6" fill="#cdeccb" />
          <motion.path d="M30 124 C 80 120, 90 70, 140 64 S 210 40, 236 30" fill="none" stroke={a.c} strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" {...draw(on, still, 0.4)} />
          <circle cx="30" cy="124" r="5" fill="#0b0c0e" />
        </svg>
        <MapPin className="absolute h-5 w-5" style={{ left: 226, top: 12, color: a.c, fill: "#fff" }} />
        <motion.div className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white ${SHADOW}`} initial={{ left: 20, top: 112 }} animate={on && !still ? { left: [20, 128, 200], top: [112, 52, 30] } : { left: 128, top: 52 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}>
          <Truck className="h-3 w-3" style={{ color: a.c }} />
        </motion.div>
      </Card>
      <Card x={196} y={196} w={268} on={on} still={still} delay={0.35} className="p-2.5">
        <p className="flex items-center gap-1 text-[6.5px] font-semibold text-ink"><Bell className="h-2.5 w-2.5" style={{ color: a.c }} /> Updates</p>
        {d.items.slice(0, 3).map((it, i) => (
          <div key={it} className="mt-1.5 flex items-center justify-between gap-2 text-[6.5px]">
            <span className="truncate text-ink/70">{it}</span>
            <span className="shrink-0 text-ink/35">{i + 1}h ago</span>
          </div>
        ))}
      </Card>
    </>
  );
}

function AnalyticsScene({ d, on, still, a, r }: P) {
  const vals = series(r, 18, 0.2, 0.92, 0.6);
  const prev = series(r, 18, 0.15, 0.7, 0.2);
  return (
    <Win x={14} y={14} w={452} h={272} url="analytics · overview" on={on} still={still}>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="truncate text-[9px] font-semibold text-ink">{d.label}</p>
          <span className="rounded border border-ink/10 px-1.5 py-0.5 text-[6px] text-ink/60">Last 30 days ▾</span>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {[["Sessions", `${(12 + r() * 80).toFixed(1)}k`, "+14%"], ["Conversion", `${(1.5 + r() * 3).toFixed(2)}%`, "+0.6%"], ["Revenue", `$${(10 + r() * 90).toFixed(1)}k`, "+9%"], ["Bounce", `${(30 + r() * 25).toFixed(0)}%`, "−4%"]].map(([k, v, dl], i) => (
            <motion.div key={k} className={`rounded-lg border p-2 ${i === 0 ? "" : "border-ink/[0.07]"}`} style={i === 0 ? { borderColor: a.c, background: a.t } : {}} {...pop(on, still, 0.15 + i * 0.06)}>
              <p className="text-[6px] text-ink/50">{k}</p>
              <p className="text-[11px] font-bold text-ink">{v}</p>
              <p className="text-[6px] font-semibold text-[#16a34a]">{dl}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-[1.6fr_1fr] gap-2">
          <div className="rounded-lg border border-ink/[0.07] p-2">
            <div className="flex gap-2 text-[5.5px] text-ink/50"><span className="flex items-center gap-1"><span className="h-1 w-2 rounded-full" style={{ background: a.c }} />This period</span><span className="flex items-center gap-1"><span className="h-1 w-2 rounded-full bg-ink/25" />Previous</span></div>
            <svg viewBox="0 0 240 90" className="mt-1 h-[108px] w-full" preserveAspectRatio="none">
              {[22, 45, 68].map((y) => <line key={y} x1="0" x2="240" y1={y} y2={y} stroke="#0b0c0e" strokeOpacity="0.05" />)}
              <path d={`${linePath(vals, 240, 86)} L240 90 L0 90 Z`} fill={a.t} />
              <path d={linePath(prev, 240, 86)} fill="none" stroke="#0b0c0e" strokeOpacity="0.2" strokeDasharray="3 3" />
              <motion.path d={linePath(vals, 240, 86)} fill="none" stroke={a.c} strokeWidth="2" {...draw(on, still)} />
            </svg>
          </div>
          <div className="rounded-lg border border-ink/[0.07] p-2">
            <p className="text-[6.5px] font-semibold text-ink">Top insights</p>
            {d.items.slice(0, 4).map((it, i) => (
              <div key={it} className="mt-1.5">
                <p className="truncate text-[6px] text-ink/70">{it}</p>
                <div className="mt-0.5 h-[4px] rounded-full bg-ink/[0.05]"><motion.div className="h-full rounded-full" style={{ background: i ? `${a.c}99` : a.c }} initial={still ? false : { width: 0 }} animate={on ? { width: `${85 - i * 17}%` } : {}} transition={{ duration: 0.9, delay: 0.5 + i * 0.08 }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Win>
  );
}

function MiniPage({ a, highlight }: { a: Accent; highlight: boolean }) {
  return (
    <div className="h-full rounded-md border border-ink/[0.08] bg-white p-1.5">
      <Line w="40%" h={3} c="bg-ink/60" />
      <div className="mt-1.5 h-[40px] rounded" style={{ background: highlight ? a.t : "#f1f1ef" }} />
      <div className="mt-1.5 space-y-1"><Line w="90%" h={3} /><Line w="70%" h={3} /></div>
      <div className={`mt-2 rounded py-1 text-center text-[5.5px] font-semibold ${highlight ? "text-white" : "bg-ink/10 text-ink/60"}`} style={highlight ? { background: a.c } : {}}>{highlight ? "Get yours today" : "Buy now"}</div>
    </div>
  );
}

function AbTestScene({ d, on, still, a, r }: P) {
  const ca = 2 + r() * 1.5;
  const cb = ca * (1.12 + r() * 0.3);
  const prob = 88 + Math.floor(r() * 11);
  return (
    <Card x={16} y={16} w={448} h={268} on={on} still={still} className="p-3.5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[6px] uppercase tracking-[0.14em] text-ink/45">Experiment</p>
          <p className="truncate text-[11px] text-ink" style={serif}>{d.label}</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#dcfce7] px-2 py-0.5 text-[6px] font-semibold text-[#15803d]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c55e]" /> Running · day {7 + (d.seed % 14)}</span>
      </div>
      <div className="mt-3 grid grid-cols-[1fr_1fr_1.15fr] gap-3">
        {[false, true].map((hl, i) => (
          <motion.div key={i} {...pop(on, still, 0.2 + i * 0.12)}>
            <p className="mb-1 text-[6.5px] font-semibold text-ink">{i ? "Variant B" : "Control A"}</p>
            <div className="h-[118px] transition-transform duration-500 group-hover:-translate-y-0.5"><MiniPage a={a} highlight={hl} /></div>
          </motion.div>
        ))}
        <div className="rounded-lg bg-ink/[0.03] p-2.5">
          <p className="text-[6.5px] font-semibold text-ink">Conversion rate</p>
          {[["A", ca, "bg-ink/25"], ["B", cb, ""]].map(([k, v, c], i) => (
            <div key={k as string} className="mt-2">
              <div className="flex justify-between text-[6px] text-ink/60"><span>{k as string}</span><span className="font-semibold text-ink">{(v as number).toFixed(2)}%</span></div>
              <div className="mt-0.5 h-[6px] rounded-full bg-white"><motion.div className={`h-full rounded-full ${c}`} style={i ? { background: a.c } : {}} initial={still ? false : { width: 0 }} animate={on ? { width: `${((v as number) / (cb * 1.1)) * 100}%` } : {}} transition={{ duration: 1, delay: 0.5 }} /></div>
            </div>
          ))}
          <div className="mt-3 rounded-md bg-white p-2">
            <p className="text-[6px] text-ink/50">Probability B is better</p>
            <p className="text-[15px] font-bold" style={{ color: a.c }}>{prob}%</p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[6.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Hypotheses</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {d.items.slice(0, 3).map((it) => <span key={it} className="rounded-full border border-ink/10 px-2 py-0.5 text-[6px] text-ink/70">{it}</span>)}
      </div>
    </Card>
  );
}

function funnelRows(items: string[], r: () => number) {
  const out: { it: string; n: number }[] = [];
  let n = Math.floor(8000 + r() * 40000);
  items.forEach((it, i) => {
    if (i) n = Math.floor(n * (0.35 + r() * 0.4));
    out.push({ it, n });
  });
  return out;
}

function FunnelScene({ d, on, still, a, r }: P) {
  const rows = funnelRows(d.items.slice(0, 4), r);
  const max = rows[0].n;
  return (
    <Card x={16} y={16} w={448} h={268} on={on} still={still} className="p-4">
      <div className="flex items-center justify-between">
        <p className="truncate text-[11px] text-ink" style={serif}>{d.label}</p>
        <span className="rounded border border-ink/10 px-1.5 py-0.5 text-[6px] text-ink/55">Funnel · 30 days</span>
      </div>
      <div className="mt-4 space-y-3">
        {rows.map((row, i) => (
          <div key={row.it}>
            <div className="flex items-center gap-3">
              <span className="w-[110px] truncate text-[7px] text-ink/75">{row.it}</span>
              <div className="h-[24px] flex-1 rounded-md bg-ink/[0.04]">
                <motion.div className="flex h-full items-center justify-end rounded-md pr-2 text-[6.5px] font-semibold text-white" style={{ background: a.c, opacity: 1 - i * 0.16 }} initial={still ? false : { width: 0 }} animate={on ? { width: `${Math.max(14, (row.n / max) * 100)}%` } : {}} transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.15 }}>
                  {row.n.toLocaleString("en-US")}
                </motion.div>
              </div>
            </div>
            {i < rows.length - 1 && (
              <p className="ml-[122px] mt-1 text-[6px] font-semibold text-[#dc2626]">↓ {Math.round((1 - rows[i + 1].n / row.n) * 100)}% drop-off</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

function HeatmapScene({ d, on, still, a, r }: P) {
  const blobs = Array.from({ length: 6 }, () => ({ x: 20 + r() * 220, y: 30 + r() * 180, s: 30 + r() * 50, h: r() }));
  return (
    <>
      <Win x={14} y={14} w={290} h={272} url="yourbrand.com · heatmap" on={on} still={still}>
        <div className="relative h-full p-3 opacity-90">
          <div className="flex justify-between"><span className="h-2 w-10 rounded-full bg-ink/70" /><div className="flex gap-2">{[0, 1, 2].map((i) => <Line key={i} w={16} />)}</div></div>
          <div className="mt-3 h-[70px] rounded-lg bg-ink/[0.05]" />
          <div className="mt-2 grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <div key={i} className="h-[52px] rounded-md bg-ink/[0.05]" />)}</div>
          <div className="mt-2 space-y-1"><Line w="80%" /><Line w="60%" /></div>
          <div className="mx-auto mt-3 w-24 rounded-md bg-ink/15 py-1.5" />
          {blobs.map((b, i) => (
            <motion.span key={i} className="absolute rounded-full mix-blend-multiply" style={{ left: b.x, top: b.y, width: b.s, height: b.s, background: `radial-gradient(circle, ${b.h > 0.5 ? "rgba(239,68,68,.75)" : "rgba(249,115,22,.65)"} 0%, rgba(250,204,21,.45) 45%, transparent 70%)` }} initial={still ? false : { opacity: 0, scale: 0.4 }} animate={on ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }} />
          ))}
          <MousePointer2 className="absolute h-4 w-4 fill-white text-ink transition-transform duration-700 group-hover:translate-x-6" style={{ left: 120, top: 150 }} />
        </div>
      </Win>
      <Card x={292} y={40} w={174} on={on} still={still} delay={0.25} className="p-3">
        <div className="flex items-center justify-between"><span className="text-[8px] font-semibold text-ink">UX audit</span><span className="rounded-full px-1.5 py-0.5 text-[6px] font-semibold" style={{ background: a.t, color: a.c }}>{d.items.length} findings</span></div>
        <p className="mt-1 line-clamp-2 text-[6.5px] text-ink/50">{d.label}</p>
        {d.items.slice(0, 4).map((it, i) => (
          <div key={it} className="mt-2 flex items-start gap-1.5 border-t border-ink/[0.06] pt-2">
            <span className={`mt-0.5 rounded px-1 text-[5px] font-bold uppercase text-white ${["bg-[#dc2626]", "bg-[#f59e0b]", "bg-[#f59e0b]", "bg-[#16a34a]"][i]}`}>{["High", "Med", "Med", "Low"][i]}</span>
            <span className="text-[6.5px] leading-tight text-ink/75">{it}</span>
          </div>
        ))}
      </Card>
    </>
  );
}

function DesignScene({ d, on, still, a }: P) {
  return (
    <motion.div style={box(14, 14, 452, 272)} className={`overflow-hidden rounded-xl bg-[#2c2c2c] ${SHADOW}`} {...pop(on, still)}>
      <div className="flex h-[20px] items-center gap-2 border-b border-white/10 px-2 text-[6px] text-white/60">
        <span className="flex h-3 w-3 items-center justify-center rounded bg-[#0d99ff] text-white"><LayoutGrid className="h-2 w-2" /></span>
        <MousePointer2 className="h-2.5 w-2.5 text-white" /><Box className="h-2.5 w-2.5" /><PenToolIcon /><span className="ml-auto truncate">{d.label}</span>
        <span className="flex -space-x-1">{["#f59e0b", "#10b981", a.c].map((c) => <span key={c} className="h-3 w-3 rounded-full border border-[#2c2c2c]" style={{ background: c }} />)}</span>
        <span className="rounded bg-[#0d99ff] px-1.5 py-0.5 text-white">Share</span>
      </div>
      <div className="flex" style={{ height: 252 }}>
        <div className="w-[96px] border-r border-white/10 p-2 text-[6px] text-white/60">
          <p className="mb-1 text-white/40">Layers</p>
          {["Desktop / Home", ...d.items.slice(0, 3), "Mobile / Home", "Components"].map((l, i) => (
            <div key={l + i} className={`mb-0.5 flex items-center gap-1 truncate rounded px-1 py-0.5 ${i === 1 ? "bg-[#0d99ff]/25 text-white" : ""}`} style={{ paddingLeft: i > 0 && i < 4 ? 10 : 4 }}>
              <LayoutGrid className="h-2 w-2 shrink-0" /> <span className="truncate">{l}</span>
            </div>
          ))}
        </div>
        <div className="relative flex-1 bg-[#e5e5e5]">
          <motion.div className="absolute left-4 top-5 h-[170px] w-[170px] rounded-sm bg-white p-2" {...pop(on, still, 0.2)}>
            <span className="absolute -top-3 left-0 text-[5.5px] text-ink/50">Desktop / Home</span>
            <div className="flex justify-between"><Line w={24} h={3} c="bg-ink/70" /><div className="flex gap-1"><Line w={10} h={3} /><Line w={10} h={3} /></div></div>
            <p className="mt-3 line-clamp-2 text-[9px] leading-tight text-ink" style={serif}>{d.label}</p>
            <div className="mt-2 rounded px-1.5 py-1 text-[5px] font-semibold text-white" style={{ background: a.c, width: "fit-content" }}>Primary button</div>
            <div className="relative mt-3 grid grid-cols-2 gap-1.5">
              <div className="h-12 rounded ring-[1.5px] ring-[#0d99ff]" style={{ background: a.t }}>
                {[[-2, -2], [-2, 46], [70, -2], [70, 46]].map(([t, l], i) => <span key={i} className="absolute h-1.5 w-1.5 border border-[#0d99ff] bg-white" style={{ top: t, left: l }} />)}
                <span className="absolute -bottom-3 left-2 rounded bg-[#0d99ff] px-1 text-[5px] text-white">72 × 48</span>
              </div>
              <div className="h-12 rounded bg-ink/[0.06]" />
            </div>
          </motion.div>
          <motion.div className="absolute left-[196px] top-5 h-[170px] w-[86px] rounded-lg bg-white p-1.5" {...pop(on, still, 0.3)}>
            <span className="absolute -top-3 left-0 text-[5.5px] text-ink/50">Mobile</span>
            <Line w={20} h={3} c="bg-ink/70" />
            <div className="mt-2 h-[48px] rounded" style={{ background: a.t }} />
            <div className="mt-1.5 space-y-1"><Line w="90%" h={3} /><Line w="60%" h={3} /></div>
            <div className="mt-2 rounded py-1 text-center text-[5px] font-semibold text-white" style={{ background: a.c }}>Button</div>
          </motion.div>
          <motion.div className="absolute flex items-center gap-1" initial={{ left: 120, top: 150 }} animate={on && !still ? { left: [120, 70, 110], top: [150, 120, 130] } : {}} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <MousePointer2 className="h-3.5 w-3.5 fill-[#10b981] text-[#10b981]" />
            <span className="rounded bg-[#10b981] px-1 text-[5.5px] text-white">Designer</span>
          </motion.div>
        </div>
        <div className="w-[92px] border-l border-white/10 p-2 text-[6px] text-white/60">
          <p className="text-white/40">Fill</p>
          <div className="mt-1 flex items-center gap-1"><span className="h-3 w-3 rounded-sm" style={{ background: a.c }} /><span className="font-mono">{a.c.toUpperCase()}</span></div>
          <p className="mt-2 text-white/40">Text</p>
          <p className="mt-1 text-white">Newsreader · 28</p>
          <p className="mt-2 text-white/40">Auto layout</p>
          <div className="mt-1 grid grid-cols-2 gap-1"><span className="rounded bg-white/10 px-1">↕ 16</span><span className="rounded bg-white/10 px-1">↔ 24</span></div>
          <p className="mt-2 text-white/40">Tokens</p>
          <div className="mt-1 flex gap-1">{[a.c, a.s, "#0b0c0e", "#ffffff"].map((c) => <span key={c} className="h-3 w-3 rounded-sm ring-1 ring-white/20" style={{ background: c }} />)}</div>
        </div>
      </div>
    </motion.div>
  );
}

function PenToolIcon() {
  return <svg viewBox="0 0 10 10" className="h-2.5 w-2.5"><path d="M5 1 L8 6 L5 9 L2 6 Z" fill="none" stroke="currentColor" /></svg>;
}

function Phone({ x, y, rot, children, on, still, delay }: { x: number; y: number; rot: number; children: ReactNode; on: boolean; still: boolean; delay: number }) {
  return (
    <motion.div style={{ ...box(x, y, 128, 262), rotate: rot }} className="rounded-[22px] bg-[#111] p-[5px] shadow-[0_30px_50px_-20px_rgba(11,12,14,0.5)]" {...pop(on, still, delay, 24)}>
      <div className="relative h-full overflow-hidden rounded-[18px] bg-white">
        <div className="absolute left-1/2 top-1 z-10 h-[9px] w-[38px] -translate-x-1/2 rounded-full bg-[#111]" />
        <div className="flex justify-between px-3 pt-1 text-[5.5px] font-semibold text-ink"><span>9:41</span><span>●●● ▮</span></div>
        {children}
      </div>
    </motion.div>
  );
}

function MobileScene({ d, on, still, a }: P) {
  return (
    <>
      <Phone x={70} y={20} rot={-4} on={on} still={still} delay={0}>
        <div className="px-3 pt-4">
          <p className="text-[5.5px] text-ink/45">Good morning</p>
          <p className="line-clamp-2 text-[10px] leading-tight text-ink" style={serif}>{d.label}</p>
          <div className="mt-2 h-[52px] rounded-xl p-2 text-white" style={{ background: `linear-gradient(135deg, ${a.c}, ${a.c}cc)` }}>
            <p className="text-[5.5px] opacity-80">This week</p>
            <p className="text-[12px] font-bold">↑ 24%</p>
          </div>
          <div className="mt-2 space-y-1.5">
            {d.items.slice(0, 4).map((it, i) => (
              <motion.div key={it} className="flex items-center gap-1.5 rounded-lg bg-ink/[0.04] p-1.5" {...pop(on, still, 0.3 + i * 0.08, 8)}>
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md" style={{ background: a.t }}><Check className="h-2 w-2" style={{ color: a.c }} strokeWidth={3} /></span>
                <span className="truncate text-[6px] text-ink/75">{it}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-ink/[0.06] bg-white py-1.5">
          {[Home, Search, Heart, User].map((I, i) => <I key={i} className="h-3 w-3" style={{ color: i === 0 ? a.c : "#9ca3af" }} />)}
        </div>
      </Phone>
      <Phone x={238} y={30} rot={5} on={on} still={still} delay={0.15}>
        <div className="h-full p-2 pt-5" style={{ background: `linear-gradient(170deg, ${a.s}, ${a.t} 60%, #fff)` }}>
          <p className="text-center text-[20px] font-light text-ink">9:41</p>
          <p className="text-center text-[5.5px] text-ink/50">Tuesday, 14 October</p>
          <motion.div className="mt-3 rounded-xl bg-white/90 p-1.5 shadow-sm backdrop-blur transition-transform duration-500 group-hover:-translate-y-1" {...pop(on, still, 0.6, -10)}>
            <div className="flex items-center gap-1"><span className="h-3 w-3 rounded" style={{ background: a.c }} /><span className="text-[5.5px] font-semibold text-ink">YOUR APP</span><span className="ml-auto text-[5px] text-ink/40">now</span></div>
            <p className="mt-0.5 text-[6px] font-semibold text-ink">{d.items[0]}</p>
            <p className="text-[5.5px] text-ink/55">Tap to see what changed.</p>
          </motion.div>
          <motion.div className="mt-1.5 rounded-xl bg-white/80 p-1.5" {...pop(on, still, 0.75, -10)}>
            <p className="text-[6px] font-semibold text-ink">{d.items[1]}</p>
            <p className="text-[5.5px] text-ink/50">2 min ago</p>
          </motion.div>
        </div>
      </Phone>
    </>
  );
}

function ChatScene({ d, on, still, a }: P) {
  const q = /\?$/.test(d.label) ? d.label : `Can you help with ${d.label.charAt(0).toLowerCase() + d.label.slice(1)}?`;
  return (
    <Win x={40} y={14} w={400} h={272} url="Assistant" on={on} still={still}>
      <div className="flex items-center gap-2 border-b border-ink/[0.06] px-3 py-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full text-white" style={{ background: a.c }}><Sparkles className="h-2.5 w-2.5" /></span>
        <div><p className="text-[7px] font-semibold text-ink">AI assistant</p><p className="flex items-center gap-1 text-[5.5px] text-[#16a34a]"><span className="h-1 w-1 rounded-full bg-[#22c55e]" />Online</p></div>
      </div>
      <div className="space-y-2 p-3">
        <motion.div className="ml-auto w-fit max-w-[70%] rounded-2xl rounded-br-sm bg-ink px-2.5 py-1.5 text-[7px] text-white" {...pop(on, still, 0.2)}>{q}</motion.div>
        <motion.div className="w-fit max-w-[82%] rounded-2xl rounded-bl-sm bg-ink/[0.05] px-2.5 py-2 text-[7px] text-ink" {...pop(on, still, 0.5)}>
          <p>Here&rsquo;s where I&rsquo;d start:</p>
          <ol className="mt-1 space-y-0.5">
            {d.items.slice(0, 4).map((it, i) => <li key={it} className="flex gap-1"><span className="font-semibold" style={{ color: a.c }}>{i + 1}.</span>{it}</li>)}
          </ol>
          <div className="mt-1.5 flex gap-1">{["Source 1", "Source 2"].map((s) => <span key={s} className="flex items-center gap-0.5 rounded bg-white px-1 py-0.5 text-[5.5px] text-ink/60"><FileText className="h-2 w-2" />{s}</span>)}</div>
        </motion.div>
        {!still && (
          <motion.div className="flex w-fit gap-1 rounded-full bg-ink/[0.05] px-2 py-1.5" initial={{ opacity: 0 }} animate={on ? { opacity: 1 } : {}} transition={{ delay: 1 }}>
            {[0, 1, 2].map((i) => <motion.span key={i} className="h-1 w-1 rounded-full bg-ink/40" animate={{ y: [0, -2, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />)}
          </motion.div>
        )}
      </div>
      <div className="absolute bottom-2 left-3 right-3 flex items-center gap-2 rounded-full border border-ink/10 px-2.5 py-1.5">
        <span className="flex-1 text-[6.5px] text-ink/35">Ask anything…</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110" style={{ background: a.c }}><Send className="h-2 w-2" /></span>
      </div>
    </Win>
  );
}

function RagScene({ d, on, still, a, r }: P) {
  return (
    <>
      <Card x={16} y={16} w={280} h={268} on={on} still={still} className="p-3">
        <div className="flex items-center gap-1.5 rounded-lg border border-ink/10 px-2 py-1.5">
          <Search className="h-3 w-3 text-ink/40" />
          <span className="truncate text-[7px] text-ink">{d.label.toLowerCase()}</span>
        </div>
        <div className="mt-2.5 rounded-lg p-2.5" style={{ background: a.t }}>
          <p className="flex items-center gap-1 text-[6.5px] font-semibold" style={{ color: a.c }}><Sparkles className="h-2.5 w-2.5" /> Answer</p>
          <div className="mt-1.5 space-y-1">
            {[96, 88, 92, 60].map((w, i) => <Line key={i} w={`${w}%`} c="bg-ink/15" />)}
          </div>
          <p className="mt-1.5 flex gap-1 text-[5.5px]">{[1, 2, 3].map((n) => <span key={n} className="rounded bg-white px-1 font-semibold text-ink/60">[{n}]</span>)}</p>
        </div>
        <p className="mt-3 text-[6.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Retrieved passages</p>
        {d.items.slice(0, 3).map((it, i) => (
          <motion.div key={it} className="mt-1.5 rounded-md border border-ink/[0.07] p-1.5" {...pop(on, still, 0.4 + i * 0.1, 8)}>
            <div className="flex items-center justify-between text-[6px]"><span className="truncate font-medium text-ink/80">{it}</span><span className="shrink-0 font-mono text-ink/45">{(0.92 - i * 0.07 - r() * 0.03).toFixed(2)}</span></div>
            <div className="mt-1"><Line w="85%" h={3} /></div>
          </motion.div>
        ))}
      </Card>
      <Card x={308} y={36} w={156} h={228} on={on} still={still} delay={0.2} className="overflow-hidden p-2.5">
        <p className="text-[6.5px] font-semibold text-ink">Vector index</p>
        <svg viewBox="0 0 136 120" className="mt-1 h-[120px] w-full">
          {Array.from({ length: 46 }, (_, i) => <circle key={i} cx={8 + r() * 120} cy={8 + r() * 104} r={1.8} fill={i < 5 ? a.c : "#0b0c0e"} opacity={i < 5 ? 0.9 : 0.15} />)}
          <circle cx="70" cy="60" r="22" fill="none" stroke={a.c} strokeDasharray="3 3" />
          <circle cx="70" cy="60" r="3" fill={a.c} />
        </svg>
        {[[Database, "Chunks", `${(4 + r() * 90).toFixed(1)}k`], [Cpu, "Top-k", "8"], [Zap, "Latency", `${Math.floor(40 + r() * 200)} ms`]].map(([I, k, v]) => {
          const Icon = I as typeof Database;
          return <div key={k as string} className="mt-1.5 flex items-center justify-between text-[6.5px] text-ink/60"><span className="flex items-center gap-1"><Icon className="h-2.5 w-2.5" />{k as string}</span><span className="font-semibold text-ink">{v as string}</span></div>;
        })}
      </Card>
    </>
  );
}

function WorkflowScene({ d, on, still, a }: P) {
  const nodes = [
    { x: 24, y: 120, t: "Trigger", s: "New form entry", I: Zap, c: "#f59e0b" },
    { x: 130, y: 60, t: "Step 1", s: d.items[0], I: Bot, c: a.c },
    { x: 130, y: 180, t: "Step 2", s: d.items[1], I: GitBranch, c: a.c },
    { x: 256, y: 120, t: "Step 3", s: d.items[2], I: Database, c: a.c },
    { x: 360, y: 120, t: "Done", s: "Notify team", I: Mail, c: "#16a34a" },
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]];
  return (
    <div className={`absolute inset-3 overflow-hidden rounded-xl bg-white ${SHADOW}`} style={{ backgroundImage: "radial-gradient(rgba(11,12,14,0.08) 1px, transparent 1px)", backgroundSize: "12px 12px" }}>
      <div className="flex items-center justify-between border-b border-ink/[0.06] bg-white px-3 py-1.5">
        <p className="truncate text-[7.5px] font-semibold text-ink">{d.label}</p>
        <span className="flex items-center gap-1 rounded-full bg-[#dcfce7] px-1.5 py-0.5 text-[6px] font-semibold text-[#15803d]"><CheckCircle2 className="h-2 w-2" /> Last run succeeded</span>
      </div>
      <svg className="absolute inset-0 h-full w-full">
        {edges.map(([f, t], i) => {
          const A = nodes[f], B = nodes[t];
          const x1 = A.x + 84, y1 = A.y + 32, x2 = B.x - 6, y2 = B.y + 32;
          return <motion.path key={i} d={`M${x1} ${y1} C${x1 + 30} ${y1}, ${x2 - 30} ${y2}, ${x2} ${y2}`} fill="none" stroke="#9ca3af" strokeWidth="1.3" strokeDasharray="4 3" {...draw(on, still, 0.3 + i * 0.12, 0.6)} />;
        })}
      </svg>
      {nodes.map((n, i) => (
        <motion.div key={i} style={box(n.x, n.y, 84)} className={`rounded-lg border bg-white p-1.5 ${SHADOW} ${i === 3 ? "transition-transform duration-500 group-hover:-translate-y-1" : ""}`} {...pop(on, still, 0.15 + i * 0.1)}>
          <div className="flex items-center gap-1">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded" style={{ background: `${n.c}22` }}><n.I className="h-2 w-2" style={{ color: n.c }} /></span>
            <span className="text-[5.5px] font-semibold uppercase tracking-[0.08em] text-ink/45">{n.t}</span>
          </div>
          <p className="mt-1 line-clamp-2 text-[6.5px] font-medium leading-tight text-ink">{n.s}</p>
        </motion.div>
      ))}
      <div className="absolute bottom-2 right-2 h-[38px] w-[64px] rounded border border-ink/10 bg-white/80 p-1">
        <div className="relative h-full">{nodes.map((n, i) => <span key={i} className="absolute h-1 w-2 rounded-sm bg-ink/30" style={{ left: n.x / 7.5, top: n.y / 9 }} />)}</div>
      </div>
    </div>
  );
}

function AgentScene(p: P) {
  return p.d.seed % 2 ? <AgentGraph {...p} /> : <AgentRun {...p} />;
}

function AgentRun({ d, on, still, a, r }: P) {
  const states = ["done", "done", "running", "queued"];
  return (
    <>
      <Card x={16} y={16} w={300} h={268} on={on} still={still} className="p-3">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-lg text-white" style={{ background: a.c }}><Bot className="h-3 w-3" /></span>
          <div><p className="text-[7.5px] font-semibold text-ink">Agent run</p><p className="text-[5.5px] text-ink/45">#{(d.seed % 9000) + 1000} · started 2 min ago</p></div>
        </div>
        <div className="mt-2.5 rounded-lg bg-ink/[0.03] p-2">
          <p className="text-[5.5px] uppercase tracking-[0.12em] text-ink/40">Goal</p>
          <p className="mt-0.5 line-clamp-2 text-[8px] leading-tight text-ink" style={serif}>{d.label}</p>
        </div>
        <div className="mt-2.5 space-y-1.5">
          {d.items.slice(0, 4).map((it, i) => (
            <motion.div key={it} className="flex items-center gap-2 rounded-md border border-ink/[0.07] px-2 py-1.5" {...pop(on, still, 0.3 + i * 0.1, 8)}>
              {states[i] === "done" ? <CheckCircle2 className="h-3 w-3 text-[#16a34a]" /> : states[i] === "running" ? <Loader2 className="h-3 w-3 animate-spin" style={{ color: a.c }} /> : <span className="h-3 w-3 rounded-full border border-ink/20" />}
              <span className="flex-1 truncate text-[6.5px] text-ink/80">{it}</span>
              <span className="font-mono text-[5.5px] text-ink/40">{states[i] === "queued" ? "—" : `${(0.4 + r() * 3).toFixed(1)}s`}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1 text-[6px] text-ink/50"><ShieldCheck className="h-2.5 w-2.5 text-[#16a34a]" /> Human approval required before sending</div>
      </Card>
      <motion.div style={box(296, 60, 168)} className={`rounded-xl bg-[#14151a] p-2.5 font-mono text-[6px] leading-relaxed text-white/70 ${SHADOW}`} {...pop(on, still, 0.3)}>
        <p className="mb-1 flex items-center gap-1 text-white/40"><Wrench className="h-2.5 w-2.5" /> tool_call</p>
        <p><span className="text-[#c792ea]">{"{"}</span></p>
        <p className="pl-2"><span className="text-[#82aaff]">&quot;tool&quot;</span>: <span className="text-[#c3e88d]">&quot;search_records&quot;</span>,</p>
        <p className="pl-2"><span className="text-[#82aaff]">&quot;query&quot;</span>: <span className="text-[#c3e88d]">&quot;{d.items[1]?.slice(0, 18)}&quot;</span>,</p>
        <p className="pl-2"><span className="text-[#82aaff]">&quot;limit&quot;</span>: <span className="text-[#f78c6c]">10</span></p>
        <p><span className="text-[#c792ea]">{"}"}</span></p>
        <p className="mt-1.5 text-[#22c55e]">✓ 200 OK · {Math.floor(100 + r() * 600)} ms</p>
      </motion.div>
    </>
  );
}

function AgentGraph({ d, on, still, a }: P) {
  const subs = d.items.slice(0, 4);
  const pos = [
    { x: 40, y: 40 },
    { x: 320, y: 40 },
    { x: 40, y: 196 },
    { x: 320, y: 196 },
  ];
  return (
    <div className={`absolute inset-3 overflow-hidden rounded-xl bg-[#0f1115] ${SHADOW}`} style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
      <svg className="absolute inset-0 h-full w-full">
        {pos.slice(0, subs.length).map((p, i) => (
          <motion.line key={i} x1={228} y1={136} x2={p.x + 50} y2={p.y + 18} stroke={a.c} strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="4 4" {...draw(on, still, 0.3 + i * 0.1, 0.7)} />
        ))}
      </svg>
      <motion.div style={box(160, 108, 136)} className="rounded-xl border p-2 text-white" {...pop(on, still, 0.1)}>
        <div style={{ borderColor: a.c }} className="absolute inset-0 rounded-xl border" />
        <div className="flex items-center gap-1.5"><span className="flex h-4 w-4 items-center justify-center rounded-md" style={{ background: a.c }}><Bot className="h-2.5 w-2.5" /></span><span className="text-[6.5px] font-semibold">Orchestrator</span></div>
        <p className="mt-1 line-clamp-2 text-[6px] text-white/60">{d.label}</p>
        {!still && <motion.span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#22c55e]" animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />}
      </motion.div>
      {subs.map((s, i) => (
        <motion.div key={s} style={box(pos[i].x, pos[i].y, 108)} className="rounded-lg border border-white/12 bg-white/[0.06] p-1.5 text-white transition-transform duration-500 group-hover:-translate-y-0.5" {...pop(on, still, 0.3 + i * 0.1)}>
          <div className="flex items-center gap-1 text-[5.5px] uppercase tracking-[0.08em] text-white/45"><Cpu className="h-2 w-2" /> Agent {i + 1}<span className={`ml-auto h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-[#22c55e]" : "bg-[#f59e0b]"}`} /></div>
          <p className="mt-1 line-clamp-2 text-[6.5px] leading-tight">{s}</p>
        </motion.div>
      ))}
    </div>
  );
}

const KW = ["const", "export", "async", "await", "return", "import", "function", "type"];

function CodeScene({ d, on, still, a, r }: P) {
  const ident = ["page", "data", "client", "config", "route", "cache", "items", "result", "query"];
  const lines = Array.from({ length: 11 }, (_, i) => {
    if (i === 0) return [{ t: `// ${d.label}`, c: "#6a737d" }];
    if (i === 6 || i === 10) return [];
    const k = KW[Math.floor(r() * KW.length)];
    const n = ident[Math.floor(r() * ident.length)];
    return [
      { t: k + " ", c: "#c792ea" },
      { t: n, c: "#82aaff" },
      { t: " = ", c: "#d4d4d4" },
      { t: r() > 0.5 ? `await fetch("/api/${n}")` : `"${d.items[i % d.items.length].slice(0, 16)}"`, c: "#c3e88d" },
      { t: ";", c: "#d4d4d4" },
    ];
  });
  return (
    <Win x={14} y={14} w={452} h={272} url="~/project" on={on} still={still} dark>
      <div className="flex border-b border-white/10 text-[6px]">
        {["page.tsx", "route.ts", "schema.ts"].map((f, i) => <span key={f} className={`px-2.5 py-1 ${i === 0 ? "border-b text-white" : "text-white/40"}`} style={i === 0 ? { borderColor: a.c } : {}}>{f}</span>)}
      </div>
      <div className="flex">
        <div className="w-[90px] border-r border-white/10 p-2 text-[6px] text-white/45">
          <p className="mb-1 text-white/30">EXPLORER</p>
          {["app/", "  page.tsx", "  api/", "lib/", ...d.items.slice(0, 2).map((s) => `  ${s.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 12)}.ts`), "package.json"].map((f, i) => <p key={f + i} className={`truncate whitespace-pre ${i === 1 ? "text-white" : ""}`}>{f}</p>)}
        </div>
        <div className="flex-1 p-2 font-mono text-[6.5px] leading-[1.75]">
          {lines.map((ln, i) => (
            <motion.div key={i} className="flex" initial={still ? false : { opacity: 0, x: -6 }} animate={on ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15 + i * 0.05 }}>
              <span className="mr-2 w-3 text-right text-white/20">{i + 1}</span>
              <span className="truncate">{ln.map((t, j) => <span key={j} style={{ color: t.c }}>{t.t}</span>)}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#18191c] p-2 font-mono text-[6px] leading-relaxed">
        <p className="flex items-center gap-1 text-white/40"><Terminal className="h-2.5 w-2.5" /> TERMINAL</p>
        <p className="text-white/70">$ npm run build</p>
        <p className="text-[#22c55e]">✓ Compiled successfully</p>
        <p className="text-white/50">✓ {d.items[0]}</p>
      </div>
    </Win>
  );
}

function SecurityScene({ d, on, still, a }: P) {
  const st = ["pass", "pass", "warn", "pass"];
  return (
    <>
      <Card x={16} y={16} w={196} h={268} on={on} still={still} className="flex flex-col items-center p-3 text-center">
        <p className="self-start text-[8px] font-semibold text-ink">Security posture</p>
        <motion.div className="relative mt-4 flex h-[92px] w-[92px] items-center justify-center" {...pop(on, still, 0.2)}>
          <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" />
            <motion.circle cx="50" cy="50" r="42" fill="none" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" initial={still ? false : { pathLength: 0 }} animate={on ? { pathLength: 0.86 } : {}} transition={{ duration: 1.2, delay: 0.3 }} />
          </svg>
          <ShieldCheck className="h-9 w-9 text-[#16a34a]" />
        </motion.div>
        <p className="mt-2 text-[15px] font-bold text-ink">Grade A</p>
        <p className="line-clamp-2 text-[6.5px] text-ink/50">{d.label}</p>
        <div className="mt-auto grid w-full grid-cols-3 gap-1 text-[6px]">
          {[["Critical", "0", "#16a34a"], ["High", "1", "#f59e0b"], ["Fixed", "24", a.c]].map(([k, v, c]) => <div key={k} className="rounded-md bg-ink/[0.03] py-1"><p className="text-[10px] font-bold" style={{ color: c }}>{v}</p><p className="text-ink/45">{k}</p></div>)}
        </div>
      </Card>
      <Card x={224} y={16} w={240} h={168} on={on} still={still} delay={0.2} className="p-3">
        <p className="text-[8px] font-semibold text-ink">Controls</p>
        {d.items.slice(0, 4).map((it, i) => (
          <div key={it} className="mt-2 flex items-center gap-2 border-t border-ink/[0.06] pt-2">
            {st[i] === "pass" ? <CheckCircle2 className="h-3 w-3 shrink-0 text-[#16a34a]" /> : <AlertTriangle className="h-3 w-3 shrink-0 text-[#f59e0b]" />}
            <span className="flex-1 truncate text-[7px] text-ink/80">{it}</span>
            <span className={`rounded px-1 text-[5.5px] font-semibold ${st[i] === "pass" ? "bg-[#dcfce7] text-[#15803d]" : "bg-[#fef3c7] text-[#b45309]"}`}>{st[i] === "pass" ? "Passing" : "Review"}</span>
          </div>
        ))}
      </Card>
      <motion.div style={box(224, 196, 240)} className={`rounded-xl bg-[#14151a] p-2.5 font-mono text-[6px] leading-relaxed text-white/60 ${SHADOW}`} {...pop(on, still, 0.35)}>
        <p className="mb-0.5 flex items-center gap-1 text-white/35"><Lock className="h-2.5 w-2.5" /> audit.log</p>
        <p><span className="text-white/30">12:04</span> <span className="text-[#22c55e]">ALLOW</span> token scoped · read:orders</p>
        <p><span className="text-white/30">12:05</span> <span className="text-[#f59e0b]">FLAG</span> unusual login · new device</p>
        <p><span className="text-white/30">12:06</span> <span className="text-[#ef4444]">BLOCK</span> 42 requests · rate limit</p>
      </motion.div>
    </>
  );
}

function SerpScene({ d, on, still, a, r }: P) {
  const q = d.label.toLowerCase().replace(/[?:]/g, "");
  return (
    <Win x={14} y={14} w={452} h={272} url={`search?q=${q.replace(/ /g, "+").slice(0, 40)}`} on={on} still={still}>
      <div className="p-3">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold" style={{ color: a.c }}>Search</span>
          <div className="flex flex-1 items-center gap-1.5 rounded-full border border-ink/12 px-2.5 py-1 shadow-sm"><span className="flex-1 truncate text-[7px] text-ink">{q}</span><Search className="h-2.5 w-2.5 text-ink/40" /></div>
        </div>
        <div className="mt-1.5 flex gap-2.5 pl-[42px] text-[6px] text-ink/45"><span className="border-b border-ink pb-0.5 text-ink">All</span><span>Images</span><span>News</span><span>Videos</span></div>
        <div className="mt-2 grid grid-cols-[1.5fr_1fr] gap-3 pl-[42px]">
          <div>
            <motion.div className="rounded-lg p-2" style={{ background: a.t }} {...pop(on, still, 0.2)}>
              <p className="flex items-center gap-1 text-[6.5px] font-semibold" style={{ color: a.c }}><Sparkles className="h-2.5 w-2.5" /> AI overview</p>
              <div className="mt-1 space-y-1"><Line w="95%" c="bg-ink/15" /><Line w="82%" c="bg-ink/15" /><Line w="60%" c="bg-ink/15" /></div>
            </motion.div>
            <motion.div className="mt-2.5" {...pop(on, still, 0.35)}>
              <div className="flex items-center gap-1.5"><span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink text-[5px] font-bold text-white">Z</span><div><p className="text-[6px] text-ink">ZSpace Labs</p><p className="text-[5px] text-ink/45">zspace.in › blogs</p></div></div>
              <p className="mt-0.5 line-clamp-1 text-[9px] text-[#1a0dab] group-hover:underline">{d.label}</p>
              <div className="mt-0.5 space-y-0.5"><Line w="96%" h={3} /><Line w="70%" h={3} /></div>
            </motion.div>
            <p className="mt-2 text-[6.5px] font-semibold text-ink">People also ask</p>
            {d.items.slice(0, 3).map((it) => <div key={it} className="flex items-center justify-between border-b border-ink/[0.07] py-1 text-[6.5px] text-ink/75"><span className="truncate">{/^(how|what|why|when|which|is|are|do|does|can|should|who|where)\b/i.test(it) && !it.endsWith("?") ? `${it}?` : it}</span><span className="text-ink/35">▾</span></div>)}
          </div>
          <motion.div className="rounded-lg border border-ink/[0.08] p-2" {...pop(on, still, 0.45)}>
            <div className="h-[56px] rounded-md" style={{ background: `linear-gradient(135deg, ${a.s}, ${a.t})` }} />
            <p className="mt-1.5 text-[8px] text-ink" style={serif}>{d.items[0]}</p>
            <div className="mt-1 space-y-1"><Line w="90%" h={3} /><Line w="80%" h={3} /><Line w="55%" h={3} /></div>
            <div className="mt-2 flex items-center gap-1 text-[6px] text-ink/55"><Star className="h-2 w-2 fill-[#f59e0b] text-[#f59e0b]" /> {(4.5 + r() * 0.5).toFixed(1)} · Guide</div>
          </motion.div>
        </div>
      </div>
    </Win>
  );
}

const COMPANIES = ["Northwind", "Acme Co", "Bluebird", "Lumen", "Harbor", "Atlas", "Pine & Co", "Vela"];

function CrmScene({ d, on, still, a, r }: P) {
  const cols = ["New", "Qualified", "Proposal", "Won"];
  return (
    <>
      <Card x={14} y={14} w={452} h={200} on={on} still={still} className="p-2.5">
        <div className="flex items-center justify-between"><p className="truncate text-[8px] font-semibold text-ink">{d.label}</p><span className="rounded-md px-1.5 py-0.5 text-[6px] font-semibold text-white" style={{ background: a.c }}>+ Add lead</span></div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {cols.map((c, ci) => (
            <div key={c} className="rounded-lg bg-ink/[0.03] p-1.5">
              <p className="flex justify-between text-[6px] font-semibold text-ink/60"><span>{c}</span><span>{3 - (ci % 2)}</span></p>
              {[0, 1, ci === 0 ? 2 : -1].filter((x) => x >= 0).map((k) => {
                const name = COMPANIES[(d.seed + ci * 3 + k) % COMPANIES.length];
                return (
                  <motion.div key={k} className={`mt-1.5 rounded-md bg-white p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${ci === 2 && k === 0 ? "transition-transform duration-500 group-hover:translate-x-2" : ""}`} {...pop(on, still, 0.15 + ci * 0.08 + k * 0.05, 8)}>
                    <div className="flex items-center gap-1"><span className="flex h-3 w-3 items-center justify-center rounded-full text-[5px] font-bold text-white" style={{ background: ci === 3 ? "#16a34a" : a.c }}>{name[0]}</span><span className="truncate text-[6px] font-semibold text-ink">{name}</span></div>
                    <p className="mt-0.5 text-[5.5px] text-ink/45">${(2 + r() * 40).toFixed(1)}k · {ci === 3 ? "Closed" : `${2 + k} days`}</p>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </Card>
      <Card x={60} y={222} w={360} on={on} still={still} delay={0.4} className="flex items-center gap-2.5 p-2.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: a.t }}><Mail className="h-3 w-3" style={{ color: a.c }} /></span>
        <div className="min-w-0 flex-1"><p className="truncate text-[7px] font-semibold text-ink">Follow-up sent: {d.items[0]}</p><p className="text-[6px] text-ink/45">Automated sequence · step 2 of 4 · opened</p></div>
        <span className="rounded-full bg-[#dcfce7] px-1.5 py-0.5 text-[6px] font-semibold text-[#15803d]">Replied</span>
      </Card>
    </>
  );
}

function CostScene({ d, on, still, a, r }: P) {
  const parts = d.items.slice(0, 4).map((it, i) => ({ it, v: Math.round(2 + r() * 14) * 1000 * (i === 0 ? 2 : 1) }));
  const total = parts.reduce((s, p) => s + p.v, 0);
  const colors = [a.c, `${a.c}b0`, `${a.c}70`, "#d1d5db"];
  const offsets = parts.map((_, i) => parts.slice(0, i).reduce((sum, q) => sum + q.v / total, 0));
  return (
    <Card x={16} y={16} w={448} h={268} on={on} still={still} className="p-4">
      <div className="flex items-center justify-between">
        <div><p className="text-[6px] uppercase tracking-[0.14em] text-ink/45">Estimate</p><p className="truncate text-[11px] text-ink" style={serif}>{d.label}</p></div>
        <div className="flex rounded-full bg-ink/[0.05] p-0.5 text-[6px]"><span className="rounded-full bg-white px-2 py-0.5 font-semibold text-ink shadow-sm">One-time</span><span className="px-2 py-0.5 text-ink/50">Monthly</span></div>
      </div>
      <div className="mt-4 grid grid-cols-[140px_1fr] items-center gap-5">
        <div className="relative">
          <svg viewBox="0 0 42 42" className="h-[130px] w-[130px] -rotate-90">
            {parts.map((p, i) => {
              const frac = p.v / total;
              return <motion.circle key={i} cx="21" cy="21" r="15.9" fill="none" stroke={colors[i]} strokeWidth="6" strokeDasharray={`${frac * 100} ${100 - frac * 100}`} strokeDashoffset={-offsets[i] * 100} initial={still ? false : { opacity: 0 }} animate={on ? { opacity: 1 } : {}} transition={{ delay: 0.2 + i * 0.12 }} />;
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center"><p className="text-[6px] text-ink/45">Total</p><p className="text-[13px] font-bold text-ink">${(total / 1000).toFixed(0)}k</p></div>
        </div>
        <div className="space-y-2">
          {parts.map((p, i) => (
            <div key={p.it} className="flex items-center gap-2 border-b border-ink/[0.06] pb-1.5 text-[7px]">
              <span className="h-2 w-2 rounded-sm" style={{ background: colors[i] }} />
              <span className="flex-1 truncate text-ink/75">{p.it}</span>
              <span className="font-semibold text-ink">${p.v.toLocaleString("en-US")}</span>
            </div>
          ))}
          <div className="flex justify-between pt-1 text-[8px] font-bold text-ink"><span>Estimated range</span><span>${((total * 0.85) / 1000).toFixed(0)}k – ${((total * 1.2) / 1000).toFixed(0)}k</span></div>
        </div>
      </div>
    </Card>
  );
}

function RoadmapScene({ d, on, still, a, r }: P) {
  const weeks = 8;
  const bars = d.items.slice(0, 4).map((it, i) => ({ it, s: i * 1.6 + r() * 0.6, l: 2 + r() * 2.2 }));
  return (
    <Card x={14} y={16} w={452} h={268} on={on} still={still} className="p-3">
      <div className="flex items-center justify-between"><p className="truncate text-[9px] text-ink" style={serif}>{d.label}</p><span className="flex -space-x-1">{["#f59e0b", "#10b981", a.c].map((c, i) => <span key={c} className="flex h-4 w-4 items-center justify-center rounded-full border border-white text-[5px] font-bold text-white" style={{ background: c }}>{"ADK"[i]}</span>)}</span></div>
      <div className="mt-3 grid grid-cols-[110px_1fr]">
        <div />
        <div className="grid text-[6px] text-ink/40" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>{Array.from({ length: weeks }, (_, i) => <span key={i}>W{i + 1}</span>)}</div>
      </div>
      <div className="relative mt-1">
        <div className="absolute bottom-0 left-[110px] right-0 top-0 grid" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>{Array.from({ length: weeks }, (_, i) => <span key={i} className="border-l border-ink/[0.05]" />)}</div>
        <div className="absolute bottom-0 top-0 w-px bg-[#ef4444]" style={{ left: `calc(110px + ${(3.4 / weeks) * 100}% - ${(3.4 / weeks) * 110}px)` }}><span className="absolute -top-2 -translate-x-1/2 rounded bg-[#ef4444] px-1 text-[5px] text-white">Today</span></div>
        {bars.map((b, i) => (
          <div key={b.it} className="relative grid h-[34px] grid-cols-[110px_1fr] items-center">
            <span className="truncate pr-2 text-[7px] text-ink/75">{b.it}</span>
            <div className="relative h-full">
              <motion.div className="absolute top-1/2 h-[16px] -translate-y-1/2 rounded-md px-1.5 text-[5.5px] font-semibold leading-[16px] text-white" style={{ left: `${(b.s / weeks) * 100}%`, background: i % 2 ? `${a.c}bb` : a.c }} initial={still ? false : { width: 0 }} animate={on ? { width: `${(b.l / weeks) * 100}%` } : {}} transition={{ duration: 0.8, ease: EASE, delay: 0.2 + i * 0.12 }}>
                {Math.round(b.l)}w
              </motion.div>
            </div>
          </div>
        ))}
        <div className="relative grid h-[30px] grid-cols-[110px_1fr] items-center">
          <span className="text-[7px] font-semibold text-ink">Launch</span>
          <div className="relative h-full"><span className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-ink transition-transform group-hover:scale-125" style={{ left: "88%" }} /></div>
        </div>
      </div>
    </Card>
  );
}

function CompareScene(p: P) {
  return p.d.seed % 2 ? <CompareCards {...p} /> : <CompareTable {...p} />;
}

function options(d: BlogSceneData) {
  const vs = d.label.split(/\s+vs\.?\s+|\s+versus\s+/i);
  if (vs.length >= 2) return vs.slice(0, 3).map((s) => s.replace(/^(react|next\.js).*$/i, (m) => m).slice(0, 18));
  return [d.items[0], d.items[1], d.items[2]].filter(Boolean).map((s) => s.slice(0, 18));
}

function CompareTable({ d, on, still, a, r }: P) {
  const opts = options(d).slice(0, 3);
  const crit = ["Speed to launch", "Cost", "Flexibility", "Maintenance", "Scalability"];
  const mark = () => (r() > 0.6 ? "y" : r() > 0.3 ? "p" : "n");
  return (
    <Card x={16} y={16} w={448} h={268} on={on} still={still} className="p-3.5">
      <p className="text-[6px] uppercase tracking-[0.14em] text-ink/45">Comparison</p>
      <p className="truncate text-[11px] text-ink" style={serif}>{d.label}</p>
      <div className="mt-3 overflow-hidden rounded-lg border border-ink/[0.08]">
        <div className="grid bg-ink text-[6.5px] font-semibold text-white" style={{ gridTemplateColumns: `1.2fr repeat(${opts.length}, 1fr)` }}>
          <span className="px-2 py-1.5">Criteria</span>
          {opts.map((o, i) => <span key={o} className="truncate px-2 py-1.5" style={i === 0 ? { background: a.c } : {}}>{o}</span>)}
        </div>
        {crit.map((c, ri) => (
          <motion.div key={c} className="grid border-t border-ink/[0.06] text-[6.5px]" style={{ gridTemplateColumns: `1.2fr repeat(${opts.length}, 1fr)` }} {...pop(on, still, 0.15 + ri * 0.07, 6)}>
            <span className="px-2 py-1.5 text-ink/70">{c}</span>
            {opts.map((o) => {
              const m = mark();
              return <span key={o} className="px-2 py-1.5">{m === "y" ? <CheckCircle2 className="h-3 w-3 text-[#16a34a]" /> : m === "p" ? <span className="text-[#f59e0b]">◐</span> : <X className="h-3 w-3 text-[#dc2626]" />}</span>;
            })}
          </motion.div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1 text-[6.5px] text-ink/60"><Sparkles className="h-2.5 w-2.5" style={{ color: a.c }} /> Best fit depends on your team, budget and roadmap.</div>
    </Card>
  );
}

function CompareCards({ d, on, still, a }: P) {
  const opts = options(d).slice(0, 2);
  return (
    <>
      {opts.map((o, i) => (
        <Card key={o} x={i ? 248 : 16} y={30 + i * 8} w={216} h={244} on={on} still={still} delay={i * 0.15} className={`p-3 ${i ? "" : "transition-transform duration-500 group-hover:-translate-y-1"}`}>
          {i === 0 && <span className="absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[6px] font-semibold text-white" style={{ background: a.c }}>Recommended</span>}
          <p className="text-[6px] uppercase tracking-[0.14em] text-ink/45">Option {i ? "B" : "A"}</p>
          <p className="truncate text-[13px] text-ink" style={serif}>{o}</p>
          <div className="mt-2 h-[48px] rounded-lg" style={{ background: i ? "#f1f1ef" : `linear-gradient(135deg, ${a.s}, ${a.t})` }} />
          <p className="mt-2.5 text-[6.5px] font-semibold text-[#16a34a]">Pros</p>
          {["Faster to start", "Lower upfront cost", "Easier to maintain"].slice(0, 2 + i).map((t) => <p key={t} className="mt-1 flex items-center gap-1 text-[6.5px] text-ink/75"><Check className="h-2.5 w-2.5 text-[#16a34a]" />{t}</p>)}
          <p className="mt-2 text-[6.5px] font-semibold text-[#dc2626]">Cons</p>
          {["Less flexible later", "More setup work"].slice(0, 2 - i).map((t) => <p key={t} className="mt-1 flex items-center gap-1 text-[6.5px] text-ink/75"><X className="h-2.5 w-2.5 text-[#dc2626]" />{t}</p>)}
          <div className="absolute bottom-3 left-3 right-3 rounded-md py-1.5 text-center text-[6.5px] font-semibold" style={i ? { background: "rgba(11,12,14,0.06)", color: "#0b0c0e" } : { background: a.c, color: "#fff" }}>{i ? "Compare details" : "Choose this"}</div>
        </Card>
      ))}
      <motion.div style={box(226, 140)} className={`z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[8px] font-bold text-white ${SHADOW}`} {...pop(on, still, 0.3)}>VS</motion.div>
    </>
  );
}

function MonitorScene({ d, on, still, a, r }: P) {
  const lat = series(r, 24, 0.2, 0.8, 0);
  const evalScore = (0.86 + r() * 0.12).toFixed(2);
  const app = d.flavor === "app";
  return (
    <motion.div style={box(14, 14, 452, 272)} className={`overflow-hidden rounded-xl bg-[#0f1115] p-3 text-white ${SHADOW}`} {...pop(on, still)}>
      <div className="flex items-center justify-between">
        <p className="truncate text-[8px] font-semibold">{d.label}</p>
        <span className="flex items-center gap-1 text-[6px] text-white/50"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c55e]" /> Live · prod</span>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-2">
        {(app
          ? [["Crash-free users", `${(99 + r() * 0.9).toFixed(2)}%`], ["Crashes", `${Math.floor(20 + r() * 300)}`], ["Affected users", `${Math.floor(10 + r() * 200)}`], ["ANR rate", `${(0.1 + r() * 0.4).toFixed(2)}%`]]
          : [["p95 latency", `${Math.floor(400 + r() * 900)} ms`], ["Requests", `${(10 + r() * 90).toFixed(1)}k`], ["Cost / 1k", `$${(0.2 + r() * 2).toFixed(2)}`], ["Eval score", evalScore]]
        ).map(([k, v], i) => (
          <motion.div key={k} className="rounded-lg border border-white/10 bg-white/[0.04] p-2" {...pop(on, still, 0.1 + i * 0.06)}>
            <p className="text-[5.5px] text-white/45">{k}</p>
            <p className="text-[11px] font-bold" style={(app ? i === 0 : i === 3) ? { color: "#4ade80" } : {}}>{v}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-[1.5fr_1fr] gap-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <p className="text-[6px] text-white/50">{app ? "Crashes · last 24h" : "Latency (ms) · last 24h"}</p>
          <svg viewBox="0 0 220 80" className="mt-1 h-[110px] w-full" preserveAspectRatio="none">
            <line x1="0" x2="220" y1="24" y2="24" stroke="#ef4444" strokeOpacity=".6" strokeDasharray="3 3" />
            <path d={`${linePath(lat, 220, 76)} L220 80 L0 80 Z`} fill={`${a.c}33`} />
            <motion.path d={linePath(lat, 220, 76)} fill="none" stroke={a.c === "#ea580c" ? "#fb923c" : "#60a5fa"} strokeWidth="1.8" {...draw(on, still)} />
          </svg>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <p className="text-[6px] text-white/50">{app ? "Top issues" : "Eval checks"}</p>
          {d.items.slice(0, 4).map((it, i) => (
            <div key={it} className="mt-1.5">
              <div className="flex justify-between text-[5.5px]"><span className="truncate text-white/75">{it}</span><span className={i === 2 ? "text-[#fbbf24]" : "text-[#4ade80]"}>{i === 2 ? "warn" : "pass"}</span></div>
              <div className="mt-0.5 h-[3px] rounded-full bg-white/10"><motion.div className={`h-full rounded-full ${i === 2 ? "bg-[#fbbf24]" : "bg-[#4ade80]"}`} initial={still ? false : { width: 0 }} animate={on ? { width: `${i === 2 ? 64 : 88 + i * 3}%` } : {}} transition={{ duration: 0.9, delay: 0.4 + i * 0.08 }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5 rounded-md border border-[#fbbf24]/30 bg-[#fbbf24]/10 px-2 py-1 text-[6px] text-[#fde68a]"><AlertTriangle className="h-2.5 w-2.5" /> {app ? "Alert: new crash spike in the latest release" : "Alert: response drift above threshold on 2% of traffic"}</div>
    </motion.div>
  );
}

function A11yScene({ d, on, still, a }: P) {
  return (
    <>
      <Win x={14} y={16} w={290} h={268} url="yourbrand.com" on={on} still={still}>
        <div className="p-3">
          <div className="flex justify-between"><span className="h-2 w-10 rounded-full bg-ink/80" /><div className="flex gap-2">{[0, 1, 2].map((i) => <Line key={i} w={16} />)}</div></div>
          <p className="mt-3 line-clamp-2 text-[13px] leading-tight text-ink" style={serif}>{d.label}</p>
          <div className="mt-2 space-y-1"><Line w="90%" /><Line w="70%" /></div>
          <div className="relative mt-3 w-fit">
            <span className="block rounded-md px-3 py-1.5 text-[7px] font-semibold text-white" style={{ background: a.c }}>Continue</span>
            <motion.span className="absolute -inset-1 rounded-lg border-2 border-dashed" style={{ borderColor: "#f59e0b" }} animate={on && !still ? { opacity: [1, 0.3, 1] } : {}} transition={{ duration: 1.6, repeat: Infinity }} />
            <span className="absolute -right-12 top-0 rounded bg-[#f59e0b] px-1 text-[5.5px] font-semibold text-white">Focus ↹</span>
          </div>
          <div className="relative mt-4 h-[70px] rounded-lg" style={{ background: `linear-gradient(135deg, ${a.s}, ${a.t})` }}>
            <span className="absolute bottom-2 left-2 rounded bg-ink px-1.5 py-0.5 font-mono text-[5.5px] text-white">alt=&quot;Team reviewing a design&quot;</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">{[0, 1].map((i) => <div key={i} className="rounded-md border border-ink/[0.07] p-1.5"><Line w="70%" h={3} c="bg-ink/40" /><div className="mt-1"><Line w="90%" h={3} /></div></div>)}</div>
        </div>
      </Win>
      <Card x={290} y={36} w={176} on={on} still={still} delay={0.25} className="p-3">
        <p className="text-[8px] font-semibold text-ink">Accessibility check</p>
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-ink/[0.03] p-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[13px] font-bold ring-1 ring-ink/10" style={{ color: a.c }}>Aa</span>
          <div className="text-[6.5px]"><p className="font-bold text-ink">Contrast 7.2 : 1</p><p className="text-[#16a34a]">AA ✓ · AAA ✓</p></div>
        </div>
        {d.items.slice(0, 4).map((it, i) => (
          <div key={it} className="mt-2 flex items-center gap-1.5 text-[6.5px] text-ink/75">
            {i === 2 ? <AlertTriangle className="h-2.5 w-2.5 shrink-0 text-[#f59e0b]" /> : <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-[#16a34a]" />}
            <span className="truncate">{it}</span>
          </div>
        ))}
        <div className="mt-2.5 rounded-md bg-ink py-1 text-center text-[6.5px] font-semibold text-white">WCAG 2.2 AA</div>
      </Card>
    </>
  );
}

function PipelineScene({ d, on, still, a, r }: P) {
  const stages = [
    { x: 22, label: "Sources", items: [[Database, "Postgres"], [Cloud, "API"], [FileText, "Files"]] as const },
    { x: 140, label: "Transform", items: [[Filter, d.items[0]], [Settings, d.items[1]]] as const },
    { x: 258, label: "Warehouse", items: [[Database, "analytics.events"], [Layers, d.items[2]]] as const },
    { x: 366, label: "Serve", items: [[BarChart3, "Dashboards"], [Bot, "AI models"]] as const },
  ];
  return (
    <div className={`absolute inset-3 overflow-hidden rounded-xl bg-white ${SHADOW}`}>
      <div className="flex items-center justify-between border-b border-ink/[0.06] px-3 py-1.5">
        <p className="truncate text-[7.5px] font-semibold text-ink">{d.label}</p>
        <span className="text-[6px] text-ink/50">Schedule: hourly</span>
      </div>
      <svg className="absolute inset-0 h-full w-full">
        {[0, 1, 2].map((i) => <motion.path key={i} d={`M${stages[i].x + 96} 112 L${stages[i + 1].x - 4} 112`} stroke={a.c} strokeWidth="1.4" strokeDasharray="4 3" fill="none" {...draw(on, still, 0.3 + i * 0.15, 0.6)} />)}
      </svg>
      {stages.map((s, si) => (
        <motion.div key={s.label} style={box(s.x, 52, 96)} className="rounded-lg border border-ink/[0.08] bg-white p-1.5 shadow-sm" {...pop(on, still, 0.15 + si * 0.12)}>
          <p className="text-[5.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: a.c }}>{s.label}</p>
          {s.items.map(([I, t], i) => (
            <div key={i} className="mt-1 flex items-center gap-1 rounded bg-ink/[0.03] px-1 py-0.5 text-[6px] text-ink/75">
              <I className="h-2.5 w-2.5 shrink-0" /> <span className="truncate">{t}</span>
            </div>
          ))}
        </motion.div>
      ))}
      <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-ink/[0.07] p-2">
        <div className="flex items-center justify-between text-[6px] text-ink/55"><span>Recent runs</span><span className="flex items-center gap-1"><CheckCircle2 className="h-2.5 w-2.5 text-[#16a34a]" /> {(97 + r() * 2.9).toFixed(1)}% success</span></div>
        <div className="mt-1.5 flex gap-[3px]">
          {Array.from({ length: 36 }, (_, i) => <motion.span key={i} className="h-4 flex-1 rounded-sm" style={{ background: r() > 0.93 ? "#ef4444" : "#4ade80" }} initial={still ? false : { scaleY: 0 }} animate={on ? { scaleY: 1 } : {}} transition={{ delay: 0.5 + i * 0.015 }} />)}
        </div>
      </div>
    </div>
  );
}

/* ================================================================ frame */

const RENDER: Record<BlogSceneData["kind"], (p: P) => ReactNode> = {
  speed: SpeedScene,
  landing: LandingScene,
  shopify: ShopifyScene,
  pdp: PdpScene,
  checkout: CheckoutScene,
  orders: OrdersScene,
  analytics: AnalyticsScene,
  abtest: AbTestScene,
  funnel: FunnelScene,
  heatmap: HeatmapScene,
  design: DesignScene,
  mobile: MobileScene,
  chat: ChatScene,
  rag: RagScene,
  workflow: WorkflowScene,
  agent: AgentScene,
  code: CodeScene,
  security: SecurityScene,
  serp: SerpScene,
  crm: CrmScene,
  cost: CostScene,
  roadmap: RoadmapScene,
  compare: CompareScene,
  monitor: MonitorScene,
  a11y: A11yScene,
  pipeline: PipelineScene,
};

/** Fills its parent; the 480×300 scene is scaled to fit and centred on a soft backdrop. */
export function BlogScene({ scene, label }: { scene: BlogSceneData; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.15 });
  const still = !!useReducedMotion();
  const [scale, setScale] = useState(0);
  const a = ACCENTS[scene.seed % ACCENTS.length];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(el.clientWidth / W, el.clientHeight / H) * 0.96);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const Render = RENDER[scene.kind] ?? LandingScene;

  return (
    <div
      ref={ref}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className="relative h-full w-full overflow-hidden"
      style={{ background: `radial-gradient(120% 90% at 85% 10%, ${a.s} 0%, ${a.t} 35%, #f7f7f5 80%)` }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: "radial-gradient(rgba(11,12,14,0.07) 1px, transparent 1px)", backgroundSize: "16px 16px" }}
      />
      {scale > 0 && (
        <div className="absolute left-1/2 top-1/2" style={{ width: W, height: H, transform: `translate(-50%, -50%) scale(${scale})` }}>
          <Render d={scene} on={on} still={still} a={a} r={rng(scene.seed)} />
        </div>
      )}
    </div>
  );
}

