# Batch 4 research: UI/UX topics 73–76 (checked 15 Oct 2026)

Method and limits:
- Existing pages were checked against posts.json and the full text in `src/lib/blog-data*.ts`.
- Sources were opened with WebFetch on 15 Oct 2026 unless marked "Batch 1–3".
- WebSearch is US-only and Reddit is unreachable, so community-demand evidence is weak for every topic below. No search volumes are given.
- Batch 5 (`docs/seo/founder-batch-5/`) has no topic overlapping 73–76. Its README notes that Batch 4 had no audit when it ran.

---

## Topic 73: How to conduct a UX audit (process, checklist and deliverables)

**1. Founder question and pain.** "Our product or site feels hard to use and numbers are slipping. How do we find out what's wrong before paying for a redesign, and what should an audit hand us?" The pain is fear of an expensive redesign that is based on opinion, plus not knowing what a good audit output looks like.

**2. Intent and stage.** Informational and how-to, with commercial investigation alongside. The searcher is either a PM who will run the audit or a founder judging an agency's audit. Stage: problem-aware to solution-aware.

**3. Queries.**
- Primary: "how to conduct a UX audit".
- Supporting: "UX audit checklist", "UX audit process", "UX audit report template", "UX audit deliverables", "UX audit vs heuristic evaluation", "how long does a UX audit take".
- Cost and deliverables ("UX audit cost", "what should a UX audit include") is roadmap UX-06 and targets /blogs/ux-audit.

**4. Demand evidence.** Weak to moderate. On the US SERP, UXPin, CareerFoundry, Maze, UXCam, Webstacks and Onilab each run a "how to conduct a UX audit" guide, which suggests a stable informational SERP. No community threads were checked because Reddit is unreachable. Search summaries noted that the top results describe the process but "did not give a standard deliverables list". That is a gap.

**5. Existing ZSpace pages: is there cannibalisation?**
- **/blogs/how-to-conduct-a-ux-audit** (2,008 words, 28 Sep 2026, no external links).
  - Practitioner method: a 12-step workflow (the brief said 10; the page actually has 12).
  - Step 7 is an issue-log schema. Step 8 gives Nielsen's 0–4 severity scale in prose and a table, and attributes the "rate after the sessions" advice to NN/g without a link. The "How many people" FAQ cites NN/g's "three to five evaluators" without a link.
  - Step 11 already lists the report contents: summary, scope and method, top findings, full log, quick wins, what works.
  - FAQs: how to, steps, report, without testing, how many people, tools, prioritise, vs heuristic evaluation, how often, what not to include.
- **/blogs/ux-audit** (1,145 words, updated 9 Oct 2026, one external link to WCAG 2.2 "new in 2.2").
  - Definition and decision page: when an audit makes sense, a one-table process summary that links to how-to-conduct for detail, a 12-item website checklist, prioritisation factors, findings to plan, audit vs redesign, an Australian section, and UX vs CRO audit.
  - FAQs: what is it, includes, how long, deliverables, DIY, vs redesign, vs CRO.
- **Overlap: low to moderate, and the split is already deliberate.**
  - ux-audit answers "what is it, do I need one, what do I get". It sends readers to how-to-conduct for method.
  - how-to-conduct answers "how do I run one". It links back.
  - Shared ground: the "how long" topic (FAQ on one page, H2 on the other), prioritisation (a factor table on ux-audit; a full step on how-to-conduct), and a "what does it deliver" answer on both (an FAQ on ux-audit; Step 11 on how-to-conduct).
  - The titles target different head terms ("UX audit" vs "how to conduct a UX audit").
  - I see no need to merge. The real risk is UX-06 adding cost and deliverables content to ux-audit that duplicates Step 11. Keep the deliverables *specification* (what "good" looks like, sample log row) in one place.
- **Missing or outdated.**
  - Neither page links to NN/g's heuristics, severity or how-to-conduct articles, even though both rely on them.
  - how-to-conduct has no "deliverables at a glance" table that a buyer could use to check an agency's output.
  - No downloadable or copyable issue-log template exists.
  - /blogs/ux-heuristic-evaluation (1,535 words) also has no external links. It should get the same citations.

**6. SERP weaknesses** (from search snippets; do not copy):
- https://www.uxpin.com/studio/blog/ux-audit/
- https://careerfoundry.com/en/blog/ux-design/how-to-conduct-a-ux-audit/
- https://maze.co/collections/ux-ui-design/ux-audit/
- https://uxcam.com/blog/ux-audit/
- https://onilab.com/blog/user-experience-ux-audit

