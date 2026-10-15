# Web-dev topic research — ZSpace Labs (checked 14 Oct 2026)

**Method and limits**
- Sources came from WebSearch and WebFetch. The search tool is **US-only**, so I could not see SERPs, People-Also-Ask boxes or local packs for India, the UAE, the UK, Australia or Singapore. Every "what ranks" observation below comes from US results.
- **Reddit could not be reached**: the fetch tool is blocked from reddit.com, and `site:reddit.com` searches came back with no Reddit URLs. As a result, **no Reddit threads are cited**.
- **No PAA data was observable.**
- Hacker News threads were found through the HN Algolia API, and the comment counts come from that API.
- Indie Hackers threads were found through search, but the pages return 403 to the fetcher. I have verified **their titles and URLs only, not their content**.
- No search volumes are given anywhere. Demand is described qualitatively.
- Every date checked below is 14 Oct 2026 unless stated otherwise.

Source labels: [Official] = government, standards body, or a product's own docs/terms. [Vendor] = a commercial page with a sales interest. [Industry] = a survey or marketplace dataset. [Inference] = my reasoning.

---

## Topic 1: Custom website vs web application — what does your business need?

1. **Founder's underlying problem.** "I've been quoted very different things, and I can't tell if I need a brochure site, a site with a CMS, or software with logins. Am I overbuying or underbuying?" The real risk is mis-scoping. If they buy an app when a site would do, they pay too much to build and maintain it. If they buy a site when they need workflows, they end up rebuilding.
2. **Intent and stage.** Informational, at problem-definition or early consideration, before they ask for quotes.
3. **Queries (qualitative).**
   - Primary: "website vs web application", "do I need a website or a web app".
   - Related: "web app vs website difference for business", "customer portal vs website", "when does a website become a web app", "website with login".
4. **Evidence the question is asked.** The evidence is weak in founder forums, which is itself a finding. The query is mostly fed by agency content.
   - Indie Hackers, "What to create first? Website or Mobile App?": https://www.indiehackers.com/post/what-to-create-first-website-or-mobile-app-340ce7ba36 (an adjacent framing; title verified only)
   - Indie Hackers, "Need guidance with building my idea": https://www.indiehackers.com/post/need-guidance-with-building-my-idea-f83c949a66 (title only)
   - The HN Algolia search returned no relevant Ask HN threads.
5. **What ranks (US SERP) and the gaps.**
   - https://www.monocubed.com/web-app-vs-website/ is a long definitional piece (updated 16 Oct 2025). It has a comparison table but no scoring test, few external sources, and almost nothing on data protection or running costs.
   - https://www.ideamotive.co/blog/web-app-vs-website-what-is-the-difference-and-which-should-you-pick-for-your-business
   - https://ebpearls.com.au/blog/web-app-vs-website-guide
   - https://www.frontline.com.sg/does-your-business-need-a-website-or-a-web-app/
   - https://digitalya.co/?p=8701

   The common gap: they treat the choice as binary and define terms ("informational vs interactive"). None of them gives:
   - a hybrid path (a marketing site plus one authenticated module);
   - the obligations that start once you store personal data (security, breach notification, data-subject requests);
   - a way for the founder to self-classify each requirement.
6. **Buyer potential.** Medium. The reader is pre-quote and often non-technical, which matches ZSpace's buyer, but commercial intent is lower than for cost queries.
7. **Best original contribution.** A **"requirement classifier" worksheet**. The founder lists each thing a user must do and tags it on five axes:
   - Does it need identity (login)?
   - Is user-generated data stored?
   - Is it transactional (payments/bookings)?
   - Is it role-based (admin/staff/customer)?
   - Does it need integrations?

   Rule: zero tags means website. Tags confined to one workflow means site plus a module. Tags spread across workflows means a web app.

   Add a "what changes when you store personal data" box. It would draw on OWASP Top 10:2025 and the relevant privacy regime, with a link out and no legal advice.
