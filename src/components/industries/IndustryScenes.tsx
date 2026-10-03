"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  BatteryCharging,
  Bed,
  Check,
  Coffee,
  Cog,
  Factory,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  Package,
  Plane,
  Play,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Stethoscope,
  Truck,
  Users,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";

/* Small, realistic UI scenes for each industry, drawn on a fixed 320×160
   canvas and scaled to fit the card. */

const EASE = [0.25, 1, 0.5, 1] as const;
const W = 320;
const H = 160;
const CARD = "rounded-xl bg-white shadow-[0_12px_26px_-14px_rgba(11,12,14,0.35),0_0_0_1px_rgba(11,12,14,0.05)]";
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

export type SceneProps = { on: boolean; hover: boolean; still: boolean };

function pop(on: boolean, still: boolean, delay: number, y = 10) {
  return still
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y, scale: 0.96 },
        animate: on ? { opacity: 1, y: 0, scale: 1 } : {},
        transition: { duration: 0.55, ease: EASE, delay },
      };
}

function draw(on: boolean, still: boolean, delay: number, duration = 1.2) {
  return still
    ? { initial: false as const }
    : {
        initial: { pathLength: 0 },
        animate: on ? { pathLength: 1 } : {},
        transition: { duration, ease: EASE, delay },
      };
}

/** Scale the fixed canvas to the available width. */
export function SceneFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1.3, el.clientWidth / W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full min-w-0" style={{ height: H * scale }}>
      <div className="absolute left-0 top-0" style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ real estate */

export function RealEstateScene({ on, hover, still }: SceneProps) {
  const pins = [
    { x: 40, y: 34, c: "#ea580c", d: 0.7 },
    { x: 92, y: 62, c: "#2563eb", d: 0.85 },
    { x: 62, y: 92, c: "#2563eb", d: 1 },
  ];
  return (
    <>
      {/* listing */}
      <motion.div className={`absolute left-[12px] top-[12px] h-[136px] w-[150px] p-2 ${CARD}`} {...pop(on, still, 0.1)}>
        <div className="relative h-[72px] overflow-hidden rounded-lg bg-gradient-to-b from-[#cfe3ff] to-[#fdf2e1]">
          <svg viewBox="0 0 134 72" className="absolute inset-0 h-full w-full">
            <circle cx="112" cy="16" r="7" fill="#fcd34d" opacity="0.9" />
            <rect x="0" y="58" width="134" height="14" fill="#a7d7a0" />
            <rect x="34" y="30" width="62" height="30" fill="#ffffff" />
            <path d="M28 32 L65 12 L102 32 Z" fill="#c2410c" />
            <rect x="60" y="42" width="10" height="18" fill="#7c4a2a" />
            <rect x="40" y="38" width="13" height="10" fill="#93c5fd" />
            <rect x="77" y="38" width="13" height="10" fill="#93c5fd" />
            <rect x="96" y="44" width="22" height="16" fill="#f3f4f6" />
            <circle cx="16" cy="46" r="12" fill="#4ade80" />
            <rect x="15" y="52" width="3" height="8" fill="#7c4a2a" />
          </svg>
          <motion.span
            className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/90"
            animate={hover ? { scale: [1, 1.25, 1] } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className={`h-3 w-3 ${hover ? "fill-[#ef4444] text-[#ef4444]" : "text-ink/50"}`} />
          </motion.span>
          <span className="absolute bottom-1.5 left-1.5 rounded bg-ink/80 px-1.5 py-0.5 text-[6.5px] font-semibold text-white">FOR SALE</span>
        </div>
        <p className="mt-1.5 text-[9px] font-semibold text-ink">Modern Family Villa</p>
        <p className="mt-0.5 flex items-center gap-1 text-[6.5px] text-ink/50">
          <Bed className="h-2.5 w-2.5" /> 4 bed · 3 bath · 2,400 sq ft
        </p>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[10px] font-bold text-ink">$1,250,000</span>
          <span className="rounded bg-[#fdeee7] px-1.5 py-0.5 text-[6.5px] font-semibold text-[#c2410c]">Book visit</span>
        </div>
      </motion.div>

      {/* map */}
      <motion.div className={`absolute left-[172px] top-[22px] h-[120px] w-[136px] overflow-hidden ${CARD}`} {...pop(on, still, 0.3)}>
        <svg viewBox="0 0 136 120" className="absolute inset-0 h-full w-full">
          <rect width="136" height="120" fill="#eef2f6" />
          <path d="M0 48 H136 M0 86 H136 M48 0 V120 M100 0 V120" stroke="#ffffff" strokeWidth="6" />
          <path d="M0 18 L136 108" stroke="#ffffff" strokeWidth="4" />
          <rect x="106" y="8" width="26" height="30" rx="4" fill="#cdeccb" />
          <rect x="6" y="94" width="34" height="20" rx="4" fill="#cdeccb" />
          <path d="M60 120 Q72 100 90 104 T136 96 V120 Z" fill="#bfdbfe" />
        </svg>
        {pins.map((p, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: p.x - 8, top: p.y - 16 }}
            initial={still ? false : { opacity: 0, y: -14 }}
            animate={on ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 260, damping: 12, delay: p.d }}
          >
            {i === 0 && !still && (
              <motion.span
                className="absolute left-[3px] top-[10px] h-2.5 w-2.5 rounded-full"
                style={{ background: p.c }}
                animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            )}
            <MapPin className="relative h-4 w-4" style={{ color: p.c, fill: "#fff" }} strokeWidth={2.2} />
          </motion.div>
        ))}
        <motion.span
          className="absolute left-[52px] top-[24px] rounded-md bg-ink px-1.5 py-1 text-[6.5px] font-medium text-white shadow"
          animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        >
          3 new listings nearby
        </motion.span>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- D2C */

