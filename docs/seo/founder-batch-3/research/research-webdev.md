# Batch 3 research: Web development (topics 41–44)
Checked 15 October 2026. Research only; no repo files edited.
Tool limits: WebSearch is US-only and Reddit is unreachable, so community evidence comes from non-Reddit forums, PAA-style questions seen in search results, and the batch-1 roadmap notes. Facts reused from Batch 1/2 are marked "reused (14 Oct)".

Status: complete (4 topics).

---

## Topic 41: How to choose a web development agency (questions to ask before signing)

**1. Founder question and pain.** "I have three proposals that all look competent. How do I tell which team will actually ship a maintainable site or web app, and what should I check before I sign?" The pain is that portfolios and sales calls look the same; founders find out about junior-only teams, agency-held repos, missing tests and vague change terms only after the contract is signed.

**2. Intent and stage.** Commercial investigation. Bottom of the funnel: the reader has a shortlist or proposals in hand. Readers who reach the technical due-diligence section are usually building a web app, not a brochure site, which makes them higher value.

**3. Queries.** Primary: "how to choose a web development company" (the page already targets this). Supporting: "questions to ask a web development agency", "how to vet a web development agency" (roadmap WEB-22), "web development agency red flags", "web agency evaluation scorecard", "technical due diligence development agency", "what to ask a developer before signing contract", "who owns the code web agency". All qualitative; no volumes claimed.

**4. Demand evidence (moderate, mostly from the vendor side).**
- Search results are full of agency-published listicles, which shows commercial demand but not founder voice: HubSpot https://blog.hubspot.com/website/questions-to-ask-web-development-agencies ; Merge https://merge.rocks/blog/15-red-flags-to-check-before-hiring-a-web-development-agency ; Osom Studio https://www.osomstudio.com/blog/web-development-agency-red-flags/ ; Utsubo https://www.utsubo.com/blog/evaluate-web-agency-checklist-startups ; Matrix Internet https://www.matrixinternet.ie/the-complete-guide-to-vetting-your-web-development-agency/
- Founder pain about vendors keeping domains and repos is already documented in Batch 2 (UK Business Forums and Realmac threads cited under Topic 24).
- A search restricted to Indie Hackers or Hacker News returned no founder threads; every result was a vendor blog. Reddit could not be checked. **Founder-voice evidence is weak; the demand is inferred from SERP saturation.**

**5. Existing ZSpace coverage.**
- `/blogs/how-to-choose-website-development-company` (957 words, 0 external links, dated 19 Sep 2026, file `src/lib/blog-data-webdev-2.ts`). It has 14 short H2s, most only one or two sentences long, a 10-question checklist, a one-paragraph red-flags section and 9 FAQs. **Missing:** a scorecard with gates and weights, a technical due-diligence section for web apps (repo walkthrough, CI, tests, code review, who builds it, security evidence), a reference-call script, an access and ownership checklist, change-control questions, and any sources.
- **Neutrality issue to flag:** the Quick answer links to `/blogs/best-web-development-agencies-in-india` ("our shortlist of web development companies in India") and `relatedSlugs` is `["best-web-development-agencies-in-india"]`. The 13 Oct audit proposed this page as the *merge destination* for those self-ranked lists, and the owner has not decided. The update should keep the link for now, change nothing else that depends on that decision, and write the new body vendor-neutrally so either outcome works. If the merge goes ahead, remove the link and redirect the list here.
- The regional pages already cover scorecards: `/blogs/web-development-company-dubai` has a weighted scorecard and worked example; `/blogs/web-development-company-australia` has "Gates first, then a weighted scorecard"; `/blogs/software-development-company-uae` has a weighted matrix, commercial terms and escrow/exit. **Do not repeat their regional content** (UAE IP law, Australian Privacy Act/APP 8, time zones). The generic page should be the global hub and link out to all three.
- Related pages to link to rather than duplicate: `/blogs/website-requirements-document` (brief and requirements), `/blogs/software-vendor-handover-checklist` (accounts and exit), `/blogs/website-development-company-vs-freelancer`, `/blogs/how-to-choose-a-shopify-development-agency`, `/blogs/how-to-choose-a-mobile-app-development-company`, `/blogs/technical-discovery-software-projects`, and once they exist `/blogs/fixed-price-vs-time-and-materials` and `/blogs/scope-creep-software-projects`.

**6. SERP weaknesses (do not copy).**
- https://blog.hubspot.com/website/questions-to-ask-web-development-agencies : generic questions; no evidence requests, scoring or ownership mechanics.
- https://merge.rocks/blog/15-red-flags-to-check-before-hiring-a-web-development-agency : a red-flag list written by a vendor, with no positive evidence checklist.
- https://www.osomstudio.com/blog/web-development-agency-red-flags/ : WordPress-agency angle. It treats "no source-code repository" as disqualifying, which is useful, but the piece is narrow.
- https://www.utsubo.com/blog/evaluate-web-agency-checklist-startups : the closest competitor (8 dimensions plus an RFP template), but it has no weights, no gates and no security frameworks.
- https://www.matrixinternet.ie/the-complete-guide-to-vetting-your-web-development-agency/ : long-form, but local-agency marketing.
Common gaps: none tells the founder **what evidence to ask for** (a 30-minute repo or CI walkthrough, a sample pull request with review comments, a test report, a redacted change log). None uses a neutral security framework (OWASP SAMM or ASVS, or the UK Software Security Code of Practice). None separates **pass/fail gates** from **weighted criteria**, and none gives a reference-call script.

**7. Qualified-buyer potential.** High. The reader is about to choose a supplier. The web-app due-diligence angle draws founders with bigger budgets. The risk is that a vendor-written "how to choose a vendor" guide reads as self-serving, so neutrality and evidence-based criteria are what make it credible.

**8. Format and original asset.** An update to the existing page, taking it to roughly 2,200–2,800 words. Suggested new sections:
- **Original asset 1: "Agency evaluation scorecard"** in two parts.
  - *Gates* (fail any and the supplier is out): you own the domain, repo, hosting and analytics accounts, or the contract transfers them; IP is assigned on payment; the people who will build it are named; the supplier is willing to do a technical walkthrough; there is a written change-control process; there is a written acceptance process.
  - *Weighted criteria*, with suggested weights that the reader adjusts: relevant delivery evidence, technical practice, security practice, delivery process and communication, commercial and contract terms, and support and exit.
  Make it copyable. Do not reuse the Dubai or Australia weights and wording; refer to them instead.
