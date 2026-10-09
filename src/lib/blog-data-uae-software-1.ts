import type { BlogPost } from "./blog-data";

/**
 * UAE software cluster, part 1: custom software vs SaaS (build vs buy) and
 * choosing a software development company for a UAE startup.
 * Sources checked 2026-10-08/09: UAE Ministry of Finance (VAT), FTA
 * e-invoicing timeline (Sept 2026), u.ae (PDPL, consumer protection, digital
 * invoicing), UAE PASS developer docs, AWS and Azure shared responsibility
 * pages, AWS UAE region announcement, Azure regions list, Oracle Abu Dhabi
 * region page, Google Cloud locations, CMS / Gowling WLG on Decree-Law
 * 38/2021 Art. 28, Latham & Watkins on Federal Law 2/2019, Zbooni/YouGov
 * WhatsApp survey (vendor-commissioned), du/Huawei SME study via MENA Startup
 * Digest, CISA Secure by Design, NCSC supply chain guidance, OWASP API
 * Security Top 10 2023, NIST CSF 2.0, ManpowerGroup 2026 via People Matters,
 * Dubai Media Office (Dubai Chamber of Digital Economy, Jan 2026), Eric Ries
 * on MVPs, Node.js release schedule. Source-code escrow and UAE/India time
 * zones are secondary [S] items and are worded cautiously.
 * No figure here is ZSpace client data.
 */
