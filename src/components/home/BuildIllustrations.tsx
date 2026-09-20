"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { ChartColumn, Headphones, Inbox, Mail, ShoppingCart, Sparkles } from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

const CARD_SHADOW =
  "shadow-[0_14px_34px_-14px_rgba(11,12,14,0.25),0_0_0_1px_rgba(11,12,14,0.04)]";

/** shared panel: soft gray stage with a fixed 368x150 canvas */
export function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[150px] w-full max-w-[368px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3f3f1] to-[#f7f7f5] shadow-[inset_0_0_0_1px_rgba(11,12,14,0.03)]">
      <div className="absolute left-1/2 top-0 h-[150px] w-[368px] -translate-x-1/2">{children}</div>
    </div>
  );
}

function Float({
  children,
  still,
  on,
  amp = 5,
  dur = 6,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  still: boolean;
  on: boolean;
  amp?: number;
  dur?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={still || !on ? {} : { y: [0, -amp, 0] }}
      transition={{ duration: dur, ease: "easeInOut", repeat: Infinity, delay }}
    >
      {children}
    </motion.div>
  );
}

function Dot({ className, style }: { className: string; style?: CSSProperties }) {
  return <span className={`absolute h-[7px] w-[7px] rounded-full ${className}`} style={style} />;
}

function Building() {
  return (
    <svg viewBox="0 0 100 110" className="h-full w-full">
      <rect width="100" height="110" fill="#ececec" />
      <polygon points="8,110 42,6 64,26 56,110" fill="#c4c6ca" />
      <polygon points="42,6 96,62 92,110 56,110 64,26" fill="#dedfe1" />
      <polygon points="8,110 42,6 30,62" fill="#8f9297" />
      <polygon points="30,62 42,6 52,16 44,80" fill="#a9abb0" />
    </svg>
  );
}

function BrowserBar() {
  return (
    <div className="flex items-center gap-[3px] px-2 pt-1.5">
      <i className="h-[4px] w-[4px] rounded-full bg-[#ff6b5e]" />
      <i className="h-[4px] w-[4px] rounded-full bg-[#ffc04a]" />
      <i className="h-[4px] w-[4px] rounded-full bg-[#3ccf6e]" />
      <span className="ml-auto flex items-center gap-1.5">
        <i className="h-[2px] w-3 rounded bg-ink/15" />
        <i className="h-[2px] w-3 rounded bg-ink/15" />
        <i className="h-[5px] w-6 rounded-sm bg-ink" />
      </span>
    </div>
  );
}

/** the tiny "Better ideas. Built digitally." website used in several illustrations */
export function SiteMock({ className, scale = 1 }: { className?: string; scale?: number }) {
  return (
    <div className={`rounded-xl bg-white ${CARD_SHADOW} ${className ?? ""}`} style={{ zoom: scale }}>
      <BrowserBar />
      <div className="flex items-center gap-3 px-3 pb-3 pt-2">
        <div className="flex-1">
          <p className="text-[6px] text-ink/40">Your Brand</p>
          <p className="mt-2 text-[12px] leading-[1.05] text-ink" style={serif}>
            Better ideas.
            <br />
            Built digitally.
          </p>
          <span className="mt-2 inline-block rounded-full bg-ink px-2 py-[2px] text-[4px] text-white">Get started</span>
        </div>
        <div className="h-[62px] w-[58px] shrink-0 overflow-hidden rounded-md">
          <Building />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- 01 */
export function WebsitesArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <Panel>
      <div className="absolute left-[64px] top-[26px] h-[100px] w-[120px] rounded-xl bg-white/70 shadow-[0_8px_20px_-12px_rgba(11,12,14,0.2)]" />
      <Float on={on} still={still} amp={4} className="absolute left-[112px] top-[18px] w-[196px]">
        <SiteMock />
      </Float>
      <Dot className="bg-blue" style={{ right: 22, top: 86 }} />
      <svg className="absolute right-3 top-4 h-[120px] w-[60px]" viewBox="0 0 60 120" fill="none">
        <path d="M6 110C50 90 56 40 30 6" stroke="#8b93d6" strokeOpacity=".4" />
      </svg>
    </Panel>
  );
}

