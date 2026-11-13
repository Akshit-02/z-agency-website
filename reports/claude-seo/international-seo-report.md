# International SEO report

Sources: the GSC export (Countries and Queries sheets, last 3 months), the site's code and content inventory, Claude SEO hreflang guidance, and the international research appendix (`appendix-international-research.md`, with primary-source links). None of this is legal advice.

## 1. Current structure

- One English site (`lang="en"`) on `www.zspace.in`. No hreflang, no language or regional subfolders, no location pages.
- **The ccTLD `.in` is an India geo-signal to Google.** Google infers India targeting from a ccTLD, and GSC's international targeting setting is no longer available to override it. This is a structural ceiling for non-India rankings. Changing domains is a major migration and an owner decision (human review), not something to do now.
- The homepage title, the `/services` title and description, and all six service pages are framed as "in India". `/about` and Organization schema state 5 markets (IN, AE, UK, AU, SG). The six India commercial URLs (`/web-development-company-india` etc.) 308-redirect to the service pages, which shows that India targeting is deliberate.
- Market-specific content exists only as articles: about 73 Australia, 25 UAE/GCC and about 20 UK posts.

**hreflang verdict:** correctly absent. There are no translated pages and no regional duplicates of the same page. Adding hreflang between `/services/x` and a market article, or between market articles, would be wrong. Add it only if true alternates are created (e.g. `/ar/` translations, or en-AU/en-GB copies of the same page with x-default).

## 2. Demand evidence (GSC, 3 months)

| Market | Impressions | Clicks | Avg pos | Notes |
|---|---|---|---|---|
| India | 4,260 | 20 | 24.2 | Main market. Commercial queries: "ai automation agency india" (pos 22), "ui ux design agency in mumbai/india" |
| United States | 2,635 | 3 | 35.4 | Second-largest. Almost no US-specific content. |
| Australia | 2,558 | 2 | 42.0 | **The strongest geo-modified demand:** 1,075 impressions from queries containing "australia", +85 sydney, +31 melbourne. Legacy PHP/software modernisation, membership software, customer portals, payment gateway integration. |
| United Kingdom | 1,018 | 2 | 38.5 | Digital waste tracking, property compliance, NHS integration posts |
| Germany | 206 | 1 | 27.5 | English queries |
| UAE | 155 | 1 | 28.9 | "agentic ai services dubai" (pos 17), "ai automation dubai" |
| Canada | 136 | 0 | 42.8 | Not a target market |
| France / Italy / Spain / Netherlands / Ireland | 97 / 84 / 80 / 69 / 64 | 0–2 | — | Small, English-language |
| Singapore | 57 | 2 | 20.4 | Small |
| Russia | 56 | 0 | 11.8 | Incidental |
| Saudi Arabia | 31 | 0 | 14.4 | Very small |

## 3. Market assessments and recommendations

| Market | Assessment | Recommendation |
|---|---|---|
| **India** | Core. Good service coverage. Gaps are proof, people and a static H1. | Keep India-first service pages. Fix E-E-A-T (see the service and homepage audits). |
| **Australia** | Highest non-India demand. Content exists but service pages don't speak to AU buyers. | **Priority 1 market hub** (`/markets/australia` or similar) linking the AU guides, with genuinely local content: Privacy Act and APP 1.7–1.9 from 10 Dec 2026, Payday Super, CDR, AU English, time-zone overlap, how engagement works with no AU office. Market-specific service landing pages only where GSC shows demand (legacy PHP modernisation, membership platforms, customer portals). |
| **UK + Ireland** | Moderate demand. UK GDPR/PECR, WCAG 2.2. Ireland: English-speaking EU entry point. | Priority 2: one UK hub (British English). Treat Ireland as an EU-in-English angle inside it. |
| **UAE** | Existing clients; small but commercial queries ("agentic ai services dubai"). | Priority 3 hub: Arabic/RTL capability, e-invoicing (go-live 1 Jan 2027 for ≥AED 50m revenue, 1 Jul 2027 for others), PDPL + DIFC/ADGM, payment gateways. |
| **Saudi Arabia / GCC** | Tiny current demand. Real service angles: ZATCA e-invoicing wave (1 Feb 2027 deadline for >SAR 187,500 revenue), PDPL transfers, Arabic. | Cover inside a GCC section of the UAE hub. No standalone KSA page until there is demand or a client. |
| **USA** | Second-largest impressions, low positions, no US content. Buyers need time-zone overlap, IP assignment, SOC 2 posture, HIPAA BAA, state privacy laws. | Priority 4: a "working with US teams" page (engagement model, overlap hours, IP, security), in US English. Owner must confirm overlap hours and contract terms. |
| **Singapore** | Small. PDPA. | Fold into an APAC section. No dedicated page yet. |
| **Europe** | Germany, France, Spain and Italy expect local-language content for B2B services. Netherlands and Ireland work in English. EU AI Act: Art. 50 transparency from Aug 2026; high-risk rules moved to Dec 2027 / Aug 2028 by the July 2026 omnibus. European Accessibility Act in force since 28 Jun 2025 (an ecommerce trigger). | Target NL + IE in English via the UK/EU content. Skip DE, FR, ES and IT until translated pages and local proof are feasible. |
| **Russia** | 152-FZ localisation of Russian personal data since 1 Jul 2025. EU Art. 5n and US OFAC bans on IT and software services. New US secondary-tariff law (Sep 2026). Payment barriers. Yandex ~71% share requires Russian-language content. | **Not viable as an SEO target. Do not create Russia pages.** Screen any inbound enquiry case by case, with legal review. |

## 4. Rules for any country page

- Check GSC demand first. Each page must carry substantive local information (regulation, payments, integrations, language, engagement model). A page that just swaps the country name is a doorway-page risk.
- Self-canonical, with no hreflang between market pages.
- Don't claim offices, local teams or local client work that doesn't exist. Say plainly "remote team based in India, working in your time zone for X hours".
- Link market hub → relevant services → market articles, and back.
- Plugin quality gate: warn at 30+ location pages and hard-stop at 50+. This plan stays at ≤5 hubs.

## 5. Implemented in this session

- `src/lib/site.ts` market notes, which feed Organization `areaServed`, the About page and the "outside India" sections:
  - India: added the Nov 2026 consent-manager registration milestone and the 18-month phase-in.
  - UAE: "as of November 2026" changed to "at the time of writing (November 2026)", because no primary source confirms the status for November itself.
  - UK, Australia and Singapore notes were verified as accurate. No change.
- No country pages were created. They need owner approval, local evidence and positioning decisions (see `human-review-required.md`).
