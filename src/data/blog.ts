import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-rebuild-vs-redesign",
    title: "When to Rebuild Your Website and When to Just Redesign It",
    excerpt:
      "A full rebuild is expensive and slow. Most sites don't need one — they need a sharper redesign on the foundation they already have. Here's how to tell which situation you're in.",
    category: "Digital Strategy",
    readingTime: "7 min read",
    publishedAt: "2026-08-14",
    author: { name: "Maya Fontaine", role: "Head of Strategy" },
    featured: true,
    content: [
      {
        heading: "The question we get asked most often",
        body: [
          "Almost every discovery call starts the same way: \"Do we need a full rebuild, or can we just redesign what we have?\" It's a fair question, and the honest answer is that most companies asking it don't need the rebuild they're bracing for.",
          "A rebuild means new architecture, a new CMS, new infrastructure — the works. A redesign means keeping the underlying system and reworking the layer people actually see and interact with. They solve different problems, and confusing them wastes months and budget.",
        ],
      },
      {
        heading: "Signs you need a redesign, not a rebuild",
        body: [
          "If your site loads reasonably fast, your CMS lets your team publish without a developer, and the core problem is that the messaging or visual design no longer matches where your business is, that's a redesign. You keep the foundation and rework what sits on top of it.",
          "This is also the right call when the site works fine but conversion has plateaued. Redesigns focused on page structure, copy, and calls to action tend to move that number faster than a full rebuild would, because you're not spending the first six weeks re-platforming.",
        ],
      },
      {
        heading: "Signs you actually need a rebuild",
        body: [
          "If updating the site requires a developer for basic content changes, if the page speed is genuinely hurting SEO and conversion, or if you're bolting on functionality the current platform was never built to support, redesigning the surface won't fix the underlying problem.",
          "The tell we look for in an audit is how much of the team's time goes into fighting the platform versus using it. If every content update is a small project, the platform is the actual bottleneck, not the design sitting on top of it.",
        ],
      },
      {
        heading: "How we make the call",
        body: [
          "We run a short technical and content audit before quoting either direction. It looks at page speed, CMS flexibility, information architecture, and how the current structure holds up against your actual growth plans for the next two years.",
          "That audit usually settles the question within a week, and it's worth doing before committing budget to either path — a wrong guess here is an expensive one.",
        ],
      },
    ],
  },
  {
    slug: "ai-features-that-actually-ship",
    title: "Most AI Features Never Make It to Production. Here's Why Ours Do.",
    excerpt:
      "Demos are easy. Reliable AI features in production are hard. The gap between them is where most AI projects quietly stall out.",
    category: "AI",
    readingTime: "8 min read",
    publishedAt: "2026-07-22",
    author: { name: "Dev Anand", role: "AI Engineering Lead" },
    featured: true,
    content: [
      {
        heading: "The demo-to-production gap is the whole game",
        body: [
          "Getting a large language model to do something impressive once, on a curated example, takes an afternoon. Getting it to do that same thing reliably, on real user input, at scale, with a defined failure mode — that's the actual work, and it's most of what separates a shipped AI feature from an abandoned prototype.",
          "We've seen this pattern often enough that we now scope every AI engagement around it explicitly, rather than treating reliability as a later concern.",
        ],
      },
      {
        heading: "Start with a narrow, well-defined task",
        body: [
          "Open-ended AI features — a generic chatbot bolted onto a product — are the ones most likely to underdeliver. The ones that stick are scoped to a specific task: generate this kind of report, answer questions about this specific document set, flag this specific category of risk.",
          "Narrow scope makes evaluation possible. You can't meaningfully test \"does this chatbot help,\" but you can test \"does this feature correctly flag the risk clauses in a lease\" against a hundred real leases.",
        ],
      },
      {
        heading: "Build an evaluation set before you build the feature",
        body: [
          "Before writing production code, we assemble a set of real (or realistic) inputs, including the messy edge cases, and define what a correct or acceptable output looks like for each. This becomes the yardstick for every change to the system going forward.",
          "Without this, teams end up eyeballing outputs and shipping based on vibes — which is exactly how confident-sounding but wrong AI features make it to production.",
        ],
      },
      {
        heading: "Design for graceful uncertainty",
        body: [
          "The features that hold up in production know when to defer to a human. That means building confidence thresholds, clear fallback states, and — for anything customer-facing or high-stakes — a review step before an AI-generated output reaches a real decision.",
          "This isn't a limitation of the technology so much as good systems design. The same principle applies to any automated system that occasionally needs a human to catch what it can't.",
        ],
      },
    ],
  },
  {
    slug: "shopify-page-speed-checklist",
    title: "The Shopify Page Speed Checklist We Run on Every Store Audit",
    excerpt:
      "Slow product pages lose sales quietly, without ever showing up as a support ticket. Here's the exact checklist we use before recommending any theme or app changes.",
    category: "E-commerce",
    readingTime: "6 min read",
    publishedAt: "2026-06-30",
    author: { name: "Priya Chandran", role: "E-commerce Lead" },
    content: [
      {
        heading: "Why speed is a silent conversion killer",
        body: [
          "Nobody files a support ticket because a product page took two extra seconds to load. They just leave. That makes page speed one of the easiest problems to underestimate, because the cost never shows up as a complaint — only as a slightly lower conversion rate that's hard to trace back to a cause.",
        ],
      },
      {
        heading: "Audit every app for its real cost",
        body: [
          "Every Shopify app adds JavaScript, and most stores accumulate apps faster than they remove them. We run a script-by-script audit and measure the actual load impact of each app against the value it provides — a lot of them lose that trade once you see the number.",
        ],
      },
      {
        heading: "Image handling matters more than most themes assume",
        body: [
          "Product photography is usually the single heaviest asset category on a Shopify store. Proper responsive sizing, modern formats, and lazy loading below the fold routinely cut page weight more than any other single change we make.",
        ],
      },
      {
        heading: "Check third-party pixels and tracking scripts",
        body: [
          "Marketing pixels are essential, but they're also frequently implemented in the least efficient way possible — loaded synchronously, duplicated across apps, or firing scripts the team forgot were still active. A tag audit almost always finds something worth removing.",
        ],
      },
      {
        heading: "Measure on mobile, not desktop",
        body: [
          "Most Shopify traffic is mobile, and mobile devices are far less forgiving of a heavy page. We test and optimize primarily against mobile Core Web Vitals, because that's a closer approximation of what most of your customers are actually experiencing.",
        ],
      },
    ],
  },
  {
    slug: "scoping-an-mvp-that-tests-the-real-hypothesis",
    title: "How to Scope an MVP That Actually Tests Your Hypothesis",
    excerpt:
      "Most MVPs fail to validate anything because they're either too small to be useful or too big to ship on time. Here's how we scope the middle ground.",
    category: "Startups",
    readingTime: "6 min read",
    publishedAt: "2026-06-05",
    author: { name: "Maya Fontaine", role: "Head of Strategy" },
    content: [
      {
        heading: "An MVP is a test, not a product",
        body: [
          "The purpose of an MVP is to answer a specific question about your business — will people pay for this, will they use it repeatedly, does this workflow actually save them time. If a feature doesn't help answer that question, it doesn't belong in version one, no matter how obviously useful it seems.",
        ],
      },
      {
        heading: "Write the hypothesis down before you write the spec",
        body: [
          "We ask founders to state, in one sentence, what they believe about their users that the MVP needs to confirm or disprove. Every scoping decision after that gets measured against whether it helps test that specific belief.",
        ],
      },
      {
        heading: "Cut anything you could learn about a different way",
        body: [
          "If you can validate demand for a feature with a landing page and a waitlist instead of building it, do that first. Engineering time is the most expensive way to learn something you could have learned from a conversation or a simple survey.",
        ],
      },
      {
        heading: "Plan the second version while scoping the first",
        body: [
          "A good MVP architecture doesn't paint you into a corner. We make sure the technical foundation can support the likely next steps — more user roles, more complex permissions, a second platform — even if version one doesn't include them yet.",
        ],
      },
    ],
  },
  {
    slug: "automation-projects-with-fastest-payback",
    title: "The Automation Projects With the Fastest Payback Period",
    excerpt:
      "Not every manual process is worth automating first. These are the patterns that tend to pay for themselves within a month or two.",
    category: "Automation",
    readingTime: "5 min read",
    publishedAt: "2026-05-18",
    author: { name: "Owen Bright", role: "Automation Lead" },
    content: [
      {
        heading: "High frequency, low judgment work first",
        body: [
          "The fastest payback comes from automating tasks that happen often and require little judgment — status updates, data entry between systems, routine notifications. These are also the lowest-risk to automate, because the correct behavior is easy to define.",
        ],
      },
      {
        heading: "Anywhere a person is acting as an API",
        body: [
          "If someone on your team is manually copying data from one system into another on any kind of regular schedule, that's almost always a strong automation candidate. The person is doing exactly what an integration would do, just slower and with more risk of error.",
        ],
      },
      {
        heading: "Reconciliation and matching tasks",
        body: [
          "Order reconciliation, invoice matching, and inventory syncing across platforms are common high-value automation targets because errors in these processes are expensive and the matching logic, while tedious, is usually well-defined.",
        ],
      },
      {
        heading: "Where to be more careful",
        body: [
          "Processes with a lot of exceptions or judgment calls take longer to automate well, and rushing them tends to create automations that fail silently on edge cases. These are worth automating eventually, just not first.",
        ],
      },
    ],
  },
  {
    slug: "design-systems-worth-the-investment",
    title: "When a Design System Is Worth Building (and When It Isn't Yet)",
    excerpt:
      "Design systems are genuinely valuable, but building one too early can slow a young product down instead of speeding it up.",
    category: "UI/UX",
    readingTime: "6 min read",
    publishedAt: "2026-04-27",
    author: { name: "Sana Idris", role: "Design Director" },
    content: [
      {
        heading: "The case for waiting",
        body: [
          "A design system documents patterns you've already validated. Building one before you've found your actual product patterns means documenting guesses, which usually get reworked anyway once real usage data comes in.",
        ],
      },
      {
        heading: "The signal that it's time",
        body: [
          "The clearest sign a design system will pay off is when your product has enough surface area that inconsistency is starting to show — buttons that behave differently across screens, spacing that varies for no reason, a growing team building features that don't feel like the same product.",
        ],
      },
      {
        heading: "Start smaller than you think",
        body: [
          "A useful first version is often just tokens (color, type, spacing) and a dozen core components, documented well enough that a new engineer or designer can find and use them without asking. Comprehensive systems can come later, once you know which components actually get reused.",
        ],
      },
      {
        heading: "The real return is speed, not consistency",
        body: [
          "Consistency is a nice side effect. The real value of a mature design system is that it makes shipping new features faster, because nobody's re-deciding what a button or a form field should look like every single time.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
