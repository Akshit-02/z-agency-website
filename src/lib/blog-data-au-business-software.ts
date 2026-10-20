import type { BlogPost } from "./blog-data";

/**
 * Australian business software trio: custom CRM vs off-the-shelf CRM, legacy
 * software modernisation, and cloud migration. Differentiated from the
 * generic owners (crm-website-integration, crm-automation-guide,
 * ai-legacy-code-modernization, website-migration-guide,
 * ecommerce-data-migration) and from custom-software-development-australia
 * (general build-vs-buy) by Australian decisions: Spam Act consent records,
 * Do Not Call Register and telemarketing hours, APP 8/11/12, Xero and MYOB
 * sync, ABN and GST fields, Single Touch Payroll and Payday Super, Peppol,
 * ATO record keeping, unsupported software under the Essential Eight,
 * Australian cloud regions, APP 8 and overseas cloud storage, ACSC shared
 * responsibility, IRAP and the Hosting Certification Framework, and
 * ransomware payment reporting. The UAE modernisation and cloud articles are
 * deliberately not linked.
 * Sources checked 2026-10-09 (some via search summaries where gov.au sites
 * blocked the fetcher): donotcall.gov.au industry standards; ACMA spam
 * guidance; OAIC (APP guidelines ch 8, small business, NDB 2025); Xero and
 * MYOB developer portals; ABR ABN Lookup web services; ATO (STP, Peppol,
 * record keeping); ASD Essential Eight maturity model; Microsoft Windows 10
 * end of support; AWS, Azure and Google Cloud region lists; AWS migration
 * strategies (7 Rs); AWS Well-Architected; Martin Fowler (strangler fig);
 * Home Affairs ransomware reporting factsheet; ACSC cloud shared
 * responsibility; IRAP; Hosting Certification Framework. No figure here is
 * ZSpace client data.
 */
