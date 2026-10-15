# UI/UX topic research: topics 13–16 (ZSpace Labs)

Research date: 14 October 2026. All "date checked" values are 2026-10-14 unless noted.

## Method and limits (read first)

- **SERP observation is US-only.** WebSearch returns US results, so the "current top content" lists below are not what founders in India, UAE, AU, UK or SG see. Before publishing, re-check rankings with a localised SERP tool (google.co.in, .ae, .com.au, .co.uk, .com.sg).
- **Reddit could not be reached.** The search tool refuses reddit.com ("domain not accessible to our user agent"), and general searches returned no Reddit threads. Evidence of demand therefore comes from Hacker News, Indie Hackers and the Shopify Community. **No Reddit URLs are cited, and none should be added without checking them by hand.**
- No search volumes are given. Query lists are qualitative.
- Labels: [Official] = standards body, government or platform documentation; [Industry] = research firms such as NN/g and Baymard; [Vendor] = agency or tool marketing; [Inference] = my own reasoning.
- Existing ZSpace posts were checked in `src/lib/blog-data*.ts` (read only, nothing edited).

---

## Topic 13: How much UI/UX design does a startup need before development begins?

**1. Founder problem.** A founder has a budget and a developer (or agency) ready to start. They don't know whether to pay for wireframes, a clickable prototype, a full high-fidelity Figma file or nothing, and they worry both about wasting design spend and about rework during the build.

**2. Intent and journey stage.** Commercial investigation, late consideration. The founder is about to commit money and is deciding scope, sequence and possibly vendor. This is very close to a purchase.

**3. Queries (qualitative).** Primary: "how much design before development", "do I need UI/UX design before building an MVP". Related: "should I hire a designer or developer first", "wireframes vs high fidelity for MVP", "MVP design cost", "is a Figma prototype enough to start development", "design-ready vs dev-ready Figma", "can developers build from wireframes".

**4. Evidence the question is asked.**
- HN, "Ask HN: Building an MVP without a designer in 2017?": https://news.ycombinator.com/item?id=14503105
- HN, "Ask HN: How much work do you put into MVP?": https://news.ycombinator.com/item?id=14311953
- HN, "Ask HN: Best way to build an MVP for non-technical founder": https://news.ycombinator.com/item?id=39295533
- HN, "Ask HN: Are PM/design specs usually lacking?": https://news.ycombinator.com/item?id=34559063 (the handoff-gap side of the same question)
- HN, "Ask HN: Is an MVP the first thing a startup should build?": https://news.ycombinator.com/item?id=30316086. Commenters say the right first step depends on whether the riskiest assumption is about UX, the market or technical feasibility.
- Marketplaces sell this exact scope ("Dev-ready Figma", "MVP design sprint") on Dribbble, Contra and Upwork, which shows buyers are already searching for the deliverable.
- Reddit (r/startups, r/UXDesign, r/SaaS): **not verified** because of the tool block. Check by hand.

**5. Current top content and gaps (US SERP).**
- https://www.parallelhq.com/blog/mvp-design-cost (agency; mostly about cost)
- https://dbbsoftware.com/insights/mvp-ui-ux-design-guide (agency guide)
- https://attractgroup.com/blog/wireframes-in-app-development-their-use-and-benefits (wireframes as a scoping and estimation tool)
- https://app.uxcel.com/courses/product-development-lifecycle/mvp-design-817/creating-low-fidelity-mvp-wireframes-6313 (course content: start low-fi)
- https://vic.gov.au/prototype-test-and-iterate-design-product-service-or-policy (Victorian Government; pitched at large projects, not startups)

Gaps:
- No ranking page gives a **decision rule tied to risk type and team model**: what is enough if a solo full-stack developer builds it, an outsourced agency on a fixed bid, or an in-house team.
- None defines a "minimum handoff-ready package": which states (empty, error, loading), edge cases and copy must exist before a fixed-price quote can be trusted.
- Cost figures are vendor-anchored and US-priced.
- None connects design depth to the estimate accuracy a developer needs.

**6. Buyer potential.** High. This reader is about to spend on design and/or development. ZSpace sells both, so the answer "here's the minimum design that makes your build quote reliable" leads straight to a scoped engagement.

