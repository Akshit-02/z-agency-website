# Google Search Console performance analysis — zspace.in

Source: `gsc-data.xlsx` (Search Console export downloaded 5 November 2026; search type: web; date filter: "Last 3 months"). The workbook was read without modification. All metrics below are actual GSC figures unless labelled as an estimate or recommendation.

## 1. What the export contains

| Sheet | Rows | Notes |
| --- | --- | --- |
| Chart | 51 days (14 Sep – 3 Nov 2026) | Daily clicks, impressions, CTR, position |
| Queries | 1,000 | Top 1,000 queries only; anonymised queries are excluded |
| Pages | 667 | Page-level totals |
| Countries | 125 | |
| Devices | 3 | |
| Search appearance | 1 | Product snippets (20 impressions) |
| Filters | — | Web search, last 3 months |

**Limitations**

- The export has no query + page pairing. The query-to-page mapping in `keyword-to-page-mapping.csv` is inferred by matching query words to page URLs, titles and H1s, with manual corrections for the obvious mismatches. Treat it as a hypothesis to confirm in GSC (Performance → filter by query → Pages tab).
- Only **3 of 43 clicks** are attributed to visible queries. GSC hides rare queries for privacy, so most clicks cannot be tied to a query. Page-level data is more reliable here.
- Sheet totals differ slightly (Chart: 13,026 impressions; Pages: 13,259) because GSC aggregates by property and by page differently. This is normal.
- No comparison period was exported, so period-over-period changes are based on the daily chart only.

## 2. Overall performance

| Metric | Value |
| --- | --- |
| Clicks | 43 |
| Impressions | 13,026 |
| CTR | 0.33% |
| Average position (impression-weighted, all queries) | about 30 (desktop 30.6, mobile 29.3) |

**How to read average position.** It is the average of the top position the site held each time it appeared, weighted by impressions. An average of 30 can mean one page shown at position 5 and another at position 80. It is not a ranking any individual user saw, and for queries with few impressions it moves a lot from week to week.

### Trend: the site is in its first weeks of meaningful visibility

| Week starting | Clicks | Impressions | Avg position |
| --- | --- | --- | --- |
| 14 Sep | 0 | 0 | – |
| 21 Sep | 0 | 16 | 24.2 |
| 28 Sep | 1 | 262 | 34.8 |
| 5 Oct | 1 | 227 | 36.7 |
| 12 Oct | 1 | 355 | 40.2 |
| 19 Oct | 22 | 4,256 | 31.3 |
| 26 Oct | 10 | 6,225 | 29.5 |
| 2 Nov (2 days) | 8 | 1,685 | 28.5 |

Almost all visibility arrived after 19 October, and average position is improving week by week. With only about two and a half weeks of meaningful data, small numbers dominate: one extra click changes a page's CTR dramatically. Decisions in this audit therefore rely on impressions and position more than clicks.

## 3. Top queries (by impressions)

| Query | Impr. | Clicks | Avg pos. | Likely page (inferred) |
| --- | --- | --- | --- | --- |
| legacy php modernisation australia | 159 | 0 | 41.5 | /blogs/legacy-software-modernization-australia |
| ai automation services | 125 | 0 | 28.0 | /services/ai-automation |
| build vs buy ai agents | 86 | 0 | 34.4 | /blogs/build-vs-buy-ai-agents |
| software modernisation australia | 81 | 0 | 54.4 | /blogs/legacy-software-modernization-australia |
| legacy software modernisation australia | 75 | 0 | 23.4 | /blogs/legacy-software-modernization-australia |
| ai code review | 71 | 0 | 35.3 | /blogs/ai-code-review |
| ai automation agency | 68 | 0 | 46.1 | /services/ai-automation |
| ai automation agency india | 66 | 0 | 22.6 | /blogs/best-ai-automation-agencies-in-india |
| legacy software development company | 64 | 0 | 73.2 | /blogs/legacy-software-modernization-australia |
| membership software | 63 | 0 | 20.5 | /blogs/membership-management-software-australia |
| when does an ecommerce brand need a data warehouse? | 62 | 0 | 1.7 | /blogs/ecommerce-data-warehouse |
| customer portal development australia | 60 | 0 | 92.7 | /blogs/customer-portal-development-australia |
| saas website development | 57 | 0 | 21.7 | /blogs/saas-website-development |
| ux design and ui design | 54 | 0 | 39.1 | /blogs/ui-design-vs-ux-design |
| monolithic vs headless | 50 | 0 | 20.0 | /blogs/monolithic-vs-headless-architecture |

## 4. Top pages

**By clicks**

