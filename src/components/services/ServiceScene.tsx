"use client";

import { BlogScene } from "@/components/blog/BlogScene";
import { sceneForService } from "@/lib/service-scenes";

/** A service's realistic interface scene, filling a box of the given aspect ratio. */
export function ServiceScene({
  slug,
  which = "primary",
  className = "aspect-[16/10]",
  label,
}: {
  slug: string;
  which?: "primary" | "secondary";
  className?: string;
  label?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <BlogScene scene={sceneForService(slug, which)} label={label} />
    </div>
  );
}
