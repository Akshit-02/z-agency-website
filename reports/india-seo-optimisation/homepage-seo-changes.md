# Homepage SEO changes

| Element | Before | After |
|---|---|---|
| Title | ZSpace Labs \| Web, App, Shopify & AI Automation Studio in India | Best Shopify & Web Development Company in India — ZSpace Labs (61 chars) |
| Meta description | ZSpace Labs is a technology and digital product studio serving businesses across India: websites, mobile apps, Shopify, UI/UX, AI automation and CRO. | Looking for the best Shopify development company in India? ZSpace Labs builds Shopify stores, websites, apps, UI/UX, CRO and AI automation for growing brands. (158 chars) |
| H1 (rendered text) | Meet ZSpace Labs, your website builder. | Best Shopify Development Company in India for Growing Businesses. Meet ZSpace Labs, your website builder. |
| H1 accessible name | Meet ZSpace Labs, your website, app, store and automation builder. | Best Shopify Development Company in India for Growing Businesses. Meet ZSpace Labs, your website, app, store and automation builder. |
| WebPage schema `name` | ZSpace Labs — Website, App, Shopify & AI Automation Studio | Same as the new title |

## Why this title variant

Two options were evaluated. "Best Shopify & Web Development Company in India" was chosen for the homepage because:

- the Shopify service page now owns the exact phrase "Best Shopify Development Company in India" as its title, and identical titles on two URLs would compete;
- the homepage sells six services, so "& Web" keeps the title honest about breadth;
- the H1 still uses the exact preferred phrase "Best Shopify Development Company in India for Growing Businesses", as requested.

The site's existing brand separator (" — ZSpace Labs") was kept for consistency with every other page, rather than the "|" in the brief.

## How the H1 was implemented

The animated serif headline is the brand's signature, so it was kept. The keyword line was added *inside the same `<h1>`* as a pill above it (`src/components/home/Hero.tsx`), the same pattern the service pages already use (`eyebrowInHeading`). This keeps one H1, puts the primary positioning first in it, and leaves the animation, CTA and layout unchanged. Checked at 1440px: the pill sits on one line above the headline; at phone widths it wraps to two lines.

## Content changes

- Hero paragraph now lists Shopify first: "Shopify stores, websites, apps and smart automations…".
- "What we build" intro now names all six services (Shopify stores, websites, mobile apps, UI/UX, CRO, AI automation) before the existing sentence.
- Two FAQs added (also in FAQPage schema):
  - "Is ZSpace Labs only a Shopify development company?" — explains the broader service range.
  - "Do you only work with businesses in India?" — lists the markets in `site.ts` that the owner confirmed (UAE, UK, Australia, Singapore), protecting international positioning.

## Requested sections not added, and why

| Requested section | Status |
|---|---|
| Hero, services, why choose, industries, FAQ, final CTA | Already present (Hero, WhatWeBuild, WhyZspace, IndustriesGrid, FaqSection, BuildCTA) |
| Development process | `ProcessSection` exists but is commented out in `src/app/page.tsx`, apparently on purpose. Process is covered in the FAQ. Re-enabling it is an owner decision. |
| Portfolio / case studies | Not added. The codebase has no case studies, and the brief says not to invent clients or outcomes. Needs real projects from the owner. |
