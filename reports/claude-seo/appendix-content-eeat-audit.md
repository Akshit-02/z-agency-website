> Appendix to content-quality-report.md, service-page-audit.md and homepage-conversion-audit.md. Produced by a subagent following Claude SEO's seo-content and seo-sxo agent instructions, working from saved HTML. Its 'FAQ answers not in HTML' finding has since been fixed (see implementation-log.md).

# ZSpace Labs: content quality and E-E-A-T audit (seo-content method)

Audit date: 13 November 2026. Source: saved rendered HTML in `scratchpad/work/html/` (no live fetch) plus the website repository. Method: the claude-seo `seo-content` agent and skill (Who/How/Why test, E-E-A-T framework, quality gates), with page-type and intent checks from `seo-sxo`. No SERP fetch was run, so the intent judgements come from the page type plus the GSC queries supplied.

> Scores are heuristics from the plugin's own scoring model. They are not Google signals. The bundled `content_quality.py` scored every page I ran it on at 90 to 92 (filler 0, AI-pattern 0). It tokenises the raw HTML, so it does not tell good pages from weak ones, and I have not used it in any judgement below. `metadata_template.py` across all 1,165 pages returned `site_risk: low` with 0 templated title/description pairs, so the metadata is clean.

---

## 1. Executive summary

| Area | Verdict |
|---|---|
| Service pages (6) | Well structured, specific, honest ("Not the right fit if…"), and they avoid fake numbers. The weak spots are proof (none), H1 phrasing, cost and process copy that sits only inside collapsed FAQs, and missing coverage for the commercial queries GSC shows demand for (SaaS sites, portals, legacy modernisation, B2B ecommerce, custom Shopify apps). |
| Homepage | The H1 "Meet ZSpace Labs, your website builder." matches the wrong intent: it reads like a DIY website builder such as Wix. The page never names the 5 markets, and 10 of 11 FAQ answers are not in the HTML. |
| About / Contact | Honest "How we publish" box, which is good. There are no people at all: no founder, team, founding year or legal entity, so the "Who created it?" test fails. |
| Industry pages | Thin, about 300 words of main content each, with generic copy. The hub's "Also active in" list names 23 more sectors, which is an unverifiable claim. |
| Blogs (8 audited) | Facts are generally accurate and attributed to named sources. Hypothetical examples are labelled as hypothetical. Several have small stale or unverifiable facts, and some posts are visibly patched together. |
| "Best agencies" listicles | Disclosed honestly, but placing ZSpace first in 12 "best X in India/[city]" lists is self-serving and carries scale risk. They should be restructured. |
| Blog corpus as a whole | **Strong signs of templated, mass-produced content.** About 1,040 posts were dated Sep to Nov 2026, the section skeletons are near-identical, sentence lists are reused verbatim, and no post shows a byline or a date. This is the biggest sitewide risk. |

**Site-level E-E-A-T (heuristic): about 42/100**
| Factor | Score | Key signals |
|---|---|---|
| Experience | 4/20 | No case studies, testimonials or named work, which llms.txt confirms. About 296 posts contain "An illustrative scenario, not a client case" and 186 contain "Hypothetical example". This is honest, but it also states that there is no first-hand evidence. |
| Expertise | 13/25 | The technical depth is real (DMN hit policies, PHP EOL dates, MCP OAuth, MSMED 45-day rule). No author or credentials appear anywhere, and the JSON-LD `author` is the Organization. |
| Authoritativeness | 4/25 | No awards, press, certifications or client logos. The only external entities are LinkedIn and Instagram. |
| Trustworthiness | 21/30 | Strong transparency: an editorial disclosure, "We don't publish invented statistics…", "checked 17 October 2026" notes on regulations, privacy and terms pages, and a one-business-day reply promise. Against that: no address, no legal entity, no people, and no visible dates on blog posts. |

**AI citation readiness: about 65/100.** Answer-first "Quick answer" blocks, tables and dated sourced facts are all citable. The ceiling is set by entity clarity (no people) and by the collapsed FAQ answers.

---

## 2. Page-by-page