Most are tool-vendor content that steers toward the vendor's own product (prototyping, testing or session replay). Their deliverables sections are vague or missing, and few give a severity scale with its source. One cites "2–4 weeks" with no basis.

**7. Qualified-buyer potential.** Moderate. The readers are often in-house PMs who will do it themselves, but the page is the natural lead-in to "have someone run it for us". ux-audit and UX-06 carry the stronger buyer intent.

**8. Format and original asset.** Keep the step-by-step guide. Add one asset: a **"What you should receive" deliverables table** (deliverable, what good looks like, red flag), plus a copyable issue-log row example using the existing Step 7 fields. The asset must be ZSpace's own; no fabricated client data.

**9. Service and CTA.** /services/ui-ux-design, with /services/cro-audit secondary. CTA: "Request a UX review".

**10. Recommendation: KEEP + minor update to /blogs/how-to-conduct-a-ux-audit. I agree with your call, with three refinements:**
1. Add the external citations listed below to how-to-conduct: heuristics, severity, and how to conduct a heuristic evaluation. Add the same three to /blogs/ux-heuristic-evaluation.
2. Add a short "Deliverables checklist" table under Step 11 that turns the prose into a buyer check. Don't duplicate it on ux-audit. When UX-06 updates ux-audit, it should cover cost drivers and scope tiers and link to this table rather than restate it.
3. Correct any copy that calls it a "10-step" workflow. It has 12 steps.

Do not create /blogs/ux-audit-process-checklist (the slug in topics4.json). It would be a third page on the same query.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Nielsen's 10 heuristics, by exact name: Visibility of System Status; Match Between the System and the Real World; User Control and Freedom; Consistency and Standards; Error Prevention; Recognition Rather than Recall; Flexibility and Efficiency of Use; Aesthetic and Minimalist Design; Help Users Recognize, Diagnose, and Recover from Errors; Help and Documentation. Jakob Nielsen, first published 24 Apr 1994, last reviewed 30 Jan 2024. | https://www.nngroup.com/articles/ten-usability-heuristics/ | 15 Oct 2026 | [Industry] |
| Severity scale 0–4. 0 = "I don't agree that this is a usability problem at all"; 1 = "Cosmetic problem only"; 2 = "Minor usability problem"; 3 = "Major usability problem"; 4 = "Usability catastrophe: imperative to fix this before product can be released". Severity combines frequency, impact and persistence; market impact is considered too. Nielsen, 1 Nov 1994. | https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/ | 15 Oct 2026 | [Industry] |
| Rate severity after the sessions, independently per evaluator. A single evaluator's ratings are "too unreliable to be trusted"; the mean of three evaluators is satisfactory for many practical purposes. | same URL | 15 Oct 2026 | [Industry] |
| "Ideally, three to five people should independently evaluate the same interface." Kate Moran and Kelley Gordon, 25 Jun 2023. The article gives no percentage of problems found, so don't attribute one. | https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/ | 15 Oct 2026 | [Industry] |
| Five users for qualitative tests; more for quantitative. (Batch 1, reuse) | https://www.nngroup.com/articles/how-many-test-users/ | 14 Oct 2026 | [Industry] |
| WCAG 2.2 new criteria (for the accessibility pass). (Batch 2, reuse) | https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ | 14 Oct 2026 | [Official] |
| Audit duration. No authoritative figure was found; vendor claims such as "2–4 weeks" are unsourced. Keep it as "depends on scope". | — | 15 Oct 2026 | [Inference] |

---

## Topic 74: Website information architecture (organising complex websites)

**1. Founder question and pain.** "Our site has grown to hundreds of pages, services or products. Nobody can find anything, the menu is a negotiation between departments, and a redesign or migration is coming. How do we restructure it?" The pain is wasted traffic, support load, SEO risk in a re-org, and internal politics over the menu.

**2. Intent and stage.** Informational and how-to. Readers are marketing leads, product teams and founders planning a redesign or replatform. Stage: problem-aware to planning. It is a strong precursor to a website or UX engagement.

**3. Queries.**
- Primary: "website information architecture".
- Supporting: "how to organise a large website", "website structure best practices", "card sorting open vs closed", "tree testing", "content inventory / content audit for redesign", "sitemap UX deliverable", "breadcrumbs SEO", "URL structure", "mega menu vs hamburger", "hub and spoke navigation".

