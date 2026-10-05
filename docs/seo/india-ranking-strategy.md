# India Ranking Strategy

Prepared 2026-10-04. Companion to [india-keyword-research.md](india-keyword-research.md) and [india-competitor-database.md](india-competitor-database.md).

No ranking position is promised. Rankings depend on Google, competitors and authority signals outside this website's control. This document describes what was done on-site and what has to happen off-site.

## Positioning

ZSpace Labs is a **remote-first studio serving businesses across India** (and global clients) with one team for design, engineering, Shopify, AI automation and CRO. It is not described as based in any Indian city, because no office is published.

Defensible differentiators, all verifiable on the site:

1. One team across six services. Most competitors specialise in one or two.
2. Transparent, disclosed comparison content that explains *fit*, including where ZSpace Labs is the wrong choice.
3. A large, practical knowledge base (770+ pages).

Honest weaker areas: no published case studies, testimonials, certifications or awards, and no capacity for large enterprise programmes. Fixing the first two is the single biggest lever for both rankings and conversion (see Owner actions).

## Page architecture

| Intent | Page type | URLs |
|---|---|---|
| Transactional ("X company in India") | Service pages, India-optimised | `/services/{website-development, mobile-app-development, shopify-development, ai-automation, ui-ux-design, cro-audit}` |
| Commercial investigation ("best X in India") | Disclosed listicles | `/blogs/best-…-in-india` (6) |
| Evaluation ("how to choose") | Guides | `/blogs/how-to-choose-…` (6, three new) |
| Informational | Cluster articles | existing 750+ articles, plus `ui-design-vs-ux-design`, `crm-automation-guide` |

Suggested India URLs from the brief (`/web-development-company-india` etc.) **308-redirect** to the existing service pages instead of creating duplicates. Existing service URLs already hold the internal links and topical history.

## Internal linking model

- Service page → "Guides" grid now includes its India listicle and its how-to-choose guide.
- Listicle → service page (CTA, ZSpace profile, sources), how-to-choose guide, cost and comparison articles.
- How-to-choose guides → listicle and service page.
- Category hubs → listicle in "Start here".
- `llms.txt` lists India service pages and comparison articles, with publisher disclosure.

## Technical SEO status

- Titles: India-intent titles on six service pages, homepage and `/services` (all ≤70 chars including brand suffix).
- Canonicals: self-referencing on all pages, verified.
- Schema: Organization (`areaServed: India, Worldwide`), WebSite, WebPage, Service (`areaServed` India + Worldwide), BreadcrumbList, BlogPosting (author and publisher = Organization), FAQPage for visible FAQs. **No Review, AggregateRating or QAPage schema.**
- Sitemap: 771 URLs, all 200. Redirects: 6 × 308.
- No `hreflang`: the site has one English version for all markets, so hreflang is not needed.

## City pages: decision

**Not created.** City pages ("web development company in Bengaluru", "… in Mumbai") would need a real local presence, local clients or genuinely different content to avoid being doorway pages. ZSpace Labs has no office in any city and no city-specific case studies. Revisit only if one of these becomes true; then create one page per city with real local proof, not templated copies.

## Authority and backlink plan

No links have been bought, no outreach sent and no directories submitted. Everything below needs owner approval before any external contact.

**Priority 1 — foundations (owner)**
1. Google Search Console and Bing Webmaster Tools: verify, submit sitemap, request indexing of the 6 service pages and 11 new articles.
2. Google Business Profile: only if eligible. A remote business without a staffed address should use a service-area profile, and only if Google's guidelines allow. Do not create a fake address.
3. Verified social profiles (LinkedIn company page at minimum) linked from the Organization schema `sameAs` once they exist.

**Priority 2 — relevant directories (owner approves each)**
Clutch, GoodFirms, DesignRush, Shopify Partner Directory (if eligible). These dominate the SERPs observed and are legitimate listings. Reviews on them must come from real clients and must never be incentivised against platform rules.

**Priority 3 — earned mentions**
- Contribute genuinely useful pieces (not link-bait) to Indian startup and D2C communities and publications.
- Publish original, verifiable resources (e.g. checklists for UPI/COD checkout setup, DPDP Act data-handling checklist for automations) that others cite.
- Partner and tool directories for platforms actually used in client work.

**Do not:** buy links, use PBNs, mass-submit to irrelevant directories, spam comments or forums, or automate outreach.

## Owner actions that move rankings most

1. Publish 2–3 real case studies with client permission (problem, approach, verifiable outcome).
2. Collect real testimonials with permission; add them only with names/roles the client approves.
3. Set up Search Console and record a baseline (see [india-keyword-tracking.md](india-keyword-tracking.md)).
4. Approve the directory list above.
5. Decide whether to publish indicative pricing ranges; "cost in India" queries convert well but must reflect real rates.
