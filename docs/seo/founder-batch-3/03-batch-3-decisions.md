# 03 — Batch 3 (Topics 41–60): Topic-by-Topic Decisions

Decided 15 October 2026 (IST). Research ran on 14–15 Oct 2026; all sources are in `research/`.

**Evidence base:**
- similarity scoring of each topic against all 1,044 articles in the working tree (1,030 live, plus the 14 Batch 1 and Batch 2 articles, which are not yet deployed)
- a manual read of the H2s and FAQs of every overlapping article
- the master 200-topic roadmap
- five primary-source research files

**Limits:** there is no Search Console, GA4 or keyword data, so priorities are qualitative. Reddit and People Also Ask were unreachable, and SERPs were observed from the US only.

## Summary

| # | Working title | Decision | URL that serves the intent | Roadmap row | Priority |
|---|---|---|---|---|---|
| 41 | Choosing a web development agency | **UPDATE** | `/blogs/how-to-choose-website-development-company` | WEB-22 | P1 |
| 42 | Fixed price vs time and materials | **CREATE** | `/blogs/fixed-price-vs-time-and-materials` (roadmap slug) | WEB-14 | P1 |
| 43 | Budget overruns and scope creep | **CREATE** | `/blogs/scope-creep-software-projects` (roadmap slug) | WEB-19 | P1 |
| 44 | Has your business outgrown its website platform? | **UPDATE** | `/blogs/website-replatforming` | WEB-37 (replaced) | P2 |
| 45 | Mobile app maintenance after launch | **UPDATE** (+ wording fix) | `/blogs/mobile-app-maintenance` | MOB-32 | P1 |
| 46 | App metrics founders should track | **UPDATE** | `/blogs/mobile-app-analytics` | MOB-35 | P2 |
| 47 | Improving app retention without discounts or constant notifications | **CREATE** | `/blogs/improve-mobile-app-retention` | MOB-25 (replaced) | P2 |
| 48 | Why is your app crashing or slow? | **UPDATE** (retitle) | `/blogs/mobile-app-crash-reporting` | MOB-28 | P2 |
| 49 | Shopify inventory across warehouses and channels | **CREATE** | `/blogs/shopify-multi-location-inventory-management` | SHP-15 (UPDATE → CREATE) | P1 |
| 50 | Repeat-purchase experience on Shopify | **KEEP + minor update** | `/blogs/ecommerce-repeat-purchases` and related pages; "Buy again" section on `/blogs/ecommerce-reorder-experience` | SHP-45 (replaced) | P3 |
| 51 | Shopify returns and exchanges | **Minor UPDATE + corrections** | `/blogs/ecommerce-returns-management`, `/blogs/ecommerce-exchange-management` | SHP-33 (replaced) | P2 |
| 52 | What to test before and after a migration | **Minor UPDATE** | `/blogs/ecommerce-migration-testing` (+ Shopify test mechanics in `/blogs/migrating-to-shopify-guide`) | SHP-32 (replaced) | P2 |
| 53 | What designers deliver before development | **UPDATE** | `/blogs/design-handoff` | UX-16 (retargeted) | P2 |
| 54 | Planning responsive design | **UPDATE** | `/blogs/responsive-ui-design` | UX-30 (replaced) | P2 |
| 55 | Testing a prototype before full development | **CREATE** | `/blogs/test-website-prototype-before-development` | UX-20 (slug changed) | P2 |
| 56 | Fixing an inconsistent website UI | **UPDATE** (recommended; CREATE is the alternative) | `/blogs/design-systems-for-teams-that-move-fast` | UX-04 (KEEP → UPDATE) | P3 |
| 57 | Why visitors leave a landing page | **KEEP + minor update** | `/blogs/landing-page-development` | CRO-10 (note) | P3 |
| 58 | Improving lead quality | **CREATE** | `/blogs/improve-website-lead-quality` | CRO-15 (slug changed) | P1 |
| 59 | Prioritising CRO experiments | **UPDATE** | `/blogs/ecommerce-experiment-prioritization` | CRO-02 (KEEP → UPDATE) | P2 |
| 60 | Diagnosing mobile ecommerce conversion | **UPDATE** (+ correction) | `/blogs/shopify-mobile-cro-audit` | CRO-31 (replaced) | P2 |

