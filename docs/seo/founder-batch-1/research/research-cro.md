# CRO topic research: topics 17–20 (ZSpace Labs)

Checked 14 October 2026. Labels: [Official] = standards body, regulator or platform docs; [Industry] = independent research or practitioner sources (Baymard, NN/g, statisticians); [Vendor] = tool or agency blog with a commercial interest; [Inference] = my reasoning or calculation.

## Method limits (read first)

- **Reddit was not reachable.** WebSearch refuses `reddit.com` ("not accessible to our user agent"), WebFetch is blocked, and direct curl to reddit.com and old.reddit.com returned 403 or non-JSON. **I have no Reddit thread URLs and have made none up.** Someone needs to search r/marketing, r/PPC, r/smallbusiness, r/SaaS and r/CRO by hand before the briefs are final.
- I used Hacker News (Algolia API) and vendor community forums (HubSpot, Zoho) as the evidence that people ask these questions. GrowthHackers was not checked.
- WebSearch is US-only. The "top content" lists below are US results and may not match SERPs in India, the UAE, Australia, the UK or Singapore. Check those regions with a local SERP tool. I have no search volumes and give none.

---

## Topic 17: Why is your website getting traffic but not generating leads?

1. **Founder problem:** Analytics shows sessions rising but the inbox stays empty, or enquiries are junk. The founder can't tell whether the cause is the wrong traffic, a weak offer, form friction, or a broken form.
2. **Intent and stage:** Problem-aware and diagnostic, mid-funnel. The reader is close to "hire someone to look at this", so this topic has high commercial intent for an audit service.
3. **Queries:** "website traffic but no leads", "website not generating enquiries", "why is my website not converting", "visitors but no contact form submissions", "Google Ads clicks but no leads", "GA4 shows traffic but no conversions".
4. **Evidence the question is asked:**
   - The "traffic but no leads" framing appears on Indie Hackers: https://www.indiehackers.com/post/getting-traffic-but-no-leads-here-s-what-your-website-might-be-missing-8afba86330 (promotional in tone).
   - HN Ask: "Why does my startups conversion sux?" (2012, 12 comments): https://news.ycombinator.com/item?id=4622399
   - Reddit: **not verified** (access blocked, see above).
5. **Top content and gaps:**
   - https://spotler.com/blog/why-is-your-website-getting-traffic-but-no-leads
   - https://bigredjelly.com/blog/website-traffic-conversion/
   - https://www.leanlabs.com/faq/b2b-websites/why-is-our-website-getting-traffic-but-no-pipeline
   - https://marquiz.io/blog/why-is-my-website-not-generating-leads
   - https://www.grossiweb.com/blog/why-your-website-gets-traffic-but-no-leads-and-how-to-fix-it

   **Gaps:** These are generic lists ("weak CTA", "slow site") with no order of diagnosis. They seldom tell the reader to check measurement first: is the form actually sending, and is a `generate_lead` event firing? They don't separate informational traffic from commercial traffic by landing page. None cite primary sources.
6. **Buyer potential:** High. This is the classic way into an audit enquiry.
7. **Original contribution:** A **diagnostic order of checks**:
   - **(a) Plumbing:** submit a test lead on mobile and desktop and confirm it reaches the inbox or CRM. Check spam and shared inboxes.
   - **(b) Measurement:** confirm GA4 `generate_lead` is marked as a key event and fires once per real submission.
   - **(c) Traffic intent:** compare landing pages that get informational queries with those that get commercial ones.
   - **(d) Offer and message match:** check that the page matches the promise in the ad or search result.
   - **(e) Friction and trust on the form.**

   Present it as a flowchart or table: "If X, likely cause Y, check with Z". It needs no client data.