**4. Demand evidence.** Weak in this session. The US SERP for "website information architecture how to organise a large website" is dominated by books (Rosenfeld and Morville's O'Reilly title), a 2024 UXmatters article and an academic paper. Few practical how-tos rank, which is an opportunity. NN/g's own tree-testing and card-sort pages rank for the method terms. No community evidence was checked (Reddit unreachable).

**5. Existing ZSpace pages.**
- **/blogs/information-architecture** (582 words, 25 Sep 2026, no external links). "How to Structure a Digital Product". It is better than the brief implies: it already has
  - an IA vs navigation section,
  - a components table (organisation, labelling, navigation, search, taxonomy),
  - five steps: inventory, mental models with open/closed card sorting, labels, sitemap and flows, tree testing,
  - an "IA for different products" table (it already includes "Marketing website"),
  - a mistakes list,
  - 8 FAQs, including sitemap, taxonomy and SEO.

  What's missing:
  - Every step is 1–3 sentences.
  - No content audit method (ROT: redundant, outdated, trivial).
  - No hybrid card sort, and no participant numbers.
  - No tree-test metrics (success, directness, time).
  - No navigation models (hub-and-spoke, faceted, mega menu, local nav).
  - No URL or breadcrumb guidance, although an FAQ claims IA affects SEO with no source.
  - No sitemap deliverable example.
  - No redirect-map tie-in for re-orgs.
  - No sources.
- **/blogs/website-navigation-and-ux** (681 words): menus, hierarchy, search, breadcrumbs (UX angle), mobile nav, accessibility. Keep it as the UI layer. The IA update should link to it, not repeat menu and breadcrumb UX advice.
- **/blogs/information-architecture-vs-user-flow** (1,181 words): a comparison page, including "Where Sitemaps Fit". Keep it distinct. The update links to it for flows.
- Adjacent pages to link and not duplicate:
  - /blogs/ecommerce-navigation-design (1,352 words)
  - /blogs/ecommerce-faceted-navigation-seo (926 words): faceted models live here
  - /blogs/ecommerce-url-migration and /blogs/ecommerce-seo-migration: redirects
  - /blogs/seo-friendly-website-development

**6. SERP weaknesses** (do not copy):
- https://www.oreilly.com/library/view/information-architecture-for/0596527349 (book listing, not a how-to)
- https://uxmatters.com/mt/archives/2024/09/designing-effective-information-architectures-for-large-scale-web-sites.php (conceptual; organisation, labelling and navigation systems)
- https://www.nngroup.com/articles/tree-testing/ and https://www.nngroup.com/articles/card-sorting-definition/ (excellent, but method-by-method, not one end-to-end site re-org)
- https://commission.europa.eu/resources/europa-web-guide/planning-your-web-presence/architecture-and-navigation/architecture-building-and-testing-methods/tree-testing-method_en (good government guidance, narrow)

The gap: nobody joins inventory, sorting, testing, the sitemap, URL and breadcrumb decisions, and the redirect impact into one founder-readable sequence for an *existing* complex site.

**7. Qualified-buyer potential.** Moderate to high. A re-org usually means a redesign, replatform or migration project, which matches /services/website-development and /services/ui-ux-design.

**8. Format and original asset.** An expanded how-to of about 1,800–2,200 words, keeping the slug. Original asset: an **"IA re-org worksheet"** that maps each phase to its method, its output and the decision it settles:
1. Inventory → content audit spreadsheet (URL, owner, traffic, keep/merge/cut)
2. Open card sort → candidate groups
3. Closed card sort or tree test → validated labels
4. Sitemap → page hierarchy
5. URL and breadcrumb plan
6. Redirect map

Add a small text-tree example of a services-business sitemap, illustrative and labelled as such.

**9. Service and CTA.** /services/ui-ux-design (primary) and /services/website-development. CTA: "Planning a redesign? Let's map the structure first."

