# Batch 2 UI/UX research: topics 33–36 (ZSpace Labs)

Checked 14 Oct 2026. Labels: [Official] = standards body, government or platform docs; [Industry] = research firms and academic sources (NN/g, MeasuringU, WebAIM, peer-reviewed papers); [Vendor] = agency or tool marketing; [Inference] = my reasoning.

**Method and limits**
- Reddit was unreachable, as the brief says. I have no Reddit URLs and have made none up.
- WebSearch is US-only, so I can't see the SERPs in India, the UAE, Australia or the UK.
- Hacker News demand was checked through the Algolia HN API. Founder-forum demand is **weak** for topics 33 and 34, and moderate for 35 and 36.
- EUR-Lex returned empty pages to both WebFetch and curl. The EAA article wording below comes from the EUR-Lex search index, not a full-page fetch. It is marked accordingly.
- Batch 1 facts reused without re-research: the NN/g 5-user rule and its caveats, NN/g's quantitative ≥20 figure, NN/g's redesign triggers, the dated WCAG 2.2 version, GIGW 3.0 scope. Source: `docs/seo/founder-batch-1/research/research-uiux.md`.
- No repo files were edited.

**Roadmap conflicts found (read first)**
1. **UX-28 "How to measure whether UX improvements actually worked"** (CREATE, P1, `/blogs/how-to-measure-ux-improvements`) overlaps Topic 33's before/after benchmarking. Topic 33 should own the *test protocol*. UX-28 should own *business-metric attribution*. Each should link to the other. Neither should restate SUS and SEQ at length.
2. **UX-24** proposes `/blogs/saas-dashboard-design`. Your call uses `/blogs/saas-dashboard-ux-best-practices`. Pick one before drafting. My view is below.
3. **WEB-34** already plans an "app-patterns section" for `/blogs/website-accessibility-guide`. Topic 34 adds a pre-launch checklist to the same page. Schedule both edits together so the page is opened only once.
4. **UX-23** is already marked KEEP for `/blogs/saas-onboarding-optimization`. Topic 36 is consistent with that.

---

## Topic 33: How to run usability testing before investing in a website or app redesign

**1. Founder question and pain.** "We're about to spend real money on a redesign. How do we know what's actually broken, and how will we prove the new version is better?" Redesigns built on opinion often lose what worked on the old site. Batch 1 found Shopify Community threads about conversion drops after redesigns. Without a baseline, nobody can show the new version is better.

**2. Intent and stage.** Informational / commercial investigation. The founder is choosing a solution and is in the pre-commitment stage, before a redesign brief is signed.

**3. Queries.**
- Primary: "usability testing before redesign".
- Supporting: "benchmark usability study", "UX benchmarking before and after redesign", "how to compare old and new website usability", "usability test script for website redesign", "competitive usability testing", "SUS score before and after". I have no volume data and have invented none.

**4. Demand evidence (weak to moderate).**
- HN has no direct Ask HN thread. The Algolia search for "usability testing redesign" returned 1 irrelevant hit.
- Indirect: Batch 1's redesign-regret threads, e.g. https://news.ycombinator.com/item?id=32179563 and https://community.shopify.com/t/drop-in-conversion-after-migration-and-website-redesign/403763.
- The topic is mainly searched by practitioners: university library case studies, DOE guidance, vendor guides.

**5. Existing ZSpace coverage.** `/blogs/usability-testing` (`blog-data-design-2.ts`, 1,297 words, **0 external links**, dated 25 Sep 2026, not updated) already covers:
- planning, moderated vs unmoderated, recruiting, the script checklist, pilot, metrics table (task success, time, errors, SEQ, SUS), sample size, analysis, retest;
- the sentence "on live products before a redesign" (one line in the intro);
- "Step 7: Iterate and Retest", which already says "ideally with new participants on the same tasks".

Missing or weak:
- There is no **benchmark-then-retest protocol**: no baseline on the current site, no frozen task set, and no rules for holding conditions constant.
- There is no **competitive test** (NN/g: your old site and 1–2 competitors).
- It doesn't explain **why 5 users can't prove the redesign is better**. The quantitative guidance is there, but it isn't tied to before/after comparison.
- There is no **pre-redesign script** (tasks chosen from top tasks; "what would you hate to lose?"; preference probe after a competitor).
- It names NN/g three times but has **zero outbound citations**.
- It doesn't hand off to UX-28 on business metrics.