**Totals:**

| Decision | Count | Topics |
|---|---|---|
| CREATE | 6 | 42, 43, 47, 49, 55, 58 |
| Substantial UPDATE | 10 | 41, 44, 45, 46, 48, 53, 54, 56, 59, 60 |
| Minor update or KEEP | 4 | 50, 51, 52, 57 |
| MERGE / DEFER | 0 | |

Four proposed slugs were not used:

| Topic | Proposed slug | Why it was not used |
|---|---|---|
| 42 | `fixed-price-vs-time-and-materials-development` | The roadmap had already reserved `/blogs/fixed-price-vs-time-and-materials`, which also covers app builds |
| 43 | `prevent-scope-creep-web-development` | The roadmap had already reserved `/blogs/scope-creep-software-projects` |
| 52 | `ecommerce-platform-migration-checklist` | **The page already exists**; the gap is post-launch testing, which belongs on the testing page |
| Roadmap UX-20, CRO-15 | `clickable-prototype-before-building`, `measure-website-lead-quality` | Retired. The broader Batch 3 pages (55, 58) answer both questions |

**Accuracy corrections found during research** (no `updated` date change):

| Page | Problem | Source |
|---|---|---|
| `shopify-mobile-cro-audit` | Says Shopify Analytics shows "product views" by device. The default funnel has no product-view step; that cut needs ShopifyQL or GA4. | Shopify Help |
| `mobile-app-maintenance` | FAQ says Play "limits visibility" of apps with old target APIs. The actual rule: existing apps below the target level are shown only to users on Android versions at or below the app's target. | Google Play target API policy |
| `ecommerce-returns-management` | The Shopify section implies return labels and store credit work everywhere. Shopify-generated return labels need a US default location; store credit is native but needs new customer accounts. | Shopify Help |
| `ecommerce-exchange-management` | Advises reserving stock for exchanges. Shopify does not reserve exchange stock until the return is processed. | Shopify Help |
| `shopify-subscription-store` | Gateway list is out of date: it is missing Adyen (existing Adyen approval only) and Stripe (select merchants), and does not say Shopify Payments is unavailable in India. | Shopify Help |
| `mobile-app-performance-optimization` | Duplicates the ANR FAQ now owned by topic 48's page | Overlap |
| `shopify-conversion-funnel-optimization` (2 places), `shopify-product-page-optimization` (1 place) | Say Shopify's conversion rate breakdown report includes a product-view step. It does not (sessions → cart additions → reached checkout → completed). Found by a corpus-wide search on 15 Oct. | Shopify Help (verified in Batch 2) |

---

## Full-stack development

### 41. Choosing an agency: UPDATE `how-to-choose-website-development-company`
- **Founder question.** "How do I compare agencies when every proposal sounds the same, and what should I ask before signing?" This is a vendor-selection question with high commercial intent.
- **Existing page.**
  - 957 words, no sources; most sections are one or two sentences.
  - Regional pages (`web-development-company-australia`, `-dubai`, `software-development-company-uae`) are linked, not repeated.
- **Add:**
  - a two-part scorecard:
    - pass/fail gates: ownership, named builders, a technical walkthrough, written change control and acceptance;
    - weighted criteria;
  - the technical due-diligence questions (WEB-22), with the evidence to ask for;
  - a reference-call script;
  - a red-flags table.
- **Sources.**
  - UK Software Security Code of Practice (14 principles, voluntary, 7 May 2025).
  - OWASP SAMM and ASVS 5.0.0.
  - UK Digital, Data and Technology (DDaT) Playbook: evaluate on value, not just cost.
  - DOS (Digital Outcomes and Specialists) buyer guidance is withdrawn (31 Dec 2025) and is cited only as historical.
  - Escrow is mentioned only generically, because the only sources are vendors.