### 2.1 Homepage (`home.html`): **UPDATE (H1/hero REWRITE)**
- **Intent match:** weak. The title "ZSpace Labs | Web, App, Shopify & AI Automation Studio in India" is fine. The server-rendered H1 is **"Meet ZSpace Labs, your website builder."** (the first phrase of the rotating `phrases` array in `src/components/home/Hero.tsx`). "Website builder" is the query space of Wix, Squarespace and Hostinger, and the service page itself says those tools are the cheaper choice for simple sites. The `aria-label` gives a different H1 text ("your website, app, store and automation builder"). The homepage got only 11 impressions in GSC.
- **E-E-A-T:** "We don't just build. We think." and "More than just technical skill. Clear thinking / Thoughtful design / Solid technology…" are generic agency slogans with no evidence. The page never mentions the UAE, UK, Australia or Singapore, although the About page and service pages do.
- **Thin or generic:** about 700 words of real copy, which passes the 500-word floor. A large share of the extracted text is UI mock-up content (e.g. "Hilltop Roasters $18.00", "NOVA BANK … A. SHARMA Balance $12,480.50", "MRR $48.2k +12%", "Line efficiency 82%"). These are marked aria-hidden or role="img" with an "Example interface" label, so the risk is low, but text extractors and LLMs do pick them up.
- **Unsupported claims:** none that are serious. "Stay beyond launch" and "Long-term thinking" are unproven but harmless.
- **FAQ:** 11 questions, but only the answer to Q1 is in the server HTML. `Faq.tsx` mounts an answer only while it is open (`{isOpen && …}`). The answers exist only in JSON-LD, so the cost answer ("It depends on the scope…") is invisible to users who don't click and to crawlers.
- **Conversion:** good. "Start a Project", "Start a Conversation", connect@zspace.in, a mock brief form and a "reply within one business day" promise.

### 2.2 About (`about.html`): **UPDATE**
- **Intent:** matches (brand and navigational).
- **E-E-A-T:** the "Company facts / How we publish" block is a real trust asset: "We don't publish invented statistics, testimonials, client logos or awards." and "Our agency comparisons say clearly that we published them and list ourselves first." Three gaps remain:
  - No people: no founder, team size, roles, years of experience or LinkedIn profiles. The project-board mock-up shows initials (AK, SR, MJ, DV, PN) but no one is named.
  - No founding year, legal entity name, registered city or GST/company number.
  - "We build things worth using" and "Technology isn't the hard part" are slogans.
- **Thin:** about 600 words of copy, which passes the 400-word floor, but most of it is philosophy.
- **Claims:** none fabricated. The "58% done" project mock-up is decorative.
- **Conversion:** fine ("Talk to ZSpace Labs").

### 2.3 Contact (`contact.html`): **KEEP (minor)**
- Clear form with a three-step "what happens next" and the line "no automated sales sequence". The budget bands are USD only ("Under $5k … $40k+"), although India is the primary market. Consider INR and AED or neutral bands. There is no business address or phone number, which is acceptable for remote-first but weakens Trust a little.

### 2.4 Services hub (`services.html`): **EXPAND**
- About 250 words of real copy. The H1 "Built around your problems." carries no keywords. The page is six cards plus "More than a menu of services", with nothing to help a buyer choose a service. It says "businesses across India" only.
- Card names differ from the service page H1s: "Shopify Store Setup & Optimization" vs "Shopify development company", and "CRO Audit" vs "CRO agency".