**6. SERP weaknesses (US results).**
- https://www.nngroup.com/articles/redesign-competitive-testing/ is authoritative but dated 2014 and has no script or template.
- https://www.nngroup.com/articles/product-ux-benchmarks/ is a process article, not redesign-specific, with no sample sizes.
- https://maze.co/blog/best-time-usability-testing/ is vendor content that pushes its own tool.
- https://cleverx.com/blog/customer-research-before-a-product-redesign is vendor content: generic, with no script.
- https://www.parallelhq.com/blog/ux-benchmarking is an agency piece. It gives a "30–40+ participants" figure without a primary source.

Common gaps across these pages:
- none combines qualitative pre-test, competitive test and quantitative benchmark in a decision table by budget;
- none gives a downloadable script;
- none warns about change aversion when timing the re-test.

**7. Buyer potential.** High. The reader is about to commission a redesign, which maps directly to the UX audit and redesign services.

**8. Format and original asset.** Add an H2 section inside the existing guide: "Usability testing before a redesign" (about 500–700 words), with two assets.
- **(a) Pre-redesign test plan.** A 3-column table: *Learn* (qualitative, ~5 per user group), *Compare* (competitive, own site + 1–2 competitors), *Prove* (quantitative benchmark, ≥20 per round). Each column covers the decision it supports, sample, metrics and cost/effort.
- **(b) Pre-redesign test script.** Intro and consent; context questions; 4–6 top tasks written so they work unchanged on both old and new designs; SEQ after each task; "what would you miss if this changed?"; SUS at the end (only if benchmarking); and a "freeze sheet" recording task wording, success criteria, devices and recruit criteria for the re-test.

**9. Service and CTA.** `/services/ui-ux-design` (primary). `/services/cro-audit` (secondary). CTA: "Benchmark your current site before you redesign it" or "Request a UX review".

**10. Recommendation: UPDATE `/blogs/usability-testing`. I agree with your call.** Refinements:
- Put the section after "Step 7: Iterate and Retest".
- Retitle Step 7's last line so the new section doesn't repeat it.
- Add 4–6 outbound citations (below).
- Keep the 5-user claim to one sentence and link to `/blogs/how-much-ux-design-before-development`, per Batch 1 cross-topic rec #2.
- Also update the `date`/`updated` field, and add one FAQ: "Should we usability test before a redesign?"
- Don't create a separate page. It would cannibalise this one and UX-28.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| UX benchmarking is "the process of evaluating a product or service's user experience by using metrics". The process has 7 steps: choose what to measure; decide how; collect a baseline (after a pilot); redesign; collect again "under the same methodology"; interpret with statistics; ROI (optional). "Aim for 2–4 metrics". Wait before re-measuring, because "Users often hate change": about 2–3 weeks for daily-use products and about 4–5 weeks for weekly-use products. Alita Kendrick, NN/g, 13 Sep 2020. | https://www.nngroup.com/articles/product-ux-benchmarks/ | 14 Oct 2026 | [Industry] |
| "Your old site is the best prototype of your new site." Run competitive tests on your site plus 1–2 competitors with the same tasks; about two days; vary the order of sites; at most 3 sites per participant; the goal is understanding, not picking a winner. Hoa Loranger, NN/g, 7 Dec 2014. | https://www.nngroup.com/articles/redesign-competitive-testing/ | 14 Oct 2026 | [Industry] |
| Qualitative: test 5 users. Quantitative: "Test at least 20 users to get statistically significant numbers". Tighter confidence intervals need more users. Nielsen, 3 Jun 2012. | https://www.nngroup.com/articles/how-many-test-users/ | 14 Oct 2026 (Batch 1 + re-confirmed) | [Industry] |
| The 5-user rule and its caveats (comparable users; 3–4 per distinct group; 3 rounds of 5). | Batch 1 row: https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ | 14 Oct 2026 (Batch 1) | [Industry] |
| Average SUS score is 68, across about 500 studies. Above 68 is above average. Example: a SUS of 74 beats 70% of products. Jeff Sauro, MeasuringU, 3 Feb 2011. | https://measuringu.com/sus/ | 14 Oct 2026 | [Industry] |
| NN/g lists "benchmarking shows the site far inferior to the competition" among its overhaul triggers. | Batch 1 row: https://www.nngroup.com/articles/radical-incremental-redesign/ | 14 Oct 2026 (Batch 1) | [Industry] |
| Sample sizes of "30–40+" for benchmarks (parallelhq). | https://www.parallelhq.com/blog/ux-benchmarking | snippet only | [Vendor]. **Don't cite.** Use NN/g ≥20 instead. |
| A benchmark with 5 users can't show the redesign is "better". Report counts, not percentages. | Derived from the NN/g rows above | n/a | [Inference] |

