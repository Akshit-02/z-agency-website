# 05 — Batch 1 Implementation, Metadata, Linking and QA

Implemented and validated on 14 October 2026, in the working tree on `master`. **Not committed and not deployed.**

**Owner approvals given on 14 Oct 2026:**
- Implement the 6 new articles plus the 7 page updates.
- For the cost topics, publish an estimation worksheet **with no prices**. Under that decision, topic 2 (web-app cost) moved from RESEARCH MORE to CREATE, with the H1 "How to Estimate the Cost of a Custom Web Application". Batch 1 therefore adds **7** new URLs, not 6.

## 1. What changed

### New articles (7)

| # | URL | Category | Data file |
|---|---|---|---|
| 1 | `/blogs/custom-website-vs-web-application` | Web Development | `src/lib/blog-data-founder-web.ts` |
| 2 | `/blogs/custom-web-application-development-cost` | Web Development | same |
| 3 | `/blogs/saas-mvp-feature-prioritisation` | Web Development | same |
| 8 | `/blogs/how-to-validate-mobile-app-idea` | Mobile Apps | `src/lib/blog-data-founder-product.ts` |
| 13 | `/blogs/how-much-ux-design-before-development` | UI/UX | same |
| 19 | `/blogs/improve-website-enquiry-form-conversions` | CRO | `src/lib/blog-data-founder-cro.ts` |
| 20 | `/blogs/cro-strategy-low-traffic-websites` | CRO | same |

The three files are registered in `src/lib/blog-data.ts`: three imports, plus three spreads at the end of the `posts.push(...)` call. No routes, components, styles, dependencies or config changed.

### Substantial updates (7 pages, `updated: "2026-10-14"`; URLs and `date` unchanged)

| # | URL | File | Main change |
|---|---|---|---|
| 4 | `custom-website-vs-website-builder` | `blog-data-webdev.ts` | Exit/export table from vendor docs, Next.js hosting, Google JS-SEO guidance, TCO worksheet |
| 5 | `pwa-vs-native-app` | `blog-data-webdev-8.ts` | "Should a startup start with the web?" triggers table; store fees and closed-testing friction |
| 7 | `mobile-app-development-cost` | `blog-data-mobile.ts` | Verified fees, 2026 commission changes by region, compliance costs, estimation worksheet (no price ranges) |
| 10 | `shopify-redesign-vs-rebuild` | `blog-data-commerce.ts` | Fourth option "add or replace an app", app-stack table, 2026–27 Scripts/script-tag deadlines |
| 11 | `shopify-core-web-vitals-performance-guide` | `blog-data.ts` | Rebuilt as a six-step "why is my store slow" troubleshooting flow |
| 12 | `shopify-business-systems-integration-guide` | `blog-data.ts` | Integration sequencing checklist, native features, plan limits, market notes |
| 14, 17 | `website-gets-traffic-but-no-leads` | `blog-data-webdev-5.ts` | Six-step diagnosis (traffic vs UX), verdict table, post-redesign checklist |

### Minor edits (no date change)

- `ecommerce-ab-testing`: a "Running a lead-generation site?" callout linking to topic 20.
- `wireframing-vs-prototyping`: one sentence linking to topic 13.
- `shopify-redesign-vs-rebuild`: one checklist line clarified to "Your own user research or testing shows…" (it previously read like an external research claim).

### Backlinks added to existing articles (16 contextual links; no date changes)

| From | To |
|---|---|
| `website-development-guide`, `website-requirements-document`, `saas-website-development`, `low-code-vs-custom-software` | `custom-website-vs-web-application` |
| `website-development-cost`, `technical-discovery-software-projects` | `custom-web-application-development-cost` |
| `saas-roadmap-prioritization`, `mvp-development-australia`, `mvp-development-uae` | `saas-mvp-feature-prioritisation` |
| `mobile-app-development-process`, `mobile-app-development-guide`, `ai-product-idea-validation` | `how-to-validate-mobile-app-idea` |
| `product-design-process`, `design-handoff` | `how-much-ux-design-before-development` |
| `website-lead-generation` | `improve-website-enquiry-form-conversions` |
| `ecommerce-cro-testing-roadmap` | `cro-strategy-low-traffic-websites` |