8. **Service and CTA.**
   - /services/website-development is the only fitting service slug. I found no dedicated web-app service page in `src/lib`.
   - CTA: "Send us your filled-in classifier and we'll tell you which category you're in."
   - Link to /blogs/replacing-spreadsheets-with-custom-software and /blogs/low-code-vs-custom-software.
9. **Decision: agree, CREATE.** No existing URL does the classification. To limit overlap with /blogs/website-development-guide, keep this piece about *which category*, not *how to build*.
10. **Facts the article needs.**
    - [Official] OWASP Top 10:2025 is released. Its categories are A01 Broken Access Control, A02 Security Misconfiguration, A03 Software Supply Chain Failures, A04 Cryptographic Failures, A05 Injection, A06 Insecure Design, A07 Authentication Failures, A08 Software or Data Integrity Failures, A09 Security Logging and Alerting Failures, and A10 Mishandling of Exceptional Conditions. https://top10.owasp.org/2025 (owasp.org/Top10/2025/ redirects there)
    - [Official] Singapore PDPC's "Building Websites" guide says a site that collects or stores personal data (for example customer or payment details) brings PDPA obligations. It recommends security testing before launch and regularly afterwards. It also advises putting PDPA responsibilities into vendor contracts, including building the site so it "does not contain any web application vulnerabilities". https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/resource-for-organisation/building-websites-v1-0-(200716).pdf (seen via a search excerpt; the PDF was not opened)
    - [Official] Next.js can run as a Node.js server or Docker container ("All" features) or as a static export ("Limited"). A static export does not support Server Actions, cookies, redirects/rewrites/headers, ISR, request-dependent Route Handlers, or default-loader image optimisation. This is useful for showing how "site" and "app" sit on one stack. Sources: https://nextjs.org/docs/app/getting-started/deploying (lastUpdated 2026-08-06) and https://nextjs.org/docs/app/guides/static-exports (lastUpdated 2026-08-09).
    - The regional data-protection facts are listed under Regional notes at the end of this file.

---

## Topic 2: How much does custom web application development cost in 2026?

1. **Founder's underlying problem.** "Quotes for the same idea range a lot. I can't tell which is realistic, and I can't budget for life after launch."
2. **Intent and stage.** Commercial investigation, at solution-evaluation to vendor-comparison stage. This is the highest commercial intent of the four topics.
3. **Queries (qualitative).**
   - Primary: "web application development cost", "how much does it cost to build a web app".
   - Related: "MVP development cost", "custom software cost India/UK/Australia", "web developer hourly rate", "web app maintenance cost".
4. **Evidence the question is asked.**
   - HN, "People spend over $50k-$100k building MVPs why?" (26 Oct 2024; 5 comments; commenters flag it as promotional, but it shows the anxiety): https://news.ycombinator.com/item?id=41954768
   - HN 2013 post offering an MVP build for "$8000 + 50% equity" (dated; useful only as context): https://news.ycombinator.com/item?id=5039241
   - Indie Hackers, "Founders: do you have $3-5k for an MVP?": https://www.indiehackers.com/post/founders-do-you-have-3-5k-for-an-mvp-148ab42170 (title only)
   - Indie Hackers, "Should we outsource product development for our MVP?": https://www.indiehackers.com/post/should-we-outsource-product-development-for-our-mvp-15792a8bc9 (title only)
   - Indie Hackers, "How much did you pay for your website build?": https://www.indiehackers.com/post/how-much-did-you-pay-for-your-website-build-2b9366e8f1 (title only)
5. **What ranks and the gaps.**
   - https://www.spaceo.ca/blog/cost-of-web-application-development: on fetch it gave no prices, no methodology, no worksheet and no maintenance section.
   - https://www.orientsoftware.com/blog/web-application-development-cost/
   - https://intelivita.com/blog/web-application-development-cost
   - https://www.hostinger.com/tutorials/?p=123950
   - https://clutch.co/web-developers/pricing

   In search snippets, the agency pages give tiers such as "$15,000–$60,000 / $60,000–$250,000 / $250,000+" with **no stated methodology**. The gap is that the ranges are unsourced and not reproducible. They rarely separate build cost from run cost (hosting, third-party SaaS, maintenance, security testing), and they never let the reader compute their own number.
