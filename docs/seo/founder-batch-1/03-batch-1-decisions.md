# 03 — Batch 1: Topic-by-Topic Decisions

Decided 14 October 2026. Evidence for these decisions:
- similarity scores against all 1,030 articles (method in `02`);
- a manual read of each overlapping article's H2s and FAQs;
- primary-source research in `research/` (one file per cluster, all checked on 14 Oct 2026).

No search volume or ranking data was available, so **every opportunity assessment is qualitative**.

## Summary

| # | Working title | Decision | URL that serves the intent | Priority |
|---|---|---|---|---|
| 1 | Custom website vs web application | **CREATE** | `/blogs/custom-website-vs-web-application` | P1 |
| 2 | Custom web application development cost | **RESEARCH MORE → CREATE** (owner decision 14 Oct: worksheet, no prices) | `/blogs/custom-web-application-development-cost` | P1 |
| 3 | First SaaS MVP: feature prioritisation | **CREATE** | `/blogs/saas-mvp-feature-prioritisation` | P1 |
| 4 | Next.js or a website builder | **UPDATE** | `/blogs/custom-website-vs-website-builder` | P2 |
| 5 | Mobile app or mobile-friendly website first | **UPDATE** | `/blogs/pwa-vs-native-app` | P1 |
| 6 | Native vs cross-platform | **KEEP** | `/blogs/native-vs-cross-platform-app-development` | – |
| 7 | iOS and Android app cost | **UPDATE** | `/blogs/mobile-app-development-cost` | P1 |
| 8 | Validate a mobile app idea | **CREATE** | `/blogs/how-to-validate-mobile-app-idea` | P2 |
| 9 | Shopify theme vs custom development | **KEEP** (+ human review of a title/slug mismatch) | `/blogs/shopify-theme-development` | – |
| 10 | Redesign the Shopify store or install more apps | **UPDATE** | `/blogs/shopify-redesign-vs-rebuild` | P2 |
| 11 | Why is your Shopify store slow | **UPDATE** | `/blogs/shopify-core-web-vitals-performance-guide` | P1 |
| 12 | Shopify integrations before scaling | **UPDATE** | `/blogs/shopify-business-systems-integration-guide` | P2 |
| 13 | How much UX design before development | **CREATE** | `/blogs/how-much-ux-design-before-development` | P2 |
| 14 | UX problem or traffic problem | **UPDATE** (same page as 17) | `/blogs/website-gets-traffic-but-no-leads` | P1 |
| 15 | Redesign the whole site or fix the UX | **KEEP** | `/blogs/website-redesign-vs-rebuild` | – |
| 16 | When a startup needs a design system | **KEEP** | `/blogs/design-systems-for-teams-that-move-fast` | – |
| 17 | Traffic but no leads | **UPDATE** | `/blogs/website-gets-traffic-but-no-leads` | P1 |
| 18 | What to A/B test first | **KEEP** (lead-gen angle goes into 20) | `/blogs/ecommerce-ab-testing` | – |
| 19 | Improve enquiry forms without low-quality leads | **CREATE** | `/blogs/improve-website-enquiry-form-conversions` | P1 |
| 20 | CRO roadmap with limited traffic and budget | **CREATE** | `/blogs/cro-strategy-low-traffic-websites` | P1 |

**Totals:**

| Decision | Count | Notes |
|---|---|---|
| CREATE | 6 | New URLs |
| UPDATE | 8 topics | 7 existing pages, because topics 14 and 17 resolve to the same page |
| KEEP | 5 | |
| RESEARCH MORE | 1 | |
| MERGE | 0 new | The existing proposal (`why-is-my-website-not-converting` → `website-gets-traffic-but-no-leads`) is still awaiting the owner |

Only 6 of the 20 proposed slugs justify a new page. The batch is **not** padded to 20.

---

## Web development

### 1. Custom Website vs Web Application: CREATE