**10. Recommendation: UPDATE /blogs/information-architecture. I agree.**
- Retitle along the lines of "Information Architecture: How to Structure a Website or Digital Product", so that complex websites are explicit.
- Keep the existing five-step spine and deepen each step.
- Add these H2s: content audit; navigation models (brief, linking out to the navigation, ecommerce-navigation and faceted pages); URLs and breadcrumbs; the sitemap deliverable; re-orgs and redirects.
- Do not move menu UX or breadcrumb UX detail from website-navigation-and-ux.
- Correct the SEO FAQ so it reflects Google's statement that it "generally doesn't look at the structure of URLs" to infer site structure. Linking and breadcrumbs matter more.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "IA is the information backbone of the site"; navigation is the "elements in the UI that allow users to reach specific information". Jennifer Cardello, 22 Jun 2014. | https://www.nngroup.com/articles/ia-vs-navigation/ | 15 Oct 2026 | [Industry] |
| Open card sort: "Users create their own groups with no predefined categories." Closed: "given predefined categories". Hybrid: some predefined plus their own, which the article generally advises against. Qualitative: "at least 15 participants"; quantitative: "at least 30–50". Tankala and Sherwin, 2 Feb 2024. | https://www.nngroup.com/articles/card-sorting-definition/ | 15 Oct 2026 | [Industry] |
| Card sorting is a discovery (generative) method; a tree test "evaluates a hierarchical category structure". Tankala, 23 Feb 2024. | https://www.nngroup.com/articles/card-sorting-tree-testing-differences/ | 15 Oct 2026 | [Industry] |
| Tree-test metrics: success rate, directness, time. Qualitative needs "only a few participants"; quantitative needs a larger sample. No fixed number is given on the page. Page Laubheimer, 6 Aug 2023, reviewed 19 Aug 2026. **The "~50 participants" figure circulating online was not verified on NN/g.** | https://www.nngroup.com/articles/tree-testing/ | 15 Oct 2026 | [Industry] |
| Google "generally doesn't look at the structure of URLs to work out the structure of a site"; it analyses relationships between pages "based on their linkages". Use `<a href>` links; don't navigate with JS events on other elements. Updated 10 Dec 2025. | https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure | 15 Oct 2026 | [Official] |
| URL guidance: readable words, not IDs; hyphens rather than underscores; the audience's language; trim parameters; URLs are case sensitive. Updated 10 Dec 2025. | https://developers.google.com/search/docs/crawling-indexing/url-structure | 15 Oct 2026 | [Official] |
| A breadcrumb trail "indicates the page's position in the site hierarchy"; Google uses the markup to categorise information in results. The rich result is "available on desktop in all regions and languages". Updated 8 Sep 2026. | https://developers.google.com/search/docs/appearance/structured-data/breadcrumb | 15 Oct 2026 | [Official] |
| On 23 Jan 2025 Google stopped showing breadcrumbs in mobile result URLs (domain only); desktop is unchanged. | https://developers.google.com/search/blog/2025/01/simplifying-breadcrumbs | 15 Oct 2026, via search summary; the post itself was not opened | [Official], partially verified |
| Mega menus: wait about 0.5 s before showing hover menus; avoid GUI widgets inside them; show each option once. Nielsen and Li, 26 Mar 2017. | https://www.nngroup.com/articles/mega-menus-work-well/ | 15 Oct 2026 | [Industry] |
| "Hub-and-spoke" as a named navigation model. No primary definition was verified this session; describe it in plain terms. | — | — | [Inference], unverified |
| "Content audit / ROT" as a practice. Not sourced this session; find an NN/g or GOV.UK source at writing, or present it as practice. | — | — | Unverified |

---

## Topic 75: Designing multi-step forms without frustrating users

**1. Founder question and pain.** "Our signup, quote, onboarding or application form is long. Should we split it into steps? People drop off halfway, and we can't see where." The pain: lost leads and applications, no step-level data, and complaints such as "I lost everything when I pressed back".

**2. Intent and stage.** Informational, best-practice. Readers are product and growth teams and founders building quote, onboarding, insurance, loan, booking or B2B application flows. Stage: solution-aware, often mid-build. That makes it a good fit for a design and development engagement.

**3. Queries.**
- Primary: "multi-step form UX" or "multi-step form best practices".
- Supporting: "form wizard design", "progress indicator form", "save and resume form", "single page vs multi-step form", "conditional logic form UX", "multi-step form accessibility", "track multi-step form drop-off GA4".

**4. Demand evidence.** Moderate on supply, weak on proof. The US SERP is crowded with form-builder vendors (Reform, OrbitForms, FormAssembly, WPManageNinja), which signals commercial interest. No community threads were checked (Reddit unreachable). The vendor pages carry unsourced statistics (for example "70% abandonment", "15% vs 45% conversion"). **Do not reuse them.**

**5. Existing ZSpace pages (overlap check).**
- **/blogs/improve-website-enquiry-form-conversions** (Batch 1, 2,349 words). Short lead forms: field choice, lead quality, validation, CAPTCHA, regional consent.
  - It mentions multi-step forms only in one WCAG 3.3.7 bullet. It has no section on splitting, steps, progress, save/resume or branching.
  - Low overlap, but it is the natural sibling to link.
