# 02 — Batch 3 Overlap and Cannibalisation Report

Prepared 15 October 2026.

**Inventory.** `01-blog-inventory.csv` has 1,044 rows: the 1,030 live articles plus 14 from Batches 1–2 that are not deployed. A `batch3_topic_overlap` column marks the articles relevant to topics 41–60.

**Live site.** The live sitemap (checked 14 Oct, 19:09 IST) still lists 1,030 articles, so neither earlier batch is deployed.

**Method.** Same as Batches 1 and 2: intent similarity; shared 8-word sequences (copying); body term cosine (same subject matter); a manual read of H2s and FAQs.

## 1. Body overlap between existing pages that Batch 3 touches

| Pair | 8-gram | Body cos | Reading |
|---|---|---|---|
| `how-to-choose-website-development-company` ↔ `how-to-choose-ecommerce-development-company` | 0.0% | 0.67 | Different buyers (website vs store). Keep. The 13 Oct audit flagged both as `best-*` merge destinations. |
| `how-to-choose-website-development-company` ↔ `web-development-company-australia` | 0.1% | 0.55 | Global vs AU. Topic 41 links out, does not repeat. |
| `website-replatforming` ↔ `website-redesign-vs-rebuild` | 0.0% | 0.52 | Platform change vs design/stage decision. Topic 44's scorecard stays on platform signals. |
| `mobile-app-maintenance` ↔ `mobile-app-development-cost` | 0.4% | 0.52 | Build vs run costs; both no-price. Cross-link. |
| `mobile-app-analytics` ↔ `product-analytics-implementation-australia` | 0.0% | 0.69 | Metrics for founders vs AU implementation. Acceptable. |
| `mobile-app-crash-reporting` ↔ `mobile-app-performance-optimization` | 0.4% | 0.39 | Distinct. 48 makes crash-reporting the diagnostic and removes the duplicate ANR FAQ. |
| `ecommerce-inventory-management-integration` ↔ `distributed-order-management` | 0.0% | 0.47 | Distinct. Topic 49 adds the missing Shopify-specific page. |
| `ecommerce-repeat-purchases` ↔ `ecommerce-customer-retention` | 0.0% | 0.65 | High (0.65). Watch with Search Console data. Topic 50 adds no page. |
| `ecommerce-repeat-purchases` ↔ `ecommerce-reorder-experience` | 0.1% | 0.65 | High (0.65). Same, so the Shopify 'Buy again' section goes into reorder-experience only. |
| `ecommerce-returns-management` ↔ `ecommerce-exchange-management` | 0.2% | 0.55 | Distinct. Both get Shopify corrections. |
| `ecommerce-returns-management` ↔ `ecommerce-returns-ux` | 0.2% | 0.71 | High (0.71): system vs UX framing. Watch with data; no action now. |
| `ecommerce-platform-migration-checklist` ↔ `ecommerce-migration-testing` | 0.0% | 0.57 | Prepare vs test. Topic 52 adds post-launch testing to the testing page. |
| `design-handoff` ↔ `design-systems-for-teams-that-move-fast` | 0.3% | 0.61 | Distinct. Topic 53 links its readiness check to the Batch 1 page instead of duplicating it. |
| `responsive-ui-design` ↔ `how-to-make-a-website-mobile-friendly` | 0.0% | 0.55 | Planning vs fixing. Keep both. |
| `usability-testing` ↔ `wireframing-vs-prototyping` | 0.0% | 0.40 | Distinct. Topic 55 sits between them as the prototype-testing method. |
| `landing-page-development` ↔ `why-is-my-website-not-converting` | 0.0% | 0.42 | Distinct. Topic 57 adds a link, not a page. |
| `ecommerce-experiment-prioritization` ↔ `ecommerce-ab-testing` | 0.0% | 0.59 | Prioritisation vs method. Keep. |
| `shopify-mobile-cro` ↔ `shopify-mobile-cro-audit` | 0.0% | 0.80 | **0.80, the highest in this batch.** Topic 60 removes the audit page's fix checklists (now links) and makes it a diagnosis, separating the intents. |
| `shopify-mobile-cro` ↔ `mobile-ecommerce-ux` | 0.0% | 0.68 | Shopify fixes vs platform-neutral design. Keep. |

