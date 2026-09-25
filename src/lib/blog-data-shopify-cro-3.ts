import type { BlogPost } from "./blog-data";
import { croAuditFrameworkTable, croPrioritizationTable } from "./blog-data-shopify-cro";

/**
 * Third wave of the Shopify CRO cluster — the supporting articles around the
 * expanded shopify-cro-audit flagship: quick-reference formats (checklist,
 * tips, mistakes), diagnosis (conversion killers, finding problems, funnel
 * audit), and the first five page-level audits (product, homepage,
 * collection, cart). Same additive module pattern as the rest of the site's
 * blog content.
 */

export const shopifyCroPosts3: BlogPost[] = [
  // ----------------------------------------------------------- CHECKLIST
  {
    slug: "shopify-cro-checklist",
    title: "The Shopify CRO Checklist: 50+ Things to Check Before You Change Anything",
    excerpt:
      "A fast, practical checklist across discovery, product pages, cart, checkout, trust, mobile, speed and analytics — for a quick pass before a deeper audit.",
    category: "Shopify & Ecommerce",
    banner: "framework",
    date: "2026-08-03",
    readingTime: "11 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What is a Shopify CRO checklist?", a: "A fast, scannable list of the most common conversion issues across a Shopify store's key pages and processes — used for a quick pass, not as a substitute for a full evidence-based audit." },
      { q: "How is a checklist different from a full CRO audit?", a: "A checklist tells you what to look at; it doesn't tell you what's actually wrong on your specific store. Our [[/blogs/shopify-cro-audit|full CRO audit guide]] adds the evidence-gathering and prioritization a checklist skips." },
      { q: "How often should I run through this checklist?", a: "A quarterly pass is a reasonable baseline for most stores, with an additional pass after any major theme change, app installation, or checkout update." },
      { q: "Do I need every item on this checklist to apply to my store?", a: "No — some items depend on your catalog, price point or traffic mix. Treat items that don't apply as not applicable rather than forcing a fix that doesn't fit your store." },
      { q: "Should I fix everything on this list at once?", a: "No — prioritize by impact, confidence and effort, the same way a full audit would. Fixing low-impact items first often means real problems sit unresolved for longer than necessary." },
      { q: "Is this checklist Shopify-specific or generic ecommerce advice?", a: "It's written for Shopify specifically — referencing Shopify Analytics terminology, the Search & Discovery app, and Shopify's checkout, rather than generic ecommerce platform advice." },
      { q: "Where should I start if I only have time for a partial pass?", a: "Start with checkout and cart — they sit closest to revenue, so problems there tend to have the largest, most measurable impact per fix." },
      { q: "Can I use this checklist without Shopify Analytics access?", a: "Some items rely on Shopify's funnel data (add-to-cart rate, reached-checkout rate) to confirm a problem is real rather than assumed — without it, you're checking for issues but can't yet measure their actual impact." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify CRO checklist is a fast, scannable pass across the store's highest-impact areas — discovery, product pages, cart, checkout, trust signals, mobile experience, speed and analytics setup — used to catch common issues quickly, before deciding where a deeper audit is worth the time. It's a starting point, not a replacement for gathering real evidence on your specific store; for that, see the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]].",
        ],
      },
      {
        heading: "How to Use This Checklist",
        body: [
          "Work through each section in order, checking items against your live store rather than your intended setup — many issues show up only once a theme update or app installation has quietly changed something. Items you check off aren't necessarily fine forever; treat this as a recurring pass, not a one-time exercise.",
        ],
      },
      {
        heading: "Discovery and Navigation",
        body: ["Whether visitors can find what they're looking for before they give up."],
        checklist: [
          "Search returns relevant results for your top 20 search terms, with no unexpected zero-result queries",
          "Navigation labels match customer language, not internal product taxonomy",
          "Collection pages have working filters for the attributes customers actually shop by (size, color, price, in-stock)",
          "Breadcrumbs are present and accurate on product and collection pages",
          "No dead-end pages — every page gives the visitor an obvious next step",
        ],
      },
      {
        heading: "Product Pages",
        body: ["Whether a product page actually answers a buyer's real questions."],
        checklist: [
          "Primary product image clearly shows the product in use or in context, not just on a plain background",
          "Price, variant selection and Add to Cart are visible without scrolling on common screen sizes",
          "Reviews or ratings are visible near the price and CTA, not buried lower on the page",
          "Shipping and return policy information is accessible from the product page, not just the footer",
          "Product descriptions answer real buyer questions, not just list specifications",
          "Out-of-stock variants are clearly marked, with a restock notification option where possible",
        ],
      },
      {
        heading: "Cart and Checkout",
        body: ["Where real revenue is won or lost — see the [[/blogs/shopify-cart-optimization|cart optimization]] and [[/blogs/shopify-checkout-optimization|checkout optimization]] guides for the full detail on each."],
        checklist: [
          "Cart clearly shows item, quantity, price and any applied discount",
          "Shipping cost is visible before the final checkout step, not revealed as a surprise",
          "Guest checkout is available and not buried behind an account-creation prompt",
          "Checkout form asks only for information actually needed to complete the order",
          "Payment and security trust marks are visible at checkout",
          "Cart and checkout are tested on mobile, not just desktop",
        ],
      },
      {
        heading: "Trust and Social Proof",
        body: ["Whether a first-time visitor has a reason to trust an unfamiliar store — see the [[/blogs/shopify-trust-optimization|trust optimization guide]] for the full checklist."],
        checklist: [
          "Real customer reviews are visible on product pages, never fabricated or purchased",
          "Contact information and a real support channel are easy to find",
          "Return and refund policy is clearly stated, not hidden in dense legal text",
          "Security and payment trust marks appear at checkout",
          "About page or brand story is present for stores without wide existing recognition",
        ],
      },
      {
        heading: "Mobile Experience",
        body: ["Where most Shopify traffic actually happens — see the [[/blogs/shopify-mobile-cro|Shopify mobile CRO guide]] for the deeper version."],
        checklist: [
          "Tap targets (buttons, filters, variant selectors) are large enough to use reliably with a thumb",
          "No horizontal scrolling or content cut off on common mobile screen widths",
          "Mobile checkout form doesn't require excessive zooming or scrolling to complete",
          "Sticky Add to Cart bar (if used) doesn't obscure key content",
        ],
        cta: {
          title: "Want these items checked against your actual store data, not just visually?",
          description: "ZSpace runs a full evidence-based audit — funnel data, session recordings and page-level checks — and prioritizes findings by impact, confidence and effort.",
        },
      },
      {
        heading: "Speed and Analytics",
        body: ["The foundation everything else depends on — see the [[/blogs/shopify-speed-cro|speed and CRO guide]] and [[/blogs/shopify-analytics-guide|Shopify analytics guide]]."],
        checklist: [
          "Core Web Vitals (LCP, INP, CLS) are within Google's \"good\" thresholds on product and collection pages",
          "Apps that are no longer used have been removed, not just disabled",
          "Shopify Analytics conversion funnel is reviewed regularly, not just glanced at occasionally",
          "Traffic-source performance is tracked, not just an aggregate site-wide conversion rate",
        ],
      },
      {
        heading: "Turning Checked Items Into a Prioritized Plan",
        body: [
          "A checklist tells you where to look, not what matters most for your specific store. Once you've flagged issues, run them through the same impact, confidence and effort scoring used in a full audit — a small checkout friction point on a store with healthy checkout conversion is a lower priority than the same issue on a store where checkout is the clear bottleneck.",
        ],
        table: croPrioritizationTable,
      },
      {
        heading: "Where This Fits in the Broader CRO Cluster",
        body: [
          "This checklist is a fast entry point — the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] is the deeper, evidence-based version of the same process, and the primary hub linking to every specialized guide in this cluster, including page-specific audits, diagnostic frameworks, and testing strategy.",
        ],
        cta: {
          title: "Ready to go deeper than a checklist?",
          description: "See the full [[/blogs/shopify-cro-audit|Shopify CRO audit framework]] for the evidence-gathering and prioritization process this checklist feeds into.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A checklist is a fast way to catch common issues, but it's a starting point — not a substitute for confirming which of them actually matter on your store, with your traffic and your specific funnel data. Use it for a quick recurring pass, then bring in real evidence before deciding what to fix first.",
        ],
      },
    ],
  },

  // ----------------------------------------------------------------- TIPS
  {
    slug: "shopify-cro-tips",
    title: "30 Shopify CRO Tips Worth Testing on Your Store",
    excerpt:
      "Thirty tactical, testable recommendations across discovery, product pages, cart, checkout and trust — each with the problem it addresses, why it works, and how to measure it.",
    category: "Shopify & Ecommerce",
    banner: "tipsrows",
    date: "2026-08-05",
    readingTime: "13 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "Are these Shopify CRO tips guaranteed to work?", a: "No — each is a reasonable, evidence-backed starting hypothesis, not a guaranteed result. Store, audience and traffic differ enough that testing is always the way to confirm what actually works for you." },
      { q: "Do I need to implement all 30 tips?", a: "No. Pick the ones addressing problems you've actually confirmed on your store — through Shopify Analytics, heatmaps or session recordings — rather than implementing all of them speculatively." },
      { q: "How do I know which tip to try first?", a: "Prioritize by where your own funnel is weakest. A store with a strong add-to-cart rate but weak checkout completion should start with checkout-related tips, not product-page tips." },
      { q: "Should I A/B test each tip before rolling it out?", a: "Where traffic allows, yes — see the [[/blogs/shopify-ab-testing|Shopify A/B testing guide]]. On lower-traffic stores, a before/after comparison against historical Shopify Analytics data is a reasonable substitute." },
      { q: "Are these tips specific to any one type of Shopify store?", a: "Most apply broadly, but a few (like reducing form fields at checkout) matter more for high-friction categories, while others (like size guides) matter more for apparel and footwear specifically." },
      { q: "Will these tips guarantee a specific percentage lift in conversion rate?", a: "No — avoid trusting any source that promises a specific percentage without knowing your store. Treat each tip as worth testing, and measure the actual result on your own traffic." },
      { q: "How often should I revisit this list?", a: "Revisit alongside a quarterly audit — as your store's funnel data changes, which tips are worth prioritizing changes with it." },
      { q: "Where do these tips fit relative to a full audit?", a: "They're tactical starting points. The [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] is the structured process for finding which specific problems your store actually has before picking which tips to apply." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "These 30 Shopify CRO tips are tactical, testable recommendations across discovery, product pages, cart, checkout and trust — each with the problem it addresses, why it tends to work, and how to measure whether it worked on your store. None are guarantees; they're reasonable hypotheses worth validating against your own Shopify Analytics data, ideally through a controlled test where traffic allows.",
        ],
      },
      {
        heading: "Discovery and Navigation",
        body: ["Getting visitors to the right product faster."],
        table: {
          headers: ["Tip", "Why it works", "How to measure"],
          rows: [
            ["Add filters for the attributes customers actually shop by", "Reduces the effort between landing on a collection and finding a relevant product", "Filter usage rate, collection-to-product-view rate"],
            ["Fix zero-result search queries with synonyms", "A dead-end search often ends the session entirely", "Zero-result search rate in Shopify Search & Discovery"],
            ["Use customer language in navigation labels, not internal taxonomy", "Visitors scan for familiar words, not your internal category names", "Navigation click-through rate"],
            ["Surface bestsellers or a clear entry point from the homepage", "Gives undecided visitors a fast, low-effort next step", "Homepage-to-product-view rate"],
            ["Add breadcrumbs on product and collection pages", "Reduces backtracking and helps visitors browse related items", "Pages per session"],
          ],
        },
      },
      {
        heading: "Product Pages",
        body: ["Answering real buyer questions before hesitation sets in — see the [[/blogs/shopify-product-page-optimization|product page optimization guide]] for the deeper version."],
        table: {
          headers: ["Tip", "Why it works", "How to measure"],
          rows: [
            ["Move reviews closer to the price and CTA", "Reassurance works best right where the decision is being made", "Add-to-cart rate"],
            ["Show real lifestyle or in-use images, not only plain-background shots", "Helps visitors picture the product in their own context", "Time on page, add-to-cart rate"],
            ["Add a size or fit guide for apparel and footwear", "Removes a common, unresolved hesitation point", "Return rate, add-to-cart rate"],
            ["Answer common pre-purchase questions directly on the page", "Reduces reliance on support contact just to get basic answers", "Support ticket volume, add-to-cart rate"],
            ["Clearly mark low stock or limited availability where genuinely true", "Creates honest urgency without fabricating scarcity", "Add-to-cart rate"],
            ["Make variant selection (size, color) visually clear and easy to tap on mobile", "Reduces mis-taps and abandoned selections", "Mobile add-to-cart rate"],
          ],
        },
      },
      {
        heading: "Cart",
        body: ["Keeping momentum once an item is added — see the [[/blogs/shopify-cart-optimization|cart optimization guide]]."],
        table: {
          headers: ["Tip", "Why it works", "How to measure"],
          rows: [
            ["Show shipping cost or a threshold to free shipping directly in the cart", "Removes a common late-stage surprise that causes abandonment", "Reached-checkout rate"],
            ["Make quantity and variant changes possible without leaving the cart", "Reduces friction and accidental cart abandonment from re-navigation", "Cart-to-checkout rate"],
            ["Add a progress indicator toward a free-shipping threshold", "Gives a concrete, honest incentive to add one more item", "Average order value"],
            ["Keep the cart accessible from every page, not just after adding an item", "Reduces the effort to review and proceed when a visitor is ready", "Cart view rate"],
          ],
        },
      },
      {
        heading: "Checkout",
        body: ["Where friction has the most measurable revenue impact — see the [[/blogs/shopify-checkout-optimization|checkout optimization guide]]."],
        table: {
          headers: ["Tip", "Why it works", "How to measure"],
          rows: [
            ["Enable guest checkout as the default path", "Removes a hard blocker for visitors who don't want to create an account", "Completed-checkout rate"],
            ["Reduce checkout form fields to only what's needed for fulfillment", "Every additional field is a chance to hesitate or abandon", "Completed-checkout rate"],
            ["Offer the payment methods your specific audience actually uses", "A missing preferred payment method is a hard stop for some buyers", "Payment-step completion rate"],
            ["Show a clear order summary throughout checkout, not just at the end", "Reduces anxiety about what's actually being charged", "Checkout abandonment rate"],
            ["Display security and trust marks near the payment fields", "Addresses hesitation right where financial risk feels highest", "Payment-step completion rate"],
          ],
        },
      },
      {
        heading: "Trust and Post-Purchase",
        body: ["Reducing hesitation before and after the purchase decision — see the [[/blogs/shopify-trust-optimization|trust optimization guide]]."],
        table: {
          headers: ["Tip", "Why it works", "How to measure"],
          rows: [
            ["Make the return and refund policy easy to find, not just legally present", "A visible, fair policy lowers the perceived risk of a first purchase", "Add-to-cart rate for new visitors"],
            ["Send a clear, timely order confirmation and shipping update", "Reduces post-purchase anxiety and support contact volume", "Support ticket volume, repeat-purchase rate"],
            ["Display real customer photos or reviews where available, never fabricated", "Genuine social proof outperforms generic marketing copy", "Product conversion rate"],
            ["Make contact information and support channels easy to find", "A visible way to ask a question lowers pre-purchase hesitation", "Cart abandonment rate"],
            ["Follow up post-purchase with genuine care instructions or usage tips, not just another sales pitch", "Builds trust that supports repeat purchase", "Repeat-purchase rate"],
          ],
        },
      },
      {
        heading: "Mobile and Speed",
        body: ["Where most traffic actually happens — see [[/blogs/shopify-mobile-cro|Shopify mobile CRO]] and [[/blogs/shopify-speed-cro|speed and CRO]]."],
        table: {
          headers: ["Tip", "Why it works", "How to measure"],
          rows: [
            ["Optimize hero and product images specifically for mobile load times", "Mobile connections and devices are less forgiving of unoptimized assets", "Mobile LCP, mobile bounce rate"],
            ["Increase tap-target size on filters, variant selectors and CTAs", "Reduces mis-taps that quietly cost conversions on small screens", "Mobile add-to-cart rate"],
            ["Remove or defer apps that only run on desktop-relevant features", "Cuts unnecessary script weight that slows every mobile session", "Mobile INP"],
            ["Test checkout specifically on mobile devices, not just desktop", "Mobile checkout issues are easy to miss when testing only on desktop", "Mobile completed-checkout rate"],
          ],
        },
        cta: {
          title: "Want to know which of these actually apply to your store?",
          description: "ZSpace can confirm which tips address real, evidenced problems on your store versus which don't apply — through a structured [[/blogs/shopify-cro-audit|CRO audit]].",
        },
      },
      {
        heading: "Testing These Tips Properly",
        body: [
          "Every tip above is a hypothesis, not a guarantee. Where traffic allows, validate with a proper A/B test rather than a gut-feel rollout — see the [[/blogs/shopify-ab-testing|Shopify A/B testing guide]] and [[/blogs/shopify-cro-testing-ideas|50 CRO testing ideas]] for how to structure experiments correctly, including on lower-traffic stores where a full split test isn't practical.",
        ],
      },
      {
        heading: "The ZSpace CRO Audit Framework",
        body: [
          "Tips work best applied against a confirmed problem, not speculatively. The [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] walks through measuring, diagnosing and prioritizing before implementing any specific change.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Want a professional audit before testing these tips?",
          description: "ZSpace can identify which of these tactics addresses a real, evidenced problem on your specific store, and in what order.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "None of these 30 tips are magic — each addresses a specific, common friction point, and each is worth testing against your own store's data rather than assumed to work universally. Start with the section closest to your weakest funnel stage, and measure the result using the same Shopify Analytics terms these tips are framed around.",
        ],
      },
    ],
  },

  // ------------------------------------------------------------ MISTAKES
  {
    slug: "shopify-cro-mistakes",
    title: "25 Shopify CRO Mistakes That Quietly Cost Stores Conversions",
    excerpt:
      "Why these mistakes happen, why they matter more than they look, how to identify them on your own store, and how to fix each one.",
    category: "Shopify & Ecommerce",
    banner: "mistakeslist",
    date: "2026-08-07",
    readingTime: "13 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What's the most common Shopify CRO mistake?", a: "Optimizing based on assumption rather than evidence — changing pages or copy without first confirming, through Shopify Analytics or session recordings, that the change addresses a real, measured problem." },
      { q: "Are these mistakes specific to new Shopify stores?", a: "Most apply to any store, but a few — like an unreviewed app stack or a homepage that's never been revisited — tend to compound over time on more established stores." },
      { q: "How do I know if my store has these mistakes?", a: "Each item below includes how to identify it — usually a specific check in Shopify Analytics, a page review, or a look at session recordings, rather than guesswork." },
      { q: "Can fixing one of these mistakes fix my conversion rate on its own?", a: "Sometimes, but usually conversion issues stack — fixing one mistake often reveals or matters more once another nearby issue is also addressed." },
      { q: "Is guessing at fixes really a mistake, or is it fine for a small store?", a: "It's a reasonable starting point when traffic is too low to test properly, but it should be paired with checking the qualitative evidence available (recordings, support tickets, direct feedback) rather than pure guesswork." },
      { q: "How does this list relate to the Shopify CRO checklist?", a: "The [[/blogs/shopify-cro-checklist|checklist]] tells you what to check; this list explains the specific ways stores get those checks wrong, and why each mistake matters." },
      { q: "Should I fix all 25 mistakes immediately?", a: "No — confirm which apply to your store first, then prioritize by impact, confidence and effort like any other audit finding." },
      { q: "Where should I start?", a: "Start with mistakes tied to checkout and cart, since friction there has the most direct, measurable revenue impact." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "The most damaging Shopify CRO mistakes are rarely dramatic — they're quiet, structural issues like optimizing without evidence, hiding shipping costs until the final step, requiring account creation before checkout, or letting an app stack grow unchecked. Each mistake below includes why it happens, why it matters more than it looks, how to identify it on your own store, and how to fix it.",
        ],
      },
      {
        heading: "Strategy and Process Mistakes",
        body: ["The mistakes that happen before a single page is even touched."],
        checklist: [
          "Changing pages based on opinion instead of Shopify Analytics or session-recording evidence — fix by confirming a real funnel-stage drop before acting",
          "Treating CRO as a one-time project instead of a recurring cycle — fix by scheduling regular audit passes, not a single effort",
          "Testing too many changes at once, making it impossible to know what worked — fix by isolating variables or testing sequentially",
          "Declaring a test result significant before it has enough traffic or time — fix by defining a minimum sample size before launching a test",
          "Copying a competitor's site changes without knowing if they actually worked for them — fix by treating competitor patterns as ideas to test, not proof",
        ],
      },
      {
        heading: "Product Page Mistakes",
        body: ["See the [[/blogs/shopify-product-page-audit|product page audit]] for the full 40-point check."],
        checklist: [
          "Burying reviews far below the fold — fix by moving key trust signals near the price and CTA",
          "Using only plain-background product photos with no in-use or lifestyle context — fix by adding real-use imagery",
          "Leaving out sizing or fit information for apparel — fix by adding a clear, accessible size guide",
          "Writing specification-only descriptions that don't answer real buyer questions — fix by addressing actual pre-purchase questions directly",
          "Making out-of-stock variants indistinguishable from in-stock ones — fix by clearly marking availability",
        ],
      },
      {
        heading: "Cart and Checkout Mistakes",
        body: ["See [[/blogs/shopify-cart-audit|cart audit]] and [[/blogs/shopify-checkout-audit|checkout audit]] for deeper page-specific detail."],
        checklist: [
          "Revealing shipping cost only at the final checkout step — fix by showing it in the cart or earlier",
          "Requiring account creation before checkout can proceed — fix by making guest checkout the default",
          "Asking for information the order doesn't actually need — fix by auditing and trimming the checkout form",
          "Offering only one payment method when the audience clearly needs more — fix by reviewing what payment options your specific customers expect",
          "Letting the cart go stale with outdated pricing or unavailable items — fix by validating cart contents at checkout entry",
        ],
      },
      {
        heading: "Trust and Content Mistakes",
        body: ["Trust is easy to damage and slow to rebuild — see the [[/blogs/shopify-trust-optimization|trust optimization guide]]."],
        checklist: [
          "Displaying fabricated or purchased reviews — always a mistake, both ethically and because customers increasingly detect it",
          "Hiding the return and refund policy in dense legal text — fix by surfacing it clearly and simply",
          "Leaving no visible way to contact support before purchase — fix by making a real support channel easy to find",
          "Using stock imagery that doesn't reflect the actual product — fix with real product photography",
          "Making urgency claims that aren't genuinely true — always a mistake; use only honest, verifiable scarcity signals",
        ],
      },
      {
        heading: "Mobile and Technical Mistakes",
        body: ["Where most traffic happens, and where issues are easiest to miss on desktop — see [[/blogs/shopify-mobile-cro-audit|the mobile CRO audit]]."],
        checklist: [
          "Testing only on desktop and assuming mobile scales down cleanly — fix by testing directly on mobile devices",
          "Leaving tap targets too small for reliable thumb use — fix by increasing button and filter sizing",
          "Letting page speed degrade as apps accumulate — fix with a regular [[/blogs/shopify-speed-checklist-before-you-add-another-app|app audit]]",
          "Ignoring layout shift caused by late-loading images or embeds — fix by giving all media explicit dimensions",
        ],
        cta: {
          title: "Recognize a few of these on your store?",
          description: "ZSpace can confirm which of these mistakes are actually costing you conversions — and prioritize the fixes by impact, confidence and effort.",
        },
      },
      {
        heading: "Analytics and Measurement Mistakes",
        body: ["You can't fix what you're not actually measuring — see the [[/blogs/shopify-analytics-guide|Shopify analytics guide]]."],
        checklist: [
          "Looking only at an aggregate, site-wide conversion rate instead of the funnel stage-by-stage — fix by reviewing Shopify Analytics' funnel breakdown regularly",
          "Not segmenting conversion rate by traffic source — fix by reviewing traffic-source performance separately",
          "Treating a single session recording as proof of a widespread issue — fix by looking for a pattern across many sessions before acting",
          "Never revisiting analytics after the initial store setup — fix by scheduling a recurring review, not a one-time look",
          "Confusing correlation in a heatmap with the actual cause of a drop-off — fix by treating heatmaps as a source of hypotheses, not conclusions; see the [[/blogs/shopify-heatmap-analysis|heatmap analysis guide]]",
        ],
      },
      {
        heading: "Turning This List Into Action",
        body: [
          "Confirm which mistakes actually apply to your store using real evidence, then prioritize the fixes the same way a full audit would — by impact, confidence and effort, not by which is quickest to implement.",
        ],
        table: croPrioritizationTable,
        cta: {
          title: "Want an outside review of what's actually costing you conversions?",
          description: "See the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] for the structured, evidence-based version of this process.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Most of these mistakes aren't dramatic on their own — they're quiet defaults that accumulate unnoticed until a real audit surfaces them. Reviewing this list against your own store, honestly, is a faster path to real improvement than adding another new feature on top of unresolved friction underneath it.",
        ],
      },
    ],
  },

  // ------------------------------------------------------ CONVERSION KILLERS
  {
    slug: "shopify-conversion-killers",
    title: "Shopify Conversion Killers: Symptoms and What They Actually Mean",
    excerpt:
      "A diagnostic pairing of visible symptoms — high cart abandonment, low add-to-cart rate, weak mobile conversion — with the most likely underlying causes behind each.",
    category: "Shopify & Ecommerce",
    banner: "funnel",
    date: "2026-08-10",
    readingTime: "11 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What is a Shopify conversion killer?", a: "A structural issue with a large, disproportionate effect on conversion — usually visible first as a symptom in Shopify Analytics, like a weak add-to-cart rate or high checkout abandonment, before the underlying cause is identified." },
      { q: "How do I find my store's biggest conversion killer?", a: "Start with your Shopify Analytics funnel breakdown and find the stage with the steepest drop-off relative to typical benchmarks — that's usually where the biggest killer is hiding." },
      { q: "Is a low conversion rate always caused by one single issue?", a: "Rarely — it's usually a combination of smaller frictions stacking at one or more funnel stages, though one dominant issue often accounts for a disproportionate share." },
      { q: "Can a conversion killer differ by traffic source?", a: "Yes — a symptom that shows up store-wide can be concentrated in one channel, like paid social traffic hitting a slow-loading landing page. Segment by traffic source before diagnosing." },
      { q: "Should I fix a conversion killer without testing it first?", a: "Where traffic allows, validate with a test. On lower-traffic stores, qualitative evidence (session recordings, support tickets) is a reasonable substitute for a full split test." },
      { q: "How is this different from the CRO mistakes list?", a: "The [[/blogs/shopify-cro-mistakes|mistakes list]] catalogs common errors; this guide works the other direction — starting from a symptom you've already observed and working toward the likely cause." },
      { q: "What if none of these symptoms match what I'm seeing?", a: "Use the broader [[/blogs/find-shopify-conversion-problems|guide to finding conversion problems]] for a more open-ended investigation process." },
      { q: "Do these symptom-cause pairings apply to every Shopify store?", a: "They're common patterns, not universal rules — confirm the actual cause with your own store's evidence before assuming a match." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify conversion killer is a structural issue with an outsized effect on the funnel — usually visible first as a symptom in Shopify Analytics (a weak add-to-cart rate, high cart abandonment, poor mobile conversion) before the underlying cause is confirmed. This guide pairs common symptoms with their most likely causes, as a starting point for diagnosis — not a substitute for confirming the real cause with your own store's evidence.",
        ],
      },
      {
        heading: "Symptom: Low Product Views Relative to Traffic",
        body: [
          "If sessions are healthy but product views are low, visitors are landing but not engaging with the catalog. Likely causes: navigation that doesn't match how customers think about your products, a homepage that doesn't surface relevant entry points, or search returning poor results. Start with the [[/blogs/shopify-search-optimization|search optimization guide]] and [[/blogs/shopify-homepage-audit|homepage audit]].",
        ],
      },
      {
        heading: "Symptom: Weak Add-to-Cart Rate",
        body: [
          "Visitors are viewing products but not adding them. Likely causes: insufficient trust signals near the CTA, unclear pricing or shipping cost, unanswered pre-purchase questions, or poor product imagery. The [[/blogs/shopify-product-page-audit|product page audit]] is the most direct next step.",
        ],
        visual: { variant: "funnel", accent: "orange", caption: "Each funnel stage has a distinct set of likely causes — diagnosing the wrong stage wastes effort on a fix that was never going to move the number." },
      },
      {
        heading: "Symptom: High Cart Abandonment (Weak Reached-Checkout Rate)",
        body: [
          "Items are added but checkout is never reached. Likely causes: an unexpected shipping cost revealed too late, a confusing or slow cart interface, or simply comparison shopping without intent to buy yet. See the [[/blogs/shopify-cart-audit|cart audit]] for a full diagnostic pass.",
        ],
      },
      {
        heading: "Symptom: High Checkout Abandonment (Weak Completed-Checkout Rate)",
        body: [
          "Visitors reach checkout but don't complete it — often the costliest symptom, since it happens closest to revenue. Likely causes: forced account creation, an overly long form, limited payment options, or a lack of trust signals near payment. See the [[/blogs/shopify-checkout-audit|checkout audit]].",
        ],
      },
      {
        heading: "Symptom: Mobile Conversion Well Below Desktop",
        body: [
          "A meaningful gap between mobile and desktop conversion usually points to a mobile-specific experience issue, not a general funnel problem. Likely causes: slow mobile load times, small tap targets, or a checkout form that's harder to complete on a small screen. See the [[/blogs/shopify-mobile-cro-audit|mobile CRO audit]].",
        ],
      },
      {
        heading: "Symptom: One Traffic Source Converts Much Worse Than Others",
        body: [
          "If email traffic converts well but paid social doesn't, the issue is often a landing-page or expectation mismatch specific to that channel, not the store as a whole. Segment conversion rate by traffic source in Shopify Analytics before assuming a site-wide problem.",
        ],
        cta: {
          title: "Not sure which symptom actually matches your data?",
          description: "ZSpace can review your Shopify Analytics funnel and pinpoint where the real drop-off is happening, with evidence — not a generic symptom list.",
        },
      },
      {
        heading: "Symptom: High Traffic, Flat Revenue Growth",
        body: [
          "Traffic is growing but revenue isn't following — this usually points to a funnel-wide leak rather than a single stage, or a mismatch between the traffic being acquired and genuine purchase intent. Run the full [[/blogs/shopify-funnel-audit|funnel audit]] segmented by traffic source before assuming any single fix will resolve it.",
        ],
      },
      {
        heading: "Using Symptoms as a Starting Point, Not a Conclusion",
        body: [
          "Every pairing above is a common pattern, not a certainty — the only way to confirm the real cause is to look at the actual evidence on your store: funnel data, session recordings, and direct customer feedback. That's the process the [[/blogs/shopify-cro-audit|complete CRO audit]] walks through in full.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Want the real cause confirmed, not just the likely one?",
          description: "See the [[/blogs/shopify-cro-audit|Shopify CRO audit framework]] for how to move from symptom to confirmed cause.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Symptoms are a fast way to narrow down where to look, but they're not a diagnosis on their own — two stores with the same weak add-to-cart rate can have entirely different underlying causes. Use this guide to point your investigation in the right direction, then confirm with real evidence before implementing a fix.",
        ],
      },
    ],
  },

  // ------------------------------------------------ FIND CONVERSION PROBLEMS
  {
    slug: "find-shopify-conversion-problems",
    title: "How to Find Conversion Problems on Your Shopify Store",
    excerpt:
      "A structured investigation process — what to look at, where to look, who's affected, why it's happening, what evidence confirms it, and how to test a fix.",
    category: "Shopify & Ecommerce",
    banner: "decisiontree",
    date: "2026-08-12",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "Where do I start when looking for conversion problems?", a: "Start with Shopify Analytics' funnel breakdown to find the stage with the steepest drop-off relative to typical patterns — that tells you where to look before you decide why." },
      { q: "What tools do I need to find conversion problems?", a: "Shopify Analytics is the essential starting point; a heatmap or session-recording tool adds the behavioral evidence needed to understand why a stage is underperforming, not just that it is." },
      { q: "How long should this investigation take?", a: "A focused pass on one funnel stage can take a few hours to a couple of days depending on data volume; treating it as an ongoing habit works better than a single exhaustive one-time sweep." },
      { q: "What if I don't have enough traffic for heatmaps or session recordings to be useful?", a: "Lean more heavily on direct customer feedback, support tickets, and the What/Where questions in this framework — the Who and Why questions become harder to answer confidently at very low traffic." },
      { q: "How is this different from the funnel audit?", a: "This is the open-ended investigation process for finding a problem in the first place; the [[/blogs/shopify-funnel-audit|funnel audit]] is the structured table-based format for documenting funnel-stage findings once you have them." },
      { q: "Should I trust a single session recording as proof of a real problem?", a: "No — look for a pattern across multiple sessions before treating an observation as a confirmed issue, not just an isolated case." },
      { q: "What's the difference between a correlation and a real cause here?", a: "A heatmap might show visitors hovering near a certain area without clicking — that's a correlation. Confirming it's actually causing hesitation (not just normal reading behavior) requires additional evidence, like a survey response or a consistent pattern across many sessions." },
      { q: "What happens after I find a conversion problem?", a: "Move into the full [[/blogs/shopify-cro-audit|CRO audit]] process — prioritize the finding, form a hypothesis, and test it before implementing a permanent fix." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Finding real conversion problems on a Shopify store means working through five questions in order: What is actually happening (the Shopify Analytics number), Where it's happening (which page or funnel stage), Who is affected (which segment or traffic source), Why it's likely happening (the behavioral evidence), and what Evidence and Test would confirm it. Skipping straight to a fix without this sequence is the most common reason CRO changes don't move the number they were meant to.",
        ],
      },
      {
        heading: "What: Start With the Actual Number",
        body: [
          "Before forming any opinion, open Shopify Analytics and look at the real funnel-stage data — sessions, product views, add-to-cart rate, reached-checkout rate, completed-checkout rate. A conversion problem should be traceable to a specific, measurable stage, not a vague sense that \"conversion feels low.\"",
        ],
      },
      {
        heading: "Where: Narrow to a Specific Page or Stage",
        body: [
          "Once you know which funnel stage is weak, narrow further — is it a specific product category, a specific device type, or a specific landing page rather than the whole site? A store-wide average can hide a problem that's actually concentrated in one narrow area.",
        ],
        visual: { variant: "funnel", accent: "blue", caption: "Narrowing from a site-wide symptom to a specific page or segment is what turns a vague concern into an investigable problem." },
      },
      {
        heading: "Who: Segment by Traffic Source and Device",
        body: [
          "The same weak number can mean different things for different visitor segments. Segment by traffic source (paid, organic, email, social) and device type (mobile vs. desktop) before assuming the cause is universal — a paid-traffic-specific issue calls for a different fix than a site-wide one.",
        ],
      },
      {
        heading: "Why: Bring In Behavioral Evidence",
        body: [
          "Numbers tell you what and where; heatmaps, session recordings and on-site search logs help explain why. Watch a sample of real sessions at the affected stage, looking for a consistent pattern — repeated hesitation near a specific element, rage clicks, or an unusually long pause before abandonment. See the [[/blogs/shopify-heatmap-analysis|heatmap analysis guide]] for what this evidence can and can't tell you on its own.",
        ],
        checklist: [
          "Check Shopify Analytics for the specific funnel stage and segment affected",
          "Watch 10-20 session recordings at that exact stage, looking for a repeated pattern",
          "Check on-site search logs for related zero-result or repeated queries",
          "Review recent support tickets or customer feedback for related complaints",
          "Confirm the pattern holds across multiple sessions, not just one or two",
        ],
      },
      {
        heading: "Evidence: Confirm Before You Act",
        body: [
          "A single session recording or one piece of anecdotal feedback isn't enough to justify a change — look for the same pattern across a meaningful sample before treating it as confirmed. This is also where it's worth distinguishing correlation from cause: a heatmap showing hesitation near a button doesn't automatically mean the button itself is the problem.",
        ],
        cta: {
          title: "Want a second set of eyes on what your data is actually showing?",
          description: "ZSpace can review your funnel data and session evidence together and confirm what's actually causing a specific drop-off.",
        },
      },
      {
        heading: "Test: Validate Before Rolling Out",
        body: [
          "Once a problem is confirmed with reasonable evidence, form a specific hypothesis and validate it — through an A/B test where traffic allows, or a careful before/after comparison on lower-traffic stores. See the [[/blogs/shopify-cro-testing-ideas|50 CRO testing ideas]] guide for structuring the test itself.",
        ],
      },
      {
        heading: "Putting the Five Questions Together",
        body: [
          "What, Where, Who, Why and Evidence/Test form a repeatable investigation sequence — the same one behind the [[/blogs/shopify-cro-audit|complete CRO audit]]. Working through them in order avoids the most common mistake in this process: jumping to a fix based on the What alone, before confirming the Why.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Want this investigation run on your store, end to end?",
          description: "See the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] for the full, structured version of this process.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Finding a real conversion problem is a sequence, not a single glance at a dashboard — What tells you there's an issue, Where and Who narrow it down, Why explains it, and Evidence and Test confirm it before you commit engineering or design time to a fix.",
        ],
      },
    ],
  },

  // ----------------------------------------------------------- FUNNEL AUDIT
  {
    slug: "shopify-funnel-audit",
    title: "Shopify Funnel Audit: Finding the Stage That's Actually Losing You Customers",
    excerpt:
      "A funnel-level audit table across sessions, product views, add-to-cart, reached checkout and completed checkout — segmented by traffic source.",
    category: "Shopify & Ecommerce",
    banner: "funnel",
    date: "2026-08-14",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What is a Shopify funnel audit?", a: "A stage-by-stage review of Shopify Analytics' conversion funnel — sessions through product views, add-to-cart, reached checkout and completed checkout — used to find exactly where visitors are dropping off, rather than looking at a single overall conversion rate." },
      { q: "Where do I find funnel data in Shopify?", a: "Shopify Analytics includes a conversion-funnel report showing sessions moving through each stage; this is the primary data source for this audit." },
      { q: "How do I know which funnel stage is genuinely weak?", a: "Compare each stage-to-stage drop against your own store's historical trend and, cautiously, against general ecommerce patterns — a sharp, unusual drop relative to your own baseline is a stronger signal than comparing to another store entirely." },
      { q: "Should I segment the funnel by traffic source?", a: "Yes — a funnel that looks fine in aggregate can hide a serious problem concentrated in one channel, like paid traffic landing on a slow page. Segmenting is essential, not optional." },
      { q: "What's the difference between a funnel audit and a full CRO audit?", a: "A funnel audit focuses specifically on the numeric funnel stages; the [[/blogs/shopify-cro-audit|complete CRO audit]] adds page-level and qualitative evidence gathering across the whole store." },
      { q: "How often should I run a funnel audit?", a: "Monthly is a reasonable cadence for most active stores, with an additional check after any major traffic-source or campaign change." },
      { q: "What if my funnel data looks fine but revenue still isn't growing?", a: "Check whether traffic itself is the constraint, or whether average order value has declined even as conversion rate holds — a funnel audit covers conversion stages, not the full revenue equation." },
      { q: "Can seasonal traffic distort a funnel audit?", a: "Yes — compare like periods where possible (same season, similar campaigns) rather than treating a holiday-season funnel as representative of a typical month." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify funnel audit reviews Shopify Analytics' conversion funnel stage by stage — sessions, product views, add-to-cart rate, reached-checkout rate, and completed-checkout rate — segmented by traffic source, to find exactly where visitors are dropping off rather than relying on a single blended conversion rate that can hide the real problem.",
        ],
      },
      {
        heading: "Why a Blended Conversion Rate Hides the Real Problem",
        body: [
          "A single site-wide conversion rate tells you almost nothing about where to focus. A store converting at 2% could be losing visitors mostly at the product page, mostly at checkout, or fairly evenly across every stage — each of those requires a completely different fix, and only a stage-by-stage funnel view distinguishes between them.",
        ],
      },
      {
        heading: "The Funnel Audit Table",
        body: ["Fill this in using your own Shopify Analytics data, segmented by the traffic sources that matter most to your store."],
        table: {
          headers: ["Funnel stage", "What to measure", "Typical warning sign", "Likely cause if weak", "Where to look next"],
          rows: [
            ["Sessions → Product views", "Product-view rate", "High sessions, low product views", "Weak navigation, homepage, or search relevance", "[[/blogs/shopify-homepage-audit|Homepage audit]], [[/blogs/shopify-search-optimization|search optimization]]"],
            ["Product views → Add to cart", "Add-to-cart rate", "Visitors view but don't add", "Weak trust signals, unclear pricing, unanswered questions", "[[/blogs/shopify-product-page-audit|Product page audit]]"],
            ["Add to cart → Reached checkout", "Reached-checkout rate", "Cart abandonment before checkout starts", "Shipping cost surprise, confusing cart UI", "[[/blogs/shopify-cart-audit|Cart audit]]"],
            ["Reached checkout → Completed checkout", "Completed-checkout rate", "Checkout started but not finished", "Long form, forced account, limited payment options", "[[/blogs/shopify-checkout-audit|Checkout audit]]"],
            ["Any stage, by device", "Mobile vs. desktop rate at each stage", "Mobile consistently lower than desktop", "Mobile-specific UX or speed issue", "[[/blogs/shopify-mobile-cro-audit|Mobile CRO audit]]"],
          ],
        },
      },
      {
        heading: "Segmenting by Traffic Source",
        body: [
          "The same funnel stage can behave very differently by channel. Paid social traffic often arrives with lower intent and needs a more convincing landing experience; organic search traffic often arrives with higher intent already. Reviewing the funnel blended across all sources can mask a channel-specific problem that only shows up once you split the data.",
        ],
        visual: { variant: "funnel", accent: "orange", caption: "The same overall funnel shape can be made up of very different channel-level funnels underneath it." },
      },
      {
        heading: "Reading Stage-to-Stage Drop-Off Correctly",
        body: [
          "Some drop-off between every stage is normal and expected — not every visitor who views a product intends to buy that session. The audit isn't about eliminating drop-off entirely; it's about finding where the drop is unusually steep relative to your own store's trend, and treating that stage as the priority.",
        ],
      },
      {
        heading: "Common Funnel Audit Findings",
        body: ["Patterns that show up repeatedly once stores actually segment their funnel data."],
        checklist: [
          "A steep drop specifically on mobile at the checkout stage, invisible in the blended number",
          "One paid campaign driving high sessions but very low product views, suggesting a landing-page mismatch",
          "A healthy add-to-cart rate paired with a weak reached-checkout rate, pointing at the cart itself rather than the product page",
          "A completed-checkout rate that drops sharply for new visitors versus returning customers, suggesting a trust or unfamiliarity issue rather than a technical one",
        ],
        cta: {
          title: "Want your funnel segmented and reviewed properly?",
          description: "ZSpace can break down your Shopify funnel by traffic source and device, and identify exactly which stage deserves attention first.",
        },
      },
      {
        heading: "From Funnel Audit to Fix",
        body: [
          "Once the weak stage is identified, move to the relevant page-specific audit in this cluster for deeper diagnosis, then prioritize and test the fix using the same evidence-based process as the rest of this cluster.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Ready for the full audit process?",
          description: "See the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] for how funnel findings connect into a prioritized roadmap.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A funnel audit is the fastest way to move from \"conversion feels low\" to a specific, measurable stage worth fixing — and segmenting by traffic source and device is what keeps a real, channel-specific problem from hiding inside a healthy-looking blended number.",
        ],
      },
    ],
  },

  // ------------------------------------------------------- PRODUCT PAGE AUDIT
  {
    slug: "shopify-product-page-audit",
    title: "The Shopify Product Page Audit: 40 Things to Check",
    excerpt:
      "A comprehensive, page-specific checklist across imagery, pricing, trust signals, descriptions, variants and mobile experience.",
    category: "Shopify & Ecommerce",
    banner: "pdphotspots",
    date: "2026-08-17",
    readingTime: "13 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What should I check first on a Shopify product page audit?", a: "Start above the fold — the primary image, price, variant selection and Add to Cart button — since that's what every visitor sees before deciding whether to scroll further." },
      { q: "How many product images does a product page need?", a: "Enough to answer the visitor's real questions — usually multiple angles, a scale or context shot, and any relevant detail shots. More isn't always better if the images are redundant rather than informative." },
      { q: "Do all 40 checklist items apply to every type of product?", a: "No — a few, like a size guide, apply specifically to apparel and footwear. Skip items that genuinely don't fit your catalog rather than forcing them." },
      { q: "How does this relate to the general CRO checklist?", a: "The [[/blogs/shopify-cro-checklist|CRO checklist]] covers the whole store briefly; this audit goes deep on the product page specifically, which is usually the highest-leverage single page type in the store." },
      { q: "Should reviews be shown even if a product has very few?", a: "Yes, real reviews — even a small number — tend to build more trust than no reviews at all, as long as they're genuine and not fabricated or purchased." },
      { q: "How do I measure whether product page changes actually worked?", a: "Track add-to-cart rate and product conversion rate for the specific page in Shopify Analytics before and after the change, ideally with an A/B test where traffic allows." },
      { q: "Is a longer or shorter product description better?", a: "Neither universally — length should match how much genuine explanation the product needs. A complex product benefits from more detail; a simple, well-understood product doesn't need padding." },
      { q: "What's the single highest-impact product page change most stores are missing?", a: "There's no universal answer — it depends on where your own evidence points. Trust-signal placement and mobile usability are common candidates, but confirm with your own data rather than assuming." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify product page audit checks whether the page above the fold, product imagery, pricing and variant clarity, trust signals, description content, and mobile experience all work together to move a genuinely interested visitor toward adding the product to cart. This guide breaks that into 40 specific checks across six categories — use it alongside your own add-to-cart rate data to confirm which checks matter most for your store.",
        ],
      },
      {
        heading: "Above the Fold",
        body: ["What a visitor sees before any scrolling."],
        checklist: [
          "Primary image loads quickly and clearly represents the product",
          "Price is visible without scrolling",
          "Variant selection (size, color) is visible and easy to use",
          "Add to Cart button is visually prominent and unambiguous",
          "Product title clearly identifies what the product is",
          "Stock status (in stock, low stock, out of stock) is visible",
          "No layout shift as images and price load in",
        ],
      },
      {
        heading: "Imagery and Media",
        body: ["Helping a visitor picture owning the product."],
        checklist: [
          "Multiple angles are shown, not just one front-facing shot",
          "At least one image shows the product in real use or context",
          "A scale reference is provided where size is hard to judge from a photo alone",
          "Zoom or a detail view is available for texture or material detail",
          "Video is included where it genuinely helps demonstrate the product",
          "Images are optimized for fast load without visible quality loss",
        ],
      },
      {
        heading: "Pricing and Variants",
        body: ["Removing ambiguity at the exact decision point."],
        checklist: [
          "Price is unambiguous, including any discount or comparison pricing shown honestly",
          "Variant options are easy to distinguish visually, not just by label text",
          "Selecting a variant updates price, image and availability correctly",
          "Size or fit guidance is available for apparel and footwear",
          "Bundle or quantity discounts, if offered, are clearly explained",
        ],
      },
      {
        heading: "Trust and Social Proof",
        body: ["See the [[/blogs/shopify-trust-optimization|trust optimization guide]] for the full store-wide version."],
        checklist: [
          "Reviews or ratings are visible near the price and CTA, not only lower on the page",
          "Reviews are genuine — never fabricated or purchased",
          "Return and shipping policy information is accessible from the product page",
          "Security or payment trust marks are present if relevant to the audience",
          "Any certifications or claims (materials, sourcing) are accurate and verifiable",
        ],
        cta: {
          title: "Want your product pages checked against real funnel data?",
          description: "ZSpace can audit product page performance using actual Shopify Analytics add-to-cart data, not just a visual review.",
        },
      },
      {
        heading: "Description and Content",
        body: ["Answering real questions, not just listing specifications."],
        checklist: [
          "Description addresses genuine pre-purchase questions, not only specifications",
          "Tone and content match how the target customer actually talks about the product",
          "Common objections (fit, durability, care) are addressed directly where relevant",
          "Content is scannable — not a single dense block of text",
          "No exaggerated or unverifiable claims about results or performance",
          "FAQ content, if present, is specific to the product, not generic boilerplate",
        ],
      },
      {
        heading: "Mobile and Technical",
        body: ["See the [[/blogs/shopify-mobile-cro-audit|mobile CRO audit]] for the deeper store-wide version."],
        checklist: [
          "Variant selectors and Add to Cart are easy to tap accurately on mobile",
          "Images load quickly on mobile connections, not just desktop broadband",
          "No horizontal scroll or cut-off content on common mobile widths",
          "Sticky Add to Cart bar (if used) doesn't obscure important content",
          "Page passes Core Web Vitals thresholds specifically on mobile",
          "Related or recommended products don't push the primary CTA below the fold on mobile",
        ],
      },
      {
        heading: "Related Products and Cross-Sell",
        body: [
          "Recommendations can lift average order value, but placed carelessly they compete with the primary purchase decision instead of supporting it — see the [[/blogs/shopify-product-recommendations|product recommendations guide]] for placement guidance that avoids this.",
        ],
      },
      {
        heading: "Using This Audit Alongside Real Data",
        body: [
          "A visual pass through this checklist finds obvious gaps; pairing it with your actual add-to-cart rate and session recordings confirms which gaps are actually costing you conversions versus which are minor.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Want the full audit process applied to your product pages?",
          description: "See the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] for how page-level findings feed into a prioritized roadmap.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The product page is usually the highest-leverage single page type in a Shopify store — a small improvement here compounds across every product in the catalog. Work through these 40 checks methodically, then confirm with real add-to-cart data which fixes are actually worth prioritizing first.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------- HOMEPAGE AUDIT
  {
    slug: "shopify-homepage-audit",
    title: "Shopify Homepage Audit: A Page-by-Page Checklist",
    excerpt:
      "A structured audit checklist for the page that usually carries more traffic than any other single page in a Shopify store.",
    category: "Shopify & Ecommerce",
    banner: "homepageanatomy",
    date: "2026-08-19",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "How is this different from the Shopify homepage CRO guide?", a: "The [[/blogs/shopify-homepage-cro|homepage CRO guide]] explains the strategy behind homepage optimization in depth; this article is the condensed, checklist-format audit version for a fast structured review." },
      { q: "What's the single most important thing to check on a homepage?", a: "Whether the above-the-fold content clearly answers \"what is this, and is it for me\" within the first screen, without requiring a scroll." },
      { q: "How do I measure homepage performance specifically?", a: "Check homepage exit rate and the downstream product-view rate from homepage sessions in Shopify Analytics — both point at whether the page is doing its job." },
      { q: "Should the homepage audit be different for mobile vs. desktop?", a: "Yes — review each separately. A homepage that works well on desktop can have entirely different issues on mobile, particularly around hero sizing and navigation." },
      { q: "How often should a homepage be audited?", a: "Quarterly is reasonable for most stores, with an additional check after any major promotion, theme update or catalog shift." },
      { q: "Does a slider or carousel always hurt homepage conversion?", a: "Not always, but it's a common risk — most visitors never see past the first frame, so anything essential shouldn't depend on a rotation being seen." },
      { q: "What if my homepage exit rate is high but product views are still strong?", a: "That can be fine — some visitors legitimately leave after finding what they need elsewhere in the same session, or bookmark and return later. Look at the full picture, not exit rate alone." },
      { q: "Where does homepage audit fit into the broader CRO audit?", a: "It's one of several page-specific audits feeding into the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]], which prioritizes findings across the whole store." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify homepage audit checks whether the page — usually the single highest-traffic page in the store — clearly communicates what the store sells within the first screen, gives visitors an obvious next step, and carries the right trust signals without becoming cluttered. This checklist-format audit is the condensed companion to the fuller [[/blogs/shopify-homepage-cro|homepage CRO guide]].",
        ],
      },
      {
        heading: "Above the Fold",
        body: ["The first impression, before any scrolling."],
        checklist: [
          "Value proposition is clear within the first screen on both desktop and mobile",
          "One primary call to action is visually obvious, not competing with several others",
          "Hero doesn't rely on a slider rotation for essential messaging",
          "Navigation is visible and uses customer-facing language",
          "Page loads without visible layout shift as the hero image renders",
        ],
      },
      {
        heading: "Navigation and Entry Points",
        body: ["Whether visitors can move from homepage to product quickly."],
        checklist: [
          "Navigation categories match how customers think about the catalog",
          "At least one clear entry point exists for high-intent visitors (bestsellers, current promotion)",
          "At least one clear entry point exists for browsing visitors (collections, categories)",
          "Search is accessible and prominent, not hidden behind an extra click",
        ],
      },
      {
        heading: "Merchandising",
        body: ["What's actually featured, and why."],
        checklist: [
          "Featured products are a curated, current selection, not the full catalog",
          "Featured selection is revisited periodically based on actual sales data",
          "Promotional banners are specific and don't compete with the primary hero message",
          "No orphaned or discontinued products still featured on the homepage",
        ],
      },
      {
        heading: "Trust and Social Proof",
        body: ["See the [[/blogs/shopify-social-proof|social proof guide]] for the deeper version."],
        checklist: [
          "At least one lightweight trust signal appears above the fold without crowding the hero",
          "Star rating summary or press mention is genuine and current",
          "Return policy or guarantee is easy to find from the homepage",
        ],
        cta: {
          title: "Want your homepage checked against real visitor behavior?",
          description: "ZSpace can audit homepage exit rate and downstream engagement using your actual Shopify Analytics data.",
        },
      },
      {
        heading: "Mobile Homepage",
        body: ["See the [[/blogs/shopify-mobile-cro-audit|mobile CRO audit]] for the full mobile-specific checklist."],
        checklist: [
          "Hero message and CTA remain clear on common mobile screen widths",
          "Navigation is usable with one hand on mobile",
          "Tap targets are large enough for reliable use",
          "Mobile load time is verified separately from desktop",
        ],
      },
      {
        heading: "Measuring Homepage Performance",
        body: [
          "Check homepage exit rate and the rate at which homepage sessions go on to view a product in Shopify Analytics. A high exit rate paired with low downstream product views is the clearest signal the homepage itself — not a later funnel stage — needs attention.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Ready for the full store audit?",
          description: "See the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] for how homepage findings fit into the full prioritized roadmap.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Because the homepage usually carries more traffic than any other single page, even a small improvement compounds across a large share of total sessions. Work through this checklist quarterly, and confirm findings against real exit-rate and downstream engagement data before prioritizing a fix.",
        ],
      },
    ],
  },

  // ------------------------------------------------------ COLLECTION AUDIT
  {
    slug: "shopify-collection-page-audit",
    title: "Shopify Collection Page Audit: Getting Browsers to a Product Faster",
    excerpt:
      "A checklist for the pages that sit between discovery and the product decision — filters, sorting, imagery and category structure.",
    category: "Shopify & Ecommerce",
    banner: "appshelf",
    date: "2026-08-21",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "Why does the collection page matter for conversion?", a: "It's the bridge between a browsing visitor and a specific product decision — a collection page that's hard to filter or sort through loses visitors before they ever reach a product page." },
      { q: "What filters should a Shopify collection page have?", a: "Whatever attributes customers actually shop by for that category — size, color and price are common, but the right set depends on your specific catalog and how customers describe what they want." },
      { q: "How many products should appear per collection page before pagination?", a: "Enough to give a real sense of selection without forcing excessive scrolling — the right number depends on product density and image size, and is worth testing rather than assuming." },
      { q: "Should collection pages have a default sort order?", a: "Yes — a deliberate default (bestsellers, or relevance) usually works better than leaving sort entirely to chance or defaulting to an arbitrary internal order." },
      { q: "How does this relate to the Shopify Search & Discovery app?", a: "Search & Discovery powers filtering, sorting and search relevance on Shopify — most of the technical implementation behind this audit's findings runs through it." },
      { q: "Should out-of-stock products be shown on collection pages?", a: "Often yes, clearly marked, rather than hidden entirely — visibility can support future intent and search relevance, as long as availability is honestly represented." },
      { q: "How do I measure whether collection page changes are working?", a: "Track collection-to-product-view rate in Shopify Analytics, alongside filter usage if your analytics or Search & Discovery setup reports it." },
      { q: "How does this connect to the broader CRO audit?", a: "It's one of the page-specific audits feeding into the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]]." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify collection page audit checks whether filters, sorting, product imagery and category structure actually help a browsing visitor narrow down to a relevant product quickly. Collection pages sit between discovery and the product decision — friction here loses visitors before they ever reach a product page to convert on.",
        ],
      },
      {
        heading: "Filtering and Sorting",
        body: ["The core mechanism for narrowing a large catalog down to something relevant."],
        checklist: [
          "Filters cover the attributes customers actually shop by for this category",
          "Filter combinations return accurate, non-empty results in common cases",
          "A deliberate default sort order is set, not an arbitrary internal one",
          "Filter and sort controls are easy to find and use on mobile",
          "Active filters are clearly shown and easy to remove",
        ],
      },
      {
        heading: "Product Presentation",
        body: ["What a visitor sees before clicking into any single product."],
        checklist: [
          "Product images are consistent in framing and quality across the collection",
          "Price and key differentiators (color, size range) are visible from the grid view",
          "Star rating or review count is visible from the grid where available",
          "Out-of-stock products are clearly marked, not indistinguishable from available ones",
          "Loading is fast even for large collections, without a jarring layout shift",
        ],
      },
      {
        heading: "Category Structure",
        body: [
          "Collections should map to how customers actually search and browse, not strictly to internal inventory categories — overlapping or redundant collections create confusion rather than helping visitors narrow down their choice.",
        ],
        visual: { variant: "grid", accent: "orange", caption: "A collection page's job is narrowing choice, not just displaying inventory — structure and filters should actively reduce decision effort." },
      },
      {
        heading: "Pagination and Load Behavior",
        body: ["How visitors move through larger collections."],
        checklist: [
          "Pagination or infinite scroll is implemented without hurting page speed",
          "Visitors can return to their previous scroll position after viewing a product and going back",
          "Collection page respects filter and sort state when navigating back",
        ],
        cta: {
          title: "Want your collection pages checked against real browsing behavior?",
          description: "ZSpace can review filter usage and collection-to-product-view rate using your actual Shopify Analytics and Search & Discovery data.",
        },
      },
      {
        heading: "Mobile Collection Experience",
        body: [
          "Filter and sort controls need particular attention on mobile, where screen space is limited — see the [[/blogs/shopify-mobile-cro-audit|mobile CRO audit]] for the broader mobile-specific checklist across the store.",
        ],
      },
      {
        heading: "Measuring Collection Page Performance",
        body: [
          "Track collection-to-product-view rate in Shopify Analytics as the core signal — a collection page visitors leave without viewing any product is failing at its one job, regardless of how it looks.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Ready to go deeper across the whole store?",
          description: "See the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] for how collection-page findings fit into a full prioritized roadmap.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Collection pages don't get the attention product pages and checkout do, but they're where a browsing visitor either finds a relevant product quickly or gives up. Working filters, a deliberate sort order, and consistent presentation are the highest-leverage fixes most stores are missing. For the design principles behind listing pages on any platform, see [[/blogs/ecommerce-category-page-design|ecommerce category page design]].",
        ],
      },
    ],
  },

  // -------------------------------------------------------------- CART AUDIT
  {
    slug: "shopify-cart-audit",
    title: "Shopify Cart Audit: Why Items Get Added but Checkout Never Starts",
    excerpt:
      "A checklist for the page sitting between add-to-cart and checkout — cost transparency, editability and momentum.",
    category: "Shopify & Ecommerce",
    banner: "cartdrawer",
    date: "2026-08-24",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What's the difference between a cart audit and a checkout audit?", a: "The cart audit covers the page or drawer visitors see after adding an item and before starting checkout; the [[/blogs/shopify-checkout-audit|checkout audit]] covers the actual purchase flow itself — two distinct stages with different common issues." },
      { q: "Why do items get abandoned in the cart specifically?", a: "Common causes include an unexpected shipping cost, a confusing or slow cart interface, or the visitor simply comparison shopping without full intent to buy that session — see the [[/blogs/shopify-conversion-killers|conversion killers guide]] for more on diagnosing this." },
      { q: "Should I show shipping cost in the cart or wait until checkout?", a: "Showing it as early as the cart, or even earlier via a shipping estimate, tends to reduce the late-stage surprise that drives abandonment — waiting until the final checkout step is a common, avoidable mistake." },
      { q: "Does a cart drawer convert better than a full cart page?", a: "Neither is universally better — a drawer keeps visitors in context without a page reload, while a full page can show more detail. The right choice depends on your store; test rather than assume." },
      { q: "Should I add upsells or cross-sells in the cart?", a: "They can lift average order value if relevant and not intrusive, but avoid letting them distract from the core action of proceeding to checkout." },
      { q: "How do I measure cart performance specifically?", a: "Track the reached-checkout rate — the share of sessions that add an item to cart and go on to start checkout — in Shopify Analytics." },
      { q: "Should the cart require a discount code field to be prominent?", a: "A visible-but-not-dominant discount field is reasonable; an overly prominent one can prompt visitors to leave and search for a code, and some never return." },
      { q: "How does this connect to the broader CRO audit?", a: "It's one of the page-specific audits feeding into the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]]." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify cart audit checks whether the cart page or drawer keeps momentum after an item is added — showing costs transparently, allowing easy edits, and giving a clear path to checkout without surprises. This is the stage between add-to-cart and reached-checkout, and it's one of the most common places genuine purchase intent quietly stalls.",
        ],
      },
      {
        heading: "Cost Transparency",
        body: ["The single most common reason a cart stalls before checkout even starts."],
        checklist: [
          "Shipping cost or a clear shipping estimate is visible in the cart, not only revealed at checkout",
          "Any threshold for free shipping is shown with progress toward it",
          "Taxes are either included or clearly flagged as calculated at checkout",
          "Discounts, if applied, are clearly itemized",
        ],
      },
      {
        heading: "Editability",
        body: ["Whether a visitor can adjust their order without friction."],
        checklist: [
          "Quantity can be changed directly in the cart without a page reload where possible",
          "Variant (size, color) can be changed without removing and re-adding the item",
          "Removing an item is a single, clear action",
          "Cart total updates immediately and accurately after any change",
        ],
      },
      {
        heading: "Visibility and Access",
        body: ["Whether the cart is easy to find and review at any point in the session."],
        checklist: [
          "Cart icon or link is visible from every page, not just after an add-to-cart action",
          "Cart item count updates immediately and visibly after adding a product",
          "Cart contents persist correctly across a session, including after a return visit",
        ],
        visual: { variant: "shelf", accent: "blue", caption: "The cart's job is preserving momentum — every extra step or surprise here is a chance for genuine intent to stall out." },
      },
      {
        heading: "Momentum Toward Checkout",
        body: ["Reducing the distance between reviewing the cart and starting checkout."],
        checklist: [
          "A clear, prominent \"Checkout\" call to action is present at all times in the cart",
          "Trust signals (security, return policy) are present without crowding the checkout CTA",
          "Any upsell or cross-sell content doesn't visually compete with the primary checkout action",
          "Cart works reliably on mobile, including quantity and variant editing",
        ],
        cta: {
          title: "Want to know exactly where your cart is losing momentum?",
          description: "ZSpace can review your reached-checkout rate alongside real session recordings to pinpoint the cause.",
        },
      },
      {
        heading: "Common Cart Mistakes",
        body: [
          "The most frequent, avoidable issues: revealing shipping cost only at the final checkout step, requiring a full page reload to adjust quantity, and letting the cart go stale with outdated pricing that surprises the visitor at checkout — see the [[/blogs/shopify-cro-mistakes|CRO mistakes guide]] for more patterns like these.",
        ],
      },
      {
        heading: "Measuring Cart Performance",
        body: [
          "Track reached-checkout rate as the primary signal for cart health — a strong add-to-cart rate paired with a weak reached-checkout rate points squarely at the cart itself as the stage needing attention.",
        ],
        table: croAuditFrameworkTable,
        cta: {
          title: "Ready to audit the rest of the funnel?",
          description: "See the [[/blogs/shopify-cro-audit|complete Shopify CRO audit]] and the related [[/blogs/shopify-checkout-audit|checkout audit]] for the next stage.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The cart is an easy stage to overlook — it's not the product decision and it's not the purchase itself, but it's exactly where cost surprises and friction quietly convert real intent into an abandoned session. Cost transparency and easy editability are the two highest-leverage fixes most carts are missing.",
        ],
      },
    ],
  },
];