8. **Service and CTA:** /services/cro-audit. CTA: "Get a lead-leak audit". Cross-link /services/ui-ux-design for form and page redesign.
9. **Decision:** **Agree with UPDATE**, and I support the pending MERGE with /blogs/why-is-my-website-not-converting. Two URLs answering the same diagnostic question will cannibalise each other. Keep the stronger URL (by GSC clicks and links) and 301 the other. Add sources and the diagnostic table during the merge.
10. **Facts:**
    - GA4 recommended event `generate_lead`: "This event measures when a lead has been generated (for example, through a form)". Parameters: `currency`, `value` (both conditionally required) and optional `lead_source`. https://developers.google.com/analytics/devguides/collection/ga4/reference/events (checked 2026-10-14) [Official]
    - GA4 also defines lead-lifecycle events: `qualify_lead`, `working_lead`, `disqualify_lead` (with `disqualified_lead_reason`), `close_convert_lead`, `close_unconvert_lead`. You can measure quality as well as volume. Same URL, checked 2026-10-14 [Official]
    - In GA4 you mark an event as a key event to measure actions "important to your business". Google Ads conversions can be created from key events. https://support.google.com/analytics/answer/13128484 (checked 2026-10-14) [Official]
    - Rename date: secondary sources date the "conversions" to "key events" rename to around early 2024 (Search Influence, 2 April 2024). **The exact date is not verified from a Google source.** [Industry, unverified]

---

## Topic 18: What should you A/B test first on your website?

1. **Founder problem:** "We were told to A/B test. What do we test, and do we even have enough traffic?"
2. **Intent and stage:** Solution-aware and tactical. Readers are often in-house marketers and ecommerce operators. Lead-gen founders often ask it before they understand traffic limits.
3. **Queries:** "what to A/B test first", "A/B test ideas lead generation", "B2B A/B testing where to start", "A/B testing prioritisation framework ICE PIE".
4. **Evidence the question is asked:**
   - HN: "Ask HN: A/B tests on low traffic site – is it possible?" (2020): https://news.ycombinator.com/item?id=25591453
   - HN: "Ask HN: High traffic sites use A/B testing. What can low traffic sites use?" (2011): https://news.ycombinator.com/item?id=2667761
   - HN: "Ask HN: How do you A/B test infrequent events?": https://news.ycombinator.com/item?id=3377617
5. **Top content and gaps:**
   - https://webolutionsmarketingagency.com/lead-generation-strategy/conversion-optimization/conversion-optimization-ab-testing-b2b-websites/
   - https://prioritypixels.co.uk/insights/ab-testing-b2b-websites/
   - https://www.invespcro.com/blog/?p=12529 (15 test ideas)
   - https://prospeo.io/s/a-b-testing-lead-generation-campaigns

   **Gap:** Most lists skip the step before "what to test", which is "can you test at all?" They also judge winners by form fills, not by qualified leads.
6. **Buyer potential:** Medium for lead-gen readers. Many have too little traffic to buy testing, but they will buy an audit.
7. **Original contribution:** Begin with a traffic gate. If a page can't reach the required sample in about 4–6 weeks, answer "what to change first" with research methods, not a test (that is topic 20).
8. **Service and CTA:** /services/cro-audit.
9. **Decision:** **Agree with KEEP and fold the lead-gen angle into topic 20.** A separate lead-gen "what to test first" URL would compete with /blogs/ecommerce-ab-testing for the same head query. For most ZSpace-sized lead-gen readers, the honest answer is "you probably can't test yet", which is topic 20's thesis. Small challenge: add a short "Running a lead-gen site, not a store?" box to /blogs/ecommerce-ab-testing that links to the topic 20 article, so readers who land there by query are routed on.
10. **Facts:**
    - Google Optimize and Optimize 360 "are no longer available as of September 30, 2023". Google named integrations with AB Tasty, Optimizely and VWO and made its APIs public for other tools. https://support.google.com/optimize/answer/12979939 (checked 2026-10-14) [Official]
    - Convert recommends A/B testing only if you can send about 10K visitors to each variant, with around 1,000 conversions. https://www.convert.com/blog/a-b-testing/i-dont-have-enough-traffic-to-a-b-test-now-what/ (checked 2026-10-14) [Vendor, use only as one practitioner view]