No pair is a copy: the highest shared 8-word share is 0.4%.

## 2. Proposed slugs that would have cannibalised

| Proposed slug | Problem | Decision |
|---|---|---|
| `/blogs/ecommerce-platform-migration-checklist` | **Already exists** (906 words) | Not created. The post-launch gap goes into `ecommerce-migration-testing` |
| `/blogs/how-to-choose-web-development-agency` | Same intent as `how-to-choose-website-development-company` | UPDATE |
| `/blogs/when-to-upgrade-website-platform` | Same intent as `website-replatforming` | UPDATE |
| `/blogs/mobile-app-maintenance-cost` | Same intent as `mobile-app-maintenance` (no prices policy) | UPDATE |
| `/blogs/mobile-app-metrics-for-startups` | Same intent as `mobile-app-analytics` (0.54) | UPDATE |
| `/blogs/mobile-app-crashes-performance-troubleshooting` | Same intent as `mobile-app-crash-reporting` (0.74) | UPDATE + retitle |
| `/blogs/shopify-repeat-purchase-experience` | Five existing repeat-purchase pages (0.52–0.60) | KEEP + minor |
| `/blogs/shopify-returns-exchanges-process` | Covered by returns-management + exchange-management | Minor UPDATE + corrections |
| `/blogs/ui-ux-design-handoff-checklist` | Same intent as `design-handoff` (0.61) | UPDATE |
| `/blogs/responsive-website-design-planning` | Same intent as `responsive-ui-design` (0.58) | UPDATE |
| `/blogs/maintain-website-ui-consistency` | Weak demand; adjacent to the design-systems page | UPDATE recommended (CREATE as an alternative) |
| `/blogs/why-landing-pages-do-not-convert` | Covered by `landing-page-development` (Batch 2) and the Batch 1 diagnostic | KEEP + minor |
| `/blogs/prioritise-cro-experiments` | Same intent as `ecommerce-experiment-prioritization` | UPDATE |
| `/blogs/mobile-ecommerce-conversion-optimisation` | Four mobile ecommerce pages exist | UPDATE `shopify-mobile-cro-audit` |
| `/blogs/fixed-price-vs-time-and-materials-development`, `/blogs/prevent-scope-creep-web-development` | Not conflicts, but the roadmap had reserved shorter slugs | CREATE under the reserved slugs |

## 3. Conflicts with Batches 1–2 and the roadmap (resolved)

| Conflict | Resolution |
|---|---|
| Topic 41 vs the pending `best-*-in-india` MERGE (global audit F2) | The update is vendor-neutral. The existing links to `best-web-development-agencies-in-india` are left untouched until the owner decides |
| Topic 43 vs Batch 2 `website-requirements-document` | The requirements doc owns the pre-contract baseline; topic 43 owns change during delivery |
| Topic 53 vs Batch 1 `how-much-ux-design-before-development` (ready-to-build checklist) | Topic 53 links to it and does not add a second definition of ready. UX-16 is retargeted from `ux-design-process` to `design-handoff` |
| Topic 55 vs roadmap UX-20 | UX-20 is absorbed; slug `clickable-prototype-before-building` is retired |
| Topic 58 vs roadmap CRO-15 and the Batch 2 measurement hub | CRO-15 is absorbed; slug `measure-website-lead-quality` is retired. The hub (attribution) and topic 58 (quality diagnosis) link both ways |
| Topic 57 vs Batch 2 `landing-page-development` | KEEP; one FAQ and one link only |
| Topic 48 vs `mobile-app-performance-optimization` | Crash-reporting becomes the diagnostic; the performance page stays the fix guide and drops its duplicate ANR FAQ |

## 4. Accuracy problems found in existing pages

Six problems, listed in `03` (summary). The "product views" funnel error has now been found in **five** articles:
- two fixed in Batch 2;
- `shopify-mobile-cro-audit`, found in research;
- `shopify-conversion-funnel-optimization` and `shopify-product-page-optimization`, found by a corpus-wide search on 15 Oct.

Two further mentions (`shopify-collection-page-seo`, `shopify-homepage-audit`) say "Shopify Analytics or GA4". They do not claim the funnel report has the step, and a product-view cut is possible with ShopifyQL, so they are left as they are.