/* ---------------------------------------------------------------- 02 */
export function AppsArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <Panel>
      <Float on={on} still={still} amp={5} dur={6} className="absolute left-[92px] top-[6px]">
        <div className={`h-[170px] w-[92px] -rotate-[8deg] rounded-[18px] bg-white p-2 ${CARD_SHADOW}`}>
          <div className="mx-auto h-[3px] w-6 rounded bg-ink/20" />
          <p className="mt-4 text-[10px] leading-[1.05]" style={serif}>
            Good things
            <br />
            are coming.
          </p>
          <span className="mt-2 inline-block rounded-full bg-ink px-2 py-[2px] text-[4px] text-white">Get started</span>
          <svg viewBox="0 0 80 40" className="mt-5 w-full" fill="none">
            <path d="M0 34 L14 26 L26 30 L40 16 L54 22 L66 8 L80 12" stroke="#2563eb" strokeWidth="1.2" />
            <path d="M0 34 L14 26 L26 30 L40 16 L54 22 L66 8 L80 12 V40 H0Z" fill="#2563eb" opacity=".08" />
          </svg>
        </div>
      </Float>
      <Float on={on} still={still} amp={5} dur={7} delay={1} className="absolute left-[188px] top-[10px]">
        <div className={`h-[170px] w-[96px] rounded-[18px] bg-white p-2 ${CARD_SHADOW}`}>
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <i key={i} className="h-5 rounded bg-ink/[0.06]" />
            ))}
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="mt-2 flex items-center gap-1.5">
              <i className="h-3 w-3 rounded bg-blue/15" />
              <span className="flex-1">
                <i className="block h-[3px] w-full rounded bg-ink/15" />
                <i className="mt-[3px] block h-[3px] w-2/3 rounded bg-ink/10" />
              </span>
            </div>
          ))}
          <span className="mt-3 block h-4 rounded bg-blue" />
        </div>
      </Float>
      <Dot className="bg-blue" style={{ left: 52, top: 96 }} />
      <Dot className="bg-blue" style={{ right: 66, top: 38 }} />
      <svg className="absolute left-10 top-8 h-[100px] w-[70px]" viewBox="0 0 70 100" fill="none">
        <path d="M6 96C10 60 30 30 66 8" stroke="#8b93d6" strokeOpacity=".4" />
      </svg>
    </Panel>
  );
}

/* ---------------------------------------------------------------- 03 */
export function ShopifyArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <Panel>
      <Float on={on} still={still} amp={4} className="absolute left-[40px] top-[28px] w-[262px]">
        <div className={`rounded-xl bg-white ${CARD_SHADOW}`}>
          <div className="flex items-center gap-[3px] px-2 pt-1.5">
            {[0, 1, 2].map((i) => (
              <i key={i} className="h-[4px] w-[4px] rounded-full bg-ink/15" />
            ))}
          </div>
          <div className="flex items-center gap-3 p-3 pt-2">
            <div className="flex h-[64px] w-[74px] items-center justify-center rounded-lg bg-gradient-to-br from-[#eeeeee] to-[#dcdde0]">
              <Headphones className="h-9 w-9 text-[#8a8d94]" strokeWidth={1.2} />
            </div>
            <div className="flex-1">
              <p className="text-[6px] font-medium text-ink">Next Gen Headphones</p>
              <i className="mt-1.5 block h-[3px] w-14 rounded bg-ink/10" />
              <p className="mt-1.5 text-[7px] font-medium text-ink">$199</p>
              <span className="mt-1.5 block w-[58px] rounded bg-ink py-[3px] text-center text-[4.5px] text-white">Add to cart</span>
            </div>
          </div>
        </div>
      </Float>
      <motion.div
        className={`absolute right-[22px] top-[10px] flex h-9 w-9 items-center justify-center rounded-xl bg-white ${CARD_SHADOW}`}
        animate={still || !on ? {} : { scale: [1, 1.12, 1], rotate: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
      >
        <ShoppingCart className="h-4 w-4 text-blue" strokeWidth={1.7} />
      </motion.div>
      <svg className="absolute right-2 top-8 h-[90px] w-[40px]" viewBox="0 0 40 90" fill="none">
        <path d="M6 6C36 20 40 60 20 86" stroke="#ea580c" strokeOpacity=".5" />
      </svg>
      <Dot className="bg-orange-600" style={{ right: 12, top: 44 }} />
    </Panel>
  );
}

