# 05 — Batch 3 Implementation, Metadata, Linking and QA

Implemented and validated on 15 October 2026 in the working tree on `master`, on top of the uncommitted Batch 1 and Batch 2 changes. **Not committed and not deployed.**

**Owner approval (15 Oct 2026):**
- Implement everything planned in `03`.
- For topic 56, update the existing design-systems page rather than create a new one.

## 1. What changed

### New articles (6)

| # | URL | Category | Data file |
|---|---|---|---|
| 42 | `/blogs/fixed-price-vs-time-and-materials` | Web Development | `src/lib/blog-data-founder-3-build.ts` |
| 43 | `/blogs/scope-creep-software-projects` | Web Development | same |
| 47 | `/blogs/improve-mobile-app-retention` | Mobile Apps | `src/lib/blog-data-founder-3-growth.ts` |
| 58 | `/blogs/improve-website-lead-quality` | CRO | same |
| 49 | `/blogs/shopify-multi-location-inventory-management` | Shopify & Ecommerce | `src/lib/blog-data-founder-3-ops.ts` |
| 55 | `/blogs/test-website-prototype-before-development` | UI/UX | same |

The three files are registered in `src/lib/blog-data.ts` (3 imports + 3 spreads). No routes, components, config or dependencies changed.

### Substantial updates (10)

All ten keep their URL and original `date`, and set `updated: "2026-10-15"`.

| # | URL | Main change |
|---|---|---|
| 41 | `how-to-choose-website-development-company` | Pass/fail gates plus a weighted scorecard; due-diligence questions with the evidence to ask for; reference-call script; red-flags table. New H1. The `best-web-development-agencies-in-india` link and `relatedSlugs` are **left untouched** (owner decision pending). |
| 44 | `website-replatforming` | 10-row "outgrown" diagnostic scored 0–2 with score bands; dated end-of-life table (Drupal 10 on 9 Dec 2026, PHP 8.2 on 31 Dec 2026, Adobe Commerce 2.4.6 on 11 Aug 2026). New H1. |
| 45 | `mobile-app-maintenance` | 11-row maintenance worksheet; annual compliance calendar; corrected Play target-API FAQ; budget FAQ rewritten around effort drivers (no prices). |
| 46 | `mobile-app-analytics` | Five-stage founder measurement framework with verified definitions; "no reliable benchmark" section; monthly review. |
| 48 | `mobile-app-crash-reporting` | Retitled as a founder's diagnostic guide: symptom triage table, Android vitals thresholds and wording, iOS hangs, watchdog and MetricKit. States that Apple publishes no ranking penalty. |
| 53 | `design-handoff` | Deliverables matrix by project type (13 × 4); handoff sign-off gate; Figma Dev Mode and Code Connect plan facts. Links to the Batch 1 ready-to-build checklist rather than repeating it. New H1. |
| 54 | `responsive-ui-design` | Four-part planning kit; WCAG 1.4.10 and 2.5.8 quoted; container queries; dated StatCounter shares with caveats. Unverifiable Apple and Material touch-target figures dropped. New H1. |
| 56 | `design-systems-for-teams-that-move-fast` | "When should a startup invest?" stage table; "Fixing an inconsistent website" (interface inventory, consolidation sheet, CMS block library, light governance); DTCG 2025.10 fact. |
| 59 | `ecommerce-experiment-prioritization` | Traffic-finishability check; scoring worksheet; lead-gen section; corrected PIE, ICE and PXL attributions. Retitled to the topic-59 question (please confirm). |
| 60 | `shopify-mobile-cro-audit` | Rebuilt as a seven-step device-by-stage diagnosis. **Corrected** the "product views by device" claim. Fix checklists replaced with links to `shopify-mobile-cro`. New H1. |

### Minor updates and corrections (no date change)

