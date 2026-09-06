"use client";

import { motion } from "framer-motion";

/** Masks each line and slides it up into place — used for hero-weight headlines. */
export function TextReveal({
  lines,
  className,
  delay = 0,
  as: Tag = "h1",
}: {
  lines: React.ReactNode[];
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