### 2.5 `/services/ai-automation`: **UPDATE + EXPAND (highest-value page: 289 impressions, position 32)**
- **Intent:** "ai automation services" and "ai automation agency (india)" are commercial-investigation queries. The page is the right type, a service page, and the title and H1 contain the terms. The H1 is a keyword stub glued to a tagline: **"AI automation agency in India: Less repetitive work. More room to move."** That reads unnaturally. The keyword is the `eyebrow` rendered inside the H1 (`eyebrowInHeading` in `ServiceDetail.tsx`).
- **Strengths:** this is the best copy on the site. It is specific and non-hype: "AI is the right tool when a step involves reading unstructured input… Plain workflow automation is better, cheaper and more predictable when the rules are already clear." The "Not the right fit" section reads as written by a practitioner ("Automating a moving target mostly automates the confusion"). The approval and logging copy is concrete. The market and regulation notes are dated and checked: the DPDP Rules phase-in to May 2027 and APP 1.7–1.9 from 10 December 2026 both match my understanding.
- **Gaps:**
  1. There is no list of "AI automation services" as named service lines. Use cases appear twice ("What we typically build" duplicates the four Across-India cards: lead capture, documents, support, approvals).
  2. Cost and timeline drivers exist only in a collapsed FAQ ("Mainly the number of systems to connect, the quality… We usually scope one workflow first…"), which is invisible in the HTML.
  3. There is no engagement model, such as a pilot workflow followed by expansion, and no typical first-project shape.
  4. There is no proof and no named team. "Real project shapes" is the only nod to experience.
  5. WhatsApp is mentioned for lead capture, but there is no section on WhatsApp, email or CRM integrations by name (HubSpot, Zoho, Salesforce, Google Sheets), which Indian buyers search for. Name only the tools the team has actually used.
  6. The CTA heading renders as "Ready to talk about **ai automation**?" because `service.name.toLowerCase()` is used in `src/app/services/[slug]/page.tsx:116`. The same bug produces "ui/ux design" and "cro audit".
- **Unsupported claims:** the hero widget shows "Workflow run 2.4 s". It is decorative and marked as an example, so the risk is low.
- **Conversion:** good (Start a Project, email, a reply-then-call-then-fixed-estimate promise). It would be stronger with a low-commitment offer such as "Send one workflow; we'll tell you if it's worth automating", which only restates what the page already promises.

### 2.6 `/services/website-development`: **EXPAND**
- **Intent:** the title targets "Web development company in India". GSC shows commercial demand this page does not address: "saas website development" (pos 22, served by a blog), "legacy software development company" (pos 73), "customer portal development australia" (pos 93) and "b2b ecommerce website development". "Custom web applications: Portals, dashboards and internal tools" is the only nod to these.
- **E-E-A-T:** good specifics: "tested on mid-range Android phones", UPI, hreflang for regional languages, and "Wix, Squarespace or a Shopify theme will cost less than a custom build". The FAQ states concrete timelines ("four to eight weeks… eight to fourteen weeks"), but they are collapsed.
- **Claims:** the hero mock-up shows "Core Web Vitals Passed, LCP 1.8 s, INP 120 ms, CLS 0.02". It is decorative and labelled as an example. Do not let it become a claim.
- **H1:** "Web development company in India: A web development partner for businesses ready to build better." repeats "web development" and reads awkwardly.

### 2.7 `/services/shopify-development`: **UPDATE**
- India-specific copy (COD, UPI, pin-code checks, GST) is strong and demonstrates expertise. It does not address "custom shopify app development" (pos 67): it mentions "app integration" and "Shopify APIs" only. There is no B2B or wholesale coverage. "Do you work with Shopify Plus?" sits in a collapsed FAQ. **Add these sections only if the team actually delivers them.**

### 2.8 `/services/mobile-app-development`: **KEEP / light UPDATE**
- Solid, specific trade-off content (React Native vs native, Android-first testing, OTP login, PWA instead of an "app wrapper"). "India is one of the largest smartphone markets in the world, and most of it runs on Android" is true but unsourced, so add a source or soften it. Same H1, FAQ and proof gaps as the other service pages.

### 2.9 `/services/ui-ux-design`: **KEEP / light UPDATE**
- Good boundaries ("New colours, a logo or a brand identity is a branding project"). Generic lines include "Good design is not decoration" and "Our design decisions are grounded in usability, not just visual trend." No portfolio is the main gap for a design query, because design buyers expect to see work. Consider publishing process artefacts that need no client permission, such as a component-library sample or an anonymised flow map. Do not invent clients.

### 2.10 `/services/cro-audit`: **KEEP / light UPDATE**
- The best honesty signal on the site: "We don't promise percentage lifts before seeing your data… many apparent conversion problems turn out to be tracking problems." The slug is `cro-audit` but the H1 and title say "CRO agency", while the hub card says "CRO Audit". Pick one framing. A sample audit table of contents would be a strong Experience signal and needs no client data.

