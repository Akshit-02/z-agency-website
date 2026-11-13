# Human review required

Items that need company facts, owner decisions, credentials or legal review. None of them was guessed or filled with placeholders.

## Company facts (needed for E-E-A-T; do not invent)

1. **People:** founder and team names, roles, LinkedIn URLs, and willingness to be credited as article authors or reviewers. This unlocks Person schema, bylines and the About page team.
2. **Company details:** founding year, legal entity name, registered city (or confirmation that it stays unpublished).
3. **Proof:** any client work that can be shown (with permission), or anonymised sample deliverables (CRO audit table of contents, workflow map, scope outline).
4. **Services actually offered.** Confirm yes or no for: legacy software modernisation, SaaS product development, customer/supplier/vendor portals, B2B ecommerce, custom Shopify apps, Shopify Plus, ERP/CRM integration, BI dashboards. Pages or sections are created only for confirmed services.
5. **Named tools** the team has actually integrated (e.g. HubSpot, Zoho, Salesforce, WhatsApp Business API), for the AI automation page.
6. **US engagement facts:** working-hours overlap you can commit to, IP assignment terms, security posture (SOC 2 or not).
7. **Industries:** which of the 23 "Also active in" sectors on `/industries` reflect real work.

## Owner decisions

8. **Homepage H1.** Proposed: a static descriptive H1 such as "Websites, apps, Shopify stores and AI automation for growing businesses", with the existing rotating "Meet ZSpace Labs, your … builder" line moved below it. Currently the indexed H1 is "your website builder".
9. **India-first vs international framing** of the homepage title, `/services` title and description, and the six service titles (all "…in India"). India brings most clicks, while US + AU + UK impressions together exceed India's.
10. **Market hubs:** approve an Australia hub first, then UK/IE and UAE/GCC (see `international-seo-report.md`). No Russia pages.
11. **Domain:** `.in` geo-targets India in Google. A future move to a gTLD is a major migration. Decide only if international growth stays a priority after 6–12 months.
12. **Editorial volume:** pause about 19 articles a day and refocus on refreshes of commercially mapped articles.
13. **"Best agencies" listicles:** restructure the 11 self-ranked lists. Merge or noindex the 5 city/state variants (Mumbai, Delhi NCR, Bengaluru, Ahmedabad, Gujarat).
14. **Consolidation** of low-value articles (210 candidates) after 6 months of data. Any noindex, redirect or removal needs sign-off.
15. **Visible article dates:** recommended for trust, but they will show the Sep–Oct 2026 publishing burst. Decide together with item 1.
16. **Contact form budget bands** (USD only).

## Credentials (set up locally; never paste keys into chat)

17. Google API for Claude SEO: OAuth client or service account added to the GSC property and GA4, plus an API key with PageSpeed Insights + CrUX enabled, stored in `~/.config/claude-seo/google-api.json`. Then run `/seo google` in a new Claude Code session.
18. Optional: Moz or Bing Webmaster keys for backlink data.

## Fact checks before the next content edit

19. RBA card-surcharge change dated 1 Oct 2026 (`membership-management-software-australia`).
20. "OAIC received 1,205 notifications in 2025" (`legacy-software-modernization-australia`).
21. "OMG adopted DMN 1.6 in September 2026" (`business-rules-engine`).
22. UAE PDPL executive regulations status: re-check before relying on "not issued" (only secondary sources to Sep 2026).

## Legal review

23. Russia: EU Art. 5n / US OFAC restrictions on IT and software services and the Sept 2026 US secondary-tariff law. Get legal advice before accepting any Russian client, and do not market to Russia.
24. Market regulation notes in `site.ts` are summaries, not legal advice. Set a review date (suggested: Feb 2027, after APP 1.7–1.9 starts on 10 Dec 2026 and UAE e-invoicing on 1 Jan 2027).
25. Microsoft Clarity sets third-party cookies (Lighthouse best-practices flag). Check consent requirements for UK/EU visitors (PECR / ePrivacy).

## Deployment

26. Review the uncommitted diff (16 files), deploy to a preview, click through FAQs on mobile and desktop, test one contact form submission, then deploy. Nothing was committed or deployed in this session.
