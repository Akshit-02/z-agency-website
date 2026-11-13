# Technical SEO report

Scope: **all 1,165 URLs** in the sitemap. Every page was fetched from production on 13 Nov 2026 (1,163 returned 200 at once; 6 slow or failed responses returned 200 on retry). Each page was then checked with Claude SEO `page_checks.py` (45 checks per page). The checks were repeated against a local production build after the fixes. Site-level checks: `transport_check.py`, `sitemap_discovery.py --expand`, `agentic_check.py`, `preload_check.py`, and Lighthouse 12.8.2 (mobile).

## Architecture

- Next.js 16.3.5 (App Router, Turbopack), React 19, Tailwind 4. All 3,457 routes are pre-rendered as static or SSG at build time.
- Content lives in TypeScript data modules, not a CMS: `src/lib/blog-data*.ts` (1,133 posts in ~300 files), `services-data.ts` (6), `industries-data.ts` (35, of which 12 have detail pages), `blog-categories.ts` (6).
- The sitemap is generated from the same data (`src/app/sitemap.ts`), so the sitemap and the code inventory match exactly: 8 static + 6 services + 12 industries + 6 categories + 1,133 posts = **1,165**.
- Analytics: GA4 (`G-00464BTJH5`) and Microsoft Clarity, loaded `afterInteractive` in `layout.tsx`. GSC verification meta is present.

## Crawlability and indexability: healthy

| Check | Result |
|---|---|
| robots.txt | 200, `Allow: /`, sitemap declared. No AI crawler is blocked. `Host:` line is non-standard and ignored by Google and Yandex. Harmless (Low). |
| Sitemap | Single urlset, 1,165 URLs, valid XML. 0 invalid locs, 0 duplicates, 0 cross-host. lastmod on 1,140 (only where a real date exists, which is correct). |
| Sitemap index / child files | None. Not needed below 50,000 URLs. |
| HTTP status | 1,165 / 1,165 return 200. Custom 404 returns a real 404 (no soft-404 catch-all). |
| Redirects | `http://` → `https://` is one 308 hop. Apex `zspace.in` → `www` is one 308 hop. Legacy `/blog/*` and six India URL aliases 308 to canonical pages (`next.config.ts`). No chains. |
| Canonicals | 1,165 / 1,165 self-referencing |
| Meta robots | `index, follow` on all pages. No stray noindex. |
| Orphans | None. Every article has ≥2 inbound internal links (median 9 site-wide, median 7 contextual links from other articles). 0 broken in-content links. |
| Parameter URLs | `/blogs?q=` (client-side search) and `/contact?src=` exist. Both canonicalise to the clean URL. |
| Crawl depth | Every article is linked from its category hub, which is linked from `/blogs` and the footer: ≤3 clicks. |
| Server rendering | Primary content is present without JavaScript (`agentic_check` server-rendered: pass, 1,206 words on the homepage). |

## Metadata

| Check | Before | After |
|---|---|---|
| Missing / duplicate titles | 0 / 0 | 0 / 0 |
| Missing / duplicate descriptions | 0 / 0 | 0 / 0 |
| Pages with exactly one H1 | 1,165 | 1,165 |
| og:url pointing at the homepage instead of the page | **7** (about, services, industries, blogs, contact, privacy, terms) | **0** |
| og:title / og:description generic (homepage defaults) | **8** static pages | **0** |
| Missing og:image | **6** (all blog categories) | **0** |
| X/Twitter card title and description = generic homepage values | **32** (every non-article page) | **0** |
| Titles over 60 characters (Claude SEO display heuristic) | 741 | 747 |

The titles over 60 characters are mostly articles at 61–70 characters. `src/lib/seo.ts` already drops the brand suffix past 70. This is a heuristic, not a limit, so the titles weren't mass-rewritten (see priority plan). The +6 are the new industry titles.

Root cause of the OG/Twitter gaps: Next.js merges metadata **shallowly** (confirmed in `node_modules/next/dist/docs/.../generate-metadata.md`, "Merging"). Pages that set `openGraph` replaced the root object and lost its image. Pages that did not set `twitter` inherited the homepage card. Fixed with one helper, `socialMetadata()` in `src/lib/seo.ts`, used by 11 templates.

## FAQ content missing from HTML (High, fixed)

`src/components/Faq.tsx` and the homepage `FaqSection.tsx` mounted an answer only while it was open (`AnimatePresence` + `{isOpen && …}`). In the server HTML only the first answer existed. The rest were only in `FAQPage` JSON-LD, which breaks Google's rule that structured data must describe visible content. It also hid cost and timeline answers from search engines and answer engines.

- Before: **1,247 of 9,229** FAQ answers present in HTML, across 1,152 pages
- After: **9,229 of 9,229**
- Fix: answers are always rendered. Closed panels collapse with CSS `grid-template-rows: 0fr` and are `inert` (not focusable or announced, as before). The 0.4 s easing is kept, and reduced motion is respected. Lighthouse after the fix: CLS 0, accessibility 96 (unchanged).

