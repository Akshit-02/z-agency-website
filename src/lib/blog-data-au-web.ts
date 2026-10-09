import type { BlogPost } from "./blog-data";

/**
 * Australian web development pair: website development cost in Australia
 * (an estimation framework, not market averages) and how to choose a web
 * development company in Australia (gates plus a weighted scorecard).
 * Differentiated from the generic owners (website-development-cost,
 * how-to-choose-website-development-company and related guides) and from
 * the UAE vendor guides by Australian decisions: GST on quotes, WCAG 2.2 AA
 * and the DDA, APP 8 and Australian cloud regions, written IP assignment
 * under the Copyright Act, ACSC supplier questions and AEST/AEDT overlap.
 * Sources checked 2026-10-09: ATO (GST registration; GST for non-resident
 * businesses); W3C WAI (What's new in WCAG 2.2); Australian Human Rights
 * Commission (Guidelines on equal access to digital goods and services);
 * ABS (Disability, Ageing and Carers 2022 media release); W3C WAI (SOCOG
 * case study); OAIC (APP Guidelines ch 8; NDB statistics 2025); AWS, Azure
 * and Google Cloud region lists; ASD's ACSC (questions to ask managed
 * service providers; Essential Eight; Annual Cyber Threat Report 2024-25
 * business factsheet); AustLII (Copyright Act 1968 s196); Business
 * Victoria (software IP considerations); NSW Government (daylight saving
 * 2026-27); Australia Post eCommerce Report 2026; Xero and MYOB developer
 * documentation; Google Search Central (AI features).
 * No independent Australian website price survey was found, so no AUD
 * average appears here. No figure here is ZSpace client data.
 */
