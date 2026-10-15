# 03 — Batch 6 (Topics 101–120): Topic-by-Topic Decisions

Decided 15 October 2026 (IST). **Status: decisions only; waiting for owner approval. No site files changed.**

## Evidence base

- **Library:** 1,050 articles in the working tree. That is 1,036 live (per `https://www.zspace.in/sitemap.xml`) plus the undeployed Founder Batch 1–3 pages.
- **Overlap method:** each topic was scored against the slug, title, H2s and FAQs of every article. The H2s, FAQs and key sections of every overlapping page were then read by hand.
- **Roadmap and earlier batches:** compared against the master roadmap (`../founder-batch-1/04-editorial-roadmap-200.csv`) and against the Batch 5 decisions (topics 81–100), which are still pending approval.
- **Research:** search-results research plus official-source checks. See `research/research-notes.md`.

## Limits

- No Search Console, GA4 or keyword data was available, and no volumes are given.
- Search results were observed from the US only.
- A parallel session was still writing Batch 3 files during the audit (files modified 09:30–09:31 IST).
- Topics 61–80 (Batch 4) have no audit or files in the repository.

Rules for implemented items are the same as Batch 5:
- answer first;
- one original asset;
- dated Sources;
- labelled hypothetical examples;
- no prices;
- no research-process notes in visible text;
- substantial updates keep `date` and set `updated`.

## Summary

| # | Topic | Decision | Serving URL | Priority |
|---|---|---|---|---|
| 101 | SQL vs NoSQL | **CREATE** | `/blogs/sql-vs-nosql-web-application` | P1 |
| 102 | Database migration without unnecessary downtime | **CREATE** | `/blogs/database-migration-without-downtime` | P2 |
| 103 | Multilingual web applications | **CREATE** (lowest confidence) | `/blogs/multilingual-web-application-development` | P3 |
| 104 | Audit logs | **UPDATE** | `/blogs/saas-audit-logging` | P2 |
| 105 | Mobile app localisation | **CREATE** | `/blogs/mobile-app-localisation-guide` | P3 |
| 106 | Mobile beta testing | **CREATE** (absorbs roadmap MOB-16) | `/blogs/mobile-app-beta-testing-guide` | P2 |
| 107 | Versioning and release management | **UPDATE** | `/blogs/mobile-app-release-management` | P2 |
| 108 | Deep linking | **UPDATE** | `/blogs/mobile-app-deep-linking` | P2 |
| 109 | Shopify B2B buying experience | **UPDATE** | `/blogs/shopify-for-b2b-ecommerce` | P2 |
| 110 | Shopify POS integration | **CREATE** (resolves roadmap SHP-42) | `/blogs/shopify-pos-integration-guide` | P2 |
| 111 | Metafields and metaobjects | **CREATE** (absorbs roadmap SHP-44) | `/blogs/shopify-metafields-metaobjects-guide` | P1 |
| 112 | Shopify customer accounts | **CREATE** | `/blogs/shopify-customer-account-experience` | P1 |
| 113 | Data-heavy dashboards | **UPDATE** | `/blogs/saas-dashboard-design` | P2 |
| 114 | Design QA before launch | **KEEP + minor update** | `/blogs/design-handoff` | P3 |
| 115 | UX writing and microcopy | **KEEP + minor update** | `/blogs/ux-writing` | P3 |
| 116 | Keyboard navigation and focus | **CREATE** | `/blogs/keyboard-navigation-focus-states` | P1 |
| 117 | B2B service-page conversion | **CREATE** (roadmap CRO-11 slug) | `/blogs/service-page-conversion-optimization` | P1 |
| 118 | SaaS activation drop-offs | **UPDATE** | `/blogs/saas-onboarding-optimization` | P2 |
| 119 | Presenting service packages | **DEFER** (fold into roadmap CRO-29) | planned `/blogs/should-you-show-prices-on-your-website` | — |
| 120 | Measuring a redesign | **CREATE** | `/blogs/measure-website-redesign-success` | P1 |

