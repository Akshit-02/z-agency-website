# 03 — Batch 5 (Topics 81–100): Topic-by-Topic Decisions

Decided 15 October 2026 (IST). Overlap evidence comes from the 1,048-article working tree (see README). Word counts are approximate: whitespace tokens of each article's content JSON. Service pages are taken from the live sitemap: `/services/{website-development, mobile-app-development, shopify-development, ui-ux-design, cro-audit, ai-automation}`.

**Common rules for all implemented items** (carried over from Batches 1–3 and the global audit):
- answer first;
- one original asset per article;
- a Sources section with access dates;
- hypothetical examples are labelled;
- no prices;
- no notes about the research process in visible text;
- no FAQ rich-result claims;
- source links attach only to the sentence that names the source;
- substantial updates keep the URL and `date` and set `updated`.

---

## Full-stack and web applications

### 81. Third-party API integration — UPDATE `website-api-integration`

**Existing pages:**

| Page | Approx. words | What it covers |
|---|---|---|
| `website-api-integration` (2026-09-23, no sources) | 944 | REST, GraphQL, webhooks, auth, errors, rate limits, logging |
| `api-integration-reliability` | 754 | retries, idempotency, reconciliation |
| `api-integration-development-cost` (Batch 1) | 2,496 | cost |

The ecommerce, mobile, Shopify, UAE and AU variants are separate intents.

**Why not CREATE.** "How to integrate a third-party API into a web app" is the same intent as `website-api-integration`. A new URL would split it. The existing page is thin, unsourced and organised as a glossary, not a process.

**Change.** Rebuild it as an implementation sequence:
1. evaluate the vendor (documentation, sandbox, SLA, terms, deprecation policy);
2. design the data contract;
3. manage credentials (secrets manager, least-privilege scopes, rotation, no keys in client code; OWASP ASVS V13 configuration and secrets);
4. handle authentication flows (API key vs OAuth 2.0 client credentials vs authorization code);
5. plan for rate limits and retries, with a short summary that links to the reliability page;
6. handle versioning and deprecation (pin versions, subscribe to changelogs, contract tests);
7. test against the sandbox;
8. go live;
9. monitor.

**Original asset:** an integration readiness checklist, with one row per vendor.

**Links and CTA.** Links out to the reliability, cost, webhooks and CRM pages. CTA: discuss an integration (`/services/website-development`).

### 82. Staging vs production — CREATE `staging-vs-production-environments`

**Evidence.** 47 article files mention "staging", but none owns the question. The nearest pages each answer something else:
- `devops-for-growing-businesses`: CI/CD;
- `zero-downtime-deployments`: release strategies;
- `feature-flag-implementation`;
- `mobile-app-release-management`.

**Search results.** Results are dominated by host and vendor glossaries (for example ServerMania, Statsig and WorkOS docs), with few decision guides for the founder who asks "does my agency need a staging site?".

**Angle.** A decision and setup guide for growing businesses. It covers:
- what each environment is for (local, dev/preview, staging, production);
- what must differ (secrets, payment and email sandboxes, outbound messaging off, scheduled jobs off, robots `noindex` plus authentication on staging);
- what must match (runtime versions, configuration shape, feature-flag state, migrations);
- test data (synthetic or masked data, never raw production personal data; DPDP and UK GDPR implications kept brief and dated);
- deployment controls (promotion of the same build artefact, approvals);
- rollback and release validation (smoke tests);
- Shopify and mobile equivalents (development stores and theme preview; TestFlight and Play testing tracks), each kept to a single paragraph with a link.

**Original asset:** an environment matrix showing what differs, what matches and who owns it, plus a "staging is leaking" incident checklist.

**Search hygiene for staging sites.** Google says `noindex` or authentication; robots.txt alone does not keep a URL out of the index. Verify against Search Central at writing.

**CTA:** discuss your release process (`/services/website-development`).

### 83. Reducing technical debt without a rebuild — CREATE `reduce-technical-debt-web-application` (low confidence)

**Existing pages:**
- `software-architecture-review` (887 words): assessment and the fix/refactor/rebuild decision.
- `ecommerce-technical-debt` (869 words): ecommerce-specific debt register.
- `strangler-fig-pattern`: one pattern.
- `ai-generated-code-technical-debt`.
- `website-redesign-vs-rebuild`.

