import type { BlogPost } from "./blog-data";

/**
 * Mobile + AI spokes (October 2026 batch) under the existing pillar
 * ai-powered-mobile-app-development. Candidate "AI-native mobile apps" was
 * replaced by assistant integration (App Intents / AppFunctions) because the
 * pillar and the on-device article already cover what an AI-native app is.
 * Facts checked 2026-10-07 against Apple's WWDC26 iOS guide and Foundation
 * Models / App Intents documentation, and the Android Developers blog
 * (Google I/O 2026) and AppFunctions documentation. Merged into `posts`.
 */

export const mobileAiPosts: BlogPost[] = [
  // ---------------------------------------- ON-DEVICE AI IN MOBILE APPS
  {
    slug: "on-device-ai-mobile-apps",
    title: "On-Device AI in Mobile Apps: What You Can Build Without Cloud AI (and When You Still Need It)",
    seoTitle: "On-Device AI in Mobile Apps: What You Can Build and When to Use Cloud",
    excerpt:
      "What on-device AI can do in iOS and Android apps in 2026, its limits, the cost and privacy case, and hybrid patterns that fall back to the cloud.",
    category: "Mobile Apps",
    banner: "ondeviceflow",
    bannerAlt:
      "Hybrid mobile AI: User input, Device capable?, On-device model (highlighted), Structured output, Response; unsupported devices branch to a cloud fallback.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["mobile-app-development", "ai-automation"],
    relatedIndustrySlugs: ["healthcare-healthtech", "fintech", "education-edtech"],
    relatedSlugs: ["ai-powered-mobile-app-development", "mobile-app-ai-assistant-integration", "offline-first-mobile-app-development"],
    faqs: [
      { q: "What is on-device AI?", a: "Running an AI model on the phone itself rather than sending data to a server. The model processes input locally, so it can work offline, respond without network delay and keep data on the device." },
      { q: "Which on-device AI options exist for app developers?", a: "On iOS, Apple's Foundation Models framework gives access to the on-device model behind Apple Intelligence, alongside Core ML for custom models. On Android, ML Kit's GenAI APIs and Prompt API use Gemini Nano through AICore on supported devices, and LiteRT runs custom models. Cross-platform apps can call these through native modules." },
      { q: "Is on-device AI free?", a: "There are no per-request API fees for platform models running on the device, which changes the economics of high-volume features. Development, testing across devices and the effort of designing within smaller models are still real costs." },
      { q: "What can't on-device models do well?", a: "Tasks needing broad world knowledge, long documents, complex reasoning, up-to-date information or high accuracy on specialist content. On-device models are smaller than cloud models and are best at focused tasks such as summarizing, extracting, classifying and rewriting." },
      { q: "Does on-device AI work on all phones?", a: "No. Platform language models require recent, capable devices with AI features enabled. Apps need to check availability at runtime and offer a fallback, such as a cloud model or a non-AI path." },
      { q: "Can React Native or Flutter apps use on-device AI?", a: "Yes, through native modules or plugins that call the platform frameworks, or through cross-platform runtimes for custom models. Platform models still behave differently on iOS and Android, so test and design per platform." },
      { q: "Is on-device AI automatically private?", a: "Processing stays on the device, which helps a lot. Privacy still depends on what the app does with results: what it stores, syncs, logs or sends to analytics." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "On-device AI runs models on the phone, which means features work offline, respond instantly, keep data on the device and cost nothing per request. In 2026 both platforms provide built-in language models: Apple's Foundation Models framework (on Apple Intelligence devices) and Gemini Nano through ML Kit's GenAI APIs and Prompt API (on supported Android devices), plus Core ML and LiteRT for custom models. They are excellent for focused tasks (summarizing, extracting fields, classifying, rewriting, tagging images) and weak at broad knowledge, long context and complex reasoning. Most apps should use a hybrid design: on-device first where it is good enough and the device supports it, with a cloud model or non-AI path as fallback.",
        ],
      },
      {
        heading: "Why on-device AI matters for businesses",
        body: [
          "Cloud AI is powerful but has three costs that matter in mobile products: every request costs money, every request needs a network connection, and every request sends user data to a server. On-device models remove all three for the tasks they can handle.",
        ],
        table: {
          headers: ["Benefit", "What it means in practice"],
          rows: [
            ["No per-request cost", "High-volume features (classifying every note, tagging every photo) become affordable at any scale"],
            ["Works offline", "Field service, travel, healthcare visits and poor-coverage regions keep working"],
            ["Low latency", "Instant suggestions while typing, no spinner waiting for a server"],
            ["Data stays on device", "Simpler privacy story for health, finance, personal notes and children's apps"],
            ["Fewer moving parts", "No AI backend to scale for these features"],
          ],
        },
      },
      {
        heading: "What the platforms offer in 2026",
        body: [
          "**Apple.** The Foundation Models framework is a Swift API that gives apps direct access to the on-device model that powers Apple Intelligence. Apple's iOS 27 guidance adds multimodal prompts (images with text), on-device Vision tools such as OCR and barcode reading that the model can call, Dynamic Profiles to switch models, tools and instructions within a session, and an Evaluations framework for testing AI features. The framework now also accepts other models through a common protocol, including cloud models, so one API can route between on-device and server models. Apple also offers its larger models on Private Cloud Compute, at no cloud API cost for developers in the App Store Small Business Program with fewer than two million first-time downloads.",
          "**Android.** ML Kit's GenAI APIs provide task-specific features (such as summarization, proofreading, rewriting and image description) and a Prompt API for custom prompts, running Gemini Nano through AICore on supported devices. Google announced at I/O 2026 a Structured Output API for the Prompt API, prefix caching, and Gemini Nano 4 in developer preview ahead of flagship devices later in 2026. Firebase AI Logic supports hybrid inference with explicit modes to prefer or require on-device or cloud models.",
          "**Custom models.** For specialist tasks (defect detection, document classification, wake words), Core ML on iOS and LiteRT on Android run models you train or adapt yourself.",
        ],
        callout: {
          type: "note",
          text: "Platform capabilities, device support and API names change with each OS release. The details above reflect Apple's WWDC26 iOS guide and the Android Developers blog from Google I/O 2026; check current documentation before committing to a design.",
        },
      },
      {
        heading: "What on-device models are good at, and what they are not",
        body: [
          "Platform on-device language models are small compared with frontier cloud models. That shapes what to use them for.",
        ],
        table: {
          headers: ["Good fit on device", "Better in the cloud"],
          rows: [
            ["Summarizing a note, message or short document", "Summarizing long reports or many documents"],
            ["Extracting fields into a structured form", "Answering questions that need broad world knowledge"],
            ["Classifying and tagging content", "Multi-step reasoning and planning"],
            ["Rewriting tone, proofreading, short replies", "Long-form generation needing high factual accuracy"],
            ["Image description, OCR, barcode reading", "Up-to-date information and web search"],
            ["Smart suggestions while typing", "Specialist domains needing large models or retrieval over big knowledge bases"],
          ],
        },
        callout: {
          type: "tip",
          text: "Design on-device features as narrow, structured tasks with constrained outputs (a category, a set of fields, a short summary). Both platforms now support guided or structured output, which makes small models far more reliable.",
        },
      },
      {
        heading: "Hybrid patterns that work",
        body: [
          "Few apps should be all on-device or all cloud. Common patterns:",
        ],
        table: {
          headers: ["Pattern", "How it works", "Example"],
          rows: [
            ["On-device first, cloud fallback", "Use the local model if available and confident; otherwise call the cloud", "Note summaries that escalate long notes to a cloud model"],
            ["Split by sensitivity", "Sensitive data processed locally; non-sensitive tasks in the cloud", "Health app extracts symptoms locally, fetches general guidance from a server"],
            ["Local pre-processing", "Device extracts, redacts or condenses before anything is sent", "Remove personal details from a document before cloud analysis"],
            ["Offline mode", "Local model while offline, cloud features when connected", "Field inspection app tags photos offline and syncs later"],
            ["Tiered by device", "Capable devices run locally; older devices use cloud or a simpler feature", "Smart replies on new phones, templates on older ones"],
          ],
        },
        cta: {
          title: "Planning AI features for a mobile app?",
          description: "ZSpace Labs designs and builds on-device, cloud and hybrid AI features for iOS, Android and React Native apps. See [[/services/mobile-app-development|mobile app development services]].",
        },
      },
      {
        heading: "Device coverage is the biggest constraint",
        body: [
          "Platform language models only run on recent devices with AI features enabled, in supported languages and regions, and models may still be downloading after a user enables them. Your app must check availability at runtime and handle every outcome: available, not supported, not enabled, not ready yet. Look at your own analytics to see what share of active users have capable devices; for many consumer apps in price-sensitive markets it will be a minority for some time.",
          "That makes the fallback design a product decision, not an afterthought. Decide whether users without on-device support get a cloud version (with its cost and privacy implications), a simpler non-AI version, or no feature.",
        ],
      },
      {
        heading: "Cost, performance and battery",
        body: [
          "On-device inference has no API bill, but it uses memory, processor time and battery. Keep prompts and outputs short, avoid running models in tight loops, batch background work, and measure on real low-end supported devices rather than the newest phone on the team. For custom models, size and quantization matter for download size and memory; our [[/blogs/ai-edge-deployment|AI edge deployment guide]] covers model compression.",
          "On the development side, budget for testing across devices and OS versions, evaluating output quality with realistic data, and building and maintaining the fallback path.",
        ],
      },
      {
        heading: "Privacy and trust",
        body: [
          "On-device processing is a genuine privacy advantage and worth stating clearly in your product and privacy policy. It is not a complete answer. Results can still be stored, synced, logged or sent to analytics, and hybrid features may send some data to the cloud. Be precise in what you tell users about which features run where. See [[/blogs/mobile-app-data-privacy|mobile app data privacy]].",
        ],
      },
      {
        heading: "Cross-platform apps",
        body: [
          "React Native and Flutter apps can use platform models through native modules or plugins, and custom models through cross-platform runtimes. Because Apple's and Google's models differ in capability, prompt behaviour and availability, build a thin abstraction (a `summarize` or `extractFields` function) with platform-specific implementations, and evaluate output quality on each platform separately. See [[/blogs/react-native-app-development|React Native app development]].",
        ],
      },
      {
        heading: "How to decide, step by step",
        body: [],
        checklist: [
          "**List candidate AI features** and the data each one touches",
          "**Classify each task:** focused and structured (on-device candidate) or broad and knowledge-heavy (cloud)",
          "**Check your device mix** against platform model requirements",
          "**Prototype on device** with real data and measure quality, latency and battery",
          "**Design the fallback** for unsupported devices and low-confidence results",
          "**Decide what is stored or synced** and update privacy disclosures",
          "**Plan for OS updates:** platform models and APIs change yearly",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "On-device AI is now a practical choice for focused features that need to be fast, private, offline-capable or affordable at volume. It is not a replacement for cloud models, and device coverage limits who gets it. Design narrow tasks with structured outputs, route intelligently between device and cloud, and treat the fallback as part of the product. For the wider picture of AI in mobile apps, see [[/blogs/ai-powered-mobile-app-development|AI-powered mobile app development]], and to let assistants use your app's features, see [[/blogs/mobile-app-ai-assistant-integration|App Intents and AppFunctions]].",
        ],
      },
    ],
  },

  // ---------------------------------------- APP INTENTS AND APPFUNCTIONS
  {
    slug: "mobile-app-ai-assistant-integration",
    title: "Making Your App Usable by Siri, Gemini and AI Assistants: App Intents and AppFunctions",
    seoTitle: "App Intents and AppFunctions: Making Your App Usable by AI Assistants",
    excerpt:
      "How Siri, Gemini and AI assistants act inside apps through App Intents and AppFunctions, which actions to expose and how to keep them safe.",
    category: "Mobile Apps",
    sceneKind: "mobile",
    banner: "assistantintentflow",
    bannerAlt:
      "An assistant using an app's actions: User asks, Assistant, Finds app action (highlighted), App runs it, Confirm if needed, Result shown.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["travel-hospitality", "fintech", "d2c-consumer"],
    relatedSlugs: ["on-device-ai-mobile-apps", "how-ai-agents-use-websites", "mobile-app-deep-linking"],
    faqs: [
      { q: "What are App Intents?", a: "Apple's framework for describing your app's actions and content to the system, so they can be used by Siri, Shortcuts, Spotlight, widgets and Apple Intelligence. In iOS 27, entity and intent schemas let Siri surface your content and act on it without fixed phrases." },
      { q: "What are Android AppFunctions?", a: "An Android platform API and Jetpack library that lets an app expose self-describing functions that agents and assistants such as Gemini can discover and call. Google describes it as letting an app act as an on-device MCP server. It was in experimental preview in 2026." },
      { q: "Why would I let an assistant control my app?", a: "Because users increasingly ask assistants to get things done. If your app's actions are available to the assistant, your app is used; if not, the assistant may use a competitor's app or website instead." },
      { q: "Is it safe to expose app actions to assistants?", a: "Yes, if you expose the right actions with the right safeguards: read-only and low-risk actions first, confirmation for anything consequential, authentication respected, and no actions that bypass your app's normal rules." },
      { q: "Do I need on-device AI to support App Intents or AppFunctions?", a: "No. The assistant does the language understanding. Your app describes actions and implements them; it does not need its own model." },
      { q: "Can React Native or Flutter apps support these?", a: "Yes, through native code. App Intents are written in Swift and AppFunctions in Kotlin; cross-platform apps add a native layer that calls into shared business logic." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI assistants are moving from answering questions to doing things inside apps. On iOS, **App Intents** describe your app's actions and content so Siri, Spotlight, Shortcuts and Apple Intelligence can use them; iOS 27 adds entity and intent schemas that let Siri act on your content without predefined phrases. On Android, **AppFunctions** let apps expose functions that Gemini and other agents can discover and call, effectively turning the app into an on-device MCP server (experimental preview in 2026). Start by exposing a few high-value, low-risk actions and your key content, require confirmation for anything consequential, and design the actions to follow the same rules as your UI.",
        ],
      },
      {
        heading: "Why this matters now",
        body: [
          "On the web, AI agents are starting to browse sites and complete tasks for people (see [[/blogs/how-ai-agents-use-websites|how AI agents use websites]]). On phones the same shift is happening through the operating system. Rather than a user opening five apps, they ask the assistant to \"reorder last week's groceries\", \"show my next booking\" or \"send the invoice to the client\", and the assistant calls the app that can do it.",
          "Apps that describe their actions to the system become the ones assistants use. Apps that do not are reachable only by a person tapping through screens, which is fine today but increasingly a disadvantage.",
        ],
      },
      {
        heading: "Apple: App Intents and Siri",
        body: [
          "App Intents is Apple's framework for exposing actions (intents), content (entities) and queries to the system. It already powers Shortcuts, Spotlight actions, widgets, Control Center controls and Siri. Apple's WWDC26 guidance for iOS 27 extends it for Apple Intelligence:",
        ],
        checklist: [
          "**Entity schemas** contribute your app's content to the Spotlight semantic index, so Siri can surface it with attribution back to your app",
          "**Intent schemas** let people act on that content in natural language, with no specific phrases to define and no code changes as Siri's language understanding expands",
          "**View Annotations** map on-screen views to entities, so people can refer to and act on what is on screen conversationally",
          "**App Intents Testing framework** validates the integration through real system pathways without UI automation",
        ],
      },
      {
        heading: "Android: AppFunctions and Gemini",
        body: [
          "AppFunctions is an Android platform API with a Jetpack library. An app declares self-describing functions, which register with an OS-level registry so that authorized callers (assistants such as Gemini, and other agents) can discover and execute them, in the background and without opening the UI. Google describes it as allowing your application to act as an on-device Model Context Protocol (MCP) server.",
          "Status matters here. At Google I/O 2026, AppFunctions was in experimental preview, with a test agent for debugging and an early access programme for production deployment; it targets Android 16 and later. Samsung's Gallery integration with Gemini on the Galaxy S26 series was an early public example. Plan for it, prototype it, but expect APIs to change before general availability.",
        ],
        callout: {
          type: "note",
          text: "Platform status reflects Apple's WWDC26 iOS guide and the Android Developers blog from Google I/O 2026, as of October 2026. Check current documentation before scheduling production work.",
        },
      },
      {
        heading: "Which actions to expose first",
        body: [
          "Do not try to expose everything. Pick actions users repeat often, that are tedious to reach by tapping, and that are safe or easily confirmed.",
        ],
        table: {
          headers: ["App type", "Good first actions", "Hold back or require confirmation"],
          rows: [
            ["Ecommerce", "Track order, reorder a past order to cart, check stock", "Placing paid orders, changing addresses"],
            ["Travel and hospitality", "Show next booking, check-in details, add to calendar", "Cancellations with fees, payments"],
            ["Banking and fintech", "Show balance summary, recent transactions, spending category", "Transfers, payee changes (with strong authentication)"],
            ["Health and fitness", "Log water or workout, show today's plan", "Anything clinical; sharing data"],
            ["Productivity and B2B", "Create a task, find a document, show today's schedule", "Deleting data, sending external messages"],
            ["Food and delivery", "Reorder favourite, track delivery", "Payment changes"],
          ],
        },
      },
      {
        heading: "Designing actions an assistant can use",
        body: [
          "Assistant-callable actions are tools for an AI, so the principles of good tool design apply: clear names and descriptions, typed parameters, results that are easy to present, and errors that explain what to do next. Our guide to [[/blogs/ai-agent-tool-design|AI agent tool design]] covers these in depth.",
        ],
        checklist: [
          "Name actions by user intent (\"Reorder groceries\"), not internal function names",
          "Use typed parameters and entities (an order, a booking) rather than free text",
          "Return a result the assistant can show or speak in one or two sentences",
          "Enforce the same authentication, permissions and business rules as the UI",
          "Make write actions idempotent so a repeated request does not duplicate an order",
          "Provide a deep link to the relevant screen for anything that needs the full UI (see [[/blogs/mobile-app-deep-linking|mobile app deep linking]])",
        ],
      },
      {
        heading: "Privacy, security and confirmation",
        body: [
          "Exposing actions to the system means content and capabilities can be reached outside your UI. Decide deliberately what each action reveals: an assistant reading out an account balance on a locked phone is a different risk from showing it in-app after biometrics. Respect the platform's authentication requirements, require confirmation for purchases, transfers, cancellations and outbound messages, and log assistant-initiated actions separately so you can audit and analyse them.",
          "On Android, AppFunctions require callers to hold a designated permission; on iOS, the system mediates access. Neither removes your responsibility to apply your own business rules inside the action.",
        ],
        cta: {
          title: "Want your app ready for AI assistants?",
          description: "ZSpace Labs adds App Intents, AppFunctions, deep links and the backend changes behind them to iOS, Android and React Native apps. See [[/services/mobile-app-development|mobile app development]].",
        },
      },
      {
        heading: "Measuring assistant usage",
        body: [
          "Track how often each action is invoked through the system versus the app UI, completion and error rates, and what users do next. These numbers show which actions deserve investment and whether assistant users retain differently. See [[/blogs/mobile-app-analytics|mobile app analytics]] for event design.",
        ],
      },
      {
        heading: "Cross-platform apps",
        body: [
          "App Intents are implemented in Swift and AppFunctions in Kotlin, so React Native and Flutter apps add a thin native layer for each platform. Keep the business logic shared (often on your server or in a shared module) and make the native layer a small adapter. The two platforms' models differ: Apple organizes around schemas, entities and the semantic index; Android around discoverable functions. Design your action catalogue once, then map it to each.",
        ],
      },
      {
        heading: "A practical roadmap",
        body: [],
        checklist: [
          "**Now:** list the 5–10 actions users repeat most; check which are already exposed as App Intents, shortcuts or deep links",
          "**Next release:** add App Intents and entities for the safest high-value actions; add deep links for everything else",
          "**Prototype AppFunctions** for the same actions on Android test devices",
          "**Add confirmation and logging** for any action that changes data",
          "**Measure** usage and errors, then expand the catalogue",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Assistants are becoming another way people use apps, and both Apple and Google are building the plumbing into their operating systems. Apps that expose a small set of well-designed, safe actions and their key content will be the ones assistants can use. Start with App Intents on iOS today, prototype AppFunctions on Android, keep consequential actions behind confirmation and treat the action catalogue as part of your product. For the on-device side of mobile AI, read [[/blogs/on-device-ai-mobile-apps|on-device AI in mobile apps]].",
        ],
      },
    ],
  },
];
