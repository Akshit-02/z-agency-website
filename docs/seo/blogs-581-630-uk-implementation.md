# UK Batch 581–630: Implementation Report

Completed 2026-10-10 on branch `seo/australia-content-batches`. The changes are uncommitted; nothing was deployed or published externally. Audit and briefs: [`uk-batch-581-630-audit.md`](./uk-batch-581-630-audit.md). Matrix: [`uk-batch-581-630-matrix.csv`](./uk-batch-581-630-matrix.csv).

## 1. Completed work

### New articles (8)

| Slug | Topics | File |
|---|---|---|
| `uk-public-sector-software-procurement` | 582 + 581 | `src/lib/blog-data-uk-public-digital.ts` |
| `gds-service-standard-for-product-teams` | 583 | same |
| `identity-verification-integration-uk` | 584 + 595 | same |
| `electronic-signature-integration-uk` | 586 | same |
| `fleet-maintenance-software-uk` | 598 | same |
| `multi-brand-website-architecture` | 605 | `src/lib/blog-data-delivery-web.ts` |
| `user-acceptance-testing-business-software` | 612 + 611 | same |
| `secure-file-uploads` | 616 | same |

Each new page includes:
- A bold direct answer first.
- A "Key takeaways" checklist.
- Decision tables.
- A labelled hypothetical example.
- A "Common mistakes" list.
- Dated sources (7 of the 8 pages; the UAT page is practice-based and has no external claims).
- A proportionate CTA.

Explicit non-claims:
- ZSpace Labs has no UK office.
- It claims no public sector framework places.
- It is not a digital verification service.

### Updated articles (2)

- **`b2b-customer-onboarding-automation`** (`src/lib/blog-data-au-build-decisions.ts`): new "UK considerations" section and FAQ; `updated` set.
- **`website-accessibility-guide`** (`src/lib/blog-data-webdev-3.ts`): new "UK Requirements and Accessibility Audits" section; excerpt shortened from 171 to 155 characters (an existing issue); `updated` set.

Both updates add content only.

## 2. Internal-linking map

| New page | Links out | Linked from (added this batch) |
|---|---|---|
| uk-public-sector-software-procurement | gds-service-standard-for-product-teams; services: website-development, ui-ux-design | technical-discovery-software-projects, custom-software-development-uk |
| gds-service-standard-for-product-teams | user-research-methods, uk-public-sector-software-procurement | user-research-methods, software-product-discovery-australia, uk-public-sector-software-procurement |
| identity-verification-integration-uk | identity-verification-integration-australia, workforce-credential-management-software | identity-verification-integration-australia, recruitment-software-development-australia, b2b-customer-onboarding-automation |
| electronic-signature-integration-uk | saas-audit-logging, contract-lifecycle-management-software | contract-lifecycle-management-software, digital-forms-development-australia |
| fleet-maintenance-software-uk | asset-maintenance-management-software, route-optimization-software | route-optimization-software, asset-maintenance-management-software |
| multi-brand-website-architecture | design-systems-for-teams-that-move-fast, how-to-choose-a-cms, international-ecommerce-seo | design-systems-for-teams-that-move-fast, how-to-choose-a-cms |
| user-acceptance-testing-business-software | custom-software-development-uk, automated-regression-testing | automated-regression-testing, product-requirements-document |
| secure-file-uploads | api-security-best-practices, web-application-threat-modeling | api-security-best-practices, web-application-threat-modeling |

There are no orphans, anchors are descriptive and varied, and `relatedSlugs` is set on every page. The accessibility guide also links to `accessibility-testing-australia`.

## 3. Technical SEO and structured data

- New URLs only. No canonical, redirect or route changes, and no deletions.
- **Rendered HTML for all 10 changed pages:**
  - Unique `<title>`.
  - Self-canonical.
  - One H1.
  - One FAQPage built from visible FAQs, alongside BlogPosting and BreadcrumbList.
  - `index, follow`.
- New URLs are present in the sitemap.
- `public/llms.txt`: UK guides section extended with the 5 UK pages, 2 UK sections and 3 generic pages.

## 4. QA results (actually run)

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Passed |
| `npx eslint` (new files, registry, updated files) | Passed |
| `npm run build` | Passed (exit 0), run after the final edits |
| Internal links, all posts | 1,030 posts, 0 broken |
| Duplicate titles, H1s and meta descriptions | None |
| Length checks (seoTitle ≤65, excerpt ≤160) and banner, scene and industry validity | Passed after trimming 6 new excerpts and 1 existing excerpt |
| External links (22 unique on new pages) | 21 returned 200 and legislation.gov.uk returned 202 |
| Local `next start`: HTTP 200 for all 10 changed URLs; tables wrapped in `overflow-x-auto` | Passed |
| Visual desktop and mobile check, keyboard navigation | **Not performed.** The Chrome extension was not connected |
| Schema validator, Lighthouse and performance runs | **Not performed** |
| Contact form and CTA destinations | Not changed (CTAs link to existing service pages); form not tested |
| Automated tests | None exist in the repository |

## 5. Unresolved issues and limitations

- **Time-sensitive content:**
  - Right to work guidance was a draft effective 1 Oct 2026; confirm the final text.
  - The OfDIA register counts are as at July 2026.
  - Companies House transition deadlines run to late 2026.
  - DVSA guide updates.
- **Unverified items left out:** G-Cloud iteration details, and whether the Companies House API exposes verification status.
- **No search data:** prioritisation is qualitative.
- **Mixed uncommitted work:** the branch also carries earlier batches' work.
- **Inconsistent company wording** across AU and UK pages ("India-based" vs "remote-first").

## 6. Change log

**Created**
- `src/lib/blog-data-uk-public-digital.ts`
- `src/lib/blog-data-delivery-web.ts`
- `docs/seo/uk-batch-581-630-audit.md`
- `docs/seo/uk-batch-581-630-matrix.csv`
- `docs/seo/blogs-581-630-uk-implementation.md`

**Modified**
- `src/lib/blog-data.ts`: registration (this file also holds the `design-systems-for-teams-that-move-fast` post, which received a backlink).
- `src/lib/blog-data-au-build-decisions.ts`: onboarding UK section.
- `src/lib/blog-data-webdev-3.ts`: accessibility UK section and excerpt.
- **Backlink sentences, one per page, added to:**
  - `blog-data-au-business-systems.ts`: technical discovery, asset maintenance
  - `blog-data-uk-business.ts`: custom software UK
  - `blog-data-design.ts`: user research methods
  - `blog-data-au-saas-product.ts`: product discovery
  - `blog-data-au-commerce-identity.ts`: AU IDV, CLM
  - `blog-data-au-sector-platforms.ts`: recruitment
  - `blog-data-au-delivery-governance.ts`: digital forms
  - `blog-data-au-ops-mobile.ts`: route optimisation
  - `blog-data-webdev-7.ts`: CMS choice
  - `blog-data-au-saas-engineering.ts`: regression testing
  - `blog-data-au-product-practice.ts`: PRD
  - `blog-data-au-security-ops.ts`: API security
  - `blog-data-au-fintech-security.ts`: threat modelling
- `public/llms.txt`

**Untouched:** routing, templates, components, schema code, sitemap and robots code, service pages and configuration.

## 7. Remaining steps

- Review and commit. Deployment needs your authorisation.
- After deployment: a visual and keyboard check, a Rich Results Test, and Search Console inspection.