### 2.11 Industries hub (`industries.html`): **UPDATE**
- The marquee repeats 35 industry names twice (duplicated text). The "Also active in" list names **23 sectors with no pages**, including Pharmaceuticals, Cybersecurity, Gaming and Nonprofits. That is an unverifiable activity claim for a studio with no published work. Either reword it to "We also take on projects in…" or keep only sectors the owner confirms. The 12 interactive panels are useful but generic ("A store that looks the same as every other brand").

### 2.12 `/industries/real-estate` and `/industries/manufacturing`: **EXPAND**
- About 300 words of unique main content each. Copy is generic and could fit any agency: "the businesses winning right now are the ones whose digital experience is as considered as the property itself." The use-case H3s ("Property marketplace with map-based search…") have no body text. Only the first FAQ answer is in the HTML.
- Manufacturing has the more commercial angle ("Customer and distributor portals", "B2B website") and links to the B2B ecommerce, ERP integration and supplier portal guides. It should become the hub that funnels "b2b ecommerce website development" and "portal" demand to `/services/website-development`.
- Expansion that needs no invented facts: requirements checklists such as RERA project-page details (India) or listing data feeds, integration lists (CRM, ERP, Tally/SAP), and a "what a first project looks like" section.

### 2.13 Blogs

| Post | Words* | Intent | Notes | Class |
|---|---|---|---|---|
| `legacy-software-modernization-australia` | ~2,900 | Informational. It ranks for the commercial query "legacy software development company" (pos 73), which is a mismatch: the query wants a vendor page. | Excellent depth: 7 Rs table, strangler fig, PHP EOL dates "checked in November 2026", rollback plans, and a labelled hypothetical Adelaide distributor. Verify the **"The OAIC received 1,205 notifications in 2025"** figure and link the OAIC report. Payday Super from 1 July 2026 and Windows 10 EOL on 14 Oct 2025 are correct. The only CTA is generic. | KEEP (add a service bridge plus a source link) |
| `membership-management-software-australia` | ~1,750 | Informational/commercial | Good jurisdictional detail (Vic AIR Act, ACNC). **"Card surcharges on eftpos, Visa and Mastercard ended on 1 October 2026"** is a high-stakes dated regulatory claim that I could not verify. Confirm it against the RBA's final decision and cite it. | UPDATE (verify) |
| `supplier-portal-development` | ~1,170 | Commercial investigation | Answer-first and accurate: MSMED 45/15 days and the Income-tax Act 2025 reference are right, Modern Slavery Act >A$100m is right. It mixes India and Australia in one post. No service CTA beyond the footer. | UPDATE (add "how we build it" and link to web-dev service) |
| `build-vs-buy-ai-agents` | ~1,200 | Commercial investigation | Strong and current vendor taxonomy (Agentforce, Copilot Studio, Bedrock AgentCore, Claude Agent SDK). A **title-case "Four Options, Not Two" section is appended after "How to decide"**, a visible patch seam that also contradicts the "three categories" framing earlier in the post. | UPDATE (merge the seam) |
| `business-rules-engine` | ~1,950 | Informational | Deep and accurate (Rete/Forgy 1982, Camunda 7 CE EOL Oct 2025, Apache KIE incubator). **"The OMG adopted DMN 1.6 in September 2026"** cannot be verified from my knowledge. Link the OMG page. | KEEP (verify one fact) |
| `best-ai-automation-agencies-in-india` | ~1,850 | Commercial (listicle) | See section 3. | REWRITE / restructure |
| `best-ui-ux-design-agencies-in-india` | ~1,850 | Commercial (listicle) | See section 3. Self-contradiction: the conclusion says "Ask each agency to walk you through one case study from research to launch," and ZSpace, listed #1, has none. | REWRITE / restructure |
| `saas-website-development` | ~1,550 | Commercial investigation (pos 22, the most winnable query) | The **older style shows**: 10 title-case H2s of 1 to 3 sentences each ("Integrations", "Documentation", "Multiple Buyer Personas"), followed by appended sentence-case sections with tables. Generic: "Vague, buzzword-heavy positioning is a common, avoidable failure mode." No examples, screenshots or specifics. Mid-article CTAs exist, which is good. | EXPAND / REWRITE the first half |