**7. Original contribution (no claimed client experience).**
- A **"Design-depth decision matrix"**. Rows are what's riskiest (desirability, usability, feasibility, viability). Columns are the delivery model (fixed bid, time and materials, in-house). Each cell gives the recommended fidelity and artefacts.
- A **printable "ready to build" checklist**: core flows mapped, each screen in all states, responsive breakpoints decided, components named, copy drafted, accessibility basics (contrast, focus order, target size) settled, open questions logged.
- A worked illustration that is clearly labelled hypothetical: "the same 12-screen MVP specified at three depths, and what each depth leaves the developer guessing."
- Ground it in public method sources: the GOV.UK alpha phase, NN/g on fidelity, and NN/g on 5-user tests (with caveats).

**8. Service page and CTA.** /services/ui-ux-design. CTA: "Get a pre-build design scope: we'll tell you the minimum design your build needs" (a short scoping call or MVP design sprint).

**9. Verdict on CREATE: agree, with conditions.** Existing posts cover the *process* (/blogs/product-design-process: research → define → ideate → prototype → test → build), *artefact definitions* (/blogs/wireframing-vs-prototyping, which already has a "Choosing Fidelity" section) and *handoff*. None answers the *budgeting and sufficiency* question: "how much, and when is it enough to start building". That angle is distinct, provided the new article:
- links out to those posts rather than redefining wireframes and prototypes;
- leads with the decision matrix and checklist.

Keep the "Choosing Fidelity" section in wireframing-vs-prototyping short and point it at the new article, to avoid cannibalisation.

**10. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| GOV.UK alpha: "build things that are just complex enough to let you test different ideas, not production quality code"; identifying and testing "your riskiest assumptions" is "a crucial part of alpha". Page last updated 8 May 2019. | https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works | 2026-10-14 | [Official] |
| Fidelity "refers to how closely it matches the look-and-feel of the final system". It can vary separately for interactivity, visuals and content. Low-fi lets you spend "more time on design, before the test". Kara Pernice, NN/g, 18 Dec 2016. | https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/ | 2026-10-14 | [Industry] |
| "Test no more than 5 users and run as many small tests as you can afford." Five users find about 85% of problems **under the model's assumptions** (an average per-user discovery rate L = 31%). Caveats from the same article: it holds only "for comparable users who will be using the site in fairly similar ways"; distinct user groups need 3–4 users each; finding all problems needs about 15 users; the advice is to run 3 rounds of 5, not 1 round of 15. Jakob Nielsen, 18 Mar 2000. | https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ | 2026-10-14 | [Industry] |
| Five users is for qualitative tests only. Quantitative studies need at least 20 users (more for tight confidence intervals), card sorting at least 15 per group, eyetracking 39. Nielsen, 3 Jun 2012. (Later NN/g guidance on quantitative studies may give a higher figure. **Not verified here.**) | https://www.nngroup.com/articles/how-many-test-users/ | 2026-10-14 | [Industry] |
| Nielsen and Faber: at least two iterations (three versions) before release. **Seen only in a search snippet. Fetch before citing.** | https://www.nngroup.com/articles/parallel-design/ | snippet only | [Industry] |
| Vendor MVP-design price ranges vary widely, from about $400 to $25k+. Use only as an illustration that "prices vary", never as a benchmark. | parallelhq.com, Dribbble and Contra listings above | 2026-10-14 | [Vendor] |
| A design spec is "enough" when a developer can estimate it without assuming missing states. | — | — | [Inference] |

Regional note: none material. For public-sector or regulated builds in India, GIGW 3.0 applies (see Topic 16). Use INR/AED/AUD/GBP/SGD framing rather than US price anchors.

---

## Topic 14: UX problem or traffic problem?

**1. Founder problem.** Leads or sales are low. The founder can't tell whether to spend on marketing (SEO or ads) or on fixing the site, and agencies on each side tell them it's the other side's fault.

**2. Intent and journey stage.** Problem-aware, early-to-mid consideration. This is diagnostic intent, and it is the entry point to a CRO audit.

**3. Queries.** "traffic but no sales", "traffic but no leads", "high traffic low conversion", "is it my website or my traffic", "traffic problem vs conversion problem", "why do visitors leave my website", "good engagement rate GA4", "high bounce rate meaning GA4", "conversion rate dropped after redesign".

