# 03 — Service Pages, Inbound Lead Journey and Analytics

Audited 12 October 2026 against the code in `src/lib/services-data.ts`, `src/components/detail/ServiceDetail.tsx`, `src/components/ContactForm.tsx`, `src/app/api/contact/route.ts` and the live site.

## 1. Verified services (no renames, no new offers)

The six services in code match the live site: Full-Stack Website Development, Mobile App Development, AI Automation, UI/UX Design, Shopify Store Setup & Optimization, and CRO Audit. **No service was renamed or added.**

## 2. Service-page audit

| Element (brief requirement) | State before | Gap / risk | Action taken / recommended |
|---|---|---|---|
| Value proposition and H1 | Present, but every H1, title, eyebrow, meta description and 2 FAQs say "in India" | Fits the `.in` domain and the India strategy. **Mismatched** for visitors arriving from ~185 AU/UK/UAE articles, who land on "for businesses across India". | **Business decision (Q1 in README).** Do not retitle without approval: retitling could cost India rankings. A safe additive option is a short "Working with teams outside India" block, but it needs real facts (billing currency, overlap hours, contract jurisdiction) that I don't have. |
| Buyer problem | "Problems we solve" + "What we do" | Good | — |
| Use cases and suitability | "Who it's for", "Use cases" | No self-selection *out* | **Done:** added "Not the right fit if…" (3 per service), each with an honest alternative. All statements come from existing site claims or plain platform facts. *Review before deploy* (one line: Shopify marketplaces need third-party apps; that's my understanding of the platform, so verify). |
| Deliverables and boundaries | Deliverables list | Boundaries were missing | Covered by "Not the right fit if…" |
| Process and milestones | "How we work" (3 principles) | Principles, not milestones | **Done (CTA copy):** the closing CTA now states the real sequence the site already promises: reply, call, fixed estimate per phase. Recommended next: add typical phase durations per service (the website FAQ already says 4–8 / 8–14 weeks). |
| Technology | Present | — | — |
| **Proof points** | **None.** No case studies, testimonials, logos, reviews or team. Disclosed honestly. | **The largest gap vs every competitor in every market** (05-market-research.md §E) | Blocked on business. Recommended: 2–3 real case studies (anonymised with client permission if needed), a named team section, and a verified Clutch/GoodFirms or Google profile with real reviews. |
| Objections | FAQ covers cost, timeline, ownership, maintenance, AI data safety | Cost answers give drivers only, no ranges | Recommended: publish ZSpace's *own* typical ranges if the business is comfortable. Never use invented market averages. |
| FAQs | 9 per service; FAQPage JSON-LD | FAQ rich results were retired by Google in 2026, so the markup is inert. The visible FAQs remain useful. | Keep (harmless, accurate) |
| Internal links | Guides (6 curated), industries, other services | Good | — |
| Primary + secondary CTA | "Start a Project" + "How we work" (#process) | Fine. The "Not sure yet" path exists in the form. | Contact form now preselects the service when arriving from a service page (see §3). |
| Structured data | `Service` + `FAQPage` | `Service` has no Google rich result; `areaServed` = India + "Worldwide" | Keep. It's accurate and harmless. Change `areaServed` only if the business confirms target countries. |

### Homepage

| Issue | Evidence | Action |
|---|---|---|
| H1 text content reads "Meet ZSpace Labs, your website builder." (the rotating word's first value; the `aria-label` has the full phrase) | Crawl: H1 text = "Meet ZSpace Labs, your website builder ." | **Recommend** a positioning H1 (brand decision), e.g. "Websites, apps, Shopify stores and AI automation, designed and built by one team." "Website builder" also evokes Wix-style DIY tools. |
| "or explore our work" linked to `/services`, but there is no portfolio | `Hero.tsx` | **Done:** relabelled "explore our services" |
| Title says "Studio in India" | — | Tied to Q1 |

## 3. Enquiry journey

### What exists (verified in code)

- The form posts to `/api/contact`. Zod validation is shared between client and server, with a honeypot and an in-memory 20 s per-IP cooldown. The lead is emailed through Gmail SMTP (credentials server-side only, `server-only` guard, HTML-escaped template, `replyTo` set to the lead).
- On delivery failure, the API returns 502 with a fallback email address, and the raw payload is logged to server logs.
- Success and error states have `role="status"` / `role="alert"`, and field errors are linked with `aria-describedby`.
- `?src=` captures the referring page (set by service and blog CTAs).

### Issues and fixes

| # | Issue | Severity | Status |
|---|---|---|---|
| L1 | "What do you need?" defaulted to **Website Development** for everyone, so any visitor who didn't touch it was recorded as a website lead, skewing lead data | High (data quality) | **Fixed:** defaults to "Not sure yet"; preselects the matching service when `?src=/services/<slug>` |
| L2 | **No conversion event.** GA4 is installed but nothing records a successful enquiry, so organic → lead attribution is impossible | High | **Fixed:** `generate_lead` (GA4 recommended event) fires **only after the API confirms delivery**, with `lead_need`, `lead_budget` and `source_page` parameters. It never fires on button click or failure. *Mark `generate_lead` as a key event in GA4 after deploy.* |
| L3 | No website field, though Shopify/CRO/redesign enquiries depend on the URL | Medium | **Fixed:** optional "Website" field (free text, max 200), included in the lead email |
| L4 | Budget options are USD with no label | Low | **Fixed:** label now reads "Budget range (USD)". The field was already effectively optional (defaults to "Let's discuss"). Whether to show INR/AED/AUD is a business choice. |
| L5 | No privacy notice at the point of collection | Medium (compliance) | **Fixed:** a one-line notice under the submit button linking to `/privacy`, consistent with the current policy |
| L6 | Privacy policy is thin: doesn't name Google Analytics, Google Workspace (email) or Vercel (hosting), retention, rights, international transfer or an analytics opt-out. "Last updated: January 2026". | **High (UK DUAA, AU APP 1, India DPDP from May 2027)** | **Not changed (legal text).** Needs owner/legal review. See the analytics section. |
| L7 | "We typically reply within one business day" appears in metadata, the contact hero and the success message | Medium (promise) | **Needs confirmation.** Keep only if the team can reliably meet it. |
| L8 | Rate limiting is in-memory per instance (documented in code) | Low | Acceptable at current volume. Use Vercel WAF / Upstash if spam appears. |
| L9 | On SMTP failure the full lead payload (PII) is written to server logs | Low–Medium | Recommended: store failed leads in a durable, access-controlled place (or alert) instead of logs, and set log retention. |
| L10 | No CRM. Leads live only in an inbox. | Medium (lead-to-opportunity tracking) | Recommended: forward to a CRM (HubSpot free tier or similar) or a sheet with a status column, so "qualified" and "won" can be measured |

### Paths by visitor intent (brief §9)

| Intent | Path today | Gap |
|---|---|---|
| Ready to buy | Service page → Start a Project → form (service preselected) | None after L1 |
| Founder with an idea | Home FAQ "Do I need to know exactly what I want?" → contact, "Not sure yet" | Fine |
| Comparing suppliers | `how-to-choose-*` and `best-*` articles | Proof gap (no case studies) |
| Ecommerce improvement | Shopify / CRO pages, Shopify CRO guides | Fine. The Website field helps. |
| Evaluating AI | AI service page with guardrails/evaluation copy | Fine |
| Product team needing help | UI/UX page and "work alongside your team" home FAQ | Fine |

No free consultation, free audit or guaranteed response time was added, because none is offered.

## 4. Analytics and attribution plan

### Current state

- GA4 `G-00464BTJH5` loads `afterInteractive` on every page, **without a consent mechanism or opt-out**.
- Google Search Console is verified by meta tag. No data access was provided.
- No conversion events existed before this audit.

### Compliance position (verify with counsel)

- **UK:** Under DUAA, analytics cookies used only to improve your own site can be consent-exempt **if users are told and can object**. GA4 also processes data for Google's purposes unless configured otherwise. Minimum steps: name GA4 in the privacy policy, provide an opt-out, and disable Google signals and ads personalisation in the GA4 admin. A consent banner with Consent Mode v2 is the conservative option.
- **India DPDP (May 2027):** Notice and consent obligations apply to personal data. Plan the consent approach before then.
- **Australia:** APP 1 requires a clear privacy policy. Update it before the Dec 2026 ADM provisions if AI is used in decisions about individuals (unlikely for this website).

**I did not add a consent banner.** It changes production behaviour, needs a legal decision on the approach, and affects all analytics. It is backlog item P1-7.

### Measurement setup after deploy (owner actions)

1. GA4 → Admin → Events: mark `generate_lead` as a **key event**.
2. Register custom dimensions: `lead_need`, `source_page` (event scope).
3. GA4 → link Search Console. Report: Landing page × Key events, filtered to Organic Search, segmented by country (IN, AE, AU, GB, SG, SA).
4. Search Console: submit the sitemap; record the baseline (indexed pages, clicks, impressions, CTR, position) for the site, each service page and each category hub; export the top queries; check the **Generative AI** report (impressions only) monthly.
5. Lead outcomes: tag each lead in the inbox/CRM as qualified / not qualified / won. This is the only way to measure business outcomes rather than form fills.

### KPIs and review cadence

| Type | Metric | Cadence |
|---|---|---|
| Leading | Indexed pages (service, hub, article); impressions for non-brand service queries by country; Generative AI impressions | Monthly |
| Leading | Core Web Vitals field data (Search Console CWV report / CrUX) once traffic qualifies | Monthly |
| Outcome | `generate_lead` by landing page, source page and country | Monthly |
| Outcome | Qualified leads and lead → opportunity rate (CRM) | Monthly; review strategy quarterly |
