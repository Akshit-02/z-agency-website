# Implementation log

All changes are uncommitted in the working tree on branch `master`. Nothing was deployed or published. Validation evidence is in `before-after-results.md`.

## IMPL-1: Render all FAQ answers server-side (P0/P1, High)

- **Original state:** `Faq.tsx` and `home/FaqSection.tsx` rendered an answer only while open (`AnimatePresence` + `{isOpen && …}`). 1,247 of 9,229 FAQ answers were in the HTML. The rest existed only in `FAQPage` JSON-LD.
- **Problem:** structured data described content that wasn't visible. Cost and timeline answers on service pages were invisible to search and answer engines. This affected 1,152 pages.
- **Files:** `src/components/Faq.tsx`, `src/components/home/FaqSection.tsx`
- **Change:** answers are always rendered. Closed panels collapse with CSS (`grid-template-rows: 0fr` → `1fr` plus opacity, the same 0.4 s cubic-bezier as before) and are `inert` while closed, so focus and screen-reader behaviour match the old version. Reduced motion disables the transition. The unused `AnimatePresence` import was removed.
- **Result:** 9,229 / 9,229 answers in HTML. CLS 0, accessibility 96 (unchanged).

## IMPL-2: Per-page Open Graph and X/Twitter metadata (P1, Medium)

- **Original state:** because Next.js merges metadata shallowly, 8 static pages served the homepage's og:title, og:description and og:url. 6 category pages had no og:image. All 32 non-article pages served the homepage's twitter:title and description.
- **Files:** `src/lib/seo.ts` (new `socialMetadata()` helper) and its use in `src/app/page.tsx`, `about/page.tsx`, `services/page.tsx`, `industries/page.tsx`, `blogs/page.tsx`, `contact/page.tsx`, `privacy/page.tsx`, `terms/page.tsx`, `blogs/category/[category]/page.tsx`, `services/[slug]/page.tsx`, `industries/[slug]/page.tsx`
- **Change:** one helper returns `openGraph` (type, siteName, url, title, description, image) and `twitter` (card, title, description, image) for a path. Segments with their own `opengraph-image` route pass it, so the X card uses it too.
- **Result:** 0 pages with wrong or missing social tags (out of 1,165). Claude SEO findings: og-url-differs 7 → 0, missing-og-image 6 → 0.

## IMPL-3: Descriptive industry page titles (P2, Medium)

- **Original state:** "Real Estate — Industries — ZSpace Labs" (no offer stated)
- **File:** `src/app/industries/[slug]/page.tsx`
- **Change:** `<Industry>: Websites, Apps & Automation` through `pageTitle()` (12 pages, 54–66 characters with the brand suffix)
- **Result:** 12 titles changed, 0 duplicates. Note: the 6 titles over 60 characters show up in the plugin's display heuristic but stay under the site's 70-character rule.

## IMPL-4: llms.txt format, coverage and links (P2, Medium)

- **Original state:** the Claude SEO llms.txt check (Lighthouse rules) **failed**: "contains no Markdown links". 1,077 bare-URL list items. 32 published articles missing.
- **File:** `public/llms.txt` (hand-maintained)
- **Change:** list items converted mechanically to `- [Title](url): description`. Inline URLs in company and notes lines converted to Markdown links. A "Planning, cost and launch guides" section was added with the 32 missing articles (titles taken from the content data). All curated prose was kept.
- **Result:** check passes. 1,133/1,133 articles listed, no duplicates.
- **Follow-up:** the file is maintained by hand and will drift again. Consider generating it from `blog-data.ts` in a route handler.

## IMPL-5: Market regulation notes (P2, Low)

- **File:** `src/lib/site.ts` (`markets`), which feeds Organization `areaServed`, About and the service-page market sections
- **Change:** India note now mentions the 18-month phase-in and consent-manager registration from Nov 2026. UAE note now says "at the time of writing (November 2026)" instead of asserting the status for that month. The other 3 notes were verified unchanged (sources in `appendix-international-research.md`).

## IMPL-6: Service CTA casing (P3, Low, visible)

- **Original state:** "Ready to talk about ai automation?", "…ui/ux design?", "…cro audit?", "…shopify store setup & optimization?"
- **File:** `src/app/services/[slug]/page.tsx` (new `inSentence()` helper)
- **Result:** "AI automation", "UI/UX design", "CRO audit", "Shopify store setup & optimization", "full-stack website development", "mobile app development"

## Not changed (deliberately)

- Homepage H1, services/homepage India-only titles, service-page H1s, new service or country pages, listicle restructuring, article pruning, author bylines, visible dates: these need owner decisions or facts. See `human-review-required.md`.
- Title rewrites for CTR: the evaluated titles already match their queries, and the data covers about 7 weeks. Re-check in Feb 2027.
- Performance refactors (motion, BlogScene lazy-loading, `/blogs` pagination): engineering work with design impact. Plan in `technical-seo-report.md`.
- Lint warnings (9, all pre-existing unused imports in untouched files).
- No dependencies, framework config, URLs, redirects, analytics, forms or navigation were changed.
