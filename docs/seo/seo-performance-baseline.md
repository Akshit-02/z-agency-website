# SEO Performance Baseline

Recorded 2026-10-03.

## Data that was not available

| Source | Status |
|---|---|
| Google Search Console | Not connected. The site has a Google verification meta tag, so a property exists, but no API access or export was provided. No queries, clicks, impressions, CTR, positions, indexing or Core Web Vitals field data could be retrieved. |
| Bing Webmaster Tools | Not connected; unknown whether the site is verified. |
| Google Analytics 4 | Tag `G-00464BTJH5` is installed; no reporting access was provided. |
| Keyword tools (DataForSEO, Ahrefs, Semrush) | Not available; no search volumes, difficulty or CPC are claimed anywhere. |
| Backlink data | Not available. |
| Field Core Web Vitals (CrUX) | Not retrieved. |

No analytics figures in these documents are estimated or invented.

## Baseline that was measured

| Metric | Value | How measured |
|---|---|---|
| Indexable URLs in sitemap | 760 (728 articles, 6 service pages, 12 industry pages, 6 category hubs, 8 other pages: home, about, services index, industries index, blogs, contact, privacy, terms) | local production crawl |
| URLs returning 200 | 760 / 760 | local production crawl |
| Broken internal links | 0 | local production crawl |
| Canonical / H1 / metadata issues | 0 / 0 / 2 short descriptions | local production crawl |
| Live site | serves the pre-rebrand build; canonicals on apex host while serving www | live HTTP checks |
| /blogs page weight | 520 KB HTML (was 8.35 MB) | production build output |

## What to record after deployment

1. **Search Console:** submit `https://www.zspace.in/sitemap.xml`; record indexed pages, impressions, clicks, CTR and average position for the site, each service page and each category hub; export the top 1,000 queries.
2. **Bing Webmaster Tools:** verify the site, submit the sitemap, record the same metrics and any AI-related performance reports available.
3. **PageSpeed Insights:** run home, one service page, /blogs, one category hub and three articles on mobile; record LCP, INP, CLS (field and lab).
4. **Rich Results Test:** one article, one service page and the homepage.
5. **Branded AI visibility:** ask major AI assistants "What is ZSpace Labs?" and two service queries; record answers monthly.

## Prioritisation once data exists

- Pages with high impressions and low CTR: rewrite titles and descriptions.
- Queries ranking positions 5–20 with commercial intent: strengthen the mapped page and its internal links.
- Pages with impressions but no clicks for unrelated queries: check intent mismatch.
- Not-indexed pages: check quality and internal links before requesting indexing.
