import type { BlogPost } from "./blog-data";

/**
 * SaaS product cluster for batch 141–160: SaaS onboarding optimisation
 * (generic), product analytics implementation (Australian privacy context),
 * software product discovery (the discovery phase as an engagement) and
 * scaling SaaS applications (generic). Onboarding and scaling are global
 * topics, so they use generic slugs and Australian English rather than an
 * "-australia" suffix. Discovery is scoped to commissioning and judging a
 * discovery phase, and links to mvp-development-australia and
 * digital-product-development-australia for validation and stage gates
 * rather than repeating them. Product analytics covers SaaS and web-product
 * event design, distinct from mobile-app-analytics and the ecommerce
 * analytics pages, with the Australian point that there is no GDPR-style
 * cookie consent rule but the Privacy Act and OAIC tracking pixel guidance
 * apply.
 * Sources checked 2026-10-09: OAIC tracking pixels guidance (Nov 2024);
 * OAIC APP guidelines; AWS Well-Architected; AWS SaaS Lens tenancy models;
 * Google SRE book (service level objectives); Martin Fowler (monolith first).
 * No benchmark, activation rate or result here is ZSpace client data.
 */
export const auSaasProductPosts: BlogPost[] = [
  {
    slug: "saas-onboarding-optimization",
    title: "SaaS Onboarding Optimisation: How to Define Activation and Improve the First Session",
    seoTitle: "SaaS Onboarding Optimisation: Activation and Time to Value",
    excerpt:
      "How to improve SaaS onboarding: define activation for your product, design the first session, use checklists and guidance, message by lifecycle and test.",
    category: "UI/UX",
    banner: "onboarding",
    sceneKind: "design",
    bannerAlt: "A new SaaS user moving from sign-up through setup and a first meaningful action to an activated state, supported by a checklist, contextual tips and lifecycle emails",
    date: "2026-10-09",
    updated: "2026-10-14",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "startups", "fintech", "hrtech"],
    relatedSlugs: ["saas-product-design", "ai-onboarding-ux", "product-analytics-implementation-australia"],
    faqs: [
      {
        q: "What is activation in a SaaS product?",
        a: "Activation is the point where a new user or account first gets the core value the product promises, defined by a specific behaviour you can measure, such as sending a first invoice, publishing a first project or inviting a teammate who then completes a task. It is different for every product. A good activation definition predicts retention, so validate it against your own data.",
      },
      {
        q: "Is there a benchmark activation rate we should aim for?",
        a: "We do not use one, because activation depends on how you define it, who signs up, your pricing model and your acquisition channels. A universal benchmark compares unlike things. Measure your own baseline, segment it by signup source and customer type, and set targets from improvements you can test and repeat.",
      },
      {
        q: "Do onboarding checklists work?",
        a: "They can, when each item is a step that moves the user towards activation, the list is short, progress is visible, and completed items reflect real actions rather than clicks on the checklist. Checklists that list every feature, or reward trivial tasks, add noise. Test any checklist against a control group before assuming it helps.",
      },
      {
        q: "Should onboarding be product tours or contextual guidance?",
        a: "Long upfront tours are usually skipped or forgotten. Contextual guidance, shown when the user reaches the relevant screen or action, tends to be more useful, along with good empty states, sample data and templates. Use a short welcome to set expectations, then teach in context. Validate with user testing and analytics.",
      },
      {
        q: "How do we onboard teams rather than individuals?",
        a: "Define activation at the account level as well as the user level, because B2B value often depends on several people. Help the first user set up the workspace, invite colleagues with clear roles, and give invited users a different, shorter onboarding focused on their tasks. Track which roles need to be active for the account to succeed.",
      },
      {
        q: "What lifecycle messages should support onboarding?",
        a: "Messages triggered by behaviour work better than a fixed schedule: a welcome with one next step, a nudge if setup stalls, help when a user hits an error, and a summary of value achieved. Keep transactional and onboarding messages factual and useful; marketing messages usually need consent, and the rules differ by market and channel, so check them for each country you send to.",
      },
      {
        q: "How do we improve onboarding without adding more steps?",
        a: "Audit the existing path before adding anything. For each step between signup and activation, ask whether it is needed for first value, whether the product can do it for the user, and whether it can wait. Delete, automate or defer what you can, and replace upfront tours with help that appears when the user reaches the relevant screen. Judge the result by time to value and retention, not by checklist completion.",
      },
    ],
    content: [
      {
        heading: "How do you optimise SaaS onboarding?",
        body: [
          "**Define activation for your own product as a measurable behaviour that predicts retention, then remove everything between signup and that behaviour that does not help.** Design a first session that reaches real value quickly, teach in context rather than in long tours, use short checklists tied to activation, support users with behaviour-triggered messages, and test each change against your own baseline. There is no universal activation benchmark worth chasing.",
          "This guide is for SaaS founders, product managers and designers improving how new users and accounts get started. It covers defining activation, the first session, progressive disclosure, checklists, contextual guidance, team onboarding, lifecycle messaging, research and experimentation.",
          "For AI features specifically, see [[/blogs/ai-onboarding-ux|AI onboarding UX]]. For measuring it all, see [[/blogs/product-analytics-implementation-australia|product analytics implementation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Activation is product-specific: a behaviour that shows the user got core value.",
          "Validate the definition: activated users or accounts should retain noticeably better.",
          "Shorten the path to first value; defer setup that can wait.",
          "Teach in context; use empty states, templates and sample data.",
          "Keep checklists short and tied to real actions.",
          "Onboard accounts, not just users, in B2B products.",
          "Test changes against a baseline and segment results by signup source.",
        ],
      },
      {
        heading: "Step 1: Define activation for your product",
        body: [
          "Start from the value your product promises. Ask: what is the first moment a customer could say 'this works for me'? Write candidate definitions as observable events, then check them against retention data.",
        ],
        table: {
          headers: ["Product type", "Candidate activation event (example only)"],
          rows: [
            ["Invoicing tool", "First invoice sent to a real customer"],
            ["Project management", "Project created with tasks assigned to at least one other person"],
            ["Scheduling software", "First booking made by a client through the booking page"],
            ["Analytics product", "Data source connected and first dashboard viewed twice in a week"],
            ["Internal tool for teams", "Three teammates active on the same workflow in the first fortnight"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: compare retention at 30 or 60 days for users who did and did not perform each candidate event in their first week. Pick the event that separates them most clearly and that onboarding can realistically influence. Revisit the definition as the product changes.",
        },
      },
      {
        heading: "Measure time to value, not onboarding completion",
        body: [
          "Once activation is defined, measure how long it takes to get there. Time to value here means the time from signup to the activation event, for each user or account that reaches it. It is the metric behind \"without adding more steps\": a new tour or checklist may raise onboarding completion while making time to value longer.",
          "Report the **median**, not the average, because a few accounts that take weeks will distort an average. Look at the distribution too, for example how many reach activation in the first session, the first day and the first week, and track the share who never activate alongside it. **Segment** by signup source, plan and customer type, since self-serve signups and sales-led accounts often follow very different paths. Then judge every onboarding change by two numbers together: did the median time to value fall, and did the activation rate hold or rise? Time to value sits alongside other experience measures covered in [[/blogs/ux-metrics-beyond-conversion-rate|UX metrics that matter beyond conversion rate]].",
        ],
      },
      {
        heading: "Step 2: Map the path to activation",
        body: [
          "List every step from signup to the activation event: account creation, verification, workspace setup, integrations, data import, inviting others, first use. For each step, record drop-off from analytics and the reasons from user research. Then ask of each step: is it needed now, can it be done for the user, or can it wait until after first value?",
        ],
        checklist: [
          "Ask for the minimum at signup; collect the rest when it becomes useful.",
          "Pre-fill what you can; offer templates and sample data so users are not starting from nothing.",
          "Let users try the core action before connecting every integration, where the product allows.",
          "Make verification and permissions steps clear about why they are needed.",
          "Remove dead ends: every empty screen should suggest a next step.",
        ],
        table: {
          headers: ["Step", "Needed for first value?", "Can we do it for them?", "Can it wait?", "Decision"],
          rows: [
            ["Verify email before entering the product", "Not always", "No", "Often, until they invite others or send data out", "**Defer**"],
            ["Enter company details and address", "No", "Partly: pre-fill from the email domain", "Yes, until invoicing or billing", "**Automate** or **defer**"],
            ["Choose a theme and upload a logo", "No", "No", "Yes", "**Delete** from onboarding; keep in settings"],
            ["Connect calendar integration", "Only for some users", "No", "Yes, after the first booking", "**Defer**"],
            ["Add first service and opening hours", "Yes", "Partly: offer a template", "No", "**Keep**, with a template"],
            ["Share the booking link", "Yes: it is the route to activation", "No", "No", "**Keep** and make it the main action"],
          ],
        },
        callout: {
          type: "tip",
          text: "Subtract before you add. The table uses the hypothetical clinic scheduling product described later in this guide. Fill in one row per step on your own path: anything that is not needed for first value should be deleted, automated or deferred before you consider adding a tour, modal or checklist item.",
        },
      },
      {
        heading: "Step 3: Design the first session",
        body: [
          "The first session sets expectations. A short welcome that asks one or two questions about the user's goal can tailor what comes next. Then guide towards one meaningful action, not a tour of every feature.",
          "**Progressive disclosure** helps: show the essential controls first and reveal advanced options when users need them. **Empty states** do more teaching than tooltips, because they appear exactly when a user needs to know what to do; Nielsen Norman Group describes them as a way to help users learn features and give them a direct route into key tasks. **Templates and sample data** let users see the product working before they invest effort.",
        ],
      },
      {
        heading: "Step 4: Checklists and contextual guidance",
        body: [
          "Checklists work when they are short (often three to five items), each item moves the user towards activation, completion reflects real actions, and progress is visible. Avoid checklists that list features or reward clicks on the checklist itself.",
          "Contextual guidance, such as a hint when a user first opens the reports screen or a prompt after an error, beats a long upfront tour. Nielsen Norman Group's review of onboarding tutorials vs contextual help (Page Laubheimer, February 2023) finds that tutorials interrupt users, do not necessarily improve task performance and are quickly forgotten, and recommends help triggered when the user would benefit from it. It treats walkthroughs as useful mainly for genuinely new interaction styles. Make guidance dismissible, do not repeat it endlessly, and make help findable later. Accessibility matters here too: guidance overlays must work with keyboards and screen readers and must not trap focus. See [[/blogs/accessibility-testing-australia|accessibility testing]].",
        ],
      },
      {
        heading: "Step 5: Onboard the account, not just the user",
        body: [
          "In B2B products, value often depends on several people. Track activation at the account level, such as the workspace set up, data connected and enough teammates active. Help the first user, often an administrator, set up and invite others with the right roles. Give invited users a shorter onboarding focused on their own tasks. Identify the roles whose activity predicts account retention and make sure they are reached.",
        ],
      },
      {
        heading: "Step 6: Lifecycle messaging that helps",
        body: [],
        table: {
          headers: ["Trigger", "Message purpose"],
          rows: [
            ["Signup", "Welcome, confirm the goal, one next step"],
            ["Setup stalled for a few days", "Offer help with the specific blocked step"],
            ["Error or failed import", "Explain the fix, link to help or a person"],
            ["First value reached", "Confirm the win, suggest the next useful action"],
            ["Teammate invited but inactive", "Remind the inviter or the invitee with context"],
            ["Trial ending", "Summarise value achieved and what happens next"],
          ],
        },
        callout: {
          type: "note",
          text: "Keep onboarding and service messages factual and useful, and keep marketing separate. Consent rules for promotional email and SMS differ by country and channel, so check them for each market you send to.",
        },
      },
      {
        heading: "Step 7: Research and experiment",
        body: [
          "Combine numbers and conversations. Analytics shows where users drop off; interviews and usability tests explain why. Watch five new users try to reach activation and you will find problems no dashboard reveals. See [[/blogs/usability-testing|usability testing]] and [[/blogs/user-research-methods|user research methods]].",
          "Test changes against a control where traffic allows, and measure both activation and later retention, because some changes raise early activity without improving retention. Segment by signup source and customer type; onboarding that works for self-serve signups may not suit sales-led accounts. If traffic is too low for A/B tests, ship changes one at a time and compare cohorts carefully.",
        ],
      },
      {
        heading: "Hypothetical example: a scheduling SaaS for clinics",
        body: [
          "**This example is hypothetical.** A scheduling product for allied health clinics sees many trials that never take a real booking. Retention analysis shows that clinics that receive a client booking through their booking page in the first week retain far better than those that do not, so that becomes the activation event.",
          "The team moves payment and integrations out of the first session, adds a template clinic with sample services, makes 'share your booking link' the main first-session action, and adds a three-item checklist (add a service, set hours, share the link). A setup-stalled email offers a call. Each change is released separately and judged by activation and 60-day retention by signup source. No result is claimed here; the point is the method.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Using a vanity event, such as logging in twice, as activation.",
          "Chasing an industry benchmark instead of your own baseline.",
          "Long product tours on first login.",
          "Checklists that reward clicks rather than progress.",
          "Onboarding only the first user in a team product.",
          "Measuring activation without checking retention.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For the wider product, see [[/blogs/saas-product-design|SaaS product design]] and [[/blogs/saas-development-australia|SaaS development in Australia]]. For conversion audits of onboarding flows, see [[/blogs/ux-audit|UX audit]]. Mobile apps have their own patterns in [[/blogs/what-a-good-mobile-app-onboarding-actually-does|mobile app onboarding]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Page Laubheimer, Nielsen Norman Group: Onboarding Tutorials vs. Contextual Help (12 February 2023).",
          "Kate Kaplan, Nielsen Norman Group: Designing Empty States in Complex Applications: 3 Guidelines (19 September 2021).",
          "Accessed 14 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "SaaS onboarding improves when the team agrees what activation means, measures it honestly and removes everything that delays it. Design the first session around one meaningful action, teach in context, onboard whole accounts, support users with timely messages and test changes against your own baseline rather than borrowed benchmarks. For what happens after activation, see [[/blogs/reducing-saas-churn|reducing SaaS churn]]. For the wider growth model, see [[/blogs/product-led-growth-b2b-saas|product-led growth for B2B SaaS]].",
        ],
        cta: {
          title: "Want a second look at your onboarding?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ui-ux-design|SaaS product design]], [[/services/cro-audit|conversion audits]] and [[/services/website-development|product engineering]]. If it would help to review your path to activation, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "product-analytics-implementation-australia",
    title: "Product Analytics Implementation in Australia: Events, Metrics and Privacy",
    seoTitle: "Product Analytics Implementation in Australia",
    excerpt:
      "Implementing product analytics in Australia: event taxonomy, activation, retention, feature adoption, data quality, dashboards and OAIC tracking guidance.",
    category: "Web Development",
    banner: "analyticsflow",
    sceneKind: "analytics",
    bannerAlt: "Product events flowing from a web app through a tracking plan and consent controls into analytics, then into funnels, retention cohorts and feature adoption dashboards",
    date: "2026-10-09",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "startups", "fintech", "ecommerce"],
    relatedSlugs: ["mobile-app-analytics", "ecommerce-event-tracking", "saas-onboarding-optimization"],
    faqs: [
      {
        q: "What is product analytics?",
        a: "Product analytics measures how people use a digital product: which features they use, where they get stuck, whether they reach value and whether they come back. It relies on events, such as 'report created', with properties and user or account identifiers, analysed as funnels, retention cohorts and feature adoption. It differs from marketing analytics, which focuses on acquisition and campaigns.",
      },
      {
        q: "Does Australia require cookie consent banners?",
        a: "Australia does not have a specific cookie consent law like the EU's ePrivacy rules. But if your business is covered by the Privacy Act and analytics collects personal information, the Australian Privacy Principles apply: be transparent, collect only what you need, use it for expected purposes and secure it. The OAIC's tracking pixel guidance sets out expectations. If you serve EU or UK users, their rules may also apply.",
      },
      {
        q: "Which metrics should we track?",
        a: "Choose metrics that match your business model. A subscription product might track activation, weekly active accounts, retention by cohort, feature adoption and expansion. A transactional product might track completed transactions and repeat use. Start from the decisions you need to make, then define a small set of metrics precisely. Avoid unsupported industry benchmarks.",
      },
      {
        q: "What is an event taxonomy?",
        a: "An event taxonomy is the agreed list of events your product sends, with consistent naming, defined properties and clear triggers. It is usually documented in a tracking plan that engineers implement and analysts rely on. A good taxonomy prevents duplicate, inconsistent or meaningless events and makes analysis trustworthy.",
      },
      {
        q: "Should we track on the client or the server?",
        a: "Both have a place. Server-side events are more reliable for things that matter commercially, such as subscriptions, payments and completed workflows, because they are not affected by ad blockers or closed tabs. Client-side events capture interface behaviour. Many teams send important business events from the server and interaction events from the client.",
      },
      {
        q: "Can we send product data to advertising platforms?",
        a: "Be careful. The OAIC's guidance on tracking pixels says the business deploying a pixel is responsible for complying with the Privacy Act, should configure it to collect the minimum necessary, should generally not pass sensitive information to third parties and should explain it in privacy notices. Review what data each tool receives and get advice for sensitive products.",
      },
    ],
    content: [
      {
        heading: "How should you implement product analytics?",
        body: [
          "**Start from the decisions you need to make, define a small set of metrics that fit your business model, design an event taxonomy and tracking plan, implement important events server-side, check data quality before trusting dashboards, and handle personal information under the Privacy Act.** In Australia there is no EU-style cookie consent rule, but the Australian Privacy Principles and the OAIC's tracking pixel guidance apply when analytics collects personal information.",
          "This guide is for product managers, founders and engineers in SaaS and web products. It covers metrics selection, event taxonomy, funnels, activation, retention, feature adoption, consent and privacy, data quality, dashboards and turning data into product decisions.",
          "For mobile apps, see [[/blogs/mobile-app-analytics|mobile app analytics]]; for online stores, [[/blogs/ecommerce-event-tracking|ecommerce event tracking]]. We do not quote benchmarks: your metrics should be compared with your own history.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Choose metrics from your business model and decisions, not from a template.",
          "Write a tracking plan before implementing; name events consistently.",
          "Send commercially important events from the server.",
          "Track accounts as well as users in B2B products.",
          "Check data quality continuously; broken tracking is common.",
          "Apply the Privacy Act and OAIC tracking guidance; minimise personal information sent to third parties.",
          "Review dashboards in the meetings where product decisions are made.",
        ],
      },
      {
        heading: "Step 1: Choose metrics that fit the business model",
        body: [],
        table: {
          headers: ["Business model", "Metrics that usually matter"],
          rows: [
            ["**B2B subscription**", "Account activation, weekly active accounts, seat utilisation, retention by cohort, expansion, feature adoption by plan"],
            ["**Self-serve subscription**", "Trial-to-paid conversion, activation, retention, churn reasons"],
            ["**Transactional or marketplace**", "Completed transactions, repeat rate, time between transactions, liquidity on both sides"],
            ["**Internal tool**", "Task completion, time to complete, errors, adoption by team"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: write each metric as a definition sheet entry (name, formula, events used, filters, owner) before building a chart. Most dashboard arguments are definition arguments. See [[/blogs/business-intelligence-dashboards-australia|business intelligence dashboards]] for the same discipline applied to company reporting.",
        },
      },
      {
        heading: "Step 2: Design the event taxonomy and tracking plan",
        body: [
          "Use a consistent naming pattern, such as object and past-tense action ('Report Created', 'Invoice Sent'), and a small set of well-defined properties. Document each event's trigger, properties, where it is sent from and who owns it. Avoid tracking every click; track meaningful actions and the steps of key journeys.",
        ],
        checklist: [
          "Identity events: signed up, invited, joined account, signed in.",
          "Setup events: integration connected, data imported, settings completed.",
          "Value events: the actions that deliver your product's core value.",
          "Collaboration events: shared, commented, assigned.",
          "Commercial events: trial started, plan changed, payment succeeded or failed (server-side).",
          "Properties: account ID, plan, role, platform, and only the personal information you genuinely need.",
        ],
      },
      {
        heading: "Step 3: Funnels, activation, retention and feature adoption",
        body: [
          "**Funnels** show where users drop out of a journey such as onboarding or a key workflow. **Activation** measures whether new users or accounts reach first value; see [[/blogs/saas-onboarding-optimization|SaaS onboarding optimisation]] for defining it. **Retention cohorts** show whether people come back, grouped by when they started, and are the most honest measure of product value. **Feature adoption** shows which features are used, by whom and how often, which informs what to improve, promote or retire.",
          "Segment everything that matters: by plan, customer size, signup source and role. Averages hide the story.",
        ],
      },
      {
        heading: "Step 4: Privacy and consent in Australia",
        body: [
          "**No specific cookie consent law, but the Privacy Act applies.** Australia does not have a dedicated cookie consent law like the EU. If your business is covered by the Privacy Act and analytics collects personal information, including identifiers that can reasonably identify someone, the Australian Privacy Principles apply: open and transparent management (APP 1), collection limits (APP 3), notification (APP 5), use and disclosure (APP 6), direct marketing (APP 7), overseas disclosure (APP 8) and security (APP 11).",
          "**OAIC guidance on tracking pixels.** The OAIC's November 2024 guidance says the organisation deploying a tracking pixel is responsible for compliance, should do due diligence, configure tools to collect the minimum personal information necessary, generally avoid sending sensitive information to third parties (and get consent where it is collected), explain the tracking in privacy notices, and review configurations rather than 'set and forget'.",
          "**Practical steps.** Do not send names, emails or free-text content as analytics properties; use internal IDs. Exclude sensitive pages and fields. Know where each analytics vendor stores data. Offer an opt-out where tracking is not essential. If you serve users in the EU or UK, their consent rules may apply in addition. Reforms to Australian privacy law are being consulted on, so review this area regularly.",
        ],
      },
      {
        heading: "Step 5: Data quality",
        body: [],
        checklist: [
          "Validate events against the tracking plan in development and staging.",
          "Monitor event volumes daily; sudden drops or spikes usually mean broken tracking.",
          "Exclude internal and test users.",
          "Handle identity correctly: anonymous to signed-in, multiple devices, users in several accounts.",
          "Version the tracking plan and record changes, so trends can be interpreted.",
          "Reconcile commercial events with billing data regularly.",
        ],
      },
      {
        heading: "Step 6: Dashboards and decisions",
        body: [
          "Build a small set of dashboards tied to recurring decisions: an onboarding dashboard reviewed weekly, a retention and adoption view reviewed monthly, and dashboards for each major initiative. Show definitions and data freshness on each. Then use them where decisions are made: product reviews, roadmap planning and experiment readouts. A dashboard that is not discussed is not used.",
        ],
      },
      {
        heading: "Tooling choices",
        body: [
          "Product analytics tools, warehouse-first setups and open-source options all work; the tracking plan and data quality matter more than the vendor. Consider where data is stored, how identity is handled, whether you need a data warehouse for joining product and billing data, cost at your expected volume, and the vendor's privacy controls. Avoid sending the same events to many tools without a reason; every destination is another data flow to manage.",
        ],
      },
      {
        heading: "Hypothetical example: a B2B compliance SaaS",
        body: [
          "**This example is hypothetical.** A Melbourne startup selling compliance software to construction firms has page-view analytics but cannot tell which accounts are healthy. The team defines account activation (first project with three or more team members completing checklists), writes a tracking plan of 25 events, sends subscription and payment events from the server, uses internal IDs instead of emails, and excludes free-text fields. A weekly onboarding dashboard and monthly retention review replace ad hoc queries. The privacy policy is updated to explain analytics, and the team removes an advertising pixel from signed-in pages after reviewing the OAIC guidance.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Tracking everything and understanding nothing.",
          "Inconsistent event names across platforms.",
          "Sending emails or free text to analytics tools.",
          "Relying on client-side events for revenue.",
          "Comparing against generic benchmarks instead of your own cohorts.",
          "Dashboards with no definitions and no owner.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For connecting product data with CRM and billing, see [[/blogs/customer-data-integration-australia|customer data integration]]. For SaaS architecture, see [[/blogs/saas-development-australia|SaaS development in Australia]] and [[/blogs/scaling-saas-applications|scaling SaaS applications]]. For privacy governance with AI, see [[/blogs/ai-governance-australia|AI governance for Australian businesses]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Privacy:** OAIC, tracking pixels and privacy obligations; OAIC, small business; OAIC, APP 8.",
          "The metric tables, checklists and example are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Product analytics is useful when it answers real product questions with data people trust. Pick metrics that fit your business model, write and maintain a tracking plan, send important events from the server, guard data quality, and treat privacy as part of the design, applying the Privacy Act and the OAIC's tracking guidance rather than assuming Australia has no rules. For the wider customer data picture, see [[/blogs/first-party-data-strategy-australia|first-party data strategy in Australia]].",
        ],
        cta: {
          title: "Need a tracking plan you can trust?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|product analytics implementation]], [[/services/ui-ux-design|product design]] and [[/services/cro-audit|conversion analysis]]. If it would help to design your events and dashboards, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "software-product-discovery-australia",
    title: "Software Product Discovery: What a Discovery Phase Should Deliver Before You Build",
    seoTitle: "Software Product Discovery Phase: What It Should Deliver",
    excerpt:
      "What a software discovery phase involves: problem validation, interviews, stakeholder alignment, prototypes, feasibility, scope, estimates and a go/no-go.",
    category: "UI/UX",
    banner: "productdesignflow",
    sceneKind: "roadmap",
    bannerAlt: "A discovery phase moving from problem framing and research through prototypes and technical spikes to a scoped backlog, estimate and a go, change or stop decision",
    date: "2026-10-09",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["startups", "saas-technology", "professional-services", "healthcare-healthtech"],
    relatedSlugs: ["mvp-development-australia", "digital-product-development-australia", "product-design-process"],
    faqs: [
      {
        q: "What is a software product discovery phase?",
        a: "A discovery phase is a short, focused piece of work before a build that reduces uncertainty about the problem, the users, the solution and the technology. It typically includes research, stakeholder workshops, prototypes and technical investigation, and ends with a decision: proceed with a defined scope and estimate, change direction, or stop. It is time-boxed and has defined outputs.",
      },
      {
        q: "How is discovery different from building an MVP?",
        a: "Discovery decides what to build and whether to build it, mostly without production code. An MVP is a working product released to real users to test the most important assumptions in the market. Discovery usually comes first and defines the MVP's scope. Our MVP guide covers validation in the market; this guide covers the phase before it.",
      },
      {
        q: "How long does a discovery phase take?",
        a: "It depends on the uncertainty and the size of the product. Small, well-understood projects may need a week or two; complex products with many users, integrations or regulatory questions can need longer. Time-box it, define the outputs upfront, and extend only if a specific question remains unanswered and matters to the decision.",
      },
      {
        q: "What should we receive at the end of discovery?",
        a: "At minimum: a clear problem statement and goals, research findings, user journeys, a prioritised scope for the first release, a tested prototype, an architecture and integration outline, a risk and assumption list, an estimate with its assumptions, and a recommendation. You should own all outputs and be able to take them to another supplier.",
      },
      {
        q: "Should we pay for discovery separately?",
        a: "Usually, yes. A paid, fixed-scope discovery gives you outputs you own and a more reliable estimate than a quote written after one meeting. It also lets you test working with a supplier before committing to a larger build. Make sure the contract says you own the outputs.",
      },
      {
        q: "Can discovery conclude that we should not build?",
        a: "It should be allowed to. A good discovery phase can find that the problem is not painful enough, an existing product solves it, the technical risk is too high, or the budget does not match the scope. Stopping or changing direction after a few weeks is far cheaper than after months of building.",
      },
    ],
    content: [
      {
        heading: "What should a product discovery phase deliver?",
        body: [
          "**A discovery phase should replace guesses with evidence before you commit to a build: a validated problem, an understanding of users and stakeholders, a tested prototype, a check of technical feasibility, a prioritised first-release scope, an estimate with stated assumptions, and a clear decision to proceed, change or stop.** It is time-boxed, has defined outputs you own, and is allowed to conclude that you should not build.",
          "This guide is for founders, product owners and business leaders commissioning software, and for teams running discovery internally. It covers what discovery includes, the activities and outputs, how to judge them, and how to buy discovery from a supplier.",
          "It deliberately does not repeat our guides to validating in the market and staging investment: see [[/blogs/mvp-development-australia|MVP development for Australian startups]] for the evidence ladder and assumption mapping, and [[/blogs/digital-product-development-australia|digital product development in Australia]] for stage gates.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Discovery is about reducing the biggest uncertainties, not producing documents.",
          "Define the questions discovery must answer before it starts.",
          "Talk to real users; stakeholder opinions are not research.",
          "Prototype to test understanding and usability cheaply.",
          "Spike the riskiest technical questions, especially integrations.",
          "End with a decision gate: proceed, change or stop.",
          "Pay for discovery separately and own every output.",
        ],
      },
      {
        heading: "When discovery is worth it",
        body: [
          "Discovery is most valuable when uncertainty is high: a new product, a new market, a large replacement of an existing system, complex integrations, regulatory questions or many stakeholder groups. For a small, well-understood change, a short scoping session may be enough. The test is simple: if you were wrong about the problem, the users or the technology, how much would it cost? If the answer is a lot, invest in discovery.",
        ],
      },
      {
        heading: "Activities in a typical discovery phase",
        body: [],
        table: {
          headers: ["Activity", "Purpose", "Output"],
          rows: [
            ["**Framing workshop**", "Agree goals, constraints, success measures and the questions to answer", "Problem statement, goals, discovery plan"],
            ["**Stakeholder interviews**", "Understand business needs, politics and constraints", "Stakeholder map, needs and conflicts"],
            ["**User interviews and observation**", "Understand real workflows and pain", "Research findings, personas or job stories"],
            ["**Competitor and alternatives review**", "See what users do today and what exists", "Comparison of alternatives, including 'do nothing'"],
            ["**Journey mapping**", "Map current and future workflows", "Current and target journeys"],
            ["**Assumption mapping**", "Identify what must be true, and how sure you are", "Ranked assumptions and tests"],
            ["**Prototyping and testing**", "Test the proposed solution with users", "Clickable prototype and test findings"],
            ["**Technical spikes**", "Check feasibility of risky integrations or technology", "Spike results, architecture outline"],
            ["**Scoping and estimation**", "Define the first release and its cost", "Prioritised backlog, estimate with assumptions"],
            ["**Decision gate**", "Decide what happens next", "Recommendation: proceed, change or stop"],
          ],
        },
      },
      {
        heading: "Problem validation and user research",
        body: [
          "Start with the problem, not the solution. Interview people who have the problem, and ask about specific recent occasions: what happened, what they did, what it cost them. Observe work where you can. Look for evidence of pain such as workarounds, spreadsheets and money already spent on partial solutions.",
          "Interview enough people to see patterns across the main user types, and include people who would say no. Record what you learnt and how it changed your thinking. See [[/blogs/user-research-methods|user research methods]] for techniques.",
        ],
      },
      {
        heading: "Stakeholder alignment",
        body: [
          "Many projects fail because stakeholders want different things. Interview them separately, write down goals and constraints, surface conflicts early and agree how decisions will be made. A one-page product brief, signed off by the decision-makers, is one of the most useful discovery outputs.",
        ],
      },
      {
        heading: "Prototypes and technical feasibility",
        body: [
          "**Prototypes** test whether users understand and can use the proposed solution. Low-fidelity sketches are enough to test structure; clickable prototypes test flows. Test with real users and change the design based on what you see.",
          "**Technical spikes** answer specific feasibility questions with small experiments: does this system's API return what we need, at what speed and with what limits? Can we meet this performance requirement? Integrations are a frequent source of surprises, so spike the riskiest ones. Record the architecture outline, hosting and security assumptions, and anything still unknown. See [[/blogs/api-integration-australia|API integration for Australian businesses]].",
        ],
      },
      {
        heading: "Scope, estimate and the decision gate",
        body: [
          "Turn findings into a prioritised first-release scope, with what is explicitly out of scope. Estimate with ranges and list the assumptions that would change the estimate. Then hold a decision gate with the people who fund the project.",
        ],
        checklist: [
          "**Proceed:** the problem is real, the solution tested well, feasibility is understood and the estimate fits the budget.",
          "**Change:** evidence points to a different problem, user group, scope or approach.",
          "**Stop:** the problem is not valuable enough, an existing product solves it, or the risk or cost is too high.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: write the decision criteria before discovery starts. 'We proceed if at least most interviewed clinic managers describe this problem unprompted and the booking API supports what we need' is a criterion; 'we will see' is not.",
        },
      },
      {
        heading: "Buying discovery from a supplier",
        body: [],
        checklist: [
          "Ask for a fixed price, a fixed time box and a list of outputs.",
          "Make sure the contract says you own all outputs, including research notes, designs and prototypes.",
          "Ask who will be involved: researchers, designers and engineers, not only salespeople.",
          "Ask for examples of past discovery outputs, with client details removed.",
          "Ask how they would handle a finding that you should not build.",
          "Agree how you and your users will be involved; discovery without access to users is guesswork.",
          "Check that the estimate method and assumptions will be shared, so another supplier could use them.",
        ],
      },
      {
        heading: "Australian considerations",
        body: [
          "A few Australian factors often surface in discovery and are cheaper to find early: privacy obligations if you will handle personal information (including whether the Privacy Act covers your business), accessibility expectations under WCAG and the Disability Discrimination Act, integrations with systems such as Xero, MYOB or industry platforms, hosting location and APP 8, and, for startups, whether R&D Tax Incentive record-keeping matters, which needs advice from a registered tax agent. Our [[/blogs/saas-development-australia|SaaS development]] and [[/blogs/custom-software-development-australia|custom software]] guides cover these in more depth.",
        ],
      },
      {
        heading: "Hypothetical example: a field inspection app",
        body: [
          "**This example is hypothetical.** A building inspection business wants an app to replace paper inspection reports. Discovery runs for a fixed period. Interviews with inspectors show the real pain is not filling in reports but chasing photos and rewriting notes into formal reports afterwards. A prototype of offline photo capture with structured defect codes tests well with inspectors. A technical spike confirms the business's existing CRM API can receive completed inspections. The scope shrinks to capture, offline sync and report generation; scheduling stays in the current system. The decision gate approves a narrower first release with an estimate and listed assumptions.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Treating discovery as requirements gathering from stakeholders only.",
          "Producing long documents nobody reads instead of decisions.",
          "Skipping technical spikes on risky integrations.",
          "No decision criteria, so discovery always ends in 'proceed'.",
          "Discovery outputs owned by the supplier.",
          "Running discovery without access to real users.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For the design process after discovery, see [[/blogs/product-design-process|product design process]]. For AI products, see [[/blogs/ai-product-idea-validation|validating an AI product idea]]. For costs, see [[/blogs/mobile-app-development-cost-australia|mobile app development cost in Australia]] and [[/blogs/website-development-cost-australia|website development cost in Australia]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good discovery phase is short, focused and honest. It answers the questions that would be most expensive to get wrong, gives you outputs you own, and ends with a real decision. Commission it with clear questions and criteria, involve real users and engineers, and be prepared for the answer to be 'change' or 'stop'. For deciding what to build after discovery, see [[/blogs/saas-roadmap-prioritization|SaaS roadmap prioritisation]]. For the technical side before an estimate, see [[/blogs/technical-discovery-software-projects|technical discovery for software projects]]. The UK government's phased approach is summarised in [[/blogs/gds-service-standard-for-product-teams|the GDS Service Standard for product teams]].",
        ],
        cta: {
          title: "Planning a discovery phase?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ui-ux-design|product discovery and design]], [[/services/website-development|web applications]] and [[/services/mobile-app-development|mobile apps]]. If it would help to frame the questions your discovery should answer, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "scaling-saas-applications",
    title: "Scaling SaaS Applications: Bottlenecks, Observability and When Complexity Is Justified",
    seoTitle: "Scaling SaaS Applications: A Practical Guide",
    excerpt:
      "How to scale a SaaS app: find bottlenecks with observability, tune databases, cache, use background jobs, isolate tenants, deploy safely and watch costs.",
    category: "Web Development",
    banner: "scalelayers",
    sceneKind: "monitor",
    bannerAlt: "A SaaS application scaling in layers: observability first, then database tuning, caching, background jobs, tenant isolation and safer deployments, with costs tracked throughout",
    date: "2026-10-09",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups", "fintech", "hrtech"],
    relatedSlugs: ["saas-development-australia", "scalable-website-architecture", "monolithic-vs-headless-architecture"],
    faqs: [
      {
        q: "When should we start worrying about scaling a SaaS application?",
        a: "When evidence shows a constraint approaching: response times rising with load, database load near limits, queues backing up, noisy tenants affecting others, or costs growing faster than revenue. Before that, focus on a clean, well-tested design and good observability, which make scaling easier later. Premature scaling work adds complexity without benefit.",
      },
      {
        q: "Do we need microservices to scale?",
        a: "Usually not. Many SaaS products scale well as a modular monolith with a tuned database, caching and background jobs. Microservices can help large organisations with many teams and genuinely independent domains, but they add operational complexity, distributed failure modes and cost. Split services when a specific scaling, deployment or ownership problem justifies it.",
      },
      {
        q: "What is usually the first bottleneck?",
        a: "Most often the database: slow queries, missing indexes, too many queries per request, or locking under write-heavy load. Next come slow external calls in request paths and work that should run in the background. Observability tells you which applies to your product.",
      },
      {
        q: "How do we stop one tenant affecting others?",
        a: "Measure resource use per tenant, apply rate limits and quotas, move heavy work to background queues with fair scheduling, and consider separate infrastructure for very large or demanding tenants. The right tenancy model depends on isolation requirements, cost and customer expectations, and can mix pooled and dedicated resources.",
      },
      {
        q: "What are SLIs and SLOs?",
        a: "Service level indicators are measurements of how users experience your service, such as the share of requests that succeed within a time limit. Service level objectives are targets for those indicators over a period. They help teams decide when reliability work should take priority over features, and they are internal targets, not guarantees to customers unless you choose to publish an SLA.",
      },
      {
        q: "How do we keep cloud costs under control while scaling?",
        a: "Attribute costs to services and, where possible, tenants; set budgets and alerts; right-size resources using real usage; switch off what is idle; and review architecture choices that drive cost, such as chatty services or unbounded data retention. Optimise without weakening reliability or security, and track cost per customer or per unit of value over time.",
      },
    ],
    content: [
      {
        heading: "How do you scale a SaaS application without over-engineering it?",
        body: [
          "**Measure first, then fix the actual constraint. Most SaaS products scale a long way with a well-structured monolith, a tuned database, caching, background jobs and safe deployments, all guided by observability.** Add complexity, such as separate services, sharding or dedicated tenant infrastructure, only when evidence shows a specific bottleneck, isolation requirement or team structure that justifies it. Microservices are not the default answer.",
          "This guide is for CTOs, engineering leads and founders of growing SaaS products. It covers observability, performance bottlenecks, databases, caching, background jobs, reliability, deployment practice, tenant isolation and cost monitoring, with a view on when simple architecture is enough.",
          "For SaaS architecture decisions from the start, including tenancy models, see [[/blogs/saas-development-australia|SaaS development in Australia]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Invest in observability before optimisation; guesses about bottlenecks are often wrong.",
          "The database is usually the first constraint: queries, indexes, connection limits.",
          "Move slow and heavy work out of request paths into background jobs.",
          "Cache deliberately, with clear invalidation.",
          "Protect tenants from each other with limits, quotas and fair queues.",
          "Ship small, reversible changes; most outages follow deployments.",
          "Track cost per tenant or per unit of value as you grow.",
        ],
      },
      {
        heading: "Step 1: Observability before optimisation",
        body: [
          "You cannot scale what you cannot see. Collect structured logs, metrics and traces, with tenant and request identifiers. Define a few **service level indicators** that reflect user experience, such as the share of key requests that succeed within a latency target, and set **objectives** for them; Google's SRE guidance describes this approach.",
          "Use tracing to see where time goes in slow requests: database, external calls or application code. Alert on symptoms users feel, not every internal blip. Keep personal information out of telemetry. See [[/blogs/ecommerce-observability|observability in practice]].",
        ],
      },
      {
        heading: "Step 2: Fix the common bottlenecks",
        body: [],
        table: {
          headers: ["Symptom", "Likely cause", "Typical fix"],
          rows: [
            ["Slow pages that load lists", "N+1 queries, missing indexes", "Query review, indexes, pagination, eager loading"],
            ["Latency spikes at peak", "Connection pool exhaustion, lock contention", "Pool tuning, shorter transactions, read replicas"],
            ["Slow requests calling other services", "Synchronous external calls", "Timeouts, retries with backoff, background processing"],
            ["Reports slow down everything", "Analytical queries on the transactional database", "Replicas or a separate analytics store"],
            ["One customer slows everyone", "Noisy neighbour", "Per-tenant limits, quotas, fair queues, dedicated resources"],
            ["Memory or CPU climbing over time", "Leaks, unbounded caches, inefficient code", "Profiling, bounded caches, fixes"],
          ],
        },
      },
      {
        heading: "Step 3: Databases",
        body: [
          "Look at the slowest and most frequent queries first, add or fix indexes, remove N+1 patterns, and paginate everything that can grow. Keep transactions short. Use read replicas for read-heavy workloads, accepting that replicas can lag. Move reporting and analytics off the transactional database. Archive or partition large, old data. Sharding is a big step with lasting complexity; exhaust simpler options and be sure the data model suits it before choosing it.",
        ],
      },
      {
        heading: "Step 4: Caching and background jobs",
        body: [
          "**Caching** reduces repeated work: HTTP caching and CDNs for static and public content, application caches for expensive computations, and per-tenant caches where data is tenant-specific. Every cache needs a clear invalidation rule and a key that includes the tenant where relevant, or you risk showing one customer another's data.",
          "**Background jobs** take slow or heavy work out of the request path: emails, exports, imports, integrations, reports and AI calls. Make jobs idempotent so retries are safe, set timeouts, use dead-letter queues for repeated failures, and schedule fairly across tenants so one large import does not starve others.",
        ],
      },
      {
        heading: "Step 5: Reliability and safe deployments",
        body: [],
        checklist: [
          "Automated tests and CI on every change; see [[/blogs/ai-software-testing|AI-assisted software testing]].",
          "Small, frequent releases rather than large, rare ones.",
          "Feature flags to separate deploying from releasing.",
          "Staged rollouts and quick rollback.",
          "Backward-compatible database migrations (expand, migrate, contract).",
          "Timeouts, retries with backoff and circuit breakers for dependencies.",
          "Tested backups and a practised incident process.",
        ],
      },
      {
        heading: "Step 6: Tenant isolation as you grow",
        body: [
          "Tenancy models range from pooled (shared infrastructure for all tenants), through bridge models, to silo (dedicated resources per tenant); AWS's SaaS Lens describes these trade-offs. Many products start pooled and move their largest or most regulated customers to dedicated resources later. Whatever the model, enforce tenant separation in code and data access, measure usage per tenant, and apply limits. Some customers will ask where their data is hosted; if you serve Australian customers, the major clouds run Australian regions, discussed in [[/blogs/cloud-migration-australia|cloud migration in Australia]].",
        ],
      },
      {
        heading: "When complexity is justified",
        body: [],
        table: {
          headers: ["Move", "Justified when", "Cost"],
          rows: [
            ["Extract a service from the monolith", "A component has very different scaling, release cadence or team ownership", "Network calls, distributed failures, more deployment work"],
            ["Event-driven architecture", "Many consumers need the same changes; decoupling is valuable", "Eventual consistency, harder debugging"],
            ["Sharding the database", "One database cannot hold the data or load even after tuning", "Cross-shard queries, operations complexity"],
            ["Dedicated tenant infrastructure", "Large or regulated tenants need isolation", "Higher cost, more environments to manage"],
            ["Multi-region deployment", "Latency or resilience requirements demand it", "Data replication, consistency, cost"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: keep a modular monolith with clear internal boundaries until a specific, measured problem forces a split. Martin Fowler's 'monolith first' argument remains sound advice for most products. See [[/blogs/ecommerce-microservices-vs-monolith|microservices vs monolith]] for the trade-offs.",
        },
      },
      {
        heading: "Step 7: Watch costs as you scale",
        body: [
          "Attribute cloud costs to services and, where you can, to tenants. Track cost per customer or per unit of value over time; costs rising faster than revenue is a scaling problem too. Right-size from real usage, switch off idle environments, set storage lifecycle rules, and review architecture that drives cost, such as chatty services or unbounded log retention. Do not cut reliability or security to save money. AWS's Well-Architected Framework covers cost optimisation alongside the other pillars.",
        ],
      },
      {
        heading: "Hypothetical example: a scheduling SaaS under load",
        body: [
          "**This example is hypothetical.** A scheduling SaaS slows down every Monday morning. The team proposes microservices. Tracing instead shows two problems: a calendar view running hundreds of queries per request, and large tenants' weekly report exports running inside web requests. Fixing the N+1 queries, adding two indexes, moving exports to a background queue with fair scheduling, and adding a per-tenant rate limit on the public API remove the Monday slowdown. The monolith stays; the team adds SLOs for booking requests and a weekly cost-per-tenant report.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Choosing microservices before measuring anything.",
          "Optimising code paths that are not the bottleneck.",
          "Caches without tenant-aware keys or invalidation.",
          "Heavy work inside web requests.",
          "Big-bang releases with no rollback.",
          "Ignoring cost until the invoice arrives.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For architecture fundamentals, see [[/blogs/scalable-website-architecture|scalable website architecture]]. For measuring user behaviour as you grow, see [[/blogs/product-analytics-implementation-australia|product analytics implementation]]. For security as scale increases, see [[/blogs/secure-web-application-development-australia|secure web application development]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google SRE book, service level objectives; AWS SaaS Lens, silo, pool and bridge models; AWS Well-Architected pillars; Martin Fowler, MonolithFirst.",
          "The tables, checklists and example are ours. Nothing here is ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Scaling a SaaS application is mostly disciplined engineering: observe, find the real constraint, fix it simply, protect tenants from each other, ship safely and watch costs. Keep the architecture as simple as the evidence allows, and add complexity only when a measured problem demands it. For the delivery practices that make safe releases routine, see [[/blogs/devops-for-growing-businesses|DevOps for growing businesses]].",
        ],
        cta: {
          title: "Is your SaaS slowing down as it grows?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|SaaS engineering and performance]]. If it would help to find your real bottleneck, we are happy to talk it through.",
        },
      },
    ],
  },
];