The new and updated articles also link to each other where that helps the reader. Anchors vary; no exact-match anchor is repeated across pages.

## 2. Metadata summary (rendered from the production build)

Notes on the table:
- **Title:** the rendered `<title>`; the site appends " — ZSpace Labs" when it fits.
- **H2s:** includes the template's FAQ, related and CTA headings.
- **Ext:** external source links.
- **Out / In:** internal `/blogs/` links out, and inbound links from other articles.

| URL | Type | H1 | Title (chars) | Desc chars | Words | H2s | Ext | Out | In | Service links | Published / Modified | FAQs |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `custom-website-vs-web-application` | New | Custom Website vs Web Application: What Does Your Business Actually Need? | Custom Website vs Web Application: Which Do You Need? — ZSpace Labs (67) | 147 | ~2690 | 16 | 8 | 9 | 6 | website-development, ui-ux-design | 2026-10-14 / 2026-10-14 | 5 |
| `custom-web-application-development-cost` | New | How to Estimate the Cost of a Custom Web Application | Web App Development Cost: How to Estimate Yours — ZSpace Labs (61) | 154 | ~2774 | 18 | 6 | 8 | 4 | website-development, ui-ux-design | 2026-10-14 / 2026-10-14 | 5 |
| `saas-mvp-feature-prioritisation` | New | What Should Your First SaaS MVP Include? A Founder's Feature-Prioritisation Guide | What Should Your First SaaS MVP Include? — ZSpace Labs (54) | 148 | ~2392 | 17 | 4 | 6 | 6 | website-development, ui-ux-design | 2026-10-14 / 2026-10-14 | 5 |
| `how-to-validate-mobile-app-idea` | New | How to Validate a Mobile App Idea Before Spending Money on Development | How to Validate a Mobile App Idea Before You Build — ZSpace Labs (64) | 159 | ~3235 | 18 | 7 | 6 | 5 | mobile-app-development, ui-ux-design | 2026-10-14 / 2026-10-14 | 5 |
| `how-much-ux-design-before-development` | New | How Much UI/UX Design Does a Startup Need Before Development Begins? | How Much UX Design Do You Need Before Development? — ZSpace Labs (64) | 155 | ~2574 | 15 | 5 | 5 | 6 | ui-ux-design, website-development | 2026-10-14 / 2026-10-14 | 5 |
| `improve-website-enquiry-form-conversions` | New | How to Improve Website Enquiry Forms Without Attracting Low-Quality Leads | Better Enquiry Forms Without Low-Quality Leads — ZSpace Labs (60) | 148 | ~3118 | 18 | 17 | 4 | 3 | cro-audit, ui-ux-design | 2026-10-14 / 2026-10-14 | 5 |
| `cro-strategy-low-traffic-websites` | New | How to Build a CRO Roadmap When You Have Limited Traffic and Budget | CRO Roadmap for Low-Traffic Websites — ZSpace Labs (50) | 154 | ~2466 | 16 | 6 | 6 | 3 | cro-audit, ui-ux-design | 2026-10-14 / 2026-10-14 | 5 |
| `custom-website-vs-website-builder` | Updated | Custom Website Development vs. Website Builders: Which Should You Choose? | Custom Website (Next.js) vs Website Builder: How to Choose (58) | 147 | ~2955 | 19 | 9 | 5 | 7 | website-development | 2026-09-17 / 2026-10-14 | 12 |
| `pwa-vs-native-app` | Updated | PWA vs Native App: Which Should Your Business Build? | PWA vs Native App: Which Should Your Business Build? — ZSpace Labs (66) | 155 | ~2849 | 21 | 9 | 12 | 13 | mobile-app-development, website-development | 2026-09-24 / 2026-10-14 | 13 |
| `mobile-app-development-cost` | Updated | How Much Does Mobile App Development Cost? | iOS and Android App Cost: Fees, Drivers and a Worksheet — ZSpace Labs (69) | 152 | ~3103 | 24 | 13 | 9 | 10 | mobile-app-development | 2026-09-25 / 2026-10-14 | 13 |
| `shopify-redesign-vs-rebuild` | Updated | Shopify Redesign, Rebuild or Another App: Which Does Your Store Need? | Shopify Redesign vs Rebuild vs More Apps: How to Decide — ZSpace Labs (69) | 145 | ~2845 | 21 | 6 | 8 | 5 | shopify-development, ui-ux-design, cro-audit | 2026-09-29 / 2026-10-14 | 12 |
| `shopify-core-web-vitals-performance-guide` | Updated | Why is my Shopify store slow? A Core Web Vitals troubleshooting guide | Why Is My Shopify Store Slow? A Troubleshooting Guide — ZSpace Labs (67) | 155 | ~2533 | 18 | 5 | 5 | 19 | shopify-development, cro-audit | 2026-03-08 / 2026-10-14 | 9 |
| `shopify-business-systems-integration-guide` | Updated | What to integrate with Shopify before your store starts scaling | Shopify Integrations: What to Connect Before You Scale — ZSpace Labs (68) | 155 | ~2657 | 19 | 6 | 7 | 12 | shopify-development, ai-automation | 2026-04-05 / 2026-10-14 | 9 |
| `website-gets-traffic-but-no-leads` | Updated | Website Getting Traffic but No Leads? How to Tell a Traffic Problem From a UX Problem | Traffic but No Leads? Traffic Problem or UX Problem — ZSpace Labs (65) | 158 | ~3678 | 19 | 9 | 7 | 9 | cro-audit, ui-ux-design | 2026-09-24 / 2026-10-14 | 13 |