| Page | Change |
|---|---|
| `ecommerce-reorder-experience` (50) | "Buy Again on Shopify" section (new customer accounts, Shop, Subscriptions; verified) |
| `shopify-subscription-store` | **Correction:** gateway list now includes Adyen (existing approval only) and Stripe (select merchants); notes that Shopify Payments is not available in India |
| `ecommerce-returns-management` (51) | Shopify section rewritten: self-serve returns, return rules, **US-only label creation**, native store credit (not on legacy accounts) |
| `ecommerce-exchange-management` | **Correction:** exchanges available to all merchants since 28 Feb 2024; Shopify does not reserve exchange stock until the return is processed |
| `ecommerce-migration-testing` (52) | 72-hour check-and-rollback plan; 30-day operational reconciliation; generic test-payments FAQ |
| `migrating-to-shopify-guide` (52) | Step 7: Shopify's test payment gateway mechanics and redirect limits ("Bogus Gateway" described as the name in older guides, because Shopify does not confirm a rename) |
| `landing-page-development` (57) | One FAQ on why visitors leave, plus a link to the traffic/UX diagnostic |
| `mobile-app-performance-optimization` | Duplicate ANR FAQ removed; diagnosis now links to the crash guide |
| `shopify-conversion-funnel-optimization` (2 places), `shopify-product-page-optimization` | **Correction:** Shopify's conversion rate breakdown has no product-view step |
| `ux-design-process` | One link to the design-handoff deliverables matrix |
| `software-development-company-uae`, `custom-software-development-uk` | One link each to the new contract-models guide |
| `saas-pricing-page-optimization` (Batch 2 page) | Excerpt shortened so the full meta description renders |

### Backlinks added (17; no date changes)

| From | To |
|---|---|
| `technical-discovery-software-projects`, `user-acceptance-testing-business-software`, `website-requirements-document` | `scope-creep-software-projects` |
| `software-development-company-uae`, `custom-software-development-uk` | `fixed-price-vs-time-and-materials` |
| `mobile-app-push-notifications`, `reducing-saas-churn`, `what-a-good-mobile-app-onboarding-actually-does` | `improve-mobile-app-retention` |
| `improve-website-enquiry-form-conversions`, `measure-multi-channel-website-conversions`, `ai-lead-qualification` | `improve-website-lead-quality` |
| `ecommerce-inventory-management-integration`, `distributed-order-management`, `oms-vs-ims` | `shopify-multi-location-inventory-management` |
| `how-much-ux-design-before-development`, `wireframing-vs-prototyping` | `test-website-prototype-before-development` |
| `shopify-mobile-cro` | `shopify-mobile-cro-audit` (now a diagnosis page) |
| `how-to-make-a-website-mobile-friendly` | `responsive-ui-design` |

New and updated pages also link to each other, and to Batch 1–2 pages where relevant.

## 2. Metadata summary (rendered from the production build)