export const auBusinessSoftwarePosts: BlogPost[] = [
  {
    slug: "custom-crm-development-australia",
    title: "Custom CRM Development vs Off-the-Shelf CRM: How Australian Businesses Should Choose",
    seoTitle: "Custom CRM vs Off-the-Shelf CRM in Australia",
    excerpt:
      "When an off-the-shelf CRM is enough, when to extend it and when custom CRM development pays off, with Australian privacy, spam and Xero or MYOB considerations.",
    category: "Web Development",
    banner: "crmsync",
    sceneKind: "crm",
    bannerAlt: "A CRM at the centre of a business, synchronising contacts, deals and service requests with the website, accounting software, email and phone systems",
    date: "2026-10-09",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["professional-services", "real-estate", "construction-infrastructure", "b2b-enterprise", "healthcare-healthtech"],
    relatedSlugs: ["crm-website-integration", "crm-automation-guide", "custom-software-development-australia"],
    faqs: [
      {
        q: "Should a small Australian business build a custom CRM?",
        a: "Usually not as a first step. Off-the-shelf CRMs cover contact management, pipelines, email and reporting well, and they absorb security and feature work you would otherwise fund. A custom CRM makes sense when your sales or service workflow is genuinely distinctive, when off-the-shelf tools force costly workarounds, or when the CRM must sit inside a larger custom system. Many businesses are best served by extending a standard CRM instead.",
      },
      {
        q: "What is the difference between customising a CRM and building one?",
        a: "Customising means configuring a commercial CRM with fields, pipelines, automation rules, apps and integrations, while the vendor maintains the core product. Building means owning the entire application: data model, interface, permissions, security, hosting and upgrades. A middle path is a custom layer, such as a portal or workflow service, that reads and writes to a standard CRM through its API.",
      },
      {
        q: "Does the Spam Act affect how we design a CRM?",
        a: "Yes. Commercial electronic messages, including email and SMS, generally need consent, must identify the sender and must include a working unsubscribe facility, and unsubscribe requests must be honoured within five working days. Your CRM should record how and when consent was obtained, suppress unsubscribed contacts across every sending tool and keep that history. This applies to businesses of every size.",
      },
      {
        q: "Can a CRM integrate with Xero or MYOB?",
        a: "Yes. Xero publishes an accounting API using OAuth 2.0, and MYOB publishes the MYOB Business API among others on its developer portal. Many off-the-shelf CRMs offer ready-made connectors. Whatever the method, decide which system owns each record, such as contacts, invoices and payments, and how ABN, GST treatment and payment status flow between them before integrating.",
      },
      {
        q: "Where should our CRM data be hosted?",
        a: "Check where the vendor stores data and backups, where support staff can access it, and which sub-processors are involved. If your business is covered by the Privacy Act, APP 8 requires reasonable steps before personal information is disclosed overseas. Some CRM vendors offer Australian data hosting, sometimes on specific plans, so confirm the current options in writing rather than assuming.",
      },
      {
        q: "How long does it take to build a custom CRM?",
        a: "It depends on scope. A focused CRM for one team with contacts, a pipeline, tasks and an accounting integration is a much smaller project than a multi-team system with service tickets, field work, portals and reporting. Expect discovery, design, a first release to a pilot team, data migration and iteration. Ask suppliers for a phased plan rather than a single delivery date.",
      },
      {
        q: "What does it cost to migrate to a new CRM?",
        a: "Migration cost depends on how many sources you have, how clean the data is and how much history you need. Typical work includes mapping fields, deduplicating contacts, preserving consent and unsubscribe records, migrating activities and attachments, testing with real users and running both systems briefly. Data cleaning is usually the most underestimated task, whether you build or buy.",
      },
    ],
    content: [
      {
        heading: "Custom CRM or off-the-shelf: the short answer",
        body: [
          "**Most Australian businesses should start with an off-the-shelf CRM and extend it, not build one.** Custom CRM development pays off when your sales or service workflow is genuinely distinctive and valuable, when a standard CRM forces expensive workarounds, or when the CRM is one part of a larger custom system. Either way, design around consent records, privacy obligations and your accounting system from the start.",
          "This guide is for owners, sales leaders and operations managers deciding how to manage customer relationships in software. It covers what standard CRMs do well, the signals that justify custom work, the middle path of extending a CRM, Australian requirements that shape the data model, migration, ownership and a build-versus-buy checklist.",
          "For the broader build-versus-buy decision across all software, see [[/blogs/custom-software-development-australia|custom software development in Australia]]. For connecting a CRM to your website, see [[/blogs/crm-website-integration|how to integrate a CRM with your website]]. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Off-the-shelf CRMs handle contacts, pipelines, email, tasks and reporting well. Do not rebuild commodity features.",
          "Extending a standard CRM with configuration, apps or a custom layer covers most 'we need something different' cases.",
          "Full custom CRM development is justified by a distinctive, stable, valuable workflow, not by licence fees alone.",
          "Design consent capture and unsubscribe suppression into the data model. The Spam Act applies to businesses of every size.",
          "If you are covered by the Privacy Act, plan for APP 11 security, APP 12 access requests and APP 8 overseas disclosure.",
          "Decide which system owns each record before integrating with Xero, MYOB or your website.",
          "Whatever you choose, make sure your business can export its data and owns the accounts.",
        ],
      },
      {
        heading: "When off-the-shelf CRM is enough",
        body: [
          "Commercial CRMs exist because most sales and service processes have the same shape: capture a lead, qualify it, track a deal through stages, schedule follow-ups, send emails, log calls and report on the pipeline. A standard CRM is usually the right answer when:",
        ],
        checklist: [
          "Your process looks like most businesses in your industry, with a few configurable differences.",
          "You need to be live in weeks, not months.",
          "Nobody in the business can act as a product owner for custom software.",
          "The CRM marketplace already has connectors for your email, phone, website forms and accounting system.",
          "Your team will benefit from the vendor's mobile app, training material and community.",
          "Reporting needs are met by built-in dashboards plus occasional exports.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: run a two-week trial of two shortlisted CRMs with your real data and your three most important workflows. Note every workaround. If the list is short, buy. If it is long and the workarounds are in the work that wins you customers, keep reading.",
        },
      },
      {
        heading: "When custom CRM development is justified",
        body: [
          "Custom work earns its cost when the CRM is part of how you compete, not just how you keep records. Signals we look for:",
        ],
        checklist: [
          "**A distinctive workflow:** for example, quoting that depends on site measurements, compliance checks and supplier pricing, which no CRM models without heavy customisation.",
          "**Workarounds everywhere:** staff keep spreadsheets beside the CRM because the data model does not fit. Our guide to [[/blogs/workflow-digitization-australia|workflow digitisation for Australian SMEs]] covers how to map those manual steps first.",
          "**The CRM is part of a product:** customers, partners or field staff use it through a [[/blogs/customer-portal-development-australia|customer portal]] or app you are building anyway.",
          "**Complex permissions:** franchisees, brokers or partners who must see only their own records, with rules a standard CRM cannot express.",
          "**Integration-heavy operations:** the CRM must coordinate several operational systems in real time.",
          "**Data ownership or hosting requirements** that commercial plans cannot meet at a sensible price.",
        ],
      },
      {
        heading: "The middle path: extend instead of replacing",
        body: [
          "Between 'buy as is' and 'build from scratch' sits the option most businesses overlook. You keep a standard CRM as the system of record and add custom pieces where they matter.",
        ],
        table: {
          headers: ["Option", "What it looks like", "Best when", "Watch for"],
          rows: [
            ["**Configure**", "Custom fields, pipelines, automation rules and views", "Differences are about data and stages", "Configuration sprawl that only one admin understands"],
            ["**Marketplace apps**", "Vendor or third-party apps for quoting, e-signature, SMS", "A proven app already solves the gap", "Per-user app fees; data shared with more vendors"],
            ["**Custom integration**", "Code that syncs the CRM with accounting, operations or your website", "The gap is between systems, not inside the CRM", "API limits and changes; error handling"],
            ["**Custom layer**", "A portal, app or workflow service built on the CRM's API", "Customers, partners or field staff need a tailored interface", "Two systems to maintain; permissions in both"],
            ["**Full custom CRM**", "Your own application, data model and hosting", "The workflow is core, distinctive and stable", "You own security, upgrades and support indefinitely"],
          ],
        },
      },
      {
        heading: "Australian requirements that shape a CRM",
        body: [
          "Whichever route you choose, a CRM used in Australia has to support some specific obligations. These belong in the requirements, because retrofitting them is expensive.",
          "**Consent and unsubscribe.** Under the Spam Act 2003, commercial electronic messages such as marketing email and SMS generally need consent, must identify the sender and must include a functional unsubscribe facility; requests must be honoured within five working days. There is no small business exemption. Store how and when consent was obtained, apply unsubscribes across every tool that sends messages, and keep the history. Purely factual messages, such as an appointment reminder with no promotional content, are treated differently, but the content decides that, not the template name.",
          "**Calling.** If your team makes telemarketing calls, the Do Not Call Register rules and the industry standard set calling hours: 9am to 8pm on weekdays and 9am to 5pm on Saturdays, with no calls on Sundays or public holidays. A CRM that schedules calls should account for the recipient's time zone, which matters in a country with several.",
          "**Privacy.** Businesses covered by the Privacy Act must take reasonable steps to protect personal information (APP 11), give individuals access to it on request (APP 12) and correct it (APP 13). If CRM data is stored or accessed overseas, APP 8 applies. Many businesses with turnover of A$3 million or less are exempt, but not all, so check with the OAIC.",
          "**Business identifiers.** For business customers, store the ABN and validate it. The Australian Business Register offers ABN Lookup web services for this. GST registration status and trading names help with invoicing and deduplication.",
          "**Accounting sync.** Xero's accounting API and MYOB's Business API both use OAuth 2.0. Decide which system owns contacts, invoices and payment status, and how corrections flow back. Our guide to [[/blogs/api-integration-australia|API integration for Australian businesses]] covers this in depth.",
        ],
      },
      {
        heading: "Data model, permissions and reporting",
        body: [
          "A CRM is only as useful as its data model. Before configuring or building, agree the core entities and who can see what.",
        ],
        checklist: [
          "**Entities:** people, organisations (with ABN), sites or locations, deals or jobs, activities, products or services, quotes, and service requests.",
          "**Relationships:** a person can belong to several organisations; a job can span several sites.",
          "**Ownership:** which team or user owns each record, and what happens when someone leaves.",
          "**Permissions:** role-based access, plus record-level rules for partners or franchisees.",
          "**Consent:** channel, purpose, source, timestamp and withdrawal for each contact.",
          "**Audit:** who changed what and when, for sensitive fields.",
          "**Reporting definitions:** what counts as a qualified lead, a won deal and revenue, written down once.",
        ],
        callout: {
          type: "note",
          text: "Reporting arguments are usually definition arguments. Agree definitions before building dashboards; our guide to [[/blogs/business-intelligence-dashboards-australia|business intelligence dashboards]] covers how.",
        },
      },
      {
        heading: "Automation: what to automate first",
        body: [
          "Automation is where CRMs repay their cost, whether bought or built. Start with tasks that are frequent, rule-based and annoying: assigning new leads, creating follow-up tasks, sending quote reminders, alerting when a deal stalls and updating the CRM when an invoice is paid in Xero or MYOB.",
          "Keep a human in the loop for anything that commits the business, such as pricing exceptions or contract terms. If you sell through ecommerce as well, [[/blogs/ecommerce-crm-integration|ecommerce CRM integration]] covers syncing orders and customers, and [[/blogs/ai-lead-qualification|AI lead qualification]] covers automated lead scoring and routing. Our [[/blogs/crm-automation-guide|CRM automation guide]] covers patterns, and [[/blogs/ai-automation-australia|AI automation for Australian small businesses]] covers where AI helps, for example summarising calls or drafting replies, and the privacy checks it needs.",
        ],
      },
      {
        heading: "Total cost of ownership: compare like with like",
        body: [
          "Comparing a monthly subscription with a one-off build quote is misleading, a point that applies to any [[/blogs/build-vs-buy-ai-agents|build-versus-buy decision]]. Compare total cost over the same period, typically three years, with the same scope.",
        ],
        table: {
          headers: ["Cost line", "Off-the-shelf CRM", "Custom CRM"],
          rows: [
            ["Licences", "Per-user fees, add-ons, higher tiers for features", "None, but third-party services may charge"],
            ["Build", "Configuration and integration work", "Discovery, design, development, testing"],
            ["Hosting and security", "Included in subscription", "Your cloud costs, monitoring, patching, backups"],
            ["Upgrades", "Vendor ships them; you adapt", "You fund every change and dependency upgrade"],
            ["Support", "Vendor support plus internal admin", "Developer support retainer plus internal owner"],
            ["Migration and exit", "Export limits; switching costs", "Full control, but you own the data model's quirks"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a building services company",
        body: [
          "**This example is hypothetical.** A Melbourne building services company with 40 staff uses a standard CRM for leads, but its real work happens in spreadsheets: site inspections, compliance photos, supplier quotes and multi-stage jobs. Office staff re-key job details into Xero.",
          "A full custom CRM is tempting. The trial-and-workarounds exercise shows the lead and pipeline side works fine in the standard CRM. The gap is the job lifecycle after a deal is won. The company keeps the CRM, builds a custom job management layer with a mobile app for site staff, and integrates both with Xero. Consent and marketing stay in the CRM; operations move to the custom layer. The custom scope is smaller, and nothing commodity is rebuilt.",
        ],
      },
      {
        heading: "Migrating to a new CRM",
        body: [
          "Whether you buy or build, migration is a project in its own right.",
        ],
        checklist: [
          "Inventory every source: old CRM, spreadsheets, email tools, accounting contacts.",
          "Map fields and agree what is not migrated.",
          "Deduplicate using ABN, email and phone, with human review of uncertain matches.",
          "Migrate consent and unsubscribe records first, and test suppression before any campaign.",
          "Bring activity history only as far back as people will use it.",
          "Pilot with one team before switching everyone.",
          "Keep the old system read-only for a defined period, then archive.",
        ],
      },
      {
        heading: "Build vs buy checklist",
        body: [
          "Score each statement from 0 (not true) to 2 (very true). This is our practitioner checklist, not a formula. A high score suggests custom or a custom layer; a low score suggests buy and configure. If you do build, [[/blogs/custom-software-development-australia|custom software development in Australia]] covers delivery, IP ownership and partner checks, and [[/blogs/secure-web-application-development-australia|building a secure customer-facing web application]] covers the security baseline.",
        ],
        checklist: [
          "Our core workflow differs materially from the standard CRM model.",
          "Workarounds in our current tools cost significant staff time every week.",
          "Customers, partners or field staff need a tailored interface.",
          "We need permission rules a commercial CRM cannot express.",
          "We have, or will hire, a product owner for the CRM.",
          "We can fund ongoing maintenance, security and upgrades for years.",
          "The workflow is stable enough to specify.",
          "Integration needs exceed what marketplace connectors handle reliably.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building a custom CRM to save licence fees, then paying more in maintenance.",
          "Copying a messy spreadsheet process into software without simplifying it first.",
          "Ignoring consent records until the first campaign.",
          "Letting each team define 'customer' and 'revenue' differently.",
          "Integrating with accounting without agreeing the source of truth.",
          "Skipping the pilot and switching the whole business on one day.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Marketing and calling:** ACMA, avoid sending spam; Do Not Call Register, industry standards.",
          "**Privacy:** OAIC, APP guidelines chapter 8; OAIC, small business.",
          "**Integrations:** Xero developer documentation; MYOB developer portal; ABR, ABN Lookup web services.",
          "The extend-or-build options, checklist and example are ours. Rules change; re-check before relying on them. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "For most Australian businesses the best CRM is a standard one, configured well and extended where it matters. Custom CRM development is worth it when the workflow it supports is how you win and keep customers, and when you are ready to own it as a product. In every case, design for consent, privacy and accounting integration from day one. Connecting the CRM with ecommerce, support and billing data is covered in [[/blogs/customer-data-integration-australia|customer data integration]].",
        ],
        cta: {
          title: "Weighing up a CRM build or extension?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|custom web applications and integrations]] and [[/services/ai-automation|workflow automation]]. If it would help to test whether to build, buy or extend, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "legacy-software-modernization-australia",
    title: "Legacy Software Modernisation: How Australian Businesses Can Upgrade Old Systems",
    seoTitle: "Legacy Software Modernisation in Australia: A Guide",
    excerpt:
      "How Australian businesses can modernise legacy software: risk signs, retain, rehost, refactor or replace, data migration, phased rollouts and rollback plans.",
    category: "Web Development",
    banner: "modernizationmap",
    sceneKind: "roadmap",
    bannerAlt: "An old business system being replaced piece by piece, with new services taking over functions while the legacy system keeps running until cutover",
    date: "2026-10-09",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["manufacturing", "logistics-supply-chain", "professional-services", "b2b-enterprise", "construction-infrastructure"],
    relatedSlugs: ["custom-software-development-australia", "ai-legacy-code-modernization", "cloud-migration-australia"],
    faqs: [
      {
        q: "What is legacy software modernisation?",
        a: "Legacy software modernisation means updating or replacing business software that still works but has become risky, costly or limiting. Options range from keeping it and reducing risk, to moving it to new infrastructure, to rewriting parts of it, to replacing it with a commercial product. The right option is decided per system, and often per component, based on business value and technical risk.",
      },
      {
        q: "How do we know if our software needs modernising?",
        a: "Common signs include unsupported operating systems or frameworks, one person who understands the system, slow or risky changes, manual workarounds, failed integrations with newer tools, poor security controls such as no multi-factor authentication, and difficulty meeting reporting or compliance changes. One sign is a reason to assess; several together are a reason to plan.",
      },
      {
        q: "Do we have to replace the whole system?",
        a: "No. Replacing everything at once is often the riskiest option. Many systems can be retained with risk reduced, moved to supported infrastructure, or modernised incrementally by moving one function at a time to new code, an approach often called the strangler fig pattern. Full replacement makes sense when a commercial product now covers the need well or the system cannot be safely changed.",
      },
      {
        q: "Will modernisation save money?",
        a: "Sometimes, but it is not guaranteed. Savings can come from lower infrastructure costs, fewer manual workarounds and faster changes, while costs include the project itself, a period of running two systems, retraining and new subscriptions. Build a business case per system that counts both, and treat reduced risk and new capability as benefits in their own right.",
      },
      {
        q: "What happens to our data during modernisation?",
        a: "Data needs mapping, cleaning, migration and reconciliation. Agree which records move, how historical data is kept, and how you prove the new system matches the old one, for example by comparing totals and samples. Check record-keeping obligations before deleting anything: the ATO generally expects business records to be kept for five years, and other laws can require longer.",
      },
      {
        q: "Is unsupported software a security problem?",
        a: "Usually, yes. Software that no longer receives security updates accumulates known vulnerabilities. ASD's Essential Eight treats removing unsupported internet-facing services and key applications as part of patching applications. The Essential Eight is guidance rather than law for most private businesses, but it is a sensible baseline, and a breach involving personal information can trigger obligations under the Notifiable Data Breaches scheme.",
      },
      {
        q: "Can AI help modernise legacy code?",
        a: "AI coding tools can help explain old code, generate tests, suggest refactors and translate between languages, which can speed up parts of a modernisation. They do not remove the need for engineers who understand the business rules, for characterisation tests that prove behaviour is preserved, or for careful review. Treat AI output as a draft to verify, not a migration plan.",
      },
    ],
    content: [
      {
        heading: "How should an Australian business modernise legacy software?",
        body: [
          "**Modernise system by system, starting with the ones that carry the most business risk, and choose the least disruptive option that solves the problem.** That might mean keeping a system and reducing its risk, moving it to supported infrastructure, refactoring parts of it, or replacing it. Replacing everything at once is rarely necessary and is often the riskiest choice.",
          "This guide is for owners, finance and operations leaders, and IT managers responsible for software that still runs the business but is getting harder to change, secure or connect. It covers the warning signs, Australian triggers that force the issue, how to inventory and score systems, the modernisation options, data migration, phased rollouts, rollback planning, testing and adoption.",
          "For the related decisions, see [[/blogs/custom-software-development-australia|custom software development in Australia]] and [[/blogs/cloud-migration-australia|cloud migration for Australian businesses]]. For AI-assisted code work, see [[/blogs/ai-legacy-code-modernization|AI legacy code modernisation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "A legacy system is not just old software. It is software that has become risky, slow to change or hard to integrate.",
          "Start with an inventory and a risk score per system. Modernise the high-risk, high-value systems first.",
          "Australian triggers include unsupported software, Single Touch Payroll and Payday Super reporting, Peppol eInvoicing and privacy obligations.",
          "Use the full range of options: retain, rehost, replatform, refactor, replace or retire. Pick per system.",
          "Prefer incremental replacement with a working system at every step over a big-bang rewrite.",
          "Write the rollback plan before cutover, and prove data matches with reconciliation, not hope.",
          "Check record-keeping obligations before archiving or deleting historical data.",
        ],
      },
      {
        heading: "Signs a system needs modernising",
        body: [
          "Most legacy problems show up as business symptoms before anyone calls them technical debt.",
        ],
        table: {
          headers: ["Symptom", "What it usually means"],
          rows: [
            ["Only one person can change or fix it", "Key-person risk; undocumented business rules"],
            ["Small changes take weeks and break other things", "Tightly coupled code with no automated tests"],
            ["It runs on an unsupported OS, database or framework", "Known vulnerabilities with no vendor fixes"],
            ["Staff re-key data between systems", "No usable API; integration debt"],
            ["No multi-factor authentication or role-based access", "Security controls below current baselines"],
            ["Reporting needs exports and spreadsheets", "Data model not designed for current questions"],
            ["Vendor has ended support or gone out of business", "No path for fixes, updates or compliance changes"],
          ],
        },
      },
      {
        heading: "Australian triggers that force the issue",
        body: [
          "Some modernisation projects are planned. Others are triggered by an external change. These are common in Australia.",
          "**Unsupported platforms.** Microsoft ended support for Windows 10 on 14 October 2025. Line-of-business software that depends on an old OS, database or runtime inherits that risk. ASD's Essential Eight treats removing unsupported internet-facing services and key applications as part of patching. It is guidance, not law, for most private businesses, but it is a sound baseline.",
          "**Payroll and tax reporting.** Single Touch Payroll requires payroll software to report to the ATO each pay day, and Payday Super changes from 1 July 2026 add reporting of super-related earnings. Home-grown payroll or job-costing systems that feed payroll often need rework when these rules change.",
          "**eInvoicing.** Peppol eInvoicing uses the ABN as the business identifier, and Commonwealth agencies pay Peppol invoices on shorter terms. Older finance systems may need an access point integration or replacement to take part.",
          "**Privacy and breaches.** If you are covered by the Privacy Act, you must protect personal information and notify the OAIC and individuals of eligible data breaches. The OAIC received 1,205 notifications in 2025, with malicious or criminal attacks the leading cause. Legacy systems without encryption, access logs or MFA make both prevention and investigation harder.",
          "**Integration demands.** Customers and partners increasingly expect online portals, real-time status and data exchange. A system without an API becomes a bottleneck. See [[/blogs/api-integration-australia|API integration for Australian businesses]].",
        ],
      },
      {
        heading: "Step 1: Inventory and score every system",
        body: [
          "Before choosing options, list what you have. For each system record its purpose, users, owner, technology, hosting, integrations, data held (including personal information), support status and known problems. Then score it.",
          "The scorecard below is ours. Score each factor from 1 (low) to 5 (high). Systems with high business value and high risk are your first candidates.",
        ],
        table: {
          headers: ["Factor", "Question"],
          rows: [
            ["Business value", "How much revenue, service or compliance depends on it?"],
            ["Security risk", "Is it unsupported, exposed to the internet or holding sensitive data?"],
            ["Change cost", "How slow and risky is it to change?"],
            ["Key-person risk", "How many people can maintain it?"],
            ["Integration friction", "How much manual work does it create elsewhere?"],
            ["Compliance pressure", "Do upcoming rule changes require it to change?"],
          ],
        },
      },
      {
        heading: "Step 2: Choose an option per system",
        body: [
          "AWS describes seven common migration strategies, often called the 7 Rs. They are a useful vocabulary for modernisation too. Choose per system, and sometimes per component.",
        ],
        table: {
          headers: ["Option", "What it means", "Good fit when", "Limits"],
          rows: [
            ["**Retain**", "Keep it, but reduce risk: isolate it, restrict access, add backups and monitoring", "Low change rate; replacement not yet justified", "Debt remains; revisit regularly"],
            ["**Retire**", "Switch it off", "Few users; function no longer needed or duplicated", "Archive data first; check record-keeping rules"],
            ["**Rehost**", "Move as is to new infrastructure, such as a cloud VM", "Hardware or data centre is the main risk", "Code problems move with it"],
            ["**Replatform**", "Move with small changes, such as a managed database or newer runtime", "Platform is unsupported but code is sound", "Needs testing of everything the change touches"],
            ["**Refactor**", "Restructure or rewrite parts of the code", "The system is valuable and distinctive", "The most engineering effort; needs strong tests"],
            ["**Replace (repurchase)**", "Move to a commercial product", "A product now covers the need well", "Process change; data migration; licence costs"],
            ["**Relocate**", "Move a virtualised environment largely unchanged", "Large VM estates on supported hypervisors", "Mostly an infrastructure move"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: for each system, write one sentence that explains why the chosen option is the least disruptive way to solve the actual problem. If you cannot, you have probably chosen a bigger option than you need.",
        },
      },
      {
        heading: "Step 3: Modernise incrementally where you can",
        body: [
          "Big-bang rewrites fail in a predictable way: the old system keeps changing while the new one is built, the business rules turn out to be more complex than documented, and the switch-over carries all the risk on one day.",
          "The alternative is incremental replacement. Martin Fowler's **strangler fig** pattern places a routing layer in front of the old system, then moves one function at a time to new code until the old system can be retired. Each step delivers value and can be reversed.",
        ],
        code: {
          label: "Incremental replacement with a routing layer",
          text: `Users and integrations
        |
  [Routing layer / API facade]
     |                 |
 New service A    Legacy system
 (quotes moved)   (jobs, billing)
     |                 |
  Shared data sync and reconciliation

Repeat: move one function, test, switch
traffic, keep rollback, then retire`,
        },
      },
      {
        heading: "Step 4: Plan the data migration",
        body: [
          "Data migration is usually the hardest part. Old systems hold years of inconsistent records, implicit rules and fields used for things they were never designed for. The techniques in [[/blogs/ecommerce-data-migration|ecommerce data migration]] apply to most business systems, not just stores.",
        ],
        checklist: [
          "Profile the data: volumes, duplicates, blanks, odd values and free-text fields used as codes.",
          "Map every field, and record transformations and what is not migrated.",
          "Clean at source where you can, with business owners deciding on ambiguous records.",
          "Decide how much history moves. Archive the rest in a readable, searchable form.",
          "Check retention rules: the ATO generally expects business records to be kept for five years, and other laws can require longer.",
          "Reconcile after every trial migration: record counts, financial totals and sampled records.",
          "Run at least two full rehearsal migrations before cutover.",
        ],
      },
      {
        heading: "Step 5: Test, roll out in phases and keep a way back",
        body: [
          "Legacy systems rarely have good tests, so write **characterisation tests** first: tests that capture what the system does today, including quirks the business relies on. Then the new code must pass the same tests.",
          "Roll out in phases: one function, one site, one team or one customer segment at a time. For high-risk functions, consider a **parallel run**, where both systems process the same transactions and outputs are compared before the old one is switched off. We describe the mechanics in [[/blogs/ecommerce-parallel-run|running old and new platforms in parallel]].",
          "Write the rollback plan before cutover. It should state the trigger for rollback, who decides, how data entered in the new system is handled, and how long rollback remains possible. A plan that has not been rehearsed is an assumption.",
        ],
      },
      {
        heading: "Step 6: Bring people with you",
        body: [
          "Modernisation changes how people work. Involve the users who know the workarounds early: they hold the undocumented business rules, and mapping them is the same exercise described in [[/blogs/workflow-digitization-australia|workflow digitisation]]. Train before go-live, provide quick reference guides, nominate champions in each team and plan for a short dip in productivity. Measure adoption, not just launch.",
        ],
      },
      {
        heading: "A phased modernisation roadmap",
        body: [],
        table: {
          headers: ["Phase", "Outputs"],
          rows: [
            ["**0–2 months: assess**", "Inventory, risk scores, quick risk reductions (MFA, backups, access reviews), a ranked list"],
            ["**2–4 months: plan the first system**", "Chosen option, architecture, data map, test strategy, rollback plan, business case"],
            ["**4–9 months: deliver incrementally**", "First functions moved, reconciliation reports, user training, phased cutover"],
            ["**Ongoing: retire and repeat**", "Legacy component retired, data archived, lessons fed into the next system"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a distributor's order system",
        body: [
          "**This example is hypothetical.** An Adelaide wholesale distributor runs orders, stock and invoicing on a system built fifteen years ago on an unsupported database. One contractor maintains it. Customers want online ordering and invoices by Peppol.",
          "The scorecard ranks it highest on business value, security risk and key-person risk. The distributor first reduces immediate risk: restricted access, MFA on remote access and tested backups. It then replaces invoicing with its accounting platform, which supports Peppol, and builds a customer ordering portal on a new service that syncs with the old stock module. Stock moves last, after two rehearsal migrations and a two-week parallel run. The old system is retired, and seven years of records are archived in a searchable format.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Starting with the technology choice instead of the business problem. Our guide to [[/blogs/ecommerce-technical-debt|technical debt]] explains how to separate cosmetic debt from risky debt.",
          "Rewriting everything because the code is ugly, not because it is risky.",
          "Underestimating hidden business rules in old code and spreadsheets.",
          "Migrating dirty data and cleaning it 'later'.",
          "Cutting over without a rehearsed rollback plan.",
          "Deleting historical data before checking retention obligations.",
          "Declaring success at launch rather than at adoption.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Security and platforms:** ASD, Essential Eight maturity model and ISM mapping; Microsoft, Windows 10 end of support; OAIC, NDB statistics 2025.",
          "**Tax and invoicing:** ATO, Single Touch Payroll; ATO, Peppol; business.gov.au, record keeping.",
          "**Methods:** AWS, migration strategies; Martin Fowler, strangler fig application.",
          "The scorecard, roadmap and example are ours. Some ATO facts are summarised from official guidance and may change; check the current position before relying on them. Nothing here is ZSpace client data or tax advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Legacy software modernisation works best as a series of small, reversible decisions, and it often makes the next projects on the list possible: a [[/blogs/customer-portal-development-australia|customer portal]], [[/blogs/business-intelligence-dashboards-australia|better reporting]] or [[/blogs/custom-crm-development-australia|a CRM that fits]]. The sequence is the same: inventory and score systems, reduce urgent risk, choose the least disruptive option for each, move functions incrementally, reconcile data and keep a rehearsed way back. Replacing everything is sometimes right, but it should be a conclusion, not a starting point. For the engineering detail of incremental replacement, see [[/blogs/strangler-fig-pattern|the strangler fig pattern]].",
        ],
        cta: {
          title: "Planning a modernisation?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications, integrations and modernisation]] and [[/services/ai-automation|automation]]. If an outside view on options or sequencing would help, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "cloud-migration-australia",
    title: "Cloud Migration for Australian Businesses: Planning, Risks and Best Practices",
    seoTitle: "Cloud Migration in Australia: Planning, Risks, Practice",
    excerpt:
      "Cloud migration for Australian businesses: discovery, Australian regions, APP 8 and data location, shared responsibility, migration waves, testing and costs.",
    category: "Web Development",
    banner: "migrate",
    sceneKind: "pipeline",
    bannerAlt: "Business applications and databases moving in waves from an office server room to Australian cloud regions, with testing and rollback checkpoints",
    date: "2026-10-09",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["professional-services", "healthcare-healthtech", "manufacturing", "logistics-supply-chain", "saas-technology"],
    relatedSlugs: ["legacy-software-modernization-australia", "website-security-australia", "saas-development-australia"],
    faqs: [
      {
        q: "Does cloud migration automatically improve security?",
        a: "No. Major cloud providers secure their infrastructure, but under the shared responsibility model you remain responsible for identity, access, configuration, data protection and much of the patching. A well-configured cloud environment can be more secure than an office server; a poorly configured one can expose data publicly. Security improves only if you design and operate it well.",
      },
      {
        q: "Will moving to the cloud save money?",
        a: "Not automatically. Cloud can lower costs when you remove ageing hardware, right-size resources, use managed services and switch off what you do not need. It can raise costs when workloads are moved as is and left running, data transfer is heavy or resources are over-provisioned. Model costs before migrating and set up budgets and alerts from day one.",
      },
      {
        q: "Which cloud providers have Australian regions?",
        a: "AWS runs Asia Pacific (Sydney) and Asia Pacific (Melbourne) regions, with Melbourne requiring opt-in. Microsoft Azure runs Australia East, Australia Southeast, and Australia Central regions in Canberra, with Central 2 restricted. Google Cloud runs Sydney and Melbourne regions. Not every service is available in every region, so check the specific services you need.",
      },
      {
        q: "If our data is in an Australian region, does APP 8 still apply?",
        a: "It can. APP 8 is about disclosing personal information to an overseas recipient. Data stored in Australia can still be accessed by overseas support staff, sent to overseas logging, backup or AI services, or processed by sub-processors elsewhere. The OAIC also explains when overseas cloud storage may be a use rather than a disclosure. Map all data flows, not just the primary region.",
      },
      {
        q: "What is the safest way to migrate?",
        a: "Migrate in waves, starting with lower-risk systems, after discovery and dependency mapping. For each wave, test in the target environment, rehearse the cutover, keep the source environment available for rollback, and verify data after the move. Schedule cutovers in quiet periods and communicate with users. Treat the first wave as a pilot that improves the process for later ones.",
      },
      {
        q: "Do we need IRAP or the Hosting Certification Framework?",
        a: "Usually not as a private business. IRAP assessments and the Hosting Certification Framework are mainly relevant to Australian government agencies and suppliers handling government data. If you sell to government or handle government data, check the procurement requirements. Otherwise, choose controls based on your own risk, privacy obligations and customer contracts.",
      },
      {
        q: "Do we need to report a ransomware payment?",
        a: "If your business has annual turnover over A$3 million, or is a responsible entity for a critical infrastructure asset, the Cyber Security Act 2024 requires reporting a ransomware or cyber extortion payment to ASD within 72 hours of making it. Cloud migration is a good time to set up the backups and recovery plan that make paying unnecessary. Seek advice for your situation.",
      },
    ],
    content: [
      {
        heading: "What does cloud migration involve for an Australian business?",
        body: [
          "**Cloud migration means moving applications, data and infrastructure from your own servers, or another host, to a cloud provider, then running them well there.** For Australian businesses it involves discovery, choosing what to migrate and how, deciding where data lives and who can access it, securing the environment under a shared responsibility model, migrating in tested waves and governing costs afterwards. The cloud does not improve security or cost by itself.",
          "This guide is for owners, IT managers and finance leaders planning to move business systems to AWS, Microsoft Azure, Google Cloud or a managed provider. It covers whether to migrate at all, discovery, Australian regions and data location, privacy, shared responsibility, migration approaches, testing and rollback, cost governance and how to choose help.",
          "If your systems need more than a move, read [[/blogs/legacy-software-modernization-australia|legacy software modernisation]] first. For security operations after migration, see [[/blogs/website-security-australia|website security for Australian small businesses]]. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Start with why: hardware end of life, resilience, scale, remote access or modernisation. The reason shapes the approach.",
          "Inventory every application, database and dependency before choosing anything.",
          "AWS, Azure and Google Cloud all run Australian regions, but service availability differs by region.",
          "Hosting in Australia does not settle APP 8 on its own. Map support access, backups, logging and AI services too.",
          "You remain responsible for identity, configuration and data protection in the cloud.",
          "Migrate in waves, test in the target environment and keep a rollback path for each wave.",
          "Set budgets, alerts and tagging from day one. Unmanaged cloud costs grow quietly.",
        ],
      },
      {
        heading: "Should you migrate at all?",
        body: [
          "Cloud migration is a means, not a goal. Good reasons include ageing servers, an office server room that is a single point of failure, the need for remote and multi-site access, unpredictable demand, or a modernisation that will use managed cloud services.",
          "If the system itself is the problem, moving it will not fix it; see [[/blogs/legacy-software-modernization-australia|legacy software modernisation]] for the options. Weaker reasons include 'everyone is moving' or an expectation of automatic savings. Some workloads, such as specialised on-site equipment control or applications with heavy local data transfer, may be better left where they are or moved to a SaaS product instead. Retaining a system on premises for now is a legitimate decision.",
        ],
      },
      {
        heading: "Discovery: application inventory and dependency mapping",
        body: [
          "Most migration problems are discovery problems: a forgotten scheduled job, a hard-coded IP address, a report that reads directly from a database, or a licence tied to a physical server.",
        ],
        checklist: [
          "List every application, database, file share and scheduled job, with an owner for each.",
          "Record operating systems, versions, licences and support status.",
          "Map dependencies: which systems call which, and over which ports and protocols.",
          "Classify data: personal, health, financial, commercially sensitive or public.",
          "Note performance needs, peak periods and acceptable downtime.",
          "Record recovery objectives: how much data you can lose (RPO) and how long you can be down (RTO).",
          "Check software licences for cloud and virtualisation terms.",
        ],
      },
      {
        heading: "Australian regions and data location",
        body: [
          "All three major providers operate in Australia. **AWS** runs Asia Pacific (Sydney) and Asia Pacific (Melbourne), each with three Availability Zones; Melbourne must be enabled (opt-in) before use. **Microsoft Azure** runs Australia East (New South Wales, with availability zones) paired with Australia Southeast (Victoria), and Australia Central and Central 2 in Canberra, with access to Central 2 restricted. **Google Cloud** runs australia-southeast1 (Sydney) and australia-southeast2 (Melbourne).",
          "Region choice affects latency, resilience and, for some customers, contractual requirements. If you are building a product for many customers, [[/blogs/saas-development-australia|SaaS development in Australia]] covers tenancy and data location decisions. Not every service or instance type is available in every region, so check the services you plan to use, including any AI services.",
          "**Privacy.** If your business is covered by the Privacy Act, APP 8 requires reasonable steps before personal information is disclosed to an overseas recipient, and you remain accountable for that recipient. The OAIC's guidelines also explain when storing personal information with an overseas cloud provider may be a 'use' rather than a 'disclosure', for example where a binding contract limits the provider's handling and you retain effective control. Either way, choosing an Australian region is only one step: also map support access, backups, monitoring, email and AI services.",
          "**Government work.** ASD's IRAP program endorses assessors who assess systems and cloud services against the Information Security Manual, and the Hosting Certification Framework applies to government hosting arrangements. These matter mainly if you hold government data or sell to agencies.",
        ],
      },
      {
        heading: "Shared responsibility: what you still own",
        body: [
          "Cloud providers secure the physical facilities, hardware and core infrastructure. You secure what you build and configure on top. The split shifts depending on the service: you patch the operating system on a virtual machine, but not on a fully managed database. ASD's ACSC publishes cloud shared responsibility guidance written for small and medium businesses.",
        ],
        table: {
          headers: ["Area", "Your responsibility in practice"],
          rows: [
            ["**Identity and access**", "MFA for all users, no shared admin accounts, least privilege, regular access reviews"],
            ["**Configuration**", "No public storage by default, network rules, secure baselines, configuration monitoring"],
            ["**Data**", "Encryption settings, key management, classification, retention"],
            ["**Patching**", "Operating systems and applications on anything that is not fully managed"],
            ["**Backups and recovery**", "Backups that are separate, immutable where possible, and restored in tests"],
            ["**Logging and monitoring**", "Audit logs on, retained and reviewed; alerts for risky changes"],
          ],
        },
        callout: {
          type: "note",
          text: "If your business has annual turnover over A$3 million, the Cyber Security Act 2024 requires reporting a ransomware or cyber extortion payment to ASD within 72 hours. Tested, separate backups are the best way to avoid ever facing that decision.",
        },
      },
      {
        heading: "Choosing a migration approach per workload",
        body: [
          "Decide per application, not for the whole estate. The common approaches, drawn from the AWS migration strategies:",
        ],
        table: {
          headers: ["Approach", "What happens", "When it fits", "Trade-off"],
          rows: [
            ["**Rehost**", "Move servers largely as they are to cloud VMs", "Hardware deadline; little time to change code", "Quick, but carries old problems and can be costly to run"],
            ["**Replatform**", "Small changes, such as a managed database or containers", "Code is sound; you want less operational work", "Needs testing of changed components"],
            ["**Refactor**", "Redesign to use cloud-native services", "High-value app that needs to scale or change often", "Most effort; best long-term fit"],
            ["**Repurchase**", "Move to a SaaS product", "A product covers the need, such as email or accounting", "Process change and data migration"],
            ["**Retain or retire**", "Leave it, or switch it off", "Not ready, not worth it, or not needed", "Revisit later; archive data before retiring"],
          ],
        },
      },
      {
        heading: "Migrating in waves, with testing and rollback",
        body: [
          "Group applications into waves by dependency and risk. Start with a low-risk system to prove the process, the network set-up and the tooling.",
        ],
        code: {
          label: "One migration wave",
          text: `Prepare  -> landing zone, network, identity,
            backups, monitoring in place
Replicate-> copy data; keep it in sync
Test     -> functional, performance, security,
            integration and restore tests
Cutover  -> freeze, final sync, switch DNS or
            connections, verify
Hypercare-> watch closely; fix fast
Rollback -> source kept ready until sign-off`,
        },
      },
      {
        heading: "Data migration and verification",
        body: [
          "Move data with tools suited to its size and change rate, and verify it. The reconciliation approach in [[/blogs/ecommerce-data-migration|ecommerce data migration]] works for any business database. Compare record counts, checksums and key financial totals between source and target, and have business users check samples. For databases that keep changing, use replication so the final cutover only moves the last changes. Keep the source read-only and available until you are confident.",
        ],
      },
      {
        heading: "Cost drivers and cost governance",
        body: [
          "Cloud costs are usage-based, which is an advantage only if someone manages them.",
        ],
        checklist: [
          "**Compute:** right-size instances using real usage; switch off non-production overnight.",
          "**Storage:** choose tiers by access pattern; set lifecycle rules for old data and backups.",
          "**Data transfer:** moving data out of a cloud or between regions usually costs money; design to minimise it.",
          "**Managed services:** often cheaper in staff time than self-managed equivalents, even when the line item is higher.",
          "**Commitments:** reserved or committed-use pricing suits steady workloads, once usage is understood.",
          "**Currency:** many cloud prices are set in USD, so AUD costs move with the exchange rate.",
          "**Governance:** tag resources by owner and system, set budgets and alerts, and review monthly.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: run the first three months with weekly cost reviews. Most waste appears early: oversized instances, forgotten test environments and backups kept forever.",
        },
      },
      {
        heading: "Performance and ongoing governance",
        body: [
          "After migration, monitor what users experience, not just server metrics; [[/blogs/ecommerce-observability|observability]] explains logs, metrics and traces in practice, and [[/blogs/ecommerce-disaster-recovery|disaster recovery planning]] covers RPO and RTO in more depth. Set up alerts for availability, error rates and slow responses. The AWS Well-Architected Framework's pillars are a useful checklist for ongoing reviews: operational excellence, security, reliability, performance efficiency, cost optimisation and sustainability.",
          "Assign ownership. Someone must own identity, patching, backups, cost and incident response (the [[/blogs/website-security-australia|website security checklist]] has a monthly, quarterly and annual calendar), whether that is an internal person or a managed service provider with a clear contract.",
        ],
      },
      {
        heading: "Choosing help: questions for a migration partner",
        body: [
          "ASD's ACSC suggests asking managed service providers whether they implement better-practice security such as the Essential Eight, administer systems securely, monitor activity, assess systems regularly, and can respond to incidents. Add these migration-specific questions:",
        ],
        checklist: [
          "How will you run discovery, and what will it produce?",
          "Which approach do you recommend for each system, and why?",
          "How will you test, cut over and roll back each wave?",
          "Where will data, backups and logs be stored, and who can access them from where?",
          "Who owns the cloud accounts, billing and root credentials? (It should be us.)",
          "How will you set up cost monitoring, and what will running costs be?",
          "What documentation and training will we receive at handover?",
        ],
      },
      {
        heading: "Hypothetical example: an accounting practice",
        body: [
          "**This example is hypothetical.** A Canberra accounting practice runs a file server, a practice management database and remote desktop access from a server cupboard whose hardware is out of warranty. The practice is covered by the Privacy Act because of the client information it holds and its turnover.",
          "Discovery shows the practice management product now offers a cloud-hosted version, so that system is repurchased rather than rehosted, and its integration with the practice's accounting software is rebuilt using the approach in [[/blogs/api-integration-australia|API integration for Australian businesses]]. Files move to a managed document service in an Australian region, with MFA and access reviews. A legacy reporting tool with two users is retired after its data is exported. Remote desktop is decommissioned. Backups are configured separately and a restore is tested before the old server is switched off.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Migrating without a complete inventory and dependency map.",
          "Assuming the provider handles security and backups.",
          "Rehosting everything, then paying cloud prices for on-premises design.",
          "Choosing an Australian region and ignoring overseas support, logging and AI services.",
          "Letting a supplier own the cloud account or root credentials. The [[/blogs/web-development-company-australia|supplier selection checks]] apply here too.",
          "Switching off the source before data is verified.",
          "No budgets or alerts until the first surprising invoice.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Regions:** AWS Regions; Microsoft Azure regions list; Google Cloud regions and zones.",
          "**Security and responsibility:** AWS shared responsibility model; Microsoft, shared responsibility in the cloud; ACSC, cloud shared responsibility guidance; ACSC, questions to ask managed service providers; Home Affairs, ransomware payment reporting factsheet.",
          "**Privacy and government:** OAIC, APP guidelines chapter 8; ASD, IRAP; Hosting Certification Framework.",
          "**Methods:** AWS, migration strategies; AWS Well-Architected pillars.",
          "The wave plan, checklists and example are ours. Regions and services change; check current availability. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A successful cloud migration in Australia starts with a clear reason and a complete inventory (and, where AI services are involved, the controls in [[/blogs/ai-governance-australia|AI governance for Australian businesses]]), chooses an approach per workload, treats data location as a privacy question rather than a checkbox, and accepts that security and cost are your responsibility after the move. Migrate in tested waves, keep a way back, and govern costs from the first day. After the move, see [[/blogs/cloud-cost-optimization-australia|cloud cost optimisation]] to keep spend under control. After migrating, see [[/blogs/cloud-security-posture-review-australia|cloud security posture reviews]].",
        ],
        cta: {
          title: "Planning a move to the cloud?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications and cloud-hosted systems]]. If you are deciding what to move, rebuild or replace, we are happy to talk it through.",
        },
      },
    ],
  },
];
