import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Drop-in replacement for next/link with prefetching off by default.
 *
 * Every prefetch is 2–4 billed CDN requests (route tree plus per-segment RSC
 * payloads) and, on a CDN miss, ISR reads. Viewport and even hover prefetching
 * fetched far more pages than visitors opened. Without prefetch, a click costs
 * a single request for the page. Pass `prefetch` explicitly on a link to opt
 * it back into Next's default behaviour.
 */
export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink {...props} prefetch={prefetch} />;
}