**Totals:** 11 CREATE · 6 UPDATE · 2 KEEP + minor update · 1 DEFER · 0 MERGE or REJECT.

**If fewer new URLs are wanted:** the P1 creates are 101, 111, 112, 116, 117 and 120. Topics 103 and 105 are the first to defer.

---

## Web applications

### 101. SQL vs NoSQL — CREATE

**Evidence.** No page compares database models for application builders. The nearest pages answer different questions:
- `database-performance-optimization`: tuning;
- `vector-databases-for-ai` and `knowledge-graph-vs-vector-database`: AI retrieval;
- `scalable-website-architecture`: one passing mention.

**Angle.** Choose from access patterns, not from fashion. The page covers:
- data models: relational, document, key-value, wide-column, graph;
- transactions and consistency needs;
- query patterns, including joins and ad-hoc reporting;
- schema evolution;
- operational burden: managed vs self-hosted, backups, skills;
- reporting and analytics needs;
- "both" architectures, such as Postgres with JSONB, or a document store plus a warehouse.

It does not claim that either model is better in general.

**Original asset:** a workload worksheet that maps answers to a model.

**Sources to read at writing:**
- PostgreSQL docs (transaction isolation, JSONB);
- MongoDB docs (multi-document transactions; data modelling);
- DynamoDB developer guide (single-table design and access patterns);
- Firestore docs (query limits).

**CTA:** discuss your web application architecture (`/services/website-development`).

### 102. Database migration without unnecessary downtime — CREATE

**Evidence:**
- `zero-downtime-deployments` has one expand-and-contract section, for schema changes during app deploys.
- `data-migration-australia` covers business-data migration projects (mapping, cleansing, cutover).
- The ecommerce migration pages are about changing platform.

**Gap.** Moving or upgrading the database itself (engine version upgrade, host move to a managed service, engine change) and large schema changes on live tables.

**The page covers:**
- compatibility checks;
- backups plus a tested restore;
- replication-based cutover (logical replication, change data capture, managed migration services such as AWS DMS, verified at writing);
- dual-write risks;
- online schema change tools;
- validation (row counts, checksums, application-level reconciliation);
- the rollback window;
- a monitoring checklist.

**Language.** It says "minimise downtime". It describes the read-only or short write-freeze cutover honestly and does not promise zero downtime.

**Original asset:** a cutover runbook template with go/no-go criteria.

**CTA:** plan a database migration (`/services/website-development`).

### 103. Multilingual web applications — CREATE (lowest confidence)

**Evidence.**
- `multilingual-website-development-uae` (4,565 words) is deep, but it is about a website in Arabic and English for the UAE: CMS, hreflang, RTL.
- The ecommerce localisation pages cover stores.

**Gap.** The application layer is not covered:
- locale negotiation and storing locale on the user profile;
- message catalogues with ICU plural and select rules;
- server-side formatting with `Intl`;
- time zones vs locale;
- localised emails, notifications, PDFs and exports;
- translation keys and the translation management workflow in CI;
- pseudo-localisation testing;
- accessibility (`lang` attribute).

**Boundary.** RTL, Arabic typography and SEO for websites link to the UAE page.

**Risk.** Medium overlap with the UAE page and with topic 105. Defer this first if you want fewer URLs.

**CTA:** discuss an international web application (`/services/website-development`).

### 104. Audit logs — UPDATE `saas-audit-logging`

**Evidence.**
- `saas-audit-logging` (624 words, 2026-10-10) has the same intent. It covers events, schema, integrity, retention and customer access.
- `ai-agent-audit-trail` is AI-specific.

**Add:**
- a timestamp policy (UTC, server-side source, clock sync);
- actor identity, including impersonation, API keys and system actors;
- access control for the log itself;
- what never to log (secrets, tokens, full payment data, unnecessary personal data), citing the OWASP Logging Cheat Sheet;
- an audit log vs application log vs security log comparison table;
- using the log for troubleshooting and support;
- an internal-tools and back-office example, so the page serves business web apps and not only SaaS.

**Title.** Keep the URL. Consider retitling to "Audit Logs for SaaS and Business Web Applications: …" (owner to confirm).