Regional note: none needed. Where recordings are made, consent rules (DPDP in India, UK GDPR) are already a roadmap item (UX-21). Link to that page rather than repeating it.

---

## Topic 34: Website accessibility audit: what should a business check before launch?

**1. Founder question and pain.** "We launch in three weeks. What accessibility checks do we actually need, and is a plugin enough?" Founders fear legal exposure (EU customers under the EAA, enterprise procurement) and don't know what a "pass" looks like.

**2. Intent and stage.** Informational with a commercial tail. The reader is in the pre-launch / QA stage and may buy an audit.

**3. Queries.**
- Primary: "website accessibility audit checklist".
- Supporting: "accessibility checklist before launch", "how to do an accessibility audit", "WCAG 2.2 checklist", "do automated accessibility tools find everything", "accessibility statement template", "European Accessibility Act website requirements".

**4. Demand evidence (weak in founder forums, strong in institutional SERPs).**
- HN Algolia search for "accessibility audit" returned 37 hits, mostly irrelevant. Relevant ones:
  - "Ask HN: Is accessibility worth it?" (18 comments): https://news.ycombinator.com/item?id=30180847
  - "How do we make web accessibility doable for devs with zero a11y budget?" (Dec 2025, 3 comments): https://news.ycombinator.com/item?id=46121253
- The SERP is full of university pre-launch checklists, e.g. https://web.wsu.edu/web-training/resources/launching-a-website/pre-launch-checklists/, which shows the "before launch" framing is real.

**5. Existing ZSpace coverage.**
- `/blogs/website-accessibility-guide` (`blog-data-webdev-3.ts`, 1,294 words, updated 10 Oct 2026, 1 external link to GOV.UK):
  - It has topic-by-topic principles (semantic HTML through navigation).
  - It has one paragraph on audit steps inside "UK Requirements and Accessibility Audits": scope, automated + manual + screen reader, log with WCAG SC, fix, retest, statement.
  - FAQs cover overlays and testing in one line each.
  - **Missing:** a scannable pre-launch checklist, WCAG 2.2's new criteria (not mentioned on this page), W3C Easy Checks / WCAG-EM, any evidence on automated-tool limits, the EAA, third-party widgets, documents/PDFs, and the accessibility statement contents.
  - The legal section is UK-only. Its India/UAE/Australia guidance is "verify locally".
- Other pages already cover parts of this:
  - `/blogs/ecommerce-accessibility-checklist`: page-by-page for stores; has a third-party apps section, the WCAG 2.2 additions, a screen reader script and the statement.
  - `/blogs/website-accessibility-australia` (3,447 words): has a "Practical audit checklist" and the WCAG 2.2 changes, AU-specific.
  - `/blogs/accessibility-testing-australia`: methods and tools.
  - `/blogs/accessible-ui-ux-design`: design side.
- Cannibalisation risk is real. The new checklist should be **generic, short and link out** to the ecommerce checklist (store pages), the AU page (AU law) and UX-07 (overlays). Don't duplicate those pages.

**6. SERP weaknesses.**
- https://www.w3.org/WAI/test-evaluate/preliminary/ is authoritative but explicitly "not definitive". It is page-level and doesn't cover launch logistics.
- https://web.wsu.edu/web-training/resources/launching-a-website/pre-launch-checklists/ is institution-specific and targets WCAG 2.1 AA.
- https://kalamuna.atlassian.net/wiki/spaces/KALA/pages/2726723585/Pre-Launch+Accessibility+Quick+Checklist is an agency wiki: terse, with no sources.
- https://www.brown.edu/university-communications/digital/node/91 is a university process page.

Common gaps:
- They don't separate "what a scanner finds" from "what only a person finds".
- They have no WCAG 2.2 items: target size, focus not obscured, accessible authentication.
- They don't cover third-party widgets or documents.
- They have no who/when ownership or regional legal triage.

**7. Buyer potential.** Medium-high. Pre-launch teams are already spending money. It maps to the website development QA and UI/UX services, and it naturally leads to "book an audit".

**8. Format and original asset.** A new H2 inside the guide: "Pre-launch accessibility audit checklist" (about 600–800 words), with:
- **(a) Two-tier checklist.**
  - *Tier 1, anyone in a day:* W3C Easy Checks plus an automated scan.
  - *Tier 2, specialist:* a WCAG-EM-style sample of pages and key journeys; keyboard; one desktop and one mobile screen reader; zoom/reflow; forms and errors; media captions; PDFs and documents; third-party widgets (chat, cookie banner, payment, booking, maps); the WCAG 2.2 AA items; the accessibility statement.
  - Each row has a column for "Can a scanner catch it? Yes / Partly / No".
