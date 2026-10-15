# Batch 3 research: CRO topics 57–60

Checked 15 October 2026. Labels: [Official] = platform, standards or regulator docs; [Industry] = independent research (Baymard, NN/g, CXL research); [Vendor] = tool or agency content with a commercial interest; [Inference] = my reasoning. Search is US-only and Reddit is unreachable, so community evidence below comes only from forums and SERP pages these tools could reach. No search volumes are given anywhere; none were measured.

---

## Topic 57: Why do visitors leave your landing page without taking action?

**1. Founder question and pain.** "People land on the page from ads or search and leave without filling in the form or tapping WhatsApp." The pain is paying for clicks that produce nothing, and not knowing whether to blame the traffic, the page or the offer.

**2. Intent and stage.** Diagnostic/informational. Readers already have a site and traffic, often paid. They are mid-funnel buyers for CRO or landing-page work.

**3. Queries.** Primary: "why do visitors leave my landing page". Supporting: "landing page high bounce rate", "landing page not converting", "visitors leave without converting", "landing page traffic but no conversions", "why is my landing page not getting leads".

**4. Demand evidence.** Moderate, but served almost entirely by agencies and vendors. The SERP on 15 Oct 2026 showed clicksgeek.com (two near-duplicate posts), spotler.com, whitelabelcoders.com, reelflow.com and prepr.io. No PAA panel or forum threads were visible through this tool. The query overlaps heavily with "website gets traffic but no leads", which Batch 1 already targeted.

**5. Existing ZSpace coverage (checked).**
- `/blogs/website-gets-traffic-but-no-leads` (2,731 words, Batch 1). This is the diagnostic. It has six steps (form/event check, traffic quality by landing page and channel, volume vs rate, device split, behaviour signals including GA4 engagement, five-user test), a redesign/migration section, eight official or research citations and 13 FAQs, including "Is a high bounce rate in GA4 a sign of a UX problem?". It fully answers this question at site level.
- `/blogs/landing-page-development` (1,805 words, Batch 2, `src/lib/blog-data-webdev-6.ts`). It covers intent matching, message match, anatomy, forms, mobile, speed and measurement, with five official citations. **Gap:** it never uses the words "leave", "bounce" or "exit", and it does **not link to** `/blogs/website-gets-traffic-but-no-leads`. A reader who arrives with "why are people leaving?" gets the prevention guide but no route to the diagnosis.
- `/blogs/why-is-my-website-not-converting` (796 words, no external sources, `blog-data-webdev-5.ts`). A thin, generic overview. It also does not link to the Batch 1 diagnostic. This is outside the topic, but worth noting: it is the weakest page in the cluster and competes for the same intent. Flag it for a later rewrite or a merge into the Batch 1 diagnostic. That is [Inference]; I did not check its traffic.
- `/blogs/shopify-landing-page-optimization` (1,076 words, no sources): ecommerce paid-traffic angle. Distinct enough.
- `/blogs/landing-page-design-uae` (3,831 words, 16 sources): the regional page. Distinct.

**6. SERP weaknesses.**
- https://clicksgeek.com/website-visitors-leaving-without-converting/ and https://clicksgeek.com/website-traffic-not-converting/ are near-duplicate agency posts with generic lists.
- https://whitelabelcoders.com/blog/why-are-my-landing-pages-not-converting-qualified-traffic: generic causes, no measurement steps.
- https://www.reelflow.com/insights/why-do-visitors-leave-without-converting: correctly says many visitors are researching, but it is selling a product.
- https://prepr.io/blog/how-to-capture-95-of-landing-page-visitors-who-dont-convert-on-the-first-click: personalisation vendor pitch.

None of them separates a broken form or event from a bad page, splits by device and channel, or cites GA4 docs. ZSpace's Batch 1 page already beats them on these points.

**7. Qualified-buyer potential.** Medium to high: these are paying advertisers. But the intent is already captured by the Batch 1 page, so a new page would add cannibalisation, not buyers.

**8. Format and asset.** No new asset. The minor update below is enough.

**9. Service and CTA.** /services/cro-audit (primary), /services/website-development. Existing CTAs are fine.

**10. Recommendation: KEEP, with one minor update to `/blogs/landing-page-development`. I agree with your call.**

Do not create a page. The minor update (about 120–200 words) to `/blogs/landing-page-development`:
- (a) Add one FAQ: "Why do visitors leave my landing page without taking action?" The answer: the usual causes are a mismatch between the ad or query and the headline, an unclear offer, a CTA that asks for too much commitment, slow mobile loading, and a broken form or tracking. Before changing the page, run the diagnosis in [[/blogs/website-gets-traffic-but-no-leads|traffic but no leads]].
- (b) In the "Measure the right conversion" section, add one sentence and the same link: check that the lead event fires and compare engagement by landing page, channel and device before redesigning.

Optional, separate ticket: add the same link to `/blogs/why-is-my-website-not-converting`, and queue that 796-word page for review.

**11. Facts an article would need.** All reused from Batch 1. No new research is needed.