**Why CREATE (marginal).** None is an execution playbook for a live custom web app after the assessment. The searcher is a founder being told to "rewrite it", and the answer is mostly "not necessarily". Competing results are vendor listicles (Sourcegraph and others), and the primary references are Feathers (characterization tests) and Fowler (refactoring).

**Boundary.** No "what is technical debt" taxonomy (link to the review page) and no ecommerce specifics.

**Outline:**
1. build a safety net first (characterization tests around hot spots, error monitoring);
2. find hot spots (churn × defects);
3. keep a debt register that uses cost of delay;
4. agree a capacity model with the team (state it as a team choice, not a "20% rule" fact);
5. refactor in the flow of feature work;
6. upgrade dependencies and frameworks on a cadence;
7. use the strangler or branch-by-abstraction pattern for large components;
8. measure progress (change failure rate, lead time; cite DORA);
9. recognise when a rebuild is genuinely justified.

**Alternative.** Add an "after the review: paying debt down" section to `software-architecture-review` instead.

**CTA:** request a codebase review (`/services/website-development`).

### 84. Web application maintenance — UPDATE `website-maintenance-guide`

**Existing pages:**
- `website-maintenance-guide` (2,116 words): security, dependencies, backups, monitoring, uptime, technical debt, tiers, UAE section.
- `application-monitoring-observability`.
- `software-maintenance-contracts-australia`.
- `mobile-app-maintenance` (Batch 3).

**Why UPDATE.** A new page would repeat about 70% of the maintenance guide.

**What is missing:**
- the web-application layer: background jobs and queues, scheduled tasks, database growth and slow queries, auth and session errors, third-party API deprecations and quota, TLS and domain expiry, email deliverability, cloud cost drift;
- an explicit split of the five work types the brief names (routine updates, monitoring, incident response, backups and restore tests, security maintenance), with feature development kept separate.

**Add:**
- an H2 "If you run a web application, monitor these too", with a table of signal, why it matters, example alert and owner;
- an H2 "Maintenance is not feature development" with a five-way split and one incident-response flow;
- a restore-test step in Backups.

**CTA:** unchanged.

---

## Mobile apps

### 85. Which events to track — UPDATE `mobile-app-analytics`

**Existing page.** `mobile-app-analytics` is titled "What Events and Metrics Should You Track?" and is the same query. Batch 3 (topic 46) updated it today with a founder metrics framework. `product-analytics-implementation-australia` covers event taxonomy for the web and Australia.

**Why not CREATE.** A new URL would compete for the identical title.

**Gap.** "Event Tracking and the Tracking Plan" is two paragraphs.

**Add:**
- a starter event specification table (event, trigger, key properties, decision it informs) for a typical transactional app;
- naming rules;
- Firebase/GA4 collection limits and reserved prefixes, to be verified on the Google Analytics help pages at writing;
- tracking-plan versioning;
- QA with DebugView before release.

No changes to the Batch 3 sections. **Edit only after Batch 3 lands.**

### 86. Mobile app accessibility testing — CREATE `mobile-app-accessibility-testing`

**Evidence:**
- `accessibility-testing-australia` is web-weighted and Australia-framed.
- `accessible-ui-ux-design` is about design.
- `website-accessibility-guide` and the ecommerce accessibility pages cover the web.
- No page covers VoiceOver, TalkBack, Dynamic Type or font scale, Switch Control or Switch Access, Voice Control, Xcode Accessibility Inspector and `performAccessibilityAudit()` (XCTest, iOS 17+), Android Accessibility Scanner, or Espresso `AccessibilityChecks`.

**Search results.** Vendor guides (Kobiton, BrowserStack, Quash and others) lead.

**Angle.** A test plan a product team can run each release:
- scope by critical journeys;
- automated checks (and what they miss);
- a manual screen-reader script per platform;
- text scaling to the largest sizes, with reflow;
- contrast;
- target size (WCAG 2.5.8; platform 44pt/48dp guidance to be verified on Apple HIG and Material at writing; Batch 3 flagged this as unverified);
- alternatives to gestures;
- motion and reduce-motion;
- reporting.

