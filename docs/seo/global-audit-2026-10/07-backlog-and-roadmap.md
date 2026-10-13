# 07 — Prioritised Implementation Backlog and 30/60/90-Day Plan

Effort: S = under half a day, M = 1–3 days, L = more than 3 days. "Done" means implemented locally in this branch and verified (see README §QA). **Nothing is deployed.**

## Phase 1: critical foundations

| ID | Task | Priority | Business impact | SEO impact hypothesis | Evidence | Effort | Dependencies | Owner / component | Validation | Risks | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1-1 | Stop the full article dataset (12.8 MB chunk, ~3.7 MB transferred) loading in the browser on `/blogs` and every article (via the `/blogs` prefetch) | Critical | Faster pages, lower bounce on mobile | Better LCP/INP → page experience; less render cost for Googlebot | Lighthouse JS 4.2 MB → 0.48 MB; `/blogs` LCP 29.5 s → see README | S | — | `BlogExplorer.tsx`, `blog-categories.ts` | Build chunk sizes; Lighthouse | None found | **Done** |
| P1-2 | Make hero text visible from first paint (CSS entrance instead of JS-gated `opacity:0`) | Critical | Content visible ~5 s sooner on mid-range mobiles | LCP moves from "poor" toward "good" | LCP render delay was 100% of LCP | M | — | `globals.css`, `Aesthetic.tsx`, 9 hero components | Lighthouse (DevTools throttling, median of 3) | Slight visual change: hero text slides in without fading | **Done** |
| P1-3 | Record successful enquiries in GA4 (`generate_lead` after server confirmation) | Critical | Organic → lead attribution becomes possible | Lets SEO be judged on leads, not traffic | No conversion event existed | S | Mark as a key event in GA4 | `ContactForm.tsx` | Manual test after deploy (GA4 DebugView) | Counts only delivered leads (intended) | **Done** (owner step pending) |
| P1-4 | Fix the lead-data skew (default "need" = Website Development) | High | Accurate demand data per service | — | Form default | S | — | `ContactForm.tsx`, `validations.ts` | Form test | None | **Done** |
| P1-5 | Baseline security headers (nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy) | High | Hardening; clickjacking protection | None directly | Live headers had none | S | — | `next.config.ts` | `curl -I` on local build | Embedding the site in third-party iframes would break (none known) | **Done** |
| P1-6 | Privacy policy rewrite: name GA4, Google Workspace, Vercel; retention; rights; international transfer; analytics opt-out | **High** | UK/AU/IN compliance; trust | Trust signal | 05 §UK, 03 §L6 | M | **Legal/owner review** | `src/app/privacy/page.tsx` | Legal sign-off | Inaccurate legal text is worse than none, so must be reviewed | Open: needs approval |
| P1-7 | Analytics consent / opt-out (UK DUAA minimum: notice + opt-out; conservative: banner + Consent Mode v2) | High | Compliance | None (may reduce measured traffic) | 05 §UK | M | P1-6 decision | layout, new component | Test that GA doesn't fire after opt-out | Changes production analytics | Open: needs approval |
| P1-8 | Pause bulk publishing; adopt the publishing checklist | **High** | Protects the whole domain's search reputation | Reduces the risk under helpful-content / scaled-content signals | ~937 articles in Sep–Oct 2026, no authors (04 §F1) | S | Business decision | Content process | — | Slower content output | Open: needs approval |
| P1-9 | Hosting: redirect `http://zspace.in` directly to `https://www.zspace.in` (currently 2 hops) | Medium | — | Removes a redirect hop | `curl` chain | S | Vercel dashboard | Hosting | `curl -I` | None | Open (platform setting) |
| P1-10 | Connect Search Console + GA4 access; record the baseline | **High** | Every later decision depends on it | — | No data available | S | Owner access | — | Baseline doc | — | Open (owner) |

## Phase 2: commercial pages and contact journey

