# Batch 10 decisions: topics 181–200 (audited 15 Oct 2026 IST)

Status: **awaiting owner approval. No site files changed.**

## Audit basis and limits

- **Inventory:** the working tree has 1,050 posts, rebuilt from `src/lib/blog-data*.ts` on 15 Oct 2026. The live sitemap has 1,036 /blogs/ URLs.
- **Unpublished work:** Founder Batches 1–3 are uncommitted. Owners from those batches are marked "not live":
  - `cro-strategy-low-traffic-websites`
  - `saas-dashboard-design`
  - `shopify-checkout-customisation-guide`
- **Batch 3 session:** the founder-3 files have not changed since 09:31 IST, so there is no conflict with the parallel session.
- **Missing data:** no GSC, GA4 or keyword-volume data is available. Priorities rest on the overlap audit, service fit and verified platform facts only. No volumes are claimed.
- **Search scope:** WebSearch is US-only. Official docs were read directly where a claim depends on them.
- **Template:** page template, schema and sitemap behaviour are unchanged from earlier batches: `BlogPosting` and breadcrumb JSON-LD, canonical per slug, sitemap built from `posts`. No schema changes are proposed.

## Decisions

| # | Topic | Decision | Target | Priority |
|---|---|---|---|---|
| 181 | API versioning | **UPDATE** | `/blogs/api-versioning` (554 words, 10 Oct) | P2 |
| 182 | Feature flags | **REJECT** (optional one-paragraph addition) | `/blogs/feature-flag-implementation` already covers rollout, kill switches, governance, testing and cleanup | – |
| 183 | Secure file uploads | **UPDATE** | `/blogs/secure-file-uploads` (454 words, thin) | P2 |
| 184 | Approval workflows in business software | **CREATE** | `/blogs/approval-workflow-design` | P2 |
| 185 | Mobile SDK audit | **REJECT** | `mobile-app-data-privacy` has a "Third-party SDK audit worksheet" H2 (updated 14 Oct); `mobile-app-maintenance` and `open-source-software-audit` cover maintenance and licences | – |
| 186 | Battery and data usage | **FOLD** into Batch 8 topic 146 | `/blogs/mobile-app-performance-optimization` gets a "Battery and data: measure first" section | P2 (with 146) |
| 187 | Modernise an app without rebuilding | **REJECT** | `/blogs/mobile-app-modernization` (10 Oct): refactor, rebuild or replace, protecting users during migration | – |
| 188 | In-app feedback and support | **CREATE** (low confidence) | `/blogs/mobile-app-in-app-feedback` | P3 |
| 189 | Shopify bundles | **UPDATE** | `/blogs/shopify-bundles-volume-discounts`: native Shopify Bundles app vs third-party vs Cart Transform; inventory; testing | P2 |
| 190 | Shopify subscriptions | **REJECT** | `/blogs/shopify-subscription-store` covers billing, failed payments, self-service and app choice; roadmap SHP-14 is already KEEP | – |
| 191 | Shopify discount conflicts | **CREATE** | `/blogs/shopify-discount-combinations` | P2 |
| 192 | Recommendations without slowing the store | **UPDATE** | `/blogs/shopify-product-recommendations`: native vs app vs custom, loading, fallbacks, privacy | P3 |
| 193 | Permission requests | **CREATE** | `/blogs/app-permission-requests-ux` | P2 |
| 194 | Dashboard filters and saved views | **FOLD** into Batch 6 topic 113 | `saas-dashboard-design` (not live) gets a filters and saved views subsection; Batch 9 topic 176 covers table accessibility | P2 (with 113) |
| 195 | Progressive disclosure | **CREATE** | `/blogs/progressive-disclosure-ux` | P2 |
| 196 | Design critique | **CREATE** via roadmap UX-18 | `/blogs/how-to-give-design-feedback` covers internal critique and client feedback | P3 |
| 197 | Low add-to-cart rate | **REJECT** | `/blogs/product-page-traffic-no-sales` is the same diagnosis, including "What is a good add-to-cart rate?" | – |
| 198 | Primary and secondary CTAs | **FOLD** into Batch 6 topic 117 | `service-page-conversion-optimization` (planned), plus existing `website-lead-generation` "CTA Strategy" and `shopify-cta-optimization`; CTA channel choice stays with roadmap CRO-22 | – |
| 199 | Shipping costs and delivery estimates | **REJECT** | `/blogs/ecommerce-shipping-ux` covers all of it, including costs before the address is known | – |
| 200 | When not to A/B test | **REJECT** | `cro-strategy-low-traffic-websites` (Batch 1, not live) opens with "What to do instead of A/B testing"; add a short "high-risk changes and broken tracking" note when Batch 1 is committed | – |

