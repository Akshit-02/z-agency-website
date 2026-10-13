# 02 — Technical SEO, Performance, Structured Data and Security Audit

Audited 12 October 2026. Stack: Next.js 16.3.5 (App Router, Turbopack), React 19.2, Tailwind 4 and `motion`. All 1,062 pages are statically generated; content is typed TS data in `src/lib/*-data*.ts`. The live site (Vercel, `bom1`) serves the same build as `master`: the sitemaps are identical, 1,062 URLs each.

Method: `next build` + `next start`, then a full crawl of every sitemap URL (scripted; HTML, headers, JSON-LD and internal links) plus live `curl` checks. Prior fixes from 3 October 2026 are documented in `docs/seo/technical-seo.md` and were re-verified rather than redone.

## 1. Crawlability and indexability

| Check | Result |
|---|---|
| Sitemap | 1,062 URLs, no duplicates; every URL returns 200; `lastModified` = real `updated`/published date |
| robots.txt | `Allow: /`; sitemap on the www host. No important paths blocked. |
| Canonicals | Self-referencing on 1,062/1,062; www host |
| noindex | None (correct) |
| Redirects | `/blog` → `/blogs`; 6 legacy India URLs → service pages (308); trailing slash → no slash (308, consistent) |
| Redirect chain | `http://zspace.in` → `https://zspace.in/` → `https://www.zspace.in/` (2 hops; a hosting setting) → backlog P1-9 |
| Broken internal links | 0 (every internal link target was checked) |
| Orphans | 0 articles with no contextual inlinks |
| Server rendering | All text and links are in the initial HTML. (Content below the fold is server-rendered at `opacity:0` and revealed on scroll. It is crawlable and indexable; Google renders JS.) |
| 404 handling | Unknown paths return a real 404 |
| Language | `<html lang="en">` on all pages |

## 2. Metadata and semantics

| Check | Result |
|---|---|
| Titles | 1,062 unique; 0 over 70 characters; 1 short (`/privacy`, fine) |
| Descriptions | 1,062 unique; 0 over 160; 1 short (`/terms`) |
| H1 | Exactly one per page on all 1,062 |
| Homepage H1 text | Reads "Meet ZSpace Labs, your website builder." in the HTML (the rotating word). The `aria-label` has the full phrase. **Positioning issue** → P2-6 |
| Open Graph / Twitter | Present; generated OG images per article, service and industry |
| Dates | `datePublished`/`dateModified` match the visible data; no future dates |
| Authorship | Organization only. **No Person authors** → P2-5 |

## 3. Performance: measured before and after

**Method:** Lighthouse 12.6.1 mobile, **DevTools (applied) throttling**, the local production build, the median of 3 runs by LCP. This is lab data, not field data: no CrUX/Search Console CWV data was available, and the PSI API quota was exhausted.

| Page | Perf before → after | LCP before → after | TBT before → after | CLS after |
|---|---|---|---|---|
| `/` | 70 → **95** | 7.4 s → **2.0 s** | 153 → 144 ms | 0.006 |
| `/services/website-development` | 65 → **97** | 7.1 s → **1.9 s** | 104 → 110 ms | 0 |
| `/blogs/website-development-cost` | 66 → **97** | 6.8 s → **2.0 s** | 41 → 47 ms | 0 |
| `/blogs` | 66 → **92** | 29.5 s → **2.0 s** | 45 → 237 ms | 0.035 |
| `/contact` | 73 → **96** | 7.6 s → **2.0 s** | 35 → 40 ms | 0 |
| `/industries/fintech` | 72 → **95** | 7.2 s → **2.1 s** | 90 → 93 ms | 0.003 |

With Lighthouse's default *simulated* throttling, the article page's JS fell from **4,205 KB to 482 KB** (transferred) and its TBT from **840 ms to 30 ms**. The simulated `/blogs` TBT fell from 1,150 ms to 90 ms.

**Root causes found and fixed**

1. **The whole article corpus was shipped to browsers.** `BlogExplorer` (a client component) imported the `categories` constant from `blog-data.ts`, which pulled every article body into a 12.8 MB chunk (~3.7 MB gzip). It loaded on `/blogs`, and on **every article** via the breadcrumb `<Link href="/blogs">` prefetch. Fix: `categories` moved to `blog-categories.ts` (no article imports) and re-exported from `blog-data.ts` for compatibility.
2. **LCP was 100% render delay.** The hero headline and intro were server-rendered at `opacity:0` (motion `initial`) and revealed only after hydration. Fix: a CSS `hero-rise` / `hero-mask` entrance (`globals.css`, with `heroRise()` / `HeroLines` helpers in `ui/Aesthetic.tsx`) applied to the 9 hero components. Hero text is visible from the first frame and slides into place. `prefers-reduced-motion` disables it. Below-the-fold reveals are unchanged.

**Remaining performance items:** `/blogs` HTML is 926 KB because ~1,030 summaries are serialised for the client-side explorer (P4-7). Shared JS is ~480–600 KB per page (motion, lucide, page components), so audit unused animation code if INP field data turns out poor. GA4 adds ~176 KB.

## 4. Structured data

| Type | Where | Assessment |
|---|---|---|
| Organization (`#organization`) | All pages | Accurate. No fake `sameAs`, address, ratings or awards. `areaServed`: India + "Worldwide". Change only on business confirmation. |
| WebSite + SearchAction | All pages | Accurate (`/blogs?q=` works). Google retired the sitelinks search box, so the markup is inert but harmless. |
| BlogPosting | 1,027 articles | Valid; dates correct; `author` = Organization. Add `Person` when real authors exist. |
| BreadcrumbList | Service, industry and article pages | Matches the visible breadcrumbs |
| Service | 6 service pages | Valid schema.org; **no Google rich result exists for it** |
| FAQPage | Home, services, industries, articles with FAQs | Matches visible FAQs; **FAQ rich results were retired by Google in 2026**, so the markup is inert |
| ContactPage / AboutPage / CollectionPage / ItemList | Respective pages | Accurate |

There are **0 invalid JSON-LD blocks** across 1,062 pages (parsed in the crawl). I didn't add any new schema: nothing added would be both accurate and supported by a Google feature until real authors or case studies exist.

## 5. Security (found during the audit)

| Item | Status |
|---|---|
| Secrets | `.env` is git-ignored and untracked; mail credentials are server-only (`server-only` import); no `NEXT_PUBLIC_` secrets |
| Lead email | HTML-escaped template; Zod validation; honeypot; per-IP cooldown (in-memory) |
| Response headers | Live site had none beyond HSTS. **Added:** `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy` (`next.config.ts`). A CSP is deferred (needs nonces for GA4 and Next inline scripts) → P4-6. |
| PII in logs on mail failure | Recommendation L9 in 03 |

## 6. Accessibility (Lighthouse)

The score is 96 on all six pages before and after (no regression). Forms have labels, `aria-invalid`/`aria-describedby` and live status regions, and there's a skip link. The new website field has a label and `autocomplete="url"`.
