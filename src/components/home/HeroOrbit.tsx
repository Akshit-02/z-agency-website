"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Globe, Settings, ShoppingBag, Smartphone, Sparkles, type LucideIcon } from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as const;

type From = "base" | "md" | "lg";

type PillDef = {
  label: string;
  icon: LucideIcon;
  /** icon colour and glow colour */
  color: string;
  /** degrees along the orbit, clockwise from 3 o'clock */
  angle: number;
  compactAngle?: number;
  drift: number;
  phase: number;
  from: From;
};

const pills: PillDef[] = [
  { label: "Shopify", icon: ShoppingBag, color: "#4d8a2b", angle: -122, compactAngle: -106, drift: 4, phase: 1.7, from: "base" },
  { label: "Website", icon: Globe, color: "#2563eb", angle: -32, compactAngle: -46, drift: 5, phase: 0, from: "base" },
  { label: "AI", icon: Sparkles, color: "#7c3aed", angle: 134, compactAngle: -156, drift: 5, phase: 3.1, from: "base" },
  { label: "App", icon: Smartphone, color: "#1d4ed8", angle: 180, drift: 4, phase: 4.4, from: "md" },
  { label: "Automation", icon: Settings, color: "#ea580c", angle: 12, drift: 5, phase: 2.3, from: "lg" },
];

type DecorDef = {
  kind: "dot" | "star" | "ink" | "planet";
  angle: number;
  scale: number;
  color?: string;
  drift: number;
  phase: number;
  from: From;
};

const decor: DecorDef[] = [
  { kind: "dot", angle: -88, scale: 1, color: "#0b0c0e", drift: 5, phase: 0.6, from: "base" },
  { kind: "dot", angle: -111, scale: 1, color: "#4d8a2b", drift: 4, phase: 1.1, from: "md" },
  { kind: "dot", angle: -148, scale: 1, color: "#4d8a2b", drift: 4, phase: 2.9, from: "lg" },
  { kind: "dot", angle: -22, scale: 1, color: "#2563eb", drift: 4, phase: 3.3, from: "md" },
  { kind: "dot", angle: 172, scale: 1, color: "#2563eb", drift: 4, phase: 4.1, from: "lg" },
  { kind: "dot", angle: 122, scale: 1, color: "#7c3aed", drift: 4, phase: 5.2, from: "md" },
  { kind: "dot", angle: 21, scale: 1, color: "#ea580c", drift: 4, phase: 0.9, from: "lg" },
  { kind: "star", angle: -58, scale: 1.05, drift: 3, phase: 1.9, from: "md" },
  { kind: "ink", angle: 160, scale: 0.8, drift: 6, phase: 2.5, from: "lg" },
  { kind: "planet", angle: 52, scale: 1, drift: 4, phase: 3.7, from: "lg" },
];

const visibility: Record<From, string> = {
  base: "block",
  md: "hidden md:block",
  lg: "hidden lg:block",
};

const pillVisibility: Record<From, string> = {
  base: "flex",
  md: "hidden md:flex",
  lg: "hidden lg:flex",
};

function DecorShape({ d }: { d: DecorDef }) {
  switch (d.kind) {
    case "dot":
      return <span className="block h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: d.color }} />;
    case "star":
      return (
        <svg viewBox="0 0 24 24" className="block h-5 w-5 -translate-x-1/2 -translate-y-1/2" fill="#ea580c">
          <path d="M12 0c.9 6.6 5.4 11.1 12 12-6.6.9-11.1 5.4-12 12-.9-6.6-5.4-11.1-12-12C6.6 11.1 11.1 6.6 12 0Z" />
        </svg>
      );
    case "ink":
      return (
        <span
          className="block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle at 35% 30%, #5a5d63, #0b0c0e 60%)", boxShadow: "0 6px 14px -4px rgba(11,12,14,0.35)" }}
        />
      );
    case "planet":
      return (
        <span
          className="block h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle at 30% 25%, #ffb27a, #e8734a 45%, #4f6bd8 100%)", boxShadow: "0 8px 18px -6px rgba(79,107,216,0.45)" }}
        />
      );
  }
}

function useMeasure<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize((s) => (s.w === width && s.h === height ? s : { w: width, h: height }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, size] as const;
}

/**
 * One tilted orbit. Its lower edge is anchored to the centre of `anchorRef`
 * (the CTA), so the button always sits on the orbit like a planet.
 */
