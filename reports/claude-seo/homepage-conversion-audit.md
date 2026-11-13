# Homepage and conversion audit

Files: `src/app/page.tsx`, `src/components/home/*`. GSC: the homepage had **11 impressions** in 3 months, so it currently ranks for little beyond the brand. Lighthouse mobile (production): performance 76, LCP 4.5 s (lab), CLS 0.002.

## Current hierarchy

Rendered sections: Hero (+ ProblemSection) → WhatWeBuild → IndustriesGrid → WhyZspace → FaqSection → BuildCTA.
`Principles`, `ServicesShowcase`, `ProcessSection` and `TechStack` are commented out in `page.tsx`, so the homepage has no dedicated services section and no process section.

| Element | Finding |
|---|---|
| H1 | Visually "Meet ZSpace Labs," + a rotating phrase. The server HTML (what search engines index) is **"Meet ZSpace Labs, your website builder."** "Website builder" is the intent space of Wix and Squarespace, which the site's own service page calls the cheaper option. The `aria-label` gives a different text. |
| Supporting copy | "We turn good ideas into digital things people actually enjoy using. Websites, apps, Shopify stores and smart automations…" Clear on what, silent on who it's for and where (none of the 5 markets is named). |
| Primary CTA | "Start a Project" → /contact. Good. |
| Secondary CTA | "explore our services" → /services. Good. |
| Services | No services section (ServicesShowcase is commented out). WhatWeBuild covers it partially. |
| Industries | IndustriesGrid present |
| Trust | WhyZspace slogans ("Clear thinking / Thoughtful design / Solid technology"). No people, work samples or process. |
| FAQ | 11 questions. **Before: only 1 answer in HTML. After the fix: all 11.** |
| Final CTA | BuildCTA present |
| Title / meta | "ZSpace Labs \| Web, App, Shopify & AI Automation Studio in India" (63 chars). India-only. |
| Social tags | **Fixed**: OG and X tags now use the homepage title and description (they were the generic default). |

## Forms

`ContactForm.tsx` (react-hook-form + zod) → `src/app/api/contact/route.ts` (validation, rate limit, nodemailer). The code was untouched. The build compiles the route, and the `/contact` page renders 200 locally. **A live submission was not sent**, to avoid emailing the team. Recommend one manual test on the deployed preview. The contact page budget bands are USD-only. Consider INR and AED or neutral bands (owner decision).

## Recommendations (in priority order)

1. **Static, descriptive H1** with the rotation moved below it. For example: H1 "Websites, apps, Shopify stores and AI automation for growing businesses", with the existing "Meet ZSpace Labs, your … builder" animation as the subline. This is a brand-copy decision, so it is listed in `human-review-required.md` rather than changed.
2. One line naming where the team works (from `markets` in `site.ts`): "Remote team in India working with clients in India, the UAE, the UK, Australia and Singapore."
3. Restore a compact services section (or un-comment `ServicesShowcase`) and a 5–6 step process section using the promises already on the site.
4. Replace slogans in WhyZspace with verifiable specifics: reply in one business day, fixed estimate per phase, "we don't publish invented statistics or testimonials".
5. Decide on international positioning in the title (India-first vs global). See the international report.

No claims of being "best", "#1" or of having local offices were found on the homepage. Keep it that way.