- **(b) A short "who must care, where" triage box:** EU/EAA, UK public sector, Australia (AHRC guidelines), India (GIGW for government; private-sector duties unsettled), UAE (federal government policy). Each item is one line, linking to UX-26 for detail.
- Update the "How do I test…" FAQ, add "What should an accessibility statement include?", and **remove nothing**.

**9. Service and CTA.** `/services/website-development` (pre-launch QA). `/services/ui-ux-design`. CTA: "Get a pre-launch accessibility review".

**10. Recommendation: UPDATE `/blogs/website-accessibility-guide`. I agree with your call.**
- Fold in WEB-34's app-patterns edit (forms, modals, tables, dynamic content) in the same pass.
- Keep overlays to one sentence plus a link to UX-07, and legal detail to the triage box plus a link to UX-26.
- **Watch the length.** The update should add about 1,000 words at most, keeping the page under about 2,400. The AU page is already 3,447 words, and the two shouldn't converge.
- Change the page's checklist title so it differs from the ecommerce checklist's H1.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| W3C "Easy Checks – A First Review of Web Accessibility" covers page title, alt text, headings, contrast ratio, resize text, keyboard access and visual focus, forms/labels/errors, moving or flashing content, multimedia alternatives, and basic structure. It warns: "A web page could seem to pass these checks, yet still have significant accessibility barriers." Updated 9 Aug 2023. | https://www.w3.org/WAI/test-evaluate/preliminary/ | 14 Oct 2026 | [Official] |
| **WCAG-EM 2.0** was published as a W3C Group Note on **23 Jul 2026**. Its five steps: define the evaluation scope; explore the target digital product; select a representative sample; evaluate the sample; report the findings. | https://www.w3.org/TR/WCAG-EM/ (this version: https://www.w3.org/TR/2026/NOTE-wcag-em-2-20260723/) | 14 Oct 2026 | [Official]. Newly published. Confirm the title ("2.0") on the page before quoting, since older pages call it "WCAG-EM 1.0". |
| WCAG 2.2 adds 9 success criteria. **At AA or below:** 2.4.11 Focus Not Obscured (Minimum) AA; 2.5.7 Dragging Movements AA; 2.5.8 Target Size (Minimum) AA; 3.2.6 Consistent Help A; 3.3.7 Redundant Entry A; 3.3.8 Accessible Authentication (Minimum) AA. **AAA:** 2.4.12, 2.4.13, 3.3.9. 4.1.1 Parsing is "obsolete and removed". | https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ (page dated 5 Oct 2023) | 14 Oct 2026 | [Official] |
| WCAG 2.2 current dated version: 12 Dec 2024. | Batch 1: https://www.w3.org/TR/WCAG22/ | 14 Oct 2026 (Batch 1) | [Official] |
| "Web accessibility evaluation tools can not determine accessibility, they can only assist in doing so." "Tools cannot check all accessibility aspects automatically. Human judgement is required." Last updated 13 May 2024. | https://www.w3.org/WAI/test-evaluate/tools/selecting/ | 14 Oct 2026 | [Official] |
| GDS test: a page with 143 barriers was run through 10 tools. The best tool found 41% (Asqatasun, counting manual prompts). All tools together found 71%; 29% were missed by every tool. Mehmet Duran, GOV.UK Accessibility blog, 24 Feb 2017. **This is one 2017 test page, not a general detection rate.** | https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/ | 14 Oct 2026 | [Official] (government blog) |
| WebAIM Million 2026 (data from Feb 2026, top 1M home pages): 95.9% had detected WCAG 2 failures; 56.1 errors per page on average. Most common: low-contrast text 83.9%, missing alt text 53.1%, missing form labels 51%, empty links 46.3%, empty buttons 30.6%, missing document language 13.5%. Caveat: "Absence of detected errors does not indicate that a page is accessible or conformant." Last updated 30 Mar 2026. | https://webaim.org/projects/million/ | 14 Oct 2026 | [Industry] |
| An accessibility statement should contain at least a commitment, the standard applied (e.g. WCAG 2.2), and contact information. Updated 11 Mar 2021. | https://www.w3.org/WAI/planning/statements/ | 14 Oct 2026 | [Official] |
| UK public sector (context only): must meet WCAG 2.2 AA, "publish an accessibility statement", and GDS monitors compliance. Last updated 30 Sep 2024. The page already cites this URL. | https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps | 14 Oct 2026 | [Official] |
| **EAA.** Directive (EU) 2019/882. Art. 4(5): "Microenterprises providing services shall be exempt from complying with the accessibility requirements … and any obligations relating to the compliance with those requirements." Applies to products placed on the market and services provided from 28 Jun 2025. Covers e-commerce services. Microenterprise = fewer than 10 staff and annual turnover or balance sheet ≤ €2m. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882 | 14 Oct 2026, **via the search index only; the full page fetch was empty** | [Official]. Read the full text in a browser before publishing. Confirm the Art. 3 definition number. |
| Corroboration: the Luxembourg government EAA toolkit says "As a micro-enterprise providing services, you are not affected by the law." | https://accessibilite-produits-services.public.lu/en/entreprises/boite-outils/tests/testderogation/testservcies/opepres/pas.html | 14 Oct 2026 | [Official] (national) |
| A search summary suggested a micro online shop selling goods might fall under the *product* rules. I think this is wrong: the EAA's product scope is a closed list (computers, smartphones, terminals, e-readers and similar), and running an online shop is an e-commerce *service*. Recommend legal review; don't publish either reading as fact. | — | — | [Inference] |
| Australia: AHRC "Guidelines on equal access to digital goods and services" (April 2025) were issued under DDA s67(1)(k). They recommend WCAG 2.2 AA as a minimum and replace the 2014 Advisory Note. The AU page already cites this. | https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services | 14 Oct 2026 (search summary) | [Official] |
| India: GIGW 3.0 targets WCAG 2.1 AA for government sites and apps (Batch 1). In *Rajive Raturi v Union of India* (8 Nov 2024), the Supreme Court held Rule 15 of the RPwD Rules 2017 to be persuasive rather than mandatory, and directed the Union to frame mandatory rules under s40. **Whether new mandatory rules have been notified, and whether they cover private websites, is unverified.** | https://www.scconline.com/blog/post/2024/11/12/union-mandate-rules-under-rpwd-act-ensure-accessibility-of-public-places-supreme-court/ ; https://guidelines.india.gov.in/scope-and-objective/ | 14 Oct 2026 (secondary legal news) | [Industry]/[Official]. Unverified for the private sector. |
| UAE: the TDRA's National Digital Accessibility Policy targets federal government platforms. Its guidance references WCAG 2.1 AA; some newer government portals claim WCAG 2.2 AA. **No private-sector website mandate was found.** | https://www.wam.ae/en/article/b30lt44-tdra-supports-implementation-national-digital ; https://u.ae/en/Footer/Accessibility | 14 Oct 2026 (search summaries) | [Official], government scope only |