| URL | Type | H1 | Title (chars) | Desc | Words | Ext. sources | FAQs | Published / Modified |
|---|---|---|---|---|---|---|---|---|
| `fixed-price-vs-time-and-materials` | New | Fixed Price vs Time and Materials: Which Contract Model Suits Your Development Project? | Fixed Price vs Time and Materials: Which to Choose — ZSpace Labs (64) | 150 | ~3,645 | 4 | 6 | 2026-10-15 / 2026-10-15 |
| `improve-mobile-app-retention` | New | How to Improve Mobile App Retention Without Relying on Discounts or Constant Notifications | How to Improve Mobile App Retention Without Discounts — ZSpace Labs (67) | 157 | ~3,192 | 6 | 5 | 2026-10-15 / 2026-10-15 |
| `scope-creep-software-projects` | New | Why Web Development Projects Go Over Budget, and How to Control Scope Creep | Scope Creep in Software Projects: How to Control It — ZSpace Labs (65) | 158 | ~2,965 | 6 | 6 | 2026-10-15 / 2026-10-15 |
| `improve-website-lead-quality` | New | How to Improve Lead Quality When Your Website Enquiries Never Convert | How to Improve Website Lead Quality — ZSpace Labs (49) | 154 | ~3,226 | 8 | 5 | 2026-10-15 / 2026-10-15 |
| `test-website-prototype-before-development` | New | How to Test a Website Prototype Before Committing to Full Development | How to Test a Website Prototype Before Development — ZSpace Labs (64) | 149 | ~2,693 | 11 | 5 | 2026-10-15 / 2026-10-15 |
| `shopify-multi-location-inventory-management` | New | How to Manage Shopify Inventory Across Multiple Warehouses and Sales Channels | Shopify Multi-Location Inventory: A Practical Guide — ZSpace Labs (65) | 158 | ~3,486 | 18 | 6 | 2026-10-15 / 2026-10-15 |
| `design-systems-for-teams-that-move-fast` | Updated | Design Systems: What They Are and Why Products Need Them | Design Systems: What They Are and Why Products Need Them — ZSpace Labs (70) | 158 | ~2,630 | 9 | 13 | 2025-12-15 / 2026-10-15 |
| `shopify-mobile-cro-audit` | Updated | How to Diagnose Mobile Ecommerce Conversion Problems From Product Page to Checkout | How to Diagnose Mobile Ecommerce Conversion Problems — ZSpace Labs (66) | 146 | ~2,652 | 8 | 8 | 2026-08-28 / 2026-10-15 |
| `how-to-choose-website-development-company` | Updated | How to Choose a Website Development Company: Scorecard, Due-Diligence Questions and Red Flags | How to Choose a Website Development Company — ZSpace Labs (57) | 158 | ~3,668 | 6 | 12 | 2026-09-19 / 2026-10-15 |
| `website-replatforming` | Updated | Website Replatforming: How to Tell If You've Outgrown Your Platform | Website Replatforming: Have You Outgrown Your Platform? — ZSpace Labs (69) | 160 | ~2,933 | 10 | 11 | 2026-09-24 / 2026-10-15 |
| `mobile-app-maintenance` | Updated | Mobile App Maintenance: What Happens After Launch? | Mobile App Maintenance After Launch: What Recurs — ZSpace Labs (62) | 156 | ~3,645 | 12 | 12 | 2026-09-25 / 2026-10-15 |
| `mobile-app-analytics` | Updated | Mobile App Analytics: What Events and Metrics Should You Track? | Mobile App Metrics to Track After Launch — ZSpace Labs (54) | 160 | ~2,963 | 9 | 10 | 2026-09-25 / 2026-10-15 |
| `mobile-app-crash-reporting` | Updated | Why Is Your App Crashing or Running Slowly? A Founder's Diagnostic Guide | App Crashing or Slow? A Founder's Diagnostic Guide — ZSpace Labs (64) | 158 | ~3,110 | 13 | 12 | 2026-09-25 / 2026-10-15 |
| `responsive-ui-design` | Updated | Responsive Website Design: How to Plan for Mobile, Tablet and Desktop | How to Plan Responsive Design for Mobile, Tablet, Desktop (57) | 158 | ~2,810 | 8 | 10 | 2026-09-25 / 2026-10-15 |
| `design-handoff` | Updated | Design Handoff: What a Designer Should Deliver Before Developers Start Building | Design Handoff: What Designers Should Deliver to Developers (59) | 157 | ~3,524 | 5 | 12 | 2026-09-25 / 2026-10-15 |
| `ecommerce-experiment-prioritization` | Updated | How to Prioritise CRO Experiments When You Have More Ideas Than Time | How to Prioritise CRO Experiments: Scoring Worksheet — ZSpace Labs (66) | 157 | ~2,938 | 4 | 11 | 2026-09-29 / 2026-10-15 |


**Every page above has:**
- one H1;
- a self-referencing canonical;
- valid BlogPosting JSON-LD, with the headline matching the H1 and correct dates;
- a 4-item BreadcrumbList;
- FAQPage markup whose questions are visible on the page (verified).

Author: the Organization, unchanged. CTAs use the existing `/contact?src=` pattern, and the target returns 200. No analytics code was touched.