6. **Buyer potential.** High. A reader of this page is about to request quotes.
7. **Best original contribution.** A **cost-estimation worksheet with no ZSpace prices**:
   - **Part A, scope inventory.** Screens or user journeys, roles, integrations, payments, file handling, notifications, admin/reporting, compliance needs. Each item is rated S/M/L for uncertainty, not for money.
   - **Part B, effort to cost.** The reader enters *their own* quoted day rate, or picks a cited public benchmark, multiplied by estimated person-days. Include a contingency line explained as uncertainty, not as a number we invent.
   - **Part C, run-cost lines.** Hosting plan, domain, email/SMS, error monitoring, backups, security testing, maintenance retainer. Each line has a link to the vendor's pricing page so readers can price it themselves.
   - **Part D, "questions to ask each quote."** Ask what is excluded, who owns the code and accounts, the support period, and the testing approach.

   Present the public rate data as *benchmarks with caveats*, never as "average app cost".
8. **Service and CTA.**
   - /services/website-development, plus /services/ui-ux-design for discovery.
   - CTA: "Bring your completed worksheet to a scoping call and we'll quote against it."
   - Interlink /blogs/website-development-cost, /blogs/custom-software-development-uk and /blogs/custom-software-development-australia.
9. **Decision: change from RESEARCH MORE to CREATE, on conditions.**
   - Credible, citable public data exists, but none of it measures *project* cost directly.
   - What exists: one marketplace dataset (Clutch, which comes from self-selected reviews), salary surveys (Stack Overflow, BLS), and one UK government framework rate table (CCS DOS7). That table holds supplier *rate-card* averages as at June 2022 and contains placeholder maxima.
   - The article works if it is framed as **"How to estimate…"** and is honest that no reliable public average for web-app cost exists. That honesty is the differentiator.
10. **Facts the article needs.**
    - [Industry] **Clutch pricing guide** (header "October 2026", updated 21 Sep 2026): https://clutch.co/web-developers/pricing
      - "Most agencies charge between $25–$49/hour."
      - "Web development projects on Clutch typically cost less than $10,000."
      - "the average cost for a web development agency project is $66,499.09."
      - Location table: India "<$25", Australia "$100–$149", UK "Unknown", UAE not listed.
      - Methodology: "compiles this pricing information from first-party reviews submitted by verified web development clients."
      - Caveat: this is a self-selected sample, and the median-like and mean figures are unreconciled.
    - [Official] **UK Crown Commercial Service, DOS7 (RM1043.9) Lot 3 "Digital Specialists" average day rates**: https://redirect.contractawardservice.gca.gov.uk/assets/files/RM1043.9-DOS-7-Lot-3-Average-Day-Rates-v1.2.odt (I downloaded and parsed it). It says the rates are "based on a standard 7.5 hours working day and do not include VAT or expenses", and the average covers "all 1,267 suppliers awarded to the Lot, as at 28 June 2022".
      - Developer: average £840.66.
      - Frontend developer: average £841.35.
      - Apprentice developer: average £539.53.
      - Caveat: these are averages of suppliers' *maximum framework rates*, not prices paid. Many rows show a 9999.0 maximum, which looks like a placeholder that may skew the averages. The data is from 2022.
      - Agreement page: https://www.gca.gov.uk/agreements/RM1043.9 (CCS now redirects to gca.gov.uk). It lists DOS7 as running 30/01/2026–29/07/2027 and links "Framework schedule 3: framework prices" as "Maximum rates the supplier can charge".
    - [Industry] **Stack Overflow Developer Survey 2025, median yearly salary in USD**: https://survey.stackoverflow.co/2025/work
      - 23,928 salary respondents; India n=1,093; UK n=1,485.
      - India: back-end $22,086, front-end $10,462.
      - UK: back-end $108,913, front-end $84,544.
      - Australia is not broken out.
      - Use: as *employment cost context* only. The page does not explain how currencies were converted.
    - [Official] **US BLS Occupational Outlook Handbook**: the web developers' median annual wage was $92,650 (May 2025). The page was last modified 27 Aug 2026. https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm
    - [Vendor] **Vercel**: the Hobby plan is "for personal, non-commercial use", and Pro is "$20/mo" per developer seat. This matters for run-cost lines, because a commercial site cannot sit on the free tier. https://vercel.com/pricing
    - [Vendor] **Netlify pricing**: Free $0, Personal $9/mo, Pro $20/mo, Enterprise custom. The page does not state a commercial-use restriction for the Free plan. https://www.netlify.com/pricing/
    - **Not found:** no official Indian, UAE, Australian or Singaporean government rate card or salary statistic specific to web developers.
      - Australia: the DTA BuyICT pages describe the labour-hire panels but publish no rate dataset that I could find. https://www.dta.gov.au/buyict
      - UK ONS ASHE (SOC 2134/2136) figures were seen only on third-party sites, so they are **not verified**. Don't cite them until checked on ons.gov.uk.

