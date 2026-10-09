import type { BlogPost } from "./blog-data";

/**
 * UAE software infrastructure pair: legacy software modernisation and cloud
 * migration for UAE companies. Differentiated from the generic owners
 * (ai-legacy-code-modernization, ecommerce-technology-modernization-roadmap,
 * website-replatforming, website-migration-guide, ecommerce-disaster-recovery,
 * llm-self-hosting) by UAE decisions: e-invoicing readiness, Arabic data,
 * in-country cloud regions and sector data-location rules.
 * Sources checked 2026-10-08/09: AWS Prescriptive Guidance (7 Rs); Microsoft
 * Cloud Adoption Framework; Google Cloud migration guide; AWS Well-Architected
 * Framework; AWS and Azure shared responsibility pages; AWS UAE region launch
 * post; AWS Bedrock UAE announcement; Azure Foundry model region availability;
 * Azure regions list; Oracle cloud regions; Google Cloud locations; DGE Abu
 * Dhabi (Core42 and Microsoft); Martin Fowler (Strangler Fig, 2024); Azure
 * Architecture Center (Strangler Fig pattern); FTA e-invoicing timeline;
 * ClearTax 2026 readiness survey via Zawya; u.ae (PDPL); DoH ADHICS V2;
 * Latham & Watkins (Federal Law 2/2019); Simmons & Simmons (CBUAE
 * Outsourcing Regulation); php.net and nodejs.org release schedules.
 * No figure here is ZSpace client data.
 */