- **Neutrality constraint.** The page's Quick answer and `relatedSlugs` link to `best-web-development-agencies-in-india`. That page is a pending MERGE source (global audit F2), so **those links are left untouched**, and the new content is vendor-neutral.
- **Service / CTA.** `/services/website-development`; "Get a proposal reviewed".

### 42. Fixed price vs time and materials: CREATE `fixed-price-vs-time-and-materials`
- **Why a new page.** No page answers this; it appears only in four regional FAQs, which will link to the new page.
- **Focus.** Governance and risk allocation, not cost:
  - change control;
  - capped T&M, where the supplier finishes at its own cost after the cap (withdrawn UK payment guidance, cited as such);
  - milestone payments that are not tied to process activity;
  - acceptance and Definition of Done;
  - exit without termination costs.

  Main source: the UK government "Contracting for Agile" guidance note.
- **Original asset.** A clause checklist that applies to any model, plus a model-choice decision table.
- **Pricing.** No prices.
- **Scope.** Covers web and app builds (absorbs the old MOB-14 angle).

### 43. Scope creep: CREATE `scope-creep-software-projects`
- **Why a new page.** No existing page covers change control *during* delivery. The split with neighbouring pages:
  - `website-requirements-document` owns the pre-contract baseline (updated in Batch 2);
  - `user-acceptance-testing-business-software` owns defects vs changes;
  - this page owns the change process in between.
- **Original assets.** A scope-baseline checklist, and a change-request template with a change log.
- **Sources.**
  - GOV.UK guidance on deciding priorities (MoSCoW) and on agile planning.
  - The PMI definition and the PMI 2018 figure (52% of projects had scope creep) are **unverified**, because pmi.org was blocked. Use them only if verified at writing.
  - Standish CHAOS figures are excluded: no primary source.

### 44. Outgrown your platform: UPDATE `website-replatforming`
- **Add.**
  - A 10-row "outgrown" diagnostic scored 0–2, with score bands.
  - A dated end-of-life table, verified today:
    - Drupal 7 ended 5 Jan 2025; **Drupal 10 ends 9 Dec 2026**.
    - PHP 8.2 security support ends 31 Dec 2026.
    - Adobe Commerce 2.4.6 standard support ended 11 Aug 2026.
    - WordPress officially supports only its latest version.
    - Magento 1 (30 Jun 2020) is cited cautiously; Joomla dates are left out.
- **Keep distinct from:**
  - `when-does-your-website-need-a-redesign` (design symptoms);
  - `website-redesign-vs-rebuild` (staged modernisation, Batch 2);
  - `ecommerce-replatforming` (stores);
  - WEB-38 (outgrowing no-code).

## Mobile apps

### 45. App maintenance after launch: UPDATE `mobile-app-maintenance`
- **Add.**
  - A maintenance planning worksheet: 11 recurring work types × frequency × owner × what makes the work bigger × evidence it is done.
  - An annual compliance calendar:
    - Apple membership renewal: a lapse makes apps and in-app purchases unavailable on every storefront.
    - Apple's Xcode minimum has taken effect in late April each year (25 Apr 2023, 29 Apr 2024, 28 Apr 2026); the pattern is an inference from those dates.
    - Google's target API deadline each August.
    - Play policy notices, usually with at least 30 days to comply.
    - React Native maintains only the latest three minor series.
    - Android developer verification began in Singapore and three other countries on 30 Sep 2026.
- **Pricing.** No prices. The common "15–20% of build cost per year" figure is unsourced and **not used**.
- **Fix.** Correct the Play visibility wording (see corrections).

### 46. App metrics: UPDATE `mobile-app-analytics`
- **Add.** A founder framework running acquisition → activation → retention → revenue → quality, with a definition, data source and caveat for each stage.
- **Verified definitions.**
  - Apple App Analytics retention counts opted-in devices only.
  - GA4's retention report covers the first 42 days (Day 1, 7 and 30 cohorts).
  - Crashlytics crash-free users counts installations and fatal crashes only.
  - Android vitals thresholds: crash rate 1.09% overall and 8% per device model; ANR rate 0.47% and 8%.
