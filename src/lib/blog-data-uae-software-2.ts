import type { BlogPost } from "./blog-data";

/**
 * Software and product cluster, part 2: MVP development in the UAE and SaaS
 * product development for GCC markets. Differentiated from the generic owners
 * (ai-product-idea-validation, website-development-for-startups,
 * product-design-process, saas-product-design, ai-powered-saas-development,
 * subscription-billing-architecture) by UAE and Saudi context: bilingual
 * launch decisions, local payments, UAE PASS, WhatsApp, PDPL, VAT and
 * e-invoicing per market, and in-country hosting.
 * Sources checked 2026-10-08/09: Eric Ries (Startup Lessons Learned, 2009);
 * Intercom (RICE); Hub71 impact report 2025; Dubai Media Office (Dubai
 * Chamber of Digital Economy, reported); MoET SMEs page; DataReportal Digital
 * 2026 UAE; Stripe Global; Checkout.com BNPL data; u.ae (PDPL, consumer
 * protection); UAE PASS docs; Zbooni/YouGov; OWASP API Security Top 10 2023;
 * OWASP Logging Cheat Sheet; AWS SaaS Lens (silo, pool, bridge); Azure
 * multitenant guidance; Paddle (merchant of record); UAE MoF (VAT); FTA
 * (e-invoicing timeline); ZATCA (Fatoora roll-out phases); Microsoft Source
 * (Azure Saudi Arabia East); AWS regions page; RFC 9700; CISA Secure by
 * Design; W3C alreq. Saudi VAT rate and Saudi PDPL transfer rules come from
 * secondary summaries and are attributed cautiously.
 * No figure here is ZSpace client data.
 */
