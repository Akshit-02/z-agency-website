# 01. Website audit report

Audit date: 17 October 2026. Scope: www.zspace.in (repository, local production build, live site), five markets.

Labels: **[Verified]** checked in code, build, crawl or a primary source; **[Research]** from current external sources, cited in files 06–07; **[Hypothesis]** a reasoned expectation to test with Search Console data.

## Summary

ZSpace's site is technically clean but commercially unproven. Every one of its 1,089 URLs is crawlable, canonical and valid, but the site shows no case studies, named people, client reviews or country-level lead data. Growth depends on proof and measurement more than on more pages.

## What the site is [Verified]

| Area | Finding |
| --- | --- |
| Framework | Next.js 16.3 App Router, React 19, TypeScript, Tailwind 4, hosted on Vercel |
| Rendering | All pages prerendered at build (3,229 static outputs) |
| CMS | None. Articles are typed data in about 250 `src/lib/blog-data-*.ts` files merged in `blog-data.ts` |
| Routes | `/`, `/about`, `/services`, `/services/[slug]` (6), `/industries`, `/industries/[slug]` (12), `/blogs`, `/blogs/[slug]` (1,057), `/blogs/category/[slug]` (6), `/contact`, `/privacy`, `/terms` |
| No location, tag, search or filter pages | Correct: nothing indexable is generated from parameters |
| Sitemap | `src/app/sitemap.ts`: 1,089 URLs, matching the build and live exactly |
| robots.txt | Allows all; points to the sitemap |
| Canonicals, metadata | Per-route `generateMetadata`; self-referencing www canonicals |
| Structured data | Organization, WebSite, BreadcrumbList, BlogPosting, Service, FAQPage, CollectionPage; all valid |
| Forms | `/contact` → `/api/contact` (Zod validation, honeypot, rate limit) → SMTP email. No CRM |
| Analytics | GA4 (`G-00464BTJH5`) loads on every page; `generate_lead` fires only after the server confirms delivery |
| Count reconciliation | "More than 1,000 blogs" is accurate: 1,057 articles. Indexed count unknown without Search Console |

## Key findings

1. **Technical foundations are sound** [Verified]: 1,089 × 200, 0 canonical errors, 0 noindex, 0 broken internal links, 0 orphans, 0 duplicate titles or descriptions, 0 invalid JSON-LD. Details: `04-technical-seo-issues.md`.
2. **Content volume and anonymity are the main quality risk** [Verified + Hypothesis]: 974 articles (92%) were published in September–October 2026, all bylined to the organisation. Google's helpful-content guidance names "extensive automation to produce content on many topics" as a warning sign.
3. **93 articles show publish dates before the site existed** [Verified]: the domain was a parked "lander" page in Aug 2024 and Jan 2025 (Wayback Machine); the first commit is 15 Sep 2026. Needs owner confirmation (`17-human-review.md`).
4. **Templated structure** [Verified]: one generic 10-stage table appeared in 32 articles, often under unrelated headings. It was removed from 29 (batch 1). Another 30 "How to implement AI agents in [industry]" sections share one table, and 17 Shopify articles share a "ZSpace CRO framework" table.
5. **Orphaned citations** [Verified]: the 3 Oct link removal left 202 bare labels such as "(theme store requirements)". All were removed in batch 1, per the owner's decision.
6. **Self-ranked listicles** [Verified]: 11 "best … in India/[city]" lists still place ZSpace first, including 5 cities with no office.
7. **Lead attribution was too thin to report by channel** [Verified]: fixed in batch 1 (first landing page, referrer, UTM on every enquiry).
8. **Service pages were India-only** while the owner confirms clients in five markets: fixed in batch 1 with a sourced "Where we work" section.
9. **No proof** [Verified]: no case studies, team, reviews or credentials. This is the largest gap against competitors in every market (`07-competitors-and-search-intent.md`).
10. **Cost guides miss their intent** [Verified]: the website and Shopify cost guides give no figures. Needs real price bands from the owner.

## Where to find the detail

- Every URL: `02-url-inventory.csv`; every article with A–J class and actions: `03-blog-quality-classification.csv`.
- Markets, competitors and keywords: `06`, `07`, `08`. Overlap: `09`. Links: `10`.
- Services: `05`, `11`. International pages: `12`. Content waves: `13`. Schema and hreflang: `14`.
- What changed and how it was tested: `15`, `16`. What the owner must decide: `17`. Plan and KPIs: `18`, `19`.

## Data that was not available

Google Search Console (queries, clicks, impressions, CTR, position, countries, Page Indexing), GA4 reports, CrUX field data, backlink data (Ahrefs, Semrush or Search Console Links), keyword-volume tools and CRM records. Nothing in these files estimates them. The specific exports needed are listed in `19-kpi-specification.md`.
