import type { BlogPost } from "./blog-data";

/**
 * Listicle batch (2026-10-28), part 2: Shopify conversion apps, AI process
 * automation, AI agent types, AI automation tools and website A/B testing.
 * Each was checked against the existing inventory for intent overlap; where a
 * close article exists (best-shopify-apps-for-new-stores, ai-automation-dubai-
 * smes, ecommerce-ab-testing-ideas) the new piece takes a different reader or
 * angle and links to it. No external links (owner rule); no prices, ratings or
 * install counts. "Best" is avoided: apps are grouped by job, with examples.
 * Sources checked 2026-10-28:
 * - Shopify App Store listings by Shopify: Search & Discovery (free; filters,
 *   synonyms, boosts, related/complementary recommendations), Shopify Bundles
 *   (free; fixed bundles and multipacks), Shopify Forms (free; pop-ups and
 *   inline forms, customer tagging, discounts), Shopify Inbox (free; live chat,
 *   AI sales associate). Shopify Help: Flow is free on Basic, Grow, Advanced
 *   and Plus.
 * - Shopify notices and community threads: the Shopify Product Reviews app was
 *   removed in May 2024.
 * - Judge.me listing: free plan with unlimited photo/video reviews; review
 *   requests after fulfilment or delivery. Klaviyo listing: email and SMS,
 *   abandoned cart and browse abandonment, segmentation.
 * - Zapier Agents page (9,000+ apps). n8n docs: self-host via Docker and
 *   others; Community edition without a licence key; Business/Enterprise keys.
 *   Microsoft Learn: Power Automate desktop flows (RPA) and cloud flows.
 * - Russell and Norvig, Artificial Intelligence: A Modern Approach (4th ed.,
 *   2020), chapter 2: simple reflex, model-based reflex, goal-based,
 *   utility-based and learning agents.
 * - Google: Optimize and Optimize 360 ended 30 September 2023.
 * Not stated (unverified): Make's agent feature status, app ratings, install
 * counts, prices, and any conversion-lift figures.
 */
