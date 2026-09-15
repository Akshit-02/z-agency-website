"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroGraphic() {
  const reduce = useReducedMotion();

  const float = (delay = 0, distance = 10) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: {
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <svg
      viewBox="0 0 520 520"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration of layered digital interfaces connected by a network of nodes"
    >
      <defs>
        <linearGradient id="panelFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b0c0e" />
          <stop offset="100%" stopColor="#242730" />
        </linearGradient>
        <radialGradient id="atmosphere" cx="38%" cy="32%" r="55%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* subtle atmospheric wash */}
      <circle cx="200" cy="190" r="220" fill="url(#atmosphere)" />

      {/* connecting lines */}
      <g stroke="#d3d0c8" strokeWidth="1.2" strokeDasharray="3 5">
        <line x1="120" y1="410" x2="250" y2="330" />
        <line x1="250" y1="330" x2="400" y2="150" />
        <line x1="250" y1="330" x2="120" y2="150" />
      </g>

      <motion.circle cx="120" cy="410" r="4" fill="#0b0c0e" {...float(0.2, 6)} />
      <motion.circle cx="400" cy="150" r="4" fill="#0b0c0e" {...float(0.6, 8)} />

      {/* back panel: outline card, content lines */}
      <motion.g {...float(0, 12)} transform="rotate(-6 190 210)">
        <rect
          x="70"
          y="90"
          width="240"
          height="200"
          rx="16"
          fill="#faf9f6"
          stroke="#0b0c0e"
          strokeWidth="1.5"
        />
        <rect x="94" y="118" width="70" height="8" rx="4" fill="#0b0c0e" />
        <rect x="94" y="140" width="150" height="6" rx="3" fill="#d3d0c8" />
        <rect x="94" y="154" width="120" height="6" rx="3" fill="#d3d0c8" />
        <rect x="94" y="178" width="90" height="30" rx="8" fill="#0b0c0e" />
        <rect x="192" y="178" width="90" height="30" rx="8" fill="#eceae4" stroke="#d3d0c8" />
      </motion.g>

      {/* front panel: filled dark card */}
      <motion.g {...float(0.4, 14)} transform="rotate(4 360 320)">
        <rect x="230" y="230" width="210" height="180" rx="18" fill="url(#panelFade)" />
        <circle cx="264" cy="264" r="6" fill="#3b82f6" />
        <rect x="284" y="258" width="60" height="8" rx="4" fill="#faf9f6" opacity="0.9" />
        <rect x="264" y="292" width="150" height="6" rx="3" fill="#faf9f6" opacity="0.5" />
        <rect x="264" y="306" width="110" height="6" rx="3" fill="#faf9f6" opacity="0.35" />
        <rect x="264" y="336" width="176" height="46" rx="10" fill="#faf9f6" opacity="0.08" />
        <rect x="280" y="352" width="90" height="8" rx="4" fill="#ff6b35" />
      </motion.g>

      {/* orbiting node */}
      {!reduce && (
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ originX: "0.5", originY: "0.5" }}
        >
          <circle cx="250" cy="330" r="150" fill="none" stroke="#e5e3dd" strokeWidth="1" />
          <circle cx="400" cy="330" r="5" fill="#3b82f6" stroke="#0b0c0e" strokeWidth="1.5" />
        </motion.g>
      )}
      {reduce && (
        <>
          <circle cx="250" cy="330" r="150" fill="none" stroke="#e5e3dd" strokeWidth="1" />
          <circle cx="400" cy="330" r="5" fill="#3b82f6" stroke="#0b0c0e" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
