# 04 — Content, Cannibalisation and Refresh Audit

Measured 12 October 2026 from a full crawl of the local production build: 1,062 sitemap URLs, of which 1,027 are articles. Per-URL data is in `01-inventory.csv`. Word counts include in-article CTAs and related links, so treat them as approximate.

## 1. Corpus profile

| Measure | Value |
|---|---|
| Articles | 1,027 |
| Published Sep–Oct 2026 | **~937** (427 in Sep, 510 in Oct to date). 93 were published Nov 2025–Aug 2026 |
| Category split | Web Development 310 · AI & Automation 254 · UI/UX 188 · Shopify & Ecommerce 157 · CRO 77 · Mobile Apps 44 |
| Regional modules (source files) | Australia 135 · UAE/GCC 37 · India 16 · UK 13 · Singapore 0 |
| Length (approx.) | <1,200 words: 123 · 1,200–1,600: 384 · 1,600–2,000: 324 · 2,000–3,000: 140 · >3,000: 59 |
| Internal inlinks per article (main content) | p10 = 3, median = 8, p90 = 19. **No orphans.** |
| Articles without a service link | 0 |
| Author | Every article is attributed to the Organization. There are **no named authors or bylines**. |
| Future-dated posts | None |

## 2. Findings, ranked by risk

### F1. Publishing velocity and anonymous authorship (HIGH, business decision)

About 940 long-form articles were published in roughly six weeks, with no identifiable author. Google's helpful-content guidance lists "using extensive automation to produce content on many topics" and content made "primarily to attract visits from search engines" as warning signs. It recommends bylines that link to author background. The AI-optimisation guide warns that creating many pages to target query variations may violate the scaled content abuse policy.

What I did and did not find:

- **Not near-duplicates.** Sibling articles in templated families (e.g. `{jewelry,skincare,food,pet}-ecommerce-website-design`, `website-development-cost` vs `-australia`) share only **9–19% of 8-word sequences**, and much of that is shared CTA/FAQ boilerplate. The text is genuinely varied.
- **Templated families do exist:** `ai-agent-*` (25), `*-website-development` (23), `*-development-australia` (20), `ai-agents-in-*` (17), `*-ecommerce-website-design` (15), `*-ecommerce-ux` (13) and others.
- **Regional coverage exceeds verified presence.** For example, 13 UK articles on NHS, open banking, MTD and GDS cover regulated topics where the site has no UK case evidence or credentials.

I can't tell from the outside whether Google has reacted. That needs Search Console (indexing coverage and impressions trend since September).

**Recommendation (needs approval):**
1. **Pause bulk publishing now.** Publish only articles that pass the checklist in section 6.
2. **Add real authorship.** Pick one or two real people at ZSpace Labs and give each a byline, an author page (`/about#team` or `/authors/[name]`) and `Person` markup. Do not invent names, photos or credentials. *Blocked on business input.*
3. **Run a quality-tier review** once Search Console data exists:
   - Tier A: has impressions and fits a service. Keep and improve.
   - Tier B: no impressions after 90 days, but on-topic. Improve or merge into a hub.
   - Tier C: off-service, or regulated topics outside demonstrable competence (several UK/AU sector pieces). `noindex`, or remove with a 301 to the closest hub.

   **Do not mass-noindex without data.** That would discard any signals the pages have earned.

### F2. Self-ranked "best X in [place]" lists (MEDIUM-HIGH, business decision)

There are 11 lists that rank ZSpace Labs first: 6 India-wide (`best-{web-development-agencies,mobile-app-development-companies,shopify-development-agencies,ai-automation-agencies,ui-ux-design-agencies,cro-agencies}-in-india`) and 5 city/state lists (Mumbai, Delhi NCR, Bengaluru, Gujarat, Ahmedabad). The disclosure is honest: the About page and `llms.txt` say ZSpace lists itself first and that the others were checked on official sites. However:

- Analyst evidence (not a Google statement) links self-ranked lists to 2026 visibility losses.
- The city lists sit uneasily with the site's own correct decision not to create city pages without a local presence. The lists rank for "[service] in [city]" while ZSpace has no office there.
- ZSpace has no published proof (case studies, reviews) to justify a #1 position.

**Options (choose one):**

| Option | Effect | Recommendation |
|---|---|---|
| A. Reframe as "How to choose a [service] company in India", with a vendor-neutral checklist, a disclosed note that ZSpace Labs is the publisher, and the listed companies kept but **unranked** and **without ZSpace at #1** | Keeps URL equity and keeps the content useful | **Recommended** for the 6 India-wide lists |
| B. Merge the 5 city/state lists into the India-wide equivalents with 301s | Removes city-intent pages that conflict with the no-city-pages policy | **Recommended** |
| C. Keep as is | Lowest effort; carries the risk described above | Not recommended |

Note: the `how-to-choose-*` articles already exist for every service. If A is chosen, merge rather than duplicate (see cannibalisation below).

### F3. Regional twins (LOW-MEDIUM)

