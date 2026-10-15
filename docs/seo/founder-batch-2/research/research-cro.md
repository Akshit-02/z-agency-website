# Batch 2 research: CRO topics 37–40

Checked 14 October 2026. Search was US-only and Reddit was unreachable, so the demand evidence for all four topics is weaker than it would be with PAA scraping or Reddit/Indian forums. Batch 1 facts were reused from `docs/seo/founder-batch-1/research/research-cro.md` and not re-researched. Labels: [Official] = regulator or platform documentation; [Industry] = law firm, legal news or trade press; [Vendor] = tool or agency blog; [Inference] = my reasoning.

**Roadmap rows this batch touches (read before drafting):** CRO-10 (paid landing pages, UPDATE landing-page-development), CRO-12/CRO-29 (should you show prices), UX-27 (planned CREATE `/blogs/dark-patterns-guidelines-india`), UX-31 (India pricing display on saas-pricing-page-optimization), CRO-15 (lead quality), CRO-16 (GA4 key events), **CRO-17 (offline conversion tracking, planned `/blogs/offline-conversion-tracking-lead-generation`)**, **CRO-18 (cookie consent impact, planned `/blogs/cookie-consent-impact-on-conversion-tracking`)** and SHP-29 (Shopify vs GA4 mismatch). The brief named only CRO-15 and CRO-16 as exclusions for topic 39, but CRO-17 and CRO-18 overlap it more. See topic 39.

---

## Topic 37: Building a landing page that matches search intent and converts the right visitors

**1. Founder question and pain.** "We built a landing page for our ads and SEO, but the leads are poor or the page doesn't rank." The pain is paying for clicks that land on a generic page, or making many near-duplicate city or service pages that neither rank nor convert.

**2. Intent and stage.** Informational/how-to, from solution-aware founders and marketers who are running or about to run Google Ads or SEO campaigns. Mid-funnel.