**Standards.** WCAG 2.2 via W3C's mobile guidance. EN 301 549 and the European Accessibility Act are mentioned only with dates. UK, AU and IN legal framing is kept to one dated paragraph per market and links to existing regional pages.

**Original asset:** a per-release accessibility test script table.

**CTA:** request an accessibility review (`/services/mobile-app-development`).

### 87. Mobile app testing strategy — UPDATE and retitle `mobile-app-testing`

**Evidence:**
- `mobile-app-testing` is 643 words with no sources, titled "Complete Guide to QA Before Launch".
- `mobile-app-launch-checklist` (Batch 1) owns store submission and testing tracks.
- `automated-regression-testing` covers the web.
- `mobile-app-crash-reporting` (Batch 3) covers crashes.

**Change.** Retitle to "Mobile App Testing Strategy: Devices, OS Versions and Release Checks" and rebuild it around:
- choosing a device and OS matrix from your own analytics, plus platform minimum versions (verify the current Xcode SDK requirement and Play target API at writing);
- emulator vs real devices, and device clouds;
- the regression suite by risk;
- network conditions (offline, slow, flaky, captive portal; Network Link Conditioner, Android emulator network throttling);
- interruptions (calls, background and foreground, permissions revoked);
- upgrade testing from the previous app version (data migrations);
- a per-release check list;
- crash and ANR monitoring after release (link out).

Store submission becomes one paragraph that links to the launch checklist. The FAQ answers on TestFlight and Play tracks are shortened to avoid duplication.

**Original asset:** a device and OS coverage worksheet.

**CTA:** plan app QA (`/services/mobile-app-development`).

### 88. Push notification integration — CREATE `mobile-app-push-notification-integration` + condense the existing page

**Existing page.** `mobile-app-push-notifications` (2,491 words, updated 14 Oct) covers strategy in depth: permission timing, policy, decision table. Its build half is six short sections of one paragraph each.

**Why CREATE.** The brief asks for implementation and system design, a different reader (CTO or developer) and a different query family ("integrate FCM", "APNs token", "push notification architecture"). Deepening in place would double the page and mix intents.

**Facts verified 15 Oct 2026, Firebase "Best practices for FCM registration token management"** (updated 2026-10-13):
- FCM treats an Android registration as expired after 270 days of inactivity;
- iOS has no inactivity expiry;
- the recommended practice is a timestamp per token, a monthly refresh and a daily cleanup job with a 30-day staleness window;
- `UNREGISTERED` (404) and `INVALID_ARGUMENT` (400 with a valid payload) mean the token should be deleted.

**Outline:**
1. architecture (app → token registration API → token store → notification service → queue → APNs/FCM; preferences store);
2. credentials (APNs token-based auth vs certificates; FCM HTTP v1 OAuth service account; verify at writing);
3. permission flow per platform (Android 13 `POST_NOTIFICATIONS`);
4. token lifecycle;
5. targeting (tokens vs topics vs segments);
6. delivery handling and idempotency;
7. deep-link routing on tap, including signed-out users;
8. user controls (categories, channels, quiet hours in the preferences store);
9. testing (simulator push, staging projects);
10. monitoring.

**Condense the existing page.** Its six build sections become one section, "How push is built (summary)", with a link to the new page. Retitle it to "…When to Send Them and How to Get Permission Right" **only if the owner approves**; otherwise keep the title.

**CTA:** discuss your notification system (`/services/mobile-app-development`).

---

## Shopify and ecommerce

### 89. Shopify ERP and inventory integration — UPDATE `ecommerce-erp-integration`

**Existing pages:**
- `ecommerce-erp-integration` (974 words): field ownership, patterns, webhooks, API limits, order mapping, a Shopify worked example, reconciliation and testing.
- `ecommerce-inventory-management-integration`.
- `shopify-multi-location-inventory-management` (Batch 3).
- `shopify-app-integration-guide`.
- `retail-ecommerce-integration`.
- `b2b-ecommerce-erp-integration`.

**Why not CREATE.** Source-of-truth decisions, stock sync, order flows and reconciliation are already covered. A Shopify-titled duplicate would cannibalise.

