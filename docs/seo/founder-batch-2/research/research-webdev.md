# Batch 2 research: Web development topics 21–24

Checked 14 October 2026. Search tool is US-only and Reddit was unreachable, so demand evidence comes from Hacker News, forums and the SERP. No search volumes are given. No repo files were edited.

Batch 1 facts reused: none applied directly. Batch 1 webdev research has no sender-requirement, Search Console, GA4 or PHP facts, so those were verified fresh below. The roadmap rows WEB-18 (requirements → UPDATE), WEB-23 (who owns the code → separate CREATE) and WEB-29 (uncooperative or absent vendor → UPDATE the handover checklist) are relevant and are taken into account.

---

## Topic 21: What should a website or web app requirements document include?

**1. Founder question and pain.** "I'm about to brief agencies for a web app, not just a brochure site. What do I write so the quotes are comparable and I don't pay for scope I forgot?" The pain is quotes that can't be compared, change requests mid-build, and disputes over whether something is "done".

**2. Intent and stage.** Informational, leaning commercial. Pre-RFP or vendor-selection stage. This person is close to buying.

**3. Queries.** Primary: "web application requirements document". Supporting: "website requirements document template", "software requirements specification for web app", "what to include in a website brief", "non-functional requirements examples web app", "acceptance criteria examples", "user roles and permissions matrix".

**4. Demand evidence (moderate).** Many agencies publish their own versions, which suggests buyers search for this. Examples: kolonell.com publishes several city-specific copies of one template, and Dorima, Leanware and Simpalm each have one. The roadmap row WEB-18 asks for the same update. Reddit was not checked because it was unreachable. Direct community evidence is weak.

**5. Existing ZSpace coverage.**
- `/blogs/website-requirements-document` (891 words, 0 external sources). It has sections on objectives, audience, sitemap, features, user roles, integrations, CMS, SEO and analytics, security/accessibility/performance, browsers and acceptance criteria, plus an 11-item checklist. Each section is 1–2 sentences and it is website-first.
  - Missing: a permissions matrix, data entities and records (including who owns which data), integration detail (direction, trigger, frequency, source of record), measurable non-functional requirements, environments, admin and back-office needs, data migration, reporting, notifications, audit logs, legal and privacy items, priorities (MoSCoW), out-of-scope and non-goals, assumptions and open questions, and a copyable template.
  - It cites no standard or public method source. Its one example acceptance criterion ("confirmation email within 30 seconds") is fine.
- `/blogs/product-requirements-document` (532 words, UI/UX category) covers a PRD for a feature or product: problem, outcomes, non-goals and journeys. Keep the two distinct. The website/app document is the **pre-vendor scope brief**; the PRD is the **per-feature product spec**. They already cross-link.
- `/blogs/technical-discovery-software-projects` covers what happens after the brief.

**6. SERP weaknesses.**
- https://kolonell.com/en/blog/custom-web-app-requirements-document-template-2026 (plus near-duplicate London and Miami versions): templated city pages with unsourced length and time estimates.
- https://dorima.fr/en/blog/web-application-requirements-document: a usable 8-section template, but no sourcing.
- https://leanware.co/insights/app-requirements-document-template-complete-guide-2025: vendor, generic, app-first.
- https://www.simpalm.com/resources/web-app-frd-template: a feature list framed around a social app, with no non-functional requirements depth.
- https://www.kumsalajans.com/en/blog/web-and-mobile-software/web-software-requirements-document: has a traceability idea but no standard behind it.

None cites ISO/IEC/IEEE 29148 or GOV.UK. None shows *bad vs testable* rewrites of real requirements. None separates "what a founder must decide" from "what the agency should propose".

**7. Buyer potential.** High. Readers are about to send briefs. A downloadable template doubles as a lead magnet and a pre-qualification filter.

**8. Format and original asset.** An updated guide plus a **copyable template** in two tiers: a "Website" tier and an extra "Web app" tier. Original assets:
- (a) **roles × actions permissions matrix** example;
- (b) **integration register** with columns: system, direction, trigger, frequency, source of record, failure behaviour, owner;
- (c) **"untestable → testable" rewrite table** of 8–10 requirements, grounded in the 29148 characteristics (unambiguous, verifiable, singular, feasible);
- (d) **"you decide / agency proposes" split**, so founders don't over-specify technology.