- **Original asset 2: "Technical due-diligence questions" (WEB-22)**, each with "evidence to ask for":
  - Can you walk us through a repository from a comparable project, live or redacted? Evidence: branching, pull-request review, commit history.
  - What runs in CI on every change? Evidence: the pipeline config, plus a recent failing build and how it was fixed.
  - What is your test approach? Evidence: a test report, and how much is automated versus manual.
  - Who on this team has done this before? Evidence: named people, and the percentage of their time on the project.
  - How do you manage dependencies and vulnerabilities? Evidence: a dependency list or SBOM, and the update cadence.
  - How do you handle secrets and environments? Evidence: no credentials in the repo; separate staging and production.
  - What happens to our data in development? Evidence: production data is not copied to developer laptops.
  - What do you hand over at launch? Evidence: the handover checklist (link to the handover page).
  Map these loosely to OWASP SAMM's practices (Secure Build, Defect Management, Security Testing) and to the UK Software Security Code of Practice principles, as an "evidence of practice" lens rather than a certification demand.
- **Reference-call script:** five questions to ask a past client. Was the team the same as the pitch team? How were changes priced? What broke after launch? Did you get your accounts and code? Would you hire them again for the same kind of project?
- **Red flags table**, expanded: no repository access until final payment; agency-held domain or hosting; "unlimited revisions" with no change process; fixed price after one call for an app; no named developers; refusal of a paid discovery or trial sprint; portfolio links that are dead or unattributable.
- **Short "web app vs website" box:** what extra to check for a web app (auth, roles, integrations, data migration, load).
- A **Sources** section.

**9. Service page and CTA.** `/services/website-development`. CTA: "Want us to walk you through a real repository and our delivery process before you decide? Book a technical walkthrough." This shows the evidence-based approach without claiming to be the "best" agency. Secondary links: `/services/ui-ux-design` for UX capability and `/services/shopify-development` for commerce builds.