---

## Topic 19: How to improve website enquiry forms without attracting low-quality leads

1. **Founder problem:** "When we shortened the form, enquiries went up but sales wasted time on tyre-kickers and spam. When we lengthened it, enquiries dried up."
2. **Intent and stage:** Solution-aware and implementation-minded. The reader is an operator or founder with an existing site. Strong fit with design and build services.
3. **Queries:** "contact form best practices", "lead form qualifying questions", "how many fields should a contact form have", "reduce spam form submissions without captcha", "budget field on contact form", "improve lead quality from website forms", "should I make phone number required".
4. **Evidence the question is asked:**
   - HubSpot Community "Spam leads": the user saw junk spike despite reCAPTCHA, and the moderator suggested a honeypot and blocking disposable domains. https://community.hubspot.com/t/spam-leads/129350
   - Zoho Community "Receiving too many Spam Leads. Why?", a long-running multi-page thread: https://help.zoho.com/portal/en-gb/community/topic/receiving-too-many-spam-leads-why?page=17
   - HN: "Ask HN: How to block contact form spam?" (2011, 11 comments): https://news.ycombinator.com/item?id=3231986
   - HN: "Ask HN: Pop-up or embedded form for better conversion?": https://news.ycombinator.com/item?id=13539820
   - Reddit: not verified.
5. **Top content and gaps:**
   - https://clearbit.com/blog/lead-forms (pushes enrichment, its own product)
   - https://orbitforms.ai/blog/website-forms-generating-junk-leads (vendor; the useful split is bot spam, fake details and unqualified prospects)
   - https://orbitforms.ai/blog/qualifying-questions-for-lead-forms
   - https://clixmarketing.com/11-hacks-to-qualify-your-ppc-leads-2/
   - https://blog.hubspot.com/blog/tabid/6307/bid/6195/5-steps-to-unsuckify-your-leads.aspx

   **Gaps:** The page-one results are dominated by form-tool vendors. None ground advice in Baymard, NN/g or GOV.UK evidence. None cover accessibility (WCAG). None cover regional consent wording or phone-field rules (DNC, Spam Act). None separate *spam* (fixed with bot controls) from *low intent* (fixed with copy and qualifying questions).
6. **Buyer potential:** High. The fix is concrete design and build work: form UX, spam controls and CRM routing.
7. **Original contribution:**
   - **A form-field decision table.** Columns: field / friction cost / qualification value / who uses it next / recommendation (required, optional, conditional, ask later, or enrich).
     - Phone: optional with a stated reason, per Baymard.
     - Budget: banded ranges plus "not sure yet" rather than free text.
     - Timeline, service type and company website are all [Inference] recommendations.
   - **A three-problem split:**
     - Bots: honeypot and Turnstile or reCAPTCHA v3, with no puzzle.
     - Fake details from real people: often caused by forced fields, so fix with explanations and making fields optional.
     - Low-intent humans: fix with qualifying copy above the form, banded questions, pricing signals and routing.
   - **A measurement loop:** `generate_lead`, then `qualify_lead` / `disqualify_lead` with a reason.
   - **An accessibility checklist:** visible labels, inline validation on blur, errors described in text, autocomplete attributes.
   - **A regional consent box** (below).
