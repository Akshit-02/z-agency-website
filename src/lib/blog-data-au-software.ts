import type { BlogPost } from "./blog-data";

/**
 * Australian software pair: custom software development and MVP development
 * for Australian businesses and startups. Differentiated from the generic
 * owners (wordpress-vs-custom-development-cost-of-ownership,
 * custom-website-vs-website-builder, build-vs-buy-ai-agents,
 * ai-product-idea-validation, website-development-for-startups,
 * product-design-process, vibe-coded-app-to-production) and from the UAE pair
 * (custom-software-vs-saas-uae, mvp-development-uae) by Australian decisions:
 * Xero, MYOB and Peppol integrations, Privacy Act coverage and APP 8, written
 * IP assignment under s196(3), GST, the R&D Tax Incentive (current rules vs
 * the proposed 2028 changes) and the paused Industry Growth Program.
 * Sources checked 2026-10-09: business.gov.au (R&D Tax Incentive eligibility;
 * Industry Growth Program); ATO (R&D reform page, GST registration, Peppol);
 * OAIC (small business, APP 8 guidelines, NDB statistics 2025); Home Affairs
 * ransomware payment reporting factsheet; ASD's ACSC (Essential Eight,
 * questions to ask managed service providers); AustLII (Copyright Act s196);
 * Business Victoria; Xero and MYOB developer portals; AWS, Azure and Google
 * Cloud region lists; AWS and Azure shared responsibility pages; AWS SaaS
 * Lens; OWASP Top 10:2025; Stripe global availability; Eric Ries, Startup
 * Lessons Learned (2009). Items marked as reported come from secondary
 * coverage. No figure here is ZSpace client data.
 */