- **/blogs/ecommerce-checkout-ux** (1,555 words). One-page vs multi-step checkout in an FAQ, a table row and a progress-indicator paragraph. Checkout-specific; low overlap.
- **/blogs/digital-forms-development-australia** (681 words). Australia-framed. WCAG for forms, validation, conditional logic, uploads, signatures. Partial overlap on validation and logic. It is a dev and regional page, so keep it separate and link to it.
- **Roadmap UX-37** "Why users abandon your signup and lead forms" (CREATE, /blogs/why-users-abandon-forms). A troubleshooting and symptom page.
  - Risk of overlap on field-level analytics.
  - Recommendation: the new page owns *designing* multi-step flows. UX-37, if built, owns *diagnosing* abandonment across all forms and links here for the "should we split it" fix.
  - Alternatively, fold UX-37 into this page plus the Batch 1 page and drop it. That is the owner's call; I lean towards dropping UX-37 to keep the cluster small.
- Other mentions: au-commerce-2, uae-leadgen and webdev-3 each mention multi-step forms in a single line only.

**6. SERP weaknesses** (do not copy):
- https://www.reform.app/blog/multi-step-form-navigation-best-practices
- https://orbitforms.ai/blog/multi-step-form-best-practices
- https://www.formassembly.com/?p=18105
- https://www.saasui.design/blog/saas-multi-step-form-wizard-ux-patterns
- https://wpmanageninja.com/single-step-form-vs-multi-step-form-which-one-is-the-best-and-why/

Common failings:
- vendor bias,
- unsourced conversion statistics,
- accessibility is reduced to a line,
- almost none cite GOV.UK's research-backed patterns, including its advice to *test without a progress indicator first*,
- none explain that GA4's form events do not see steps.

**7. Qualified-buyer potential.** Moderate to high. Long forms belong to high-value flows (quotes, applications, onboarding) in fintech, insurance, education, healthcare and B2B SaaS, which are core ZSpace markets.

**8. Format and original asset.** A practical guide of about 1,800–2,200 words. Original assets:
- **"Should this be one page or several?" decision table.** Rows: field count, need for branching, data the user must look up, likelihood of multi-session completion, repeat use by experts.
- **Per-step spec checklist.** Heading = the question, a "Continue" button, a back link that preserves state, per-step validation with an error summary that receives focus, no re-entry, session-timeout warning, and an analytics event.
- **Step analytics event plan.** For example `form_step_view` / `form_step_complete` with `form_name`, `step_number` and `step_name`, with no PII. Label it as a ZSpace suggestion, not a Google standard.

**9. Service and CTA.** /services/ui-ux-design (primary), with /services/website-development and /services/cro-audit secondary. CTA: "Losing people halfway through a form? Ask for a form review."

**10. Recommendation: CREATE /blogs/multi-step-form-ux-design. I agree.** Angle and H2s as per your brief:
1. When to split a form
2. One question per page vs grouped steps
3. Progress indicators: test without one first
4. Back behaviour and state
5. Save and resume, and the task list for long multi-session forms
6. Branching
7. Per-step validation
8. Check-answers page
9. Accessibility: 3.3.7, 2.4.3, 3.3.1, 2.2.1, plus error-summary focus
10. Measuring step drop-off