export function HeroOrbit({
  reduced,
  anchorRef,
  scale,
  rotate,
}: {
  reduced: boolean;
  anchorRef: RefObject<HTMLElement | null>;
  scale?: MotionValue<number>;
  rotate?: MotionValue<number>;
}) {
  const [ref, { w, h }] = useMeasure<HTMLDivElement>();
  const pillEls = useRef<(HTMLDivElement | null)[]>([]);
  const decorEls = useRef<(HTMLDivElement | null)[]>([]);
  const [anchorY, setAnchorY] = useState(0);
  const [parallax, setParallax] = useState(false);

  // vertical centre of the CTA, in layer coordinates (offsetTop ignores entrance transforms)
  useEffect(() => {
    const measure = () => {
      const layer = ref.current;
      const el = anchorRef.current;
      if (!layer || !el) return;
      let y = el.offsetHeight / 2;
      let node: HTMLElement | null = el;
      while (node && node !== layer.parentElement) {
        y += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      setAnchorY((prev) => (Math.abs(prev - y) < 0.5 ? prev : y));
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [w, h, ref, anchorRef]);

  const compact = w < 640;
  const tilt = ((compact ? 3 : 5) * Math.PI) / 180;
  const top = h * 0.07;
  const cx = w / 2;
  const cy = (top + anchorY) / 2;
  const ry = Math.max(0, (anchorY - top) / 2);
  const rx = w * (compact ? 0.46 : w < 1200 ? 0.44 : 0.38);
  const ready = w > 0 && anchorY > 0;

  // pointer parallax (desktop only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 18, mass: 0.6 });
  const lineX = useTransform(sx, (v) => v * -12);
  const lineY = useTransform(sy, (v) => v * -8);
  const objX = useTransform(sx, (v) => v * 22);
  const objY = useTransform(sy, (v) => v * 14);

  useEffect(() => {
    if (reduced) return;
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => setParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  useEffect(() => {
    if (!parallax) {
      mx.set(0);
      my.set(0);
      return;
    }
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [parallax, mx, my]);

  const place = (t: number) => {
    const at = (angle: number, scale: number, drift: number, phase: number) => {
      const a = ((angle + Math.sin(t * 0.22 + phase) * drift) * Math.PI) / 180;
      const ex = Math.cos(a) * rx * scale;
      const ey = Math.sin(a) * ry * scale;
      return [
        cx + ex * Math.cos(tilt) - ey * Math.sin(tilt),
        cy + ex * Math.sin(tilt) + ey * Math.cos(tilt),
      ] as const;
    };
    pills.forEach((p, i) => {
      const el = pillEls.current[i];
      if (!el) return;
      const [x, y] = at(compact && p.compactAngle ? p.compactAngle : p.angle, 1, p.drift, p.phase);
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    decor.forEach((d, i) => {
      const el = decorEls.current[i];
      if (!el) return;
      const [x, y] = at(d.angle, d.scale, d.drift, d.phase);
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  useAnimationFrame((t) => {
    if (!reduced && ready) place(t / 1000);
  });

  useEffect(() => {
    if (ready) place(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, w, h, anchorY, compact, reduced]);

  const draw = (delay: number) =>
    reduced
      ? { initial: false as const }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.8, ease: EASE, delay },
        };

  const appear = (delay: number) =>
    reduced
      ? { initial: false as const }
      : {
          initial: { opacity: 0, scale: 0.85, y: 8 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay },
        };

  // accent arcs, as fractions of the path (0 = 3 o'clock, clockwise)
  const arc = (from: number, to: number, color: string, delay: number, opacity = 0.7) => (
    <motion.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill="none"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="1.2"
      pathLength={100}
      strokeDasharray={`${to - from} ${100 - (to - from)}`}
      strokeDashoffset={-from}
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    />
  );

  return (
    <motion.div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" style={{ scale, rotate }}>
      {ready && (
        <>
          <motion.svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="absolute inset-0" style={{ x: lineX, y: lineY }}>
            <g transform={`rotate(${(tilt * 180) / Math.PI} ${cx} ${cy})`}>
              <motion.ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="#0b0c0e" strokeOpacity="0.16" strokeWidth="1" {...draw(0)} />
              {arc(75.5, 91.5, "#2563eb", 1.6)}
              {arc(36, 49.5, "#2563eb", 1.7, 0.45)}
              {arc(3.5, 15.5, "#ea580c", 1.8, 0.6)}
            </g>
          </motion.svg>

          <motion.div className="absolute inset-0" style={{ x: objX, y: objY }}>
            {decor.map((d, i) => (
              <div
                key={i}
                ref={(el) => {
                  decorEls.current[i] = el;
                }}
                className={`absolute left-0 top-0 will-change-transform ${visibility[d.from]}`}
              >
                <motion.div {...appear(1.1 + i * 0.06)}>
                  <DecorShape d={d} />
                </motion.div>
              </div>
            ))}

            {pills.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.label}
                  ref={(el) => {
                    pillEls.current[i] = el;
                  }}
                  className="absolute left-0 top-0 will-change-transform"
                >
                  <motion.div
                    className={`-translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white py-1.5 pl-2.5 pr-3.5 text-[0.72rem] font-medium tracking-tight text-[#0b1230] sm:py-2 sm:pl-3 sm:pr-4 sm:text-[0.84rem] lg:py-2.5 lg:pl-3.5 lg:pr-5 lg:text-[0.9rem] ${pillVisibility[p.from]}`}
                    style={{ boxShadow: `0 0 0 1px ${p.color}14, 0 0 26px 2px ${p.color}40, 0 10px 28px -8px ${p.color}55` }}
                    {...appear(0.9 + i * 0.14)}
                  >
                    <Icon className="h-4 w-4 lg:h-[18px] lg:w-[18px]" style={{ color: p.color }} strokeWidth={1.8} />
                    {p.label}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