*Main-content words excluding nav, footer and the related-cards block.

**No fabricated client stories found** in the audited posts. Every example is explicitly labelled "Hypothetical example" or "An illustrative scenario, not a client case." Statistics sampled across the corpus are attributed to named sources: DataReportal, 6sense 2025, NN/g, Baymard, Australia Post eCommerce Report 2026, Deloitte Digital Consumer Trends 2026, and Google Play vitals thresholds of 1.09% and 0.47%. None look invented, but many are dated after my knowledge cutoff and have no inline link, so a source-link pass is worthwhile. One awkward phrasing: "23.0 million mobile connections, about 202% of the population" (UAE posts) is a correct DataReportal-style metric but reads like an error. Rephrase it as "about two connections per person".

---

## 3. The "best agencies" listicles: risk assessment

**Footprint:** 12 `best-*` posts. Eleven are agency lists: India-level for AI automation, CRO, mobile, Shopify, UI/UX and web, plus city or state variants for Ahmedabad, Delhi NCR, Gujarat, Mumbai and Bengaluru. Service pages link to them in the "Guides" module, and the AI automation page lists "5 Best AI Automation Agencies in India" as guide #5.

**What is done well:**
- The disclosure is explicit and repeated: "ZSpace Labs wrote this article and appears first in it as the publisher's featured entry. That ordering reflects who published the list, not an independent ranking."
- ZSpace's own entry includes "Where it is not the best fit: ZSpace Labs does not publish automation case studies…".
- Competitors are described only from their own sites, with a check date ("checked… on 4 October 2026"), and their self-published figures are deliberately excluded.
- Each list has neutral selection criteria and buyer questions.

This is about as honest as a self-ranked list can be.

**Why it is still risky:**
1. **Self-serving at scale.** The same skeleton (Quick answer → Editorial disclosure → How we chose → At a glance → 1. ZSpace Labs → …) is repeated across 11 lists, and the disclosure and criteria paragraphs are verbatim boilerplate. Raters and Google's reviews guidance look for first-hand evaluation. These lists explicitly have none: "described only from their own official websites". So the format is a directory with a self-promotion slot dressed as a "best" review.
2. **#1 placement with zero evidence.** ZSpace is the only entry with no published track record, yet it sits first in the H1 promise "5 Best…". The disclosure does not change what the title claims.
3. **City and state variants** (Ahmedabad, Delhi NCR, Mumbai, Bengaluru, Gujarat) for a remote-first studio with "no local offices" are close to doorway pages for local commercial queries.
4. **Reputation risk:** competitors such as Fractal (listed) may object to being used as filler around a self-promotion. The legal risk is low because the descriptions are factual and sourced.
5. **Commercial ceiling:** these posts are unlikely to rank against established review platforms (Clutch, GoodFirms, DesignRush) for "best X agencies in India". The downside sits on the same domain as the service pages they are meant to support.

**Recommendation:** restructure rather than delete.
- (a) Retitle to "AI automation companies in India: a comparison" or "How to choose…", dropping "Best".
- (b) Remove ZSpace from the numbered list and put it in a clearly separated "About the publisher" box after the list. Alternatively, list it last or unnumbered.
- (c) Consolidate or noindex the 5 city/state variants into the national lists, keeping them only if they contain real local substance.
- (d) Fix the UI/UX "ask for a case study" contradiction by acknowledging it in ZSpace's own box.
- (e) Keep the methodology and disclosure, which are good.

---

## 4. Sitewide: is the blog corpus templated mass-produced content?

**Yes, the signals are strong.** Quality per post is above average for scaled content, but the pattern is clear:

