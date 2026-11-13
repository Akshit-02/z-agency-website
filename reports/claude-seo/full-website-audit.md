# Full website audit: ZSpace Labs (www.zspace.in)

Date: 13 November 2026. Tooling: Claude SEO 2.6.0 (scripts and specialist-agent methods), codebase inspection, the GSC export (`gsc-data.xlsx`, last 3 months), and Lighthouse 12.8.2.

## Coverage: what was actually inspected

| Source | Coverage |
|---|---|
| URL discovery | Sitemap (single urlset, no index or child files), the routes in `src/app`, content data modules (1,133 posts, 6 services, 12 industry detail pages, 6 categories), and the internal link graph from every rendered page. GSC Pages sheet: all 667 URLs with impressions are in the inventory, and none are outside it. |
| Total URLs | **1,165**. The sitemap, code and llms.txt (after the fix) all reconcile. Full list: `url-inventory.csv`. |
| Fetched and checked | **1,165 / 1,165** production pages fetched in full and run through `page_checks.py`. The same 1,165 were checked again on the local build after the changes. This sidesteps the 500-page crawl limit of `/seo audit`. |
| Content scan | 1,133 / 1,133 articles from source data: links, sources, headings, years, word counts, near-duplicates. |
| Manual E-E-A-T review | 21 pages + 15 random articles (`appendix-content-eeat-audit.md`). This is a sample, not every article. |
| Lighthouse | 4 production URLs + 3 local. Lab only; **no field data**. |
| Not covered | Backlinks (no Moz/Bing keys; Common Crawl not run), SERP competitor analysis, query→page GSC mapping, real-user CWV, visual screenshots at multiple breakpoints. |

Business type (Claude SEO detection): **Agency / services studio with a large publisher-style blog.** No local-business signals, no ecommerce.

## Health summary (Claude SEO weighting, heuristic)

| Category (weight) | Assessment | Score |
|---|---|---|
| Technical SEO (22%) | Excellent crawl and index foundation. FAQ visibility and social-tag defects found and fixed. | 88 → 94 after fixes |
| Content quality (23%) | Accurate, sourced, but templated mass production with no authors or proof | 55 |
| On-page SEO (20%) | Unique titles and descriptions, single H1s. Weak homepage H1. India-only commercial framing. | 75 |
| Schema (10%) | Valid and consistent. FAQ visibility fixed. No Person. | 80 → 88 |
| Performance (10%) | Lab LCP 4.5–5.5 s mobile, JS-bound; CLS excellent | 55 |
| AI search readiness (10%) | SSR, open robots, answer-first. llms.txt fixed. Sources unlinked, no people. | 65 → 72 |
| Images (5%) | 0 `<img>` elements across all 1,165 pages (illustrations are inline SVG/CSS; OG images are generated routes), so there is nothing to optimise or alt-tag | 90 |
| **Overall** | | **about 70 → 74** |

These scores are the plugin's weighted heuristic, for tracking direction only. They are not a Google metric.

## Search performance baseline (GSC, about 7 weeks of non-zero data)

- 13,026 impressions, 43 clicks. Impressions began in the second half of Sep 2026, and 9,959 came in the second half of Oct.
- 650 / 1,133 articles have impressions. The homepage has 11. `/services/ai-automation` has 289 (pos 32).
- Top commercial queries: "ai automation services" (125, pos 28), "ai automation agency" (pos 46), "ai automation agency india" (pos 22), "saas website development" (pos 22).
- Top countries: India 4,260, US 2,635, Australia 2,558, UK 1,018.

## Key findings

1. **Crawlability, indexation, canonicals, sitemap, redirects: no defects.** 1,165/1,165 return 200 and are self-canonical. 0 duplicate titles or descriptions. 0 broken internal links. No orphans.
2. **FAQ answers missing from the HTML on 1,152 pages** (13.5% present), contradicting FAQPage markup. **Fixed.**
3. **Social metadata defects on 32 pages** (shallow metadata merge). **Fixed.**
4. **llms.txt failed format validation** and was missing 32 articles. **Fixed.**
5. **Scaled-content risk:** 1,019 articles dated Sep–Oct 2026, shared skeletons, verbatim step lists, no authors or visible dates, sources not linked. This is the biggest strategic risk. It needs an editorial decision, not code.
6. **Commercial pages under-built for demand:** six services framed for India only. AI automation is the main ranking opportunity. Portal, SaaS, legacy-modernisation and B2B demand lands on blogs.
7. **No proof or people anywhere** (stated honestly on the site). This is the ceiling on E-E-A-T and conversion.
8. **Homepage H1 "your website builder"** targets the wrong intent. Only 11 impressions.
9. **International:** the `.in` ccTLD plus India-only service framing, while the US and AU are each about 60% of India's impressions. Australia has the clearest demand. Russia is not viable (sanctions, 152-FZ).
10. **Performance:** lab LCP about 5 s is driven by JS render delay (motion, BlogScene, framework). `/blogs` ships about 2 MB of HTML and RSC.

Detailed reports: technical, content, international, service, homepage, schema, GEO. The actions are in `priority-action-plan.md`, and the changes are in `implementation-log.md`.