- **Benchmarks.** No reliable retention benchmark with a published method exists. The article says so and advises comparing cohorts with the app's own history.

### 47. App retention: CREATE `improve-mobile-app-retention`
- **Why a new page.** Distinct from:
  - onboarding (day 0 only);
  - push notifications (one channel; Batch 2 strategy layer);
  - `reducing-saas-churn` (B2B accounts);
  - the ecommerce retention pages (repeat purchase).
- **Original assets.**
  - A diagnosis: which cohort, which week, which job.
  - A lever table: value moment, habit loop, saved state, re-engagement, quality, respectful monetisation.
- **Sources.**
  - NN/g tutorial study: 70 participants; 91% vs 94% task success, not significant.
  - NN/g "low starting hurdles" (2010).
  - Apple HIG onboarding guidance.
  - Android state-saving guidance.
  - The habit-loop lever is labelled as inference.

### 48. Crashing or slow: UPDATE and retitle `mobile-app-crash-reporting`
- **Why this page.** It matches the intent at 0.74, so it becomes the founder's diagnostic guide; the slug is kept. `mobile-app-performance-optimization` stays the engineering "how to fix" page and links to it; its duplicate ANR FAQ is removed.
- **Add.** A symptom → where to look → likely cause → owner table.
- **Verified facts.**
  - Android vitals (updated 9 Oct 2026): Play "may reduce the visibility" of apps over the thresholds, and may show users a warning.
  - Only "Input dispatching timed out" ANRs count, with a 5 s input timeout.
  - iOS watchdog terminations use code 0x8badf00d.
  - Xcode Organizer counts hangs over 250 ms.
  - MetricKit delivers metric reports daily and diagnostics immediately (iOS 15+).
  - **Apple states no ranking penalty for crashes, so none is implied.**

## Shopify and ecommerce

### 49. Multi-location inventory: CREATE `shopify-multi-location-inventory-management`
- **Why a new page.** The generic inventory pages (`ecommerce-inventory-management-integration`, `distributed-order-management`, `oms-vs-ims`) contain no Shopify mechanics. Roadmap SHP-15 changes from UPDATE to CREATE.
- **Verified facts (15 Oct 2026).**
  - **Location limits:** Starter 2; Basic, Grow and Advanced 10; Plus 200. 3PL app locations do not count toward the limit.
  - **Inventory states:** five; "Unavailable" covers damaged, quality control and safety stock.
  - **Order routing:** needs at least 2 locations. Default rules: fewest splits, stay in the destination market, then closest location. Custom rules can use location metafields. Fully custom routing through a Shopify Function is Plus-only, by request, and does not support subscriptions.
  - **Local delivery and pickup:** up to 10 delivery zones per location, radius up to 160 km. Pickup shows only when the whole order is in stock at that location, unless store transfers are enabled.
  - **Shopify Fulfillment Network:** the logistics business was sold to Flexport on 6 Jun 2023. What remains is a 3PL partner list, extended on 26 Aug 2025.
  - **Transfers:** made more flexible on 6 Jan 2026; purchase orders create linked transfers since 22 Jun 2026.
  - **Stocky discontinued after 31 Aug 2026**, which is the timely hook.
  - **Flow:** not available on Starter.

### 50. Repeat purchases: KEEP + minor update
- **Why KEEP.** Five pages already serve this intent: `ecommerce-repeat-purchases`, `ecommerce-customer-retention`, `ecommerce-reorder-experience`, `d2c-repeat-purchase-ux` and `ecommerce-customer-retention-technology`.
- **Minor update.**
  - Add a ~200-word "Buy again on Shopify" section to `ecommerce-reorder-experience`, which currently mentions Shopify only in its CTA.
  - Correct the gateway list in `shopify-subscription-store`.

### 51. Returns and exchanges: minor UPDATE + corrections
- **`ecommerce-returns-management` — add the Shopify mechanics.**
  - Native self-serve returns.
  - Return rules: windows, final-sale exclusions, percentage restocking fee.
  - The label limitation: Shopify-generated labels need a US default location; everyone else uploads a carrier label.
  - Native store credit, which needs new customer accounts.
