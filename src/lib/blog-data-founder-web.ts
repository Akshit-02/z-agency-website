import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 1, web development: custom website vs web application, how to
 * estimate the cost of a custom web application, and SaaS MVP feature
 * prioritisation. Generic slugs in British English, with regional notes only
 * where data-protection rules differ. No prices or cost ranges are quoted
 * (owner decision): the cost article is a worksheet, and vendor pricing pages
 * are linked as examples of what to check, without amounts.
 * Sources checked 2026-10-14: OWASP Top 10:2025 (A01, A07); OAIC Privacy Act
 * coverage; ICO data protection by design (updated 5 Feb 2026); PIB on the
 * DPDP Rules 2025; PDPC website guide; Next.js deployment and static export
 * docs; Clutch pricing methodology; GCA RM1043.9 (DOS7) and its Lot 3 day-rate
 * file; Vercel and Netlify pricing pages (checked, not quoted); Eric Ries
 * (2009); Intercom RICE (2018); Kano et al. (1984). No figure here is ZSpace
 * client data.
 */
export const founderWebPosts: BlogPost[] = [
  {
    slug: "custom-website-vs-web-application",
    title: "Custom Website vs Web Application: What Does Your Business Actually Need?",
    seoTitle: "Custom Website vs Web Application: Which Do You Need?",
    excerpt:
      "Website, website plus one logged-in module, or a full web application? Tag each requirement with a five-question classifier and see which you need.",
    category: "Web Development",
    banner: "decisiontree",
    sceneKind: "compare",
    bannerAlt: "A decision tree that sorts business requirements by login, stored user data, payments, roles and integrations into three outcomes: a website, a website with one logged-in module, or a web application",
    date: "2026-10-14",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "professional-services", "saas-technology"],
    relatedSlugs: ["website-development-guide", "low-code-vs-custom-software", "website-requirements-document"],
    faqs: [
      {
        q: "Is a website with a login a web application?",
        a: "In practice, yes. As soon as people sign in, the system has to manage identities, sessions, passwords or one-time codes, and what each person is allowed to see. That is application work, even if the rest of the site is ordinary marketing pages. It can still be a small application if the login only serves one workflow.",
      },
      {
        q: "Can a web application and a marketing website share the same domain?",
        a: "Yes. A common pattern is the marketing site at the main domain and the application at a subdomain or a path such as /app. They can be built on the same framework or on different tools. Keeping them separate lets the marketing team edit pages without touching the application release process.",
      },
      {
        q: "Does a contact form make my website a web application?",
        a: "No. A form that sends an email or drops a lead into a CRM is still a website, although it does collect personal data, so you need a privacy notice and sensible handling of what is submitted. It becomes an application when people come back to see, edit or track what they submitted.",
      },
      {
        q: "Should I build the web application first and the website later?",
        a: "Usually the other way round. A simple website lets you explain the offer, collect interest and test demand while the application is scoped. Build the application once you know which workflow people will actually use.",
      },
      {
        q: "Can I start with a website builder and add a web application later?",
        a: "Often, yes. Many teams keep the marketing site on a builder and run the application separately. Check what the builder lets you export and how it handles a subdomain before you commit, because moving the marketing site later is a separate project.",
      },
    ],
    content: [
      {
        heading: "Website or web application: the short answer",
        body: [
          "**If visitors only read, browse and contact you, you need a website. If one group of users must sign in to do one job, such as booking, uploading documents or checking an order, you need a website plus one logged-in module. If several kinds of users sign in, store their own data, pay or approve things, and the system must talk to other software, you need a web application.** The difference is not how the site looks. It is whether the system has to remember who people are and what they did.",
          "The distinction matters because the two cost different amounts to build and, more importantly, to run. A website is mostly content. A web application holds other people's data, so it carries security, privacy and maintenance duties for as long as it exists. Buying an application when a website would do means paying for those duties without needing them. Buying a website when you need workflows usually means rebuilding within a year.",
          "This guide helps you classify what you need before you ask for quotes. It is not a guide to building either one; for that, see the [[/blogs/website-development-guide|step-by-step website development guide]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Classify each requirement, not the project as a whole.",
          "Five questions decide it: login, stored user data, payments or bookings, multiple roles, integrations.",
          "No tags means a website; tags in one workflow means a website plus a module; tags across several workflows means a web application.",
          "Once you store personal data, security and privacy duties start, and they continue after launch.",
          "A web application has ongoing running costs: hosting, third-party services, monitoring and maintenance.",
          "Many businesses are better served by a website plus an existing SaaS tool than by custom software.",
        ],
      },
      {
        heading: "Three outcomes, not two",
        body: [
          "Most articles treat this as a binary choice. In practice there is a middle path that suits many small businesses, and it is often the cheapest way to get the one workflow that matters.",
        ],
        table: {
          headers: ["Outcome", "What it is", "Typical examples", "What you take on"],
          rows: [
            ["**Website**", "Pages people read, plus forms that send enquiries", "Company site, service pages, blog, portfolio, landing pages", "Content updates, hosting, basic security and form handling"],
            ["**Website plus one module**", "A marketing site with one logged-in area for one job", "Client document upload, booking management, order status, a member resource area", "Accounts, access control and stored data for that one workflow"],
            ["**Web application**", "Software in the browser that several kinds of users rely on to do their work", "Customer portal, marketplace, internal operations tool, SaaS product", "Identity, roles, data, integrations, audit trails, ongoing development"],
          ],
        },
      },
      {
        heading: "The requirement classifier worksheet",
        body: [
          "Write down every thing a user must be able to do, one line each, in plain language: \"a client uploads their year-end documents\", \"staff approve a refund\", \"a visitor reads our pricing page\". Then tag each line against the five questions below. Do it in a spreadsheet with one row per requirement and one column per tag. Be honest: \"nice to have\" lines count too, but mark them so you can drop them later.",
        ],
        table: {
          headers: ["Tag", "Ask of each requirement", "Tag it if…", "Why it matters"],
          rows: [
            ["**L: Login / identity**", "Does the system need to know who this person is?", "They must sign in, or see something only they can see", "Accounts bring password resets, sessions, account recovery and access control"],
            ["**D: Stores user data**", "Does the user create or submit data that you keep and show back?", "Uploads, profiles, saved items, history, messages", "You now hold data you must secure, back up and delete on request"],
            ["**P: Payments or bookings**", "Does money or a reserved slot change hands?", "Checkout, deposits, subscriptions, appointment slots, stock reservations", "Transactions need reliable state, refunds, receipts and reconciliation"],
            ["**R: Multiple roles**", "Do different people see or do different things?", "Customer vs staff vs admin; manager approval; per-company accounts", "Every screen and action needs a permission rule, and each rule must be tested"],
            ["**I: Integrations**", "Must it exchange data with other software?", "CRM, accounting, ERP, payment gateway, calendar, email or SMS", "Each integration is a dependency that can change or fail"],
          ],
        },
      },
      {
        heading: "Reading your result",
        body: [
          "Once every line is tagged, look at where the tags fall. The rule is simple:",
        ],
        checklist: [
          "**No tags on any requirement:** a website. A good CMS or a website builder is probably enough. Compare the options in [[/blogs/custom-website-vs-website-builder|custom website vs website builder]].",
          "**Tags confined to one workflow** (for example, all the L, D and P tags sit on \"clients book and manage appointments\"): a website plus one module. First check whether an existing booking, portal or membership product does that job well; if it does, embed or link to it. Build only if it does not.",
          "**Tags spread across two or more workflows, or any requirement tagged R and I together:** a web application. Plan it as software, with discovery, a written requirements document and a budget for running it.",
          "**Only one tag on one line** (for example, a single integration that pushes form leads into a CRM): treat it as a website with an integration, not an application.",
        ],
        callout: {
          type: "tip",
          text: "Count the R tags carefully. Roles are the tag founders most often underestimate, because every role multiplies the screens, the permission rules and the test cases. Two roles is a different project from four.",
        },
      },
      {
        heading: "Hypothetical example: an accounting practice",
        body: [
          "**This example is hypothetical.** A small accounting practice wants a new website. Its list has seven lines. Five are content: services, team, pricing approach, articles and a contact form. None of these carries a tag. Two lines are different: \"clients upload year-end documents and see which ones are still missing\" (L, D) and \"staff mark documents as received and request missing items\" (L, D, R).",
          "Both tagged lines belong to the same workflow, document collection, so the result is a website plus one module. The practice then checks whether its existing practice-management software includes a client portal. If it does, the module becomes a link and some configuration, and the project is a website. If not, it scopes one small authenticated area with two roles, and nothing else.",
          "If the list had also included \"clients pay invoices online\" (P, I) and \"partners approve engagement letters\" (R), the tags would span three workflows and the honest answer would be a web application.",
        ],
      },
      {
        heading: "What changes once you hold personal data",
        body: [
          "Any requirement tagged D, and most tagged L, means you store personal data. That changes your obligations, and they apply whether the system is a tiny module or a large application. This is a summary, not legal advice; check the regulator's guidance for each market you serve.",
          "**Security baseline.** The OWASP Top 10:2025 lists the most common web application risks. The first is A01:2025 Broken Access Control, which is the R tag going wrong: one user seeing another's data. A07:2025 Authentication Failures covers the L tag. Ask any supplier how they test for both.",
        ],
        table: {
          headers: ["Market", "What to know"],
          rows: [
            ["**India**", "The Digital Personal Data Protection Rules 2025 were notified in November 2025, with most obligations on data fiduciaries, including notice, consent and breach reporting, phased in over 18 months. A web application started in 2026 is likely to go live inside or close to that window. Confirm the exact dates against the Gazette notification."],
            ["**UK**", "UK GDPR requires data protection by design and by default: appropriate technical and organisational measures, and processing only the personal data you need. A data protection impact assessment is required where processing is likely to result in high risk to people. The ICO updated this guidance on 5 February 2026."],
            ["**Australia**", "The Privacy Act covers organisations with annual turnover above $3 million, and some smaller ones, including private health service providers and businesses that buy or sell personal information. Many early-stage businesses fall below the threshold, but check the exceptions before assuming yours does."],
            ["**Singapore**", "The PDPA applies to organisations that collect, use or disclose personal data. The PDPC publishes a guide specifically for organisations building websites that handle personal data."],
          ],
        },
        callout: {
          type: "note",
          text: "Primary sources: PIB on the DPDP Rules 2025 (India); ICO data protection by design and by default (UK); OAIC Privacy Act rights and responsibilities (Australia); PDPC guide to building websites (Singapore). Data rules change; the table reflects official pages checked on 14 October 2026. For Australian product teams, [[/blogs/privacy-by-design-software-australia|privacy by design for Australian software]] goes into the practical controls.",
        },
      },
      {
        heading: "Running costs and ownership",
        body: [
          "A website can often run on a modest hosting plan with occasional updates. A web application has running costs from day one: hosting that supports server-side code, a database, backups, email or SMS for sign-in codes and notifications, error monitoring, security updates to its dependencies, and someone who can fix it when an integration changes. Budget for these as a monthly line, not a one-off.",
          "The technical line between the two is visible in the tools. Next.js, for example, can be deployed as a static export, which suits a content website but does not support features such as Server Actions, cookies or request-dependent route handlers; a Node.js server or container deployment supports all features. Logins and stored data push you onto the second, and that changes what you pay to host.",
          "Ownership matters more for an application than a website. Before you sign, make sure the code repository, hosting account, domain, database and third-party service accounts are in your name, with your supplier given access, not the other way round. For how to estimate both the build and the running costs on your own assumptions, see [[/blogs/custom-web-application-development-cost|how to estimate the cost of a custom web application]]; for brochure sites, [[/blogs/website-development-cost|what affects website development cost]] is the better guide.",
        ],
      },
      {
        heading: "When a web application is the wrong choice",
        body: [
          "Custom software is not automatically the ambitious option. It is the wrong choice when:",
        ],
        checklist: [
          "An existing SaaS product does the job and your process is not what makes you different. Configure it and link to it.",
          "You have not yet confirmed that customers want the workflow. Test it manually first, with forms, email and a spreadsheet. See [[/blogs/saas-mvp-feature-prioritisation|what a first MVP should include]] for how to scope a small first version.",
          "Nobody will own the system after launch. An application without an owner and a maintenance budget decays quickly.",
          "The main need is internal and fits common patterns. A low-code tool may be faster; compare the trade-offs in [[/blogs/low-code-vs-custom-software|low-code vs custom software]].",
          "The real problem is a spreadsheet process that has outgrown itself. That can justify custom software, but read [[/blogs/replacing-spreadsheets-with-custom-software|replacing spreadsheets with custom software]] first to check the case is real.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Classifying the project by how it looks rather than by what it must remember.",
          "Asking suppliers to quote for \"a website\" when the list includes logins and roles, then comparing quotes that assume different things.",
          "Adding a login \"for later\" with no workflow behind it, which adds security duties without value.",
          "Forgetting admin and staff roles when counting R tags.",
          "Treating privacy as a launch-week task instead of a design input.",
          "Letting the supplier hold the hosting, repository or domain accounts.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Write down what users must do, tag each line with the five questions, and let the pattern decide: no tags, a website; one tagged workflow, a website plus one module; tags across workflows, a web application. Then check whether existing software covers the tagged workflows before you commission anything custom. Turn the result into a short brief using the [[/blogs/website-requirements-document|website requirements document guide]], and ask every supplier to quote against the same list.",
          "If you are building an application, plan the personal-data duties for your market and the running costs before you plan features. Teams that need help with the build can look at our [[/services/website-development|website and web application development]] service.",
        ],
        cta: {
          title: "Discuss a web application idea",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|websites and web applications]] and [[/services/ui-ux-design|UX and product design]]. If useful, we can go through your tagged requirement list with you and talk through whether it points to a website, a single module or an application.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Security: OWASP Top 10:2025.",
          "Data protection: Press Information Bureau: DPDP Rules 2025; ICO: data protection by design and by default; OAIC: Privacy Act rights and responsibilities; PDPC: guide to building websites.",
          "Technical: Next.js: deploying; Next.js: static exports.",
          "Accessed 14 October 2026. Data protection rules and their commencement dates change; check current guidance and take legal advice for your situation.",
        ],
      },
    ],
  },
  {
    slug: "custom-web-application-development-cost",
    title: "How to Estimate the Cost of a Custom Web Application",
    seoTitle: "Web App Development Cost: How to Estimate Yours",
    excerpt:
      "A step-by-step worksheet for estimating custom web app cost: scope, effort ranges, your own rates, contingency, running costs and comparing quotes fairly.",
    category: "Web Development",
    banner: "costbreakdown",
    sceneKind: "cost",
    bannerAlt: "A cost estimate built up in layers: a scope inventory, effort ranges for each item, the buyer's own day rates, a contingency line for uncertainty, and monthly running costs for hosting, services and maintenance",
    date: "2026-10-14",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "saas-technology", "b2b-enterprise"],
    relatedSlugs: ["website-development-cost", "technical-discovery-software-projects", "custom-software-development-uk"],
    faqs: [
      {
        q: "Why don't you give an average cost for a web application?",
        a: "Because no reliable public figure exists. The published numbers come from self-selected reviews, supplier rate cards or agency marketing, and they mix projects of very different scope. A figure that ignores your scope is more likely to mislead you than help. The worksheet gives you a number based on your own requirements and the rates you are actually quoted.",
      },
      {
        q: "Should I ask for a fixed price or time and materials?",
        a: "A fixed price suits a well-defined scope, and the supplier will usually price the uncertainty into it. Time and materials suits work where the scope will change as you learn, but needs a budget cap and regular reviews. Many teams fix the price of a discovery phase and then estimate the build from its output.",
      },
      {
        q: "How do I compare quotes that differ a lot?",
        a: "Put them on the same assumptions. Ask each supplier for an itemised scope with effort per item, what is excluded, the testing approach, the support period and who owns the code and accounts. Differences usually come from different assumptions about scope, quality or what happens after launch, not only from rates.",
      },
      {
        q: "What running costs do people forget?",
        a: "Commonly: email and SMS for sign-in codes and notifications, error monitoring, backups and their storage, security testing, dependency updates, and the time needed to respond when a third-party integration changes its API. Each appears as a monthly or annual line.",
      },
      {
        q: "How much contingency should I add?",
        a: "Base it on your own uncertainty rather than a fixed percentage. Take the gap between each item's likely and high effort estimate; items with large gaps carry most of the risk. Reduce the contingency by resolving those items in discovery rather than by picking a smaller number.",
      },
    ],
    content: [
      {
        heading: "How to estimate it: the short answer",
        body: [
          "**List what the application must do, size the effort for each item as a range, multiply by the day rates you are actually quoted, add contingency in proportion to how uncertain each item is, and then add the monthly cost of running it. The result is your estimate, with every assumption visible, so you can compare suppliers on the same basis.** This guide gives you that worksheet. It deliberately quotes no prices: the published averages are not reliable enough to plan with, for reasons explained below.",
          "This is for custom web applications: portals, internal tools, marketplaces and SaaS products where users sign in and the system stores their data. If you are not sure that is what you need, start with [[/blogs/custom-website-vs-web-application|custom website vs web application]]. For brochure and marketing sites, [[/blogs/website-development-cost|the website development cost guide]] covers the relevant factors.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Cost is scope × effort × rate, plus contingency, plus running costs. Estimate each part separately.",
          "Size effort as a range (low, likely, high), not a single number.",
          "Use the rates you are quoted, not published averages.",
          "Let contingency come from your uncertainty, item by item.",
          "Running costs continue for the life of the application. Estimate them monthly.",
          "Compare quotes only after putting them on the same assumptions.",
        ],
      },
      {
        heading: "Why published \"average cost\" figures mislead",
        body: [
          "Search for web application cost and you will find confident ranges with no stated method. The more careful datasets explain their limits, and the limits are the point:",
        ],
        checklist: [
          "**Marketplace review data.** Clutch's web development pricing page says it compiles its figures \"from first-party reviews submitted by verified web development clients\". That is useful context, but the sample is self-selected, the projects range from small sites to large builds, and the page's headline \"typical\" project figure and its average project figure are far apart and describe different things.",
          "**Government rate cards.** The UK's Digital Outcomes and Specialists framework publishes average day rates for digital specialists. They are averages of the maximum rates suppliers may charge under the framework, as at 28 June 2022, based on a 7.5-hour day and excluding VAT and expenses. Some rows contain what appear to be placeholder maximum values. They are not prices paid, and they are not project costs.",
          "**Salary surveys.** Developer salary data tells you what employment costs, not what a supplier charges or what a project needs.",
          "**Agency tier tables.** Tiers such as \"simple, medium, complex\" with price bands rarely define what goes in each tier, so you cannot place your own project in one.",
        ],
        callout: {
          type: "note",
          text: "None of these sources measures what a project like yours costs. That is why this guide asks you to build the number from your own scope and quotes.",
        },
      },
      {
        heading: "What drives the cost",
        body: [
          "Before the worksheet, know which features move effort most. Each of these multiplies screens, rules or test cases. Integrations are often the least predictable line; [[/blogs/api-integration-development-cost|scoring each third-party API integration]] separately makes the estimate more honest.",
        ],
        table: {
          headers: ["Driver", "Why it adds effort", "Question to settle before quoting"],
          rows: [
            ["**User roles and permissions**", "Every role needs its own views and rules, and each rule needs testing", "How many roles, and what can each see and do?"],
            ["**Integrations**", "Each external system has its own API, errors and changes", "Which systems, which direction, how often, and who owns the API keys?"],
            ["**Payments and bookings**", "State must stay correct through failures, refunds and retries", "Which provider, which flows (one-off, subscription, refunds)?"],
            ["**Data migration**", "Old data is rarely clean or well structured", "How much data, from where, and how messy?"],
            ["**Reporting and admin**", "Often underestimated; admins need search, filters and exports", "What must staff see, edit and export?"],
            ["**Compliance and security**", "Privacy duties, audit logs, security testing", "Which data protection rules apply, and is any data sensitive?"],
            ["**Design depth**", "Custom interface design and user testing take time", "Is a well-built standard interface enough, or is the experience the product?"],
            ["**Uncertainty**", "Unclear requirements expand during the build", "Which items do you not yet understand well?"],
          ],
        },
      },
      {
        heading: "Step 1: Scope inventory",
        body: [
          "List every capability as a row, in plain language. Group rows into user journeys (\"a customer places a repeat order\") and supporting pieces (\"staff export monthly orders\"). Include the parts people forget: sign-up and account recovery, admin screens, email notifications, error states, data import, and the privacy notice and consent flows your market requires.",
          "For each row, record the role that uses it, any integration it touches, and an **uncertainty rating**: S if you could describe it precisely today, M if you know the outcome but not the details, L if you are unsure what it should do. The rating is about how well the item is understood, not how big it is. A [[/blogs/website-requirements-document|written requirements document]] is the natural home for this list.",
        ],
        table: {
          headers: ["Journey or capability", "Role", "Integration", "Uncertainty (S/M/L)", "Must-have for launch?"],
          rows: [
            ["Customer signs up and verifies email", "Customer", "Email service", "S", "Yes"],
            ["Customer places a repeat order", "Customer", "Payment provider", "M", "Yes"],
            ["Staff approve orders over a limit", "Staff manager", "None", "M", "Yes"],
            ["Orders sync to accounting software", "System", "Accounting API", "L", "Later"],
            ["Admin exports monthly report", "Admin", "None", "S", "Yes"],
          ],
        },
        callout: {
          type: "tip",
          text: "The rows above are an illustration of the format. Replace them with your own. If the list grows beyond what you can launch with, cut it using [[/blogs/saas-mvp-feature-prioritisation|a riskiest-assumption-first approach to MVP scope]] before estimating.",
        },
      },
      {
        heading: "Step 2: Size effort as ranges",
        body: [
          "Give each row three effort estimates in person-days: low (everything goes well), likely, and high (the realistic bad case). Do this with whoever will build it, or ask each supplier to fill in the same columns. Single-number estimates hide risk; ranges show it.",
          "Expect the gap between likely and high to be wide on L-rated items and narrow on S-rated ones. If an L item has a narrow range, someone is guessing optimistically. Remember that effort covers more than coding: design, testing, code review, deployment and project management all take time, so either include them per row or add them as separate rows.",
        ],
        table: {
          headers: ["Row", "Low (days)", "Likely (days)", "High (days)", "Gap (high − likely)"],
          rows: [
            ["Your row 1", "…", "…", "…", "…"],
            ["Your row 2", "…", "…", "…", "…"],
            ["Design, testing, deployment, management", "…", "…", "…", "…"],
            ["**Total**", "**Σ low**", "**Σ likely**", "**Σ high**", "**Σ gap**"],
          ],
        },
      },
      {
        heading: "Step 3: Apply your own rates",
        body: [
          "Multiply the likely total by the day rate you have been quoted. If the team mixes roles (designer, developer, tester, project lead), use each role's rate for its share of the days. If you have no quote yet, leave the rate as a blank to fill in, rather than borrowing a published average: a number you cannot defend will anchor every later conversation.",
          "**Build estimate = Σ likely days × your blended day rate.** Write down the assumptions next to it: which rows are included, who does the work, and which taxes or expenses are excluded.",
        ],
      },
      {
        heading: "Step 4: Add contingency from your uncertainty",
        body: [
          "Contingency is not a fixed percentage. It is the money that covers the difference between likely and high on the items you are unsure about. A simple method: add the gap column for all M and L rows and multiply by the rate. That is your contingency line. It will be large if your list has many L items, and that is information, not bad news.",
          "The cheapest way to shrink contingency is to resolve uncertainty before the build. A short [[/blogs/technical-discovery-software-projects|technical discovery phase]] turns L items into M or S by answering the open questions: what the integration's API actually allows, what the data looks like, how the approval rules work.",
        ],
        callout: {
          type: "takeaway",
          text: "Total build budget = build estimate + contingency. If that total is too high, cut scope or resolve uncertainty. Squeezing the effort estimates only moves the overrun to later.",
        },
      },
      {
        heading: "Step 5: Estimate running costs",
        body: [
          "A web application costs money every month it is live. List each line, find the current price on the provider's own pricing page for your expected usage, and record the date you checked. The links below are examples of pages to check, not recommendations, and their terms change. For a line-by-line view of hosting bills by architecture, see [[/blogs/web-application-hosting-cost|how much it costs to host a web application]].",
        ],
        table: {
          headers: ["Running-cost line", "What to check", "Example page to check"],
          rows: [
            ["**Database and backups**", "Storage, backup retention, point-in-time restore, region", "Your hosting or database provider's pricing page"],
            ["**Hosting and compute**", "Whether the plan allows commercial use, team seats, usage limits and overage charges", "Vercel pricing (vendor; its Hobby plan is described as for personal, non-commercial use); Netlify pricing (vendor)"],
            ["**Email and SMS**", "Per-message charges for sign-in codes, receipts and notifications in each country you serve", "Your email or SMS provider's pricing page"],
            ["**Third-party services**", "Payment fees, maps, search, file storage, analytics", "Each provider's pricing page and fee schedule"],
            ["**Monitoring**", "Error tracking and uptime alerts", "Your monitoring provider's pricing page"],
            ["**Security**", "Periodic security testing and dependency updates", "Quotes from testers; maintenance scope"],
            ["**Maintenance and support**", "Hours per month for fixes, updates and small changes; response times", "Your supplier's retainer terms"],
          ],
        },
        callout: {
          type: "note",
          text: "For what a maintenance agreement should cover, see [[/blogs/software-maintenance-contracts-australia|software maintenance contracts]]. The scope and response-time questions apply in any market.",
        },
      },
      {
        heading: "Comparing quotes on the same assumptions",
        body: [
          "Send every supplier the same scope inventory and ask them to return it with their effort ranges filled in. Then check each quote against this list:",
        ],
        checklist: [
          "Is every row from your inventory priced, and are any rows marked as excluded?",
          "Are design, testing, deployment and project management included, and where?",
          "What is the testing approach, and does it include access-control and authentication testing?",
          "Which uncertain items have they assumed away, and what happens if the assumption is wrong?",
          "Is it fixed price, time and materials, or a mix? What triggers a change request?",
          "What support is included after launch, and for how long?",
          "Who owns the code, repository, hosting account, domain and third-party accounts?",
          "Which running costs are included, and which will you pay directly?",
          "Are taxes and expenses included?",
        ],
        callout: {
          type: "tip",
          text: "A quote that is much lower than the others usually has a different scope, not a better rate. Find the rows they assumed away before choosing on price. The [[/blogs/custom-software-development-uk|guide to commissioning custom software in the UK]] covers contract points such as IP and acceptance that apply in most markets.",
        },
      },
      {
        heading: "Hypothetical example: a distributor's reorder portal",
        body: [
          "**This example is hypothetical.** A distributor wants trade customers to reorder online. Its inventory has twelve rows. Ten are rated S or M. Two are rated L: the sync with its accounting software and customer-specific pricing.",
          "When the founder asks the shortlisted team to size the rows, the two L items have the widest ranges, and together they account for most of the gap column. Instead of accepting a large contingency, the founder pays for a short discovery that inspects the accounting API and the pricing rules. Afterwards, one item becomes M and the other is moved to a second release. The contingency line shrinks because the uncertainty has shrunk, and the founder sends the revised inventory to two more suppliers for comparable quotes.",
        ],
      },
      {
        heading: "Risks and limits of this method",
        body: [
          "The worksheet is only as good as the inventory. Missing rows are the most common source of overruns, so ask a technical reviewer to read the list for gaps. Effort estimates from a team that will not build the product are less reliable than estimates from the team that will. And an estimate is not a commitment: requirements change once real users arrive, so plan a budget for the first months after launch as well as for the build.",
          "If your project is small enough that one existing SaaS product covers it, this level of estimation is unnecessary. Price the subscription and the setup instead.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Build your estimate in five layers: scope inventory, effort ranges, your own rates, contingency from uncertainty, and monthly running costs. Send the same inventory to every supplier and compare their answers row by row. Where the uncertainty is high, pay to reduce it before you commit the full budget. For delivery practice after you have chosen a supplier, the [[/blogs/custom-software-development-australia|custom software development guide]] covers discovery, testing and maintenance in more depth.",
          "If you would like a team to size the build against your inventory, our [[/services/website-development|web application development]] service starts from a written scope.",
        ],
        cta: {
          title: "Want a scoped estimate with the assumptions written down?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|custom web applications]] and [[/services/ui-ux-design|product and UX design]]. If useful, we can go through your scope inventory, fill in effort ranges against it and list every assumption, so you can compare our estimate with others on the same basis.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Rate data and its limits: Clutch: web development pricing guide (marketplace data, updated 21 September 2026); GCA: Digital Outcomes and Specialists 7 (RM1043.9); DOS7 Lot 3 average day rates file.",
          "Running-cost examples (vendor pages, checked but not quoted): Vercel pricing; Netlify pricing.",
          "Accessed 14 October 2026. Vendor prices and plan terms change; check each provider's current page before budgeting.",
        ],
      },
    ],
  },
  {
    slug: "saas-mvp-feature-prioritisation",
    title: "What Should Your First SaaS MVP Include? A Founder's Feature-Prioritisation Guide",
    seoTitle: "What Should Your First SaaS MVP Include?",
    excerpt:
      "Scope a B2B SaaS MVP around your riskiest assumption: a scoping worksheet, an in, out and later table, and the security basics you should never cut.",
    category: "Web Development",
    banner: "prioritymatrix",
    sceneKind: "roadmap",
    bannerAlt: "A prioritisation grid sorting candidate SaaS features into three columns, in the first version, out, and later, with access control, authentication, audit logging and data export pinned as must-keep items",
    date: "2026-10-14",
    readingTime: "9 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "startups", "b2b-enterprise"],
    relatedSlugs: ["saas-roadmap-prioritization", "technical-discovery-software-projects", "saas-website-development"],
    faqs: [
      {
        q: "Can I skip login in a SaaS MVP?",
        a: "Only if the product holds no customer data that one user should not see. Most B2B SaaS products do, so you need authentication and access control from the first version. You can use a proven identity provider instead of building login yourself, which is usually faster and safer.",
      },
      {
        q: "Should the MVP include billing?",
        a: "Include payment if willingness to pay is the assumption you are testing. Otherwise, invoice the first customers manually and add self-serve billing later. Manual invoicing is slower but tells you more about how customers react to the price.",
      },
      {
        q: "Is a prototype the same as an MVP?",
        a: "No. A clickable prototype tests whether people understand and want the workflow. An MVP is a working product that real customers use with real data, so it carries security and privacy duties a prototype does not. Many teams test a prototype first and build the MVP once the workflow is clear.",
      },
      {
        q: "Which prioritisation framework should I use?",
        a: "Use the riskiest assumption to decide what goes in the first version. Frameworks such as RICE, Kano and MoSCoW are more useful for ordering the later list. Pick one, use it consistently and write down the reasoning, because the reasoning is what you revisit after launch.",
      },
      {
        q: "How do I stop the MVP growing during the build?",
        a: "Agree a single assumption and a launch date before the build, and route every new idea to the later list unless it is required to test that assumption or for trust and legal reasons. Review the later list after launch, not during the build.",
      },
    ],
    content: [
      {
        heading: "What a first SaaS MVP should include",
        body: [
          "**A first SaaS MVP should include the smallest set of features that lets real customers test your riskiest assumption, plus the features needed for them to trust you with their data: sign-in, access control so each customer sees only their own data, basic audit logging, and backups with a way to export data. Everything else goes on a later list, or is done manually.** The test for each feature is not \"is it useful?\" but \"do we need it to learn what we must learn, or to be trusted?\"",
          "This follows Eric Ries's original definition. In his 2009 guide to the minimum viable product, he describes it as \"that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.\" The aim is learning, not a smaller version of the full product.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Write down the one assumption the MVP must test before listing features.",
          "Sort every feature: needed to test the assumption, needed for trust or legal reasons, or neither.",
          "\"Neither\" goes to the later list, or is done manually behind the scenes.",
          "Do not cut authentication, access control, basic audit logging, or backups and export.",
          "Use RICE, Kano or MoSCoW to order the later list, not to decide the first version.",
          "A heavier MVP is justified when regulation or customer trust demands it, not because a competitor has a feature.",
        ],
      },
      {
        heading: "Step one: name the riskiest assumption",
        body: [
          "Most SaaS ideas rest on several assumptions: that a problem exists, that this customer feels it strongly enough to change how they work, that your workflow solves it, and that they will pay. The riskiest one is the assumption that, if wrong, makes the rest irrelevant, and that you have the least evidence for.",
          "Write it as a sentence you could prove false: \"Operations managers at 20 to 200 person logistics firms will replace their shared spreadsheet with our scheduling board within two weeks of onboarding.\" Then write down what result would count as evidence, and by when. If you cannot name the assumption, you are not ready to scope an MVP; you are ready for customer interviews or a prototype. The guide to [[/blogs/how-much-ux-design-before-development|how much UX design to do before development]] covers that stage.",
        ],
      },
      {
        heading: "The scoping worksheet",
        body: [
          "List every candidate feature as a row and fill in the columns. Be strict with the second column: a feature is required to test the assumption only if, without it, a customer could not complete the workflow you are testing.",
        ],
        table: {
          headers: ["Candidate feature", "Required to test the assumption?", "Required for trust or legal reasons?", "Can it be done manually first?", "Decision"],
          rows: [
            ["Write each feature here", "Yes / No", "Yes / No (security, consent, privacy, payments)", "How, and by whom", "In / Manual / Later / Out"],
          ],
        },
        checklist: [
          "**Yes in either of the first two columns:** in the first version.",
          "**No in both, but the customer must experience the outcome:** do it manually. A team member performs the task behind the scenes (sometimes called a concierge or Wizard-of-Oz approach). It is slower per customer but costs no build time and teaches you what the automated version must do.",
          "**No in both, and the outcome is not needed yet:** later list.",
          "**No in both, and it does not serve the assumption at all:** out. Write down why, so it does not return in the next meeting.",
        ],
      },
      {
        heading: "In, out and later: a typical B2B SaaS",
        body: [
          "This is a starting point for a typical B2B SaaS product where a team at a customer company uses a shared workspace. Your assumption may move rows; the trust rows should not move.",
        ],
        table: {
          headers: ["Feature", "First version", "Why"],
          rows: [
            ["**The core workflow you are testing**", "In", "It is the experiment"],
            ["**Sign-in for invited users**", "In", "Trust; a proven identity provider reduces build effort"],
            ["**Per-customer data separation and roles (at least admin and member)**", "In", "Trust; one customer must never see another's data"],
            ["**Basic audit log of sign-ins and key changes**", "In", "Trust and support; you need to answer \"who changed this?\""],
            ["**Backups and data export**", "In", "Trust; customers need to know they can leave with their data"],
            ["**Privacy notice and the consents your market requires**", "In", "Legal"],
            ["**Simple onboarding (invite a teammate, sample data)**", "In, if adoption is the assumption", "Otherwise do it manually on a call"],
            ["**Self-serve billing and plan management**", "Later, unless willingness to pay is the assumption", "Invoice the first customers manually"],
            ["**Self-serve sign-up**", "Later", "Invite early customers by hand so you speak to each one"],
            ["**Integrations**", "Manual or later", "Import a spreadsheet; build the integration that customers ask for most"],
            ["**Reporting dashboards**", "Later", "Export data and build reports by hand for the first customers"],
            ["**Advanced permissions, single sign-on**", "Later", "Add when a customer's procurement asks for it"],
            ["**Native mobile apps**", "Out", "A responsive web app tests the assumption"],
            ["**Custom theming, white-labelling**", "Out", "Rarely the riskiest assumption"],
          ],
        },
      },
      {
        heading: "Do not cut these",
        body: [
          "Some ranking advice suggests skipping authentication in an MVP. For a B2B product holding customer data, that conflicts with the most widely used list of web application risks. The OWASP Top 10:2025 puts **A01:2025 Broken Access Control** first and lists **A07:2025 Authentication Failures**. An MVP with real customers and real data is exposed to both from the first day.",
        ],
        checklist: [
          "**Access control:** every request checks that the user may see or change that record, on the server, not only in the interface.",
          "**Authentication:** use a proven identity provider or a well-tested library; include password reset or passwordless sign-in, and session expiry.",
          "**Basic audit logging:** sign-ins, permission changes and changes to important records, with who and when.",
          "**Backups and export:** automated backups you have tested restoring, and a way for a customer to export their data.",
        ],
        callout: {
          type: "takeaway",
          text: "These are cheaper to include from the start than to retrofit, because access rules touch every screen and every query. For API-level detail, see [[/blogs/api-security-best-practices|API security best practices]].",
        },
      },
      {
        heading: "Where RICE, Kano and MoSCoW fit",
        body: [
          "Prioritisation frameworks are useful once the first version is fixed by the riskiest assumption. Use them to order the later list and to explain decisions to co-founders and investors.",
        ],
        table: {
          headers: ["Method", "What it is", "Best used for", "Watch out for"],
          rows: [
            ["**RICE**", "Described by Sean McBride at Intercom in 2018: score each idea on reach, impact, confidence and effort; reach × impact × confidence, divided by effort, gives \"total impact per time worked\"", "Ordering the later list once you have usage data", "Before launch, reach and impact are guesses; keep confidence honest"],
            ["**Kano model**", "From Kano, Seraku, Takahashi and Tsuji (1984): sorts features into must-be qualities customers expect, attractive qualities that delight, and others", "Spotting must-be features you might wrongly cut, and delighters you can postpone", "Needs customer input to classify features, not internal opinion"],
            ["**MoSCoW**", "Sort items into must have, should have, could have and won't have this time", "Quick agreement in a planning session", "\"Must\" tends to grow; tie it to the riskiest assumption"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a scheduling tool for field-service firms",
        body: [
          "**This example is hypothetical.** A founder plans a SaaS tool that lets small field-service firms schedule engineers. Her list has 23 features. Her riskiest assumption is that office managers will move daily scheduling out of a spreadsheet and into the tool, and still be using it after four weeks.",
          "Working through the worksheet, only four features are required to test that: a scheduling board, a job list, assigning engineers, and a daily view engineers can open on a phone browser. Four more are required for trust: sign-in, separation of each firm's data with admin and member roles, an audit log of schedule changes, and export to CSV. Customer import is done manually by the founder from each firm's spreadsheet. Billing is invoiced by hand. The integration with accounting software, route optimisation, native apps and reporting go to the later list. The other 15 features are either handled manually or not built for the first version.",
          "After launch, she will order the later list with RICE using real usage data, and move route optimisation up only if customers ask for it.",
        ],
      },
      {
        heading: "When a heavier MVP is justified",
        body: [
          "Some products cannot start small on trust. If you handle payments, health records, financial data or children's data, or sell to large organisations whose security reviews come before any trial, the trust and legal column will be longer, and the first version will take longer to build. That is a reason to make the experiment column even shorter, not to skip the trust column. It may also be a reason to test the workflow with a prototype first, before any real data is involved.",
          "Data protection rules also differ by market. If you are building in Australia or the UAE, [[/blogs/mvp-development-australia|the Australian MVP guide]] and [[/blogs/mvp-development-uae|the UAE MVP guide]] cover local funding, tax and regulatory points as further reading.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Listing features before naming the assumption, then cutting by gut feel.",
          "Cutting authentication or access control to save time, then retrofitting them under pressure.",
          "Building self-serve billing and sign-up before anyone has paid.",
          "Building integrations before customers agree which ones matter.",
          "Treating the later list as a promise to customers.",
          "Measuring success by features shipped rather than by evidence for or against the assumption.",
        ],
      },
      {
        heading: "After launch",
        body: [
          "Once customers are using the product, the question changes from \"what is the smallest test?\" to \"what should we build next?\". Review the result against the evidence you defined, then reorder the later list with real data. The [[/blogs/saas-roadmap-prioritization|SaaS roadmap prioritisation guide]] covers that stage. To budget the build itself, [[/blogs/custom-web-application-development-cost|how to estimate the cost of a custom web application]] gives a worksheet that starts from the scope you have just defined.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Write down your riskiest assumption and the evidence that would prove it wrong. Put every candidate feature through the worksheet. Keep the experiment column short, keep the trust column intact, and do as much as you can manually for the first customers. Then brief a team with the in, manual and later lists, so they quote for the right thing. If you need a team to design and build it, see our [[/services/website-development|web application development]] service.",
        ],
        cta: {
          title: "Plan your MVP",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|product discovery and UX design]] and [[/services/website-development|web application development]]. If useful, we can go through your scoping worksheet with you and talk through what belongs in the first version.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Definitions and methods: Eric Ries, \"Minimum Viable Product: a guide\", Startup Lessons Learned, 3 August 2009; Sean McBride, \"RICE: Simple prioritization for product managers\", Intercom, 5 January 2018; Kano, Seraku, Takahashi and Tsuji, \"Attractive quality and must-be quality\", Hinshitsu (Journal of the Japanese Society for Quality Control), vol. 14, no. 2, 1984.",
          "Security: OWASP Top 10:2025.",
          "Accessed 14 October 2026.",
        ],
      },
    ],
  },
];