Regional notes: the rules do genuinely differ, so the triage box is justified. Keep each market to one line plus a link to UX-26.

---

## Topic 35: How to design a SaaS dashboard that helps users take action, not just view data

**1. Founder question and pain.** "Our customers log in, glance at the dashboard and leave. It's full of charts but nobody does anything with it." Unused in-app dashboards hurt activation and retention, and they become a sales-demo prop rather than a working tool.

**2. Intent and stage.** Informational / solution design. The reader is building v1 or redesigning, i.e. a product team in the implementation stage.

**3. Queries.**
- Primary: "saas dashboard design" / "saas dashboard ux best practices".
- Supporting: "actionable dashboard design", "dashboard ux best practices", "operational vs analytical dashboard", "dashboard empty state", "dashboard chart accessibility", "role-based dashboard".

**4. Demand evidence (moderate).**
- "Ask HN: Lessons learned from implementing user-facing analytics / dashboards?" (28 Sep 2023, 105 comments): https://news.ycombinator.com/item?id=37687798.
  - Themes, from partial comment text seen via mirrors: start from the decisions customers make repeatedly; scheduled email/PDF summaries beat dashboards for some users; trial users look once and drop off; sample data for empty accounts; several iterations needed.
  - **Read the thread directly before quoting any comment.**
- Older: https://news.ycombinator.com/item?id=5081978 (2013, on choosing metrics).
- The US SERP is crowded with agency guides, which suggests commercial demand.

**5. Existing ZSpace coverage.** I checked whether the existing pages share this intent. **They do not.**
- `/blogs/saas-product-design` "Dashboard UX": two paragraphs (questions users ask, context, link to detail, empty data, roles) plus one FAQ. It is a summary, not a guide.
- `/blogs/ecommerce-dashboard-design` (784 words): **internal analytics dashboards for an ecommerce team** (revenue, AOV, channel). Its audience is the merchant's own staff. Different intent.
- `/blogs/ecommerce-kpi-dashboard` and `/blogs/business-intelligence-dashboards-australia`: KPI selection and BI tooling. Different intent.
- `/blogs/marketplace-seller-dashboard`: **the closest overlap.** It is a product dashboard for customers (sellers), with an H2 "The Overview: Tasks Before Charts". The new page must link to it as a vertical example and not repeat its seller-specific features.

