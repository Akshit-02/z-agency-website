# 02 — Batch 2 Overlap and Cannibalisation Report

Prepared 14 October 2026.

**Inventory.** `01-blog-inventory.csv` has 1,037 rows: the 1,030 live articles plus the 7 Batch 1 articles, which exist only in the working tree. The new `batch2_topic_overlap` column marks the 44 articles relevant to topics 21–40.

**Method.** The same as Batch 1 (`../founder-batch-1/02-overlap-and-cannibalisation.md`):
- topic-to-article intent similarity;
- shared 8-word sequences (a test for copying);
- body term cosine (a test for the same subject matter);
- a manual read of each page's H2s and FAQs.

**Repository and live site.** The repository and live sitemap matched on 14 Oct (1,030 articles). Batch 1 is not yet deployed. No redirects exist for blog URLs (`next.config.ts` has none).

## 1. Body overlap between existing pages that Batch 2 touches

| Pair | 8-gram | Body cos | Reading |
|---|---|---|---|
| `shopify-funnel-audit` ↔ `shopify-conversion-funnel-optimization` | 0.0% | **0.75** | Same intent (find the stage losing sales). Already flagged as a MERGE on 13 Oct, and `shopify-funnel-audit` also has a factual error. **Re-raised for approval.** |
| `wholesale-ecommerce-website` ↔ `wholesale-ecommerce-ux` | 0.0% | 0.75 | Build vs UX framing. Watch with Search Console data; no action now. |
| `ecommerce-attribution` ↔ `ecommerce-attribution-models` | 0.1% | 0.71 | Overview vs model choice. Acceptable. Topic 39 is scoped to lead-gen so it does not become a third. |
| `landing-page-development` ↔ `shopify-landing-page-optimization` | 0.0% | 0.72 | Generic vs Shopify paid traffic. Topic 37 updates the generic page only. |
| `ecommerce-conversion-funnel` ↔ `shopify-conversion-funnel-optimization` | 0.0% | 0.68 | Platform-neutral vs Shopify. Keep both and cross-link. |
| `shopify-checkout-optimization` ↔ `shopify-plus-development` | 0.0% | 0.67 | Both contain checkout capability detail. Topic 32 becomes the single capability page; both are trimmed to summaries with links. |
| `website-api-integration` ↔ `website-api-integrations-list` | 0.0% | 0.64 | How-to vs catalogue. Topic 22 covers cost and scope only. |
| `migrating-to-shopify-guide` ↔ `ecommerce-platform-migration` | 0.1% | 0.64 | Shopify vs generic. Topic 29 is Woo-specific; the generic guide's Woo paragraph shrinks to a link. |
| `shopify-markets` ↔ `international-ecommerce-website-development` | 0.8% | 0.63 | Shopify-specific vs platform-neutral. Topic 30 updates `shopify-markets`. |
| `website-accessibility-guide` ↔ `accessible-ui-ux-design` | 0.7% | 0.61 | Build vs design. Topic 34 adds the audit checklist to the build guide only. |
| `migrating-to-shopify-guide` ↔ `ecommerce-data-migration` | 0.2% | 0.58 | Acceptable. |
| `website-requirements-document` ↔ `product-requirements-document` | 0.0% | 0.51 | Project scope vs per-feature PRD. Keep both and cross-link. |
| `mobile-app-data-privacy` ↔ `mobile-app-security` | 0.3% | 0.44 | Distinct. Keep separate. |
| `saas-product-design` ↔ `ecommerce-dashboard-design` | 0.0% | 0.41 | Distinct. Topic 35 fills the gap between them. |
| `mobile-app-testing` ↔ `mobile-app-release-management` | 0.0% | 0.32 | Distinct. Topic 27 covers v1 launch, which neither page serves. |

No pair is a copy: shared 8-word sequences are 0.0–0.8%.

## 2. Proposed slugs that would have cannibalised

