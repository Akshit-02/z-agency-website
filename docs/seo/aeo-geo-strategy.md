# AEO and GEO Strategy

How ZSpace Labs is made easy to understand, extract and cite for search engines and AI answer systems. Prepared 2026-10-03.

## Entity: who ZSpace Labs is

A single, consistent description is now used in the Organization schema, About page, llms.txt and site config (`site.intro`):

> ZSpace Labs is a technology and digital product studio focused on building useful digital experiences, products and systems. We bring strategy, design and engineering together to turn ideas into practical digital solutions.

| Question | Answer published on the site | Source of truth |
|---|---|---|
| Who is ZSpace Labs? | Technology and digital product studio (formerly ZSpace) | site.ts, Organization schema (`alternateName: ZSpace`), llms.txt |
| What does it do? | Websites and web apps, mobile apps, Shopify, UI/UX and product design, AI automation, CRO | services-data.ts, `knowsAbout`, llms.txt |
| Which technologies? | Next.js, React, TypeScript, Node.js, PostgreSQL, React Native, Swift, Kotlin, Shopify Liquid/Hydrogen/APIs, OpenAI and Anthropic APIs, Python, Figma | service pages (Technology sections) |
| Which industries? | Industry pages describe how services apply to each sector; they make no claims of past client work | industries-data.ts |
| Where does it operate? | "Remote-first, working with clients globally" (no address published) | contact page, llms.txt |
| How to contact? | connect@zspace.in, /contact | site.ts, ContactPoint schema |

**Entity fixes made:** removed `sameAs` links that pointed to a different company (an Australian creative studio's LinkedIn) and a non-existent X account; added logo, ContactPoint, `knowsAbout`, `alternateName`; linked all page schema to the Organization via `@id`.

**Entity gaps (owner input needed):** verified social profiles (LinkedIn company page, Instagram, GitHub, Clutch or similar) to add as `sameAs`; founding date, team or founder information if you want it public; real case studies or client evidence. These strengthen how search engines and AI systems corroborate the entity, but none can be invented.

## Answer-first content (AEO)

- **Articles:** 728/728 open with a 50–100-word "Quick answer" section, use question-style or descriptive H2s, and most include FAQs (FAQPage schema only where visible). The 14 legacy articles without a direct answer were fixed in this project.
- **Service pages:** each now opens its content with a definition section phrased as the question people ask ("What is website development?", "What is a CRO audit?"), followed by who it is for, use cases, process, deliverables, technology and 7 FAQs.
- **Homepage:** 11 FAQs now carry FAQPage schema that matches the visible text exactly.
- **Category hubs:** each opens with an introduction explaining the topic and where to start.

## GEO practices in place

- Consistent naming and descriptions across pages, schema and llms.txt.
- Claims backed by citations to official documentation (323 unique external references across articles, all checked); illustrative examples labelled as such; no invented statistics, testimonials or case studies.
- Topical depth organised as hubs → pillars → supporting articles, so models retrieving one page find connected context.
- Dates are now truthful (publication dates corrected; `updated` set when content changes), which matters for freshness signals.
- `llms.txt` updated: www URLs, entity block, refined service descriptions, topic hubs, previous name noted. It is a convenience for AI systems, not a ranking factor, and does not replace crawlable HTML.

## Measurement

No AI-visibility data source is connected. Bing Webmaster Tools reports AI-related performance for some properties and should be checked after verification; otherwise track:

- Branded and service queries in Google Search Console and Bing Webmaster Tools.
- Manual spot checks in AI assistants for "ZSpace Labs" and key service queries, recorded monthly with date and answer text.
- Referral traffic from AI assistant domains in GA4.