Gap: no page covers *in-product, customer-facing* SaaS dashboards. That means operational vs analytical types, a task or "next action" layer, alert and threshold design, empty/new-account states, role defaults, chart choice grounded in perception research, chart accessibility, and how to measure whether the dashboard drives action.

**6. SERP weaknesses.**
- https://procreator.design/blog/saas-product-design-redesign-dashboard/ is agency content: trend-led, no sources.
- https://arounda.agency/blog/saas-dashboard-ux-trends-guidelines-and-fundamentals is agency content: generic.
- https://www.saasframe.io/blog/the-anatomy-of-high-performance-saas-dashboard-design-2026-trends-patterns is a pattern gallery: screenshots, opinion.
- https://925studios.co/blog/saas-dashboard-design-examples-2026 is a listicle of examples.
- https://www.lazarev.agency/articles/saas-dashboard-design is agency content.

Common gaps:
- Almost none cite Few, Cleveland & McGill, NN/g or WCAG 1.4.1/1.4.11.
- None offers a way to *evaluate* an existing dashboard.
- None separates "monitor" from "act".
- None measures dashboard success by downstream actions.

**7. Buyer potential.** High. B2B SaaS founders and product managers with data-heavy products are core UI/UX and web-app development buyers, and this often triggers a redesign engagement.

**8. Format and original asset.**
- Practical guide of 1,800–2,500 words.
- **Original asset: a "Dashboard Action Scorecard".** About 10 criteria, each scored 0/1/2 with evidence:
  1. Each widget maps to a named user decision or task.
  2. A clear dashboard type (operational vs analytical) per role.
  3. Every metric has context (target, prior period, threshold).
  4. Exceptions stand out preattentively, using position/length, not colour alone.
  5. Every exception has a next action (button/link) within one click.
  6. Drill-down to the records behind a number.
  7. Designed empty, loading, partial-data and error states, with sample data for new accounts.
  8. Role-based defaults.
  9. Chart choice: position/length over angle/area; no 3D; pies only with labelled values.
  10. Accessibility: 1.4.1, 1.4.11, 1.4.3, keyboard filters, a table or text alternative.
  11. Freshness and definitions visible.
  12. Instrumented: dashboard-to-action clicks, alert-to-resolution time, return visits.
- Include one annotated before/after wireframe. Use a hypothetical example; ZSpace examples only if anonymised and real.

**9. Service and CTA.** `/services/ui-ux-design` (primary). `/services/website-development` (web-app build). CTA: "Get your dashboard scored" or "Discuss a web application idea".