| Signal | Evidence |
|---|---|
| Publishing velocity | `date:` fields in `src/lib/blog-data-*.ts`: **427 posts in Sep 2026, 582 in Oct, 31 in Nov**, against fewer than 25 per month before. That is about 19 posts a day. |
| Identical skeletons | Of 1,139 blog files: "Common questions." 1,133; "Conclusion" 1,079; **first H2 = "Quick answer" in 833**; "Common mistakes" 649; "Worked example" 296; "Key takeaways" 249; "Sources" 226; "Where this fits" 208; "Advantages and limitations" 125. **142 posts** share the full AI-cluster skeleton (Quick answer → Where This Fits → … → Advantages and Limitations → How to … Step by Step → Worked Example → Common Mistakes → Conclusion). |
| Programmatic families | 26 `ai-agents-in-<industry>` posts, each about 20 H2s (e.g. "AI Agent Opportunity Matrix for Pharmaceuticals", "Future Opportunities", "KPIs and How to Measure ROI"). 12 `ai-automation-<x>`. **73 `-australia` and 25 `-uae` geo posts**, of which only 4 and 2 have a generic twin, so they are mostly unique topics in a geo template. |
| Verbatim boilerplate | The same 10-sentence step list ("Pick one process worth automating — not a whole department." … "Extend the proven pattern to adjacent workflows, one at a time.") appears in **30 posts**. A 9-step CRO list appears in 19, and another in 16. "An illustrative scenario, not a client case:" appears in about 296. |
| Section depth | 758 of 1,139 posts are under 1,500 words and 240 under 1,000. The older-style posts (`how-to-make-a-website-mobile-friendly`, 850 words, 14 H2s) have 1 to 3 sentences per H2. |
| Patch seams | Title-case and sentence-case H2s are mixed in the same post (`saas-website-development`, `build-vs-buy-ai-agents` "Four Options, Not Two", `ai-poc-vs-pilot-vs-production` repeating "Designing the Proof of Concept" near the end). |
| No accountability | **No visible byline and no visible published or updated date** on any post (`src/app/blogs/[slug]/page.tsx` emits dates only in metadata and JSON-LD, with `author: {"@id": ORG_ID}`). Yet the posts lean on dated regulations ("checked November 2026"). |
| Meta = dek | Each post's subtitle repeats its meta description verbatim. This is minor. |

**Mitigating factors:** the facts are generally accurate, attributed and date-stamped. The posts are not spun duplicates, since each topic is distinct. They take honest positions and never invent clients. So this is not low-effort spam. But Google's scaled-content-abuse policy targets creating many pages "primarily to manipulate rankings" regardless of method, and the core helpfulness signals are site-level. About 1,000 posts in 10 weeks from a small studio, with no author and no first-hand experience, gives very weak answers to "Who/How/Why". 13k impressions and 43 clicks suggest the corpus is mostly not earning its keep, and the weak site-level signal can hold back the six service pages.

**Recommendations:**
1. Add a visible "Published / Updated" date and a named author or reviewer to every post, using real people only.
2. Prune or consolidate: noindex or 410 posts with zero impressions after 90 days, and merge overlapping families (e.g. the 26 ai-agents-in-X into about 6 sector hubs).
3. Pause new volume and put the effort into the 30 to 50 posts that map to service queries.
4. Fix the patch seams and the duplicated step lists. Render the shared step lists as one linked component or guide instead of inline copies.

---

## 5. Top 10 copy and structure changes (service pages + homepage), no invented facts

Ordered by expected value. Items marked **[owner confirm]** need a yes/no from the owner on whether the service is offered. Nothing needs invented numbers.