**Totals:** 6 create, 4 update, 3 folded into earlier plans, 7 reject.

**Smallest useful set:** 191, 193, 195 and 183.

## Evidence and angle per item

### 181 API versioning (UPDATE)
- **Gap in the owner:** it already has breaking vs non-breaking changes, versioning approaches, deprecation, mobile clients and testing. It is short on:
  - consumer communication: changelog, notice periods, contact list;
  - a migration-window plan with dates;
  - consumer-driven contract tests.
- **Add:** a deprecation-notice template and a migration timeline table.
- **Verify at writing:** HTTP `Deprecation` (RFC 9745) and `Sunset` (RFC 8594) headers on rfc-editor.org.
- **Reader:** CTOs and product owners with partner or mobile integrations (evaluation and implementation).
- **Service:** `/services/website-development`.

### 183 Secure file uploads (UPDATE)
Verified against the [OWASP File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html):
- extension allowlist;
- the Content-Type header can be spoofed;
- file-signature checks must not be used alone;
- application-generated filenames;
- size limits, including after decompression;
- storage on a different server or outside the webroot;
- AV, sandbox or CDR where available;
- serving files through an ID-to-file handler.

**Add:**
- an upload state model (received, quarantined, scanned, available, rejected) with user-facing failure messages;
- safe download headers (verify on MDN at writing);
- a "who can see this file" access table.

**Service:** `/services/website-development`.

### 184 Approval workflows (CREATE)
- **Why it is distinct:** `b2b-approval-workflows` is about buyer order approvals in B2B ecommerce, and `workflow-automation` is about automating tasks. Neither covers internal approval design in custom business software: purchase requests, expenses, document sign-off.
- **Angle:**
  - a state-transition table (draft, submitted, in review, changes requested, approved, rejected, withdrawn, expired);
  - separation of duties;
  - delegation and out-of-office;
  - resubmission with version history;
  - escalation timers;
  - audit trail;
  - notification rules;
  - exception paths: approver leaves, amount edited after approval.
- **Original asset:** a workflow specification worksheet a founder can hand to developers.
- **Links:** `b2b-approval-workflows` (for order approvals), `saas-roles-and-permissions`, `saas-audit-logging`, `workflow-automation`, `human-in-the-loop-ai`.
- **Service:** `/services/website-development`.
- **Confidence:** medium. Overlap with the B2B page is partial. The page must not drift into ecommerce orders.

### 186 Battery and data (FOLD into Batch 8 topic 146)
- The owner has a thin "Memory and Battery" H2.
- **Add:**
  - measure first (verify Android Studio Energy/Power Profiler and Xcode Energy Organizer / MetricKit at writing);
  - background work, location accuracy and frequency;
  - network batching and caching;
  - media processing;
  - real-device testing.
- A separate page would split one "my app is slow or drains battery" intent across two URLs.

### 188 In-app feedback and support (CREATE, P3, low confidence)
- **Why it is distinct:** `ai-feedback-ux` is about feedback on AI outputs only. No page covers general in-app feedback, bug reports or support entry points.
- **Angle:**
  - prompt timing;
  - attaching context (screen, app version, logs) only with user consent;
  - accessible forms;
  - routing to support;
  - triage and prioritisation;
  - closing the loop.
- **Verify at writing:**
  - Apple `requestReview` frequency limits (the HIG fetch returned no body, so not verified);
  - Google Play In-App Review API quota.
- The owner may drop this item if the backlog needs trimming.

