# Technical SEO report

Checked against the production build (`npm run build`, Next.js 16.3.5) by parsing the prerendered HTML in `.next/server/app/`.

## Results for the changed pages

| URL | Title length | Description length | H1 count | Canonical |
|---|---|---|---|---|
| / | 61 | 158 | 1 | https://www.zspace.in |
| /services/website-development | 55 | 157 | 1 | self |
| /services/mobile-app-development | 58 | 153 | 1 | self |
| /services/shopify-development | 55 | 160 | 1 | self |
| /services/cro-audit | 70 | 156 | 1 | self |
| /services/ui-ux-design | 66 | 156 | 1 | self |
| /services/ai-automation | 69 | 157 | 1 | self |

All titles and descriptions are unique. No hidden or duplicate desktop/mobile H1s (each template renders a single `<h1>`).

## Items reviewed

| Area | Finding | Action |
|---|---|---|
| Title tags | Rendered from one source per page (`generateMetadata` / `metadata`); no conflicting components | Updated (see CSV) |
| Meta descriptions | Unique, 153–160 chars | Updated |
| Canonicals | Self-referencing, www host | No change needed |
| H1 / heading hierarchy | One H1; sections use H2 → H3 | Keyword line added inside existing H1s |
| Open Graph / X cards | Built from `seoTitle` + `metaDescription` via `socialMetadata()`, so they follow the new copy automatically | No change needed |
| Sitemap / robots | `src/app/sitemap.ts`, `src/app/robots.ts` generated; service URLs included | No change needed (URLs unchanged) |
| Breadcrumbs | `BreadcrumbList` on service pages; uses service name, so Shopify/CRO crumbs now show the new names | Follows rename |
| URLs / redirects | No URLs changed, so no redirects needed | — |
| Image alt / CWV / mobile | Not changed by this work. The hero addition is text-only (no new images or scripts), so it does not add CLS or LCP cost beyond one short line of text | Not re-measured; see checklist |
| Broken links | All new internal links point to existing routes (`/services/*`); build with `dynamicParams = false` succeeded | — |

## Not done in this pass

- No field Core Web Vitals or PageSpeed run (no CrUX/PSI access in this session).
- No crawl of the live site; checks were against the local production build only.
- `keywords` meta in `layout.tsx` left as is (ignored by Google; harmless).