---

## Topic 3: What should your first SaaS MVP include? Feature prioritisation

1. **Founder's underlying problem.** "My feature list keeps growing, the build keeps getting bigger and costlier, and I don't know what can safely be left out of v1."
2. **Intent and stage.** Informational to early commercial, at the planning stage before a build brief.
3. **Queries (qualitative).**
   - Primary: "what features should an MVP have", "SaaS MVP features".
   - Related: "how to prioritise MVP features", "MVP scope", "Kano model vs RICE", "MoSCoW MVP", "what not to build in MVP".
4. **Evidence the question is asked.**
   - HN, "Ask HN: Are there any studies about common app-/SaaS-MVP features?" (9 Nov 2018; 1 comment): https://news.ycombinator.com/item?id=18413425
   - HN, "Ask HN: Best process to validate idea and feature-set before MVP?" (17 Apr 2011; 6 comments): https://news.ycombinator.com/item?id=2457159
   - HN, "Ask HN: I built it, nobody came, now what?" (8 Apr 2021; 264 comments; the over-building failure mode): https://news.ycombinator.com/item?id=26734079
   - Indie Hackers, "7 SaaS MVP features startups should prioritize first": https://www.indiehackers.com/post/7-saas-mvp-features-startups-should-prioritize-first-UhO1LfzHarCRvDW2Y18q (403 on fetch; content seen via search excerpt only)
5. **What ranks and the gaps.**
   - The Indie Hackers post above
   - https://asperbrothers.com/blog/mvp-scope-explained/
   - https://shakuro.com/blog/saas-mvp-development
   - https://railsdesigner.com/saas/features-not-needed
   - https://baremetrics.com/academy/minimum-viable-product-mvp

   The gap: these are generic feature lists (auth, onboarding, dashboard, admin, analytics), and some contradict each other. Railsdesigner says to skip even auth flows, while others say to include them. None ties feature choice to the riskiest assumption being tested. None explains when a "heavy" MVP is justified (for example regulated payments or health data). And none applies a named prioritisation method to a worked example.
6. **Buyer potential.** Medium-high. The readers are pre-build founders, so this is a natural feeder to MVP and UX discovery work.
7. **Best original contribution.** A **"riskiest-assumption-first" scoping worksheet**:
   - (a) Write the one assumption v1 must test.
   - (b) List candidate features.
   - (c) For each feature, ask whether it is required to test the assumption, required for trust or legal reasons (security, consent, payments), or neither. "Neither" goes to a later list.
   - (d) Optionally RICE-score the later list.
   - (e) A "do it manually first" column, covering concierge or Wizard-of-Oz alternatives.

   Also include a short "non-negotiables even in an MVP" box: OWASP A01 (access control) and A07 (authentication), plus the privacy notice and consent requirements of the target market. This is a real differentiator against "skip auth" advice.