| ID | Task | Priority | Business impact | SEO hypothesis | Effort | Dependencies | Component | Validation | Risks | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| P2-1 | "Not the right fit if…" on 6 service pages | High | Fewer unqualified leads; more trust | Distinctive, helpful content | S | — | `services-data.ts`, `ServiceDetail.tsx` | Visual review | Copy needs owner review | **Done** (review) |
| P2-2 | CTA states the real next steps (reply → call → fixed estimate per phase) | Medium | Lowers enquiry anxiety | — | S | — | service page | — | — | **Done** |
| P2-3 | Optional Website field; "Budget (USD)" label; privacy notice at collection | Medium | Better qualification | — | S | — | `ContactForm.tsx` | Form test | — | **Done** |
| P2-4 | **2–3 real case studies** + a "Work" section on service pages | **Critical** | The biggest conversion and authority gap | Original first-hand content; links | L | Client permission | new route + data | Rich results test (Article) | None if facts are real | Open: blocked on business |
| P2-5 | Real author bylines + author page + `Person` markup | High | Trust | E-E-A-T trust; clear "who" | M | Real people agree to be named | blog template, JSON-LD | Rich Results test | Never fabricate | Open: blocked on business |
| P2-6 | Homepage H1 positioning (replace "your website builder") | Medium | Clearer value proposition | Clearer page topic | S | Brand approval | `Hero.tsx` | — | Brand change | Open: needs approval |
| P2-7 | Reframe 6 `best-*-in-india` lists (unranked, no self-#1) and merge 5 city lists with 301s | High | Lower reputational/SEO risk | Avoids the reported self-listicle pattern; removes city-intent pages without a presence | M | Approval | blog data, `next.config.ts` redirects | Redirect checks, link crawl | Some rankings for those URLs may shift | Open: needs approval |
| P2-8 | Publish ZSpace's own typical cost/timeline ranges on service pages and cost guides | Medium | Pre-qualifies buyers | Answers the main commercial question directly | S | Owner numbers | services data | — | Publishing prices is a business decision | Open |
| P2-9 | Confirm or remove "reply within one business day" | Medium | Promise accuracy | — | S | Owner | contact copy | — | — | Open |
| P2-10 | Verified directory profiles (Clutch / GoodFirms) with real client reviews | Medium | Third-party proof | Entity corroboration | M | Clients willing to review | off-site | — | — | Open |

## Phase 3: international and industry

| ID | Task | Priority | Evidence | Effort | Dependencies | Status |
|---|---|---|---|---|---|---|
| P3-1 | **Domain decision**: stay `.in` (India-first) or migrate to a gTLD for global targeting | High | `.in` is a country signal (Google docs) | Decision: S; migration: L | Business strategy; revenue by market | Open: decision |
| P3-2 | Service-page wording for non-India visitors (retitle or an additive "Working with teams outside India" block) | High | ~185 AU/UK/UAE articles link to India-worded pages | S–M | P3-1; real facts (currency, hours, contracts) | Open |
| P3-3 | `/uae` page (conditional) | Medium | 05 §UAE | M | UAE clients confirmed; honest delivery facts | Open |
| P3-4 | Freeze AU/UK/SG new articles; refresh only | Medium | 04 §F1 | S | — | Recommended |
| P3-5 | Saudi / Qatar / Singapore pages | — | 05 §C | — | — | **Rejected / deferred** |

## Phase 4: content refresh and authority

| ID | Task | Priority | Effort | Dependencies | Status |
|---|---|---|---|---|---|
| P4-1 | Quality-tier review of all articles using 90 days of Search Console data (keep / improve / merge / noindex) | High | L | P1-10 | Open |
| P4-2 | Refresh cost guides and AI hub guides (04 §4) | Medium | M | P2-8 | Open |
| P4-3 | Time-bound articles: UAE e-invoicing integration (if UAE confirmed); India DPDP website readiness | Medium | M | Overlap check; P3-3 | Open |
| P4-4 | Re-verify every regulatory date in the regional articles against primary sources | Medium | M | — | Open |
| P4-5 | Authority: contribute genuinely useful material (e.g. an open-source Next.js/Shopify utility, or a write-up of this site's own DPDP/DUAA consent implementation) to communities and partner ecosystems (Shopify Partner directory if eligible, Vercel/Next.js showcases if eligible) | Medium | M | Real work to show | Open |
| P4-6 | Nonce-based Content-Security-Policy | Low | M | Testing with GA4 | Open |
| P4-7 | Reduce `/blogs` HTML (926 KB; it passes ~1,030 summaries to the client explorer). Paginate or load the list on demand. | Low–Medium | M | — | Open |

## 30 / 60 / 90 days

**Days 1–30**
- Review and deploy this branch (P1-1 to P1-5, P2-1 to P2-3). Then mark `generate_lead` as a key event and test it in DebugView.
- Connect Search Console and GA4 and record the baseline (P1-10). Submit the sitemap. Fix the redirect hop (P1-9).
- Decide and act on the privacy policy and consent (P1-6, P1-7). Pause bulk publishing (P1-8).
- Owner decisions: the README questions Q1–Q5.

**Days 31–60**
- First case study and author bylines (P2-4, P2-5).
- Reframe and merge the listicles (P2-7). Update the homepage H1 (P2-6). Publish own price/timeline ranges if approved (P2-8).
- Domain decision (P3-1). If UAE is confirmed, draft `/uae` (P3-3).

**Days 61–90**
- With roughly 60–90 days of Search Console data: start the quality-tier review (P4-1).
- Refresh the cost and AI guides (P4-2). Publish the time-bound articles that pass the checklist (P4-3).
- Review: impressions and clicks per service page by country, `generate_lead` by landing page, qualified-lead rate. Adjust Phase 3 based on where qualified leads actually come from.