**Structured data on every page above:** BlogPosting (headline = H1, correct `datePublished`/`dateModified`, Organization author), BreadcrumbList (4 items) and FAQPage. The FAQs are visible on the page, which was verified, and the markup is inert for rich results since 2026. No Review, Rating or other markup was added.

**CTAs:** each page has one in-article section CTA plus the template CTA. Both use the existing "Start a Project" → `/contact?src=/blogs/<slug>` pattern, which preselects the enquiry source. The CTA copy is proportionate and makes no promises.

**Analytics:** no tracking code was touched. The `generate_lead` event still fires only after a confirmed send, unchanged since 13 Oct.

## 3. Content standards applied

- **Answer early.** Each article answers its question in the first section, then gives key takeaways or a takeaway callout.
- **One original asset per article:**
  - requirement classifier (1)
  - estimation worksheet (2)
  - riskiest-assumption scoping worksheet and in/out/later table (3)
  - evidence ladder and kill/continue template (8)
  - decision matrix and ready-to-build checklist (13)
  - field-by-field table and three-problem split (19)
  - self-computed sample-size table and 90-day roadmap (20)
  - for updates: export table, triggers table, fee tables, app-stack table, troubleshooting flow, integration sequencing worksheet, diagnosis steps
- **No prices or market averages.** Only verified platform fees, each with its source and date.
- **No invented figures or claims.** There are no invented statistics, clients, case studies, results or first-hand claims. Every example is labelled hypothetical. The only ZSpace-specific statement describes the site's own contact form, checked against `ContactForm.tsx`, `validations.ts` and the API route.
- **Sources.** Each article ends with a "Sources" H2 marked "Accessed 14 October 2026". Vendor data and law-firm commentary are labelled as such.
- **Claims dropped during writing because they could not be verified**, among others:
  - TestFlight build expiry
  - whether Google Play organisation accounts are exempt from closed testing
  - Shopify Basic Tax cut-off dates
  - Shopify's certified ERP list
  - native GST invoicing
  - India DPDP exact commencement dates
  - UK PECR fines and dates
  - Webflow/Framer plan prices
  - Apple's standard (non-EU) commission rate, which is not stated on any official Apple page found
  - any Kohavi traffic threshold
  - "1 second = 7%"