8. **Service and CTA:** Primary: /services/ui-ux-design (form redesign). Secondary: /services/cro-audit. CTA: "Get your enquiry form reviewed".
9. **Decision:** **Agree with CREATE.** There is clear demand and no existing ZSpace coverage beyond a short section. Link to it from /blogs/website-lead-generation's Forms section.
10. **Facts:**
    - Baymard: average checkout has 11.3 form fields in 2024 (11.8 in 2021, 12.7 in 2019), and "most sites need only 8". Field count "impacts overall usability far more than the number of steps". https://baymard.com/blog/checkout-flow-average-form-fields (published 2024-06-26, checked 2026-10-14) [Industry]. **Caveat: these are ecommerce checkout figures. Use them as an analogy for enquiry forms, not a benchmark.**
    - Baymard: 39% of benchmarked sites require a phone number "without any sort of explanation". 14% of 1,026 surveyed shoppers would never give an online store their phone number. Recommendation: explain why, mark it optional, or remove it. https://baymard.com/blog/explain-phone-number-field (updated 2025-07-29, checked 2026-10-14) [Industry]. **Do not quote "14% abandon"**: that wording appears in secondary sources, not in the current article.
    - NN/g: "avoid showing an error until the user has finished with the field and moved to the next field". Exception: complex inputs such as new passwords. Errors shown next to the field. Rachel Krause, 2019-02-03, reviewed 2024-12-12. https://www.nngroup.com/articles/errors-forms-design-guidelines/ (checked 2026-10-14) [Industry]
    - NN/g: "the best solution is to have clear, visible labels that are placed outside empty form fields" (not placeholders). Katie Sherwin, 2014, reviewed 2018. https://www.nngroup.com/articles/form-design-placeholders/ (checked 2026-10-14) [Industry]
    - GOV.UK Design System:
      - "Asking just one question per question page helps users understand what you're asking them to do"
      - "only ask users for information you really need"
      - make it clear "why you're asking each question"

      https://design-system.service.gov.uk/patterns/question-pages/ (checked 2026-10-14) [Official, UK government pattern]
    - WCAG 2.2 SC 3.3.1 Error Identification (Level A): the item in error is identified and "the error is described to the user in text". https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html [Official]
    - WCAG 2.2 SC 1.3.5 Identify Input Purpose (Level AA): the purpose of fields collecting user information must be programmatically determinable (in practice, `autocomplete` attributes). https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html [Official]
    - WCAG 2.2 SC 3.3.7 Redundant Entry (Level A): information already entered "in the same process" must be auto-populated or available to select. Exceptions: when re-entry is essential, needed for security, or the earlier information is no longer valid. Relevant to multi-step forms. https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html [Official]
    - WCAG 2.2 SC 3.3.8 Accessible Authentication (Minimum) (Level AA): this applies to **authentication steps**, not ordinary contact forms. Object-recognition tests are excepted at AA, and audio CAPTCHAs that need transcription don't count as the alternative. https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html [Official]. **[Inference]:** cite it only as a direction ("avoid puzzle CAPTCHAs"), not as a legal requirement for enquiry forms.
    - Cloudflare Turnstile: "smart CAPTCHA alternative" that works "without showing visitors a CAPTCHA". Modes: Managed (may show a checkbox), Non-interactive, Invisible. https://developers.cloudflare.com/turnstile/ (checked 2026-10-14) [Official vendor docs]. Pricing and free-tier limits were not verified.
    - Google reCAPTCHA v3 "returns a score for each request without user friction". Scores run 1.0 (likely good) to 0.0 (likely bot), the default threshold is 0.5, and you should verify the action name on the server. https://developers.google.com/recaptcha/docs/v3 (checked 2026-10-14) [Official vendor docs]
    - Honeypot fields and disposable-domain blocking are practitioner suggestions (HubSpot moderator, URL above) [Industry, anecdotal].

**Regional notes (forms that collect personal data or marketing consent):**

