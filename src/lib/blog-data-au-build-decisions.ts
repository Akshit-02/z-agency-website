import type { BlogPost } from "./blog-data";

/**
 * Batch 281–330 build decisions set: low-code vs custom software, Shopify Plus
 * vs custom ecommerce, B2B customer onboarding automation and mobile app
 * modernisation. Generic slugs in Australian English, with Australian notes
 * only where they change advice. Comparisons are balanced and do not default
 * to custom development. No prices are quoted: Shopify Plus pricing is
 * localised and term-dependent.
 * Sources checked 2026-10-10: Google Play target API level requirements
 * (Android 16 / API 36 from 31 Aug 2026); Apple upcoming requirements
 * (Xcode 26 and 26 SDKs since 28 Apr 2026); Shopify Plus pricing page
 * (checked, not quoted); OAIC APPs. No figure here is ZSpace client data.
 */
export const auBuildDecisionPosts: BlogPost[] = [
  {
    slug: "low-code-vs-custom-software",
    title: "Low-Code vs Custom Software: Choosing the Right Platform for Business Applications",
    seoTitle: "Low-Code vs Custom Software: How to Choose",
    excerpt:
      "Low-code vs custom software for business apps and automation: speed, cost profile, flexibility, lock-in, governance, when each fits and hybrid options.",
    category: "Web Development",
    banner: "customlayers",
    sceneKind: "compare",
    bannerAlt: "Three paths for a business application: configuring packaged software, building on a low-code platform, and custom development, compared on speed, flexibility and control",
    date: "2026-10-10",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["professional-services", "manufacturing", "logistics-supply-chain", "b2b-enterprise", "startups"],
    relatedSlugs: ["workflow-automation", "custom-software-development-australia", "build-vs-buy-ai-agents"],
    faqs: [
      {
        q: "What is the difference between low-code and custom software?",
        a: "Low-code platforms let people build applications mostly through visual designers, configuration and some scripting, inside the vendor's platform. Custom software is written in general-purpose languages and frameworks, and you control the code and hosting. No-code tools are a subset aimed at non-developers with little or no scripting.",
      },
      {
        q: "Is low-code cheaper than custom development?",
        a: "Often cheaper and faster to start, but the cost profile differs: low-code usually carries per-user or per-app licence fees that grow with adoption, while custom software has higher build cost and ongoing maintenance but no platform licence. Compare total cost over several years at your expected number of users and apps.",
      },
      {
        q: "When is low-code the right choice?",
        a: "For internal tools, forms, approvals and workflows that follow common patterns, have modest scale, run inside an ecosystem you already use (such as Microsoft 365 or Salesforce), and need to change often. It is also useful for prototypes that test a process before committing to a build.",
      },
      {
        q: "When is custom software the better choice?",
        a: "When the application is customer-facing or core to how you compete, needs a specific user experience, complex logic or high scale, must integrate deeply with many systems, or would cost more in licences than in maintenance. It also suits cases where you need full control over hosting and data location.",
      },
      {
        q: "Can we start on low-code and move to custom later?",
        a: "Yes, and it can be a sensible way to prove a process. Plan for it: keep data in systems you can export from, document the business rules, avoid deep platform-specific logic for core processes, and expect the move to be a rebuild rather than a conversion.",
      },
    ],
    content: [
      {
        heading: "Should you use low-code or custom software?",
        body: [
          "**Use packaged software or low-code when the process is common, internal, moderate in scale and likely to change often; choose custom development when the application is customer-facing or core to how you compete, needs complex logic or deep integrations, or would cost more in licences than in maintenance. Many businesses use both: low-code for internal workflows and custom code for the product and critical integrations.** The right answer depends on the application, not on a general preference.",
          "This guide is for founders, operations leaders and IT managers choosing how to build business applications and automations. For automating workflows specifically, see [[/blogs/workflow-automation|workflow automation]]; for buy-versus-build in AI agents, see [[/blogs/build-vs-buy-ai-agents|build vs buy AI agents]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Check first whether packaged software already does the job.",
          "Low-code is fast for common internal patterns inside an ecosystem you already use.",
          "Custom software fits differentiating, customer-facing or complex applications.",
          "Compare total cost over several years, including licences at scale.",
          "Govern low-code apps like any other software: owners, access, backups.",
          "Plan an exit: data export and documented rules.",
        ],
      },
      {
        heading: "The four options",
        body: [],
        table: {
          headers: ["Option", "What it means", "Typical examples"],
          rows: [
            ["**Packaged SaaS, configured**", "Buy an existing product and configure it", "CRM, helpdesk, accounting, booking tools"],
            ["**No-code**", "Visual tools for non-developers, little or no scripting", "Form builders, simple automations, spreadsheet-style apps"],
            ["**Low-code**", "Visual development with scripting and connectors, inside a vendor platform", "Power Apps, Salesforce platform, OutSystems, Retool-style internal tools"],
            ["**Custom software**", "Code you own, on frameworks and hosting you choose", "Customer portals, marketplaces, product SaaS, complex integrations"],
          ],
        },
      },
      {
        heading: "Comparison",
        body: [],
        table: {
          headers: ["Factor", "Low-code", "Custom software"],
          rows: [
            ["**Time to first version**", "Usually faster for standard patterns", "Slower; discovery, design and build"],
            ["**Cost profile**", "Lower build cost; licences grow with users and apps", "Higher build cost; maintenance; no platform licence"],
            ["**Flexibility and UX**", "Limited to platform components", "Any experience and logic you can build"],
            ["**Scale and performance**", "Platform limits and quotas apply", "Designed for your load"],
            ["**Integrations**", "Good with the vendor ecosystem; connectors elsewhere", "Anything with an API, at build cost"],
            ["**Lock-in**", "High: logic lives in the platform", "Lower: you own code and data, though frameworks still matter"],
            ["**Skills**", "Platform specialists and trained business users", "Software engineers"],
            ["**Governance**", "Needs controls to avoid app sprawl", "Normal engineering practice"],
          ],
        },
      },
      {
        heading: "When each fits",
        body: [],
        checklist: [
          "**Packaged software:** the process is standard (accounting, CRM, rostering) and you can adapt to the product.",
          "**Low-code:** internal approvals, forms, dashboards and workflows, especially inside Microsoft 365, Google Workspace or Salesforce; frequent changes; dozens rather than thousands of users.",
          "**Custom:** customer-facing portals and apps, products you sell, complex pricing or scheduling logic, high volumes, unusual integrations, or strict hosting and data location needs.",
          "**Hybrid:** low-code front ends over well-designed APIs, or custom services called from low-code workflows.",
        ],
      },
      {
        heading: "Risks to manage",
        body: [
          "Low-code risks include licence costs that rise quietly as adoption grows, apps built by people who then leave, unclear data ownership, platform limits discovered late, and logic that cannot be exported. Custom risks include higher upfront cost, longer delivery, and maintenance that someone must fund. Either way, check where data is stored if location matters to your contracts, and apply Privacy Act obligations if they cover your business. See [[/blogs/privacy-by-design-software-australia|privacy by design]].",
        ],
      },
      {
        heading: "Decision checklist",
        body: [],
        checklist: [
          "Does packaged software already solve 80 per cent of this well?",
          "Is the application internal or customer-facing?",
          "How many users in three years, and what will licences cost then?",
          "How complex is the logic, and how often will it change?",
          "Which systems must it integrate with, and do connectors exist?",
          "Who will own and maintain it after launch?",
          "What happens if you need to leave the platform?",
        ],
      },
      {
        heading: "Hypothetical example: a distributor",
        body: [
          "**This example is hypothetical.** A wholesale distributor needed an internal returns approval process and a customer ordering portal. The returns process was built in the low-code platform bundled with their existing office suite, used by about 20 staff and changed often during the first months. The ordering portal, used by hundreds of trade customers with account-specific pricing and an ERP integration, was built as custom software with an API that the low-code app also used to look up orders.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building custom software for a standard process packaged tools handle well.",
          "Building a customer-facing product on an internal low-code tool.",
          "Ignoring licence costs at full adoption.",
          "No owner or documentation for citizen-built apps.",
          "Core business rules locked inside a platform with no export.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/custom-software-development-australia|Custom software development in Australia]] for scoping a build.",
          "[[/blogs/business-process-automation|Business process automation]] for mapping processes first.",
          "[[/blogs/workflow-digitization-australia|Workflow digitisation]] for approvals and forms.",
          "[[/blogs/legacy-software-modernization-australia|Legacy software modernisation]] for replacing older systems.",
          "[[/blogs/custom-website-vs-web-application|Custom website vs web application]] for deciding whether you need software at all.",
          "[[/blogs/admin-panel-build-vs-buy|Choosing an admin panel]] when the application is mostly back-office screens.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Low-code and custom software solve different problems. Use packaged and low-code tools for common internal processes where speed matters, and custom development where the application differentiates you, faces customers or needs depth. Compare total cost over several years, govern every app, and keep an exit route. If the process currently lives in spreadsheets, see [[/blogs/replacing-spreadsheets-with-custom-software|replacing spreadsheets with custom software]].",
        ],
        cta: {
          title: "Weighing low-code against a custom build?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|custom web applications and portals]] and [[/services/ai-automation|workflow automation and integrations]]. If it would help to compare options for a specific application, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "shopify-plus-vs-custom-ecommerce",
    title: "Shopify Plus vs Custom Ecommerce Development: When Does Each Make Sense?",
    seoTitle: "Shopify Plus vs Custom Ecommerce: When Each Fits",
    excerpt:
      "Shopify Plus vs a custom ecommerce platform: launch speed, total cost, checkout control, B2B, integrations, maintenance and the headless middle ground.",
    category: "Shopify & Ecommerce",
    banner: "plusvsplans",
    sceneKind: "shopify",
    bannerAlt: "A Shopify Plus store and a custom ecommerce platform side by side, compared on launch time, checkout control, integrations, maintenance and total cost, with headless in between",
    date: "2026-10-10",
    readingTime: "5 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer", "b2b-enterprise"],
    relatedSlugs: ["shopify-plus-development", "headless-ecommerce-architecture", "ecommerce-replatforming"],
    faqs: [
      {
        q: "Is Shopify Plus or custom ecommerce cheaper?",
        a: "It depends on scale and requirements. Shopify Plus has a platform fee and app costs but little infrastructure or core maintenance burden. A custom platform has no platform fee but significant build, hosting, security and maintenance costs. Compare total cost over three to five years for your actual requirements, and check current Shopify Plus pricing directly because it varies by term and region.",
      },
      {
        q: "When does custom ecommerce make sense?",
        a: "When commerce is not a standard retail flow: complex quoting or configuration, marketplace or multi-vendor models, unusual pricing or fulfilment logic, deep integration with proprietary systems, or requirements a hosted platform cannot meet. It needs a team able to run and secure the platform long term.",
      },
      {
        q: "Can Shopify Plus handle B2B?",
        a: "Shopify Plus includes B2B features such as company accounts, catalogues, price lists and payment terms. Whether they are enough depends on your quoting, approval and ERP integration needs. Many B2B businesses use Shopify Plus with custom apps or integrations; some need a dedicated B2B platform or custom build.",
      },
      {
        q: "What is the headless middle ground?",
        a: "Keep Shopify (or another commerce platform) for products, carts, checkout and orders, and build a custom storefront using its APIs. It gives more front-end control while keeping a managed commerce core, at the cost of more engineering and maintenance than a theme.",
      },
      {
        q: "What about PCI DSS?",
        a: "A hosted platform such as Shopify handles much of the payment security for its checkout. A custom platform that takes payments must keep PCI scope small, usually by using a payment provider's hosted fields or redirect, and still meet the relevant PCI DSS requirements. Get advice from your payment provider and a qualified assessor where needed.",
      },
    ],
    content: [
      {
        heading: "Shopify Plus or custom ecommerce?",
        body: [
          "**Shopify Plus usually fits retail and D2C brands, and many B2B sellers, whose commerce follows standard patterns and who want a fast launch with low infrastructure burden. Custom ecommerce fits businesses whose commerce model is unusual (complex configuration or quoting, multi-vendor marketplaces, proprietary pricing or fulfilment) and who can fund a team to run it long term. Headless commerce sits between them.** The decision should rest on requirements and total cost over several years, not on preference.",
          "This guide is for ecommerce leaders and founders comparing platforms. For what changes on Plus, see [[/blogs/shopify-plus-development|Shopify Plus development]]; for moving platforms, see [[/blogs/ecommerce-replatforming|ecommerce replatforming]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "List requirements Shopify cannot meet before considering custom.",
          "Compare total cost over three to five years, not build cost.",
          "Custom means you own hosting, security, PCI scope and upgrades.",
          "Headless keeps a managed commerce core with a custom front end.",
          "Check current Shopify Plus pricing directly; it varies by term and region.",
        ],
      },
      {
        heading: "Comparison",
        body: [],
        table: {
          headers: ["Factor", "Shopify Plus", "Custom platform"],
          rows: [
            ["**Time to launch**", "Usually faster: themes, apps and a hosted checkout", "Slower: build commerce foundations first"],
            ["**Cost profile**", "Platform fee, apps, agency or in-house development", "Build, hosting, security, maintenance and team"],
            ["**Checkout**", "Shopify checkout, extended through checkout extensibility and Functions", "Full control, plus full responsibility"],
            ["**Catalogue and pricing logic**", "Strong for standard retail; B2B price lists and catalogues", "Any model, including complex configuration"],
            ["**Integrations**", "Apps and APIs; rate limits apply", "Direct, built to your systems"],
            ["**Upgrades and security**", "Platform handles core updates and hosting", "Your team patches, scales and secures"],
            ["**Lock-in**", "Platform-specific apps and logic", "Your code, but heavy maintenance commitment"],
          ],
        },
      },
      {
        heading: "When Shopify Plus fits",
        body: [],
        checklist: [
          "Your products, carts and checkout follow standard patterns.",
          "You want to launch or replatform quickly with a small team.",
          "You sell across several stores or markets and want shared tooling.",
          "B2B needs are covered by company accounts, price lists and payment terms, perhaps with custom apps.",
          "You would rather spend engineering on experience and integrations than on infrastructure.",
        ],
      },
      {
        heading: "When custom fits",
        body: [],
        checklist: [
          "Complex product configuration, quoting or approval flows are central to sales.",
          "A multi-vendor marketplace with payouts and seller tooling (see [[/blogs/marketplace-development-australia|marketplace development]]).",
          "Pricing, availability or fulfilment logic a hosted platform cannot express.",
          "Very deep integration with proprietary systems.",
          "Commerce is part of a larger product you already run.",
          "You can fund ongoing engineering, security and operations.",
        ],
      },
      {
        heading: "The headless middle ground",
        body: [
          "Headless commerce uses the platform for catalogue, cart, checkout and orders while you build the storefront, for example with Shopify's Storefront API and Hydrogen. It suits brands needing custom experiences or content-heavy sites, but adds front-end hosting, performance and maintenance work. See [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]].",
        ],
      },
      {
        heading: "Total cost questions to answer",
        body: [],
        checklist: [
          "Platform fees and transaction or payment costs at your projected revenue.",
          "Apps and their monthly fees, versus custom features.",
          "Hosting, monitoring, security and on-call for custom.",
          "Engineering capacity needed each year to keep up and improve.",
          "Payment security: hosted fields or redirects to limit PCI scope on custom builds.",
          "Australian specifics: GST display, surcharge rules and local payment methods on either option; see [[/blogs/shopify-development-australia|Shopify development in Australia]].",
        ],
      },
      {
        heading: "Hypothetical example: two businesses, two answers",
        body: [
          "**This example is hypothetical.** An apparel brand with standard products, several markets and a small team chose Shopify Plus and spent its budget on a fast theme, content and an ERP integration. A building-supplies company whose trade customers configure products, request quotes and buy on negotiated terms chose a custom ordering platform integrated with its ERP, keeping its existing payment provider's hosted fields to limit PCI scope. Each decision followed from the requirements list, not from a platform preference.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Choosing custom for control without a long-term team.",
          "Forcing an unusual model into a platform through dozens of apps.",
          "Comparing build cost only.",
          "Ignoring migration effort: URLs, data, redirects and SEO.",
          "Underestimating PCI and security responsibilities on custom builds.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]] for plan differences.",
          "[[/blogs/b2b-portal-development-australia|B2B portal development]] for trade ordering.",
          "[[/blogs/ecommerce-erp-integration|Ecommerce ERP integration]] for orders, stock and finance.",
          "[[/blogs/low-code-vs-custom-software|Low-code vs custom software]] for the general build decision.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify Plus is a strong default for standard commerce that needs to move quickly; custom ecommerce earns its cost where the commerce model is genuinely unusual and you can run it long term. Headless offers a middle path. Write down requirements, test them against the platform, and compare total cost over several years.",
        ],
        cta: {
          title: "Comparing Shopify Plus with a custom build?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/shopify-development|Shopify and Shopify Plus development]] and [[/services/website-development|custom ecommerce platforms]]. If it would help to test your requirements against both, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "b2b-customer-onboarding-automation",
    title: "B2B Customer Onboarding Automation: From Signed Deal to Active Account",
    seoTitle: "B2B Customer Onboarding Automation: A Practical Guide",
    excerpt:
      "How to automate B2B customer onboarding: applications, verification, credit checks, contracts, account setup in ERP and CRM, portal access and handover.",
    category: "AI & Automation",
    banner: "selleronboardflow",
    sceneKind: "workflow",
    bannerAlt: "A new B2B customer moving from application through verification, credit approval, contract signing, ERP and CRM account setup and portal access to a first order",
    date: "2026-10-10",
    updated: "2026-10-10",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "logistics-supply-chain", "professional-services"],
    relatedSlugs: ["b2b-portal-development-australia", "workflow-digitization-australia", "crm-automation-guide"],
    faqs: [
      {
        q: "What does B2B customer onboarding involve?",
        a: "Typically an application or account form, business verification, credit assessment for trade accounts, agreement to terms or a contract, setting up the customer in the ERP, CRM and billing systems, creating portal users, configuring pricing and delivery details, and a welcome or training step leading to a first order or first use.",
      },
      {
        q: "What parts should stay manual?",
        a: "Decisions with judgement or risk: approving credit limits above set thresholds, unusual contract terms, and exceptions such as mismatched business details. Automation should prepare the information and route it to the right person, then carry out the agreed setup.",
      },
      {
        q: "How can we verify Australian businesses?",
        a: "ABN Lookup, the Australian Government's free service, lets you check an ABN, entity name and GST registration. Use it as one input; it does not verify the person applying or their authority. For credit decisions, follow your credit provider's and legal adviser's guidance.",
      },
      {
        q: "Are there privacy rules for onboarding data?",
        a: "If your business is covered by the Privacy Act, APPs apply to personal information about contacts and guarantors, and there are specific rules for credit-related information. Collect only what you need, explain why, store documents securely and limit access. Get advice for credit applications and personal guarantees.",
      },
      {
        q: "How do we measure onboarding?",
        a: "Track time from application or signed deal to an active account, time to first order or first use, drop-off at each step, manual touches per account, and setup errors such as wrong pricing or missing delivery details found later.",
      },
          {
        q: "Can UK onboarding use Companies House data automatically?",
        a: "Yes. The Companies House API provides company status, officers and people with significant control, which can prefill and check applications. Treat it as one input: regulated firms still apply their own due diligence.",
      },
],
    content: [
      {
        heading: "How do you automate B2B customer onboarding?",
        body: [
          "**Map every step from application or signed deal to the first order, replace re-keying with a single digital application that feeds verification, credit and contract steps, route decisions to people with the information prepared, then create the customer in the ERP, CRM, billing and portal automatically once approved, and track time to first order and drop-off at each step.** Good onboarding automation removes waiting and re-entry, not judgement.",
          "This guide is for operations, finance and account management teams in B2B businesses such as wholesalers, manufacturers, logistics providers and service firms. It is different from in-product SaaS activation, covered in [[/blogs/saas-onboarding-optimization|SaaS onboarding optimisation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "One digital application instead of PDFs and emails.",
          "Automate checks and data preparation; keep risk decisions with people.",
          "Create accounts in every system from one approved record.",
          "Send customers clear status updates.",
          "Measure time to first order and drop-off.",
        ],
      },
      {
        heading: "Onboarding stages and what to automate",
        body: [],
        table: {
          headers: ["Stage", "Automate", "Keep human"],
          rows: [
            ["**Application**", "Accessible online form, save and resume, document upload", "Help for complex applicants"],
            ["**Verification**", "ABN Lookup check, duplicate account check, address validation", "Mismatches and unusual entities"],
            ["**Credit**", "Collect consented information, apply rules, prepare a summary", "Limits above thresholds, exceptions"],
            ["**Terms or contract**", "Generate agreement from templates, electronic signature", "Negotiated terms"],
            ["**System setup**", "Create customer in ERP, CRM, billing; assign price list and delivery details", "Review of unusual pricing"],
            ["**Portal and users**", "Invite users, set roles, single sign-on if used", "—"],
            ["**Welcome and first order**", "Welcome sequence, training links, first-order prompts", "Account manager call for key accounts"],
          ],
        },
      },
      {
        heading: "Integrations",
        body: [
          "The approved application should become one record that creates the customer in each system with the same identifiers, rather than separate data entry. Typical targets are the ERP or accounting system (see [[/blogs/accounting-software-integration-australia|accounting software integration]]), the CRM ([[/blogs/crm-automation-guide|CRM automation]]), e-signature and the [[/blogs/b2b-portal-development-australia|B2B portal]]. Use idempotent integrations and a clear status so failed steps can be retried without creating duplicates; see [[/blogs/api-integration-reliability|API integration reliability]].",
        ],
      },
      {
        heading: "Australian considerations",
        body: [],
        checklist: [
          "Use ABN Lookup to check ABN, entity name and GST status; it does not prove the applicant's authority.",
          "Privacy Act APPs apply to contacts' and guarantors' personal information if you are covered; credit information has additional rules. Get advice.",
          "The Spam Act applies to commercial messages; transactional onboarding messages differ from marketing, so keep consents separate.",
          "Electronic signatures are widely used, but some documents have specific requirements; check with your adviser.",
          "Forms should meet WCAG 2.2 AA; see [[/blogs/digital-forms-development-australia|digital forms development]].",
        ],
      },
      {
        heading: "Hypothetical example: a food wholesaler",
        body: [
          "**This example is hypothetical.** A wholesaler onboarded cafes and restaurants through emailed PDF forms re-keyed into the ERP, taking days and causing pricing errors. It replaced them with an online application that checked the ABN, collected trade references and director details for credit with consent, and routed applications over a set limit to the credit manager with a summary. Approval triggered creation of the customer in the ERP and CRM with the right price list and delivery days, a portal invitation and a welcome email. The team tracked days to first order and the share of accounts needing manual correction.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Digitising the PDF without removing re-keying.",
          "Automating credit decisions without clear rules and oversight.",
          "Creating customers separately in each system.",
          "No status updates, so customers chase by email.",
          "Collecting more personal information than needed.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/workflow-digitization-australia|Workflow digitisation]] for approvals and process mapping.",
          "[[/blogs/customer-portal-development-australia|Customer portal development]] for self-service after onboarding.",
          "[[/blogs/business-process-automation|Business process automation]] for choosing what to automate.",
          "[[/blogs/human-in-the-loop-ai|Human-in-the-loop AI]] for reviewing extracted documents.",
        ],
      },
      {
        heading: "UK considerations",
        body: [
          "For UK business customers, the company register is the usual starting point. The Companies House API returns company status, registered office, officers and people with significant control, so onboarding can prefill details and flag dissolved companies or mismatches for review. Since 18 November 2025, directors and people with significant control have had to verify their identity with Companies House, with a 12-month transition for existing ones tied to their due dates; this improves register data but does not replace your own checks.",
          "VAT numbers can be checked with HMRC's VAT registered companies API. Firms regulated under the Money Laundering Regulations 2017 must apply customer due diligence under their own policies; software can gather evidence and route cases, but the firm decides. For individuals, such as sole traders or guarantors, see [[/blogs/identity-verification-integration-uk|identity verification integration in the UK]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "B2B onboarding automation pays off when one approved record flows into every system, people make the risk decisions with prepared information, and customers always know where their application stands. Start by mapping the current process, automate the re-keying first, and measure time to first order. For verifying individuals, see [[/blogs/identity-verification-integration-australia|identity verification integration in Australia]].",
        ],
        cta: {
          title: "Slow to activate new trade customers?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ai-automation|onboarding automation and integrations]] and [[/services/website-development|customer portals]]. If it would help to map your onboarding process, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "mobile-app-modernization",
    title: "Mobile App Modernisation: When to Refactor, Rebuild or Replace",
    seoTitle: "Mobile App Modernisation: Refactor, Rebuild or Replace?",
    excerpt:
      "How to modernise an ageing mobile app: store SDK deadlines, framework upgrades, refactor vs incremental rewrite vs rebuild vs web, risks and a phased plan.",
    category: "Mobile Apps",
    banner: "modernizationmap",
    sceneKind: "mobile",
    bannerAlt: "An ageing mobile app assessed on code health, store requirements and user impact, with paths to refactor, rewrite module by module, rebuild or replace with a web app",
    date: "2026-10-10",
    readingTime: "5 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["retail", "healthcare-healthtech", "fintech", "logistics-supply-chain", "travel-hospitality"],
    relatedSlugs: ["mobile-app-maintenance", "native-vs-cross-platform-app-development", "legacy-software-modernization-australia"],
    faqs: [
      {
        q: "How do I know if my app needs modernising?",
        a: "Common signs are difficulty meeting app store SDK requirements, an outdated or unsupported framework, rising crash rates, slow or risky releases, developers unwilling to work in the codebase, security issues in old dependencies, and a design that no longer meets user or accessibility expectations.",
      },
      {
        q: "What are the current app store SDK requirements?",
        a: "From 31 August 2026, new apps and updates on Google Play must target Android 16 (API level 36), with lower levels for Wear OS, Android Automotive, TV and XR. Since 28 April 2026, apps uploaded to App Store Connect must be built with Xcode 26 using the 26-generation SDKs. These change yearly, so check the official pages.",
      },
      {
        q: "Should we rebuild from scratch?",
        a: "Only when the codebase cannot be improved safely, the framework is a dead end, or the product has changed so much that the old app no longer fits. Rebuilds take longer than expected and risk losing features users rely on. Incremental modernisation, module by module, is usually safer.",
      },
      {
        q: "Can we move from native to cross-platform, or the reverse?",
        a: "Yes. Flutter and React Native can be introduced screen by screen into existing native apps, and native modules can be added to cross-platform apps. A full switch is effectively a rebuild; consider it when maintaining two native codebases is the main problem.",
      },
      {
        q: "Will we lose our users or ratings when we modernise?",
        a: "Not if you update the existing store listings rather than publishing new apps. Keep the same bundle identifier and package name, migrate local data and sign-in sessions carefully, preserve deep links and push notification tokens, and roll out in stages.",
      },
    ],
    content: [
      {
        heading: "How should you modernise an ageing mobile app?",
        body: [
          "**Assess the app on code health, framework support, store requirements, security, performance and user needs; then choose per area whether to refactor in place, rewrite incrementally module by module, rebuild, or replace with a web app; update the existing store listings rather than publishing new apps; and roll out in stages with crash and analytics monitoring.** Incremental modernisation is usually safer than a full rebuild.",
          "This guide is for product owners and technical leads responsible for an app that has become hard to change. For ongoing upkeep, see [[/blogs/mobile-app-maintenance|mobile app maintenance]]; for modernising other business systems, [[/blogs/legacy-software-modernization-australia|legacy software modernisation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Store SDK deadlines arrive every year; plan for them.",
          "Assess before deciding: code, framework, security, UX and data.",
          "Prefer incremental modernisation; rebuild only with good reason.",
          "Keep the same store listings, identifiers and deep links.",
          "Roll out in stages and watch crash-free rates and key journeys.",
        ],
      },
      {
        heading: "Triggers that force the issue",
        body: [],
        checklist: [
          "**Google Play:** from 31 August 2026, new apps and updates must target Android 16 (API 36).",
          "**Apple:** since 28 April 2026, uploads must be built with Xcode 26 and 26-generation SDKs.",
          "Framework or library versions no longer supported or incompatible with current toolchains.",
          "Security findings in old dependencies.",
          "Crash and performance problems that resist fixes.",
          "Accessibility gaps and a dated design.",
          "Releases that take weeks and frequently break.",
        ],
      },
      {
        heading: "Options",
        body: [],
        table: {
          headers: ["Option", "When it fits", "Risk"],
          rows: [
            ["**Refactor in place**", "Code is workable; framework still supported", "Low; ongoing effort"],
            ["**Incremental rewrite**", "Some areas are poor; new screens can use a new stack", "Medium; two stacks for a time"],
            ["**Rebuild**", "Framework is a dead end or product has changed fundamentally", "High; scope and timeline risk"],
            ["**Replace with web or PWA**", "Usage is light and app-only features are not needed", "Medium; loses some device features and store presence"],
            ["**Retire**", "Few users and the need is met elsewhere", "Low, if communicated well"],
          ],
        },
      },
      {
        heading: "Assessment checklist",
        body: [],
        checklist: [
          "Framework, language and SDK versions; distance to current.",
          "Dependency list with support status and known vulnerabilities.",
          "Test coverage and release process.",
          "Crash-free sessions, start-up time and key journey performance.",
          "Analytics: which features are used and which are not.",
          "Backend APIs and their versioning.",
          "Accessibility review against WCAG 2.2 AA.",
          "Team skills and hiring market for the current stack.",
        ],
      },
      {
        heading: "Protecting users during migration",
        body: [
          "Update the existing listings with the same bundle identifier and package name so users keep the app, reviews and ratings. Migrate locally stored data and sign-in sessions, preserve deep links and universal links, re-register push notification tokens, and support older app versions through API versioning for a period. Use staged rollouts on Google Play and phased releases on the App Store, and watch crash reports and key funnels before widening. See [[/blogs/mobile-app-testing|mobile app testing]] and [[/blogs/mobile-app-crash-reporting|crash reporting]].",
        ],
      },
      {
        heading: "Hypothetical example: a field service app",
        body: [
          "**This example is hypothetical.** A field service company ran a seven-year-old hybrid app that could no longer meet store SDK requirements and crashed often offline. The assessment showed the backend APIs were sound but the app framework was unsupported. The team rebuilt the app in a cross-platform framework, module by module behind a shared navigation shell, starting with job lists and offline sync, kept the same store listings, migrated locally queued jobs on first launch, and rolled out to 10 per cent of technicians before releasing to everyone.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Waiting until a store deadline forces a rushed rebuild.",
          "Publishing the rebuilt app as a new listing and losing users.",
          "Rebuilding every feature, including ones nobody uses.",
          "Forgetting offline data, deep links or push tokens.",
          "Releasing to everyone at once.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/native-vs-cross-platform-app-development|Native vs cross-platform]] for choosing a stack.",
          "[[/blogs/pwa-vs-native-app|PWA vs native app]] for the web replacement option.",
          "[[/blogs/mobile-app-architecture|Mobile app architecture]] for structuring the new app.",
          "[[/blogs/offline-first-mobile-app-development|Offline-first development]] for field apps.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Mobile app modernisation is a planned response to store deadlines, unsupported frameworks and slowing delivery. Assess first, modernise incrementally where you can, rebuild only for good reasons, protect users' data and listings, and roll out in stages.",
        ],
        cta: {
          title: "App getting hard to update?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/mobile-app-development|mobile app development and modernisation]] and [[/services/ui-ux-design|app redesign]]. If it would help to assess your app, we are happy to talk it through.",
        },
      },
    ],
  },
];
