# Blogs 331–380 (Australia): Implementation and QA Report

Implemented 2026-10-10 on branch `seo/australia-content-batches`. Nothing is committed or deployed. The baseline audit, the 50-topic decision matrix, the cannibalisation notes and the briefs are in [`australia-batch-331-380-audit.md`](./australia-batch-331-380-audit.md).

No Search Console, analytics or keyword data was available. Demand judgements are qualitative, and no volumes, rankings, traffic, prices or benchmarks are quoted.

## 1. Summary

| | Count |
|---|---|
| Topics reviewed | 50 |
| CREATE | 14 new pages covering 16 topics (344 work orders → 345; 370 point-to-point → 365) |
| UPDATE | 5 topics on 4 existing pages |
| Covered by existing pages | 23. Notably all ten AI product-engineering topics (331–340) |
| Deferred | 6 (346 DMS, 356 JTBD, 373 ADRs, 378 dependency upgrades, 379 risk registers, 380 delivery metrics) |
| Rejected | 0 |
| Merged / redirected / deleted URLs | 0 |
| Site total | 990 posts. 0 broken internal links; no duplicate titles, H1s or meta descriptions |

## 2. New URLs

| Topic | URL | Category | File |
|---|---|---|---|
| 341 | /blogs/supplier-portal-development | Web Development | `blog-data-au-business-systems.ts` |
| 345 (+344) | /blogs/asset-maintenance-management-software | Web Development | `blog-data-au-business-systems.ts` |
| 347 | /blogs/warranty-management-software-australia | Web Development | `blog-data-au-business-systems.ts` |
| 349 | /blogs/business-rules-engine | Web Development | `blog-data-au-business-systems.ts` |
| 376 | /blogs/technical-discovery-software-projects | Web Development | `blog-data-au-business-systems.ts` |
| 377 | /blogs/software-vendor-handover-checklist | Web Development | `blog-data-au-business-systems.ts` |
| 355 | /blogs/product-requirements-document | UI/UX | `blog-data-au-product-practice.ts` |
| 358 | /blogs/product-led-growth-b2b-saas | UI/UX | `blog-data-au-product-practice.ts` |
| 359 | /blogs/ux-debt | UI/UX | `blog-data-au-product-practice.ts` |
| 365 (+370) | /blogs/integration-architecture-patterns | Web Development | `blog-data-au-integration-arch.ts` |
| 362 | /blogs/api-versioning | Web Development | `blog-data-au-integration-arch.ts` |
| 367 | /blogs/oauth-vs-openid-connect | Web Development | `blog-data-au-integration-arch.ts` |
| 371 | /blogs/strangler-fig-pattern | Web Development | `blog-data-au-integration-arch.ts` |
| 372 | /blogs/modular-monolith-vs-microservices | Web Development | `blog-data-au-integration-arch.ts` |

**Page format:**
- About 760–910 words each (full-page count) and 5 FAQs.
- Answer-first opening, key takeaways and comparison or checklist tables.
- A labelled hypothetical example, common mistakes, related guides and one CTA.
- Meta descriptions ≤158 characters.
- These are somewhat shorter than earlier batches. They deliberately link into existing depth rather than repeating it.

**Accuracy and balance:**
- 347 is the only Australian-slug page, because the Australian Consumer Law changes the advice. It separates consumer guarantees from voluntary warranties, quotes the opening of the ACCC mandatory text, and says registration cannot be a condition of guarantee rights. It is marked as not legal advice.
- 372 recommends a modular monolith as the default and gives the conditions under which microservices make sense.
- 349 says when a rules engine is overkill.
- 358 says when PLG does not fit.
- 377 flags IP ownership as a contract and legal question.
- No page claims an Australian presence, clients or results.

## 3. Updated URLs

`updated` is set to 2026-10-10, and the sitemap lastmod reflects it.

| Topic | URL | Added |
|---|---|---|
| 348 | inventory-management-software-australia | "Demand forecasting and replenishment" plus an FAQ |
| 350 | business-intelligence-dashboards-australia | "Client and partner reporting portals" (row-level security, embedded BI, exports, privacy) plus an FAQ |
| 352 | user-research-methods | "Research for B2B and Complex Workflow Software" plus an FAQ. Keeps the page's existing style |
| 363 + 369 | api-integration-reliability | "Webhooks, polling or both" and "Testing integrations with third-party services", plus an FAQ |

## 4. Internal links

**New pages:** 5–10 contextual internal links each, plus service links. "Related guides" sections were added to the seven pages that had three or fewer links.

**Back-links:** one sentence was added to the Conclusion of 14 owner pages.

