# ZSpace Labs: Global SEO, AEO/GEO and Inbound Lead Audit (October 2026)

Prepared 12 October 2026. Scope: www.zspace.in, its repository, and the target markets India, UAE (plus the wider Middle East), Australia, UK and Singapore. **Nothing has been deployed.** All code changes are uncommitted in the working tree on `master` for review.

## Deliverables in this folder

| # (brief) | Deliverable | File |
|---|---|---|
| 1, 19–22 | Executive summary, files changed, QA, limitations, 30/60/90 | this README |
| 2 | Full URL inventory (1,062 rows: type, intent, geography, title, H1, description, words, links, schema, issues, action) | `01-inventory.csv` |
| 3, 15 | Technical SEO, performance before/after, structured data, security | `02-technical-audit.md` |
| 4, 16, 17 | Service pages, lead journey, analytics and attribution | `03-service-pages-and-conversion.md` |
| 5, 12 | Content and cannibalisation audit; refresh and new-content roadmap | `04-content-audit.md` |
| 6, 7 | Market research (6 markets), competitors, official guidance, with sources and dates | `05-market-research.md` |
| 8–11, 13, 14 | Keyword/intent map, country and city targeting, URL/hreflang plan, AEO/GEO, internal linking | `06-international-keywords-aeo.md` |
| 18, 22 | Prioritised backlog (phases 1–4) and 30/60/90 days | `07-backlog-and-roadmap.md` |
| 3, 4, 18, 21 | Blog-by-blog audit: method, change log, verified corrections | `08-blog-audit-progress.md`, `08-blog-audit-signals.csv`, `08-blog-decisions-notes.tsv` |
| 4 | Per-article decision, rationale, status and validation (all 1,030) | `09-blog-by-blog-report.csv` |

Labels used throughout: **[Official] [Industry] [Vendor] [Inference]**. No search volumes, traffic, rankings or conversion rates are stated anywhere, because no Search Console, GA4 or keyword-tool data was available.

## Executive summary

**Technical foundations were already sound.** All 1,062 URLs return 200. There are no duplicate titles or descriptions, canonicals are self-referencing, the sitemap is complete, JSON-LD is valid, there are no orphans and no broken links. Earlier work (3 Oct 2026) holds up.

**Performance had two severe defects. Both are now fixed and measured.**
1. A client component imported the entire article corpus, so every article page and `/blogs` loaded a 12.8 MB chunk (~3.7 MB transferred).
2. Hero headlines were hidden until JavaScript hydrated.

Under real mobile throttling, LCP went from **6.8–29.5 s to 1.9–2.1 s**, and Lighthouse performance from **65–73 to 92–97** across six representative pages. This is lab data; field Core Web Vitals will only show after deployment.

**The largest risks are content and evidence, not code:**
- ~**937 long-form articles were published in Sep–Oct 2026**, all attributed to the organisation with no named authors. That matches several of Google's own warning signs (extensive automation across many topics; content made primarily for search). Sibling articles are *not* near-duplicates (9–19% shared 8-word sequences), but the volume and anonymity are the risk. → Pause bulk publishing; add real authors; review with data.
- **No proof** is published: no case studies, testimonials, team or reviews. ZSpace says so honestly. It is the biggest gap against every competitor in every market and can't be closed with more articles.
- **11 self-ranked "best X in [India/city]" lists** put ZSpace first. Analysts (not Google) link this pattern to 2026 visibility losses, and the city lists conflict with the site's own correct "no city pages without a presence" policy.

**International reality:** `.in` is a ccTLD that Google treats as India-targeted ([Official]). All six service pages are explicitly India pages. Meanwhile ~185 AU/UK/UAE articles send readers to "for businesses across India" pages. The research supports:
- **India first.**
- **UAE as the one conditional regional page**, if UAE clients are real. E-invoicing (Phase 1 goes live 1 Jan 2027) is a concrete, service-fit opening.
- **Australia, UK and Singapore: no new regional pages or articles** until the domain question and real delivery evidence are settled.
- **Saudi Arabia deferred** (RHQ and local-content rules); **other GCC markets rejected for now**.

No city pages anywhere. No hreflang, because there are no equivalent regional versions.

**Lead generation:** GA4 recorded no conversions, and the form tagged every untouched enquiry as "Website Development". Both are fixed: `generate_lead` fires only after the server confirms delivery, and the service is preselected from the referring service page. There is still **no consent/opt-out for GA4** and the **privacy policy is thin**. That is a compliance gap for UK visitors (Data (Use and Access) Act) and for India's DPDP duties from May 2027. It needs a legal decision.

## What I changed (and why)

| File(s) | Change | Reason |
|---|---|---|
| `src/components/BlogExplorer.tsx`, `src/lib/blog-categories.ts`, `src/lib/blog-data.ts` | Moved the `categories` constant out of `blog-data.ts` (re-exported for compatibility) | Stops the full article dataset being bundled for the browser (P1-1) |
| `src/app/globals.css`, `src/components/ui/Aesthetic.tsx` | `hero-rise` / `hero-mask` CSS entrance + `heroRise()` / `HeroLines` helpers | Hero text visible from first paint; reduced-motion respected (P1-2) |
| `src/components/home/Hero.tsx`, `detail/DetailKit.tsx`, `blog/BlogKit.tsx`, `contact/ContactSections.tsx`, `about/AboutSections.tsx`, `services/ServicesSections.tsx`, `industries/IndustriesSections.tsx`, `PageHero.tsx`, `src/app/blogs/[slug]/page.tsx` | Hero headline, intro, breadcrumbs and CTAs use the CSS entrance instead of JS-gated `opacity:0` | LCP fix (P1-2) |
| `src/components/home/Hero.tsx` | "explore our work" → "explore our services" | The link went to `/services`; there is no portfolio |
| `src/components/ContactForm.tsx`, `src/lib/validations.ts`, `src/lib/leads.ts` | Default need "Not sure yet" + preselect from `?src=/services/…`; optional Website field (included in the lead email); "Budget range (USD)" label; privacy notice at submit; GA4 `generate_lead` only after a confirmed send | Lead data quality, qualification, attribution, transparency (P1-3, P1-4, P2-3) |
| `src/lib/services-data.ts`, `src/components/detail/ServiceDetail.tsx`, `src/app/services/[slug]/page.tsx` | "Not the right fit if…" section (3 honest boundaries per service); closing CTA states the real next steps | Helps unsuitable prospects self-select out (P2-1, P2-2). **Copy needs owner review.** |
| `next.config.ts` | Baseline security headers | Hardening (P1-5) |
| `docs/seo/global-audit-2026-10/*` | This audit | Deliverables |

