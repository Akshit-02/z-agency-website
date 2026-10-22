# Technical SEO report: GSC batch, 22 October 2026

## Scope

Technical foundations were fully audited on 12 and 17 October (`../04-technical-seo-issues.md`, `../14-structured-data-and-international.md`). This batch rechecked them against a fresh production build, and used the GSC export to look for indexing or URL problems.

## Checks run (local production build, `next start`)

| Check | Result |
| --- | --- |
| Every GSC URL exists in the repo | 392 of 392. No GSC URL points to a removed or renamed page |
| Sitemap URLs return 200 | 1,094 of 1,094 |
| Internal links pointing to non-200 or non-sitemap URLs | 0 |
| Exactly one H1 per page | 1,094 of 1,094 |
| JSON-LD parse errors | 0 |
| Duplicate `<title>` / meta description | 0 / 0 |
| `noindex` on sitemap URLs | 0 |
| Canonical tags | Self-referencing absolute URLs on the 11 changed pages (spot-checked) |
| External links | 5 sitewide (the paid Kudozz links; owner rule is no other outbound links) |
| robots.txt | `Allow: /` plus a sitemap reference. Unchanged |
| Sitemap `lastmod` | Updated pages show 2026-10-22 (verified for the membership page) |
| `tsc --noEmit` | Pass |
| ESLint on changed files | Pass |
| `next build` | Pass |

## Issues found

| ID | Priority | Issue | Status |
| --- | --- | --- | --- |
| T1 | P2 | A stale `next start -p 3123` from 4 October was still running from this repo and serving old `.next` output. Earlier sessions found it overwrites fresh build output | Stopped before building. Restart it with `npx next start -p 3123` if needed |
| T2 | P2 | `node_modules` was missing, so no local build was possible | Ran `npm ci` from the lockfile. `package.json` and `package-lock.json` are unchanged |
| T3 | P3 | No hreflang (by design: no equivalent language or region versions exist) | No change; correct as is |
| T4 | P3 | GSC shows "zspace robotics private limited" as a brand query. The Organization schema `legalName` is "ZSpace Labs" | Owner to confirm the legal entity name |

No P0 issues: nothing blocks indexing, there are no broken canonicals, and no GSC URL returns 404.

## Template changes

None. Every change is content data in `src/lib/blog-data*.ts`, rendered by the existing blog template. The H1 comes from `title`, `<title>` from `seoTitle`, and the meta description and visible lede from `excerpt`. FAQ schema is generated automatically from `faqs`.

## Remaining risks

- FAQPage markup still renders for every article with FAQs. As noted on 13 October, FAQ rich results are retired, so the markup is harmless but shouldn't be expected to change how results look.
- Rankings, indexing and live rendering weren't checked. There was no Search Console access beyond the export and no production deployment. Nothing was deployed.