**10. Recommendation: CREATE. I agree with your call, but question the slug.**
- The roadmap (UX-24) already lists `/blogs/saas-dashboard-design`, and UX-25 links to it. That slug is shorter, matches the primary query, and avoids "best-practices", which goes stale.
- **Recommend `/blogs/saas-dashboard-design`**, unless you've already used the longer slug elsewhere.
- Afterwards:
  - trim the saas-product-design "Dashboard UX" section to a summary plus a link;
  - add cross-links from `ecommerce-dashboard-design`, `marketplace-seller-dashboard` and `business-intelligence-dashboards-australia`;
  - use a distinct title such as "SaaS Dashboard Design: How to Help Users Act, Not Just Look".

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "A dashboard is a visual display of the most important information needed to achieve one or more objectives; consolidated and arranged on a single screen so the information can be monitored at a glance." Few adds that a dashboard "tells you what's happening, but not why" and can be the starting point for drill-down. Stephen Few, "Dashboard Confusion", Perceptual Edge / Intelligent Enterprise, 20 Mar 2004. | https://www.perceptualedge.com/articles/ie/dashboard_confusion.pdf | 14 Oct 2026 (text extracted from the PDF) | [Industry] |
| Dashboards are "collections of data visualizations, presented in a single-page view". **Operational** dashboards "impart critical information quickly to users as they are engaged in time-sensitive tasks"; **analytical** dashboards are used "for analysis and decision making". Use "length and 2D position to communicate quantitative information quickly". "Color should not be used to communicate information about quantitative values or magnitude". Pie/donut charts "should be avoided most of the time". 3D makes charts harder to read. Page Laubheimer, NN/g, 18 Jun 2017. | https://www.nngroup.com/articles/dashboards-preattentive/ | 14 Oct 2026 | [Industry] |
| Cleveland & McGill, "Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods", *JASA* 79(387), Sep 1984, pp. 531–554. Ranks elementary perceptual tasks by accuracy, with position on a common scale most accurate and angle, area and shading less so. **The exact count and order of tasks differ across secondary summaries.** Check the paper before listing the full ranking; it's safe to cite "position > length > angle/area" at a high level. | https://www.jstor.org/stable/2288400 | 14 Oct 2026 (bibliographic details via search; paper not read) | [Industry] (peer-reviewed) |
| Heer & Bostock (2010) replicated the Cleveland & McGill tasks via crowdsourcing. | Search summary only | snippet | [Industry]. **Fetch before citing.** |
| WCAG SC 1.4.1 Use of Color (Level A): colour must not be "the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element." | https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html | 14 Oct 2026 | [Official] |
| WCAG SC 1.4.11 Non-text Contrast (AA): 3:1 against adjacent colours for UI components and graphical objects "required to understand the content". Chart lines need 3:1 against the background. Pie slices conveyed only by their edges must be distinguishable; labels and values can remove that need. Text in graphics follows 1.4.3. | https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 14 Oct 2026 | [Official] |
| Empty states: "Use Empty States to Communicate System Status"; "…to Provide Learning Cues"; "…to Provide Direct Pathways for Key Tasks". Kate Kaplan, NN/g, 19 Sep 2021. | https://www.nngroup.com/articles/empty-state-interface-design/ | 14 Oct 2026 | [Industry] |
| HN thread themes (decisions first; email digests; drop-off after the first look; sample data). | https://news.ycombinator.com/item?id=37687798 | 14 Oct 2026 (title, date and count via Algolia; comments partially seen via mirrors) | [Anecdote]. **Read the original before quoting.** |
| Vendor claims such as "key insights visible within 5 seconds" (Datapad) and "north-star metric top-left" (925studios). | various | snippet | [Vendor]. **Don't cite as evidence.** |
| A dashboard's success should be measured by actions taken (click-throughs to resolve, time from alert to resolution), not views. | — | — | [Inference]. Present as ZSpace's recommendation. |

Regional notes: none. Accessibility law triage belongs to Topic 34 and UX-26.

---

## Topic 36: How to improve SaaS user onboarding without adding more steps

**1. Founder question and pain.** "Activation is low, and every fix we try adds another tour, modal or checklist item. How do we get people to value faster without making onboarding longer?"

**2. Intent and stage.** Informational. Live SaaS teams in the scaling / optimisation stage.

**3. Queries.**
- Primary: "improve saas onboarding" / "reduce time to value saas".
- Supporting: "saas activation", "time to first value", "onboarding friction", "product tour vs contextual help", "onboarding checklist best practices", "empty states onboarding".

**4. Demand evidence (moderate).**
- "Ask HN: Any great product onboarding experiences you've had lately?" (Jan 2017, 46 comments): https://news.ycombinator.com/item?id=13463981
- "Ask HN: Can bad onboarding destroy user activation?" (2015, 6 comments): https://news.ycombinator.com/item?id=8975439
- The "time to value" SERP is dominated by onboarding-tool vendors (Chameleon, Appcues-derived statistics), which shows commercial demand.

**5. Existing coverage and gap analysis.** `/blogs/saas-onboarding-optimization` (`blog-data-au-saas-product.ts`, 1,163 words, dated 9 Oct 2026, **0 external links**).

Does it answer "without adding more steps"? **Mostly yes, implicitly.**
- The quick answer says to "remove everything between signup and that behaviour that does not help".
- Step 2 asks of each step "is it needed now, can it be done for the user, or can it wait".
- Its checklist covers minimum signup, pre-fill, templates and sample data, deferring integrations, and no dead ends.
- Step 3 covers progressive disclosure and empty states over tooltips; Step 4 favours contextual guidance over tours; Common mistakes lists long tours.

Does it answer time-to-value? **Not explicitly.**
- The phrase "time to value" or "time to first value" never appears on the page. The only uses on the site are two passing mentions in `/blogs/product-led-growth-b2b-saas`.
- It doesn't tell teams to *measure* time from signup to activation (a median, segmented), which is the metric behind "without adding steps".
- It has no explicit "subtract before you add" rule or step audit table (keep / automate / defer / delete).
- Its tours-vs-contextual claim is uncited, though NN/g supports it directly.
- It has AU-specific framing (the Spam Act note) on a page with a global audience. That's minor, but a UK/EU/India consent line or a neutral phrasing would fit the India-first audience better.