| Page | Clicks | Impr. | Avg pos. |
| --- | --- | --- | --- |
| /blogs/ecommerce-returns-ux | 4 | 21 | 6.1 |
| /blogs/ai-jailbreak-testing | 2 | 103 | 13.3 |
| /blogs/web-application-threat-modeling | 2 | 36 | 17.9 |
| /blogs/wholesale-ecommerce-ux | 2 | 12 | 5.2 |
| 33 further pages | 1 each | | |

**By impressions**

| Page | Impr. | Clicks | Avg pos. |
| --- | --- | --- | --- |
| /blogs/legacy-software-modernization-australia | 697 | 0 | 49.9 |
| /blogs/membership-management-software-australia | 691 | 0 | 25.3 |
| /blogs/supplier-portal-development | 546 | 0 | 7.1 |
| /blogs/build-vs-buy-ai-agents | 335 | 0 | 21.4 |
| /blogs/business-rules-engine | 295 | 0 | 83.2 |
| /services/ai-automation | 289 | 0 | 32.2 |
| /blogs/ai-ecommerce-search | 275 | 0 | 43.4 |
| /blogs/best-ai-automation-agencies-in-india | 245 | 0 | 30.8 |
| /blogs/best-ui-ux-design-agencies-in-india | 196 | 1 | 15.3 |
| /blogs/digital-waste-tracking-software-uk | 172 | 0 | 21.4 |

**By page type**

| Type | URLs with impressions | Impressions | Clicks |
| --- | --- | --- | --- |
| Blog articles | 643 | 12,091 | 38 |
| Agency listicles (`/blogs/best-*-agencies/companies-in-*`) | 7 of 11 | 686 | 1 |
| Service pages | 3 (incl. /services hub) | 323 | 0 |
| Industry pages | 10 | 52 | 3 |
| Home, about, contact, blog hub | 4 | 107 | 1 |

**The most important finding: service pages are almost invisible.** Only `/services/ai-automation` (289 impressions, position 32) and `/services/shopify-development` (3 impressions) appear. The website, mobile app, UI/UX and CRO service pages had **no impressions** in the period. Commercial visibility currently comes from articles, which are informational by nature.

## 5. Opportunity groups

Position buckets (queries, impression-weighted where stated):

| Avg position | Queries | Impressions | Clicks |
| --- | --- | --- | --- |
| 1–3 | 49 | 182 | 0 |
| 4–10 | 130 | 618 | 1 |
| 11–20 | 175 | 1,437 | 2 |
| 21–50 | 331 | 3,403 | 0 |
| 50+ | 315 | 2,608 | 0 |

### A. Quick wins (positions 4–20 with meaningful impressions)

| Query | Impr. | Pos. | Page |
| --- | --- | --- | --- |
| membership management software australia | 51 | 20.2 | membership-management-software-australia (updated 22 Oct; measuring) |
| monolithic vs headless | 50 | 20.0 | monolithic-vs-headless-architecture |
| omnichannel architecture | 46 | 11.3 | omnichannel-ecommerce-architecture (title changed) |
| payment integration | 44 | 18.0 | uncertain; several payment articles |
| ai jailbreak testing | 42 | 16.1 | ai-jailbreak-testing |
| b2b ecommerce website design | 38 | 16.4 | b2b-ecommerce-website-design |
| ecommerce search ux | 36 | 14.4 | ecommerce-search-ux |
| ai automation agency in india | 36 | 17.9 | agency listicle (owner decision) |
| custom lms australia | 33 | 12.5 | lms-development-australia (title changed) |
| healthcare software integration | 31 | 9.9 | healthcare-software-integration-australia |

### B. High impressions, low CTR (pages in the top 15 with no clicks)

| Page | Impr. | Pos. | Action |
| --- | --- | --- | --- |
| /blogs/supplier-portal-development | 546 | 7.1 | Title and description rewritten |
| /blogs/ai-agent-rollback | 125 | 14.7 | Review in next batch |
| /blogs/ecommerce-data-warehouse | 107 | 3.3 | Description now answers the question |
| /blogs/ai-agent-autonomy-levels | 102 | 7.8 | Description rewritten |
| /blogs/omnichannel-ecommerce-architecture | 98 | 14.4 | Title rewritten |
| /blogs/wholesale-ecommerce-website | 94 | 6.0 | Title rewritten |
| /contact | 50 | 4.5 | Brand searches; no change |
| /blogs/ai-poc-vs-pilot-vs-production | 50 | 8.8 | Next batch |
| /blogs/cloud-cost-optimization-australia | 47 | 5.8 | Next batch |

Zero clicks at positions 2–8 with 50–500 impressions is partly explained by question-style queries that AI Overviews or featured snippets answer on the results page. A better snippet cannot fully solve that, which is why descriptions were rewritten to promise something beyond the one-line answer.

