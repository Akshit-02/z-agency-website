# ZSpace → Kudozz content and link report

Date: 2026-10-17. Status: five articles written and validated in the ZSpace working tree. **Not committed, deployed, published or indexed.** The Kudozz repo was not changed for this batch.

Files: `report.md` (this file: deliverables A, B, D, G, H), `service-content-matrix.csv` (C), `content-manifest.csv` and `cross-site-link-register.csv` (E records and F).

## Relationship and link policy

The owner confirmed on 2026-10-17 that ZSpace Labs and Kudozz have a **paid or exchange arrangement**. Kudozz already links to ZSpace under the same arrangement (five articles, `rel="sponsored"`), so links in both directions are part of one exchange. Google's link-spam policy treats unqualified link exchanges as spam. So every ZSpace → Kudozz link:
- uses `rel="sponsored"`, written as `[[url|text|sponsored]]` and rendered as `rel="sponsored noopener noreferrer"`;
- has a visible disclosure in the same paragraph: "Disclosure: ZSpace Labs has a paid partnership with Kudozz, and this is a sponsored link.";
- appears once per article, in the section about the creator-marketing part of the topic;
- never calls Kudozz the best provider; each article keeps ZSpace's own CTA.

These links pass no ranking credit by design. Their value is qualified referral traffic, and each article has to earn search visibility for ZSpace on its own.

## A. Kudozz audit (verified services)

Source: live `https://www.kudozz.in` and `src/content/services.ts` in the Kudozz repo. All 18 service pages are live, self-canonical and indexable. The five used as destinations were re-fetched on 2026-10-17 (200, self-canonical).

| Category | Services (URL `/services/{slug}`) |
| --- | --- |
| Plan and manage | campaign-strategy, creator-discovery, outreach-management, reporting |
| Campaign types | paid-influencer-campaigns, barter-influencer-campaigns, influencer-seeding-gifting, influencer-affiliate-marketing, ambassador-programs, product-launches, social-campaigns |
| UGC | ugc-campaigns, ugc-content-production |
| Platforms | instagram-influencer-marketing, youtube-influencer-marketing, linkedin-influencer-marketing |
| Audiences | regional-influencer-marketing, micro-nano-influencer-marketing |

Markets (owner-confirmed): India (primary), UAE, Saudi Arabia, UK, Australia and Singapore. **Not verified, so not claimed:** clients, results, case studies (the site holds samples only), team members and pricing.

The strongest intersections with ZSpace's audience are the five services where a build or technical decision meets a creator channel: product launches, UGC production, regional creators, LinkedIn B2B creators and seeding. The other 13 services are specialist influencer topics. Nine of them have no ZSpace angle; the remaining four are listed as P2 or P3 in the matrix.

## B. ZSpace content audit

- **Stack:** Next.js 16 App Router; posts are TypeScript data in `src/lib/blog-data-*.ts`, aggregated in `blog-data.ts`; `/blogs/[slug]` template with BlogPosting, FAQPage and BreadcrumbList schema; sitemap built from posts.
- **Size:** 1,057 posts before this batch, 1,062 after. Categories: Web Development 318, AI & Automation 254, UI/UX 193, Shopify & Ecommerce 162, CRO 82, Mobile Apps 48.
- **House style:** a question heading with a bold direct answer, then Key takeaways, a hypothetical example, Common mistakes, "Conclusion and next steps" with ZSpace's CTA, and a dated Sources section. The batch follows it.
- **Overlaps checked before choosing topics:**
  - Rejected as duplicates: an ambassador portal (`creator-commerce`), UGC video on product pages (`shoppable-video-ecommerce`), a traffic-spike guide (`ecommerce-scalability`), creator tracking (`shopify-analytics-tracking-audit`, plus the Kudozz tracking articles).
  - Kept, with a distinct angle and a link to ZSpace's generic guide: Indian-language pages (versus the generic `multi-language-ecommerce-website`), a SaaS launch (versus `saas-website-development`, which covers the site itself), and app pre-launch access (versus `mobile-app-launch-checklist`, which covers release).
- **Gap:** Mobile Apps is ZSpace's thinnest cluster, and the app-access article adds to it.

## C. Service-to-content matrix

See `service-content-matrix.csv`: all 18 Kudozz services, each with a ZSpace angle or the reason it has none.

## D. Prioritised roadmap

Ranking criteria: fit with ZSpace's business (a technology studio, not a marketing agency), a reader problem ZSpace can answer, a verified Kudozz service that genuinely covers the creator part, no duplicate on either site, and primary sources available. No search-volume data was available, so demand is an editorial judgement throughout.