| Proposed slug | Problem | Decision |
|---|---|---|
| `/blogs/saas-pricing-page-optimisation` | A spelling variant of the existing `/blogs/saas-pricing-page-optimization` | UPDATE the existing page |
| `/blogs/web-application-requirements-document` | Same intent as `/blogs/website-requirements-document` (0.39 top match, but identical purpose) | UPDATE |
| `/blogs/website-development-handover-checklist` | Same intent as `/blogs/software-vendor-handover-checklist` (0.70) | UPDATE |
| `/blogs/rebuild-vs-modernise-legacy-website` | Same decision as `/blogs/website-redesign-vs-rebuild` | UPDATE |
| `/blogs/does-mobile-app-need-custom-backend` | Answered in `/blogs/mobile-app-backend-development` (0.51) | UPDATE |
| `/blogs/mobile-app-privacy-security-checklist` | Would merge two distinct existing pages into a third | UPDATE privacy page |
| `/blogs/mobile-app-push-notification-strategy` | Same subject as `/blogs/mobile-app-push-notifications` | UPDATE |
| `/blogs/shopify-international-selling-checklist` | Same intent as `/blogs/shopify-markets` | UPDATE |
| `/blogs/usability-testing-before-redesign` | A use case of `/blogs/usability-testing` (0.62) | UPDATE |
| `/blogs/website-accessibility-audit-checklist` | Would become the seventh accessibility page | UPDATE `website-accessibility-guide` |
| `/blogs/improve-saas-user-onboarding-ux` | Same intent as `/blogs/saas-onboarding-optimization` (0.65) | KEEP + minor update |
| `/blogs/landing-page-search-intent-optimisation` | A refinement of `/blogs/landing-page-development` | UPDATE |
| `/blogs/ecommerce-funnel-abandonment-analysis` | Four existing pages already serve it | KEEP + citations |
| `/blogs/saas-dashboard-ux-best-practices` | Not a conflict, but the roadmap already reserved `/blogs/saas-dashboard-design` | CREATE under the reserved slug |

## 3. Conflicts with Batch 1 and the 200-topic roadmap (resolved)

| Conflict | Resolution |
|---|---|
| Topic 23 updates `website-redesign-vs-rebuild`, which Batch 1 marked KEEP (topic 15) | UX-03 becomes UPDATE. The staged-modernisation question was not answered there. |
| Topic 24 and roadmap WEB-29 (taking over a codebase) target the same page | One update covers both; WEB-29 is the row. |
| Topic 26 vs MOB-30 (security) | MOB-30 is widened to "privacy and security before launch". Privacy is done now; the security refresh later. |
| Topic 27 vs MOB-16 (closed testing) and MOB-27 (rejections) | The launch checklist is the hub; MOB-16 and MOB-27 remain narrow deep dives. |
| Topic 31 vs SHP-13 | Same row; the slug changes to `shopify-for-b2b-ecommerce`. |
| Topic 32 vs SHP-12 (checkout upgrade broke tracking) | SHP-12 stays a troubleshooting page. |
| Topic 33 vs UX-28 (measuring UX improvements) | 33 owns the test protocol; UX-28 owns business-metric attribution. |
| Topic 38 vs UX-27 (India dark patterns) | 38 covers pricing, trial and cancellation patterns only, and links to UX-27 for the full list. |
| Topic 39 vs CRO-15/16/17/18 | 39 is the hub. 17 (offline import) and 18 (consent) become narrow how-to pages; 15 (lead quality) and 16 (GA4 setup) are unchanged. |
| **Batch 1 roadmap error: CRO-12 and CRO-29 were the same intent** (show prices on a services website) | CRO-12 is retired and its slot reused for topic 39. CRO-29 stays. |

## 4. Accuracy problems found in existing pages (not overlaps, but within scope)

| Page | Problem | Source | Action |
|---|---|---|---|
| `shopify-plus-development` | Presents B2B as a Plus feature ("B2B on Plus" section and FAQ) | Shopify changelog, 2 Apr 2026: B2B on all plans | Correct the wording; no date change |
| `shopify-funnel-audit` | Describes a "product views" stage in Shopify's conversion funnel | Shopify Help: the report steps are sessions → added to cart → reached checkout → completed | Correct; no date change |
| `migrating-to-shopify-guide` | Password FAQ assumes "invite customers to reset passwords" | Shopify: legacy customer accounts deprecated 26 Feb 2026; new accounts use email codes | Correct alongside topic 29 |
| `shopify-checkout-optimization` | Plan table accurate but incomplete (pixels, customer-account extensions, Checkout Blocks, order value limits, per-market customisation, post-purchase caveats, end dates) | shopify.dev and the Shopify changelog | Trim to a summary that links to topic 32 |

| `b2b-ecommerce-website-development` | Says "contextual customization on Plus"; market-tailored B2B storefront and checkout is Advanced **and** Plus | Shopify changelog / Help | One-phrase correction; no date change |

Already correct and left alone: `shopify-plus-vs-shopify` and `wholesale-ecommerce-website`. Both already say B2B is available on all plans.