- **`ecommerce-exchange-management` — FAQ corrections.**
  - Exchanges have been open to all merchants since 28 Feb 2024.
  - In native self-serve, the customer requests a return and the merchant adds the exchange.
  - Exchange stock is not reserved until the return is processed.
- **Regional return rights.** Context only, and only where verified. The ACCC page was unreachable, so no new Australian claims are made.

### 52. Migration testing before and after: minor UPDATE `ecommerce-migration-testing`
- **Why not a new page.** The proposed slug already exists (`ecommerce-platform-migration-checklist`), and `migrating-to-shopify-guide` already has a "First 30 Days After Launch" SEO table.
- **`ecommerce-migration-testing` — add, keeping it platform-neutral.**
  - A 72-hour check-and-rollback plan.
  - A 30-day operational reconciliation: payouts, first returns, inventory drift, subscription renewals.
  - A link to the Shopify guide's SEO table.
- **`migrating-to-shopify-guide`, "Step 7: Test" — add the Shopify test mechanics.**
  - The "Test payment gateway" (formerly Bogus Gateway): card 1 approves, 2 declines, 3 fails.
  - It does not work with POS or subscription products.
  - Live orders are blocked while test mode is on.
  - Redirect limits: 100,000 on standard plans, 20,000,000 on Plus; redirects only work from URLs that return 404.

## UI/UX

### 53. Designer deliverables: UPDATE `design-handoff`
- **Add.**
  - A deliverables matrix by project type: marketing site, Shopify, SaaS app, mobile app.
  - A short handoff sign-off gate.
  - **Not** a second "definition of ready": it links to the Batch 1 ready-to-build checklist in `how-much-ux-design-before-development`.
- **Roadmap.** UX-16 is retargeted to this page; `ux-design-process` gets one link.
- **Verified facts.**
  - Figma Dev Mode: Professional, Education, Organization, Government and Enterprise plans, and needs a Full or Dev seat.
  - Code Connect: Professional, Organization and Enterprise.
  - The Scrum Guide does not define a "Definition of Ready", so it is described as a team convention.
  - GitHub's "48% preventable" figure is attributed as GitHub's own data.

### 54. Responsive planning: UPDATE `responsive-ui-design`
- **Add.** A planning kit:
  - content priority per breakpoint;
  - breakpoints chosen from content plus the client's own analytics;
  - a component behaviour spec;
  - a device test matrix.
- **Verified facts.**
  - WCAG 1.4.10 Reflow and 2.5.8 Target Size (24×24), quoted exactly.
  - Container queries are Baseline widely available (since Feb 2023, per MDN).
  - Google mobile-first indexing (page updated 10 Dec 2025).
  - web.dev: do not set breakpoints by device.
- **Data with caveats.** StatCounter mobile share (Sep 2026) is used only with its date and a caveat.
- **Unverified.** The page's existing Apple 44pt / Material 48dp FAQ figures could not be checked, so they are dropped unless verified at writing.

### 55. Prototype testing: CREATE `test-website-prototype-before-development`
- **Why a new page.**
  - `how-much-ux-design-before-development` decides *whether and how much* to design.
  - `usability-testing` covers the general method, with one prototype FAQ.
  - Neither covers *running a test on a prototype*.

  This page absorbs UX-20; its slug `clickable-prototype-before-building` is retired.
- **Original asset.** A prototype test plan:
  - a fidelity → can test / cannot test table;
  - task-writing rules for prototypes;
  - when to moderate, since early prototypes are hard to test unmoderated;
  - pitfalls: dead ends, fake data, limits on typed input, polished AI prototypes that stop iteration (NN/g 2025–26);
  - a go/no-go sheet.
- **Caveat.** The typed-input limitation comes from a Figma community thread, so it is worded cautiously.