export const auWebPosts: BlogPost[] = [
  {
    slug: "website-development-cost-australia",
    title: "Website Development Cost in Australia: What Affects the Price?",
    seoTitle: "Website Development Cost in Australia: What Drives It",
    excerpt:
      "What drives website development cost in Australia: scope, design, integrations, WCAG 2.2 work, hosting, GST and upkeep, plus a framework to estimate quotes.",
    category: "Web Development",
    banner: "costdrivers",
    sceneKind: "cost",
    bannerAlt: "A breakdown of a website budget into scope, design, integrations, accessibility, testing, hosting and maintenance, with GST added on top",
    date: "2026-10-09",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["professional-services", "ecommerce", "retail", "startups", "saas-technology"],
    relatedSlugs: ["website-development-cost", "wordpress-vs-custom-development-cost-of-ownership", "website-requirements-document"],
    faqs: [
      {
        q: "How much does a website cost in Australia?",
        a: "There is no reliable national average. We found no independent Australian survey of website prices, and agency price pages are marketing rather than market data. The honest answer is that cost equals the effort your scope needs multiplied by the supplier's rate, plus recurring hosting, licences and maintenance, plus GST where it applies. Estimate the hours from your own scope first, then compare quotes against that estimate.",
      },
      {
        q: "Do website quotes in Australia include GST?",
        a: "Not always. A GST-registered Australian supplier adds GST at 10% to taxable supplies, and quotes are sometimes shown excluding GST, so check whether a figure is GST-inclusive or exclusive before comparing. Suppliers below the ATO's registration threshold may not charge GST, and offshore suppliers follow different rules. Ask every supplier to state their GST position in writing and confirm the treatment with your accountant.",
      },
      {
        q: "Why do quotes for the same website vary so much?",
        a: "Usually because suppliers are quoting different scopes. One quote may assume you supply all content and approve designs quickly; another may include copywriting, accessibility testing, analytics setup and a contingency. Rates differ too, as do risk premiums on fixed-price work. Ask each supplier for hours by work package and a list of assumptions, then compare like with like before comparing totals.",
      },
      {
        q: "Is it cheaper to use an offshore or remote web developer?",
        a: "The hourly rate is often lower, but the total cost depends on how much of the saving is absorbed by specification, review, communication and rework. Remote work goes well when requirements are written clearly, there is a daily overlap window, and you own the accounts and code. It goes badly when scope lives in someone's head. Compare total cost of ownership over three years, not rates.",
      },
      {
        q: "How much should we budget for website maintenance?",
        a: "Budget for it as a recurring line, not an afterthought. Use a simple formula: monthly maintenance hours multiplied by the supplier's rate, plus hosting, licences, plugin or app subscriptions and domain renewals. Monthly hours depend on how many plugins and integrations you run, how often content changes, and your security requirements. Ask suppliers to quote maintenance separately and state exactly what is included.",
      },
      {
        q: "Does making a website accessible add much to the cost?",
        a: "Accessibility built in from design costs far less than fixing it after launch. The extra work covers accessible design decisions, semantic build, keyboard and screen reader testing, and fixes. Retrofitting an inaccessible site often means redesigning components. Because Australia's Disability Discrimination Act applies to services delivered online, ask for WCAG 2.2 AA as a stated target in the quote and acceptance criteria. This is not legal advice.",
      },
      {
        q: "Do we need to host our website in Australia?",
        a: "Not always. A brochure site with little personal information can be hosted wherever performance and support are best. If the site collects personal information and you are covered by the Privacy Act, overseas storage or access raises APP 8 questions, and some clients or sectors expect Australian data location. AWS, Azure and Google Cloud all run Australian regions. Check your obligations with the OAIC or a privacy adviser.",
      },
      {
        q: "Should we choose a fixed price or time-and-materials quote?",
        a: "Fixed price suits a well-defined scope: you know the cost, but the supplier adds a margin for risk and changes go through a change request. Time and materials suits evolving products: you pay for actual effort and can reprioritise, but you need to manage the budget actively. Many projects use both, with a fixed-price discovery phase followed by a fixed or capped build.",
      },
    ],
    content: [
      {
        heading: "What does website development cost in Australia?",
        body: [
          "**Website development cost** in Australia is the effort your scope requires, multiplied by the supplier's rate, plus recurring hosting, licences and maintenance, plus 10% GST where the supplier charges it. We found no credible, independent survey of Australian website prices, so this guide gives you a transparent way to estimate and compare quotes instead of an average figure.",
          "That may not be the answer you hoped for, but it is the useful one. A single average blends five-page brochure sites with ecommerce stores and booking platforms, so it tells you little about your own project. What you can control is the scope you ask suppliers to price and how carefully you compare what comes back.",
          "Our general guide to [[/blogs/website-development-cost|website development cost]] covers the cost drivers in more depth. This article adds what changes for Australian buyers: GST on quotes, WCAG 2.2 AA work in the context of the Disability Discrimination Act, Australian hosting regions and APP 8, Australian integrations such as Xero, MYOB and Australia Post, and how local, offshore and remote studio pricing models differ in structure. Examples are labelled illustrative. Nothing here is legal, tax or financial advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "No independent Australian website price survey was found. Treat any ‘average cost’ you see as marketing unless the method is published.",
          "Estimate cost as scope units × hours per unit × rate, then add contingency, recurring costs and GST.",
          "The biggest cost swings come from integrations, custom functionality, the number of unique templates and who produces the content.",
          "Put WCAG 2.2 AA in the brief and the acceptance criteria. Building accessibility in costs less than retrofitting it.",
          "If the site handles personal information, decide data location early. AWS, Azure and Google Cloud all have Australian regions; APP 8 applies to overseas disclosure.",
          "Check whether each quote is GST-inclusive or exclusive. The ATO's rate is 10%, and offshore suppliers follow different rules.",
          "Compare three-year cost of ownership, not build price: hosting, licences, maintenance and change requests add up.",
        ],
      },
      {
        heading: "Why this guide does not quote an average price",
        body: [
          "We looked for government, ABS or independent industry data on Australian website prices and found none. What exists online is mostly agency price pages and ‘cost calculators’. They can be useful for understanding how one firm packages its work, but they are vendor marketing: the samples are unpublished, the scopes are undefined and they are written to win enquiries.",
          "So rather than repeat numbers we cannot verify, this guide does three things. It names the drivers that move price, gives you a formula to estimate effort from your own scope, and shows one fully worked, **illustrative** example with every assumption listed. You can swap in the rates suppliers actually quote you, which are the only rates that matter for your project.",
        ],
        callout: {
          type: "note",
          text: "If you see a figure described as the average cost of a website in Australia, ask three questions: who collected it, how many projects it covers, and how ‘website’ was defined. If the source cannot answer, treat the number as a sales prompt.",
        },
      },
      {
        heading: "Four kinds of project, four cost shapes",
        body: [
          "Before you compare prices, be clear about what you are buying. The four common project types differ less in page count than in where the effort goes.",
        ],
        table: {
          headers: ["Project type", "Where most effort goes", "Main cost risk", "Recurring costs to expect"],
          rows: [
            ["**Business website** (services, lead generation)", "Design, unique page templates, CMS set-up, content, forms and CRM connection", "Content arriving late or needing rewriting", "Hosting, CMS or plugin licences, maintenance, analytics"],
            ["**Ecommerce store**", "Catalogue structure, product data, checkout, payments, shipping and tax set-up, integrations", "Product data quality and integrations with stock, accounting and fulfilment", "Platform subscription, app fees, payment fees, maintenance"],
            ["**Custom web application** (portal, booking, dashboard)", "Requirements, data model, user roles, business logic, testing", "Unclear rules discovered mid-build", "Cloud hosting, monitoring, security updates, feature work"],
            ["**Content-heavy site** (publisher, association, large catalogue)", "Information architecture, content modelling, migration, search", "Migration volume and redirects", "CMS licences, editorial support, search tooling"],
          ],
        },
      },
      {
        heading: "The cost drivers, and what each one does to a quote",
        body: [
          "Use this table to read quotes. For each driver, the right-hand column tells you what a well-specified quote should state. Our [[/blogs/website-requirements-document|website requirements document guide]] shows how to write these decisions down before you ask for prices.",
        ],
        table: {
          headers: ["Driver", "What raises effort", "What a good quote states"],
          rows: [
            ["**Scope and templates**", "More unique page templates, not more pages; each template needs design, build and testing", "Number of unique templates and total pages, separately"],
            ["**Design complexity**", "Custom illustration, motion, multiple breakpoints per component, a new brand system", "Design rounds included, deliverables (wireframes, UI, design system)"],
            ["**CMS**", "Custom content models, multi-site, workflows and approvals, headless set-up", "Which CMS, licence cost, editor training, who owns the licence"],
            ["**Ecommerce**", "Large catalogues, variants, B2B pricing, subscriptions, custom checkout logic", "Platform, plan, apps needed, product import scope"],
            ["**Integrations**", "Two-way syncs, error handling, legacy systems, poor API documentation", "Each integration named, direction of data, error handling approach"],
            ["**Custom functionality**", "Logins, dashboards, calculators, booking rules, role permissions", "Each feature with acceptance criteria"],
            ["**Content**", "Copywriting, photography, migration of old pages, product descriptions", "Who supplies content, by when, and what happens if it is late"],
            ["**Accessibility**", "Complex widgets, video captions, PDFs, third-party embeds", "Target conformance level (WCAG 2.2 AA) and how it is tested"],
            ["**Security**", "Logins, personal data, payments, admin access, compliance needs", "Security practices, update policy, backups, MFA on admin"],
            ["**Testing**", "Browsers and devices covered, automated tests, load testing", "Test scope, environments and acceptance process"],
            ["**Hosting**", "Data location needs, uptime targets, staging environments", "Provider, region, who holds the account, monthly cost"],
            ["**Maintenance**", "Number of plugins or apps, release frequency, support hours", "Monthly hours or tasks included, response times, rate for extra work"],
          ],
        },
      },
      {
        heading: "An estimation framework you can run yourself",
        body: [
          "This framework turns your scope into an effort estimate. It will not be exact, but it gives you a baseline to test quotes against. If a quote is far below your estimate, find out what it leaves out; if it is far above, ask what the supplier sees that you do not.",
          "**Step 1: count scope units.** Unique templates, pages to populate, integrations, custom features and content items. **Step 2: assign hours per unit.** Use the supplier's own figures where they give them, or ask them to fill in your sheet. **Step 3: add percentage-based work** such as testing, accessibility, project management and contingency. **Step 4: multiply by the rate.** **Step 5: add recurring costs and GST.**",
        ],
        code: {
          label: "Estimation formulas (placeholder variables)",
          text: `Build hours
  B = D + (T x h_t) + (P x h_p) + (I x h_i)
      + (F x h_f) + C_cms
  where D = discovery hours, T = unique templates,
  P = pages to populate, I = integrations,
  F = custom features, C_cms = CMS set-up hours,
  h_x = hours per unit of each item

Percentage work on top of build
  A = a x B   (accessibility, e.g. a = 0.10-0.20)
  Q = q x B   (testing and QA)
  M = m x (B + A + Q)   (project management)
  X = x x (B + A + Q + M)   (contingency)

Total hours      H = B + A + Q + M + X
Build price      Price = H x R   (R = hourly rate)
GST if charged   GST = 0.10 x Price
Year-one run     Run = 12 x (Host + Lic + Mh x R)
Three-year TCO   TCO = Price + GST + 3 x Run + Chg`,
        },
        callout: {
          type: "tip",
          text: "The percentage factors are judgement calls, not standards. Ask each supplier what factors they use for testing, accessibility, project management and contingency. A supplier that cannot answer is probably not estimating; they are guessing.",
        },
      },
      {
        heading: "An illustrative example, with every assumption shown",
        body: [
          "**Illustrative only.** The example below is hypothetical. The hours per unit and the AUD 100 hourly rate are chosen so the arithmetic is easy to follow. They are **not** market rates, not ZSpace prices and not a prediction of what you will be quoted. Replace them with the figures suppliers give you.",
          "**The hypothetical brief:** a professional services firm wants a 12-page marketing website on an off-the-shelf CMS, with six unique templates, one enquiry form sent to its CRM, WCAG 2.2 AA as the accessibility target, and copy supplied by the client.",
        ],
        table: {
          headers: ["Line", "Assumption", "Hours"],
          rows: [
            ["Discovery and requirements (D)", "Workshops, sitemap, written requirements", "24"],
            ["Templates (T × h_t)", "6 templates × 28 h (12 h design, 16 h build)", "168"],
            ["Page population (P × h_p)", "12 pages × 2 h", "24"],
            ["CMS set-up and editor training (C_cms)", "Content types, roles, one training session", "24"],
            ["Integration (I × h_i)", "1 form-to-CRM integration × 24 h", "24"],
            ["**Build subtotal (B)**", "", "**264**"],
            ["Accessibility (A)", "a = 0.10 of B: testing and fixes against WCAG 2.2 AA", "26"],
            ["Testing and QA (Q)", "q = 0.10 of B: browsers, devices, forms", "26"],
            ["Project management (M)", "m = 0.12 of (B + A + Q) = 0.12 × 316", "38"],
            ["Contingency (X)", "x = 0.15 of (B + A + Q + M) = 0.15 × 354", "53"],
            ["**Total hours (H)**", "", "**407**"],
            ["Build price at illustrative R = AUD 100/h", "407 × 100", "AUD 40,700"],
            ["GST at 10%, if the supplier charges it", "0.10 × 40,700", "AUD 4,070"],
            ["**Build price including GST**", "", "**AUD 44,770**"],
          ],
        },
        checklist: [
          "**Recurring costs (illustrative):** maintenance of 6 hours a month at the same AUD 100 rate is AUD 7,200 a year. Hosting, CMS licences and domain renewals are left as variables, because they depend entirely on the products chosen.",
          "**What moves the total most:** adding a second two-way integration, or moving copywriting into the supplier's scope, changes the total more than adding pages built from existing templates.",
          "**Rate sensitivity:** price is linear in R. If a supplier's rate is half the illustrative figure, the build price halves only if the hours stay the same. In practice, hours are where suppliers differ most, so compare hours first.",
        ],
      },
      {
        heading: "Accessibility: budgeting for WCAG 2.2 AA",
        body: [
          "Accessibility is a cost driver you should plan for rather than discover. The ABS reported that **5.5 million Australians, or 21.4% of people, had disability** in 2022 (ABS Survey of Disability, Ageing and Carers, released July 2024). A site that does not work with a keyboard, a screen reader or zoom excludes a meaningful share of your customers.",
          "**The legal context.** The Disability Discrimination Act 1992 applies to goods and services, including those delivered online. In April 2025 the Australian Human Rights Commission published its Guidelines on equal access to digital goods and services under the DDA. The guidelines are not legally binding, and Deque's summary reports that they recommend aligning with WCAG 2.2 Level AA. The best-known Australian precedent is Maguire v SOCOG (2000), where the then Human Rights and Equal Opportunity Commission found the Sydney Olympics website unlawfully inaccessible and ordered $20,000 in damages. This is context, not legal advice: speak to a lawyer about your own risk.",
          "**What the work involves.** WCAG 2.2 became a W3C Recommendation on 5 October 2023 and added criteria that affect everyday components, including Target Size (Minimum), Focus Not Obscured (Minimum), Redundant Entry and Accessible Authentication (Minimum). In a quote, accessibility effort should appear in design (colour contrast, focus states, target sizes), build (semantic HTML, labels, error messages) and testing (keyboard, screen reader and automated checks), plus time to fix what testing finds.",
          "**Why it is cheaper early.** Fixing a colour palette or a form pattern in design takes hours. Fixing the same problem after launch can mean reworking every page that uses it. Our guide to [[/blogs/website-accessibility-australia|website accessibility in Australia]] covers the standards and testing in more depth.",
        ],
      },
      {
        heading: "Security, testing and hosting",
        body: [
          "**Security** costs scale with what the site does. A brochure site needs secure hosting, updates, MFA on admin accounts and backups. A site with logins, personal information or payments needs more: secure authentication, input validation, logging, dependency updates and, often, independent testing. The ASD's Annual Cyber Threat Report 2024–25 business factsheet puts the average self-reported cost of cybercrime per report at $56,600 for small businesses. That is an average per report, not the cost of a typical incident, but it is a reason not to cut security from the quote. Our [[/blogs/website-security-australia|website security guide for Australian businesses]] goes further.",
          "**Testing** is often the first line cut when a quote needs to come down, and the most expensive one to lose. A good quote names the browsers and devices covered, whether automated tests are included, and how acceptance works. If a quote has no testing line at all, assume the testing is being done by your customers.",
          "**Hosting** is a recurring cost and, for some projects, a compliance decision. AWS runs Asia Pacific (Sydney) by default and Asia Pacific (Melbourne) as an opt-in region; Azure has Australia East and Australia Southeast, plus Australia Central regions in Canberra; Google Cloud has australia-southeast1 (Sydney) and australia-southeast2 (Melbourne). An Australian region may cost a little more than some overseas ones, and is not automatically required.",
          "**APP 8.** If your business is covered by the Privacy Act and personal information collected on the site is disclosed to an overseas recipient, APP 8 requires you to take reasonable steps to ensure the recipient does not breach the Australian Privacy Principles, and you can remain accountable for what the recipient does. The OAIC's guidelines explain when overseas cloud storage counts as a ‘use’ rather than a ‘disclosure’. Decide data location before choosing hosting, and check with the OAIC or a privacy adviser.",
        ],
      },
      {
        heading: "Integrations: where Australian projects often grow",
        body: [
          "Integrations are the line most likely to grow after a quote is signed, because the hard part is the data, not the connection. Common Australian examples include accounting (Xero and MYOB both publish APIs), shipping (Australia Post's shipping and tracking APIs require an eParcel or StarTrack contract), payments, CRMs and booking tools.",
          "Shipping deserves attention for ecommerce. The Australia Post eCommerce Report 2026 found that 69% of shoppers prefer a wide range of delivery options at checkout. More options mean more integration and testing work, so decide which ones you need before asking for quotes. Our [[/blogs/api-integration-australia|API integration guide for Australian businesses]] covers how to scope them, and [[/blogs/shopify-development-australia|Shopify development in Australia]] covers store-specific apps and set-up.",
          "**Ask for each integration separately:** which system, which direction data flows, how often it syncs, what happens when it fails, and who holds the API credentials. An integration priced as a single line with no detail is a common source of variations later.",
        ],
      },
      {
        heading: "Maintenance and the three-year view",
        body: [
          "The build is usually the largest single payment, but over three years the recurring lines can match or exceed it, especially for sites with many plugins, apps or integrations. Hosting, CMS and app licences, domain renewals, security updates, small changes and support all recur.",
          "Ask suppliers to quote maintenance as a separate line with defined inclusions: update frequency, backup checks, monitoring, response times and the rate for work outside the plan. Our [[/blogs/website-maintenance-guide|website maintenance guide]] explains what a maintenance plan should cover, and [[/blogs/wordpress-vs-custom-development-cost-of-ownership|WordPress vs custom development cost of ownership]] shows how platform choice changes long-term cost. If you are still choosing a platform, start with [[/blogs/custom-website-vs-wordpress|custom website vs WordPress]].",
        ],
      },
      {
        heading: "GST on website quotes",
        body: [
          "GST in Australia is 10%. Businesses must register for GST once their GST turnover reaches A$75,000 (A$150,000 for non-profits), according to the ATO. A registered supplier adds GST to taxable supplies, so a quote of AUD 40,000 excluding GST is AUD 44,000 including it. Quotes are not always labelled clearly, so ask.",
          "Suppliers below the threshold may not be registered and will not charge GST. Since 1 July 2017, offshore suppliers of services and digital products to Australian consumers must register and charge GST once their Australian sales reach the threshold; supplies to Australian businesses are treated differently. If you are comparing a local quote with an offshore one, the GST treatment can change the comparison, and whether you can claim GST credits depends on your own registration. Confirm the position with your accountant or the ATO. This is not tax advice.",
        ],
        callout: {
          type: "tip",
          text: "Ask every supplier to state on the quote: their ABN or overseas business details, whether they are registered for GST, whether figures include GST, and the currency. A quote in USD or another currency also carries exchange-rate risk until it is paid.",
        },
      },
      {
        heading: "Local, offshore and remote studio pricing: how the models differ",
        body: [
          "We do not publish rates for these models because we found no reliable data, and rates vary widely within each one. What you can compare is structure: what the rate includes, where the hidden costs sit and who carries the risk.",
        ],
        table: {
          headers: ["Model", "What the rate usually covers", "Where costs move", "What to check"],
          rows: [
            ["**Local agency**", "Onshore team, account management, workshops in your time zone, local overheads", "Higher rate per hour; less coordination effort on your side", "Who actually does the build: some local agencies subcontract offshore"],
            ["**Freelancer**", "One person's time; little overhead", "Your time goes into project management, testing and backup cover", "Availability, holiday and illness cover, breadth of skills"],
            ["**Offshore or remote studio**", "A team with design, build and QA, usually working partly outside Australian hours", "Lower rate structure in many cases; more effort on written specifications, reviews and overlap meetings", "Overlap hours, named team, written process, IP assignment, currency and GST treatment"],
            ["**Hybrid** (local lead, remote build)", "Local relationship and strategy with remote delivery", "Margin on both layers; hand-offs between teams", "Who is accountable for quality, and whether you can talk to the builders"],
            ["**In-house team**", "Salaries and employment on-costs, tools, management", "Fixed cost whether or not there is work; recruitment time", "Whether the workload is continuous enough to justify it"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "A lower hourly rate only saves money if the hours do not grow. The models that cost least per hour usually need the clearest written scope. Our comparison of [[/blogs/website-development-company-vs-freelancer|a development company vs a freelancer]] covers the trade-offs in more detail.",
        },
      },
      {
        heading: "Quote-comparison checklist",
        body: [
          "Put every quote into the same structure before you compare totals. If a supplier will not break their quote down, that is information too.",
        ],
        checklist: [
          "Same scope: every quote prices the same templates, pages, integrations and features, from your written brief.",
          "Hours by work package, not only a total, so you can see where suppliers differ.",
          "Stated assumptions: who supplies content, how many design rounds, what client turnaround times are expected.",
          "Accessibility target written as WCAG 2.2 AA, with how it will be tested.",
          "Testing scope: browsers, devices, automated tests and the acceptance process.",
          "Security: admin MFA, update policy, backups and who is responsible for each.",
          "Hosting: provider, region, account holder and monthly cost.",
          "Licences and subscriptions listed, with who pays and whose name they are in.",
          "Maintenance quoted separately, with inclusions and response times.",
          "GST position, ABN or overseas details and currency stated.",
          "Payment schedule tied to deliverables, not dates alone.",
          "Change request process and the rate for out-of-scope work.",
          "Ownership: written IP assignment, and domains, hosting and code repositories in your name.",
          "Contingency shown openly rather than hidden in line items.",
        ],
      },
      {
        heading: "How timelines affect cost",
        body: [
          "Compressing a timeline rarely saves money. It usually means more people working in parallel, more coordination and more rework. Slow client feedback costs money too, because teams lose context between rounds. Our [[/blogs/website-development-timeline|website development timeline guide]] and [[/blogs/website-development-process|website development process guide]] show the stages and where delays usually come from.",
          "If budget is tight, reduce scope rather than time or quality. Launch with fewer templates and integrations, measure what users do, then add. For product-style builds, the [[/blogs/mvp-development-australia|MVP development guide for Australia]] explains how to cut to a first release, and [[/blogs/custom-software-development-australia|custom software development in Australia]] covers projects that go beyond a website.",
        ],
      },
      {
        heading: "Common mistakes when budgeting for a website",
        body: [],
        checklist: [
          "**Comparing totals before comparing scope.** The cheapest quote is often the one that left the most out.",
          "**Forgetting content.** Writing, photography and migration are real work. If nobody owns them, the launch slips.",
          "**Leaving accessibility to the end.** Retrofitting WCAG 2.2 AA costs more than designing for it.",
          "**Treating GST as an afterthought.** A 10% difference matters when comparing a GST-exclusive quote with an inclusive one.",
          "**Ignoring recurring costs.** Licences, apps and maintenance can exceed the build over three years.",
          "**Letting the supplier own the accounts.** Domains, hosting and repositories in a supplier's name make leaving expensive.",
          "**No contingency.** Unknowns appear on every project. A visible contingency is more honest than an optimistic fixed price.",
          "**Skipping discovery to save money.** A short paid discovery phase usually costs less than the variations it prevents.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Tax:** [[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst|ATO, Registering for GST]]; [[https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/how-australian-gst-works|ATO, How Australian GST works for non-resident businesses]].",
          "**Accessibility:** [[https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/|W3C WAI, What's new in WCAG 2.2]]; [[https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services|Australian Human Rights Commission, Guidelines on equal access to digital goods and services (2025)]]; [[https://abs.gov.au/media-centre/media-releases/55-million-australians-have-disability|ABS, 5.5 million Australians have disability (2024)]]; [[https://www.w3.org/WAI/business-case/archive/socog-case-study|W3C WAI, SOCOG case study]].",
          "**Privacy and hosting:** [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP Guidelines chapter 8]]; [[https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html|AWS Regions]]; [[https://learn.microsoft.com/en-us/azure/reliability/regions-list|Azure regions list]]; [[https://docs.cloud.google.com/compute/docs/regions-zones|Google Cloud regions and zones]].",
          "**Security:** [[https://www.cyber.gov.au/sites/default/files/2025-10/Annual%20Cyber%20Threat%20Report%202024-25%20factsheet%20for%20businesses%20and%20organisations.pdf|ASD's ACSC, Annual Cyber Threat Report 2024–25 factsheet for businesses]].",
          "**Integrations and ecommerce:** [[https://developer.xero.com/documentation/|Xero developer documentation]]; [[https://developer.myob.com/|MYOB developer portal]]; [[https://developers.auspost.com.au/|Australia Post Developer Centre]]; [[https://auspost.com.au/ecomreport|Australia Post eCommerce Report 2026]].",
          "No independent Australian website price survey was found as of October 2026, so no average price is quoted. The worked example is illustrative. Nothing here is ZSpace client data, and nothing is legal, tax or financial advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Website cost in Australia is not a mystery, but it is not a single number either. Write down your scope, estimate the hours, apply the rates you are actually quoted, then add recurring costs and GST. Quotes that state their assumptions, price accessibility and testing openly, and leave you owning your accounts and code are usually the ones that hold up.",
          "When you are ready to choose who builds it, our guide on [[/blogs/web-development-company-australia|how to choose a web development company in Australia]] turns the same evidence into a scorecard, and [[/blogs/digital-product-development-australia|digital product development in Australia]] puts the website in the context of your wider product plans. If AI-driven search matters to you, see our guide to [[/blogs/ai-search-visibility|AI search visibility]].",
        ],
        cta: {
          title: "Want a second opinion on a quote?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|website development]] and [[/services/ui-ux-design|UI/UX design]]. If it would help to talk through your scope or estimate, we are happy to. AEST is UTC+10 and IST is UTC+5:30, a 4.5-hour difference (5.5 hours during AEDT).",
        },
      },
    ],
  },
  {
    slug: "web-development-company-australia",
    title: "How to Choose a Web Development Company in Australia",
    seoTitle: "Choosing a Web Development Company in Australia",
    excerpt:
      "How to choose a web development company in Australia: team models, portfolio checks, IP assignment, WCAG 2.2, ACSC security questions and a scorecard.",
    category: "Web Development",
    banner: "compare3",
    sceneKind: "compare",
    bannerAlt: "Three web development options compared side by side against pass-or-fail gates and a weighted scorecard",
    date: "2026-10-09",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["professional-services", "ecommerce", "startups", "healthcare-healthtech", "nonprofits-civic"],
    relatedSlugs: ["how-to-choose-website-development-company", "website-development-company-vs-freelancer", "website-development-process"],
    faqs: [
      {
        q: "How do I choose a web development company in Australia?",
        a: "Start by writing down what you need built and which risks matter most, then decide which team model suits it. Shortlist three to five suppliers, check their live work and references yourself, and run a short paid discovery or detailed proposal stage. Apply pass-or-fail gates first, such as written IP assignment and accounts in your name, then score the remaining suppliers on weighted criteria using evidence.",
      },
      {
        q: "Who owns the code if I pay a developer to build my website?",
        a: "Paying for the work does not by itself transfer copyright. Under Australian copyright law, a contractor who writes code generally owns the copyright unless it is assigned, and the Copyright Act says an assignment has no effect unless it is in writing and signed by or on behalf of the assignor. Get a signed IP assignment in the contract and seek legal advice. This is not legal advice.",
      },
      {
        q: "Should I hire a local Australian agency or a remote team?",
        a: "It depends on how much face-to-face work your project needs and how clearly you can specify it. A local agency suits projects with many stakeholders, workshops and frequent changes. A remote studio can suit well-defined builds where you are comfortable working in writing and through a daily overlap window. Judge both on the same evidence: comparable work, references, process, ownership terms and support hours.",
      },
      {
        q: "What questions should I ask a web development company before hiring?",
        a: "Ask who will do the work and whether you can meet them, how they run discovery, how they estimate, how they test, what accessibility standard they build to and how they prove it, how they handle security and personal information, who will own the code and accounts, what support looks like after launch, and which hours they are available in Australian time.",
      },
      {
        q: "How can I check that a web agency's portfolio is genuine?",
        a: "Ask for links to live sites rather than screenshots, and check them yourself on a phone and with a keyboard. Ask what the agency built on each project, because many portfolios include work done with other firms. Then speak to at least two references from projects similar to yours and ask what went wrong and how the agency handled it.",
      },
      {
        q: "How do time zones work with an India-based development team?",
        a: "India Standard Time is UTC+5:30 with no daylight saving. AEST is UTC+10, so Sydney, Melbourne and Brisbane are 4.5 hours ahead of India; during AEDT (UTC+11) Sydney and Melbourne are 5.5 hours ahead. Perth, on UTC+8, is 2.5 hours ahead. In practice, Australian afternoons overlap with Indian mornings, so agree a fixed daily window for calls and decisions.",
      },
      {
        q: "What should a web development contract include?",
        a: "At minimum: the scope and deliverables, acceptance criteria, payment milestones tied to deliverables, a change request process, a written assignment of intellectual property, confirmation that domains, hosting and repositories are in your name, confidentiality and privacy obligations, warranty and support terms, and how either side can end the agreement and hand over. Have a lawyer review it. This is not legal advice.",
      },
      {
        q: "Is a freelancer or an agency better for a small business website?",
        a: "A capable freelancer can be a good choice for a small, well-defined site where you can manage the project and accept that one person is a single point of failure. An agency or studio suits work that needs several skills, such as design, development, accessibility testing and integrations, or ongoing support with cover for holidays and illness. Check the same evidence either way.",
      },
    ],
    content: [
      {
        heading: "How should you choose a web development company in Australia?",
        body: [
          "To choose a **web development company in Australia**, decide which team model fits your project, then judge shortlisted suppliers on evidence: live work you can test, references, a clear discovery process, written IP assignment, accessibility and security practice, and support hours that suit you. Apply pass-or-fail gates first, then score the remaining suppliers with weighted criteria.",
          "Most bad supplier choices are not made because buyers ignore red flags. They happen because the buyer compares the wrong things: portfolio polish, a confident pitch and a total price, rather than how the supplier scopes, tests, hands over and supports the work.",
          "Our general guide on [[/blogs/how-to-choose-website-development-company|how to choose a website development company]] covers the generic criteria in depth. This article adds what is specific to Australian buyers: copyright assignment under the Copyright Act, WCAG 2.2 AA and the Disability Discrimination Act, privacy and APP 8 when data or developers are overseas, the ACSC's questions for service providers, and working across AEST, AEDT, AWST and IST. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Choose the team model before the supplier: local agency, freelancer, remote or offshore studio, hybrid or in-house each suits different projects.",
          "Verify portfolios yourself: live sites, what the supplier actually built, and two references from similar projects.",
          "Make written IP assignment and accounts in your name pass-or-fail gates. Under the Copyright Act, an assignment needs to be in writing and signed.",
          "Ask for accessibility evidence against WCAG 2.2 AA, not a promise.",
          "Use the ACSC's five questions for managed service providers when a supplier will host or maintain your site.",
          "For remote teams, agree a fixed daily overlap window. AEST is 4.5 hours ahead of IST, AEDT 5.5 hours, and Perth 2.5 hours.",
          "Score on evidence with weighted criteria, and let two people score independently before comparing.",
        ],
      },
      {
        heading: "Start with the project, not the shortlist",
        body: [
          "Before you contact anyone, write one page that answers four questions. What are we building (a marketing site, a store, a portal or an application)? What must it connect to? What could go wrong that would hurt most (missed launch date, data breach, poor accessibility, lock-in)? Who on our side will make decisions, and how much time do they have?",
          "The answers decide which suppliers are worth talking to. A store on Shopify needs a different partner from a booking portal with complex rules. A team with little time to manage a project needs a supplier that runs discovery well and communicates proactively. Our [[/blogs/website-requirements-document|website requirements document guide]] shows how to turn this page into a brief suppliers can price.",
          "If the project is closer to a product than a website, read [[/blogs/custom-software-development-australia|custom software development in Australia]] or the [[/blogs/mvp-development-australia|MVP development guide for Australia]] first; the evaluation criteria shift towards architecture, testing and product management.",
        ],
      },
      {
        heading: "Team models, described fairly",
        body: [
          "No model is right for everyone. Each one moves cost, control and risk to a different place. Our comparison of [[/blogs/website-development-company-vs-freelancer|a development company and a freelancer]] covers two of these in more depth.",
        ],
        table: {
          headers: ["Model", "Suits", "Strengths", "Risks to manage"],
          rows: [
            ["**Local agency**", "Projects with many stakeholders, in-person workshops, frequent change, brand-led work", "Same business hours, easy face-to-face sessions, familiarity with Australian norms", "Higher rates; some subcontract build work, so ask who does it"],
            ["**Freelancer**", "Small, well-defined sites; specific skills; tight budgets", "Direct contact with the person building; low overhead", "Single point of failure; you manage testing, scope and cover"],
            ["**Remote or offshore studio**", "Well-specified builds, ongoing development, teams comfortable working in writing", "A full team (design, build, QA) often at a different cost structure; work can progress outside your hours", "Limited overlap hours, communication gaps, data location and IP terms need care"],
            ["**Hybrid** (local lead, remote delivery)", "Buyers who want a local relationship with remote capacity", "Local account management and strategy", "Two layers of margin; accountability can blur between them"],
            ["**In-house team**", "Continuous development that is core to the business", "Deep product knowledge, full control", "Recruitment time, fixed cost, narrow skills unless the team is large"],
          ],
        },
        callout: {
          type: "note",
          text: "Remote delivery works when requirements are written down, decisions happen in an agreed overlap window, and you own the code and accounts. It struggles when scope is negotiated informally in meetings. That is true of any team, but distance makes it visible sooner.",
        },
      },
      {
        heading: "Technical fit",
        body: [
          "Technical fit means the supplier has built something like your project, on a platform that suits your needs rather than their habits. Ask them to explain why they recommend a platform for you, what the alternatives were and what the recommendation will cost to run over three years. If you are weighing platforms, [[/blogs/custom-website-vs-wordpress|custom website vs WordPress]] sets out the trade-offs.",
          "**Signals of good fit:** they ask about your content editors, integrations and growth plans before naming a stack; they can show comparable integrations (for example Xero, MYOB, a CRM or Australia Post shipping); they explain how they handle hosting, deployment and backups; and they will put performance and accessibility targets into acceptance criteria. For ecommerce, see [[/blogs/shopify-development-australia|Shopify development in Australia]]; for connected systems, [[/blogs/api-integration-australia|API integration for Australian businesses]].",
        ],
      },
      {
        heading: "Verifying a portfolio: live sites and references",
        body: [
          "Portfolios are curated, and some include work the supplier contributed to only in part. Treat them as a list of things to verify, not as evidence on their own.",
        ],
        checklist: [
          "Ask for links to live sites, not screenshots or mock-ups. Check that each site is still live and recognisably the work shown.",
          "Ask what the supplier built on each project: design, front end, back end, integrations, content, or all of it.",
          "Open each site on a phone. Try the main journey: find a service, submit a form, or add to cart and reach checkout.",
          "Tab through a page with the keyboard. Can you see where focus is? Can you reach and use every control?",
          "Run a free automated accessibility and performance check. It will not prove conformance, but it shows the basics.",
          "Look for comparable complexity: integrations, logins, large catalogues or bookings, if your project has them.",
          "Speak to two references from projects similar to yours. Ask what went wrong and how the supplier responded, whether the project ran to budget, and whether they would hire them again.",
          "Ask whether the client still works with them. Long relationships say more than launch-day screenshots.",
        ],
        callout: {
          type: "tip",
          text: "Reference calls are more useful when you ask about problems rather than satisfaction. ‘Tell me about a time something went wrong’ gets a more informative answer than ‘were you happy?’.",
        },
      },
      {
        heading: "Discovery and scope",
        body: [
          "How a supplier handles discovery predicts how they will handle the rest of the project. A good supplier asks about your goals, users, content and constraints before estimating, challenges assumptions, and produces a written scope with acceptance criteria. A supplier that quotes a fixed price after one call is either very experienced with your exact kind of project or is pricing risk into the quote.",
          "For anything beyond a simple site, consider a short paid discovery phase that produces a sitemap, user journeys, a prioritised feature list, integration notes and an estimate. You own the output and can take it to other suppliers if you choose. Our [[/blogs/website-development-process|website development process guide]] and [[/blogs/website-development-timeline|website development timeline guide]] show what each stage should produce, and the companion article on [[/blogs/website-development-cost-australia|website development cost in Australia]] explains how to estimate and compare quotes.",
        ],
      },
      {
        heading: "Ownership: IP, domains, hosting and repositories",
        body: [
          "**Copyright.** Software code is protected as a literary work under the Copyright Act 1968. A business that pays a contractor does not automatically own the code the contractor writes. Section 196(3) of the Act says an assignment of copyright ‘does not have effect unless it is in writing signed by or on behalf of the assignor’, and future copyright can also be assigned. In practice, that means the contract should include a written IP assignment, signed by the supplier, covering the code and design they create for you. Pre-existing tools, libraries and open source components will be licensed rather than assigned, so ask for a list. Have a lawyer review the clause; this is not legal advice.",
          "**Accounts.** Ownership is also practical. Register domains, hosting, cloud, CMS, analytics and app store accounts in your business's name, and give the supplier user access. Keep the code repository in an organisation you control, with the supplier as members. If a relationship ends, you should be able to remove access in an afternoon rather than negotiate a handover.",
          "**Handover.** Ask what a handover includes: repository access, deployment instructions, credentials transferred to you, documentation of integrations and a list of third-party licences. A supplier confident in their work will describe this without hesitation.",
        ],
      },
      {
        heading: "Accessibility evidence, not promises",
        body: [
          "The Disability Discrimination Act applies to services delivered online, and the Australian Human Rights Commission's 2025 Guidelines on equal access to digital goods and services reportedly recommend aligning with WCAG 2.2 Level AA (per Deque's summary). The guidelines are not legally binding, but they show the standard you will be compared against. Ask suppliers how they meet WCAG 2.2 AA, which became a W3C Recommendation in October 2023.",
          "**Evidence to ask for:** a recent accessibility test report or conformance statement for a live project; which assistive technologies they test with; how accessibility is built into design reviews; how they handle the newer criteria such as Target Size (Minimum), Focus Not Obscured and Accessible Authentication; and how they treat third-party embeds that they do not control. Our guide to [[/blogs/website-accessibility-australia|website accessibility in Australia]] explains the standards and testing in detail. Seek legal advice about your own obligations.",
        ],
      },
      {
        heading: "SEO and search visibility",
        body: [
          "A rebuild can lose search traffic if URLs change without redirects, content is dropped or pages become slow. Ask how the supplier handles redirects, metadata, structured data, sitemaps and performance, and whether they will check search performance after launch.",
          "Be wary of suppliers selling special tactics for AI search. Google's guidance for AI Overviews and AI Mode says there are no additional requirements and no special schema markup needed to appear in them; the same fundamentals apply. Our guide to [[/blogs/ai-search-visibility|AI search visibility]] covers what does help.",
        ],
      },
      {
        heading: "Security and privacy: questions worth asking",
        body: [
          "If a supplier will host, maintain or administer your site, they become part of your security. The ACSC publishes five questions to ask managed service providers. They suit web suppliers well, and the quality of the answers is often more revealing than the answers themselves.",
        ],
        table: {
          headers: ["ACSC question", "What a good answer includes"],
          rows: [
            ["Are you implementing better practice cyber security (such as the Essential Eight)?", "Which controls they apply to their own systems and yours, for example MFA, patching timeframes and restricted admin privileges. The Essential Eight is guidance, not a legal obligation for private businesses."],
            ["Are you securely administering your systems and services?", "Named admin accounts, MFA, least privilege, and how access is removed when staff leave"],
            ["Are you monitoring activity on your systems and services?", "Logging, alerting, uptime monitoring and who responds"],
            ["Are you regularly assessing your systems and services?", "Dependency updates, vulnerability scanning, and independent testing where the risk justifies it"],
            ["Are you prepared for, and able to respond to, cyber security incidents?", "A written incident process, backups that are tested, and how and when they will tell you"],
          ],
        },
        checklist: [
          "**Personal information:** where will data be stored, and who can access it from where? If your business is covered by the Privacy Act, APP 8 applies before personal information is disclosed to an overseas recipient, and you can remain accountable for what the recipient does.",
          "**Data location:** if you need Australian hosting, check the supplier can deploy to an Australian region (AWS, Azure and Google Cloud all have one).",
          "**Breach handling:** the OAIC received 1,205 data breach notifications in 2025, the highest since the scheme began. Agree in the contract how quickly the supplier must tell you about a suspected breach.",
          "**Access hygiene:** shared passwords sent by email are a red flag. Ask about password managers and MFA.",
        ],
        callout: {
          type: "note",
          text: "Our [[/blogs/website-security-australia|website security guide for Australian businesses]] covers the controls in more depth. For privacy obligations, check with the OAIC or a privacy adviser.",
        },
      },
      {
        heading: "Testing, launch and maintenance",
        body: [
          "Ask how the supplier tests and who signs off. A credible answer names the browsers and devices covered, includes accessibility and form testing, describes a staging environment you can review, and ties payment to acceptance against written criteria.",
          "After launch, the relationship changes from project to service. Ask for maintenance terms in writing: what is included (updates, backups, monitoring, small changes), response times by severity, the rate for extra work, and the hours support is available in Australian time. Our [[/blogs/website-maintenance-guide|website maintenance guide]] lists what a plan should cover, and [[/blogs/wordpress-vs-custom-development-cost-of-ownership|WordPress vs custom development cost of ownership]] shows how platform choice affects ongoing effort.",
        ],
      },
      {
        heading: "Working across time zones",
        body: [
          "Australia has three standard time zones, and daylight saving applies only in some states. In 2026–27, daylight saving in NSW runs from 4 October 2026 to 4 April 2027, according to the NSW Government; Queensland, Western Australia and the Northern Territory do not observe it. India Standard Time is UTC+5:30 all year.",
        ],
        table: {
          headers: ["Location (time zone)", "UTC offset", "Ahead of IST by", "Overlap with a 9:30–18:30 IST day, within 9:00–17:30 local"],
          rows: [
            ["Sydney, Melbourne, Canberra, Hobart (AEST, April–October)", "+10", "4.5 h", "About 3.5 h: 14:00–17:30 local (9:30–13:00 IST)"],
            ["Sydney, Melbourne, Canberra, Hobart (AEDT, October–April)", "+11", "5.5 h", "About 2.5 h: 15:00–17:30 local (9:30–12:00 IST)"],
            ["Brisbane (AEST all year)", "+10", "4.5 h", "About 3.5 h: 14:00–17:30 local"],
            ["Perth (AWST all year)", "+8", "2.5 h", "About 5.5 h: 12:00–17:30 local"],
          ],
        },
        checklist: [
          "**Agree a fixed overlap window** for calls, reviews and decisions, and check whether the supplier shifts its hours earlier to widen it.",
          "**Set a cadence:** a short daily check-in in the overlap window, a weekly demo of working software, and a written weekly summary of progress, risks and decisions needed.",
          "**Write decisions down** in the project tool or repository, not only in calls, so work continues when you are offline.",
          "**Name a decision-maker on your side** who can answer questions within a day. Slow answers cost more across time zones.",
          "**Plan for urgent issues:** agree who responds to a severity-one problem outside the overlap window, and how to reach them.",
          "**Remember the clock change:** overlap shrinks by an hour in eastern states during AEDT. Revisit meeting times in October and April.",
        ],
        callout: {
          type: "takeaway",
          text: "The time difference matters less than whether both sides protect the overlap window. A supplier in your own city who is slow to respond can be harder to work with than a remote team with a disciplined daily rhythm.",
        },
      },
      {
        heading: "Questions to ask in supplier interviews",
        body: [
          "Use these in a first or second meeting. Listen for specific, evidence-backed answers rather than reassurance.",
        ],
        checklist: [
          "Who exactly will work on our project, and can we meet them? Do you subcontract any part of the work?",
          "Which two live projects are most like ours, and what did you build on each?",
          "Can we speak to the clients for those projects?",
          "How do you run discovery, and what do we receive at the end of it?",
          "How do you estimate, and what assumptions sit behind this quote?",
          "How do you handle changes in scope, and how are they priced?",
          "What accessibility standard do you build to, and can you show a test report from a recent project?",
          "How do you test, on which browsers and devices, and how does acceptance work?",
          "How would you answer the ACSC's five questions for managed service providers?",
          "Where will our data be hosted and who can access it from where?",
          "Will the contract include a written, signed assignment of IP? Which components are licensed instead?",
          "Will domains, hosting, cloud and repositories be in our name from day one?",
          "What are your support hours in Australian time, and how fast do you respond to an urgent issue?",
          "What does handover include if we part ways?",
          "What is your GST position, and which currency do you invoice in?",
        ],
      },
      {
        heading: "Gates first, then a weighted scorecard",
        body: [
          "Use a two-stage evaluation. **Stage one is pass or fail.** A supplier that fails any gate is out, however strong the rest of their proposal. **Stage two is a weighted score** for the suppliers that pass. Score each criterion from 0 (no evidence) to 4 (strong, verified evidence), multiply by the weight, and divide the total by 4 to get a score out of 100.",
          "**Gates:** willing to sign a written IP assignment; domains, hosting and repositories in your name; named team members you have met; at least two contactable references from comparable projects; written acceptance criteria before build starts.",
        ],
        table: {
          headers: ["Criterion", "Weight", "Evidence to collect"],
          rows: [
            ["Comparable, verifiable work", "15", "Live sites you have tested; reference calls; what they built"],
            ["Discovery and scoping quality", "12", "Questions asked, written scope, stated assumptions"],
            ["Technical fit and code quality", "12", "Platform rationale, code review practice, sample repository or walkthrough"],
            ["Accessibility conformance evidence", "10", "WCAG 2.2 AA test report or statement for a live project; testing method"],
            ["Security practice", "10", "Answers to the ACSC questions; MFA, patching, backups, incident process"],
            ["IP assignment clause and account ownership", "10", "Draft contract clause; account set-up plan; handover list"],
            ["Privacy and APP handling", "8", "Data location, overseas access, breach notification terms"],
            ["Testing and acceptance", "8", "Test scope, staging, sign-off process"],
            ["Maintenance terms and three-year cost", "8", "Itemised build and recurring costs, inclusions, GST position"],
            ["Australian-hours support and communication cadence", "7", "Overlap window, response times, reporting rhythm"],
            ["**Total**", "**100**", ""],
          ],
        },
        callout: {
          type: "tip",
          text: "Adjust the weights before you see any proposals, not after. Raise privacy and security for health or finance work; raise accessibility for public-facing services; raise technical fit for applications. Changing weights after scoring usually means you are justifying a favourite.",
        },
      },
      {
        heading: "Red flags and common mistakes",
        body: [],
        checklist: [
          "**A fixed price after one short call** for anything more complex than a brochure site.",
          "**Reluctance to put IP assignment in writing,** or a contract where the supplier keeps ownership until a final payment with no timeline.",
          "**Domains or hosting registered in the supplier's name** ‘to make things easier’.",
          "**A portfolio of screenshots** with no live links or references.",
          "**Accessibility described as a plugin or overlay** rather than design, build and testing work.",
          "**No testing line in the quote,** or testing described as ‘we check everything before launch’.",
          "**Vague answers about who does the work,** or a team you never meet.",
          "**Choosing on price alone** without comparing scope and three-year cost.",
          "**Fabricated or unverifiable claims,** such as reviews you cannot trace or awards you cannot find.",
          "**No agreed overlap window** with a remote team, leaving decisions waiting a day each time.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Copyright:** [[https://www6.austlii.edu.au/au/legis/cth/consol_act/ca1968133/s196.html|Copyright Act 1968 s196, via AustLII]]; [[https://hub.business.vic.gov.au/legal/4-intellectual-property-considerations-for-software-ownership/|Business Victoria, IP considerations for software ownership]].",
          "**Security and privacy:** [[https://www.cyber.gov.au/business-government/supplier-cyber-risk-management/managed-service-providers/questions-to-ask-managed-service-providers|ASD's ACSC, Questions to ask managed service providers]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP Guidelines chapter 8]]; [[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC, notifiable data breach statistics for 2025]]; [[https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html|AWS Regions]]; [[https://learn.microsoft.com/en-us/azure/reliability/regions-list|Azure regions list]]; [[https://docs.cloud.google.com/compute/docs/regions-zones|Google Cloud regions and zones]].",
          "**Accessibility:** [[https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/|W3C WAI, What's new in WCAG 2.2]]; [[https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services|Australian Human Rights Commission, Guidelines on equal access to digital goods and services]].",
          "**Search:** [[https://developers.google.com/search/docs/appearance/ai-features|Google Search Central, AI features and your website]].",
          "**Time zones:** [[https://www.nsw.gov.au/about-nsw/daylight-saving|NSW Government, Daylight saving]].",
          "Requirements and guidance change; check them before relying on them. Nothing here is ZSpace client data, and nothing is legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Choosing a web development company in Australia comes down to evidence. Decide which team model suits your project, verify portfolios and references yourself, make IP assignment and account ownership non-negotiable, and ask for proof of accessibility and security practice. Then score the suppliers that pass on the criteria that matter to your project, with weights you set before you saw the proposals.",
          "Whichever model you choose, local, remote or in-house, the same habits protect you: a written scope, a clear overlap window, decisions recorded in writing and accounts in your name. For the bigger picture, see [[/blogs/digital-product-development-australia|digital product development in Australia]].",
        ],
        cta: {
          title: "Shortlisting suppliers?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|website development]] and [[/services/ui-ux-design|UI/UX design]]. AEST is UTC+10 and IST is UTC+5:30, a 4.5-hour difference (5.5 hours during AEDT). If you would like us to be one of the suppliers you assess with this scorecard, we are happy to talk.",
        },
      },
    ],
  },
];
