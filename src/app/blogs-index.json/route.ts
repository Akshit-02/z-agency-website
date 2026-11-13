import { posts, toSummary } from "@/lib/blog-data";

// Built once at deploy and served from the CDN. /blogs only fetches this when
// a visitor searches, filters or loads more, instead of inlining every card
// summary (~1MB) into the page HTML and its RSC payload.
export const dynamic = "force-static";

export function GET() {
  const [, ...rest] = posts;
  return Response.json(rest.map(toSummary), {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