8. **Service and CTA.**
   - /services/ui-ux-design (discovery and prototyping) and /services/website-development.
   - CTA: "Send us your filled scoping sheet for a v1 scope review."
   - Interlink /blogs/mvp-development-australia, /blogs/mvp-development-uae and /blogs/saas-roadmap-prioritization (as the "after launch" piece).
9. **Decision: agree, CREATE.** The existing regional pages target "MVP development + country" intent, and the roadmap piece is post-PMF. To avoid duplicating them, keep this piece global and method-led.
10. **Facts the article needs.**
    - [Official/primary] **Eric Ries's definition**, from Startup Lessons Learned, 3 Aug 2009: http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html. Quote: "the minimum viable product is that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort."
    - [Industry] **RICE**: Sean McBride, Intercom blog, 5 Jan 2018: https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
      - "RICE is an acronym for the four factors we use to evaluate each project idea: reach, impact, confidence and effort."
      - Score = (Reach × Impact × Confidence) ÷ Effort. On the page the formula appears as an image, and the text calls the score "total impact per time worked".
      - The post describes Intercom developing it in-house.
    - [Official/primary] **Kano model**: Kano, Seraku, Takahashi and Tsuji, 「魅力的品質と当り前品質」 ("Attractive quality and must-be quality"), *Hinshitsu* (Journal of the Japanese Society for Quality Control) vol. 14 no. 2, 1984.
      - **The page range is unresolved.** Wikipedia says pp. 39–48, while BibSonomy and an ITmedia table say pp. 147–156.
      - I did not open the original. Cite volume, issue and year only, unless it is checked on J-STAGE/CiNii.
    - [Industry] **Y Combinator Startup Library, "How to build an MVP"** (Michael Seibel): https://www.ycombinator.com/library/Io-how-to-build-an-mvp. Page title verified.
      - Claims attributed to the talk in secondary summaries: build in weeks not months; a heavy MVP is justified only rarely, e.g. in heavily regulated industries.
      - These are **not verified against the transcript**. Paraphrase cautiously or verify by watching the talk.
    - [Official] **OWASP Top 10:2025** (as in Topic 1) for the non-negotiables box: https://top10.owasp.org/2025
    - **MoSCoW** (the DSDM/Dai Clegg origin is commonly cited) is **not verified**. Omit it or verify it before attributing.

---

## Topic 4: Should you build with Next.js or choose a website builder? (update /blogs/custom-website-vs-website-builder)

1. **Founder's underlying problem.** "Will I regret the platform? Will I be locked in, pay rising per-seat or per-plan fees, or hit limits (CMS items, logic, integrations) once marketing scales?"
2. **Intent and stage.** Commercial investigation, at solution-evaluation stage.
3. **Queries (qualitative).**
   - Primary: "Next.js vs Webflow", "custom website vs website builder".
   - Related: "Framer vs Webflow vs Next.js", "can I export my Wix site", "Webflow code export CMS", "Squarespace export", "is Next.js good for SEO", "website builder lock-in".
4. **Evidence the question is asked.**
   - HN, "Ask HN: Whats the stack you guys use for SaaS home page and blog these days?" (18 Feb 2025; 2 comments): https://news.ycombinator.com/item?id=43088000
   - Indie Hackers, "Why I chose to avoid Webflow": https://www.indiehackers.com/post/why-i-chose-to-avoid-webflow-eb6bc46d07 (title only)
   - Indie Hackers, "What do you use to build your landing page?": https://www.indiehackers.com/post/what-do-you-use-to-build-your-landing-page-0ca0647621 (title only)
   - Webflow forum, "How do you Export Code to get a working website without CMS?": https://discourse.webflow.com/t/how-do-you-export-code-to-get-a-working-website-without-cms/62628
   - Webflow forum, "Exporting CMS content with the website": https://discourse.webflow.com/t/exporting-cms-content-with-the-website/120493
