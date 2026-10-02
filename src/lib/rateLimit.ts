import "server-only";

/**
 * Best-effort, in-memory submission cooldown. This resets whenever the
 * server process restarts and isn't shared across serverless instances, so
 * it's a courtesy layer against accidental double-clicks and basic scripted
 * spam — not a substitute for a real rate limiter (e.g. Upstash Redis)
 * behind a CDN/WAF in front of the deployment.
 */
const lastSubmissionAt = new Map<string, number>();
const COOLDOWN_MS = 20_000;

// Prevent unbounded growth of the map across a long-lived process.
const MAX_TRACKED_KEYS = 5_000;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const last = lastSubmissionAt.get(key);

  if (last && now - last < COOLDOWN_MS) {
    return true;
  }

  if (lastSubmissionAt.size >= MAX_TRACKED_KEYS) {
    lastSubmissionAt.clear();
  }

  lastSubmissionAt.set(key, now);
  return false;
}

export function getClientKey(request: Request, routeName: string): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return `${routeName}:${ip}`;
}
