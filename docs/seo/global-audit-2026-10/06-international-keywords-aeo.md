# 06 — International Targeting, Keyword/Intent Map, AEO/GEO and Internal Linking

The research behind this plan is in `05-market-research.md`. **No search volumes are stated** because no keyword tool was available. Priorities come from intent, service fit, competition observed and the business evidence available.

## 1. Current international architecture (inspected)

| Item | State |
|---|---|
| Domain | `www.zspace.in` (ccTLD → Google treats the site as India-targeted) |
| Language | English only; `<html lang="en">` |
| Regional versions | **None.** Regional content consists of individual articles with `-australia`, `-uae`, `-uk` suffixes on the same English site. |
| hreflang | None, which is **correct**: there are no equivalent language/region versions to annotate |
| IP or locale redirects | None (correct) |
| Canonicals | Self-referencing on all 1,062 URLs (correct) |
| Legacy India URLs | `/web-development-company-india` and 5 others → 308 to the service pages (correct; no duplicates) |

### Recommendation

1. **Keep the current architecture. Add no hreflang and no subfolders now.** Hreflang is only for genuine equivalent versions. Annotating `website-development-cost` ↔ `website-development-cost-australia` would be wrong: they are different articles, not translations or localisations of one page.
2. **Decide the domain question first** (`05-market-research.md` §D). If the business wants to compete for AU/UK/UAE commercial queries, a gTLD migration is the structural lever. Hreflang is not.
3. If regional commercial pages are approved (section 2), use **subdirectories on the same host**: `/uae`, and later `/australia`. Each page needs a self-referencing canonical and a visible "Where we work" link in the footer. No hreflang unless a true equivalent version exists, such as a future Arabic `/ar/` version of a UAE page.
4. Never auto-redirect by IP or Accept-Language.

## 2. Country-by-country targeting decision

| Market | Global service pages | Dedicated regional page | City pages | Regional articles | Separate enquiry flow |
|---|---|---|---|---|---|
| India | **Yes.** The service pages *are* the India pages. | Not needed | **No** | Only where India-specific (DPDP, UPI/COD, GST) | No. The form already handles it. |
| UAE | Yes | **Conditional:** one `/uae` page *if* the business confirms UAE clients and an honest delivery model | **No** (Dubai/Abu Dhabi) | Enough exist (37). Only time-bound additions (e-invoicing) | No. Optionally add an AED budget display. |
| Saudi Arabia | Yes | **No (defer)** | No | No new | No |
| Qatar / other GCC | Yes | **No (reject for now)** | No | No | No |
| Australia | Yes | **Not yet.** Decide the domain first, then optionally one honest page. | **No** | **Freeze** at 135; refresh only | No |
| UK | Yes | **No** | No | **Freeze** at 13. No more regulated-sector pieces. | No |
| Singapore | Yes | **No** | No | None | No. Never imply PSG/EDGE eligibility. |

### What a legitimate regional page must contain (for `/uae`, if approved)

- Who ZSpace Labs works with in the UAE and **how**: remote from India, the time-zone overlap (UAE is 1.5 h behind IST), meeting cadence, contract and invoicing currency. **Only true facts.**
- UAE-specific delivery knowledge already demonstrated on the site: Arabic/RTL, WhatsApp, payments and the e-invoicing integration readiness (not tax advice).
- Real UAE proof if any exists (a case study, a client quote with permission). If none exists, say so rather than imply it.
- Links to the 6 service pages and the strongest 6–8 UAE articles. A link from the footer "Where we work".
- **No** address, phone number, map or `LocalBusiness` markup unless a UAE entity actually exists.

## 3. Keyword and search-intent map

The intent column uses the stages Learn → Compare → Buy.