---

## Mobile apps

### 105. Mobile app localisation — CREATE

**Evidence.** No mobile page covers localisation. `ecommerce-localization-vs-translation` covers stores.

**The page covers:**
- iOS String Catalogs and Android resource qualifiers;
- per-app language settings (Android 13+, iOS), verified at writing;
- layout expansion and pseudo-locales;
- plural rules;
- dates, numbers and currency through platform formatters;
- RTL mirroring;
- store listing and screenshot localisation (App Store Connect, Play Console);
- regional product requirements: payment methods, legal text, content ratings;
- region-specific testing.

**Boundary.** Links to 103 for backend and API localisation.

**CTA:** plan an app for new markets (`/services/mobile-app-development`).

### 106. Mobile beta testing — CREATE

**Evidence.**
- `mobile-app-launch-checklist` (Batch 1) covers testing-track logistics and the 12-tester FAQ inside a launch timeline.
- `mobile-app-testing` covers QA (see the Batch 5 proposal).
- Roadmap row MOB-16 (Play closed testing, CREATE) is still open. This page absorbs it.

**Angle.** Running the beta as a programme:
- goals and exit criteria;
- tester selection (internal, friendly customers, target segment);
- TestFlight internal and external testing, with Beta App Review for external testers;
- Play internal, closed and open tracks;
- the personal-account requirement: per Play Console Help, new personal accounts need 12 testers opted in for 14 continuous days (to be read in full at writing);
- a test plan and tasks;
- feedback channels (TestFlight feedback, in-app);
- crash reporting during the beta;
- a triage rubric;
- release-readiness review.

**Boundary.** Timelines and store submission link to the launch checklist.

**CTA:** plan your app beta (`/services/mobile-app-development`).

### 107. Versioning and release management — UPDATE `mobile-app-release-management`

**Evidence.** The page (565 words) has the same intent. It covers rollouts, flags and minimum versions.

**Add:**
- version naming vs build numbers (`CFBundleShortVersionString`/`CFBundleVersion`; `versionName`/`versionCode`);
- semantic versioning as a team convention;
- release trains and cadence;
- release notes ("What's New") practice;
- backward compatibility with older app versions still in use: API versioning (link `api-versioning`) and minimum-supported-version policy;
- a forced-update flow;
- a rollback plan (you cannot roll back a binary, so use halt plus hotfix plus flags);
- a release coordination checklist.

### 108. Deep linking — UPDATE `mobile-app-deep-linking`

**Evidence.** The page (785 words) has the same intent and already states that Firebase Dynamic Links has shut down.

**Add:**
- an installation-state matrix (installed, not installed, outdated version);
- authentication handoff;
- AASA and `assetlinks.json` hosting requirements and common failures;
- an Android App Links verification check;
- security (validating parameters, open-redirect risk);
- a deeper testing section (simulator and adb commands, verification tools);
- Sources.

All platform claims are re-verified at writing.

---

## Shopify and ecommerce

### 109. Shopify B2B buying experience — UPDATE `shopify-for-b2b-ecommerce`

**Evidence.**
- `shopify-for-b2b-ecommerce` (Batch 1, 1,737 words) covers plan availability and limits, a fit worksheet and ERP.
- `wholesale-ecommerce-ux` and `b2b-ecommerce-ux` are generic and thin.

**Facts.** Shopify's April 2026 "B2B for all" announcement (shopify.com/news/b2b-for-all) extended core B2B to Basic, Grow and Advanced:
- company profiles;
- up to 3 catalogues;
- volume pricing and quantity rules;
- vaulted cards;
- payment terms.

The existing page already reflects plan availability. A second Shopify B2B URL would split the cluster.

**Add an H2 "Designing the buyer's ordering experience":**
- company and location set-up;
- catalogue and price-list design;
- quantity rules and volume pricing display;
- quick order and reorder;
- checkout to draft-order review where supported;
- payment terms and vaulted cards;
- B2B in new customer accounts;
- staff approvals: only what Shopify Help documents at writing, otherwise labelled as an app or custom build.