export const uaeInfraPosts: BlogPost[] = [
  {
    slug: "software-modernization-uae",
    title: "Legacy Software Modernization: A Practical Roadmap for UAE Companies",
    seoTitle: "Software Modernization in the UAE: A Practical Roadmap",
    excerpt:
      "A practical legacy software modernisation roadmap for UAE companies: risk scoring, six options, strangler fig, Arabic data migration, testing and e-invoicing.",
    category: "Web Development",
    banner: "modroadmap",
    sceneKind: "roadmap",
    bannerAlt: "A phased roadmap moving a legacy system to a modern platform in slices, with assessment, strangler fig routing, data migration and cutover stages",
    date: "2026-10-09",
    readingTime: "20 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "logistics-supply-chain", "retail", "professional-services"],
    relatedSlugs: ["ai-legacy-code-modernization", "ecommerce-technology-modernization-roadmap", "website-replatforming"],
    faqs: [
      {
        q: "What is software modernisation?",
        a: "Software modernisation is the work of changing an ageing application so it is safer, cheaper to run and easier to change, while keeping the business running. It can mean keeping the system and fixing its riskiest parts, moving it to a new platform, restructuring its code, replacing it with a packaged product or retiring it. The right choice differs by system, so most companies end up using several options at once.",
      },
      {
        q: "How do we know whether a legacy system needs modernising?",
        a: "Score it on five risks: security (unpatched components or unsupported runtimes), vendor or platform end of life, skills (only one person understands it), integration (it cannot connect to the systems you now need) and compliance (it cannot meet new rules such as UAE e-invoicing). A system that scores high on two or more, and supports revenue or regulated activity, should be on the roadmap. Age alone is not a reason.",
      },
      {
        q: "Should we rewrite our legacy system from scratch?",
        a: "Rarely in one go. A full rewrite freezes improvements to the old system for months, has to rediscover undocumented rules, and puts everything at risk on a single cutover date. An incremental approach, such as the strangler fig pattern, replaces one capability at a time behind a routing layer, so value arrives earlier and each step can be rolled back. A full replacement can still make sense for small systems with simple rules.",
      },
      {
        q: "What is the strangler fig pattern?",
        a: "It is a way to modernise gradually. A façade or proxy sits in front of the legacy system, and you move one piece of functionality at a time to new services while the façade routes requests to the old or new implementation. Microsoft describes it as incrementally migrating a legacy system by gradually replacing specific pieces of functionality. It does not suit systems whose requests cannot be intercepted.",
      },
      {
        q: "Does UAE e-invoicing mean we must replace our ERP?",
        a: "Not necessarily. Many businesses will meet the requirement through an accredited service provider (ASP) connected to their existing ERP, with data fixes and an integration layer. Others will find their ERP cannot produce the required data and needs an upgrade or replacement. A gap analysis against the FTA's requirements, reviewed with your tax adviser and ASP, is the way to find out. This article is not tax advice.",
      },
      {
        q: "What goes wrong with Arabic data during a migration?",
        a: "Common problems include Arabic text stored in a legacy code page rather than Unicode, which turns into unreadable characters when converted wrongly; database collations that sort or match Arabic differently from the old system; inconsistent spellings of the same name; and mixed Arabic and Latin text that displays in the wrong order. Test with real Arabic records, compare counts and samples before and after, and agree normalisation rules with the business.",
      },
      {
        q: "How long does a legacy modernisation programme take?",
        a: "It depends on the size of the system and the option chosen, so be wary of any fixed figure. A useful structure is a few weeks of assessment and dependency mapping, then delivery in slices of one capability at a time, each with its own testing, parallel run and rollback plan. The first slice usually takes longest because it builds the routing, data sync and test foundations later slices reuse.",
      },
      {
        q: "Can AI tools speed up legacy modernisation?",
        a: "They can help with reading and documenting old code, drafting tests and suggesting refactors, which is useful when the original developers have left. They do not remove the need for characterisation tests, human review, data reconciliation or careful cutover planning. Treat AI output as a draft that must pass the same tests as any other change, and avoid sending sensitive code or data to tools your policies do not allow.",
      },
    ],
    content: [
      {
        heading: "What is software modernisation, and how should UAE companies approach it?",
        body: [
          "**Software modernisation** is the planned change of an ageing application so that it is secure, supportable and able to meet new business and regulatory demands, without stopping the operations it supports. For most UAE companies the safest route is incremental: assess each system's risk, choose one of six options per system, and replace capability in small, reversible slices rather than through one big rewrite.",
          "Many UAE businesses run on systems built a decade or more ago: a customised ERP, an in-house order portal, a booking tool written by a developer who has since left, or a spreadsheet-and-macro process that grew into a critical system. These systems often still work. The problem is that they become harder to secure, harder to connect to new channels and harder to change when rules change. UAE e-invoicing is the most visible current example, but Arabic customer journeys, new payment providers and AI projects all expose the same limits.",
          "This guide is the UAE-focused companion to our general guides on [[/blogs/ai-legacy-code-modernization|AI-assisted legacy code modernisation]] and the [[/blogs/ecommerce-technology-modernization-roadmap|ecommerce technology modernisation roadmap]]. Here we cover how to assess legacy risk, how to choose between modernisation options, how to apply the strangler fig pattern, how to migrate data (including Arabic text) and how to sequence the work so operations keep running. Facts are sourced; recommendations are labelled as ours; examples are hypothetical. Nothing here is tax or legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Modernise for a reason, not because a system is old: security, end of support, skills, integration and compliance are the five risks worth scoring.",
          "There are six practical options per system: retain, refactor, replatform, rearchitect, replace (repurchase) and retire. AWS's ‘7 Rs’ add rehost and relocate for cloud moves.",
          "Map dependencies before choosing an option. Most modernisation failures come from an integration, report or batch job nobody listed.",
          "Prefer incremental change. The strangler fig pattern routes traffic through a façade and moves one capability at a time, so each step can be reversed.",
          "UAE e-invoicing is a hard deadline for ERP and invoicing systems: businesses with revenue of AED 50 million or more go live on 1 January 2027, and the rest on 1 July 2027, according to the FTA.",
          "Treat Arabic data as a migration risk in its own right: encoding, collation, normalisation and right-to-left display all need explicit tests.",
          "Characterisation tests and parallel runs prove the new system behaves like the old one before you switch users over.",
          "Write the rollback plan before the cutover plan, and decide in advance what result triggers it.",
        ],
      },
      {
        heading: "Technical debt: why working systems become a business risk",
        body: [
          "**Technical debt** is the accumulated cost of past shortcuts and outdated choices in a system: code, data structures, dependencies and infrastructure that work today but make every future change slower, riskier or more expensive. Like financial debt, it charges interest. Each new feature takes longer, each fix risks breaking something else, and eventually the team spends more time keeping the system alive than improving it.",
          "Martin Fowler describes the pattern well: changes ‘are often done by building patch upon patch, each patch making it harder to adapt to future changes. Eventually people realize that they can't patch any more, and need a wholesale modernization’ ([[https://martinfowler.com/bliki/StranglerFigApplication.html|Martin Fowler, Strangler Fig Application]]). The aim of a modernisation roadmap is to act before that point, and to avoid replacing patch-upon-patch with one enormous, risky rewrite.",
          "Technical debt is not only a code problem. In UAE businesses we often see it in four places: **business rules** that live only in old stored procedures or a consultant's memory; **integrations** built as file drops or direct database writes; **data** with duplicate customers, inconsistent Arabic and English names, and free-text fields used for structured information; and **infrastructure** running on an unsupported operating system or runtime. Newer automation creates its own debt too; our guide to [[/blogs/ai-automation-technical-debt|AI automation technical debt]] covers how AI workflows decay when nobody owns them.",
        ],
        callout: {
          type: "note",
          text: "Our recommendation: write down the interest you are paying before you plan the cure. Examples: hours spent on manual workarounds each month, releases delayed by fear of breaking the system, incidents linked to the legacy platform, and new requirements you have had to refuse. These become your baseline for judging whether modernisation worked.",
        },
      },
      {
        heading: "Start with an inventory and a dependency map",
        body: [
          "You cannot modernise what you have not listed. The first deliverable of any programme should be an application inventory and a dependency map, not a target architecture. The inventory records every system, who owns it, what it does, what runs it and how critical it is. The dependency map records how systems talk to each other, including the connections nobody designed on purpose.",
          "**What to capture for each system:** business owner and technical owner; business capabilities it supports (for example quoting, invoicing, stock, bookings); users and volumes; technology stack and versions; hosting location; data stores and the categories of data held (personal, financial, health); inbound and outbound integrations; scheduled jobs and reports; and known pain points.",
          "**Where hidden dependencies live:** nightly batch jobs and scheduled exports; reports finance runs at month-end; spreadsheets that query the database directly; shared database tables written by two applications; hard-coded IP addresses and file paths; email-based workflows; and integrations with banks, couriers, government portals or payment providers. Talk to the people who run month-end and year-end, not only to IT.",
          "A simple text map is enough to start. The example below is hypothetical.",
        ],
        code: {
          label: "Illustrative dependency map for a legacy ERP",
          text: "[Web order portal] --orders (direct DB write)--> [Legacy ERP DB]\n[Legacy ERP] --invoice PDF (email)--> [Customers]\n[Legacy ERP] --nightly CSV--> [Warehouse system]\n[Legacy ERP DB] <--read-only query-- [Finance Excel model]\n[Courier portal] --manual re-keying--> [Legacy ERP]\n[Legacy ERP] --?--> [E-invoicing ASP]   (not yet built)\n\nRisk notes:\n- Two systems write to the ERP database directly\n- Finance model breaks if column names change\n- Courier data is re-keyed by hand",
        },
      },
      {
        heading: "Legacy risk assessment: a five-factor scorecard",
        body: [
          "Once systems are listed, score each one. We use five risk factors, each scored from 1 (low) to 5 (high). The scores are a prioritisation tool, not a precise measurement; agree them with the business owner, and record the evidence behind each number.",
        ],
        table: {
          headers: ["Risk factor", "What to check", "Warning signs", "Score 1–5"],
          rows: [
            ["**Security**", "Patch levels, known vulnerabilities, authentication, encryption, logging", "Unpatched components, shared admin accounts, no audit log, passwords stored weakly", "—"],
            ["**Support and end of life**", "Vendor support dates for the OS, database, runtime, framework and any packaged software", "Runtime past security support; vendor no longer issues fixes; licence tied to old hardware", "—"],
            ["**Skills**", "Who can change and operate the system; documentation; availability of the language or platform in the market", "One person knows it; no documentation; developers reluctant to touch it", "—"],
            ["**Integration**", "APIs, data export options, ability to connect to payments, couriers, CRM, ASPs and AI tools", "Only file drops or direct database access; no API; re-keying between systems", "—"],
            ["**Compliance**", "Ability to meet e-invoicing, data protection, sector rules and Arabic requirements", "Cannot produce required invoice data; cannot locate or delete personal data on request; Arabic stored or printed incorrectly", "—"],
          ],
        },
        callout: {
          type: "tip",
          text: "Check runtime support dates against the official schedules, not memory. For example, php.net lists PHP 8.1 and earlier as end of life and PHP 8.2 security support ending on 31 December 2026, while the Node.js project lists v20 as end of life and says production applications should only use Active LTS or Maintenance LTS releases (both checked 9 October 2026). A system on an end-of-life runtime scores high on support and security at once.",
        },
      },
      {
        heading: "The UAE angle: e-invoicing, Arabic and data location",
        body: [
          "**UAE facts: e-invoicing.** The Federal Tax Authority's timeline for B2B and B2G e-invoicing requires businesses with revenue of AED 50 million or more to appoint an accredited service provider (ASP) by 30 October 2026 and go live on 1 January 2027; businesses below AED 50 million must appoint an ASP by 31 March 2027 and go live on 1 July 2027 ([[https://tax.gov.ae/en/media.centre/news/federal.tax.authority.organises.joint.awareness.meeting.for.accredited.service.providers.and.persons.subject.to.the.einvoicing.system.aspx|FTA]]). For many companies this is the first hard regulatory deadline their ERP or invoicing system has faced.",
          "**Readiness is uneven.** A 2026 ClearTax survey of UAE finance leaders found that 38% said their ERP cannot natively produce the PINT AE XML format the system uses, and 60.5% had not carried out an ERP gap analysis ([[https://www.zawya.com/en/press-release/research-and-studies/uae-businesses-enter-next-phase-of-e-invoicing-readiness-as-voluntary-adoption-begins-new-cleartax-study-finds-ola2eg6v|ClearTax via Zawya]]). ClearTax sells e-invoicing software and the sample leans towards larger companies, so treat the figures as a directional signal rather than a market measurement.",
          "**Our recommendation.** Make the ERP gap analysis the first slice of your modernisation programme if you invoice businesses or government. Check whether your system holds every field the e-invoice needs in structured form (not free text), whether it can export or transmit to your ASP through an API, whether customer and supplier master data is clean enough to pass validation, and how credit notes and corrections are handled. The outcome tells you whether you can retain the ERP with an integration layer, need to upgrade it, or should replace it. Confirm the requirements with your tax adviser and ASP. For automating the documents around invoicing, see [[/blogs/ai-document-processing-uae|AI document processing in the UAE]].",
          "**UAE facts: Arabic.** Consumer invoices in the UAE must be in Arabic (other languages are optional), and UAE-registered ecommerce businesses must provide product and service information in Arabic, according to the government's consumer protection guidance ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae]]). Many legacy systems were built for English only: they print Arabic in reversed or disconnected letters, truncate Arabic names, or cannot lay out a right-to-left screen. Retrofitting right-to-left support into an old user interface is often harder than it looks, which is one reason customer-facing front ends are good early candidates for replacement. Our guide to [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]] covers bilingual design in depth.",
          "**Data location.** If a system holds health data, banking data or government data, moving it is not only a technical decision. Federal and emirate-level rules restrict where some of this data can be stored or processed. We cover what the sources say, and where to take advice, in our companion guide to [[/blogs/cloud-migration-uae|cloud migration for UAE businesses]].",
        ],
      },
      {
        heading: "Six modernisation options, mapped to the AWS 7 Rs",
        body: [
          "Every system on your inventory needs a decision. We group the choices into six options. AWS's prescriptive guidance describes ‘seven migration strategies for moving applications to the cloud, known as the 7 Rs’: retire, retain, rehost, relocate, repurchase, replatform, and refactor or re-architect ([[https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html|AWS Prescriptive Guidance]]). That list is designed for cloud moves; for modernisation we split refactoring from rearchitecting because the effort and risk differ so much, and treat rehost and relocate as hosting moves rather than modernisation.",
        ],
        table: {
          headers: ["Option", "What it means", "Closest AWS 7 Rs term", "Typical fit"],
          rows: [
            ["**Retain**", "Keep the system largely as is; fix the highest risks (patching, access control, backups) and wrap it with an API or integration layer", "Retain", "Stable systems with low change demand, or where data residency or a pending replacement makes moving premature"],
            ["**Refactor**", "Improve the internal structure of the code without changing what it does: remove dead code, upgrade libraries, add tests", "Part of refactor or re-architect", "Valuable systems with sound design but accumulated mess"],
            ["**Replatform**", "Move to a newer runtime, database or managed service with limited code change", "Replatform (‘lift, tinker, and shift’)", "Systems on end-of-life runtimes or self-managed servers"],
            ["**Rearchitect**", "Change the structure, for example splitting a monolith into modules or services, or rebuilding a capability on a new stack", "Refactor or re-architect", "Core systems that must scale or change much faster than today"],
            ["**Replace (repurchase)**", "Move to a packaged product or SaaS and migrate the data", "Repurchase (‘drop and shop’)", "Commodity capabilities: accounting, HR, CRM, standard ERP functions"],
            ["**Retire**", "Switch the system off after archiving the data you must keep", "Retire", "Duplicated or little-used systems"],
          ],
        },
        callout: {
          type: "note",
          text: "AWS calls refactor ‘the most complex and costly of the migration strategies’ and, for large migrations, recommends rehosting, relocating or replatforming first and modernising after the move. That advice is about cloud migration, but the principle carries over: separate the hosting move from the code change where you can, so you are not debugging both at once.",
        },
      },
      {
        heading: "Decision matrix: which option fits which system?",
        body: [
          "The matrix below is our own framework for a first-pass decision. Read across the criteria for a system and see which option the evidence favours. It is a starting point for discussion with the business owner, not a formula.",
        ],
        table: {
          headers: ["Criterion", "Retain", "Refactor", "Replatform", "Rearchitect", "Replace", "Retire"],
          rows: [
            ["Business differentiation", "Low to medium", "High", "Medium", "High", "Low (commodity)", "None"],
            ["Rate of change needed", "Low", "Medium", "Low to medium", "High", "Depends on product roadmap", "None"],
            ["Code quality and design", "Acceptable", "Sound design, messy code", "Acceptable", "Poor fit for future needs", "Irrelevant", "Irrelevant"],
            ["End-of-life runtime or platform", "Only with mitigations", "Partly addresses", "Strong fit", "Strong fit", "Strong fit", "Strong fit"],
            ["Integration needs (APIs, ASP, payments)", "Add a wrapper or integration layer", "Moderate", "Moderate", "Strong fit", "Check product APIs", "N/A"],
            ["Compliance gap (e-invoicing, Arabic, data location)", "Only if gap is small", "Sometimes", "Sometimes", "Strong fit", "Check product meets UAE needs", "Archive must still comply"],
            ["Relative effort and risk", "Lowest", "Low to medium", "Medium", "Highest", "Medium (data and process change)", "Low"],
          ],
        },
        callout: {
          type: "tip",
          text: "If a capability is standard across your industry, buying is usually cheaper than building. If it is how you win customers, owning it usually pays back. Our guide to [[/blogs/custom-software-vs-saas-uae|custom software vs SaaS in the UAE]] works through that decision in detail.",
        },
      },
      {
        heading: "The strangler fig pattern: modernising without a big-bang rewrite",
        body: [
          "The strangler fig pattern is the most reliable way we know to modernise a core system while the business keeps using it. Martin Fowler named it after the strangler fig, which grows around a host tree and gradually replaces it: ‘This gradual process of replacing the host tree struck me as a striking analogy to the way I saw colleagues doing modernization of legacy software systems.’ He notes that the term is ‘now often used to describe a gradual approach to legacy modernization’ ([[https://martinfowler.com/bliki/StranglerFigApplication.html|Martin Fowler, 2024]]).",
          "Microsoft's Azure Architecture Center defines the pattern as a way to ‘incrementally migrate a legacy system by gradually replacing specific pieces of functionality with new applications and services’. The mechanism is simple: ‘A façade (proxy) intercepts requests that go to the back-end legacy system’ and routes each one to either the old or the new implementation ([[https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig|Microsoft, Strangler Fig pattern]]). Over time more routes point to the new system, until the old one can be retired.",
          "**Microsoft's cautions are worth repeating.** Make sure the façade does not become a single point of failure or a performance bottleneck. Use an anti-corruption layer where old and new systems call each other, so the new design is not polluted by the old data model. And the pattern does not suit cases where requests to the back-end system cannot be intercepted, where you cannot access the legacy system's source code, or where the system is small and replacing it whole is simple.",
        ],
        code: {
          label: "Strangler fig routing over time (illustrative)",
          text: "Phase 1         Phase 2          Phase 3\n\n Users           Users            Users\n   |               |                |\n[Facade]        [Facade]         [Facade]\n   |             /    \\               |\n[Legacy]     [New:    [Legacy]     [New: all\n             quotes,  (orders,     capabilities]\n             invoices] stock)\n\nAnti-corruption layer translates between\nthe new model and legacy data where they meet.",
        },
        callout: {
          type: "takeaway",
          text: "Pick the first slice carefully. Good first slices have clear boundaries, visible value and a contained data set, for example invoice generation for e-invoicing, a customer portal or a quoting tool. Avoid starting with the most entangled part of the system.",
        },
      },
      {
        heading: "Data migration: mapping, cleansing, reconciliation and Arabic text",
        body: [
          "Data is where modernisation projects most often slip. Code can be rewritten; ten years of customers, invoices, contracts and stock history must be carried across accurately or archived in a way you can still use. Plan data migration as its own workstream with its own owner.",
          "**Mapping.** Document every source field, its meaning, its target field and any transformation. Expect to find fields used for a different purpose than their name suggests, codes whose meaning changed over the years, and free-text fields holding structured information such as tax numbers or delivery instructions.",
          "**Cleansing.** Decide what to fix before migration, what to fix after, and what to leave behind. Typical work includes merging duplicate customers, standardising addresses, filling mandatory fields the new system requires (e-invoicing master data is a common example) and agreeing how inactive records are archived.",
          "**Reconciliation.** Prove the migration is complete and correct with record counts per entity, control totals (for example the sum of open invoices and stock value by warehouse), field-level comparisons on samples, and sign-off by the business owner. Run the full migration several times in rehearsal, not once on cutover weekend. For a database moved slice by slice, Microsoft's strangler fig guidance describes extracting one domain at a time with an initial load plus change data capture to keep old and new in sync until cutover.",
          "**Arabic text.** Arabic deserves explicit tests because problems are easy to miss with English sample data. These are general issues to check, not a list of faults in any particular product.",
        ],
        checklist: [
          "**Encoding:** confirm whether legacy data is stored as Unicode or in an older Arabic code page (Windows-1256 and ISO-8859-6 are common). Converting with the wrong assumption produces unreadable text that is hard to repair later.",
          "**Collation and sorting:** the new database's collation controls how Arabic sorts, compares and matches. Test search, uniqueness checks and alphabetical reports against the old system's results.",
          "**Normalisation:** decide how to treat variant letter forms (for example different alef and ya forms), diacritics and the tatweel (elongation) character in names and search, so the same customer is not stored twice.",
          "**Mixed-direction text:** addresses and product names that mix Arabic, Latin and numbers can display in the wrong order. Check screens, PDFs, invoices, emails and SMS output, not only the database.",
          "**Field lengths:** Arabic text can need more bytes than its English equivalent in some encodings; check for silent truncation.",
          "**Bilingual pairs:** if records hold Arabic and English names, migrate them as linked fields rather than separate records.",
        ],
      },
      {
        heading: "Testing: characterisation tests and parallel runs",
        body: [
          "Legacy systems rarely come with a test suite, and their real specification is how they behave today, quirks included. Two techniques make modernisation safer.",
          "**Characterisation tests.** A characterisation test records what the existing system actually does for a given input, and then checks that the new system does the same. The term was popularised by Michael Feathers in his work on legacy code. You are not judging whether the behaviour is correct; you are pinning it down so any change is deliberate. For an invoicing slice, that might mean taking a few hundred real historical orders, running them through both systems, and comparing totals, VAT, rounding, discounts and document numbering line by line.",
          "**Parallel runs.** In a parallel run, old and new systems process the same live transactions for a period, and the outputs are compared before the new system becomes the system of record. It costs effort, because someone must investigate every difference, but it catches the rules nobody documented. Agree up front how long the parallel run lasts, which differences are acceptable, and who signs off.",
          "**The rest of the test plan.** Add integration tests for every dependency on your map, performance tests at month-end volumes, security tests on the new components, user acceptance testing with the people who use the system daily, and Arabic and right-to-left checks on every user-facing output. The general [[/blogs/ai-legacy-code-modernization|legacy code modernisation guide]] covers test-first refactoring in more depth.",
        ],
      },
      {
        heading: "Rollback plans: decide how to undo before you cut over",
        body: [
          "Every slice needs a rollback plan written before the cutover plan. A rollback plan answers three questions: what result will make us reverse the change, how do we reverse it, and what happens to transactions created in the new system before we reversed.",
          "**Our recommendation.** Define rollback triggers in measurable terms, such as reconciliation differences above an agreed threshold, failed integrations with banks, couriers or your ASP, or error rates above an agreed level within the first hours. Keep the legacy system available and in sync (or able to be brought back into sync) until the new slice has proved itself. With a strangler fig façade, rollback can be as simple as switching a route back, which is one of the pattern's main advantages. Rehearse the rollback at least once, because an untested rollback is a hope, not a plan.",
          "For websites and customer-facing platforms, rollback also covers URLs, redirects and search visibility. Our [[/blogs/website-migration-guide|website migration guide]] and [[/blogs/website-replatforming|website replatforming guide]] cover those risks.",
        ],
      },
      {
        heading: "An incremental roadmap that keeps operations running",
        body: [
          "The roadmap below is our recommended structure. Durations depend on the size of the system and are deliberately left out; each phase ends with a decision gate, not a date.",
        ],
        table: {
          headers: ["Phase", "Main activities", "Outputs", "Decision gate"],
          rows: [
            ["**0. Frame**", "Agree business goals, constraints and deadlines (e.g. e-invoicing go-live); name owners", "One-page modernisation brief", "Is there a clear business reason and an owner?"],
            ["**1. Assess**", "Inventory, dependency map, five-factor risk scores, e-invoicing and Arabic gap checks", "Risk-ranked system list; dependency map", "Which systems need action, and which can wait?"],
            ["**2. Decide**", "Apply the decision matrix per system; choose first slices; outline target architecture", "Option per system; sequenced slice backlog", "Do the first slices deliver visible value with contained risk?"],
            ["**3. Stabilise**", "Patch, back up, secure access, add monitoring and characterisation tests to systems being retained or strangled", "Safer baseline; test harness", "Can we change the legacy system without fear?"],
            ["**4. Build the seams**", "Façade or routing layer, integration layer or API wrapper, data sync", "Routing in place with no behaviour change", "Does traffic flow through the façade without issues?"],
            ["**5. Migrate slice by slice**", "Build, migrate data, test, parallel run, cut over, monitor; repeat", "Capabilities moved one at a time", "Did reconciliation and parallel run pass? Is rollback ready?"],
            ["**6. Retire and improve**", "Archive data, switch off legacy components, update documentation and runbooks", "Smaller legacy footprint; lower running cost", "What is the next slice, or are we done?"],
          ],
        },
        callout: {
          type: "note",
          text: "Phases 3 and 4 are often skipped because they produce nothing users can see. They are what make the later slices fast and reversible. If you are planning a wider transformation, our [[/blogs/digital-transformation-uae-smes|UAE SME digital transformation roadmap]] shows where modernisation sits alongside customer, data and AI work.",
        },
      },
      {
        heading: "Hypothetical examples",
        body: [
          "These examples are illustrative composites, not ZSpace clients or real companies. Any numbers are placeholders.",
          "**Hypothetical example 1: a building-materials distributor with a customised ERP.** A mainland distributor runs an on-premises ERP customised over many years, with a web order portal writing directly to its database and invoices emailed as PDFs. Its revenue puts it in the first e-invoicing wave. The assessment scores the ERP high on compliance and integration risk, medium on skills and low on business differentiation. Decision: retain the ERP core for now, build an integration layer to the chosen ASP, clean customer master data, and move invoice generation behind an API as the first slice. The order portal, which competitors also offer, is scheduled for replacement once the integration layer exists. A full ERP replacement is deferred to a later, planned project rather than rushed before the deadline.",
          "**Hypothetical example 2: a Dubai service company with an in-house booking system.** A home-services company relies on a PHP booking tool written by a contractor who has left. It runs on an end-of-life PHP version, has no tests and cannot show Arabic properly. Decision: stabilise first (patch what can be patched, restrict admin access, add backups and monitoring), write characterisation tests around pricing and scheduling, then use a façade to move the customer-facing booking journey to a new bilingual front end while scheduling stays in the old system. Scheduling moves in a second slice once the team understands its rules. The company keeps taking bookings throughout.",
          "**Hypothetical example 3: retiring before modernising.** A trading company finds three internal tools that duplicate features in its accounting package, used by two people between them. Retiring them, after archiving their data, removes three sets of security and support risks for very little effort. Not every item on the roadmap is a build.",
        ],
      },
      {
        heading: "Where AI fits in a modernisation programme",
        body: [
          "AI coding tools can shorten the slow parts of modernisation: reading unfamiliar code, explaining stored procedures, drafting documentation and characterisation tests, and proposing refactors. AI document processing can help with data cleansing and with turning paper-based steps into structured data. These are real gains, particularly where the original developers are gone.",
          "They do not change the fundamentals. Generated code still needs review and must pass the same tests. Data still needs reconciliation. And sending proprietary code or customer data to an external AI tool is a data-handling decision that should follow your policies. Our guides to [[/blogs/ai-legacy-code-modernization|AI legacy code modernisation]] and [[/blogs/enterprise-ai-integration|enterprise AI integration]] go deeper, and modernisation often comes before AI: an AI assistant cannot use data locked in a system with no API. If you are connecting modernised systems, see [[/blogs/api-integration-uae|API integration for UAE businesses]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "**Starting with the target architecture** before the inventory and dependency map exist.",
          "**The big-bang rewrite:** freezing the old system for a year and switching everything on one weekend.",
          "**Choosing one option for every system,** such as ‘move everything to SaaS’, instead of deciding per system.",
          "**Underestimating data:** treating migration as a one-off script rather than a rehearsed, reconciled workstream.",
          "**Testing only in English,** then discovering broken Arabic on printed invoices after go-live.",
          "**No rollback plan,** or one that has never been rehearsed.",
          "**Leaving e-invoicing to the last quarter,** when ERP gaps take time to fix and ASPs have onboarding queues of their own.",
          "**Forgetting to retire:** keeping the old system running indefinitely ‘just in case’, so running costs and risks never fall.",
          "**Modernising the code but not the ownership,** so the new system drifts into the same state. Our [[/blogs/website-maintenance-guide|website maintenance guide]] covers ongoing ownership.",
        ],
      },
      {
        heading: "Choosing who does the work",
        body: [
          "Modernisation needs people who are comfortable with old systems and new ones, and who will tell you when the right answer is to retain or retire rather than rebuild. Whether you use an in-house team, a local firm or a remote partner, ask how they assess legacy risk, how they handle data migration and Arabic data, what their rollback approach is, and how they hand over documentation and access so you are not locked in.",
          "Our guide to [[/blogs/software-development-company-uae|choosing a software development company in the UAE]] sets out the questions to ask, and [[/blogs/digital-product-development-gcc|digital product development for the GCC]] covers how modernised systems fit into a wider product roadmap. Before you change hosting as part of the work, run through our [[/blogs/website-security-checklist|website security checklist]] so the new platform starts from a secure baseline.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Modernisation patterns:** [[https://martinfowler.com/bliki/StranglerFigApplication.html|Martin Fowler, Strangler Fig Application (2024)]]; [[https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig|Microsoft Azure Architecture Center, Strangler Fig pattern]]; [[https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html|AWS Prescriptive Guidance, migration strategies (7 Rs)]].",
          "**UAE e-invoicing and consumer rules:** [[https://tax.gov.ae/en/media.centre/news/federal.tax.authority.organises.joint.awareness.meeting.for.accredited.service.providers.and.persons.subject.to.the.einvoicing.system.aspx|Federal Tax Authority, e-invoicing timeline]]; [[https://www.zawya.com/en/press-release/research-and-studies/uae-businesses-enter-next-phase-of-e-invoicing-readiness-as-voluntary-adoption-begins-new-cleartax-study-finds-ola2eg6v|ClearTax 2026 readiness study via Zawya (vendor survey)]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]].",
          "**Runtime support schedules:** [[https://www.php.net/supported-versions.php|PHP supported versions]]; [[https://nodejs.org/en/about/previous-releases|Node.js releases]].",
          "Dates and requirements change; re-check them before relying on them. Nothing here is ZSpace client data, and nothing is tax or legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Legacy software modernisation in the UAE is less about chasing new technology and more about removing specific risks on a sensible timetable. List your systems, map how they connect, score them on security, support, skills, integration and compliance, and choose an option per system. Then move in small, tested, reversible slices, starting where the deadline or the value is clearest. For many companies in 2026 that starting point is the ERP gap analysis for e-invoicing.",
          "The companies that do this well rarely rewrite everything. They retain what is stable, replace what is commodity, retire what is unused, and rebuild only what makes them different, keeping the business running the whole way through.",
        ],
        cta: {
          title: "Weighing up a legacy system?",
          description: "ZSpace Labs is an India-based, remote-first technology studio that works with UAE and global businesses on [[/services/website-development|web applications and custom software]], [[/services/ui-ux-design|bilingual interfaces]] and [[/services/ai-automation|automation]]. If an outside view on your modernisation options would help, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "cloud-migration-uae",
    title: "Cloud Migration for UAE Businesses: Planning, Costs, Risks and Implementation",
    seoTitle: "Cloud Migration UAE: Planning, Costs, Risks and Regions",
    excerpt:
      "Cloud migration for UAE businesses: discovery, the 7 Rs, UAE cloud regions, data residency, security, DR, cost governance and a readiness checklist.",
    category: "Web Development",
    banner: "migrate",
    sceneKind: "pipeline",
    bannerAlt: "Workloads moving from on-premises servers to UAE cloud regions through discovery, strategy selection, migration waves and post-migration monitoring",
    date: "2026-10-09",
    readingTime: "21 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "mobile-app-development"],
    relatedIndustrySlugs: ["healthcare-healthtech", "fintech", "b2b-enterprise", "saas-technology", "ecommerce"],
    relatedSlugs: ["ecommerce-disaster-recovery", "website-migration-guide", "llm-self-hosting"],
    faqs: [
      {
        q: "Should every UAE business move everything to the cloud?",
        a: "No. Cloud migration should be decided workload by workload. Some systems are better retained on premises for a period, because of a pending replacement, licensing, latency to local equipment or sector data rules; some should be replaced with SaaS; and some should simply be retired. AWS's own migration guidance includes retain and retire as legitimate strategies. Migrate where the move reduces risk or cost, or enables something the business needs.",
      },
      {
        q: "Which major cloud providers have regions inside the UAE?",
        a: "As of October 2026, AWS runs the Middle East (UAE) region, me-central-1, opened in August 2022 with three Availability Zones. Microsoft Azure has UAE North in Dubai, open to customers, and UAE Central in Abu Dhabi, which is access-restricted. Oracle runs public cloud regions in Dubai and Abu Dhabi. Google Cloud does not list a UAE region; its nearest are Doha and Dammam. Re-check before committing, as offerings change.",
      },
      {
        q: "Do we have to keep our data inside the UAE?",
        a: "It depends on your sector and the data. Legal commentary on Federal Law No. 2 of 2019 says it restricts storing or processing health data outside the UAE; Abu Dhabi's ADHICS standard requires UAE hosting, including backup and disaster recovery, for in-scope health information; and the Central Bank's outsourcing rules for banks include data-location requirements. The PDPL sets conditions for cross-border transfers. For other sectors, check your regulator's rules and take legal advice.",
      },
      {
        q: "Can we use generative AI services with processing inside the UAE?",
        a: "Partly, and it depends on the service and deployment type. AWS announced Amazon Bedrock in the UAE region in September 2025, with model availability varying by model. Microsoft's documentation for Azure, checked in September 2026, shows UAE North chat models with in-region processing only under Regional Provisioned deployments, while Global deployments may process data in any region and there is no Middle East data zone. Check the current tables before designing.",
      },
      {
        q: "What is the difference between RPO and RTO?",
        a: "Recovery point objective (RPO) is the maximum amount of data, measured in time, that you can afford to lose after an incident: an RPO of one hour means backups or replication must be no more than an hour behind. Recovery time objective (RTO) is the maximum time a system can be unavailable before it must be restored. Both are business decisions; they drive the backup and disaster recovery design and its cost.",
      },
      {
        q: "Will moving to the cloud reduce our IT costs?",
        a: "Not automatically. A straight lift-and-shift of oversized servers can cost more than the hardware it replaced. Savings come from rightsizing, switching off idle resources, using managed services, committing to steady usage through reserved capacity or savings plans, and governing spend with tags and budgets. Build a cost model per workload before migrating, and track actual spend against it for the first few months.",
      },
      {
        q: "Who is responsible for security once we are in the cloud?",
        a: "Both you and the provider. Under the shared responsibility model, AWS says it protects the infrastructure that runs its services, while customer responsibility depends on the services chosen. Microsoft states that for all deployment types you own your data and identities. In practice you remain responsible for access management, configuration, data protection, and logging and monitoring of what you deploy.",
      },
      {
        q: "How long does a cloud migration take?",
        a: "It depends on the number of workloads, their dependencies and the strategies chosen, so treat any fixed timeline with caution. A typical structure is a discovery and assessment phase, a landing zone build, a pilot migration of one low-risk workload, then migration in waves of related systems, each with testing and a rollback plan, followed by optimisation. Rehosting is fastest; refactoring takes longest.",
      },
    ],
    content: [
      {
        heading: "What does cloud migration involve for a UAE business?",
        body: [
          "**Cloud migration** is the planned move of applications, data and infrastructure from on-premises servers or older hosting to a cloud provider, followed by optimising them to run securely and cost-effectively there. For UAE businesses it also means choosing where workloads are hosted, in-country or abroad, according to sector rules. Not every business should migrate everything: some workloads are better retained, replaced or retired.",
          "UAE businesses now have a real choice of in-country cloud. AWS, Microsoft Azure and Oracle all operate public cloud regions inside the UAE, and Abu Dhabi government has a sovereign cloud arrangement with Microsoft and Core42. That makes cloud migration a more practical option for organisations that previously kept servers on site because of data location concerns. It also adds decisions: which provider, which region, which services, and which data must stay where.",
          "This guide covers the whole journey: discovery, migration strategies, UAE regional hosting, data residency, security, backup and disaster recovery, cost governance, post-migration monitoring and the main risks, with a readiness checklist at the end. For the code-level side of updating old systems, see our companion guide to [[/blogs/software-modernization-uae|legacy software modernisation in the UAE]]. Provider facts are dated and sourced; recommendations are labelled as ours; examples are hypothetical. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Decide per workload. AWS lists seven strategies, including retain and retire; moving everything is rarely the right answer.",
          "Discovery and dependency mapping come first. Most migration incidents trace back to a dependency that was not on the list.",
          "In-country options exist: AWS me-central-1 (opened August 2022, three Availability Zones), Azure UAE North (Dubai) and UAE Central (Abu Dhabi, restricted), and Oracle Dubai and Abu Dhabi. Google Cloud has no UAE region.",
          "Data residency is sector-specific. Health data (Federal Law 2/2019, ADHICS in Abu Dhabi) and bank outsourcing (CBUAE) carry location requirements; elsewhere, check your sector rules and take advice.",
          "AI services add a twist: where a model runs can differ from where your data is stored, depending on the deployment type.",
          "Security is shared: the provider secures the cloud; you secure your identities, configuration and data.",
          "Set RPO and RTO per system before designing backups and disaster recovery.",
          "Cost governance (tagging, budgets, rightsizing, commitments) decides whether the cloud saves money or costs more.",
        ],
      },
      {
        heading: "Should you migrate at all?",
        body: [
          "Cloud migration is a means, not a goal. Before planning a move, be clear about what you expect it to fix: ageing hardware nearing replacement, a data centre or server room contract ending, unreliable backups, inability to scale for seasonal peaks, slow provisioning for new projects, or the need for managed services such as databases, analytics or AI that are hard to run yourself.",
          "**When to hold back.** AWS's guidance lists retain as a valid strategy and gives data residency compliance as one reason to keep an application where it is ([[https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html|AWS Prescriptive Guidance]]). Other reasons include a system due for replacement within a year (migrate the replacement instead), software licensed to specific hardware, workloads tied to equipment on site such as manufacturing or lab systems with tight latency needs, and systems so unstable that moving them would add risk before they are stabilised.",
          "**When to retire instead.** AWS describes applications with average CPU and memory use below 5% as ‘zombie applications’ and those between 5% and 20% over 90 days as ‘idle applications’. Discovery often uncovers systems like these. Retiring them, after archiving the data you need, is the cheapest migration there is.",
          "**When to replace instead.** If the workload is a commodity capability, such as email, accounting, HR or CRM, moving to a SaaS product may be better than migrating your own installation. Our guide to [[/blogs/custom-software-vs-saas-uae|custom software vs SaaS in the UAE]] covers the trade-offs.",
        ],
      },
      {
        heading: "Discovery: inventory and dependency mapping",
        body: [
          "Discovery produces the facts every later decision depends on. Use automated discovery tools where you can, and interviews where you cannot: tools see network connections, but people know about the month-end report and the supplier who sends a file every Tuesday.",
        ],
        checklist: [
          "**Application inventory:** every application, owner, purpose, users, criticality and business hours.",
          "**Infrastructure inventory:** servers (physical and virtual), CPU, memory and storage actually used (not just allocated), operating systems and versions, databases, network devices.",
          "**Data inventory:** what data each system holds, its classification (public, internal, confidential, personal, health, financial), volume and growth.",
          "**Dependencies:** application-to-application connections, shared databases, file shares, scheduled jobs, external integrations (banks, payment providers, couriers, government portals, e-invoicing ASPs), DNS and certificates.",
          "**Licensing:** which software licences can move to the cloud and on what terms.",
          "**Performance baselines:** response times, peak loads and batch windows today, so you can prove the cloud version is no worse.",
          "**Constraints:** regulatory requirements, contractual data-location terms with customers, planned replacements and blackout periods (such as year-end or a retail peak).",
        ],
        code: {
          label: "Grouping dependencies into migration waves (illustrative)",
          text: "Wave 1 (pilot):   Company website, staging env\n                   -> few dependencies, low risk\n\nWave 2:           File server + backup\n                   -> move with identity changes\n\nWave 3:           ERP app + ERP DB + reporting\n                   -> must move together\n                   -> integrations: bank, ASP, WMS\n\nRetain:           Lab instrument server (latency)\nRetire:           Old intranet (idle, archive data)",
        },
      },
      {
        heading: "Migration frameworks: AWS, Azure and Google compared",
        body: [
          "The three largest providers each publish a migration framework. They use different words for similar ideas, and none of them requires you to use that provider. Reading them side by side is a good way to check your plan has no gaps.",
        ],
        table: {
          headers: ["Provider framework", "Structure", "Notes"],
          rows: [
            ["**AWS: 7 Rs**", "Seven strategies per application: retire, retain, rehost (‘lift and shift’), relocate, repurchase (‘drop and shop’), replatform (‘lift, tinker, and shift’), refactor or re-architect", "AWS recommends that, for large migrations, you rehost, relocate or replatform first and modernise after the move. It calls refactor ‘the most complex and costly’ strategy"],
            ["**Microsoft: Cloud Adoption Framework**", "Seven phases: Strategy, Plan, Ready, Adopt, Govern, Secure, Manage. Migration sits within Adopt", "Microsoft says adoption phases flow sequentially, while operational phases run in parallel. The framework also covers AI adoption and sovereignty scenarios"],
            ["**Google Cloud: migration path**", "Four phases: Assess, Plan, Deploy, Optimize", "A compact lifecycle that maps well onto a small or mid-sized programme"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: use the AWS 7 Rs (or an equivalent) to decide what happens to each workload, and a phase model (Microsoft's or Google's) to organise the programme. They answer different questions and work well together.",
        },
      },
      {
        heading: "Choosing a strategy per workload: rehost, replatform or refactor?",
        body: [
          "Most of the work in a migration falls into three strategies. The choice is a trade-off between speed now and benefit later.",
        ],
        table: {
          headers: ["Strategy", "What changes", "Speed", "Benefit captured", "Watch out for"],
          rows: [
            ["**Rehost (lift and shift)**", "Servers move largely as they are to cloud virtual machines", "Fastest", "Exit from hardware and data centre; little else", "Oversized machines cost more in the cloud; old problems move with you"],
            ["**Replatform (lift, tinker and shift)**", "Some components swap to managed services, e.g. a managed database or container platform", "Medium", "Less maintenance; better backups, scaling and patching", "Behaviour differences between self-managed and managed services; test thoroughly"],
            ["**Refactor or re-architect**", "Application redesigned for cloud services, e.g. splitting a monolith, event-driven processing", "Slowest", "Highest long-term flexibility and potential efficiency", "Cost and risk; AWS advises against it during large migrations"],
            ["**Repurchase**", "Move to a SaaS product and migrate the data", "Medium", "Provider runs the software", "Process change; data export and lock-in; product's own hosting location"],
            ["**Relocate**", "Move a virtualised platform to the provider's equivalent with minimal change", "Fast", "Quick exit from on-premises virtualisation", "Ties you to that platform's licensing"],
          ],
        },
        callout: {
          type: "note",
          text: "Applications rarely move alone. A web front end, its database and the reporting server that reads that database usually need to move in the same wave, because splitting them across an on-premises network and a cloud region adds latency and failure points. Our [[/blogs/api-integration-uae|API integration guide for UAE businesses]] covers how to reduce these hard couplings.",
        },
      },
      {
        heading: "UAE regional hosting: what each provider offers",
        body: [
          "**UAE facts.** The table summarises provider information checked between August and October 2026. ‘Reported’ means we relied on summaries rather than the provider's own page for that detail. Cloud offerings change, so confirm current status in each provider's console before committing.",
        ],
        table: {
          headers: ["Provider", "UAE or nearest region", "Key facts", "Source status"],
          rows: [
            ["**AWS**", "Middle East (UAE), me-central-1", "Opened 29 August 2022 with three Availability Zones. Amazon Bedrock became available in the region on 29 September 2025; individual model availability varies", "AWS launch post and announcement"],
            ["**Microsoft Azure**", "UAE North (Dubai); UAE Central (Abu Dhabi)", "UAE North is open to customers and supports availability zones (three, reported). UAE Central is access-restricted and reserved for UAE North customers who need in-country disaster recovery", "Microsoft region list; zone count reported"],
            ["**Oracle Cloud (OCI)**", "Dubai; Abu Dhabi", "Two public regions in the UAE, positioned by Oracle as giving in-country disaster recovery", "Oracle regions pages (reported)"],
            ["**Google Cloud**", "No UAE region; nearest Doha (me-central1) and Dammam (me-central2, access restricted)", "Google's locations page does not list a UAE region", "Google locations page; region details reported"],
            ["**Core42 sovereign cloud (with Microsoft)**", "Abu Dhabi government", "Multi-year agreement signed 18 March 2025 between Abu Dhabi's Department of Government Enablement, Microsoft and Core42; Core42's Sovereign Public Cloud is powered by Azure with its Insight sovereign-controls platform", "DGE announcement"],
          ],
        },
        callout: {
          type: "note",
          text: "Our recommendation: choose the region for each workload, not for the company. A marketing website can run on a global platform with a CDN; a patient record system in Abu Dhabi cannot. Many UAE businesses end up with a mix, which is fine if it is deliberate and documented.",
        },
      },
      {
        heading: "AI services in UAE regions: where does inference happen?",
        body: [
          "If your migration includes AI workloads, such as document processing, an internal assistant or AI features in a product, there is an extra question: where is the model actually run? Storage location and processing location are not always the same.",
          "**Microsoft Azure (checked September 2026).** Microsoft's model availability documentation says that for all deployment types, data stored at rest remains in the designated Azure geography. Processing depends on deployment type: Global deployments ‘might be processed in any Azure region where the model is deployed’; Data Zone deployments are processed within the US, EU or Asia Pacific, and the Middle East and Africa column shows Data Zone as not available; Standard (Regional) deployments are processed in the deployment's own region ([[https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-region-availability|Microsoft]]). At the time of checking, UAE North listed only embedding and speech models under pay-as-you-go Regional Standard; chat models with in-region processing appeared under Regional Provisioned (reserved capacity) deployments. In practice, in-UAE inference for a chat model on Azure meant provisioned capacity rather than pay-as-you-go.",
          "**AWS.** AWS announced on 29 September 2025 that ‘customers can use Amazon Bedrock in the Middle East (UAE) region’ ([[https://aws.amazon.com/about-aws/whats-new/2025/09/amazon-bedrock-middle-east-uae-region/|AWS]]). Each model has its own regional availability, so check the specific model you need, and check whether any cross-region inference option would route requests outside the UAE.",
          "**Self-hosting.** Running an open-weight model on your own cloud instances in a UAE region keeps processing in a known place, at the cost of operating the model yourself. Our [[/blogs/llm-self-hosting|LLM self-hosting guide]] covers when that makes sense, and [[/blogs/enterprise-ai-integration|enterprise AI integration]] covers connecting models to business systems. For budgeting the AI side, see [[/blogs/ai-development-cost-uae|AI development costs in the UAE]].",
        ],
      },
      {
        heading: "Data residency: what the rules say, and what they do not",
        body: [
          "Data residency is where cloud migration conversations in the UAE most often go wrong, in both directions: some businesses assume all data must stay in the UAE, others assume nothing applies to them. The honest position is that requirements depend on sector, data type and sometimes emirate. We list only rules we could trace to a source; this is not legal advice.",
        ],
        table: {
          headers: ["Area", "What sources say", "Source", "Confirm with"],
          rows: [
            ["**Health data (federal)**", "Federal Law No. 2 of 2019 on ICT in health fields restricts storing or processing health data outside the UAE", "Law-firm commentary (Latham & Watkins)", "Your health regulator or a UAE-qualified lawyer"],
            ["**Health information (Abu Dhabi)**", "ADHICS V2 applies to entities that handle health information in Abu Dhabi; its cloud control requires the environment, including backup and disaster recovery, to be hosted in the UAE", "Department of Health Abu Dhabi", "DoH Abu Dhabi"],
            ["**Banks (CBUAE)**", "The Central Bank's Outsourcing Regulation for Banks (2021) includes a requirement that data needed to conduct a bank's core activities is maintained and stored in the UAE, and limits sharing confidential customer data outside the UAE without approval", "Law-firm summary (Simmons & Simmons)", "CBUAE and your compliance team"],
            ["**Personal data (general)**", "The PDPL (Federal Decree-Law No. 45 of 2021) has applied since 2 January 2022 and sets conditions for transferring personal data outside the UAE; DIFC and ADGM have their own regimes", "u.ae", "A data protection adviser"],
            ["**Other sectors**", "We did not verify general localisation rules for other private-sector data", "—", "Your sector regulator and legal adviser"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Our recommendation: classify your data before you choose regions. If a workload holds health, banking or government data, start from UAE hosting (including backups and disaster recovery copies) and work outward only with advice. For healthcare-specific automation, see [[/blogs/ai-automation-healthcare-uae|AI automation for UAE healthcare]].",
        },
      },
      {
        heading: "Data migration: moving databases and files safely",
        body: [
          "Moving data is usually the riskiest part of a cloud migration, because it is where downtime and loss happen. The approach depends on data volume, how much downtime the business can accept and how often the data changes.",
          "**Offline copy.** Stop the application, copy the data, start it in the cloud. Simple and consistent, but downtime grows with data volume. Suitable for small databases and systems with a natural quiet window.",
          "**Initial load plus continuous sync.** Copy a full snapshot while the old system keeps running, then use replication or change data capture to keep the cloud copy current, and cut over with a short pause. This keeps downtime low but adds tooling and monitoring.",
          "**Reconcile before and after.** Compare row counts, checksums or control totals per table, and have business owners check key reports. Rehearse the migration at least once with production-sized data so timings are real. If your data includes Arabic text, test encoding and sorting explicitly; our [[/blogs/software-modernization-uae|software modernisation guide]] lists the common Arabic data pitfalls.",
          "**Plan the cutover around people.** Pick a window outside month-end, payroll and retail peaks; tell customers and suppliers; lower DNS time-to-live values in advance; and keep the old environment available read-only until the new one has proved itself. For public websites, our [[/blogs/website-migration-guide|website migration guide]] covers URLs, redirects and SEO, and [[/blogs/website-replatforming|website replatforming]] covers changing the platform at the same time.",
        ],
      },
      {
        heading: "Security in the cloud: shared responsibility, identity, encryption and logging",
        body: [
          "**Shared responsibility.** AWS describes its side as security ‘of’ the cloud: ‘AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud’. Security ‘in’ the cloud is yours, and ‘Customer responsibility will be determined by the AWS Cloud services that a customer selects’ ([[https://aws.amazon.com/compliance/shared-responsibility-model/|AWS]]). Microsoft is explicit that ‘for all cloud deployment types, you own your data and identities’, and its responsibility matrix shows configuration and settings as a customer responsibility in every model, including SaaS ([[https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility|Microsoft]]). Microsoft now also publishes separate shared responsibility models for AI and AI agents.",
          "**Identity.** Most cloud incidents start with an identity, not a hypervisor. Use single sign-on with multi-factor authentication for every human account, remove shared administrator logins, apply least privilege through roles, use separate accounts or subscriptions for production and non-production, and protect the root or global administrator credentials with hardware keys and break-glass procedures.",
          "**Encryption.** Encrypt data at rest and in transit by default (all major providers support this), decide whether you need customer-managed keys, and keep keys in the provider's key management service with access logged. For regulated data, check whether keys must also stay in-country.",
          "**Logging and monitoring.** Turn on the provider's audit logs for every account from day one, send them to a central, write-protected store, and alert on high-risk events such as new administrator roles, disabled logging, public storage buckets and logins from unusual locations.",
          "**Configuration.** Misconfiguration is the classic cloud failure. Define infrastructure as code, review changes, and use the provider's posture management tools to flag public exposure and weak settings. Our [[/blogs/website-security-checklist|website security checklist]] covers the application layer that sits on top.",
        ],
      },
      {
        heading: "Backups and disaster recovery: RPO and RTO",
        body: [
          "**Definitions.** **Recovery point objective (RPO)** is the maximum acceptable data loss measured in time: how far back you can afford to go. **Recovery time objective (RTO)** is the maximum acceptable time a system can be down before it is restored. Both are business decisions, set per system by the people who feel the impact, and they determine which recovery strategy you need.",
          "The cloud does not back up your data for you by default in every service, and replication is not a backup: a deleted table or ransomware encryption replicates too. Keep backups that are versioned, isolated from production credentials, and tested by restoring them. For regulated data, check that backup and disaster recovery copies are in a permitted location; ADHICS, for example, explicitly includes backup and disaster recovery in its UAE hosting requirement.",
        ],
        table: {
          headers: ["Recovery strategy", "How it works", "Typical RPO / RTO", "Relative cost"],
          rows: [
            ["**Backup and restore**", "Regular backups; rebuild the environment from them after an incident", "Longest of the four", "Lowest"],
            ["**Pilot light**", "Core data replicated; minimal infrastructure kept ready to scale up", "Shorter", "Low to medium"],
            ["**Warm standby**", "A scaled-down copy of the full environment running in a second location", "Shorter still", "Medium to high"],
            ["**Active-active (multi-site)**", "Two or more locations serving traffic at once", "Near zero", "Highest"],
          ],
        },
        callout: {
          type: "tip",
          text: "Availability Zones protect against the failure of one data centre within a region; a second region protects against a region-wide problem. Within the UAE, Azure's UAE Central and Oracle's paired Dubai and Abu Dhabi regions are positioned for in-country disaster recovery. Our [[/blogs/ecommerce-disaster-recovery|ecommerce disaster recovery guide]] goes deeper on failure scenarios, rollback and DR testing.",
        },
      },
      {
        heading: "Cost drivers and cost governance",
        body: [
          "Cloud pricing is usage-based, so cost depends on design and discipline as much as on the provider's rate card. We do not quote prices here because they change frequently and vary by region and commitment; use each provider's pricing calculator for your own estimate. What we can set out is what drives the bill.",
        ],
        table: {
          headers: ["Cost driver", "What drives it", "How to control it"],
          rows: [
            ["**Compute**", "Instance size, number, hours running, operating system licences", "Rightsize from measured use; schedule non-production to switch off; autoscale"],
            ["**Storage**", "Volume, performance tier, snapshots, backup retention", "Lifecycle policies to cheaper tiers; delete orphaned volumes and old snapshots"],
            ["**Managed databases**", "Instance class, high availability, storage, backups", "Match HA to the system's RTO; review sizing after migration"],
            ["**Data transfer**", "Data leaving the cloud, between regions and sometimes between zones", "Keep chatty systems in the same region; use a CDN for public content"],
            ["**Software licences**", "Bring-your-own versus licence-included; per-core licensing", "Check licence mobility terms before choosing instance types"],
            ["**Support plans**", "Provider support tier, often a percentage of spend", "Choose the tier your RTOs actually need"],
            ["**AI and analytics services**", "Per-token or per-request usage; provisioned capacity reservations", "Set quotas and alerts; batch where latency allows; see our LLM cost guide"],
            ["**People and tooling**", "Cloud operations, security monitoring, migration tools, partner fees", "Budget them explicitly; they are often missed"],
          ],
        },
        checklist: [
          "**Tagging:** tag every resource with owner, environment, application and cost centre from day one; enforce it with policy.",
          "**Budgets and alerts:** set budgets per account or application with alerts at thresholds, sent to the owner, not only to IT.",
          "**Rightsizing:** review utilisation after the first weeks; on-premises servers were often sized for peaks that never came.",
          "**Commitments:** once usage is steady, consider reserved instances or savings plans for the predictable baseline, and keep spiky workloads on demand.",
          "**Clean-up:** run a regular review of idle resources, unattached storage and forgotten test environments.",
          "**Showback:** report spend by team or product so the people creating cost can see it.",
        ],
      },
      {
        heading: "Post-migration monitoring and the Well-Architected pillars",
        body: [
          "A migration is not finished at cutover. Plan a stabilisation period in which you compare performance with the baselines captured in discovery, watch error rates and user feedback, check that backups and alerts are working, and confirm costs match the model.",
          "AWS's Well-Architected Framework is a useful review structure after the move, whichever provider you use. It has six pillars: ‘operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability’ ([[https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html|AWS Well-Architected]]). Microsoft and Google publish comparable frameworks.",
        ],
        table: {
          headers: ["Pillar", "Questions to ask after migration"],
          rows: [
            ["**Operational excellence**", "Are deployments automated and repeatable? Are runbooks current? Who is on call?"],
            ["**Security**", "Is MFA enforced everywhere? Are audit logs on and protected? Are there public resources that should not be?"],
            ["**Reliability**", "Have we tested a restore and a zone failure? Do RPO and RTO hold in practice?"],
            ["**Performance efficiency**", "Is the system as fast as before, or faster? Are we using the right instance and storage types?"],
            ["**Cost optimisation**", "Is spend in line with the model? What is idle? Are commitments in place for steady usage?"],
            ["**Sustainability**", "Are we running resources we do not need? Can non-production environments switch off?"],
          ],
        },
        callout: {
          type: "note",
          text: "Ongoing ownership matters as much as the migration itself. Our [[/blogs/website-maintenance-guide|website maintenance guide]] covers patching and routine checks, and [[/blogs/ecommerce-observability|ecommerce observability]] covers monitoring design for customer-facing systems.",
        },
      },
      {
        heading: "Risks and how to reduce them",
        body: [
          "The risks below are the ones we see most often in migration plans. None is unique to the UAE, but data location and Arabic data add local variations.",
        ],
        table: {
          headers: ["Risk", "What it looks like", "Mitigation"],
          rows: [
            ["**Missed dependency**", "A report, integration or batch job breaks after cutover", "Automated discovery plus interviews; move tightly coupled systems in the same wave"],
            ["**Data loss or corruption**", "Missing records, broken Arabic text, mismatched totals", "Rehearsed migrations; reconciliation; keep old system read-only until sign-off"],
            ["**Extended downtime**", "Cutover takes longer than the window", "Initial load plus sync; timed rehearsals; clear go/no-go criteria"],
            ["**Wrong hosting location**", "Regulated data, backups or AI processing outside a permitted location", "Classify data first; check backup and AI processing locations, not only primary storage"],
            ["**Cost overrun**", "Bills higher than the old environment", "Rightsizing, tagging, budgets and alerts from day one"],
            ["**Security misconfiguration**", "Public storage, over-privileged accounts, logging off", "Landing zone with guardrails; infrastructure as code; posture monitoring"],
            ["**Skills gap**", "Team cannot operate the new environment", "Training before cutover; documented runbooks; a support arrangement"],
            ["**Lock-in**", "Hard to move later because of proprietary services", "Accept it consciously where the benefit is worth it; keep data exportable"],
          ],
        },
      },
      {
        heading: "Cloud migration readiness checklist",
        body: [
          "Use this checklist before you commit to a migration date. If more than a few items are unanswered, extend discovery rather than starting the move.",
        ],
        checklist: [
          "We know why we are migrating and how we will measure success.",
          "We have a complete inventory of applications, infrastructure and data, with owners.",
          "Dependencies are mapped and grouped into waves.",
          "Each workload has a strategy: retire, retain, rehost, relocate, repurchase, replatform or refactor.",
          "Data is classified, and we know which workloads have location requirements (health, banking, government or contractual).",
          "We have chosen providers and regions per workload, including where backups, DR copies and AI processing will sit.",
          "A landing zone is designed: accounts or subscriptions, networking, identity, logging and guardrails.",
          "RPO and RTO are agreed for each critical system.",
          "A data migration approach is chosen, rehearsed and reconciled.",
          "Rollback plans and go/no-go criteria exist for each wave.",
          "A cost model exists per workload, with tagging and budgets ready.",
          "Monitoring, alerting and on-call arrangements are ready for day one.",
          "The team that will run the environment has been trained.",
          "Legal or compliance advice has been taken where data residency applies.",
        ],
        callout: {
          type: "tip",
          text: "Score each line as 0 (not started), 1 (in progress) or 2 (done). Anything below 2 on data classification, dependencies, RPO/RTO or rollback is a reason to wait.",
        },
      },
      {
        heading: "Hypothetical examples",
        body: [
          "These examples are illustrative composites, not ZSpace clients or real companies.",
          "**Hypothetical example 1: an Abu Dhabi clinic group.** A group of outpatient clinics runs its patient management system and file server in a server room that needs new hardware. Patient data is in scope of ADHICS, so the group's adviser confirms that hosting, backups and DR must be in the UAE. Decision: replatform the patient system to a UAE region with a managed database, keep backups and DR copies in-country, and retain one lab-integration server on site because of a device connection. The public website, which holds no patient data, moves to a global platform with a CDN. A planned AI assistant for appointment queries is designed only after checking where the chosen model would process data.",
          "**Hypothetical example 2: a Dubai ecommerce retailer.** A retailer runs its storefront on a hosted platform but keeps its order management, warehouse integration and reporting on two ageing virtual servers. Discovery finds a third server that is idle. Decision: retire the idle server, rehost the order management system and its database together in a UAE region to keep the move quick before the next sales peak, then replatform the database to a managed service in a second phase. Tagging and budgets are set from day one; a rightsizing review after the first month trims the instances that were copied at on-premises sizes.",
          "**Hypothetical example 3: a B2B SaaS startup serving the GCC.** A startup hosted in a European region wins a UAE enterprise customer that asks for in-country hosting in its contract. Decision: add a UAE-region deployment for customers that need it, using the same infrastructure code, rather than moving every customer. Our guide to [[/blogs/saas-development-gcc|SaaS development for the GCC]] covers tenant and region design in more depth.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "**Treating migration as one project** rather than a set of workload decisions.",
          "**Lifting and shifting oversized servers** and then being surprised by the bill.",
          "**Checking only where primary data is stored,** not where backups, logs, DR copies and AI processing go.",
          "**Assuming all data must stay in the UAE,** or that none of it must; both lead to poor designs.",
          "**Skipping the landing zone** and building production in a single account with shared admin logins.",
          "**Leaving monitoring and cost alerts until after go-live.**",
          "**No rehearsal** of the data migration or the rollback.",
          "**Migrating and modernising at the same time** on a critical system, so every problem has two possible causes.",
        ],
      },
      {
        heading: "Where cloud migration fits in a wider plan",
        body: [
          "Cloud migration is often one step in a wider change: modernising old applications, integrating systems through APIs, adding AI, or expanding across the region. Our [[/blogs/software-modernization-uae|software modernisation roadmap]] covers what to do with the applications themselves, [[/blogs/gcc-digital-transformation|GCC digital transformation]] covers regional architecture for businesses expanding beyond the UAE, and [[/blogs/web-development-abu-dhabi|web development in Abu Dhabi]] covers local requirements such as ADHICS and UAE PASS for customer-facing builds. For data protection in AI systems, see [[/blogs/ai-data-privacy|AI data privacy]], and for controlling AI running costs after migration, [[/blogs/llm-cost-optimization|LLM cost optimisation]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Migration frameworks:** [[https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html|AWS Prescriptive Guidance, migration strategies (7 Rs)]]; [[https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview|Microsoft Cloud Adoption Framework]]; [[https://docs.cloud.google.com/architecture/migration-to-gcp-getting-started|Google Cloud, migration to Google Cloud: getting started]]; [[https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html|AWS Well-Architected Framework pillars]].",
          "**Security:** [[https://aws.amazon.com/compliance/shared-responsibility-model/|AWS shared responsibility model]]; [[https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility|Microsoft, shared responsibility in the cloud]].",
          "**Regions and services:** [[https://aws.amazon.com/blogs/aws/now-open-aws-region-in-the-united-arab-emirates-uae/|AWS, UAE region now open (2022)]]; [[https://aws.amazon.com/about-aws/whats-new/2025/09/amazon-bedrock-middle-east-uae-region/|AWS, Amazon Bedrock in the UAE region (2025)]]; [[https://learn.microsoft.com/en-us/azure/reliability/regions-list|Microsoft Azure regions list]]; [[https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-region-availability|Microsoft, Foundry model region availability]]; [[https://www.oracle.com/ae/cloud/cloud-regions/abu-dhabi/|Oracle Cloud, Abu Dhabi region]]; [[https://cloud.google.com/about/locations|Google Cloud locations]]; [[https://dge.gov.ae/en/news/microsoft-g42|DGE Abu Dhabi, Microsoft and Core42 sovereign cloud]].",
          "**Data rules:** [[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae data protection laws]]; [[https://www.doh.gov.ae/-/media/78A323607B4C4ACAA58D0C9ACCFB3D59.ashx|DoH Abu Dhabi, ADHICS V2]]; [[https://lw.com/thoughtLeadership/lw-new-uae-law-regulates-healthcare-data|Latham & Watkins on UAE health data law]]; [[https://www.simmons-simmons.com/en/publications/ckqte9ybm223e0970rzs538ah/update-to-outsourcing-regime-for-uae-banks|Simmons & Simmons on the CBUAE outsourcing regime]].",
          "Cloud region status, model availability and regulations change; re-check before relying on them. Items described as ‘reported’ come from summaries rather than the provider's or regulator's own page. Nothing here is ZSpace client data, and nothing is legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Cloud migration in the UAE is now a practical option for most workloads, with in-country regions from AWS, Azure and Oracle. The decisions that matter are made before any server moves: which workloads to migrate, retain, replace or retire; where each one, and its backups and AI processing, may be hosted; how security responsibilities are split; and how cost will be governed. Get discovery, data classification and RPO/RTO right, migrate in rehearsed waves, and review the result against the Well-Architected pillars.",
          "Move what benefits from moving, keep what should stay, and document why. That is what makes a migration defensible to your board, your customers and your regulator.",
        ],
        cta: {
          title: "Planning a move to the cloud?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with UAE and global businesses on [[/services/website-development|web platforms and custom software]], including migrations and the modernisation work that often comes with them, as well as [[/services/ai-automation|automation and AI]]. If a second opinion on your migration plan would help, we are happy to talk it through.",
        },
      },
    ],
  },
];
