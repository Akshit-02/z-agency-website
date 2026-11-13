# Before / after results

"Before" = production `https://www.zspace.in` fetched 13 Nov 2026. "After" = a local production build (`next build` + `next start`) of the changed working tree, with every one of the same 1,165 sitemap URLs fetched and checked again. Same tools, same thresholds.

## Build, lint, routes

| Check | Before | After |
|---|---|---|
| `npm run build` | Pass, 3,457 static pages | Pass, 3,457 static pages |
| TypeScript (`tsc --noEmit`) | Pass | Pass |
| `npm run lint` | 0 errors, 9 warnings | 0 errors, 9 warnings (same pre-existing unused imports) |
| Test suite | None exists in the repo | — |
| Sitemap | 1,165 URLs | Identical 1,165 URLs (byte-compared URL list) |
| HTTP status of all sitemap URLs | 1,165 × 200 (production) | 1,165 × 200 (local build) |
| robots.txt | Unchanged | Unchanged |
| Redirects (`next.config.ts`) | Unchanged | Unchanged |

## Claude SEO `page_checks.py` (all 1,165 pages)

| Finding | Before | After |
|---|---|---|
| og-url-differs-from-canonical (Low) | 7 | **0** |
| missing-og-image (Low) | 6 | **0** |
| title-too-long (Medium, display heuristic >60) | 741 | 747 (+6 new industry titles at 61–66 characters) |
| placeholder-text (false positives: articles about lorem ipsum) | 3 | 3 |
| thin-content (privacy, terms, contact) | 3 | 3 |
| wide-dom-node (category listings) | 5 | 5 |
| title-too-short (privacy) | 1 | 1 |
| Self-canonical pages | 1,165 | 1,165 |
| Pages with exactly one H1 | 1,165 | 1,165 |
| Invalid JSON-LD blocks | 0 | 0 |
| Duplicate titles | 0 | 0 |

## Additional checks

| Check | Before | After |
|---|---|---|
| FAQ answers present in HTML | 1,247 / 9,229 (13.5%) | **9,229 / 9,229 (100%)** |
| Pages with generic or wrong twitter:title / og:url / missing images | 32 | **0** |
| llms.txt (Claude SEO validator, Lighthouse rules) | **fail**: no Markdown links | **pass** |
| Articles listed in llms.txt | 1,101 / 1,133 | 1,133 / 1,133 |
| Lighthouse mobile CLS (/, ai-automation, supplier-portal) | 0.002 / 0 / 0 | 0.002 / 0 / 0 |
| Lighthouse accessibility | 96 | 96 |
| Lighthouse SEO category (local build) | 92–100 | 100 |

Lighthouse performance isn't compared: production is served from a CDN and "after" was measured on localhost, so the numbers aren't comparable. LCP (about 5 s lab) was **not** fixed. That is pre-existing JavaScript cost, covered in the technical report's plan.

## Not yet verifiable

- Real-user Core Web Vitals (no CrUX/PSI key).
- Indexing and ranking effects (needs deployment plus GSC over 4–8 weeks).
- Live contact form submission (not sent, to avoid emailing the team; the code is unchanged).
- Visual check of the FAQ accordion in a real browser at phone width: CSS and Lighthouse showed no layout shift, but a manual click-through on a preview deployment is recommended.

## Success indicators to watch after deployment

- GSC → Enhancements: no structured-data warnings. Page snippets for service pages start showing FAQ text.
- Social previews (LinkedIn Post Inspector, X card validator) show page-specific titles for /services, /about and the industry pages.
- GSC impressions and position for `/services/ai-automation` ("ai automation services", baseline pos 28–46) and the industry pages over 8 weeks.