Keep design out. It links to the PRD for feature depth.

**9. Service page and CTA.** /services/website-development (primary) and /services/ui-ux-design. CTA: "Send us your draft and we'll mark the gaps before you go to tender", or "Discuss a web application idea".

**10. Recommendation: UPDATE /blogs/website-requirements-document. Agree.** Do not create a separate "web app requirements" page; it would cannibalise this one. Possibly retitle to "Website and Web App Requirements Document: What to Include (+ Template)" and keep the slug. Keep the PRD page as is, but tighten its intro so it clearly says "a feature-level spec, after you've chosen a team".

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| ISO/IEC/IEEE 29148:2018 is the international standard for requirements engineering processes and information items. Describe it at a high level only. Its text is paywalled, and iso.org returned 403 to the fetch tool, so the title and status were confirmed only via catalogue listings and secondary sources. | https://www.iso.org/standard/72089.html | 14 Oct 2026 (403; not read directly) | [Official, partly unverified] |
| Secondary sources say 29148 lists characteristics of an individual requirement: necessary, appropriate, unambiguous, complete, singular, feasible, verifiable, correct, conforming. "Verifiable" means fulfilment can be proven, ideally measured. **Don't quote the standard; paraphrase and attribute "as summarised in".** | https://arxiv.org/pdf/2502.18617 ; https://arxiv.org/pdf/2408.10886 | 14 Oct 2026 (search summary) | [Industry/academic; exact list unverified against the standard] |
| GOV.UK Service Manual: user needs are "the needs that a user has of a service". The page was last updated 23 Mar 2017. | https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs | 14 Oct 2026 | [Official, UK] |
| GOV.UK user stories have an actor ("As a…"), a need ("I need/want/expect to…") and a reason ("So that…"). Acceptance criteria are "a list of outcomes that you use as a checklist", often written "it's done when…". Last updated 23 May 2016. | https://www.gov.uk/service-manual/agile-delivery/writing-user-stories | 14 Oct 2026 | [Official, UK] |
| A WCAG 2.2 conformance target for the accessibility NFR. Reuse from batch-1 UI/UX research (W3C Recommendation; dated version 12 Dec 2024). | https://www.w3.org/TR/WCAG22/ | batch 1 | [Official] |
| OWASP Top 10:2025 as a reference for security NFRs. Reuse from batch 1. | https://top10.owasp.org/2025 | batch 1 | [Official] |
| "Write measurable non-functional requirements" with targets such as page response or availability. [Inference]: give example *formats*, not recommended numbers. | n/a | | [Inference] |

---

## Topic 22: How much does it cost to integrate third-party APIs into a web app?

**1. Founder question and pain.** "The agency quoted a big number for 'integrations'. Why does connecting Stripe/Xero/HubSpot cost so much, and what will it cost every year after?" The pain is that integration lines are opaque in quotes, sync bugs show up after launch, and recurring costs (API version upgrades, vendor fees) come as a surprise.

**2. Intent and stage.** Commercial investigation. The reader is budgeting or comparing quotes.

**3. Queries.** Primary: "API integration cost". Supporting: "how much does it cost to integrate an API", "third-party API integration estimate", "Xero/HubSpot/Stripe integration cost", "API maintenance cost", "why are integrations expensive", "two-way sync cost".

**4. Demand evidence (moderate).** A crowded vendor SERP with dedicated cost guides from Scopic, Netguru, Merge, Planeks and Bindbee shows commercial demand. HN threads show the effort pain:
- "What are your biggest pains integrating and building APIs?" https://news.ycombinator.com/item?id=34897366. Mentions auth variations, signing, and sandboxes that behave differently from production.
- "How to estimate the development effort for a feature?" https://news.ycombinator.com/item?id=40903049. Advice: prototype the hardest endpoint and use ranges.

Reddit was not verified.