| Claim | Source | Checked | Label |
|---|---|---|---|
| GA4 `generate_lead` and lead-lifecycle events exist | https://developers.google.com/analytics/devguides/collection/ga4/reference/events | Batch 1, 14 Oct 2026 | [Official] |
| GA4 engagement rate and bounce rate definitions (bounce rate is the inverse of engagement rate) | https://support.google.com/analytics/answer/12195621 (as cited in the Batch 1 page) | Batch 1 | [Official]. Reuse the wording on the Batch 1 page. |
| Core Web Vitals thresholds | https://web.dev/articles/vitals | Batch 1 | [Official] |
| Unbounce Q4 2024 "6.6% median landing page conversion rate" | Seen only in a search summary; primary not opened | 15 Oct 2026 | **[Unverified]. Do not use.** |

---

## Topic 58: How to improve lead quality when your website generates enquiries that never convert

**1. Founder question and pain.** "We get enquiries, but sales says they're rubbish. They ask for the price and disappear, they're outside our area, or they never pick up." The cost is sales time spent on non-buyers, ad budgets optimised towards form fills that never close, and arguments between marketing and sales with no shared definition of a good lead.

**2. Intent and stage.** Problem-aware and diagnostic. Readers are operating lead-gen businesses (services, B2B, clinics, real estate, education). They are close to buying a CRO audit, a site rebuild or a CRM/tracking integration.

**3. Queries.** Primary: "how to improve lead quality from website". Supporting: "website leads not converting", "low quality leads from website", "leads not converting to sales", "how to measure lead quality", "qualified leads Google Ads", "GA4 qualify_lead", "lead response time", "marketing qualified lead definition small business".

