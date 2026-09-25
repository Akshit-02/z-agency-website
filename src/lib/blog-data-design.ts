import type { BlogPost } from "./blog-data";

/**
 * Product Design and UI/UX cluster (part one): the product design pillar,
 * its process, product design vs UX, the UI/UX pillar, UX process, UI
 * principles and user research. Same additive module pattern, merged into
 * `posts` in blog-data.ts.
 */

export const productDesignStagesTable = {
  headers: ["Stage", "Key question", "Typical outputs"],
  rows: [
    ["Discovery and research", "Who are the users and what problem matters most?", "Interviews, analytics review, competitor scan"],
    ["Define", "What exactly are we solving, for whom, and how will we know?", "Problem statement, personas, success metrics"],
    ["Ideate", "What are the possible solutions?", "Journey maps, concepts, sketches"],
    ["Structure", "How should content and features be organized?", "Information architecture, user flows"],
    ["Prototype", "What would the solution look and feel like?", "Wireframes, interactive prototypes"],
    ["Test and validate", "Does it work for real users?", "Usability test findings, revisions"],
    ["Design and systemize", "What does the finished interface look like at scale?", "UI design, design system"],
    ["Handoff and build", "Can engineering build it as intended?", "Specs, tokens, annotated components"],
    ["Measure and iterate", "Is it achieving the goal after launch?", "Product analytics, experiments, roadmap"],
  ],
};

