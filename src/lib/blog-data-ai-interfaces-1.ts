import type { BlogPost } from "./blog-data";

/**
 * AI interfaces cluster, part one (published 2026-10-08): generative UI,
 * AI assistant app UX (MCP Apps) and agent UX. Sources checked 2026-10-08:
 * MCP blog "MCP Apps" (official extension, 2026-01-26) and SEP-1865;
 * OpenAI Apps SDK UI guidelines; Google A2UI; AG-UI protocol docs.
 */

export const aiInterfacePosts1: BlogPost[] = [
  // ---------------------------------------- GENERATIVE UI
  {
    slug: "generative-ui",
    title: "Generative UI: What Happens When AI Starts Building the Interface?",
    seoTitle: "Generative UI: When AI Builds the Interface",
    excerpt:
      "What generative UI is, how AI selects and fills interface components safely within a design system, and where traditional UI remains the better choice.",
    category: "UI/UX",
    banner: "ainativecompare",
    sceneKind: "design",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["ai-interface-patterns", "ai-assistant-app-ux", "ai-ux-design"],
    faqs: [
      { q: "What is generative UI?", a: "Generative UI is an interface pattern in which an AI model decides, at runtime, which interface elements to show for a user's request (a form, a table, a chart, a set of options) and fills them with data, instead of every screen being designed and coded in advance." },
      { q: "Does generative UI mean the AI writes HTML or code?", a: "It should not in most products. The safer approach is structured generation: the model returns data that references approved components from your design system, and your application renders them. Generating and executing arbitrary code is a security and consistency risk." },
      { q: "Where does generative UI make sense?", a: "In open-ended tasks where the right view depends on the question: analytics questions, comparisons, configuration of complex products, multi-step tasks that need a temporary form, and assistants that must show structured results inside a conversation." },
      { q: "Where is traditional UI better?", a: "For frequent, well-understood tasks such as checkout, settings, navigation and core workflows. People rely on stable layouts and muscle memory there, and predictability matters more than flexibility." },
      { q: "How do you keep generative UI consistent with the brand?", a: "Constrain the model to a catalogue of design-system components with typed properties, validate every response against a schema, render with your own components and tokens, and test generated screens like any other UI." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Generative UI** is an interface in which an AI model chooses, at runtime, which interface elements to show for a request and fills them with data: a comparison table for 'compare these three plans', a short form for 'book a meeting with the supplier', a chart for 'how did returns change by month'. The screen is assembled for the task rather than designed in advance.",
          "Done well, the model does not write interface code. It returns **structured data** that references approved components from your design system, and your application renders them. Generative UI suits open-ended tasks where the right view depends on the question. It is a poor fit for frequent, well-understood flows such as checkout and settings, where stable layouts are a feature.",
        ],
      },
      {
        heading: "Static UI vs dynamic UI vs generative UI",
        body: [
          "Most software already has dynamic UI: the same screen shows different data and states. Generative UI goes one step further: the **structure** of the screen is chosen per request by a model.",
        ],
        table: {
          headers: ["", "Static UI", "Dynamic UI", "Generative UI"],
          rows: [
            ["Who decides the layout", "Designers, at build time", "Designers; data fills it", "A model, at runtime, within limits"],
            ["What changes per request", "Nothing", "Data and states", "Which components appear, and their data"],
            ["Predictability", "Highest", "High", "Lower; must be constrained"],
            ["Best for", "Core flows, navigation", "Dashboards, lists, accounts", "Open-ended questions and tasks"],
            ["Main risk", "Rigid for edge cases", "Complexity", "Inconsistent or misleading screens"],
          ],
        },
      },
      {
        heading: "What generative UI looks like in practice",
        body: [
          "**AI-generated components.** In an assistant, the answer to 'what are my open orders over 10,000?' becomes a sortable table with actions, not a paragraph. **AI-generated forms.** 'Change the delivery address for order 4471' produces a small form with the current address pre-filled and only the fields that matter. **AI-generated dashboards.** 'Show me how the campaign performed by region' assembles two charts and a summary card from approved chart types. **AI-generated visualisations.** The model picks a chart type and maps fields to axes, while your charting library draws it. **Component selection.** In every case, the model's real job is choosing from a menu: which component, which data, which actions.",
        ],
      },
      {
        heading: "Structured UI generation: how it works",
        body: [
          "The reliable pattern has four parts: a **component catalogue** the model can use, a **schema** for each component's properties, the model returning a **UI description** as structured output, and a **renderer** that validates and draws it with your real components. Google's open-source A2UI specification follows this approach: an agent describes the interface as declarative JSON, and the client renders it only from a catalogue of trusted components rather than executing generated code. Event protocols such as AG-UI carry agent state, tool progress and UI updates between an agent backend and the frontend. Getting the model to return valid UI descriptions is the same problem as any [[/blogs/llm-structured-outputs|structured output]], and rendering rich output safely in chat is covered in [[/blogs/ai-chat-interface-design|AI chat interface design]].",
        ],
        code: {
          label: "Generative UI architecture (diagram)",
          text: `User request ─▶ Model (with tool + component catalogue)
                    │
                    │ structured output, not code:
                    │ { component: "OrderTable",
                    │   props: { rows: [...], actions: ["track"] } }
                    ▼
           ┌──────────────────┐
           │ Validator         │ schema check · allowed components
           │                   │ · allowed actions · data from tools
           └────────┬─────────┘
                    ▼
           ┌──────────────────┐
           │ Renderer          │ design-system components + tokens
           └────────┬─────────┘
                    ▼
        Screen ─▶ user acts ─▶ action goes through normal APIs
                                (permissions, validation, audit)`,
        },
        callout: {
          type: "takeaway",
          text: "Let the model choose components and fill props. Never let it invent components, styles or actions. The design system is the contract.",
        },
      },
      {
        heading: "Safety and consistency",
        body: [
          "Generative UI introduces risks that static screens do not have. A model can choose a misleading chart, omit an important field, label a destructive action ambiguously or show data the user should not see. Treat generated UI as untrusted output:",
        ],
        checklist: [
          "Render only from an allowlist of components with typed, validated props",
          "Never execute generated HTML or JavaScript in your main application context",
          "Take data from tools and APIs, not from model text, so numbers are real",
          "Route every action a generated screen offers through the same APIs, permissions and confirmations as hand-built screens",
          "Fix labels and styles of consequential actions in the component, not in the prompt",
          "Fall back to plain text or a standard screen when validation fails",
          "Log what was generated so problems can be reproduced",
        ],
      },
      {
        heading: "Design systems and component constraints",
        body: [
          "Generative UI makes a design system more important, not less. Each component needs a clear purpose, a short description the model can read, a props schema with sensible limits (maximum rows, allowed chart types, required labels) and documented do's and don'ts. Start with a small catalogue: text, card, table, list, form, chart, confirmation. Add components only when a real request needs them. Designers move from drawing every screen to designing components, rules and examples, then reviewing samples of generated screens for quality. A well-run [[/blogs/design-systems-for-teams-that-move-fast|design system]] is the prerequisite.",
        ],
      },
      {
        heading: "Where generative UI makes sense, and where it does not",
        body: [],
        table: {
          headers: ["Good fit", "Poor fit"],
          rows: [
            ["Analytics and 'show me' questions", "Checkout and payment"],
            ["Comparing options with varying attributes", "Navigation and information architecture"],
            ["Temporary forms for one-off tasks", "Settings and account management"],
            ["Assistants that return structured results in a conversation", "High-frequency workflows people learn by heart"],
            ["Configurators with many optional paths", "Regulated disclosures and legal text"],
          ],
        },
        callout: {
          type: "note",
          text: "Not every interface should be generated. Most products will combine a stable core with generated views at the edges, where flexibility helps and predictability matters less.",
        },
      },
      {
        heading: "Generative UI inside AI assistants",
        body: [
          "A growing share of generative UI appears inside assistants rather than inside your own app. MCP Apps, an official extension of the Model Context Protocol, lets a tool return an interactive interface that hosts such as Claude and ChatGPT render in a sandbox. That is a related but different design problem, covered in [[/blogs/ai-assistant-app-ux|AI assistant app UX]].",
        ],
      },
      {
        heading: "How to start",
        body: [],
        checklist: [
          "Collect real requests where users struggle with fixed screens or long text answers",
          "Define a small component catalogue with schemas and descriptions",
          "Generate UI descriptions as structured output and validate them",
          "Use tools for data and existing APIs for actions",
          "Test with real questions; review a sample of generated screens weekly",
          "Measure task completion and errors against the non-generated version",
        ],
        cta: {
          title: "Designing AI features into a product?",
          description: "ZSpace Labs designs and builds AI interfaces on top of design systems, from component rules to the APIs behind them. See [[/services/ui-ux-design|UI/UX design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Generative UI lets a product show the right view for an open-ended request instead of forcing every task into a fixed screen or a wall of text. It works when the model selects from a constrained, well-described component catalogue, data comes from real systems and actions go through normal controls. Use it at the edges where flexibility helps, keep core flows stable and treat your design system as the contract. For how it fits with other patterns, see [[/blogs/ai-interface-patterns|AI interface patterns]] and [[/blogs/ai-ux-design|AI UX design]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI ASSISTANT APP UX
  {
    slug: "ai-assistant-app-ux",
    title: "AI Assistant App UX: Designing Interfaces That Run Inside ChatGPT, Claude and Other Assistants",
    seoTitle: "AI Assistant App UX: Designing UI Inside ChatGPT and Claude",
    excerpt:
      "How to design apps that render inside AI assistants with MCP Apps: when to show UI, inline vs fullscreen, state, actions and the limits of a sandbox.",
    category: "UI/UX",
    banner: "assistantintentflow",
    sceneKind: "chat",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce"],
    relatedSlugs: ["generative-ui", "apis-for-ai-agents", "model-context-protocol"],
    faqs: [
      { q: "What is an AI assistant app?", a: "It is a service you make available inside an AI assistant such as ChatGPT or Claude. The assistant calls your tools through the Model Context Protocol and, where supported, renders interactive interface components you provide alongside the conversation." },
      { q: "What are MCP Apps?", a: "MCP Apps is an official extension to the Model Context Protocol that lets an MCP server provide interactive HTML interfaces as ui:// resources linked to its tools. Supporting hosts render them in sandboxed iframes and let them communicate with the host over MCP." },
      { q: "Do assistant apps need a user interface at all?", a: "Not always. Many tasks work as plain tool results the assistant explains in text. Add UI when people need to compare options visually, choose, edit structured data, see a map or media, or confirm a consequential action." },
      { q: "Which assistants support MCP Apps?", a: "At the extension's launch in January 2026, the MCP maintainers listed Claude, Goose and Visual Studio Code Insiders, with ChatGPT rolling out. Support changes quickly, so check each host's documentation." },
      { q: "How is this different from designing a website?", a: "The conversation is the primary interface. Your UI is a guest: it appears briefly, in limited space, inside another product's design, and must work with the model, which can call tools and describe results without your UI." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An **AI assistant app** is your product's functionality made available inside an AI assistant. The assistant calls your tools through the Model Context Protocol and, where the host supports it, renders interactive components you provide: a product carousel, a booking form, a map, an approval card. **MCP Apps**, an official MCP extension announced in January 2026, standardizes how a server declares these interfaces as ui:// resources and how hosts render them in sandboxed iframes ([[https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/|MCP blog]]).",
          "Designing them is different from designing a website. Your UI is a guest inside someone else's conversation. Show the smallest interface that helps the user decide or act, let the model handle explanation, and route every consequential action through your normal backend controls.",
        ],
      },
      {
        heading: "How assistant apps work",
        body: [
          "The assistant (the host) connects to your MCP server, reads your tools and their metadata, and decides when to call them. A tool can point to a UI resource. When the tool runs, the host fetches that resource and renders it in a sandboxed iframe next to the conversation. The UI and the host exchange messages over MCP's JSON-RPC, so the UI can request further tool calls (subject to host rules and user consent) and update the model's context. OpenAI's Apps SDK, which helped shape the standard, documents display modes such as inline cards, inline carousels, fullscreen and picture-in-picture ([[https://developers.openai.com/apps-sdk/concepts/ui-guidelines|OpenAI Apps SDK UI guidelines]]).",
        ],
        code: {
          label: "AI assistant app architecture (diagram)",
          text: `User ◀──▶ AI assistant (host: chat UI + model)
                │  calls tool: search_rooms(city, dates)
                ▼
          Your MCP server ──▶ your APIs (inventory, pricing,
                │               booking, auth, audit)
                │ tool result + _meta: ui resource
                ▼
   Host renders ui://rooms/results in a sandboxed iframe
                │  user picks a room
                ▼
   UI requests tool call: hold_room(id)  → host may ask consent
                │
                ▼
   Model continues the conversation with the new state`,
        },
      },
      {
        heading: "When to show UI, and when text is enough",
        body: [
          "Text is the default in an assistant. UI earns its place when it makes a decision or action easier than words would.",
        ],
        table: {
          headers: ["Show UI when...", "Let text handle it when..."],
          rows: [
            ["People compare several options with images, prices or attributes", "There is one clear answer"],
            ["The user needs to pick, edit or fill structured fields", "The model can ask one clarifying question"],
            ["Spatial or visual content matters (maps, seats, media)", "The result is an explanation or summary"],
            ["A consequential action needs a clear review and confirmation", "The action is trivial and reversible"],
            ["Status of an ongoing task should stay visible", "The task finishes immediately"],
          ],
        },
      },
      {
        heading: "Choosing a display mode",
        body: [
          "Start with the smallest presentation that lets someone understand the result or complete the task, and escalate only when needed. An **inline card** suits one decision or a small amount of structured data. An **inline carousel** suits scanning a few similar options. **Fullscreen** suits tasks that need room: a map, an editor, detailed browsing. **Picture-in-picture** suits an ongoing activity. Avoid nested scrolling and long multi-tab interfaces inline; offer an inline summary with a way to expand.",
        ],
      },
      {
        heading: "Design principles for guest UI",
        body: [],
        checklist: [
          "**Be conversational-first:** the model explains; your UI shows and lets people act",
          "**Do one job per view:** one decision, one form, one comparison",
          "**Follow the host's look:** respect host theming and spacing so the UI feels native; keep your brand to content and small accents",
          "**Keep state in your backend:** the iframe can be reloaded or discarded; carts, holds and drafts must survive",
          "**Make actions explicit:** label buttons with outcomes ('Book room for 2 nights, $340'), not 'Submit'",
          "**Confirm consequential actions:** show what will happen and its cost before it happens; see AI action confirmation UX",
          "**Degrade gracefully:** every tool must also work without UI, in hosts that do not render it",
          "**Design for small widths and both themes**",
        ],
      },
      {
        heading: "State, context and the model",
        body: [
          "Three parties hold state: your backend (authoritative), the UI (what the user sees now) and the model (what it believes happened). Keep them aligned. When the user acts in the UI, send the change to your backend first, then report the new state to the host so the model's next message reflects it. Never let the model assume an action succeeded because a button was shown. Tool results should carry identifiers and timestamps so the model and the UI refer to the same objects.",
        ],
      },
      {
        heading: "Security and trust",
        body: [
          "MCP Apps run in sandboxed iframes with restricted permissions and declared content-security rules, and hosts can require user consent before UI-initiated tool calls. That protects the host, not your business logic. Enforce authorization, limits and validation on your server for every tool call, authenticate users with delegated OAuth where accounts are involved, and never put secrets in UI resources. See [[/blogs/apis-for-ai-agents|APIs and MCP servers for AI agents]] and [[/blogs/mcp-security|MCP security]].",
        ],
      },
      {
        heading: "Example: a hypothetical booking app",
        body: [
          "A hotel group exposes search_rooms, hold_room and book_room. 'Find me a quiet room in Lisbon for two nights next week' calls search_rooms, which returns an inline carousel of three rooms with photos, price and cancellation terms. The user taps one; the UI calls hold_room and shows a confirmation card with total price, dates and policy. Booking happens only after an explicit 'Book for $340' tap, which calls book_room on the server with idempotency and payment checks. In a host without UI support, the same tools work through text: the model lists the rooms and asks for confirmation in words.",
        ],
        cta: {
          title: "Bringing your product into AI assistants?",
          description: "ZSpace Labs designs and builds MCP servers and assistant app interfaces on top of existing APIs. See [[/services/ai-automation|AI automation]] and [[/services/ui-ux-design|UI/UX design]].",
        },
      },
      {
        heading: "Common mistakes",
        body: [
          "Porting a whole website into an iframe. Showing UI for every tool call. Keeping important state only in the iframe. Relying on the host's consent prompt instead of server-side authorization. Fighting the host's styling. And forgetting that the model can describe your results in its own words, so tool outputs must be accurate and unambiguous.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Assistant apps put your product where people already are, but on the assistant's terms. Design small, purposeful views that help people decide and act, keep state and rules on your server, confirm consequential actions clearly and make every tool useful without UI. It is the most practical form of [[/blogs/generative-ui|generative UI]] many businesses will ship first. For the wider pattern set, see [[/blogs/ai-interface-patterns|AI interface patterns]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AGENT UX
  {
    slug: "agent-ux-design",
    title: "Agent UX: How to Design Interfaces for AI Agents Instead of Human Users",
    seoTitle: "Agent UX: Designing Interfaces for AI Agents, Not Just People",
    excerpt:
      "Agent UX (AX) is designing actions, states, errors and feedback that AI agents can use reliably, with human confirmation and fallback built in.",
    category: "UI/UX",
    banner: "agentinterfaces",
    sceneKind: "agent",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce"],
    relatedSlugs: ["how-ai-agents-use-websites", "ai-agent-tool-design", "apis-for-ai-agents"],
    faqs: [
      { q: "What is agent UX?", a: "Agent UX, sometimes called agent experience (AX), is the design of the interfaces AI agents use to act on a product: the actions they can take, the data and states they read, the errors they receive and how they report progress and hand control back to people." },
      { q: "Is agent UX just making a website crawlable?", a: "No. Crawlability lets AI systems read content. Agent UX lets agents complete tasks: discover the right action, call it with valid inputs, understand the resulting state, recover from errors and stop for human confirmation when needed." },
      { q: "What is the difference between a human interface and an agent interface?", a: "Human interfaces rely on visual layout, recognition and forgiving interaction. Agent interfaces rely on explicit names, schemas, predictable states, machine-readable errors and stable identifiers. The same product usually needs both, backed by the same rules." },
      { q: "Do agents need confirmation steps?", a: "Yes, for consequential actions. Agent interfaces should make it easy for the agent to present a summary to its user and obtain approval before purchases, sends, deletions or other hard-to-undo actions." },
      { q: "How do you test agent UX?", a: "Run real agents against your interface with realistic tasks and measure task completion, invalid calls, retries, dead ends and how often they need human help. Read their transcripts the way you would watch usability sessions." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Agent UX** (also called **agent experience**, or AX) is the design of the interfaces AI agents use to act on your product. Where human UX is about layout, recognition and forgiving interaction, agent UX is about **machine-readable actions**, **predictable states**, **structured data**, **clear action schemas**, **explicit errors**, **permissions**, **task status**, **feedback** and **a path back to a human**.",
          "It is not the same as making a website crawlable. Crawling lets an AI read your content. Agent UX lets an agent complete a task on behalf of a person, safely, and know when it has succeeded.",
        ],
      },
      {
        heading: "Human interface vs agent interface",
        body: [],
        table: {
          headers: ["", "Human interface", "Agent interface"],
          rows: [
            ["Finds actions by", "Seeing buttons and menus", "Reading action names, descriptions and schemas"],
            ["Understands state from", "Visual cues and context", "Explicit status fields and identifiers"],
            ["Handles ambiguity by", "Judgment and asking", "Following documented rules or failing"],
            ["Recovers from errors via", "Messages and retrying", "Typed error codes with next steps"],
            ["Knows a task is done when", "It sees a confirmation", "It receives a final state and receipt"],
            ["Needs confirmation for", "Consequential actions", "The same, routed to its user"],
          ],
        },
        callout: {
          type: "note",
          text: "Agents reach your product through three surfaces: your website (via screenshots and the accessibility tree), your APIs, and MCP servers. Agent UX applies to all three; the principles are the same.",
        },
      },
      {
        heading: "Machine-readable actions",
        body: [
          "Every task an agent should be able to complete needs an action it can find and understand: a well-named tool or endpoint (cancel_order, not process), a one-paragraph description of when to use it and what it does, and input and output schemas with types, allowed values and examples. On websites, the equivalent is semantic HTML, labelled controls and an accurate accessibility tree; see [[/blogs/how-ai-agents-use-websites|how AI agents use websites]]. For tool naming and granularity, see [[/blogs/ai-agent-tool-design|AI agent tool design]].",
        ],
      },
      {
        heading: "Predictable states and structured data",
        body: [
          "Agents reason about state far better when it is explicit. Give every object a stable ID and a status from a closed list (pending, confirmed, shipped, cancelled) rather than prose ('should arrive soon'). Return the fields an agent needs to decide the next step, with units, currencies and timestamps. Make state transitions documented and consistent: the same action in the same state always produces the same result.",
        ],
      },
      {
        heading: "Errors agents can act on",
        body: [
          "A human can interpret 'Something went wrong'. An agent cannot. Errors should say what failed, whether retrying can help, and what to do instead.",
        ],
        code: {
          label: "An agent-friendly error (illustrative)",
          text: `{
  "error": {
    "type": "invalid_request",
    "code": "item_out_of_stock",
    "message": "Size 42 is out of stock.",
    "param": "items[0].variant_id",
    "retryable": false,
    "suggestions": [
      { "variant_id": "v_43", "label": "Size 43", "in_stock": true }
    ],
    "requires_user_input": true
  }
}`,
        },
      },
      {
        heading: "Permissions, confirmation and human fallback",
        body: [
          "Agents act for someone. Your interface should know who (delegated identity, scoped permissions) and should make consequential actions a two-step process: the agent prepares the action and receives a summary it can show its user, then commits only after approval. Provide a clear path back to a human when the agent cannot proceed: a continue URL to finish on your website, a handoff to support with context, or a state that the user can resume. See [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]] and [[/blogs/ai-agent-handoffs|AI agent handoffs]].",
        ],
      },
      {
        heading: "Task status and agent feedback",
        body: [
          "Long tasks need a status the agent can poll or subscribe to, with progress and a final result. Return a receipt when a task completes: what was done, identifiers, amounts, and how to undo or contact support. Collect feedback from agent traffic too: log failed calls, invalid parameters and abandoned flows, and treat them as usability findings.",
        ],
        code: {
          label: "Agent UX flow (diagram)",
          text: `Agent receives goal from user
   │
   ▼
Discover action ── names, descriptions, schemas
   │
   ▼
Read state ── IDs, status enums, timestamps
   │
   ▼
Prepare action ── validated inputs → summary for user
   │                         │
   │                 needs approval? ──▶ user confirms
   ▼
Commit ── idempotent; returns final state + receipt
   │
   ├─ error ──▶ typed code · retryable? · suggestions
   └─ stuck ──▶ continue_url / human handoff`,
        },
      },
      {
        heading: "An agent UX checklist",
        body: [],
        checklist: [
          "Every key task has a discoverable, well-described action",
          "Inputs and outputs have schemas with types, enums and examples",
          "Objects have stable IDs and status from a closed list",
          "Errors are typed, say whether to retry and suggest next steps",
          "Consequential actions separate prepare from commit, with a user-facing summary",
          "Writes are idempotent so retries cannot duplicate orders or messages",
          "Long tasks expose status and a final receipt",
          "Permissions follow the user the agent acts for",
          "There is always a path to finish with a human or on the website",
          "Agent traffic is logged and reviewed for failure patterns",
        ],
      },
      {
        heading: "How to test it",
        body: [
          "Give real agents realistic tasks against a test environment and read the transcripts. Measure task completion, invalid calls, retries, dead ends, time to complete and how often a human had to step in. Fix the interface (names, descriptions, errors, states) before blaming the model. The same tests become a regression suite as your product changes.",
        ],
        cta: {
          title: "Making your product usable by AI agents?",
          description: "ZSpace Labs designs agent-ready websites, APIs and MCP servers with human confirmation built in. See [[/services/website-development|website development]] and [[/services/ui-ux-design|UI/UX design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agent UX treats AI agents as a real class of users with different needs: explicit actions, predictable states, actionable errors, visible status and a safe way to involve their human. Design for them deliberately, on the same rules and data as your human interface, and test with real agents. For the human side of these interactions, see [[/blogs/ai-agent-trust-ux|AI agent trust UX]] and the broader [[/blogs/ai-interface-patterns|AI interface patterns]].",
        ],
      },
    ],
  },
];