**4. Evidence.**
- HN, "Ask HN: Plenty of organic traffic but struggling to make sales" (a freemium app with 100–200 visits a day and about 0.1% paid conversion): https://news.ycombinator.com/item?id=47781115
- HN, "Ask HN: What is a good conversion rate for a landing page?": https://news.ycombinator.com/item?id=3347579
- Shopify Community, "Why is my high traffic website getting low conversions?": https://community.shopify.com/t/why-is-my-high-traffic-website-getting-low-conversions/259256
- Shopify Community, "Drop in conversion after migration and website redesign" (replies point to tracking breaking and too many changes at once): https://community.shopify.com/t/drop-in-conversion-after-migration-and-website-redesign/403763
- Indie Hackers, "After 4 landing page rewrites, I finally figured out why my analytics SaaS wasn't converting": https://www.indiehackers.com/post/after-4-landing-page-rewrites-i-finally-figured-out-why-my-analytics-saas-wasnt-converting-1d5b9be9b0

**5. Current top content and gaps (US SERP).**
- https://www.leanlabs.com/faq/b2b-websites/how-do-you-tell-the-difference-between-a-traffic-problem-and-a-conversion-problem (short FAQ)
- https://databox.com/high-traffic-but-no-sales-ecommerce (expert roundup)
- https://seoprofy.com/blog/getting-traffic-but-no-sales/ (SEO agency)
- https://blog.coupler.io/why-your-shopify-store-is-getting-traffic-but-no-sales/ (Shopify-specific)
- https://clicksgeek.com/?p=17036 (6-step "diagnostic")

Gaps:
- Few explain **"check measurement first"**: a broken key event looks exactly like a UX problem.
- Almost none uses GA4's actual definitions (what counts as an engaged session; bounce rate as the inverse of engagement rate).
- They don't segment by channel × landing page × device, which is where traffic and UX problems separate.
- They don't map behavioural signals (Clarity rage, dead and quick-back clicks) to likely UX causes.

**6. Buyer potential.** High for /services/cro-audit. Readers who reach a "UX side" verdict are pre-qualified audit leads.

**7. Original contribution: a decision tree (or table) to add to the existing post.**
- **Step 0, trust the data.** Are key events firing (DebugView)? Do GA4 conversions match CRM or store orders? Did tracking change at the time of a redesign or migration?
- **Step 1, volume vs rate.** Few qualified sessions means a traffic problem. Adequate sessions with a low key-event rate means continue to step 2.
- **Step 2, channel × landing page.** Use the GA4 Landing page report plus engagement rate by session source/medium.
  - Low engagement concentrated in one channel suggests **intent mismatch** (traffic quality).
  - Low engagement across all channels on the same pages suggests **page or UX**.
  - High engagement but no key events suggests **offer, form or checkout friction**.
- **Step 3, device split.** A mobile-only gap points to UX or performance. Check Core Web Vitals field data.
- **Step 4, behaviour.** Clarity rage/dead clicks point to broken or misleading UI. Quick backs and excessive scrolling point to navigation or content mismatch.
- **Step 5, qualitative.** Run 5-user tasks per audience segment.

Each step should name the report, the threshold to look for and the likely fix owner (marketing vs design/dev).

**8. Service page and CTA.** /services/cro-audit (primary), /services/ui-ux-design (secondary). CTA: "Send us your GA4 access and we'll tell you which side of the line you're on."

**9. Verdict on UPDATE/MERGE into /blogs/website-gets-traffic-but-no-leads: agree.** The post already has a Traffic Quality section, a Diagnostic Table and an Analytics section, so a separate "UX vs traffic" article would cannibalise it. Its Analytics content currently cites Search Console, Lighthouse and PageSpeed. A grep found no mention of GA4 engagement rate, the Landing page report or Clarity. Additions:
- (a) the measurement-first step;
- (b) the GA4 definitions and the channel × landing-page split above;
- (c) a Clarity signal-to-cause table;
- (d) a "redesign/migration broke it" checklist (tracking, redirects, robots).

Also fold /blogs/why-is-my-website-not-converting into it as already proposed, using its slug as the 301 source. Add "traffic problem or UX problem" to the H1/H2 or FAQ so the merged URL targets both phrasings.

