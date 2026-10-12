# Blogs 281–330 (Australia): Implementation and QA Report

Implemented 2026-10-10 on branch `seo/australia-content-batches`. Nothing is committed or deployed. The audit, the 50-topic decision matrix, the cannibalisation notes and the briefs are in [`australia-batch-281-330-audit.md`](./australia-batch-281-330-audit.md).

No Search Console, analytics or keyword data was available. Every demand judgement is qualitative, and no volumes, rankings, traffic, prices or benchmarks are quoted.

## 1. Summary

| | Count |
|---|---|
| Topics reviewed | 50 |
| CREATE (new pages) | 13 (all generic slugs in Australian English, with Australian notes where they change advice) |
| UPDATE | 2 (325 cloud-cost-optimization-australia, 329 software-architecture-review) |
| Covered by existing pages | 33. Topics 303, 305 and 306 are covered as sections of the new 301 page |
| Deferred | 2 (326 multi-region architecture, 330 engineering productivity metrics) |
| Rejected | 0 |
| Merged / redirected / deleted URLs | 0 |
| Site total | 976 posts. 0 broken internal links; no duplicate titles, H1s or meta descriptions |

Most of the 50 topics, including all of mobile (except modernisation) and all of ecommerce (except Plus vs custom), already had dedicated owner pages. Creating them again would have produced near-duplicates.

## 2. New URLs

| Topic | URL | Category | File |
|---|---|---|---|
| 288 | /blogs/low-code-vs-custom-software | Web Development | `blog-data-au-build-decisions.ts` |
| 312 | /blogs/shopify-plus-vs-custom-ecommerce | Shopify & Ecommerce | `blog-data-au-build-decisions.ts` |
| 285 | /blogs/b2b-customer-onboarding-automation | AI & Automation | `blog-data-au-build-decisions.ts` |
| 299 | /blogs/mobile-app-modernization | Mobile Apps | `blog-data-au-build-decisions.ts` |
| 301 (+303, 305, 306) | /blogs/data-engineering-for-growing-businesses | Web Development | `blog-data-au-data-platforms.ts` |
| 302 | /blogs/data-warehouse-vs-data-lake-vs-lakehouse | Web Development | `blog-data-au-data-platforms.ts` |
| 304 | /blogs/master-data-management | Web Development | `blog-data-au-data-platforms.ts` |
| 308 | /blogs/cdp-vs-crm | Web Development | `blog-data-au-data-platforms.ts` |
| 309 | /blogs/predictive-analytics-vs-generative-ai | AI & Automation | `blog-data-au-data-platforms.ts` |
| 322 | /blogs/kubernetes-vs-serverless-vs-virtual-machines | Web Development | `blog-data-au-cloud-delivery.ts` |
| 323 | /blogs/infrastructure-as-code | Web Development | `blog-data-au-cloud-delivery.ts` |
| 327 | /blogs/secrets-management | Web Development | `blog-data-au-cloud-delivery.ts` |
| 328 | /blogs/zero-downtime-deployments | Web Development | `blog-data-au-cloud-delivery.ts` |

**Page format:**
- About 840–1,140 words each (full-page count) and 5 FAQs.
- Answer-first opening, key takeaways and decision tables.
- A labelled hypothetical example, common mistakes, related guides and a single CTA.
- Meta descriptions ≤158 characters; `<title>`s ≤55 characters.

**Balance and honesty:**
- The comparison pages (288, 312, 322, 302, 308, 309) say when each option fits and do not default to custom builds.
- 312 quotes no Shopify Plus price; the pricing page is localised and term-dependent.
- 322, 323 and 327 state that ZSpace does not offer managed cloud, DevOps retainers or security services.

## 3. Updated URLs

`updated` is set to 2026-10-10, and the sitemap lastmod reflects it.

| Topic | URL | Added |
|---|---|---|
| 325 | cloud-cost-optimization-australia | "Cost allocation and showback by product and team" covering tagging, account structure, shared costs, showback vs chargeback, unit costs, and AUD/GST reporting; plus an FAQ |
| 329 | software-architecture-review | "Finding single points of failure" checklist and "Prioritising reliability findings"; plus an FAQ |

## 4. Internal links

**New pages:** 6–10 contextual internal links each, plus service links. The new pages cross-link where they connect:
- data engineering ↔ warehouse/lake ↔ MDM ↔ CDP vs CRM
- IaC ↔ secrets ↔ zero-downtime ↔ K8s/serverless

**Back-links:** one sentence was added to the Conclusion of 12 owner pages.

