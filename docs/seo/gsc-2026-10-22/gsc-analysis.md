# GSC analysis: www.zspace.in (export of 22 October 2026)

## 1. Datasets supplied

| File | Rows | Dimensions | Totals |
| --- | --- | --- | --- |
| `…Performance-on-Search-2026-10-22 - Pages.csv` | 392 URLs | Page, clicks, impressions, CTR, position | 14 clicks, 2,043 impressions |
| `…Performance-on-Search-2026-10-22 - Queries.csv` | 599 queries | Query, clicks, impressions, CTR, position | 0 clicks, 1,429 impressions |

Both files sit untracked in the repo root (copies of the files in `~/Downloads`). No duplicate rows were found.

### Limitations

- **The date range isn't in the export.** The filename only gives the export date. GSC defaults to the last three months, but the site has only been live since mid-September 2026, so the data probably covers about five weeks. Treat every figure as an early baseline, not a trend.
- **No query-to-page mapping.** GSC exports queries and pages separately. Every query→page link in these files is **inferred** by matching the query's words against page slugs and titles (`url-optimization-map.csv`, column `secondary_queries_inferred`). 567 of 599 queries could be mapped. Treat these links as hypotheses.
- **Anonymised queries.** The page export shows 14 clicks, but the query export shows none. GSC withholds rare queries, so the clicked queries aren't visible at all.
- **No country, device or date data.** Market analysis below uses words in the queries (for example "australia" or "uk") as a weak proxy. No before/after comparison is possible, so section G (declining pages) can't be assessed.
- **Very small samples.** 211 of 392 pages have 1–2 impressions. Average position is weighted by impressions and is unstable at these volumes. A page at "position 7" with 12 impressions may have appeared in that spot only a handful of times.

## 2. Major patterns

1. **Blogs carry almost all visibility; service pages barely appear.** Only `/services/ai-automation` (29 impressions, position 50) and `/services` (28, position 7, which is probably brand traffic) get impressions. Website, mobile app, Shopify, UI/UX and CRO service pages get none. Commercial queries such as "custom shopify app development", "ai automation agency india" and "ui ux design agency mumbai" surface blog articles instead. That is normal for a five-week-old domain: the articles target longer queries with less competition.
2. **Australia is the clearest market signal.** 42 queries (133 impressions) name an Australian place, led by legacy software modernisation and membership software. India: 31 queries, 49 impressions. UK: 10 queries, 15 impressions. UAE/GCC: 6 queries, 11 impressions. Singapore: none.
3. **Positions are mostly beyond page 1.** Of the queries, 16 average positions 1–3, 51 average 4–10, 186 average 11–30, and 346 average worse than 30.
4. **Brand.** "zspace robotics private limited" (16 impressions, position 8.75) and "zspace" (3 impressions, position 5.7). The first may be a different company; see the owner question in `implementation-summary.md`.

## 3. Opportunity analysis

### A. High impressions, low CTR

No page has enough impressions for a statistically meaningful CTR judgement. The largest page has 84 impressions. Metadata was changed only where the query wording and the page title clearly didn't match:

| Page | Evidence | Action |
| --- | --- | --- |
| offline-first-mobile-app-development | "offline mobile application development" 21 impressions, position 20. The title was "Should Your App Work Offline?" | Title and description now lead with "Offline Mobile App Development" |
| shopify-custom-app-development-guide | "custom shopify app development" 20 impressions, position 68 | Title now uses the searchers' word order |
| how-to-set-up-a-shopify-store | "how to set up shopify store" 12 impressions, position 7.2, 0 clicks | Description now lists the actual steps instead of a generic hook |
| membership-management-software-australia | Most variants say "membership software", not "membership management software" | Title broadened to "Membership Software in Australia: Associations and Clubs Guide" |

### B. Positions 4–10

| Query | Impressions | Position | Page (inferred) | Note |
| --- | --- | --- | --- | --- |
| how to set up shopify store | 12 | 7.2 | how-to-set-up-a-shopify-store | Content expanded and description rewritten |
| how to ensure api-first design in multi-channel apps? | 7 | 8.1 | api-first-website-development | Monitor |
| make business site / how to make a business site | 5 / 5 | 2.2 / 6.6 | how-to-make-a-website-mobile-friendly | **Intent mismatch.** A pointer was added to the website development guide |
| ai automation companies | 5 | 3.6 | (listicles) | Monitor |
| website payment integration | 4 | 4.8 | payment-gateway-integration | Monitor |
| how can i identify and retry failed ecommerce transactions… | 4 | 5.3 | (unclear) | Monitor |
| difference between information architecture and user flow | 3 | 8.0 | information-architecture-vs-user-flow | The title already matches exactly; no change |