**10. Facts.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| A GA4 engaged session is one that "Lasts longer than 10 seconds", "Has a key event", or "Has 2 or more screen or page views". Engagement rate = % of engaged sessions. Bounce rate = "percentage of sessions that were not engaged". | https://support.google.com/analytics/answer/12195621 | 2026-10-14 | [Official] |
| The 10-second engagement timer and the 30-minute session timeout are adjustable in the web stream's tag settings. The timeout can be set up to 7h55m. (Seen in search summaries of the Help pages; confirm the wording on the page.) | https://support.google.com/analytics/answer/12798876 ; https://support.google.com/analytics/answer/9191807 | 2026-10-14 (snippet) | [Official] |
| The Landing page report (Reports > Engagement > Landing page) shows "the first page a visitor lands on". Default metrics: sessions, active users, new users, average engagement time per session, key events, total revenue. | https://support.google.com/analytics/answer/12931766 | 2026-10-14 | [Official] |
| Clarity definitions: rage clicks are repeated clicks in a clustered area in a short time. A dead click is one where the user "gets no feedback in a reasonable amount of time" (possible causes: "broken elements, high latency requests, or misleading UX"). Quick backs are a return to the previous page faster than that page's dwell-time threshold. Excessive scrolling is scrolling "at a higher rate than expected". | https://learn.microsoft.com/en-us/clarity/insights/semantic-metrics | 2026-10-14 | [Official] (vendor docs, for its own product) |
| Core Web Vitals "good": LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, measured at the 75th percentile of page loads, split by mobile and desktop. | https://web.dev/articles/vitals | 2026-10-14 | [Official] |
| Baymard: 70.22% average documented cart abandonment across 50 studies (updated 22 Sep 2025). 42% of US shoppers were "just browsing". Excluding those, extra costs 40%, slow delivery 20%, distrust with card details 19%, forced account creation 18%, checkout too long or complicated 17%, errors or crashes 17%. | https://baymard.com/lists/cart-abandonment-rate | 2026-10-14 | [Industry] |
| NN/g (Loranger, 2015) lists "Severely low conversion rates site-wide" as one trigger for a major overhaul. A site-wide pattern, rather than a single page, is the sign to look for. | https://www.nngroup.com/articles/radical-incremental-redesign/ | 2026-10-14 | [Industry] |
| HN rule of thumb that a landing page converting below 1% is "doing something wrong" is anecdote only. Do not present it as a benchmark. | https://news.ycombinator.com/item?id=3347579 | 2026-10-14 | [Inference/anecdote] |

Regional note: none on the method. In India, UPI and COD checkout behaviour and WhatsApp as a lead channel change what counts as a "key event". Say this as an [Inference] and tell readers to track WhatsApp clicks as a key event.

---

## Topic 15: Redesign the whole website or fix the existing UX?

**1. Founder problem.** The site "feels dated" or underperforms. The founder is weighing a full redesign (big budget, big risk) against targeted fixes, often with a vendor pushing for the full redesign.

**2. Intent and journey stage.** Commercial investigation, mid-to-late. There is budget and a project being scoped.

**3. Queries.** "website redesign or fix", "full redesign vs incremental", "do I need a website redesign", "website refresh vs redesign", "conversion dropped after redesign", "is a redesign worth it", "signs your website needs a redesign".

**4. Evidence.**
- HN, "I regret my website redesign": https://news.ycombinator.com/item?id=32179563
- Shopify Community, "Conversion rate has dropped 90% after rebranding" (the cause was a single theme setting): https://community.shopify.com/t/conversion-rate-has-dropped-90-after-rebranding/143703/1
- Shopify Community, "Decrease in traffic since rebrand 6 months + ago" (robots.txt and redirects not restored): https://community.shopify.com/t/decrease-in-traffic-since-rebrand-6-months-ago/550652
- Shopify Community, "Why is my website traffic decreasing after a redesign?": https://community.shopify.com/t/why-is-my-website-traffic-decreasing-after-a-redesign/252761

**5. Current top content and gaps.**
- https://www.nngroup.com/articles/radical-incremental-redesign/ (the authoritative source)
- https://www.nngroup.com/articles/fresh-vs-familiar-aggressive-redesign/
- https://www.nngroup.com/videos/redesign-incremental-vs-overhaul/
- https://uxdesign.cc/navigating-new-ui-how-to-ease-users-into-major-changes-31a09a605a76

Gaps:
- Little covers the SEO and measurement risk of a redesign (redirects, tracking parity).
- Little addresses SME budgets.
- None offers a scoring rubric.