**6. SERP weaknesses.**
- https://chameleon.io/blog/reduce-time-to-value-onboarding is a vendor page that sells in-app guidance (i.e. *more* UI).
- https://abmatic.ai/blog/reducing-time-to-value-saas-customers is vendor content.
- https://vemetric.com/blog/reduce-saas-time-to-value-analytics is vendor content, though it usefully warns that checklist completion is busywork.
- https://fungies.io/?p=39564 is vendor content with uncited target times ("under 5 minutes" etc.).

Common gaps:
- The vendor bias is toward adding tours and checklists, which is exactly the opposite of the question.
- Uncited statistics, e.g. "cut steps 30% → +50% completion", attributed second-hand to Appcues and **unverified**.

**7. Buyer potential.** Medium-high. Maps to UI/UX and CRO audits for SaaS.

**8. Format and original asset.** A minimal update, not a rewrite. Add:
- **(a) A short H2 "Measure time to value, not onboarding completion"** (about 150–200 words):
  - define time to first value as signup → activation event;
  - report a median and a distribution, segmented by signup source and plan;
  - track it alongside the activation rate.
- **(b) A "Subtract before you add" step-audit table** in Step 2. Columns: Step | Needed for first value? | Can we do it for them? | Can it wait? | Decision (delete / automate / defer / keep), with one worked row from the existing clinic example.
- **(c)** One NN/g citation in Step 4.
- **(d)** Retitle the H1 or seoTitle to include "time to value", e.g. "SaaS Onboarding Optimisation: Activation, Time to Value and the First Session". Add one FAQ: "How do we improve onboarding without adding more steps?"
- **(e)** Neutralise the AU-only Spam Act line.
- Set `updated`. About 300–400 words added in total.

**9. Service and CTA.** `/services/ui-ux-design`, `/services/cro-audit`. The existing CTA is fine.

**10. Recommendation: KEEP, with a minimal UPDATE.** I partly challenge your call. "KEEP" is right on the URL and structure, consistent with UX-23. But the page doesn't use the owner's framing (time to value) and has no measurement for it, so "no change" would leave the query unanswered. Treat this as a P3 targeted update (a–e above), not a rewrite. No new URL.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "Tutorials interrupt users, don't necessarily improve task performance, and are quickly forgotten." Push revelations show "new information out of context". Pull revelations are "help content triggered by some signal that the user would benefit from that information at that moment". Walkthroughs are "dramatically overused" but suit novel interaction paradigms. Mentions the "paradox of the active user". Page Laubheimer, NN/g, 12 Feb 2023. | https://www.nngroup.com/articles/onboarding-tutorials/ | 14 Oct 2026 | [Industry] |
| Empty states as learning cues and direct pathways to key tasks (Kaplan, NN/g, 19 Sep 2021). | https://www.nngroup.com/articles/empty-state-interface-design/ | 14 Oct 2026 | [Industry] |
| "Cutting onboarding steps by 30% lifts completion by up to 50%" (Appcues, via GetMonetizely). | secondary vendor citation | **unverified** | [Vendor]. **Do not use.** |
| Target time-to-value by product type ("<5 min" for collaboration tools, etc.). | https://fungies.io/?p=39564 | snippet, uncited | [Vendor]. **Do not use.** |
| Time to value = time from signup to the first meaningful outcome (activation event). Measure the median by segment. | Common definition across vendor sources | — | [Inference]. Define it in the article's own words; no citation needed. |
| There is no universal activation benchmark (the page's existing stance). | — | — | [Inference]. Keep it. It matches the batch-wide rule against borrowed benchmarks. |

Regional notes: lifecycle email consent differs by market (AU Spam Act, UK PECR, India DPDP/TRAI for SMS). Use one neutral sentence and don't build a regional section.

---

## Summary decisions

| # | Topic | Recommendation | Agree with your call? |
|---|---|---|---|
| 33 | Usability testing before a redesign | UPDATE `/blogs/usability-testing`: pre-redesign section, test-plan table, script, 4–6 citations | Agree. Coordinate with UX-28. |
| 34 | Pre-launch accessibility audit | UPDATE `/blogs/website-accessibility-guide`: two-tier checklist, WCAG 2.2, tool limits, regional triage box | Agree. Merge with the WEB-34 edit. Keep it short and link out. |
| 35 | Actionable SaaS dashboards | CREATE, preferably at `/blogs/saas-dashboard-design` (UX-24's slug), with a Dashboard Action Scorecard | Agree on CREATE. Disagree on the slug. |
| 36 | Onboarding without more steps | KEEP the URL plus a minimal update (time-to-value metric, step-audit table, NN/g citation, title tweak) | Partly. KEEP alone leaves time-to-value unanswered. |