### 189 Shopify bundles (UPDATE)
- **Verified on [Shopify Help: Shopify Bundles](https://help.shopify.com/en/manual/products/bundles/shopify-bundles):**
  - the app creates fixed bundles and multipacks and is "available on all Shopify plans";
  - up to 30 components for fixed bundles, up to 150 for dynamic bundles, and up to 2,000 units per component;
  - bundles track inventory "by overall stock", not by location.
- **Verified on the [bundles overview](https://help.shopify.com/en/manual/products/bundles):** creating bundles needs a bundles app, and Google & YouTube support fixed bundles only.
- **Add:** a native vs third-party (mix-and-match) vs Cart Transform Function table, a fulfilment and returns note, and a pre-launch test list.
- **Verify at writing:** subscription and B2B support.
- `ecommerce-product-bundles` keeps the platform-neutral UX angle.

### 191 Shopify discount combinations (CREATE)
- **Verified on [Shopify Help: discount combinations](https://help.shopify.com/en/manual/discounts/discount-combinations):**
  - there are three classes: product, order and shipping;
  - each discount must be set to combine with the other class;
  - product + order and order + order combinations need eligibility: no checkout.liquid customisations;
  - product discounts on the same line item are Plus only;
  - shipping discounts never combine with each other;
  - customers can use at most 5 product or order codes and 1 shipping code per order;
  - a store can have at most 25 active automatic discounts, including app discounts;
  - order of calculation: product, then order, then shipping;
  - percentage order discounts are each calculated on the original subtotal.
- **Original asset:** a promotion-conflict matrix and a checkout test script, covering cart totals, markets and currency, and subscription items.
- **Roadmap SHP-11** (Scripts to Functions): Scripts stopped running on 30 June 2026 ([shopify.dev changelog](https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026)). The Batch 2 page `shopify-checkout-customisation-guide` already maps Scripts to Functions. Recommend marking SHP-11 as covered and linking to that page, not creating a second URL.
- **Service:** `/services/shopify-development`.

### 192 Recommendations and performance (UPDATE)
- **Add:**
  - native recommendations vs app vs custom;
  - load after main content and reserve space to avoid layout shift;
  - an empty or fallback module;
  - privacy for personalised modules;
  - measuring with holdouts.
- **Verify at writing:** the Product Recommendations API / section rendering on shopify.dev.
- `ecommerce-product-recommendations` keeps the UX angle.

### 193 Permission requests (CREATE)
- **Why it is distinct:** `mobile-app-push-notifications` covers notification permission only, and `mobile-app-data-privacy` covers store declarations. No page covers permission UX generally: location, camera, photos, contacts, tracking.
- **Verified on [Android: Request runtime permissions](https://developer.android.com/training/permissions/requesting):**
  - "Ask for a permission in context, when the user starts to interact with the feature that requires it";
  - show an educational UI when `shouldShowRequestPermissionRationale()` returns true, with a "no thanks" path;
  - if the user taps Deny more than once, the system dialog no longer appears ("considered a permanent denial");
  - one-time permissions for location, microphone and camera arrived in Android 11.
- **Verify at writing:** Apple HIG "Privacy" / requesting permission, purpose strings, and App Tracking Transparency.
- **Original asset:** a permission-request planning table: feature, permission, moment, rationale copy, behaviour on denial, recovery path.
- **Links:** push notifications, data privacy, onboarding.
- **Services:** `/services/mobile-app-development`, `/services/ui-ux-design`.

### 194 Filters and saved views (FOLD into Batch 6 topic 113)
- No page covers SaaS saved views. The ecommerce filter pages are about shopping, not work tools.
- **Add to the 113 update:**
  - visible active filters;
  - reset;
  - combining filters with AND/OR;
  - saving, sharing and defaulting a view;
  - zero-result states;
  - URL state;
  - mobile behaviour.
- **If the owner prefers a separate page,** this is the next-best CREATE candidate.

### 195 Progressive disclosure (CREATE)
- No owner exists. The term appears only in passing on four pages.
- **Verified in NN/g, [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) (Nielsen, 3 Dec 2006):**
  - defer advanced or rarely used features to a secondary screen;
  - getting the split right depends on task analysis and usage data plus testing;
  - "Designs that go beyond 2 disclosure levels typically have low usability";
  - staged disclosure (wizards) is a problem when steps depend on each other.
- **Original angle:** when not to hide things. Costs, legal terms, destructive actions and required inputs stay visible.
- **Original asset:** a "show, defer or remove" decision table.
- **Verify at writing:** accessibility for disclosure widgets (WAI-ARIA APG disclosure pattern).
- **Service:** `/services/ui-ux-design`.

### 196 Design critique and feedback (CREATE via UX-18)
- **Roadmap row:** UX-18 is "How to give design feedback without endless revision rounds", slug `/blogs/how-to-give-design-feedback`, P3, "none found (checked)".
- **Plan:** one page serving both founders reviewing agency work and internal product teams:
  - critique against goals, not taste;
  - questions vs directives;
  - decision log;
  - revision rounds tied to user needs.
- **Links:** `design-handoff`, `ux-heuristic-evaluation`, `usability-testing`.
- **Sources:** cite no statistics. Methods only, from named sources verified at writing.

### Rejects: short evidence
| # | Evidence |
|---|---|
| 182 | The owner's H2s cover types, rollouts, kill switches, experimentation, governance, testing and cleanup. Only flag-evaluation observability is thin, and that is one paragraph, not a page. |
| 185 | `mobile-app-data-privacy` has an SDK audit worksheet, privacy manifests and Data safety coverage. `mobile-app-maintenance` has "Dependencies, SDKs and Privacy Declarations". |
| 187 | `mobile-app-modernization` covers triggers, options, an assessment checklist and protecting users during migration. |
| 190 | `shopify-subscription-store` covers failed payments, self-service, cancellation and app choice. |
| 197 | `product-page-traffic-no-sales` covers the diagnostic checklist for price, variants, shipping, mobile, analytics and intent. |
| 199 | `ecommerce-shipping-ux` covers estimates, thresholds, restrictions, mobile and testing. |
| 200 | Batch 1's `cro-strategy-low-traffic-websites` covers this intent. A second page would split it. |

## Regional relevance

- None of the 20 topics needs a country page.
- Only two items carry regional nuance, and both are handled in-page if at all:
  - **191:** Shopify Markets and currency in discount testing.
  - **188/193:** consent wording. Point to `mobile-app-data-privacy` "Regional notes" rather than restating law.

## Internal links to add after approval

| New or updated page | Links out to | Older pages that should link in |
|---|---|---|
| 184 | `b2b-approval-workflows`, `saas-roles-and-permissions`, `saas-audit-logging`, `workflow-automation` | `b2b-approval-workflows`, `workflow-automation` |
| 188 | `ai-feedback-ux`, `mobile-app-analytics`, `mobile-app-ux-design` | `ai-feedback-ux`, `mobile-app-maintenance` |
| 191 | `shopify-bundles-volume-discounts`, `shopify-checkout-customisation-guide` (after Batch 2 is live), `shopify-checkout-optimization` | `shopify-bundles-volume-discounts`, `shopify-checkout-customisation-guide` |
| 193 | `mobile-app-push-notifications`, `mobile-app-data-privacy`, `what-a-good-mobile-app-onboarding-actually-does` | `mobile-app-push-notifications`, `mobile-app-data-privacy` |
| 195 | `ux-writing`, `ui-design-principles`, `saas-product-design` | `ui-design-principles`, `saas-product-design` |
| 196 | `design-handoff`, `ux-heuristic-evaluation`, `usability-testing` | `design-handoff`, `figma-product-design` |

## Owner decisions needed

1. Approve Batch 10 in full or in part. The smallest useful set is 191, 193, 195 and 183.
2. 194: keep it as part of the Batch 6 topic 113 update, or make it a separate page?
3. 188: keep it at P3 or drop it?
4. Roadmap SHP-11: mark it as covered by `shopify-checkout-customisation-guide` (Batch 2)?
5. Still open: approval of Batches 5–9, Batch 3 completion, committing Batches 1–3, and the global-audit Q1–Q5.