**6. Buyer potential.** High. Both outcomes are sellable: a redesign, or an audit plus fixes.

**7. Original contribution.**
- A **"redesign trigger scorecard"** based on NN/g's five overhaul triggers, scored against evidence.
- A **pre-redesign safety checklist**: baseline metrics, a 301 map, key-event parity, staged rollout.

These are best added to the existing posts, not a new URL.

**8. Service page and CTA.** /services/cro-audit ("audit before you redesign") and /services/ui-ux-design.

**9. Verdict on KEEP: agree.** /blogs/website-redesign-vs-rebuild already covers redesign vs rebuild vs incremental. /blogs/when-does-your-website-need-a-redesign and /blogs/ux-debt cover the triggers. A fourth URL would cannibalise them. Recommended refresh (not a new post):
- Cite the NN/g triggers with their exact wording.
- Add the "post-redesign drop" checklist.
- Make sure the three posts interlink with distinct anchors: decision = redesign-vs-rebuild; signals = when-does…; cause = ux-debt.

**10. Facts.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| NN/g overhaul triggers: incremental gains "miniscule or nonexistent"; technology "severely outdated, making critical changes impossible"; architecture "a tangled mess"; "Severely low conversion rates site-wide"; benchmarking shows the site "far inferior to the competition". Hoa Loranger, 8 Feb 2015. | https://www.nngroup.com/articles/radical-incremental-redesign/ | 2026-10-14 | [Industry] |
| Same article: "Never make radical changes when minimal adjustments will suffice"; "only resort to a complete redesign if the data tells you to do so"; radical changes have "a higher chance of inadvertently breaking something critical". | same | 2026-10-14 | [Industry] |
| NN/g "Fresh vs. Familiar" (Nielsen, 2009 per search snippet): users dislike change, so evolve gradually, but incrementalism eventually erodes cohesiveness. **Snippet only. Fetch before quoting.** | https://www.nngroup.com/articles/fresh-vs-familiar-aggressive-redesign/ | snippet | [Industry] |
| Common causes of post-redesign drops: tracking not firing, missing 301s, robots.txt or noindex left in place, lost branded search. | Shopify Community threads above | 2026-10-14 | [Inference from anecdote] |

Regional note: if the redesign changes forms, checkout or navigation for EU customers, it falls under the EAA (Topic 16). A redesign is the cheapest moment to fix accessibility. [Inference]

---

## Topic 16: When does a startup need a design system, and what should it include?

**1. Founder problem.** The UI is drifting (five button styles), a second designer or more developers are joining, and someone has proposed "building a design system". The founder fears both the cost and the inconsistency.

**2. Intent and journey stage.** Informational to commercial, mid-stage. Usually post-MVP or post-PMF and scaling.

**3. Queries.** "does my startup need a design system", "when to build a design system", "design system vs UI kit", "minimum viable design system", "what should a design system include", "design tokens", "use shadcn/MUI or build our own".

**4. Evidence.**
- HN, "Ask HN: How soon should we have a Design System?": https://news.ycombinator.com/item?id=33018520 (one side says "the sooner the better"; another notes many teams don't build one before PMF)
- HN, "Building a Design System at a Startup": https://news.ycombinator.com/item?id=26291215 ("if you can't get it 90% complete in the first week or two" it risks becoming a liability)
- Smashing Magazine, Brad Frost interview "When Do We Need A Design System?" (2019): https://www.smashingmagazine.com/2019/06/building-design-systems-interview-brad-frost/

**5. Current top content and gaps.**
- https://designproject.io/blog/what-is-a-design-system-and-does-your-startup-need-one/
- https://www.parallelhq.com/blog/when-startup-needs-design-system
- https://productstride.substack.com/p/design-systems-for-b2b-startups
- https://www.10clouds.com/blog/design/designing-on-a-dime-the-truth-about-design-systems-and-start-ups/
- https://lancartech.co.id/en/blog/design-system-startup

Gaps:
- Almost none mentions that the **DTCG token format reached a stable version (2025.10)**, which matters for "build vs adopt" and for tooling choice.
- Few treat accessibility as part of the minimum system (WCAG 2.2 AA contrast, focus and target size baked into the components).
- None makes the "adopt an open-source library and theme it" path concrete for small teams.

**6. Buyer potential.** Medium. Buyers are scaling startups, and the work is often a retainer or a larger engagement. Fewer leads, but higher value.