export const listiclePosts2: BlogPost[] = [
  // --------------------------------------------- SHOPIFY CONVERSION APPS
  {
    slug: "shopify-apps-for-conversion-rate",
    title: "Shopify Apps That Can Improve Conversion Rates: 12 Types, With Examples",
    seoTitle: "12 Types of Shopify Apps That Can Improve Conversion Rates",
    excerpt:
      "Twelve kinds of Shopify app that can lift conversion, from reviews and search to bundles and stock alerts, plus Shopify's free apps to try first.",
    category: "Shopify & Ecommerce",
    banner: "appshelf",
    sceneKind: "shopify",
    bannerAlt: "A shelf of Shopify app types grouped by the conversion problem each one addresses: trust, discovery, order value and follow-up",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "beauty-personal-care"],
    relatedSlugs: ["best-shopify-apps-for-new-stores", "shopify-speed-checklist-before-you-add-another-app", "shopify-cro-guide"],
    faqs: [
      {
        q: "What is the best Shopify app for conversion rate?",
        a: "There is no single one. The right app depends on where your store loses shoppers: reviews if product pages lack trust, search and filters if shoppers cannot find products, back-in-stock alerts if popular items sell out. Find the leak first, then choose the app.",
      },
      {
        q: "Do Shopify apps slow down my store?",
        a: "They can. Apps that add scripts to every page affect load time. Apps built with theme app extensions load only where their blocks are used, and leave less code behind when uninstalled. Test speed before and after installing any app.",
      },
      {
        q: "Does Shopify still have its own product reviews app?",
        a: "No. Shopify removed its free Product Reviews app in May 2024. Stores now use a third-party reviews app.",
      },
    ],
    content: [
      {
        heading: "Which Shopify apps help conversion?",
        body: [
          "**Apps help conversion when they fix a specific leak: reviews and visual proof for trust, search and filters for discovery, recommendations and bundles for order value, back-in-stock and email or SMS flows for shoppers who leave, live chat for pre-purchase questions, and delivery estimates, size guides and subscriptions for product-page doubts.** Several of these jobs are covered by free apps made by Shopify, so try those first and add third-party apps where you need more.",
          "This guide is for established store owners and marketers trying to improve conversion, not for setting up a new store; for that, see [[/blogs/best-shopify-apps-for-new-stores|the Shopify apps worth installing when you are starting out]]. We group apps by the problem they solve and name examples we checked on the Shopify App Store on 28 October 2026. Naming an app is not an endorsement; ZSpace Labs has no paid relationship with any app listed, and we list no prices, ratings or install counts because they change constantly.",
        ],
      },
      {
        heading: "Before you install anything: find the leak",
        body: [
          "An app is a fix for a diagnosed problem. Look at your funnel first: where do sessions drop between product view, add to cart, checkout and purchase, and does it differ on mobile? An app that improves a step that is not losing people will not move conversion. The [[/blogs/shopify-cro-guide|Shopify CRO guide]] shows how to find the leak.",
        ],
      },
      {
        heading: "1. Product reviews and visual proof",
        body: [
          "Reviews answer \"will this work for someone like me?\". Look for automated review requests after delivery, photo and video reviews, review display on product and collection pages, and syndication to Google Shopping. Shopify retired its own Product Reviews app in May 2024, so this is a third-party category. **Example:** Judge.me lists a free plan with unlimited photo and video reviews and automated requests after fulfilment or delivery.",
        ],
      },
      {
        heading: "2. Search and filters",
        body: [
          "If shoppers search and get poor results, they leave. **Start with:** Shopify's free Search & Discovery app, which lets you customise filters, create synonym groups so your product wording matches shoppers' terms, boost products for specific searches and set related and complementary product recommendations. Move to a dedicated search app if you need typo tolerance, merchandising rules or analytics beyond that. See [[/blogs/shopify-search-optimization|Shopify search optimisation]].",
        ],
      },
      {
        heading: "3. Product recommendations and cross-sells",
        body: [
          "Recommendations help shoppers find a better match or a complementary item. Search & Discovery's recommendations are the free starting point; dedicated upsell apps add cart and post-purchase offers and rules. Measure revenue per visitor, not just clicks on the widget. See [[/blogs/shopify-product-recommendations|Shopify product recommendations]].",
        ],
      },
      {
        heading: "4. Bundles and volume offers",
        body: [
          "Bundles raise order value and help shoppers buy a complete set. **Start with:** Shopify Bundles, a free app by Shopify for fixed bundles and multipacks created in the admin. Use a third-party app for mix-and-match or tiered volume discounts. See [[/blogs/shopify-bundles-volume-discounts|Shopify bundles and volume discounts]].",
        ],
      },
      {
        heading: "5. Email and SMS capture with abandonment flows",
        body: [
          "Most visitors will not buy on the first visit. Capturing an email or phone number, with consent, and following up with abandoned cart and browse-abandonment messages recovers some of them. **Examples:** Shopify Forms (free, by Shopify) adds pop-up and inline sign-up forms and tags new customers; Klaviyo offers email and SMS with abandoned cart and browse-abandonment flows and segmentation. Delay pop-ups until visitors have seen what you sell.",
        ],
      },
      {
        heading: "6. Live chat for pre-purchase questions",
        body: [
          "Chat helps when shoppers have questions a product page cannot answer, such as fit, compatibility or delivery to a specific area. **Start with:** Shopify Inbox, free from Shopify, which provides live chat and an AI-powered sales associate that answers questions from your catalogue. Only add chat if someone will review conversations and fix the gaps they reveal on your pages.",
        ],
      },
      {
        heading: "7. Back-in-stock alerts",
        body: [
          "When a popular size or shade sells out, an alert sign-up turns a lost visit into a future sale and tells you what demand you missed. Make sure the alert goes out promptly when stock returns and that the sign-up form works well on mobile.",
        ],
      },
      {
        heading: "8. Delivery dates and shipping estimates",
        body: [
          "Unexpected delivery cost or timing is a common reason to abandon. Apps that show an estimated delivery date or free-shipping progress on product and cart pages answer the question before checkout. Estimates must be accurate; a promised date you miss costs more than a cautious one.",
        ],
      },
      {
        heading: "9. Size guides and fit tools",
        body: [
          "For fashion, footwear and similar categories, size uncertainty drives both abandonment and returns. Size-guide and fit-recommendation apps put measurements and advice next to the size selector. A clear, product-specific size chart in the theme can do much of the job without an app.",
        ],
      },
      {
        heading: "10. Subscriptions",
        body: [
          "For consumables, a subscribe-and-save option can lift repeat purchase. Subscription apps add the purchase option on the product page and a customer portal to skip, pause or cancel. Make cancellation easy: hard-to-cancel subscriptions damage trust and, in many markets, breach consumer rules. See [[/blogs/shopify-subscription-store|Shopify subscription stores]].",
        ],
      },
      {
        heading: "11. Heatmaps and session recordings",
        body: [
          "These do not raise conversion themselves; they show where shoppers struggle so you fix the right thing. Configure masking of personal data and respect consent requirements. See [[/blogs/shopify-heatmap-analysis|what Shopify heatmaps can and cannot tell you]].",
        ],
      },
      {
        heading: "12. A/B testing",
        body: [
          "Testing apps let you compare theme sections, prices or offers on live traffic. They are worth it only with enough orders to reach a result; with low traffic, a well-reasoned change plus monitoring is often more practical. See [[/blogs/shopify-ab-testing|Shopify A/B testing]].",
        ],
        cta: {
          title: "Not sure where your store is losing shoppers?",
          description: "A [[/services/cro-audit|ZSpace Labs CRO audit]] finds the leaks first, so you only add apps that address them.",
        },
      },
      {
        heading: "Use Shopify's own tools first",
        body: [
          "These free apps and features from Shopify cover several jobs above. They are not always the most capable option, but they are a sensible baseline before paying for an app.",
        ],
        table: {
          headers: ["Job", "Shopify option", "When to add a third-party app"],
          rows: [
            ["Search, filters, synonyms, boosts", "Search & Discovery", "Typo tolerance, rich merchandising, search analytics"],
            ["Related and complementary products", "Search & Discovery", "Cart and post-purchase offers with rules"],
            ["Fixed bundles and multipacks", "Shopify Bundles", "Mix-and-match or tiered volume discounts"],
            ["Sign-up forms and pop-ups", "Shopify Forms", "Advanced targeting and testing"],
            ["Live chat and AI answers", "Shopify Inbox", "Help desk with tickets across channels"],
            ["Store automations (tags, alerts)", "Shopify Flow (Basic, Grow, Advanced, Plus)", "Logic Flow cannot express"],
          ],
        },
      },
      {
        heading: "Checks before you install any app",
        body: [],
        checklist: [
          "Run a speed test on a product page before and after installing.",
          "Prefer apps that use theme app extensions (app blocks) over ones that edit theme code.",
          "Check the data the app asks to access, and whether it needs customer data at all.",
          "Look for overlap: two apps doing similar jobs often conflict.",
          "Read how to uninstall cleanly; some apps leave code behind in the theme.",
          "Set a measure of success and a review date, and remove apps that do not earn their place.",
        ],
        callout: {
          type: "tip",
          text: "Our [[/blogs/shopify-speed-checklist-before-you-add-another-app|five checks before adding another Shopify app]] goes into speed and theme impact in more detail.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Conversion apps work when they answer a question or remove a doubt that is actually costing you sales. Diagnose the leak, try Shopify's free tools for search, recommendations, bundles, forms, chat and automation, then add third-party apps for reviews, alerts, delivery estimates or deeper features where the evidence supports it. Review the app list every quarter; every app is a running cost and a speed cost.",
        ],
        cta: {
          title: "Want a cleaner, faster app stack?",
          description: "ZSpace Labs builds and optimises Shopify stores, including app audits and replacing heavy apps with theme features. See our [[/services/shopify-development|Shopify development service]].",
        },
      },
      {
        heading: "Sources",
        body: [
          "Shopify App Store listings: Search & Discovery, Shopify Bundles, Shopify Forms and Shopify Inbox (all by Shopify); Judge.me Product Reviews; Klaviyo. Shopify Help Center, Shopify Flow. Shopify notices on the removal of the Product Reviews app (May 2024). Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // --------------------------------------- PROCESSES TO AUTOMATE WITH AI
  {
    slug: "business-processes-to-automate-with-ai",
    title: "15 Business Processes You Can Automate With AI, and Where Rules Are Enough",
    seoTitle: "15 Business Processes You Can Automate With AI",
    excerpt:
      "Fifteen business processes, by department, where AI helps: what the AI does, what plain rules already handle, the human check to keep, and where to start.",
    category: "AI & Automation",
    banner: "bpaopportunity",
    sceneKind: "workflow",
    bannerAlt: "Fifteen business processes grouped by department, each marked by whether it needs AI, plain rules or a human decision",
    date: "2026-10-28",
    readingTime: "11 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["professional-services", "b2b-enterprise", "ecommerce"],
    relatedSlugs: ["which-processes-suit-ai-agents", "when-to-automate-a-business-process", "business-process-automation"],
    faqs: [
      {
        q: "What business processes can AI automate?",
        a: "Processes that involve reading or writing unstructured content: emails, documents, invoices, contracts, support questions, meeting notes and product data. AI handles the reading and drafting; rules and existing systems handle the routing, approvals and record-keeping.",
      },
      {
        q: "Which processes should not be automated with AI?",
        a: "Decisions with significant effects on people, such as hiring, credit or medical judgements, should not be left to AI alone. Nor should processes where errors are costly and hard to detect, or where simple rules already work.",
      },
      {
        q: "Do I need AI agents to automate these processes?",
        a: "Usually not. Most of these work as a fixed workflow with one AI step. Agents, which choose their own steps, make sense when the path varies case by case and you have good guardrails.",
      },
    ],
    content: [
      {
        heading: "Which business processes can you automate with AI?",
        body: [
          "**The best candidates are high-volume processes where someone reads, classifies or drafts text: email triage, lead qualification, first-line support, invoice and receipt capture, expense checks, reconciliation exceptions, contract review, recruitment admin, IT and HR requests, purchase requests, meeting notes to CRM, product data, reporting and document quality checks.** In each, AI does the reading and drafting, ordinary workflow rules do the routing and record-keeping, and a person approves anything costly or hard to reverse.",
          "This list is for operations, finance and business leads deciding where to start. It is organised by department and, for each process, separates what needs AI from what plain automation already handles, because many projects use AI where a rule would be cheaper and more reliable. For a scoring method, see [[/blogs/when-to-automate-a-business-process|when a process is worth automating]]; for a UAE-focused version of this list, see [[/blogs/ai-automation-dubai-smes|AI automation for Dubai SMEs]].",
        ],
      },
      {
        heading: "Sales and marketing",
        body: [
          "**1. Inbound email and enquiry triage.** AI reads incoming messages, works out the intent (quote request, complaint, supplier, spam) and extracts details; rules route it to the right person or queue. **Keep a human for:** replies that commit the business. See [[/blogs/ai-email-automation|AI email automation]].",
          "**2. Lead qualification and enrichment.** AI summarises what a lead wants and scores fit against your criteria, using form answers and public company information; the CRM's rules assign and schedule follow-up. **Keep a human for:** the first conversation with high-value leads. See [[/blogs/ai-lead-qualification|AI lead qualification]].",
          "**3. Meeting notes to CRM updates.** AI turns call transcripts into a summary, next steps and field updates for the CRM record. **Keep a human for:** confirming the update before it saves, at least at first. See [[/blogs/ai-meeting-assistants|AI meeting assistants]].",
        ],
      },
      {
        heading: "Customer service",
        body: [
          "**4. First-line answers from your knowledge base.** AI answers common questions from your help content and order data, and hands over to a person with the conversation summarised. **Rules handle:** order-status lookups, which need no AI. **Keep a human for:** refunds above a limit, complaints and anything the AI is unsure about. See [[/blogs/ai-customer-support-ecommerce|what to automate in customer support and what to keep human]].",
        ],
      },
      {
        heading: "Finance",
        body: [
          "**5. Invoice and receipt data capture.** AI extracts supplier, amounts, tax and line items from PDFs and photos, including unfamiliar layouts; rules match them to purchase orders and route exceptions. **Keep a human for:** mismatches and new suppliers. See [[/blogs/ai-invoice-processing|AI invoice processing]].",
          "**6. Expense checks.** AI reads receipts, categorises spend and flags items that look outside policy; the approval workflow does the rest. **Keep a human for:** flagged items. See [[/blogs/ai-expense-management|AI expense management]].",
          "**7. Reconciliation exceptions.** Rules match most bank lines to invoices. AI helps with the leftovers by reading vague payment references and suggesting likely matches with reasons. **Keep a human for:** confirming every suggested match.",
        ],
      },
      {
        heading: "Legal and compliance",
        body: [
          "**8. First-pass contract review.** AI extracts key terms (renewal dates, liability caps, notice periods) and compares them with your standard positions, highlighting differences for a lawyer. **Keep a human for:** all advice and negotiation. See [[/blogs/contract-lifecycle-management-software|contract lifecycle management]].",
          "**9. Document completeness and quality checks.** AI checks submitted forms and supporting documents for missing information or inconsistencies before a person reviews them, for example in onboarding or claims. **Keep a human for:** the decision. See [[/blogs/ai-compliance-automation|AI compliance automation]].",
        ],
      },
      {
        heading: "People and IT",
        body: [
          "**10. Recruitment admin.** AI drafts job descriptions, answers candidate questions about the role and process, and schedules interviews. Using AI to rank or reject candidates raises bias and legal risks; if you use it at all, keep it as an aid to a human reviewer, and check the rules in your jurisdiction. See [[/blogs/ai-hr-automation|AI HR automation]].",
          "**11. Employee onboarding and access requests.** Rules create accounts and tasks from the HR system when someone joins, moves or leaves; AI answers new starters' policy questions from your handbook. See [[/blogs/joiner-mover-leaver-automation|joiner, mover and leaver automation]].",
          "**12. IT helpdesk ticket classification.** AI categorises tickets, suggests fixes from past tickets and drafts replies; rules assign priority and route. **Keep a human for:** security incidents and access changes. See [[/blogs/ai-it-service-management|AI for IT service management]].",
        ],
      },
      {
        heading: "Operations and ecommerce",
        body: [
          "**13. Purchase requests and supplier documents.** AI reads quotes and supplier forms and fills in the request; rules route approvals by amount and category. See [[/blogs/ai-procurement-automation|AI procurement automation]].",
          "**14. Product data enrichment.** AI drafts product descriptions, extracts attributes from supplier spreadsheets and suggests categories and tags. **Keep a human for:** claims about safety, ingredients or compliance, which must be checked against the source.",
          "**15. Recurring reports and summaries.** Rules pull the numbers; AI writes the plain-language summary of what changed and why it might matter. **Keep a human for:** checking that the explanation matches the data before it circulates.",
        ],
      },
      {
        heading: "At a glance: AI, rules and people",
        body: [
          "The middle column is the part teams often skip. If rules can do the job, they are cheaper, faster and easier to audit than AI.",
        ],
        table: {
          headers: ["Process", "What AI does", "What rules already handle", "Human check"],
          rows: [
            ["Email triage", "Reads intent, extracts details", "Routing, SLAs", "Committing replies"],
            ["Lead qualification", "Summarises, scores fit", "Assignment, reminders", "High-value leads"],
            ["Meeting notes to CRM", "Summary, next steps, field values", "Saving to the record", "Confirm before save"],
            ["First-line support", "Answers from help content", "Order-status lookups", "Refunds, complaints"],
            ["Invoice capture", "Extracts from any layout", "PO matching, approvals", "Mismatches"],
            ["Expense checks", "Categorises, flags policy issues", "Approval routing", "Flagged items"],
            ["Reconciliation", "Suggests matches for vague lines", "Exact matches", "Every suggestion"],
            ["Contract review", "Extracts and compares terms", "Renewal reminders", "All advice"],
            ["Document checks", "Finds gaps and inconsistencies", "Required-field checks", "The decision"],
            ["Recruitment admin", "Drafts, answers, schedules", "Status updates", "All selection decisions"],
            ["Onboarding and access", "Answers policy questions", "Account creation and removal", "Access exceptions"],
            ["IT helpdesk", "Classifies, suggests fixes", "Priority and routing", "Security and access"],
            ["Purchase requests", "Reads quotes and forms", "Approval by amount", "Approvers"],
            ["Product data", "Drafts copy, extracts attributes", "Publishing workflow", "Regulated claims"],
            ["Reports", "Writes the narrative", "Pulling the numbers", "Accuracy check"],
          ],
        },
      },
      {
        heading: "How to pick where to start",
        body: [],
        checklist: [
          "Choose a process with enough volume that saving minutes per item adds up.",
          "Prefer one where mistakes are visible and easy to correct, so you can learn safely.",
          "Collect 50 to 100 real examples to test against before building anything.",
          "Map the process and fix obvious waste first; automating a bad process makes the waste faster.",
          "Decide what the AI may do on its own and what needs approval, and log every action.",
          "Measure time saved and error rates against a baseline, not against an estimate.",
        ],
        callout: {
          type: "note",
          text: "Most of these work as a fixed workflow with one AI step, not as an autonomous agent. Our [[/blogs/which-processes-suit-ai-agents|decision framework for AI agents]] explains when an agent is justified.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI is most useful where people currently read and type: emails, documents, tickets, transcripts and product data. Pair it with plain rules for routing and records, keep people on decisions that matter, and start with one high-volume process you can measure. For a full method, see the [[/blogs/business-process-automation|business process automation guide]].",
        ],
        cta: {
          title: "Want to find your best first AI automation?",
          description: "ZSpace Labs builds AI workflows connected to your existing systems, with approvals, logging and evaluation. See our [[/services/ai-automation|AI automation service]].",
        },
      },
    ],
  },

  // ------------------------------------------------------ TYPES OF AI AGENTS
  {
    slug: "types-of-ai-agents",
    title: "Types of AI Agents: 10 Kinds Explained, With Business Examples",
    seoTitle: "Types of AI Agents: 10 Kinds Explained With Examples",
    excerpt:
      "The five classic types of AI agent from AI textbooks, the five kinds businesses build with language models today, and how to tell which one a task needs.",
    category: "AI & Automation",
    banner: "autonomylevels",
    sceneKind: "agent",
    bannerAlt: "Ten types of AI agent arranged from simple reflex agents to learning agents, alongside modern assistant, workflow, research, coding and computer-use agents",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "professional-services", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-vs-ai-chatbot", "ai-agent-architecture", "ai-agent-development"],
    faqs: [
      {
        q: "What are the five types of AI agents?",
        a: "In Russell and Norvig's Artificial Intelligence: A Modern Approach, the classic types are simple reflex agents, model-based reflex agents, goal-based agents, utility-based agents and learning agents. They describe how an agent decides, not what business task it does.",
      },
      {
        q: "Is ChatGPT an AI agent?",
        a: "A chat assistant that only answers questions is not much of an agent. When it can use tools, browse, run code or act in other apps towards a goal you set, it behaves as one. Most products sit somewhere on that spectrum.",
      },
      {
        q: "What is a multi-agent system?",
        a: "A design where several agents, each with a narrow role, work together, often coordinated by an orchestrator. It can help with complex tasks but adds cost and failure points, so start with one agent where possible.",
      },
    ],
    content: [
      {
        heading: "What types of AI agent are there?",
        body: [
          "**There are two useful ways to classify AI agents. The classic textbook types describe how an agent decides: simple reflex, model-based reflex, goal-based, utility-based and learning agents. The types businesses build today describe what a language-model agent does: conversational assistants, workflow agents, research agents, coding agents and computer-use agents.** Most real systems combine traits from both lists, and many tasks sold as needing an agent are better served by a fixed workflow.",
          "This explainer is for business and product leaders who keep hearing \"agent\" used for very different things. An AI agent, in the textbook sense, is anything that perceives its environment and acts on it. In current products, it usually means a language model that can use tools and take several steps towards a goal. For the difference from a chatbot, see [[/blogs/ai-agent-vs-ai-chatbot|AI agent vs AI chatbot]].",
        ],
      },
      {
        heading: "The five classic types",
        body: [
          "These come from Stuart Russell and Peter Norvig's textbook Artificial Intelligence: A Modern Approach (chapter 2). They are still the clearest way to think about how much an agent knows and plans.",
          "**1. Simple reflex agents** act only on what they perceive right now, using condition-action rules: if this, then that. A thermostat is the textbook example. **Business example:** a rule that routes any email containing \"invoice\" to finance. Fast and predictable, but helpless when the rule does not fit.",
          "**2. Model-based reflex agents** keep an internal picture of the parts of the world they cannot currently see, updated as things happen. **Business example:** a support bot that remembers what the customer said earlier in the conversation and the state of their order, and responds accordingly.",
          "**3. Goal-based agents** consider what their actions will lead to and choose actions that reach a goal, which means planning. **Business example:** an agent given \"book a meeting with this client next week\" that checks calendars, proposes times and sends the invite.",
          "**4. Utility-based agents** go further and weigh how good each outcome is, trading off goals such as speed, cost and risk. **Business example:** a delivery-routing system that balances fuel cost, delivery windows and driver hours rather than finding any valid route.",
          "**5. Learning agents** improve their behaviour from feedback over time. **Business example:** a recommendation system that updates what it suggests based on what customers buy. Language-model agents learn in a looser sense, through updated instructions, examples and evaluation, rather than retraining after every task.",
        ],
      },
      {
        heading: "The five kinds businesses build today",
        body: [
          "Modern agents are built around a language model that reads the situation, decides on a step, calls a tool and repeats. They are grouped here by the job they do.",
          "**6. Conversational assistants and support agents** talk to customers or staff and can take limited actions, such as looking up an order or creating a ticket. Voice agents are the spoken version. **Watch for:** clear handover to people and limits on what they may promise. See [[/blogs/ai-voice-agents-customer-service|AI voice agents for customer service]].",
          "**7. Workflow agents** carry out a multi-step business process, such as processing an inbound request through checks, systems and approvals, choosing the next step when cases vary. **Watch for:** approvals before irreversible actions. See [[/blogs/agentic-workflow-automation|agentic workflow automation]].",
          "**8. Research and knowledge agents** search documents, databases or the web, compare sources and write a summary with references. **Watch for:** checking citations, since models can misstate what a source says.",
          "**9. Coding agents** read a codebase, make changes, run tests and propose pull requests. **Watch for:** sandboxing, permissions and code review. See [[/blogs/ai-coding-agent-security|securing AI coding agents]].",
          "**10. Computer-use and browser agents** operate software through its screen, clicking and typing like a person, which helps with systems that have no API. **Watch for:** slower, less reliable runs and strong limits on what they can access. See [[/blogs/computer-use-agents|computer-use agents]].",
        ],
        callout: {
          type: "note",
          text: "Multi-agent systems are not a separate type so much as an architecture: several of the agents above, each with a narrow role, coordinated by an orchestrator. See [[/blogs/ai-agent-orchestration|AI agent orchestration]].",
        },
      },
      {
        heading: "How the two lists connect",
        body: [
          "The classic types are a useful test of what a modern agent actually does. Many products marketed as agents are reflex agents with a language model inside: they react to one input and stop. That is often exactly what you want, because it is predictable. Goal-based behaviour, where the system plans several steps, is where both the value and the risk increase.",
        ],
        table: {
          headers: ["Type", "Decides by", "Typical business use", "Risk level"],
          rows: [
            ["Simple reflex", "Fixed rules on current input", "Routing, alerts, validation", "Low"],
            ["Model-based reflex", "Rules plus remembered state", "Context-aware chat and support", "Low to medium"],
            ["Goal-based", "Planning steps to reach a goal", "Scheduling, multi-step tasks", "Medium"],
            ["Utility-based", "Weighing outcomes against each other", "Routing, pricing, allocation", "Medium"],
            ["Learning", "Improving from feedback", "Recommendations, ranking", "Medium (drift)"],
            ["Conversational/support", "Model plus limited tools", "Customer and staff questions", "Medium"],
            ["Workflow", "Model choosing process steps", "Request handling, back office", "Medium to high"],
            ["Research/knowledge", "Model searching and summarising", "Reports, due diligence", "Medium"],
            ["Coding", "Model editing and testing code", "Software changes", "High without review"],
            ["Computer-use", "Model operating a screen", "Legacy systems without APIs", "High"],
          ],
        },
      },
      {
        heading: "Which type does your task need?",
        body: [],
        checklist: [
          "If the same input should always produce the same action, use rules (a simple reflex agent), not a language model.",
          "If the task needs reading unstructured text but the steps are fixed, use a workflow with one AI step.",
          "If the steps genuinely vary by case, consider a goal-based workflow agent with approvals and logs.",
          "If outcomes must be optimised across trade-offs, you need explicit scoring, not just a model's judgement.",
          "If no API exists, a computer-use agent may bridge the gap, but plan to replace it with an integration.",
        ],
        callout: {
          type: "tip",
          text: "Our [[/blogs/which-processes-suit-ai-agents|decision framework]] tests whether a process suits an agent at all, and [[/blogs/ai-agent-guardrails|AI agent guardrails]] covers how to limit what one can do.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Knowing the type of agent clarifies what you are buying or building: how much it plans, how much it can do on its own and how much can go wrong. Use the classic types to judge decision-making, and the modern types to describe the job. Start with the simplest type that does the task. For how to build one, see the [[/blogs/ai-agent-development|AI agent development guide]]; for whether to build or buy, [[/blogs/build-vs-buy-ai-agents|build vs buy AI agents]].",
        ],
        cta: {
          title: "Working out which kind of agent you need?",
          description: "ZSpace Labs designs and builds AI workflows and agents connected to business systems, with permissions, approvals and monitoring. See our [[/services/ai-automation|AI automation service]].",
        },
      },
      {
        heading: "Sources",
        body: [
          "Stuart Russell and Peter Norvig, Artificial Intelligence: A Modern Approach, 4th edition (Pearson, 2020), chapter 2, Intelligent Agents.",
        ],
      },
    ],
  },

  // -------------------------------------------- AI TOOLS FOR AUTOMATION
  {
    slug: "ai-tools-for-business-automation",
    title: "AI Tools for Automating Repetitive Business Tasks: 10 Options by Job",
    seoTitle: "10 AI Tools for Automating Repetitive Business Tasks",
    excerpt:
      "Zapier, Make, n8n, Power Automate, UiPath, Copilot, Gemini, AI assistants, document AI and built-in platform automations, compared by the job they do.",
    category: "AI & Automation",
    banner: "integrationcompare",
    sceneKind: "workflow",
    bannerAlt: "Ten AI automation tools grouped by job: connecting apps, desktop automation, office assistants, document extraction and platform automations",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["professional-services", "b2b-enterprise", "startups"],
    relatedSlugs: ["workflow-automation", "build-vs-buy-ai-agents", "business-processes-to-automate-with-ai"],
    faqs: [
      {
        q: "What is the best AI tool for automating business tasks?",
        a: "It depends on the job. To connect cloud apps, Zapier, Make or n8n. To automate Windows desktop software, Power Automate desktop flows or UiPath. To speed up writing and summarising inside Office or Google apps, Microsoft 365 Copilot or Gemini in Workspace. To extract data from documents, a document AI service.",
      },
      {
        q: "Can I self-host an AI automation tool?",
        a: "n8n can be self-hosted on your own infrastructure, which helps when data must stay in your environment. Most other tools in this list are cloud services.",
      },
      {
        q: "When should I build a custom automation instead?",
        a: "When the process is core to your business, needs integrations the tools do not support, handles sensitive data under strict rules, or has grown expensive per task on a no-code platform.",
      },
    ],
    content: [
      {
        heading: "Which AI tools automate repetitive business tasks?",
        body: [
          "**To connect cloud apps, use an automation platform: Zapier for ease, Make for visual multi-step logic, n8n for technical teams or self-hosting. To automate desktop and legacy software, Power Automate or UiPath. To speed up writing and summarising, Microsoft 365 Copilot, Gemini in Google Workspace or a general assistant such as ChatGPT or Claude. To extract data from documents, a document AI service. And check the automation already built into your store, CRM or helpdesk first.**",
          "This list is for small and mid-sized businesses choosing where to start. Tools are grouped by job because they are not interchangeable. Product facts come from vendors' own pages checked on 28 October 2026. We list no prices: plans differ by region and change often, and usage-based pricing makes like-for-like comparison hard. ZSpace Labs has no paid relationship with any vendor named. If you are still deciding which tasks to automate, start with [[/blogs/business-processes-to-automate-with-ai|15 processes you can automate with AI]].",
        ],
      },
      {
        heading: "How we chose and compared them",
        body: [],
        checklist: [
          "**Job:** connecting apps, operating desktop software, assisting people, or extracting data.",
          "**Who builds it:** business users, technical staff or developers.",
          "**Where data goes:** cloud only, or self-hostable.",
          "**Control:** logs, error handling, approvals and permissions.",
          "**Lock-in:** how hard it is to move automations elsewhere.",
        ],
      },
      {
        heading: "Platforms that connect apps",
        body: [
          "**1. Zapier.** The most approachable way to connect cloud apps: a trigger in one app starts actions in others. Zapier also offers Zapier Agents, which its site describes as AI teammates that use your business data and act across more than 9,000 apps, with templates for jobs such as lead enrichment and support triage. **Suits:** non-technical teams with simple to moderate workflows. **Watch for:** costs rise with task volume, and complex branching gets hard to maintain.",
          "**2. Make.** A visual builder where each scenario shows data flowing through modules, which makes complex branching, loops and data transformation easier to see. It includes AI modules for calling language models within a scenario. **Suits:** operations teams comfortable with more logic. **Watch for:** a steeper learning curve than Zapier; check whether any AI feature you rely on is still in beta.",
          "**3. n8n.** A workflow tool aimed at technical users, with AI and agent nodes and the option to write code inside workflows. It can be self-hosted (with Docker, for example) or used as n8n Cloud; without a licence key it runs as the free Community edition, and Business and Enterprise licences add features. **Suits:** technical teams, and organisations that need data to stay on their own infrastructure. **Watch for:** self-hosting means you own updates, security and uptime.",
        ],
      },
      {
        heading: "Tools that automate desktop and legacy software",
        body: [
          "**4. Microsoft Power Automate.** Cloud flows connect Microsoft 365 and other services; desktop flows provide robotic process automation (RPA) that operates Windows applications, websites and Excel through the screen, including legacy systems without APIs. **Suits:** Microsoft-centric organisations. **Watch for:** screen-based automations break when the interface changes.",
          "**5. UiPath.** An enterprise automation platform built on RPA, with document processing and AI features for handling unstructured inputs. **Suits:** larger organisations automating many processes across older systems, with a team to run the programme. **Watch for:** more than a small business usually needs. See [[/blogs/rpa-vs-ai-automation|RPA vs AI automation]].",
        ],
      },
      {
        heading: "Assistants that speed up people's work",
        body: [
          "**6. Microsoft 365 Copilot.** AI inside Word, Excel, Outlook, Teams and PowerPoint for drafting, summarising meetings and email threads, and analysing spreadsheets, using the documents the user can already access. **Suits:** organisations on Microsoft 365. **Watch for:** it surfaces whatever users have permission to see, so tidy up sharing permissions first; check what your licence includes.",
          "**7. Gemini in Google Workspace.** Google's equivalent inside Gmail, Docs, Sheets and Meet. **Suits:** organisations on Google Workspace. **Watch for:** the same permission point; features vary by Workspace edition.",
          "**8. General-purpose assistants (such as ChatGPT and Claude).** Useful for drafting, summarising, analysing files and, increasingly, carrying out multi-step tasks with tools. Business plans add admin controls and commitments on how data is used. **Suits:** individual productivity and prototyping an automation before building it properly. **Watch for:** staff pasting sensitive data into personal accounts; give people an approved option and a policy. See [[/blogs/shadow-ai-agents|shadow AI agents]].",
        ],
      },
      {
        heading: "Services that extract data from documents",
        body: [
          "**9. Document AI services.** Cloud services such as Microsoft's Azure AI Document Intelligence, Google Cloud Document AI and Amazon Textract extract text, tables and fields from invoices, receipts, IDs and forms, with prebuilt models for common documents. Language models can now read many document types directly too. **Suits:** high-volume document processing inside a larger workflow. **Watch for:** accuracy on your real documents; test with a sample before committing. See [[/blogs/intelligent-document-processing|intelligent document processing]].",
        ],
      },
      {
        heading: "Automation already in your platforms",
        body: [
          "**10. Built-in platform automations.** Many systems you already pay for include a workflow builder: CRM workflow tools, helpdesk rules, accounting software's bank rules, and Shopify Flow, which is free on Shopify's Basic, Grow, Advanced and Plus plans. These are often the cheapest and most reliable place to automate a task that stays inside one system. **Watch for:** they rarely reach outside their own platform.",
        ],
      },
      {
        heading: "Comparison table",
        body: [],
        table: {
          headers: ["Tool", "Main job", "Built by", "Hosting", "Main caution"],
          rows: [
            ["Zapier", "Connect cloud apps; agents", "Business users", "Cloud", "Cost at volume"],
            ["Make", "Visual multi-step workflows", "Ops and power users", "Cloud", "Learning curve"],
            ["n8n", "Technical workflows and agents", "Technical teams", "Self-host or cloud", "You run it if self-hosted"],
            ["Power Automate", "Microsoft flows and desktop RPA", "Business and IT", "Cloud plus Windows desktop", "Screen automations are brittle"],
            ["UiPath", "Enterprise RPA and documents", "Automation teams", "Cloud or on-premises", "Scale and cost"],
            ["Microsoft 365 Copilot", "Drafting and summarising in Office", "Every user", "Cloud", "Permission hygiene"],
            ["Gemini in Workspace", "Drafting and summarising in Google apps", "Every user", "Cloud", "Varies by edition"],
            ["ChatGPT, Claude and similar", "General assistance, prototyping", "Every user", "Cloud", "Shadow use of personal accounts"],
            ["Document AI services", "Extracting data from documents", "Developers", "Cloud", "Accuracy on your documents"],
            ["Built-in automations", "Automating inside one system", "System admins", "Same as the system", "Limited reach"],
          ],
        },
      },
      {
        heading: "When to stop using tools and build",
        body: [
          "No-code tools are the right starting point for most businesses. A custom build becomes worth it when an automation is core to how you make money, when it needs integrations or logic the tools cannot handle, when data rules require full control, when per-task costs have grown larger than a build, or when failures need proper monitoring and retries. Many teams end up with a mix: tools for simple connections, custom code for the critical path. See [[/blogs/build-vs-buy-ai-agents|build vs buy AI agents]] and [[/blogs/ai-automation-integration-options|APIs, webhooks, MCP or RPA]].",
        ],
        cta: {
          title: "Outgrowing your automation tools?",
          description: "ZSpace Labs builds AI workflows and integrations with logging, approvals and monitoring, and can work alongside the tools you already use. See our [[/services/ai-automation|AI automation service]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Pick the tool by job: an automation platform to connect apps, RPA for software without APIs, office assistants to speed up writing, document AI for extraction, and your existing platforms' built-in automations first of all. Start with one repetitive task, measure the time it saves, and govern access before AI tools spread informally. For the mechanics of a workflow, see [[/blogs/workflow-automation|workflow automation]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Zapier Agents page; n8n documentation, hosting; Microsoft Learn, introduction to desktop flows in Power Automate; Shopify Help Center, Shopify Flow; Microsoft, Google, Amazon, UiPath, Make, OpenAI and Anthropic product pages. Accessed 28 October 2026. Features and plan inclusions change often; check the current pages.",
        ],
      },
    ],
  },

  // ------------------------------------------------ WEBSITE A/B TEST IDEAS
  {
    slug: "website-ab-testing-ideas",
    title: "15 Website Elements to A/B Test on Lead Generation and SaaS Sites",
    seoTitle: "15 Website Elements to A/B Test for More Leads",
    excerpt:
      "Fifteen elements to A/B test on lead generation and SaaS websites, from headlines and forms to pricing pages and demo flows, with a metric for each.",
    category: "CRO",
    banner: "testideasgrid",
    sceneKind: "abtest",
    bannerAlt: "A grid of website elements to test on a lead generation site: headline, call to action, form, proof, pricing and demo flow",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "professional-services"],
    relatedSlugs: ["cro-strategy-low-traffic-websites", "ecommerce-ab-testing-ideas", "landing-page-development"],
    faqs: [
      {
        q: "What should I A/B test first on my website?",
        a: "The element closest to the conversion with the most traffic, usually the main call to action or the enquiry form on your highest-traffic landing page. Test changes big enough to matter; small cosmetic changes rarely produce a detectable difference.",
      },
      {
        q: "How much traffic do I need for A/B testing?",
        a: "It depends on your current conversion rate and the size of change you want to detect. Many lead generation sites with a few hundred conversions a month or fewer cannot detect small changes in a reasonable time. Use a sample size calculator before starting, and consider other methods if the test would take months.",
      },
      {
        q: "What replaced Google Optimize?",
        a: "Google ended Optimize on 30 September 2023. Teams now use dedicated testing tools, testing built into their website platform (Webflow and Framer, for example, include A/B testing), or server-side testing in their own code.",
      },
    ],
    content: [
      {
        heading: "What should you A/B test on a lead generation website?",
        body: [
          "**Test the elements that shape the decision to enquire: the headline and offer, the call to action, form length and layout, the type and placement of proof, the next-step offer (demo, trial, quote or call), pricing presentation, and what happens after the form.** Test big, meaningful differences on high-traffic pages, define the metric and guardrail before you start, and remember that many lead generation sites lack the traffic to test small changes at all.",
          "Most published test-idea lists are for online stores. This one is for service businesses, B2B companies and SaaS products, where a conversion is an enquiry, demo request or trial sign-up. For ecommerce, see [[/blogs/ecommerce-ab-testing-ideas|25 ecommerce A/B testing ideas]]. Each idea below includes an example hypothesis; the examples are illustrative, not results.",
        ],
      },
      {
        heading: "Before you test: traffic and metrics",
        body: [
          "An A/B test needs enough conversions in each version to tell a real difference from noise. If your page gets a few dozen enquiries a month, a test of button wording could run for many months and still be inconclusive. In that case, make well-researched changes and monitor them, or use the methods in [[/blogs/cro-strategy-low-traffic-websites|CRO for low-traffic websites]].",
          "Measure qualified leads, not just form submissions. A shorter form often raises submissions and lowers lead quality, so track what happens next in your CRM: meetings booked, opportunities created or trials activated. Pick one primary metric and one guardrail metric before you start.",
        ],
      },
      {
        heading: "Message and offer",
        body: [
          "**1. Headline and value proposition.** Test a specific outcome against a general claim, or a problem-led headline against a solution-led one. *Hypothesis:* naming the customer type and outcome in the headline will raise demo requests from that segment. **Metric:** qualified enquiries.",
          "**2. The next-step offer.** \"Book a demo\", \"Start a free trial\", \"Get a quote\" and \"Talk to an expert\" ask for different commitments. *Hypothesis:* offering a self-serve trial alongside the demo will increase activated trials without reducing demos. **Metric:** activated trials plus demos.",
          "**3. Lead magnet or secondary offer.** For visitors not ready to talk, test a useful resource such as a checklist, calculator or template against no secondary offer. **Guardrail:** sales-qualified leads should not fall.",
        ],
      },
      {
        heading: "Calls to action",
        body: [
          "**4. CTA wording.** Test wording that says what happens next (\"See pricing for your team\") against a generic phrase (\"Get started\"). Wording usually matters more than colour.",
          "**5. CTA placement and repetition.** Test a CTA after each major section, or a sticky CTA on mobile, against a single CTA at the top and bottom. **Guardrail:** watch for more low-intent clicks that do not complete the form.",
        ],
      },
      {
        heading: "Forms",
        body: [
          "**6. Number of fields.** Remove fields you do not use to route or qualify leads. *Hypothesis:* removing phone and company size will increase submissions without reducing meetings booked. **Metric:** meetings booked, not submissions.",
          "**7. Single-step versus multi-step form.** A multi-step form that starts with an easy question can feel lighter. Test it where the form has more than four or five fields. See [[/blogs/improve-website-enquiry-form-conversions|improving enquiry forms]].",
          "**8. Qualifying questions.** Test adding a budget or timeline question. Submissions may fall while sales time per lead improves; decide in advance which matters more.",
          "**9. Reassurance next to the form.** Test a short line about what happens next and how you will use the details (\"We reply within one working day. No mailing list.\") against none.",
        ],
      },
      {
        heading: "Proof and trust",
        body: [
          "**10. Type of proof.** Test genuine customer quotes, recognisable client logos you have permission to use, review-platform ratings or a short case example, against each other. Use only real proof.",
          "**11. Placement of proof.** Test proof near the CTA and form against proof in a separate section lower down.",
        ],
      },
      {
        heading: "Pricing and SaaS pages",
        body: [
          "**12. Pricing page presentation.** Test the order of plans, which plan is highlighted, whether annual or monthly billing is the default view, and how plan differences are described. Keep it honest: no fake discounts or hidden fees. See [[/blogs/saas-pricing-page-optimization|SaaS pricing page optimisation]].",
          "**13. Showing prices versus \"Contact us\".** For services and B2B products, test publishing starting prices or ranges against asking visitors to enquire. Published prices may reduce enquiries but improve their quality. **Metric:** opportunities created.",
        ],
      },
      {
        heading: "Page structure and follow-through",
        body: [
          "**14. Navigation on landing pages.** For paid traffic with one clear action, test removing the main navigation. For organic traffic, visitors often want to check who you are first, so test carefully. See [[/blogs/landing-page-development|landing page development]].",
          "**15. What happens after the form.** Test showing a booking calendar immediately after submission against a thank-you message with a promise to follow up. *Hypothesis:* instant booking will increase meetings held. This is often one of the highest-impact tests on a B2B site because it affects what happens after the lead is captured.",
        ],
        cta: {
          title: "Not sure which test to run first?",
          description: "A [[/services/cro-audit|ZSpace Labs CRO audit]] reviews your analytics, forms and lead flow and produces a prioritised testing plan that fits your traffic.",
        },
      },
      {
        heading: "Test plan table",
        body: [],
        table: {
          headers: ["Element", "Primary metric", "Guardrail", "Traffic needed"],
          rows: [
            ["Headline and offer", "Qualified enquiries", "Bounce rate", "Medium"],
            ["Next-step offer", "Demos plus activated trials", "Sales-qualified leads", "Medium"],
            ["Lead magnet", "Leads captured", "Sales-qualified leads", "Medium"],
            ["CTA wording", "CTA click-to-submit", "Qualified enquiries", "High"],
            ["CTA placement", "Form starts", "Form completion rate", "High"],
            ["Number of fields", "Meetings booked", "Lead quality score", "Medium"],
            ["Single vs multi-step", "Form completions", "Meetings booked", "Medium"],
            ["Qualifying questions", "Sales time per lead", "Submissions", "Medium"],
            ["Reassurance near form", "Form completions", "Spam rate", "High"],
            ["Type of proof", "Enquiries", "Time on page", "High"],
            ["Placement of proof", "Enquiries", "Scroll depth", "High"],
            ["Pricing presentation", "Plan selected; trial starts", "Refunds and churn", "Medium"],
            ["Prices vs contact us", "Opportunities created", "Enquiry volume", "Medium"],
            ["Navigation on landing pages", "Conversions", "Pages per session", "Medium"],
            ["After-form booking", "Meetings held", "No-show rate", "Low to medium"],
          ],
        },
      },
      {
        heading: "Running the test properly",
        body: [],
        checklist: [
          "Write the hypothesis, primary metric, guardrail and minimum run time before launch.",
          "Calculate the sample size you need; if it would take months, choose a bigger change or another method.",
          "Run for whole weeks so weekday and weekend behaviour are both included.",
          "Do not stop early because one version is ahead.",
          "Check results by device and traffic source before rolling out.",
          "Record every test, including losers, so you do not repeat it. See [[/blogs/ecommerce-ab-testing-framework|a test plan standard for every experiment]].",
        ],
        callout: {
          type: "note",
          text: "Google Optimize ended on 30 September 2023. Options now include dedicated testing tools, testing built into platforms such as Webflow and Framer, and server-side tests in your own code.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "On lead generation and SaaS sites, the most useful tests change what visitors are offered and how easily they can act: the headline, the next-step offer, the form, the proof and what happens after submission. Measure qualified outcomes rather than raw submissions, check you have the traffic before you start, and prioritise with a simple framework; see [[/blogs/ecommerce-experiment-prioritization|how to prioritise experiments when you have more ideas than time]].",
        ],
      },
    ],
  },
];