| Owner page | → New page |
|---|---|
| workflow-automation | low-code-vs-custom-software |
| shopify-plus-development | shopify-plus-vs-custom-ecommerce |
| b2b-portal-development-australia | b2b-customer-onboarding-automation |
| mobile-app-maintenance | mobile-app-modernization |
| ai-data-engineering | data-engineering-for-growing-businesses |
| ecommerce-data-warehouse | data-warehouse-vs-data-lake-vs-lakehouse |
| customer-data-integration-australia | cdp-vs-crm |
| ecommerce-product-information-management | master-data-management |
| ai-readiness-assessment | predictive-analytics-vs-generative-ai |
| devops-for-growing-businesses | kubernetes-vs-serverless-vs-virtual-machines, infrastructure-as-code, zero-downtime-deployments |
| api-security-best-practices | secrets-management |
| feature-flag-implementation | zero-downtime-deployments |

**Updated pages:** the cloud-cost update links to infrastructure-as-code. The architecture review update links to business-continuity-digital-products-australia and application-monitoring-observability.

**`public/llms.txt`:** the 13 new guides were added to the Australian section's list of global guides.

## 5. Files

**New:**
- `src/lib/blog-data-au-build-decisions.ts`
- `src/lib/blog-data-au-data-platforms.ts`
- `src/lib/blog-data-au-cloud-delivery.ts`
- the audit and this report

**Modified:**
- `src/lib/blog-data.ts` (registration)
- updates: `au-engineering-ops`, `au-saas-engineering`
- back-links: `ai-core-3`, `commerce-60`, `au-portals`, `mobile-3`, `ai-ops-3`, `commerce-54`, `au-data-payments`, `commerce-73`, `ai-apps-9`, `au-engineering-ops`, `au-security-ops`, `au-saas-engineering`
- `public/llms.txt`

## 6. QA actually run

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | Clean |
| `npx eslint` on new files and `blog-data.ts` | Clean |
| Internal links across 976 posts | 0 broken |
| Duplicate titles, H1s and meta descriptions | None |
| Placeholder pattern (`body2` / `as never`) | None |
| Australian-spelling scan of new files | Clean; only URL slugs matched |
| `npm run build` | Succeeded; 2,986 static pages |
| Built HTML, 13 new + 2 updated pages | One H1, correct canonical, `index, follow`, no `[[` or `**` in visible HTML |
| JSON-LD in built HTML | All blocks parse. Each page has Organization, WebSite, BlogPosting, FAQPage (from visible FAQs) and BreadcrumbList |
| Sitemap | All 15 URLs present with lastmod 2026-10-10 |
| External URLs in new pages | All 14 returned 200 |

**Not performed:**
- Google Rich Results Test
- Lighthouse or performance checks
- Mobile layout and screen-reader testing
- Redirect checks (none were changed)
- Live deployment checks
- Human editorial review

## 7. Verified vs secondary

**Verified on primary pages (2026-10-10):**
- Google Play: target API 36 from 31 Aug 2026
- Apple: Xcode 26 / 26 SDKs since 28 Apr 2026
- AWS Lambda: 900 s timeout; 128–10,240 MB memory
- Kubernetes Deployment docs
- Martin Fowler on blue-green and canary releases
- OWASP Secrets Management Cheat Sheet
- GitHub secret scanning
- Iceberg and Delta Lake sites
- OAIC APPs
- 12factor config

**Secondary or general knowledge (hedged or general wording):**
- Terraform's move to the Business Source Licence in 2023, linked to the Terraform intro page, which may not state the licence. Confirm before promotion.
- OpenTofu governance.
- ABN Lookup capabilities.
- Spam Act transactional vs commercial distinction.
- ADM transparency commencement (10 Dec 2026, from earlier batches).
- Essential Eight and NAIC guidance are mentioned without links (sites blocked automated fetch).

## 8. Risks and follow-up

1. **Professional review** before promotion:
   - 285 (credit applications, privacy and credit-reporting rules, e-signatures)
   - 309 (ADM transparency wording)
2. Re-check the store SDK dates each year. The 299 page dates will go stale after the next yearly requirement change.
3. Deferred 326 and 330: revisit with Search Console data.
4. **Anchor spelling:** generic owner pages with US spelling now carry some Australian-spelled anchors (e.g. "mobile app modernisation"). This follows the convention used in earlier batches.
5. Batches 121–330 are all uncommitted on `seo/australia-content-batches`.

## 9. Publication order and monitoring

**Publication order:** one deploy is fine. If staging is needed:
1. 288, 312, 285 and 299
2. 301, 302, 304, 308 and 309
3. 322, 323, 327, 328 and the two updates

**Cannibalisation pairs to watch** in Search Console:
- `ai-data-engineering` vs `data-engineering-for-growing-businesses`
- `ecommerce-data-warehouse` vs `data-warehouse-vs-data-lake-vs-lakehouse`
- `customer-data-integration-australia` vs `cdp-vs-crm`
- `shopify-plus-vs-shopify` vs `shopify-plus-vs-custom-ecommerce`
- `devops-for-growing-businesses` vs `infrastructure-as-code` / `zero-downtime-deployments`

Track impressions, clicks, CTR, queries and indexing monthly, and judge results after 8–12 weeks. No ranking, traffic or AI-citation outcome is claimed or guaranteed.