/* ---------------------------------------------------------------- 04 */
function FlowNode({ children, className, delay, on, still }: { children: ReactNode; className: string; delay: number; on: boolean; still: boolean }) {
  return (
    <motion.div
      className={`absolute flex h-[34px] items-center gap-1.5 rounded-lg bg-white px-3 text-[8px] font-medium text-ink ${CARD_SHADOW} ${className}`}
      animate={still || !on ? {} : { boxShadow: ["0 14px 34px -14px rgba(11,12,14,0.25)", "0 0 0 1.5px rgba(124,58,237,0.35), 0 10px 30px -8px rgba(124,58,237,0.35)", "0 14px 34px -14px rgba(11,12,14,0.25)"] }}
      transition={{ duration: 3.2, repeat: Infinity, delay, times: [0, 0.18, 0.5], ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AutomationArt({ on, still }: { on: boolean; still: boolean }) {
  const flow = still || !on ? {} : { strokeDashoffset: [0, -16] };
  const line = { stroke: "#9aa0c8", strokeOpacity: 0.7, strokeDasharray: "3 5", fill: "none" as const, strokeWidth: 1 };
  const loop = { duration: 1.2, repeat: Infinity, ease: "linear" as const };
  return (
    <Panel>
      <svg className="absolute inset-0" viewBox="0 0 368 150" fill="none">
        <motion.path d="M118 42H196" {...line} animate={flow} transition={loop} />
        <motion.path d="M118 108H196" {...line} animate={flow} transition={loop} />
        <motion.path d="M64 59V91" {...line} animate={flow} transition={loop} />
        <motion.path d="M221 59V91" {...line} animate={flow} transition={loop} />
        {on && !still && (
          <circle r="3" fill="#7c3aed">
            <animateMotion dur="5s" repeatCount="indefinite" path="M63 42H221V108H63Z" />
          </circle>
        )}
      </svg>
      <FlowNode on={on} still={still} delay={0} className="left-[28px] top-[25px]">
        <Inbox className="h-3 w-3 text-blue" /> New lead
      </FlowNode>
      <FlowNode on={on} still={still} delay={1} className="left-[196px] top-[25px]">
        <Sparkles className="h-3 w-3 text-[#7c3aed]" /> AI
      </FlowNode>
      <FlowNode on={on} still={still} delay={2} className="left-[38px] top-[91px]">
        <ChartColumn className="h-3 w-3 text-blue" /> CRM
      </FlowNode>
      <FlowNode on={on} still={still} delay={3} className="left-[196px] top-[91px]">
        <Mail className="h-3 w-3 text-ink" /> Email
      </FlowNode>
    </Panel>
  );
}

/* ---------------------------------------------------------------- 05 */
export function UiUxArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <Panel>
      <div className={`absolute left-[26px] top-[34px] h-[86px] w-[112px] rounded-lg bg-white p-2 ${CARD_SHADOW}`}>
        <div className="flex gap-1">
          <i className="h-1 w-6 rounded bg-ink/10" />
          <i className="h-1 w-3 rounded bg-ink/10" />
        </div>
        <div className="relative mt-1.5 grid h-[40px] grid-cols-[1fr_28px] gap-1.5">
          <div className="relative overflow-hidden rounded bg-ink/[0.06]">
            <svg viewBox="0 0 60 40" className="absolute inset-0 h-full w-full" fill="none" stroke="#0b0c0e" strokeOpacity=".15">
              <path d="M0 0L60 40M60 0L0 40" />
            </svg>
            {!still && on && (
              <motion.span
                className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                animate={{ x: [-40, 90] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
              />
            )}
          </div>
          <div className="space-y-1">
            <i className="block h-4 rounded bg-ink/[0.06]" />
            <i className="block h-4 rounded bg-ink/[0.06]" />
          </div>
        </div>
        <i className="mt-2 block h-1 w-14 rounded bg-ink/10" />
      </div>

      <motion.svg
        className="absolute left-[150px] top-[68px] h-3 w-8"
        viewBox="0 0 32 12"
        fill="none"
        stroke="#0b0c0e"
        strokeOpacity=".55"
        animate={still || !on ? {} : { x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M0 6H30M25 1l5 5-5 5" />
      </motion.svg>

      <Float on={on} still={still} amp={4} className={`absolute left-[196px] top-[10px] h-[124px] w-[130px] rounded-lg bg-white p-2 ${CARD_SHADOW}`}>
        <i className="block h-1 w-8 rounded bg-ink/15" />
        <div className="relative mt-2 h-[56px] overflow-hidden rounded bg-gradient-to-b from-[#bcd6f5] to-[#e5eefb]">
          <svg viewBox="0 0 120 56" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <polygon points="0,56 30,20 52,42 78,10 120,56" fill="#6f8fb8" />
            <polygon points="46,56 78,10 96,34 120,56" fill="#8fa9c9" />
          </svg>
        </div>
        <i className="mt-3 block h-1 w-20 rounded bg-ink/15" />
        <i className="mt-1.5 block h-1 w-14 rounded bg-blue/40" />
      </Float>
    </Panel>
  );
}

/* ---------------------------------------------------------------- 06 */
function CountUp({ to, on, still }: { to: number; on: boolean; still: boolean }) {
  const mv = useMotionValue(still ? to : 0);
  const text = useTransform(mv, (v) => `+${Math.round(v)}%`);
  useEffect(() => {
    if (!on || still) return;
    const c = animate(mv, to, { duration: 1.8, ease: EASE, delay: 0.4 });
    return () => c.stop();
  }, [on, still, to, mv]);
  return <motion.span>{text}</motion.span>;
}

export function CroArt({ on, still }: { on: boolean; still: boolean }) {
  return (
    <Panel>
      <div className={`absolute left-[34px] top-[26px] h-[100px] w-[214px] rounded-xl bg-white ${CARD_SHADOW}`}>
        <i className="absolute left-3 top-3 h-1 w-10 rounded bg-ink/10" />
        <svg viewBox="0 0 190 70" className="absolute bottom-3 left-3 h-[64px] w-[190px]" fill="none">
          <defs>
            <linearGradient id="cro-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#2563eb" stopOpacity=".22" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path d="M0 60 L28 50 L52 54 L82 34 L110 40 L142 16 L190 4 V70 H0Z" fill="url(#cro-fill)" initial={{ opacity: still ? 1 : 0 }} animate={on ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 1 }} />
          <motion.path
            d="M0 60 L28 50 L52 54 L82 34 L110 40 L142 16 L190 4"
            stroke="#2563eb"
            strokeWidth="1.4"
            strokeLinejoin="round"
            initial={{ pathLength: still ? 1 : 0 }}
            animate={on ? { pathLength: 1 } : {}}
            transition={{ duration: 1.8, ease: EASE, delay: 0.3 }}
          />
        </svg>
      </div>
      <Float on={on} still={still} amp={4} className={`absolute left-[214px] top-[34px] flex h-[40px] w-[74px] items-center justify-center rounded-lg bg-white text-[10px] font-medium text-ink ${CARD_SHADOW}`}>
        <CountUp to={32} on={on} still={still} />
      </Float>
      <div className="absolute left-[224px] top-[86px] space-y-1.5">
        <i className="block h-[5px] w-12 rounded bg-ink/10" />
        <i className="block h-[5px] w-8 rounded bg-ink/10" />
      </div>
      <svg className="absolute right-2 top-5 h-[100px] w-[40px]" viewBox="0 0 40 100" fill="none">
        <path d="M8 6C38 26 40 70 14 96" stroke="#ea580c" strokeOpacity=".5" />
      </svg>
      <Dot className="bg-orange-600" style={{ right: 20, top: 26 }} />
    </Panel>
  );
}

/* ------------------------------------------------------- header hero art */
function orbitPath(cx: number, cy: number, rx: number, ry: number) {
  return `M${cx - rx} ${cy} A${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;
}

export function HeaderArt({ on, still }: { on: boolean; still: boolean }) {
  const path = orbitPath(260, 150, 232, 118);
  const sat = (dur: number, begin: number, color: string, r = 3.5) =>
    on && !still ? (
      <circle r={r} fill={color}>
        <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
      </circle>
    ) : null;
  return (
    <div className="relative mx-auto h-[310px] w-[520px] max-w-full">
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 520 310" fill="none">
        <g transform="rotate(-8 260 150)">
          <motion.path d={path} stroke="#8b93d6" strokeOpacity=".5" initial={{ pathLength: still ? 1 : 0 }} animate={on ? { pathLength: 1 } : {}} transition={{ duration: 2.4, ease: EASE }} />
          <path d={orbitPath(260, 150, 216, 104)} stroke="#8b93d6" strokeOpacity=".25" strokeDasharray="1.5 6" strokeLinecap="round" />
          {sat(26, 0, "#2563eb")}
          {sat(34, -12, "#ea580c")}
          {sat(30, -22, "#0b0c0e")}
        </g>
        <path d="M260 274l3 11 11 3-11 3-3 11-3-11-11-3 11-3z" fill="#ea580c" transform="translate(0 -6)" />
      </svg>

      <div className="absolute left-[92px] top-[86px] h-[150px] w-[300px] rotate-[3deg] rounded-2xl bg-white/60 shadow-[0_18px_40px_-20px_rgba(11,12,14,0.2)]" />
      <Float on={on} still={still} amp={6} dur={7} className="absolute left-[60px] top-[40px] w-[300px] -rotate-[4deg]">
        <SiteMock scale={1.4} className="!rounded-2xl" />
      </Float>
    </div>
  );
}

/* --------------------------------------------------------- closing orbit */
export function ClosingOrbit({ on, still }: { on: boolean; still: boolean }) {
  const paths = [
    { d: orbitPath(150, 90, 130, 56), rot: -14, op: 0.5 },
    { d: orbitPath(150, 90, 100, 40), rot: -14, op: 0.3 },
    { d: orbitPath(150, 90, 70, 26), rot: -14, op: 0.22 },
  ];
  const dots = [
    { c: "#2563eb", dur: 22, begin: 0, p: 0 },
    { c: "#ea580c", dur: 28, begin: -9, p: 0 },
    { c: "#2563eb", dur: 30, begin: -18, p: 0 },
    { c: "#ea580c", dur: 34, begin: -26, p: 0 },
  ];
  return (
    <svg viewBox="0 0 300 180" className="h-[180px] w-[300px] max-w-full overflow-visible" fill="none">
      <g transform="rotate(-14 150 90)">
        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke="#8b93d6"
            strokeOpacity={p.op}
            initial={{ pathLength: still ? 1 : 0 }}
            animate={on ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: EASE, delay: i * 0.25 }}
          />
        ))}
        {on && !still &&
          dots.map((d, i) => (
            <circle key={i} r="3.5" fill={d.c}>
              <animateMotion dur={`${d.dur}s`} begin={`${d.begin}s`} repeatCount="indefinite" path={paths[i % 2 === 0 ? 0 : 1].d} />
            </circle>
          ))}
      </g>
    </svg>
  );
}

export function useOnce<T extends Element>() {
  const ref = useRef<T>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  return [ref, on] as const;
}
