# Internal Linking Architecture

Measured from the article data before (git HEAD) and after this project on 2026-10-03. "Contextual" means links inside article text, CTAs and FAQs, excluding template blocks (related articles, related services, navigation, footer).

## Results

| Measure | Before | After |
|---|---|---|
| Contextual article→article links | 6,261 | 6,343 |
| Contextual article→service links | 1,443 | 1,595 |
| Articles with no contextual service link | 144 | 0 |
| Articles with no inbound contextual link from another article | 40 | 0 |
| Median inbound contextual links per article | 6 | 6 |
| External reference links in articles | 515 | 523 (later removed: 0) |
| Broken internal links (crawl) | 0 | 0 |

Contextual service links after the project: website development 343, UI/UX 324, AI automation 308, Shopify 304, CRO 254, mobile app development 62. Mobile is lowest because its cluster is the smallest (34 articles); new mobile content in the roadmap will raise it.

## Architecture

```
Service page  ←→  Category hub  →  Pillar articles  →  Supporting articles
   ↑                    ↑                 ↑                     │
   └──── contextual service link in every article CTA ←─────────┘
```

- **Service pages** link to six curated guides each (replacing the previous "first three tagged posts") and to related industries and other services.
- **Category hubs** (`/blogs/category/[slug]`, new) link to the related service, six "start here" articles and every article in the category, server-rendered so crawlers see every link (the main blog listing is client-rendered and paginated).
- **Articles** link to their category hub via breadcrumbs, to their primary service in body/CTA, to related articles in text and through the template's related-articles block.
- **Hub-to-spoke sections added:** AI Agents by Industry (ai-agent-development, 34 links), Website Development by Business Type (website-development-guide, 11), Redesign Guides by Vertical (ecommerce-website-redesign, 7), Ecommerce Design by Product Category (ecommerce-website-design, 15). These connected all 40 previously orphaned articles.

## Anchor text

Service links added in this project rotate three descriptive anchors per service (for example "website development", "website and web app development services", "Next.js and React development work") to avoid repeated exact-match anchors. Hub sections use each article's own title as anchor text.

## Rules for new content

1. Link to the category hub's pillar and at least two related articles in the body.
2. Include one contextual link to the most relevant service page, usually in the closing CTA.
3. Add a link to the new article from at least one existing pillar or hub article.
4. Use descriptive anchors; avoid "click here" and identical anchors across many pages.
5. Keep links relevant; do not add links only to raise counts.
