# Implementation summary: GSC-driven batch, 22 October 2026

All changes are uncommitted on `master`. Nothing was deployed.

## Counts (actual)

| Item | Count |
| --- | --- |
| URLs in the GSC export analysed | 392 |
| Queries analysed | 599 (567 mapped to a page by inference) |
| URLs inspected in the local crawl | 1,094 (full sitemap) |
| URLs changed | 17 articles |
| …of which substantive content work | 8 (membership, legacy modernisation, business rules engine, feature flags, app timeline, Shopify setup, Shopify custom app, Shopify maintenance) |
| …metadata only | 1 (offline-first) |
| …one sentence or contextual link only | 7 (loyalty program, Shopify clothing store, Shopify development cost, migrating to Shopify, validate app idea, website timeline, mobile-friendly website) |
| …related-article card only | 1 (custom CRM Australia) |
| Templates or components changed | 0 |
| Titles changed (`seoTitle`) | 5 |
| Meta descriptions changed (`excerpt`) | 7 |
| New sections added | 29 (including 2 Sources sections) |
| New FAQs added / FAQs corrected | 15 / 1 |
| Internal links added | 13 in-body + 17 related-article cards |
| Rows in `content-change-log.csv` | 62 |
| Word count of the 8 expanded pages | 5,733 → 9,778 (body, lists and tables; excluding FAQs) |

## Main content improvements

- **Membership software (Australia).** Grew from about 670 to about 1,400 words (body, lists and tables). New: requirements by organisation type, a platform selection checklist, cost drivers (no invented prices), an implementation plan timed around the renewal cycle, success measures, and 3 FAQs.
- **Legacy software modernisation (Australia).** New sections on taking over software from a previous developer (including the point that contractor-written code is generally owned by the contractor unless the contract assigns it) and on choosing a modernisation partner, plus 1 FAQ.
- **Business rules engine.** New: a definition with a diagram, types of rules engine software (open source, commercial, no-code, custom), rules engines and AI, an evaluation checklist, and 2 FAQs.
- **Feature flag implementation.** New: step-by-step implementation, an illustrative fail-safe code sample, consistent percentage rollouts, a build-or-buy table (mentions OpenFeature), feature flags in mobile apps, and 2 FAQs.
- **Mobile app timeline.** New: fixed waits you can't shorten, all verified. Apple reviews at least 50% of submissions within 24 hours and 90% within 48 hours. Google Play requires new personal accounts to run a closed test with 12 testers for 14 days. Apple enrolment requires a D-U-N-S Number. Also new: MVP vs full product, a self-estimation method, Sources, and 2 FAQs. One vague FAQ was corrected.
- **Shopify setup.** New: a table of where each step lives in the admin, a section on setting up in India (verified: Shopify Payments is not available in India), common mistakes, and 1 FAQ.
- **Shopify custom app.** The plan limit is now precise: Shopify's docs say custom apps containing Functions are Plus-only, while public apps containing Functions work on any plan. Also new: the build process (verified: quarterly API versions, each supported for at least 12 months), replacing a paid app, what to look for in a developer, Sources, and 2 FAQs.
- **Shopify maintenance.** New: a full weekly, monthly, quarterly and annual checklist table, security and access, what a maintenance package should include, and 2 FAQs.

No new pages were created. No URLs, slugs or redirects were changed. No external links were added (owner rule since 19 October). Sources are named in plain text.

## Build and test results

`tsc --noEmit`, ESLint (changed files), `next build`, the repo QA script (`docs/seo/tools/qa.py`) and a full local crawl (`docs/seo/tools/crawl.py`) all pass. The crawl found 1,094 of 1,094 URLs returning 200, 0 broken internal links, 0 duplicate titles or descriptions and 0 JSON-LD errors. The QA script initially flagged the new Apple and Google figures as unsourced. Sources sections were added, following the site's convention.

## Unresolved issues and owner questions

1. **Query + page exports** for the top pages, plus Countries, Devices and a comparison period. These would replace the inferred mapping (highest-value next input).
2. **Brand:** is "ZSpace Robotics Private Limited" the legal entity? If so, add it as `legalName` in the Organization schema. If not, ignore the query.
3. **Listicles:** agency-intent queries in India land on self-ranked "best agencies" lists. The decision from the 12 October audit is still open.
4. **Bulk publishing pause:** a "how to make a business website" guide is justified by the evidence but wasn't created.
5. **Stale local server:** stopped. Restart it with `npx next start -p 3123` only if you still need it.

## Recommended next steps

1. Review the diff, then commit and deploy when you're happy with it.
2. In Search Console, request indexing for the 9 substantively changed URLs (`content-change-log.csv`) after deploying.
3. Next batch (P2): franchise-management-software-australia, ecommerce-internationalization, omnichannel-ecommerce-architecture, pim-vs-cms, saas-website-development, and the cannibalisation review in `gsc-analysis.md` section 3E.
4. Re-export from about mid-December 2026 and compare these 9 pages against this baseline.