1. **Make all FAQ answers server-rendered.** In `src/components/Faq.tsx` (homepage, via `src/components/home/FaqSection.tsx`) and `FaqBlock` in `src/components/detail/DetailKit.tsx` (service and industry pages), answers mount only when open (`{isOpen && …}` inside `AnimatePresence`), so 10 of 11 homepage answers and 8 or 9 of each service page's answers, including the cost and timeline answers, are absent from the HTML and visible only in JSON-LD. Render every answer and collapse it with CSS (`<details>/<summary>` or `hidden` + `aria-expanded`). This is the cheapest content win on the site.
2. **Fix the homepage H1.** In `src/components/home/Hero.tsx`, replace the rotating `<h1>` ("Meet ZSpace Labs, your website builder.") with a static descriptive H1 such as "ZSpace Labs: web, app, Shopify and AI automation studio". Move the `AnimatedHeroWord` rotation into the subline or a `<p>`, and delete the "your website builder" phrase, which points at DIY-builder intent. Add one line naming the markets ("for businesses in India, the UAE, the UK, Australia and Singapore") using `markets` from `src/lib/site.ts`.
3. **Clean up the service H1s.** `ServiceDetail.tsx` renders `india.eyebrow` + `india.h1` as one H1 ("AI automation agency in India: Less repetitive work. More room to move."). Make the H1 just the keyword phrase ("AI Automation Agency in India"), and render the tagline (`india.h1` in `src/lib/services-data.ts`) as a `<p>` or a subheading. Apply this to all 6 services.
4. **AI automation: add an explicit "AI automation services we offer" section.** In `services-data.ts` (ai-automation, new `offerings` field) and `ServiceDetail.tsx`, name the service lines the page already describes as H3s with 2 to 3 sentences each: workflow automation, AI agents with approvals, document and email processing, lead capture and CRM automation, support triage, and integrations and monitoring. Replace the duplicated "What we typically build" block (it repeats the Across-India cards) so the page covers "AI automation services" and "agency" queries without repeating itself.
5. **Add a visible "What affects cost and timeline" section on every service page** (new `costFactors` field in `services-data.ts`, rendered before the FAQ in `ServiceDetail.tsx`). Build it from copy that is already published: the cost-driver FAQ answers, "fixed estimate per phase after a short discovery call", and the stated timelines ("four to eight weeks… eight to fourteen weeks" for web; "We usually scope one workflow first" for AI). Link the existing cost guides (`website-development-cost`, `mobile-app-development-cost`, `shopify-development-cost`).
6. **Add a "How an engagement runs" step section** with deliverables per step. Expand the `approach` array in `services-data.ts` from 3 principles to a 5 or 6-step process, reusing promises the site already makes: reply with an initial view → short call → written scope with time zone, currency and contract terms → fixed estimate per phase → build with demos on a shared board → handover docs and monitoring. Use the same steps in `src/components/home/ProcessSection.tsx` so the homepage and service pages agree.
7. **Website development: add use cases that match GSC demand** [owner confirm]. In the `website-development` entry of `services-data.ts` (`useCases`, `audience`, `guides`), add "SaaS marketing sites and web apps", "Customer, supplier and B2B portals", "Legacy system modernisation and replatforming" and "B2B ecommerce", each with 2 to 3 sentences and links to the existing posts `saas-website-development`, `customer-portal-development-australia`, `supplier-portal-development`, `legacy-software-modernization-australia` and `b2b-ecommerce-website-development`. This gives the commercial queries at pos 22, 73 and 93 a vendor page to land on.
8. **Shopify: cover custom apps and B2B** [owner confirm]. In the `shopify-development` entry, add "Custom Shopify apps and integrations" (Admin API, checkout and functions extensions, ERP and 3PL sync) and "B2B/wholesale and Shopify Plus" to `useCases` and `whatWeDo`, and move the Plus answer out of the collapsed FAQ. This targets "custom shopify app development" (pos 67).
9. **Add "Who you'll work with" and proof-without-claims blocks.** Add real names, roles and LinkedIn links on `src/app/about/page.tsx` (with `src/components/about/*`), plus Person schema. Add a short block on each service page above the CTA. Where there are no case studies, publish **sample deliverables** that need no client data: a CRO audit table of contents, an automation workflow-map template, and a scope-document outline. These turn "Deliverables" lists into Experience evidence. Also add founding year and legal entity to "Company facts".
10. **Make the services hub a decision page** (`src/app/services/page.tsx`, `src/components/services/ServicesSections.tsx`). Give it a keyword H1 ("Web, app, Shopify, UI/UX, AI automation and CRO services"), a "Which service do I need?" table mapping problem → service → typical first step (built from the existing `problems` and `notFor` data), and the 5-market line. Align card names with the service page H1s. While in that area, fix the lowercased CTA (`Ready to talk about ${service.name.toLowerCase()}?` in `src/app/services/[slug]/page.tsx:116`) by adding a `ctaLabel` field.

**Also worth doing (outside the top 10):** add INR bands to the contact budget field. Reword the industries hub "Also active in" list (`src/lib/industries-data.ts` / `src/components/industries/*`). Expand the real-estate and manufacturing pages with requirement checklists and integration lists. Restructure the 11 agency listicles as in section 3.