## 3. QA and validation results

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| `npx eslint src` | 0 errors; 9 pre-existing warnings (unchanged) |
| `npx next build` | Pass; 3,208 static outputs (Batch 2: 3,190; +18 = 6 articles × 3) |
| Automated tests | None exist in the repo |
| Full sitemap crawl (local production build) | **1,082 URLs**: 1,062 live, plus 7 + 7 + 6 from the three batches. 0 non-200, 0 H1 problems, 0 duplicate titles, 0 duplicate descriptions, 0 canonical problems, 0 noindex, 0 invalid JSON-LD, 0 images without alt. 1,090 internal link targets, 0 broken |
| Sitemap / robots | All 6 new URLs in the sitemap; robots.txt unchanged |
| Mobile (Chrome headless, 390 px), all **45** touched pages | No horizontal overflow; every table is in a scroll container |
| Raw markup in rendered text | None on the 45 pages |
| Data validator, whole corpus | 0 errors in Batch 3 pages; the one pre-existing issue (`llms-txt`) is untouched |
| Claims scan | Clean. Percentages are cited thresholds, dated StatCounter shares, labelled suggested weights or labelled hypothetical arithmetic (re-checked). No prices or money figures appear in Batch 3 text. |

**Fixed during QA:**
- Four excerpts were over 160 characters. The site's `metaDescription()` truncated them to their first sentence, so the rendered descriptions were short. They were rewritten to ≤160 characters and now render in full: `improve-website-lead-quality`, `responsive-ui-design`, `shopify-mobile-cro-audit` and the Batch 2 page `saas-pricing-page-optimization`.

**Observed, not changed (site-wide):**
- `readingTime` is inconsistent across the corpus. 565 of 1,050 articles differ by 3 minutes or more from a 230-words-per-minute estimate, most of them pre-existing and overstated.
- A few pages edited in Batches 2–3 (e.g. `ecommerce-migration-testing`, `mobile-app-performance-optimization`) keep their overstated original values, because they were minor edits.
- Recommendation: one sitewide pass, either computing `readingTime` from content or recalculating each value.

**Not checked:** Search Console URL Inspection, Rich Results Test, GA4 DebugView and field Core Web Vitals. These need a deployment, and a build does not show indexing, ranking or AI-answer inclusion.

## 4. For human review before deploying

1. **Read the 6 new articles and 10 substantial updates.** They were drafted by AI, with time-sensitive facts checked against primary sources on 15 Oct 2026.
2. **Changed H1s:**
   - `how-to-choose-website-development-company`
   - `website-replatforming`
   - `mobile-app-crash-reporting`
   - `design-handoff`
   - `responsive-ui-design`
   - `ecommerce-experiment-prioritization` (retitled to cover all CRO, not just ecommerce; please confirm)
   - `shopify-mobile-cro-audit`

   URLs are unchanged.
3. **Editorial aids, labelled in the text:**
   - the agency scorecard weights;
   - the replatforming score bands;
   - the dashboard-style scoring and go/no-go rules in the prototype guide;
   - the CMS block counts (heuristics);
   - the ShopifyQL example query, which says to check syntax in your admin;
   - the 0–2 scorecards.
4. **Time-sensitive facts:**
   - React Native version statuses (0.88 was due 12 Oct but not yet listed as current on 15 Oct);
   - Android developer verification rollout;
   - Shopify Stocky and transfer changes;
   - Figma plan availability (Figma's page is undated);
   - Drupal 12 timing.

   Re-check these at publication.
5. **Source conflicts noted in the articles:**
   - Shopify uses both "primary location" and "default location" for return labels;
   - the Shopify Sidekick prompt (availability may vary).
6. **Still open from earlier batches:**
   - the `best-*` listicle decision (topic 41 depends on it);
   - the `why-is-my-website-not-converting` merge;
   - author bylines;
   - the bulk-publishing pause;
   - committing Batches 1–3 (66 changed or new paths).