export const uaeSoftwarePosts2: BlogPost[] = [
  {
    slug: "mvp-development-uae",
    title: "MVP Development in the UAE: How to Validate and Launch a Digital Product",
    seoTitle: "MVP Development in the UAE: Validate and Launch",
    excerpt:
      "MVP development in the UAE: validate the problem, scope with MoSCoW and RICE, pick the right prototype, and plan Arabic, payments and UAE PASS from day one.",
    category: "Web Development",
    banner: "ideavalidflow",
    sceneKind: "roadmap",
    bannerAlt: "An MVP flow from problem validation and user research through scoping, prototype, launch and analytics back into iteration",
    date: "2026-10-09",
    readingTime: "19 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "saas-technology", "fintech", "healthcare-healthtech", "professional-services"],
    relatedSlugs: ["ai-product-idea-validation", "website-development-for-startups", "saas-development-gcc"],
    faqs: [
      {
        q: "What is an MVP in software development?",
        a: "Eric Ries defined the minimum viable product in 2009 as the version of a new product that lets a team collect the maximum amount of validated learning about customers with the least effort. In practice it is the smallest working product that real users can use for the core job, built so you can measure whether they get value and come back. It is a learning tool, not a cheap first release.",
      },
      {
        q: "How long does MVP development take in the UAE?",
        a: "There is no honest single answer, and we do not quote generic timelines. Duration depends on how well the problem is validated, the number of user roles, integrations such as payments or UAE PASS, whether Arabic ships at launch, data sensitivity, and how quickly decisions are made. A tightly scoped single-feature MVP with one role and no integrations is much faster than a two-sided marketplace with payments and identity checks.",
      },
      {
        q: "How much does an MVP cost in Dubai or Abu Dhabi?",
        a: "We do not publish price ranges because no reliable public benchmark exists and scope varies too much. Cost is driven by the same factors as time: number of roles and screens, integrations, bilingual and right-to-left support, compliance needs, platform choice (web, mobile or both), and the level of polish. Ask any supplier to break an estimate down by these drivers and to state their assumptions in writing.",
      },
      {
        q: "Should our MVP launch in Arabic and English?",
        a: "Launch in Arabic when your first users prefer it, when the product handles consumer invoices (UAE consumer invoices must be in Arabic), or when you target government or Arabic-first segments. Otherwise many B2B MVPs launch in English, but they should still be built so Arabic and right-to-left layout can be added without a rewrite: separate content from code, use logical CSS properties and store text per language.",
      },
      {
        q: "Can a UAE startup use Stripe for its MVP?",
        a: "Yes. Stripe lists the UAE as a supported country on its global availability page. Local providers such as Network International, Checkout.com, Telr and PayTabs also serve UAE merchants, and Tabby and Tamara offer buy now, pay later. Choose based on your entity type, the payment methods your users expect, settlement currency and whether you plan to expand to Saudi Arabia, where Stripe is not listed.",
      },
      {
        q: "Should an MVP use UAE PASS for login?",
        a: "Only if verified identity is central to the product, for example in regulated services, property, HR or document signing. UAE PASS offers authentication and digital signatures to private organisations with a valid UAE trade licence, through an onboarding process with initiation, development, assessment and go-live phases. For most MVPs, email or phone login is enough at first, with UAE PASS planned for a later phase.",
      },
      {
        q: "What is the difference between an MVP and a prototype?",
        a: "A prototype tests an idea or interaction, often without real code or real data. A clickable design, a concierge service or a Wizard-of-Oz test can all answer ‘would people want this?’ cheaply. An MVP is working software that real users rely on for a real task, so it must handle security, data integrity and support properly. Use prototypes to decide what goes into the MVP.",
      },
      {
        q: "When should we move beyond the MVP?",
        a: "When the metrics you set before launch are met: users reach the activation event, a meaningful share return over several weeks, and some pay or commit. At that point invest in scale, reliability and the features you deferred. If metrics are flat after several iterations, revisit the problem or the segment rather than adding features. Stopping is a valid, often cheaper, outcome.",
      },
    ],
    content: [
      {
        heading: "What is MVP development, and how does it work in the UAE?",
        body: [
          "**MVP development** is the process of building the smallest working version of a product that real users can use for one core job, so a team can learn whether the product creates value before investing in the full build. In the UAE it also means deciding early on Arabic, local payments, identity and data protection, because those choices are expensive to reverse.",
          "The term comes from Eric Ries, who in 2009 described the minimum viable product as ‘that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort’ ([[http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html|Startup Lessons Learned]]). The key words are validated learning. An MVP succeeds when it answers a question about customers, not when it ships a feature list.",
          "This guide is written for founders, product owners and corporate innovation teams building in the UAE. It covers problem validation, user research, scoping, prototypes, architecture, launch, analytics and iteration, then the UAE-specific decisions: bilingual launch, payments, UAE PASS, WhatsApp and the PDPL. For the generic depth on validating ideas, see our guide to [[/blogs/ai-product-idea-validation|validating a product idea before building]]; for the marketing site that sits in front of an MVP, see [[/blogs/website-development-for-startups|website development for startups]]. We label UAE facts, our recommendations and hypothetical examples separately. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "An MVP is a learning tool: it should test one riskiest assumption with real users, not ship a smaller version of the full roadmap.",
          "Validate the problem first with interviews and evidence of current spending or workarounds; only then scope a product.",
          "Scope with MoSCoW (must, should, could, won't) and rank candidate features with a scoring method such as RICE.",
          "Use the cheapest test that answers the question: clickable prototype, concierge, Wizard-of-Oz or a single-feature product.",
          "Minimum does not mean broken: authentication, data integrity, onboarding and support must work from day one.",
          "Choose boring, well-supported technology, design the data model and permissions carefully, and avoid premature microservices.",
          "In the UAE, decide deliberately on Arabic at launch, payment providers, UAE PASS, WhatsApp support and PDPL consent.",
          "Define activation and retention events before launch, and set exit criteria for each phase so decisions follow evidence.",
        ],
      },
      {
        heading: "What an MVP is, and what it is not",
        body: [
          "An MVP is the smallest product that lets the target user complete one valuable job end to end, instrumented so you can see whether they do. It is deliberately narrow in scope but complete in quality for that scope. Ries himself has stressed that the MVP is about learning, not about producing minimal products.",
          "What it is not: a demo that only works with the founder driving, a half-built version of every planned module, or a product so rough that users leave before you learn anything. A poor MVP gives false negatives. If users abandon because login fails or data disappears, you learn nothing about whether the idea is good.",
          "**Our recommendation:** write the one question your MVP must answer at the top of the brief, for example ‘Will finance managers at UAE SMEs upload supplier invoices weekly if we reconcile them automatically?’ Every scope decision should be tested against that question.",
        ],
        table: {
          headers: ["Area", "Viable MVP", "Broken, incomplete product"],
          rows: [
            ["**Scope**", "One core job done end to end", "Many features, none finished"],
            ["**Security**", "Proper authentication, hashed passwords or managed identity, role checks on every request, secrets out of code", "Shared logins, admin pages without checks, API keys in the front end"],
            ["**Data integrity**", "Validated inputs, backups, migrations under version control, no silent data loss", "Data overwritten or lost, manual database edits, no backups"],
            ["**Onboarding**", "A new user reaches the first useful outcome without a call", "Users need the founder to explain every step"],
            ["**Support**", "A clear channel (email or WhatsApp), an owner and a response target", "Messages go unanswered or to one personal phone"],
            ["**Measurement**", "Activation and retention events tracked from day one", "No analytics, or page views only"],
            ["**Legal basics**", "Privacy notice, consent where needed, terms of use", "No privacy notice; personal data collected without a stated purpose"],
          ],
        },
      },
      {
        heading: "The UAE startup context",
        body: [
          "**UAE facts.** The UAE has a dense support system for early-stage products. Hub71, Abu Dhabi's tech ecosystem, reports 390 startups in its community ([[https://hub71.com/impact/2025|Hub71 2025 impact report]]). In Dubai, the Dubai Chamber of Digital Economy said it supported 1,690 digital startups in 2025, up 39.7% year on year, with about 15% in AI and 12% in fintech, according to a January 2026 announcement reported by the Dubai Media Office and WAM. The Ministry of Economy and Tourism counted about 558,000 SMEs in 2022 and has set a target of one million by 2030 ([[https://www.moet.gov.ae/en/entrepreneurs-and-smes|MoET]]).",
          "Digital reach is not a constraint. DataReportal's Digital 2026 report puts UAE internet penetration at 99%, with 23.0 million mobile connections, or 202% of the population ([[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal]]). Most MVPs here should be designed mobile first, even when the main users are businesses.",
          "**What this means for an MVP (our recommendation).** A busy ecosystem means many founders compete for the same early adopters, and buyers have seen plenty of unfinished products. The bar for ‘viable’ is higher than the word ‘minimum’ suggests: a working, trustworthy product for a narrow job will outperform a broad but unreliable one. It also means that programme participation, investor interest or a free-zone licence are not validation. Only user behaviour is.",
        ],
      },
      {
        heading: "Step 1: Validate the problem before the product",
        body: [
          "Most failed MVPs solve a problem nobody prioritises. Before any design work, collect evidence that the problem is frequent, painful and currently costing the user time or money.",
          "**Evidence that counts:** users describe the problem without being prompted; they already spend money, staff time or spreadsheets on a workaround; they can name the last time it happened; and they agree to a follow-up or a paid pilot. Evidence that does not count: friends saying it is a good idea, survey answers about hypothetical future behaviour, or competitors raising money.",
          "**Our recommendation:** run 10 to 20 problem interviews per target segment, using open questions about past behaviour (‘Tell me about the last time you…’), and record the answers in a shared sheet. Stop when you hear the same three or four problems repeatedly. If you cannot find a segment with a sharp, repeated problem, do not build yet.",
          "For AI-based ideas, the validation tracks differ slightly because feasibility depends on model performance and data. Our guide to [[/blogs/ai-product-idea-validation|validating an AI product idea]] covers desirability, feasibility and viability tests in depth, and [[/blogs/ai-poc-vs-pilot-vs-production|AI proof of concept vs pilot vs production]] explains how to stage AI work.",
        ],
        checklist: [
          "A named target segment (role, company type, size, emirate if relevant)",
          "A one-sentence problem statement users recognise in their own words",
          "Evidence of current workaround and its cost in time or money",
          "At least a handful of users willing to try an early version",
          "The riskiest assumption written down as a testable hypothesis",
        ],
      },
      {
        heading: "Step 2: User research that changes decisions",
        body: [
          "Research for an MVP has one purpose: to reduce the riskiest uncertainty before you write code. Keep it light, but make it decisive.",
          "**Jobs and context.** Map what the user is trying to get done, where they are when they do it (desk, site, car, clinic), which device they use, and who else is involved. In the UAE, check language preference by segment rather than assuming English, and ask which channels they already use with suppliers, especially WhatsApp.",
          "**Workflow mapping.** Draw the current process step by step, including the spreadsheets, emails and calls. The MVP should replace one painful segment of that flow, not all of it.",
          "**Decision makers vs users.** In B2B products the person who suffers the problem is often not the person who pays. Interview both. Note procurement requirements early: some UAE enterprises and government entities ask about hosting location, Arabic support and security documentation before a pilot.",
          "Our [[/blogs/product-design-process|product design process]] guide covers research, definition, ideation and testing methods in detail. For an MVP, compress those stages but do not skip them.",
        ],
      },
      {
        heading: "Step 3: Scope the MVP with MoSCoW and a scoring method",
        body: [
          "Scoping is where MVPs grow into full products by accident. Two tools help keep the scope honest.",
          "**MoSCoW** sorts each candidate feature into Must have (the core job fails without it), Should have (important but the job still works without it), Could have (nice to have) and Won't have this time (explicitly deferred). The Won't list is the most valuable part: it records decisions so they are not reopened every week.",
          "**RICE** ranks features within a category. Intercom's product team described it in a 2018 post as scoring each idea on Reach, Impact, Confidence and Effort, with impact on a scale from 3 (massive) to 0.25 (minimal) and confidence as 100%, 80% or 50% ([[https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/|Intercom]]). The score is reach times impact times confidence, divided by effort. It forces you to admit when a feature's value is a guess.",
          "**Our recommendation:** run MoSCoW first to agree what is in and out, then apply RICE to the Should and Could items to decide what enters the first iteration after launch. Revisit the scores after launch using real data, because confidence should rise or fall with evidence.",
        ],
        table: {
          headers: ["Category", "Test question", "Typical MVP examples", "Decision rule (our recommendation)"],
          rows: [
            ["**Must have**", "Does the core job fail without it?", "Sign-up and login, the one core workflow, basic roles, data export, privacy notice", "Build to production quality"],
            ["**Should have**", "Is it painful but survivable without it?", "Notifications, simple reporting, second language, bulk import", "Build only if RICE ranks it high and effort is low"],
            ["**Could have**", "Would users notice if it were missing?", "Dashboards, themes, integrations beyond the first, advanced search", "Defer; collect requests as evidence"],
            ["**Won't have (now)**", "Is it outside the question this MVP answers?", "Native apps for every platform, AI features not tied to the core job, multi-country billing", "Record and revisit at the next phase gate"],
          ],
        },
      },
      {
        heading: "A prioritisation scorecard for MVP features",
        body: [
          "RICE works well for comparing features of a known product. For an MVP, where risk matters as much as value, we add two questions. The scorecard below is our own framework; adapt the weights to your context.",
        ],
        table: {
          headers: ["Factor", "Question", "Score 1", "Score 3", "Score 5"],
          rows: [
            ["**Learning value**", "Does it help answer the MVP's main question?", "Unrelated", "Indirectly", "Directly"],
            ["**User value**", "How much does it reduce the user's pain?", "Marginal", "Noticeable", "Core to the job"],
            ["**Risk if missing**", "What happens if we launch without it?", "Nothing", "Some friction", "Users cannot trust or use the product"],
            ["**Effort (inverted)**", "How hard is it to build and maintain?", "Weeks of work or a new integration", "Several days", "Hours or a configuration change"],
            ["**Reversibility**", "How costly is it to change later?", "Easy to add later", "Moderate refactor", "Hard to retrofit (data model, auth, RTL)"],
          ],
        },
        callout: {
          type: "tip",
          text: "Reversibility is the factor most teams forget. Features that are hard to retrofit, such as the permission model, multi-language content storage and tenant separation, deserve attention in the MVP even when the visible feature is deferred.",
        },
      },
      {
        heading: "Step 4: Choose the right prototype before you build",
        body: [
          "Not every question needs working software. Pick the cheapest test that will change your decision.",
          "**Clickable prototype:** a linked set of screens in a design tool. It tests comprehension, navigation and appetite, not real behaviour over time. **Concierge MVP:** you deliver the service manually to a few customers, who know a person is doing it. It tests whether the outcome is valued. **Wizard-of-Oz MVP:** users see what looks like a product, but people perform the work behind the scenes. It tests behaviour with a realistic interface before automation exists. **Single-feature MVP:** working software for one job, which tests real usage, retention and willingness to pay.",
          "For deciding between low- and high-fidelity prototypes, see [[/blogs/wireframing-vs-prototyping|wireframing vs prototyping]]. **Our recommendation:** test clickable prototypes with a small group of target users per round, and fix what confuses them before committing to a build. Our [[/services/ui-ux-design|UI/UX design]] service covers this kind of prototype testing.",
        ],
        table: {
          headers: ["Type", "Best for testing", "What you learn", "Limits", "UAE note (our recommendation)"],
          rows: [
            ["**Clickable prototype**", "Flows, comprehension, messaging", "Whether users understand and want it", "No real usage or data", "Test Arabic and English versions if both segments matter"],
            ["**Concierge**", "Value of the outcome", "Whether people pay or commit for the result", "Does not scale; slow", "WhatsApp works well as the delivery channel"],
            ["**Wizard-of-Oz**", "Behaviour with a realistic interface", "Real demand before automation or AI is built", "Ethical care needed; disclose where required", "Be transparent with users; avoid processing sensitive data manually without consent"],
            ["**Single-feature product**", "Retention and willingness to pay", "Whether users return and rely on it", "Needs production-quality basics", "Plan payments, consent and support from day one"],
          ],
        },
      },
      {
        heading: "Step 5: Architecture for an MVP that can grow",
        body: [
          "**Keep it simple.** A single, well-structured application (a modular monolith) with one database is the right default for nearly every MVP. Microservices add deployment, monitoring and data consistency work that a small team cannot afford and does not yet need. Our comparison of [[/blogs/ecommerce-microservices-vs-monolith|microservices vs monolith]] explains the trade-offs; for an MVP, the answer is almost always the monolith.",
          "**Choose boring technology.** Use mainstream frameworks, a managed relational database and a managed hosting platform your team already knows. The goal is that a second developer can understand the code in a day. Avoid niche languages, experimental databases and tools that only one person can maintain.",
          "**Spend design time on what is hard to change.** Three things deserve care even in an MVP. Authentication and authorisation: use a proven identity provider or framework library, and check permissions on the server for every request. The data model: name entities clearly, add an organisation or account identifier to every business record if more than one company will ever use the product, and keep migrations in version control. Content and language: store user-facing text per language rather than hard-coding English strings.",
          "**Secure the basics.** The OWASP API Security Top 10 (2023) lists broken object level authorisation as the first risk: a user changing an ID in a request and seeing another customer's data ([[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP]]). MVPs built quickly, including AI-generated code, often have exactly this flaw. If your MVP started as a prototype built with AI coding tools, our [[/blogs/vibe-coded-app-to-production|vibe-coded app hardening checklist]] covers what to fix before real users arrive.",
        ],
        code: {
          label: "A typical MVP architecture (our recommendation)",
          text: "Users (mobile web / app)\n   |\n   v\nWeb front end (bilingual-ready, RTL via logical CSS)\n   |\n   v\nOne application (modular monolith)\n   |-- auth: identity provider or framework auth\n   |-- core module: the one job the MVP tests\n   |-- billing module: payment provider webhooks\n   |-- notifications: email, WhatsApp template msgs\n   |\n   +--> Managed relational database (UAE region\n   |    if data sensitivity requires)\n   +--> Object storage for files\n   +--> Product analytics (activation, retention)\n   +--> Error monitoring and backups",
        },
      },
      {
        heading: "Arabic at launch or later? Criteria for a bilingual MVP",
        body: [
          "**UAE facts.** Arabic is the official language of the UAE. Under the consumer protection framework, consumer invoices must be in Arabic (other languages are optional), and UAE-registered ecommerce businesses must provide product or service information in Arabic ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae]]). We found no general legal requirement that every business website or app be in Arabic. Confirm your own obligations with an adviser.",
          "**Our recommendation.** Make the product Arabic-ready at launch even if Arabic content follows later. That means: text stored per language, the HTML dir attribute set per page, layout built with logical CSS properties (start and end rather than left and right), icons reviewed for mirroring, and fonts with an Arabic subset. Retrofitting right-to-left support into a finished product usually touches every screen.",
          "Number formatting is a detail that surfaces late. Common software defaults format ar-AE with Latin digits and ar-SA with Arabic-Indic digits, so set the numbering system explicitly if your design depends on it. Our [[/blogs/multilingual-website-development-uae|multilingual website development guide]] covers RTL engineering, URLs and translation workflow in depth.",
        ],
        table: {
          headers: ["Signal", "Launch with Arabic", "Arabic later is usually acceptable"],
          rows: [
            ["**First users**", "Arabic-first users, nationals, government or semi-government buyers", "Expatriate professionals or international B2B teams working in English"],
            ["**Documents**", "The product issues consumer invoices or consumer-facing product information", "Internal tools with no consumer documents"],
            ["**Channel**", "Consumer marketing in Arabic, Arabic search demand", "Direct sales to English-speaking decision makers"],
            ["**Expansion**", "Saudi Arabia is an early target market", "UAE-only for the first year"],
            ["**Trust**", "Health, family, finance or public services where comprehension matters", "Developer or specialist tools"],
          ],
        },
      },
      {
        heading: "Payments, identity, WhatsApp and data protection in a UAE MVP",
        body: [
          "**Payments (UAE facts).** Stripe lists the UAE as a supported country ([[https://stripe.com/global|Stripe]]). Local and regional providers serving UAE merchants include Network International (N-Genius Online), Checkout.com, which holds a Central Bank of the UAE acquiring licence, Telr and PayTabs. Apple Pay is available. Tabby and Tamara offer buy now, pay later, and Checkout.com reported in March 2025 that 39% of UAE online shoppers had used BNPL in the past 12 months ([[https://www.checkout.com/newsroom/checkout-com-and-tabby-partner-to-expand-bnpl-solutions-for-retailers-in-the-uae-and-saudi-arabia|Checkout.com]]). **Our recommendation:** start with one provider that fits your entity type and the methods your users expect, handle webhooks idempotently, and keep payment logic in one module so you can add a second provider later. If subscriptions are central, our [[/blogs/subscription-billing-architecture|subscription billing architecture]] guide covers state machines, proration and retries.",
          "**Identity: UAE PASS (UAE facts).** UAE PASS, the national digital identity, offers authentication and digital signatures to government and private organisations; private entities need a valid UAE trade licence, and onboarding runs through initiation, development, assessment and go-live phases using an OAuth 2.0 authorisation code flow ([[https://docs.uaepass.ae|UAE PASS documentation]]). **Our recommendation:** add UAE PASS to the MVP only when verified identity is the core of the job, such as signing tenancy or employment documents. Otherwise launch with email or phone login, design the user table to hold an external identity later, and plan UAE PASS onboarding as a separate phase with its own timeline.",
          "**WhatsApp (UAE facts).** In a 2024 Zbooni/YouGov survey of 1,000 UAE residents, 85% wanted businesses to offer WhatsApp for support and 87% preferred a human over a chatbot or AI ([[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Communicate]]; vendor-commissioned). **Our recommendation:** use WhatsApp for onboarding help and support during the MVP, staffed by people, with conversations logged against the user account. It is also one of the richest sources of qualitative feedback you will get.",
          "**Data protection (UAE facts).** The UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) has applied since 2 January 2022; consent is required unless an exception applies, and cross-border transfers are subject to conditions ([[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae]]). DIFC and ADGM have their own regimes, and health data has stricter rules: Federal Law No. 2 of 2019 restricts storing or processing health data outside the UAE. **Our recommendation:** map what personal data the MVP collects and why, write a plain privacy notice, record consent with purpose and date, and choose a UAE cloud region from the start if your data is health-related or your buyers will ask. Take legal advice for regulated sectors.",
        ],
      },
      {
        heading: "Step 6: Launch, analytics and feedback",
        body: [
          "Launch an MVP to a defined group, not to everyone. A cohort of early users you can talk to is more useful than a large audience you cannot. Set the success thresholds before launch so results cannot be reinterpreted afterwards.",
          "**Activation** is the moment a new user first gets the core value, for example ‘uploaded the first invoice and saw it matched’. **Retention** is whether they repeat the core action over following weeks. Track both as named events, with the account or organisation attached, so you can read behaviour by cohort. Page views and sign-ups alone will mislead you.",
          "**Feedback loops.** Combine numbers with conversation: a short in-product prompt after the core action, a weekly review of support and WhatsApp threads, and five or so follow-up calls per iteration with users who activated and users who did not. The second group often explains more.",
          "The landing page in front of the MVP matters too. If traffic does not convert to sign-ups, you are testing the page, not the product. See [[/blogs/landing-page-design-uae|landing page design for UAE businesses]] for structure and bilingual messaging.",
        ],
        table: {
          headers: ["Event", "Definition (example)", "Why it matters"],
          rows: [
            ["**signed_up**", "Account created and verified", "Top of the funnel; check drop-off before activation"],
            ["**onboarding_completed**", "Required setup finished (company profile, first user invited)", "Shows where setup friction sits"],
            ["**core_action_completed**", "The one job done for the first time", "Your activation event"],
            ["**core_action_repeated**", "The job done again in a later week", "Early retention signal"],
            ["**invited_teammate**", "Second user added to the account", "B2B adoption signal"],
            ["**payment_succeeded**", "First charge or paid plan started", "Willingness to pay"],
            ["**support_contacted**", "Help request via WhatsApp, email or chat", "Friction and confusion hotspots"],
          ],
        },
      },
      {
        heading: "Step 7: Iterate, pivot or stop",
        body: [
          "After each iteration, compare results with the thresholds you set. There are three honest outcomes. **Persevere:** activation and retention meet the bar, so invest in the Should haves and reliability. **Pivot:** users engage with a different part of the product, or a different segment responds, so change the hypothesis and re-scope. **Stop:** after several honest iterations the problem is not painful enough or users will not pay, so stop and keep what you learned.",
          "**Our recommendation:** time-box iterations, change one major thing at a time, and keep a decision log. Teams that change pricing, onboarding and the core feature in the same week cannot tell what worked.",
          "When the MVP proves demand and you need to build a durable product, the challenges change: permissions, scale, billing and support. Our guide to [[/blogs/saas-development-gcc|SaaS product development for GCC markets]] picks up from that point, and [[/blogs/saas-product-design|SaaS product design]] covers onboarding, dashboards and retention UX.",
        ],
      },
      {
        heading: "A phased MVP roadmap with exit criteria",
        body: [
          "This is our recommended phase structure. We deliberately do not attach durations or costs: they depend on the drivers in the next section. Move to the next phase only when the exit criteria are met.",
        ],
        table: {
          headers: ["Phase", "Goal", "Outputs", "Exit criteria"],
          rows: [
            ["**0. Problem validation**", "Prove a painful, frequent problem in a defined segment", "Interview notes, problem statement, riskiest assumption", "Repeated problem across interviews; users willing to try an early version"],
            ["**1. Solution testing**", "Test the proposed solution cheaply", "Clickable prototype or concierge service; MoSCoW list; success metrics", "Users complete key flows; some commit time or money"],
            ["**2. MVP build**", "Build the Must haves to production quality", "Working product, analytics events, privacy notice, support channel, backups", "Security review passed; activation event tracked; support owner named"],
            ["**3. Private launch**", "Learn from a small cohort", "Cohort data, feedback log, bug list", "Activation and early retention meet the thresholds set in phase 1"],
            ["**4. Iteration**", "Improve what users use; cut what they ignore", "Re-scored backlog, decision log, updated onboarding", "Retention stable or rising across cohorts; clear payer"],
            ["**5. Scale-up decision**", "Decide to scale, pivot or stop", "Business case, architecture review, roadmap for deferred items", "Funding or revenue supports the next stage; architecture risks known"],
          ],
        },
      },
      {
        heading: "What drives MVP timelines and costs",
        body: [
          "We do not publish generic MVP prices or durations, because no credible public UAE benchmark exists and the spread between projects is very wide. Instead, use these drivers to compare quotes and to cut scope where it matters least.",
        ],
        checklist: [
          "**Clarity of the problem and scope:** a validated problem and a written Won't list shorten everything.",
          "**Number of user roles:** each role adds screens, permissions and test cases. Marketplaces have at least two sides plus an admin.",
          "**Platforms:** a responsive web app is usually the fastest route; native iOS and Android add work and store review. See our [[/services/mobile-app-development|mobile app development]] service for when native is justified.",
          "**Integrations:** payments, UAE PASS, accounting, CRM, WhatsApp Business Platform and government APIs each add build, testing and onboarding time. Our [[/blogs/api-integration-uae|API integration guide]] covers the patterns.",
          "**Bilingual and RTL support:** Arabic at launch adds translation, review and layout testing.",
          "**Data sensitivity:** health, financial or identity data raises hosting, security and documentation requirements.",
          "**AI components:** model evaluation, prompt testing and cost controls add work beyond the interface.",
          "**Decision speed:** slow feedback and approvals extend timelines more than most technical choices.",
          "**Build approach:** whether parts are assembled from SaaS tools or built custom; see [[/blogs/custom-software-vs-saas-uae|custom software vs SaaS]].",
        ],
      },
      {
        heading: "Hypothetical examples",
        body: [
          "These examples are **hypothetical** and illustrate the decisions above. They are not ZSpace client work.",
          "**1. B2B SaaS for UAE SMEs: supplier invoice reconciliation.** Riskiest assumption: finance staff will upload invoices weekly if matching saves them time. Phase 1 is a concierge test, with an analyst matching invoices from WhatsApp-forwarded PDFs for a few companies. The MVP Must haves: company accounts with an owner and member roles, upload, matching results, export to spreadsheet. Won't have: accounting software integrations, Arabic UI (users are English-speaking finance teams), e-invoicing. Activation event: first matched batch exported. Because the UAE's B2B e-invoicing timeline starts in 2027, the data model stores invoice fields cleanly so integration can follow.",
          "**2. Two-sided marketplace: home maintenance services.** Riskiest assumption: households will book vetted technicians online instead of calling a known contact. The first test is a Wizard-of-Oz booking page with manual matching behind it. The MVP adds customer and technician apps as a responsive web app, booking, card payment through one provider with webhooks, and WhatsApp updates. Arabic launches with the MVP because the target neighbourhoods include Arabic-first households. Won't have: ratings algorithms, subscriptions, a native app.",
          "**3. Health administration tool: clinic appointment reminders and intake forms.** Riskiest assumption: small clinics will replace phone reminders with a tool if no-shows fall. Because health data is involved, the MVP is hosted in a UAE cloud region from day one, access is role-based, and audit logs record who viewed each record. Only administrative data needed for the job is collected. Arabic and English templates ship at launch. Legal advice on health data obligations is part of phase 2, not an afterthought. UAE PASS is deferred to a later phase.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "These are the patterns that most often turn an MVP into an expensive prototype.",
        ],
        checklist: [
          "Building before validating the problem with real users",
          "Treating ‘minimum’ as permission to skip authentication, backups or a privacy notice",
          "Scoping by copying a competitor's feature list",
          "No written Won't list, so deferred features return every week",
          "Starting with microservices, Kubernetes or a niche stack the team cannot maintain",
          "Hard-coding English text and left-to-right layout, then discovering Arabic is needed",
          "Adding UAE PASS or several payment providers before demand is proved",
          "Launching to everyone at once instead of a cohort you can talk to",
          "Tracking sign-ups and page views but not activation and retention",
          "Letting a supplier own the code repository, domains or cloud accounts",
        ],
      },
      {
        heading: "Choosing who builds the MVP",
        body: [
          "Founders in the UAE choose between a technical co-founder, freelancers, an in-house hire, a local agency or a remote studio. The right choice depends on how much product judgement you need alongside development, not only on day rates.",
          "**Our recommendation:** whoever builds it, insist that the code, cloud accounts and domains are in your name from day one, that the supplier writes down architecture decisions, and that you receive a handover pack. Ask how they would test the riskiest assumption before building. Our guides to [[/blogs/software-development-company-uae|choosing a software development company in the UAE]] and to [[/blogs/digital-product-development-gcc|digital product development in the GCC]] cover selection criteria and the full product lifecycle.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**MVP and prioritisation:** [[http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html|Eric Ries, Minimum Viable Product: a guide (2009)]]; [[https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/|Intercom, RICE prioritisation (2018)]].",
          "**UAE ecosystem and market:** [[https://hub71.com/impact/2025|Hub71 2025 impact report]]; [[https://mediaoffice.ae/en/news/2026/january/22-01/dubai-chamber-of-digital-economy-digital-startups|Dubai Media Office, Dubai Chamber of Digital Economy (Jan 2026)]]; [[https://www.wam.ae/en/article/bycu82i-dubai-chamber-digital-economy-supports|WAM]]; [[https://www.moet.gov.ae/en/entrepreneurs-and-smes|Ministry of Economy and Tourism, SMEs]]; [[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal, Digital 2026: UAE]].",
          "**Payments and identity:** [[https://stripe.com/global|Stripe global availability]]; [[https://www.checkout.com/newsroom/checkout-com-and-tabby-partner-to-expand-bnpl-solutions-for-retailers-in-the-uae-and-saudi-arabia|Checkout.com BNPL data]]; [[https://docs.uaepass.ae|UAE PASS documentation]].",
          "**Law and channels:** [[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae, data protection laws]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae, consumer protection]]; [[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Zbooni/YouGov WhatsApp survey]].",
          "**Security:** [[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP API Security Top 10 2023]].",
          "The Dubai Chamber of Digital Economy figures are taken from official announcements as reported; the full report was not reviewed. Nothing here is ZSpace client data, and nothing is legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good MVP in the UAE is narrow, trustworthy and measurable. Validate the problem with real users, scope with a written Won't list, test with the cheapest prototype that answers your question, then build the Must haves to production quality on simple, well-supported technology. Make the product Arabic-ready, choose payments and identity deliberately, staff WhatsApp support with people, and handle personal data properly from the first user.",
          "Set activation and retention thresholds before launch, and let them decide whether you persevere, pivot or stop. That discipline costs less than any feature you will not need.",
        ],
        cta: {
          title: "Shaping an MVP for the UAE?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with UAE and global teams on [[/services/ui-ux-design|product design and prototypes]], [[/services/website-development|web apps and platforms]] and [[/services/mobile-app-development|mobile apps]]. If it would help to pressure-test your MVP scope or architecture, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "saas-development-gcc",
    title: "SaaS Product Development for GCC Markets: From Idea to Scalable Platform",
    seoTitle: "SaaS Development for GCC Markets: UAE and Saudi",
    excerpt:
      "SaaS development for the GCC: multi-tenant architecture, SSO and UAE PASS, billing where Stripe is not listed, VAT, e-invoicing, Arabic and data hosting.",
    category: "Web Development",
    banner: "saasshell",
    sceneKind: "code",
    bannerAlt: "A multi-tenant SaaS platform with a shared core and country-specific billing, tax, language and hosting layers for the UAE and Saudi Arabia",
    date: "2026-10-09",
    readingTime: "20 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups", "b2b-enterprise", "fintech", "professional-services"],
    relatedSlugs: ["saas-product-design", "mvp-development-uae", "gcc-digital-transformation"],
    faqs: [
      {
        q: "What is different about building SaaS for GCC markets?",
        a: "The core engineering is the same as anywhere: multi-tenancy, identity, billing, security and analytics. What differs is the layer around it. The UAE and Saudi Arabia have different VAT rates, different e-invoicing regimes, different personal data laws, different payment provider coverage and different Arabic formatting conventions. A GCC SaaS product needs a shared core with country-specific configuration for tax, invoicing, payments, language and, where required, hosting.",
      },
      {
        q: "Which multi-tenancy model should a GCC SaaS product use?",
        a: "Most products start with a pooled model, where tenants share infrastructure and every record carries a tenant identifier, because it is cheapest to run and simplest to operate. AWS describes silo (dedicated resources per tenant), pool (shared resources) and bridge (a mix) models. A bridge model is common in the GCC: pooled for most customers, with dedicated databases or in-country deployments for regulated or enterprise tenants.",
      },
      {
        q: "Can we use Stripe for SaaS billing in Saudi Arabia?",
        a: "Stripe's global availability page lists the UAE but did not list Saudi Arabia when we checked in October 2026, so do not assume a Stripe account works for a Saudi entity. Options include Saudi or regional payment gateways that support mada, invoicing with bank transfer for enterprise customers, or a merchant of record that sells on your behalf. Confirm current coverage with each provider before designing billing.",
      },
      {
        q: "What VAT rates apply to SaaS in the UAE and Saudi Arabia?",
        a: "The UAE Ministry of Finance states VAT was introduced on 1 January 2018 at a standard rate of 5%. Saudi Arabia's standard rate is 15%, according to ZATCA guidance as summarised by advisers. How VAT applies to your SaaS, including registration, place of supply and reverse charge for business customers, depends on your entity and customers, so take advice from a tax adviser in each market.",
      },
      {
        q: "Do SaaS invoices need to follow e-invoicing rules in the UAE and Saudi Arabia?",
        a: "Both countries have e-invoicing regimes with different formats and timelines. Saudi Arabia's Fatoora began with a generation phase from 4 December 2021 and an integration phase rolled out in waves from 1 January 2023. The UAE's B2B system starts on 1 January 2027 for businesses with revenue of AED 50 million or more and 1 July 2027 for others, through accredited service providers. Design invoicing per market and confirm obligations with a tax adviser.",
      },
      {
        q: "Must SaaS data be hosted inside the UAE or Saudi Arabia?",
        a: "Not always. It depends on the data, the sector and the customer. UAE health data has specific restrictions on processing outside the country, and many government and regulated buyers ask for in-country hosting. Saudi Arabia's PDPL sets conditions for transferring personal data abroad. UAE cloud regions are live from AWS, Azure and Oracle; announced AWS and Azure Saudi regions were not yet live in October 2026. Take legal advice before deciding.",
      },
      {
        q: "Should a GCC SaaS product support UAE PASS login?",
        a: "Support it when your users need verified identity or digital signatures in the UAE, for example in HR, property, legal or government-facing products. UAE PASS is available to private organisations with a valid UAE trade licence and uses an OAuth 2.0 authorisation code flow. For enterprise customers, SSO through SAML or OpenID Connect with their own identity provider is usually the higher priority.",
      },
      {
        q: "How should Arabic be handled in a SaaS product for the GCC?",
        a: "Build right-to-left support into the design system and store all user-facing text per language from the start. Format numbers, dates and currencies per locale and set the digit system explicitly, because common software formats ar-AE with Latin digits and ar-SA with Arabic-Indic digits by default. Let tenant admins choose defaults, let users override them, and have native speakers review interface text and templates.",
      },
    ],
    content: [
      {
        heading: "What does SaaS development for GCC markets involve?",
        body: [
          "**SaaS development for GCC markets** means building one multi-tenant software product that many organisations subscribe to, with a shared core for identity, data, security and analytics, and country-specific layers for tax, e-invoicing, payments, language and, where required, data hosting. For most teams the first two markets are the UAE and Saudi Arabia, and they differ in ways the architecture must anticipate.",
          "The generic engineering of SaaS is well documented. What is less documented is how a product built in Dubai or Abu Dhabi behaves when its first Riyadh customer asks for a ZATCA-compliant invoice, Arabic-Indic digits, in-Kingdom data hosting and payment by mada. Those questions are cheap to answer at design time and expensive to answer after launch.",
          "This guide covers product discovery, roles and permissions, multi-tenancy models, reference architecture, authentication, billing, tax and e-invoicing, localisation, data location, security, analytics, support and scaling, and ends with what to centralise and what to vary by country. For SaaS interface design, see [[/blogs/saas-product-design|product design for SaaS]]; for AI features inside SaaS, see [[/blogs/ai-powered-saas-development|AI-powered SaaS development]]. We separate verified facts, our recommendations and hypothetical examples. Nothing here is legal or tax advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Build one product with a shared core and per-country configuration; avoid forking the codebase per market.",
          "Start with a pooled multi-tenant model and a tenant identifier on every record; add silo components for regulated or enterprise tenants (a bridge model).",
          "Design roles in two layers: platform roles for your team and tenant roles managed by each customer's admin.",
          "Offer SSO (SAML or OpenID Connect) for enterprise tenants; add UAE PASS where verified UAE identity matters.",
          "Stripe lists the UAE but not Saudi Arabia, so plan Saudi billing through local gateways, invoicing or a merchant of record.",
          "VAT is 5% in the UAE (MoF) and 15% in Saudi Arabia (per ZATCA guidance); e-invoicing formats and timelines differ, so build invoicing per market.",
          "Arabic, RTL, digit systems and currencies (AED, SAR) belong in the design system and data model, not in a later translation pass.",
          "UAE cloud regions are live; announced Saudi regions from AWS and Azure were not yet live in October 2026. Take advice on Saudi PDPL transfer rules.",
        ],
      },
      {
        heading: "UAE and Saudi Arabia: what changes for a SaaS product",
        body: [
          "The table below summarises the differences that most often affect SaaS architecture. It is a planning map, not legal or tax advice; items marked ‘reported’ come from secondary summaries rather than the primary text.",
        ],
        table: {
          headers: ["Topic", "UAE", "Saudi Arabia", "Design implication (our recommendation)"],
          rows: [
            ["**VAT standard rate**", "5% since 1 Jan 2018 (Ministry of Finance)", "15% (ZATCA guidance, reported)", "Tax rates as configuration per country, never hard-coded"],
            ["**E-invoicing**", "B2B/B2G via Accredited Service Providers: go-live 1 Jan 2027 (revenue AED 50m+) and 1 Jul 2027 (below) (FTA)", "Fatoora Phase 1 from 4 Dec 2021; Phase 2 integration in waves from 1 Jan 2023 (ZATCA)", "Pluggable invoice adapters per market"],
            ["**Stripe**", "Listed as available", "Not listed", "Payment provider abstraction from day one"],
            ["**Personal data law**", "PDPL, Federal Decree-Law 45/2021, in force 2 Jan 2022; DIFC and ADGM have own regimes", "PDPL in force 14 Sep 2023, overseen by SDAIA; transfer regulation with safeguards such as SDAIA standard contractual clauses (reported)", "Data inventory and transfer register per market"],
            ["**In-country cloud**", "Live: AWS me-central-1, Azure UAE North, Oracle Dubai and Abu Dhabi", "Announced, not live as of Oct 2026: AWS (targeted late 2026), Azure Saudi Arabia East (from Q4 2026). Google Cloud Dammam and Oracle Jeddah and Riyadh listed (reported)", "Deployment model that can run a second regional stack"],
            ["**Default Arabic digits**", "ar-AE commonly formats with Latin digits", "ar-SA commonly formats with Arabic-Indic digits", "Locale-aware formatting with explicit numbering system"],
            ["**Currency**", "AED", "SAR", "Price books per currency; no runtime conversion for invoices"],
            ["**Weekend**", "Saturday–Sunday (federal government)", "Friday–Saturday", "Support rotas and scheduled jobs aware of both"],
          ],
        },
      },
      {
        heading: "Product discovery for a regional SaaS",
        body: [
          "Discovery for a GCC SaaS product answers the usual questions (who has the problem, how often, what they pay today) plus three regional ones: which market first, which buyer type, and which local requirements are deal breakers.",
          "**Market order.** Use your own evidence: inbound enquiries, pilot interest and existing relationships by country. Saudi Arabia is often the second market for UAE companies, but its tax, data and payment differences mean the second market costs more than the first to enter. Our [[/blogs/gcc-digital-transformation|GCC digital transformation pillar]] covers market sequencing in more detail.",
          "**Buyer type.** SMEs buy self-serve with card payment and want fast onboarding. Enterprises and government entities buy through procurement, ask for SSO, security questionnaires, Arabic support and sometimes in-country hosting, and pay by invoice. The two need different onboarding, billing and support paths, and it is usually wise to pick one for the first year.",
          "**Deal breakers.** In discovery calls, ask directly: Do you require data hosted in-country? Do invoices need to integrate with your e-invoicing provider? Which identity provider do your staff use? Must the interface be in Arabic? Record the answers; they are architecture requirements, not sales objections.",
          "If you are still testing the core idea, start smaller. Our guide to [[/blogs/mvp-development-uae|MVP development in the UAE]] covers validation, scoping and launch before you commit to a full SaaS platform.",
        ],
      },
      {
        heading: "Users, roles and tenant administration",
        body: [
          "Azure's multitenant architecture guidance makes the foundational point: ‘A multitenant solution is a solution used by multiple customers, or tenants. Tenants are distinct from users’ ([[https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/overview|Microsoft Learn]]). A tenant is usually an organisation; users belong to one or more tenants with a role in each.",
          "**Two layers of roles (our recommendation).** Platform roles are for your own team: support agent, billing admin, platform engineer. They should be few, audited, and should never grant silent access to tenant data; use time-limited, logged ‘support access’ that the tenant admin can see. Tenant roles are for customers: owner, admin, member, viewer, plus product-specific roles. Tenant admins invite users, assign roles, configure SSO, set language and regional defaults, and see their own audit log.",
          "**RBAC first, attributes later.** Role-based access control is enough for most products at launch. Add attribute-based rules (for example, ‘only records for my branch’ or ‘only Saudi entity data’) when customers need them. Whatever the model, enforce it on the server for every request. The OWASP API Security Top 10 (2023) puts broken object level authorisation and broken function level authorisation at first and fifth place ([[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP]]).",
          "**Entities and branches.** Many GCC customers operate through several legal entities, for example a UAE company and a Saudi company under one group. Model the tenant, its legal entities and their tax registrations separately, because invoicing, VAT and e-invoicing attach to the entity, not to the tenant. Our [[/blogs/saas-product-design|SaaS product design]] guide covers the interface side of roles and permissions.",
        ],
      },
      {
        heading: "Multi-tenancy models: silo, pool and bridge",
        body: [
          "AWS's SaaS Lens describes three models ([[https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html|AWS Well-Architected SaaS Lens]]). In the **silo** model, ‘tenants are provided dedicated resources’, although a silo ‘still relies on a shared identity, onboarding, and operational experience’. In the **pool** model, ‘tenants share resources’, which AWS calls ‘the more classic notion of multi-tenancy’. The **bridge** model is ‘a mixed mode where some of the system is implemented in a silo model and some is in a pooled model’; AWS notes that ‘the regulatory profile of a service's data and its noisy neighbor attributes might steer a microservice to a silo model’.",
          "**Our recommendation for GCC products:** start pooled, with tenant isolation enforced in the data layer (a tenant identifier on every row, plus database row-level security or a mandatory query filter). Design so that a tenant can later be moved to a dedicated database or a separate regional deployment without code changes. That is the bridge model, and it is how many products handle a Saudi enterprise or UAE health customer that requires dedicated or in-country infrastructure.",
        ],
        table: {
          headers: ["Model", "How it works", "Strengths", "Weaknesses", "Typical GCC use"],
          rows: [
            ["**Pool**", "Shared application and database; tenant ID on every record", "Lowest cost per tenant; one deployment; simple upgrades", "Isolation depends on code discipline; noisy neighbours", "SME self-serve tiers"],
            ["**Silo**", "Dedicated database or full stack per tenant", "Strong isolation; per-tenant hosting location; easier compliance answers", "Higher cost; many deployments to upgrade and monitor", "Government, health or large enterprise tenants"],
            ["**Bridge**", "Pooled for most; siloed components or tenants where needed", "Balances cost and isolation; supports regional stacks", "More operational complexity; needs good automation", "Mixed customer base across the UAE and Saudi Arabia"],
          ],
        },
      },
      {
        heading: "A reference architecture for a GCC SaaS platform",
        body: [
          "The diagram shows the shape we recommend for a product serving the UAE first and Saudi Arabia second. It is a modular monolith with clear module boundaries, not a set of microservices. Split out services only when a module has a genuinely different scaling, release or isolation need; see [[/blogs/scalable-website-architecture|scalable website architecture]] for the general patterns.",
          "**Country configuration** is the key idea: tax rules, invoice adapters, payment providers, locale defaults and hosting region are looked up per tenant and legal entity, not branched in code. Adding a market should mean adding configuration and adapters, not editing every module.",
        ],
        code: {
          label: "GCC SaaS reference architecture (our recommendation)",
          text: "Tenant users (web, mobile)   Enterprise IdP / UAE PASS\n          |                          |\n          v                          v\n   Front end (design system, RTL, ar/en, AED/SAR)\n          |\n          v\n   API layer (authN, tenant resolution, rate limits)\n          |\n   Application (modular monolith)\n   |-- identity & RBAC (platform + tenant roles)\n   |-- core product modules\n   |-- billing (provider adapters: card, local, MoR)\n   |-- invoicing (adapters: UAE ASP, ZATCA Fatoora)\n   |-- tax rules (config per country/entity)\n   |-- notifications (email, WhatsApp, ar/en)\n   |-- audit log (append-only)\n          |\n   Data: pooled DB (tenant_id + row-level security)\n         + dedicated DBs for siloed tenants\n          |\n   Regional deployments: UAE region (primary)\n                         second region when required\n          |\n   Analytics, monitoring, backups per region",
        },
      },
      {
        heading: "Authentication: SSO, SAML, OIDC and UAE PASS",
        body: [
          "**Enterprise SSO.** Enterprise and government buyers will expect staff to sign in with their own identity provider. Support SAML 2.0 and OpenID Connect, plus SCIM or a similar method for user provisioning when you reach larger customers. CISA's Secure by Design principles go further and ask software makers to make ‘MFA, logging, and SSO available at no extra cost’ ([[https://www.cisa.gov/securebydesign|CISA]]). Whether you follow that commercially is a choice; technically, SSO should be in the architecture from the start.",
          "**OAuth done properly.** RFC 9700, the IETF's January 2025 Best Current Practice for OAuth 2.0 security, says public clients ‘MUST use PKCE’ and that clients ‘SHOULD NOT use the implicit grant’ ([[https://datatracker.ietf.org/doc/rfc9700/|IETF]]). Use a maintained identity library or service rather than writing token handling yourself.",
          "**UAE PASS (UAE facts).** UAE PASS provides authentication and digital signatures to government and private organisations; private entities need a valid UAE trade licence, onboarding runs through initiation, development, assessment and go-live phases, and integration uses the OAuth 2.0 authorisation code flow ([[https://docs.uaepass.ae|UAE PASS documentation]]). **Our recommendation:** treat UAE PASS as one more identity provider linked to a user account, enabled per tenant, for products where verified identity or signing is part of the job: HR onboarding, tenancy, legal documents, regulated services. Saudi Arabia has its own national identity services; evaluate them separately for your Saudi go-to-market rather than assuming one approach covers both.",
          "**Tenant resolution.** Decide early how a request is tied to a tenant: subdomain, path or a claim in the token. Never trust a tenant identifier sent from the browser without checking the user's membership.",
        ],
      },
      {
        heading: "Billing and payments by market",
        body: [
          "**UAE facts.** Stripe lists the UAE as available on its global page, but Saudi Arabia was not listed as available, in preview or in its extended network when checked in October 2026; the UAE was the only Middle East country shown ([[https://stripe.com/global|Stripe Global]]). UAE merchants can also use providers such as Network International, Checkout.com, Telr and PayTabs. In Saudi Arabia, SAMA reports that electronic payments reached 85% of retail payments in 2025, and the domestic mada network is central to card payments ([[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1139.aspx|SAMA]]).",
          "**Options for Saudi billing (our recommendation).** Three patterns work, often in combination. First, a Saudi or regional payment gateway that supports mada and the cards your customers use, contracted through the right entity. Second, invoicing with bank transfer for enterprise and government customers, which is how many B2B contracts are paid anyway. Third, a merchant of record. Paddle defines a merchant of record as ‘a legal entity responsible for selling goods or services to an end customer’ ([[https://www.paddle.com/blog/what-is-merchant-of-record|Paddle]]): the MoR sells to your customer, collects payment and handles sales tax, and pays you. Check whether any MoR you consider actually supports Saudi customers and your product category, and what that means for local invoicing obligations. Our [[/blogs/uae-to-saudi-ecommerce-expansion|UAE-to-Saudi expansion guide]] covers the Saudi payment landscape, including mada and licensed BNPL providers, in more detail.",
          "**Architecture.** Keep a provider-neutral billing model (plans, prices per currency, subscriptions, invoices, payments) and connect providers through adapters. Make webhook handling idempotent and verify signatures; Stripe's documentation, for example, warns that endpoints ‘might occasionally receive the same event more than once’ ([[https://docs.stripe.com/webhooks/signature|Stripe]]). Price in AED and SAR from separate price books rather than converting at runtime. Our [[/blogs/subscription-billing-architecture|subscription billing architecture]] guide covers state machines, proration, dunning and retries in depth, and [[/blogs/saas-website-development|SaaS website development]] covers pricing pages.",
        ],
      },
      {
        heading: "Tax and e-invoicing: design per market",
        body: [
          "**UAE facts.** The Ministry of Finance states that VAT ‘was introduced across the UAE on 1st January 2018 at a standard rate of 5%’ ([[https://mof.gov.ae/en/public-finance/tax/vat/|MoF]]). The UAE's B2B and B2G e-invoicing system works through Accredited Service Providers: businesses with revenue of AED 50 million or more must appoint one by 30 October 2026 and go live on 1 January 2027; those below that threshold must appoint one by 31 March 2027 and go live on 1 July 2027, according to the Federal Tax Authority ([[https://tax.gov.ae/en/media.centre/news/federal.tax.authority.organises.joint.awareness.meeting.for.accredited.service.providers.and.persons.subject.to.the.einvoicing.system.aspx|FTA]]). Industry guidance describes the UAE model as using a structured, Peppol-based data specification known as PINT AE, so invoices must be generated as structured data rather than PDFs alone.",
          "**Saudi facts.** Saudi Arabia's standard VAT rate is 15%, according to ZATCA guidance as summarised by advisers. ZATCA's Fatoora e-invoicing began with Phase 1 (generation) enforceable from 4 December 2021, covering compliant electronic generation and storage and a QR code on simplified invoices, and Phase 2 (integration) from 1 January 2023, rolled out in waves by taxpayer group, each notified at least six months ahead ([[https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx|ZATCA]]).",
          "**What this means for a SaaS product (our recommendation).** Invoicing is not one feature with a country switch. It is a set of per-market adapters behind a shared invoice model. Your own SaaS invoices to customers may fall under these regimes depending on your entity and registrations, and if your product issues invoices for your customers (accounting, ERP, field service, marketplaces), the requirements become product requirements. Store invoice data in structured form from the first release, keep immutable invoice records with sequential numbering per legal entity, support Arabic on invoices where required, and leave room for clearance or reporting integrations. Confirm your specific obligations with a tax adviser in each country; this section is not tax advice.",
        ],
        callout: {
          type: "note",
          text: "UAE consumer invoices must be in Arabic, with other languages optional, under the UAE consumer protection framework (u.ae). Summaries of Saudi Arabia's Law of Commercial Data say commercial data, including invoices, must appear at least in Arabic. Bilingual invoice templates are the safe default for both markets.",
        },
      },
      {
        heading: "Localisation: Arabic, RTL, digits and currencies",
        body: [
          "**Right-to-left.** Build RTL into the design system: set the dir attribute on the document per language, use logical CSS properties (inline-start and inline-end) instead of left and right, mirror directional icons such as back arrows but not logos, media controls or checkmarks, and test every component in both directions. W3C advises against using CSS to set base direction; keep it in markup.",
          "**Digits and formats.** The W3C's Arabic Layout Requirements note that Arabic-Indic digits are used in eastern Arabic-speaking countries including Saudi Arabia ([[https://www.w3.org/TR/alreq/|W3C alreq]]). In common software built on Unicode CLDR data, ar-AE formats numbers with Latin digits by default and ar-SA with Arabic-Indic digits. Do not rely on defaults: set the numbering system explicitly per tenant or user preference. Dates, currency symbols and separators also differ.",
          "**Currencies.** Store amounts as integers in minor units with an explicit currency code (AED, SAR). Never convert for display on invoices; use the contract currency.",
          "**Content.** Interface strings, email and WhatsApp templates, help articles and invoice templates need native-speaker review. Tenant admins should be able to set a default language and users to override it. Our guides to [[/blogs/multilingual-website-development-uae|multilingual development in the UAE]] and [[/blogs/saudi-website-localization|Saudi website localisation]] cover RTL engineering, Saudi conventions and translation workflow.",
        ],
      },
      {
        heading: "Data location and hosting",
        body: [
          "**UAE facts.** AWS opened its Middle East (UAE) region, me-central-1, in August 2022 with three Availability Zones. Microsoft Azure operates UAE North (Dubai), with UAE Central (Abu Dhabi) restricted, and Oracle runs Dubai and Abu Dhabi regions. Google Cloud has no UAE region. Health data has specific rules: Federal Law No. 2 of 2019 restricts storing or processing health data outside the UAE, and Abu Dhabi's ADHICS standard requires UAE hosting, including backup and disaster recovery, for in-scope health information.",
          "**Saudi facts.** Microsoft has said customers can run workloads in its Saudi Arabia East region ‘from Q4 2026’ ([[https://news.microsoft.com/source/emea/2026/02/microsoft-confirms-saudi-arabia-datacenter-region-available-for-customers-to-run-cloud-workloads-from-q4-2026/|Microsoft Source]]), and AWS lists a Saudi region among its announced plans ([[https://aws.amazon.com/about-aws/global-infrastructure/regions_az/|AWS]]), reportedly targeted for late 2026. Neither was live when we checked in October 2026. Google Cloud Dammam and Oracle Jeddah and Riyadh are listed as live in secondary sources. Under Saudi Arabia's PDPL, SDAIA's regulation on transferring personal data outside the Kingdom requires an adequate level of protection or appropriate safeguards, such as SDAIA's standard contractual clauses, according to law-firm summaries. Legal commentary also suggests in-Kingdom hosting is driven mainly by data classification and sector rather than a blanket rule for all private businesses.",
          "**Our recommendation.** Be cautious and take advice. Classify the data your product holds, record where each category is stored and processed (including sub-processors such as email, analytics and AI providers), and design deployments so a second regional stack can be stood up from the same code and infrastructure templates. Do not promise Saudi in-country hosting on the basis of an announced region. Our [[/blogs/cloud-migration-uae|cloud migration guide]] covers region choice and shared responsibility.",
        ],
      },
      {
        heading: "Security: tenant isolation, encryption and audit logs",
        body: [
          "AWS's tenant isolation whitepaper puts it plainly: ‘Tenant isolation is fundamental to the design and development of software as a service (SaaS) systems’ ([[https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/saas-tenant-isolation-strategies.html|AWS]]). A cross-tenant data leak is the incident most likely to end a SaaS company's enterprise sales.",
          "**Audit logs.** The OWASP Logging Cheat Sheet recommends logging authentication outcomes, access-control failures, input validation failures and high-risk actions such as privilege changes ([[https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html|OWASP]]). In SaaS, expose a tenant-scoped audit log to customer admins; enterprise buyers increasingly ask for it.",
          "For website-level controls, our [[/blogs/website-security-checklist|website security checklist]] is a useful companion.",
        ],
        checklist: [
          "Tenant ID on every record, enforced by row-level security or a mandatory data-access layer",
          "Automated tests that try to read and write across tenants on every release",
          "Server-side authorisation on every endpoint (OWASP API1 and API5)",
          "Encryption in transit (TLS) and at rest; per-tenant keys for siloed or regulated tenants where required",
          "Secrets in a managed vault, rotated; no keys in front-end code",
          "MFA for all platform staff; logged, time-limited support access to tenant data",
          "Append-only audit log, with a tenant-visible view",
          "Rate limits per tenant to contain abuse and noisy neighbours (OWASP API4)",
          "Backups per region with tested restores",
          "Sub-processor list and data-processing terms ready for procurement",
        ],
      },
      {
        heading: "Analytics: product, tenant and revenue",
        body: [
          "SaaS analytics needs three views. **Product analytics** tracks events by user and tenant: activation, feature adoption, retention cohorts. **Tenant health** combines usage, seats, support tickets and billing status to flag accounts at risk. **Revenue analytics** covers recurring revenue, expansion and churn by plan, currency and country.",
          "**Our recommendation:** define one event taxonomy for all markets, attach tenant, country and language to every event, and report revenue in a single reporting currency alongside the contract currency. That makes it possible to compare UAE and Saudi cohorts honestly, and to see whether Arabic-language users activate differently. Keep personal data out of analytics events where you can, and list analytics vendors in your sub-processor register.",
        ],
      },
      {
        heading: "Support and customer operations",
        body: [
          "**UAE facts.** In a 2024 Zbooni/YouGov survey of 1,000 UAE residents, 85% wanted businesses to offer WhatsApp for support and 87% preferred a human over a chatbot or AI ([[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Communicate]]; vendor-commissioned). The UAE federal weekend is Saturday–Sunday and Saudi Arabia's is Friday–Saturday, so the two markets share only Saturday as a common non-working day.",
          "**Our recommendation.** Offer Arabic and English support with published hours that cover both working weeks. Use WhatsApp for SME customers, connected to your help desk so conversations are logged against the tenant. Enterprise customers will want email, a ticket portal, named contacts and service levels in the contract. Build an in-product help centre in both languages; it also becomes the knowledge base for any AI assistant later. Our guide to [[/blogs/ai-customer-support-uae|AI customer support in the UAE]] covers bilingual support design.",
        ],
      },
      {
        heading: "Scaling the platform",
        body: [
          "Scale in response to evidence, not in anticipation. Most SaaS products hit organisational and data limits before they hit compute limits.",
          "**Typical sequence (our recommendation).** First, fix query performance and add caching. Second, move slow work (imports, exports, invoice generation, notifications) to background queues. Third, introduce per-tenant rate limits and quotas. Fourth, move large or regulated tenants to dedicated databases under the bridge model. Fifth, stand up a second regional deployment when customers or regulation require it. Only then consider splitting modules into separate services, and only where one module's scaling or release needs differ sharply from the rest.",
          "**Integrations at scale.** GCC enterprise customers will ask for ERP, HR, accounting and government system integrations. Publish a documented API, use webhooks with signatures and retries, and design for rate limits and idempotency from the start. Our [[/blogs/api-integration-uae|API integration guide]] covers these patterns, and [[/blogs/custom-software-vs-saas-uae|custom software vs SaaS]] helps when a customer asks for bespoke features that belong in their own system.",
        ],
      },
      {
        heading: "What to centralise and what to make country-specific",
        body: [
          "This table is our framework for deciding which product decisions belong in the shared core and which vary by country. The aim is one codebase with configuration and adapters for each market.",
        ],
        table: {
          headers: ["Decision area", "Centralise", "Country-specific", "Notes"],
          rows: [
            ["**Codebase and release process**", "Yes", "No", "One product; feature flags per market if needed"],
            ["**Identity, roles and audit**", "Yes", "Identity providers (UAE PASS, national services) per market", "Same RBAC model everywhere"],
            ["**Data model**", "Yes", "Entity tax registrations and address formats", "Country as an attribute, not a separate schema"],
            ["**Design system and RTL**", "Yes", "Locale defaults (digits, dates)", "Same components in both directions"],
            ["**Content and templates**", "Structure", "Language, tone, legal wording", "Native-speaker review per market"],
            ["**Pricing and currency**", "Plan structure", "Price books in AED and SAR; local payment methods", "Avoid runtime FX on invoices"],
            ["**Payment providers**", "Billing model and adapter interface", "Provider per market and entity", "Stripe not listed for Saudi Arabia"],
            ["**Tax and e-invoicing**", "Invoice model", "Rates, formats, ASP or Fatoora integration", "Confirm with tax advisers"],
            ["**Hosting**", "Infrastructure templates", "Region per tenant where regulation or contract requires", "Check region status before promising"],
            ["**Privacy and legal pages**", "Policy framework", "PDPL (UAE) and PDPL (Saudi) specifics, DIFC/ADGM where relevant", "Take legal advice"],
            ["**Support**", "Help desk, knowledge base, SLAs", "Hours, weekends, channels, language", "WhatsApp for SMEs; tickets for enterprise"],
            ["**Analytics**", "Event taxonomy and reporting currency", "Market dashboards", "Compare markets like for like"],
          ],
        },
      },
      {
        heading: "From idea to scalable platform: a phased path",
        body: [
          "This is our recommended phase structure for a UAE-built SaaS product expanding to Saudi Arabia. We do not attach durations or prices, because they depend on scope, integrations and regulatory requirements.",
        ],
        table: {
          headers: ["Phase", "Goal", "Key outputs", "Exit criteria"],
          rows: [
            ["**1. Discovery and MVP**", "Prove the core job with UAE customers", "Validated problem, MVP, activation and retention metrics", "Retained, paying tenants in one segment"],
            ["**2. SaaS foundations**", "Make the product multi-tenant and sellable", "Tenant model, RBAC, billing adapters, audit log, bilingual design system", "Cross-tenant tests pass; self-serve onboarding works"],
            ["**3. Enterprise readiness**", "Win larger UAE customers", "SSO, security documentation, sub-processor list, UAE region hosting, UAE PASS where relevant", "Procurement questionnaires answered without custom work"],
            ["**4. Saudi readiness**", "Prepare for the second market", "Saudi billing route, ZATCA invoicing approach, ar-SA locale, data transfer assessment with advisers", "Adviser sign-off; first Saudi pilot tenants"],
            ["**5. Regional scale**", "Operate both markets efficiently", "Regional deployment if required, tenant health dashboards, support covering both weekends", "Unit economics and support load acceptable in both markets"],
          ],
        },
      },
      {
        heading: "Hypothetical example: field-service SaaS expanding from Dubai to Riyadh",
        body: [
          "This example is **hypothetical** and not ZSpace client work.",
          "A Dubai-built SaaS product schedules maintenance technicians for facilities companies. It launched pooled, on a UAE cloud region, with English and Arabic interfaces and card billing through a UAE-available provider. A Riyadh facilities group wants to subscribe. The team's checklist: model the customer's Saudi legal entity with its own VAT registration; add a Saudi payment route (local gateway supporting mada, and invoice-plus-bank-transfer for the annual contract); add a ZATCA-compliant invoicing adapter for invoices issued to the Saudi entity, following tax advice; switch the tenant's default locale to ar-SA with the digit system the customer prefers; extend support hours to cover Sunday; and review, with legal advisers, whether the customer's data classification requires in-Kingdom hosting or whether transfer safeguards are sufficient. Because country configuration and adapters were designed in phase 2, none of this requires forking the code.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "The patterns below cause most of the expensive rework we see in regional SaaS plans.",
        ],
        checklist: [
          "Hard-coding a 5% VAT rate or a single invoice format",
          "Assuming the payment provider used in the UAE also works for Saudi customers",
          "Treating Arabic as a translation task instead of a design-system and data-model requirement",
          "Relying on default number formatting and shipping mixed digit systems",
          "Tenant isolation enforced only in the user interface, not the data layer",
          "Platform staff with silent, unlogged access to tenant data",
          "Promising in-country hosting in Saudi Arabia based on an announced region",
          "Forking the codebase per country",
          "Starting with microservices before product-market fit",
          "Support hours that follow only the UAE working week",
          "Taking legal and tax positions from blog posts, including this one, instead of advisers",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Multi-tenancy and security:** [[https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html|AWS SaaS Lens, silo, pool and bridge models]]; [[https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/saas-tenant-isolation-strategies.html|AWS, SaaS Tenant Isolation Strategies]]; [[https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/overview|Microsoft, Architect multitenant solutions]]; [[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP API Security Top 10 2023]]; [[https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html|OWASP Logging Cheat Sheet]]; [[https://www.cisa.gov/securebydesign|CISA Secure by Design]]; [[https://datatracker.ietf.org/doc/rfc9700/|RFC 9700, OAuth 2.0 Security BCP]].",
          "**Identity and payments:** [[https://docs.uaepass.ae|UAE PASS documentation]]; [[https://stripe.com/global|Stripe global availability]]; [[https://docs.stripe.com/webhooks/signature|Stripe webhook signatures]]; [[https://www.paddle.com/blog/what-is-merchant-of-record|Paddle, merchant of record]]; [[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1139.aspx|SAMA, e-payments 2025]].",
          "**Tax and e-invoicing:** [[https://mof.gov.ae/en/public-finance/tax/vat/|UAE Ministry of Finance, VAT]]; [[https://tax.gov.ae/en/media.centre/news/federal.tax.authority.organises.joint.awareness.meeting.for.accredited.service.providers.and.persons.subject.to.the.einvoicing.system.aspx|FTA e-invoicing timeline]]; [[https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx|ZATCA e-invoicing roll-out phases]].",
          "**Data and hosting:** [[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae, data protection laws]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae, consumer protection]]; [[https://sdaia.gov.sa/Documents/StandardContractualClausesForPersonalDataTransferEN.pdf|SDAIA standard contractual clauses]]; [[https://aws.amazon.com/blogs/aws/now-open-aws-region-in-the-united-arab-emirates-uae/|AWS UAE region]]; [[https://aws.amazon.com/about-aws/global-infrastructure/regions_az/|AWS regions]]; [[https://news.microsoft.com/source/emea/2026/02/microsoft-confirms-saudi-arabia-datacenter-region-available-for-customers-to-run-cloud-workloads-from-q4-2026/|Microsoft, Saudi Arabia East region]].",
          "**Localisation and support:** [[https://www.w3.org/TR/alreq/|W3C Arabic and Persian Layout Requirements]]; [[https://www.w3.org/International/questions/qa-html-dir|W3C, right-to-left text in HTML]]; [[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Zbooni/YouGov WhatsApp survey]].",
          "The Saudi VAT rate, Saudi PDPL transfer rules, Saudi Law of Commercial Data and some cloud region statuses come from secondary summaries and are described as reported. Cloud region status and tax timelines change; re-check before relying on them. Nothing here is ZSpace client data, and nothing is legal or tax advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Building SaaS for GCC markets is mostly about deciding what to share and what to vary. Share the codebase, identity, roles, data model, design system, security controls and analytics. Vary tax, e-invoicing, payment providers, locale, support hours and, where regulation or contracts require, hosting, through configuration and adapters rather than forks.",
          "Start pooled, design for a bridge model, build Arabic and RTL into the design system, and treat Saudi Arabia as a market with its own billing, invoicing and data questions to answer with advisers before launch. Done this way, the second market becomes a configuration project rather than a rebuild. For the wider product lifecycle, see our [[/blogs/digital-product-development-gcc|digital product development guide for the GCC]] and our notes on [[/blogs/software-development-company-uae|choosing a software development partner in the UAE]].",
        ],
        cta: {
          title: "Planning a SaaS product for the UAE and Saudi Arabia?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with UAE, GCC and global businesses on [[/services/website-development|web platforms and SaaS products]] and [[/services/ui-ux-design|bilingual product design]]. If a second opinion on your tenancy, billing or localisation architecture would help, we are happy to talk it through.",
        },
      },
    ],
  },
];