| Priority | Item |
| --- | --- |
| **P1, batch 1 (done)** | D2C product launch plan; creator content rights management; regional-language pages for India; B2B SaaS launch plan; pre-launch app access for creators |
| P2 | Creative-testing infrastructure for paid social (UGC Campaigns); Instagram and TikTok in-app browser checkout behaviour (Instagram service, but only if primary sources can be found) |
| P3 | Ambassador programme portal (only with a build angle distinct from `creator-commerce`); a sponsored link inside `creator-commerce` for affiliate programmes (update, not a new article); a D2C channel-choice guide (off ZSpace's lane, so low) |

## E. First batch

| Slug | Category | Kudozz destination | Words | Inlinks |
| --- | --- | --- | --- | --- |
| d2c-product-launch-plan | Shopify & Ecommerce | /services/product-launches | 1,777 | 2 |
| creator-content-rights-management | Web Development | /services/ugc-content-production | 1,598 | 2 |
| regional-language-website-india | Web Development | /services/regional-influencer-marketing | 1,553 | 2 |
| b2b-saas-launch-plan | Web Development | /services/linkedin-influencer-marketing | 1,372 | 2 |
| app-beta-testing-creators-early-access | Mobile Apps | /services/influencer-seeding-gifting | 1,394 | 2 |

All five are in `src/lib/blog-data-launch-growth.ts`. Its header comment lists every source checked.

## G. Technical and editorial QA

**Files changed in ZSpace:**
- `src/lib/blog-data-launch-growth.ts` (new);
- `src/lib/blog-data.ts` (registers the file);
- `src/lib/inline-content.tsx` (adds the `|sponsored` link marker);
- one sentence each in five parent articles, adding a plain internal link to the new guide: `commerce-87`, `commerce-77`, `commerce-38`, `webdev-4`, `founder-2-build`.

No forms, API routes, environment variables, analytics or design were changed.

| Check | Result |
| --- | --- |
| Renderer regression | The new regex parses all 24,444 existing link tokens identically; `stripInline` unchanged |
| `tsc --noEmit` | Pass |
| `eslint src` | 0 errors; 9 warnings, all in files not touched |
| `next build` | Pass |
| Full crawl (1,094 URLs) | All 200; 0 duplicate titles or descriptions; every page has one H1 and a self-canonical; 0 JSON-LD errors; 0 broken internal links |
| New articles | Status 200; titles 57–64 characters (in line with existing posts); descriptions 146–150; schema parses; in the sitemap; each has 2 contextual inlinks |
| Kudozz links | 5 of 5 render `rel="sponsored noopener noreferrer"` with a visible disclosure; all 5 destinations return 200 |
| External sources | 9 of 9 return 200: Apple ×2, Google Play ×2, Google Search Central, web.dev, Shopify, LinkedIn, IPTC |
| Overlap | Against other ZSpace posts: at most 0.5% (5-word shingles). Against Kudozz articles: at most 1.2% (the D2C launch plan against the Kudozz landing-page guide, mostly shared vocabulary) |
| Em dashes | 0 |
| Fabrication | No statistics, clients or testimonials; every example is labelled hypothetical |

**Issues found and fixed during QA:**
1. Four Kudozz links were missing the `|sponsored` marker, so they would have rendered as unqualified paid links. All five now carry it.
2. Overclaims removed:
   - that Google Play's testing requirement exempts organisation accounts;
   - that Play testers get the latest build;
   - that ZSpace does "beta distribution".
3. Shopify's language limit was not stated, because only third parties report it.
4. Reading times were corrected to ZSpace's measured convention of about 211 words per minute (7–8 minutes, not the 10–11 I first wrote).
5. Excerpts were cut to 146–150 characters, so the meta descriptions are intentional rather than automatically trimmed.
6. Three search titles were shortened to fit the house length.
7. Inbound links were added, because the new pages were reachable only from the blog index.

**Not verified or not done:**
- Search demand: no Search Console, Keyword Planner or analytics data for either site.
- Phone-width screenshots: the articles use existing section types (body, checklist, table, CTA) that the template already renders.
- Outbound-click measurement to kudozz.in: confirm GA4 enhanced measurement is on.
- Legal review: the rights guide says it isn't legal advice, and it states no jurisdiction-specific law.

## H. Next five (in order)

1. **Creative-testing infrastructure for paid social:** asset naming, versioning and reporting. Kudozz UGC Campaigns. Gate: check overlap with ZSpace's AI content-ops posts.
2. **In-app browser behaviour from Instagram and TikTok links:** login, autofill and payments. Kudozz Instagram service. Gate: find primary documentation; drop the topic if none exists.
3. **A sponsored link inside `creator-commerce`** for brands that want a managed affiliate programme: Kudozz Influencer Affiliate & Performance Marketing. This is an update, not a new article. Gate: owner approval to edit a live article.
4. **Ambassador or creator programme portal build guide:** Kudozz Ambassador Programs. Gate: a build angle distinct from `creator-commerce` and the referral-programme post.
5. **App store pages in Arabic for Gulf launches:** RTL screenshots and custom product pages. Kudozz is weakly relevant here, so publish without a Kudozz link unless the article covers creator campaigns.

## Publishing checklist (when approved)

1. Review the five articles and the disclosure wording.
2. Commit ZSpace (8 changed files plus 1 new) and deploy.
3. Request indexing for the 5 URLs in Search Console and resubmit the sitemap.
4. Confirm the live HTML shows `rel="sponsored"` on the Kudozz links.
5. After 4–6 weeks, review impressions, queries and outbound clicks to kudozz.in, and choose the next batch from section H.
