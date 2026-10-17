import type { BlogPost } from "./blog-data";
import { webDevFrameworkTable } from "./blog-data-webdev";

/**
 * Website Development cluster — second wave: choosing a development
 * company, the requirements document, pre-development planning, the
 * redesign-vs-rebuild decision and its symptom-based companion, and the
 * two core technology-selection articles (Next.js, React vs. Next.js).
 * Same additive module pattern, merged into `posts` in blog-data.ts.
 */

export const webDevPosts2: BlogPost[] = [
  // ----------------------------------------------------- CHOOSING AGENCY
  {
    slug: "how-to-choose-website-development-company",
    title: "How to Choose a Website Development Company: Scorecard, Due-Diligence Questions and Red Flags",
    seoTitle: "How to Choose a Website Development Company",
    excerpt:
      "Compare web development agencies on evidence: pass/fail gates, a weighted scorecard, technical due-diligence questions, a reference-call script and red flags.",
    category: "Web Development",
    banner: "framework",
    sceneKind: "compare",
    bannerAlt: "An agency evaluation scorecard: pass/fail gates for ownership, named builders, a technical walkthrough, change control and acceptance, followed by weighted criteria",
    date: "2026-09-19",
    updated: "2026-10-15",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    faqs: [
      { q: "What's the most important factor when choosing a website development company?", a: "Relevant experience with projects similar in complexity to yours matters more than general reputation. A portfolio full of simple brochure sites doesn't predict success on a complex web application, and vice versa." },
      { q: "Should I always choose the company with the lowest quote?", a: "No. Compare what's actually included in each quote (QA, content migration, post-launch support, documentation) before assuming a lower number is better value." },
      { q: "Do I own the code after the project is finished?", a: "Only if the contract says so. Clarify code and IP ownership before starting, not after the project is delivered, and make sure the repository, domain and hosting accounts are in your name or transfer to you on a stated trigger." },
      { q: "Should a development company provide references or past work?", a: "Yes. A reputable company should be able to show relevant past work and, ideally, connect you with a past client for a reference, without you having to press hard for it." },
      { q: "How important is a company's technology expertise?", a: "Very, if your project has specific technical requirements. Ask directly about their experience with your chosen (or being-considered) stack, not just general web development experience." },
      { q: "Should I ask about their QA process before hiring?", a: "Yes. A company with a documented QA process (device and browser testing, accessibility checks, performance verification) is less likely to hand off a site with avoidable issues." },
      { q: "What should a contract with a development company include?", a: "Scope, timeline, payment terms, IP and code ownership, what happens if scope changes, how the work is accepted, and what post-launch support (if any) is included." },
      { q: "How do I know if a company will support the site after launch?", a: "Ask directly what post-launch support looks like and what it costs. Don't assume it's included by default." },
      { q: "Should I choose a local company or is remote fine?", a: "Remote work is standard and effective in website development. Prioritise relevant expertise, communication quality and process over physical location, and check that working hours overlap enough for decisions to happen quickly." },
      { q: "Can I ask an agency to show me code from another client's project?", a: "You can ask, but a careful agency will protect its clients' confidentiality. Accept a walkthrough of a redacted repository, an internal project or an open-source contribution instead. What matters is that you see real pull requests, review comments and a build pipeline, not slides about them." },
      { q: "Is software escrow worth it for a website build?", a: "Usually not, if the work lives in a repository you own and can access throughout the project. Escrow, where a third party holds the source code and releases it on events such as insolvency, matters more for licensed or hosted software you cannot hold yourself. Most information about escrow comes from escrow providers, so take legal advice on whether you need it." },
      { q: "How many agencies should I compare?", a: "Three is usually enough to see the range without making the evaluation a project in itself. Send all of them the same written requirements so their proposals are comparable, and score them with the same scorecard." },
    ],
    relatedSlugs: ["best-web-development-agencies-in-india"],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Choose a website development company on evidence, not on how polished the proposal looks. First apply five pass/fail gates: you will own the code and accounts, the people who will build it are named, the agency will walk you through real work, change control is written down, and so is acceptance. Then score the agencies that pass on weighted criteria: relevant delivery, technical practice, security, process and communication, contract terms, and support and exit. Ask for evidence behind each answer, call a past client, and walk away from the red flags below. For a disclosed comparison of providers, see our shortlist of [[/blogs/best-web-development-agencies-in-india|web development companies in India]].",
          "This guide is vendor-neutral and works wherever you are hiring. For regional detail, see the guides to choosing a [[/blogs/web-development-company-australia|web development company in Australia]], a [[/blogs/web-development-company-dubai|web development company in Dubai]] or a [[/blogs/software-development-company-uae|software development company in the UAE]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Separate gates (fail one and the agency is out) from weighted criteria (where agencies earn points).",
          "Every answer an agency gives should come with evidence you can look at: a repository, a pipeline, a test report, a change log.",
          "Score price separately, on the same written scope, after quality. Cheap and vague usually costs more later.",
          "Ask the reference client what went wrong after launch, not whether they were happy.",
          "Keep the domain, repository, hosting and analytics in your name from day one.",
        ],
      },
      {
        heading: "Before you compare: give every agency the same brief",
        body: [
          "Proposals only become comparable when every agency prices the same written scope. A short requirements document with goals, pages, features, integrations and acceptance criteria is enough; see [[/blogs/website-requirements-document|what a website requirements document should include]]. State outcomes and constraints, and let each agency propose the technology. The UK government's Digital, Data and Technology Playbook makes the same point for public buyers: \"Requirements should be drafted to be supplier or technology agnostic\", which reduces lock-in ([[https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook-html|DDaT Playbook]]).",
          "Decide early whether you are building a website or a web application. Logins, roles, stored customer data and multi-step workflows change which evidence matters; [[/blogs/custom-website-vs-web-application|this comparison of websites and web applications]] explains the difference. If you are still deciding between an agency and an individual, read [[/blogs/website-development-company-vs-freelancer|agency vs freelancer]] first.",
        ],
      },
      {
        heading: "Agency evaluation scorecard, part 1: pass/fail gates",
        body: [
          "The scorecard has two parts. **Part 1 is a set of gates.** An agency that fails any gate is out, however good its portfolio is, because each gate protects you from a problem that is expensive or impossible to fix after signing. **Part 2 is weighted criteria**, scored only for agencies that pass every gate.",
        ],
        table: {
          headers: ["Gate", "Passes when", "Evidence to ask for"],
          rows: [
            ["**Ownership**", "You own the domain, repository, hosting and analytics accounts, or the contract transfers them on a stated trigger, and IP in the work is assigned to you on payment", "The ownership and IP clauses in the draft contract; confirmation of whose name each account will be in"],
            ["**Named builders**", "The people who will design and build the work are named, with their role and roughly how much of their time goes to your project", "Names, roles and allocation in the proposal; a short call with the lead developer"],
            ["**Technical walkthrough**", "The agency will show you real work: a repository, pull requests and a build pipeline, live or redacted", "A 30 to 45 minute screen-share, booked before you sign"],
            ["**Written change control**", "There is a written process for requesting, estimating and approving changes before work starts on them", "The change-request process or template the agency actually uses"],
            ["**Written acceptance**", "The contract says how finished work is tested and accepted, and how defects are handled", "The acceptance clause, and an example acceptance or UAT checklist"],
          ],
        },
        callout: {
          type: "tip",
          text: "Gates are about willingness as much as paperwork. An agency that says \"we can sort ownership out at the end\" or will not show any real work before you sign has already failed.",
        },
      },
      {
        heading: "Agency evaluation scorecard, part 2: weighted criteria",
        body: [
          "Score each agency that passed the gates from 1 (weak) to 5 (strong) on each criterion, multiply by the weight and add up. The weights below are a starting point, not a standard: change them to suit your project, but agree them **before** you read the proposals so the scoring cannot drift towards a favourite. If several people evaluate, score separately, then discuss differences and agree one score per criterion rather than averaging.",
          "Price is deliberately not a weighted criterion. Compare it separately, on the same scope, once you know which agencies are good enough. The DDaT Playbook says evaluation should \"focus on value over cost in order to avoid a 'race to the bottom'\" and that \"quality will be weighted higher than cost\". That guidance is written for UK central government, but the principle transfers to any buyer.",
        ],
        table: {
          headers: ["Criterion", "Suggested weight", "What a 5 looks like"],
          rows: [
            ["Relevant delivery evidence", "25%", "Several live projects of similar type and complexity, with the same people who will work on yours, and a reference client willing to talk"],
            ["Technical practice", "20%", "Code review on every change, automated tests that run in CI, separate staging and production, documented architecture"],
            ["Security practice", "15%", "Dependencies tracked and patched on a schedule, secrets kept out of the repository, a named approach to secure development"],
            ["Delivery process and communication", "15%", "A clear plan with milestones, a named day-to-day contact, regular demos of working software, decisions recorded in writing"],
            ["Commercial and contract terms", "15%", "Clear payment milestones tied to accepted work, a change process with priced impacts, a fair warranty and termination clause"],
            ["Support and exit", "10%", "A defined support offer, handover documentation, and a credible plan for another team to take over if needed"],
          ],
        },
      },
      {
        heading: "Technical due-diligence questions, and the evidence to ask for",
        body: [
          "Ask these in the technical walkthrough, not by email. Good agencies answer by showing you something; weak ones answer with adjectives. The questions matter most for web applications, but most apply to any custom build.",
        ],
        table: {
          headers: ["Question", "Evidence to ask for", "What a weak answer sounds like"],
          rows: [
            ["Can you walk us through a repository from a comparable project?", "Branching, pull requests with review comments, a readable commit history", "\"Our code is confidential\" with no redacted or internal alternative"],
            ["What runs automatically on every change?", "The CI pipeline configuration, plus a recent failed build and how it was fixed", "\"We test everything before release\" with nothing automated"],
            ["How do you test?", "A recent test report; which tests are automated and which are manual", "Testing described only as \"QA at the end\""],
            ["Who on this team has built something like this before?", "Named people, their past projects, and their time allocation to yours", "A team list that changes when you ask who exactly"],
            ["How do you manage third-party dependencies and vulnerabilities?", "A dependency list or software bill of materials, and how often updates are applied", "\"We update when something breaks\""],
            ["How do you handle secrets and environments?", "No credentials in the repository; separate staging and production; who has production access", "Shared passwords, or one environment for everything"],
            ["What happens to our data during development?", "Test data or anonymised copies; production data kept off developer laptops", "\"We'll just copy the live database\""],
            ["How are changes requested, estimated and approved?", "A redacted change log or change request from another project", "\"We're flexible\" with nothing written down"],
            ["What do we receive at launch?", "A handover checklist covering accounts, code, documentation and credentials", "Handover described as \"we send you the files\""],
          ],
        },
      },
      {
        heading: "Using security frameworks as a question bank",
        body: [
          "You do not need to be a security specialist to ask good security questions. Three public frameworks give you neutral wording to borrow. Use them to ask \"show me how you do this\", not to demand a certificate that most small agencies will not have.",
        ],
        checklist: [
          "**UK Software Security Code of Practice.** A voluntary code from the UK government and NCSC with 14 principles in four themes. Useful questions come straight from it: do you \"follow an established secure development framework\" (1.1), do you \"understand the composition of the software\" you ship (1.2), and do you \"protect the build environment against unauthorised access\" (2.1)? It is written for vendors supplying software to businesses, so treat it as a question bank for a bespoke build rather than a compliance test ([[https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice|GOV.UK]]).",
          "**OWASP SAMM.** The Software Assurance Maturity Model \"defines five business functions and fifteen security practices\". The most relevant to agency selection are Secure Build, Secure Deployment and Defect Management (under Implementation) and Security Testing (under Verification). Ask the agency which of these it does routinely and how ([[https://owaspsamm.org/model/|OWASP SAMM]]).",
          "**OWASP ASVS.** The Application Security Verification Standard, currently version 5.0.0, \"provides a basis for testing web application technical security controls\". For a web application with logins or sensitive data, ask whether the agency tests against it or a similar checklist, and which requirements it treats as in scope ([[https://owasp.org/www-project-application-security-verification-standard/|OWASP ASVS]]).",
        ],
        callout: {
          type: "note",
          text: "If you are hiring in the UK, the government's former Digital Outcomes and Specialists buyer guidance (withdrawn on 31 December 2025) described a similar method: score every supplier against the same criteria using a scoring template, and agree scores as a team rather than averaging them. It is no longer current guidance, but the method still works for private buyers.",
        },
      },
      {
        heading: "A reference-call script",
        body: [
          "Ask the agency for a past client whose project resembled yours, then book 20 minutes. Ask open questions and listen for specifics; \"they were great\" tells you little. Take notes against the same questions for every agency.",
        ],
        checklist: [
          "\"What did they build for you, and how similar was it to what we're planning?\"",
          "\"Were the people who did the work the same people who pitched to you?\"",
          "\"When the scope changed, how was it handled and priced? Were there any surprises on the invoice?\"",
          "\"What broke after launch, and how quickly and willingly did they fix it?\"",
          "\"Do you have full access to your code, hosting, domain and analytics today, without asking them?\"",
          "\"How did they deliver bad news, such as a delay or a problem they had caused?\"",
          "\"Would you hire them again for the same kind of project? What would you do differently?\"",
        ],
        callout: {
          type: "tip",
          text: "The agency chooses its references, so expect positive answers. The useful signal is in the detail: how changes were priced, what broke and who owns the accounts now.",
        },
      },
      {
        heading: "Red flags, and what to do about each",
        body: [
          "One red flag is not always disqualifying, but each should get a direct question and a written answer before you sign.",
        ],
        table: {
          headers: ["Red flag", "Why it matters", "What to do"],
          rows: [
            ["No repository access until final payment", "You cannot check progress or quality, and you depend on the agency to release your own work", "Require access from the first commit; tie IP transfer, not access, to payment"],
            ["Domain, hosting or analytics registered in the agency's name", "Moving supplier later becomes a negotiation", "Create the accounts yourself and grant access; see the [[/blogs/software-vendor-handover-checklist|vendor handover checklist]]"],
            ["\"Unlimited revisions\" with no change process", "Changes get absorbed until they don't, then arrive as a dispute or a cut corner", "Ask for the written change process and an example change request"],
            ["A firm fixed price for a web app after a single call", "The agency cannot know the scope yet, so the risk is priced in or pushed back to you later", "Ask for paid discovery first; see [[/blogs/technical-discovery-software-projects|technical discovery]]"],
            ["No named developers, or a team that changes after signing", "The pitch team may not be the build team", "Name key people in the contract and agree how replacements are approved"],
            ["Refuses any technical walkthrough or trial", "You are buying on trust alone", "Treat it as a failed gate"],
            ["Portfolio links that are dead or cannot be attributed", "You cannot verify what they actually built", "Ask which parts they built and speak to that client"],
            ["Vague answers on testing, security or acceptance", "These gaps surface after launch, when they cost most", "Ask for evidence from the due-diligence table above"],
          ],
        },
      },
      {
        heading: "Contracts, pricing models and scope changes",
        body: [
          "The contract model changes who carries which risk. A fixed price suits a well-defined scope; time and materials suits work where you will learn as you go; many projects combine the two, with discovery first. See [[/blogs/fixed-price-vs-time-and-materials|fixed price vs time and materials]] for how to choose and which clauses to insist on. Whatever the model, budgets usually overrun through unmanaged changes rather than bad estimates, so read [[/blogs/scope-creep-software-projects|how to control scope creep]] before kickoff. For what drives quotes up or down, see the [[/blogs/website-development-cost|website development cost guide]].",
          "At minimum, the contract should cover scope (by reference to your requirements document), milestones and payment tied to accepted work, the change process, IP assignment, account ownership, acceptance and defect handling, warranty, support, confidentiality and data protection, and how either side can exit. Take legal advice in your jurisdiction; IP and data rules differ, which is why the regional guides linked above go into local detail.",
        ],
      },
      {
        heading: "Hypothetical example: three proposals, one scorecard",
        body: [
          "**This example is hypothetical.** A founder needs a customer portal with logins, a CRM integration and an admin area, and sends the same requirements document to three agencies.",
          "**Agency A** has the most impressive portfolio but registers hosting in its own name and will not show any code before signing. It fails two gates and is out. **Agency B** passes the gates and shows a pipeline with automated tests and reviewed pull requests, but its portfolio is mostly marketing sites; it scores 3 on relevant delivery and 5 on technical practice. **Agency C** passes, has built two similar portals with the named lead developer, and its reference client confirms the same team delivered; it scores 5 and 4 on those criteria.",
          "With weights agreed in advance, C comes out ahead of B. Only then does the founder compare the two prices on the same scope, and asks B why its estimate for the integration is so much lower before deciding.",
        ],
      },
      {
        heading: "What else to check",
        body: [
          "**Process and QA.** Ask how a project moves from kickoff to launch and how testing works across devices, browsers and accessibility. The [[/blogs/website-development-process|website development process guide]] shows what a solid process looks like, and the [[/blogs/website-performance-optimization|performance]], [[/blogs/website-accessibility-guide|accessibility]] and [[/blogs/website-security-checklist|security]] guides describe good practice to compare answers against.",
          "**UX capability.** Development quality alone does not make a site easy to use. Ask how design decisions are made and who does the research.",
          "**Support and documentation.** Ask what post-launch support covers and costs, and whether you will receive documentation good enough for a different team to take over. See the [[/blogs/website-maintenance-guide|maintenance guide]] for what ongoing support should realistically include.",
          "**Specialist builds.** For an online store, use the [[/blogs/how-to-choose-a-shopify-development-agency|guide to choosing a Shopify agency]]; for an app, see [[/blogs/how-to-choose-a-mobile-app-development-company|how to choose a mobile app development company]].",
        ],
      },
      {
        heading: "When this scorecard is overkill",
        body: [
          "For a small brochure site built on a standard CMS theme, a full technical walkthrough and weighted scoring is more effort than the risk justifies. Keep the ownership and acceptance gates, look at two or three comparable live sites and make one reference call. The scorecard earns its time on web applications, integrations, stored personal data, or any project where switching supplier halfway would be painful.",
          "It also cannot tell you whether your idea is right. If you are unsure what to build, spend on discovery or prototyping before you spend on agency selection.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "UK government: [[https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice|Software Security Code of Practice (DSIT and NCSC, voluntary; updated 15 January 2026)]]; [[https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook-html|The Digital, Data and Technology Playbook (updated 20 June 2023)]]; [[https://www.gov.uk/guidance/how-to-evaluate-digital-outcomes-and-specialists-suppliers|How to evaluate Digital Outcomes and Specialists suppliers (withdrawn 31 December 2025; cited as historical)]].",
          "OWASP: [[https://owaspsamm.org/model/|Software Assurance Maturity Model (SAMM)]]; [[https://owasp.org/www-project-application-security-verification-standard/|Application Security Verification Standard (ASVS) 5.0.0]].",
          "Accessed 15 October 2026. Guidance and frameworks are updated from time to time; check the current versions.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Choosing a website development company is due diligence, not a gut-feel decision. Send every agency the same brief, remove anyone who fails a gate, score the rest with weights you set in advance, ask for evidence behind every claim, call a past client and compare price last. Keep the accounts in your name from the start. For the bigger picture before your first vendor conversation, see the [[/blogs/website-development-guide|complete website development guide]], and for larger UK custom builds, [[/blogs/custom-software-development-uk|our UK custom software buyer's guide]].",
        ],
        cta: {
          title: "Want a second opinion on a proposal?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|website and web application development]]. If useful, we can walk you through a real repository and our delivery process, or talk through a proposal you have received against the scorecard above.",
        },
      },
    ],
  },

  // ------------------------------------------------------ REQUIREMENTS DOC
  {
    slug: "website-requirements-document",
    title: "Website and Web App Requirements Document: What to Include (With Template)",
    seoTitle: "Website Requirements Document: What to Include",
    excerpt:
      "What a website or web app requirements document should include: a permissions matrix, integration register, testable requirements and a copyable template.",
    category: "Web Development",
    banner: "reqchecklist",
    sceneKind: "roadmap",
    bannerAlt: "A requirements document checklist covering goals, pages, user roles, integrations, non-functional requirements and acceptance criteria before agencies quote",
    date: "2026-09-19",
    updated: "2026-10-14",
    readingTime: "13 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    relatedSlugs: ["product-requirements-document", "custom-website-vs-web-application", "technical-discovery-software-projects"],
    faqs: [
      { q: "What is a website requirements document?", a: "A structured document defining a website project's business objectives, audience, pages, features, user roles, integrations, content needs, non-functional requirements and acceptance criteria. It is the shared reference that both the client and the development team work from, and the document agencies quote against." },
      { q: "Who should write the requirements document?", a: "Ideally both sides. The business provides goals, audience, content direction, rules and priorities; the development team translates that into technical requirements and identifies gaps or open questions. The founder should own the final version." },
      { q: "Do I need a requirements document for a small website?", a: "Yes, even a lightweight version. Two or three pages covering goals, a page list, forms and integrations, and how you will accept the work still prevents the most common source of scope disputes: misaligned expectations." },
      { q: "What happens if I skip the requirements document?", a: "Scope tends to drift, quotes cannot be compared, feedback cycles get longer, and disagreements about what was agreed become more likely. It is one of the most common and most avoidable causes of project delay and cost overrun." },
      { q: "Should the requirements document include design direction?", a: "It can include high-level direction, such as brand guidelines and examples of sites you admire, but detailed visual design usually comes later, informed by the requirements rather than specified within them." },
      { q: "How detailed should acceptance criteria be?", a: "Specific enough that both sides can objectively agree whether a feature is done. \"The site should work well\" invites disputes; \"the contact form sends a confirmation email within 30 seconds\" does not." },
      { q: "Should the requirements document be updated during the project?", a: "Yes, if scope genuinely changes. Changes should be deliberate, agreed and recorded with a version number, not quietly absorbed without updating the reference both sides are working from." },
      { q: "Does a requirements document replace a project plan or timeline?", a: "No. It defines what is being built; the [[/blogs/website-development-project-planning|project planning guide]] and [[/blogs/website-development-timeline|timeline guide]] cover how and when it gets built." },
      { q: "Should I specify the framework, CMS or hosting provider?", a: "Only if you have a genuine constraint, such as an existing platform your team already runs, a security policy or a hosting region you must use. Otherwise state the outcome you need and ask each agency to propose and justify its technology. Naming a stack too early can rule out better options or commit you to one you do not need." },
      { q: "What is a roles and permissions matrix?", a: "A table with user roles down one side and actions across the top (view, create, edit, approve, export, delete), with each cell saying whether that role can do it, and on which records. It turns a vague line such as \"admins can manage everything\" into something a developer can build and a tester can check." },
    ],
    content: [
      {
        heading: "What should a website requirements document include?",
        body: [
          "**A good requirements document states what the site or app must achieve, for whom, and how you will know each part is done. For a website, that means objectives, audience, a page list, features, forms, integrations, content and CMS needs, analytics events, non-functional requirements (performance, accessibility, security, browsers) and acceptance criteria. A web app adds a roles and permissions matrix, data records, an integration register with direction and timing, notifications, admin tools, data migration, audit logging and environments.** Every requirement should be testable, and the document should say what is out of scope.",
          "This guide is for founders and managers briefing agencies or freelancers before asking for quotes. It updates our earlier checklist with a permissions matrix, an integration register, measurable non-functional requirements, an untestable-to-testable rewrite table and a copyable two-tier template.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Agencies can only give comparable quotes if they price the same written scope.",
          "Decide the business rules yourself; let the agency propose the technology.",
          "Write each requirement so a tester could prove it passed or failed.",
          "Web apps need a permissions matrix and an integration register; brochure sites rarely do.",
          "Say what is out of scope. Unlisted items are where most change requests come from.",
        ],
      },
      {
        heading: "Which document is this, and which do you need?",
        body: [
          "This is the pre-vendor scope brief: the document you send to agencies so they can estimate and so you can accept the finished work. It is not a feature-level product spec. Once you have a team, individual features are usually specified in more depth; see [[/blogs/product-requirements-document|how to write a product requirements document]] for that later stage, and [[/blogs/technical-discovery-software-projects|technical discovery]] for the work an agency does to firm up estimates.",
          "If you are not sure whether you are building a website or a web application, settle that first. Logins, stored customer data, roles and multi-step workflows change the size of the document and of the project; [[/blogs/custom-website-vs-web-application|this comparison of custom websites and web applications]] explains the difference.",
        ],
      },
      {
        heading: "What you decide and what the agency proposes",
        body: [
          "Founders often over-specify the technology and under-specify the business rules. The split below keeps you in charge of the decisions only you can make, and leaves agencies room to compete on how they solve them.",
        ],
        table: {
          headers: ["Area", "You decide", "The agency proposes"],
          rows: [
            ["Goals and audience", "Business objectives, primary users, priority journeys", "How the structure and UX support them"],
            ["Scope", "Must-have, should-have and out-of-scope lists", "Phasing, and what to cut if the budget is tight"],
            ["Business rules", "Who can do what, approval steps, pricing and booking rules", "How the rules are modelled and enforced"],
            ["Data", "Which records exist, who owns them, retention needs", "Database design and storage"],
            ["Integrations", "Which systems, what data, which system is the source of record", "Integration method, sync timing, error handling"],
            ["Quality targets", "The thresholds you need (speed, availability, accessibility level)", "How they will be met and measured"],
            ["Technology", "Hard constraints only (existing platform, hosting region, security policy)", "Framework, CMS, hosting and tooling, with reasons"],
            ["Acceptance", "What done means for each requirement", "The test approach and evidence they will provide"],
          ],
        },
      },
      {
        heading: "The core sections, with what to write",
        body: [
          "These are the sections from our original checklist, each with the level of detail that makes it quotable. For a five-page site, a sentence or two per section is enough; for a web app, most will grow into lists.",
        ],
        table: {
          headers: ["Section", "What to write", "Example"],
          rows: [
            ["Business objectives", "What the site must achieve, stated explicitly", "Generate qualified demo requests from operations managers"],
            ["Audience", "Who it is for, what they are trying to do, which devices matter", "Mostly mobile visitors comparing providers"],
            ["Pages and sitemap", "Every page or template and how they relate", "Home, 4 service pages, case-study template, blog, contact"],
            ["Features", "Every function beyond content pages, specific enough to estimate", "Search across services and articles, filter by industry"],
            ["User roles", "Each type of user and what they can see and do", "See the permissions matrix below"],
            ["Integrations", "Every connected system and the data that flows", "See the integration register below"],
            ["CMS and content", "Who edits what, how often, and who writes the launch content", "Marketing team edits pages and posts weekly; we supply all copy"],
            ["SEO and analytics", "Existing URLs to preserve, and the events to track", "Redirect all current URLs; track form submits and booking starts"],
            ["Non-functional", "Measurable targets for speed, accessibility, security, availability", "See the non-functional table below"],
            ["Browsers and devices", "The list, based on your own audience data where available", "Latest two versions of the main browsers; iOS and Android phones"],
            ["Acceptance criteria", "What done means for each major feature", "Contact form sends a confirmation email within 30 seconds"],
            ["Out of scope", "What is deliberately not included", "No multilingual content in phase 1"],
          ],
        },
      },
      {
        heading: "Roles and permissions matrix",
        body: [
          "If anyone logs in, write a matrix. List roles down the side and actions across the top, and say which records each permission applies to. \"Own\" and \"team\" matter as much as yes or no, because they decide how data is filtered and are a common source of security bugs. The example below is for a hypothetical client portal.",
        ],
        table: {
          headers: ["Role", "View", "Create", "Edit", "Approve", "Export", "Delete"],
          rows: [
            ["Customer", "Own records", "Own requests", "Own requests until submitted", "No", "Own invoices (PDF)", "No"],
            ["Account manager", "Assigned customers", "Requests for assigned customers", "Assigned customers", "Up to a set value", "Assigned customers (CSV)", "No"],
            ["Operations admin", "All", "All", "All", "Any value", "All", "Draft requests only"],
            ["Finance", "Invoices and payments", "Credit notes", "Invoice status", "Refunds", "All finance data", "No"],
            ["Super admin", "All", "Users and roles", "Users and roles", "No", "Audit log", "Users (deactivate, not delete)"],
          ],
        },
        callout: { type: "tip", text: "Add a row for what happens when someone leaves: who reassigns their records, and whether accounts are deactivated rather than deleted so the history stays intact." },
      },
      {
        heading: "Integration register",
        body: [
          "\"Integrates with our CRM\" can mean a one-off export or a two-way live sync with conflict rules, and the effort differs widely. A register forces the questions that drive the estimate. Fill in one row per connection; if you do not know an answer, write \"unknown\" so the agency can flag it rather than assume. For how these factors affect effort, see [[/blogs/api-integration-development-cost|how to estimate API integration cost]], and for the technical basics, [[/blogs/website-api-integration|how website API integrations work]].",
        ],
        table: {
          headers: ["System", "Data", "Direction", "Trigger", "Frequency", "Source of record", "If it fails", "Owner"],
          rows: [
            ["CRM", "New enquiries, contact details", "Site to CRM", "Form submitted", "Immediately", "CRM", "Queue and retry; alert sales ops", "Sales ops"],
            ["Payment provider", "Payments, refunds", "Both ways", "Checkout; provider webhook", "Immediately", "Payment provider", "Show a pending status; reconcile daily", "Finance"],
            ["Accounting", "Invoices", "App to accounting", "Invoice issued", "Hourly batch", "Accounting system", "Retry; daily mismatch report", "Finance"],
            ["Email platform", "Marketing consent", "Site to platform", "Consent ticked", "Immediately", "Email platform", "Retry; never send without consent", "Marketing"],
          ],
        },
      },
      {
        heading: "Non-functional requirements you can measure",
        body: [
          "Non-functional requirements describe how well the system works rather than what it does. \"Fast\", \"secure\" and \"scalable\" cannot be tested. Write each one as a measurable statement with a method of checking it. The numbers below are placeholders: choose them from your own traffic, audience and risk, or ask the agency to propose them with reasons.",
        ],
        table: {
          headers: ["Area", "Testable format", "How it is checked"],
          rows: [
            ["Page speed", "Key templates meet [target] for Largest Contentful Paint on a mid-range phone", "Lab tests before launch; field data after launch"],
            ["Accessibility", "Meets WCAG 2.2 Level AA on the sampled pages and journeys", "Automated scan plus manual keyboard and screen reader testing"],
            ["Availability", "Available [X]% of each month, excluding announced maintenance", "Uptime monitoring report"],
            ["Capacity", "Handles [N] concurrent users on the booking flow without errors", "Load test on a staging copy"],
            ["Security", "No open high-severity findings at launch; reviewed against the OWASP Top 10", "Security scan and review report"],
            ["Data recovery", "Backups every [period]; restore tested to within [time]", "A documented test restore"],
            ["Browsers and devices", "Works on the agreed browser and device list", "Test log against the list"],
            ["Data retention", "Enquiries deleted after [period] unless converted to customers", "Scheduled job and spot check"],
          ],
        },
      },
      {
        heading: "Rewriting untestable requirements",
        body: [
          "ISO/IEC/IEEE 29148 is the international standard for requirements engineering processes and the documents they produce. Published summaries of it describe the qualities a well-formed requirement should have; among them, each requirement should be unambiguous, singular (one thing per statement), feasible and verifiable. The GOV.UK Service Manual makes the same point in plainer language: acceptance criteria are often written as a list beginning \"it's done when…\", and user stories name who the user is, what they need and why ([[https://www.gov.uk/service-manual/agile-delivery/writing-user-stories|GOV.UK: writing user stories]]).",
          "Run your draft through this table. If a requirement could not fail a test, rewrite it.",
        ],
        table: {
          headers: ["Untestable", "Testable rewrite"],
          rows: [
            ["The site should be fast", "Home and service templates meet the agreed Largest Contentful Paint target on a mid-range phone"],
            ["Easy to update", "A marketing user can publish a new case study, with images, without developer help; it's done when one is published during acceptance"],
            ["Users can manage their account", "A customer can change their email, password and billing address; it's done when each change is confirmed by email"],
            ["Admins can see everything", "Operations admins can view all bookings, filtered by date, status and location (see permissions matrix)"],
            ["Integrates with our CRM", "Each enquiry creates or updates a CRM contact within 5 minutes; failures retry and alert sales ops"],
            ["Mobile friendly", "All pages work without horizontal scrolling on the agreed device list"],
            ["Secure", "Admin accounts require multi-factor authentication; sessions expire after the agreed idle time"],
            ["Accessible", "Meets WCAG 2.2 AA on the sampled pages and journeys, with an audit report"],
            ["Good SEO", "Every current URL redirects to its closest new page with a permanent redirect; titles and meta descriptions are editable"],
            ["Reports for management", "A monthly CSV of bookings by location and status can be downloaded by finance and super admins"],
          ],
        },
      },
      {
        heading: "Copyable template: website, plus web app extras",
        body: [
          "Copy the sections that apply. **Tier 1** covers a marketing or content website. **Tier 2** adds the sections a web app with logins, records and workflows needs. Number every requirement (for example R-12) so quotes, test notes and change requests can refer to it.",
          "**Tier 1: website**",
        ],
        checklist: [
          "Document control: version, date, author, approver.",
          "Background: the business, the problem, why now.",
          "Objectives: two to five measurable business goals.",
          "Audience: primary users, their main tasks, key devices.",
          "Pages and templates: full list with a sitemap.",
          "Features: numbered, each with acceptance criteria (\"it's done when…\").",
          "Forms: fields, validation, where submissions go, confirmation messages.",
          "Content: who writes, supplies and migrates it; CMS editing needs.",
          "Integrations: the register table.",
          "SEO and analytics: URLs to preserve, redirect needs, events to track.",
          "Non-functional requirements: the measurable table.",
          "Browsers and devices: the supported list.",
          "Out of scope, assumptions and open questions.",
          "Priorities: must, should, could, won't.",
          "Acceptance and handover: how sign-off works; accounts, code and documentation you will receive.",
        ],
      },
      {
        heading: "Tier 2: extra sections for a web app",
        body: [
          "Add these to Tier 1 when people log in, data is stored or work moves through steps. Agencies tend to price these sections very differently, so they matter most for comparable quotes.",
        ],
        checklist: [
          "Roles and permissions matrix, including what happens when a user leaves.",
          "Data records: the main entities (customer, booking, invoice), key fields, who owns each, retention.",
          "Workflows and statuses: each step, who moves an item on, and what triggers notifications.",
          "Notifications: email, SMS or in-app; the trigger, recipient and content for each.",
          "Admin and back-office tools: what staff manage without a developer.",
          "Reporting and exports: who needs which figures, how often, in what format.",
          "Audit log: which actions are recorded, with who and when.",
          "Data migration: what comes from the old system, how much, and who cleans it.",
          "Environments: development, staging and production; who can deploy.",
          "Privacy and legal: personal data collected, consent, where data is hosted, deletion requests.",
          "Support after launch: response expectations and who owns hosting and monitoring.",
        ],
      },
      {
        heading: "Hypothetical example: two quotes that finally match",
        body: [
          "**Hypothetical example:** a training company sends a one-page brief asking for \"a website with a booking system and CRM integration\". One agency quotes for a booking form that emails staff; another quotes for a booking app with payments, waitlists and a two-way CRM sync. Neither is wrong, and the quotes cannot be compared.",
          "The company rewrites the brief using the template. The permissions matrix shows three roles (learner, trainer, admin). The integration register shows that bookings go one way to the CRM within minutes and payments come from the payment provider's webhooks. Waitlists move to \"could have\". Re-quoted against the same document, the two agencies now differ mainly on approach and team, which is the comparison the company wanted to make.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Describing solutions (\"use a headless CMS\") instead of needs (\"marketing publishes daily without developers\").",
          "Leaving out admin, reporting and back-office needs, which are often a large share of a web app.",
          "Writing \"integrates with X\" without direction, timing or source of record.",
          "No out-of-scope list, so every assumption becomes a dispute.",
          "Adjectives as requirements: fast, secure, intuitive, scalable.",
          "Forgetting content: who writes it and who loads it.",
          "Not versioning the document, so nobody knows which draft was quoted.",
          "Once the build starts, the baseline only helps if changes go through a process; see [[/blogs/scope-creep-software-projects|how to control scope creep during delivery]].",
        ],
      },
      {
        heading: "When a long document is the wrong tool",
        body: [
          "A detailed specification is not always the best path. If the product is new and the main risk is whether anyone wants it, a short brief plus a paid discovery phase or prototype may teach you more than pages of requirements written in advance; see [[/blogs/saas-mvp-feature-prioritisation|how to prioritise an MVP]]. Detail also goes stale: in an agile build, keep the scope brief stable and let feature detail evolve in the backlog, with acceptance criteria written just before each item is built.",
          "The document also cannot fix an unclear decision. If two stakeholders disagree about who can approve refunds, writing both versions down is useful, but someone still has to decide before the agency can estimate.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://www.gov.uk/service-manual/agile-delivery/writing-user-stories|GOV.UK Service Manual: writing user stories]] (last updated 23 May 2016); [[https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs|GOV.UK Service Manual: learning about users and their needs]]; [[https://www.iso.org/standard/72089.html|ISO/IEC/IEEE 29148:2018, Requirements engineering]] (catalogue page; the standard's text is paid, so it is described here only at a high level from published summaries); [[https://www.w3.org/TR/WCAG22/|W3C: Web Content Accessibility Guidelines (WCAG) 2.2]]; [[https://top10.owasp.org/2025|OWASP Top 10:2025]].",
          "Accessed 14 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A requirements document is the cheapest point in a project to find disagreements. Decide the goals, rules and priorities yourself, write each requirement so it can be tested, add a permissions matrix and an integration register if anyone logs in, and list what is out of scope. Then send the same version to every agency and compare their quotes against it. When you are ready for the next step, the [[/blogs/website-development-project-planning|website project planning guide]] covers sequencing, and our [[/services/website-development|website and web app development]] page explains how we work.",
        ],
        cta: {
          title: "Get a scope reviewed",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|websites and web applications]]. If useful, send us your draft requirements and we can talk through the gaps and open questions before you go to agencies.",
        },
      },
    ],
  },

  // ------------------------------------------------------------- PLANNING
  {
    slug: "website-development-project-planning",
    title: "How to Plan a Website Development Project Before You Start",
    excerpt:
      "A pre-development planning framework — from business goals through launch — with a practical project planning checklist.",
    category: "Web Development",
    banner: "roadmap",
    date: "2026-09-20",
    readingTime: "12 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    faqs: [
      { q: "What's the difference between planning and the requirements document?", a: "The [[/blogs/website-requirements-document|requirements document]] defines what's being built; project planning defines how and in what order the work happens, including sitemap, technology and QA strategy." },
      { q: "How far in advance should website planning start?", a: "Before any design or development work begins — planning done in parallel with early development tends to produce more rework than planning done first." },
      { q: "Do I need user journey mapping for a simple website?", a: "A lightweight version is still worth doing — even a simple site benefits from thinking through how a visitor actually moves from landing to taking the intended action." },
      { q: "Should technology be decided during planning or later?", a: "During planning — technology choice affects timeline, cost and what's realistically achievable, so it should be decided early rather than assumed or decided reactively mid-project." },
      { q: "What's a sitemap and why does it matter?", a: "A structural map of every page and how they connect — it's the foundation for navigation, information architecture and later design work, and is far cheaper to revise on paper than after pages are built." },
      { q: "Should analytics be planned before development starts?", a: "Yes — deciding what to track (key conversion events, not just traffic) during planning avoids realizing after launch that important data was never captured." },
      { q: "How does QA fit into project planning?", a: "QA strategy — which devices, browsers and scenarios matter — should be planned alongside requirements, not improvised right before launch." },
      { q: "What's the output of a good planning phase?", a: "A clear sitemap, defined user journeys, a technology decision, a content plan, and a shared understanding of what launch actually requires — the inputs the rest of the project executes against." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Planning a website development project means working through business goals, audience, user journeys, sitemap, requirements, technology choice, UX and design direction, content strategy, SEO, analytics and QA strategy — before development starts, not in parallel with it. This pre-development framework is what turns a vague idea into a project the team can actually estimate, schedule and execute predictably.",
        ],
      },
      {
        heading: "Why Planning Deserves Its Own Dedicated Phase",
        body: [
          "Planning that happens in parallel with early development tends to produce rework — a technology or architecture decision made reactively, mid-build, is far more expensive to revisit than the same decision made deliberately before any code is written.",
        ],
      },
      {
        heading: "Business Goals",
        body: [
          "Every planning decision should trace back to a clear, explicit answer to what the site needs to achieve. This connects directly to the [[/blogs/website-requirements-document|requirements document]] — planning turns those goals into an actionable structure.",
        ],
      },
      {
        heading: "Audience",
        body: [
          "Understanding who actually uses the site — their needs, context and technical environment — shapes navigation, content priorities and which devices and browsers genuinely matter for QA.",
        ],
      },
      {
        heading: "User Journeys",
        body: [
          "Map the realistic paths a visitor takes from landing on the site to completing the action that matters most to the business — this surfaces navigation and content gaps far more effectively than designing pages in isolation.",
        ],
        visual: { variant: "funnel", accent: "blue", caption: "Mapping real user journeys before designing individual pages catches structural gaps while they're still cheap to fix." },
      },
      {
        heading: "Sitemap",
        body: [
          "A structural map of every page and how they connect is the foundation everything else builds on — navigation, information architecture, and later design work. It's far cheaper to revise a sitemap on paper than to restructure a built site.",
        ],
      },
      {
        heading: "Requirements",
        body: [
          "This is where the [[/blogs/website-requirements-document|requirements document]] gets finalized — pages, features, integrations, acceptance criteria — as the shared reference the rest of the project works from.",
        ],
      },
      {
        heading: "Technology",
        body: [
          "Decide the technology direction deliberately during planning, based on the site's actual content needs, functionality, expected traffic and team's ability to maintain it — see the [[/blogs/nextjs-website-development|Next.js guide]] and [[/blogs/custom-website-vs-wordpress|custom vs. WordPress guide]] for two common directions to weigh.",
        ],
        cta: {
          title: "Need help thinking through the planning phase for your project?",
          description: "ZSpace Labs can help translate business goals into a concrete sitemap, technology direction and project plan before development starts.",
        },
      },
      {
        heading: "UX and Design Direction",
        body: [
          "Even before detailed design work, planning should establish the intended visual direction, brand alignment and any accessibility or performance constraints that will shape design decisions later.",
        ],
      },
      {
        heading: "Development Approach",
        body: [
          "Decide whether the project will be built in one phase or launched incrementally, and how design and development will coordinate — see the [[/blogs/website-development-process|development process guide]] for the fuller stage-by-stage breakdown this planning feeds into.",
        ],
      },
      {
        heading: "Content Strategy",
        body: [
          "Decide who's responsible for writing copy, sourcing imagery, and structuring content, and on what timeline — content readiness is one of the most common, avoidable causes of project delay, and planning is where this gets addressed before it becomes a bottleneck.",
        ],
      },
      {
        heading: "SEO",
        body: [
          "Plan target topics and keyword direction, URL structure, and (for a redesign) how existing SEO equity will be preserved through redirects — this is far easier to plan upfront than to retrofit after the site is built.",
        ],
      },
      {
        heading: "Analytics",
        body: [
          "Decide what needs to be tracked — key conversion events, not just page views — during planning, so tracking is built in from the start rather than realized as missing after launch.",
        ],
      },
      {
        heading: "QA Strategy",
        body: [
          "Plan which devices, browsers and scenarios genuinely matter for testing, based on real audience data where available, rather than leaving QA scope to be improvised right before launch.",
        ],
      },
      {
        heading: "Launch Planning",
        body: [
          "Plan what launch actually requires — DNS changes, redirects for a redesign, final QA sign-off, a rollback plan — as part of the project plan, not as a late scramble once development is \"done.\"",
        ],
        table: webDevFrameworkTable,
        cta: {
          title: "Ready to move from planning into active development?",
          description: "See the [[/blogs/website-development-process|complete website development process]] for what happens after planning is finished. Explore our [[/services/website-development|website and web app development services]].",
        },
      },
      {
        heading: "Website Project Planning Checklist",
        body: ["A practical checklist to confirm planning is genuinely complete before development starts."],
        checklist: [
          "Business goals and success criteria explicitly defined",
          "Target audience and their needs understood, not assumed",
          "Key user journeys mapped",
          "Sitemap drafted and agreed on",
          "Requirements document finalized",
          "Technology direction decided deliberately, not defaulted to",
          "Content strategy and ownership defined",
          "SEO and analytics requirements planned upfront",
          "QA strategy — devices, browsers, scenarios — defined",
          "Launch requirements (DNS, redirects, rollback plan) identified",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A dedicated planning phase is what turns a vague website idea into a project that can actually be estimated, scheduled and built predictably. Skipping it doesn't save time — it just moves the same decisions later, when they're more expensive to get wrong.",
        ],
      },
    ],
  },

  // ------------------------------------------------------ REDESIGN VS REBUILD
  {
    slug: "website-redesign-vs-rebuild",
    title: "Website Redesign, Rebuild or Staged Modernisation: Which Do You Need?",
    seoTitle: "Website Redesign vs Rebuild: Which Do You Need?",
    excerpt:
      "Redesign, rebuild or modernise a legacy website in stages? A decision table, a five-stage roadmap and how to handle URLs, PHP end of life and SEO risk.",
    category: "Web Development",
    banner: "decisiontree",
    sceneKind: "compare",
    bannerAlt: "A decision tree choosing between a website redesign, a full rebuild and staged modernisation based on whether the problems are visual, technical or isolated",
    date: "2026-09-20",
    updated: "2026-10-14",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    relatedSlugs: ["strangler-fig-pattern", "website-migration-guide", "website-replatforming"],
    faqs: [
      { q: "What's the difference between a redesign and a rebuild?", a: "A redesign changes the visual design and often the UX, typically keeping the underlying technical architecture. A rebuild replaces the underlying technical foundation, sometimes with a visual redesign alongside it and sometimes without." },
      { q: "Can I redesign without rebuilding?", a: "Yes. If the existing technical architecture is sound and the problems are mainly visual, UX or content-related, a redesign on the existing foundation can be the right, lower-cost choice." },
      { q: "When is a full rebuild actually necessary?", a: "When the underlying technical architecture itself is the constraint: significant technical debt, an outgrown CMS or platform, or performance and scalability limits that a visual redesign cannot fix. It is also worth considering when the site is small enough that staging the work would cost more than replacing it." },
      { q: "Is incremental improvement always safer than a full redesign or rebuild?", a: "Not always. Incremental changes work well for isolated problems, but a site with many compounding issues can sometimes be addressed more efficiently with a coordinated redesign or rebuild than a long series of small fixes." },
      { q: "Does a rebuild always carry SEO risk?", a: "Any change of URLs or architecture carries some risk, and Google says to expect temporary ranking fluctuation during a site move. The risk is manageable with a complete redirect map and careful technical SEO during the migration, so it is not a reason to avoid a rebuild that is genuinely needed." },
      { q: "How do I know if my problems are design problems or technical problems?", a: "Design and UX problems typically show up as usability complaints, weak conversion or an outdated look. Technical problems show up as slow performance, difficulty adding features, or a CMS the team has outgrown. Often both are present." },
      { q: "Should I migrate content during a rebuild?", a: "Yes, deliberately. Content migration and redirect mapping should be planned explicitly, not treated as an afterthought once the new site is otherwise ready." },
      { q: "How does this decision affect existing integrations?", a: "A rebuild often requires re-implementing integrations on the new architecture. Scope this explicitly as part of rebuild planning rather than discovering it mid-project." },
      { q: "Will my site stop working when PHP 8.2 reaches end of life?", a: "No. The site will keep running, but PHP 8.2 stops receiving security fixes from the PHP project after 31 December 2026, according to php.net. Any newly found vulnerability in that version will then go unpatched upstream, so plan an upgrade to a supported version and check that your themes, plugins and custom code are compatible." },
      { q: "Can we change our URLs one section at a time?", a: "For small and medium sites, Google recommends moving all URLs at the same time rather than section by section. You can still rebuild the back end in stages while keeping the existing URLs, then make any URL changes in one planned cutover." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**A redesign changes a website's visual design and UX while generally keeping its technical foundation; a rebuild replaces that foundation, sometimes with a redesign alongside; incremental improvement makes smaller, targeted changes. For a legacy site whose platform is the problem but which still earns traffic or leads, there is a fourth option: modernise in stages. Stabilise it, upgrade in place, rebuild section by section behind the existing URLs, change URLs once if you must, then switch off the old system.** The right approach depends on whether the problems are visual, architectural or isolated, how large the site is, and whether the current platform can still be kept secure.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Diagnose first: visual and UX problems point to a redesign; platform and architecture problems point to a rebuild.",
          "Staged modernisation lowers risk for sites with real traffic and many integrations, but it runs two systems for a while.",
          "Stage the back end, not the URL change. Google recommends moving all URLs at once for small and medium sites.",
          "PHP 8.2 reaches end of life on 31 December 2026, which makes this a good time to check your runtime.",
          "Small, simple sites are often better rebuilt in one go.",
        ],
      },
      {
        heading: "Three distinct approaches",
        body: [
          "These terms get used loosely, which causes real confusion when planning a project. Being precise avoids overpaying for a full rebuild when a redesign would solve the problem, or underinvesting in a redesign when the real constraint is technical.",
          "**A redesign** updates visual design, often UX and information architecture, and sometimes content, while the underlying technology, CMS and core architecture stay in place. It fits when the problems are about how the site looks and is used, not what it is built on.",
          "**A rebuild** replaces the technical foundation: the framework, CMS, hosting architecture or all three. It may include a redesign or keep the existing look. It fits when the current foundation is itself the constraint.",
          "**Incremental improvement** makes targeted changes, such as improving a specific page, fixing a performance bottleneck or updating one flow. It works when problems are isolated rather than pervasive.",
        ],
        visual: { variant: "grid", accent: "orange", caption: "A redesign changes what visitors see; a rebuild changes what the site is built on. They are independent decisions, not a single combined choice." },
      },
      {
        heading: "The decision framework",
        body: [],
        table: {
          headers: ["Symptom", "Likely need"],
          rows: [
            ["Outdated look, but the site works fine technically", "Redesign"],
            ["Poor UX or navigation, technical foundation is sound", "Redesign"],
            ["Slow performance rooted in the platform or architecture itself", "Rebuild, possibly staged"],
            ["CMS the team has clearly outgrown", "Rebuild, possibly staged"],
            ["Significant technical debt blocking new features", "Rebuild, possibly staged"],
            ["Unsupported runtime or CMS that can still be upgraded", "Upgrade in place first, then decide"],
            ["One or two specific pages or flows underperforming", "Incremental improvement"],
            ["Both an outdated look and a limiting technical foundation", "Rebuild, often with a redesign included"],
          ],
        },
      },
      {
        heading: "Design problems vs technical problems",
        body: [
          "Design and UX problems typically show up as usability complaints, weak conversion or a visually dated feel. Technical problems show up as slow performance the design cannot fix, difficulty adding features, or a CMS that has become a bottleneck for the team. Both are often present at once, which usually points towards a rebuild that includes a redesign. For the symptoms in more detail, see [[/blogs/when-does-your-website-need-a-redesign|signs your website needs a redesign]].",
          "Technical debt, the shortcuts and workarounds accumulated over time, is a common reason a site feels hard to maintain even when it does not look broken. If every new feature takes disproportionately long, or the team routinely works around platform limits, that points to a rebuild rather than a surface redesign.",
        ],
      },
      {
        heading: "Modernising a legacy website in stages",
        body: [
          "Martin Fowler's [[https://martinfowler.com/bliki/StranglerFigApplication.html|strangler fig article]] describes replacing a legacy system gradually: new components take over pieces of the old one until it can be retired. His view is that \"the reduced risk and earlier value from the gradual approach outweigh its costs\". Our [[/blogs/strangler-fig-pattern|guide to the strangler fig pattern]] covers it for software systems; the roadmap below applies it to a business website.",
          "The key adjustment for websites comes from Google's guidance on site moves. For small and medium sites, Google recommends \"moving all URLs on your site simultaneously instead of moving one section at a time\"; larger sites can move by section ([[https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes|Google Search Central]]). So stage the back end, not the URL change: rebuild piece by piece behind the URLs you already have, and make any URL changes in one planned cutover.",
        ],
        table: {
          headers: ["Stage", "What happens", "Done when"],
          rows: [
            ["1. Stabilise", "Take full backups and test a restore. Inventory pages, URLs, forms, plugins, integrations and scheduled jobs. Record a baseline from analytics and Search Console. Check the PHP, CMS and plugin versions against their support dates and apply security updates.", "You can restore the site, you know everything it does, and known vulnerabilities are patched"],
            ["2. Upgrade in place", "Move to a supported PHP version and current CMS core. Remove dead plugins and replace abandoned ones. If changing hosts, keep URLs identical (a move without URL changes).", "The site runs on supported software with no visible change to visitors"],
            ["3. Rebuild section by section", "Put a routing layer (a reverse proxy, CDN or edge routing rules) in front of the site. Build one section, such as the blog or pricing pages, on the new stack and route its existing URLs to it. Repeat until the old system serves nothing important.", "Each section is live on the new stack under its existing URLs, with analytics and forms working"],
            ["4. One URL cutover", "If you must change URL structure or domain, do it once: map every old URL to its new one, use permanent (301 or 308) redirects, update internal links and sitemaps.", "Every old URL returns a permanent redirect to the right page"],
            ["5. Decommission", "Once the old system receives no traffic, switch it off. Remove its credentials, DNS records, plugins and licences, and archive a final backup.", "Nothing depends on the old system and it is no longer reachable"],
          ],
        },
      },
      {
        heading: "What each stage needs to get right",
        body: [
          "**Stabilise.** PHP 8.2 receives security fixes only until 31 December 2026; 8.3 is supported until 31 December 2027, 8.4 until 31 December 2028 and 8.5 until 31 December 2029 ([[https://www.php.net/supported-versions.php|php.net]]). WordPress recommends PHP 8.3 or greater, and says older versions it still runs on \"have reached their official End Of Life and may expose your site to security vulnerabilities\" ([[https://wordpress.org/about/requirements/|WordPress requirements]]). These dates can change, so check both pages when you plan.",
          "**Upgrade in place.** Test on a staging copy first: older themes, plugins and custom code are the usual cause of breakage after a PHP upgrade. For a hosting move that keeps the same URLs, Google's guidance on [[https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes|moving a site without URL changes]] advises lowering DNS TTL in advance, keeping Search Console verification working and shutting down the old host only when its traffic has dropped to zero.",
          "**Rebuild section by section.** The routing layer is the mechanism that lets two systems share one domain: requests for /blog go to the new stack, everything else to the old one. Keep a shared header, footer, cookie consent and analytics configuration so visitors and reports see one site. Start with a section that is valuable but self-contained, not checkout or login.",
          "**One URL cutover.** Google says to keep redirects \"for as long as possible, generally at least 1 year\", to \"expect temporary fluctuation in site ranking during the move\", and that a small to medium site \"can take a few weeks for most pages to move\". The [[/blogs/website-migration-guide|SEO-safe website migration guide]] covers the redirect map and launch checks in detail.",
          "**Decommission.** Old systems left running are easy to forget and hard to secure. Switch them off deliberately and record what was removed.",
        ],
      },
      {
        heading: "Stage it or rebuild in one go?",
        body: [],
        table: {
          headers: ["Factor", "Favours staged modernisation", "Favours a single rebuild"],
          rows: [
            ["Site size", "Many sections and templates", "A handful of pages"],
            ["Revenue or leads from the site", "Significant and continuous", "Low, or tolerant of a short disruption"],
            ["Integrations", "Several, each with its own risk", "Few or none"],
            ["Current platform", "Can be upgraded and kept secure meanwhile", "Cannot be patched or upgraded safely"],
            ["Team capacity", "Can run two systems and a routing layer", "Small team, wants one system to look after"],
            ["Design change", "Mainly technical; the look can change later", "A full brand and UX overhaul anyway"],
          ],
        },
        callout: { type: "note", text: "Rebuild now, rather than stage, when the runtime or CMS cannot be upgraded to a supported version, when the CMS cannot model your content without workarounds, or when the team cannot deploy changes safely at all." },
      },
      {
        heading: "When staged modernisation is not the right call",
        body: [
          "Staging has real costs. You run and pay for two systems, the routing layer is another component to configure and monitor, and design consistency is harder while old and new sections sit side by side. For a small brochure site, those costs usually outweigh the benefit; a planned rebuild with one cutover is simpler. Staging also does not help if the old platform has an unpatched security problem that cannot wait; contain that first.",
          "Finally, a staged plan can stall halfway, leaving you maintaining both systems indefinitely. Give each stage an owner and a date, and treat decommissioning as part of the project, not an optional extra.",
        ],
      },
      {
        heading: "Hypothetical example: a services firm on old WordPress",
        body: [
          "**Hypothetical example:** a professional services firm runs a WordPress site on PHP 8.2 with a custom theme, a booking plugin no longer maintained and a blog that brings in most of its enquiries. In stage 1 it backs up, inventories 400 URLs and finds three unused plugins. In stage 2 it upgrades PHP and WordPress on staging, replaces the abandoned booking plugin and goes live with no visible change. In stage 3 it rebuilds the service pages on a new stack behind the existing URLs, then the blog. Because the URL structure stays the same, there is no URL cutover. Once the old WordPress install serves nothing, it is switched off and its accounts removed.",
        ],
      },
      {
        heading: "Content, integrations and SEO in any rebuild",
        body: [
          "Whichever route you choose, a rebuild usually means migrating content and re-implementing integrations on the new architecture. Scope both during planning; the [[/blogs/website-requirements-document|requirements document guide]] shows how to capture integrations and acceptance criteria. Any change of URLs or architecture carries SEO risk, which is manageable with a complete redirect map and careful checks during the migration. If the constraint is the platform itself, the [[/blogs/website-replatforming|website replatforming guide]] covers moving to a new CMS or platform.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://martinfowler.com/bliki/StranglerFigApplication.html|Martin Fowler: Strangler Fig Application (22 August 2024)]]; [[https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes|Google Search Central: site moves with URL changes (last updated 20 August 2026)]]; [[https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes|Google Search Central: moving a site without URL changes]]; [[https://www.php.net/supported-versions.php|PHP: supported versions]]; [[https://wordpress.org/about/requirements/|WordPress: hosting requirements]].",
          "Accessed 14 October 2026. Support dates and recommendations change; check the current pages before planning.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Redesign, rebuild, incremental improvement and staged modernisation solve different problems. Diagnose whether your constraint is visual, technical or isolated; check your runtime and CMS against their support dates; and if the platform needs replacing on a site that earns its keep, consider rebuilding in stages behind your existing URLs, with any URL change made once. Next steps: run stage 1 (backups, inventory, version check) whatever you decide, because it informs every option. Our [[/services/website-development|website development]] page explains how we approach rebuilds.",
        ],
        cta: {
          title: "Get a staged modernisation plan",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|website rebuilds and modernisation]]. If useful, we can talk through whether your current site should be redesigned, upgraded in place, rebuilt in stages or replaced.",
        },
      },
    ],
  },

  // -------------------------------------------------------- REDESIGN SIGNALS
  {
    slug: "when-does-your-website-need-a-redesign",
    title: "How to Know When Your Business Website Needs a Redesign",
    excerpt:
      "Twelve concrete symptoms — from outdated UX to weak conversion to broken integrations — and how to tell if your site is genuinely showing them.",
    category: "Web Development",
    banner: "auditgrid",
    date: "2026-09-21",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    faqs: [
      { q: "Does every old website need a redesign?", a: "No — a website's age alone doesn't mean it needs a redesign. A well-maintained older site with solid UX and performance can still serve the business well; the real signals are the specific symptoms covered in this guide, not age itself." },
      { q: "How do I know if my website's UX is actually outdated?", a: "Look for concrete signals — visitors struggling to find key information, high bounce rates on important pages, or direct user feedback about confusion — rather than a subjective sense that the design \"feels old.\"", },
      { q: "Is a mobile experience issue a design problem or a technical problem?", a: "It can be either — sometimes a responsive design gap, sometimes an underlying technical performance issue. Diagnosing which one it is determines whether a redesign or a [[/blogs/website-redesign-vs-rebuild|rebuild]] is the right response." },
      { q: "Should low conversion rate alone trigger a redesign?", a: "Not necessarily as a first response — investigate the specific cause first (see the [[/blogs/shopify-cro-audit|CRO audit framework]] for the diagnostic approach) before assuming a full redesign is the fix, since the actual cause might be narrower." },
      { q: "How do I know if my site's SEO architecture is actually a problem?", a: "Signals include declining organic traffic despite content efforts, poor crawlability, or a site structure that doesn't clearly reflect your actual content hierarchy." },
      { q: "Can broken integrations be fixed without a full redesign?", a: "Often yes — broken integrations are usually a technical fix, not a reason for a visual redesign, unless they're symptomatic of a broader outgrown platform." },
      { q: "What if my site has several of these symptoms at once?", a: "Multiple compounding symptoms — especially a mix of design and technical ones — is a stronger signal toward a coordinated redesign or rebuild rather than addressing each symptom in isolation." },
      { q: "How urgent is a redesign once these signals appear?", a: "It depends on business impact — a symptom directly affecting revenue or core functionality deserves faster attention than one that's a lower-stakes visual inconsistency." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A business website generally needs a redesign when it shows concrete, specific symptoms — outdated UX, a poor mobile experience, slow performance, difficult navigation, low conversion, weak messaging, poor accessibility, technical limitations, hard-to-manage content, weak SEO architecture, inconsistent branding, or broken integrations — not simply because the site is a few years old. This guide covers each symptom specifically, so you can diagnose your actual situation rather than redesigning on a hunch.",
        ],
      },
      {
        heading: "Age Alone Isn't the Signal",
        body: [
          "A well-maintained site with solid UX, decent performance and working functionality doesn't need a redesign just because it's been live for a while. The symptoms below are what actually indicate a real problem — treat this as a diagnostic checklist, not a countdown timer.",
        ],
      },
      {
        heading: "Outdated UX",
        body: [
          "Look for concrete signals: visitors struggling to complete key tasks, confusing navigation, or direct feedback about difficulty finding information — not just a subjective sense that the design looks dated.",
        ],
      },
      {
        heading: "Poor Mobile Experience",
        body: [
          "A meaningful gap between mobile and desktop usability or conversion is a real signal — check whether this is a design/UX issue or an underlying technical performance issue, since the fix differs.",
        ],
      },
      {
        heading: "Slow Performance",
        body: [
          "If Core Web Vitals are consistently weak and the cause is architectural rather than a fixable technical issue, that's a signal pointing toward the technical side of a [[/blogs/website-redesign-vs-rebuild|redesign vs. rebuild]] decision. See the [[/blogs/website-performance-optimization|performance guide]] for diagnosing this specifically.",
        ],
        visual: { variant: "bars", accent: "blue", caption: "A single weak metric is worth investigating; several compounding symptoms together are a stronger signal toward a full redesign." },
      },
      {
        heading: "Difficult Navigation",
        body: [
          "If visitors consistently struggle to find key pages, or navigation has grown unstructured as content was added over time without revisiting the underlying architecture, that's a genuine UX signal.",
        ],
      },
      {
        heading: "Low Conversion",
        body: [
          "Investigate the specific cause before assuming a full redesign is the answer — see the [[/blogs/shopify-cro-audit|CRO audit framework]] for a structured diagnostic approach. Sometimes the actual fix is narrower than a full redesign.",
        ],
        cta: {
          title: "Seeing some of these symptoms but not sure how serious they are?",
          description: "ZSpace Labs can assess your current site against these specific signals and give you an honest read on what's actually needed.",
        },
      },
      {
        heading: "Weak Messaging",
        body: [
          "If the site doesn't clearly communicate what the business does and why it matters to the visitor within the first screen, that's a messaging and content problem a redesign can genuinely address.",
        ],
      },
      {
        heading: "Poor Accessibility",
        body: [
          "If the site hasn't been evaluated against accessibility basics — contrast, keyboard navigation, semantic structure — this is worth addressing regardless of other symptoms. See the [[/blogs/website-accessibility-guide|accessibility guide]] for what to check.",
        ],
      },
      {
        heading: "Technical Limitations",
        body: [
          "If adding new features or making routine changes consistently takes longer than it should, or requires workarounds, that's a signal the underlying platform may be the real constraint — pointing toward the rebuild side of the decision.",
        ],
      },
      {
        heading: "Difficult Content Management",
        body: [
          "If the team regularly needs developer help for routine content updates, or the CMS has become cumbersome, that's a genuine, specific pain point worth addressing directly.",
        ],
      },
      {
        heading: "Poor SEO Architecture",
        body: [
          "Declining organic traffic despite reasonable content effort, poor crawlability, or a site structure that doesn't reflect the actual content hierarchy are signals worth investigating specifically, not just assuming more content will fix.",
        ],
      },
      {
        heading: "Inconsistent Branding",
        body: [
          "If the site's visual language has drifted from the current brand, or different sections feel visually disconnected from each other, that's a straightforward redesign signal.",
        ],
      },
      {
        heading: "Broken Integrations",
        body: [
          "If integrations with other business systems are unreliable or have been patched together over time, that's often a technical issue — sometimes fixable without a full redesign, sometimes symptomatic of an outgrown platform. See the [[/blogs/website-api-integration|API integration guide]] for the deeper technical context.",
        ],
        cta: {
          title: "Ready to figure out whether you need a redesign or a rebuild?",
          description: "See the [[/blogs/website-redesign-vs-rebuild|redesign vs. rebuild guide]] for how to translate these symptoms into the right scope of project. See how we approach [[/services/website-development|website development]].",
        },
      },
      {
        heading: "When Several Symptoms Appear Together",
        body: [
          "One isolated symptom often warrants a targeted fix. Several compounding symptoms — especially a mix of design and technical issues — is a stronger signal toward a coordinated redesign or rebuild, since fixing each one separately tends to be less efficient than addressing them together.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A redesign is warranted by specific, diagnosable symptoms — not by a site simply getting older. Use this list to identify what's actually happening on your site, then use the [[/blogs/website-redesign-vs-rebuild|redesign vs. rebuild guide]] to translate that diagnosis into the right scope of project.",
        ],
      },
    ],
  },

  // ------------------------------------------------------------- NEXT.JS
  {
    slug: "nextjs-website-development",
    title: "Next.js Website Development: When Should Businesses Use It?",
    excerpt:
      "A business-focused guide to what Next.js is, how its rendering model works, and where it fits — and doesn't — for marketing sites, SaaS products and ecommerce.",
    category: "Web Development",
    banner: "layers",
    date: "2026-09-22",
    updated: "2026-10-17",
    readingTime: "12 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    faqs: [
      { q: "What is Next.js?", a: "Next.js is a framework built on React that adds routing, rendering, data-fetching conventions and deployment tooling on top of React's component model — giving teams a structured way to build production websites and web applications rather than assembling those pieces themselves." },
      { q: "Is Next.js only for developers who already know React?", a: "Next.js is built on React, so React knowledge transfers directly — but from a business perspective, the more relevant question is whether your development team or partner has direct Next.js experience, not just general React familiarity." },
      { q: "How does Next.js handle rendering?", a: "Modern Next.js treats static and dynamic content as a spectrum handled at the component level, rather than forcing a single static-or-dynamic choice for an entire page — a static shell can load instantly while specific dynamic sections stream in, letting one page mix content that's cached, prerendered and freshly fetched." },
      { q: "Is Next.js good for SEO?", a: "Yes — Next.js is built to produce fast-loading, crawlable HTML by default, which supports strong technical SEO foundations, though metadata, structured content and page speed still need to be deliberately implemented well regardless of framework." },
      { q: "Does Next.js work well for ecommerce?", a: "Yes, particularly for stores needing custom storefront experiences, strong performance, and flexibility beyond what a template-based platform offers — often paired with a headless commerce backend. See the [[/blogs/headless-website-development|headless website development guide]]." },
      { q: "Is Next.js overkill for a simple marketing site?", a: "It can be, if the site is genuinely simple and static with no growth plans — a simpler static site generator or even a website builder may be entirely sufficient. Next.js earns its complexity once a site needs real application capability alongside content." },
      { q: "Does Next.js require a specific hosting provider?", a: "No. Next.js runs on any provider that supports a Node.js server or Docker container, and both support every feature. A static export works on any static host but supports only a limited feature set, and platform adapters vary, so check which features your host supports ([[https://nextjs.org/docs/app/getting-started/deploying|Next.js deploying docs]])." },
      { q: "Can Next.js scale for a SaaS product, not just a marketing site?", a: "Yes — Next.js is commonly used for SaaS marketing sites, dashboards and full product interfaces, since it can handle both content-heavy and highly interactive, data-driven pages within the same application." },
      { q: "Should a business insist on Next.js specifically?", a: "No — insist on the right fit for your requirements, not a specific technology by name. Next.js is a strong fit for many modern business websites, but the underlying requirement (performance, flexibility, scalability) matters more than the specific framework." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Next.js is a framework built on React that adds routing, rendering and data-fetching conventions on top of React's component model, giving teams a structured way to build fast, SEO-friendly websites and web applications. Its current rendering model treats static and dynamic content as a spectrum handled at the component level — a page can have a static shell that loads instantly while specific sections stream in dynamically — rather than forcing an entire page to be either fully static or fully dynamic. It's a strong fit for content-driven marketing sites, SaaS products and ecommerce storefronts that need both fast load times and real application capability; it can be more than a genuinely simple, static site needs.",
        ],
      },
      {
        heading: "What Next.js Actually Is",
        body: [
          "React is a JavaScript library for building user interfaces out of reusable components — it doesn't, by itself, include routing, a rendering strategy, or conventions for fetching data. Next.js is a framework built on top of React that supplies those pieces: file-based routing, a rendering system, data-fetching patterns, and production tooling for building and deploying a real website or application. See the [[/blogs/react-vs-nextjs|React vs. Next.js guide]] for the fuller relationship between the two.",
        ],
      },
      {
        heading: "Where Next.js Fits",
        body: [
          "Next.js is commonly used for content-driven marketing sites that also need real interactivity, SaaS product marketing sites and dashboards, and ecommerce storefronts — cases where a site needs to be fast and SEO-friendly like a static site, but also needs application-level capability a purely static site can't provide.",
        ],
      },
      {
        heading: "How Rendering Actually Works",
        body: [
          "Older web frameworks typically forced a route-level choice: a page is either fully prerendered at build time or fully rendered on the server per request. With Cache Components, an opt-in setting in current Next.js (the cacheComponents option), the boundary sits at the component level instead. A page can ship a static shell that loads instantly, include content cached with a defined lifetime through the 'use cache' directive, and stream in request-specific content, all within a single page ([[https://nextjs.org/docs/app/getting-started/caching|Next.js caching docs]]). Without that setting, Next.js still prerenders or server-renders per route, which is enough for most marketing sites.",
        ],
        visual: { variant: "grid", accent: "blue", caption: "Static and dynamic content coexist within a single page — a static shell loads instantly while specific dynamic sections stream in as they resolve." },
      },
      {
        heading: "Why This Rendering Model Matters for a Business",
        body: [
          "Practically, this means a marketing page can load near-instantly for every visitor while a personalized or frequently changing section (a cart, a live price, a logged-in greeting) still updates correctly without forcing the entire page to be slow or entirely client-rendered. Businesses get the SEO and speed benefits associated with static content and the flexibility of dynamic, personalized content, without choosing one architecture for the whole site.",
        ],
      },
      {
        heading: "Incremental Static Regeneration",
        body: [
          "For pages with dynamic URL parameters, such as a large product catalogue, you list the URLs to prerender at build time with generateStaticParams. Other URLs are generated on the first request and cached for later visitors ([[https://nextjs.org/docs/app/guides/incremental-static-regeneration|Next.js ISR guide]]). With Cache Components and Partial Prefetching enabled, a URL that wasn't prerendered gets a generic App Shell instantly and is upgraded in the background ([[https://nextjs.org/docs/app/guides/incremental-static-regeneration-cache-components|ISR with Cache Components]]). Either way, a large site doesn't need every page built before launch.",
        ],
        cta: {
          title: "Considering Next.js for an upcoming project?",
          description: "ZSpace Labs builds on Next.js and React as a primary stack — happy to talk through whether it's genuinely the right fit for your specific requirements.",
        },
      },
      {
        heading: "SEO and Performance",
        body: [
          "Because Next.js is built to produce fast-loading, crawlable HTML by default, it supports strong technical SEO foundations out of the box — though metadata, structured content, and genuine page-speed discipline still have to be implemented deliberately regardless of framework. See the [[/blogs/website-performance-optimization|performance optimization guide]] for what that discipline actually involves.",
        ],
      },
      {
        heading: "APIs and Data",
        body: [
          "Next.js applications commonly fetch data from a CMS, database, or third-party APIs directly within the framework's data-fetching model — relevant when the site needs to connect to a CRM, payment system, or other business tooling. See the [[/blogs/website-api-integration|API integration guide]] for the broader integration picture.",
        ],
      },
      {
        heading: "Scalability",
        body: [
          "Next.js applications scale by combining caching, streaming and (where used) edge or CDN infrastructure — appropriate for sites ranging from a modest marketing site to a high-traffic SaaS product or ecommerce storefront, without needing a different framework as the business grows.",
        ],
      },
      {
        heading: "Content-Driven Sites, SaaS and Ecommerce",
        body: [
          "For content-driven sites, Next.js pairs well with a headless CMS. For SaaS, it can serve both the marketing site and the authenticated product experience within one codebase. For ecommerce, it commonly pairs with a headless commerce backend — see the [[/blogs/headless-website-development|headless website development guide]] for how that architecture works.",
        ],
        table: {
          headers: ["Site type", "Why Next.js fits", "Watch out for"],
          rows: [
            ["Content and marketing site", "Pages prerender to fast HTML; a headless CMS lets marketers publish without developers", "Overkill if the site is a handful of pages that rarely change"],
            ["SaaS product", "Marketing pages and the logged-in app share one codebase and design system", "Keep app-only code out of marketing pages so they stay light"],
            ["Ecommerce storefront", "Static product and category pages with dynamic cart, stock and pricing sections", "A hosted platform such as Shopify may cover the need with less engineering"],
            ["Large article or catalogue library", "Thousands of pages can be generated at build or on first request", "Build time and bundle size need watching as the library grows"],
          ],
        },
      },
      {
        heading: "What We Learned Building This Site on Next.js",
        body: [
          "This website is a Next.js 16 App Router site. Its articles live as typed data files and are prerendered at build time, which produces more than 3,000 static outputs (pages, social images and route data) for about 1,000 articles. Two problems we found and fixed on our own site are worth knowing about before you build.",
          "**A client component can pull your whole content library into the browser.** One interactive component imported a single value from the module that held every article. The bundler included the entire article set in a JavaScript chunk of about 12.8 MB, which every article page then downloaded. Keeping client-side imports type-only, or moving shared constants into a small separate module, removed it. Next.js documents the server and client boundary that causes this ([[https://nextjs.org/docs/app/getting-started/server-and-client-components|Next.js docs]]).",
          "**Animating the main heading can delay Largest Contentful Paint.** Our hero headings started invisible and were revealed by JavaScript after hydration. Under throttled mobile testing, LCP measured between 6.8 and 29.5 seconds. Switching to a CSS-only entrance, so the text is visible from the first paint, brought lab LCP to about 2 seconds. These were lab measurements, not field data, but the lesson holds: never make your largest text wait for JavaScript.",
        ],
      },
      {
        heading: "When Next.js May Be More Than You Need",
        body: [
          "A genuinely simple, static site with no plans for growth, interactivity or frequent content changes may not need Next.js's capabilities — a simpler static site generator or even a well-chosen website builder can be entirely sufficient. Choosing Next.js for a site that will never use its application capabilities adds complexity without a matching benefit.",
        ],
        cta: {
          title: "Not sure if Next.js is the right fit or overkill for your project?",
          description: "See the [[/blogs/custom-website-vs-website-builder|custom development vs. website builder guide]] for the broader decision this technology choice sits inside. Explore our [[/services/website-development|website and web app development services]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Next.js earns its complexity once a site needs both content-driven performance and real application capability — SaaS products, ecommerce storefronts, and marketing sites that need to do more than serve static pages. For a genuinely simple, low-growth site, a simpler tool can be entirely appropriate. Match the technology to what the site actually needs to do, not to which framework is currently popular. If you're weighing it against a CMS-led build, see [[/blogs/wordpress-vs-nextjs|WordPress vs Next.js]], and for the rendering concepts behind it, [[/blogs/server-side-rendering-vs-client-side-rendering|server-side vs client-side rendering]].",
        ],
      },
    ],
  },

  // ------------------------------------------------------- REACT VS NEXT.JS
  {
    slug: "react-vs-nextjs",
    title: "React vs. Next.js for Website Development: What's the Difference?",
    excerpt:
      "Explaining the actual relationship between React and Next.js — a library and a framework built on it — rather than presenting them as competing choices.",
    category: "Web Development",
    banner: "compare3",
    date: "2026-09-22",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    faqs: [
      { q: "Is Next.js a replacement for React?", a: "No — Next.js is built on React and uses React's component model directly. Choosing Next.js means using React plus Next.js's routing, rendering and tooling on top of it, not instead of it." },
      { q: "Should I choose React or Next.js for a new website?", a: "For most real website projects, the practical choice is React alone (requiring you to assemble routing, rendering and tooling yourself) versus React plus a framework like Next.js (which supplies those pieces). Most business websites benefit from the framework's structure." },
      { q: "Why would a team choose plain React without Next.js?", a: "Mainly for highly specific, custom application architectures where a team wants full control over routing and build tooling rather than a framework's conventions — less common for typical business websites than for specialized internal tools." },
      { q: "Does Next.js limit what you can build compared to React alone?", a: "No — Next.js applications are React applications with additional structure and tooling. Anything buildable in React is buildable in Next.js, generally with less custom setup required." },
      { q: "Is Next.js harder to learn than React?", a: "Next.js adds its own conventions (routing, rendering model, data fetching) on top of React fundamentals, so there's additional framework-specific knowledge — but it also removes the need to make and maintain many decisions a bare React setup would otherwise require." },
      { q: "Does SEO differ between React and Next.js?", a: "A bare React single-page application often needs additional configuration to render SEO-friendly HTML; Next.js is built to produce crawlable, fast-loading HTML by default, which is a meaningful practical advantage for public-facing business websites." },
      { q: "Is Next.js only relevant for large projects?", a: "No — Next.js is used effectively for projects ranging from small marketing sites to large SaaS products, given how much of the routing and rendering setup it handles by default even on smaller projects." },
      { q: "Which should a business ask their development partner about?", a: "Ask about the partner's experience with the actual stack being proposed — if it's Next.js, ask specifically about Next.js experience, since it involves more than general React familiarity." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "React and Next.js aren't competing alternatives — React is a JavaScript library for building user interfaces out of components, and Next.js is a framework built on top of React that adds routing, a rendering model, data-fetching conventions and production tooling. Choosing Next.js means using React plus this additional structure, not choosing between the two. For most business website projects, the practical question is whether to use React with a framework like Next.js, or React largely unassisted — and for typical business sites, the framework's structure is usually the more practical choice.",
        ],
      },
      {
        heading: "React: A Library, Not a Framework",
        body: [
          "React provides a component model — building interfaces out of small, reusable pieces that manage their own state and compose together — but deliberately doesn't include routing, a rendering strategy, or a prescribed way to fetch data. Those decisions are left to the team building on top of it.",
        ],
      },
      {
        heading: "Next.js: A Framework Built on React",
        body: [
          "Next.js takes React's component model and adds the structural pieces a real production website needs: file-based routing, a rendering system that mixes static and dynamic content, data-fetching conventions, image and font optimization, and deployment tooling. It doesn't replace React — every Next.js component is a React component, using React's actual APIs.",
        ],
        visual: { variant: "grid", accent: "orange", caption: "Next.js sits on top of React, not beside it — a Next.js project is a React project with additional structure and conventions layered on." },
      },
      {
        heading: "The Comparison",
        body: [],
        table: {
          headers: ["Factor", "React alone", "Next.js"],
          rows: [
            ["What it is", "A UI component library", "A framework built on React"],
            ["Routing", "Requires a separate library or custom setup", "Built in, file-based"],
            ["Rendering", "Client-rendered by default; SSR requires separate setup", "Built-in rendering model mixing static and dynamic content"],
            ["SEO out of the box", "Requires additional configuration for crawlable HTML", "Produces fast, crawlable HTML by default"],
            ["Data fetching", "Left to the team's own approach", "Built-in conventions and caching support"],
            ["Deployment tooling", "Assembled by the team", "Built-in build and deployment tooling"],
            ["Setup effort", "Higher, more decisions to make upfront", "Lower, with sensible defaults"],
            ["Flexibility", "Maximum, at the cost of more setup", "High, within the framework's conventions"],
          ],
        },
      },
      {
        heading: "When Plain React Without a Framework Makes Sense",
        body: [
          "This fits highly specific, custom application architectures where a team deliberately wants full control over routing and build tooling rather than adopting a framework's conventions — more common for specialized internal tools than for a typical public-facing business website.",
        ],
      },
      {
        heading: "When Next.js Makes Sense",
        body: [
          "For most business websites — marketing sites, SaaS products, ecommerce storefronts — Next.js's built-in routing, rendering and SEO-friendly output remove a substantial amount of setup work a bare React project would otherwise require. See the [[/blogs/nextjs-website-development|Next.js website development guide]] for where it specifically fits.",
        ],
        cta: {
          title: "Deciding between React and a framework like Next.js for your project?",
          description: "ZSpace Labs builds on Next.js and React as a primary stack, and can walk through whether the added structure genuinely benefits your specific project.",
        },
      },
      {
        heading: "Rendering and SEO in Practice",
        body: [
          "A bare React single-page application typically renders content in the browser after the initial page load, which can require additional configuration to produce content search engines and social previews can read reliably. Next.js addresses this by default, producing real HTML content as part of its rendering model — a meaningful, practical advantage for a public-facing business website where organic search matters.",
        ],
      },
      {
        heading: "Data Fetching",
        body: [
          "React alone leaves data-fetching patterns entirely to the team; Next.js provides built-in conventions for fetching and caching data, including patterns for combining data that rarely changes with data that needs to be fresh on every request. This reduces the amount of custom infrastructure a team needs to build and maintain themselves.",
        ],
      },
      {
        heading: "Deployment",
        body: [
          "Next.js includes build and deployment tooling designed around its rendering model; a bare React application requires the team to assemble equivalent tooling and hosting infrastructure themselves, which is a real, often underestimated amount of additional work.",
        ],
      },
      {
        heading: "Developer Experience",
        body: [
          "Next.js's conventions reduce the number of upfront architectural decisions a team needs to make, which can speed up both initial development and onboarding new developers to an existing project — a practical, if less visible, business benefit alongside the more obvious technical ones.",
        ],
        cta: {
          title: "Want to see how this choice affects your specific project?",
          description: "See the [[/blogs/website-development-guide|complete website development guide]] for how technology choice fits into the broader development picture. Learn more about our [[/services/website-development|Next.js and React development work]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "React and Next.js aren't rival options — they're a library and a framework built on it, and the real decision for most business websites is whether to use React with that framework's added structure or largely unassisted. For the majority of business website projects, Next.js's routing, rendering and SEO-friendly defaults are worth the framework's conventions.",
        ],
      },
    ],
  },
];