| Owner page | → New page |
|---|---|
| ai-procurement-automation | supplier-portal-development |
| field-service-management-software-australia | asset-maintenance-management-software |
| ecommerce-returns-australia | warranty-management-software-australia |
| insurance-claims-software-australia | business-rules-engine |
| software-product-discovery-australia | technical-discovery-software-projects |
| software-maintenance-contracts-australia | software-vendor-handover-checklist |
| website-requirements-document | product-requirements-document |
| saas-onboarding-optimization | product-led-growth-b2b-saas |
| ux-heuristic-evaluation | ux-debt |
| api-integration-australia | integration-architecture-patterns |
| api-documentation-best-practices | api-versioning |
| mobile-app-authentication | oauth-vs-openid-connect |
| legacy-software-modernization-australia | strangler-fig-pattern |
| ecommerce-microservices-vs-monolith | modular-monolith-vs-microservices |

**Updated pages** link to:
- predictive-analytics-vs-generative-ai
- customer-portal-development-australia
- automated-regression-testing
- api-versioning

**`public/llms.txt`:** 13 generic guides were added to the Australian section intro, plus one Australian entry (warranty management).

## 5. Files

**New:**
- `src/lib/blog-data-au-business-systems.ts`
- `src/lib/blog-data-au-product-practice.ts`
- `src/lib/blog-data-au-integration-arch.ts`
- the audit and this report

**Modified:**
- `src/lib/blog-data.ts` (registration)
- updates: `au-industry-1`, `au-operations`, `design`, `au-delivery-governance`
- back-links: `ai-apps-4`, `au-industry-1`, `au-retail-hospitality`, `au-industry-3`, `au-saas-product` (×2), `au-engineering-ops`, `webdev-2`, `design-4`, `au-trust`, `au-web-ops`, `mobile-4`, `au-business-software`, `commerce-44`
- `public/llms.txt`

## 6. QA actually run

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | Clean |
| `npx eslint` on new files and `blog-data.ts` | Clean |
| Internal links across 990 posts | 0 broken |
| Duplicate titles, H1s and meta descriptions | None |
| Placeholder pattern (`body2` / `as never`) | None |
| Australian-spelling scan of new files | Clean; only URL slugs matched |
| `npm run build` | Succeeded; 3,028 static pages |
| Built HTML, 14 new + 4 updated pages | One H1, correct canonical, `index, follow`, no `[[` or `**` in visible HTML |
| JSON-LD | Parses on all 18 pages: Organization, WebSite, BlogPosting, FAQPage (visible FAQs), BreadcrumbList |
| Sitemap | All 18 URLs present with lastmod 2026-10-10 |
| External URLs | 13 of 14 returned 200. RFC 9700 and 9745 timed out once and returned 200 on re-check. The ACCC warranties page returns 403 to automated requests (as in earlier batches) |

**Not performed:**
- Google Rich Results Test
- Lighthouse or performance checks
- Mobile layout and screen-reader testing
- Redirect checks (none were changed)
- Live deployment checks
- Human editorial review

## 7. Verified vs secondary

**Verified on primary pages (2026-10-10):**
- RFC 9745 (Deprecation header; Proposed Standard) and its relationship to RFC 8594 (Sunset)
- RFC 6749, RFC 7636 and RFC 9700
- OAuth 2.1 still an IETF draft
- OpenID Connect Core 1.0
- Stripe API versioning
- Google API design versioning
- Fowler's StranglerFigApplication, MonolithFirst and MicroservicePrerequisites
- OMG DMN
- The Payment Times Reporting Regulator site

**Secondary (search summaries, hedged in text):**
- ACCC mandatory warranty text and reg 90 (ACCC blocks fetch)
- Payment Times Reporting thresholds and 2024 amendments
- Modern Slavery Act reporting threshold
- WHS duties for plant (general wording)
- 1 July 2027 online cancellation reform (from batch 231–280 sources)

## 8. Risks and follow-up

1. **Legal review** before promotion:
   - 347 warranty: mandatory text and guarantee-rights wording
   - 341 supplier portal: Payment Times Reporting and modern slavery statements
   - 377 handover: IP and licensing
2. Open the ACCC warranties page in a browser to confirm the quoted opening sentence.
3. The deferred topics (346, 356, 373, 378, 379, 380) need demand evidence. Deferring 380 is consistent with deferring 330 in the previous batch.
4. The AI product-engineering cluster (331–340) is fully covered. Future batches proposing similar AI topics should be checked against the AI owner pages first.
5. Batches 121–380 are all uncommitted on `seo/australia-content-batches`.

## 9. Publication order and monitoring

**Publication order:** one deploy is fine. If staging is needed:
1. 376, 377, 341 and 347
2. 365, 362, 367, 371 and 372
3. 345, 349, 355, 358, 359 and the updates

**Cannibalisation pairs to watch** in Search Console:
- `ecommerce-microservices-vs-monolith` vs `modular-monolith-vs-microservices`
- `legacy-software-modernization-australia` vs `strangler-fig-pattern`
- `field-service-management-software-australia` vs `asset-maintenance-management-software`
- `website-requirements-document` vs `product-requirements-document`
- `api-integration-australia` vs `integration-architecture-patterns`

Track impressions, clicks, CTR, queries and indexing monthly, and judge results after 8–12 weeks. No ranking, traffic, conversion or AI-citation outcome is claimed.