export const auSoftwarePosts: BlogPost[] = [
  {
    slug: "custom-software-development-australia",
    title: "Custom Software Development in Australia: Costs, Process and Choosing a Partner",
    seoTitle: "Custom Software Development Australia: Costs & Process",
    excerpt:
      "Custom software development in Australia: when it pays off, the delivery process, Xero, MYOB and Peppol integrations, IP ownership, TCO and partner checks.",
    category: "Web Development",
    banner: "appprocess",
    sceneKind: "code",
    bannerAlt: "A custom software delivery pipeline running from discovery and architecture through build, integration with accounting systems, testing, launch and ongoing support",
    date: "2026-10-09",
    readingTime: "22 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["professional-services", "b2b-enterprise", "logistics-supply-chain", "construction-infrastructure", "healthcare-healthtech"],
    relatedSlugs: ["build-vs-buy-ai-agents", "vibe-coded-app-to-production", "product-design-process"],
    faqs: [
      {
        q: "What is custom software development?",
        a: "Custom software development is designing, building and running software for one organisation's specific workflows, rather than buying a product built for many customers. It can be a whole application, such as a job management portal, or a custom layer around off-the-shelf tools, such as an integration between a quoting system and Xero. The business funds the build and the upkeep, and in return controls the features, the data model and the roadmap.",
      },
      {
        q: "How much does custom software cost in Australia?",
        a: "We do not publish price ranges, because no neutral Australian benchmark exists and published figures are mostly vendor marketing. Cost is driven by the number of user roles and workflows, integrations, data migration, security and privacy requirements, testing depth and how much support you need after launch. Ask suppliers to price a defined discovery phase first, then estimate the build against the discovery outputs. Remember to compare quotes on the same basis, including or excluding GST.",
      },
      {
        q: "When is custom software not worth it?",
        a: "When a SaaS product already covers most of the workflow and the gap can be closed with configuration, a light integration or a process change. Custom software is also hard to justify for commodity functions such as payroll, general accounting or email, when the process is still changing every month, or when nobody in the business can own the product after launch. In those cases the running costs outlast the benefit.",
      },
      {
        q: "Who owns the code when we pay a developer in Australia?",
        a: "Paying for the work does not by itself transfer copyright. Under Australian copyright law, a contractor who writes code generally owns the copyright unless it is assigned, and section 196(3) of the Copyright Act 1968 says an assignment has no effect unless it is in writing and signed by or on behalf of the assignor. Get a written IP assignment in the contract, keep repositories in your own accounts and seek legal advice on the wording.",
      },
      {
        q: "Can custom software connect to Xero or MYOB?",
        a: "Yes. Xero publishes an accounting API and an Australian payroll API that use OAuth 2.0, and MYOB publishes the MYOB Business API among others on its developer portal. The real work is usually in mapping data: chart of accounts, tax codes, contacts, tracking categories and how corrections flow back. Agree which system is the source of truth for each record before any code is written.",
      },
      {
        q: "Does custom software have to follow the Essential Eight?",
        a: "For most private businesses, no. The Essential Eight is guidance published by ASD's Australian Cyber Security Centre, not a legal obligation for SMBs. It is still a useful baseline for the environment your software runs in, especially patching, multi-factor authentication, restricted admin privileges and backups. Separately, if your business is covered by the Privacy Act, you have legal obligations to protect personal information, which your software must support.",
      },
      {
        q: "Can custom software development qualify for the R&D Tax Incentive?",
        a: "Sometimes, but not simply because it is new software. business.gov.au describes core R&D activities as experimental activities whose outcome cannot be known in advance, and the program is open only to eligible companies with at least $20,000 of R&D expenditure in the income year. Routine development rarely qualifies. Changes announced in the 2026–27 Budget are proposals, not law. Take advice from a registered tax agent or R&D adviser before assuming eligibility.",
      },
      {
        q: "Should our software be hosted in Australia?",
        a: "Often it makes sense, and AWS, Microsoft Azure and Google Cloud all run Sydney and Melbourne regions. Hosting location is only part of the picture, though: support access, backups, logging tools and AI services can still send personal information overseas. If you are covered by the Privacy Act, APP 8 requires reasonable steps before disclosing personal information to an overseas recipient. Map every data flow, not just the main database.",
      },
    ],
    content: [
      {
        heading: "What does custom software development in Australia actually involve?",
        body: [
          "**Custom software development** means designing, building and maintaining software around your own workflows instead of adapting your business to a packaged product. For Australian businesses it pays off when a workflow is distinctive and valuable, when off-the-shelf tools cannot integrate cleanly with systems such as Xero or MYOB, or when owning the data model matters. Otherwise, configured SaaS is usually cheaper.",
          "This guide is written for owners, operations leads and product managers deciding whether to commission bespoke software, and how to run the project if they do. It covers the choice between SaaS, configurable SaaS, custom and hybrid; the cases where custom work is not justified; the delivery process; integrations that matter in Australia, including accounting platforms and Peppol eInvoicing; security and privacy; ownership of the code; costs and a total cost of ownership worksheet; the R&D Tax Incentive; and how to choose a partner.",
          "For generic depth on build-versus-buy economics, see our guides to [[/blogs/wordpress-vs-custom-development-cost-of-ownership|WordPress versus custom development cost of ownership]] and [[/blogs/build-vs-buy-ai-agents|building or buying AI agents]]. Facts are sourced, our recommendations are labelled as ours, and examples are hypothetical. Nothing here is legal, tax or financial advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Treat custom software as a long-term product, not a one-off purchase. Over several years, running costs can outweigh the build.",
          "Most good outcomes are hybrids: SaaS for commodity functions such as accounting and payroll, custom code for the workflow that sets you apart.",
          "Run a paid, time-boxed discovery before committing to a build price. It should produce user journeys, a data model, an integration map and a risk list.",
          "Agree the source of truth for every shared record before integrating with Xero, MYOB or other systems. Most integration defects are data-ownership defects.",
          "Paying a contractor does not transfer copyright. Under s196(3) of the Copyright Act 1968 an assignment must be in writing and signed.",
          "Keep repositories, cloud accounts, domains and credentials in accounts your business owns from day one.",
          "The Essential Eight is guidance, not law, for most private businesses. Privacy Act obligations, where they apply, are law.",
          "Current R&D Tax Incentive rules and the changes proposed from 1 July 2028 are different things. Take advice from a registered tax agent before counting on either.",
        ],
      },
      {
        heading: "SaaS, configurable SaaS, custom or hybrid?",
        body: [
          "Before talking to developers, be clear which of four options you are actually comparing. The labels below are ours, but the distinctions are practical: they decide who changes the software, who patches it and who owns the data model.",
        ],
        table: {
          headers: ["Option", "What it means", "Best when", "Watch for"],
          rows: [
            ["**SaaS as is**", "A subscription product used with its standard settings", "The process is common across your industry and you are happy to follow the product's way of working", "Per-user pricing growth, limited export, roadmap you do not control"],
            ["**Configurable SaaS**", "A platform you shape with fields, workflows, low-code rules and marketplace apps", "Most needs are standard, and the rest fit inside the platform's configuration limits", "Configuration sprawl that only one person understands; app add-on costs"],
            ["**Custom**", "Software built for your workflows, data model and integrations", "The workflow is distinctive, valuable and stable enough to specify", "Build and run costs, key-person risk, security and maintenance duties"],
            ["**Hybrid**", "SaaS for commodity functions plus a custom layer: a portal, integration or workflow engine", "Accounting, payroll and email are standard but one core process is not", "Integration upkeep when either side changes its API"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: list your top ten workflows and mark each as ‘same as competitors’ or ‘how we win’. Buy or configure the first group. Consider custom work only for the second, and only where the volume or value justifies running software for years.",
        },
      },
      {
        heading: "When custom development is not justified",
        body: [
          "Suppliers rarely lead with this section, so we will. Custom software is a commitment to fund a product indefinitely: hosting, security patches, dependency upgrades, integration changes and new features. If the benefit does not outlast those costs, do not build.",
          "**Signs you should not commission custom software yet:**",
        ],
        checklist: [
          "A SaaS product covers most of the workflow, and the gap can be closed with configuration, an integration or a small change to how people work.",
          "The function is commodity: general ledger, payroll, rostering, email marketing or a standard CRM. These products absorb regulatory change for you; Single Touch Payroll reporting to the ATO each pay day is one example of change you would otherwise have to track yourself.",
          "The process is still changing month to month. Software freezes a process; prove it on spreadsheets, forms or a configured tool first.",
          "Nobody in the business will own the product after launch: no one to prioritise changes, accept releases or answer users.",
          "The case rests on avoiding subscription fees alone. Over several years, custom maintenance can cost more than the licence it replaced.",
          "The real problem is data quality or training, which new software will not fix.",
          "You need it live in weeks for a fixed event, and a configured product could do the job.",
        ],
      },
      {
        heading: "The delivery process, from discovery to support",
        body: [
          "Well-run custom projects follow a similar sequence even when teams work in short iterations. Each stage has an output you can inspect. The diagram shows our recommended flow; the gates are decisions, not paperwork.",
        ],
        code: {
          label: "Custom software delivery flow with decision gates",
          text: `[1 Discovery] journeys, data model, integration map, risks
      |
   GATE A: build, configure SaaS, or stop?
      |
[2 Architecture] hosting region, auth, data flows, NFRs
      |
[3 Design] flows and prototypes tested with real users
      |
[4 Build in slices] one end-to-end workflow per release
      |      \\
      |   [Integrations] Xero/MYOB, Peppol access point,
      |                  payments, identity
      |
[5 Test] automated tests, UAT, security checks, data trial
      |
   GATE B: go-live criteria met?
      |
[6 Launch] staged rollout, data migration, hypercare
      |
[7 Run] patching, monitoring, backups, roadmap
      |
   GATE C (every 6-12 months): extend, keep, or retire?`,
        },
        callout: {
          type: "note",
          text: "The design stage deserves its own budget line. Our guide to the [[/blogs/product-design-process|product design process]] covers research, prototyping and usability testing in generic depth.",
        },
      },
      {
        heading: "Discovery: what it should produce",
        body: [
          "Discovery is a short, paid phase that turns an idea into something a team can estimate. A fixed build price without discovery is either padded for risk or likely to be renegotiated. Ask for discovery as a separate engagement with its own deliverables, so you can take the outputs to another supplier if you choose.",
          "**What a useful discovery delivers:** the users and roles; the end-to-end journeys for each role; a first data model, naming the records the system owns and the ones it only reads; an integration map with the direction and frequency of each data flow; non-functional requirements such as availability, response times, data retention and audit needs; a privacy assessment of personal information collected; a risk list; a release plan sliced by workflow; and an estimate with stated assumptions.",
          "**Questions discovery must answer for Australian businesses:** is the business an APP entity under the Privacy Act; will any personal information leave Australia, including through support tools; which accounting platform is the source of truth for invoices and contacts; will you send or receive eInvoices through Peppol; and who in the business will own the product after launch.",
          "If you are still testing whether the idea is worth building at all, the earlier step is validation, covered in [[/blogs/ai-product-idea-validation|our guide to product idea validation]] and, for new ventures, in [[/blogs/mvp-development-australia|MVP development for Australian startups]].",
        ],
      },
      {
        heading: "Architecture decisions that set your future costs",
        body: [
          "Architecture choices made in the first weeks decide how expensive the software is to change in year three. Our recommendation for most business applications is a well-structured single application (a modular monolith) on managed cloud services, with clear module boundaries, rather than microservices from the start.",
          "**Hosting region.** AWS runs Asia Pacific (Sydney), ap-southeast-2, with three Availability Zones enabled by default, and Asia Pacific (Melbourne), ap-southeast-4, which requires opt-in. Microsoft Azure runs Australia East in New South Wales with availability zones, paired with Australia Southeast in Victoria, and Google Cloud runs australia-southeast1 (Sydney) and australia-southeast2 (Melbourne). Choosing a local region is straightforward; the harder part is checking where logs, backups, email, analytics and AI services send data.",
          "**Cross-border data.** For businesses covered by the Privacy Act, APP 8 requires an entity, before disclosing personal information to an overseas recipient, to take reasonable steps to ensure the recipient does not breach the APPs, and the entity can remain accountable for the recipient's acts. The OAIC's guidelines note that some overseas cloud storage can be a ‘use’ rather than a ‘disclosure’ where a binding contract limits the provider's handling and the entity keeps effective control. Get advice on your own arrangements.",
          "**Shared responsibility.** Cloud providers secure the infrastructure; you secure what you build and configure on it. Microsoft states that for all cloud deployment types ‘you own your data and identities’. AWS describes its role as security ‘of’ the cloud and the customer's as security ‘in’ the cloud. Your contract with a developer should say who carries the customer side after launch.",
          "**Multi-tenancy.** If the software will later be sold to other businesses, the tenancy model matters early. AWS's SaaS Lens describes silo (dedicated resources per tenant), pool (shared resources) and bridge (a mix) models. Our guide to [[/blogs/saas-development-australia|SaaS development in Australia]] covers this in depth.",
        ],
      },
      {
        heading: "Integrations: Xero, MYOB, Peppol and the systems around them",
        body: [
          "For many Australian businesses the value of custom software is mostly in its integrations: quotes that become invoices without re-keying, jobs that update stock, payments that reconcile themselves. Integrations are also where budgets overrun, because each external system has its own data rules, limits and change schedule.",
          "**Accounting platforms.** Xero's developer platform offers an accounting API and an Australian payroll API using OAuth 2.0. MYOB's developer portal introduces the MYOB Business API alongside APIs for EXO, Acumatica and its Transactions product. Before building, confirm which product and edition the business actually runs, because API coverage differs between them.",
          "**Peppol eInvoicing.** The ATO is the Australian Peppol Authority. Businesses are generally identified on the network by their ABN, and they send and receive eInvoices through an accredited access point provider rather than connecting directly; only providers need ATO accreditation. B2B eInvoicing is voluntary. It matters most if you invoice Commonwealth entities: the Department of Finance's supplier pay-on-time policy (RMG 417) has been reported as requiring payment of eInvoices within 5 calendar days where both parties use Peppol, against 20 days for other invoices. Check the current policy before relying on it.",
          "**Other common connections.** Australia Post offers shipping and tracking APIs, which need an eParcel or StarTrack contract (reported from its developer centre). Payment providers, identity providers, CRMs and industry platforms each add their own work. Treat every integration as a small product with an owner.",
        ],
        table: {
          headers: ["Integration question", "Why it matters", "Decide before build"],
          rows: [
            ["Which system owns each record?", "Two systems editing the same contact or invoice produces conflicts", "One source of truth per record type"],
            ["What triggers a sync?", "Polling, webhooks and batch jobs fail differently", "Event, schedule and retry rules"],
            ["How are tax codes mapped?", "GST treatment must match between systems", "A reviewed mapping table, signed off by finance"],
            ["What happens when the other side is down?", "Lost or duplicated invoices are expensive to unwind", "Queues, idempotent writes and a reconciliation report"],
            ["Who renews tokens and API access?", "Expired OAuth connections fail silently", "Monitoring and a named owner"],
          ],
        },
        callout: {
          type: "note",
          text: "Our guide to [[/blogs/api-integration-australia|API integration in Australia]] covers integration patterns, retries and monitoring in more detail.",
        },
      },
      {
        heading: "Security and privacy: a baseline for custom software",
        body: [
          "Security is shared between the code, the hosting environment and the people who run it. A sensible baseline uses recognised references rather than a supplier's own checklist.",
          "**Application security.** The current edition of the OWASP Top 10 is the [[https://top10.owasp.org/2025|OWASP Top 10:2025]]. It keeps broken access control as the top risk and adds software supply chain failures and mishandling of exceptional conditions. Ask your developer how each category is addressed in design, code review and testing.",
          "**Environment security.** ASD's Australian Cyber Security Centre publishes the Essential Eight: patch applications, patch operating systems, multi-factor authentication, restrict administrative privileges, application control, restrict Microsoft Office macros, user application hardening and regular backups. It is guidance, not a legal obligation for most private businesses, and ASD defines maturity levels one to three. For software projects, the patching, MFA, admin privilege and backup strategies translate directly into hosting and deployment requirements.",
          "**Privacy.** The OAIC says most small businesses (annual turnover of $3 million or less) are not covered by the Privacy Act, but some are regardless of turnover, including health service providers and businesses that trade in personal information. If you are covered, the Australian Privacy Principles shape what your software collects, how it secures it and how people can access or correct it. Covered entities also fall under the Notifiable Data Breaches scheme; the OAIC reported 1,205 notifications in calendar 2025, the highest since the scheme began, with malicious or criminal attacks the largest cause.",
          "**Incident obligations.** Since 30 May 2025, businesses with annual turnover over AUD 3 million (per Home Affairs), and certain critical infrastructure entities, must report ransomware or cyber extortion payments within 72 hours of paying. Your runbook should name who makes that call.",
          "Our [[/blogs/website-security-australia|website security guide for Australian businesses]] covers hosting, patching and incident response in more depth. Nothing here is legal advice; check the OAIC and ASD's guidance for your situation.",
        ],
        checklist: [
          "Role-based access checks on every request, tested automatically",
          "MFA for all admin, hosting, repository and accounting-platform accounts",
          "Secrets in a managed vault, never in code or shared documents",
          "Dependency scanning and a patching schedule in the support agreement",
          "Audit logs for sign-ins, permission changes and data exports",
          "Encrypted, tested backups with a documented restore",
          "A data map showing where personal information is stored and sent",
        ],
      },
      {
        heading: "Testing and acceptance",
        body: [
          "Testing should be planned in discovery and paid for in the estimate, not squeezed in before launch. Agree what ‘done’ means for each release in writing.",
          "**Layers to expect:** unit tests for business rules such as pricing and GST calculations; integration tests against sandbox accounts for Xero, MYOB or payment providers; end-to-end tests for the main journeys; accessibility checks for any customer-facing screens; security testing proportionate to the data held; and a trial data migration using a copy of real records.",
          "**User acceptance testing (UAT)** is where your staff run their real tasks with realistic data and sign off. Give UAT named testers, scripted scenarios and time out of their normal work. UAT done only by the developer, or skipped under deadline pressure, removes the one check that uses the business's own knowledge of edge cases.",
          "If an early version was put together quickly with AI coding tools, read our guide to [[/blogs/vibe-coded-app-to-production|taking a vibe-coded app to production]] before going live; it covers the testing and hardening gaps those builds typically have.",
        ],
      },
      {
        heading: "Maintenance and support after launch",
        body: [
          "Launch is the start of the software's working life. Runtimes reach end of support, APIs change, browsers and phone operating systems update, and users find better ways to work. Budget for that from the start.",
          "**What a support agreement should define:** response and resolution targets by severity; hours of cover; who monitors uptime and errors; the patching schedule for dependencies and runtimes; how integration changes from Xero, MYOB or other vendors are handled; backup and restore testing; a monthly allowance for small improvements; and how larger changes are estimated.",
          "**Time zones.** If your supplier is offshore, check the overlap honestly. India Standard Time is UTC+5:30. Sydney and Melbourne are 4.5 hours ahead on AEST (UTC+10) and 5.5 hours ahead during daylight saving (AEDT, UTC+11); Brisbane stays 4.5 hours ahead all year. That leaves a workable shared morning in Australia, but out-of-hours incident cover needs to be written into the agreement.",
        ],
      },
      {
        heading: "Owning what you pay for: IP, repositories and escrow",
        body: [
          "Ownership is the clause most businesses read last and regret first. Software code is protected as a literary work under the Copyright Act 1968, and law-firm and Business Victoria guidance notes that a business paying a non-employee developer does not automatically own the code.",
          "Section 196(3) of the Act states: ‘An assignment of copyright (whether total or partial) does not have effect unless it is in writing signed by or on behalf of the assignor.’ Section 197 allows future copyright to be assigned, so a contract can assign code before it is written. In practice: get a written IP assignment, signed, covering all deliverables, with a clear carve-out list for the supplier's pre-existing tools and open-source components, and a licence for anything not assigned. Ask a lawyer to review the wording.",
          "**Source code escrow** is a three-party contract between the software vendor, the customer and an independent escrow agent, with code released on defined triggers such as supplier insolvency or failure to support. It is most useful when the supplier keeps the code, for example when you license a platform rather than own a bespoke build. If you own the repositories, escrow matters less.",
        ],
        checklist: [
          "Code repositories in your organisation's account, with the supplier added as members",
          "Cloud hosting, domains, DNS and email sending accounts in your name and billing",
          "Accounting, payment and API credentials issued to your business, not a developer",
          "Architecture notes, environment set-up and deployment steps documented in the repository",
          "A signed IP assignment and a licence for any retained supplier components",
          "A list of third-party and open-source licences used",
          "An exit clause covering handover, knowledge transfer and access removal",
        ],
      },
      {
        heading: "What drives the cost of custom software",
        body: [
          "We do not publish AUD price ranges. There is no neutral Australian survey of custom software costs, and the figures that circulate are mostly vendor marketing. What we can do is name the drivers, so you can compare quotes on the same basis and see where a lower price has removed something. Our [[/blogs/website-development-cost-australia|website development cost guide for Australia]] applies the same approach to websites.",
        ],
        table: {
          headers: ["Cost driver", "Pushes cost up", "Keeps cost down"],
          rows: [
            ["**Roles and permissions**", "Many roles with fine-grained rules", "Two or three roles with clear boundaries"],
            ["**Workflows**", "Many branching approval paths and exceptions", "One main path, exceptions handled manually at first"],
            ["**Integrations**", "Two-way sync with several systems, legacy systems without APIs", "One-way sync with well-documented APIs"],
            ["**Data migration**", "Years of inconsistent records from several sources", "A clean cut-over with limited history"],
            ["**Compliance and security**", "Health or financial data, audit trails, external testing", "Low-sensitivity data, standard controls"],
            ["**Interfaces**", "Web, iOS and Android apps, offline use", "One responsive web application"],
            ["**Reporting**", "Custom dashboards and exports for each team", "A small set of agreed reports plus export"],
            ["**Support level**", "Extended hours, fast response targets", "Business hours, standard targets"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Quotes for custom work in Australia should state whether they include GST. GST is 10% on most taxable supplies, per the ATO. If one quote is GST-inclusive and another is not, the cheaper-looking one may not be cheaper.",
        },
      },
      {
        heading: "Total cost of ownership worksheet",
        body: [
          "Compare options over the period you expect to use them, not just the build. The worksheet below uses formulas only. Fill in your own quotes; we have deliberately left out prices. Run it for each option (SaaS, configurable SaaS, custom, hybrid) over the same period, and decide consistently whether to work in GST-exclusive amounts.",
        ],
        code: {
          label: "TCO worksheet (enter your own figures; N = years)",
          text: `ONE-OFF COSTS
  D  = discovery
  B  = design and build
  M  = data migration and cleansing
  T  = training and change management
  One-off = D + B + M + T

RECURRING COSTS (per year)
  H  = hosting and managed services
  L  = SaaS licences x users (SaaS and hybrid)
  S  = support and maintenance agreement
  I  = integration upkeep (API changes, tokens)
  E  = enhancements budget
  K  = internal product owner time x hourly cost
  Recurring = H + L + S + I + E + K

TCO over N years = One-off + (Recurring x N)

BENEFIT (per year, be conservative)
  Hours saved x loaded hourly cost
  + errors avoided x cost per error
  + revenue enabled (only if evidenced)

GST: add 10% to taxable items if comparing
inclusive prices; keep all options on one basis.`,
        },
        callout: {
          type: "tip",
          text: "Our recommendation: count internal product owner time (K) honestly. Custom software without someone in the business prioritising and accepting changes tends to drift, and that cost does not appear on any supplier's quote.",
        },
      },
      {
        heading: "The R&D Tax Incentive: current rules and proposed changes",
        body: [
          "Founders and finance teams often ask whether a custom software project can be claimed under the Research and Development Tax Incentive. It is possible, but software is an area where eligibility needs particular care.",
          "**Current rules (as published).** business.gov.au states that the incentive is for companies: Australian-incorporated companies, or foreign companies that are Australian tax residents or have a permanent establishment. R&D expenditure for the income year must generally be at least $20,000. Core R&D activities are experimental activities whose outcome cannot be known in advance; supporting activities must be directly related to core activities; and activities must be registered. Accounting firms report that companies with turnover under $20 million can receive a refundable offset at their company tax rate plus 18.5 percentage points, with a non-refundable offset for larger companies.",
          "**Proposed changes (not law).** business.gov.au says changes announced in the 2026–27 Budget ‘will start from 1 July 2028’. Coverage by accounting and law firms reports that the proposal would exclude supporting activities, raise the core R&D premiums, lift the refundable turnover threshold from $20 million to $50 million, raise the minimum spend from $20,000 to $50,000, and limit refundability to a company's first ten years. Treasury released exposure drafts in September 2026, according to PwC. These are announced proposals and may change before, or if, they are legislated.",
          "**What this means for a software project.** Building a portal, integrating Xero or configuring workflows using known techniques is unlikely to be core R&D on its own. A genuinely uncertain technical question, tested through a planned experiment, may be. Keep contemporaneous records of hypotheses, experiments and results either way, and take advice from a registered tax agent or R&D adviser before you build the incentive into a business case.",
        ],
      },
      {
        heading: "Choosing a development partner",
        body: [
          "A partner's portfolio tells you what they have built; their process tells you what yours will be like. Our full checklist is in [[/blogs/web-development-company-australia|choosing a web development company in Australia]]. For custom software, five questions separate suppliers quickly.",
        ],
        checklist: [
          "Will you run a paid discovery with deliverables we own, before quoting the build?",
          "Who exactly will work on our project, and what happens if they leave?",
          "How do you test, review code and manage security, with reference to the OWASP Top 10?",
          "Will repositories, cloud accounts and credentials sit in our accounts, with a written IP assignment?",
          "What does support cost after launch, and how do you handle changes from Xero, MYOB or other vendors?",
        ],
        callout: {
          type: "tip",
          text: "If the supplier will also manage your hosting, the ACSC's ‘questions to ask managed service providers’ are a useful addition: whether they implement better-practice security such as the Essential Eight, administer systems securely, monitor activity, assess systems regularly, and can respond to incidents.",
        },
      },
      {
        heading: "Hypothetical examples",
        body: [
          "**Hypothetical: a trades business with job management.** A building services company with a few dozen field staff uses a job management SaaS, Xero and spreadsheets for quoting. The quoting rules are distinctive and drive margin, but scheduling and invoicing are standard. A sensible outcome is hybrid: keep the job management product and Xero, and build a small custom quoting tool that pushes approved quotes into both. The full replacement a supplier proposed would have rebuilt commodity functions at a higher running cost.",
          "**Hypothetical: an allied health network.** A group of clinics wants a referral portal for GPs. Because health service providers are covered by the Privacy Act regardless of turnover, discovery prioritises a data map, hosting in an Australian region, audit logs and a check on every overseas tool in the support stack under APP 8. The build is modest; most of the effort sits in privacy design and testing.",
          "**Hypothetical: a distributor selling to government.** A wholesale supplier invoices several Commonwealth agencies from MYOB. Rather than custom software, the first step is enabling Peppol eInvoicing through an accredited access point that works with its accounting product. Custom work is limited to a reconciliation report. Sometimes the right amount of custom software is very little.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Asking for a fixed build price before discovery, then paying for the uncertainty in change requests.",
          "Rebuilding commodity functions such as accounting or payroll instead of integrating with products that already handle Australian requirements.",
          "Leaving repositories and cloud accounts in the developer's name, with no written IP assignment.",
          "Choosing an Australian hosting region and assuming that settles privacy, while logs, support tools and AI services send data overseas.",
          "Budgeting for the build but not for support, patching and integration changes.",
          "Treating proposed R&D Tax Incentive changes as if they were law, or assuming routine development qualifies.",
          "Skipping user acceptance testing with real staff and real data.",
          "Adding AI features without a clear use case or cost model; our guides to [[/blogs/ai-implementation-australia|AI implementation]] and [[/blogs/ai-automation-cost-australia|AI automation costs in Australia]] cover how to scope them.",
        ],
      },
      {
        heading: "How this fits into your wider plan",
        body: [
          "Custom software is one part of a broader product decision. Our pillar guide to [[/blogs/digital-product-development-australia|digital product development in Australia]] shows how websites, apps, SaaS and internal tools fit together. If the custom software is customer-facing and replaces a marketing site, compare the trade-offs in [[/blogs/custom-website-vs-website-builder|custom websites versus website builders]]. If you are a startup, [[/blogs/website-development-for-startups|website development for startups]] covers what to build first.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Integrations:** [[https://developer.xero.com/documentation/|Xero developer documentation]]; [[https://developer.myob.com/|MYOB developer portal]]; [[https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-peppol/identifying-australian-businesses-on-the-peppol-network|ATO, identifying Australian businesses on the Peppol network]]; [[https://www.finance.gov.au/publications/resource-management-guides/supplier-pay-time-or-pay-interest-policy-rmg-417|Department of Finance, supplier pay on-time or pay interest policy (RMG 417)]]; [[https://developers.auspost.com.au/|Australia Post developer centre]]; [[https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/single-touch-payroll/what-is-stp|ATO, what is Single Touch Payroll]].",
          "**Security and privacy:** [[https://top10.owasp.org/2025|OWASP Top 10:2025]]; [[https://www.cyber.gov.au/sites/default/files/2023-11/PROTECT%20-%20Essential%20Eight%20Maturity%20Model%20(November%202023).pdf|ASD, Essential Eight Maturity Model (November 2023)]]; [[https://www.cyber.gov.au/business-government/supplier-cyber-risk-management/managed-service-providers/questions-to-ask-managed-service-providers|ACSC, questions to ask managed service providers]]; [[https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business|OAIC, small business and the Privacy Act]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP guidelines chapter 8]]; [[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC, NDB statistics for 2025]]; [[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs, ransomware payment reporting factsheet]].",
          "**Cloud:** [[https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html|AWS Regions]]; [[https://learn.microsoft.com/en-us/azure/reliability/regions-list|Microsoft Azure regions list]]; [[https://docs.cloud.google.com/compute/docs/regions-zones|Google Cloud regions and zones]]; [[https://aws.amazon.com/compliance/shared-responsibility-model/|AWS shared responsibility model]]; [[https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility|Microsoft, shared responsibility in the cloud]]; [[https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html|AWS SaaS Lens, silo, pool and bridge models]].",
          "**Ownership:** [[https://www6.austlii.edu.au/au/legis/cth/consol_act/ca1968133/s196.html|Copyright Act 1968 s196 (AustLII)]]; [[https://hub.business.vic.gov.au/legal/4-intellectual-property-considerations-for-software-ownership/|Business Victoria, IP considerations for software ownership]].",
          "**Tax:** [[https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/check-if-you-are-eligible-for-the-randd-tax-incentive|business.gov.au, R&D Tax Incentive eligibility]]; [[https://www.ato.gov.au/about-ato/new-legislation/in-detail/businesses/tax-reform-better-targeting-the-research-and-development-tax-incentive|ATO, better targeting the R&D Tax Incentive (proposed)]]; [[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst|ATO, registering for GST]].",
          "Items described as reported come from secondary coverage rather than the regulator's own page. Rules, thresholds and API coverage change; re-check before relying on them. Nothing here is ZSpace client data, and nothing is legal or tax advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Custom software development in Australia earns its cost when it supports a workflow that is distinctive, valuable and stable, and when it is planned as a product with an owner, a support budget and clear ownership of the code. Start with a paid discovery, keep commodity functions on SaaS, design integrations around a single source of truth, build to recognised security and privacy baselines, and make sure every repository and account is yours.",
          "Equally, be willing to conclude that you should not build. A configured product, a small integration or a process change is often the better investment, and a good partner will tell you so.",
        ],
        cta: {
          title: "Weighing up a custom build?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications and custom software]] and [[/services/mobile-app-development|mobile apps]]. If a second opinion on scope, architecture or whether to build at all would help, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "mvp-development-australia",
    title: "MVP Development for Australian Startups: Validate, Build and Launch",
    seoTitle: "MVP Development Australia: Validate, Build, Launch",
    excerpt:
      "MVP development for Australian startups: customer research, assumption mapping, scope, architecture, analytics, launch, R&D Tax Incentive and GST basics.",
    category: "Web Development",
    banner: "cycle",
    sceneKind: "roadmap",
    bannerAlt: "A learning loop for a startup MVP moving from customer research and riskiest assumptions through prototype, build, launch and analytics, then back to the next decision",
    date: "2026-10-09",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "saas-technology", "fintech", "healthcare-healthtech", "education-edtech"],
    relatedSlugs: ["ai-product-idea-validation", "website-development-for-startups", "user-research-methods"],
    faqs: [
      {
        q: "What is a minimum viable product?",
        a: "Eric Ries defined the minimum viable product in 2009 as the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort. The emphasis is on learning. An MVP is the smallest working product that can answer your riskiest question with real users, built well enough that users who try it can actually succeed with it.",
      },
      {
        q: "How long does it take to build an MVP in Australia?",
        a: "We do not quote generic timelines, because duration depends on factors that vary widely: how much validation is already done, the number of user roles, integrations such as payments or accounting platforms, whether you need native apps or a web app, the data you hold and how quickly the founders can make decisions. A credible supplier will estimate after a short discovery, phase by phase, rather than promising a single number.",
      },
      {
        q: "How much does MVP development cost?",
        a: "There is no reliable neutral benchmark for MVP costs in Australia, and published ranges are mostly agency marketing. The cost follows the scope: user roles, screens and flows, integrations, platforms, privacy and security requirements, analytics and support after launch. Cutting the scope to one core job done well is the most effective way to control cost. Compare quotes on the same basis, including whether GST is included.",
      },
      {
        q: "Can MVP development be claimed under the R&D Tax Incentive?",
        a: "Some MVP work may involve eligible R&D, but much of it will not. business.gov.au describes core R&D activities as experimental activities whose outcome cannot be known in advance, and requires the claimant to be an eligible company with at least $20,000 of R&D expenditure in the year. Building features with known techniques is generally not core R&D. Changes proposed from 1 July 2028 are not law. Take advice from a registered tax agent or R&D adviser.",
      },
      {
        q: "Does a startup MVP need to comply with the Privacy Act?",
        a: "It depends. The OAIC says most small businesses with annual turnover of $3 million or less are not covered, but some are covered regardless of turnover, including health service providers and businesses that trade in personal information. Check the OAIC's small business guidance to see whether the Act applies to you. Either way, a clear privacy notice and careful handling of personal data build trust with early users.",
      },
      {
        q: "Should our MVP be a web app or a mobile app?",
        a: "Choose the platform your first users already use for this job, and the one that lets you change the product fastest. A responsive web app avoids app store review and ships updates instantly, which suits fast iteration. A native or cross-platform app makes sense when the product depends on device features such as offline use, background location, push notifications or camera-heavy workflows, or when users expect to find it in an app store.",
      },
      {
        q: "Do we need to register for GST before launching an MVP?",
        a: "Not necessarily. The ATO's registration threshold is GST turnover of A$75,000 (A$150,000 for non-profits), and you can choose to register below it. Once you charge GST, your pricing and invoices need to reflect it, which affects payment set-up. Talk to your accountant about when to register; this is general information, not tax advice.",
      },
      {
        q: "Is the Industry Growth Program available for MVP funding?",
        a: "As at 9 October 2026, business.gov.au says the Industry Growth Program is paused to new applications. When open, its published grant streams have covered early-stage commercialisation and growth, with eligibility conditions including turnover limits, an ABN and GST registration. Check business.gov.au for its current status rather than planning an MVP budget around it.",
      },
    ],
    content: [
      {
        heading: "What does MVP development look like for an Australian startup?",
        body: [
          "**MVP development** is building the smallest working product that tests your riskiest assumption with real customers, then using what you learn to decide what to build next. For Australian startups, the practical sequence is: talk to customers, prove the problem, map assumptions, prototype, build one complete job, launch to a small cohort, measure, and iterate. Funding, tax and privacy checks run alongside.",
          "Eric Ries, who popularised the term, defined the minimum viable product in 2009 as the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort. That definition puts learning first. An MVP is not version one of your full roadmap with pieces missing; it is an instrument for answering a question.",
          "This guide follows the work in order, from customer research to iteration, and adds the Australian context that changes decisions: the R&D Tax Incentive and its proposed changes, the paused Industry Growth Program, payments, GST and privacy. For generic depth on validating ideas, see our guide to [[/blogs/ai-product-idea-validation|product idea validation]]; for what a startup's first website should do, see [[/blogs/website-development-for-startups|website development for startups]]. Examples are hypothetical, and nothing here is legal, tax or financial advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Write down the one question your MVP must answer before you scope any features.",
          "Validate the problem with evidence of behaviour (workarounds, spending, commitments), not compliments.",
          "Prioritise with an assumption map: build first what tests the most important assumption you have the least evidence for.",
          "Use the cheapest prototype that answers the question; code only what needs real use to test.",
          "An MVP is narrow, not unfinished. The one job it does must work reliably and securely.",
          "Define activation, retention and the decision thresholds before launch, not after.",
          "R&D Tax Incentive rules for software need care, and the 2028 changes are proposals. The Industry Growth Program is currently paused.",
          "Stripe supports Australian businesses; GST registration is required at A$75,000 GST turnover, per the ATO.",
        ],
      },
      {
        heading: "A useful MVP versus an unfinished product",
        body: [
          "The most common MVP failure is not building too little; it is shipping something that looks like a product but cannot produce a clear answer. If users drop off because sign-up breaks, you learn about the bug, not the idea. The table contrasts the two by what each produces.",
        ],
        table: {
          headers: ["Question", "Useful MVP", "Unfinished product"],
          rows: [
            ["**What is it for?**", "Answers one written question about customer behaviour", "Shows progress to investors or the team"],
            ["**Who is it for?**", "One defined segment with a specific problem", "Everyone who might one day use it"],
            ["**What does a user get?**", "One job completed end to end, without help", "Several half-built features and placeholders"],
            ["**Is it dependable?**", "Data is saved, sign-in works, errors are handled", "Works when the founder demonstrates it"],
            ["**Is it safe?**", "Access checks, secrets out of code, backups, a privacy notice", "Shared admin logins and test data in production"],
            ["**What does it produce?**", "Events and feedback tied to the question", "Page views and opinions"],
            ["**What happens next?**", "A pre-agreed decision: continue, change direction or stop", "More features, by default"],
          ],
        },
        callout: {
          type: "note",
          text: "If your first version was assembled quickly with AI coding tools, our guide to [[/blogs/vibe-coded-app-to-production|taking a vibe-coded app to production]] explains how to close the reliability and security gaps before real users arrive.",
        },
      },
      {
        heading: "Customer research that changes decisions",
        body: [
          "Customer research for an MVP has one purpose: to replace guesses with evidence before you spend on code. Talk to people in the segment you intend to serve first, and ask about what they did, not what they would do.",
          "**Recruit narrowly.** Ten conversations with operations managers at small freight forwarders tell you more than thirty with ‘small business owners’. Specific segments produce specific answers, and they also show whether your segment is reachable, which matters as much as whether it is interested.",
          "**Ask about the past.** ‘Tell me about the last time you had to do this’ beats ‘Would you use an app that…’. Listen for how often the problem happens, what it costs, what they use today and who else is involved in the decision to change.",
          "**Record what you hear in a consistent format.** After each conversation, log the segment, the trigger, the current workaround, the cost of the problem in time or money, and any commitment offered. Patterns show up quickly when notes share a structure.",
          "Our guide to [[/blogs/user-research-methods|user research methods]] compares interviews, surveys, diary studies and observation in generic depth.",
        ],
      },
      {
        heading: "Validating the problem: an evidence ladder",
        body: [
          "Founders often stop at ‘people said it was a problem’. We use a simple ladder to judge how strong the evidence is. The higher the rung, the more confident you can be that a product will be used. This is our practitioner framework, not a published standard.",
        ],
        table: {
          headers: ["Rung", "Evidence", "What it tells you"],
          rows: [
            ["**1. Stated pain**", "People agree the problem exists when asked", "Very little on its own; politeness inflates it"],
            ["**2. Recent episode**", "They describe a specific recent occurrence in detail", "The problem is real and recurring for them"],
            ["**3. Workaround**", "They have built a spreadsheet, hired help or stitched tools together", "The problem matters enough to act on"],
            ["**4. Spend**", "They already pay for a partial solution, in money or staff time", "There is a budget you could redirect"],
            ["**5. Commitment**", "They join a waitlist with details, book a pilot, pre-pay or sign a letter of intent", "They are willing to change behaviour for your solution"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: do not start building until several people in your target segment have reached rung 3 or above. If no one has a workaround, the problem may not be painful enough to change their behaviour.",
        },
      },
      {
        heading: "Prioritising features with an assumption map",
        body: [
          "Feature lists invite argument; assumptions invite tests. Instead of ranking features directly, list the assumptions your business depends on, then pick the features that test the riskiest ones. This is a practitioner method that combines assumption mapping with an impact and effort check.",
          "**Step 1: list assumptions in four groups.** Desirability (customers want this), viability (they will pay enough, and you can reach them affordably), feasibility (you can build and run it) and compliance (you can do it lawfully, for example handling health information or payments).",
          "**Step 2: plot each assumption on two axes.** How important is it (if wrong, does the business fail?) and how much evidence do you have? The top-left quadrant, important with little evidence, holds your riskiest assumptions. Pick one, or at most two, for the MVP to test.",
          "**Step 3: trace features to assumptions.** For every candidate feature, write which assumption it tests or which job it makes possible. A feature that tests nothing and is not needed to complete the core job goes on the ‘not now’ list.",
          "**Step 4: check impact and effort.** For the features that remain, estimate learning impact and build effort as high or low. Build high-impact, low-effort items first; question high-effort items hard and look for a manual or no-code substitute.",
        ],
        code: {
          label: "Assumption map (hypothetical B2B scheduling product)",
          text: `                 LITTLE EVIDENCE   |   STRONG EVIDENCE
               --------------------+--------------------
  IMPORTANT    | TEST IN THE MVP   | Build on it
               | - Clinic managers | - Rostering takes
               |   will switch from|   hours each week
               |   spreadsheets    |   (interviews)
               | - They will pay   |
               |   per location    |
               --------------------+--------------------
  LESS         | Park it           | Ignore for now
  IMPORTANT    | - Staff want a    | - Users prefer
               |   mobile app      |   email alerts
               --------------------+--------------------`,
        },
        table: {
          headers: ["Candidate feature", "Assumption tested", "Impact", "Effort", "Decision"],
          rows: [
            ["Import roster from spreadsheet", "Managers will switch from spreadsheets", "High", "Low", "**Build**"],
            ["Stripe subscription per location", "They will pay per location", "High", "Low", "**Build**"],
            ["Native staff app", "Staff want a mobile app", "Low", "High", "**Not now:** responsive web"],
            ["Payroll export to Xero", "None for now; useful later", "Low", "Medium", "**Not now:** CSV export"],
            ["Automatic shift suggestions", "None yet; tests a later assumption", "Medium", "High", "**Not now:** manual by founder"],
          ],
        },
      },
      {
        heading: "Prototyping: the cheapest test that answers the question",
        body: [
          "Not every assumption needs working code. Match the prototype to the type of question, and only move to code when the question needs real use over time. Our guide to the [[/blogs/product-design-process|product design process]] covers the design side in more depth, and [[/blogs/usability-testing|usability testing]] explains how to run sessions.",
          "**Will they understand it?** Use a clickable prototype and moderated sessions with five or so users from the segment. You learn where they hesitate, misread labels or expect a different next step.",
          "**Will they want it?** Use a landing page with a specific offer and a sign-up that asks for real details, or a sales conversation with a pricing page. Measure commitments, not visits.",
          "**Will it work for them in practice?** Run the service manually behind a simple interface (often called a concierge or Wizard-of-Oz test). The founder does the work the software will later automate, which reveals the real process before you code it.",
          "**Will they keep using it?** This is the question that needs a coded MVP: repeated use over weeks, with real data, cannot be faked convincingly.",
        ],
      },
      {
        heading: "Setting the MVP scope",
        body: [
          "Write a one-paragraph scope statement before any estimate. It should name the segment, the single job, the question the MVP answers, the signal you will measure and what is explicitly out of scope.",
          "**Example scope statement (hypothetical):** ‘For practice managers at multi-location physiotherapy clinics, the MVP lets a manager build and publish a weekly roster from an imported spreadsheet and charges per location through Stripe. It answers: will managers switch from spreadsheets and pay per location? We will measure rosters published per clinic per week across the first cohort. Out of scope: native apps, payroll integration, automated shift suggestions.’",
          "**Non-negotiables inside the scope:** sign-in that works, role checks on every request, data that is saved and backed up, errors that are handled and logged, a privacy notice, a support channel with an owner, and analytics events for the core job. These are not extras; without them the MVP cannot produce a trustworthy answer.",
        ],
      },
      {
        heading: "Technical architecture for an MVP",
        body: [
          "MVP architecture should be boring, managed and easy to change. Our recommendation for most startups is a single application on a mainstream framework, a managed relational database, a hosted authentication service and managed payments, deployed to one cloud region with automated deployments from day one.",
          "**Web, app or both?** A responsive web app is usually the fastest way to learn, because updates ship immediately and there is no app store review. Choose native or cross-platform when the job depends on device capabilities. Our guides to [[/blogs/native-vs-cross-platform-app-development|native versus cross-platform development]] and [[/blogs/pwa-vs-native-app|PWAs versus native apps]] cover the trade-offs.",
          "**Hosting.** AWS (Sydney and Melbourne), Microsoft Azure (Australia East and Southeast) and Google Cloud (Sydney and Melbourne) all run Australian regions. Hosting close to users helps response times, and keeps your data map simple if you later need to address APP 8 on cross-border disclosure.",
          "**Payments.** Stripe lists Australia as a supported country on its global availability page. Using a hosted checkout or payment element keeps card data off your servers, which reduces your security scope.",
          "**Plan for the next stage, but do not build it.** If you expect to sell to many businesses, keep tenant identifiers in your data model from the start; our guide to [[/blogs/saas-development-australia|SaaS development in Australia]] explains tenancy models. If you expect integrations with Xero, MYOB or other systems, keep a clean internal API; see [[/blogs/api-integration-australia|API integration in Australia]].",
          "**AI features.** If the MVP depends on an AI model, treat model cost and accuracy as assumptions to test. Our guide to [[/blogs/ai-automation-cost-australia|AI automation costs in Australia]] explains the cost drivers, and [[/blogs/build-vs-buy-ai-agents|building versus buying AI agents]] covers when to use an off-the-shelf tool instead.",
        ],
      },
      {
        heading: "Analytics: decide what you will measure before launch",
        body: [
          "An MVP without analytics produces opinions. Define the events that show whether a user reached value, and the thresholds that will trigger each decision, before the first user signs up. Write the thresholds down with your co-founders or advisers so they cannot quietly move later.",
          "**Activation** is the first moment a user gets the value you promised, such as publishing a first roster. **Retention** is whether they come back to do it again at the natural frequency of the job. **Commitment** is payment, an upgrade or a renewal. Page views and sign-ups alone tell you little.",
        ],
        code: {
          label: "Minimal event plan (hypothetical rostering MVP)",
          text: `account_created      { clinic_id, role, source }
roster_imported      { clinic_id, rows, errors }
roster_published     { clinic_id, week, staff_count }
staff_viewed_roster  { clinic_id, staff_id, channel }
subscription_started { clinic_id, locations, plan }
support_requested    { clinic_id, topic }

Decision metrics (set before launch):
  Activation = clinics publishing a roster in week 1
  Retention  = clinics publishing in 3 of first 4 weeks
  Commitment = clinics on a paid plan after the trial`,
        },
        callout: {
          type: "note",
          text: "Keep personal information out of analytics events where you can: use internal IDs, not names or emails. Our guide to [[/blogs/mobile-app-analytics|mobile app analytics]] covers event design in more depth.",
        },
      },
      {
        heading: "Launching: cohort, app stores and the basics",
        body: [
          "Launch to a small, known cohort first: the people from your research who reached the higher rungs of the evidence ladder. A private cohort lets you support users personally, fix problems quickly and learn without public reviews shaping the story.",
          "**App stores.** If you ship a native app, allow for store review and for each store's policies on payments, privacy disclosures and account deletion, and check the current guidelines from Apple and Google before you design those flows. A web MVP can still be offered to early users while the app is in review.",
          "**Privacy.** The OAIC says most small businesses with annual turnover of $3 million or less are not covered by the Privacy Act, but some are covered regardless of turnover, including health service providers and businesses trading in personal information. Check the OAIC's small business guidance to see whether the Act applies to you, and publish a clear privacy notice either way.",
          "**GST and invoices.** The ATO's GST registration threshold is A$75,000 of GST turnover (A$150,000 for non-profits). GST is 10% on most taxable supplies. If you will charge GST, set up your pricing, Stripe tax settings and invoices accordingly; ask your accountant when to register.",
          "**Security basics.** Even a small MVP holds credentials and personal data. Our [[/blogs/website-security-australia|website security guide for Australian businesses]] covers the essentials, from MFA on admin accounts to backups.",
        ],
      },
      {
        heading: "Feedback and iteration",
        body: [
          "After launch, the job is to learn quickly without thrashing. Combine three inputs each week: the event data against your decision metrics, short conversations with active and inactive users, and the support log.",
          "**Run a weekly learning review.** Ask: what did we expect, what happened, what do we now believe, and what is the next smallest test? Record the answer in a decision log, so later debates can refer back to evidence.",
          "**Fix the core job before adding features.** If activation is low, the problem is usually onboarding or the core flow, not missing features. If activation is good but retention is weak, revisit whether the problem is frequent enough. If retention is good but nobody pays, revisit the buyer and the pricing.",
          "**Know when to stop.** Agree in advance what result would make you change direction or stop. A clear ‘no’ reached cheaply is a successful MVP.",
        ],
      },
      {
        heading: "Australian funding, tax and payments context",
        body: [
          "Several Australian programs and rules affect how founders plan and fund an MVP. None of this is tax or financial advice; use it to prepare questions for your accountant or adviser.",
          "**R&D Tax Incentive: current rules.** business.gov.au states that the incentive is open to companies (Australian-incorporated, or foreign companies that are Australian tax residents or have a permanent establishment), that R&D expenditure for the income year must generally be at least $20,000, and that core R&D activities are experimental activities whose outcome cannot be known in advance. Accounting firms report that companies with turnover under $20 million can receive a refundable offset at their company tax rate plus 18.5 percentage points.",
          "**R&D Tax Incentive: proposed changes, not law.** business.gov.au says changes announced in the 2026–27 Budget will start from 1 July 2028. Coverage by accounting and law firms reports that they would, among other things, exclude supporting activities, raise the minimum spend to $50,000, lift the refundable turnover threshold to $50 million and limit refundability to a company's first ten years. Exposure drafts were released in September 2026, according to PwC. Plan on the current rules and treat the proposal as uncertain.",
          "**Software R&D needs care.** Building an MVP with established frameworks and known techniques is generally not experimental in the sense the program describes. A genuine technical uncertainty, investigated through a planned experiment, may be. Keep records of hypotheses, experiments and results as you go, and take advice from a registered tax agent or R&D adviser before assuming any claim.",
          "**Industry Growth Program.** As at 9 October 2026, business.gov.au says the program is ‘currently paused to new applications’. Its published streams have offered Early-Stage Commercialisation grants of $50,000 to $250,000 and Commercialisation and Growth grants of $100,000 to $5 million, with eligibility including turnover under $20 million in each of the prior three years, an ABN and GST registration. Do not plan an MVP budget around it while it is paused.",
          "**Payments.** Stripe lists Australia as a supported country, which makes subscriptions and one-off payments straightforward to add to an MVP.",
        ],
      },
      {
        heading: "An MVP roadmap with exit criteria",
        body: [
          "Each phase ends with evidence, not a date. We deliberately do not attach durations or prices; they depend on the drivers in the next section. Move forward only when the exit criteria are met, and be prepared to loop back.",
        ],
        table: {
          headers: ["Phase", "Main question", "Key activities", "Exit criteria"],
          rows: [
            ["**1. Frame**", "Which segment, which problem, which question?", "Segment definition, interview plan, assumption list", "One written question and a named segment you can reach"],
            ["**2. Evidence**", "Is the problem real and painful?", "Interviews, evidence ladder, competitor and workaround review", "Several prospects at rung 3 or higher; riskiest assumption identified"],
            ["**3. Prototype**", "Do they understand and want our solution?", "Clickable prototype, concierge test, offer page", "Users complete the key flow unaided; some commit time, data or money"],
            ["**4. Build**", "Can we deliver the core job reliably?", "Scope statement, architecture, event plan, security basics, privacy notice", "Core job works end to end; events firing; backups and support in place"],
            ["**5. Cohort launch**", "Do they use it repeatedly?", "Private launch, onboarding, weekly learning review", "Pre-agreed activation and retention thresholds met, or a clear negative result"],
            ["**6. Decide**", "Scale, change direction or stop?", "Decision log review, architecture review, funding options", "A documented decision with the evidence behind it"],
          ],
        },
      },
      {
        heading: "What drives MVP cost and timeline",
        body: [
          "We do not publish MVP price ranges or timelines, because no neutral Australian benchmark exists and scope varies too much for a single figure to help. These drivers explain most of the difference between quotes. Our [[/blogs/website-development-cost-australia|website development cost guide for Australia]] covers how to compare proposals.",
        ],
        checklist: [
          "Validation already done: a well-evidenced brief shortens design and avoids rework.",
          "User roles: each role adds screens, permissions and test cases.",
          "Platforms: one responsive web app costs less than web plus iOS and Android.",
          "Integrations: payments, accounting platforms, identity, messaging or industry systems each add build and test work.",
          "Data sensitivity: health, financial or children's data raises privacy and security effort.",
          "Design depth: a design system and polished visuals versus a clean, standard interface.",
          "AI features: model costs, evaluation and fallbacks are extra work if the product depends on them.",
          "Decision speed: slow feedback from founders stretches every phase.",
          "Post-launch support: monitoring, fixes and iteration capacity after the first release.",
        ],
      },
      {
        heading: "Hypothetical example: a rostering MVP for allied health clinics",
        body: [
          "**Hypothetical.** Two founders want to replace spreadsheet rostering for multi-location physiotherapy clinics. Interviews show practice managers spend significant time each week on rosters and several have built elaborate spreadsheets (rung 3). Two clinic groups agree to a paid pilot if it works (rung 5).",
          "Their assumption map flags two risky assumptions: that managers will switch from spreadsheets, and that clinics will pay per location. The MVP is a responsive web app that imports a spreadsheet, lets a manager publish a roster and charges per location through Stripe. A native staff app, Xero payroll export and automatic shift suggestions go on the ‘not now’ list.",
          "Because the founders are a company planning a technically routine product, they keep records but treat any R&D claim as unlikely until their tax agent says otherwise. They check the OAIC's guidance on whether the Privacy Act applies, since the product will hold staff details and they plan to sell to health providers. After the cohort launch, activation is strong but retention dips in week three; interviews reveal that rosters change mid-week, so the next iteration adds shift swaps instead of the planned mobile app.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building before anyone in the target segment has shown a workaround, spend or commitment.",
          "Treating ‘minimum’ as permission to skip security, backups or error handling.",
          "Scoping by feature wish list instead of by the riskiest assumption.",
          "Building native apps first when a web app would answer the question faster.",
          "Launching without analytics events or pre-agreed decision thresholds.",
          "Counting on proposed R&D Tax Incentive changes, or on the Industry Growth Program while it is paused.",
          "Assuming the Privacy Act does not apply without checking the OAIC's small business guidance.",
          "Leaving code, cloud accounts and app store accounts in a contractor's name; see [[/blogs/custom-software-development-australia|custom software development in Australia]] on ownership.",
        ],
      },
      {
        heading: "Choosing who builds it",
        body: [
          "Look for a team that asks about your evidence before your features, will run a short discovery, and talks about the decision your MVP must support. Our guide to [[/blogs/web-development-company-australia|choosing a web development company in Australia]] covers what to ask, and our pillar on [[/blogs/digital-product-development-australia|digital product development in Australia]] shows how an MVP fits into the longer product journey. If AI is central to your product, [[/blogs/ai-implementation-australia|AI implementation in Australia]] covers scoping and governance.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**MVP definition:** [[http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html|Eric Ries, Minimum Viable Product: a guide (Startup Lessons Learned, 2009)]].",
          "**Funding and tax:** [[https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/check-if-you-are-eligible-for-the-randd-tax-incentive|business.gov.au, R&D Tax Incentive eligibility]]; [[https://www.ato.gov.au/about-ato/new-legislation/in-detail/businesses/tax-reform-better-targeting-the-research-and-development-tax-incentive|ATO, better targeting the R&D Tax Incentive (proposed)]]; [[https://business.gov.au/grants-and-programs/industry-growth-program|business.gov.au, Industry Growth Program]]; [[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst|ATO, registering for GST]].",
          "**Privacy:** [[https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business|OAIC, small business and the Privacy Act]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP guidelines chapter 8]].",
          "**Payments and hosting:** [[https://stripe.com/global|Stripe global availability]]; [[https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html|AWS Regions]]; [[https://learn.microsoft.com/en-us/azure/reliability/regions-list|Microsoft Azure regions list]]; [[https://docs.cloud.google.com/compute/docs/regions-zones|Google Cloud regions and zones]]; [[https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html|AWS SaaS Lens, tenancy models]].",
          "Items described as reported come from secondary coverage rather than the government's own page. Program status and tax rules change; re-check before relying on them. The evidence ladder and assumption-mapping method are our practitioner frameworks. Nothing here is ZSpace client data, and nothing is legal, tax or financial advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "MVP development for Australian startups works best as a sequence of increasingly expensive tests: conversations, then prototypes, then a narrow but dependable product launched to a known cohort. Map your assumptions, build only what tests the riskiest one, measure against thresholds you set in advance, and treat funding and tax programs as things to confirm with an adviser rather than assume.",
          "The aim is not to launch something small. It is to learn the right thing quickly enough to make your next decision with evidence.",
        ],
        cta: {
          title: "Planning an MVP?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ui-ux-design|product design and prototyping]], [[/services/website-development|web applications]] and [[/services/mobile-app-development|mobile apps]]. If it would help to pressure-test your scope or architecture, we are happy to talk it through.",
        },
      },
    ],
  },
];