export function D2CScene({ on, hover, still }: SceneProps) {
  return (
    <motion.div className={`absolute left-[12px] top-[12px] flex h-[136px] w-[296px] gap-3 p-2.5 ${CARD}`} {...pop(on, still, 0.1)}>
      <div className="relative h-full w-[118px] overflow-hidden rounded-lg bg-gradient-to-br from-[#ffe8d6] to-[#ffd2b8]">
        <motion.div
          className="absolute left-1/2 top-[18px] -translate-x-1/2"
          animate={still ? undefined : hover ? { y: -4, rotate: -4 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* coffee pouch */}
          <svg viewBox="0 0 60 84" className="h-[84px] w-[60px] drop-shadow-[0_10px_10px_rgba(154,52,18,0.25)]">
            <path d="M6 10 Q30 4 54 10 L58 80 Q30 84 2 80 Z" fill="#3b2a20" />
            <rect x="4" y="4" width="52" height="8" rx="2" fill="#2a1d16" />
            <rect x="12" y="30" width="36" height="30" rx="3" fill="#f5e6d3" />
            <circle cx="30" cy="40" r="6" fill="#c2410c" />
            <rect x="17" y="50" width="26" height="3" rx="1.5" fill="#3b2a20" opacity="0.6" />
          </svg>
        </motion.div>
        <span className="absolute left-1.5 top-1.5 rounded-full bg-white px-1.5 py-0.5 text-[6.5px] font-semibold text-[#c2410c]">NEW</span>
      </div>
      <div className="flex flex-1 flex-col py-0.5">
        <div className="flex items-center justify-between">
          <span className="text-[6.5px] uppercase tracking-[0.14em] text-ink/45">Hilltop Roasters</span>
          <span className="relative">
            <ShoppingCart className="h-3.5 w-3.5 text-ink" />
            <motion.span
              key={hover ? "1" : "0"}
              className="absolute -right-1.5 -top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#2563eb] text-[6px] font-bold text-white"
              initial={still ? false : { scale: 0.4 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              {hover ? 2 : 1}
            </motion.span>
          </span>
        </div>
        <p className="mt-1 text-[12px] leading-tight text-ink" style={serif}>
          Single Origin Coffee
        </p>
        <div className="mt-1 flex items-center gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-2.5 w-2.5 fill-[#f59e0b] text-[#f59e0b]" />
          ))}
          <span className="ml-1 text-[6.5px] text-ink/45">Reviews</span>
        </div>
        <div className="mt-2 flex gap-1">
          {["250g", "500g", "1kg"].map((s, i) => (
            <span key={s} className={`rounded-md border px-1.5 py-0.5 text-[6.5px] ${i === 1 ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/60"}`}>
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[12px] font-bold text-ink">$18.00</span>
          <motion.span
            className="flex items-center gap-1 rounded-lg bg-ink px-2.5 py-1.5 text-[7px] font-semibold text-white"
            animate={hover ? { scale: [1, 0.92, 1] } : { scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <ShoppingBag className="h-2.5 w-2.5" /> Add to cart
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------- beauty */

export function BeautyScene({ on, hover, still }: SceneProps) {
  const shades = ["#f6d7c3", "#e8b896", "#d29b74", "#a86f4c", "#6f452c"];
  return (
    <>
      <div className="absolute left-[60px] top-[14px] h-[120px] w-[150px] rounded-t-full bg-gradient-to-b from-[#fde2ea] to-[#fbcfdc]" />
      <div className="absolute left-[30px] top-[118px] h-[10px] w-[210px] rounded-full bg-[#f3c4d2]/70 blur-[2px]" />
      {/* dropper bottle */}
      <motion.div className="absolute left-[78px] top-[36px]" {...pop(on, still, 0.15, 20)}>
        <motion.svg viewBox="0 0 40 90" className="h-[88px] w-[40px]" animate={hover && !still ? { rotate: -5 } : { rotate: 0 }}>
          <rect x="14" y="0" width="12" height="16" rx="5" fill="#1f2937" />
          <rect x="12" y="14" width="16" height="8" rx="2" fill="#d4a373" />
          <rect x="4" y="22" width="32" height="66" rx="8" fill="#e9a17b" opacity="0.9" />
          <rect x="4" y="50" width="32" height="38" rx="8" fill="#e07a5f" opacity="0.6" />
          <rect x="9" y="34" width="22" height="18" rx="2" fill="#fff7f2" />
          <rect x="12" y="39" width="16" height="2" rx="1" fill="#b45309" />
          <rect x="12" y="44" width="10" height="2" rx="1" fill="#b45309" opacity="0.5" />
          <rect x="8" y="26" width="4" height="56" rx="2" fill="#ffffff" opacity="0.35" />
        </motion.svg>
      </motion.div>
      {/* cream jar */}
      <motion.div className="absolute left-[124px] top-[84px]" {...pop(on, still, 0.3, 20)}>
        <svg viewBox="0 0 60 40" className="h-[40px] w-[60px]">
          <rect x="2" y="0" width="56" height="12" rx="4" fill="#f8fafc" stroke="#e5e7eb" />
          <rect x="4" y="12" width="52" height="27" rx="6" fill="#fbcfe8" />
          <rect x="14" y="20" width="32" height="10" rx="2" fill="#ffffff" />
          <rect x="18" y="24" width="24" height="2" rx="1" fill="#db2777" opacity="0.6" />
        </svg>
      </motion.div>
      {/* tube */}
      <motion.div className="absolute left-[184px] top-[40px]" {...pop(on, still, 0.45, 20)}>
        <motion.svg viewBox="0 0 30 84" className="h-[84px] w-[30px]" animate={hover && !still ? { rotate: 6 } : { rotate: 3 }} style={{ originY: 1 }}>
          <path d="M3 0 H27 L25 64 H5 Z" fill="#ffffff" stroke="#e5e7eb" />
          <rect x="6" y="64" width="18" height="18" rx="3" fill="#be185d" />
          <rect x="7" y="16" width="16" height="2" rx="1" fill="#be185d" />
          <rect x="9" y="22" width="12" height="2" rx="1" fill="#be185d" opacity="0.5" />
        </motion.svg>
      </motion.div>
      {/* sparkles */}
      {!still &&
        [
          { x: 66, y: 22, d: 0 },
          { x: 226, y: 30, d: 0.8 },
          { x: 172, y: 18, d: 1.5 },
        ].map((s, i) => (
          <motion.span
            key={i}
            className="absolute text-[#db2777]"
            style={{ left: s.x, top: s.y }}
            animate={{ scale: [0.6, 1.1, 0.6], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: s.d }}
          >
            <Sparkles className="h-3 w-3" />
          </motion.span>
        ))}
      {/* shade finder */}
      <motion.div className={`absolute right-[10px] top-[14px] w-[76px] p-2 ${CARD}`} {...pop(on, still, 0.6)}>
        <p className="text-[6.5px] font-semibold text-ink">Find your shade</p>
        <div className="mt-1.5 grid grid-cols-5 gap-1">
          {shades.map((c, i) => (
            <motion.span
              key={c}
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: c, boxShadow: (hover ? i === 3 : i === 1) ? "0 0 0 1.5px #fff, 0 0 0 2.5px #db2777" : "none" }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-[6px] text-ink/50">{hover ? "Shade 04 · Warm" : "Shade 02 · Light"}</p>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- fashion */

function Garment({ kind, color }: { kind: "tee" | "dress" | "jacket" | "shirt"; color: string }) {
  const paths: Record<string, string> = {
    tee: "M8 14 L18 8 Q24 12 30 8 L40 14 L36 24 L32 22 L32 58 L16 58 L16 22 L12 24 Z",
    dress: "M18 8 Q24 12 30 8 L32 22 L42 62 L6 62 L16 22 Z",
    jacket: "M6 14 L18 8 L24 16 L30 8 L42 14 L42 60 L26 60 L24 22 L22 60 L6 60 Z",
    shirt: "M8 14 L18 8 L24 14 L30 8 L40 14 L38 28 L34 26 L34 60 L14 60 L14 26 L10 28 Z",
  };
  return (
    <svg viewBox="0 0 48 66" className="h-[66px] w-[48px]">
      <path d="M24 0 Q28 0 28 4 Q28 6 24 8" stroke="#6b7280" strokeWidth="1.4" fill="none" />
      <path d="M8 12 L24 6 L40 12" stroke="#6b7280" strokeWidth="1.4" fill="none" />
      <path d={paths[kind]} fill={color} />
      {kind === "jacket" && <path d="M24 16 V60" stroke="#00000022" />}
      {kind === "shirt" && [24, 32, 40].map((y) => <circle key={y} cx="24" cy={y} r="1" fill="#ffffff99" />)}
    </svg>
  );
}

export function FashionScene({ on, hover, still }: SceneProps) {
  const items: { kind: "tee" | "dress" | "jacket" | "shirt"; color: string }[] = [
    { kind: "tee", color: "#e5e7eb" },
    { kind: "dress", color: "#c4b5fd" },
    { kind: "jacket", color: "#1f2937" },
    { kind: "shirt", color: "#fdba74" },
  ];
  return (
    <>
      <div className="absolute left-[10px] top-[24px] h-[3px] w-[200px] rounded-full bg-[#9ca3af]" />
      <div className="absolute left-[14px] top-[24px] h-[120px] w-[3px] bg-[#9ca3af]" />
      <div className="absolute left-[202px] top-[24px] h-[120px] w-[3px] bg-[#9ca3af]" />
      {items.map((it, i) => (
        <motion.div
          key={i}
          className="absolute top-[22px]"
          style={{ left: 26 + i * 44, originY: 0 }}
          initial={still ? false : { opacity: 0, x: -20 }}
          animate={on ? { opacity: 1, x: 0, rotate: still ? 0 : hover ? [0, i % 2 ? 6 : -6, 0] : 0 } : {}}
          transition={{ duration: hover ? 0.9 : 0.6, ease: EASE, delay: hover ? i * 0.05 : 0.15 + i * 0.1 }}
        >
          <Garment kind={it.kind} color={it.color} />
        </motion.div>
      ))}
      <motion.div className={`absolute right-[10px] top-[18px] w-[96px] p-2 ${CARD}`} {...pop(on, still, 0.6)}>
        <div className="h-[44px] rounded-md bg-gradient-to-b from-[#fff1e6] to-[#fed7aa]">
          <div className="mx-auto pt-1.5" style={{ width: 34 }}>
            <Garment kind="shirt" color="#fb923c" />
          </div>
        </div>
        <p className="mt-1.5 text-[7.5px] font-semibold text-ink">Linen Shirt</p>
        <p className="text-[6.5px] text-ink/50">$64 · 3 colours</p>
        <div className="mt-1.5 flex gap-1">
          {["S", "M", "L", "XL"].map((s) => {
            const active = s === (hover ? "L" : "M");
            return (
              <span key={s} className={`flex h-3.5 w-3.5 items-center justify-center rounded text-[6px] ${active ? "bg-ink text-white" : "border border-ink/15 text-ink/60"}`}>
                {s}
              </span>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- ecommerce */

export function EcommerceScene({ on, hover, still }: SceneProps) {
  const steps = [ShoppingCart, Package, Truck, Home];
  const progress = hover ? 1 : 0.66;
  return (
    <>
      <motion.div className={`absolute left-[12px] top-[12px] h-[136px] w-[296px] p-3 ${CARD}`} {...pop(on, still, 0.1)}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[6.5px] uppercase tracking-[0.14em] text-ink/45">Order #20481</p>
            <p className="text-[12px] text-ink" style={serif}>
              {hover ? "Delivered today" : "Arriving Thursday"}
            </p>
          </div>
          <span className={`rounded-full px-2 py-0.5 text-[6.5px] font-semibold ${hover ? "bg-[#dcfce7] text-[#15803d]" : "bg-[#eaf1ff] text-[#2563eb]"}`}>
            {hover ? "Delivered" : "Out for delivery"}
          </span>
        </div>

        <div className="relative mt-4 px-2">
          <div className="absolute left-[14px] right-[14px] top-[11px] h-[3px] rounded-full bg-ink/10" />
          <motion.div
            className="absolute left-[14px] top-[11px] h-[3px] rounded-full bg-[#2563eb]"
            initial={still ? false : { width: 0 }}
            animate={on ? { width: `calc((100% - 28px) * ${progress})` } : {}}
            transition={{ duration: 1, ease: EASE, delay: still ? 0 : 0.4 }}
          />
          <div className="relative flex justify-between">
            {steps.map((Icon, i) => {
              const done = i / (steps.length - 1) <= progress + 0.01;
              return (
                <span
                  key={i}
                  className={`flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 transition-colors duration-500 ${done ? "border-[#2563eb] bg-[#2563eb] text-white" : "border-ink/10 bg-white text-ink/35"}`}
                >
                  <Icon className="h-3 w-3" />
                </span>
              );
            })}
          </div>
          <div className="mt-1 flex justify-between text-[6px] text-ink/45">
            <span>Ordered</span>
            <span>Packed</span>
            <span>Shipped</span>
            <span>Home</span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg bg-ink/[0.03] p-1.5">
          {["#fde68a", "#bfdbfe", "#fbcfe8"].map((c, i) => (
            <span key={i} className="flex h-6 w-6 items-center justify-center rounded-md" style={{ background: c }}>
              <Package className="h-3 w-3 text-ink/40" />
            </span>
          ))}
          <span className="text-[6.5px] text-ink/55">3 items · Free shipping</span>
          <span className="ml-auto text-[9px] font-bold text-ink">$126.40</span>
        </div>
      </motion.div>
      {!still && (
        <motion.div
          className="absolute top-[50px]"
          animate={on ? { left: hover ? 262 : [30, 196] } : { left: 30 }}
          transition={hover ? { duration: 0.8, ease: EASE } : { duration: 1.4, ease: EASE, delay: 0.4 }}
        >
          <Truck className="h-4 w-4 text-[#2563eb]" />
        </motion.div>
      )}
    </>
  );
}

/* --------------------------------------------------------------- fintech */

export function FintechScene({ on, hover, still }: SceneProps) {
  const tx = [
    { Icon: Coffee, label: "Coffee shop", amt: "-$4.50", c: "#ef4444" },
    { Icon: Wallet, label: "Salary", amt: "+$3,200", c: "#16a34a" },
    { Icon: Home, label: "Rent", amt: "-$1,100", c: "#ef4444" },
  ];
  return (
    <>
      <motion.div
        className="absolute left-[12px] top-[18px] h-[96px] w-[150px] overflow-hidden rounded-xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#7c3aed] p-3 text-white shadow-[0_20px_30px_-14px_rgba(37,99,235,0.7)]"
        initial={still ? false : { opacity: 0, rotateY: -40, x: -20 }}
        animate={on ? { opacity: 1, rotateY: hover ? 12 : 0, x: 0, rotateX: hover ? 6 : 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        style={{ transformPerspective: 500 }}
      >
        <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/10" />
        <div className="flex items-center justify-between">
          <span className="text-[7px] font-semibold tracking-[0.12em]">NOVA BANK</span>
          <Wifi className="h-3 w-3 rotate-90 opacity-80" />
        </div>
        <div className="mt-2.5 h-[14px] w-[19px] rounded-[3px] bg-gradient-to-br from-[#fde68a] to-[#d97706]" />
        <p className="mt-2.5 font-mono text-[8.5px] tracking-[0.18em]">•••• •••• •••• 4471</p>
        <div className="mt-1.5 flex justify-between text-[6px] opacity-80">
          <span>A. SHARMA</span>
          <span>09/29</span>
        </div>
      </motion.div>
      <motion.div className={`absolute left-[12px] top-[120px] w-[150px] px-2.5 py-1.5 ${CARD}`} {...pop(on, still, 0.4)}>
        <div className="flex items-center justify-between">
          <span className="text-[6.5px] text-ink/50">Balance</span>
          <span className="text-[10px] font-bold text-ink">$12,480.50</span>
        </div>
      </motion.div>

      <motion.div className={`absolute left-[172px] top-[12px] h-[136px] w-[136px] p-2.5 ${CARD}`} {...pop(on, still, 0.25)}>
        <p className="text-[7.5px] font-semibold text-ink">Spending</p>
        <svg viewBox="0 0 116 34" className="mt-1 h-[34px] w-full">
          <defs>
            <linearGradient id="fin-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 26 L18 20 L34 24 L52 12 L70 16 L88 6 L116 10 V34 H0 Z" fill="url(#fin-fill)" />
          <motion.path d="M0 26 L18 20 L34 24 L52 12 L70 16 L88 6 L116 10" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" {...draw(on, still, 0.5)} />
        </svg>
        <div className="mt-1.5 space-y-1.5">
          {tx.map((t, i) => (
            <motion.div key={t.label} className="flex items-center gap-1.5" {...pop(on, still, 0.7 + i * 0.12, 6)}>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink/[0.05]">
                <t.Icon className="h-2.5 w-2.5 text-ink/60" />
              </span>
              <span className="text-[6.5px] text-ink/70">{t.label}</span>
              <span className="ml-auto text-[7px] font-semibold" style={{ color: t.c }}>
                {t.amt}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- SaaS */

export function SaasScene({ on, hover, still }: SceneProps) {
  return (
    <motion.div className={`absolute left-[12px] top-[12px] flex h-[136px] w-[296px] overflow-hidden ${CARD}`} {...pop(on, still, 0.1)}>
      <div className="flex w-[34px] flex-col items-center gap-2.5 bg-ink py-2.5">
        <span className="h-3.5 w-3.5 rounded-md bg-[#10b981]" />
        {[BarChart3, Users, Zap, Cog].map((Icon, i) => (
          <Icon key={i} className={`h-3 w-3 ${i === 0 ? "text-white" : "text-white/35"}`} />
        ))}
      </div>
      <div className="flex-1 p-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-semibold text-ink">Overview</p>
          <div className="flex -space-x-1.5">
            {["#fca5a5", "#93c5fd", "#86efac"].map((c) => (
              <span key={c} className="h-3.5 w-3.5 rounded-full border border-white" style={{ background: c }} />
            ))}
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {[
            { k: "MRR", v: "$48.2k", d: "+12%" },
            { k: "Active users", v: "2,340", d: "+8%" },
            { k: "Churn", v: "1.9%", d: "-0.4%" },
          ].map((m, i) => (
            <motion.div key={m.k} className="rounded-md bg-ink/[0.03] p-1.5" {...pop(on, still, 0.3 + i * 0.1, 6)}>
              <p className="text-[6px] text-ink/50">{m.k}</p>
              <p className="text-[9.5px] font-bold text-ink">{m.v}</p>
              <p className="text-[6px] font-semibold text-[#10b981]">{m.d}</p>
            </motion.div>
          ))}
        </div>
        <svg viewBox="0 0 250 56" className="mt-1.5 h-[56px] w-full">
          <defs>
            <linearGradient id="saas-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[14, 28, 42].map((y) => (
            <line key={y} x1="0" x2="250" y1={y} y2={y} stroke="#0b0c0e" strokeOpacity="0.05" />
          ))}
          <path d="M0 48 C30 44 40 30 70 34 S120 20 150 24 S210 6 250 8 V56 H0 Z" fill="url(#saas-fill)" />
          <motion.path d="M0 48 C30 44 40 30 70 34 S120 20 150 24 S210 6 250 8" fill="none" stroke="#10b981" strokeWidth="2" {...draw(on, still, 0.6, 1.6)} />
          <motion.path d="M0 52 C40 50 60 44 100 46 S170 38 250 30" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" {...draw(on, still, 0.8, 1.6)} />
          <motion.circle
            r="3.5"
            fill="#10b981"
            stroke="#fff"
            strokeWidth="1.5"
            animate={hover ? { cx: 250, cy: 8 } : { cx: 150, cy: 24 }}
            transition={{ duration: 0.6, ease: EASE }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------------- healthcare */

export function HealthcareScene({ on, hover, still }: SceneProps) {
  const slots = ["9:30", "10:00", "10:30", "11:15", "2:00", "3:30"];
  return (
    <>
      <motion.div className={`absolute left-[12px] top-[10px] w-[160px] p-2.5 ${CARD}`} {...pop(on, still, 0.1)}>
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e0f2fe]">
            <Stethoscope className="h-3.5 w-3.5 text-[#0284c7]" />
          </span>
          <div>
            <p className="text-[8px] font-semibold text-ink">Dr. Priya Rao</p>
            <p className="text-[6.5px] text-ink/50">General Physician</p>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
            <span key={d} className={`flex flex-col items-center rounded-md px-1 py-0.5 text-[6px] ${i === 2 ? "bg-ink text-white" : "text-ink/50"}`}>
              {d}
              <span className="text-[8px] font-semibold">{12 + i}</span>
            </span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {slots.map((s, i) => {
            const active = i === (hover ? 3 : 1);
            return (
              <span
                key={s}
                className={`rounded-md border py-[3px] text-center text-[6.5px] transition-colors duration-300 ${active ? "border-[#0284c7] bg-[#0284c7] text-white" : "border-ink/10 text-ink/60"}`}
              >
                {s}
              </span>
            );
          })}
        </div>
        <div className="mt-1.5 rounded-md bg-ink py-1 text-center text-[7px] font-semibold text-white">Confirm booking</div>
      </motion.div>

      <motion.div className="absolute left-[182px] top-[22px] h-[116px] w-[126px] overflow-hidden rounded-xl bg-[#0b1220] p-2.5 shadow-[0_16px_30px_-14px_rgba(2,132,199,0.6)]" {...pop(on, still, 0.3)}>
        <div className="flex items-center justify-between text-[6.5px] text-white/60">
          <span>Heart rate</span>
          <motion.span animate={still ? undefined : { scale: [1, 1.25, 1] }} transition={{ duration: 0.85, repeat: Infinity }}>
            <Heart className="h-3 w-3 fill-[#ef4444] text-[#ef4444]" />
          </motion.span>
        </div>
        <p className="mt-0.5 text-[16px] font-bold text-white">
          {hover ? 76 : 72} <span className="text-[7px] font-normal text-white/50">bpm</span>
        </p>
        <svg viewBox="0 0 106 44" className="mt-1 h-[44px] w-full">
          {[11, 22, 33].map((y) => (
            <line key={y} x1="0" x2="106" y1={y} y2={y} stroke="#22c55e" strokeOpacity="0.08" />
          ))}
          <motion.path
            d="M0 26 H20 L25 26 L29 10 L34 38 L38 22 L42 26 H60 L65 26 L69 10 L74 38 L78 22 L82 26 H106"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeDasharray="160"
            animate={still ? undefined : { strokeDashoffset: [160, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <div className="mt-1 flex justify-between text-[6px] text-white/50">
          <span>SpO₂ 98%</span>
          <span>BP 118/76</span>
        </div>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- manufacturing */

export function ManufacturingScene({ on, hover, still }: SceneProps) {
  const speed = hover ? 2.2 : 4.5;
  return (
    <>
      {/* gears */}
      <motion.div
        className="absolute left-[26px] top-[16px] text-[#7c3aed]"
        animate={still ? undefined : { rotate: 360 }}
        transition={{ duration: speed * 2, repeat: Infinity, ease: "linear" }}
      >
        <Cog className="h-12 w-12" strokeWidth={1.4} />
      </motion.div>
      <motion.div
        className="absolute left-[64px] top-[44px] text-[#a78bfa]"
        animate={still ? undefined : { rotate: -360 }}
        transition={{ duration: speed * 1.4, repeat: Infinity, ease: "linear" }}
      >
        <Cog className="h-8 w-8" strokeWidth={1.4} />
      </motion.div>
      <motion.div className={`absolute left-[110px] top-[14px] flex items-center gap-1.5 px-2 py-1 ${CARD}`} {...pop(on, still, 0.2)}>
        <span className="relative flex h-1.5 w-1.5">
          {!still && <motion.span className="absolute inset-0 rounded-full bg-[#22c55e]" animate={{ scale: [1, 2.4], opacity: [0.6, 0] }} transition={{ duration: 1.4, repeat: Infinity }} />}
          <span className="relative h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
        </span>
        <span className="text-[7px] font-semibold text-ink">Line A · Running</span>
        <Factory className="h-3 w-3 text-ink/40" />
      </motion.div>

      {/* conveyor */}
      <div className="absolute left-[12px] top-[108px] h-[16px] w-[200px] overflow-hidden rounded-full bg-[#374151]">
        <motion.div
          className="flex h-full w-[400px] items-center gap-[10px] px-1"
          animate={still ? undefined : { x: [-20, 0] }}
          transition={{ duration: speed / 4, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} className="h-[8px] w-[8px] shrink-0 rounded-full border border-[#9ca3af] bg-[#4b5563]" />
          ))}
        </motion.div>
      </div>
      <div className="absolute left-[24px] top-[124px] h-[22px] w-[4px] bg-[#9ca3af]" />
      <div className="absolute left-[196px] top-[124px] h-[22px] w-[4px] bg-[#9ca3af]" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-[86px]"
          initial={{ left: 10 }}
          animate={still ? { left: 40 + i * 60 } : { left: [10, 190] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: i * (speed / 3) }}
        >
          <Package className="h-[22px] w-[22px] text-[#b45309]" fill="#fcd34d" strokeWidth={1.4} />
        </motion.div>
      ))}

      {/* gauge */}
      <motion.div className={`absolute right-[12px] top-[40px] w-[90px] p-2 ${CARD}`} {...pop(on, still, 0.35)}>
        <p className="text-[6.5px] text-ink/50">Line efficiency</p>
        <svg viewBox="0 0 74 42" className="mt-1 h-[42px] w-full">
          <path d="M6 38 A31 31 0 0 1 68 38" fill="none" stroke="#ede9fe" strokeWidth="6" strokeLinecap="round" />
          <motion.path d="M6 38 A31 31 0 0 1 68 38" fill="none" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" initial={still ? false : { pathLength: 0 }} animate={on ? { pathLength: hover ? 0.94 : 0.82 } : {}} transition={{ duration: 1.2, ease: EASE, delay: 0.5 }} />
          <motion.g
            style={{ transformBox: "view-box", transformOrigin: "37px 38px" }}
            initial={{ rotate: still ? 58 : -90 }}
            animate={on ? { rotate: hover ? 80 : 58 } : {}}
            transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
          >
            <line x1="37" y1="38" x2="37" y2="14" stroke="#0b0c0e" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
          <circle cx="37" cy="38" r="3" fill="#0b0c0e" />
        </svg>
        <p className="text-center text-[10px] font-bold text-ink">{hover ? "94%" : "82%"}</p>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- travel */

export function TravelScene({ on, hover, still }: SceneProps) {
  return (
    <>
      <motion.div className={`absolute left-[12px] top-[14px] h-[96px] w-[196px] overflow-hidden ${CARD}`} {...pop(on, still, 0.1)}>
        <div className="flex h-[22px] items-center justify-between bg-[#2563eb] px-2.5 text-white">
          <span className="text-[7px] font-semibold tracking-[0.12em]">BOARDING PASS</span>
          <Plane className="h-3 w-3" />
        </div>
        <div className="relative flex items-start justify-between px-3 pt-2">
          <div>
            <p className="text-[16px] font-bold leading-none text-ink">NYC</p>
            <p className="text-[6px] text-ink/50">New York</p>
          </div>
          <svg viewBox="0 0 90 30" className="absolute left-[50px] top-[4px] h-[30px] w-[90px]">
            <path id="flight-arc" d="M4 26 Q45 -6 86 26" fill="none" stroke="#2563eb" strokeOpacity="0.4" strokeDasharray="2 3" />
          </svg>
          <motion.div
            className="absolute top-[2px]"
            initial={{ left: 52 }}
            animate={on ? { left: hover ? 126 : 90, top: hover ? 14 : 2 } : {}}
            transition={{ duration: 1, ease: EASE, delay: still ? 0 : 0.4 }}
          >
            <Plane className="h-3.5 w-3.5 rotate-45 text-[#2563eb]" fill="#2563eb" />
          </motion.div>
          <div className="text-right">
            <p className="text-[16px] font-bold leading-none text-ink">LIS</p>
            <p className="text-[6px] text-ink/50">Lisbon</p>
          </div>
        </div>
        <div className="mx-3 mt-2.5 border-t border-dashed border-ink/15" />
        <div className="flex justify-between px-3 pt-1.5 text-[6px] text-ink/50">
          {[
            ["Gate", "B14"],
            ["Seat", "12A"],
            ["Boards", "18:40"],
          ].map(([k, v]) => (
            <span key={k}>
              {k}
              <span className="block text-[8.5px] font-semibold text-ink">{v}</span>
            </span>
          ))}
        </div>
        <span className="absolute -left-1.5 top-[66px] h-3 w-3 rounded-full bg-[#f3f4f6]" />
        <span className="absolute -right-1.5 top-[66px] h-3 w-3 rounded-full bg-[#f3f4f6]" />
      </motion.div>

      <motion.div className={`absolute left-[152px] top-[70px] w-[156px] p-2 ${CARD}`} {...pop(on, still, 0.35, 16)}>
        <div className="flex gap-2">
          <div className="relative h-[52px] w-[56px] overflow-hidden rounded-md bg-gradient-to-b from-[#7dd3fc] to-[#fde68a]">
            <div className="absolute bottom-0 h-[18px] w-full bg-[#38bdf8]" />
            <div className="absolute bottom-[14px] left-[8px] h-[22px] w-[18px] rounded-t-sm bg-white" />
            <div className="absolute bottom-[14px] left-[28px] h-[30px] w-[16px] rounded-t-sm bg-[#f8fafc]" />
            <span className="absolute right-[4px] top-[4px] h-3 w-3 rounded-full bg-[#fcd34d]" />
          </div>
          <div className="flex-1">
            <p className="text-[8px] font-semibold text-ink">Alfama Bay Hotel</p>
            <div className="mt-0.5 flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-2 w-2 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <p className="mt-1 text-[6px] text-ink/50">12–16 Jun · 2 guests</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[8.5px] font-bold text-ink">$189<span className="text-[6px] font-normal text-ink/50">/night</span></span>
              <span className={`rounded px-1 py-0.5 text-[6px] font-semibold ${hover ? "bg-[#16a34a] text-white" : "bg-[#eaf1ff] text-[#2563eb]"}`}>
                {hover ? "Booked ✓" : "Reserve"}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- automotive */

export function AutomotiveScene({ on, hover, still }: SceneProps) {
  const charge = hover ? 92 : 78;
  return (
    <>
      <div className="absolute left-[8px] top-[124px] h-[3px] w-[220px] rounded-full bg-ink/10" />
      <motion.div
        className="absolute left-[14px] top-[48px]"
        initial={still ? false : { opacity: 0, x: -40 }}
        animate={on ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: EASE, delay: 0.1 }}
      >
        <svg viewBox="0 0 210 82" className="h-[82px] w-[210px]">
          <ellipse cx="105" cy="78" rx="92" ry="4" fill="#0b0c0e" opacity="0.08" />
          <path d="M10 58 Q12 44 34 40 L66 26 Q82 18 112 18 L138 18 Q160 20 178 36 L196 42 Q206 46 204 58 L204 64 H10 Z" fill="#e5e7eb" />
          <path d="M10 58 Q12 44 34 40 L66 26 Q82 18 112 18 L138 18 Q160 20 178 36 L196 42 Q206 46 204 58" fill="none" stroke="#9ca3af" strokeWidth="1" />
          <path d="M72 30 Q86 24 108 24 L110 40 H60 Z" fill="#bfdbfe" />
          <path d="M116 24 L136 24 Q152 26 166 38 L116 40 Z" fill="#bfdbfe" />
          <line x1="112" y1="24" x2="112" y2="60" stroke="#d1d5db" />
          <rect x="190" y="46" width="12" height="5" rx="2" fill="#fde68a" />
          <rect x="11" y="48" width="8" height="4" rx="2" fill="#ef4444" opacity="0.8" />
          <rect x="120" y="44" width="10" height="2" rx="1" fill="#9ca3af" />
          <path d="M30 60 H190" stroke="#2563eb" strokeWidth="2" opacity="0.7" />
        </svg>
        {[48, 162].map((x) => (
          <motion.div
            key={x}
            className="absolute top-[48px] h-[30px] w-[30px] rounded-full border-[5px] border-[#1f2937] bg-[#9ca3af]"
            style={{ left: x - 15 }}
            animate={still ? undefined : { rotate: hover ? 720 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#4b5563]" />
            <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-[#4b5563]" />
          </motion.div>
        ))}
      </motion.div>

      {/* charger + cable */}
      <svg viewBox="0 0 60 80" className="absolute left-[214px] top-[46px] h-[80px] w-[60px]">
        <motion.path d="M4 40 Q20 76 44 58" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" {...draw(on, still, 0.8, 0.8)} />
        <rect x="38" y="16" width="18" height="62" rx="4" fill="#1f2937" />
        <rect x="41" y="22" width="12" height="10" rx="2" fill="#22c55e" opacity="0.8" />
      </svg>

      <motion.div className={`absolute right-[10px] top-[10px] w-[118px] p-2 ${CARD}`} {...pop(on, still, 0.4)}>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[7px] font-semibold text-ink">
            <BatteryCharging className="h-3 w-3 text-[#16a34a]" /> Charging
          </span>
          <span className="text-[9px] font-bold text-ink">{charge}%</span>
        </div>
        <div className="mt-1.5 h-[7px] overflow-hidden rounded-full bg-ink/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a]"
            initial={still ? false : { width: "20%" }}
            animate={on ? { width: `${charge}%` } : {}}
            transition={{ duration: 1.6, ease: EASE, delay: 0.6 }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[6px] text-ink/50">
          <span>Range {hover ? 368 : 312} km</span>
          <span>{hover ? "8 min left" : "22 min left"}</span>
        </div>
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------- education */

export function EducationScene({ on, hover, still }: SceneProps) {
  const lessons = ["Welcome & setup", "Design basics", "Colour & type", "Final project"];
  const done = hover ? 3 : 2;
  return (
    <>
      <motion.div className={`absolute left-[12px] top-[12px] h-[136px] w-[176px] overflow-hidden ${CARD}`} {...pop(on, still, 0.1)}>
        <div className="relative h-[86px] bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]">
          <div className="absolute left-3 top-3 h-[34px] w-[54px] rounded-md bg-white/10" />
          <div className="absolute left-3 top-[50px] h-[3px] w-[70px] rounded-full bg-white/25" />
          <div className="absolute left-3 top-[58px] h-[3px] w-[46px] rounded-full bg-white/15" />
          <div className="absolute right-3 top-3 h-[50px] w-[40px] rounded-md bg-[#fcd34d]/80" />
          <motion.span
            className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
            animate={hover ? { scale: 1.15 } : { scale: 1 }}
          >
            <Play className="ml-0.5 h-3.5 w-3.5 fill-ink text-ink" />
          </motion.span>
          <div className="absolute bottom-1.5 left-2 right-2 h-[3px] rounded-full bg-white/20">
            <motion.div
              className="h-full rounded-full bg-[#10b981]"
              initial={still ? false : { width: 0 }}
              animate={on ? { width: hover ? "85%" : "45%" } : {}}
              transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
            />
          </div>
        </div>
        <div className="p-2">
          <p className="text-[6px] uppercase tracking-[0.14em] text-ink/45">Lesson 3 of 12</p>
          <p className="text-[10px] text-ink" style={serif}>
            Colour &amp; typography
          </p>
          <p className="mt-0.5 text-[6.5px] text-ink/50">14 min · Video + quiz</p>
        </div>
      </motion.div>

      <motion.div className={`absolute left-[196px] top-[12px] w-[112px] p-2 ${CARD}`} {...pop(on, still, 0.3)}>
        <div className="flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5 text-[#2563eb]" />
          <span className="text-[7px] font-semibold text-ink">Course progress</span>
        </div>
        <ul className="mt-1.5 space-y-1.5">
          {lessons.map((l, i) => (
            <li key={l} className="flex items-center gap-1.5">
              <span
                className={`flex h-3 w-3 items-center justify-center rounded-full transition-colors duration-500 ${i < done ? "bg-[#10b981]" : "border border-ink/20"}`}
              >
                {i < done && <Check className="h-2 w-2 text-white" strokeWidth={3} />}
              </span>
              <span className={`text-[6.5px] ${i < done ? "text-ink/45 line-through" : "text-ink/75"}`}>{l}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="absolute left-[196px] top-[112px] flex w-[112px] items-center gap-1.5 rounded-xl bg-[#fef3c7] px-2 py-1.5" {...pop(on, still, 0.5)}>
        <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
        <span className="text-[6.5px] font-semibold text-[#92400e]">Quiz score 9/10</span>
      </motion.div>
    </>
  );
}

export const scenes: Record<string, (p: SceneProps) => ReactNode> = {
  "real-estate": RealEstateScene,
  "d2c-consumer": D2CScene,
  "beauty-personal-care": BeautyScene,
  "fashion-apparel": FashionScene,
  ecommerce: EcommerceScene,
  fintech: FintechScene,
  "saas-technology": SaasScene,
  "healthcare-healthtech": HealthcareScene,
  manufacturing: ManufacturingScene,
  "travel-hospitality": TravelScene,
  "automotive-mobility": AutomotiveScene,
  "education-edtech": EducationScene,
};

export const sceneBackdrop: Record<string, string> = {
  "real-estate": "from-[#f4f7fb] to-[#fdf6ee]",
  "d2c-consumer": "from-[#fff7f0] to-[#f7f3ef]",
  "beauty-personal-care": "from-[#fff5f8] to-[#fdf2f6]",
  "fashion-apparel": "from-[#f7f5ff] to-[#f4f2f0]",
  ecommerce: "from-[#f3f7ff] to-[#f6f6f4]",
  fintech: "from-[#f2f5ff] to-[#f6f4ff]",
  "saas-technology": "from-[#f0fbf6] to-[#f5f6f4]",
  "healthcare-healthtech": "from-[#f0f8fd] to-[#f6f8f9]",
  manufacturing: "from-[#f6f4fd] to-[#f3f3f1]",
  "travel-hospitality": "from-[#f0f7ff] to-[#fdf8ec]",
  "automotive-mobility": "from-[#f3f6f9] to-[#eff7f1]",
  "education-edtech": "from-[#f2f5ff] to-[#fdf8ea]",
};
