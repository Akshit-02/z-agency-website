# UK Batch 531–580: Implementation Report

Completed 2026-10-10 on branch `seo/australia-content-batches`. The changes are uncommitted; nothing was deployed or published outside the repository. The audit, matrix and briefs are in [`uk-batch-531-580-audit.md`](./uk-batch-531-580-audit.md).

## 1. Completed work

### New articles (6)

| Slug | Topics | Body words (approx.) | FAQs | File |
|---|---|---|---|---|
| `custom-software-development-uk` | 539 + 540 | 1,530 | 5 | `src/lib/blog-data-uk-business.ts` |
| `food-traceability-software-uk` | 544 | 990 | 5 | same |
| `digital-waste-tracking-software-uk` | 549 | 860 | 5 | same |
| `replacing-spreadsheets-with-custom-software` | 533 | 600 | 5 | `src/lib/blog-data-build-integration.ts` |
| `amazon-ebay-marketplace-integration` | 554 | 690 | 5 | same |
| `saas-audit-logging` | 567 | 580 | 5 | same |

Each new page includes:
- A bold direct answer first.
- A "Key takeaways" checklist.
- Decision tables or checklists.
- A labelled hypothetical example.
- A "Common mistakes" list.
- A dated Sources section (5 of the 6 pages).
- A proportionate CTA.

UK pages say ZSpace Labs is remote-first with no UK office. The waste page also states that ZSpace Labs is not on Defra's software provider list. No prices, rates, statistics, clients or certifications are claimed.

### Updated articles (2)

- **`ecommerce-returns-management`** (`src/lib/blog-data-commerce-63.ts`):
  - New section "UK Returns Rules That Change the System".
  - New FAQ on UK returns rules.
  - Excerpt shortened from 161 to 159 characters.
  - `updated` set to 2026-10-10.
- **`ecommerce-accessibility`** (`src/lib/blog-data-commerce-60.ts`):
  - New section "UK Retailers: Equality Act, EAA and Public Sector Rules".
  - `updated` set to 2026-10-10.

Both updates add content only. No existing text was removed.

## 2. Internal-linking map

| New page | Links out to (contextual) | Linked from (added) |
|---|---|---|
| custom-software-development-uk | low-code-vs-custom-software, replacing-spreadsheets-with-custom-software, software-maintenance-contracts-australia, software-vendor-handover-checklist, privacy-by-design-software-australia, custom-software-development-australia; services: website-development, mobile-app-development, ai-automation | custom-software-development-australia, how-to-choose-website-development-company, replacing-spreadsheets-with-custom-software |
| replacing-spreadsheets-with-custom-software | low-code-vs-custom-software, workflow-digitization-australia, data-migration-australia, custom-software-development-uk | low-code-vs-custom-software, workflow-digitization-australia, custom-software-development-uk |
| food-traceability-software-uk | quality-management-software, manufacturing-software-integration, offline-first-mobile-app-development | quality-management-software, manufacturing-software-integration |
| digital-waste-tracking-software-uk | api-integration-reliability, route-optimization-software | route-optimization-software, logistics-software-development-australia |
| amazon-ebay-marketplace-integration | ecommerce-product-information-management, omnichannel-ecommerce-architecture, payment-reconciliation-automation; services: shopify-development, website-development | omnichannel-ecommerce-architecture, ecommerce-product-information-management |
| saas-audit-logging | multi-tenant-saas-architecture, saas-roles-and-permissions, joiner-mover-leaver-automation | saas-roles-and-permissions, multi-tenant-saas-architecture |

No new page is an orphan. Anchors are descriptive and varied, and `relatedSlugs` is set on every page.

## 3. Technical SEO and structured data