**7. Original contribution.**
- A **stage ladder**: pre-PMF uses tokens plus a themed off-the-shelf library; post-PMF adds documented components with states and accessibility notes; multi-product or multi-team adds governance, versioning and contribution.
- A "first 30 tokens and 12 components" starter list.

Present both as frameworks, not as client results.

**8. Service page and CTA.** /services/ui-ux-design. CTA: "Design system starter: tokens and core components, with accessibility built in."

**9. Verdict on KEEP: agree.** The existing post (titled "Design Systems: What They Are and Why Products Need Them") already says a few documented patterns are "often enough for one product and a small team", and it has "What a system needs to include" and "Design tokens" sections. Three recommended refreshes:
- (a) **Retitle or add an H2 targeting "when does a startup need a design system"**. The current title leans generic and doesn't match the slug.
- (b) Add the DTCG 2025.10 stable-release fact. My grep found no mention of it.
- (c) Add the NN/g ROI caveat and the WCAG 2.2 component checklist.

**10. Facts.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| A design system is "a complete set of standards intended to manage design at scale using reusable components and patterns". It typically holds a style guide, a component library and a pattern library. Therese Fessenden, NN/g, published 11 Apr 2021, last reviewed 27 Aug 2026. | https://www.nngroup.com/articles/design-systems-101/ | 2026-10-14 | [Industry] |
| Same: for an early prototype likely to change, "creating a full-fledged design system is probably not going to generate a desirable ROI in the near term"; "Design systems are best when the company foresees years of future, replicable design work"; maintaining one "requires a dedicated team". | same | 2026-10-14 | [Industry] |
| The Design Tokens Community Group announced the "first stable version of the Design Tokens Specification (2025.10)" on 28 Oct 2025. It is a **W3C Community Group** spec, **not** a W3C Recommendation or standard. A living draft continues at designtokens.org/TR/drafts. The full spec is at designtokens.org/tr/2025.10/. | https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/ ; https://www.designtokens.org/ | 2026-10-14 | [Official] (CG) |
| WCAG 2.2 is a W3C Recommendation. The current dated version is 12 Dec 2024 (https://www.w3.org/TR/2024/REC-WCAG22-20241212/). The original 2.2 Recommendation was published Oct 2023 (from memory; confirm on the W3C history page). | https://www.w3.org/TR/WCAG22/ | 2026-10-14 | [Official] |
| GOV.UK Design System is a public example of a styles / components / patterns structure. **Not fetched this session. Verify before citing.** | https://design-system.service.gov.uk/ | not checked | [Official] |
| Material Design and Apple HIG are reference systems for token naming and touch-target guidance. **Not fetched. Verify specific numbers before citing.** | https://m3.material.io/ ; https://developer.apple.com/design/human-interface-guidelines/ | not checked | [Official] |

**Regional accessibility notes (include only in Topic 16 and the redesign refresh):**
- **EU (UAE, IN and SG firms selling to EU consumers).** The European Accessibility Act (Directive (EU) 2019/882) applies to covered products and services, including e-commerce, from 28 June 2025. Microenterprises providing services (under 10 staff and ≤ €2m turnover or balance sheet) are exempt from the service requirements. Source: EUR-Lex https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng and Council page https://www.consilium.europa.eu/en/policies/accessibility-goods-services/ (search summaries; direct EUR-Lex fetch returned empty. **Verify the article numbers before quoting.**) [Official]
- **India.** GIGW 3.0 targets conformity with WCAG 2.1 AA and covers central, state and local government websites and apps. It does not on its own bind private companies (https://guidelines.india.gov.in/scope-and-objective/). How far the RPwD Act 2016 obliges private websites is **unverified**: secondary sources conflict on the relevant sections. Don't claim a private-sector mandate without legal review. [Official / unverified]
- **UK (Equality Act 2010), Australia (Disability Discrimination Act 1992), UAE.** Not researched in this session. State only that these are general anti-discrimination laws. Don't assert specific website obligations without checking primary sources.

---

## Cross-topic recommendations

1. **One new URL only:** Topic 13. Topics 14–16 are refreshes of existing URLs.
2. Put the **5-user claim** in a single place: Topic 13, with the caveats. Elsewhere, link to it rather than restate it.
3. Every "fact" line marked snippet, not checked or unverified above must be fetched before publication.