**Links.** Two-way link with 112.

### 110. Shopify POS integration — CREATE

**Evidence.**
- Roadmap SHP-42 was "RESEARCH MORE" because availability was uncertain.
- `retail-ecommerce-integration`, `omnichannel-ecommerce` and `bopis-ecommerce` are platform-neutral.
- No page covers Shopify POS itself.

**The page covers:**
- one inventory across store and online (link to the multi-location page);
- order handling (ship-to-customer, pickup, exchanges across channels);
- unified customer records;
- staff permissions;
- POS Lite vs POS Pro;
- offline mode limits;
- hardware;
- payments by country;
- when POS plus an external retail system is needed.

**India note.** Secondary sources say POS software works in India with third-party hardware and that Shopify Payments is unavailable there. This must be verified on Shopify Help before writing; if it cannot be verified, the India section is dropped.

**CTA:** connect your online and retail stores (`/services/shopify-development`).

### 111. Metafields and metaobjects — CREATE

**Evidence.**
- No page covers this; `ecommerce-product-data-architecture` is platform-neutral.
- Roadmap SHP-44 (`shopify-product-data-model`, CREATE P3, "plan your product data before the build") is absorbed, and its slug is retired. The proposed slug matches the query better.
- Batch 5's topic 90 catalogue page should then only summarise metafields and link here.

**The page covers:**
- metafields (data attached to a resource) vs metaobjects (reusable structured entries);
- definitions, types and validation;
- standard vs custom definitions and category metafields from the Standard Product Taxonomy;
- dynamic sources in themes;
- storefront and API access settings;
- naming and namespace conventions;
- migration from app-owned or legacy data;
- maintenance and governance.

**Original asset:** a "metafield or metaobject?" decision table and a data-model worksheet.

All limits must come from shopify.dev at writing.

**CTA:** structure your Shopify data (`/services/shopify-development`).

### 112. Shopify customer accounts — CREATE

**Evidence.** `ecommerce-customer-account-ux` (869 words) is platform-neutral: what an account should offer. Nothing covers Shopify's account platform.

**Time-sensitive.** Per the shopify.dev changelog, legacy customer accounts were deprecated in February 2026 (exact day to confirm) and are not available to new stores. Shopify has said a sunset date will be announced later in 2026.

**The page covers:**
- new customer accounts: passwordless one-time-code sign-in, order history, self-service returns where enabled, B2B;
- customer account UI extensions;
- the Customer Account API for headless builds;
- theme and app compatibility when moving off legacy accounts, including the 30-day revert window (to verify);
- what still needs apps or custom work;
- an upgrade checklist.

**Boundary.** Generic account UX links to `ecommerce-customer-account-ux`, which links back.

**CTA:** improve your Shopify account experience (`/services/shopify-development`).

---

## UI/UX

### 113. Data-heavy dashboards — UPDATE `saas-dashboard-design`

**Evidence.**
- `saas-dashboard-design` (Batch 2, 2,344 words) covers purpose, a scorecard, all states, chart choice and chart accessibility. This is the same audience and intent.
- `business-intelligence-dashboards-australia` is a BI build guide.

**Gap.** Density and tables.

**Add an H2 "When the dashboard is mostly data: tables, filters and density":**
- table patterns: alignment, sticky headers, column choice, sort, row actions;
- pagination vs virtualised scroll;
- filter design (visible vs panel, applied-filter chips, saved views);
- loading and partial-data states;
- density settings;
- small-screen strategy (prioritised columns, not squeezed tables).

**Sources:** NN/g data-table guidance (read at writing).

### 114. Design QA before launch — KEEP + minor update `design-handoff`

**Evidence.**
- `design-handoff` (updated today in Batch 3, 2,559 words) has "Design QA" and "Implementation Review" H2s.
- Roadmap UX-29 was already decided KEEP on this page.

**Minor update:**
- a pre-launch design QA checklist covering states, spacing, typography, breakpoints, browsers, and visual comparison or visual-regression tools;
- a defect severity table, so cosmetic issues do not block launch while broken states do.