**Add a Shopify implementation section** (all to be verified on shopify.dev at writing):
- inventory quantity names and the set/adjust mutations, including any compare-and-set or idempotency requirement in the current API version;
- bulk operations for initial loads;
- webhook delivery is not guaranteed, so reconcile;
- fulfillment orders as the unit the ERP or WMS sees;
- B2B catalogues and price lists, for Plus.

**Also add:**
- an implementation plan (discovery → field ownership → sandbox and development store → backfill → parallel run → cutover);
- a failure-handling table (failure, detection, recovery);
- a Sources section.

Add a two-way link with the multi-location page.

### 90. Large Shopify catalogues — CREATE `manage-large-shopify-product-catalogue`

**Evidence.** The PIM, product data architecture and collection-SEO pages are platform-neutral or SEO-only. No page covers Shopify catalogue operations:
- the variant limit (2,048 per product, per secondary sources; verify on Shopify Help);
- option limits and combined listings (Plus);
- CSV import limits and behaviour (15 MB per file, per secondary sources; verify);
- daily variant-creation limits for stores with 50,000+ variants (secondary source; verify);
- the bulk editor;
- Matrixify-type apps vs the Admin API bulk operations;
- metafields and metaobjects for attributes;
- the Shopify Standard Product Taxonomy and category metafields;
- smart collection rules and their condition limits;
- search and discovery filters.

**Search results.** App vendors (Craftshift and others) dominate, and some contradict each other on CSV behaviour. That is a gap for an accurate, sourced page.

**Original asset:** a catalogue operating model: who edits what, where, and in which tool, plus a pre-import checklist.

**Boundary.** Data-modelling theory links to `ecommerce-product-data-architecture`; "do you need a PIM" links to the PIM page.

**CTA:** improve your Shopify catalogue workflow (`/services/shopify-development`).

### 91. Shopify fulfilment automation — CREATE `shopify-order-fulfilment-automation`

**Evidence.** The Shopify-specific coverage on existing pages is thin:
- `ecommerce-fulfillment-technology`: one paragraph on Shopify and one on automation.
- `ecommerce-fulfilment-integration`: 3PL messaging, platform-neutral.
- `shopify-multi-location-inventory-management` (Batch 3): routing and Flow stock alerts.

**Verified on Shopify Help (15 Oct 2026).** Fulfillment holds reserve inventory but block fulfilment, and held orders are excluded from the Unfulfilled list. Flow templates can hold orders by risk level or order value; the default threshold is 1,000 USD, which can be changed. The "Fulfillment order is put on hold" trigger applies to third-party fulfilment. Plan availability for Flow must be re-checked at writing.

**Outline:**
- the fulfillment order model (why one order becomes several);
- auto-fulfil settings (digital and gift cards);
- holds for risk, address verification and pre-orders;
- split shipments and partial fulfilment;
- 3PL and fulfilment-service apps (link out for messaging);
- shipping labels and carrier integrations;
- exception queues using tags and Flow;
- inventory updates on fulfil and cancel;
- monitoring (orders stuck unfulfilled more than X hours, fulfilment-request rejections).

**Risks section:** automation acting on stale stock, double-submits to the 3PL, holds silently not applied.

**Boundary.** Routing rules link to the multi-location page.

**Original asset:** a workflow map (trigger → condition → action → exception owner).

**CTA:** automate your Shopify operations (`/services/shopify-development`).

### 92. Shopify migration testing — REJECT

`ecommerce-migration-testing` (1,353 words) already separates QA from the checklist. It covers data validation, redirects, checkout, analytics, integrations, "72 Hours After Launch" and "First 30 Days" (Batch 3, topic 52). `migrating-to-shopify-guide` "Step 7" gains the Shopify test-gateway mechanics in Batch 3. A `shopify-store-migration-testing` URL would duplicate both. **No change.**

---

## UI/UX

### 93. Reusable component library — DEFER

`design-systems-for-teams-that-move-fast` was updated today (Batch 3, topic 56). It already covers:
- tokens (DTCG format);
- components and states;
- accessibility;
- governance;
- keeping the system alive;
- "When a Design System Is Justified, and When a Component Library Is Enough".

