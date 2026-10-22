# 15. Implemented change log

All changes are uncommitted on `master` and **not deployed**. Every file can be restored with `git checkout -- <file>`; git is the backup. Per-URL detail is in `progress-ledger.csv` (`note` column).

## Batch 1 — 17 October 2026

| # | Change | Files | Pages | Why | Validation |
| --- | --- | --- | --- | --- | --- |
| 1 | First-touch attribution (landing page, referrer domain, `utm_*`) stored per session and sent with every enquiry; `landing_page` added to GA4 `generate_lead` | `lib/attribution.ts` (new), `components/FirstTouch.tsx` (new), `app/layout.tsx`, `components/ContactForm.tsx`, `lib/validations.ts`, `lib/leads.ts` | All (capture), /contact (send) | Leads could not be reported by channel or campaign | Headless Chrome end to end; API accepts the fields and rejects over-long values (400); no email sent |
| 2 | Industry pages link to 2–6 industry-matched articles (were 1–2 generic) | `lib/industries-data.ts` | 12 industry pages | Weak, often off-topic hub links | 59 slugs verified; rendered |
| 3 | Homepage H1 text spacing | `components/home/AnimatedHeroWord.tsx`, `components/home/Hero.tsx` | / | Words ran together in page text | Server HTML; screenshot |
| 4 | Sitemap `lastmod` only where a real date exists | `app/sitemap.ts` | Sitemap | Build-time dates are ignored by Google | 1,089 URLs, 1,064 dated |
| 5 | "Where we work" section on every service page: five markets, written-scope delivery, main rule per market with primary sources | `lib/site.ts` (`markets`), `components/detail/ServiceDetail.tsx` | 6 service pages | Owner confirmed five markets; pages were India-only | Rendered at 1440 px and 390 px; links checked |
| 6 | Organization `areaServed` = five countries; About fact and copy; `llms.txt` working-model lines | `app/layout.tsx`, `components/about/AboutSections.tsx`, `app/about/page.tsx`, `public/llms.txt` | All, /about | Consistent entity description | JSON-LD output checked |
| 7 | Merged two near-identical "Is our data safe" FAQs | `lib/services-data.ts` | /services/ai-automation | Duplicate question | FAQ JSON-LD valid |
| 8 | About mock-up: "58%" → "58% done" | `components/about/AboutSections.tsx` | /about | Could be read as a conversion result | Visual |
| 9 | Removed unrelated 10-stage website table from 29 articles (kept in 3 where relevant) | 6 `blog-data-webdev*.ts` files | 29 articles | Boilerplate under unrelated headings | Build; crawl |
| 10 | Removed 202 orphaned citation labels left by the 3 Oct link removal (owner decision) | 55 `blog-data-*.ts` files | 121 articles | Broken, unexplained parentheticals | Diff scanned for punctuation artifacts |
| 11 | Replaced visible research-process notes with verified sources; corrected CDR non-bank lending dates; dropped one unverified ATO claim | `blog-data-au-ai-1.ts`, `blog-data-au-trust.ts`, `blog-data-uae-search.ts` | 4 articles | Notes like "the page did not load during our check" | Facts checked against ACCC, ATO, Finance, Australia Post, Bing pages or corroborating sources |
| 12 | Hub-guide refresh (facts, sources where permitted, original examples, service links) | `blog-data-webdev-2.ts`, `blog-data-webdev.ts`, `blog-data-mobile-2.ts`, `blog-data-ai-core-4.ts`, `blog-data-design.ts`, `blog-data-commerce.ts`, `blog-data-india.ts` | 9 articles (`updated: 2026-10-17` on 8) | Wave A | Next.js, React Native, OpenAI, Anthropic, Google, NN/g, W3C, Shopify docs |

### Batch 1 article refresh detail

| Article | Change |
| --- | --- |
| nextjs-website-development | Cache Components marked opt-in; ISR explanation corrected to the docs; new fit-by-site-type table replaces the generic one; new section on two problems found and fixed on this site (12.8 MB client bundle, JS-gated hero LCP 6.8–29.5 s → ~2 s lab); hosting FAQ from the deploy docs |
| website-development-guide | Core Web Vitals thresholds (web.dev), OWASP Top 10, WCAG 2.2, five-market privacy point, build-type decision table |
| react-native-app-development | New Architecture timeline (0.76, 0.82, 0.84) and Expo recommendation, linked to reactnative.dev and Expo docs |
| ai-workflow-automation | JSON Schema support caveat (providers support a subset) and OWASP prompt-injection context; no links (link-free article) |
| ui-ux-design-guide | Page-experience FAQ corrected to Google's wording (Core Web Vitals are used in ranking; other aspects not directly); NN/g attributions; no links (link-free article) |
| shopify-theme-development | Garbled sentence fixed; orphan labels removed (Lighthouse 60 requirement re-verified on shopify.dev) |
| how-to-choose-a-cro-agency | Worked A/B sample-size example with table (2% baseline, 20% lift ≈ 21,100 per variant), red flags, engagement models, service link |
| how-to-choose-an-ai-automation-agency | Data protection broadened to all five markets; service link |
| how-to-choose-a-ui-ux-design-agency | Market-specific design needs; quote-comparison table; service link |

## Not changed (awaiting approval or input)

Listicle reframing and city redirects; article publish dates; cost-guide prices; consent banner and privacy policy; market landing pages; consolidation merges; any URL, title or redirect.

## GSC batch, 22 October 2026

Driven by the first Search Console export (Pages + Queries, exported 22 Oct). Full detail: `gsc-2026-10-22/` (analysis, URL map, per-element change log, linking plan, technical report, summary).

| Article | Change |
| --- | --- |
| membership-management-software-australia | Expanded: organisation-type requirements, platform checklist, cost drivers, implementation plan, success measures, 3 FAQs; title/description broadened to "membership software" |
| legacy-software-modernization-australia | Taking over software from a previous developer; choosing a partner; 1 FAQ; title "Options and Roadmap" |
| business-rules-engine | Definition + diagram, software types, AI section, evaluation checklist, 2 FAQs; title/description |
| feature-flag-implementation | Step-by-step implementation, code sample, consistent rollouts, build vs buy, mobile flags, 2 FAQs |
| mobile-app-development-timeline | Verified fixed waits (Apple review stats, Play 12 testers/14 days, D-U-N-S), MVP vs full, estimation method, Sources, 2 FAQs, 1 FAQ corrected |
| how-to-set-up-a-shopify-store | Admin-setting table, India section (Shopify Payments not available in India), common mistakes, 1 FAQ, description |
| shopify-custom-app-development-guide | Precise Plus/Functions limit, build process, replacing a paid app, developer checklist, Sources, 2 FAQs, title/description |
| shopify-store-maintenance-checklist | Full frequency checklist table, security and access, maintenance packages, 2 FAQs, description |
| offline-first-mobile-app-development | Title and description only (no date bump) |
| 7 other articles | One contextual internal link each (loyalty program, Shopify clothing store, Shopify development cost, migrating to Shopify, validate app idea, website timeline, mobile-friendly website); custom CRM AU got a related-article card |