Keep checkout out of scope beyond one link.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "Asking just one question per question page helps users understand what you're asking them to do"; start with one per page. "Always include a Back link component at the top of question pages"; "do not break the browser back button"; use a "Continue" button. | https://design-system.service.gov.uk/patterns/question-pages/ | 15 Oct 2026 | [Official] (UK government pattern) |
| Progress indicators: "Start by testing your form without a progress indicator"; improve order, type or number of questions first; then try a simple "Question 3 of 9" indicator; "Only include the total number of questions if you can do so reliably". Avoid indicators that show all questions, allow navigation and show the current question; these "are often not noticed", "do not scale well on small screens" and "make it hard to handle conditional sections". GOV.UK services "removed this style of progress indicator without any negative effects"; the Carer's Allowance team removed a 12-step indicator "with no effect on completion rates or times". | same URL | 15 Oct 2026 | [Official] |
| Check answers: "Show a single check answers page immediately before the confirmation screen for small to medium-sized transactions"; a "Change" link per section with hidden screen-reader text; after an edit, "the 'Continue' button should return them to the check answers page". | https://design-system.service.gov.uk/patterns/check-answers/ | 15 Oct 2026 | [Official] |
| Task list (now "Complete multiple tasks"): only for "longer transactions involving multiple tasks" done "over a number of sessions"; simplify the transaction first. Statuses include "Completed", "Incomplete", "In progress", "Cannot start yet", and "There is a problem" (red, errors only). | https://design-system.service.gov.uk/patterns/complete-multiple-tasks/ | 15 Oct 2026 | [Official] |
| Error summary: place it at the top of `main` (below the back link, above the h1); "must move focus to the summary"; prefix the page title with "Error: "; link each error to its field. | https://design-system.service.gov.uk/components/error-summary/ | 15 Oct 2026 | [Official] |
| Wizards: "Use wizards for novice users or infrequent processes"; avoid them for repeated or expert tasks. Show the list of steps and highlight the current one. Generic "Next"/"Previous" labels tell users little. Downsides: interruption loses work unless save/resume exists, and it is hard to compare across steps. Raluca Budiu, 25 Jun 2017. No step maximum is given. | https://www.nngroup.com/articles/wizards/ | 15 Oct 2026 | [Industry] |
| WCAG 2.2 SC 3.3.7 Redundant Entry (A): information already entered in the same process must be auto-populated or selectable, with exceptions for essential, security or no-longer-valid information. (Batch 1/2, reuse) | https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html | 14 Oct 2026 | [Official] |
| SC 2.4.3 Focus Order (A): "focusable components receive focus in an order that preserves meaning and operability". | https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html | 15 Oct 2026 | [Official] |
| SC 2.2.1 Timing Adjustable (A): for example, warn the user before time expires and give "at least 20 seconds to extend the time limit with a simple action", extendable at least ten times; exception when the limit is "longer than 20 hours". Relevant to session timeouts in long forms. | https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html | 15 Oct 2026 | [Official] |
| SC 3.3.1 Error Identification. (Batch 1, reuse) | https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html | 14 Oct 2026 | [Official] |
| Baymard: the average checkout has 5.1 steps (2024; "remained largely unchanged" since 2012) and 11.3 form fields (2024; 11.8 in 2021, 12.7 in 2019). "Most sites need only 8 form fields in total"; field count matters more than step count. Edward Scott, 26 Jun 2024. | https://baymard.com/blog/checkout-flow-average-form-fields | 15 Oct 2026 | [Industry] |
| GA4 enhanced measurement `form_start` fires "the first time a user interacts with a form in a session"; `form_submit` fires on submit. Parameters: form_id, form_name, form_destination (plus form_submit_text on submit). They need custom dimensions to report, and no PII. | https://support.google.com/analytics/answer/9216061 | 15 Oct 2026 | [Official] |
| Inference from the GA4 row: because `form_start` fires once per session and `form_submit` only on a real submit, the default events cannot show *which step* people abandon. Custom step events are needed. | — | — | [Inference] |
| Save and resume as a pattern. GOV.UK covers multi-session work through the task list. No primary GOV.UK "save and return" pattern page was verified this session; check at writing. | — | — | Unverified |
| Any "multi-step forms convert X% better" statistic. None found from a primary or independent source. **Do not use.** | — | 15 Oct 2026 | — |

Regional note: the UK GOV.UK patterns are design guidance, not law. Accessibility law differs by market (covered on existing regional pages). Link, don't restate.

---

## Topic 76: UX metrics that matter beyond conversion rate

**1. Founder question and pain.** "We paid for a redesign and conversion barely moved, or it moved for reasons we can't separate out. How do we know whether the UX actually got better, and what should we track?" The pain: you can't justify design spend, metrics get gamed, and NPS is used as a proxy for everything.

**2. Intent and stage.** Informational and framework. Readers are founders, PMs and heads of product or design. Stage: post-purchase (proving value) or pre-engagement (setting success criteria). It absorbs roadmap UX-28 ("how to measure whether UX improvements worked").

**3. Queries.**
- Primary: "UX metrics".
- Supporting: "how to measure UX", "how to measure UX improvements", "HEART framework", "task success rate", "time on task", "System Usability Scale score", "Single Ease Question", "NPS vs SUS", "UX KPIs", "is NPS a UX metric".

**4. Demand evidence.** Moderate supply, weak proof. The US SERP has many vendor guides: Userlytics, UXtweak, Koji, Helio, The Fountain Institute. NN/g's product-UX-benchmarks article and an ACM *Interactions* piece also rank. No community threads were checked.

**5. Existing ZSpace pages.**
- **/blogs/usability-testing** (2,652 words, updated 14 Oct). Has "Common Usability Metrics" and "Quantitative Measurements and Sample Size" H2s, and already cites MeasuringU SUS and NN/g benchmarks.
  - This is the main overlap. The new page must not re-teach the test method; link there for running studies.
  - Its scope is metrics *from tests*; the new page covers metrics *across the product lifecycle* (analytics, surveys, CWV, HEART).
