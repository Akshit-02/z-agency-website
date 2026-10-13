# 08 — Blog-by-Blog Audit: Method, Results and Change Log

Completed 13 October 2026. The per-article results are in `09-blog-by-blog-report.csv` (all 1,030 articles: decision, rationale, implementation status, validation). The same columns are appended to `01-inventory.csv` for every URL.

## Method (and its limits)

1. **Full-text automated checks on every article** (`08-blog-audit-signals.csv`): research-attributed statistics without a source link; past dates written in the future tense; time-sensitive regulatory claims; self-claims about ZSpace; broken internal links; regional spelling and currency; answer-first structure; external citation count; inlinks; and TF-IDF nearest-neighbour similarity against all other articles. Candidate pairs were also checked with 8-word-sequence overlap.
2. **Card-level review of every article** in 11 batches (title, excerpt, full H2 outline, market, length, citations, inlinks, nearest neighbour, flags). Decisions are recorded in `08-blog-decisions-notes.tsv`. Rows starting `@family`/`@cluster` apply to groups.
3. **Targeted reading and primary-source verification** of every flagged claim before editing.

**Limit:** every sentence of all 1,030 articles was machine-checked, but I did not read every sentence of every article by hand. Human review was at card level plus full reads of flagged passages.

## Results

| Decision | Articles | Meaning |
|---|---|---|
| KEEP | 965 | Reviewed; no change justified. Includes groups flagged for the Search Console tier review (vertical matrix ~100, `ai-agents-in-*`/`-for-*` ~30). |
| UPDATE | 48 | Corrections applied (below). |
| MERGE | 17 | Proposed only; no redirects added: 11 `best-*` lists, traffic-no-leads ↔ not-converting, professional-services ↔ consulting-firms, shopify-cro-tips, shopify-skincare-store and others. **Needs approval.** |
| REWRITE / REDIRECT / DEINDEX / DELETE | 0 | None justified without Search Console data and approval. |

## Corrections applied (verified against primary sources)

| Issue | Articles | Source used |
|---|---|---|
| Said FAQ rich results are limited to government/health sites (the 2023 rule). Google retired them in 2026. | geo-uae (3 mentions), product-structured-data-ecommerce, ai-search-ready-website-uae, arabic-seo-uae | Google Search Central FAQ changelog |
| Visible notes exposing the research process ("blocked our fetcher", "search summaries we could not verify", "could not open the press release") | ~25 articles, mostly Australia/UAE | Rewritten as plain reader guidance ("summarised from official guidance; check current position") |
| Gartner and McKinsey cited only "as reported" | ai-automation-roi, ai-development-cost-uae, agentic-ai-readiness-uae, ai-agents-australia, ai-automation-cost-australia, ai-governance-australia | Gartner newsroom (25 Jun 2025); Gartner July 2024 release (via republication); McKinsey *The state of AI in 2025* (39% EBIT impact confirmed) |
| Unsourced figures ("commonly cited 10–15% recovery", "4.2–4.7 stars", "ten or more reviews") | shopify-exit-intent-optimization, shopify-social-proof | Unsupported figure removed; star-rating and review-volume claims now cite Northwestern's Spiegel Research Center |
| Core Web Vitals described as "commonly cited … roughly" | shopify-core-web-vitals-performance-guide | Stated as Google's thresholds at the 75th percentile, citing web.dev |
| "Google penalizes intrusive popups" | shopify-popups-cro | Changed to "may lead to poor search performance", citing Google Search Central |
| Baymard abandonment statistics named but unlinked | 21 statements in 7 data files | Verified against Baymard (70.22% across 50 studies; 40/20/19/18/17/12/9% reasons); links added only to sentences naming Baymard |
| EU low-value imports stated vaguely | ecommerce-duties-import-taxes | European Commission: temporary €3 duty per item from 1 Jul 2026; €150 threshold removal expected ~2028 |
| "In our experience" with no published projects | mobile-app-development-cost-australia | Neutral wording |

`updated` dates were **not** changed. These are corrections, not substantial rewrites, and Google warns against refreshing dates for minor changes.

## Claims checked and confirmed accurate (no change)

| Claim | Article | Source |
|---|---|---|
| MCP 2026-07-28 stateless specification | model-context-protocol | modelcontextprotocol.io/specification |
| UK digital waste tracking mandatory 1 Oct 2026; 2 working days | digital-waste-tracking-software-uk | GOV.UK |
| MTD for Income Tax: £50k from 6 Apr 2026, £30k 2027, £20k 2028 | making-tax-digital-software-integration | GOV.UK |
| AU unfair trading practices passed Jul 2026, in force 1 Jul 2027 | subscription-ecommerce-australia | Law-firm summaries (Allens, Ashurst, HWL Ebsworth) |
| US de minimis suspended 29 Aug 2025; statutory repeal 1 Jul 2027 | ecommerce-duties-import-taxes | White & Case, Benesch |
| EAA applies to UK sellers only for EU sales | ecommerce-accessibility | Article already scoped correctly |
| Baymard figures as stated | ~15 checkout articles | Baymard |

## Still open

- Primary-source re-checks for lower-risk dated claims inside the ~85 "time-sensitive regulatory" articles not listed above. Most already cite official sources inline. Review them quarterly.
- MERGE proposals and the Search Console tier review (needs data and approval).
- About 800 pre-October articles cite no external sources. Add citations only where an article makes factual claims; many are method guides that don't need them.