### 56. Inconsistent website UI: UPDATE `design-systems-for-teams-that-move-fast` (recommended)
- **Recommendation.** Add a "Fixing an inconsistent website" section: interface inventory, consolidation sheet, a CMS block library with limited options, light governance. Also apply the Batch 1 optional enhancements: the DTCG 2025.10 token format and the NN/g caveat.
- **Alternative.** The research recommends a separate page, `maintain-website-ui-consistency`, because the reader (a marketing-site owner with CMS editors) and the service (website development) differ. Demand evidence is **weak**, so I recommend the update. Fewer URLs is also consistent with the global audit's publishing caution.
- **Sources.**
  - Brad Frost's interface inventory (2013) and *Atomic Design* chapter 4.
  - NN/g: heuristic 4, design systems, the "enforcer" role (Feb 2026), maturity (Jul 2026).

## CRO

### 57. Why visitors leave a landing page: KEEP + minor update
- **Why KEEP.** `landing-page-development` was rewritten in Batch 2 around search intent, and `website-gets-traffic-but-no-leads` already provides the diagnosis.
- **Minor update.** Add one FAQ ("Why do visitors leave my landing page without taking action?") and one sentence linking the diagnostic in "Measure the right conversion".
- **Not now.** `why-is-my-website-not-converting` is weak (796 words, no sources) and is still a pending MERGE source from Batch 1.

### 58. Lead quality: CREATE `improve-website-lead-quality`
- **Why a new page.** No page covers diagnosing why enquiries don't close or defining a qualified lead with sales. The neighbouring pages each cover something narrower:
  - the Batch 1 form page: field friction;
  - the Batch 2 hub: attribution;
  - `ai-lead-qualification`: automation.

  This page absorbs CRO-15; its slug `measure-website-lead-quality` is retired.
- **Verified facts (Google).**
  - GA4's Lead acquisition report and its Lead disqualification and loss report (`disqualified_lead_reason`, `unconvert_lead_reason`).
  - Google Ads goals for qualified and converted leads.
  - Lead-quality optimisation guidance: at least 15 conversions in 30 days, daily uploads, a conversion action within 7 days of the click.
  - Conversion value rules condition only on audience, location and device.
- **Not used.** Lead-response-time statistics: the HBR study (2011) is paywalled and its method unverifiable. The article reuses the cautious framing from `ai-lead-qualification-uae` and links to it.

### 59. Prioritising CRO experiments: UPDATE `ecommerce-experiment-prioritization`
- **Add.**
  - A scoring worksheet.
  - A "can it finish with your traffic?" check before scoring.
  - A lead-gen section.
  - Framework attributions and Sources.
- **Corrections to framework attributions.**
  - PIE: Chris Goward, WiderFunnel (2013), used to rank pages or areas, with no fixed scale.
  - ICE: "commonly attributed to Sean Ellis".
  - PXL: criteria taken from a secondary copy because CXL returned 403, so weights are quoted only if verified in a browser.

### 60. Mobile ecommerce diagnosis: UPDATE `shopify-mobile-cro-audit`
- **Change.**
  - Retitle the page and rebuild it as a step-by-step diagnosis by device and funnel stage.
  - Replace its four fix checklists with links to `shopify-mobile-cro`, cutting the 0.80 body overlap.
  - Fix the "product views by device" error.
- **Verified facts.**
  - Shopify's Sessions by device report, ShopifyQL device fields and the web performance device filter.
  - Search Console reports Core Web Vitals separately for mobile and desktop.
  - GA4 funnel breakdowns credit a user who switches devices to the first device only.
  - Baymard mobile benchmark: 62% of 138 sites "mediocre" or worse, none "good" (page undated; cite as is).
- **Not used.** Vendor mobile-vs-desktop conversion "benchmarks".

---

## International relevance

Every topic is **global and India-first**. Market notes appear only where the answer genuinely differs:

| Topic | Market note |
|---|---|
| 41 | UK security code of practice, as one example of a published standard |
| 49 | Shopify Payments and the Shop app are limited for India-based stores |
| 51 | Return labels are US-only; regional return rights as context |
| 54 | Device share by market, dated |

There are no regional copies, and no new regional pages.