export const uaeSoftwarePosts1: BlogPost[] = [
  // ------------------------------------------------ CUSTOM SOFTWARE VS SAAS
  // Build-vs-buy decision guide for UAE businesses. Does not default to
  // custom. Differentiated from custom-website-vs-website-builder (websites),
  // wordpress-vs-custom-development-cost-of-ownership (CMS TCO) and
  // build-vs-buy-ai-agents (AI agents), all linked.
  {
    slug: "custom-software-vs-saas-uae",
    title: "Custom Software vs SaaS in the UAE: Which Is Right for Your Business?",
    seoTitle: "Custom Software vs SaaS in the UAE: Which to Choose",
    excerpt:
      "Custom software vs SaaS for UAE businesses: costs, lock-in, security, ownership and UAE checks, with a decision matrix and a three-year TCO worksheet.",
    category: "Web Development",
    banner: "decisiontree",
    sceneKind: "compare",
    bannerAlt: "A decision tree that routes a business need to SaaS, configurable SaaS, custom software or a hybrid of a SaaS core with a custom layer",
    date: "2026-10-09",
    readingTime: "19 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ai-automation"],
    relatedIndustrySlugs: ["professional-services", "real-estate", "healthcare-healthtech", "d2c-consumer"],
    relatedSlugs: ["custom-website-vs-website-builder", "wordpress-vs-custom-development-cost-of-ownership", "build-vs-buy-ai-agents"],
    faqs: [
      { q: "Is custom software better than SaaS for a UAE business?", a: "Not by default. SaaS is usually faster and cheaper to start and suits standard processes such as accounting, HR or a typical CRM. Custom software suits processes that set you apart, unusual workflows or integrations that no product handles well. Many UAE businesses end up with a hybrid: a SaaS core for standard work plus a small custom layer for the parts that are genuinely specific to them." },
      { q: "Is custom software cheaper than SaaS in the long run?", a: "Sometimes, but not automatically. Custom software swaps subscription fees for build cost, hosting, maintenance, security updates and the people to run it. Over three years it can cost more or less than SaaS depending on user numbers, how much the product must change and how much configuration a SaaS needs. Use a three-year total cost of ownership worksheet with the same scope for every option." },
      { q: "Who owns custom software built for my company in the UAE?", a: "Your contract should say so explicitly. Law-firm commentary on Article 28 of Federal Decree-Law No. 38 of 2021 on copyright says a commissioned work belongs to the commissioning party unless agreed otherwise, but contracts override defaults. Include an express IP assignment on payment, keep the code repository in your company's account and get legal advice for significant projects." },
      { q: "Do SaaS tools need to support UAE e-invoicing?", a: "If the tool issues or stores your B2B or B2G invoices, it will need to work with your Accredited Service Provider (ASP). According to the Federal Tax Authority, businesses with revenue of AED 50 million or more must appoint an ASP by 30 October 2026 and go live on 1 January 2027; others appoint by 31 March 2027 and go live on 1 July 2027. Ask vendors for their UAE roadmap in writing and confirm obligations with a tax adviser." },
      { q: "Does my SaaS data need to be stored in the UAE?", a: "It depends on the data and your sector. Health data related to services provided in the UAE is restricted from being stored or processed outside the UAE under Federal Law No. 2 of 2019, and Abu Dhabi's ADHICS standard requires UAE hosting for in-scope health information. The PDPL sets conditions for cross-border transfers of personal data. Ask each vendor where data, backups and support access sit, and take advice for regulated data." },
      { q: "What is a hybrid approach to software?", a: "A hybrid approach keeps an off-the-shelf product as the system of record, for example a CRM, ERP or ecommerce platform, and adds custom software around it: integrations, a customer portal, a pricing engine or internal tools. It gives you speed and vendor-maintained basics while keeping the differentiating parts under your control. The risk is integration upkeep, so design integrations carefully and monitor them." },
      { q: "How do I reduce SaaS vendor lock-in?", a: "Before signing, test a full data export in a usable format, check API limits and the cost of extra API calls, read the price-change and termination clauses, and keep your own copy of critical data. Avoid heavy proprietary scripting where a standard integration would do. Plan an exit route on day one, even if you never use it." },
      { q: "When does custom software make sense for a small UAE business?", a: "When the process is how you win business, when off-the-shelf tools force costly workarounds, when you need to connect several systems in ways no product supports, or when you are building a product to sell. Start with a narrow first version that proves value, not a full replacement of every tool you use." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Choose SaaS when your process is standard, choose custom software when the process is what sets you apart, and choose a hybrid when you need both.** For most UAE businesses the right answer is a mix: subscription products for accounting, HR and email, configurable platforms for CRM or ERP, and custom software only where off-the-shelf tools force costly workarounds or where the software itself is the product.",
          "This guide does not assume custom development is the answer. It compares four options (plain SaaS, configurable SaaS, custom software and a hybrid) on cost structure, time to launch, flexibility, integrations, vendor dependence, security, maintenance, ownership and scalability. It then adds UAE-specific checks, a decision matrix, a decision tree and a three-year total cost of ownership (TCO) worksheet you can fill in with your own quotes.",
          "If you are deciding about a website rather than business software, see [[/blogs/custom-website-vs-website-builder|custom website vs website builder]] and [[/blogs/wordpress-vs-custom-development-cost-of-ownership|WordPress vs custom development cost of ownership]]. For AI agents specifically, see [[/blogs/build-vs-buy-ai-agents|build vs buy AI agents]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "There are four options, not two: SaaS, configurable SaaS, custom software and a hybrid",
          "Compare three-year total cost of ownership, not launch price or monthly fee alone",
          "SaaS moves patching and infrastructure to the vendor, but your data, users and settings stay your responsibility",
          "Lock-in is a contract and data question: test exports, API limits and price-change terms before signing",
          "UAE checks include e-invoicing readiness for 2027, 5% VAT, Arabic and RTL, data location, local payments, UAE PASS and WhatsApp",
          "Custom software needs an owner after launch: budget for maintenance, security updates and hosting from day one",
          "A hybrid (SaaS core plus a small custom layer) is often the most practical answer for growing UAE businesses",
        ],
      },
      {
        heading: "What are the four options?",
        body: [
          "The build-vs-buy question is usually framed as two choices. In practice there are four, and most decisions are about where on this spectrum each part of the business should sit.",
        ],
        table: {
          headers: ["Option", "What it is", "Typical examples", "You control"],
          rows: [
            ["SaaS (as is)", "A subscription product used largely as delivered", "Accounting, payroll, email, helpdesk, scheduling", "Settings, users, data you enter"],
            ["Configurable SaaS", "A platform shaped with configuration, low-code tools, custom fields, workflows and marketplace apps", "CRM and ERP platforms, ecommerce platforms, low-code app builders", "Data model, workflows and automations within the platform's limits"],
            ["Custom software", "Software designed and built for your processes, which you own and operate", "Customer portals, quoting engines, operations systems, products you sell", "Everything: features, data, hosting, roadmap"],
            ["Hybrid", "A SaaS or platform core with custom software around it", "CRM plus a custom portal; ERP plus integration services; Shopify plus a custom app", "The core's settings plus everything in the custom layer"],
          ],
        },
        callout: {
          type: "note",
          text: "Configurable SaaS can drift into custom software. Once a platform carries hundreds of custom fields, scripts and workflows that only one consultant understands, you have custom software with someone else's limits and a subscription on top. Treat heavy configuration as a build and document it like one.",
        },
      },
      {
        heading: "Side-by-side comparison",
        body: [
          "This is a general comparison. Individual products and projects vary, so use it to frame questions, not as a verdict.",
        ],
        table: {
          headers: ["Factor", "SaaS", "Configurable SaaS", "Custom software", "Hybrid"],
          rows: [
            ["Initial cost", "Low: setup and onboarding", "Moderate: configuration, data migration, training", "High: discovery, design, build, testing", "Moderate: core setup plus a scoped build"],
            ["Ongoing cost", "Per user or per tier subscription", "Subscription plus admin or partner support", "Hosting, maintenance, security updates, team time", "Subscription plus upkeep of the custom layer"],
            ["Time to launch", "Days to weeks", "Weeks to months", "Months for a first useful version", "Weeks for the core; custom parts follow"],
            ["Flexibility", "Vendor's roadmap", "High within platform limits", "Whatever you can build and maintain", "High where it matters"],
            ["Integrations", "Built-in connectors and APIs", "Connectors, marketplace apps, APIs", "Any system with an API or data feed", "Custom layer bridges the gaps"],
            ["Vendor dependence", "High", "High, plus partner dependence", "Dependence on your developers instead", "Moderate, spread across vendor and team"],
            ["Security work for you", "Users, access, settings, data", "Same, plus custom scripts and apps", "Application, dependencies, hosting configuration", "SaaS settings plus the custom layer"],
            ["Ownership", "Licence to use; your data", "Licence; your data and, usually, your configuration", "Code and IP if your contract assigns it", "Custom code owned; core licensed"],
            ["Scalability", "Vendor's capacity and plan tiers", "Plan tiers, API limits", "Depends on architecture and budget", "Core scales with vendor; custom by design"],
          ],
        },
      },
      {
        heading: "Initial and ongoing costs: what you are actually paying for",
        body: [
          "**Answer first:** SaaS turns software into an operating expense that grows with users, modules and usage. Custom software front-loads cost into the build, then carries a smaller but permanent running cost for hosting, maintenance and people. Neither is cheaper in general; it depends on your scale, how much change you need and how long you keep the system.",
          "**SaaS cost structure.** Expect per-user or per-tier subscriptions, add-on modules, premium support, API or automation usage limits, storage tiers, marketplace apps billed separately, and implementation help from a partner. Watch for annual price increases, minimum seat counts and features that move to higher tiers.",
          "**Custom software cost structure.** Expect discovery and design, development, testing, project management, cloud hosting, third-party services (email, SMS, maps, payments), monitoring, security updates, bug fixes, small improvements and eventually upgrades of frameworks and libraries. A system with no maintenance budget slowly becomes a liability; see the [[/blogs/website-maintenance-guide|maintenance guide]] for what ongoing care covers.",
          "**Hidden costs on both sides.** Data migration, training, process change, internal admin time and the cost of the workaround spreadsheets people keep when a tool does not fit. **UAE facts:** in a 2026 du and Huawei study of 648 UAE SMEs, reported by [[https://menastartupdigest.com/?p=46396|MENA Startup Digest]], respondents named setup costs (47%), skills (45%), subscription costs (37%) and integration (31%) as barriers to digital adoption. Both build and buy carry those costs; they just arrive at different times.",
          "For cost drivers on AI features specifically, see [[/blogs/ai-development-cost-uae|AI development cost in the UAE]].",
        ],
      },
      {
        heading: "Time to launch and flexibility",
        body: [
          "**Answer first:** SaaS wins on speed; custom wins on fit. The question is whether the speed you gain now costs you more in workarounds later.",
          "A SaaS product can often be running within days, because the vendor has already built, tested and hosted it. Configurable platforms take longer because the work moves to designing your data model, workflows, permissions and reports. Custom software takes longest to its first useful version, which is why a narrow [[/blogs/mvp-development-uae|MVP]] or a single high-value module is usually a better start than a full replacement.",
          "Flexibility cuts the other way. With SaaS you get the vendor's roadmap: if a feature you need is not planned, you wait, work around it or switch. With custom software you can change anything, but every change costs development time and adds to what must be maintained. **Our recommendation:** list the five processes where you most often say 'the system does not let us', and judge each option against those, not against a generic feature list.",
        ],
      },
      {
        heading: "Integrations: where most decisions are really made",
        body: [
          "**Answer first:** the number and quality of integrations you need often decides the question. A business with three systems that rarely talk can live with SaaS; a business whose operations depend on data moving reliably between six systems usually needs some custom integration work, whichever core it chooses.",
          "When assessing a SaaS product, check its API (documented, versioned, with sensible rate limits), webhooks for real-time events, native connectors for the tools you already use, and whether integration features sit on a higher tier. When assessing custom work, ask how integrations will handle retries, duplicates, failures and monitoring. Our guides to [[/blogs/api-integration-uae|API integration in the UAE]] and [[/blogs/website-api-integration|website API integration]] cover the engineering detail.",
          "**Typical UAE integration points** include accounting and ERP, CRM, payment gateways, WhatsApp Business Platform, delivery and logistics partners, e-invoicing providers and, for some services, UAE PASS. If you are adding AI to existing systems, see [[/blogs/enterprise-ai-integration|enterprise AI integration]].",
        ],
      },
      {
        heading: "Vendor dependence: lock-in, data export and price changes",
        body: [
          "**Answer first:** every option creates dependence. SaaS makes you dependent on a vendor's pricing, roadmap and continued existence; custom software makes you dependent on the people who understand the code. The goal is not zero dependence but a credible exit route.",
          "**SaaS lock-in checks.** Can you export all data, including attachments, history and audit logs, in a documented format? How long is data kept after cancellation? What notice is given before price changes, and can they apply mid-term? Are there API call limits that would make a migration slow? Can configuration (workflows, fields, templates) be exported or only recreated by hand?",
          "**Custom software dependence checks.** Is the code in a repository your company owns? Is it documented well enough for another team to take over? Does it use mainstream frameworks with a healthy hiring market? Are infrastructure accounts in your name? The [[/blogs/software-development-company-uae|guide to choosing a software development company]] covers these contract points in detail.",
        ],
        checklist: [
          "Run a trial export of real data before you sign, and open it in another tool",
          "Read the price-change, renewal and termination clauses, not just the pricing page",
          "Confirm API limits and whether extra calls cost more",
          "Keep a scheduled copy of critical data in storage you control",
          "Document configuration as you build it, so it can be recreated elsewhere",
          "For custom builds, own the repository, cloud accounts and domain from day one",
        ],
      },
      {
        heading: "Security: who patches what?",
        body: [
          "**Answer first:** SaaS does not hand all security to the vendor. Under the shared responsibility model, the provider secures the platform, and you remain responsible for your data, users, access and configuration. Custom software moves much more of the work to you, or to whoever maintains it.",
          "**Verified facts.** AWS describes its model as security 'of' the cloud (AWS protects 'the infrastructure that runs all of the services offered in the AWS Cloud') versus security 'in' the cloud, where customer responsibility 'will be determined by the AWS Cloud services that a customer selects' ([[https://aws.amazon.com/compliance/shared-responsibility-model/|AWS]]). Microsoft states that 'for all cloud deployment types, you own your data and identities', and its responsibility matrix shows configuration and settings as a customer responsibility even for SaaS ([[https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility|Microsoft]]).",
        ],
        table: {
          headers: ["Responsibility", "SaaS", "Configurable SaaS", "Custom on cloud (PaaS/IaaS)"],
          rows: [
            ["Physical data centre, hardware", "Vendor", "Vendor", "Cloud provider"],
            ["Operating system and runtime patches", "Vendor", "Vendor", "You or cloud provider, by service type"],
            ["Application code and dependencies", "Vendor", "Vendor; you for custom scripts and apps", "You (your developers)"],
            ["Configuration and settings", "You", "You", "You"],
            ["Users, roles, MFA, offboarding", "You", "You", "You"],
            ["Your data: classification, retention, exports", "You", "You", "You"],
            ["Monitoring and incident response", "Shared", "Shared", "Mostly you"],
          ],
        },
        callout: {
          type: "tip",
          text: "When comparing SaaS vendors, ask whether MFA, single sign-on and audit logs are included or sold as add-ons. CISA's Secure by Design guidance asks manufacturers to make 'MFA, logging, and SSO available at no extra cost'. A vendor that charges extra for them is pricing security as a premium.",
        },
      },
      {
        heading: "Maintenance and ownership",
        body: [
          "**Answer first:** with SaaS, the vendor maintains the product and you own your data. With custom software, you own the code (if your contract says so) and you also own the maintenance. Ownership without a maintenance plan is a risk, not an asset.",
          "**Maintenance.** Custom software needs dependency and framework updates, security patches, bug fixes, backups with tested restores and monitoring. Runtimes have published support windows; for example, Node.js advises that 'production applications should only use Active LTS or Maintenance LTS releases' ([[https://nodejs.org/en/about/previous-releases|Node.js]]). Software that falls behind those windows becomes harder and more expensive to update; see [[/blogs/software-modernization-uae|software modernisation]] for what happens when it does.",
          "**Ownership in the UAE.** Federal Decree-Law No. 38 of 2021 on copyright came into force on 2 January 2022. Law-firm commentary on its Article 28 says a work made for another person's benefit belongs to that person, the commissioning party, unless the parties agree otherwise ([[https://cms.law/en/are/legal-updates/uae-amended-ip-laws-take-effect|CMS]], [[https://gowlingwlg.com/en/insights-resources/articles/2022/the-new-uae-copyright-law-2021-key-takeaways|Gowling WLG]]). Because contracts override defaults, include an express assignment of IP on payment and confirm it with a UAE-qualified lawyer. This is not legal advice.",
          "**Source-code escrow** is sometimes used where you license rather than own critical software: a three-party agreement in which an independent agent holds the code and releases it on defined events such as supplier insolvency or failure to support. It is worth asking about for business-critical licensed systems.",
        ],
      },
      {
        heading: "Scalability",
        body: [
          "**Answer first:** SaaS scales technically with little effort from you but scales in cost with every user, module and usage tier. Custom software scales as well as its architecture and hosting allow, and its cost grows more slowly with users but faster with complexity.",
          "For SaaS, check plan limits (records, storage, API calls, automations), performance at your expected data volume and the price at two and three times your current size. For custom software, ask how the system handles growth in users, data and integrations, and where it is hosted. Moving existing systems to cloud infrastructure is covered in [[/blogs/cloud-migration-uae|cloud migration in the UAE]]. If you are building software to sell to other businesses, multi-tenancy is a separate design problem; see [[/blogs/saas-development-gcc|SaaS development for the GCC]].",
        ],
      },
      {
        heading: "UAE-specific checks before you buy or build",
        body: [
          "**UAE facts.** These points are verified against official or primary sources. They are not legal or tax advice; confirm your obligations with an adviser.",
          "**E-invoicing.** According to the [[https://tax.gov.ae/en/media.centre/news/federal.tax.authority.organises.joint.awareness.meeting.for.accredited.service.providers.and.persons.subject.to.the.einvoicing.system.aspx|Federal Tax Authority]], businesses with revenue of AED 50 million or more must appoint an Accredited Service Provider (ASP) by 30 October 2026 and go live on 1 January 2027; businesses below that threshold appoint by 31 March 2027 and go live on 1 July 2027. Any system that issues B2B or B2G invoices must work with your ASP. Ask SaaS vendors for their UAE e-invoicing approach in writing; for custom systems, plan the ASP integration as part of scope.",
          "**VAT.** VAT was introduced across the UAE on 1 January 2018 at a standard rate of 5% ([[https://mof.gov.ae/en/public-finance/tax/vat/|Ministry of Finance]]). Check that invoicing, quotes and reports handle UAE VAT correctly, including tax registration numbers on documents. If you also sell into Saudi Arabia, the rate and rules differ, so check country-specific support.",
          "**Arabic and RTL.** Consumer invoices must be in Arabic, and UAE-registered ecommerce businesses must give product or service information in Arabic ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae]]). For customer-facing software, test right-to-left layout, Arabic search, PDF templates and number formats, not just translated labels. See [[/blogs/multilingual-website-development-uae|multilingual development in the UAE]].",
          "**Data location.** AWS (me-central-1, since 2022), Microsoft Azure (UAE North in Dubai, UAE Central in Abu Dhabi) and Oracle (Dubai and Abu Dhabi) operate UAE cloud regions; Google Cloud's nearest regions are outside the UAE. Health data related to services provided in the UAE faces localisation restrictions under Article 13 of Federal Law No. 2 of 2019 ([[https://lw.com/thoughtLeadership/lw-new-uae-law-regulates-healthcare-data|Latham & Watkins]]). The PDPL sets conditions for cross-border transfers of personal data ([[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae]]). Ask SaaS vendors where your data, backups and support staff are located.",
          "**Local payments.** Providers used in the UAE include Network International, Checkout.com, Stripe (available in the UAE), Telr, PayTabs, Apple Pay, and buy-now-pay-later providers Tabby and Tamara. Check which ones a SaaS product supports natively. See [[/blogs/payment-gateway-integration|payment gateway integration]].",
          "**UAE PASS.** According to the [[https://docs.uaepass.ae/|UAE PASS developer documentation]], private organisations with a valid UAE trade licence can integrate UAE PASS for authentication and digital signature, using an OAuth 2.0 authorisation code flow and a phased onboarding process. Few general SaaS products support it out of the box; it is a common reason for a custom layer.",
          "**WhatsApp.** In a vendor-commissioned Zbooni/YouGov survey of 1,000 UAE residents (Feb 2024), 85% said they want businesses to offer WhatsApp for support ([[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Communicate]]). Check whether a CRM or helpdesk connects to the WhatsApp Business Platform directly or through a paid add-on.",
          "**Support hours.** The UAE runs on Gulf Standard Time (UTC+4). Check the vendor's support hours, the language of support and whether urgent issues are handled outside them.",
        ],
        checklist: [
          "E-invoicing: ASP integration plan and vendor roadmap in writing",
          "VAT at 5%, TRN on documents, correct tax reports",
          "Arabic interface, RTL layout, Arabic PDFs and invoices where required",
          "Data and backup location documented; sector rules checked",
          "UAE payment providers supported natively or via a tested integration",
          "UAE PASS support, if your customers or staff need it",
          "WhatsApp Business Platform integration and its cost",
          "Support hours overlapping the UAE working day (UTC+4)",
        ],
      },
      {
        heading: "Decision matrix for UAE businesses",
        body: [
          "Score each option from 1 (poor fit) to 5 (strong fit) on every criterion, then multiply by the weight. Weights below are a starting point for a typical UAE SME; adjust them to your situation. A score of 1 on data location or security should rule an option out regardless of its total.",
          "**Scoring guidance.** Score SaaS high on speed when a mainstream product covers 80% or more of the process without workarounds. Score custom high on fit only if you can describe the differentiating process precisely. Score any option low on lock-in risk if you cannot test a full export. Score hybrid on the weakest of its parts, not the strongest.",
        ],
        table: {
          headers: ["Criterion", "Weight", "SaaS", "Configurable SaaS", "Custom", "Hybrid"],
          rows: [
            ["Process fit (how specific is the process?)", "15", "Score 5 if standard", "Score 5 if standard with variations", "Score 5 if differentiating", "Score 5 if mostly standard with one specific part"],
            ["Time to value", "10", "Usually highest", "High", "Lowest", "High for core"],
            ["Three-year TCO (from worksheet)", "15", "From worksheet", "From worksheet", "From worksheet", "From worksheet"],
            ["Integrations needed", "10", "Native connectors?", "Connectors plus apps?", "Any API", "Custom layer covers gaps"],
            ["UAE requirements (e-invoicing, VAT, Arabic, payments, UAE PASS)", "15", "Vendor evidence", "Vendor plus partner evidence", "In your scope", "Split by layer"],
            ["Data location and sector rules", "10", "Vendor's regions", "Vendor's regions", "Your choice of region", "Both must comply"],
            ["Security effort you can sustain", "10", "Low effort", "Low to moderate", "High effort", "Moderate"],
            ["Lock-in and exit", "10", "Export quality", "Export plus configuration", "Code ownership, documentation", "Both"],
            ["Internal capability to own it", "5", "Admin skills", "Admin or partner", "Technical owner needed", "Both"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "If two options score within about 10% of each other, choose the one that is easier to reverse. Leaving a SaaS product with clean exports is usually easier than retiring a custom system, and a small custom layer is easier to retire than a large one.",
        },
      },
      {
        heading: "A short decision tree",
        body: [
          "Use this for each major process (sales, operations, finance, customer service), not for the business as a whole. Different processes often land on different answers.",
        ],
        code: {
          label: "Build vs buy decision tree (per process)",
          text: [
            "Is the process standard in your industry?",
            "  YES -> Does a mainstream SaaS cover ~80% without workarounds?",
            "          YES -> SaaS. Check UAE needs and export.",
            "          NO  -> Can configuration close the gap?",
            "                   YES -> Configurable SaaS. Document config.",
            "                   NO  -> Hybrid: SaaS core + custom layer.",
            "  NO  -> Is it how you win or keep customers?",
            "          NO  -> Simplify the process, then re-check SaaS.",
            "          YES -> Can you fund build AND 3 years of upkeep?",
            "                   NO  -> Hybrid or configurable SaaS now;",
            "                          revisit custom later.",
            "                   YES -> Custom. Start with a narrow MVP.",
            "",
            "Any branch: regulated data that must stay in the UAE?",
            "  -> Only options with documented UAE hosting qualify.",
          ].join("\n"),
        },
      },
      {
        heading: "Three-year total cost of ownership worksheet",
        body: [
          "Fill this in with real quotes for each option you are considering. Leave no line blank: write zero if a cost does not apply, so you know it was considered. We deliberately give no prices; there is no reliable public benchmark for UAE software costs, and your quotes are the only numbers that matter.",
        ],
        table: {
          headers: ["Line item", "SaaS / configurable SaaS", "Custom software", "Notes"],
          rows: [
            ["Licences or subscriptions", "Users × price per user × 36 months, plus add-ons", "Third-party services and licences used by the app", "Include planned user growth and expected price increases"],
            ["Implementation or build", "Configuration, partner fees", "Discovery, design, development, testing", "One-off, Year 1"],
            ["Data migration", "Cleaning, mapping, import", "Cleaning, mapping, import", "Often underestimated on both sides"],
            ["Integrations", "Connector fees, iPaaS, custom integration work", "Integration development", "Count every system that must connect"],
            ["UAE compliance work", "E-invoicing ASP fees, Arabic templates", "ASP integration, Arabic/RTL, UAE PASS", "Confirm scope with your adviser"],
            ["Hosting and infrastructure", "Usually included", "Cloud hosting, backups, monitoring, environments", "Include a UAE region if required"],
            ["Maintenance and support", "Premium support tier, admin time", "Updates, fixes, security patches, small changes", "Annual cost × 3"],
            ["Internal time", "Admin, training, process change", "Product owner, testing, training", "Hours × internal cost rate"],
            ["Exit or switching reserve", "Export and migration effort if you leave", "Handover and documentation", "A reserve, not a forecast"],
          ],
        },
        code: {
          label: "TCO formulas (fill in with your own quotes)",
          text: [
            "SaaS TCO (3 yrs) =",
            "  sum over Y1..Y3 of (users_Y x price_Y x 12)",
            "  + add-ons x 36 + implementation + migration",
            "  + integrations + compliance + support",
            "  + internal_hours x rate + exit reserve",
            "",
            "Custom TCO (3 yrs) =",
            "  build + migration + integrations + compliance",
            "  + (hosting + third-party services) x 36",
            "  + annual maintenance x 3",
            "  + internal_hours x rate + exit reserve",
            "",
            "Hybrid TCO = SaaS TCO for the core",
            "  + Custom TCO for the custom layer only",
            "",
            "Sensitivity: re-run at 2x users and with a",
            "price rise you assume; note which option flips.",
          ].join("\n"),
        },
      },
      {
        heading: "Hypothetical examples",
        body: [
          "These are **hypothetical** illustrations to show the reasoning, not client stories or recommendations for any real business.",
          "**1. A Dubai trading company (B2B, credit sales).** It issues hundreds of invoices a month, sells on credit and must be ready for e-invoicing in 2027. Its processes are standard: quote, order, invoice, collect. Likely fit: **configurable SaaS** (an accounting or ERP product with a UAE e-invoicing route through an ASP), with a small custom integration to the warehouse system if no connector exists. Building a custom ERP would be hard to justify.",
          "**2. A clinic's administration.** Appointments, reminders, billing and patient records. Patient data is health data, so data location rules apply, and in Abu Dhabi ADHICS may apply. Likely fit: a **specialist healthcare SaaS with documented UAE hosting**, plus WhatsApp reminders through a supported integration. Custom work would be limited to integrations, and only after checking the data-location implications. See [[/blogs/ai-automation-healthcare-uae|AI automation in UAE healthcare]] for related considerations.",
          "**3. A real estate brokerage.** Lead capture from portals and WhatsApp, agent assignment, viewings and commission tracking. The CRM part is standard; the lead routing and listing sync are specific to how the brokerage works. Likely fit: **hybrid**, a configurable CRM as the core plus a custom service that pulls leads from several sources, routes them by rule and logs WhatsApp conversations. See [[/blogs/ai-real-estate-uae|AI in UAE real estate]].",
          "**4. A D2C brand selling online.** Storefront, checkout, payments, returns and a subscription programme. Likely fit: **SaaS ecommerce platform** with UAE payment providers and BNPL, plus a custom app only if the subscription or bundle logic is genuinely unusual. A fully custom storefront would mean rebuilding what platforms already maintain.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Comparing a monthly SaaS fee with a one-off build quote instead of three-year TCO",
          "Choosing custom software for a standard process because 'we are different'",
          "Choosing SaaS and then configuring it into an undocumented custom system",
          "Signing a SaaS contract without testing a full data export",
          "Ignoring 2027 e-invoicing until after the system is chosen",
          "Treating Arabic as a translation file rather than testing RTL, PDFs and search",
          "Assuming the SaaS vendor handles all security, including your users and settings",
          "Building custom software with no budget or owner for maintenance",
          "Replacing everything at once instead of starting with the process that hurts most",
        ],
      },
      {
        heading: "How this fits into your wider plan",
        body: [
          "Build-vs-buy decisions work best as part of a roadmap rather than one-off purchases. Our [[/blogs/digital-transformation-uae-smes|UAE SME digital transformation roadmap]] sets out the order in which most small businesses tackle systems, and [[/blogs/digital-product-development-gcc|digital product development in the GCC]] covers the end-to-end process if you decide to build. If you have an ageing system that is neither fully custom nor fully off the shelf, start with [[/blogs/software-modernization-uae|software modernisation]] before deciding to replace it.",
          "If you decide to build, the next decision is who builds it; our guide to [[/blogs/software-development-company-uae|choosing a software development company in the UAE]] covers team models, contracts and a scoring matrix.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "UAE official: [[https://mof.gov.ae/en/public-finance/tax/vat/|UAE Ministry of Finance, VAT]]; [[https://tax.gov.ae/en/media.centre/news/federal.tax.authority.organises.joint.awareness.meeting.for.accredited.service.providers.and.persons.subject.to.the.einvoicing.system.aspx|Federal Tax Authority, e-invoicing timeline]]; [[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae data protection laws]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]; [[https://docs.uaepass.ae/|UAE PASS developer documentation]].",
          "Cloud and security: [[https://aws.amazon.com/compliance/shared-responsibility-model/|AWS shared responsibility model]]; [[https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility|Microsoft shared responsibility in the cloud]]; [[https://aws.amazon.com/blogs/aws/now-open-aws-region-in-the-united-arab-emirates-uae/|AWS UAE region]]; [[https://learn.microsoft.com/azure/reliability/regions-list|Azure regions]]; [[https://www.oracle.com/ae/cloud/cloud-regions/abu-dhabi/|Oracle Abu Dhabi region]]; [[https://cloud.google.com/about/locations|Google Cloud locations]]; [[https://www.cisa.gov/securebydesign|CISA Secure by Design]]; [[https://nodejs.org/en/about/previous-releases|Node.js releases]].",
          "Research and commentary: [[https://menastartupdigest.com/?p=46396|du and Huawei SME study via MENA Startup Digest]]; [[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Zbooni/YouGov WhatsApp survey via Communicate]]; [[https://cms.law/en/are/legal-updates/uae-amended-ip-laws-take-effect|CMS on UAE IP laws]]; [[https://gowlingwlg.com/en/insights-resources/articles/2022/the-new-uae-copyright-law-2021-key-takeaways|Gowling WLG on UAE copyright law]]; [[https://lw.com/thoughtLeadership/lw-new-uae-law-regulates-healthcare-data|Latham & Watkins on UAE health data law]]. This guide is not legal or tax advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Custom software and SaaS are not rivals so much as tools for different parts of a business. Buy what is standard, configure what is close, and build only what sets you apart or what no product handles, then keep a clear exit route for all of it. For UAE businesses, make e-invoicing, VAT, Arabic, data location, local payments and support hours part of the decision from the start, and compare options on three-year cost rather than first-year price. When you are ready to choose a delivery partner, use the scoring matrix in our [[/blogs/software-development-company-uae|software development company guide]].",
        ],
        cta: {
          title: "Weighing up build, buy or hybrid?",
          description: "ZSpace Labs is an India-based, remote-first technology studio that works with UAE and global businesses on [[/services/website-development|web applications and custom software]], [[/services/mobile-app-development|mobile apps]] and integrations. If it helps, share your process and current tools, and we will tell you plainly where off-the-shelf software is the better choice.",
        },
      },
    ],
  },

  // ------------------------------------- SOFTWARE DEVELOPMENT COMPANY UAE
  // Vendor-selection guide for startups building software products (apps,
  // SaaS, MVPs). Differentiated from web-development-company-dubai (website
  // scorecard) and the generic how-to-choose guides, all linked.
  {
    slug: "software-development-company-uae",
    title: "How to Choose a Software Development Company for a UAE Startup",
    seoTitle: "How to Choose a Software Development Company in UAE",
    excerpt:
      "How UAE startups can choose a software development company: team models, remote delivery, ownership, code quality, contracts and a weighted scoring matrix.",
    category: "Web Development",
    banner: "agencyinhouse",
    sceneKind: "code",
    bannerAlt: "A vendor selection path from requirements through long-list, evaluation, technical questions, proposals and references to contract and handover",
    date: "2026-10-09",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "saas-technology", "fintech"],
    relatedSlugs: ["mvp-development-uae", "how-to-choose-a-mobile-app-development-company", "web-development-company-dubai"],
    faqs: [
      { q: "How do I choose a software development company in the UAE as a startup?", a: "Start with a short written brief and a clear first milestone, shortlist three to five firms with comparable product work, and score them on evidence: technical fit, discovery approach, code quality practices, ownership terms, communication and commercial terms. Meet the people who will actually build the product, speak to a past client and make sure your company owns the code, repositories and accounts from day one." },
      { q: "Should a UAE startup hire developers in-house or outsource?", a: "Early on, many startups outsource the first version and build an in-house team once the product and funding are clearer. In-house gives control and continuity but takes time to hire; according to ManpowerGroup's 2026 survey, 76% of UAE employers report difficulty filling roles. A common middle path is a fractional CTO or technical lead on your side, with an external team doing the build." },
      { q: "Is it safe to outsource software development to India from the UAE?", a: "It can work well if the basics are in place: a contract with a clearly identified legal entity, express IP assignment, repositories and cloud accounts in your name, agreed working hours and named team members. The UAE (UTC+4) and India (UTC+5:30) are 1.5 hours apart with no daylight saving changes, which gives most of a working day of overlap. Take legal advice on cross-border contracts." },
      { q: "Fixed price or time and materials for an MVP?", a: "Fixed price suits a small, well-defined scope where you value budget certainty. Time and materials suits products that will change as you learn, which is most MVPs. A practical approach is a fixed-price discovery phase, then time and materials in short milestones with a budget cap, a prioritised backlog and written change control." },
      { q: "Who should own the code when a development company builds my product?", a: "Your company. The contract should assign all IP in code, designs and documentation to you on payment, and the repository, cloud hosting, app store accounts, domains and third-party services should be registered to your company from the start. The vendor may keep pre-existing tools, but should license them to you clearly." },
      { q: "What should I ask a software development company before hiring?", a: "Ask who will work on your product and how much is subcontracted, how they run discovery, how code is reviewed and tested, what their CI and deployment process is, how they handle security and secrets, what documentation you receive, how change requests are priced, what happens if a key person leaves, and how a handover to another team would work." },
      { q: "What are red flags when choosing a software development company?", a: "A fixed quote before any discovery, no access to the code until final payment, accounts registered in the vendor's name, no automated tests or code review, reluctance to name the team, unverifiable claims, large upfront payments not tied to deliverables, and vague answers about handover. Any one of these is worth a direct question; several together are a reason to walk away." },
      { q: "How much overlap do UAE and Indian working hours have?", a: "Because the UAE is on UTC+4 and India on UTC+5:30, India is 1.5 hours ahead all year. A UAE day of 9:00 to 18:00 corresponds to 10:30 to 19:30 in India, so a team working standard Indian hours overlaps for most of the UAE morning and early afternoon. Agree fixed overlap hours for meetings and urgent issues in the contract." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**The right software development company for a UAE startup is the team that can show comparable product work, explains how it will reduce your risk before writing code, and leaves your company in full control of the code, accounts and knowledge.** Location matters less than evidence: overlapping hours, named engineers, visible code quality practices, clear ownership terms and a contract you can exit cleanly.",
          "This guide is for founders building software products: mobile apps, SaaS platforms, marketplaces and MVPs. If you are commissioning a company website, our [[/blogs/web-development-company-dubai|Dubai web development buyer's guide]] has a website-specific scorecard, and [[/blogs/how-to-choose-website-development-company|how to choose a website development company]] covers the general process. For app-specific detail, see [[/blogs/how-to-choose-a-mobile-app-development-company|how to choose a mobile app development company]].",
          "The sections below cover team models, remote delivery from India, technical fit, discovery, ownership, code quality, security, communication, contracts, risk and a weighted scoring matrix built for product engineering rather than websites.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Decide what you are building and your first milestone before you shortlist vendors",
          "Choose a team model (freelancer, local agency, remote studio, in-house, fractional CTO plus contractors) that fits your stage",
          "Own the code repository, cloud, app store and third-party accounts from day one",
          "Ask to see code review, automated tests and CI in practice, not just in a slide",
          "Pay against working software in short milestones, with written change control",
          "Plan for key-person risk and handover before you sign, not when something goes wrong",
          "Score vendors on product engineering and startup fit, using evidence you can verify",
        ],
      },
      {
        heading: "Before you shortlist: what are you actually buying?",
        body: [
          "**Answer first:** most failed vendor relationships start with an unclear brief. Before contacting anyone, write down what problem the product solves, for whom, what the first release must prove and what is out of scope. A one-to-three page brief is enough; our [[/blogs/website-requirements-document|requirements document guide]] shows the structure, and it applies to apps and platforms as well as websites.",
          "Be clear whether you are buying an MVP to test demand, a first production version for paying customers or a rebuild of something that already exists. Eric Ries defines the minimum viable product as 'that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort' ([[http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html|Startup Lessons Learned]]). A vendor that understands this will push to cut scope, not expand it. Our [[/blogs/mvp-development-uae|MVP development guide for the UAE]] covers scoping in detail.",
          "Also check whether you need to build at all. Some startup ideas run well on existing platforms for the first year; see [[/blogs/custom-software-vs-saas-uae|custom software vs SaaS in the UAE]] before committing to a custom build.",
          "**UAE context.** According to the [[https://mediaoffice.ae/en/news/2026/january/22-01/dubai-chamber-of-digital-economy-digital-startups|Dubai Media Office]], the Dubai Chamber of Digital Economy reported supporting 1,690 digital startups in 2025. Many of them face the same question: who builds the first version, and how do we keep control of it?",
        ],
      },
      {
        heading: "Team models compared",
        body: [
          "**Answer first:** there is no universally right model. Freelancers suit narrow tasks, agencies and studios suit a defined build, in-house teams suit continuous product work once you have funding and direction, and a fractional CTO with contractors suits founders who need technical judgement before they need a full team.",
        ],
        table: {
          headers: ["Model", "Best for", "Strengths", "Risks", "What to check"],
          rows: [
            ["Freelancers", "Prototypes, small features, specialist tasks", "Cost, speed to start, direct contact", "Single point of failure, limited QA and cover, uneven practices", "Availability, backup person, code ownership, references"],
            ["Local UAE agency", "Founders who want in-person workshops and local contracts", "Same time zone, face-to-face meetings, local legal entity", "Higher cost, delivery may still be subcontracted", "Who builds it, subcontracting, product (not just web) experience"],
            ["Remote or offshore studio", "Defined builds and ongoing product work on a budget", "Access to a wider talent pool, team depth, scalable capacity", "Communication gaps, cross-border contracts, distance from your users", "Overlap hours, named team, contracting entity, IP terms"],
            ["In-house team", "Continuous product development after product-market fit", "Control, context, long-term continuity", "Time and cost to hire, management load, gaps in specialist skills", "Your ability to recruit and lead engineers"],
            ["Fractional CTO plus contractors", "Pre-seed and seed founders without a technical co-founder", "Senior judgement on your side, flexible delivery", "Coordination overhead, dependence on one senior person", "CTO's availability, conflicts of interest, documentation"],
          ],
        },
        callout: {
          type: "tip",
          text: "Whatever model you choose, someone on your side must be able to judge technical work. If no founder can, a part-time technical adviser who reviews architecture, pull requests and estimates is often the best money you will spend in the first year.",
        },
      },
      {
        heading: "Remote delivery from India: benefits and risks",
        body: [
          "Many UAE startups work with teams in India, and it is worth looking at that model plainly rather than through marketing on either side.",
          "**Time zones (verified as a fixed offset).** The UAE uses Gulf Standard Time, UTC+4, and India uses Indian Standard Time, UTC+5:30. Neither observes daylight saving time, so the gap is a constant 1.5 hours, with India ahead. A UAE working day of 9:00 to 18:00 corresponds to 10:30 to 19:30 in India, which means most of the UAE working day overlaps standard Indian hours.",
        ],
        table: {
          headers: ["", "Benefits", "Risks and how to manage them"],
          rows: [
            ["Time zone", "Most of a working day overlaps; daily stand-ups and same-day fixes are practical", "Agree fixed overlap hours and an escalation route for urgent issues in writing"],
            ["Talent", "A large pool of engineers across web, mobile, cloud and data", "Quality varies widely; judge the specific team, not the country"],
            ["Cost structure", "Often lower rates than local hiring for comparable seniority", "Low rates can hide junior staffing; ask for named people and their experience"],
            ["Communication", "English is widely used in technology work", "Misunderstandings still happen; use written specs, demos and acceptance criteria"],
            ["Contracts and law", "Contracts can be governed by an agreed law and forum", "Cross-border enforcement is harder; take legal advice on governing law and dispute resolution"],
            ["Ownership", "Same IP and account principles apply anywhere", "Must be explicit: IP assignment, your repositories, your accounts"],
            ["Context", "Teams can learn UAE requirements", "Arabic/RTL, UAE payments, UAE PASS and local user behaviour need checking, not assuming"],
          ],
        },
      },
      {
        heading: "Technical fit",
        body: [
          "**Answer first:** look for a team that has built and run something similar in complexity, not just something in the same industry. A marketplace, a fintech dashboard and a booking app need different strengths.",
          "Ask for two or three comparable products you can use, the architecture behind them and what the team would do differently now. Ask why they recommend a particular stack for you: native or cross-platform mobile, which web framework, which database and which cloud. The right answer refers to your needs, your budget and the hiring market for maintaining it later, not just the vendor's habits.",
          "If your product involves AI features, check the team's experience with evaluation, data handling and cost control; our [[/blogs/ai-agent-vendor-assessment|AI vendor assessment guide]] lists the questions. If you are building a multi-tenant product, ask about tenant isolation and billing; see [[/blogs/saas-development-gcc|SaaS development for the GCC]]. For UAE consumer products, ask which local payment providers the team has integrated in production; see [[/blogs/payment-gateway-integration|payment gateway integration]].",
        ],
      },
      {
        heading: "Discovery and scope",
        body: [
          "**Answer first:** a good company insists on discovery before committing to a full estimate. Discovery turns your idea into user journeys, a prioritised backlog, a technical plan and the riskiest assumptions to test first.",
          "A useful discovery phase is short, has a fixed price and produces artefacts you own whether or not you continue: user flows or wireframes, a feature list split into must-have and later, an architecture outline, integration list, risks and an estimate with stated assumptions. If a company quotes a full product before asking about users, integrations or data, the number is a guess. Our [[/blogs/digital-product-development-gcc|digital product development guide]] describes the phases in more detail.",
        ],
        checklist: [
          "Problem statement, target users and the first milestone's success measure",
          "User journeys and low-fidelity wireframes for the main flows",
          "Prioritised backlog: must-have, should-have, later",
          "Architecture outline, hosting choice and third-party services",
          "Integration list (payments, messaging, maps, identity, analytics)",
          "UAE-specific needs: Arabic/RTL, UAE payment providers, UAE PASS, data location",
          "Risks, assumptions and an estimate with ranges",
        ],
      },
      {
        heading: "Communication and working hours",
        body: [
          "**Answer first:** good communication is a process you can see: a named point of contact, a predictable rhythm of demos, a shared backlog and written decisions.",
          "Agree the cadence before you start: a short daily or alternate-day check-in, a demo of working software every one or two weeks, and a written summary of decisions and open questions. You should have read access to the backlog and the repository at all times. With a UAE team or a team in India, schedule meetings inside the overlapping hours; with teams further away, agree which hours are covered for urgent issues.",
          "Watch how a company communicates during the sales process. Slow, vague or inconsistent answers before you sign rarely improve afterwards.",
        ],
      },
      {
        heading: "Ownership: IP, repositories and accounts",
        body: [
          "**Answer first:** your company should own the IP and control every account the product depends on, from the first day of the project.",
          "**UAE law.** Law-firm commentary on Article 28 of Federal Decree-Law No. 38 of 2021 on copyright says a commissioned work belongs to the commissioning party unless the parties agree otherwise ([[https://cms.law/en/are/legal-updates/uae-amended-ip-laws-take-effect|CMS]], [[https://gowlingwlg.com/en/insights-resources/articles/2022/the-new-uae-copyright-law-2021-key-takeaways|Gowling WLG]]). Do not rely on defaults, especially across borders: include an express assignment and get advice from a lawyer on cross-border enforceability. This is not legal advice.",
        ],
        checklist: [
          "Express assignment of IP in code, designs and documentation on payment",
          "Clear list of pre-existing vendor code, licensed to you perpetually",
          "Git repository in your organisation's account, with the vendor as collaborator",
          "Cloud hosting, databases and backups under your company's billing account",
          "Apple App Store and Google Play developer accounts in your company's name",
          "Domains, email, analytics, payment provider and messaging accounts in your name",
          "Secrets stored in a manager you control; no credentials only in the vendor's hands",
          "Open-source licences listed and compatible with your business model",
        ],
      },
      {
        heading: "Code quality: reviews, tests and CI",
        body: [
          "**Answer first:** ask to see, not to be told. A team with real quality practices can show you a pull request with review comments, a test suite running in a continuous integration (CI) pipeline and a deployment history.",
          "Good signs include every change going through a pull request reviewed by another engineer; automated tests at the right levels (unit tests for logic, integration tests for APIs, a few end-to-end tests for critical journeys); a CI pipeline that runs tests and linting on every change; separate development, staging and production environments; and a written definition of done. If AI coding tools are used, ask how generated code is reviewed and tested; see [[/blogs/vibe-coding-vs-production-software|vibe coding vs production software]].",
          "**Our recommendation:** in the first two weeks, ask an independent engineer to review a sample of the code and the pipeline. It is cheap insurance and sets expectations early.",
        ],
      },
      {
        heading: "Security",
        body: [
          "**Answer first:** security should be part of how the team works, not a final checklist. Ask how they handle authentication, access control, secrets, dependencies, logging and incidents.",
          "For products with APIs (most of them), the [[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP API Security Top 10 (2023)]] is a useful reference: broken object-level authorisation and broken authentication sit at the top of the list. Ask how the team tests for them. CISA's [[https://www.cisa.gov/securebydesign|Secure by Design]] principles, such as making MFA, logging and SSO available by default, are a good bar for B2B products. The [[https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework|NIST Cybersecurity Framework 2.0]] (February 2024) organises security into six functions, Govern, Identify, Protect, Detect, Respond and Recover, which you can use to structure questions.",
          "Treat your vendor as part of your supply chain. The UK NCSC's [[https://www.ncsc.gov.uk/collection/supply-chain-security|supply chain security guidance]] sets out 12 principles across four stages: understand the risks, establish control, check your arrangements and continuous improvement. Also check UAE data-protection implications, including PDPL conditions on cross-border transfers of personal data, if your vendor will access production data. Our [[/blogs/website-security-checklist|security checklist]] covers the basics for web products.",
        ],
      },
      {
        heading: "Documentation, deployment and maintenance",
        body: [
          "**Answer first:** the product is not finished when it launches. Agree what documentation you receive, how releases happen and who maintains the software afterwards before you sign.",
          "**Documentation** should include a README that lets a new developer run the project, an architecture overview, API documentation, environment and deployment notes, and a record of key decisions. **Deployment** should be automated and repeatable, with a rollback plan; manual deployments from one engineer's laptop are a risk. **Maintenance** should be defined in writing: dependency and security updates, monitoring, bug fixes, app store updates for new OS versions and response times by severity. See the [[/blogs/website-maintenance-guide|maintenance guide]] for what to include.",
          "Over time, plan for modernisation as frameworks age; [[/blogs/software-modernization-uae|software modernisation]] explains how to update a system in stages rather than rebuild it.",
        ],
      },
      {
        heading: "Commercial terms: fixed price, time and materials or retainer?",
        body: [
          "**Answer first:** match the pricing model to how certain your scope is. Most startup products change as they learn, so rigid fixed-price contracts often lead to disputes about what is in scope.",
        ],
        table: {
          headers: ["Model", "How it works", "Suits", "Watch for"],
          rows: [
            ["Fixed price", "Agreed price for an agreed scope", "Discovery phases, small well-defined builds", "Padding for risk, change requests priced high, pressure to cut quality to protect margin"],
            ["Time and materials", "You pay for time spent at agreed rates", "MVPs and products that will change", "Budget drift; use caps, sprint budgets and visible time reports"],
            ["Retainer or dedicated team", "Fixed monthly capacity from named people", "Ongoing product development after launch", "Paying for idle capacity; agree how priorities are set"],
          ],
        },
        checklist: [
          "Pay in milestones tied to working, accepted software, not dates alone",
          "Define acceptance criteria for each milestone before work starts",
          "Use written change control: every change estimated and approved before work",
          "Set a budget cap and a notice threshold for time-and-materials work",
          "State who pays for third-party services, licences and hosting",
          "Include a warranty period for defects found after acceptance",
          "Confirm the contracting entity, governing law and dispute resolution",
        ],
      },
      {
        heading: "Risk management: key people, escrow and exit",
        body: [
          "**Answer first:** assume that at some point you will change vendor, bring development in-house or lose a key engineer. Plan for it in the contract and in how the work is done.",
          "**Key-person risk.** Ask who else knows the codebase if the lead developer leaves, and require that at least two people work on core parts. Pair this with documentation and code review, which spread knowledge naturally.",
          "**Escrow.** If you license software rather than own it, for example a vendor's platform underneath your product, source-code escrow can protect you: an independent agent holds the code and releases it on agreed events such as supplier insolvency. If you own the repository, escrow is usually unnecessary.",
          "**Exit and handover.** Write a handover clause: notice period, a handover meeting, documentation and credentials, a period of reasonable support to the incoming team and no fees for releasing your own code. A good company will agree to this readily, because it is confident you will not need it.",
        ],
      },
      {
        heading: "A weighted scoring matrix for startup software vendors",
        body: [
          "This matrix is built for product engineering and startup fit, so it weights discovery, code quality, ownership and flexibility more heavily than the website-focused scorecard in our [[/blogs/web-development-company-dubai|Dubai guide]]. Score each vendor from 1 to 5 on evidence, multiply by the weight and add up. A score of 1 on ownership or code quality should rule a vendor out regardless of total.",
        ],
        table: {
          headers: ["Criterion", "Weight", "Evidence to ask for", "What a 5 looks like"],
          rows: [
            ["Comparable product experience", "15", "2–3 products you can use; architecture walkthrough", "Live products of similar complexity, and a client willing to talk"],
            ["Discovery and product thinking", "15", "Discovery outputs from a past project; questions asked about your brief", "Challenges scope, proposes a smaller first release, names risks"],
            ["Code quality and engineering practice", "15", "A sample pull request, test suite and CI pipeline", "Reviews on every change, automated tests in CI, staging environment"],
            ["Ownership and exit terms", "15", "Draft contract clauses on IP, accounts and handover", "IP assignment on payment, your repos and accounts from day one, handover clause"],
            ["Team and continuity", "10", "Named team, CVs or profiles, subcontracting policy", "Named seniors who stay, at least two people on core code"],
            ["Security practice", "10", "How they handle auth, secrets, dependencies and incidents", "Documented practices mapped to OWASP; least-privilege access"],
            ["Communication and overlap", "10", "Cadence, tools, overlap hours, escalation route", "Regular demos, shared backlog, fixed overlap hours in writing"],
            ["Commercial flexibility", "5", "Pricing model options, milestones, change control", "Fixed-price discovery, capped T&M, milestones tied to acceptance"],
            ["UAE product fit", "5", "Arabic/RTL, UAE payments, UAE PASS or data-location experience", "Shipped Arabic RTL products and UAE integrations"],
          ],
        },
        callout: {
          type: "tip",
          text: "Ask two people on your side to score independently before comparing. Where scores differ by two or more points, you have found the question to put to the vendor next.",
        },
      },
      {
        heading: "Questions to ask in vendor interviews",
        body: [],
        checklist: [
          "Which two products you have built are most like ours, and can we use them?",
          "Who exactly will work on our product, at what seniority, and for how many hours a week?",
          "How much of the work is subcontracted, and to whom?",
          "What does your discovery phase produce, and do we own it if we stop there?",
          "Can you show us a recent pull request with review comments and the CI run?",
          "What is your testing approach, and what is covered automatically?",
          "How do you manage secrets, dependencies and access to production?",
          "How are releases deployed and rolled back?",
          "Which hours will you overlap with our UAE working day, and how are urgent issues handled?",
          "How do you price and approve change requests?",
          "What happens if our lead developer leaves your company?",
          "Will the repository, cloud and app store accounts be in our name from day one?",
          "What documentation will we receive, and how would you hand over to another team?",
          "Which legal entity will we contract with, under which governing law?",
          "Can we speak to a client whose product you still maintain, and one you handed over?",
        ],
      },
      {
        heading: "Red flags",
        body: [],
        checklist: [
          "A full-product fixed quote before any discovery or questions about users and integrations",
          "No access to the repository until final payment",
          "Cloud, app store or domain accounts registered in the vendor's name",
          "No code review, no automated tests or 'we test manually at the end'",
          "Refusal to name the team, or a senior team in the pitch and juniors on delivery",
          "Unverifiable claims: '#1', 'award-winning' or client logos with no references",
          "Large upfront payments not tied to working software",
          "Vague answers on handover, documentation or what happens if you leave",
          "Pressure to sign quickly with a time-limited discount",
          "No questions about your business model, users or success measures",
        ],
      },
      {
        heading: "Common mistakes founders make",
        body: [
          "**Choosing on day rate alone.** A cheaper team that needs twice the time, or produces code that must be rewritten, costs more. Compare total cost to a working first milestone.",
          "**Building too much first.** The first release should prove the riskiest assumption, not deliver the full vision. See [[/blogs/mvp-development-uae|MVP development in the UAE]].",
          "**Leaving ownership to the end.** Repository and account ownership are easy to set up on day one and hard to recover after a dispute.",
          "**No technical judgement on the founder side.** Without someone who can read a pull request or question an estimate, you cannot tell good work from bad until it is too late.",
          "**Assuming in-house is always better.** It is often the right destination, but hiring takes time in a tight market; according to ManpowerGroup's 2026 survey, reported by [[https://me.peoplemattersglobal.com/news/recruitment/76percent-of-uae-employers-struggle-to-hire-as-ai-skills-top-demand-report-48593|People Matters]], 76% of UAE employers report difficulty filling roles. Plan the transition rather than waiting to hire before you build.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Standards and guidance: [[https://www.ncsc.gov.uk/collection/supply-chain-security|NCSC supply chain security guidance]]; [[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP API Security Top 10 2023]]; [[https://www.cisa.gov/securebydesign|CISA Secure by Design]]; [[https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework|NIST Cybersecurity Framework 2.0]]; [[http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html|Eric Ries on the minimum viable product]].",
          "UAE: [[https://mediaoffice.ae/en/news/2026/january/22-01/dubai-chamber-of-digital-economy-digital-startups|Dubai Media Office on the Dubai Chamber of Digital Economy]]; [[https://me.peoplemattersglobal.com/news/recruitment/76percent-of-uae-employers-struggle-to-hire-as-ai-skills-top-demand-report-48593|ManpowerGroup 2026 via People Matters]]; [[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae data protection laws]].",
          "Legal commentary: [[https://cms.law/en/are/legal-updates/uae-amended-ip-laws-take-effect|CMS on UAE IP laws]]; [[https://gowlingwlg.com/en/insights-resources/articles/2022/the-new-uae-copyright-law-2021-key-takeaways|Gowling WLG on UAE copyright law]]. Time-zone offsets (UAE UTC+4, India UTC+5:30, no daylight saving in either) are standard published offsets. Source-code escrow is described from escrow providers' published explanations. This guide is not legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Choosing a software development company is less about finding the best firm and more about reducing risk: a clear brief, a team model that fits your stage, evidence of good engineering practice, ownership from day one and a contract you could exit tomorrow. Whether you work with a local agency, a remote studio in India or your own hires, the same tests apply. Use the scoring matrix, ask the interview questions, and treat red flags as questions to resolve before you sign. If you are still deciding whether to build at all, start with [[/blogs/custom-software-vs-saas-uae|custom software vs SaaS]]; if you are hiring for a website, use the [[/blogs/website-development-company-vs-freelancer|company vs freelancer comparison]].",
        ],
        cta: {
          title: "Building a product and comparing development partners?",
          description: "ZSpace Labs is an India-based, remote-first technology studio that works with UAE and global founders on [[/services/website-development|web applications and SaaS platforms]] and [[/services/mobile-app-development|mobile apps]]. Send us your brief and we will reply with questions, a proposed discovery scope and terms you can score against the matrix above.",
        },
      },
    ],
  },
];