**5. Existing ZSpace coverage.**
- `/blogs/website-api-integration` (913 words, 0 sources): explains how integrations work (REST, GraphQL, webhooks, auth, errors, rate limits). It has no cost or estimation content.
- `/blogs/custom-web-application-development-cost` (1,864 words): a whole-app estimation worksheet with an integrations line. It does not break down per-integration drivers.
- `/blogs/api-integration-reliability` (724 words) covers retries, idempotency and reconciliation. Link to it; don't repeat it.
- `/blogs/api-versioning` (567 words) is about versioning *your own* API, not absorbing vendor deprecations.
- `/blogs/website-api-integrations-list` is a catalogue.
- `/blogs/api-integration-australia` and `/blogs/api-integration-uae` are regional long pieces. Check them for cost sections before publishing to avoid overlap. I did not read them in full.

There is no per-integration scoping worksheet anywhere, so this is a real gap.

**6. SERP weaknesses.**
- https://scopicsoftware.com/blog/api-integration-cost-guide/
- https://www.netguru.com/blog/api-integration-cost
- https://www.merge.dev/blog/cost-of-api-integrations (unified-API vendor, so biased toward "buy")
- https://projectcostestimator.com/blog/api-integration-cost-2026
- https://www.planeks.net/?p=6346

They all lead with dollar ranges that conflict, for example $2k–$30k+ versus $5k–$15k. Hour estimates per auth type are unsourced. None links to vendor docs to show *where* the cost comes from: rate limits, version cadence, vendor API tiers, sandbox differences. None separates one-off from recurring effort in a usable worksheet. A no-price, evidence-linked worksheet would be clearly different.

**7. Buyer potential.** High. Integration-heavy builds (ERP/accounting/CRM sync) are larger projects, and readers comparing quotes are in active purchase.

**8. Format and original asset.** A **per-integration scoping worksheet**, one row per integration, scored Low/Medium/High (no prices) on:
1. Auth type (API key / OAuth with refresh / per-customer OAuth connections)
2. Data entities and mapping (field count, custom fields, transforms)
3. Sync direction (one-way, two-way, conflict rules, source of record)
4. Trigger (webhook / polling / batch) and webhook reliability (retries, ordering, duplicates)
5. Volume vs rate limits (plan-dependent, sandbox vs live)
6. Error handling and reconciliation (link to the reliability post)
7. Sandbox availability and fidelity
8. Vendor API fees and tiers (link to the vendor pricing page; no amounts)
9. Versioning and deprecation cadence → **annual upgrade effort line**
10. Monitoring and alerting, plus who gets paged

Add a **"recurring cost register"** (vendor tier, version upgrades, secret rotation, monitoring, support hours). Add a "build vs iPaaS vs unified API" decision box. Close with how to put this sheet next to vendor quotes.

**9. Service page and CTA.** /services/website-development. Secondary: /services/shopify-development for the Shopify-centric version. CTA: "Send us your integration list and we'll score each one before you request quotes."