**Edit only after Batch 3 lands.**

### 115. UX writing — KEEP + minor update `ux-writing`

**Evidence.** `ux-writing` (1,337 words) already covers every element the brief lists: buttons, labels and hints, errors, empty states, confirmations, accessibility, voice and tone, a microcopy system.

**Minor update:**
- a terminology-consistency section (a product glossary: one name per concept);
- an error-message pattern table (what happened, why, what to do);
- a Sources section (GOV.UK Design System error-message guidance, NN/g).

There is no new URL.

### 116. Keyboard navigation and focus states — CREATE

**Evidence.**
- `website-accessibility-guide`, `accessible-ui-ux-design` ("Focus States and Keyboard Use") and `accessibility-testing-australia` each give keyboard access a paragraph or one step.
- No page gives a practical keyboard test procedure.

**The page covers these WCAG 2.2 success criteria, quoted from W3C at writing:**
- 2.1.1 Keyboard;
- 2.1.2 No Keyboard Trap;
- 2.4.3 Focus Order;
- 2.4.7 Focus Visible;
- 2.4.11 Focus Not Obscured (Minimum, AA, new in 2.2);
- 2.4.13 Focus Appearance (AAA).

**It also covers:**
- native vs custom controls;
- `tabindex` rules;
- skip links;
- modal focus management (move focus in, trap within, return focus on close), from the WAI-ARIA APG dialog pattern;
- menus and composite widgets (roving tabindex);
- sticky headers hiding focus.

**Original asset:** a 10-minute keyboard test script and a defect log.

**CTA:** request an accessibility review (`/services/ui-ux-design`).

---

## CRO

### 117. B2B service-page conversion — CREATE `service-page-conversion-optimization`

**Evidence.**
- Roadmap row CRO-11 (CREATE P1) already reserves `/blogs/service-page-conversion-optimization`, so it is used instead of the proposed slug.
- `b2b-website-development`, `website-development-for-consulting-firms` and `b2b-lead-generation-website-uae` (UAE) are about building sites.
- `landing-page-development` covers paid and search landing pages.
- `improve-website-lead-quality` covers qualification after the enquiry.

**Angle.** Optimising an existing high-consideration service page:
- project fit ("who this is for, who it isn't for");
- process clarity;
- credible evidence without invented proof (what counts as evidence; how to present it if you have none yet);
- objection handling;
- qualification cues;
- next-step options proportionate to buyer readiness;
- measurement.

**Original asset:** a service-page audit scorecard.

**CTA:** request a service-page review (`/services/cro-audit`).

### 118. SaaS activation drop-offs — UPDATE `saas-onboarding-optimization`

**Evidence.** `saas-onboarding-optimization` (Batch 2 update, 1,612 words) already defines activation and time to value, and its Step 7 is "Research and experiment". Roadmap UX-23 is KEEP on this page. A separate drop-off page would compete for "activation".

**Add an H2 "Finding where activation drops":**
- instrument the steps (event per step, plus account-level properties);
- build the funnel in a product analytics tool or GA4 funnel exploration;
- segment by acquisition source, plan, role and device;
- separate "never started" from "started and stalled";
- pair the numbers with session evidence and short interviews;
- turn findings into experiments or fixes.

Roadmap CRO-19 (trial-to-paid) stays separate.

### 119. Service packages — DEFER

The brief says not to duplicate the pricing-transparency topic. Roadmap CRO-29 (`should-you-show-prices-on-your-website`, CREATE P1, not yet written) is that topic. Presenting packages (scope, deliverables, exclusions, assumptions, optional extras, who each package suits) is the main practical answer to "how do we show prices for services".

**Recommendation:**
- write it as a major section of CRO-29 when that page is commissioned;
- give 117 one short paragraph that links to it;
- no separate URL now;
- revisit if Search Console shows distinct package-comparison queries.

### 120. Measuring a redesign — CREATE