- **Founder problem.** Quotes for "a website" differ by an order of magnitude, and founders cannot tell whether they need a site, a site with a CMS, or software with logins. The real risk is mis-scoping in either direction.
- **Intent and stage.** Informational. Problem definition, before asking for quotes.
- **Queries (qualitative).** "website vs web application", "do I need a website or a web app", "website with login", "customer portal vs website".
- **Existing coverage.** None of the existing pages answer this directly:
  - `website-development-guide`, `low-code-vs-custom-software` and `replacing-spreadsheets-with-custom-software` are adjacent.
  - The top intent match (0.38) is an Australian security checklist.
- **Evidence of demand.**
  - Founder-forum evidence is weak: Indie Hackers thread titles only, because Reddit was unreachable.
  - The query is mainly fed by agency content.
  - Commercial value comes from scoping, not volume.
- **SERP gap (US results only).**
  - Ranking pages define the terms and treat the choice as binary.
  - None offers a self-classification test or a "marketing site plus one logged-in module" path.
  - None covers the obligations that start once you store personal data.
- **Original contribution.**
  - A requirement-classifier worksheet. Tag each requirement by login, stored user data, payments or bookings, roles, and integrations.
  - A hybrid path.
  - A "what changes once you hold personal data" box (India DPDP, UK GDPR, Australian Privacy Act threshold, Singapore PDPA), linked to primary sources.
- **Service and CTA.** `/services/website-development` · "Discuss a web application idea".
- **Who should link to it.**
  - `website-development-guide`
  - `website-development-cost`
  - `low-code-vs-custom-software`
  - `custom-website-vs-website-builder`
  - `website-requirements-document`

### 2. Custom Web Application Development Cost: RESEARCH MORE

> **Update, 14 Oct 2026:** the owner chose "worksheet, no prices". The topic was created as "How to Estimate the Cost of a Custom Web Application" (see `05`). The reasoning below is the original assessment.

- **Why not create now.**
  - The global audit (P2-8) found that the existing cost guides convert poorly because they give no numbers.
  - The brief forbids invented prices.
  - ZSpace has not approved publishing its own ranges.
- **What the research found.**
  - **Rate data exists, but none of it is reliable project-cost data.**
  - Clutch (October 2026) publishes headline hourly bands and project averages. They come from self-selected reviews and do not reconcile.
  - The UK framework day-rate file (DOS7, June 2022) lists suppliers' maximum rate-card prices, not prices actually paid, and contains placeholder values.
  - Stack Overflow 2025 and the US BLS give salary data.
  - No official rate data was found for India, UAE, Australia or Singapore.
