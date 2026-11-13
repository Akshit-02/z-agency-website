"use client";

import NextLink from "next/link";
import { useState, type ComponentProps } from "react";

/**
 * Drop-in replacement for next/link that prefetches on intent (hover, focus,
 * touch) instead of when the link scrolls into view.
 *
 * Viewport prefetching downloads the full RSC payload (70–200KB for an article)
 * for every visible link, so a page of blog cards pulled megabytes nobody
 * navigated to — the main driver of Vercel Fast Data / Fast Origin Transfer.
 * Pass `prefetch` explicitly to opt a specific link back into Next's default.
 */
export default function Link({
  prefetch,
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...props
}: ComponentProps<typeof NextLink>) {
  const [intent, setIntent] = useState(false);
  const resolved = prefetch !== undefined ? prefetch : intent ? null : false;

  return (
    <NextLink
      {...props}
      prefetch={resolved}
      onMouseEnter={(e) => {
        setIntent(true);
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        setIntent(true);
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        setIntent(true);
        onTouchStart?.(e);
      }}
    />
  );
}