- **Removed during QA review:** two sentences attributing claims to "founder forums" (replaced with plain reasoning).
- **Style.** British English in the new articles. Existing American spellings in updated pages were left as they were. No em dashes in new text.

## 4. QA and validation results

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| `npx eslint src` | 0 errors; 9 warnings, all pre-existing unused imports (unchanged from 13 Oct) |
| `npx next build` | Pass; 3,169 static outputs (was 3,148; +21 = 7 articles × page, OG image and Twitter image) |
| Automated tests | None exist in the repo |
| Full crawl of the local production build (sitemap) | 1,069 URLs (was 1,062). 0 non-200, 0 multiple or missing H1s, 0 duplicate titles, 0 duplicate meta descriptions, 0 canonical problems, 0 noindex, 0 invalid JSON-LD, 0 images without alt. 1,077 internal link targets checked, 0 broken |
| New URLs in the sitemap | Yes, all 7. `robots.txt` unchanged (Allow all, sitemap declared) |
| OG images for new articles | 200 `image/png` |
| Mobile rendering (Chrome headless, 390 px, all 32 touched pages) | No horizontal overflow; every table is inside a horizontal scroll container. One defect was found and fixed: three bold-wrapped links (`**[[…]]**`) rendered as raw text and forced a 555 px layout. The validator now flags this pattern, and no other occurrence exists in the corpus |
| Raw markup in rendered text (all 32 touched pages) | None (`[[` or `**` absent from visible text) |
| CTA target (`/contact?src=…`) | 200 |
| Data validator (`check-posts` on every changed file) | 0 errors in changed articles. One pre-existing corpus issue was found and not touched: a markdown-style link in `llms-txt` |

**What was not checked:** Search Console URL Inspection, the Rich Results Test on the live URLs, GA4 DebugView, and real-device Core Web Vitals. All need a deployment. Indexing, ranking and AI-citation outcomes cannot be claimed from a local build.

## 5. For human review before deploying

1. **Read the 7 new articles** for tone and accuracy. They were drafted by AI from the research files and verified against primary sources on 14 Oct 2026, but no person at ZSpace has reviewed them. Google's guidance favours content with clear human ownership; see author bylines below.
2. **Changed H1s** on 3 updated pages (`shopify-redesign-vs-rebuild`, `shopify-core-web-vitals-performance-guide`, `shopify-business-systems-integration-guide`), plus `website-gets-traffic-but-no-leads`. The URLs are unchanged, but confirm the new H1s.
3. **Fee-sensitive pages:**
   - `mobile-app-development-cost` and `pwa-vs-native-app` quote Google Play and Apple EU fees and deadlines as at 14 Oct 2026.
   - Apple's EU page is internally inconsistent about a "store services" fee; the article flags this.
   - The US link-out commission is still being litigated.
   - Re-check these pages quarterly.
4. **Shopify dates** (Scripts 30 Jun 2026; script-tag creation 1 Oct 2026; storefront script tags 1 Mar 2027): re-check before deployment if more than a few weeks pass.
5. **Regulatory boxes** (topics 1 and 19) give no exact DPDP commencement dates and no penalty figures. They point readers to the primary texts. UAE PDPL points rely on law-firm commentary and are labelled as such.
6. **Pending MERGE:** `why-is-my-website-not-converting` → `website-gets-traffic-but-no-leads` (proposed 13 Oct). The updated page now covers both intents more completely, which strengthens the case for the merge.
7. **Author bylines:** every article still credits the Organization only. The global audit's Q4 is still open.
8. **Commit and deploy** when ready; nothing has been committed or deployed.