Not changed, deliberately: service names; URLs; titles/H1s ("India" wording); the privacy policy; the consent banner; any article content; any redirects. All of these need business or legal approval.

## Blog audit (round 2, 13 Oct 2026)

All 1,030 articles were machine-checked in full and reviewed at card level. Results: 965 KEEP, 48 UPDATE (verified corrections applied), 17 MERGE (proposed, awaiting approval). See `08-blog-audit-progress.md`. After the edits, the build passes and the recrawl is clean (1,062 pages, 200, 0 duplicates, 0 canonical issues, 0 invalid JSON-LD, 0 orphans, 0 broken links).

## QA results (local production build)

| Check | Result |
|---|---|
| `next build` | Pass (3,148 static outputs) |
| TypeScript (`tsc --noEmit`) | Pass |
| ESLint | 0 errors. 9 warnings, all pre-existing unused imports (`app/page.tsx`, `ContactSections.tsx`, `Hero.tsx`, `ProblemSection.tsx`) |
| Automated tests | **None exist in the repo** (no test script) |
| Crawl of 1,062 sitemap URLs | 0 non-200, 0 multiple/missing H1, 0 duplicate titles/descriptions, 0 canonical mismatches, 0 noindex, 0 invalid JSON-LD, 0 orphans, 0 broken internal links |
| Lighthouse mobile (DevTools throttling, median of 3) | See 02 §3. Accessibility is 96 on all tested pages, unchanged. |
| Contact API | Invalid payload → 400 with field errors; malformed JSON → 400; over-long website → 400 with a friendly message; honeypot → 200 without sending. **No real email was sent**, because `.env` holds live credentials. |
| Contact form (headless Chrome, mocked API) | Preselects "AI Automation" from `?src=/services/ai-automation`, "Not sure yet" from a blog source. `generate_lead` is pushed to `dataLayer` with need/budget/source on success; **no event on a 502 failure**. Success and error UI render. |
| Security headers | All four present on local responses |
| Visual check | Service hero and the new section render in the existing design system (screenshots reviewed) |
| Search QA still requiring access | URL Inspection for priority pages, sitemap resubmission, Rich Results Test after deploy, GA4 DebugView for `generate_lead`, the Search Console Generative AI report |

I make no claims about indexing or ranking changes. Nothing has been deployed.

## Decisions needed from you

- **Q1. Market priority and service-page wording.** Do you actually serve (or want to serve) clients in the UAE, Australia, the UK or Singapore? If yes: in what currency do you invoice, what working-hour overlap do you offer, and which contract jurisdiction applies? This decides whether service pages stay India-only (as now) or gain a "Working with teams outside India" section.
- **Q2. Domain.** Stay on `.in` (India-first) or plan a migration to a gTLD for global targeting? (Options in 05 §D.)
- **Q3. Content.** Approve pausing bulk publishing, reframing the 6 India "best" lists (unranked, ZSpace not #1) and merging the 5 city lists with 301 redirects?
- **Q4. Proof and authorship.** Can you share 2–3 real projects for case studies (anonymised with permission if needed), and name 1–2 real people to byline articles?
- **Q5. Compliance and promises.** Who will review the privacy policy and choose the analytics consent approach? Can the team reliably "reply within one business day"?

## Outstanding issues and limitations

- No Search Console, GA4, CrUX or keyword data. Every priority is evidence-based but not volume-based, and the content quality-tier review (P4-1) must wait for data.
- Local SERPs for non-US markets could not be observed (the search tool is US-based).
- Several regulatory dates rely on law-firm or vendor summaries and are flagged for primary-source verification: UAE PDPL executive regulations, UAE e-invoicing ASP deadline, UK DUAA commencement and ICO guidance status, Singapore PSG→EDGE timing, Australia ADM date (10 vs 11 Dec 2026), Saudi LCGPA IT rule.
- A Content-Security-Policy, `/blogs` HTML size (926 KB) and the 2-hop apex redirect remain open (backlog).
- "Not the right fit" copy includes one platform statement to verify: Shopify marketplaces need third-party apps.

## Next 30 / 60 / 90 days

See `07-backlog-and-roadmap.md`. In short:
- **30 days:** review and deploy this branch; mark `generate_lead` as a key event; connect Search Console and record the baseline; fix privacy and consent; pause bulk publishing; answer Q1–Q5.
- **60 days:** first case study and author bylines; reframe and merge the listicles; homepage H1; the domain decision; a `/uae` draft if confirmed.
- **90 days:** quality-tier review using Search Console data; refresh the cost and AI guides; publish only time-bound, checklist-passing articles; re-plan Phase 3 around where qualified leads actually come from.

No ranking, AI-citation or lead-volume outcome is guaranteed.
