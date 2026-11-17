# Post-implementation checklist

## Build and code

- [x] `npx tsc --noEmit` — no errors
- [x] ESLint on changed files — 0 errors, 5 warnings (pre-existing unused imports for commented-out homepage sections)
- [x] `npm run build` — succeeds; all service pages prerendered as SSG
- [ ] Automated tests — none exist in the project

## SEO (verified in prerendered HTML)

- [x] Unique `<title>` on home + 6 service pages (55–70 chars)
- [x] Unique meta description on each (153–160 chars)
- [x] Exactly one `<h1>` per page; primary keyword at the start of each H1
- [x] Self-referencing canonical on each
- [x] JSON-LD parses on each page; one Organization; no rating/review markup
- [x] New FAQs appear in both the visible FAQ section and FAQPage schema
- [x] No URL changes, so the sitemap needs no update

## Responsive / visual

- [x] Homepage hero at 1440×900 (headless Chrome, production server): keyword pill on one line above the animated headline; no overlap with orbit chips; CTA unchanged
- [~] Phone width: headless Chrome's minimum window (~500px) cropped the capture, so a true 390px check was not possible. The pill uses `max-w-[34rem]`, `text-balance` and smaller text below `sm`, and wraps to two lines. **Check on a real phone before deploy.**
- [ ] Service page hero at phone width: copy is longer (two sentences); check spacing on a real phone

## After deploy

- [ ] Rich Results Test on `/` and one service page
- [ ] URL Inspection → Request indexing for the 7 changed URLs
- [ ] GSC re-export in 6–8 weeks with per-page filters
- [ ] Confirm the contact form still submits (not touched by this change, but worth a smoke test)