| Global | Regional | Overlap (8-gram) | Decision |
|---|---|---|---|
| website-development-cost | website-development-cost-australia | 9.6% | KEEP both. AUD pricing and the AU market are a distinct intent, but the AU page should be the only one mentioning AUD. |
| mobile-app-development-cost | mobile-app-development-cost-australia | 12.7% | KEEP both (same reasoning) |
| ai-lead-qualification | ai-lead-qualification-uae | 9.0% | KEEP both **only if** the UAE page has UAE-specific substance (Arabic, WhatsApp, PDPL). Otherwise MERGE into the global page. |
| ai-knowledge-base | ai-knowledge-base-uae | not measured | Same rule |
| ai-ecommerce | ai-ecommerce-australia | not measured | Same rule |
| payment-gateway-integration | payment-gateway-integration-australia | not measured | KEEP (AU payment rails and surcharging rules differ) |

### F4. Intent overlaps to watch (LOW)

- `how-to-choose-*` vs `best-*-in-india`: the same "choose a provider" intent. Resolve with F2 option A.
- `website-redesign-vs-rebuild` vs `shopify-redesign-vs-rebuild`: distinct platforms. KEEP and cross-link.
- `ecommerce-product-discovery` vs `ai-product-discovery`: distinct (UX vs AI). KEEP and cross-link.
- The vertical × topic matrices (`{vertical}-ecommerce-website-development`, `-website-design`, `-ux`, `-search`) have similar titles but measurably different bodies. **Do not extend these matrices further.** Treat their performance in Search Console as the test of whether they serve anyone.

## 3. Content map: what connects to what

```
Home ──► /services (hub) ──► 6 service pages ──► curated "Guides" (6 per service)
  │                               │                     ▲
  │                               └──► industry pages ──┘ (relatedBlogSlugs)
  └──► /blogs ──► 6 category hubs ──► every article ──► 1+ service link (100%)
                                              └──► related articles (curated + automatic)
```

This architecture is sound and already implemented: no orphans, every article links to a service, and category hubs list everything. The gaps are **proof** (no case-study node exists) and **regional commercial nodes** (none exist; see 06).

## 4. Refresh priorities (existing content first)

Order these by Search Console data once available. Until then, use commercial value:

| # | Page(s) | Why | Action |
|---|---|---|---|
| 1 | 6 service pages | Highest commercial intent | See 03-service-pages-and-conversion.md |
| 2 | `website-development-cost`, `mobile-app-development-cost`, `shopify-development-cost` | Cost queries convert. They currently explain drivers without numbers. | Add **ZSpace's own** typical engagement ranges if the business approves publishing them. Never use invented "market averages". |
| 3 | 6 `how-to-choose-*` + 6 `best-*-in-india` | Same intent; listicle risk | F2 option A: merge into one strong page per service |
| 4 | `ai-workflow-automation`, `ai-agent-development`, `business-process-automation` | AI service hub guides | Add evaluation, permissions and approval patterns, plus the Gartner/MIT context (cited) and a "when not to use AI" section |
| 5 | Australia/UAE/UK articles that mention dated regulations | Dates move (AU ADM Dec 2026; UAE e-invoicing Jan/Jul 2027; India DPDP May 2027; UK DUAA) | Re-verify each date against the primary source and set `updated` **only** where content materially changes |

## 5. New content: CREATE / UPDATE / MERGE / DEFER / REJECT

The rule: no new article unless it maps to a service, has an angle the site doesn't already cover, and can show first-hand reasoning.

| Topic | Market | Decision | Why |
|---|---|---|---|
| Case studies (any real project, even anonymised with permission) | All | **CREATE (top priority)** | The largest proof gap vs every competitor. Needs real projects. Blocked on business input. |
| UAE e-invoicing: what changes for your ERP, website checkout and invoice data (integration view, not tax advice) | UAE | **CREATE** (if UAE is confirmed as a market) | Time-bound (1 Jan 2027 / 1 Jul 2027); service fit; check the 37 UAE articles for overlap first |
| India DPDP: what your website forms, consent and analytics need before May 2027 | India | **CREATE** after checking `blog-data-india` and the AI governance clusters for overlap | Time-bound; every website build touches it; ZSpace can show its own implementation |
| UK analytics cookies after the Data (Use and Access) Act | UK | **DEFER** until ZSpace fixes its own consent/opt-out (then write from experience) | Credibility: fix your own site first |
| Australia ADM transparency for AI-assisted decisions (Dec 2026) | AU | **UPDATE** an existing AU AI-governance article rather than create one | 135 AU articles already; avoid adding more |
| More "AI agents in [industry]" | Global | **REJECT** | 17+ already exist; no differentiation |
| More "[vertical] ecommerce website design/development" | Global | **REJECT** | Matrix already saturated |
| Saudi / Qatar / Singapore market pages | ME/SG | **DEFER / REJECT** | See 05-market-research.md |
| City pages (Dubai, Sydney, London, Bengaluru …) | All | **REJECT** | No local presence; doorway risk |

## 6. Publishing checklist (every new or refreshed article)

1. Search existing slugs and titles for the same intent. If one exists, update it instead.
2. State the answer in the first 2–3 sentences.
3. Include at least one element only ZSpace can provide: a worked example from real delivery, a decision framework used with clients, a measured result or a clearly labelled opinion.
4. Cite primary sources for any regulation, date or statistic. Recheck dates on the publication day.
5. Byline a real person (once F1.2 is done).
6. Link to the mapped service page and one hub. Add a contextual CTA that matches the reader's stage.
7. Set `updated` only for material changes.