- **India (DPDP):** DPDP Rules 2025 were notified 13–14 November 2025 (secondary sources differ by a day).
  - Rule 3 (notice) and most obligations commence 18 months after publication, about **13–14 May 2027**.
  - Consent notices must be standalone, in clear and plain language, list the personal data item by item with the specified purpose, and link to consent withdrawal, rights and complaints.
  - Sources: Mondaq, https://www.mondaq.com/regulatory-update-notification-of-the-digital-personal-data-protection-rules-2025/1713500 ; AMS Shardul alert, https://www.amsshardul.com/wp-content/uploads/2025/11/Regulatory-Alert-Enforcement-of-DPDP-Act-and-Notification-of-DPDP-Rules.pdf [Industry/legal; **verify against the MeitY Gazette text before publishing**].
- **UK:** UK GDPR plus PECR as amended by the Data (Use and Access) Act 2025.
  - The PECR maximum fine rose to £17.5m or 4% of global turnover (previously £500k).
  - The charity soft opt-in was added.
  - Commencement is staged, and secondary sources give conflicting dates (Feb 2026 and later).
  - GOV.UK factsheet: https://www.gov.uk/government/publications/data-use-and-access-act-2025-factsheets/data-use-and-access-act-factsheet-pec-regulations [Official]. Fine figures come from law-firm commentary [Industry]. Check the ICO for exact commencement dates.
- **Australia:** Spam Act. You need express or inferred consent to send commercial electronic messages, pre-ticked boxes are not express consent, and you must provide a working unsubscribe and identify the sender. ACMA: https://www.acma.gov.au/theACMA/spam-industry-obligations [Official]. **Form implication [Inference]:** use an unticked, separate marketing opt-in checkbox. The enquiry reply itself is not the issue.
- **Singapore:** PDPA DNC. Under section 43, check the DNC Registry before sending specified marketing messages (voice, SMS, fax) to a Singapore number unless you hold clear and unambiguous consent. PDPC DNC guide: https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Resource-for-Organisation/DNC-Rules-for-Organisations-v3.pdf [Official]. **Form implication [Inference]:** if you will call or SMS about other offers, capture explicit consent for that channel next to the phone field. Penalty figures in secondary sources conflict, so don't quote them.
- **UAE:** PDPL is Federal Decree-Law No. 45 of 2021. **I did not verify the status of its executive regulations or its consent wording in this pass**, so give no specifics.

---

## Topic 20: How to build a CRO roadmap when you have limited traffic and budget

1. **Founder problem:** "We get 2–10k visits a month and a handful of enquiries. Agencies talk about A/B testing. What should we actually do, in what order, for little money?"
2. **Intent and stage:** Solution-aware planning, close to buying. The reader is weighing an audit against DIY. This is the best fit of the four topics for /services/cro-audit.
3. **Queries:** "CRO for low traffic websites", "conversion optimisation without A/B testing", "CRO roadmap template", "how many visitors do I need for an A/B test", "minimum detectable effect explained", "CRO for small business".
4. **Evidence the question is asked:** The HN threads 25591453, 2667761 and 3377617 (URLs above). Many vendors also write about "not enough traffic", which suggests steady demand (Seer, Convert, SiteSpect, Mouseflow, Conversion Rate Experts). Reddit: not verified.
5. **Top content and gaps:**
   - https://mouseflow.com/blog/cro-for-low-website-traffic-7-tactics-for-optimizing-without-a-b-testing/
   - https://www.seerinteractive.com/insights/not-enough-traffic-for-ab-testing
   - https://www.conversion-rate-experts.com/low-traffic/
   - https://thegood.com/insights/cro-for-small-businesses/
   - https://blog.convert.com/i-dont-have-enough-traffic-to-a-b-test-now-what.html

   **Gaps:** Thresholds conflict and are unsourced: "10K per variant", "500–1,000 conversions/month", "15,000 visits". None shows the founder the actual sample-size maths at lead-gen conversion rates (1–5%). Most are ecommerce-skewed. None give a dated, sequenced roadmap with a budget tier.