### C. Page-two opportunities (positions 11–20)

175 queries and 1,437 impressions. Most of them are long-tail, with fewer than 15 impressions each. The commercially relevant ones: `website development for saas` (13 @ 14.6), `website development for saas companies` (10 @ 12.0), `website development for startups` (14 @ 12.8), `ui ux design agency in india` (15 @ 14.9), `best ui ux agency` (13 @ 11.6), `ai automation company in india` (16 @ 13.1).

### D. High impressions, zero clicks

Every query in the export except three has zero clicks. The ones that matter most are those with real impressions and a page that matches the intent:

- `when does an ecommerce brand need a data warehouse?` (62 @ 1.7): the page is relevant. The question is answered directly in the results, so the description was rewritten.
- `legacy php modernisation australia` (159 @ 41.5): the page did not mention PHP at all. A PHP section was added.
- `customer portal development australia` (60 @ 92.7) and `business rules engine` (43 @ 85.7) sit too deep for snippet changes to matter.

### E. Commercial-intent opportunities

| Intent (rule-based) | Queries | Impressions | Clicks |
| --- | --- | --- | --- |
| Commercial: hire a provider | 132 | 1,047 | 0 |
| Commercial: service need (development, integration, modernisation) | 156 | 1,624 | 0 |
| Commercial investigation (best, vs, cost) | 93 | 738 | 1 |
| Commercial: software/product search ("membership software") | 102 | 1,344 | 0 |
| Informational | 515 | 3,468 | 2 |
| Navigational (brand) | 2 | 27 | 0 |

- **Hire intent concentrates on AI automation and UI/UX.** `ai automation services`, `ai automation agency`, `ai automation agency india`, `ai automation companies`, `ui ux design agency in india`, `best ui ux agency` and `ui design agency` together account for about 400 impressions. AI automation hire queries land partly on the service page and partly on a self-ranked listicle. UI/UX hire queries appear to land on the listicles, not on `/services/ui-ux-design`.
- **"Software" queries are a weak fit.** Searches such as `membership software`, `franchise software` and `waste tracking software` usually come from people looking for an off-the-shelf product. ZSpace builds custom software, so these impressions rarely become enquiries. They are not worth chasing beyond keeping the articles useful.

## 6. Countries and devices

| Country | Clicks | Impressions | Avg pos. |
| --- | --- | --- | --- |
| India | 20 | 4,260 | 24.2 |
| United States | 3 | 2,635 | 35.4 |
| Australia | 2 | 2,558 | 42.0 |
| United Kingdom | 2 | 1,018 | 38.5 |
| Germany | 1 | 206 | 27.5 |
| United Arab Emirates | 1 | 155 | 28.9 |
| Singapore | 2 | 57 | 20.4 |
| Saudi Arabia | 0 | 31 | 14.4 |

- **India** produces nearly half the clicks with the best average position. The India positioning of the service pages is consistent with the data.
- **Australia** has many impressions (73 article URLs carry "australia" in the slug, more than any other market), but at position 42 those impressions convert to almost no clicks.
- **The United States** is the second-largest source of impressions despite no US-targeted content. These are generic queries, and the position (35) is too weak to justify US pages now.
- **UAE, Singapore and the wider Gulf** have very little visibility so far.
- Queries containing a place name: Australia 1,259 impressions, India 408, UK 134, UAE 51.

| Device | Clicks | Impressions | CTR | Avg pos. |
| --- | --- | --- | --- | --- |
| Desktop | 32 | 11,079 | 0.29% | 30.6 |
| Mobile | 11 | 1,895 | 0.58% | 29.3 |
| Tablet | 0 | 52 | 0% | 29.9 |

85% of impressions are on desktop, which is typical for B2B research queries.

## 7. Major findings

1. The site is new to search: meaningful impressions began around 19 October 2026. Expect volatile numbers, and judge changes over 4–8 weeks, not days.
2. Visibility is broad and shallow: 667 pages have impressions, but only 26 pages have 100 or more, and nearly all clicks come from long-tail article queries.
3. Commercial pages barely appear. Five of the six service pages had no impressions.
4. Hire-intent searches in India land on self-ranked "best agencies" listicles rather than service pages. That is both a cannibalisation problem and a conflict with the content rule against agency rankings. It needs an owner decision.
5. Several pages already rank in the top 10 but earn no clicks, mainly because of question-style queries answered on the results page. Snippets were improved where the page offers more than the one-line answer.
6. The top query by impressions (`legacy php modernisation australia`) exposed a real content gap, which has now been filled.
7. Technical health is good. See `technical-seo-report.md`.