Note: Google retired FAQ rich results for all sites on 7 May 2026 (Claude SEO quality gates), so the FAQPage markup has no SERP feature. It is kept as Info because it is valid and harmless, and the visible Q&A content is what matters for search and AI answers.

## Structured data: valid, consistent

0 invalid JSON-LD blocks across 1,165 pages.

| Page type | Types |
|---|---|
| All | Organization (`@id` #organization, logo, contactPoint, areaServed ×5, sameAs Instagram/LinkedIn), WebSite (+SearchAction) |
| Articles (1,130) | BlogPosting, BreadcrumbList, FAQPage, Service (related) |
| Services (6) | Service + BusinessAudience, BreadcrumbList, FAQPage |
| Industries (12) | BreadcrumbList, FAQPage |
| Hubs | Blog, CollectionPage + ItemList, ItemList |
| About / Contact | AboutPage / ContactPage |

Observations:
- BlogPosting `author` is the Organization. No Person authors exist, so none were invented (human review).
- `WebSite.potentialAction` SearchAction: Google retired the sitelinks search box in Nov 2024. The `/blogs?q=` target does work client-side. Harmless; leave it.
- No LocalBusiness markup. That is correct: there is no published office.
- GSC shows a "Product snippets" search appearance (20 impressions, avg position 7). No page emits Product markup. INVESTIGATE in GSC → Enhancements to see which URL Google attached it to.

## International / hreflang

`hreflang_count = 0` on all pages, and `lang="en"` throughout. **That is correct.** The site has one language and no regional duplicates. Market-specific articles (Australia, UAE, UK) are distinct documents, not alternates. Adding hreflang between them would be wrong. See `international-seo-report.md`.

## Performance (lab data only; no field data available)

Lighthouse 12.8.2, mobile emulation, against production:

| Page | Perf | LCP | TBT | CLS | Weight |
|---|---|---|---|---|---|
| / | 76 | 4.5 s | 190 ms | 0.002 | 1,032 KiB |
| /services/ai-automation | 66 | 5.1 s | 140 ms | 0 | 1,039 KiB |
| /blogs/supplier-portal-development | 81 | 4.6 s | 100 ms | 0 | 1,197 KiB |
| /blogs | 68 | 5.5 s | 210 ms | 0 | 1,165 KiB |

- **Field data (CrUX) is unavailable.** The PSI/CrUX API needs a key, and the site may be below the CrUX traffic threshold. Treat the numbers above as lab diagnostics, not real-user Core Web Vitals.
- The LCP element is hero text on every page. LCP breakdown: TTFB 0.8–1.7 s, **render delay 3.3–4.7 s**, zero load time. The `hero-rise` CSS animation is transform-only and not the cause. Render delay comes from main-thread JavaScript (3.4–4.0 s bootup under 4× CPU throttling).
- Shared client JavaScript on every page: the React/Next runtime (~390 KB raw), `motion` (~145 KB; 33 components use it) and the BlogScene SVG illustration library (~99 KB). `zod`/`react-hook-form` is correctly scoped to `/contact`.
- `/blogs` ships **1.05 MB of HTML plus a 0.94 MB RSC payload** containing all 1,133 summaries and their scene data. Category pages range from 0.38 to 0.61 MB.
- Third parties: GTM/GA4 (~180 KB, ~76 KB unused) and Clarity, whose third-party cookies fail the Lighthouse best-practices check (79).
- Security headers: HSTS present (no `includeSubDomains`), no CSP (documented as intentional in `next.config.ts`), and nosniff, frame and referrer policies are set. TLS 1.3, Let's Encrypt, 89 days to expiry.

Recommended performance work (P2, engineering): paginate `/blogs` and the categories server-side (or send only the first 24 summaries and load the rest on search), lazy-load BlogScene illustrations below the fold, move scroll choreography off `motion` for above-the-fold heroes, and consider the consent-gated loading of Clarity. Re-measure with field data once an API key is configured.

## Agent and AI-crawler readiness (`agentic_check.py`)

- P0: server-rendered content pass; robots reachable pass; AI agents fall through to `*` (allowed). Named groups are optional.
- P1: **llms.txt fail → pass** after the fix. It had 1,077 bare URLs and no Markdown links. It now uses `[title](url)` links throughout, and 32 articles that were missing have been added (1,133/1,133 listed). The file is still 180 KB (Info: the proposal suggests keeping it small). A future option is to move per-article lists into `llms-full.txt`.
- Optional (not done): Markdown alternates, Content-Signal lines, WebMCP on the contact form.

## Placeholder-text findings

The 3 High "placeholder-text" hits are false positives: the articles discuss *not* using lorem ipsum.