- **/blogs/ecommerce-conversion-rate** (727 words) and **/blogs/shopify-conversion-rate-optimization-metrics** (1,131 words): commerce and CRO KPIs, no UX measures, no sources on the latter. No conflict.
- **/blogs/saas-onboarding-optimization** (activation) and **/blogs/test-website-prototype-before-development** (Batch 3). Link them.
- No page covers HEART, SEQ, NPS criticisms or Goals-Signals-Metrics. A gap is confirmed (roadmap UX-28 also found none).

**6. SERP weaknesses** (do not copy):
- https://www.userlytics.com/resources/glossary/ux-metrics/
- https://blog.uxtweak.com/ux-metrics-for-measuring-user-experience/
- https://www.koji.so/docs/heart-framework-ux-metrics
- https://www.thefountaininstitute.com/blog/goals-signals-metrics
- https://www.parallelhq.com/blog/ux-metrics-framework

Common failings:
- glossary-style lists with no guidance on *which* metric to pick,
- sample-size caveats are missing,
- unverified benchmarks (one cites a "78% NN/g task success median" that I could not verify),
- NPS is presented uncritically,
- Core Web Vitals are rarely connected to UX measurement.

**7. Qualified-buyer potential.** Moderate. It supports the commercial pages by answering "was it worth it" and "how will you prove it". It suits founders evaluating design agencies.

