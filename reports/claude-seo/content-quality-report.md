# Content quality, E-E-A-T, duplication and cannibalisation report

Coverage:
- All 1,133 articles: the content model was loaded directly from `src/lib/blog-data*.ts`, and links, sources, headings, dates and words were scanned.
- All 1,165 rendered pages: link graph.
- GSC export (`gsc-data.xlsx`, last 3 months).
- A manual seo-content/E-E-A-T review of 21 pages: home, about, contact, both hubs, 6 services, 2 industries, 8 high-impression articles, plus 15 random articles for the templating check. Detail is in `appendix-content-eeat-audit.md`.

## 1. Library profile

| Metric | Value |
|---|---|
| Articles | 1,133 in 6 categories: Web Development 347, AI & Automation 265, UI/UX 202, Shopify & Ecommerce 174, CRO 88, Mobile Apps 57 |
| Publication dates | **1,019 of 1,133 dated Sep–Oct 2026** (427 + 592). 31 in Nov, 83 before Sep. 270 carry an `updated` date. |
| Length | Median 1,673 words of body text, minimum 911. No thin articles by word count. |
| Duplicate slugs / titles / meta descriptions | 0 / 0 / 0. Claude SEO `metadata_template.py`: site_risk low. |
| Contextual internal links | Every article has them (median 10 per article). Every article links a service page in-body. 0 broken. |
| Contextual inbound from other articles | Median 7. 76 articles have ≤1 (35 link proposals in `internal-linking-report.csv`). |
| External citations | **Only 6 of 1,133 articles contain a clickable external link.** 226 have a "Sources" section that names sources (e.g. "NN/g: Design Systems 101; web.dev: Web Vitals") without linking them. |
| Authors / visible dates | None. `BlogPosting.author` = Organization. No byline or visible published/updated date on article pages. |
| Earning impressions | 650 of 1,133 articles had ≥1 impression in 3 months. 483 had none. |

## 2. Main risk: scaled, templated content

The strongest site-level finding. Evidence:
- About 19 articles a day over Sep–Oct 2026.
- "Conclusion" appears in 1,079 articles and "Quick answer" is the first H2 in 833. 142 articles share one complete skeleton.
- A 10-sentence step list is copied verbatim into 30 posts. 26 `ai-agents-in-<industry>` posts and 98 AU/UAE geo posts follow a geo/vertical template.
- No author, no first-hand experience (296 "illustrative scenario, not a client case" disclaimers).

Mitigating factors: the topics are distinct (not spun), facts are attributed and dated, and no fabricated client stories or invented statistics were found in the sample. This is not spam. But Google's scaled-content-abuse policy and site-level helpfulness signals evaluate the pattern, not the intent. 13,026 impressions and 43 clicks across about 1,150 URLs also show that most of the corpus is not yet earning traffic.

**Recommendation:** no mass deletion now. The site has only about 7 weeks of search data, since impressions started in late Sep 2026.
1. **Pause high-volume publishing.** Put effort into the ~50 articles that map to commercial queries (see the P1 list in `page-action-tracker.csv`).
2. Add real authors or reviewers and visible dates (owner input needed).
3. Link the named sources (226 articles), starting with the P1 pages.
4. In Feb–Mar 2027, with 6 months of data, run the consolidation review on the 210 articles tagged `INVESTIGATE / P3` (no impressions, published before 1 Oct 2026). Merge them into stronger hubs or noindex them. Only redirect where a clear successor page exists.

## 3. Cannibalisation and near-duplicates

TF-IDF similarity on title + excerpt found **26 pairs above 0.55**. Most are the "best X agencies in India" family, which target different services and are a template issue rather than cannibalisation. Pairs worth a query-level check before any merge (`INVESTIGATE`, P2):

| Pair | Note |
|---|---|
| beauty-ecommerce-website-design / beauty-ecommerce-ux | Same audience; design vs UX framing |
| wholesale-ecommerce-website / wholesale-ecommerce-ux | First ranks at pos 6.0 (94 impressions) |
| ecommerce-microservices-vs-monolith / modular-monolith-vs-microservices | Architecture comparison overlap |
| retrieval-augmented-generation / rag-use-cases | Definition vs use cases (can coexist if they link each other) |
| shopify-hydrogen / shopify-hydrogen-vs-traditional-shopify | Overlapping intent |
| sports-ecommerce-website-design / sports-ecommerce-website-development | Likely the same intent |
| omnichannel-ecommerce-architecture / retail-ecommerce-integration | Partial overlap |
| best-ui-ux-design-agencies-in-india / best-ui-ux-design-agencies-in-mumbai | City variant of the national list |

The GSC export's Queries and Pages sheets aren't joined (no query→page mapping), so true cannibalisation (two URLs alternating for the same query) can't be proven from the export. Once the Google API is configured, run `/seo google` search analytics with `page` + `query` dimensions.

## 4. "Best agencies" listicles (12 posts)

ZSpace lists itself #1 in 11 agency lists, including 5 city/state variants for a studio with no offices. The disclosure is honest and explicit, but:
- the UI/UX list tells readers to ask for case studies, which ZSpace says it doesn't publish
- the skeleton is repeated across all of them.

Action: restructure (drop "Best", move ZSpace into a separate "About the publisher" box), and merge or noindex the city variants after checking their traffic. Owner decision. See `human-review-required.md`.

## 5. Facts needing verification (no edits made)

| Article | Claim |
|---|---|
| membership-management-software-australia | "Card surcharges on eftpos, Visa and Mastercard ended on 1 October 2026" (check against the RBA final decision) |
| legacy-software-modernization-australia | "The OAIC received 1,205 notifications in 2025" |
| business-rules-engine | "The OMG adopted DMN 1.6 in September 2026" |
| UAE posts | "about 202% of the population" (mobile connections): likely correct, but rephrase |

Also: patch seams (mixed title-case and sentence-case H2s, a contradictory "Four Options, Not Two" section) in `build-vs-buy-ai-agents` and `saas-website-development`.

## 6. Outdated content

119 articles mention a year from 2019–2023. A sample shows these are mostly legitimate references (DPDP Act 2023, historical context) rather than stale statistics. No sitewide "outdated technology" problem was found. The library is very recent. Freshness should be handled through the source-linking pass.

## 7. Classification summary (all 1,165 URLs; per-URL in `page-action-tracker.csv`)

| Action | Articles | Other pages |
|---|---|---|
| KEEP | 863 | 3 |
| UPDATE | 29 | 14 |
| EXPAND | 0 | 15 |
| INVESTIGATE | 241 (210 low-data consolidation candidates, 31 overlap or city variants) | 0 |
| MERGE / REDIRECT / NOINDEX / REMOVE | 0 now. Decisions deferred until 6 months of data and owner review. | 0 |