**Evidence.** No page owns "did the redesign work". Nearby pages cover parts of it:
- `website-redesign-vs-rebuild`: the decision;
- `usability-testing`: "When to Re-Test", a qualitative re-test;
- `measure-multi-channel-website-conversions`: attribution;
- `saas-dashboard-design`: one FAQ for dashboards.

Roadmap WEB-06 is KEEP for "when to redesign", which is a different question.

**The page covers:**
- set baselines and success criteria before launch;
- choose metrics by goal: conversion quality, task success, Core Web Vitals, SEO visibility;
- control for traffic mix, seasonality and tracking changes (GA4 annotations, compare equivalent periods, segment by channel);
- why before/after comparisons are not causal proof, and when a staged rollout or holdback can help;
- the timeline (first 72 hours vs 4–12 weeks);
- reporting honestly when results are inconclusive.

**Original asset:** a redesign measurement plan template.

**CTA:** measure your redesign (`/services/cro-audit`).

---

## Geographic handling

There are no new country pages. Market notes appear only where the answer changes, each dated and sourced:
- **110:** POS and payments availability, India;
- **112:** none expected;
- **105 and 103:** RTL and Arabic, linking to the UAE page;
- **116:** a one-line note that legal duties differ by market, linking to the existing UK and Australia accessibility sections.

## Interaction with Batch 5 (pending)

- 111 narrows Batch 5 topic 90: the catalogue page will only summarise metafields.
- 106 and the Batch 5 update to `mobile-app-testing` (topic 87) must link to each other and split the work. Beta programme belongs on 106; the QA matrix belongs on 87.
- 116 and Batch 5 topic 86 (mobile accessibility testing) must link to each other. Web keyboard belongs on 116; mobile assistive technology belongs on 86.

## Internal links (all targets exist; anchors chosen at writing)

| New or updated page | Links out to | Should link back from |
|---|---|---|
| 101 | `database-performance-optimization`, `scalable-website-architecture`, `custom-web-application-development-cost` | `scalable-website-architecture`, `custom-website-vs-web-application` |
| 102 | `zero-downtime-deployments`, `data-migration-australia`, `ecommerce-disaster-recovery` | `zero-downtime-deployments` (expand-and-contract section) |
| 103 | `multilingual-website-development-uae`, `ecommerce-localization-vs-translation` | `multilingual-website-development-uae` |
| 105 | `mobile-app-launch-checklist`, `multilingual-website-development-uae` | `mobile-app-development-process` |
| 106 | `mobile-app-launch-checklist`, `mobile-app-testing`, `mobile-app-crash-reporting` | `mobile-app-launch-checklist`, `mobile-app-testing` |
| 110 | `shopify-multi-location-inventory-management`, `retail-ecommerce-integration`, `bopis-ecommerce` | `retail-ecommerce-integration`, `omnichannel-ecommerce` |
| 111 | `ecommerce-product-data-architecture`, `ecommerce-product-information-management` | `ecommerce-product-data-architecture` |
| 112 | `ecommerce-customer-account-ux`, `shopify-for-b2b-ecommerce` | `ecommerce-customer-account-ux` |
| 116 | `website-accessibility-guide`, `accessible-ui-ux-design`, `accessibility-testing-australia` | `website-accessibility-guide`, `accessible-ui-ux-design` |
| 117 | `improve-website-lead-quality`, `improve-website-enquiry-form-conversions`, `b2b-website-development` | `b2b-website-development`, `website-development-for-consulting-firms`, `website-gets-traffic-but-no-leads` |
| 120 | `website-redesign-vs-rebuild`, `usability-testing`, `measure-multi-channel-website-conversions` | `website-redesign-vs-rebuild`, `ecommerce-website-redesign` |

## Roadmap housekeeping (on approval)

| Row | Change |
|---|---|
| MOB-16 | → 106 |
| SHP-42 | RESEARCH MORE → CREATE (110) |
| SHP-44 | → 111; slug `shopify-product-data-model` retired |
| CRO-11 | → 117 |
| CRO-29 | Adds the 119 scope |
| UX-29 | Stays KEEP + minor (114) |
| UX-23 | Stays KEEP; gains the 118 section |