**8. Format and original asset.** A framework guide of about 2,000–2,500 words. Original asset: a **metric selection table** with columns: Question you're asking, Metric, Method, Minimum evidence / sample caveat, Pitfall. Example rows:
- "Can people complete the key task?" → task success (binary or graded, don't average grades) → moderated or unmoderated test → 5 users find problems; 20+ to estimate a rate.
- "How hard did it feel?" → SEQ after each task.
- "Overall perceived usability?" → SUS (68 = average).
- "Are fixes reducing friction?" → error rate, support tickets per 1,000 sessions.
- "Did speed improve?" → CWV at the 75th percentile, field data.
- "Are people coming back?" → retention cohort.
- "Would they recommend?" → NPS (relational, slow, gameable).

Add a second small asset: **before/after measurement plan** (baseline period, freeze changes, same tasks, report confidence intervals). This connects to usability-testing's "freeze sheet"; link it, don't repeat it.

**9. Service and CTA.** /services/ui-ux-design (primary) and /services/cro-audit. CTA: "Set success metrics before the redesign: request a UX review."

**10. Recommendation: CREATE /blogs/ux-metrics-beyond-conversion-rate, absorbing UX-28. I agree, with two cautions:**
1. Retire the UX-28 slug (/blogs/how-to-measure-ux-improvements). Add a "How to tell if a UX change worked" H2 on this page instead.
2. Consider the slug /blogs/ux-metrics. It is shorter and matches the head term, and no existing slug conflicts. The "beyond conversion rate" framing can live in the title. Either is fine. Pick one and do not create both.

Also add HEART's companion for workplace tools (NN/g CASTLE), because many ZSpace clients build internal or B2B tools where retention says little about the experience.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| HEART (Happiness, Engagement, Adoption, Retention, Task success) and a process for mapping product goals to metrics. Kerry Rodden, Hilary Hutchinson and Xin Fu, "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications", Proceedings of CHI 2010, ACM. **The origin is verified.** | https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/ (PDF: https://research.google.com/pubs/archive/36299.pdf) | 15 Oct 2026 | [Official] (Google Research publication) |
| The paper positions HEART against PULSE (business and technical metrics) and uses Goals–Signals–Metrics. Reported in search summaries; the PDF body was not opened. | same | 15 Oct 2026 | [Official], partially verified; confirm wording in the PDF |
| "Applied to more than 20 products" at Google. Seen only in secondary summaries. | — | — | Unverified, don't use without the PDF |
| CASTLE (Cognitive load, Advanced feature usage, Satisfaction, Task efficiency, Learnability, Errors) is for workplace tools users must use; "CASTLE is not intended to replace or supersede HEART." Page Laubheimer, 29 Jan 2023. | https://www.nngroup.com/articles/castle-framework/ | 15 Oct 2026 | [Industry] |
| Success rate = "the percentage of users who were able to complete a task in a study"; partial credit is reported as levels, and averaging graded levels is "wrong". Nielsen and Budiu, 17 Feb 2001, reviewed 20 Jul 2021. | https://www.nngroup.com/articles/success-rate-the-simplest-usability-metric/ | 15 Oct 2026 | [Industry] |
| SEQ: "a 7-point rating scale to assess how difficult users find a task", asked after each task; the average "hovers between about 5.3 and 5.6" (updated May 2019). Jeff Sauro, 30 Oct 2012. | https://measuringu.com/seq10/ | 15 Oct 2026 | [Industry] |
| SUS average is 68 across about 500 studies; 74 beats about 70% of products. Sauro, 3 Feb 2011. (Batch 1, reuse) | https://measuringu.com/sus/ | 14 Oct 2026 | [Industry] |
| Task times are skewed. For samples under about 25, report the geometric mean; above that, the median. Report confidence intervals. | https://measuringu.com/?p=352 (Average Task Times in Usability Tests: What to Report?) | 15 Oct 2026, via search summary | [Industry], partially verified; open the page at writing |
| 5 users for qualitative tests; 20+ for quantitative; card sorting 15+. (Batch 1, reuse) | https://www.nngroup.com/articles/how-many-test-users/ | 14 Oct 2026 | [Industry] |
| NPS: "How likely are you to recommend us to a friend or colleague?" on 0–10; Promoters 9–10, Passives 7–8, Detractors 0–6; NPS = % Promoters − % Detractors. | https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/ (Bain) | 15 Oct 2026 | [Vendor] (Bain owns NPS) |
| NPS was introduced by Frederick F. Reichheld, "The One Number You Need to Grow", HBR, Dec 2003. | https://hbr.org/2003/12/the-one-number-you-need-to-grow | 15 Oct 2026 | [Industry] |
| NPS criticism: Keiningham, Cooil, Andreassen and Aksoy, "A Longitudinal Examination of Net Promoter and Firm Revenue Growth", *Journal of Marketing* 71(3), July 2007 (DOI 10.1509/jmkg.71.3.39). Using Norwegian data (21 firms, 15,500+ interviews) they failed to replicate the claimed "clear superiority" of NPS. Note that Keiningham was then at Ipsos, and MeasuringU argues the samples were small. | DOI https://doi.org/10.1509/jmkg.71.3.39; summary https://measuringu.com/article-summaries/a-longitudinal-examination-of-net-promoter-and-firm-revenue-growth/ | 15 Oct 2026 (abstract and summaries only) | [Industry], partially verified |
| NN/g on NPS for UX: it shows perception, not why; it is invalid from tiny samples; binning loses information; loyalty ≠ usability (price, lack of alternatives); it rarely reflects specific design changes; it is easily gamed (Campbell's Law); it varies by country and industry. Therese Fessenden, 21 Jun 2024. | https://www.nngroup.com/articles/nps-ux/ | 15 Oct 2026 | [Industry] |
| Core Web Vitals "good" thresholds: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, measured at the 75th percentile of page loads, segmented by mobile and desktop. Updated 31 Oct 2024. | https://web.dev/articles/vitals | 15 Oct 2026 | [Official] (Google) |
| GA4 engaged session: lasts >10 s, or has a key event, or has 2+ page/screen views; engagement rate = % engaged sessions; bounce rate is its inverse. Caveat: 10 s is a default and a low bar, so it is not a UX quality measure. (Batch 1, reuse; the caveat is [Inference]) | https://support.google.com/analytics/answer/12195621 | 14 Oct 2026 | [Official] |
| NN/g benchmarking process: choose the context and top tasks, pick metrics, measure, redesign, re-measure. (Already cited on usability-testing) | https://www.nngroup.com/articles/product-ux-benchmarks/ | 15 Oct 2026 (search snippet) | [Industry] |
| "Median task success 78% (NN/g)" and "redesign below 70%". Seen in a vendor blog and not found on NN/g. **Do not use.** | — | 15 Oct 2026 | Unverified |

---

## Cross-topic notes for the writer
- No ZSpace prices and no market-average costs. None are needed for these four topics.
- Add external citations to the existing NN/g-reliant pages (how-to-conduct-a-ux-audit, ux-heuristic-evaluation, information-architecture). They currently assert NN/g guidance without links.
- Internal-link triangle to add:
  - multi-step-form-ux-design ↔ improve-website-enquiry-form-conversions ↔ ecommerce-checkout-ux
  - ux-metrics ↔ usability-testing ↔ ux-audit
  - information-architecture ↔ website-navigation-and-ux ↔ information-architecture-vs-user-flow