5. **What ranks and the gaps.**
   - https://www.thefrontendcompany.com/posts/next-js-vs-webflow (25 Sep 2025): it compares only Webflow and Next.js, gives no prices, links only to homepages rather than docs, and has an informal framework.
   - https://merge.rocks/blog/webflow-vs-next-js-which-platform-is-best-for-building-a-website-from-scratch
   - https://studiomeyer.io/en/blog/webflow-vs-nextjs
   - https://mercury.com/blog/framer-vs-webflow-comparison
   - https://technologychecker.io/blog/webflow-to-nextjs, which makes a migration-count claim (988 vs 95 domains) that I have not verified.

   The gap: no top page compares **exit terms** across Webflow, Framer, Wix and Squarespace using each vendor's own help docs. Most also ignore that Next.js hosting has its own plan terms, such as Vercel Hobby being non-commercial.
6. **Buyer potential.** Medium-high. These readers are choosing a build route now.
7. **Best original contribution.**
   - An **"exit-cost and ownership table"**. Rows: what you can export, what breaks on export, where hosting must live, and CMS data portability. Columns: Webflow, Framer, Wix, Squarespace, Next.js. Each cell cites the vendor doc.
   - A **five-question decision tree**: Need logged-in features? Content volume vs plan CMS limits? Who edits weekly? Integrations? Exit plan?
   - A balanced note that builders are the right call for many small marketing sites.
8. **Service and CTA.**
   - /services/website-development, with secondary links to /services/cro-audit and /services/ui-ux-design.
   - CTA: "Not sure? Send us your sitemap and integrations list and we'll recommend a builder or a custom build."
9. **Decision: agree, UPDATE the existing URL** (currently 709 words, dated 2026-09-17, FAQ already present).
   - Retitle to target "Next.js vs website builders (Webflow, Framer, Wix, Squarespace)".
   - Add the sourced exit table and decision tree, and refresh the date. A new URL would cannibalise the existing one.
10. **Facts the article needs.**
    - [Official] **Wix**: "In order for your site to work properly, it needs to be hosted and operated on Wix's servers." Also: "the SaaS architecture does not support external hosting." https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere
    - [Official] **Squarespace export**: the export is a WordPress-format .xml file.
      - Exported: layout pages; one blog page with its posts and up to 1,000 comments per post; text and image blocks.
      - Not exported: store, portfolio and other page types; more than one blog page; audio, product and video blocks; custom CSS; drafts.
      - Source: https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site
    - [Official] **Webflow code export** (via search excerpt of the help article; the page returned 403 on fetch, so **re-verify before publishing**): https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code
      - Export of HTML/CSS/JS/assets is available on paid Workspace plans, not Site plans.
      - CMS, User Accounts and Ecommerce content is not included.
      - Forms, password protection and site search stop working.
      - CMS collections can be exported separately as CSV.
    - [Official] **Framer: its own help centre contradicts itself.** Do not state either position as settled. Present it as unclear and advise readers to confirm with Framer.
      - "Framer does not offer HTML export for self-hosting": https://www.framer.com/help/articles/can-i-export-my-website-to-html-and-self-host-it/
      - Versus "Every Framer site is published as standard HTML, CSS, JavaScript, and static assets… download these files at any time and move them to any hosting provider", and CMS can be exported "using plugins into structured formats such as CSV or JSON": https://www.framer.com/help/articles/porting-your-data-from-framer/
    - [Vendor] **Framer pricing**, as shown to a US visitor in USD:
      - Free $0, Basic $10/mo, Pro $30/mo, Enterprise custom.
      - Basic: 30 pages, 2 CMS collections, 1,000 CMS items.
      - Pro: 150 pages (extendable to 700 max), 10 collections (to 40 max), 2,500 items (to 40,000 max).
      - Source: https://www.framer.com/pricing. Regional pricing may differ.
    - [Vendor] **Webflow pricing**: the fetch failed with a header overflow. **Not verified.** Pull plan and CMS limits manually from https://webflow.com/pricing.
    - [Official] **Next.js deployment options**: a Node.js server or Docker supports "All" features; a static export is "Limited"; adapters "Varies". Vercel and Bun are listed as verified adapters, and Netlify and Cloudflare are "working on verified adapters". https://nextjs.org/docs/app/getting-started/deploying (lastUpdated 2026-08-06)
    - [Vendor] **Vercel Hobby** is "for personal, non-commercial use", and Pro is $20/mo per developer seat: https://vercel.com/pricing
    - [Official] **Google Search Central, JavaScript SEO basics** (last updated 2026-03-04): https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
      - Google processes JS apps in three phases: crawling, rendering, indexing.
      - "server-side or pre-rendering is still a great idea because it makes your website faster for users and crawlers."
      - Not all bots run JavaScript.
      - This supports a *nuanced* claim: Next.js can pre-render, but builders also output crawlable HTML, so do not claim Next.js is inherently better for SEO.