`design-handoff` covers tokens, components and versioning. The remaining gap (semver and changelogs, Storybook-style docs, package publishing, visual regression) serves in-house engineering teams rather than ZSpace's founder buyers.

**Revisit** after 60–90 days of Search Console data: create the page only if "component library" queries land on the design-systems page with poor click-through.

### 94. Responsive vs adaptive — CREATE `responsive-vs-adaptive-design`

**Evidence.** `responsive-ui-design` (537 words; Batch 3 topic 54 is adding a planning kit) answers this only in one FAQ. The comparison has its own results page, but the terms are used inconsistently:
- some sources equate "adaptive" with dynamic serving;
- some with fixed-breakpoint layouts;
- one claims responsive is a subset of adaptive.

**Verified, Google Search Central** (updated 2025-12-10): Google lists responsive design, dynamic serving and separate URLs, and "recommends Responsive Web Design because it's the easiest design pattern to implement and maintain".

**Angle:**
- untangle the terms (fluid responsive, breakpoint-adaptive layouts in CSS, server-side adaptive/dynamic serving, separate m-dot URLs);
- the trade-offs: SEO, maintenance, performance, analytics, content parity for mobile-first indexing;
- where adaptive is legitimate: complex dashboards, data tables, kiosk and in-store screens, legacy m-dot sites, very different device capabilities;
- container queries as the modern middle ground.

**Original asset:** a decision table.

**Follow-up edit.** Replace the FAQ answer on `responsive-ui-design` with a short answer and a link (after Batch 3).

**CTA:** plan a responsive redesign (`/services/ui-ux-design`).

### 95. User research on a limited budget — UPDATE `user-research-methods`

**Existing pages:**
- `user-research-methods` (726 words): methods, planning, recruiting, interviews, synthesis, ethics; one FAQ "Can research be done on a small budget?".
- `usability-testing` (2,626 words).
- `test-website-prototype-before-development` (Batch 3).
- `ux-heuristic-evaluation`.

**Why not CREATE.** A budget page would re-explain methods already on this thin page and compete with it. The better result is one strong research-planning page.

**Add:**
- "Planning research on a limited budget": start from decisions and research questions; choose the cheapest method that answers each one;
- a method-by-question table (interviews, five-user usability test, survey, support-ticket and sales-call review, analytics review, card sort);
- recruiting from your own customers and fair incentives;
- consent and recording (DPDP, UK GDPR; dated, one paragraph);
- bias (leading questions, friends and family, confirmation);
- a synthesis-to-decision log.

**Original asset:** a one-page research plan template.

**Title.** Change to "User Research for Product Design: Methods, Planning and Research on a Small Budget"; owner to confirm. No invented findings.

### 96. Empty states — CREATE `empty-state-ux-design`

**Existing pages.** `ecommerce-empty-states` (633 words) covers store contexts: search, filters, cart, wishlists, sold out. `ux-writing` has one empty-states section.

**Why CREATE.** The general product question (SaaS, apps and dashboards) is a separate audience. It needs a taxonomy:
- first use;
- user cleared;
- no data yet (time-based);
- no results;
- error or failed load;
- no permission;
- offline.

**Sources.** NN/g ("Designing Empty States in Complex Applications: 3 Guidelines", to be read in full at writing) and the Salesforce Lightning, SAP Fiori and PatternFly design systems.

**Key distinction.** An empty list caused by a failed request must not look like a genuinely empty list.

**Original asset:** a state-by-state table (cause, what to say, primary recovery action, what not to do), plus an audit checklist for finding every empty state in a product.

**Boundary.** Store-specific no-results design links to `ecommerce-empty-states`, and that page links back.

**CTA:** request a UX review (`/services/ui-ux-design`).

---

## CRO

### 97. Lead qualification without extra fields — REJECT

Two pages already cover this:
- `improve-website-enquiry-form-conversions` (Batch 1, 2,397 words, "Without Attracting Low-Quality Leads"): field-by-field guidance, the budget-question trade-off, measuring quality over volume.
- `improve-website-lead-quality` (Batch 3): defining a qualified lead with sales, routing, and the FAQ "Should we add more form fields to filter out bad leads?".

A third page would split the intent. **No change.**