**10. Recommendation: UPDATE /blogs/how-to-choose-website-development-company. Agree.** It is the generic global hub; WEB-22 already says to update rather than create a third page, and the regional pages cover the local detail. Keep the URL and the H1 intent. Consider retitling to "How to Choose a Web Development Agency: Scorecard, Due-Diligence Questions and Red Flags". Keep the body vendor-neutral and leave the `best-web-development-agencies-in-india` link and `relatedSlugs` as they are until the owner rules on the merge, but say so in the brief. Do **not** add any ranking or "top agencies" content.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| UK DOS buyer guidance (now withdrawn): assess suppliers "in an interview or with a written proposal"; "score all suppliers against the same criteria using a scoring template"; scores agreed by consensus ("You can't take an average of the evaluation team's scores"); minimum evaluation team of "3 people for digital outcomes". **Withdrawn 31 Dec 2025** as out of date. Cite only as "UK government's former buyer guidance", for method, never as current rules. | https://www.gov.uk/guidance/how-to-evaluate-digital-outcomes-and-specialists-suppliers | 15 Oct 2026 | [Official, UK, withdrawn] |
| Same withdrawn DOS guidance: suppliers are scored on "technical competence, cultural fit and price"; buyers screen out suppliers lacking essential skills before shortlisting. Search summary only, page not fetched. | https://www.gov.uk/guidance/how-to-set-your-evaluation-criteria-when-buying-digital-outcomes-and-specialists-services | 15 Oct 2026 (search summary) | [Official, UK, withdrawn; verify wording] |
| UK DDaT Playbook (last updated 20 Jun 2023): "Evaluation – and evaluation criteria – should focus on value over cost in order to avoid a 'race to the bottom'." "The expectation is that quality will be weighted higher than cost." Requirements "should be drafted to be supplier or technology agnostic" to avoid lock-in; authorities "must plan for effective knowledge transfer". The Playbook applies to UK central government ("comply or explain"), so frame it as a principle a founder can borrow, not as a rule. | https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook-html | 15 Oct 2026 | [Official, UK public sector] |
| UK Software Security Code of Practice (DSIT/NCSC), published 7 May 2025, updated 15 Jan 2026, **voluntary**; "consists of 14 principles" in 4 themes: secure design and development; build environment security; secure deployment and maintenance; communication with customers. Examples: 1.1 "Follow an established secure development framework"; 1.2 "Understand the composition of the software"; 2.1 "Protect the build environment against unauthorised access"; 4.1 "Provide information to the customer specifying the level of support and maintenance provided"; 4.2 at least one year's notice before support ends (paraphrased). It is written for vendors of software supplied to businesses; for a bespoke agency build, use it as a question bank, not a compliance test. | https://www.gov.uk/government/publications/software-security-code-of-practice ; https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice | 15 Oct 2026 | [Official, UK] |
| OWASP SAMM: "defines five business functions and fifteen security practices". The functions are Governance, Design, Implementation, Verification and Operations. Implementation's practices are Secure Build, Secure Deployment and Defect Management; Verification's are Architecture Assessment, Requirements-driven Testing and Security Testing. SAMM v2 was released Jan/Feb 2020 with three maturity levels (from the release notes via search; the model page doesn't state the level count). | https://owaspsamm.org/model/ ; https://owaspsamm.org/release-notes-v2/ | 15 Oct 2026 | [Industry, OWASP] |
| OWASP ASVS "provides a basis for testing web application technical security controls" and gives developers "a list of requirements for secure development". The latest stable release is 5.0.0. Launch date 30 May 2025 (Global AppSec EU) and the three levels L1–L3 come from secondary sources: **verify on GitHub release notes before citing the date**. | https://owasp.org/www-project-application-security-verification-standard/ ; https://github.com/OWASP/ASVS | 15 Oct 2026 | [Industry, OWASP; date secondary] |
| OWASP Top 10 2025 is already cited on the requirements and Dubai pages. Reuse the link, don't re-research it. | https://top10.owasp.org/2025 | reused | [Industry] |
| NCSC Cyber Essentials supply chain playbook: the NCSC recommends requiring Cyber Essentials from suppliers. The "only 14% of firms" statistic came from a search summary, not from the PDF; **unverified, don't cite without opening the PDF**. UK-only relevance. | https://www.ncsc.gov.uk/files/cyber-essentials-supply-chain-playbook.pdf | 15 Oct 2026 (search summary) | [Official, UK; stat unverified] |
| Software escrow is a three-party arrangement in which an escrow company holds source code. Typical release events are insolvency, discontinued support, and failure to maintain or update; agreements "may outline a verification process to ensure that the deposited materials are complete, up-to-date and usable". This comes from an **escrow vendor** (Escrow London) writing on techUK. | https://www.techuk.org/insights/guest-insights/what-are-the-release-events-and-clauses-in-software-escrow-agreements | 15 Oct 2026 | [Vendor] |
| For bespoke web builds, a client-owned repository with continuous access usually makes escrow unnecessary; escrow matters more for licensed or SaaS software the client cannot hold. | — | — | [Inference] |
| UAE IP, Australian copyright s196 and APP 8 points are already on the regional pages. Link to them; don't restate. | see regional pages | reused | — |

Regional note: none needed beyond linking the three regional guides. The only genuinely different points (UAE IP law, Australian Privacy Principles, UK Cyber Essentials) belong on their regional pages or in a single "if you are in the UK" line.

---

## Topic 42: Fixed price vs time and materials: which contract model suits your project?

**1. Founder question and pain.** "One agency quoted a fixed price, another wants time and materials. Which protects me?" Founders assume fixed price moves all the risk to the supplier. They then discover change requests, padded estimates, disputes over what was "in scope", and pressure to cut quality to protect the supplier's margin. Under T&M the fear is an open-ended bill.

**2. Intent and stage.** Commercial investigation at proposal or contract stage, just before signing. The same question comes up for web apps and mobile apps (WEB-14 absorbed the app angle).

**3. Queries.** Primary: "fixed price vs time and materials". Supporting: "capped time and materials", "fixed price software contract risks", "time and materials contract with cap", "milestone payments software development", "fixed price agile", "which contract is best for an MVP", "T&M vs fixed bid app development", "payment on acceptance software contract".

**4. Demand evidence (moderate).**
- SERP is saturated with vendor comparison posts (see 6), which shows the query is commercially contested.
- Hacker News threads on fixed versus hourly, e.g. https://news.ycombinator.com/item?id=3641103 and https://news.ycombinator.com/item?id=2600650. They are old (2011–12) and written from the contractor's side ("burned by fixed-rate projects"; "set upper spending caps"). Useful as colour, not as data.
- PMI community discussion: https://www.projectmanagement.com/discussion-topic/927/Fixed-Price-Contract-vs--Cost-per-Hour-contract
- ZSpace's own pages already answer the question in **four FAQs** (`custom-web-application-development-cost`, `website-development-cost-australia`, `software-development-company-uae`, plus a table in `custom-software-development-uk`). That shows internal editors keep hitting it and it deserves a canonical page.
- Reddit not reachable.

**5. Existing ZSpace coverage (the slug does not exist yet; checked the repo).**
- `/blogs/software-development-company-uae`: H2 "Commercial terms: fixed price, time and materials or retainer?" with a 4-column table (model / how it works / suits / watch out for) and an FAQ. Regional framing, about 150 words.
- `/blogs/custom-web-application-development-cost`: FAQ "Should I ask for a fixed price or time and materials?" (fixed-price discovery, then estimate the build).
- `/blogs/website-development-cost-australia` and `/blogs/mobile-app-development-company-australia`: FAQ and paragraph versions of the same advice.
- `/blogs/custom-software-development-uk`: a pricing-model table row ("Fixed price per phase, time and materials with a cap, or a monthly team; change control either way").
- `/blogs/user-acceptance-testing-business-software`: "Linking acceptance to the contract" covers acceptance windows, deemed acceptance and sign-off triggers. Link to it; don't repeat it.
- **What's missing everywhere:** a full governance comparison (who carries which risk, how change is controlled, what a cap really does, how milestones tie to acceptance, exit), hybrid models, a clause checklist, and any official source. All existing mentions are unsourced one-paragraph answers. **Once the new page is live, the four FAQs should link to it.**

**6. SERP weaknesses (do not copy).**
- https://cprime.com/?p=77295 (Cprime): balanced but generic; no cap or acceptance mechanics.
- https://dreamix.eu/insights/fixed-price-vs-time-and-materials/ : vendor post; "fixed price for limited scope", nothing deeper.
- https://www.baytechconsulting.com/blog/time-and-materials-vs-fixed-price-2025.md : openly favours T&M with agile.
- https://wavect.io/software-development-guide/fixed-price-vs-time-and-materials.md : mentions hybrids, but is written from the vendor's side.
- https://solguruz.com/blog/fixed-price-vs-time-and-materials : a listicle that leans on cost.
Common gaps: none cites government contracting guidance. None explains **capped T&M** precisely (who pays above the cap, what "done" means at the cap). None treats **change control and acceptance** as the real differentiators, and none gives a clause checklist. Most frame the choice as cost, which the brief excludes.

**7. Qualified-buyer potential.** High. The reader is about to sign and comparing proposals, and a well-reasoned page builds trust at exactly that moment. It works for website, web app and mobile app buyers.

**8. Format and original asset.** A comparison guide, about 1,800–2,400 words, with no prices.
- **Model comparison table:** fixed price (whole project), fixed price per phase or sprint, time and materials, capped T&M, and a dedicated team or retainer. Columns: who carries delivery risk, how scope changes are handled, how the supplier is incentivised, what you must manage, and best fit. Base the risk allocation on the UK guidance quoted below.
- **Decision rule:** how certain is the scope, how fast will you learn, and how much management time do you have? The "discovery on T&M or a fixed price, then a fixed price or capped build" hybrid is supported by the UK Contracting for Agile note.
- **Original asset: "Contract-clause checklist"**, model-neutral. Covers:
  - the scope baseline (the requirements document version);
  - the change-control procedure (who can request, impact assessment, written approval before work, how it is priced);
  - the cap, what happens at the cap, and a notification threshold, for example a warning at 75% of the cap. (That is an inference/practice suggestion, not official.)
  - payment milestones tied to *accepted* deliverables, not to process activity ("avoid basing payment milestones on the delivery of the agile process itself");
  - an acceptance window and deemed acceptance, with defects separated from change requests (link to the UAT page);
  - Definition of Done and Definition of Ready;
  - backlog ownership by the client;
  - time and progress reporting cadence;
  - break points and exit without termination cost;
  - IP assignment on payment and repository access throughout (link to the handover page);
  - warranty period;
  - governance meetings when velocity or quality drops.
- **"What fixed price does not protect you from"** box: scope you didn't write down, quality you didn't define, and slow decisions on your side.
- **Short app-specific note:** app store review timing and SDK or OS changes are classic out-of-scope triggers; state who owns them.
- Mention ZSpace's own engagement models **only if the owner confirms them** (roadmap note).

**9. Service page and CTA.** `/services/website-development` (primary), `/services/mobile-app-development` (secondary). CTA: "Discuss a web application idea: we'll recommend a contract structure after a short discovery." (The roadmap's CTA wording.)

**10. Recommendation: CREATE /blogs/fixed-price-vs-time-and-materials. Agree.** The slug does not exist. The topic is currently scattered across four regional FAQs with no canonical page, and WEB-14 already planned this one. Keep it global and governance-led. Afterwards, link the UAE, AU, UK and custom-web-app-cost FAQs to it rather than expanding them. Make sure it does not cannibalise `custom-web-application-development-cost`, which stays the cost-estimation page.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| UK Contracting for Agile Guidance Note (DDaT Playbook companion), last updated 20 Jun 2023. Its pricing models are in Section 4, "Recommended Pricing Models": Fixed Price Agile (fixed price and timescale for the scope in the epics, whole project or per sprint); Payment by Results; Time and Materials. Fixed price's benefit is "primarily its simplicity". Projects with high uncertainty are less likely to hit outcomes under a rigid fixed price, and risk can be reduced by contracting fixed-price sprints in phases (paras 4.5–4.9, 4.13; paraphrased). | https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/contracting-for-agile-guidance-note-html (PDF: https://assets.publishing.service.gov.uk/media/648c3c98103ca6001303a097/Contracting_for_Agile_Guidance_Note.pdf) | 15 Oct 2026 | [Official, UK public sector] |
| Same note on T&M: it "offers a high-level of flexibility" but "does not incentivise the supplier to deliver as much as other pricing models", and "The Contracting Authority bears the risk of poor quality" (para 4.19). It recommends T&M mainly for initial "discovery" work, then a more structured model (para 4.20). | same | 15 Oct 2026 | [Official, UK] |
| Same note on governance: the buyer "will retain control of the project scope, including the movement of user stories up/down the backlog" (6.4); "The structure and approach should not allow, for example, scope creep" (6.5); define Definition of Done and Definition of Ready (5.3); avoid "basing payment milestones on the delivery of the agile process itself" (4.24); the structure should support "exit without the authority incurring termination costs" (4.22); in agile, "The scope becomes the variable" (2.5). **Paragraph numbers come from the fetch summary; spot-check them against the PDF before citing by number.** | same | 15 Oct 2026 | [Official, UK] |
| DDaT Playbook ch. 8: "The aim of the payment mechanism is to reflect an optimum balance between risk and return in the contract." "Where the scope of a project is certain, then fixed pricing may be appropriate." "Traditional pricing models such as fixed price or time and materials for the whole project are not optimal" for agile work. "For agile projects, contracting authorities should select payment milestones" (sentence truncated in the fetch; get the full sentence before quoting). Last updated 20 Jun 2023. | https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook-html | 15 Oct 2026 | [Official, UK public sector] |
| UK DOS payment guidance (**withdrawn 31 Dec 2025**; cite as historical government practice): under fixed price "the supplier owns most of the risk" and it can cost more; it "works best when your requirements are well defined". Under T&M "you own more of the risk" and extra days are paid at the day rate. Under capped T&M, if the cap is reached "the supplier has to complete the work at their own cost"; if the work finishes early you pay only for the time taken. Invoices follow agreement that a statement of work is complete. | https://www.gov.uk/guidance/how-to-pay-for-digital-outcomes-and-specialists-services | 15 Oct 2026 | [Official, UK, withdrawn] |
| In commercial (non-government) contracts, "capped T&M" is often used loosely to mean a budget ceiling that requires re-approval, *not* that the supplier finishes at its own cost. The article should tell readers to define in writing which meaning applies. | — | — | [Inference] |
| Agile Manifesto values include "Customer collaboration over contract negotiation" and "Responding to change over following a plan"; "while there is value in the items on the right, we value the items on the left more." | https://agilemanifesto.org/ | 15 Oct 2026 | [Industry, primary] |
| Australia: the DTA Digital Sourcing Contract Limits and Reviews Policy (effective 1 Feb 2020) limits Commonwealth digital contracts to an initial term of 3 years and a whole-of-life value of $100m, with extensions only after a performance review. This illustrates the principle of contracting in smaller, reviewable pieces. **Not verified on dta.gov.au (pages timed out); figures come from search summaries.** Optional: cite only if verified. | https://architecture.digital.gov.au/digital-sourcing-contract-limits-and-reviews-policy ; https://dta.gov.au/news/new-policy-replaces-ict-contract-capped-term-and-value | 15 Oct 2026 (search summary) | [Official, AU; unverified] |
| GOV.UK Service Manual, Planning in agile (updated 31 Mar 2026): "In agile, you change your plans as you do more work and learn more about your users." | https://www.gov.uk/service-manual/agile-delivery/planning-agile | 15 Oct 2026 | [Official, UK] |

Regional note: the government sources are UK and Australian public-sector rules, so present them as transferable principles. India, UAE and Singapore private contracts have no equivalent model guidance; local contract law (for example consumer-guarantee points in Australia) is already on the AU maintenance-contracts page. No prices anywhere.

---

## Topic 43: Why web projects go over budget, and how to reduce scope creep

**1. Founder question and pain.** "We agreed a scope, yet three months in we're over budget and arguing about what was included. How did this happen and how do we stop it?" The pain is unpriced "small" changes, stakeholder requests that bypass the process, defects and changes being confused, slow client decisions and content delays, and fixed-price disputes.

**2. Intent and stage.** Informational, usually mid-project (in trouble) or pre-contract (wanting to avoid it). A mid-project reader is a potential rescue or second-opinion lead.

**3. Queries.** Primary: "scope creep software project" (WEB-19). Supporting: "why do web projects go over budget", "how to prevent scope creep web development", "change request template software", "change request process agency", "scope baseline", "defect vs change request", "website project over budget what to do", "gold plating software".

**4. Demand evidence (moderate; good on pain, weak on founder search phrasing).**
- UK Business Forums, a developer's side of the dispute (client kept changing specs; invoice for extras refused): https://www.ukbusinessforums.co.uk/goto/post?id=3120708
- UKBF "Need advice on web design quotation" (itemised statement of work, then hourly for changes): https://www.ukbusinessforums.co.uk/threads/need-advice-on-web-design-quotation.162359/post-1281773
- UKBF "Charging extras": https://www.ukbusinessforums.co.uk/threads/charging-extras.331117/post-2456357
- A crowded SERP of PM-tool blogs (Toggl, Asana, Typeform templates) shows template demand.
- The roadmap asked for validation on r/startups and r/smallbusiness; **Reddit is not reachable from these tools**, so that remains open.

**5. Existing ZSpace coverage (the slug does not exist; checked the repo).**
- `/blogs/website-requirements-document` (2,364 words, updated this week): covers *pre-contract* scope. It has must/should/out-of-scope lists, an "Out of scope" row, numbered requirements "so quotes, test notes and change requests can refer to it", and an FAQ "Should the requirements document be updated during the project?" (versioned changes). **It has no change-control process, no change-request template, no baseline concept and no mid-project budget control.** Link to it as the source of the baseline; don't repeat its template.
- `/blogs/user-acceptance-testing-business-software` (509 words, file `blog-data-delivery-web.ts`): has a "Defects versus change requests" table (Defect / Change request / "Estimate and prioritise separately") and "Linking acceptance to the contract". **Link to it for defect vs change; don't rebuild the table.** (It is thin at 509 words; a later update candidate, out of scope here.)
- `/blogs/software-development-company-uae`: mentions "written change control" in passing.
- `/blogs/how-much-ux-design-before-development`: notes that under-designing shows up as change requests.
- `/blogs/website-development-timeline` and `/blogs/technical-discovery-software-projects`: adjacent; link to them.
- So there is no page on *running* change control during delivery. That is the gap.

**6. SERP weaknesses (do not copy).**
- https://toggl.com/blog/how-to-prevent-scope-creep : a time-tracking vendor; agency profitability angle.
- https://www.mightybytes.com/blog/how-to-keep-a-website-project-on-budget/ : an agency view on budgets; few templates.
- https://bugherd.com/blog/the-key-to-delivering-web-projects-on-time-within-budget : a vendor (feedback tool); agency-side.
- https://firebrandagency.com/glossary/business/scope-creep : a glossary entry.
- https://www.actitime.com/templates/change-request-form and Asana/Typeform templates: generic forms, not software-specific; no tie to a baseline or contract model.
Common gaps: almost all are **written for agencies protecting margin**, not founders protecting budget. None separates *scope creep* (uncontrolled) from *legitimate change* (controlled) from *progressive elaboration* (clarification). None ties change requests to requirement IDs, acceptance criteria and the contract model. None covers client-side causes (late content, approval latency, too many stakeholders) honestly.

**7. Qualified-buyer potential.** Medium to high. Mid-project readers with a struggling vendor are rescue leads; pre-contract readers learn ZSpace's delivery discipline. Lower volume than topic 42 but strong trust-building.

**8. Format and original assets.** A practical guide, about 1,800–2,300 words.
- **Causes, split by who controls them:** unclear baseline; undocumented "quick" requests; stakeholders outside the process; defects mislabelled as changes or changes disguised as defects; gold plating by the team; slow approvals and late content; integration surprises; learning from users (a legitimate change that still needs funding).
- **Three-way distinction:** scope creep vs controlled change vs progressive elaboration (clarifying detail within agreed scope).
- **Original asset 1: "Scope-baseline checklist"**, completed before kickoff. It covers:
  - the requirements document version and date, with numbered requirements;
  - an out-of-scope list;
  - assumptions, for example that the client supplies content by a set date;
  - client dependencies and decision owners, with a decision-turnaround SLA;
  - acceptance criteria per requirement;
  - integrations with the owner of each API;
  - the design sign-off point;
  - content responsibility;
  - environments and browsers or devices in scope;
  - a contingency or change budget held by the client;
  - who can request and who can approve changes;
  - the contract model (link to topic 42).
- **Original asset 2: "Change-request template"**, copyable. Fields:
  - CR ID, date and requester;
  - requirement IDs affected (from the requirements doc);
  - description and reason / business value;
  - change type: new, modified or removed scope, or clarification;
  - impact on effort, timeline and other features; risks; testing and acceptance changes;
  - options: do now / swap for an equal-sized item / defer to phase 2 / reject;
  - decision, approver, date;
  - updated baseline version.
  Add a **change log** table and a "swap rule" for capped or fixed scopes (trade an equal-sized backlog item out).
- **Process in 6 steps:** capture, triage (defect / change / clarification), estimate impact, decide (with a named approver), update the baseline, communicate.
- **Budget early warnings:** burn vs plan at each milestone; the CR count and value as a percentage of the change budget; decision latency. These are practice suggestions; no invented benchmarks.
- **"If you are already over budget"** box: freeze new scope, re-baseline, re-prioritise with MoSCoW, cut to the release goal, and agree the remaining cap in writing.
- **No Standish CHAOS figures:** no primary public source was found (see facts).

**9. Service page and CTA.** `/services/website-development`. CTA: "Project drifting? Get a scope and delivery review" (or the roadmap's "Discuss a web application idea"). Secondary: `/services/mobile-app-development`.

**10. Recommendation: CREATE /blogs/scope-creep-software-projects. Agree.** The slug doesn't exist and no page covers change control during delivery. Overlap is manageable:
- the requirements doc owns the *pre-contract baseline content*;
- the UAT page owns *defect vs change at acceptance*;
- this page owns the *process and governance in between*.
The title should carry the founder phrasing, e.g. "Scope Creep in Web and Software Projects: Why Budgets Overrun and How to Control Change". Cross-link both ways with topic 42, and add a link from the requirements doc's "Should the requirements document be updated during the project?" FAQ.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| PMI (PMBOK Guide 6th ed., 2017, glossary) defines scope creep as "The uncontrolled expansion to product or project scope without adjustments to time, cost, and resources." **Seen only via secondary sources (GoSkills lesson citing the PMBOK glossary). pmi.org returned 403 and the PMBOK is paywalled.** It's safe to quote with "PMI's PMBOK Guide defines…", but note it was not checked against the primary source. | https://www.goskills.com/Course/CAPM-Foundations/Lesson/298/Scope-Creep (secondary); primary is the PMBOK Guide 6th ed. glossary (not public) | 15 Oct 2026 | [Industry; primary not accessed] |
| PMI's PM Network article "Scope Patrol" (Catherine Elton) reports that PMI's 2018 Pulse of the Profession found "52 percent of projects completed in the last 12 months experienced scope creep or uncontrolled changes to the project's scope—up from 43 percent five years ago." **Quote comes from a search summary; pmi.org blocked fetch (403).** Usable with "according to PMI's 2018 Pulse of the Profession", but verify in a browser before publishing. The claim that the 2021 Pulse shows 34% is **unverified; don't use**. | https://www.pmi.org/learning/library/scope-creep-rising-11308 | 15 Oct 2026 (search summary) | [Industry; unverified wording] |
| Standish CHAOS 2020 (31% successful / 50% challenged / 19% failed) appears only in secondary blogs and wikis; no Standish primary page was found, and one secondary source contradicts it (16.2%). **Leave it out.** | https://opencommons.org/CHAOS_Report_on_IT_Project_Outcomes (secondary only) | 15 Oct 2026 | [Excluded] |
| UK Contracting for Agile note: the buyer keeps control of scope, "including the movement of user stories up/down the backlog"; "The structure and approach should not allow, for example, scope creep"; in agile "The scope becomes the variable"; define a "Definition of Done"; agree "an overall timetable … with delays measured against this"; set up a governance mechanism for when velocity or quality falls below an agreed threshold. Updated 20 Jun 2023. | https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/contracting-for-agile-guidance-note-html | 15 Oct 2026 | [Official, UK] |
| DDaT Playbook: "clear and agreed reporting, change management and dispute resolution mechanisms are a critical success factor" (supplier relationships). Updated 20 Jun 2023. | https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook-html | 15 Oct 2026 | [Official, UK] |
| GOV.UK Service Manual, Deciding on priorities: MoSCoW definitions ("'must haves' - essential things that your product cannot function without"; "'will not haves' - low priority things that the team has agreed not to do"); "Decisions about what to prioritise should be made regularly". Last updated 6 Dec 2018. | https://www.gov.uk/service-manual/agile-delivery/deciding-on-priorities | 15 Oct 2026 | [Official, UK] |
| GOV.UK Service Manual, Planning in agile: "In agile, you change your plans as you do more work and learn more about your users." Updated 31 Mar 2026. | https://www.gov.uk/service-manual/agile-delivery/planning-agile | 15 Oct 2026 | [Official, UK] |
| GOV.UK writing user stories: acceptance criteria are "a list of outcomes that you use as a checklist". | https://www.gov.uk/service-manual/agile-delivery/writing-user-stories | reused (14 Oct) | [Official, UK] |
| Changes that are controlled and tracked are not scope creep; clarifying fuzzy details is "progressive elaboration", not new scope. Common PM usage, seen in secondary sources. Present as explanation, not as a quote. | (secondary: GoSkills, PMI library summaries) | 15 Oct 2026 | [Industry/Inference] |

Regional note: none needed. Contract-law consequences of variations differ by country; tell readers to take local legal advice rather than giving jurisdiction-specific rules.

---

## Topic 44: How to know when your business has outgrown its website or web platform

**1. Founder question and pain.** "Our site worked when we were smaller. Now every change needs a developer, pages are slow, the CMS can't do what sales and marketing need, and our agency says it's 'old'. Have we outgrown it, or is that just a sales pitch?" The pain is not knowing whether to optimise, redesign, rebuild or replatform, and fear of a large, risky migration triggered by vendor opinion rather than evidence.

**2. Intent and stage.** Problem-aware to solution-aware. Commercial investigation. The reader often hasn't contacted a vendor yet, so this is an earlier entry point than the replatforming checklist.

**3. Queries.** Primary: "outgrown website" / "signs you've outgrown your website platform". Supporting: "when to replatform website", "is my CMS holding my business back", "website platform limitations", "Drupal 7 end of life what now", "Magento 1 still running", "PHP 8.2 end of life website", "website can't scale", "time to move off Wix/Squarespace" (the last is close to WEB-38's no-code angle, so handle with care; see 10).

**4. Demand evidence (moderate; vendor-heavy).**
- The SERP has many vendor "signs you've outgrown" posts (see 6), showing the framing is recognised.
- The EOL hooks are concrete and dated. **Drupal 10 reaches end of life on 9 Dec 2026** and **PHP 8.2 security support ends 31 Dec 2026**, both within the next 11 weeks; Adobe Commerce 2.4.6 standard support ended 11 Aug 2026. These create real "do we need to move?" moments for site owners.
- Third-party coverage of Magento 1 stragglers (PortSwigger Daily Swig, July 2020: about 200k sites still on M1) shows owners stay on EOL platforms; that figure is dated and secondary, so use it only as colour or not at all.
- No founder threads found (Reddit unreachable; no relevant HN or Indie Hackers threads surfaced). **Founder-voice evidence is weak.**

**5. Existing ZSpace coverage.**
- `/blogs/website-replatforming` (841 words, 1 external link, updated 9 Oct 2026, file `src/lib/blog-data-webdev-9.ts`). It has a 7-item "Signs Replatforming Is Needed" checklist, short sections on legacy, performance, integrations and cost, risk reduction, and an SEO cutover checklist citing Google's site-move guide. **Missing:** a structured diagnostic that separates "outgrown the platform" from "outgrown the build or the content"; any dated EOL facts; Core Web Vitals thresholds as the measurable performance test; a scoring method; and a "what to do at each score" path. Its signs are unmeasured assertions.
- `/blogs/website-redesign-vs-rebuild` (1,791 words, Batch 2): owns *redesign vs rebuild vs staged modernisation*, Stage 0–3 roadmap, PHP 8.2 FAQ and WordPress requirements. **Don't repeat staging or PHP detail at length; link to it** and reuse one PHP line.
- `/blogs/when-does-your-website-need-a-redesign` (800 words): a symptoms list (UX, mobile, speed, navigation, conversion, technical limitations, CMS difficulty). **Overlap risk:** the new scorecard must diagnose the *platform* (runtime, CMS, hosting, integration ceiling, editor model, licensing, hiring pool), not the *design*. Link to this page for design symptoms.
- `/blogs/ecommerce-replatforming` (1,406 words): has "How to Tell If the Platform Is the Constraint" for stores. Link to it for commerce rather than duplicating.
- `/blogs/software-modernization-uae`: has a "five-factor legacy risk scorecard" for software. The website scorecard must use different dimensions and wording.
- `/blogs/au-trust` and `uae-infra` posts already state PHP 8.2's EOL as of 9 Oct; consistent with today's check.
- WEB-38 (`/blogs/migrate-no-code-app-to-custom-code`, not yet created) owns outgrowing **no-code app builders** (Bubble etc.). This update should cover *website platforms/CMS* and only mention hosted site builders (Wix/Squarespace) in one line with a forward link once WEB-38 exists.

**6. SERP weaknesses (do not copy).**
- https://www.lowcode.agency/blog/signs-your-current-website-platform-is-holding-you-back : a vendor; "sorry, that's not possible" anecdotes, no measurement.
- https://www.wrteam.in/blog/8-signs-your-website-platform-wix-squarespace-shopify-has-outgrown-your-business : a builder-focused listicle (overlaps WEB-38 territory).
- https://www.unrvld.com/opinion/when-right-time-to-replatform-website : an agency opinion piece.
- https://www.liquidweb.com/blog/outgrow-saas-website-platform/ : a hosting vendor's angle (SaaS to self-host).
- https://www.youweagency.com/blog/signs-outgrown-ecommerce-platform : commerce-only.
Common gaps: no dated EOL facts, no CWV thresholds or field-data method, no scoring, and no distinction between "the platform is the constraint" and "our implementation, content or process is the constraint". Every one ends in "so replatform with us".

**7. Qualified-buyer potential.** High. Readers have an existing site, budget history and a live problem. Those on Drupal 10, PHP 8.2 or old Magento face a deadline. It converts well to an assessment offer.

**8. Format and original asset.** Update `website-replatforming`, adding about 900–1,300 words (to about 1,900–2,100 total).
- New H2 near the top: **"Have you outgrown your platform? A 10-point diagnostic"**. This is the **original asset: an "Outgrown" diagnostic scorecard**. Each row has a measurable test, where to get the evidence, and a score (0 = fine, 1 = strained, 2 = blocking). Proposed rows, all platform-level:
  1. *Runtime/CMS support status:* core CMS, PHP or Node version, and key extensions in security support? Evidence: php.net, the CMS lifecycle page, nodejs.org. Score 2 if past EOL or ending within 6 months with no upgrade path.
  2. *Upgrade path:* can you move to the supported version in place, or do custom code and plugins block it?
  3. *Field performance:* CWV at p75 in Search Console/CrUX vs LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, **after** standard fixes. Link to the slow-website guide.
  4. *Editor independence:* the share of routine content changes needing a developer (count over a month).
  5. *Change lead time:* how long a small template or feature change takes, and whether that is getting worse.
  6. *Integration ceiling:* required integrations (CRM, ERP, PIM, SSO, search) that are impossible or only possible by fragile workaround.
  7. *Content model fit:* structured content, multilingual, multi-site or personalisation needs the CMS can't model.
  8. *Security and compliance burden:* recurring incidents, unpatched extensions, or a compliance requirement (e.g. PCI scope, accessibility) that is hard to meet on the platform.
  9. *Cost curve:* licence, hosting and extension costs, and maintenance hours, trending against value. No prices; the reader uses their own numbers.
  10. *Talent pool:* the ability to hire or contract developers for the platform.
  Interpretation bands:
  - 0–5: optimise in place (link to performance or maintenance guides);
  - 6–11: targeted fixes or a staged modernisation (link to redesign-vs-rebuild);
  - 12+ or **any "2" on row 1 with no upgrade path**: build the replatforming business case.
  Present the bands as a heuristic, not a standard. Include "evidence to collect before you call an agency".
- A small **"Dated end-of-life checkpoints" table** (verified facts only): Drupal 7 (EOL 5 Jan 2025), Drupal 10 (EOL 9 Dec 2026), Magento 1 (EOL 30 Jun 2020), Adobe Commerce/Magento Open Source 2.4.4–2.4.6 (standard support ended), PHP 8.2 (security ends 31 Dec 2026), WordPress (only the latest version officially supported). Add an "as of 15 Oct 2026, check the official page" note.
- **"Outgrown the platform vs outgrown the build"** box: if rows 1, 6, 7 and 10 score low but 3–5 score high, the problem is likely the implementation (rebuild or refactor on the same platform), so link to redesign-vs-rebuild.
- Rework the existing "Signs Replatforming Is Needed" checklist into the scorecard to avoid duplication. Keep the SEO cutover checklist.
- Add a Sources section.

**9. Service page and CTA.** `/services/website-development`. The existing CTA "Not sure whether your platform is the real problem? ZSpace Labs can assess your current stack…" fits; reword it to "Send us your scorecard: we'll tell you whether to optimise, rebuild or replatform." Secondary for stores: `/services/shopify-development`.

**10. Recommendation: UPDATE /blogs/website-replatforming. Agree.** A new "outgrown" page would cannibalise both `website-replatforming` and `when-does-your-website-need-a-redesign`. The replatforming page is thin (841 words, one source) and is the natural decision point.
- Keep it distinct by focusing the scorecard on **platform** dimensions. Leave design symptoms to the redesign page, the staged path to redesign-vs-rebuild, commerce to ecommerce-replatforming, and no-code apps to WEB-38.
- Consider retitling: "Website Replatforming: How to Tell If You've Outgrown Your Platform (With a Scorecard)".
- Optional follow-up (not this batch): add a one-line link from `when-does-your-website-need-a-redesign` "Technical Limitations" to the new scorecard.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Drupal 7 end of life: "5 January 2025"; after EOL it "will no longer receive security updates or compatibility updates". | https://www.drupal.org/about/drupal-7/d7eol/partners | 15 Oct 2026 | [Official] |
| "Drupal 10 will reach end of life on December 9, 2026." "Drupal 12 will be released on the week of December 7, 2026." End of security support for 11.3.x and 10.6.x is in the week of 7 Dec 2026. Caveat: "there is no guarantee that all release windows will be used to release new Drupal versions." | https://www.drupal.org/about/core/policies/core-release-cycles/schedule | 15 Oct 2026 | [Official] |
| Magento 1: official end-of-life date 30 June 2020 (timeline in an Adobe team post on the Magento community DevBlog; marketplace listings were removed 7 Jul 2020). **Primary Adobe announcement page not retrieved**; the community post is the closest official source (search summary, not fetched). | https://community.magento.com/t5/Magento-DevBlog/How-Extension-Developers-Can-Prepare-for-M1-End-of-Life/ba-p/446216 ; corroboration: https://www.helpnetsecurity.com/2020/06/29/magento-1-eol/ | 15 Oct 2026 (search summary) | [Official-ish; verify] |
| Adobe Commerce lifecycle (page updated 18 Sep 2026): end of standard support is 2.4.4 on 12 Apr 2025, 2.4.5 on 12 Aug 2025, 2.4.6 on 11 Aug 2026, 2.4.7 on 31 May 2027, 2.4.8 on 31 May 2028, 2.4.9 on 31 May 2029. Extended-support and security-only columns exist but the fetch summary was ambiguous; **re-read the table, and whether extended support applies to Adobe Commerce only or also to Magento Open Source, before citing anything beyond "end of standard support".** | https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy | 15 Oct 2026 | [Official; partial] |
| PHP supported branches (rechecked today): 8.2 security until 31 Dec 2026; 8.3 until 31 Dec 2027; 8.4 active to 31 Dec 2026 and security to 31 Dec 2028; 8.5 (released 20 Nov 2025) security to 31 Dec 2029. Each branch has 2 years of active support plus 2 years of security fixes. EOL dates: 8.1 on 31 Dec 2025, 7.4 on 28 Nov 2022 (reused). | https://www.php.net/supported-versions.php ; https://www.php.net/eol.php | 15 Oct 2026 / reused | [Official] |
| WordPress: "only the latest version of WordPress is officially supported", though "the Security Team also backports fixes to older versions as a courtesy". WordPress recommends PHP 8.3+ (reused). | https://wordpress.org/about/security/ ; https://wordpress.org/about/requirements/ | 15 Oct 2026 / reused | [Official] |
| Node.js: production apps should use Active LTS or Maintenance LTS releases only. v20 and earlier are listed as EOL; v22 and v24 are LTS. **The page's date column is labelled "Last updated", not EOL; don't quote dates from it.** | https://nodejs.org/en/about/previous-releases | 15 Oct 2026 | [Official] |
| Joomla: Joomla 4 support ends 17 Oct 2025 (per the developer documentation, via search) and Joomla 3 on 17 Aug 2023, with a **conflicting report of an extension to Jan/Feb 2025**. docs.joomla.org returned 403. **Unverified; omit or verify in a browser.** | https://docs.joomla.org/Joomla!_4.x_Release_Information (blocked) | 15 Oct 2026 | [Unverified] |
| Core Web Vitals "good": LCP within 2.5 s; INP ≤ 200 ms; CLS ≤ 0.1, measured at the "75th percentile of page loads, segmented across mobile and desktop devices". Page last updated 31 Oct 2024. | https://web.dev/articles/vitals | 15 Oct 2026 (re-confirmed) | [Official] |
| Google site moves: permanent redirects; keep them "generally at least 1 year"; small and medium sites should move all URLs at once (reused from Batch 2; already cited on the page). | https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes | reused (14 Oct) | [Official] |
| UK Software Security Code of Practice principle 4.2: vendors should give customers at least one year's notice before support or maintenance ends. Useful for "ask your platform vendor for its support roadmap". | https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice | 15 Oct 2026 | [Official, UK, voluntary] |
| Scorecard bands (0–5 / 6–11 / 12+) are ZSpace's heuristic, not an industry standard; label them as such. | — | — | [Inference] |
| About 200k sites still ran Magento 1 in July 2020 (Foregenix, via PortSwigger). Dated and secondary; **do not use** unless the primary report is found. | https://portswigger.net/daily-swig/unsupported-magento-1-still-powers-more-than-200-000-e-commerce-sites | 15 Oct 2026 (search summary) | [Industry; secondary] |

Regional note: none needed. EOL dates are global. Market-specific compliance (PCI DSS for stores, Australian accessibility, UAE data location) is already covered on regional pages; link rather than restate.

---

## Summary (10 lines)
1. **41 UPDATE `how-to-choose-website-development-company` (agree).** Add a gates + weighted scorecard, WEB-22 technical due-diligence questions with the evidence to request, a reference-call script and a red-flags table.
2. 41 neutrality: the page's Quick answer and `relatedSlugs` point to `best-web-development-agencies-in-india`. Leave them alone pending the owner's merge decision, keep the body vendor-neutral, and link out to the AU, Dubai and UAE pages instead of repeating them.
3. 41 sources: the UK Software Security Code of Practice (14 principles, May 2025), OWASP SAMM (5 functions, 15 practices) and ASVS 5.0.0, and the DDaT Playbook ("value over cost"). The UK DOS evaluation guidance was withdrawn on 31 Dec 2025, so cite it only as historical; escrow sources are vendor-only.
4. **42 CREATE `fixed-price-vs-time-and-materials` (agree).** The best primary source is the UK Contracting for Agile note (pricing models, buyer owns the backlog, Definition of Done, no milestones paid for "process", exit without termination cost). The withdrawn DOS page defines capped T&M (supplier finishes at its own cost).
5. 42 asset: a model-neutral contract-clause checklist, with no prices. The four existing regional FAQs should link to the new page. The Australian DTA contract-limits facts are unverified (dta.gov.au timed out).
6. **43 CREATE `scope-creep-software-projects` (agree).** Assets: a scope-baseline checklist and a change-request template plus change log. It owns the in-delivery process; the requirements doc owns the baseline and the UAT page owns defect vs change.
7. 43 facts: the PMI definition and the PMI 2018 "52% of projects" figure were seen only via search (pmi.org returns 403), so verify before publishing. Standish CHAOS is excluded (no primary source). GOV.UK MoSCoW and the agile planning pages are verified.
8. **44 UPDATE `website-replatforming` (agree).** Add a 10-row platform-level "outgrown" scorecard with bands, plus a dated EOL table. Keep it distinct from the redesign page (design symptoms), redesign-vs-rebuild (staging) and WEB-38 (no-code).
9. 44 verified today: Drupal 7 EOL 5 Jan 2025; **Drupal 10 EOL 9 Dec 2026**; PHP 8.2 security ends 31 Dec 2026; Adobe Commerce 2.4.6 standard support ended 11 Aug 2026; WordPress officially supports only the latest version; CWV thresholds are unchanged. Magento 1's 30 Jun 2020 date comes from an Adobe community post via search. Joomla dates are unverified.
10. Limits: Reddit was unreachable and search is US-only, so founder-voice demand evidence is weak for 41 and 44 and moderate for 42 and 43 (UKBF and HN threads). pmi.org, docs.joomla.org and dta.gov.au blocked fetches.