- **The option that would work.** Retitle as "How to Estimate the Cost of a Custom Web Application".
  - Scope → effort → rate (the reader's own) → running costs.
  - Questions to ask each quote.
  - Sourced running-cost lines from vendor pricing pages, labelled as such.
  - ZSpace's own ranges only if the owner supplies them.
- **Owner decision needed.** Publish the worksheet without prices, publish with ZSpace's ranges, or defer. `/blogs/custom-web-application-development-cost` is reserved in the roadmap (WEB-02).

### 3. What Should Your First SaaS MVP Include?: CREATE

- **Founder problem.** Founders over-scope the first version, or cut the wrong things, such as access control.
- **Intent and stage.** Informational / commercial investigation. The founder is preparing to brief a team.
- **Existing coverage.**
  - Only regional MVP guides exist: `mvp-development-australia` and `mvp-development-uae`, which are 0.75 similar to each other.
  - `saas-roadmap-prioritization` is about mature roadmaps.
  - No market-neutral page answers "what goes in v1". The audit also bars more regional pages.
- **SERP gap.** Generic listicles. Some ranking advice says to skip authentication, which conflicts with OWASP's 2025 Top 10 (A01 Broken Access Control, A07 Authentication Failures).
- **Original contribution.**
  - A "riskiest assumption first" scoping worksheet.
  - An in/out/later table.
  - A "do not cut" box: access control, authentication, audit logging basics, backups and data export.
  - Correct attribution of the frameworks:
    - Ries's MVP definition, confirmed.
    - McBride's RICE (Intercom, 2018), confirmed.
    - Kano model: cite the original paper without page numbers, because sources conflict.
    - MoSCoW: origin unverified. Describe it without a claimed origin.
- **Service and CTA.** `/services/website-development` (secondary: `/services/ui-ux-design`) · "Plan an MVP".
- **Who should link to it.**
  - `saas-roadmap-prioritization`
  - `mvp-development-australia`
  - `mvp-development-uae`
  - `saas-website-development`
  - `ai-powered-saas-development`
  - `technical-discovery-software-projects`

### 4. Next.js or a Website Builder: UPDATE `custom-website-vs-website-builder`

- **Why not a new URL.** "Next.js vs a builder" is the same decision as "custom vs builder". The existing page is the 0.59 match. A new page would cannibalise it.
- **What to add.** The existing page is 709 words with no sources.
  - A "what you can take with you" table, cited from each vendor's own help docs:
    - Wix: sites stay on Wix's servers.
    - Squarespace: partial WordPress XML export.
    - Webflow: code export excludes the CMS, ecommerce and forms. Re-check this; it was verified only from a search excerpt.
    - Framer: its help centre is self-contradictory on export, so do not state a position.
  - Next.js hosting realities. Vercel's Hobby plan is non-commercial, so state hosting as a cost.
  - Google's JavaScript SEO guidance, phrased carefully: pre-rendering helps. Not "Next.js ranks better".
  - A total-cost-of-ownership worksheet.
- **Set `updated`.** Yes, this is a substantial revision. Keep the URL.
- **Service and CTA.** `/services/website-development` · "Discuss a web application idea" or "Start a Project".

## Mobile apps

### 5. App or Mobile-Friendly Website First: UPDATE `pwa-vs-native-app`

- **Why not a new URL.** Four pages already cover app vs web: `pwa-vs-native-app`, `ecommerce-pwa-vs-native-app`, `ecommerce-mobile-app-vs-mobile-website` and `progressive-web-app-development`. What is missing is the *startup* framing: start on the web, and move to an app when specific triggers appear.
- **What to add.**
  - A "Should a startup start with the web?" section with explicit triggers for moving to an app.
  - Store friction the web avoids:
    - Apple Developer Program: US$99 a year.
    - Google Play: US$25 one-time fee.
    - Google Play's closed-testing gate for personal accounts created after 13 Nov 2023 (12 testers for 14 days).
  - iOS web push works only for Home Screen web apps (iOS 16.4+, WebKit).
  - The page already cites two WebKit sources.
- **Roadmap link.** The web cluster's "web app or mobile app first" row was merged into this decision (MOB-01).

### 6. Native vs Cross-Platform: KEEP

- **Why.** The page exists at the exact proposed slug. It was updated on 9 Oct 2026, and its time-sensitive claims are current:
  - Xcode 26 is required since 28 Apr 2026.
  - Target API 36 is required from 31 Aug 2026.
  - Compose Multiplatform has been stable on iOS since May 2025.
  - It already cites JetBrains, Apple and Android sources.
- **Optional light citation pass.** Do not set `updated` for these:
  - React Native New Architecture: default since 0.76, and 0.82 is the first release running only on it.
  - React Native's docs recommend a framework such as Expo.
  - Flutter's Impeller is the only renderer on iOS.
  - The Kotlin Multiplatform web target is still Beta.

### 7. iOS and Android App Cost: UPDATE `mobile-app-development-cost`

- **Why not a new URL.** "iOS and Android app cost" is the same query family. The page is 710 words with no figures and no sources.
- **What to add.** Verified fixed costs and rules, not market averages:
  - **Developer accounts:** US$99 a year for Apple; US$25 one-time for Google.
  - **Google Play service fees** (changed in 2026):
    - US, UK and EU since 30 Jun 2026: 10% on the first US$1M and on subscriptions, plus 5% if Google's billing is used.
    - Australia and Japan moved on 30 Sep 2026.
    - India, UAE and Singapore are unchanged at 15%/30%.
  - **Apple EU terms from 1 Oct 2026:** 26% for in-app purchase, 20% with an alternative processor, 15% for link-outs (10% for small developers).
  - **Apple US:** link-out commission is still being litigated (Supreme Court review granted in June 2026). State it as unresolved.
  - **Recurring compliance cost:** Apple's annual Xcode SDK deadline and Google's annual target-API deadline.
  - **A cost-estimation worksheet.** Add ZSpace's own ranges only if the owner approves them.
- **Before publishing.** Re-fetch Apple's EU support page; it was seen only via search snippets.
- **Keep `mobile-app-development-cost-australia` separate.** Its AUD and market framing differ (global audit F3).

### 8. Validate a Mobile App Idea: CREATE

- **Founder problem.** "Should I spend ₹/AED/£ on building this?" Founders need cheap evidence before a build.
- **Existing coverage.** `ai-product-idea-validation` is AI-specific (0.59). `mvp-development-australia` is regional. No mobile-specific validation guide exists.
- **What makes the mobile angle distinct** (each fact verified on official pages):
  - TestFlight allows up to 100 internal and 10,000 external testers, with public links.
  - Google Play's closed-testing rule: 12 testers opted in for 14 continuous days, for personal accounts created after 13 Nov 2023.
  - Store-listing experiments: Play allows up to 2 variants; Apple's product page optimisation allows up to 3 treatments for 90 days.
  - Fake-door and landing-page tests, concierge MVPs, and "does this need to be an app at all" (links to topic 5).
- **Original contribution.** An evidence ladder (cheapest test first), a kill/continue criteria template, and a "what each test can and cannot prove" table.
- **Service and CTA.** `/services/mobile-app-development` · "Discuss an app project" / "Plan an MVP".
- **Who should link to it.** `mobile-app-development-process`, `mobile-app-development-guide`, `ai-product-idea-validation`, `pwa-vs-native-app`.

## Shopify and ecommerce

### 9. Shopify Theme vs Custom Development: KEEP (human review)

- **Why.** Three pages already serve this. Body overlap with the slug-matching page is 0.79, but the text is not copied (0.7% shared 8-word sequences):
  - `shopify-theme-development` ("Custom Theme vs Existing Theme")
  - `shopify-theme-vs-custom-development` ("Theme Customization: What Can You Actually Change?")
  - `when-do-you-need-custom-shopify-development`
- **Issue for the owner.** The URL whose slug matches the query answers a different question.
- **Options** (no URL change either way):
  - **(a)** Retitle that page so its H1 addresses theme vs custom, built around a "lightest layer that works" ladder.
  - **(b)** Leave it, and point internal anchors for "theme vs custom" at `shopify-theme-development`.
  - **Recommendation:** (b) now, and (a) only if Search Console shows the slug page getting impressions for the theme-vs-custom query.

### 10. Redesign or Install More Apps: UPDATE `shopify-redesign-vs-rebuild`

- **Why this target.** The cluster researcher suggested the app checklist page; the roadmap pass chose the redesign page. I chose the redesign page so each page keeps one intent:
  - "Redesign, rebuild, or add apps" is a redesign decision.
  - App auditing stays with `shopify-speed-checklist-before-you-add-another-app`.
- **What to add.**
  - A fourth branch in the decision framework, "add or replace an app".
  - A keep / replace / absorb / remove table for the app stack.
  - Timely platform facts:
    - Shopify Scripts stopped running on 30 Jun 2026.
    - Storefront script tags stop on 1 Mar 2027.
    - Re-verify on changelog.shopify.com the 1 Oct 2026 date after which apps can no longer create script tags.
- **Also.** Cross-link both ways with the app checklist page using distinct anchors.

### 11. Why Is Your Shopify Store Slow: UPDATE `shopify-core-web-vitals-performance-guide`

- **Why not a new URL.** Five pages already touch Shopify speed (see `02`).
- **What to change.** Convert this page into the troubleshooting flow:
  1. Which number to trust: Shopify's Web Performance dashboard uses real-visitor data at the 75th percentile, can lag up to 36 hours, and shows nothing for password-protected stores.
  2. Which metric fails, on which template.
  3. What changed: app, theme or tag.
  4. Fixes for each metric.
  5. Test on a duplicate theme.
  6. Re-measure.
- **Facts.** Use the web.dev thresholds exactly: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Use Shopify's own 2026 speed–conversion figure only as labelled vendor correlation data. **Do not** use the "1 second = 7%" statistic.
- **Set `updated`.** Yes. Change `seoTitle` towards "Why Is My Shopify Store Slow?"; the H1 may stay.
- **Cross-links.** `shopify-speed-cro` (conversion impact) and `why-is-my-website-slow` (non-Shopify).

### 12. Shopify Integrations Before Scaling: UPDATE `shopify-business-systems-integration-guide`

- **What to add.**
  - An ordered checklist:
    1. Payments and tax.
    2. The inventory system of record.
    3. Fulfilment, 3PL and COD.
    4. ERP and accounting.
    5. Marketing and customer data.
    6. Shopify Flow.
  - "What Shopify already does natively" and plan limits:
    - Flow is free on Basic and above, but Send HTTP Request needs Grow or above.
    - GraphQL Admin API rate limits by plan.
    - REST is legacy; new public apps must use GraphQL since 1 Apr 2025.
  - A short market box:
    - Shopify Payments is not available in India.
    - Shopify Tax covers the US, EU, UK and Canada; Basic Tax covers Australia and Singapore; India and UAE rates are set manually.
- **Scope.** Keep API detail in `shopify-app-integration-guide`.
- **Verify before writing.** UAE Shopify Payments eligibility, and the current certified ERP connector list.

## UI/UX

### 13. How Much UX Design Before Development: CREATE

- **Founder problem.** "Do I need Figma for every screen before devs start, or can we design as we go?" Under-designing causes rework; over-designing burns runway.
- **Existing coverage.** `product-design-process`, `design-handoff`, `wireframing-vs-prototyping` and the two discovery pages describe *what* the activities are. None answers *how much is enough before build* (top match 0.36).
- **Original contribution.**
  - A decision matrix: the riskiest unknown (desirability / usability / feasibility) against the delivery model (fixed-scope agency, in-house iterative, no-code).
  - A "ready to build" checklist covering core flows, states, content and the component baseline.
  - Fidelity guidance from NN/g.
  - The "5 users" heuristic with its caveats: about 85% of problems only under the model's assumptions; 3–4 users per distinct group; 20+ for quantitative studies.
- **Avoid cannibalising.** Shorten the "Choosing Fidelity" section in `wireframing-vs-prototyping` and link it here.
- **Service and CTA.** `/services/ui-ux-design` · "Plan an MVP" / "Request a UX review".

### 14 and 17. UX Problem or Traffic Problem / Traffic but No Leads: UPDATE `website-gets-traffic-but-no-leads`

- **Why not new URLs.** Both proposed slugs (`website-ux-problem-vs-traffic-problem`, `website-traffic-but-no-leads`) target the same diagnostic intent as `website-gets-traffic-but-no-leads`. That page already overlaps `why-is-my-website-not-converting` (5.9% shared 8-word sequences, 0.66 body similarity; MERGE proposed on 13 Oct).
- **What to add.** A step-by-step diagnosis:
  1. Prove the form actually delivers and the GA4 `generate_lead` key event fires.
  2. Traffic quality: informational vs commercial landing pages, by channel.
  3. Volume vs rate.
  4. Landing page × device.
  5. Behaviour signals: Microsoft Clarity's documented definitions of rage clicks, dead clicks and quick-backs.
  6. Five-user tests.
  7. A "conversions dropped after a redesign or migration" checklist.
- **Facts.** GA4 engagement-rate and bounce-rate definitions, cited to GA4 Help.
- **Owner decision needed.** Approve the MERGE (301 `why-is-my-website-not-converting` → this page after moving any unique content), or keep both and differentiate. Until then, update this page only.

### 15. Redesign the Whole Site or Fix the UX: KEEP

- **Why.** `website-redesign-vs-rebuild` already presents three options, including incremental improvement, with a decision framework.
- **Optional.**
  - Add NN/g's triggers for a full overhaul, citing Loranger (2015).
  - Add distinct reciprocal links between `website-redesign-vs-rebuild`, `when-does-your-website-need-a-redesign` and `ux-debt`.

### 16. When a Startup Needs a Design System: KEEP

- **Why.** The page's FAQs already answer "Does a small team need one?" and "What should a first design system include?". It also has a "When a Design System Is Justified" section.
- **Optional enhancements** (a minor update, no date change unless substantial):
  - A clearer startup-timing H2.
  - The Design Tokens Community Group format reached its first stable version (2025.10) on 28 Oct 2025. It is a W3C *Community Group* report, not a W3C Standard.
  - NN/g's caution that a full system rarely pays off at the prototype stage.

### 18. What to A/B Test First: KEEP

- **Why.** `ecommerce-ab-testing` is literally titled "What Should You Test First?", and `ecommerce-experiment-prioritization` covers ordering.
- **What the gap really is.** For non-ecommerce lead-generation sites, the honest answer is usually "you can't run a valid A/B test yet". That belongs in topic 20.
- **Small change.** Add a "Running a lead-generation site?" note to `ecommerce-ab-testing` linking to topic 20. This is a minor edit; no date change.

## CRO

### 19. Improve Enquiry Forms Without Low-Quality Leads: CREATE

- **Existing coverage.** `website-lead-generation` has a short Forms section (top match 0.48). No page treats form design against lead quality. The library is ecommerce-heavy.
- **SERP gap.** Page one is mostly form-tool vendor blogs with no usability-research or accessibility sourcing and no consent guidance.
- **Original contribution.**
  - A field-by-field table weighing friction against qualification value.
  - Separating three problems with three different fixes:
    - bots: Cloudflare Turnstile modes; reCAPTCHA v3 scores 0.0–1.0 with a 0.5 default threshold;
    - fake details from real people;
    - genuinely low-intent enquiries.
  - Accessibility: WCAG 2.2 3.3.1, 1.3.5 and 3.3.7. Do not apply 3.3.8 to contact forms; it concerns authentication.
  - Measuring quality, not just volume: GA4 `generate_lead` → `qualify_lead` / `disqualify_lead` / `close_convert_lead`.
  - A regional consent box covering DPDP, UK GDPR/PECR, UAE PDPL, the Australian Privacy and Spam Acts, and Singapore PDPA/DNC for phone fields.
- **Facts.** Baymard: 11.3 average checkout fields in 2024 and "most sites need only 8"; 39% of sites require a phone number without explaining why. This is checkout data, so it must be labelled as such. NN/g: labels outside the field; validate inline after the user leaves the field. GOV.UK: only ask what you need.
- **Implementation note.** ZSpace's own contact form already applies several of these (honeypot, optional website field, budget question, privacy notice, `generate_lead` only after a confirmed send). It can be described factually as the site's own implementation, without results claims.
- **Service and CTA.** `/services/cro-audit` · "Discuss a CRO audit".

### 20. CRO Roadmap with Limited Traffic and Budget: CREATE

- **Existing coverage.** None for lead-gen sites. `ecommerce-cro-testing-roadmap` has a short "Low-Traffic Roadmaps" H2 for stores (top match 0.32).
- **Original contribution.**
  - A sample-size reality table, computed at α = 0.05 and power 0.8. Example: 2% baseline, 20% relative lift → about 21,100 visitors per variant (independently recomputed: about 21,080). Cross-check against Evan Miller's calculator before publishing.
  - Research-led methods that need no A/B test: five-user tests, form analytics, session review, message-match audits, customer interviews.
  - A 90-day roadmap: measurement → research → obvious fixes → one bold change, with before/after measured honestly.
  - It also absorbs topic 18's lead-gen angle.
- **Facts.**
  - Google Optimize shut down on 30 Sep 2023. Google pointed users to AB Tasty, Optimizely and VWO integrations.
  - Do **not** quote a Kohavi traffic threshold; no primary source was found.
- **Service and CTA.** `/services/cro-audit` · "Discuss a CRO audit".

---

## Research limitations that apply to all decisions

- **Search was US-only.** India, UAE, Australia, UK and Singapore SERPs were not observed.
- **Reddit was unreachable from every route.** Founder-question evidence comes from Hacker News, Indie Hackers (titles only), Shopify Community, HubSpot/Zoho community and Figma forum threads. A manual Reddit and People-Also-Ask pass is recommended before drafting.
- **No Search Console, GA4 or keyword data.** Priorities are qualitative.
- **Unverified items** are listed in each `research/*.md` file and in the README's outstanding issues. None of them may appear in an article until verified.
