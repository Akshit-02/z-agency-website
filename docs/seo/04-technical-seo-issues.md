# 04. Technical SEO issue report

Crawl: all 1,089 live sitemap URLs on 17 October 2026 with `tools/crawl.py`, repeated against the local production build after batch 1. Performance figures are lab data from the 12 October audit; the PageSpeed API quota was exhausted on 17 October.

## Confirmed checks that pass

| Check | Result |
| --- | --- |
| HTTP status | 1,089 × 200 (11 transient timeouts on the first live pass, all 200 on retry) |
| Canonicals | 100% self-referencing on the www host |
| Indexability | No `noindex`; robots.txt allows all |
| Sitemap coverage | Every crawlable page is in the sitemap; nothing non-canonical is in it |
| Titles and descriptions | 0 missing, 0 duplicates |
| Headings | Exactly one H1 on every page |
| Structured data | 0 invalid JSON-LD blocks |
| Internal links | 0 broken, 0 orphans; median article has 8 inlinks (minimum 2) |
| URL format | No trailing-slash variants, no parameterised duplicates; `/blog` and six legacy India URLs 308 to canonical pages |
| Images | No `<img>` without alt (visuals are inline SVG/CSS; OG images are generated) |
| Pagination, filters, search pages | None exist, so nothing to misindex |
| hreflang | None, correctly (no regional or language alternates exist) |
| Security headers | HSTS, nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy |
| TTFB (test location) | 0.10–0.24 s, Vercel edge cache HIT |

## Confirmed issues

| # | Issue | Evidence | Priority | Status |
| --- | --- | --- | --- | --- |
| T1 | Homepage H1 text ran words together ("yourwebsitebuilder") | Spans separated only by CSS gap | P3 | **Fixed** |
| T2 | Sitemap `lastmod` was always the build time for static, service, industry and category URLs | `new Date()` in `sitemap.ts` | P3 | **Fixed**: real dates only (1,064 URLs carry one) |
| T3 | Lead source recorded only the last page | `?src=` only | P1 | **Fixed**: first-touch landing page, referrer, UTM |
| T4 | GA4 loads with no consent notice or opt-out | `layout.tsx` | P1 (legal) | Open: needs legal review (`17-human-review.md`) |
| T5 | `/blogs` HTML is 953 KB (254 KB compressed) | Lists every article | P2 | Open: paginate or load cards after the first 60 |
| T6 | Apex redirect takes 2 hops (`http://zspace.in` → `https://zspace.in` → www) | curl | P3 | Open: one hop needs a Vercel domain setting |
| T7 | No Content-Security-Policy | Headers | P3 | Open: nonce-based CSP needs testing with GA4 |
| T8 | 690 titles exceed 60 characters (none over 70) | Crawl | P3 | Open: shorten only where Search Console shows truncation hurting CTR |
| T9 | FAQPage markup on 1,065 pages | JSON-LD | — | No action: valid and matches visible FAQs, though Google no longer shows FAQ rich results |
| T10 | 93 articles with `datePublished` before the site launched | BlogPosting dates vs domain history | P1 | Open: owner confirmation needed |
| T11 | No named authors (`author` = Organization) | BlogPosting | P1 | Open: needs real people |

## Possible improvements (not defects)

- Guard against the 12.8 MB bundle regression found on 12 Oct: client components must import only types from `blog-data.ts`. A lint rule or a bundle-size check in CI would catch it.
- Field Core Web Vitals: verify in Search Console once there is enough traffic. Lab LCP after the 12 Oct fixes was 1.9–2.1 s on mobile.
- Mobile layout of the new service-page section was checked at 390 px: no horizontal scroll.