**4. Demand evidence.** Reasonable. The SERP on 15 Oct 2026 was full of agency and vendor posts on the exact phrase: orbitforms.ai/blog/improve-website-lead-quality, clicksgeek.com/how-to-improve-website-lead-quality/, thriveagency.com/news/how-to-reduce-low-quality-leads-from-your-website/, hawksem.com/blog/improve-lead-quality-fast/, leadfeeder.com/blog/marketing-analytics/how-to-measure-improve-lead-quality/. There is one real founder thread on Clarity.fm: "I'm having trouble getting good quality leads. Most of my leads just asking for price and not coming back" (https://clarity.fm/questions/4179/answers/13929/share). Google has also built product surface for this pain: GA4 shipped Lead acquisition and Lead disqualification and loss reports (support pages below; launched around July 2025 per ppc.land, [Industry]), and Google Ads has qualified/converted lead goals. Platform investment like this is indirect evidence of demand. Reddit could not be checked.

**5. Existing ZSpace coverage (checked).**
- `/blogs/improve-website-enquiry-form-conversions` (Batch 1, 2,331 words). It has a section "Measure lead quality, not form volume", with the GA4 lead-lifecycle event table, and it separates spam, low intent and drop-off as three problems. **Scope:** the form only. It does not cover targeting, ad optimisation, pricing signals, routing, speed to lead or follow-up.
- `/blogs/measure-multi-channel-website-conversions` (Batch 2, 2,331 words). Covers source capture, CRM fields, offline conversion import and enhanced conversions for leads. **Scope:** attribution, not why leads fail to close.
- `/blogs/ai-lead-qualification` (869 words, no sources, `blog-data-ai-core-5.ts`). Covers fit vs intent, scoring, routing and SLAs, framed around AI automation. It is useful as a link target for scoring. It has no diagnosis and no GA4 or Google Ads loop.
- `/blogs/ai-lead-qualification-uae` (4,724 words, 14 sources, `blog-data-uae-sales.ts`). This is a UAE/WhatsApp-specific qualification workflow. Its section "Speed to lead: what the evidence says" already handles the HBR 2011 study correctly: it quotes only the abstract ("are not responding nearly fast enough"), labels the data as US/2011 and directional, and recommends measuring your own median time to first response. **The new page should reuse that framing and link to this page**, not restate the research.
- Roadmap: Batch 1 README listed CRO-15 as slug `measure-website-lead-quality`. Batch 2 decisions kept CRO-15 separate from the topic 39 hub.

**What is missing across the library:** an end-to-end diagnosis (where in the chain quality is lost), a worksheet for agreeing a written definition of a qualified lead with sales, disqualification reasons as a data source, speed-to-lead and follow-up as part of conversion, and feeding qualified and converted outcomes back into Google Ads so bidding stops buying junk.

**6. SERP weaknesses.**
- https://orbitforms.ai/blog/improve-website-lead-quality, form vendor: form-centric, pushes its own tool.
- https://clicksgeek.com/how-to-improve-website-lead-quality/, agency: generic list, no measurement.
- https://thriveagency.com/news/how-to-reduce-low-quality-leads-from-your-website/: spam and form tactics only.
- https://www.leadfeeder.com/blog/marketing-analytics/how-to-measure-improve-lead-quality/, vendor: the closest to a measurement angle, but it pushes visitor-identification software.
- https://hawksem.com/blog/improve-lead-quality-fast/: PPC-focused, unsourced figures.

None cite GA4's lead reports or Google Ads' qualified/converted lead goals. None give a disqualification-reason taxonomy. None split the problem into **wrong people arriving**, **right people mis-handled** and **measurement or optimisation pointing at the wrong target**.

**7. Qualified-buyer potential.** High. The reader has traffic, has leads and has budget, and their stated problem maps to /services/cro-audit plus tracking and CRM integration work.

**8. Format and original asset.** A diagnostic how-to (2,200–2,800 words) built around a **lead-quality diagnosis table**. Rows are failure points; columns are "symptom in CRM", "likely cause", "where to check" and "fix":
1. **Targeting:** wrong geography, keywords or audience.
2. **Messaging and pricing signals:** the page attracts price shoppers because there is no price anchor, minimum engagement or "who this is for" line.
3. **Form qualification:** reuse the Batch 1 page and link to it.
4. **Spam vs low intent.**
5. **Routing:** the wrong owner, or none.
6. **Speed to lead.**
7. **Follow-up cadence.**
8. **Measurement:** ads optimised to raw form fills.

Original assets:
- (a) A **"qualified lead" definition worksheet** for marketing and sales to fill in together: must-have fit criteria, disqualifiers, the evidence used to decide, who decides, and within how many days.
- (b) A **disqualification-reason picklist** that maps to GA4's `disqualified_lead_reason` and `unconvert_lead_reason` parameters, for example out of area, budget below minimum, wrong service, student or job seeker, spam, no response.
- (c) A hypothetical worked example, labelled as hypothetical.

Absorb CRO-15 fully. "Measure lead quality" becomes one section, not a separate page.

**9. Service and CTA.** Primary /services/cro-audit. Secondary /services/website-development (forms and CRM integration). CTA: "Send us a month of anonymised lead outcomes. We'll show you where quality is lost: targeting, page, form or follow-up."

**10. Recommendation: CREATE `/blogs/improve-website-lead-quality`, absorbing CRO-15. I agree.**
- Use the `improve-` slug over the roadmap's `measure-website-lead-quality`. It matches the founder's phrasing and the SERP. Retire the CRO-15 slug in the roadmap so it is not created later.
- **Guard against cannibalisation.** Keep form-field advice to one paragraph and link to `/blogs/improve-website-enquiry-form-conversions`. Keep the offline import mechanics to one paragraph and link to `/blogs/measure-multi-channel-website-conversions`. Link to `/blogs/ai-lead-qualification` for scoring automation.
- Add a reciprocal link from the Batch 1 form page's "Measure lead quality" section to the new page.
- **Speed to lead:** cover it qualitatively (respond quickly, set an SLA, measure time to first contact in the CRM). **Do not cite response-time statistics** (see facts table).

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| GA4 recommended lead events: `generate_lead`, `qualify_lead`, `working_lead`, `disqualify_lead` (param `disqualified_lead_reason`), `close_convert_lead`, `close_unconvert_lead` | https://developers.google.com/analytics/devguides/collection/ga4/reference/events | Batch 1, 14 Oct 2026 | [Official]. Reuse. |
| GA4 **Lead acquisition** report: Reports > Acquisition > Lead acquisition (or Business objectives > Generate leads). New leads = unique users with `generate_lead`; Qualified leads = unique users with `qualify_lead`; Converted leads = unique users with `close_convert_lead`. User-scoped channel dimensions. "populated by sending the events outlined in the lead generation recommended events." Editors can restore it to navigation. | https://support.google.com/analytics/answer/16376749 | 15 Oct 2026 | [Official] |
| GA4 **Lead disqualification and loss** report: "populated by filtering for disqualify_lead and close_unconvert_lead events". Dimensions: Disqualified lead reason (from `disqualified_lead_reason`) and Lost lead reason (from `unconvert_lead_reason` in `close_unconvert_lead`). | https://support.google.com/analytics/answer/16374727 | 15 Oct 2026 | [Official] |
| These GA4 lead reports were launched around 21 July 2025 | https://ppc.land/google-analytics-launches-lead-acquisition-and-loss-tracking-reports/ | 15 Oct 2026 (search summary) | [Industry]. The date is not on the Google pages; avoid it or hedge it ("added in 2025"). |
| Google Ads replaced the "imported leads" goal with two goal types: **qualified leads** ("Google generated leads" further vetted offline, e.g. in a CRM) and **converted leads** (leads "that have completed a chosen step" in your offline process). The lead funnel report shows volumes from interactions to leads, qualified leads and converted leads. The goals help Smart Bidding and Performance Max optimise. Default goal for Salesforce/CRM imports is "Converted lead". | https://support.google.com/google-ads/answer/11459091 | 15 Oct 2026 | [Official]. No update date is shown on the page. |
| Google Ads best practices for high-quality leads: the action should have "at least 15 conversions in the last 30 days" at account level; "upload conversion data regularly, ideally daily"; "Ideally, choose a conversion action that happens within 7 days of the ad interaction"; use value-based bidding (Maximize conversion value / target ROAS) if leads have different values, otherwise target CPA on qualified or converted leads; consider upgrading to enhanced conversions for leads; consider "ReCAPTCHA, double opt-in, or server-side validation" for lead authenticity. | https://support.google.com/google-ads/answer/13489421 | 15 Oct 2026 | [Official]. The 15-conversion and 7-day guidance is the key point for small businesses: many won't reach 15 *converted* leads a month, so optimising to *qualified* leads is the realistic step. That conclusion is [Inference]. |
| Conversion value rules "let you adjust your conversion value reporting and Smart Bidding optimization" by Audiences, Geographic locations or Device (plus "No condition" for select goals). Used by Target ROAS and Maximize conversion value. Some conditions may be unavailable for housing, employment or credit ads. | https://support.google.com/google-ads/answer/10518330 | 15 Oct 2026 | [Official]. The Help page does not name the Add/Multiply/Set actions; those come from the API docs (https://developers.google.com/google-ads/api/docs/conversions/conversion-value-rules). Don't claim value rules can score lead quality by form answer; they can't, per the conditions listed ([Inference] from the condition list). |
| From 15 June 2026, offline conversion imports and enhanced conversions for leads uploads move to the Data Manager API and are blocked in the Google Ads API | Batch 2: https://support.google.com/google-ads/answer/15713840 | Batch 2, 14 Oct 2026 | [Official]. Reuse; mention only if integration advice is given. |
| **Lead response time research:** Oldroyd, McElheran and Elkington, "The Short Life of Online Sales Leads", *Harvard Business Review*, March 2011 (vol. 89, issue 3, p. 28) | https://hbr.org/2011/03/the-short-life-of-online-sales-leads ; https://scholarsarchive.byu.edu/facpub/9711 | 15 Oct 2026 | **Original paywalled; method and figures not verified from the primary.** The widely repeated figures ("2,241 US companies", "37% responded within an hour", "nearly 7 times as likely to qualify") appear only in secondary sources. The research is also from 2011, US-only, and co-authored by InsideSales.com (a vendor). **Per the brief: do not use the figures.** At most, say "HBR research published in 2011 found most companies were slow to respond to web leads", which matches the accessible abstract ("most companies are not responding nearly fast enough"). |
| A founder example of the pain ("leads just asking for price and not coming back") | https://clarity.fm/questions/4179/answers/13929/share | 15 Oct 2026 | Community. Use as illustration only; don't quote it as data. |

**Regional notes.** Phone and WhatsApp follow-up consent rules differ by market. Reuse the Batch 1 regional consent table (UK PECR/DUAA, AU Spam Act/ACMA, SG DNC, India DPDP flagged). Don't research them again.

---

## Topic 59: How to prioritise CRO experiments when your team has more ideas than time

**1. Founder question and pain.** "We have a spreadsheet of 60 test ideas from the team, the agency and the CEO. Which do we do first?" The pain is that the loudest opinion wins, traffic is spent on trivial tests, and nobody can explain why the backlog is ordered as it is.

**2. Intent and stage.** Informational/how-to for teams already running CRO, or about to start. Mid-to-late stage. These readers often have an in-house marketer and may hire outside help for research or test build.

**3. Queries.** Primary: "how to prioritize CRO tests". Supporting: "A/B test prioritization framework", "PIE vs ICE vs PXL", "CRO backlog prioritization", "PXL framework template", "ICE score", "what to test first CRO", "test prioritization spreadsheet".

**4. Demand evidence.** Moderate, niche and practitioner-heavy. The SERP on 15 Oct 2026 showed CXL (https://cxl.com/blog/better-way-prioritize-ab-tests/), speero.com/post/how-to-prioritize-your-a-b-tests-ideas, mida.so/blog/test-prioritization-frameworks-ice-pie-pxl, switas.com/articles/cro-backlog-prioritization-ice-pie-pxl-rice and growthmethod.com/pxl-framework/. No forum threads or PAA were visible through this tool.

**5. Existing ZSpace coverage (checked).**
- `/blogs/ecommerce-experiment-prioritization` (1,137 words, `src/lib/blog-data-commerce-57.ts`, dated 2026-09-29). It is sound and well structured. It already covers:
  - a core-factors table (reach, evidence, impact, effort, risk, testability);
  - a frameworks table (PIE, ICE, PXL, RICE, custom);
  - an evidence-weighted pseudo-formula, and reach by template;
  - fix/test/research, portfolio balance and testability;
  - a meeting checklist, impact bands, cost of delay and bias.

  **Missing:**
  - (a) **No external sources at all.** Framework origins are not attributed.
  - (b) **No usable worksheet.** The code block is pseudo-code, not something a founder can copy.
  - (c) **Ecommerce-only framing.** Nothing for lead-gen sites, where reach should be weighted by lead value and qualified-lead rate, and where traffic is usually too low to test, so most items become fix or research.
  - (d) **A subtle inaccuracy.** The FAQ says "PIE rates potential, importance and ease". Goward's original framing ranks **pages or areas** to test (Potential = how much a page can improve, Importance = value and volume of the page's traffic, Ease = technical and organisational difficulty), not individual ideas. Worth one sentence of correction.
  - (e) The PXL row should say that PXL **weights** some criteria (noticeable within 5 seconds, adds or removes an element) and is designed to be customised.
- Related pages: `/blogs/ecommerce-experimentation-framework` (1,049 words, no sources) has a "Prioritization" section. Keep that short and link out. `/blogs/cro-strategy-low-traffic-websites` (1,759 words, 5 sources) covers sample-size reality and "what to test first on a lead-gen site". It is the right link for the lead-gen note. `/blogs/saas-mvp-feature-prioritisation` is product, not CRO, so no conflict.

**6. SERP weaknesses.**
- https://cxl.com/blog/better-way-prioritize-ab-tests/ is the canonical PXL source. It is authoritative, but it is the framework, not a process: no lead-gen angle, no fix/test/research split. (403 to our fetcher.)
- https://mida.so/blog/test-prioritization-frameworks-ice-pie-pxl: vendor comparison with opinions stated as findings.
- https://www.switas.com/articles/cro-backlog-prioritization-ice-pie-pxl-rice: comparison; no worksheet.
- https://speero.com/post/how-to-prioritize-your-a-b-tests-ideas: agency, good, but pitches its own model.
- https://growthmethod.com/pxl-framework/: a reproduction of PXL criteria.

The common gap: nobody checks testability (sample size vs traffic) as a **gate** before scoring, and nobody handles the low-traffic lead-gen case.

**7. Qualified-buyer potential.** Medium. Readers are already investing in CRO and some will want a research-led backlog built for them. Lower urgency than topics 58 and 60.

**8. Format and original asset.** Update in place. Original asset: a **scoring worksheet** as a table the reader can copy into a sheet. Columns:
- idea;
- page or template;
- evidence sources (one column each for analytics, user test, survey/support and session recordings, scored 0/1);
- reach (share of sessions, or share of revenue or leads);
- noticeability (0/1/2);
- effort (S/M/L);
- **testable? (yes/no gate, from a sample-size calculator)**;
- stream (fix/test/research);
- score;
- decision and reason.

Include 5 filled hypothetical rows: 3 ecommerce, 2 lead-gen.

**9. Service and CTA.** /services/cro-audit. The existing CTA ("Backlog ordered by opinion?") is fine. Add a worksheet-led CTA: "Send us your backlog; we'll score it against your analytics."

**10. Recommendation: UPDATE `/blogs/ecommerce-experiment-prioritization`. I agree.** Scope: about +500–800 words.
1. Add the worksheet table after "Make Evidence Count". Keep the pseudo-code or replace it.
2. Add an H2 "If you run a lead-generation site". Reach = sessions × lead value; the metric is qualified leads, not form fills (link to the topic 58 page once live); with low traffic, most items go to fix or research (link to `/blogs/cro-strategy-low-traffic-websites`).
3. Move the testability check into a gate before scoring.
4. Attribute the frameworks: PIE to Chris Goward/WiderFunnel, ICE to Sean Ellis (commonly attributed), PXL to CXL. Correct the PIE wording to "originally used to rank pages to test".
5. Add a Sources section.
6. Optionally broaden the `seoTitle` to catch non-ecommerce queries, e.g. "How to Prioritize CRO Experiments: PIE, ICE, PXL and a Scoring Worksheet". Keep the slug; no redirect needed.

Do not create a separate generic "CRO test prioritization" page; it would cannibalise this one. That is [Inference]; the content is 80%+ the same.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| PIE was developed at WiderFunnel ("a simple tool we developed"), in an article by Chris Goward. Potential = how much a page can improve, worst performers first, from analytics, customer data and heuristic analysis. Importance = value of the page's traffic (volume and cost). Ease = technical implementation plus organisational/political barriers. The output is "an objective number ranking". **No scale or formula is given.** | https://www.practicalecommerce.com/Use-the-PIE-Method-to-Prioritize-Ecommerce-Tests (Chris Goward, 12 Dec 2013) | 15 Oct 2026 | [Industry] (by the creator). Don't state a canonical "1–10, averaged" formula as WiderFunnel's; secondary sources disagree on sum, average or multiply. "1–10 per criterion" can be described as common practice. |
| Conversion (conversion.com, "Part of GAIN") now hosts a PIE page: "originally designed by Conversion President, Chris Goward". | https://conversion.com/?p=4584 | 15 Oct 2026 | [Vendor]. It confirms Goward but doesn't mention WiderFunnel. The WiderFunnel-to-Conversion relationship is **unverified**; say "Chris Goward of WiderFunnel" with the 2013 citation. |
| PIE was popularised in Goward's book *You Should Test That!* (2012) | Secondary only (search summary) | 15 Oct 2026 | [Unverified]. Omit, or verify via the publisher (Wiley/Sybex). |
| ICE (Impact, Confidence, Ease) is attributed to Sean Ellis (GrowthHackers) for ranking growth experiments | productplan.com/glossary/ice-scoring-model; SaaStr transcript https://www.saastr.com/sean-ellis-founder-ceo-of-growthhackers-building-a-company-wide-growth-culture-video-transcript/ | 15 Oct 2026 | [Industry/Vendor]. **The original GrowthHackers post was not found.** Write "commonly attributed to Sean Ellis". The claim that the original scoring added rather than multiplied is single-source; omit it. |
| PXL was created by CXL (Peep Laja and team) as a more objective alternative to PIE/ICE. Mostly binary criteria: above the fold (1), noticeable within 5 seconds (2), adds or removes an element (2), designed to increase motivation (1), runs on high-traffic pages (1), addresses issues found via user testing (1), qualitative feedback (1), digital analytics (1), supported by mouse tracking/heat maps/eye tracking (1), plus ease of implementation. Intended as a customisable template. | Primary: https://cxl.com/blog/better-way-prioritize-ab-tests/ (**returned 403 to fetch**). Criteria as reproduced at https://growthmethod.com/pxl-framework/ (updated 29 Jul 2025) | 15 Oct 2026 | [Industry], secondary reproduction. **The ease-of-implementation scale was not visible; don't state it.** Check the CXL page in a browser before quoting weights. |
| Sample size calculator for the testability gate | https://www.evanmiller.org/ab-testing/sample-size.html (already cited by cro-strategy-low-traffic-websites) | Reuse | [Industry] |
| RICE (Reach, Impact, Confidence, Effort) is from Intercom | Not researched this pass | — | [Unverified]. The existing page names RICE without attribution; leave it unattributed or verify on intercom.com. |

---

## Topic 60: How to diagnose mobile ecommerce conversion problems from product page to checkout

**1. Founder question and pain.** "Most of our traffic is mobile, but mobile converts at a fraction of desktop. Is it the product page, the cart or checkout, or is mobile traffic just lower intent?" The pain is either throwing a redesign at "mobile", or ignoring a real leak because blended conversion looks acceptable.

**2. Intent and stage.** Diagnostic, from operating merchants (mostly Shopify for ZSpace's audience). Close to buying an audit or a fix.

**3. Queries.** Primary: "mobile conversion rate lower than desktop". Supporting: "how to diagnose mobile conversion problems", "mobile checkout drop off", "Shopify mobile conversion rate low", "GA4 funnel by device", "mobile vs desktop conversion rate ecommerce", "mobile add to cart rate low", "Shopify sessions by device".

**4. Demand evidence.** Moderate to good.
- A real merchant thread on the Shopify Community: "Struggling with low conversion rates on mobile devices?" (https://community.shopify.com/t/struggling-with-low-conversion-rates-on-mobile-devices/672259).
- Vendor Q&A pages target the exact question: growthsuite.net/questions/are-mobile-visitors-converting-worse-than-desktop-and-by-how-much and growthsuite.net/questions/how-do-i-test-mobile-vs-desktop-conversion-performance-separately.
- nostra.ai/blogs-collection/mobile-vs-desktop-conversion-rate; orbitmedia.com/blog/ga4-explorations/.
- Baymard's research page says some mobile sites convert "less than half as many visitors" as desktop. That is qualitative only; no exact figure is given.

Reddit was not checked.

**5. Existing ZSpace coverage (checked).**
- `/blogs/shopify-mobile-cro-audit` (582 words, no sources, `src/lib/blog-data-shopify-cro-4.ts`, dated 2026-08-28). It has checklists for speed, tap targets, forms/checkout and navigation, plus a short "Measuring Mobile-Specific Performance" section.
  - **Factual issue:** that section says to "Segment every key funnel metric by device in Shopify Analytics — product views, add-to-cart rate, reached-checkout rate and completed-checkout rate". Shopify's default Conversion rate breakdown has four steps and **no product-view step**, and the behaviour reports list no device split for it. A product-view-by-device cut is only possible through ShopifyQL (`session_viewed_product` + `session_device_type`), or through GA4. This is the same error Batch 2 flagged in shopify-funnel-audit.
  - **Structural issue:** it is a checklist, not a diagnosis. It has no step order, no "mix vs friction" check and no device-by-stage table. Its checklists duplicate `shopify-mobile-cro` (your 0.80 body-overlap figure).
- `/blogs/shopify-mobile-cro` (1,347 words, no sources): the fixes page (navigation, PDP, sticky CTA, forms, cart drawer, checkout, CWV, popups, a problems/causes/tests table). Keep it as the "what to change" page.
- `/blogs/mobile-ecommerce-ux` (1,480 words, 1 source) and `/blogs/mobile-ecommerce-checkout` (1,072 words, no sources): platform-neutral design guides. Distinct; link targets.
- `/blogs/ecommerce-conversion-funnel` and `/blogs/shopify-conversion-funnel-optimization` (Batch 2 decisions): funnel pages, not device-specific. Link, don't duplicate.

**6. SERP weaknesses.**
- https://www.nostra.ai/blogs-collection/mobile-vs-desktop-conversion-rate, vendor (speed product): mostly benchmarks and speed.
- https://www.growthsuite.net/questions/are-mobile-visitors-converting-worse-than-desktop-and-by-how-much, vendor Q&A: the step-by-device idea is right, but the benchmark numbers are unsourced.
- https://blog.coupler.io/why-your-shopify-store-is-getting-traffic-but-no-sales/: general, not device-led.
- https://www.orbitmedia.com/blog/ga4-explorations/: good GA4 how-to, but not ecommerce-funnel-specific.

**Common gaps:**
- No one explains that GA4 funnel breakdowns attribute a cross-device user only to the **first** device value.
- No one gives the Shopify-native route: Sessions by device, the ShopifyQL device × funnel query, and the web-performance device filter.
- No one separates **traffic mix** (e.g. paid social is mostly mobile and low intent) from **mobile friction** by comparing devices within the same channel.
- Unsourced "mobile CR = X%" benchmarks are everywhere.

**7. Qualified-buyer potential.** High. Merchants with a measurable mobile gap are ready to pay for an audit and a theme or checkout fix, and the diagnosis leads naturally into /services/cro-audit.

**8. Format and original asset.** A step-by-step diagnostic (1,800–2,400 words). Original asset: a **device-by-stage gap table** with rows = stages and columns = mobile rate, desktop rate, mobile ÷ desktop ratio, "where to look", "likely causes" and "fix guide". Stages:
1. Landing to engaged.
2. Session to product view.
3. Product view to add to cart.
4. Add to cart to reached checkout.
5. Reached checkout to purchase.

The reader fills it in from Shopify or GA4. The stage with the worst ratio is where to start. Proposed steps:
1. **Check tracking parity first.** Does `add_to_cart` fire on the mobile sticky bar or cart drawer? Do Shop Pay and other wallets reach purchase? [Inference; a common failure.]
2. **Pull device-by-stage numbers.** Shopify: Sessions by device, plus a ShopifyQL query for `added_to_cart_rate` / `conversion_rate` grouped by `session_device_type`, filtered to human sessions. GA4: a funnel exploration with a Device category breakdown, or the Checkout funnel performance template.
3. **Rule out mix.** Compare mobile vs desktop **within** the same channel and landing-page type. If the gap disappears, the cause is traffic intent, not UX.
4. **Find the worst-ratio stage.**
5. **Check mobile field performance** for the templates at that stage (Search Console CWV mobile; Shopify web performance reports filtered to mobile).
6. **Watch 5 mobile sessions** (recordings) and test on a real mid-range phone.
7. **Map to fixes**, linking to shopify-mobile-cro, mobile-ecommerce-checkout and mobile-ecommerce-ux.

**9. Service and CTA.** /services/cro-audit (primary), /services/shopify-development. CTA: "Send us your device-by-stage numbers; we'll tell you which stage to fix first."

**10. Recommendation: UPDATE `/blogs/shopify-mobile-cro-audit` into the diagnostic. I agree, with three conditions.**
- **Target confirmed.** It is the only page whose framing is "audit", it is the thinnest (582 words), and it is Shopify-specific, which matches ZSpace's buyer. A new generic "mobile-ecommerce-conversion-diagnosis" page would compete with both Shopify mobile pages and the funnel pages. Make the method platform-neutral by giving GA4 steps alongside Shopify's, so non-Shopify readers are still served.
- **Retitle.** Suggested: "Shopify Mobile Conversion Audit: How to Find Where Mobile Shoppers Drop Off". Keep the slug.
- **De-duplicate against shopify-mobile-cro.** Replace the audit's four fix checklists with the diagnostic steps and one compact "what to check at each stage" table that links into shopify-mobile-cro for fixes. That should bring the body overlap well below 0.80 ([Inference]; re-run your overlap check after drafting).
- **Fix the "product views in Shopify Analytics" claim**, and add Sources.
- Add a reciprocal link from shopify-mobile-cro's FAQ "How do I test whether my mobile experience is actually the problem?" to the updated audit.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| GA4 funnel exploration Breakdown: "if you select the "Device category" dimension, you will see each step broken down by the different device categories". "users are only attributed to the first instance of the breakdown value that applies to them": a user starting on mobile and finishing on desktop appears only under mobile. Up to 4 segments. Open vs closed funnels; up to 10 steps. | https://support.google.com/analytics/answer/9327974 | 15 Oct 2026 (open/closed and 10 steps from Batch 2) | [Official] |
| GA4 Checkout funnel performance exploration template (begin_checkout → add_payment_info → add_shipping_info → purchase); use an open funnel for multi-session checkouts | https://support.google.com/analytics/answer/12216232 | Batch 2, 14 Oct 2026 | [Official]. Reuse. |
| Shopify behaviour reports include "Sessions by device", which "displays the type of devices used to access your website". The default Conversion rate breakdown funnel is All sessions → Sessions with cart additions → Sessions that reached checkout → Sessions that completed checkout (no product-view step). No behaviour report is described as giving conversion rate by device; Sidekick can be asked "Show my conversion rate by device type for the last 30 days." | https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports | 15 Oct 2026 (funnel steps also Batch 2) | [Official]. The Sidekick line is from the page; Sidekick availability by plan or region is unverified. |
| ShopifyQL `sessions` schema: `session_device_type` (e.g. "Desktop, Mobile, Tablet, or Smart TV"), `session_device_os`, `session_device_browser`; metrics `sessions_with_cart_additions`, `sessions_that_reached_checkout`, `sessions_that_completed_checkout`, `added_to_cart_rate` (cart-addition sessions / sessions), `conversion_rate` (completed-checkout sessions / sessions); boolean `session_viewed_product`, `session_viewed_collection`; `landing_page_type`; `human_or_bot_session`. The documented example groups by `referrer_source, session_device_type`. | https://shopify.dev/docs/api/shopifyql/latest/schemas/sessions_and_behavior/sessions.md | 15 Oct 2026 | [Official]. Field names are versioned; check them against the version the merchant's admin uses. |
| Shopify Analytics has a query editor: you can "type your ShopifyQL query into the query editor at the top of the report" | https://changelog.shopify.com/posts/query-your-store-s-data-from-any-analytics-report (11 Jun 2025) | 15 Oct 2026 | [Official]. Plan availability is not stated; [Unverified]. |
| Shopify web performance reports "contain information about desktop and mobile experiences". The summary shows sessions "divided by device type". The Over Time, Page URL and Page Type reports can be filtered by "device type". Real-user, P75, 30 days, up to 36h lag (Batch 1 F14). | https://help.shopify.com/en/manual/online-store/web-performance/web-performance-dashboard | 15 Oct 2026 | [Official]. Whether the summary CWV rankings are split by device is **not stated**. |
| Search Console Core Web Vitals report "breaks down the data by the device used to view the URL (Mobile or Desktop)", with status assigned per device. Data from CrUX ("real world usage data"), last 28 days, 75th percentile. URLs are grouped by similar experience. Thresholds: LCP ≤2.5s / ≤4s; INP ≤200ms / ≤500ms; CLS ≤0.1 / ≤0.25. | https://support.google.com/webmasters/answer/9205520 | 15 Oct 2026 | [Official] |
| PageSpeed Insights reports on both mobile and desktop; field data is from the previous 28-day CrUX period at the 75th percentile; mobile lab runs simulate "a mid-tier device (Moto G4)". | https://developers.google.com/speed/docs/insights/v5/about | 15 Oct 2026 | [Official]. The Moto G4 wording is from the page; Lighthouse's current emulated device may differ, so don't over-specify. |
| Baymard mobile benchmark: of 138 major US and European mobile sites (a subset of the 344-site benchmark), 62% are "mediocre" (or worse), 38% "decent", and none rated "good". 400+ mobile UX guidelines; 3,600+ mobile usability issues found in testing. | https://baymard.com/research/mcommerce-usability | 15 Oct 2026 | [Industry]. **No publication date is shown on the page; say "Baymard's current mobile benchmark".** An older 58-site version (52% / 48%) exists; don't mix the two. |
| Baymard: some mobile sites convert "less than half as many visitors" as desktop | same | 15 Oct 2026 | [Industry], qualitative only. Don't turn it into a benchmark ratio. |
| Baymard documented cart abandonment average 70.22% (50 studies, updated 22 Sep 2025) and reasons list | https://baymard.com/lists/cart-abandonment-rate | Batch 1, 14 Oct 2026 | [Industry]. Reuse. It is **not** mobile-specific; don't present it as a mobile figure. |
| Usability testing with 5 users finds most problems | https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ | Batch 1 | [Industry]. Reuse. |
| Mobile vs desktop conversion "benchmarks" (e.g. "mobile 1.5–2.5%, desktop 3–4.5%") | Vendor pages only (growthsuite, nostra) | 15 Oct 2026 | [Vendor], unsourced. **Do not use.** Tell readers to use their own device ratio by stage. |
| A blended conversion rate can hide a mobile gap when the device mix shifts (Simpson's-paradox-style mix effect) | — | — | [Inference]. Explain it with a clearly hypothetical example. |

---

## Summary of calls

| # | Topic | Your call | My recommendation |
|---|---|---|---|
| 57 | Visitors leave the landing page | KEEP / minor | **KEEP + minor update** to `/blogs/landing-page-development`: add one FAQ and one link in "Measure the right conversion" to `/blogs/website-gets-traffic-but-no-leads`. Optionally link that page from `why-is-my-website-not-converting` (796w, no sources; queue it for review). |
| 58 | Lead quality | CREATE improve-website-lead-quality | **CREATE `/blogs/improve-website-lead-quality`** (agree). It absorbs CRO-15; retire the `measure-website-lead-quality` slug. New official facts: GA4 Lead acquisition and Lead disqualification and loss reports; Google Ads qualified/converted lead goals; the 15 conversions/30 days and 7-day delay guidance. HBR 2011 response-time figures: **do not use** (paywalled; method unverified). Reuse the framing in ai-lead-qualification-uae. |
| 59 | Prioritising experiments | UPDATE ecommerce-experiment-prioritization | **UPDATE** (agree). Add a worksheet, a lead-gen H2, a testability gate, attributions and sources. Correct the PIE framing (it ranks pages/areas). ICE is "commonly attributed" to Ellis (original not found). The CXL PXL page returned 403; criteria come from a secondary reproduction. |
| 60 | Mobile diagnosis | UPDATE shopify-mobile-cro-audit | **UPDATE** (agree). Turn it into a device-by-stage diagnostic; retitle; replace the duplicate checklists with links to shopify-mobile-cro; fix the "product views in Shopify Analytics" error. New official facts: Shopify Sessions by device, ShopifyQL device fields, web performance device filter, Search Console CWV mobile/desktop split, and GA4's first-device breakdown attribution. |