### C. Positions 11–30 (striking distance)

These were acted on:

- **legacy-software-modernization-australia.** "legacy software modernisation australia" 13 impressions at position 15.9; "take over legacy software" 12 at 23.5.
- **membership-management-software-australia.** "membership software" 9 at 20; "association membership software" 7 at 23; "membership software australia" 6 at 24; "membership portal software" 5 at 17.8; "club membership software" 5 at 22.8; plus about 20 smaller variants.
- **offline-first-mobile-app-development.** 21 impressions at position 20.
- **feature-flag-implementation.** 18 impressions at position 26.
- **mobile-app-development-timeline.** 7 variants of "how long does it take to build an app", positions 26–32.

Candidates for the next batch: ecommerce-internationalization (position 12), omnichannel-ecommerce-architecture (12.7–28), pim-vs-cms (13.8–18.5), saas-website-development (26.8), monolithic-vs-headless-architecture (27.7), franchise-management-software-australia (29 for the AU term), payment-gateway-integration-australia (19.5–41).

### D. High impressions, zero clicks

- **business-rules-engine.** 67 impressions across 15+ variants, all at positions 67–91. The page had 312 words and no definition, no explanation of the software types, nothing on open source and no AI angle. It has been expanded. Its position mostly reflects the site's authority, so expect slow movement.
- **ai-agents-in-pharmaceuticals.** "pharma enterprise ai content authoring platform" (22 impressions, position 69) is a search for a vendor product that ZSpace doesn't sell. **Left alone on purpose.**
- **shopify-store-maintenance-checklist.** "shopify maintenance checklist" 13 impressions at position 31, but the page had no actual checklist table. It now has one.

### E. Possible cannibalisation (review, don't merge yet)

| Group | Pages | View |
| --- | --- | --- |
| Payment gateway | payment-gateway-integration, payment-gateway-integration-australia, ecommerce-payment-gateway-integration | Intents differ (general website, AU market, ecommerce checkout). Keep all three; recheck with a query-page export |
| AI ecommerce search | ai-ecommerce-search, ecommerce-product-data-ai-search, ecommerce-semantic-search | Real overlap on "ai ecommerce search" variants. Needs the query-page export before any merge |
| Feature flags | feature-flag-implementation, mobile-app-release-management | Different scopes. Now cross-linked so the split is explicit |
| Headless | headless-website-development, monolithic-vs-headless-architecture, headless-cms-vs-traditional-cms | Comparison vs service intent; monitor |
| Agency intent | best-ui-ux-design-agencies-in-mumbai/india, best-ai-automation-agencies-in-india vs the service pages | Listicles take agency queries. The decision on self-ranked lists is still with the owner (Q from the 12 Oct audit) |

### F. Queries without a suitable page

- **"how to make a business site"** (positions 2–7). No dedicated page exists. For now, readers are pointed to the website development guide. A dedicated "how to make a business website" guide is a **P3 candidate**. It isn't created here because bulk publishing is paused pending the owner's decision.
- **"shopify store setup india" / "shopify store cost india".** Covered by the new India section rather than a new page.
- **"take over legacy software".** Covered by the new handover section. A separate page would compete with software-vendor-handover-checklist.

### G. Declining performance

Not assessable: the export has no comparison period.

## 4. Geographic view

| Market | Signal in query text | Interpretation |
| --- | --- | --- |
| Australia | 42 queries, 133 impressions | Strongest. Legacy modernisation, membership, franchise, construction and payment gateway queries. The two biggest pages were improved |
| India | 31 queries, 49 impressions | Agency and service-type queries (AI automation, UI/UX in Mumbai, Shopify setup) that land on listicles or blogs |
| UK | 10 queries, 15 impressions | NHS integration, waste tracking, property compliance. Too early to act |
| UAE/GCC | 6 queries, 11 impressions | AI document automation, Arabic OCR. Too early to act |
| Singapore | 0 | No signal |

As earlier audits noted, `.in` is a country-code domain that Google associates with India. Australian visibility appears anyway because the AU articles are specific. No new country pages were created.

## 5. Recommended priorities

1. **P1 (done this batch):** the 9 pages in `content-change-log.csv`.
2. **P1 (owner):** export **query + page** data together. In Search Console, open the Performance report, filter by page, then export queries. Do this for the top 20 pages, and add **Countries** and **Devices** tabs plus a comparison period, to replace the inferred mapping.
3. **P2:** franchise-management-software-australia (same thin pattern as membership), the striking-distance list in 3C, and the cannibalisation review in 3E.
4. **P3:** a "how to make a business website" guide, once publishing resumes; brand/legal-name question.
5. **Re-measure** these pages from about **mid-December 2026**: same filters, with a comparison against this export.