---

## Regional notes (only where web-app requirements genuinely differ)

These apply to Topics 1–3, i.e. to any app storing personal data. For Topic 4 (marketing sites) they matter little beyond forms and analytics consent.

- **India** [Official]:
  - The DPDP Rules 2025 were notified in November 2025 with an 18-month phased compliance period. PIB items differ on the date (13 vs 14 Nov 2025). Secondary sources put the main data-fiduciary duties, including notice, consent, breach reporting and children's data, at about 14 May 2027. **Verify the dates against the Gazette text.**
  - Penalties stated by PIB: up to ₹250 crore for failing to keep reasonable security safeguards, and up to ₹200 crore for breach-notification or children's-data violations.
  - Sources: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014 and https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190655 (PIB returned 403 to the fetcher; seen via search excerpts).
  - This is the strongest regional angle, because ZSpace's primary market is India and the compliance deadline falls inside the likely build window of a 2026–27 web app.
- **UAE** [Official]:
  - The PDPL (Federal Decree-Law No. 45 of 2021) "came into force on 2 January 2022": https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws
  - The law gives controllers six months after the Executive Regulations are issued to comply. **I could not confirm that the Executive Regulations have been issued.**
  - The DIFC has its own law (DIFC Law No. 5 of 2020). State that status is evolving, and do not give dates.
- **UK** [Official]: The ICO guidance "Data protection by design and by default" (UK GDPR Art. 25) was updated 5 Feb 2026 for the Data (Use and Access) Act 2025. A DPIA is required for likely high-risk processing. https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/data-protection-by-design-and-by-default/ (seen via search excerpt)
- **Australia** [Official]: The Privacy Act covers organisations with annual turnover above $3 million, with exceptions such as health service providers and businesses that trade in personal information. Many early-stage founders fall below the threshold, but not all. https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act/rights-and-responsibilities
- **Singapore** [Official]: The PDPC "Building Websites" guide (cited in Topic 1) is the most directly usable official web-dev guidance found in any market.

Not padded: payments and checkout rules were not researched, because none of these topics is payments-specific.

---

## Items not verified (do not publish without checking)
- Reddit threads and PAA questions for every topic (the tool limits described at the top).
- The content of the Indie Hackers threads (titles only).
- Webflow plan prices and CMS limits, and the exact current wording of Webflow's code-export article.
- The UAE PDPL Executive Regulations status.
- The DPDP phase dates beyond "18-month phased" (PIB).
- The Kano paper's page numbers.
- The Seibel talk quotes.
- MoSCoW's origin.
- UK ONS ASHE software-developer pay.
- The technologychecker.io migration counts.
- The competitor rate tiers seen in snippets. Never cite these as market data.
