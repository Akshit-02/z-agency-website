# 90-day SEO roadmap — zspace.in (from 5 November 2026)

## Baseline: GSC, last 3 months to 3 November 2026

| KPI | Baseline |
| --- | --- |
| Clicks | 43 (most from 19 Oct onward) |
| Impressions | 13,026 |
| CTR | 0.33% |
| Service pages with any impressions | 2 of 6 (AI automation 289, Shopify 3) |
| Impressions on `/services/ai-automation` | 289 @ avg position 32.2 |
| `ai automation services` | 125 impr @ 28.0 |
| `legacy php modernisation australia` | 159 impr @ 41.5 |
| `saas website development` | 57 impr @ 21.7 |
| Pages at avg position ≤10 with ≥40 impressions and 0 clicks | 7 |
| Organic enquiries | Not measured: add a GA4 key event for contact-form submissions with organic source, if not already set up |

Rankings cannot be guaranteed. The site only became visible around 19 October, so every target below is a direction to watch rather than a promise. Compare like-for-like periods (28 days vs the previous 28 days) using the export date range.

## Days 1–15: critical fixes and highest-impact items

| Priority | Task | Owner | Done when |
| --- | --- | --- | --- |
| P0 | Find out why production is behind `master` (new 5 Nov article returns 404 live); fix the deployment | You | Latest commit live |
| P0 | Review, commit and deploy this batch (15 URLs) | You | Changes live |
| P0 | Check one service page in a browser, desktop and mobile, to confirm the hero looks unchanged | You or dev | Checked |
| P1 | Decide on the 11 agency listicles: keep, rework or 301 to service pages | You | Decision recorded |
| P1 | Request indexing in GSC for the 15 changed URLs, prioritising `/services/ai-automation`, legacy modernisation and SaaS website development | You | Requested |
| P1 | Set up measurement: GA4 key event for enquiry submission, and a GSC filtered view or saved comparison for the 15 changed URLs | You or dev | Event firing |

## Days 16–30: commercial pages and quick wins

| Priority | Task |
| --- | --- |
| P1 | If the listicle decision is "redirect": add 301s in `next.config.ts`, update the internal links and `relatedSlugs` that point to them, and remove them from `llms.txt`. If "rework": rewrite as neutral selection guides with no ranking |
| P1 | Service pages: add 2–3 buyer FAQs each (timeline and cost drivers, what to prepare, how projects start) to website, mobile, UI/UX, Shopify and CRO, following the AI automation pattern |
| P1 | UI/UX service page: strengthen for `ui ux design agency in india` and `ui design agency` (now landing on listicles): a short "what you get from a UI/UX engagement" section and a link from `ui-design-vs-ux-design` |
| P2 | Snippet review for the remaining top-15 zero-click pages: ai-agent-rollback, ai-poc-vs-pilot-vs-production, cloud-cost-optimization-australia, ecommerce-product-sorting, 3d-secure-ecommerce, healthcare-software-integration-australia |
| P2 | Export Queries filtered by page for the top 20 pages to replace the inferred mapping |

## Days 31–60: content improvements and topical authority

| Priority | Task |
| --- | --- |
| P2 | build-vs-buy-ai-agents: add "agent platform vs your own control plane" with cost drivers and an FAQ (queries at positions 4–15) |
| P2 | ai-ecommerce-search, ecommerce-microservices-architecture, monolithic-vs-headless-architecture, b2b-ecommerce-website-design, pim-vs-cms: on-page relevance updates per `content-improvement-plan.csv` |
| P2 | Measure the 22 October batch (membership software, business rules engine, feature flags, Shopify set-up and others) against its baseline; iterate only where position or CTR has not moved after 6 weeks |
| P2 | Manual depth review of the shortest articles flagged INVESTIGATE in `complete-seo-audit.csv` |
| P3 | Decide on a custom software development service page (see `new-content-opportunities.csv`) |

## Days 61–90: expansion, international and optimisation

| Priority | Task |
| --- | --- |
| P3 | Re-export GSC (3 months, plus a comparison period) and rerun this analysis. Promote any query cluster that has reached ≥100 impressions at positions 5–20 |
| P3 | International: review Australia (2,558 impressions, position 42). If AU articles still sit beyond page 3, stop adding AU-specific articles and improve the strongest 10 instead. Do not create US pages unless US commercial queries appear |
| P3 | UAE and Singapore: visibility is minimal (155 and 57 impressions). No new regional pages until there is demand |
| P3 | CRO on enquiry paths: review contact-form completion from organic visitors once the key event has 4+ weeks of data |
| P3 | Core Web Vitals: check the GSC CWV report and fix anything flagged "poor" |

## KPIs to review at day 30, 60 and 90

| KPI | Direction to aim for |
| --- | --- |
| Organic clicks (28-day) | Rising versus the previous 28 days |
| Service-page impressions | All 6 service pages appearing in GSC |
| `/services/ai-automation` average position for `ai automation services` | Better than 28 |
| CTR of the 6 snippet-changed pages | Above 0% (currently 0 clicks on 987 impressions) |
| `legacy php modernisation australia` | Better than 41.5 |
| Hire-intent queries landing on service pages rather than listicles | Increasing share (check in GSC: filter by query, then Pages) |
| Organic enquiries (GA4 key event) | Tracked and rising |
