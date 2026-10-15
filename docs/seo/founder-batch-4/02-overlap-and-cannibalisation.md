# 02 — Batch 4 Overlap and Cannibalisation Report

Prepared 15 October 2026.

**Inventory.** `01-blog-inventory.csv` has 1,050 rows, with a `batch4_topic_overlap` column.

**Live site.** The live sitemap (checked 15 Oct 09:36 IST) still lists 1,030 articles; Batches 1–3 are not deployed.

**Method.** The same as earlier batches: intent similarity, shared 8-word sequences, body term cosine, and a manual read of H2s and FAQs.

## 1. Body overlap between existing pages Batch 4 touches

| Pair | 8-gram | Body cos | Reading |
|---|---|---|---|
| `custom-cms-vs-wordpress` ↔ `how-to-choose-a-cms` | 0.0% | 0.43 | Distinct; cross-link where useful. |
| `website-security-checklist` ↔ `secure-business-website-development` | 0.2% | 0.70 | Operate vs build stage; each page says so in an FAQ. Topic 63 adds a sign-off to the checklist only. |
| `website-security-checklist` ↔ `secure-web-application-development-australia` | 0.1% | 0.62 | Distinct; cross-link where useful. |
| `multi-tenant-saas-architecture` ↔ `saas-roles-and-permissions` | 0.0% | 0.39 | Distinct; cross-link where useful. |
| `app-store-optimization` ↔ `mobile-app-launch-checklist` | 0.0% | 0.36 | Distinct; cross-link where useful. |
| `mobile-app-payments` ↔ `payment-gateway-integration` | 0.7% | 0.66 | App vs website payments. Topic 68 adds app-specific gateway selection. |
| `shopify-subscription-store` ↔ `subscription-ecommerce-website` | 0.0% | 0.65 | Shopify vs platform-neutral. Keep. |
| `shopify-hydrogen-vs-traditional-shopify` ↔ `headless-shopify-explained` | 0.1% | 0.82 | **0.82: near-duplicate intent.** SHP-09 MERGE is pending an owner decision; topic 70 updates the comparison page and only corrects facts on the other. |
| `shopify-hydrogen-vs-traditional-shopify` ↔ `shopify-hydrogen` | 0.0% | 0.79 | Comparison vs Hydrogen how-to. Keep both; correct Hydrogen facts on both. |
| `shopify-product-page-audit` ↔ `shopify-product-page-optimization` | 0.0% | 0.78 | 0.78. Topic 71 makes the audit the checklist owner and trims the optimisation page's checklist to a link. |
| `shopify-product-page-optimization` ↔ `ecommerce-product-page-design` | 0.0% | 0.78 | 0.78: Shopify CRO vs platform-neutral design. Watch with data. |
| `how-to-conduct-a-ux-audit` ↔ `ux-audit` | 0.4% | 0.71 | 0.71: method vs what/why; already cross-linked. Keep. |
| `information-architecture` ↔ `website-navigation-and-ux` | 0.7% | 0.52 | Distinct; cross-link where useful. |
| `ecommerce-checkout-ux` ↔ `why-customers-abandon-checkout` | 7.4% | 0.80 | **7.4% shared 8-grams, 0.80 cosine: the highest copy overlap measured in any batch.** Topic 79 makes `why-customers-abandon-checkout` the audit page and keeps `ecommerce-checkout-ux` as the design guide. Consider a later wording pass on `ecommerce-checkout-ux` to remove the shared passages. |
| `ecommerce-checkout-ux` ↔ `shopify-checkout-audit` | 0.0% | 0.64 | Distinct; cross-link where useful. |
| `ecommerce-ab-testing-framework` ↔ `ecommerce-hypothesis-testing` | 0.0% | 0.58 | Distinct; cross-link where useful. |
| `ecommerce-ab-testing-framework` ↔ `ecommerce-experimentation-mistakes` | 0.1% | 0.75 | 0.75: standard vs pitfalls. Keep and cross-link. |
| `website-trust-and-credibility` ↔ `shopify-trust-optimization` | 2.6% | 0.62 | 2.6% shared 8-grams. Topic 78 rewrites the generic page, so the overlap falls. |

## 2. Proposed slugs not used

See the table in `03` (14 of the 20 proposed slugs map to existing or reserved URLs). Two of them already exist as live pages: `multi-tenant-saas-architecture` exactly, and `offline-…` as a 0.84 match.

## 3. Retired roadmap slugs

| Slug | Replaced by |
|---|---|
| `/blogs/web-app-hosting-running-costs` (WEB-15) | `/blogs/web-application-hosting-cost` |
| `/blogs/shopify-ga4-sales-mismatch` (SHP-29) | H2 inside `/blogs/shopify-analytics-tracking-audit` |
| `/blogs/how-to-measure-ux-improvements` (UX-28) | `/blogs/ux-metrics-beyond-conversion-rate` |

## 4. Cross-batch coordination

See `03` → "Cross-batch coordination". Seven page-level overlaps with the audit-only Batch 7–9 plans were found, and none has been implemented. Batch 4 goes first, and those batches must re-read the pages.

## 5. Accuracy problems found

Five pages, listed in `03`:

- the information-architecture URL FAQ;
- the shopify-checkout-audit checkout.liquid FAQ;
- Hydrogen framing on two pages, plus topic 70's page;
- shopify-analytics-guide sessions;
- the Play fee date on mobile-app-development-cost.
