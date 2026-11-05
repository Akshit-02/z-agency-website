# Technical SEO report — zspace.in

Checked on 5 November 2026 against a local production build (`next build`, Next.js 16.3.5, 1,138 statically generated HTML pages) and with read-only requests to the live site. The rendered HTML of every page was crawled from the build output.

## Summary

The site is technically sound. No crawling, indexing or canonicalisation problems that would hold back rankings were found in the code. The open items are operational: the live deployment lags the repository, and two points need an owner decision.

## Checks and results

| Area | Result | Evidence |
| --- | --- | --- |
| robots.txt | OK | `src/app/robots.ts` allows all and points to the sitemap |
| Meta robots | OK | All 1,138 pages: `index, follow`. No accidental noindex |
| Canonical tags | OK | All 1,138 pages self-referencing, absolute, `https://www.zspace.in` |
| HTTPS and www | OK | Live: `http://www.zspace.in/` and `https://zspace.in/` both return 308 to `https://www.zspace.in/` |
| Trailing slash | OK | Live: `/blogs/` returns 308 to `/blogs`; internal links use no trailing slash |
| Redirect chains | None found | The 8 configured redirects (`/blog`, India commercial paths) point directly to final URLs |
| Broken internal links | 0 | Every internal `href` in the rendered HTML resolves to a built page |
| Duplicate titles / descriptions | 0 / 0 | Across all 1,138 pages |
| H1 | OK | Exactly one H1 per page |
| Title length | OK | No title over 70 characters; the `pageTitle` helper drops the brand suffix when needed |
| Sitemap | OK | 1,138 URLs, matching the build exactly; `lastmod` uses real content dates (`updated`, otherwise `date`) and no build-time timestamps |
| Pagination | N/A | Blog and category listings are single pages with client-side filtering; every article is linked from the sitemap and from related-article cards |
| Rendering | OK | All pages are statically pre-rendered; article text and links are in the initial HTML |
| hreflang | Correctly absent | One language, one URL per page; no regional duplicates exist |
| Structured data | OK | Organization, WebSite, BreadcrumbList, BlogPosting, Service, FAQPage, AboutPage, ContactPage, Blog, ItemList. No Product, Review or rating markup (none would be legitimate) |
| Images | OK | Article covers are inline SVG illustrations with descriptive accessible names (`bannerAlt`). No large raster images in articles |
| Fonts | OK | `next/font` (self-hosted, no render-blocking Google Fonts request) |
| Third-party scripts | Acceptable | GA4 and Microsoft Clarity load with `afterInteractive`; both are disclosed in the privacy policy |

## Issues found

### 1. The live site does not match the repository (P0, operational)

- `https://www.zspace.in/blogs/ab-test-guardrail-metrics`, added in commit `4821b65` (5 November), returned **404** on the live site when checked.
- Articles from the 28 October commit return 200, so production is running a build from before 5 November.

**Impact:** Nothing in the latest commit, or in this batch once committed, reaches search engines until production is redeployed.

**Action:** Check the Vercel project's production branch and the latest deployment status. The repo has both `master` and `main`, and `origin/main` contains only the initial commit. If production deploys from `main`, nothing after the first commit would deploy, which does not match what is live, so the most likely explanation is a pending or failed deployment from `master`. Not changed here: deployment configuration is outside the scope of this task without your approval.

### 2. Agency listicles conflict with service pages (P1, owner decision)

Eleven self-ranked "best agencies/companies" pages (defined in `src/lib/blog-data-india.ts` and `blog-data-india-local.ts`); seven of them received 686 impressions for hire-intent queries that the service pages should win. See `implementation-report.md` for the options. URLs were not removed or redirected.

### 3. FAQPage markup will rarely produce rich results (informational)

Since 2023, Google shows FAQ rich results mainly for well-known government and health sites. The FAQPage markup here is valid and matches visible content, so it does no harm and still helps other consumers of structured data. Do not add FAQs just for markup.

### 4. "Product snippets" search appearance (INVESTIGATE)

GSC reports 20 impressions with a Product snippets appearance, but the site has no Product markup. Google can infer product snippets from page content. Use the Search appearance filter in GSC to find the affected page; no action unless it shows something misleading.

### 5. `gsc-data.xlsx` is committed to the repository (low)

The Search Console export is tracked in git. If the repository is shared with anyone outside the business, consider removing it from version control and adding it to `.gitignore`. Not changed here.

### 6. Correction to an earlier report

The previous content batch reported 16 broken links to `best-*-agencies` URLs. That was a false positive: those pages are generated from a different data format in `blog-data-india.ts`, which the earlier source-level check could not parse. The build-level crawl confirms all links resolve.

## Template change made in this batch

**Service page H1.** `DetailHero` (`src/components/detail/DetailKit.tsx`) gained an `eyebrowInHeading` option, and `ServiceDetail` enables it. The descriptive eyebrow (for example "AI automation agency in India") is now part of the `<h1>`, followed by the existing slogan. The visual design is unchanged:

- The eyebrow is rendered as a `<span>` with identical classes.
- The compiled CSS resets `h1` font size and weight to `inherit`, and Tailwind's base styles zero all margins.

Industry pages are unaffected.

## Not measured

- **Core Web Vitals:** the export has no CWV data, and no field data was available here. Check the Core Web Vitals report in Search Console and run PageSpeed Insights on the home page, one service page and one article after deploying. The architecture (static HTML, self-hosted fonts, deferred analytics, SVG covers) is favourable, but that is not a measurement.
- **Visual rendering:** no browser was available for screenshots. Visual equivalence of the H1 change was checked through markup and compiled CSS only. Check one service page in a browser before deploying.
- **Contact form:** not changed and not submitted (no test submissions were sent).