### 98. Heatmaps and session recordings, responsibly — UPDATE `ecommerce-heatmaps`

**Existing pages.** `ecommerce-heatmaps` (880 words) and `shopify-heatmap-analysis` (763 words) both cover interpretation and limits. Privacy on `ecommerce-heatmaps` is a single paragraph.

**Why not CREATE.** A third heatmap page would cannibalise. The real gap is responsible use.

**Add an H2 "Using session recordings responsibly":**
- masking defaults and what to mask beyond them (free-text fields, account pages, order numbers, anything shown after login);
- excluding pages;
- retention settings;
- consent by market, each dated and sourced at writing: UK PECR and the DUAA 2025 changes to the analytics-cookie exemption (verify commencement), EU ePrivacy, India DPDP Rules, UAE PDPL, Australia Privacy Act;
- telling users in the privacy notice;
- who in the team may watch recordings.

**Also add:**
- a short lead-gen note (form analytics without capturing what people type);
- a Sources section.

Vendor specifics (Microsoft Clarity, Hotjar) must come from their own documentation.

### 99. Measuring lead quality — REJECT

Batch 3 retired the slug `measure-website-lead-quality` and folded the intent into `improve-website-lead-quality`. That page has "Measure lead quality in GA4", the two GA4 lead reports, and Google Ads qualified and converted lead goals. The Batch 2 attribution hub covers attribution limits.

**Possible minor follow-up** after Batch 3 is reviewed: one funnel-stage definition table (submission → MQL → SAL → SQL → opportunity → won). Not proposed now.

### 100. Prioritising website improvements — REJECT

The Batch 3 update to `ecommerce-experiment-prioritization` (topic 59) adds:
- a scoring worksheet;
- a traffic-feasibility check;
- a lead-gen section;
- corrected framework attributions.

The page already has "Fix, Test or Research" and "Bias in Scoring". `saas-roadmap-prioritization` covers product backlogs. Impact, effort, evidence, confidence, risk and measurement are all present or being added. **No change.**

---

## Geographic handling

No new country pages. India-first framing is kept, consistent with the `.in` constraint and global-audit Q1.

Jurisdiction-specific paragraphs, each dated and sourced, appear only where the answer differs by market:
- **86:** accessibility law;
- **95:** research consent;
- **98:** consent for recordings;
- **82:** test data containing personal data.

## Internal links to add on implementation (targets exist in the repository)

| New or updated page | Links out to | Pages that should link back |
|---|---|---|
| 82 staging | `devops-for-growing-businesses`, `zero-downtime-deployments`, `feature-flag-implementation`, `mobile-app-launch-checklist` | `devops-for-growing-businesses`, `website-maintenance-guide`, `user-acceptance-testing-business-software` |
| 83 tech debt | `software-architecture-review`, `strangler-fig-pattern`, `automated-regression-testing` | `software-architecture-review`, `ecommerce-technical-debt`, `website-redesign-vs-rebuild` |
| 86 a11y testing | `accessible-ui-ux-design`, `accessibility-testing-australia`, `mobile-app-testing` | `mobile-app-testing`, `accessible-ui-ux-design`, `website-accessibility-guide` |
| 88 push integration | `mobile-app-push-notifications`, `mobile-app-deep-linking`, `mobile-app-backend-development` | `mobile-app-push-notifications`, `mobile-app-deep-linking` |
| 90 catalogue | `ecommerce-product-data-architecture`, `ecommerce-product-information-management`, `shopify-collection-page-seo` | the PIM and product data architecture pages |
| 91 fulfilment | `shopify-multi-location-inventory-management`, `ecommerce-fulfilment-integration`, `ecommerce-fulfillment-technology` | `ecommerce-fulfillment-technology` ("Fulfilment on Shopify"), the multi-location page |
| 94 responsive vs adaptive | `responsive-ui-design`, `how-to-make-a-website-mobile-friendly` | `responsive-ui-design` (FAQ) |
| 96 empty states | `ecommerce-empty-states`, `ux-writing`, `saas-onboarding-optimization` | `ecommerce-empty-states`, `ux-writing` |

The anchor text for each link will be chosen when the page is written; every link will be checked against the slug list.