| Query family (examples) | Intent | Market | Mapped URL (existing) | Action |
|---|---|---|---|---|
| web development company in india / website development company india | Buy | IN | `/services/website-development` | Keep. Strengthen proof. |
| mobile app development company in india | Buy | IN | `/services/mobile-app-development` | Keep |
| shopify development company / agency india | Buy | IN | `/services/shopify-development` | Keep |
| ai automation agency india | Buy | IN | `/services/ai-automation` | Keep |
| ui ux design agency india | Buy | IN | `/services/ui-ux-design` | Keep |
| cro agency india / conversion rate optimisation services | Buy | IN | `/services/cro-audit` | Keep |
| best [service] company in india | Compare | IN | `/blogs/best-*-in-india` | **Reframe** (04 §F2 option A) |
| best [service] in mumbai / bengaluru / delhi ncr / gujarat / ahmedabad | Compare (local) | IN | 5 city lists | **Merge + 301** into the India lists (04 §F2 option B) |
| how to choose a [service] company | Compare | Global | `/blogs/how-to-choose-*` | Keep. Absorb the "best" content. |
| website / app / shopify development cost | Compare | Global | `/blogs/*-development-cost` | Refresh with own ranges if approved |
| website development cost australia (AUD) | Compare | AU | `/blogs/website-development-cost-australia` | Keep |
| agency vs freelancer (web/app/shopify) | Compare | Global | check existing slugs before creating | **Search first.** Create one global page only if none exists. |
| shopify development agency dubai / uae | Buy | AE | none (service page says India) | **Conditional `/uae` page** |
| uae e-invoicing integration / erp e-invoicing readiness | Learn → Buy | AE | none confirmed (check the UAE modules) | **CREATE if UAE is confirmed** |
| dpdp website compliance / consent for website forms india | Learn | IN | check the India/governance modules | **CREATE after overlap check** |
| ai agent development / ai workflow automation | Learn → Buy | Global | `/blogs/ai-agent-development`, `/blogs/ai-workflow-automation` | Refresh (evaluation, approvals) |
| app development company singapore / web development agency london | Buy | SG/UK | none | **Do not target** |

## 4. "Best" and comparison queries: honest framework

- ZSpace Labs should **not** claim to be "the best" anywhere. There is no third-party evidence (reviews, awards, rankings) to support it.
- Comparison content should help a buyer choose: a criteria checklist, questions to ask, red flags, and when an agency vs a freelancer vs in-house fits. ZSpace's own fit is stated in the same terms, including when it isn't a fit.
- The legitimate path into "best [service] in India" SERPs is through **directories with verified reviews** (Clutch, GoodFirms, DesignRush profiles) and earned inclusion in third-party lists, not self-ranking.

## 5. AEO / GEO: grounded in Google's October 2026 guidance

**Already in place and correct:** server-rendered HTML for all content; a direct-answer "definition" block on every service page; question-led FAQs; descriptive H2s; tables and checklists in articles; consistent entity facts (name, previous name, email, remote-first, no offices) across About, `llms.txt` and JSON-LD; honest disclosure of what isn't published.

**Changes recommended (and why):**

| Do | Reason (source) |
|---|---|
| Add real author bylines with `Person` markup and an author page | Google recommends clear authorship. It strengthens trust, the most important part of E-E-A-T. (helpful-content guide) |
| Publish real case studies | Original, first-hand information is what Google says makes content "unique, compelling and useful" for generative features (AI-optimisation guide) |
| Keep `llms.txt` accurate but invest nothing further in it | Google: it "will neither harm nor help". Other assistants may read it. |
| Keep FAQPage markup only where FAQs are visible; expect no rich result | FAQ rich results were retired in 2026 |
| Measure with the Search Console Generative AI report (impressions only) | It is the only first-party AI visibility data; no third-party tool sees Google's systems |

**Do not:** add special schema for AI, split articles into fragments, add hidden text, publish more location × service pages, seek inauthentic mentions, or promise AI citations. Google lists all of these as unnecessary or risky.

## 6. Internal linking plan

The current state is strong: 0 orphans, a median of 8 contextual inlinks per article, every article links to a service, and category hubs list all articles (`docs/seo/internal-linking.md` describes the rules).

| Change | Where | Priority |
|---|---|---|
| When case studies exist: link each from its service page (new "Work" section), the relevant industry page and 2–3 related articles | Service, industry and article templates | P2 (blocked on case studies) |
| If `/uae` is approved: footer "Where we work" link, links from the 6 service pages' FAQ "Do you work outside India?", and from the top UAE articles | Footer, service FAQ, UAE articles | P3 |
| After the F2 merges: update every internal link to the merged slugs (avoid redirect hops) | Search `blog-data*.ts` for the old slugs | P2 |
| Hub "start here" lists: remove `best-*-in-india` once reframed | `src/lib/blog-categories.ts` `startHere` | P2 |