export const designPosts: BlogPost[] = [
  // --------------------------------------------------------- PRODUCT DESIGN
  {
    slug: "product-design-guide",
    title: "Product Design: A Complete Guide to Designing Digital Products",
    excerpt:
      "What product design covers beyond visual interfaces, from discovery and research to prototyping, design systems, handoff and post-launch iteration.",
    category: "UI/UX",
    banner: "hub",
    date: "2026-10-19",
    readingTime: "16 min read",
    relatedServiceSlugs: ["ui-ux-design", "mobile-app-development", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "d2c-consumer"],
    faqs: [
      { q: "What is product design?", a: "Product design is the process of deciding what a digital product should do, for whom, and how it should work and look, from understanding the problem through research to shipping, measuring and improving the product." },
      { q: "Is product design the same as UI design?", a: "No. UI design focuses on the visual interface. Product design includes UI but also covers problem definition, research, user experience, business goals and how the product evolves after launch." },
      { q: "What does a product designer do?", a: "A product designer researches users, defines problems, maps flows, creates wireframes and prototypes, designs interfaces, tests with users, works closely with engineers and product managers, and uses data after launch to improve the product." },
      { q: "What is the difference between product design and product management?", a: "Product management owns what gets built and why from a business perspective, including priorities and roadmap. Product design owns how the product works for users. The two roles overlap and work closely together." },
      { q: "What skills does product design require?", a: "User research, interaction design, information architecture, visual and UI design, prototyping, usability testing, communication with engineering and product teams, and an understanding of business goals and metrics." },
      { q: "What tools do product designers use?", a: "Design and prototyping tools such as Figma, research and testing tools, analytics platforms, and collaboration tools. Tools change; the process and judgment matter more." },
      { q: "How long does product design take?", a: "It depends on scope. A focused feature may take weeks; a new product takes longer. Product design also continues after launch, since products are improved in cycles." },
      { q: "Do startups need product design?", a: "Yes, arguably more than established companies. Understanding users before building helps a startup avoid spending limited budget on features nobody needs." },
      { q: "How is product design measured?", a: "By outcomes: task success, activation, retention, conversion, support volume and satisfaction, not by how the screens look in isolation." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Product design is the end-to-end process of deciding what a digital product should do and how it should work for the people using it. It starts with discovery and user research, defines the problem and success metrics, explores solutions through flows, wireframes and prototypes, tests them with real users, designs the final interface and design system, supports engineering through handoff, and continues after launch with analytics and iteration. Visual design is one part of it, not the whole.",
        ],
      },
      {
        heading: "What Product Design Covers",
        body: [
          "Product design sits at the intersection of user needs, business goals and technical feasibility. A product designer asks whether a feature should exist at all before deciding how it looks. That's the main difference from interface-only work: product design is accountable for outcomes, such as users completing tasks, returning and paying, not just for polished screens.",
          "This guide is the hub for ZSpace's product design and UI/UX content. Each section links to a deeper guide.",
        ],
        visual: { variant: "grid", accent: "orange", caption: "Product design balances what users need, what the business needs and what can realistically be built." },
      },
      {
        heading: "The Product Design Stages",
        body: [
          "Most product design work moves through the same stages, often looping back as new evidence appears. The [[/blogs/product-design-process|product design process guide]] explains each in detail.",
        ],
        table: productDesignStagesTable,
      },
      {
        heading: "Product Discovery",
        body: [
          "Discovery decides what's worth building. It combines business context (goals, constraints, competitors) with evidence about users (what they're trying to do and what gets in their way). The output is a clear problem statement and a small set of prioritized opportunities, not a feature list.",
        ],
      },
      {
        heading: "User Research",
        body: [
          "Research replaces assumptions with evidence: interviews to understand motivations, analytics to see behavior at scale, usability tests to find where designs fail. The [[/blogs/user-research-methods|user research guide]] covers which methods fit which questions.",
        ],
      },
      {
        heading: "Problem Definition, Personas and Journey Maps",
        body: [
          "A good problem statement names the user, the need and the obstacle. Personas summarize research about distinct user groups so decisions stay grounded in real people. Journey maps show the steps, emotions and pain points across an experience, which reveals where design can help most. Both are only useful if they're based on research rather than guesswork.",
        ],
      },
      {
        heading: "Information Architecture and User Flows",
        body: [
          "Before screens, decide how content and features are organized and how users move through key tasks. Structure problems are expensive to fix after visual design and development. See [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Wireframes and Prototypes",
        body: [
          "Wireframes explore layout and hierarchy cheaply. Prototypes simulate interaction so ideas can be tested before they're built. The [[/blogs/wireframing-vs-prototyping|wireframing vs prototyping guide]] explains when to use each.",
        ],
        cta: {
          title: "Planning a new digital product?",
          description: "ZSpace's product and UI/UX design work starts with research and flows, so what gets designed is what users actually need.",
        },
      },
      {
        heading: "UI Design and Design Systems",
        body: [
          "UI design turns validated structure into a clear, consistent interface: hierarchy, typography, color, spacing, components and states. A design system captures those decisions as reusable tokens, components and patterns, so the product stays consistent as it grows. See [[/blogs/ui-design-principles|UI design principles]] and [[/blogs/design-systems-for-teams-that-move-fast|design systems]].",
        ],
      },
      {
        heading: "Usability Testing and Validation",
        body: [
          "Watching a handful of representative users attempt real tasks reveals problems no internal review will. Test early with prototypes and again before launch. The [[/blogs/usability-testing|usability testing guide]] covers planning, running and acting on tests.",
        ],
      },
      {
        heading: "Developer Handoff",
        body: [
          "Handoff is where many good designs lose quality. Shared components, design tokens, annotated states and design QA during development keep the built product close to the design. See [[/blogs/design-handoff|design handoff]].",
        ],
      },
      {
        heading: "Analytics, Iteration and Post-Launch Improvement",
        body: [
          "Launch is the start of learning. Product analytics show where users succeed and drop off; qualitative feedback explains why. Good teams treat design as continuous: measure, learn, adjust. For mobile products, see [[/blogs/mobile-app-analytics|mobile app analytics]].",
        ],
      },
      {
        heading: "Product Design for Websites, Apps and Commerce",
        body: [
          "The same process applies whether the product is a SaaS platform, a [[/blogs/mobile-app-development-guide|mobile app]], a [[/blogs/website-development-guide|business website]] or an [[/blogs/ecommerce-website-design|ecommerce store]]. What changes is the context: platform conventions, business model, and which user tasks matter most.",
        ],
      },
      {
        heading: "Common Product Design Mistakes",
        body: [],
        checklist: [
          "Designing screens before defining the problem",
          "Treating personas as marketing profiles rather than research summaries",
          "Skipping testing because the team \"already knows\" the users",
          "Designing one-off screens instead of reusable components",
          "Throwing designs over the wall to engineering",
          "Measuring success by visual polish instead of user outcomes",
        ],
        cta: {
          title: "Want an experienced product design partner?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|product and UI/UX design]], from discovery and prototypes to design systems and launch.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Product design is a way of making decisions: understand the problem, explore and test solutions, design a coherent interface, build it faithfully and keep improving it with evidence. The guides linked above go deeper into each stage, starting with the [[/blogs/product-design-process|product design process]].",
        ],
      },
    ],
  },

  // ------------------------------------------------- PRODUCT DESIGN PROCESS
  {
    slug: "product-design-process",
    title: "Product Design Process: From User Research to Launch",
    excerpt:
      "A practical, stage-by-stage product design process: research, define, ideate, prototype, test, build and iterate, with the outputs and decisions at each step.",
    category: "UI/UX",
    banner: "productdesignflow",
    date: "2026-10-19",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "startups"],
    faqs: [
      { q: "What are the steps of the product design process?", a: "Research, define, ideate, prototype, test, build and iterate. Teams often loop between stages as they learn, rather than moving strictly in sequence." },
      { q: "Is the product design process the same as design thinking?", a: "They're closely related. Design thinking describes a human-centered approach (empathize, define, ideate, prototype, test). The product design process applies it to shipping and improving a real product, including build and iteration." },
      { q: "What is the Double Diamond?", a: "A framework from the UK Design Council describing two phases of divergent then convergent thinking: first exploring and defining the problem, then exploring and delivering the solution." },
      { q: "How long does each stage take?", a: "It depends on the scope and risk. A small feature might move through research and prototyping in days; a new product might spend weeks in discovery. Match the effort to the uncertainty." },
      { q: "Can steps be skipped for small features?", a: "They can be scaled down, not skipped. Even a small feature benefits from a clear problem statement, a quick prototype and a check with a few users." },
      { q: "When should engineers get involved?", a: "Early. Engineers should see concepts during ideation to flag feasibility and cost, not only receive finished designs." },
      { q: "How do you know when to stop iterating?", a: "When the design meets the success criteria defined earlier, such as users completing key tasks without help, and remaining issues are lower priority than other work." },
      { q: "What happens after launch?", a: "Measure against the original success metrics, gather feedback, and feed findings into the next cycle of research and design." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A practical product design process runs: research the users and business context; define the problem and success metrics; ideate possible solutions; prototype the most promising ones; test them with real users; build the validated design with engineering; then measure and iterate after launch. It's a loop rather than a straight line: testing and analytics regularly send teams back to earlier stages. Scale each step to the risk involved rather than skipping any.",
        ],
      },
      {
        heading: "Why a Process Matters",
        body: [
          "Without a process, teams jump from idea to high-fidelity screens to code, and discover problems when they're most expensive to fix. A process front-loads cheap learning (conversations, sketches, prototypes) so expensive work (engineering) goes into ideas that have been checked. For the broader discipline, see the [[/blogs/product-design-guide|product design guide]].",
        ],
        visual: { variant: "funnel", accent: "blue", caption: "Research, define, ideate, prototype, test, build, iterate, with each stage cheaper to change than the next." },
      },
      {
        heading: "Frameworks Behind the Process",
        body: [
          "Two frameworks shape most modern practice. Design thinking frames the work around empathy, definition, ideation, prototyping and testing. The UK Design Council's [[https://www.designcouncil.org.uk/our-resources/the-double-diamond/|Double Diamond]] describes exploring widely then converging, twice: once on the problem, once on the solution. The stages below apply both to real product delivery.",
        ],
      },
      {
        heading: "1. Research",
        body: [
          "Understand users, context and business constraints. Combine qualitative methods (interviews, observation) with quantitative evidence (analytics, surveys) and a review of competitors and existing products. Outputs: research findings, early personas and journey maps. See [[/blogs/user-research-methods|user research methods]].",
        ],
      },
      {
        heading: "2. Define",
        body: [
          "Turn findings into a sharp problem statement: who has the problem, what they're trying to do, and what stops them. Agree on success metrics before designing, such as task completion, activation or conversion, so later decisions can be judged against them.",
        ],
      },
      {
        heading: "3. Ideate",
        body: [
          "Generate several possible solutions before committing to one. Sketching, journey mapping, workshops with engineering and product, and reviewing how others solve similar problems all help. Converge on a small number of concepts worth prototyping.",
        ],
      },
      {
        heading: "4. Prototype",
        body: [
          "Build the cheapest thing that can answer your riskiest question: paper sketches for structure, clickable wireframes for flows, high-fidelity prototypes for detailed interaction. The [[/blogs/wireframing-vs-prototyping|wireframing vs prototyping guide]] covers fidelity choices.",
        ],
        cta: {
          title: "Need help moving from idea to validated design?",
          description: "ZSpace runs research, prototyping and usability testing so your team builds with confidence.",
        },
      },
      {
        heading: "5. Test",
        body: [
          "Put prototypes in front of representative users and watch them attempt realistic tasks. Small, frequent tests find most serious issues. See [[/blogs/usability-testing|usability testing]] for how to plan and run them.",
        ],
      },
      {
        heading: "6. Build",
        body: [
          "Design the final UI within the design system, prepare specs and annotated states, and stay involved during development through design QA. The [[/blogs/design-handoff|design handoff guide]] covers what engineering needs.",
        ],
      },
      {
        heading: "7. Iterate",
        body: [
          "After launch, compare results with the success metrics from the define stage. Analytics show what happens; research and support conversations explain why. Findings feed the next cycle.",
        ],
      },
      {
        heading: "Stage Outputs at a Glance",
        body: [],
        table: {
          headers: ["Stage", "Main output", "Decision it supports"],
          rows: [
            ["Research", "Findings, personas, journey maps", "What problem to solve"],
            ["Define", "Problem statement, success metrics", "What success means"],
            ["Ideate", "Concepts, flows", "Which ideas to prototype"],
            ["Prototype", "Wireframes, clickable prototypes", "What to test"],
            ["Test", "Usability findings", "What to change before building"],
            ["Build", "Final UI, specs, design QA", "What ships"],
            ["Iterate", "Analytics, feedback", "What to improve next"],
          ],
        },
      },
      {
        heading: "Scaling the Process to the Work",
        body: [
          "A new product warrants weeks of discovery; a small feature might need a day of research and a quick prototype test. The principle is constant: the more uncertain and expensive the decision, the more evidence it deserves.",
        ],
      },
      {
        heading: "Common Process Mistakes",
        body: [],
        checklist: [
          "Skipping define, so nobody agrees what success looks like",
          "Prototyping only one idea",
          "Testing with colleagues instead of representative users",
          "Involving engineering only at handoff",
          "Treating launch as the end of design work",
        ],
        cta: {
          title: "Want to set up a product design process for your team?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|product and UI/UX design]] support that fits your product and pace.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Research, define, ideate, prototype, test, build and iterate: the stages are simple, and their value comes from doing each in proportion to the risk. Keep the loop tight and evidence-driven, and the product improves with every cycle.",
        ],
      },
    ],
  },

  // -------------------------------------------- PRODUCT DESIGN VS UX DESIGN
  {
    slug: "product-design-vs-ux-design",
    title: "Product Design vs UX Design: What's the Difference?",
    excerpt:
      "How product design and UX design overlap and differ in scope, responsibilities, skills and outcomes, and which one your team actually needs.",
    category: "UI/UX",
    banner: "compare3",
    date: "2026-10-19",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "startups", "fintech"],
    faqs: [
      { q: "Is product design the same as UX design?", a: "They overlap heavily. UX design focuses on how users experience and move through a product. Product design includes UX but also takes responsibility for business outcomes, product strategy input and the product's evolution over time." },
      { q: "Do product designers do UX?", a: "Yes. UX work such as research, flows, wireframes and testing is a core part of product design." },
      { q: "Do UX designers do UI?", a: "Sometimes. In smaller teams one person often covers both. In larger teams, UX and UI may be separate specialisms." },
      { q: "Which pays more, product design or UX design?", a: "It varies by market, seniority and company. Job titles are used inconsistently, so compare responsibilities rather than titles." },
      { q: "Which should a startup hire first?", a: "Usually a product designer who can cover research, UX and UI, since early teams need breadth more than specialization." },
      { q: "Is UI/UX design the same as product design?", a: "They're closely related. \"UI/UX design\" describes the interface and experience work; \"product design\" frames the same work around the product's success and business goals." },
      { q: "Can one person be both a product designer and a UX designer?", a: "Yes. Many designers hold both skill sets; the title often reflects the company's structure more than a different job." },
      { q: "What about service design?", a: "Service design looks beyond the digital product to the whole service, including offline touchpoints, operations and staff. It's broader again than product design." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "UX design focuses on how people experience a product: understanding users, structuring information, designing flows and making tasks easy to complete. Product design includes that UX work, plus UI design and a broader responsibility for the product's success, including business goals, prioritization input, metrics and iteration after launch. In practice the titles overlap and vary by company, so judge roles by their responsibilities rather than their names.",
        ],
      },
      {
        heading: "Why the Terms Get Confused",
        body: [
          "Companies use the titles inconsistently. A \"UX designer\" at one company does research, flows, UI and testing; a \"product designer\" at another does the same. The distinction is mostly about scope and accountability, not a completely different skill set.",
        ],
      },
      {
        heading: "Side-by-Side Comparison",
        body: [],
        table: {
          headers: ["Aspect", "UX design", "Product design"],
          rows: [
            ["Primary focus", "User experience and usability", "Product success across users and business"],
            ["Typical scope", "Research, IA, flows, wireframes, testing", "All of UX, plus UI, strategy input, metrics, iteration"],
            ["Accountable for", "Tasks being easy and effective", "Product outcomes such as activation, retention and revenue"],
            ["Works most with", "Researchers, UI designers, developers", "Product managers, engineers, stakeholders"],
            ["Time horizon", "Often project or feature based", "Ongoing ownership of product areas"],
            ["Common in", "Agencies, larger teams with specialists", "Product companies and startups"],
          ],
        },
        visual: { variant: "grid", accent: "blue", caption: "UX design sits inside product design, which adds UI, business context and ongoing ownership." },
      },
      {
        heading: "What UX Designers Do",
        body: [
          "UX designers study users, map journeys and flows, organize information, create wireframes and prototypes, and test them. Their question is: can people understand and use this easily? See the [[/blogs/ux-design-process|UX design process]] for the full workflow.",
        ],
      },
      {
        heading: "What Product Designers Do",
        body: [
          "Product designers do that UX work and carry it through to the final interface, then stay with the product after launch. They weigh business trade-offs, help prioritize, define success metrics with product managers, and use analytics to decide what to improve. See the [[/blogs/product-design-guide|product design guide]].",
        ],
        cta: {
          title: "Not sure what design support your product needs?",
          description: "ZSpace covers research, UX, UI and design systems, so you get the scope your product actually requires.",
        },
      },
      {
        heading: "Where UI Design Fits",
        body: [
          "UI design is the visual and interactive layer: typography, color, layout, components and states. Product designers usually handle UI; UX designers may or may not. The [[/blogs/ui-ux-design-guide|UI/UX design guide]] explains how UI and UX work together.",
        ],
      },
      {
        heading: "Which Does Your Team Need?",
        body: [],
        checklist: [
          "Early-stage product with a small team: a product designer who covers research, UX and UI",
          "Complex product with dedicated research needs: UX specialists alongside product designers",
          "Redesigning a specific flow or site: UX-focused work with UI support",
          "Growing product needing consistency: product designers plus a design system owner",
          "Unclear needs: start with a UX audit to find where problems actually are",
        ],
      },
      {
        heading: "Common Misconceptions",
        body: [
          "UX isn't only wireframes, and product design isn't only visual polish. Neither role replaces product management, which owns priorities and the roadmap. And no title guarantees research is done: ask how decisions are validated, whatever the job is called.",
        ],
        cta: {
          title: "Want an outside view of your product's UX?",
          description: "Talk to ZSpace about a [[/blogs/ux-audit|UX audit]] or ongoing [[/services/ui-ux-design|UI/UX design]] support.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "UX design makes products usable; product design makes usable products succeed. Most teams need both kinds of thinking, often in the same person. Focus on the responsibilities you need covered, not the title.",
        ],
      },
    ],
  },

  // -------------------------------------------------------- UI/UX PILLAR
  {
    slug: "ui-ux-design-guide",
    title: "UI/UX Design: A Complete Guide for Businesses",
    excerpt:
      "What UI and UX design each involve, how they work together, what good UI/UX looks like in practice, and how businesses should plan and evaluate design work.",
    category: "UI/UX",
    banner: "framework",
    date: "2026-10-20",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "d2c-consumer", "fintech"],
    faqs: [
      { q: "What is UI/UX design?", a: "UX (user experience) design shapes how a product works for users: structure, flows and ease of use. UI (user interface) design shapes how it looks and responds: layout, typography, color, components and interactions. Together they determine whether a product is easy and pleasant to use." },
      { q: "What is the difference between UI and UX?", a: "UX is about the overall experience and whether users can achieve their goals. UI is the visual and interactive layer they use to do it. A beautiful UI can still have poor UX, and vice versa." },
      { q: "Why does UI/UX design matter for businesses?", a: "Because it affects whether people complete purchases, sign up, find information and come back. Usability problems translate directly into lost conversions and higher support costs." },
      { q: "What does a UI/UX design project include?", a: "Typically research, information architecture, user flows, wireframes, prototypes, usability testing, UI design, a design system or component library, and handoff to development." },
      { q: "How much does UI/UX design cost?", a: "It depends on scope: number of flows and screens, research depth, whether a design system is needed, and platforms. Get estimates based on defined deliverables rather than page counts alone." },
      { q: "What are usability heuristics?", a: "Broad rules of thumb for interface design, the best known being Jakob Nielsen's 10 usability heuristics, such as visibility of system status, consistency and error prevention." },
      { q: "Does UI/UX affect SEO?", a: "Indirectly. Clear structure, fast and stable pages, and content people engage with support search performance, and page experience is part of how Google evaluates pages." },
      { q: "Should UI/UX design happen before development?", a: "Mostly, with overlap. Structure and key flows should be validated before build; detailed UI can progress in parallel with development using a shared component system." },
      { q: "How do you know if a design is good?", a: "Test it with representative users and measure outcomes after launch: task success, conversion, retention and support volume." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "UX design decides how a product works for its users (structure, navigation, flows and ease of completing tasks) while UI design decides how it looks and responds (layout, typography, color, components and states). Good UI/UX starts with research, organizes information around user goals, validates flows with prototypes and testing, and delivers a consistent interface through a design system. For businesses, it shows up in outcomes: more completed purchases and signups, fewer support requests and better retention.",
        ],
      },
      {
        heading: "UX and UI, Defined",
        body: [
          "UX covers everything a person experiences while using a product: can they find what they need, understand it, and complete their task? UI is the set of screens, controls and visual cues they interact with. UX without good UI feels clumsy; UI without good UX looks polished but frustrates. See [[/blogs/product-design-vs-ux-design|product design vs UX design]] for how these relate to product design.",
        ],
        visual: { variant: "grid", accent: "orange", caption: "UX shapes the structure and flow; UI shapes what users see and touch." },
      },
      {
        heading: "Usability Principles",
        body: [
          "Jakob Nielsen's [[https://www.nngroup.com/articles/ten-usability-heuristics/|10 usability heuristics]], first published in 1994 and still widely used, remain a practical checklist: keep users informed about system status, speak their language, give them control and easy undo, stay consistent, prevent errors, favor recognition over recall, support both new and expert users, keep designs focused, help users recover from errors, and provide help when needed.",
        ],
      },
      {
        heading: "Navigation and Information Architecture",
        body: [
          "Users can't use what they can't find. Organize content around how users think, label navigation in their language, and support search where content volume is high. See [[/blogs/information-architecture|information architecture]] and [[/blogs/website-navigation-and-ux|website navigation and UX]].",
        ],
      },
      {
        heading: "Interaction Design and Feedback",
        body: [
          "Every action should produce clear feedback: pressed states, progress indicators, confirmations and undo. Design every state of each screen, including empty, loading, error and success, not just the ideal one. Microinteractions, such as a subtle animation when an item is added to a cart, should communicate status rather than decorate.",
        ],
      },
      {
        heading: "Visual Hierarchy, Typography and Layout",
        body: [
          "Hierarchy tells users what matters first. Size, weight, contrast, spacing and position create it. Readable typography, consistent spacing and a clear grid make screens easier to scan. The [[/blogs/ui-design-principles|UI design principles guide]] covers these in detail.",
        ],
      },
      {
        heading: "Forms",
        body: [
          "Forms are where many conversions are won or lost. Ask only for what's needed, label fields clearly, use appropriate input types, validate inline with specific messages, and keep error messages next to the field. Every unnecessary field adds effort.",
        ],
        cta: {
          title: "Planning a website or product redesign?",
          description: "ZSpace's UI/UX design team starts with research and structure, then builds a consistent interface your developers can implement.",
        },
      },
      {
        heading: "Responsive Design and Accessibility",
        body: [
          "Interfaces must adapt to phones, tablets and desktops, and work for people with different abilities. Design these in from the start rather than retrofitting them. See [[/blogs/responsive-ui-design|responsive UI design]] and [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
      },
      {
        heading: "Components and Design Systems",
        body: [
          "Designing reusable components rather than one-off screens keeps interfaces consistent and speeds up both design and development. A design system documents those components with tokens, guidelines and patterns. See [[/blogs/design-systems-for-teams-that-move-fast|design systems]].",
        ],
      },
      {
        heading: "Prototyping and Testing",
        body: [
          "Prototypes let teams test flows before building them, and usability testing with a handful of users uncovers most serious problems. See [[/blogs/wireframing-vs-prototyping|wireframing vs prototyping]] and [[/blogs/usability-testing|usability testing]].",
        ],
      },
      {
        heading: "The UI/UX Process",
        body: [],
        table: {
          headers: ["Phase", "UX focus", "UI focus"],
          rows: [
            ["Research", "Users, goals, pain points", "Brand and visual context"],
            ["Structure", "Information architecture, flows", "Layout direction"],
            ["Wireframes", "Content and interaction", "Hierarchy"],
            ["Prototype and test", "Task success, usability issues", "Clarity of controls and feedback"],
            ["Final design", "States, edge cases", "Typography, color, components"],
            ["Handoff and QA", "Behavior specifications", "Tokens, specs, design QA"],
          ],
        },
      },
      {
        heading: "UI/UX and Business Outcomes",
        body: [
          "Design quality shows up in measurable outcomes: completed checkouts, signups, activation, retention, support volume. That's why UX work pairs naturally with [[/services/cro-audit|conversion optimization]]: CRO measures and tests; UX explains and redesigns. A [[/blogs/ux-audit|UX audit]] is often the best starting point for an existing product.",
        ],
      },
      {
        heading: "How to Evaluate UI/UX Work",
        body: [],
        checklist: [
          "Was the design based on research, not assumptions?",
          "Were key flows tested with representative users?",
          "Are all states designed, including errors and empty states?",
          "Does it meet accessibility requirements?",
          "Is it built from reusable components?",
          "Are success metrics defined and tracked after launch?",
        ],
        cta: {
          title: "Looking for a UI/UX design partner?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|UI/UX design]] for your website, app or product.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "UI/UX design is how a product becomes easy to understand and pleasant to use. Start with users and structure, validate before building, design every state, keep interfaces consistent through a system, and measure results. The linked guides go deeper into each part.",
        ],
      },
    ],
  },

  // ------------------------------------------------------ UX DESIGN PROCESS
  {
    slug: "ux-design-process",
    title: "UX Design Process: A Practical Step-by-Step Guide",
    excerpt:
      "A practical UX design process: research, information architecture, wireframes, prototypes, usability testing and refinement, with methods and deliverables at each step.",
    category: "UI/UX",
    banner: "uxprocessflow",
    date: "2026-10-20",
    readingTime: "13 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    faqs: [
      { q: "What are the steps in the UX design process?", a: "Research, information architecture, wireframing, prototyping, usability testing and refinement, repeated as needed. Some teams also include a define step between research and structure." },
      { q: "How is the UX process different from the product design process?", a: "The UX process focuses on the user experience work itself. The product design process wraps that work in business goals, final UI, build and post-launch iteration." },
      { q: "What deliverables come out of UX design?", a: "Research findings, personas or user archetypes, journey maps, sitemaps, user flows, wireframes, prototypes and usability test reports." },
      { q: "Do you need user research for every UX project?", a: "Some research, yes, scaled to the project. Even reviewing analytics and talking to a few users is far better than none." },
      { q: "How many rounds of testing are needed?", a: "Enough to fix the serious problems. NN/g recommends many small tests with around five users each over one large test." },
      { q: "Can the UX process work in agile teams?", a: "Yes. UX work usually runs slightly ahead of development, with research and prototypes feeding upcoming sprints." },
      { q: "Where does visual design fit?", a: "After structure and flows are validated. Visual design refines hierarchy and clarity; it shouldn't be used to hide unresolved structural problems." },
      { q: "What is a user flow?", a: "A diagram of the steps a user takes to complete a task, including decisions and alternative paths." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A practical UX design process has six steps: research users and context; structure information and flows (information architecture); sketch layouts as wireframes; build prototypes of key interactions; test them with representative users; and refine based on what you learn, repeating until key tasks succeed. It focuses on how the product works for users, before detailed visual design. Scale each step to the project, but don't skip research or testing entirely.",
        ],
      },
      {
        heading: "Step 1: Research",
        body: [
          "Start with what you already have: analytics, support tickets, reviews and sales conversations. Add interviews or observation to understand goals and frustrations. Summarize findings into user groups, key tasks and pain points. See [[/blogs/user-research-methods|user research methods]].",
        ],
        visual: { variant: "funnel", accent: "orange", caption: "Research, IA, wireframe, prototype, test, refine, then repeat until tasks succeed." },
      },
      {
        heading: "Step 2: Information Architecture",
        body: [
          "Decide how content and features are grouped, labeled and connected. Card sorting reveals how users group content; tree testing checks whether they can find things in a proposed structure. Outputs include a sitemap and user flows for key tasks. See [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Step 3: Wireframes",
        body: [
          "Wireframes lay out content and controls without visual styling, so discussions focus on hierarchy and function. Start low-fidelity to explore options quickly, and increase detail as decisions settle.",
        ],
      },
      {
        heading: "Step 4: Prototypes",
        body: [
          "Link wireframes or designs into clickable flows that simulate the real experience. Prototype the riskiest parts, such as a new checkout or onboarding flow, rather than every screen. See [[/blogs/wireframing-vs-prototyping|wireframing vs prototyping]].",
        ],
        cta: {
          title: "Need UX research and prototyping for a key flow?",
          description: "ZSpace can research, prototype and test your most important user journeys before development starts.",
        },
      },
      {
        heading: "Step 5: Usability Testing",
        body: [
          "Ask representative users to complete realistic tasks with the prototype while thinking aloud, and watch where they hesitate or fail. According to [[https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/|Nielsen Norman Group]], small tests of around five users per round, repeated, uncover most usability problems more efficiently than one large study. See [[/blogs/usability-testing|usability testing]].",
        ],
      },
      {
        heading: "Step 6: Refine",
        body: [
          "Prioritize issues by severity and frequency, fix them, and test again if changes are significant. Then move into detailed UI design and development, with the validated flows as the foundation.",
        ],
      },
      {
        heading: "Deliverables by Step",
        body: [],
        table: {
          headers: ["Step", "Methods", "Deliverables"],
          rows: [
            ["Research", "Interviews, analytics review, surveys", "Findings, user groups, pain points"],
            ["IA", "Card sorting, tree testing", "Sitemap, user flows"],
            ["Wireframe", "Sketching, low-fidelity layouts", "Wireframes"],
            ["Prototype", "Clickable flows", "Prototype"],
            ["Test", "Moderated or unmoderated usability tests", "Findings, severity ratings"],
            ["Refine", "Design iteration", "Updated designs, backlog"],
          ],
        },
      },
      {
        heading: "UX in Agile Teams",
        body: [
          "In agile teams, UX usually runs one or two sprints ahead: researching and prototyping upcoming features while developers build validated ones. Designers stay available during development to answer questions and review builds.",
        ],
      },
      {
        heading: "Connecting UX to Conversion",
        body: [
          "On websites and stores, UX problems often show up as conversion problems. Analytics and experiments tell you where; UX research tells you why. See [[/blogs/why-is-my-website-not-converting|why a website isn't converting]] and [[/blogs/ecommerce-website-design|ecommerce website design]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Starting in high fidelity, making feedback about visuals instead of flows",
          "Testing with colleagues rather than real users",
          "Designing only the happy path",
          "Leaving IA decisions until after visual design",
          "Running one big test instead of several small ones",
        ],
        cta: {
          title: "Want UX support embedded in your product team?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|UI/UX design]] that fits your sprints and roadmap.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Research, structure, wireframe, prototype, test and refine: each step reduces uncertainty cheaply before it becomes expensive. Keep tests small and frequent, design beyond the happy path, and connect UX decisions to measurable outcomes. For the broader picture, see the [[/blogs/ui-ux-design-guide|UI/UX design guide]].",
        ],
      },
    ],
  },

  // --------------------------------------------------- UI DESIGN PRINCIPLES
  {
    slug: "ui-design-principles",
    title: "UI Design Principles: How to Design Better Digital Interfaces",
    excerpt:
      "Practical principles for interface design: hierarchy, consistency, typography, spacing, layout, color, components, feedback, states and accessibility, with examples.",
    category: "UI/UX",
    banner: "ctahierarchy",
    date: "2026-10-20",
    readingTime: "13 min read",
    relatedServiceSlugs: ["ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "d2c-consumer", "fintech"],
    faqs: [
      { q: "What are the most important UI design principles?", a: "Clear visual hierarchy, consistency, readable typography, deliberate spacing and alignment, purposeful color, obvious affordances, immediate feedback, designed states, and accessibility." },
      { q: "What is visual hierarchy?", a: "The arrangement of elements so users notice the most important things first, created through size, weight, color, contrast, spacing and position." },
      { q: "How many fonts should an interface use?", a: "Usually one or two families with a limited, consistent set of sizes and weights. A defined type scale matters more than the number of fonts." },
      { q: "What is an affordance?", a: "A visual cue that suggests how something can be used, such as a button that looks pressable or a field that looks editable." },
      { q: "How should color be used in UI?", a: "Sparingly and consistently: a neutral base, a primary accent for key actions, and reserved colors for states like errors. Never rely on color alone to convey meaning." },
      { q: "What are UI states?", a: "The different conditions a component or screen can be in: default, hover, focus, pressed, disabled, loading, empty, error and success." },
      { q: "What is the difference between UI principles and heuristics?", a: "Heuristics like Nielsen's are broad usability rules. UI principles are more specific guidance on visual and interactive design that helps meet those heuristics." },
      { q: "Should UI follow platform guidelines?", a: "For apps, largely yes. Apple's Human Interface Guidelines and Google's Material Design describe conventions users already understand." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good UI design makes the important things obvious and the interface predictable. Establish a clear visual hierarchy, stay consistent in components and behavior, use a defined type scale and spacing system, apply color purposefully, make interactive elements look interactive, give immediate feedback for every action, design every state (loading, empty, error, success), and meet accessibility requirements. These principles turn a validated UX structure into an interface people can use without thinking.",
        ],
      },
      {
        heading: "1. Visual Hierarchy",
        body: [
          "Users scan before they read. Use size, weight, contrast, color and position to make the primary content and action stand out, and secondary elements recede. A useful test: blur the screen and see whether the most important element still stands out.",
          "Example: on a product page, the product name, price and add-to-cart button should dominate; delivery details and secondary links should be visible but quieter.",
        ],
        visual: { variant: "grid", accent: "orange", caption: "One clear primary action per view; secondary actions visibly subordinate." },
      },
      {
        heading: "2. Consistency",
        body: [
          "The same element should look and behave the same everywhere. Consistent buttons, icons, terminology and patterns let users transfer what they've learned between screens. A [[/blogs/design-systems-for-teams-that-move-fast|design system]] makes consistency practical at scale.",
        ],
      },
      {
        heading: "3. Typography",
        body: [
          "Define a type scale with a small number of sizes and weights, comfortable line lengths and line heights, and clear heading levels. Body text should be easily readable on every device. Typography carries most of the information in an interface, so it deserves more attention than decoration.",
        ],
      },
      {
        heading: "4. Spacing, Alignment and Layout",
        body: [
          "Use a consistent spacing scale and grid. Related items sit closer together; unrelated groups get more space. Aligned edges make screens feel orderly and easier to scan. Generous whitespace improves focus; cramming reduces comprehension.",
        ],
      },
      {
        heading: "5. Color",
        body: [
          "Build on a neutral base, use one primary accent for key actions, and reserve colors for meaning such as errors, warnings and success. Maintain sufficient contrast, and never rely on color alone to communicate: pair it with text or icons. See [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
        cta: {
          title: "Is your interface inconsistent or hard to scan?",
          description: "ZSpace can audit and redesign your UI around a clear hierarchy and a reusable component system.",
        },
      },
      {
        heading: "6. Affordances and Clear Controls",
        body: [
          "Buttons should look pressable, links should look like links, and inputs should look editable. Label actions with specific verbs (\"Save changes\", \"Place order\") instead of vague ones. Make touch targets large enough to tap reliably.",
        ],
      },
      {
        heading: "7. Feedback and Microinteractions",
        body: [
          "Every action needs a visible response: a pressed state, a spinner, a confirmation, an undo option. Microinteractions should communicate status, like an item appearing in the cart, not add decoration that slows users down.",
        ],
      },
      {
        heading: "8. Design Every State",
        body: [],
        table: {
          headers: ["State", "What to design"],
          rows: [
            ["Default", "The normal view with realistic content"],
            ["Hover and focus", "Clear, visible indication of the active element"],
            ["Loading", "Skeletons or progress that preserve layout"],
            ["Empty", "What goes here and how to start"],
            ["Error", "What went wrong and how to fix it, in plain language"],
            ["Success", "Confirmation and the next step"],
            ["Disabled", "Visibly inactive, with a reason where helpful"],
          ],
        },
      },
      {
        heading: "9. Responsive Behavior",
        body: [
          "Components should adapt gracefully across screen sizes, reflowing rather than shrinking. Design the smallest and largest layouts deliberately. See [[/blogs/responsive-ui-design|responsive UI design]].",
        ],
      },
      {
        heading: "10. Follow Platform Conventions",
        body: [
          "Users bring expectations from every other product they use. For apps, Apple's [[https://developer.apple.com/design/human-interface-guidelines/|Human Interface Guidelines]] and Google's [[https://m3.material.io/|Material Design]] describe the conventions to respect. For websites, familiar patterns such as a top-right cart or a clickable logo returning home reduce effort.",
        ],
      },
      {
        heading: "Common UI Mistakes",
        body: [],
        checklist: [
          "Several equally prominent calls to action",
          "Too many font sizes and weights",
          "Low-contrast text that looks elegant but is hard to read",
          "Icons without labels for important actions",
          "Only the ideal state designed",
          "Inconsistent components across screens",
        ],
        cta: {
          title: "Want a UI that's clear, consistent and easy to extend?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|UI/UX design]] and design systems for your product.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good UI is quiet: hierarchy guides attention, consistency builds confidence, feedback reassures, and designed states keep users oriented when things go wrong. Apply these principles on top of a validated structure, and the interface does its job without drawing attention to itself. See the [[/blogs/ui-ux-design-guide|UI/UX design guide]] for the wider process.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------- USER RESEARCH
  {
    slug: "user-research-methods",
    title: "User Research for Product Design: Methods, Process and Best Practices",
    excerpt:
      "How to plan and run user research: choosing between interviews, surveys, analytics, usability testing and more, recruiting participants, and turning findings into design decisions.",
    category: "UI/UX",
    banner: "journeymap",
    date: "2026-10-21",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "healthcare-healthtech", "fintech"],
    faqs: [
      { q: "What is user research?", a: "Systematic study of users' needs, behaviors and motivations to inform design decisions, using methods such as interviews, observation, surveys, analytics and usability testing." },
      { q: "What is the difference between qualitative and quantitative research?", a: "Qualitative research (interviews, usability tests) explains why people behave as they do, usually with small samples. Quantitative research (analytics, surveys) measures how many and how often, with larger samples." },
      { q: "What is the difference between attitudinal and behavioral research?", a: "Attitudinal research captures what people say (interviews, surveys). Behavioral research captures what they do (analytics, usability tests). What people say and do often differ." },
      { q: "How many users should I interview?", a: "Often five to eight per distinct user group is enough to see recurring patterns. Continue until you stop hearing new themes." },
      { q: "When should user research happen?", a: "Throughout: discovery research before defining the problem, evaluative research during design, and ongoing research after launch." },
      { q: "How do I recruit research participants?", a: "From existing customers, sign-up lists, recruitment panels or targeted outreach, screening for the behaviors and characteristics of your actual users." },
      { q: "Can research be done on a small budget?", a: "Yes. Analytics review, a handful of remote interviews and quick unmoderated tests can deliver valuable insight at low cost." },
      { q: "What are personas?", a: "Summaries of research about distinct user groups, describing their goals, contexts and pain points. They should be based on research, not invented." },
      { q: "How do you turn research into design decisions?", a: "Synthesize findings into themes, prioritize problems by impact, write clear problem statements, and share them with the whole team so decisions reference evidence." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "User research is the systematic study of users' goals, behaviors and pain points to guide design decisions. Choose methods by the question: interviews and observation to understand why people act as they do, surveys and analytics to measure how many and how often, and usability testing to check whether a design works. Recruit participants who match real users, keep studies small and frequent, synthesize findings into themes, and share them so product decisions rest on evidence rather than opinion.",
        ],
      },
      {
        heading: "Why User Research Matters",
        body: [
          "Teams are rarely representative of their users. Research exposes the gap between what the team assumes and what users actually need, before that gap becomes expensive in engineering time. It's the foundation of the [[/blogs/product-design-process|product design process]].",
        ],
      },
      {
        heading: "Types of Research",
        body: [
          "Two dimensions help choose methods: attitudinal (what people say) vs behavioral (what they do), and qualitative (why and how) vs quantitative (how many and how much). Nielsen Norman Group's [[https://www.nngroup.com/articles/which-ux-research-methods/|guide to choosing UX research methods]] maps many methods on these dimensions.",
        ],
        visual: { variant: "grid", accent: "blue", caption: "Match the method to the question: what people say vs do, and why vs how many." },
      },
      {
        heading: "Common Methods",
        body: [],
        table: {
          headers: ["Method", "Best for", "Type"],
          rows: [
            ["User interviews", "Goals, motivations, context, pain points", "Qualitative, attitudinal"],
            ["Contextual inquiry", "How people work in their real environment", "Qualitative, behavioral"],
            ["Surveys", "Measuring attitudes across many users", "Quantitative, attitudinal"],
            ["Analytics review", "What users do at scale, where they drop off", "Quantitative, behavioral"],
            ["Usability testing", "Whether a design works for real tasks", "Qualitative, behavioral"],
            ["Card sorting", "How users group and label content", "Qualitative or quantitative"],
            ["Tree testing", "Whether users can find items in a structure", "Quantitative, behavioral"],
            ["Diary studies", "Behavior over days or weeks", "Qualitative, behavioral"],
            ["A/B testing", "Which version performs better at scale", "Quantitative, behavioral"],
          ],
        },
      },
      {
        heading: "Research Across the Product Lifecycle",
        body: [
          "Discovery research, through interviews, observation and analytics, shapes what to build. Evaluative research, such as usability tests and tree tests, checks designs before launch. Post-launch research, such as analytics, surveys and support analysis, shows what to improve. Mature teams run all three continuously.",
        ],
      },
      {
        heading: "Planning a Study",
        body: [],
        checklist: [
          "Write the decision the research should inform",
          "List the specific questions to answer",
          "Choose methods that fit those questions",
          "Define who to recruit and how to screen",
          "Prepare a discussion guide or task list",
          "Decide how findings will be shared",
        ],
      },
      {
        heading: "Recruiting Participants",
        body: [
          "Recruit people who match your real users' behaviors, not just demographics. Existing customers, waitlists and recruitment panels are common sources. Screen out colleagues and friends, and compensate participants fairly for their time.",
        ],
        cta: {
          title: "Need research before your next big design decision?",
          description: "ZSpace plans and runs user research, from interviews to usability tests, and turns findings into design direction.",
        },
      },
      {
        heading: "Running Interviews",
        body: [
          "Ask about past behavior (\"Tell me about the last time you...\") rather than hypothetical preferences. Use open questions, follow up on specifics, and avoid leading questions or pitching your idea. Record, with consent, so you can listen rather than take notes.",
        ],
      },
      {
        heading: "Synthesis: From Notes to Insights",
        body: [
          "Group observations into themes (affinity mapping), look for patterns across participants, and write insights that link a behavior to its cause and a design implication. Personas and [[https://www.nngroup.com/articles/journey-mapping-101/|journey maps]] are useful ways to share these findings, as long as they're grounded in the research.",
        ],
      },
      {
        heading: "Research Ethics and Privacy",
        body: [
          "Get informed consent, explain how recordings and data will be used, store them securely, and minimize personal data. Research data is personal data, and privacy obligations vary by jurisdiction.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Asking users what features they want instead of observing their problems",
          "Leading questions that confirm existing ideas",
          "Recruiting people who don't match real users",
          "Relying only on surveys or only on analytics",
          "Research reports nobody reads or acts on",
        ],
        cta: {
          title: "Want research built into your product process?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|UI/UX design]] grounded in real user evidence.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good user research answers specific questions with the right methods, from representative people, and turns findings into decisions the whole team understands. Start small with analytics and a few interviews, then make research a habit. Next, see [[/blogs/usability-testing|usability testing]] and the [[/blogs/product-design-guide|product design guide]].",
        ],
      },
    ],
  },
];