**3. Queries.** Primary: "landing page search intent". Supporting: "landing page for Google Ads lead generation" (CRO-10's query), "message match landing page", "landing page experience Google Ads", "SEO landing page vs PPC landing page", "one landing page per keyword", "location landing pages".

**4. Demand evidence (moderate to weak).** Vendor and agency guides rank for these phrases, which suggests commercial demand: analytify.io/seo-landing-page/, seo.com/basics/content/landing-pages/, hashmeta.com/blog/how-to-design-landing-pages-for-different-search-intents/ (dated Aug 2026), saashero.net/google-ppc/landing-page-intent-matching/. I could not get PAA, Reddit or forum evidence.

**5. Existing ZSpace coverage.**
- `/blogs/landing-page-development` (747 words, 0 external links, `src/lib/blog-data-webdev-6.ts`). It is a generic anatomy piece with sections on above the fold, value proposition, CTA, benefits, proof, objections, forms, mobile, performance and testing. It mentions mismatch in one sentence ("a landing page that doesn't match the promise of the ad or link... creates an immediate, costly mismatch"). Missing: any intent taxonomy, paid vs organic differences, Quality Score and landing page experience, ad-group-to-page mapping, warnings about doorway pages, a cross-link to tracking, and every source.
- `/blogs/landing-page-design-uae` (3,831 words, 16 links) is UAE-specific (WhatsApp, bilingual) and linked from the conclusion. Keep it separate.
- `/blogs/shopify-landing-page-optimization` (1,076 words) covers ecommerce paid traffic. Keep it separate.
- `/blogs/website-lead-generation` (670 words) has a short "Landing Pages" section.

**6. SERP weaknesses.** The SEO-vendor pages (analytify, seo.com) treat a "landing page" as an SEO page and never mention paid message match or Quality Score. The PPC pages (saashero) skip SEO doorway risk. None I saw puts both in one decision table, and none warns that cloning a page per city or keyword can count as doorway abuse under Google's spam policies. They also treat intent as a keyword label, not as a way to decide what the page *asks for* (CTA commitment level).

**7. Qualified-buyer potential.** Medium to high. These readers already spend on ads or are commissioning pages, which leads directly to CRO audit and website build work.

**8. Format and original asset.** Update the existing guide with an "Intent → page → ask" matrix. Rows: informational (guide or resource page, soft CTA such as a checklist or newsletter), commercial investigation (comparison, case study or pricing explainer, CTA to book a consultation or see pricing), transactional or brand (focused offer page with a single CTA and no navigation), and local service ("near me" intent: one strong location page with real local proof, not cloned city pages). Columns: page type, headline promise, proof needed, CTA commitment, nav on/off, primary metric. Then add a short "paid vs organic" box: paid pages can be noindexed, one per ad group theme, with exact message match (keyword → ad → H1 → CTA); organic pages must be uniquely useful, so don't clone them. Add a mini-worksheet: "Paste your ad headline, the keyword and your H1, and check whether they say the same thing."

**9. Service and CTA.** /services/cro-audit (primary), /services/website-development. CTA: "Send us your top 3 ad groups and landing URLs and we'll check message match."

**10. Recommendation: UPDATE /blogs/landing-page-development. I agree.** The page owns the head term and is thin, and CRO-10 already routes its paid-traffic update here. Fold the search-intent framework and the CRO-10 paid section into one update rather than two passes. Do not create a separate "search intent landing page" post; it would cannibalise this page. Target about 1,800–2,200 words. Keep the UAE and Shopify pages as linked specialisations. Don't promise Quality Score uplift numbers.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Quality Score has three components: expected clickthrough rate, ad relevance and landing page experience. Landing page experience is "How relevant and useful your landing page is to people who click your ad." | https://support.google.com/google-ads/answer/6167118 | 2026-10-14 | [Official] |
| "Quality Score is a diagnostic tool" and "Quality Score is not an input in the ad auction." Components are rated Above average, Average or Below average against advertisers shown for the same search over the last 90 days. | same | 2026-10-14 | [Official] |
| Pages with better landing page experience ratings are "well organized and have text that relates to a person's search terms." | https://support.google.com/google-ads/answer/1659694 | 2026-10-14 | [Official] |
| "Doorway abuse is when sites or pages are created to rank for specific, similar search queries." Examples include "multiple domain names or pages targeted at specific regions or cities that funnel users to one page" and "substantially similar pages that are closer to search results than a clearly defined, browseable hierarchy." | https://developers.google.com/search/docs/essentials/spam-policies | 2026-10-14 | [Official] |
| Helpful content self-assessment warning signs: "Is the content primarily made to attract visits from search engines?" and "Are you producing lots of content on many different topics in hopes that some of it might perform well in search results?" (page updated 2026-10-05) | https://developers.google.com/search/docs/fundamentals/creating-helpful-content | 2026-10-14 | [Official] |
| GA4 `generate_lead` event and key events, for the tracking section (reuse from Batch 1) | https://developers.google.com/analytics/devguides/collection/ga4/reference/events ; https://support.google.com/analytics/answer/13128484 | 2026-10-14 (Batch 1) | [Official] |
| Noindexing paid-only variants avoids duplicate pages competing in organic search. | none; a standard practice | n/a | [Inference]. Phrase it as advice, not as a Google rule. |
| Meta/LinkedIn instant lead forms vs landing page trade-offs (CRO-10 asks for this) | **Not researched in this pass.** Verify on Meta Business Help before writing. | n/a | Unverified |

---

## Topic 38: Improving a SaaS pricing page without dark patterns

**1. Founder question and pain.** "How do we lift pricing-page conversion without tricks that get us fined or cause churn and chargebacks?" Founders see competitors use countdown timers, pre-ticked add-ons and hard-to-cancel trials, and don't know where the legal line now sits in India, the UK, Australia and the US.

**2. Intent and stage.** Commercial investigation and implementation, from SaaS founders, PMs and growth leads. Mid to late stage.

**3. Queries.** Primary: "SaaS pricing page best practices". Supporting: "pricing page dark patterns", "is a countdown timer on a pricing page legal", "drip pricing SaaS", "free trial auto-renew rules", "click to cancel rule", "dark patterns guidelines India SaaS billing".

**4. Demand evidence (moderate).** There are dedicated pages on SaaS billing dark patterns: saasui.design/blog/saas-dark-patterns-honest-ux, userpilot.com (SaaS billing dark patterns), deceptive.design/articles/asana-per-seat-pricing. India's June 2025 CCPA advisory drew wide press coverage (storyboard18.com, exchange4media.com, outlookmoney.com), and the UK subscription timing and the US FTC restart drew extensive law-firm coverage in 2026. The law firms are covering it because businesses are asking.

**5. Existing ZSpace coverage.** `/blogs/saas-pricing-page-optimization` (840 words, `src/lib/blog-data-au-saas-growth.ts`, dated 2026-10-10, one Allens link). It already says "Optimise it by removing confusion, not by adding fake urgency or hidden costs" and has a strong plan, value-metric and comparison table. Gaps and risks:
- The only market section is "Pricing display in Australia". It has no India, UK or US section, although India is the first market.
- The AU facts cite only Allens [Industry]. The 1 July 2027 date is consistent across several law firms, but no official source is cited.
- It says "Rules on displaying additional charges (drip pricing) are being tightened from 1 July 2027". That is fine, but one law firm reports the AU drip-pricing rule **does not apply to offers made only to corporate entities** and excludes taxes and payment surcharges. That matters for B2B SaaS, so verify it and add it as a caveat.
- There is no list of named patterns to avoid, and no section on trials, renewals or cancellation, where SaaS risk concentrates.
- Planned overlaps: UX-27 (CREATE `/blogs/dark-patterns-guidelines-india`) will own the full India 13-pattern walkthrough. UX-31 adds an INR/GST display section to this same post. CRO-12/CRO-29 cover showing prices for services.

**6. SERP weaknesses.** The pricing-page design guides (storylane.io/blog/saas-pricing-page-design, designmonks.co, betterlaunch.co/blog/pricing-page-examples) are layout galleries with no regulatory angle. The dark-pattern guides (saasui.design, userpilot, ramotion.com/blog/dark-patterns-examples) list US-centric examples and sometimes cite secondary FTC stories. None maps pricing-page elements to the rules in India, the UK, Australia and the US, and several still describe the US click-to-cancel rule as if it were in force.

**7. Qualified-buyer potential.** Medium to high. SaaS founders with live pricing pages are good prospects for a CRO audit or UX work, and compliance fear motivates them to buy.

**8. Format and original asset.** Add a "Pricing page element × risk" table to the existing post. Rows: countdown or "offer ends" timers; "only N seats left"; pre-selected add-ons or annual toggle; "from" prices that exclude mandatory fees; free trial that requires a card; auto-renew disclosure; cancellation path; confirm-shaming decline copy ("No thanks, I like losing money"). Columns: honest alternative, India pattern name, UK/AU/US note. Follow it with a compact **market box** (India / UK / Australia / US / EU context), each line dated with an "as of 14 Oct 2026" stamp. Keep the India box to two or three lines and link to the planned UX-27 article for the full list.

**9. Service and CTA.** /services/cro-audit (primary), /services/ui-ux-design. CTA: "Get a pricing-page and checkout review for dark-pattern risk and clarity."

**10. Recommendation: UPDATE /blogs/saas-pricing-page-optimization. I agree, with two conditions.**
(a) Do UX-31 (India INR/GST display) in the same pass so the post is edited once. Restructure "Pricing display in Australia" into a "Pricing display by market" section with AU as one entry. Don't delete the AU content.
(b) Keep the dark-pattern section scoped to *pricing, trials and cancellation*. The full India 13-pattern guide belongs in UX-27; put a forward link there, and if UX-27 isn't published yet, link to the official or legal sources instead. Add a legal disclaimer line. Target about 1,600–2,000 words.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| **India:** The CCPA notified the Guidelines for Prevention and Regulation of Dark Patterns, 2023 on 30 Nov 2023 under s.18 of the Consumer Protection Act, 2019. They apply to platforms systematically offering goods or services in India, and to advertisers and sellers. | https://www.verdictum.in/news/central-consumer-protection-authority-dark-patterns-guidelines-notification-1507072 ; https://www.scconline.com/blog/post/2023/12/04/ccpa-notifies-guidelines-for-prevention-and-regulation-of-dark-patterns-2023-legal-news/ | 2026-10-14 | [Industry]. **I could not fetch the official Gazette or consumeraffairs.nic.in final text (only the draft PDF is indexed). Verify before publishing.** |
| India's 13 specified patterns (Annexure 1): False Urgency, Basket Sneaking, Confirm Shaming, Forced Action, Subscription Trap, Interface Interference, Bait and Switch, Drip Pricing, Disguised Advertisement, Nagging, Trick Question, SaaS Billing, Rogue Malwares. | Verdictum (above); SCC Online lists 12 and omits SaaS Billing | 2026-10-14 | [Industry]. Sources differ slightly, so confirm against the official text. |
| Paraphrased Indian definitions: drip pricing includes revealing elements of price late or charging more after confirmation; subscription trap includes making cancellation hard or hidden, or requiring payment details or auto-debit for a free subscription; SaaS billing means covertly generating recurring payments by exploiting SaaS subscription patterns. | Verdictum (above) | 2026-10-14 | [Industry]. Paraphrase only. |
| On 5 June 2025 the CCPA issued an advisory asking e-commerce platforms to self-audit for dark patterns within three months and to submit self-declarations. | https://www.azbpartners.com/bank/central-consumer-protection-authority-issues-advisory-to-e-commerce-platforms-for-self-audit-to-detect-dark-patterns-on-their-platforms/ ; https://www.storyboard18.com/how-it-works/e-commerce-platforms-told-to-self-audit-and-eliminate-dark-patterns-in-new-consumer-advisory-76047.htm | 2026-10-14 | [Industry]. **No PIB or CCPA original found.** The advisory targets e-commerce platforms; whether it applies to SaaS is [Inference]. |
| **UK:** The DMCCA unfair commercial practices changes "came into force on 6 April 2025"; an invitation to purchase must give the full price. Banned practices include falsely claiming "a special offer will finish soon". | https://www.gov.uk/government/publications/what-businesses-need-to-know-about-unfair-commercial-practices/what-businesses-need-to-know-about-unfair-commercial-practices | 2026-10-14 | [Official] |
| CMA price transparency guidance (CMA209), published 18 Nov 2025 and updated 7 Jan 2026. It describes drip pricing as "when prices are added as consumers proceed with a transaction" and partitioned pricing as components shown without the overall price. | https://www.gov.uk/government/publications/price-transparency-cma209 | 2026-10-14 | [Official]. I could not text-extract the PDF, so read the full rules on mandatory and variable fees before writing. |
| The UK subscription contracts regime will come into force in **January 2027**: up-front information, reminders, easier exit, and a 14-day cooling-off after a trial or long-term renewal. Gov.uk press release dated 9 Aug 2026. It was previously targeted for spring 2027 (April 2026 consultation response). Secondary legislation and guidance were reported as still unpublished. | https://www.gov.uk/government/news/pm-starts-roll-out-of-everyday-fixes-on-the-cost-of-living-ending-rip-off-discounts-and-subscription-traps ; https://www.legal500.com/intelligence/united-kingdom/consumer-protection/the-dmcca-subscription-contracts-the-timeline-just-got-shorter (14 Sep 2026) | 2026-10-14 | [Official] for the date; [Industry] for the history and status. Re-check before publishing. |
| **Australia:** The Competition and Consumer Amendment (Unfair Trading Practices) Act 2026 passed in early July 2026 and commences **1 July 2027**. It includes a general unfair trading practices prohibition, a requirement to display transaction-based charges with the base price, and subscription rules including online cancellation where sign-up was online. Existing contracts are caught on renewal or variation. Taxes and payment surcharges are excluded from the drip rule, and corporate-only offers are reportedly exempt. | https://www.allens.com.au/insights-news/insights/2026/07/australias-new-unfair-trading-practices-regime-what-businesses-need-to-know/ ; https://mccullough.com.au/2026/07/03/unfair-trading-practices-laws-australia-2027/ ; https://hwlebsworth.com.au/acl-updates-new-unfair-trading-practices-laws-to-apply-from-2027/ | 2026-10-14 | [Industry]. **No Treasury, ACCC or legislation.gov.au source fetched.** The B2B exemption is significant for SaaS, so verify it. |
| AU card surcharge ban from 1 Oct 2026 (already in the post) | Existing post claim; not re-verified here | n/a | Check that Batch 1 or the post's original source is official (RBA). |
| **US:** The FTC's 2024 amended Negative Option ("click-to-cancel") Rule was vacated in full by the Eighth Circuit on 8 July 2025. The FTC announced a new ANPRM around 11 March 2026 seeking comment on misrepresentations, consent records, disclosures and a simple cancellation mechanism. No proposed rule had been reported as of Sept 2026. ROSCA and FTC Act s.5 enforcement continues. | https://www.cooley.com/news/insight/2026/2026-03-19-ftc-issues-new-advance-notice-of-proposed-rulemaking-on-negative-option-marketing ; https://www.crowell.com/en/insights/client-alerts/clicking-all-the-right-boxes-ftc-moves-to-revive-click-to-cancel-rule-following-eighth-circuit-vacatur ; https://www.jonesday.com/en/insights/2026/05/ftc-revives-clicktocancel-rule-new-risks-for-subscription-businesses | 2026-10-14 | [Industry]. **No ftc.gov or Federal Register page fetched.** Secondary sources conflict on dates. State-level auto-renewal laws (CA, NY, MN) are named only by a vendor site and are unverified. |
| **EU (context only):** DSA Art. 25 bars online platforms from designing interfaces that deceive or manipulate recipients, with an exception for practices covered by the UCPD (2005/29/EC) or GDPR. | https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng | Not retrievable (empty fetch) | **Unverified this pass; from model knowledge.** Use only as one context line after checking. |
| **UAE:** Federal Law 15/2020 on Consumer Protection; Executive Regulation Cabinet Decision 66/2023 reportedly effective 14 Oct 2023. | https://www.bracewell.com/resources/seller-beware-impact-new-executive-regulations-under-uaes-consumer-protection-law | 2026-10-14 | [Industry]. Price-display provisions are **not verified**. Recommend no UAE line in the market box. |
| Fake scarcity and countdown timers fall under "False Urgency" (India) and the UK banned-practice list. | sources above | 2026-10-14 | [Inference] mapping. Don't present it as legal advice. |

---

## Topic 39: Measuring website conversions when customers use several channels before buying (lead-gen, B2B, services)

**1. Founder question and pain.** "Leads come from Google, LinkedIn, referrals and WhatsApp, and close weeks later on a call. GA4 says 'Direct' and the CRM says 'Website'. Which marketing is actually working?" The business pain is cutting the wrong channel and being unable to feed sales outcomes back to ad bidding.

**2. Intent and stage.** Informational/how-to, scaling stage. Readers are founders and marketing leads with real spend across two or more channels.

**3. Queries.** Primary: "how to track leads from multiple channels" or "multi-channel attribution for lead generation". Supporting: "GA4 attribution for lead gen", "how did you hear about us field", "self-reported attribution", "UTM to CRM", "GA4 data-driven attribution B2B", "offline conversions long sales cycle".

**4. Demand evidence (moderate).** There is a cluster of 2026 vendor and agency content: prosemedia.com/blog/marketing-attribution-2026-ga4-crm, everything-pr.com/b2b-marketing-attribution, docs.segmentstream.com/project-configuration/self-reported-attribution, gaconnector.com (Salesforce Web-to-Lead referral problem). Attribution-tool vendors are crowded here, which signals commercial demand. No Reddit or PAA evidence was collected.

**5. Existing ZSpace coverage and overlap (important).**
- `/blogs/ecommerce-attribution` (1,258 words) and `/blogs/ecommerce-attribution-models` (1,210 words; `src/lib/blog-data-commerce-54.ts`) are store-focused. The models post already states GA4's three current models and the removal of rule-based ones, and covers lookback windows. The new article should **link to it, not re-explain models**.
- `/blogs/website-lead-generation` (670 words) has a thin "Analytics and Attribution" H2.
- Planned rows: **CRO-15** (lead quality and CRM stages), **CRO-16** (GA4 key events setup), **CRO-17** (`/blogs/offline-conversion-tracking-lead-generation`: GCLID storage, enhanced conversions for leads, offline import) and **CRO-18** (`/blogs/cookie-consent-impact-on-conversion-tracking`). CRO-17 and CRO-18 together already cover about half of the proposed scope (offline/enhanced conversions and consent impact).

**6. SERP weaknesses.** The vendor pages (segmentstream, cometly.com, leadsbridge.com) steer toward their tools. Several quote unverified accuracy statistics, for example a "72–88% self-reported accuracy" figure attributed to Refine Labs in growthspreeofficial.com. Few explain that GA4 only offers DDA and two last-click models, or that its lookback window is capped at 90 days, which is shorter than many B2B cycles. None I found is written for a small services business without a RevOps team.

**7. Qualified-buyer potential.** High. Multi-channel spend means budget, and the fix (CRM fields, tagging, GTM, imports) is implementation work ZSpace can sell.

**8. Format and original asset.** A **hub-style explainer with a "Measurement stack by maturity" table**: Level 0 (UTMs and key events), Level 1 (UTM, first-touch and click-ID hidden fields into CRM, plus a "How did you hear about us?" field), Level 2 (CRM stages, offline or enhanced conversions, which links to CRO-17), Level 3 (blended reporting: GA4 DDA view vs CRM first-touch vs self-reported, reconciled monthly). Add a **"Three views, three questions" table** (GA4 = what behaviour on the site preceded the lead; CRM = which source produced pipeline and revenue; self-reported = what the buyer remembers, especially dark social, podcasts and word of mouth), plus a UTM naming convention template and a CRM field schema (first-touch source, last-touch source, gclid/fbclid/li_fat_id, self-reported source, GA client_id).

**9. Service and CTA.** /services/cro-audit (primary), /services/website-development (CRM integration). CTA: "We'll audit your UTM, GA4 and CRM source capture and show what your data can and can't tell you."

**10. Recommendation: CREATE `/blogs/measure-multi-channel-website-conversions`. I agree, but rescope it as the hub and narrow CRO-17 and CRO-18 to how-to spokes.** Without that, three pages compete for "lead-gen attribution":
- This article owns *how to combine the three views and choose what to trust* (UTMs, CRM source capture, self-reported attribution, the GA4 attribution settings that matter for lead gen such as the reporting model, lookback windows and channel credit, and a short consent caveat).
- Enhanced conversions for leads and offline import get **one paragraph plus a link to CRO-17**.
- Consent Mode gets **one paragraph plus a link to CRO-18**.
- GA4 key event setup links to CRO-16, and lead stages link to CRO-15.

If the team won't restructure CRO-17/18, then DEFER this and merge its self-reported and UTM-to-CRM content into CRO-17. Target 2,000–2,500 words. Don't quote attribution-accuracy benchmarks.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| GA4 attribution models available: data-driven, paid and organic last click, Google paid channels last click. First click, linear, time decay and position-based "no longer available as of November 2023." | https://support.google.com/analytics/answer/10596866 ; https://support.google.com/analytics/answer/10597962 | 2026-10-14 | [Official]. Note that Google's announcement was in 2023; the Help page gives Nov 2023 as the date they stopped being available. |
| GA4 key event lookback windows: acquisition key events (first_visit/first_open) default 30 days, can be set to 7. All other key events default 90 days, with 30 or 60 as options. The window also applies to session attribution. | https://support.google.com/analytics/answer/10597962 | 2026-10-14 | [Official]. The 90-day cap matters for B2B cycles longer than that: [Inference]. |
| Channel credit setting: "Paid and Organic" is the default for GA4 reports; app conversions always use Google paid channels. | same | 2026-10-14 | [Official] |
| GA4 supported UTM parameters: utm_id, utm_source, utm_medium, utm_campaign, utm_source_platform, utm_term, utm_content, utm_creative_format, utm_marketing_tactic. The last two are not currently reported. "you should always use utm_source, utm_medium, and utm_campaign." | https://support.google.com/analytics/answer/10917952 | 2026-10-14 | [Official] |
| Enhanced conversions for leads "uses user-provided data, such as email addresses, to supplement imported offline conversion data". The site sends hashed lead info through the Google tag or GTM, and the advertiser later uploads conversions with the same hashed data plus any GCLIDs. A GCLID is required if not using a tag to collect user-provided data. | https://support.google.com/google-ads/answer/15713840 | 2026-10-14 | [Official] |
| From **15 June 2026**, offline conversion imports and enhanced conversions for leads uploads "will be migrated to the Data Manager API and blocked in the Google Ads API." | same | 2026-10-14 | [Official]. That date has passed. Check the current wording before writing, as it affects any CRM integration advice. |
| Consent types: ad_storage, analytics_storage, ad_user_data ("Sets consent for sending user data to Google for online advertising purposes") and ad_personalization. Basic mode blocks tags until consent; advanced mode loads tags and sends cookieless pings. Modeling requires a data threshold. (Page updated 2026-07-30.) | https://developers.google.com/tag-platform/security/concepts/consent-mode | 2026-10-14 | [Official] |
| GA4 behavioural modeling eligibility: at least 1,000 events/day with analytics_storage='denied' for at least 7 days, **and** at least 1,000 daily users with analytics_storage='granted' on at least 7 of the previous 28 days. Advanced implementation required. Eligibility not guaranteed. | https://support.google.com/analytics/answer/11161109 | 2026-10-14 | [Official]. Most small lead-gen sites won't qualify: [Inference]. |
| Google's EU user consent policy applies to end users in the "European Economic Area, the UK and Switzerland" and requires consent for cookies where legally required and for personal data used for ad personalisation. | https://www.google.com/about/company/user-consent-policy/ | 2026-10-14 | [Official] |
| From March 2024, for EEA advertisers on consent mode v1, ad_storage was automatically mapped to ad_user_data. Advertisers needed the v2 parameters to keep ad personalisation and remarketing. | https://support.google.com/tagmanager/answer/14754100 (as quoted in search results; not opened directly) | 2026-10-14 | [Official], partially verified. Claims that remarketing lists were "suspended" are [Vendor] only (complianz.io, iubenda). |
| GA4 lead-lifecycle events (qualify_lead, close_convert_lead, etc.) | Batch 1: https://developers.google.com/analytics/devguides/collection/ga4/reference/events | 2026-10-14 (Batch 1) | [Official] |
| GA4 renamed "conversions" to "key events" around March 2024; Google Ads still uses "conversions". | https://support.google.com/merchants/answer/15967934 (Merchant Center; rename context); searchinfluence.com (2 Apr 2024) | 2026-10-14 | Partly [Official], date [Industry]. Batch 1 open item **still unresolved**: no GA Help page found stating the date. |
| Self-reported attribution suffers from recall bias, so pair it with tracked data. | prosemedia.com, everything-pr.com | 2026-10-14 | [Vendor/Industry]. Treat as a qualitative point only. Do **not** use the 72–88% or "40% disagree" figures (unverified). |
| Payment and booking redirects (e.g. Salesforce Web-to-Lead) can start a new GA session as a referral. Fix it with referral exclusion (unwanted referrals). | https://gaconnector.com/blog/eliminate-webto-salesforce-com-referral-google-analytics/ | 2026-10-14 | [Vendor]. Verify the GA4 "List unwanted referrals" Help page before citing. |
| India and other markets: DPDP consent notice for form fields | Batch 1 research-cro.md and research-webdev.md (DPDP Rules dates still flagged for verification) | Batch 1 | Reuse; no new research |

---

## Topic 40: Finding where ecommerce customers abandon the buying journey

**1. Founder question and pain.** "Sales are down. Is it product pages, the cart or checkout?" The pain is guessing at fixes, such as a redesign or new apps, without locating the leaking stage.

**2. Intent and stage.** Informational/diagnostic, from operating ecommerce merchants.

**3. Queries.** "ecommerce funnel drop off", "where do customers drop off checkout", "GA4 funnel exploration ecommerce", "Shopify conversion funnel report", "checkout abandonment GA4".

**4. Demand evidence.** Steady, but the topic is saturated: cleancommit.io/blog/how-to-analyze-shopify-funnel-drop-offs/, conversios.io (GA4 funnel analysis), accs-net.com/checkout-funnel-analysis-find-where-customers-drop-off/, growthsuite.net. The Batch 1 roadmap also marked ecommerce troubleshooting as saturated (CRO-40 KEEP).

**5. Existing ZSpace coverage (checked content).**
- `/blogs/ecommerce-conversion-funnel` (1,173 words, `src/lib/blog-data-growth-2.ts`, updated 2026-09-29). It is accurate on the points I checked:
  - It names Shopify's conversion breakdown as "sessions, sessions with cart additions, sessions that reached checkout and sessions that completed checkout", which **matches** Shopify Help.
  - Its GA4 open vs closed funnel definitions **match** Google Help.
  - Its GA4 ecommerce event list (view_item_list → purchase) is correct.
  - Gaps: it never names GA4's built-in "Checkout funnel performance" exploration template or the step-limit and elapsed-time options; it doesn't say that GA4's documented checkout steps include add_shipping_info and add_payment_info, which Shopify's own funnel lacks; and it has **no external citations**.
- `/blogs/shopify-funnel-audit` (682 words, `blog-data-shopify-cro-3.ts`). **Factual error:** its FAQ and excerpt describe Shopify Analytics' funnel as including "product views". Shopify's Conversion rate breakdown has four steps and no product-view step. Fix this whatever the merge decision.
- `/blogs/shopify-conversion-funnel-optimization` (961 words): overlaps shopify-funnel-audit heavily (both stage tables, segmentation by source and device, checklists).
- `/blogs/ecommerce-customer-journey-analytics` (1,039 words): a distinct path- and journey-level angle (multi-session, buyers vs non-buyers). Keep it.

**6. SERP weaknesses.** Competitor guides (cleancommit, conversios) mostly assume Shopify sends GA4 checkout events correctly via the Google & YouTube app. They rarely mention that Shopify's own customer events have different names (checkout_shipping_info_submitted, payment_info_submitted), or that consent and ad blockers create gaps between GA4 and Shopify orders. ZSpace's page already handles the consent caveat better than most.

**7. Qualified-buyer potential.** Medium. The readers are active merchants, but the topic is crowded and well served.

**8. Format and original asset.** No new asset. If you want to add something small, put a "Which tool shows which stage" table into ecommerce-conversion-funnel: Shopify Conversion rate breakdown (4 steps, no PDP step); GA4 Checkout funnel performance template (begin_checkout → add_payment_info → add_shipping_info → purchase, customisable, up to 10 steps); GA4 open funnel for multi-session checkouts; Shopify customer events for the checkout sub-steps.

**9. Service and CTA.** /services/cro-audit, /services/shopify-development. The existing CTAs are fine.

**10. Recommendation: KEEP ecommerce-conversion-funnel with a minimal update, and MERGE shopify-funnel-audit into shopify-conversion-funnel-optimization. I agree with KEEP and support the flagged merge.** Reasons: ecommerce-conversion-funnel already answers the question accurately, and a new page would cannibalise it and three siblings. Minimal update (about 150–250 words plus citations):
- (a) add 2–3 official citations (Shopify Help behaviour reports, GA4 funnel exploration, GA4 checkout funnel article);
- (b) one sentence naming the GA4 "Checkout funnel performance" exploration and recommending an open funnel for multi-session checkouts, per Google;
- (c) note that Shopify's funnel has no product-view step, so use GA4 or the Shopify product-level reports for PDP drop-off;
- (d) note that GA4 counts only the first occurrence of a repeated event when showing elapsed time.

For the merge, 301 `/blogs/shopify-funnel-audit` to `/blogs/shopify-conversion-funnel-optimization`, carry over its "Funnel Audit Table" and monthly cadence FAQ, and fix the "product views" claim in the process.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Shopify Conversion rate breakdown funnel steps: "All sessions", "Sessions with cart additions", "Sessions that reached checkout", "Sessions that completed checkout". Other added metrics don't appear in the funnel visual. | https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports | 2026-10-14 | [Official] |
| GA4 funnel exploration: "In an open funnel, users can enter the funnel in any step"; "In a closed funnel, users must enter the funnel in the first step." Up to 10 steps; directly vs indirectly followed; elapsed time counts only the first occurrence of a repeated event; trended funnel option. | https://support.google.com/analytics/answer/9327974 | 2026-10-14 | [Official] |
| GA4 Checkout funnel performance exploration: helps "identify the points where users abandon the checkout process". Example steps begin_checkout, add_payment_info, add_shipping_info, purchase. Customisable, with breakdowns. For multi-session checkouts use an open funnel. | https://support.google.com/analytics/answer/12216232 | 2026-10-14 | [Official] |
| Shopify standard customer events include checkout_started, checkout_contact_info_submitted, checkout_address_info_submitted, checkout_shipping_info_submitted, payment_info_submitted, checkout_completed, product_viewed, product_added_to_cart, cart_viewed. | https://shopify.dev/docs/api/web-pixels-api/standard-events | 2026-10-14 | [Official] |
| Shopify's Google & YouTube app sends GA4 ecommerce events automatically. | cleancommit.io and other vendor guides | 2026-10-14 | [Vendor]. **Verify on Shopify Help** before stating which events it sends. Coordinate with SHP-29. |

---

## Open items to verify before drafting
1. India dark patterns: the official Gazette or DoCA final text of the 2023 Guidelines (13 vs 12 patterns across sources) and the original 5 June 2025 advisory.
2. Australia UTP Act 2026: official legislation and ACCC guidance, especially the corporate-only exemption from drip pricing.
3. US FTC ANPRM: the ftc.gov or Federal Register notice and its date.
4. CMA209 full text on mandatory and variable fees. I could not extract the PDF; no PDF tools were available locally.
5. Google Ads Data Manager API migration (15 June 2026) as it now applies.
6. GA4 "key events" rename date on a Google Analytics source (carried over from Batch 1).
7. Meta and LinkedIn lead-form trade-offs for CRO-10 (not researched).
