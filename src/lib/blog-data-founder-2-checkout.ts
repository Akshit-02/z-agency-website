import type { BlogPost } from "./blog-data";

/**
 * Founder batch 2, topic 32: Shopify checkout customisation by plan.
 * Capability guide; the conversion-focused companion is
 * /blogs/shopify-checkout-optimization. No prices are quoted.
 * Sources checked 2026-10-14 on help.shopify.com, shopify.dev and
 * changelog.shopify.com: checkout apps plan table, checkout extensibility,
 * checkout UI extensions (API 2026-07), Shopify Functions, Checkout Blocks,
 * order value limits (13 Apr 2026), per-market checkout (16 Mar 2026),
 * post-purchase extensions (beta), pixels, checkout style (background
 * images removed 5 Feb 2026), checkout.liquid, Scripts and ScriptTag dates.
 */
export const founderCheckoutPosts2: BlogPost[] = [
  {
    slug: "shopify-checkout-customisation-guide",
    title: "Can You Customise Shopify Checkout? Options, Limitations and What Merchants Should Know",
    seoTitle: "Shopify Checkout Customisation: What Each Plan Allows",
    excerpt:
      "What you can change in Shopify checkout on each plan: Plus-only extensions, Functions, pixels, post-purchase, legacy end dates and safe testing.",
    category: "Shopify & Ecommerce",
    banner: "plusvsplans",
    sceneKind: "checkout",
    bannerAlt:
      "Shopify checkout capabilities by plan: branding, order value limits, public Function apps, pixels and thank-you page extensions on Basic and up; per-market customisation on Advanced and up; extensions on the information, shipping and payment steps, the Checkout Branding API and custom Function apps on Plus only",
    date: "2026-10-14",
    readingTime: "14 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    relatedSlugs: ["shopify-checkout-optimization", "shopify-plus-vs-shopify", "shopify-checkout-audit"],
    faqs: [
      {
        q: "Can I add a custom field to Shopify checkout without Plus?",
        a: "Not on the information, shipping or payment steps. Shopify limits checkout UI extensions on those steps to Shopify Plus. On Basic, Grow and Advanced you can collect the information before checkout, for example on the cart page through your theme, or ask for it on the thank you page with an app extension, which works for optional details but not for anything you need before the order is placed.",
      },
      {
        q: "Can I still edit checkout.liquid?",
        a: "No. Shopify stopped supporting checkout.liquid on the information, shipping and payment steps from 13 August 2024, and sunset it, along with additional scripts, on the thank you and order status pages on 28 August 2025. Customisation now goes through the checkout and accounts editor, apps, Shopify Functions, UI extensions and pixels.",
      },
      {
        q: "What replaced Shopify Scripts?",
        a: "Shopify Functions. Editing and publishing Scripts ended on 15 April 2026 and all Scripts stopped running on 30 June 2026. Discount, shipping and payment logic now runs through Function APIs such as Discount, Cart Transform, Delivery Customization, Payment Customization and Cart and Checkout Validation.",
      },
      {
        q: "Does Shopify's post-purchase upsell page work for every order?",
        a: "No. Post-purchase extensions are available from Basic upward but are still in beta, and live stores must request access. Shopify does not show the page for wallet or instalment payments, some card gateways, orders outside the Online Store channel, local delivery, orders with duties and multiple currencies, or orders under $0.50.",
      },
      {
        q: "Can I customise checkout differently for each country?",
        a: "Since 16 March 2026, stores on Advanced and Plus can customise checkout and accounts settings and branding by market in the checkout and accounts editor. Shopify's Markets documentation lists per-market Checkout Blocks customisation as Plus only.",
      },
      {
        q: "Is the Starter plan covered by these features?",
        a: "Shopify's checkout customisation documentation describes features for Basic and higher and for Plus, and does not list Starter. If you are on Starter, confirm with Shopify before planning any checkout work.",
      },
    ],
    content: [
      {
        heading: "Yes, but how far depends on your plan",
        body: [
          "**You can customise Shopify checkout on every plan from Basic upward, but only within the layers Shopify provides: the checkout and accounts editor for branding and settings, App Store apps that use Shopify Functions, pixels for tracking, and app extensions on the thank you, order status and customer account pages. Adding fields or content to the information, shipping and payment steps, using the Checkout Branding API and running your own custom Function apps all need Shopify Plus.** Nobody, on any plan, can edit the checkout's code directly any more.",
          "Shopify's help centre puts it simply: standard customisations are available on Basic or higher, and \"advanced checkout customization features are available only on the Shopify Plus plan\" ([[https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility|Shopify Help Center: checkout extensibility]]). This guide sets out exactly where that line sits, what no plan can change, and how to match a specific requirement to the right approach. If your goal is more completed orders rather than a new feature, start with [[/blogs/shopify-checkout-optimization|how to optimise Shopify checkout for conversion]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Branding, layout choice, order value limits, App Store Function apps, pixels and thank you page extensions work from Basic upward.",
          "Changes inside the information, shipping and payment steps need Plus.",
          "Custom (private) apps that use Shopify Functions need Plus; public App Store apps with Functions do not.",
          "Per-market checkout settings and branding need Advanced or Plus.",
          "checkout.liquid, additional scripts and Shopify Scripts no longer work. Script tags are being phased out by 1 March 2027.",
          "Post-purchase upsells are available from Basic but are still in beta and do not appear on every order.",
        ],
      },
      {
        heading: "The building blocks of Shopify checkout",
        body: [
          "Shopify hosts the checkout for every store. Instead of editing templates, you work through a set of tools, each with a different job. Knowing which tool a request needs is most of the battle, because the tool decides the plan.",
        ],
        table: {
          headers: ["Tool", "What it does", "Who builds it"],
          rows: [
            ["**Checkout and accounts editor**", "Logo, colours, fonts, form field style, one-page or three-page layout, address autocomplete, Buy again button", "Merchant, in the admin"],
            ["**Checkout Blocks**", "Shopify's free app for adding content blocks and rules without code; most features are Plus only", "Merchant"],
            ["**Shopify Functions**", "Server-side logic: discounts, bundles, hiding or renaming payment and delivery options, blocking orders that break a rule", "App developers, inside public or custom apps"],
            ["**Checkout UI extensions**", "New content and fields at set points in checkout and on the thank you and order status pages", "App developers"],
            ["**Customer account UI extensions**", "Content and features in customer account pages", "App developers"],
            ["**Web pixels**", "Send checkout and purchase events to analytics and ad platforms, in a sandbox that cannot change the page", "Apps, or a developer adding a custom pixel"],
            ["**Checkout Branding API**", "Detailed styling beyond what the editor offers", "Developers, Plus only"],
            ["**Post-purchase extensions**", "An offer page shown after payment, before the thank you page", "App developers (beta)"],
          ],
        },
      },
      {
        heading: "Capability by plan",
        body: [
          "This matrix combines Shopify's checkout apps plan table with two later changelog updates. Where the help centre and the changelog disagree, the newer changelog entry is used and noted. Shopify's documentation describes plans as \"Basic or higher\" and does not list Starter. Plan features change, so check the linked pages before you commit to a build.",
        ],
        table: {
          headers: ["Capability", "Basic and Grow", "Advanced", "Plus", "Notes"],
          rows: [
            ["Checkout and accounts editor (branding and settings)", "Yes", "Yes", "Yes", "Background images in the header and main content area can no longer be added since 5 Feb 2026"],
            ["Order value limits (minimum or maximum order subtotal)", "Yes", "Yes", "Yes", "Via Checkout Blocks; extended to all plans on 13 Apr 2026"],
            ["Checkout Blocks content blocks on thank you and order status pages", "Yes", "Yes", "Yes", "Other Checkout Blocks features are Plus only"],
            ["Public App Store apps using Shopify Functions", "Yes", "Yes", "Yes", "Discounts, bundles, payment and delivery rules, validation"],
            ["Web pixels (app and custom pixels)", "Yes", "Yes", "Yes", "Load on storefront, checkout, thank you and order status pages; respect consent settings"],
            ["Post-purchase extensions", "Yes", "Yes", "Yes", "Beta; live stores must request access; not shown on some orders"],
            ["UI extensions on thank you and order status pages", "Yes", "Yes", "Yes", ""],
            ["UI extensions on customer account pages", "Yes", "Yes", "Yes", ""],
            ["Per-market checkout and accounts settings and branding", "No", "Yes", "Yes", "Added 16 Mar 2026; per-market Checkout Blocks customisation is Plus only"],
            ["UI extensions on the information, shipping and payment steps", "No", "No", "Yes", ""],
            ["Checkout Branding API", "No", "No", "Yes", ""],
            ["Custom apps using Shopify Functions", "No", "No", "Yes", "Network access from Functions is further limited; see below"],
            ["Other Checkout Blocks features", "No", "No", "Yes", ""],
            ["Third-party address autocomplete", "No", "No", "Yes", ""],
          ],
        },
        callout: {
          type: "note",
          text: "Sources for the matrix: [[https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-apps|Shopify Help Center: checkout apps]], [[https://changelog.shopify.com/posts/checkout-blocks-order-value-limits-available-on-all-plans|Shopify changelog: order value limits on all plans (13 Apr 2026)]], [[https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market|Shopify changelog: customise checkout by market (16 Mar 2026)]], [[https://help.shopify.com/en/manual/markets/getting-started/requirements-and-considerations|Shopify Help Center: Markets requirements]] and [[https://help.shopify.com/en/manual/checkout-settings/checkout-blocks|Shopify Help Center: Checkout Blocks]]. The Checkout Blocks help page had not yet been updated for order value limits when checked.",
        },
      },
      {
        heading: "Public apps versus custom apps: the rule people miss",
        body: [
          "Shopify Functions are the main way to change checkout logic, and their plan rule depends on how the app is distributed. Shopify's developer documentation says \"stores on any plan can use public apps that are distributed through the Shopify App Store and contain functions\", while \"only stores on a Shopify Plus plan can use custom apps that contain Shopify Function APIs\" ([[https://shopify.dev/docs/api/functions|shopify.dev: Shopify Functions]]).",
          "In practice, if an App Store app already does what you need, such as hiding a payment method above an order value, you can usually use it on Basic. If you want logic written only for your store, built as a custom app, you need Plus. A third route is a public app built for your requirement and listed on the App Store, which is a much bigger commitment because public apps go through Shopify's App Store review.",
          "One further limit: Functions normally work only with the data Shopify passes to them. Calling your own server from a Function (network access) is, in Shopify's words, \"limited to custom apps installed on Enterprise stores\", and must be requested. If a requirement depends on live data from an ERP or pricing service at checkout, check this early.",
        ],
      },
      {
        heading: "What you cannot change on any plan",
        body: [
          "Some limits apply even on Plus. Knowing them saves time spent on requirements that cannot be built.",
        ],
        checklist: [
          "**The checkout code itself.** There is no template to edit and no way to inject your own HTML, CSS or JavaScript into checkout. checkout.liquid is gone and additional scripts are view-only.",
          "**Anything outside the provided extension points.** UI extensions render in the places Shopify defines, using Shopify's components, not anywhere on the page.",
          "**Pixels that change the page.** Pixels run in a sandbox and cannot render buttons, forms or banners. In markets that require consent, they run only when the visitor has given the permissions the pixel needs ([[https://help.shopify.com/en/manual/promoting-marketing/pixels/overview|Shopify Help Center: pixels]]).",
          "**New background images** in the checkout header or main content area. Shopify stopped allowing these on 5 February 2026; existing images can only be removed ([[https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-style|Shopify Help Center: checkout style]]).",
          "**Post-purchase pages on every order.** They are skipped for certain payment methods, channels and international orders (see the FAQ below).",
          "**Shopify Scripts and script tags.** Scripts stopped running on 30 June 2026, and storefront script tags are being retired.",
        ],
      },
      {
        heading: "One-page or three-page checkout",
        body: [
          "Shopify's default layout is a one-page checkout, and you can switch to three pages (information, shipping, payment) in the checkout and accounts editor. The layout switch is listed among the editor settings available on all plans, and Shopify says existing customisations keep working when you switch, although the header layout differs, so check images and logo placement ([[https://help.shopify.com/en/manual/checkout-settings/one-page-checkout|Shopify Help Center: one-page checkout]]).",
          "The plan rule for the information, shipping and payment steps still applies on one-page checkout: those areas are part of the page on one-page checkout, but adding UI extensions to them remains Plus only. Choose a layout based on your own data, not on a general rule. If you switch, measure checkout completion before and after, by device.",
        ],
      },
      {
        heading: "End dates for checkout.liquid, Scripts and script tags",
        body: [
          "Many older customisations stopped working over the last two years. If a feature disappeared from your checkout, or tracking broke on the thank you page, one of these dates is the likely reason.",
        ],
        table: {
          headers: ["Date", "What changed", "Source"],
          rows: [
            ["13 Aug 2024", "checkout.liquid stopped working on the information, shipping and payment steps", "[[https://changelog.shopify.com/posts/the-checkout-liquid-theme-file-is-being-deprecated|Shopify changelog]]"],
            ["28 Aug 2025", "checkout.liquid and additional scripts sunset on the thank you and order status pages; script tags sunset there for Plus stores; the additional scripts box became view-only", "[[https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid|shopify.dev: checkout.liquid]]"],
            ["15 Apr 2026", "Editing and publishing Shopify Scripts ended", "[[https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026|shopify.dev changelog]]"],
            ["30 Jun 2026", "All Shopify Scripts stopped running; Functions replace them", "Same"],
            ["26 Aug 2026", "Deadline for non-Plus stores to upgrade thank you and order status pages; script tags sunset there for non-Plus stores", "[[https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade|Shopify Help Center: checkout upgrade]]"],
            ["1 Oct 2026", "Creating or updating script tags through the API returns errors; existing tags keep running", "[[https://shopify.dev/changelog/online-store-script-tags-deprecation|shopify.dev changelog]]"],
            ["1 Mar 2027", "Shopify stops loading script tags on storefronts", "Same"],
          ],
        },
        callout: {
          type: "tip",
          text: "If your tracking was built on additional scripts or script tags, rebuild it as web pixels (an app pixel from your analytics provider, or a custom pixel) and test that purchase events still arrive. For apps that inject storefront scripts, ask the developer whether they have moved to theme app extensions before 1 March 2027.",
        },
      },
      {
        heading: "Requirement, approach and plan: a lookup table",
        body: [
          "Use this table when a stakeholder asks for a checkout change. Find the closest requirement, then check the approach and the minimum plan. \"Public app\" means an existing Shopify App Store app; \"custom app\" means one built only for your store.",
        ],
        table: {
          headers: ["Requirement", "Approach", "Minimum plan"],
          rows: [
            ["Match checkout to your brand (logo, colours, fonts)", "Checkout and accounts editor", "Basic"],
            ["Styling the editor cannot do", "Checkout Branding API", "Plus"],
            ["Set a minimum or maximum order value", "Checkout Blocks order value limits", "Basic"],
            ["Hide cash on delivery above a set value, or reorder or rename payment methods", "Payment Customization Function", "Basic with a public app; Plus with a custom app"],
            ["Hide or rename delivery options (for example no express to remote postcodes)", "Delivery Customization Function", "Basic with a public app; Plus with a custom app"],
            ["Block orders that break a rule (quantity limits, restricted products)", "Cart and Checkout Validation Function", "Basic with a public app; Plus with a custom app"],
            ["Tiered discounts or bundles that used to run on Scripts", "Discount and Cart Transform Functions", "Basic with a public app; Plus with a custom app"],
            ["Add a gift message, delivery instructions or a business tax ID field during checkout", "Checkout UI extension on the information, shipping or payment step", "Plus (on other plans, collect it before checkout)"],
            ["Show delivery promises or reassurance inside checkout", "Checkout UI extension or Checkout Blocks", "Plus"],
            ["Add content, a survey or an offer on the thank you or order status page", "UI extension app or Checkout Blocks content block", "Basic"],
            ["Offer an upsell after payment", "Post-purchase extension (beta) or a thank you page extension", "Basic (access request needed for post-purchase)"],
            ["Send purchase events to GA4, Meta or other platforms", "Web pixel (app or custom pixel)", "Basic"],
            ["Different checkout branding or settings per country", "Per-market configuration in the editor", "Advanced"],
            ["Different Checkout Blocks per market", "Checkout Blocks by market", "Plus"],
            ["Logic that needs live data from your own systems at checkout", "Custom app; Functions network access by request", "Plus, and Shopify limits network access further"],
            ["Wholesale payment terms and B2B pricing", "Native B2B features; see the B2B guide", "Varies by feature"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Most requests from non-Plus stores fall into two groups: rules (handled by public Function apps) and post-order content (handled by thank you page extensions). Requests to add things inside the first three checkout steps are the ones that genuinely need Plus.",
        },
      },
      {
        heading: "Hypothetical example: a D2C store on Grow",
        body: [
          "Hypothetical example: a skincare brand on the Grow plan wants four changes: hide cash on delivery for orders above a set value, ask for a gift message, offer a refill after purchase, and fix purchase tracking that stopped when its additional scripts were retired.",
          "Using the lookup table, cash on delivery can be hidden with an App Store app built on the Payment Customization Function. Purchase tracking moves to the analytics provider's app pixel or a custom pixel. The refill offer could use a post-purchase extension once access is granted, but it will not show for wallet payments or some international orders, so a thank you page extension is the more predictable first step. The gift message is the only Plus-level request: on Grow, the brand would add an optional gift message field to the cart page through its theme. None of these changes alone justifies Plus; a growing list of in-checkout requirements might.",
        ],
      },
      {
        heading: "Should you upgrade to Plus for checkout?",
        body: [
          "Checkout is rarely the only reason to move to Plus, but it is a common trigger. For the full comparison, see [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]]. Check Shopify's current pricing page for Plus costs.",
        ],
        checklist: [
          "**Plus is worth considering when** several requirements need fields or content inside the information, shipping or payment steps; you need logic only a custom Function app can provide; you need Checkout Blocks beyond content blocks and order value limits; or you rebuilt Scripts logic and no public app fits.",
          "**Plus is probably not needed when** your requirements are payment or delivery rules covered by App Store apps, tracking, thank you page content or post-purchase offers, or when the real issue is unexpected costs or slow delivery, which no checkout extension fixes.",
          "**Advanced may be enough when** the main need is different checkout branding or settings per market.",
          "**Before deciding,** list each requirement against the lookup table above. If only one item needs Plus, look for a workaround before committing to a higher plan.",
        ],
      },
      {
        heading: "How to test checkout changes safely",
        body: [
          "Checkout changes affect revenue immediately, and a misconfigured validation or payment rule can stop orders completely. Test before release and watch closely after.",
        ],
        checklist: [
          "Build and test new apps and extensions on a development store first. Shopify notes post-purchase extensions can be used without restrictions on development stores.",
          "Test with your payment provider's test mode, and place real low-value orders on the live store after launch.",
          "Run every rule with edge cases: orders just above and below a value limit, restricted items, empty fields, discount combinations.",
          "Read the messages a Function shows when it blocks an order. Shoppers should know exactly what to change.",
          "Check both one-page and three-page layouts if you might switch, on mobile and desktop.",
          "Test wallets and express checkouts, which take shoppers through checkout differently from manual entry.",
          "Test each market and currency, and an order with duties if you collect them.",
          "Confirm purchase events arrive in your analytics with consent granted and refused.",
          "Release at a quieter time and compare checkout completion, errors and support contacts with the previous period.",
          "Keep a written list of installed checkout apps, active Functions and pixels, with an owner for each, so you can remove one quickly if it causes problems.",
        ],
        callout: {
          type: "tip",
          text: "For deciding which checkout changes are worth testing and how to read results, see [[/blogs/ecommerce-ab-testing-checkout|A/B testing ecommerce checkout]].",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Assuming everything is \"Plus only\" and paying for an upgrade when a public Function app would do.",
          "Assuming everything is possible on Basic because an app listing says \"checkout customisation\" without saying where in checkout.",
          "Treating Checkout Blocks as fully available on all plans. Only content blocks on the thank you and order status pages, and order value limits, are.",
          "Leaving old app scripts and tracking in place after the 2025 and 2026 deadlines and not noticing that events stopped.",
          "Stacking several checkout apps that each add rules, until no one knows why an order was blocked.",
          "Building a post-purchase upsell strategy without checking how many orders will actually see the page.",
          "Changing checkout during a sale period without a baseline.",
        ],
      },
      {
        heading: "Risks and limits of this guide",
        body: [
          "Shopify changes checkout features often, and two of the sources used here disagreed when checked (the Checkout Blocks help page and the April 2026 changelog). Treat this guide as a map, and confirm each requirement against the current documentation before you scope work. The guide does not cover headless storefronts in depth or Shopify's B2B checkout rules beyond a pointer; for wholesale, see [[/blogs/shopify-for-b2b-ecommerce|whether Shopify suits B2B ecommerce]]. If your store needs wider theme or platform changes alongside checkout, [[/blogs/shopify-redesign-vs-rebuild|choosing between a Shopify redesign and a rebuild]] covers that decision.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Plans and capabilities: [[https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility|Shopify Help Center: checkout extensibility]]; [[https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-apps|Shopify Help Center: checkout apps]]; [[https://shopify.dev/docs/api/checkout-ui-extensions|shopify.dev: checkout UI extensions (API 2026-07)]]; [[https://shopify.dev/docs/api/functions|shopify.dev: Shopify Functions]]; [[https://help.shopify.com/en/manual/checkout-settings/checkout-blocks|Shopify Help Center: Checkout Blocks]]; [[https://help.shopify.com/en/manual/markets/getting-started/requirements-and-considerations|Shopify Help Center: Markets requirements and considerations]].",
          "Changelog: [[https://changelog.shopify.com/posts/checkout-blocks-order-value-limits-available-on-all-plans|order value limits on all plans (13 Apr 2026)]]; [[https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market|checkout and accounts by market (16 Mar 2026)]]; [[https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026|Shopify Scripts deprecation]]; [[https://shopify.dev/changelog/online-store-script-tags-deprecation|online store script tags deprecation]]; [[https://changelog.shopify.com/posts/the-checkout-liquid-theme-file-is-being-deprecated|checkout.liquid deprecation]].",
          "Features and limits: [[https://shopify.dev/docs/apps/build/checkout/product-offers/post-purchase|shopify.dev: post-purchase extensions]]; [[https://help.shopify.com/en/manual/promoting-marketing/pixels/overview|Shopify Help Center: pixels]]; [[https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-style|Shopify Help Center: checkout style]]; [[https://help.shopify.com/en/manual/checkout-settings/one-page-checkout|Shopify Help Center: one-page checkout]]; [[https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid|shopify.dev: checkout.liquid]]; [[https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade|Shopify Help Center: checkout upgrade]].",
          "Accessed 14 October 2026. Shopify plan features and deadlines change; check the current documentation before planning work.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify checkout is customisable on every plan from Basic, but in layers: branding and settings in the editor, rules through Function apps, tracking through pixels and content after the order. The information, shipping and payment steps, the Branding API and custom Function apps remain Plus territory, and per-market settings start at Advanced. List your requirements, map each one with the lookup table, test every change on a development store and with edge cases, and only then decide whether a plan change is justified.",
        ],
        cta: {
          title: "Need help scoping checkout changes?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/shopify-development|Shopify development]] and [[/services/cro-audit|conversion audits]]. If useful, we can talk through your checkout requirements and which plan and approach each one needs.",
        },
      },
    ],
  },
];