- New URLs only. No URL, canonical or redirect changes, and no deletions.
- Every new page has a unique `seoTitle` (≤65 characters), excerpt (≤160), H1 and self-canonical. Robots is `index, follow`, and the pages appear in the sitemap automatically.
- JSON-LD comes from the existing template. Rendered HTML for all 8 changed pages contains BlogPosting, BreadcrumbList and exactly one FAQPage, built from visible FAQs.
- `public/llms.txt`: the UK guides section was extended with the 3 UK pages, the 2 UK sections and the 3 generic pages.

## 4. QA results (actually run)

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Passed |
| `npx eslint` (new files, registry, two updated files) | Passed |
| `npm run build` | Passed (exit 0), run after the final edits |
| Internal links across all posts | 1,022 posts, 0 broken |
| Duplicate titles, H1s and meta descriptions | None |
| Length, banner, scene and industry validity (new pages) | Passed |
| Rendered HTML: title, canonical, single H1, FAQPage, robots | Passed for all 8 changed pages |
| Sitemap inclusion | Confirmed in build output |
| `next start` local server: HTTP 200 for all 8 changed URLs | Passed |
| Mobile layout (structural) | Tables in `overflow-x-auto` wrappers, code blocks scroll, viewport meta present |
| Visual browser check (desktop and mobile) | **Not performed.** The Chrome extension was not connected |
| External links (22 unique across new and updated pages) | 20 return 200/202. food.gov.uk/ppds returned 404 and was replaced with the current FSA PPDS URL (that site was rate-limiting at the time, returning 503). developer.ebay.com returns 403 to automated requests |
| External schema validator, performance or Lighthouse run | **Not performed** |
| Automated tests | None exist in the repository |

**Separate issue:** an unrelated Node process was already listening on port 3123 from an earlier session. It was left alone, and port 3157 was used instead.

## 5. Unresolved issues, assumptions and limitations

- **Time-sensitive facts:**
  - Digital waste tracking dates for Scotland and Northern Ireland, and the later phase for carriers (Oct 2027).
  - R&D overseas-restriction guidance, which may change.
  - Absence of UK adequacy regulations for India.
  
  Each is hedged on the page. Review after Jan 2027, or when HMRC or the ICO change guidance.
- **Secondary sources:** some sources are secondary (Business Companion and council trading standards for returns; commentary on the EAA and Equality Act). The pages are worded generally and point readers to legal advice.
- **Mixed uncommitted work:** the branch also carries uncommitted work from earlier AU and UK batches, so commit this batch's files deliberately.
- **Inconsistent company wording:** "India-based" (AU pages) vs "remote-first, works with clients globally" (UK pages). Pick one wording for the whole site.

## 6. Change log

**Created**
- `src/lib/blog-data-uk-business.ts`
- `src/lib/blog-data-build-integration.ts`
- `docs/seo/uk-batch-531-580-audit.md`
- `docs/seo/blogs-531-580-uk-implementation.md`

**Modified**
- `src/lib/blog-data.ts`: registration of the two new files.
- `src/lib/blog-data-commerce-63.ts`: returns UK section, FAQ, excerpt.
- `src/lib/blog-data-commerce-60.ts`: accessibility UK section.
- `src/lib/blog-data-au-software.ts`, `blog-data-webdev-2.ts`, `blog-data-au-build-decisions.ts`, `blog-data-au-operations.ts`, `blog-data-au-ops-reliability.ts`, `blog-data-au-sector-platforms.ts`, `blog-data-au-ops-mobile.ts`, `blog-data-au-industry-2.ts`, `blog-data-commerce-75.ts`, `blog-data-commerce-73.ts`, `blog-data-au-saas-growth.ts`, `blog-data-au-saas-engineering.ts`: one backlink sentence each in the Conclusion.
- `public/llms.txt`: UK guides section extended.

**Untouched:** routing, templates, components, sitemap and robots code, structured-data code, service pages, redirects and configuration.

## 7. Remaining steps

- Review the content and commit. Deployment needs your authorisation.
- After deployment: run a visual mobile and desktop check, a Rich Results Test on one page, and a Search Console inspection of the new URLs.