6. **Buyer potential:** High. The natural next step is a research-led audit.
7. **Original contribution:**
   - **A sample-size reality-check table.** I calculated these figures myself (see Facts). The point: at a 2% enquiry rate, detecting a 20% relative lift needs about 21k visitors *per variant*. Most small service sites can't do that, so they should change approach rather than run underpowered tests.
   - **A 90-day roadmap:**
     - Weeks 0–2: measurement and plumbing (GA4 key events and the lead-lifecycle events).
     - Weeks 2–4: research. Heuristic review, 5-user usability tests (NN/g), form analytics, session recordings, a post-submit survey, and sales-call notes.
     - Weeks 4–10: ship fixes that are clearly right without a test (broken things, accessibility failures, form friction).
     - Weeks 10+: make one bold change on the highest-intent page and read it directionally, before and after with seasonality caveats. A/B test only where the table says you can.
   - **Move the metric:** proxies such as form starts or CTA clicks give more events, but warn that they may not track qualified leads.
   - **Fold in the "what to test first on a lead-gen site" angle from topic 18.**
8. **Service and CTA:** /services/cro-audit. CTA: "Book a research-led CRO audit (no testing tool required)".
9. **Decision:** **Agree with CREATE**, absorbing topic 18's lead-gen angle. Link both ways with /blogs/ecommerce-cro-testing-roadmap: its "Low-Traffic Roadmaps" section points to the new article, and the new article points back for stores.
10. **Facts:**
    - **Sample size per variant** [Inference, calculated]. Two-sided two-proportion test, α = 0.05, power = 0.80, standard pooled-variance formula, computed 2026-10-14. Cross-check against Evan Miller's calculator (https://www.evanmiller.org/ab-testing/sample-size.html, which reports sample size "per variation") before publishing. Small differences are expected because tools use different formulas.

      | Baseline rate | +10% rel | +20% rel | +30% rel | +50% rel |
      |---|---|---|---|---|
      | 1% | ~163,000 | ~42,700 | ~19,800 | ~7,750 |
      | 2% | ~80,700 | ~21,100 | ~9,800 | ~3,830 |
      | 3% | ~53,200 | ~13,900 | ~6,450 | ~2,520 |
      | 5% | ~31,200 | ~8,160 | ~3,780 | ~1,470 |

      Double these figures for total traffic with two variants.
    - Kohavi: "You cannot compensate for a small sample size by simply running the test for months" (from Lenny's Podcast, as quoted at https://www.antoinebuteau.com/lessons-from-ronny-kohavi/) [Industry, secondary quote]. The episode itself (27 July 2023): https://www.lennysnewsletter.com/p/the-ultimate-guide-to-ab-testing. **I could not verify a specific Kohavi user-count threshold** (e.g. "tens of thousands") from a primary source, so don't quote one. The book: Kohavi, Tang & Xu, *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020 [Industry]. Pull any figure from the book itself.
    - NN/g (Nielsen, 2000): testing with 5 users finds about 85% of usability problems, assuming a 31% per-user discovery rate. Run several small rounds rather than one large one. NN/g recommends about 20 users for quantitative studies. https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ (checked 2026-10-14) [Industry]
    - Google Optimize sunset 30 September 2023, with integrations named (see topic 18) [Official].
    - Practitioner thresholds conflict: Convert says ~10K visitors per variant and ~1,000 conversions. Others say 500–1,000 conversions a month, or 15,000 visits a month. Present them as disagreement, not as rules [Vendor].
    - GA4 lead-lifecycle events, so the roadmap can optimise for *qualified* leads (see topic 17) [Official].

---

## Open items before writing

1. Do a manual Reddit pass for real threads in each subreddit, and record URLs and dates.
2. Check UAE PDPL executive regulations and consent wording.
3. Confirm UK DUAA PECR commencement dates with the ICO.
4. Confirm the DPDP Rules Gazette date.
5. Find the date of the GA4 "key events" rename on a Google source.
6. Check the sample-size table against Evan Miller's calculator.
7. Read the Kohavi book for any traffic-threshold quote.