**10. Recommendation: CREATE. Agree.** Suggested slug: `/blogs/api-integration-cost-estimate` (avoid "cost" alone; the owner's no-price policy means the H1 should promise a method, e.g. "How to Estimate API Integration Cost: A Scoping Worksheet"). The H1 must address the "how much" question honestly: "it depends on these 10 drivers; here's how to size them". Cross-link from both the cost and the integration posts.

**11. Facts an article would need.** Owner policy: do not quote prices. Rate-limit numbers also change often, so cite the pages as "what to check" rather than quoting figures.

| Claim | Source | Checked | Label |
|---|---|---|---|
| Shopify releases a new API version "every three months at 5pm UTC on the first day of the quarter". Each stable version "is supported for a minimum of 12 months". Requests to an unsupported version fall forward to the oldest supported stable version. **Implication:** budget at least one upgrade review a year per Shopify integration. | https://shopify.dev/docs/api/usage/versioning | 14 Oct 2026 | [Official] |
| Shopify rate limits use a leaky-bucket model. The GraphQL Admin API uses calculated query cost. "Both the bucket size and the restore rate vary by API and by plan." | https://shopify.dev/docs/api/usage/limits | 14 Oct 2026 | [Official] |
| Meta Graph API: each version is "guaranteed to operate for at least two years". The clock starts when the *next* version is released. Calls to an expired version default to the next oldest usable version. | https://developers.facebook.com/docs/graph-api/guides/versioning | 14 Oct 2026 | [Official] |
| Graph API changelog: v26.0 introduced 29 Jul 2026; v25.0 (18 Feb 2026) available until 29 Jul 2028; v24.0 (8 Oct 2025) until 18 Feb 2028. The cadence is roughly two versions a year. Re-check the exact dates before citing, because the v22.0 row read "May 20, 2027", which looked inconsistent. | https://developers.facebook.com/docs/graph-api/changelog | 14 Oct 2026 | [Official] |
| Stripe returns `429 Too Many Requests` with a `Stripe-Rate-Limited-Reason` header. Limits are per account; some endpoints have their own. **Sandbox limits are lower than live mode**, and Stripe "generally discourage[s]" load testing against the sandbox. Read requests have an allocation tied to transaction volume. Large limit increases need contact "at least 6 weeks in advance". | https://docs.stripe.com/rate-limits | 14 Oct 2026 | [Official/Vendor] |
| Stripe webhooks: in live mode Stripe retries delivery "for up to three days with an exponential backoff". It "doesn't guarantee the delivery of events in the order that they're generated". Endpoints "might occasionally receive the same event more than once", so dedupe by event ID. **Implication:** these are cost drivers for idempotency and reconciliation work. | https://docs.stripe.com/webhooks | 14 Oct 2026 | [Official/Vendor] |
| Razorpay: a "Too many requests" (429) response means the rate limit was exceeded. Advice is backoff with retry, reduce polling, and use webhooks. Limit increases go through support. The webhook retry schedule was **not verified**. | https://razorpay.com/docs/errors/common ; https://razorpay.com/docs/api/pagination | 14 Oct 2026 (search summary; not fetched) | [Vendor; fetch before citing] |
| Xero moved from revenue share to a five-tier developer pricing model (Starter, Core, Plus, Advanced, Enterprise) effective **2 March 2026**. Tiers are based on **connections and API data usage (egress)**. Existing apps begin migrating mid-March 2026 with at least 30 days' notice. Revised Developer Terms also restrict using API data to train AI models. **Implication:** API access itself can be a recurring line. Don't quote prices. | https://developer.xero.com/faq/pricing-and-policy-updates ; https://developer.xero.com/pricing | 14 Oct 2026 | [Official/Vendor] |
| HubSpot: private-app daily limits depend on the account's subscription tier. An API Limit Increase add-on exists (not applicable to public Marketplace OAuth apps). Exceeding limits returns `429`. | https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines | 14 Oct 2026 | [Official/Vendor] |
| Third-party "integration cost" ranges conflict widely, e.g. $2k–$30k+ vs $5k–$15k for "moderate". Use only as evidence that averages mislead; do not repeat the figures. | Scopic, Netguru, Merge URLs above | 14 Oct 2026 | [Industry, weak] |
| Regional: India-first readers will integrate Razorpay, Cashfree, Tally or Zoho. Australia: Xero is common. UAE: local gateways. [Inference]. Only Xero and Razorpay docs were checked. | | | [Inference] |

---

## Topic 23: Rebuild a legacy business website or modernise it in stages?

**1. Founder question and pain.** "Our site runs on an old PHP/WordPress build that nobody wants to touch. Do we bet on a full rebuild or fix it bit by bit?" The pain is security exposure from unsupported runtimes, slow change, fear of losing SEO, and a stalled big-bang rewrite.

**2. Intent and stage.** Commercial investigation. The reader is deciding on a project.

**3. Queries.** Primary: "website redesign vs rebuild". Supporting: "rebuild or refactor legacy website", "modernise old PHP website", "WordPress site outdated rebuild or upgrade", "phased website migration", "strangler fig website", "will a rebuild hurt SEO".

**4. Demand evidence (moderate).**
- The perennial HN debate on Spolsky's "Things You Should Never Do": https://news.ycombinator.com/item?id=6006880
- DHH's "REWRITE!" talk (BoS 2015): https://businessofsoftware.org/2015/10/david-heinemeier-hansson-rewrite-basecamp-business-of-software-conference-video-dhh-bos2015/
- Vendor pages on legacy PHP modernisation (SensioLabs, Cipher Projects, Curotec, Droptica).
- Batch-1 UI/UX research found Shopify Community threads on conversion drops after redesigns.

Reddit was not verified.

**5. Existing ZSpace coverage.**
- `/blogs/website-redesign-vs-rebuild` (803 words, 0 sources) has redesign, rebuild and incremental definitions plus a symptom→need table. "Incremental improvement" is only a paragraph. It has no staged roadmap, no runtime end-of-life trigger, no Google source for the SEO claims, and no explanation of how to stage a rebuild.
- `/blogs/website-replatforming` (841 words) already cites Google site-move guidance and has a cutover checklist. **Cannibalisation risk:** keep replatforming about moving to a new platform/CMS. The update here should own the *decision and staging* angle.
- `/blogs/strangler-fig-pattern` (572 words, cites Fowler) is for software systems.
- `/blogs/legacy-software-modernization-australia` (1,800 words) has a phased roadmap for business software, not websites.
- `/blogs/when-does-your-website-need-a-redesign` covers symptoms.
- `/blogs/website-migration-guide` covers execution.

**6. SERP weaknesses.**
- https://sensiolabs.com/blog/2025/rewriting-vs-refactoring-legacy-php
- https://www.cipherprojects.com/blog/posts/rewrite-vs-refactor-vs-replatform-legacy-php/ (its "15–20% of cases" figure is an own-sample anecdote)
- https://madeintandem.com/solutions/legacy-modernization/
- https://www.curotec.com/insights/modernizing-legacy-php-without-a-full-rewrite/
- https://neoground.com/en/systems/modernization

They are developer-facing, focus on application code and aren't written for a marketing website. None ties the decision to dated runtime end-of-life facts or Google's site-move guidance. None points out that **Google recommends moving all URLs at once for small and medium sites**. That nuance matters: stage the *back end*, but don't stage the *URL change* on a small site.

**7. Buyer potential.** High. A legacy rebuild is a substantial engagement, and the readers own sites that already have revenue or SEO equity.

**8. Format and original asset.** Update the page with a **staged-modernisation roadmap for websites**:
- **Stage 0, stabilise:** backups, inventory, runtime and plugin audit against PHP/WordPress support dates.
- **Stage 1, upgrade in place:** PHP/CMS versions, remove dead plugins, hosting move without URL changes (Google's guide).
- **Stage 2, front-end or section-by-section rebuild** behind a routing layer (strangler fig applied to a website: e.g. new `/pricing` and `/blog` served by the new stack via reverse proxy while old pages remain).
- **Stage 3, the URL-change moment:** do it in one cutover for small and medium sites per Google, with a redirect map and redirects kept for at least a year.
- **Stage 4, decommission.**

Also add a **"rebuild now" trigger list** (unsupported runtime that can't be upgraded, the CMS can't model your content, the team can't deploy safely) and a decision table: *stage it* vs *big-bang*.

**9. Service page and CTA.** /services/website-development (primary), /services/ui-ux-design. CTA: "Get a staged modernisation plan for your current site".

**10. Recommendation: UPDATE /blogs/website-redesign-vs-rebuild. Agree.** Add the staged roadmap, the end-of-life facts and Google citations. Keep the title but consider "Website Redesign, Rebuild or Staged Modernisation: Which Do You Need?" Link to the strangler-fig page and the Australian modernisation page instead of repeating them. Add a sentence to `/blogs/website-replatforming` linking back for the decision.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| PHP supported branches: 8.2 (security fixes only until 31 Dec 2026), 8.3 (security until 31 Dec 2027), 8.4 (active to 31 Dec 2026, security to 31 Dec 2028), 8.5 (released 20 Nov 2025; security to 31 Dec 2029). **PHP 8.2 reaches end of life on 31 Dec 2026**, 11 weeks after today, which is a timely hook. | https://www.php.net/supported-versions.php | 14 Oct 2026 | [Official] |
| PHP end of life: 5.6 on 31 Dec 2018; 7.4 on 28 Nov 2022; 8.0 on 26 Nov 2023; 8.1 on 31 Dec 2025. | https://www.php.net/eol.php | 14 Oct 2026 | [Official] |
| WordPress recommends "PHP version 8.3 or greater" and "MariaDB version 10.11 or greater OR MySQL version 8.0 or greater". Older environments (PHP 7.4+) still work but "have reached their official End Of Life and may expose your site to security vulnerabilities". | https://wordpress.org/about/requirements/ | 14 Oct 2026 | [Official] |
| WordPress 7.0 dropped PHP 7.2 and 7.3. The minimum supported version is 7.4. The WP 7.0 release date varies in secondary sources (April vs 20 May 2026), so verify it before citing. | https://make.wordpress.org/core/2026/01/09/dropping-support-for-php-7-2-and-7-3/ ; https://make.wordpress.org/core/2026/05/22/php-support-clarification-2026/ | 14 Oct 2026 (search summary) | [Official; release date unverified] |
| Fowler, StranglerFigApplication (22 Aug 2024): "The alternative that my colleagues and I prefer, is to do a gradual process of modernization." Also: "the reduced risk and earlier value from the gradual approach outweigh its costs." | https://martinfowler.com/bliki/StranglerFigApplication.html | 14 Oct 2026 | [Industry, primary author] |
| Google site moves with URL changes: use permanent redirects (301/308). "Keep the redirects for as long as possible, generally at least 1 year." "Expect temporary fluctuation in site ranking during the move." For small and medium sites, "We recommend moving all URLs on your site simultaneously instead of moving one section at a time"; larger sites can move by section. "a small to medium-sized website can take a few weeks for most pages to move." Map every old URL to a new one. Change of Address only applies to domain or subdomain changes. Page last updated 20 Aug 2026. | https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes | 14 Oct 2026 | [Official] |
| Google hosting moves without URL changes: lower DNS TTL in advance, keep Search Console verification working, expect a temporary crawl-rate dip, and shut down the old host once its traffic reaches zero. Last updated 10 Dec 2025. | https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes | 14 Oct 2026 | [Official] |
| Spolsky (2000) argued rewriting from scratch is the worst strategic mistake (Netscape example). DHH (2015) presents a counterexample. Use only as framing; the original essay was **not fetched**. | https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/ (URL from memory, verify) | not fetched | [Industry, unverified] |
| NN/g overhaul triggers ("technology severely outdated, making critical changes impossible"). Reuse from batch-1 UI/UX research. | https://www.nngroup.com/articles/radical-incremental-redesign/ | batch 1 | [Industry] |

Regional note: the Australian Essential Eight's "patch applications" control is already cited in the AU modernisation post. Link to it rather than repeating it.

---

## Topic 24: What should founders check before handing over (or taking over) a web development project?

**1. Founder question and pain.** "We're ending our agency contract (or our developer is leaving). What do we need in our own name before the final invoice?" The pain is a domain or DNS held by the agency, analytics history stuck under an agency Google account, premium plugin licences in the agency's name, email breaking after DNS changes, and leftover credentials.

**2. Intent and stage.** Informational, but urgent and high-trust. The reader is at the end of a contract or switching vendors, and is often about to hire a new team.

**3. Queries.** Primary: "website handover checklist". Supporting: "agency offboarding checklist website", "transfer website ownership from developer", "developer won't transfer domain", "transfer Google Analytics ownership from agency", "Search Console remove previous owner", "what to get from web developer before ending contract".

**4. Demand evidence (good).**
- Forum threads: "Domain name transfer being refused by original web designer" https://forums.realmacsoftware.com/t/domain-name-transfer-being-refused-by-original-web-designer/24703
- UK Business Forums: "Previous web designer holding my clients .com domain name" https://www.ukbusinessforums.co.uk/threads/previous-web-designer-holding-my-clients-com-domain-name.359925/
- A UK law-firm write-up of a Nominet dispute that recovered a domain from a developer: https://hugginslaw.co.uk/site/library/legalnews/company_recovers_domain_name_from_web_developer.html
- Many agency offboarding checklists rank (rocket.net PDF, osomstudio, witscode, marketingagency.sg).
- The roadmap row WEB-29 independently found the same pain.

**5. Existing ZSpace coverage.**
- `/blogs/software-vendor-handover-checklist` (555 words, **0 external sources**, AU business-systems file) is software-generic: code, IP, infrastructure, credentials, a single "Domains and certificates" row, third-party services, app stores, data, CI/CD, docs and ops, plus a good "verify by doing" list. It is missing website-specific items:
  - registrar account in the client's name, transfer lock and auth code
  - DNS host and CDN/proxy account (e.g. Cloudflare) separate from the registrar
  - CMS admin plus removing agency admins
  - GA4 account-level Administrator
  - GTM container admin
  - Search Console verified owner and removing the old agency's tokens
  - Google Business Profile and ad accounts
  - email sending domains (SPF/DKIM/DMARC) and which services send on the domain
  - premium theme and plugin licence keys and renewal accounts
  - form and CRM endpoints
  - cookie and consent tool account
  - backups at handover and a test restore
  - an "uncooperative or absent vendor" path (WEB-29)
- No sources are cited. It assumes a cooperative vendor.
- Overlap: future WEB-23 "Who owns the code" will cover IP and contracts. Keep IP here to a single row that links forward. Future WEB-28 (rescue) and WEB-29 (absent vendor) also relate. WEB-29 was already planned as an UPDATE to this page, so fold it in.

**6. SERP weaknesses.**
- https://rocket.net/wp-content/uploads/2026/04/agency-offboarding-checklist.pdf (host vendor, WordPress-only)
- https://www.osomstudio.com/?p=6326 (WordPress agency)
- https://witscode.com/blogs/wordpress-site-handover
- https://marketingagency.sg/marketing-agency-handover/
- https://www.ahosting.net/faq/web-hosting/how-to-transfer-a-website-to-a-new-owner.html

They are mostly WordPress-specific, and none cites Google's own docs on Search Console verified vs delegated owners or GA4 account-level vs property-level access. None mentions ICANN transfer locks or Gmail/Yahoo sender requirements. None gives an *order of operations*: secure ownership → confirm access → back up → rotate → remove the vendor. Doing it in the wrong order locks you out.

**7. Buyer potential.** High. Readers switching vendors need a new team now. This is a natural ZSpace entry point for the remote-studio trust angle.

**8. Format and original asset.**
- An expanded checklist with a **"Website and marketing stack" table**. Columns: asset, who must own it, how to verify ownership (not just access), the common trap.
- An **order-of-operations sequence** (do not rotate or remove before confirming your own owner-level access).
- An **"if the vendor won't cooperate" box**: what you can recover yourself (Search Console re-verification via DNS, the registrar's auth-code obligation) vs what needs legal steps (a domain registered in the developer's name → dispute/UDRP-type routes; legal advice).
- Keep it as one page with a "software" section and a "website" section.

**9. Service page and CTA.** /services/website-development (primary), /services/mobile-app-development (app-store rows). CTA: "Taking over a site from another agency? We'll run the ownership audit first."

**10. Recommendation: UPDATE /blogs/software-vendor-handover-checklist. Agree.** Also fold in WEB-29's absent-vendor section as planned. Consider retitling to "Website and Software Handover Checklist: Code, Accounts, Domains and Ownership" without changing the slug. The current file has AU framing; keep it neutral or global, since the content isn't AU-specific. Keep IP detail minimal and point to the future WEB-23.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Search Console roles: Owner ("full control"; can manage users), Full user, Restricted user. A **verified owner** holds a verification token; a **delegated owner** is granted by a verified owner. If all verified owners are removed, remaining users "will lose access to the property after a grace period". A removed owner whose tokens remain "will be able to re-verify ownership". To remove a previous owner, delete all of their verification tokens. Caution: a token may also verify other Google services. | https://support.google.com/webmasters/answer/7687615 | 14 Oct 2026 | [Official] |
| GA4 access: users can be added at **account level** (inherited by all properties) or **property level**. Permissions can increase down the hierarchy but not decrease. Adding or modifying users needs the Administrator role; deleting needs Administrator at account level. **Implication:** the business should hold account-level Administrator itself. The page lists Administrator, Editor and Viewer; Marketer, Analyst and data restrictions are on a linked page **not fetched**. | https://support.google.com/analytics/answer/9305788 | 14 Oct 2026 | [Official] |
| ICANN Transfer Policy (current text): the registrar must give the registrant the AuthInfo code (or a way to generate it) and must not refuse it solely over a payment dispute. A registrar may deny transfer within 60 days of creation or of a prior transfer. A 60-day inter-registrar transfer lock follows a Change of Registrant unless the registrant opted out beforehand. **Advice:** do the registrar transfer *before* changing registrant details. | https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en | 14 Oct 2026 | [Official] |
| **Pending change:** the Transfer Policy Review WG Final Report (4 Feb 2025) recommends eliminating the 60-day post-Change-of-Registrant lock and renaming it "Change of Registrant Data". A registrar article claims Board approval on 7 Jun 2026 with implementation pending. **Not verified on icann.org.** Write "current rules; ICANN has been reviewing them" and re-check before publishing. | https://gnso.icann.org/sites/default/files/policy/2025/correspondence/tpr-team-to-gnso-council-04feb25-en.pdf | 14 Oct 2026 | [Official report; Board status unverified] |
| ccTLDs (.in, .ae, .com.au, .co.uk) follow their own registry rules (NIXI, TDRA/.ae, auDA, Nominet), not ICANN's gTLD Transfer Policy. **Not checked**; flag it as a regional note to verify. | | | [Inference] |
| Gmail (from 1 Feb 2024): all senders need SPF **or** DKIM, valid forward and reverse DNS, and a spam rate below 0.3%. Bulk senders (>5,000/day to Gmail) need SPF **and** DKIM, DMARC (p=none allowed), From-domain alignment and one-click unsubscribe. Gmail says it will begin quarantine enforcement (no date given). | https://support.google.com/a/answer/81126 | 14 Oct 2026 | [Official] |
| Yahoo: all senders need SPF or DKIM and a spam rate below 0.3%. Bulk senders need SPF and DKIM, DMARC at least p=none that must pass, and a one-click list-unsubscribe. **Handover implication [Inference]:** inventory every service that sends as your domain (forms, CRM, ESP, store) before changing DNS. | https://senders.yahooinc.com/best-practices/ | 14 Oct 2026 | [Official] |
| Practitioner trap list (reported by agency guides; not primary): the Cloudflare/DNS proxy account is owned by the agency even when the registrar is yours; premium plugin licences sit in the agency's vendor account; GA/GTM sit under the agency's Google account. | rocket.net PDF; osomstudio; witscode (above) | 14 Oct 2026 (search summary) | [Industry] |
| Domain held by a developer: a UK Nominet DRS case transferred a domain to the company. Registrars treat it as a civil matter. Use only as "legal routes exist; get advice". | https://hugginslaw.co.uk/site/library/legalnews/company_recovers_domain_name_from_web_developer.html | 14 Oct 2026 (search summary) | [Industry; not legal advice] |
| GTM user and container permissions, Google Business Profile ownership transfer, and Meta Business Manager asset ownership are **not fetched**. Fetch the official help pages if those rows are included. | | | [Unverified] |

---

## Open items before drafting

1. Read ISO 29148 via a library or the ISO OBP preview to confirm the list of characteristics, or keep the wording explicitly secondhand.
2. Re-check the Meta Graph API changelog dates (v22 row) and fetch Razorpay's webhook and rate-limit pages directly.
3. Confirm ICANN Board action and timing on Transfer Policy Review; check the ccTLD registries if regional notes are included.
4. Confirm the WordPress 7.0 release date, and fetch Spolsky's essay if it will be quoted.
5. Read `/blogs/api-integration-australia` and `/blogs/api-integration-uae` cost sections to avoid overlap with topic 22.
