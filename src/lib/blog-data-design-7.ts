import type { BlogPost } from "./blog-data";

/**
 * Ecommerce design cluster, part seven: evaluation and purchase. Product
 * images, reviews, cart, checkout and mobile ecommerce. Merged into
 * `posts` in blog-data.ts.
 */

export const designPosts7: BlogPost[] = [
  // ---------------------------------------------- PRODUCT IMAGE DESIGN
  {
    slug: "ecommerce-product-image-design",
    title: "Ecommerce Product Image Design: How to Present Products Online",
    excerpt:
      "How to design product images and galleries: image types, the primary image, thumbnails, zoom, scale, lifestyle shots, video, mobile galleries and alt text.",
    category: "UI/UX",
    banner: "galleryanatomy",
    date: "2026-09-28",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel", "beauty-personal-care"],
    faqs: [
      { q: "How many images should a product have?", a: "Enough to answer every visual question a shopper has: what it looks like from each relevant angle, how big it is, what the materials and details look like, and how it looks in use. For most products that means several images, not one or two." },
      { q: "What types of product images do shoppers need?", a: "A clean primary image, alternate angles, a shot that shows scale, close-ups of details and materials, lifestyle or in-use images, images for each variant, and where relevant, what's included in the box." },
      { q: "Should product images have a white background?", a: "A consistent plain background for primary images makes listing pages easier to scan and compare. White or light neutral backgrounds are common, but consistency matters more than the exact colour. Use lifestyle images for context." },
      { q: "Is product video worth it?", a: "Video helps when movement, fit, texture, sound or how something works is hard to show in stills. Keep it short, show it in the gallery with a clear play indicator, add captions and don't autoplay with sound." },
      { q: "Are 360-degree product views useful?", a: "For products whose shape or construction matters, such as shoes, bags or equipment, they can help. They supplement good still images rather than replace them, and they need to load efficiently." },
      { q: "How should image zoom work?", a: "Provide high-resolution images and let shoppers zoom into detail, with click or hover zoom on desktop and pinch zoom plus a full-screen view on mobile. Never disable pinch zoom." },
      { q: "How do you write alt text for product images?", a: "Describe what the image shows that matters to a shopper, such as the product, colour and view (“Navy wool coat, back view showing the belt”), rather than repeating the product title or stuffing keywords." },
      { q: "Should lifestyle images replace product shots?", a: "No. Lifestyle images give context and scale, but shoppers still need clear product shots to see details. Use both, and label or link any other products shown in lifestyle images." },
      { q: "How do product images affect page speed?", a: "They're often the heaviest assets on the page. Serve responsive, compressed images in modern formats, don't lazy-load the main image, lazy-load the rest and reserve space so the layout doesn't shift." },
      { q: "How should galleries work on mobile?", a: "Use a full-width swipeable gallery with a clear indicator of the number of images, pinch zoom and a full-screen view, and make sure horizontal swiping doesn't trap vertical scrolling." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Product images do the job a shopper's hands and eyes would do in a shop, so design them to answer visual questions. Start with a consistent primary image, then add alternate angles, a shot that shows scale, detail close-ups, lifestyle images and images for each variant. Show every image as a visible thumbnail, support high-resolution zoom and add video or 360-degree views where movement or shape matters. On mobile, use a full-width swipe gallery with a count indicator and pinch zoom. Keep style consistent across the catalog, load images efficiently and write meaningful alt text.",
        ],
      },
      {
        heading: "Why Product Images Carry So Much Weight",
        body: [
          "Online, shoppers can't pick up a product, feel the fabric or hold it against themselves. Images fill that gap, and they're often the first thing shoppers engage with on a product page. Baymard Institute's [[https://baymard.com/research/product-page|product page research]] treats product images, image gallery UI and product video and 360 views as separate topics, which reflects how much detail matters here.",
          "This guide goes deep on imagery. For the rest of the page, including price, variants and the buy section, see [[/blogs/ecommerce-product-page-design|ecommerce product page design]].",
        ],
      },
      {
        heading: "The Image Types Shoppers Need",
        body: [],
        table: {
          headers: ["Image type", "Question it answers", "Example"],
          rows: [
            ["Primary image", "What is it?", "The product on a plain background, filling the frame"],
            ["Alternate angles", "What does the back, side or inside look like?", "Back of a jacket, inside of a bag"],
            ["Scale", "How big is it?", "Bag worn on a model, lamp on a side table"],
            ["Detail close-up", "What are the materials and finish like?", "Stitching, fabric texture, ports, clasp"],
            ["Lifestyle or in use", "How would it fit into my life?", "Sofa in a furnished room, shoes on a trail"],
            ["Variant images", "What does my chosen colour or option look like?", "Every colourway photographed, not just one"],
            ["What's included", "What exactly arrives?", "Contents laid out, packaging"],
          ],
        },
      },
      {
        heading: "The Primary Image",
        body: [
          "The primary image appears on listing pages, in search results, in the cart and in shared links, so it has to identify the product at a small size. Use a consistent background, angle, crop and aspect ratio across each category so listing pages look orderly and products can be compared. Let the product fill most of the frame; tiny products floating in empty space look unimpressive and hide detail on small screens.",
        ],
      },
      {
        heading: "Gallery Layouts",
        body: [],
        table: {
          headers: ["Layout", "Works well for", "Watch out for"],
          rows: [
            ["Main image with thumbnails", "Most catalogs; familiar pattern", "Thumbnails too small or hidden behind arrows"],
            ["Grid of large images", "Fashion and visual products on desktop", "Pushing product details and the buy button far down"],
            ["Vertical scrolling stack", "Image-led brands with a sticky buy area", "Long pages on mobile if not adapted"],
            ["Swipe carousel", "Mobile galleries", "Shoppers not realizing there are more images"],
          ],
        },
      },
      {
        heading: "Thumbnails",
        body: [
          "Thumbnails tell shoppers how many images exist and let them jump to the one they want. Show them all, or clearly indicate how many more there are, rather than hiding most behind carousel arrows. Mark video and 360 views with an icon so they're recognizable before they're opened, and highlight the thumbnail of the image currently displayed.",
        ],
      },
      {
        heading: "Zoom",
        body: [
          "Shoppers zoom to check materials, finishes and details. Supply images at a resolution high enough for meaningful zoom, and offer click or hover zoom on desktop plus a full-screen view. On mobile, support pinch zoom in the gallery and in full-screen mode. Disabling browser zoom harms accessibility and frustrates everyone else; don't do it.",
        ],
        callout: {
          type: "tip",
          text: "Test zoom on your most detailed products. If shoppers can't read a label or see a fabric weave at full zoom, the source image isn't good enough.",
        },
      },
      {
        heading: "Showing Scale and Size",
        body: [
          "Size is one of the questions still images answer worst. Show products on a model or next to familiar objects, include in-context shots for furniture and home items, and add captions such as the model's height and size worn. Pair images with dimensions and size guides in the product details, so the image and the numbers support each other.",
        ],
      },
      {
        heading: "Lifestyle Images",
        body: [
          "Lifestyle images show products in context and help shoppers picture ownership. They supplement product shots rather than replace them. When a lifestyle image shows several products, link to all of them; Baymard's research on [[https://baymard.com/blog/inspirational-product-images|inspirational images]] recommends linking every depicted product, because shoppers often want the item next to the one they came for.",
        ],
      },
      {
        heading: "Product Video",
        body: [
          "Video is worth producing when movement, fit, sound, texture or how something works is hard to show in stills. Keep clips short and focused, show them within the gallery with a clear play indicator, give users control, don't autoplay with sound and provide captions for any speech ([[https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html|WCAG 1.2.2]]). Load video only when requested so it doesn't slow the page for everyone.",
        ],
      },
      {
        heading: "360-Degree Views",
        body: [
          "Rotatable views suit products whose shape and construction matter: footwear, bags, equipment, furniture. Make the control obvious, keep it responsive on touch devices and load the frames only when opened. Keep the best still images too; many shoppers never interact with a 360 view.",
        ],
        cta: {
          title: "Are your product galleries answering shoppers' questions?",
          description: "ZSpace designs product galleries, image guidelines and fast-loading media for ecommerce stores.",
        },
      },
      {
        heading: "Variant Images",
        body: [
          "When a shopper selects a colour or finish, the gallery should switch to that variant's images, and the swatch should show the actual colour. Photograph every variant rather than relying on one colourway and a swatch; shoppers buying the less common colour have the same questions as everyone else.",
        ],
      },
      {
        heading: "Mobile Image Galleries",
        body: [
          "On mobile, a full-width gallery at the top of the product page is the norm. Make swiping obvious with a partial next image or dot indicators and an image count (“1 / 6”), support pinch zoom and a full-screen view with a clear close button, and make sure horizontal swiping doesn't block vertical page scrolling. Keep the gallery height reasonable so the product name, price and key options appear within the first scroll. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Consistency Across the Catalog",
        body: [
          "Write a simple image style guide: backgrounds, lighting, angles and their order, crop and aspect ratio, how models are posed and which shots are required for each category. Consistent images make listing pages easier to scan, make products easier to compare and reduce the look of a store assembled from different suppliers.",
        ],
      },
      {
        heading: "Image Loading and Performance",
        body: [
          "Product images are usually the heaviest assets on the page. Serve responsive images at the sizes each device needs, in modern formats, through a CDN. Load the main image immediately, since it's often the Largest Contentful Paint element, and lazy-load the rest. Set dimensions or aspect ratios so the layout doesn't shift as images arrive. See [[/blogs/website-performance-optimization|website performance optimization]].",
        ],
      },
      {
        heading: "Accessibility and Captions",
        body: [
          "Each informative image needs alt text that describes what it shows ([[https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html|WCAG 1.1.1]]): colour, view and the detail it highlights, not the product name repeated for every image. Gallery controls must be keyboard operable with visible focus and accessible names. Don't put essential text such as sizes or offers inside images. Captions help everyone when they add information the image can't, such as the model's height and size, the colour name or “shown with matching trousers”.",
        ],
      },
      {
        heading: "Customer Photos",
        body: [
          "Photos from customers show products in real homes and on real bodies, which studio images can't. Collect them through review submissions, moderate them, and show them in a separate customer gallery linked to the reviews they came with. See [[/blogs/ecommerce-product-reviews-ux|ecommerce product reviews UX]].",
        ],
      },
      {
        heading: "Common Product Image Mistakes",
        body: [],
        checklist: [
          "One or two images for products with many visual questions",
          "No way to judge size or scale",
          "Low-resolution images that blur when zoomed",
          "Only one colourway photographed",
          "Thumbnails hidden behind carousel arrows",
          "Inconsistent backgrounds and crops across a category",
          "Pinch zoom disabled on mobile",
          "Uncompressed images slowing the page",
          "Alt text that repeats the product title",
        ],
        cta: {
          title: "Want your product pages to show products properly?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|ecommerce UX design]] and [[/services/shopify-development|Shopify development]] for galleries that load fast and sell honestly.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good product imagery answers the questions shoppers would answer in person: what it looks like, how big it is, what it's made of and how it fits their life. Plan the image set by those questions, present it in a clear gallery with zoom, adapt it for mobile, keep it consistent and fast, and make it accessible. Then connect it to the rest of the [[/blogs/ecommerce-product-page-design|product page]].",
          "For related guides, see [[/blogs/jewelry-ecommerce-product-visualization|jewelry visualization]] and [[/blogs/furniture-ecommerce-visualization|furniture visualization]].",
        ],
      },
    ],
  },

  // -------------------------------------------------- PRODUCT REVIEWS UX
  {
    slug: "ecommerce-product-reviews-ux",
    title: "Ecommerce Product Reviews UX: How to Design Reviews That Help Customers Decide",
    excerpt:
      "How to design product reviews that help shoppers decide: rating summaries, distribution filters, sorting, review search, photos, Q&A and moderation.",
    category: "UI/UX",
    banner: "reviewanatomy",
    date: "2026-09-28",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "beauty-personal-care"],
    faqs: [
      { q: "Where should reviews appear on a product page?", a: "A compact rating summary near the product name, linking to the full reviews section further down the page. Listing pages can show the average rating and review count on each product card." },
      { q: "What is a rating distribution summary?", a: "A breakdown of how many reviews gave each star rating, usually shown as horizontal bars. It helps shoppers judge whether an average hides mixed opinions, and should let them filter reviews by star rating." },
      { q: "Should you show negative reviews?", a: "Yes. Shoppers look for them specifically to understand the risks. Baymard found 53% of users seek out negative reviews. Hiding or suppressing them undermines trust and, in many markets, may breach consumer protection rules." },
      { q: "How should reviews be sorted?", a: "Offer sorting by most helpful, most recent, highest rating and lowest rating. Most helpful or most relevant is a sensible default when helpfulness votes exist." },
      { q: "What does a verified purchase label mean?", a: "That the reviewer bought the product from the store. Explain what the label means and how reviews are collected, and disclose any reviews that were incentivized." },
      { q: "Should product Q&A be separate from reviews?", a: "Yes. Questions and answers address specific pre-purchase questions, while reviews describe experiences. Keep them in separate, searchable sections and show who answered each question." },
      { q: "How do you design a review submission form?", a: "Ask after the customer has received and used the product, keep the form short (rating, text, optional title, relevant attributes such as fit, optional photos), allow submission from an email link without signing in and make the star input accessible." },
      { q: "How should reviews work on mobile?", a: "Show the rating summary near the top, keep filters and sort in a compact control or sheet, show a few reviews with a “show more” option, and make customer photos easy to browse." },
      { q: "How should stores respond to negative reviews?", a: "Publicly, promptly and specifically: acknowledge the issue, explain what's been done and how to get help. Baymard reports that 87% of sites don't respond to negative reviews." },
      { q: "What if a product has very few reviews?", a: "Show the reviews you have without exaggerating them, invite customers to write one, and consider hiding the distribution chart until there are enough ratings to be meaningful; Baymard suggests fewer than five is too few." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Design reviews to answer “will this work for me?”. Put a compact rating summary near the product name that links to a full reviews section. Show the average, the review count and a star distribution whose bars act as filters. Let shoppers sort by helpful, recent, highest and lowest; filter by rating, photos and attributes such as size; and search within reviews. Show reviewer context and verified-purchase labels, include customer photos, keep Q&A separate, make submission short and mobile-friendly, publish negative reviews and respond to them, and make the whole module accessible.",
        ],
      },
      {
        heading: "Why Review Design Matters",
        body: [
          "Reviews answer the questions product copy can't: does it run small, does it last, is it as described, what goes wrong? Shoppers read them to reduce risk, which is why they look for the bad news. Baymard Institute found that [[https://baymard.com/research-articles/respond-to-negative-user-reviews|53% of users specifically seek out negative reviews]]. A review section that makes this hard to do doesn't just frustrate shoppers; it makes the product look like it has something to hide.",
          "This guide covers the design of the reviews module. For how social proof fits into conversion strategy across a Shopify store, see [[/blogs/shopify-social-proof|Shopify social proof]].",
        ],
      },
      {
        heading: "Review Placement",
        body: [
          "Show a compact summary, stars, average and count, close to the product name and price, linked to the full reviews section so shoppers can jump straight there. Place the full section below the main product information. On listing pages, the average and count on each product card helps comparison. Don't repeat the same few glowing quotes in several places on the page.",
        ],
      },
      {
        heading: "Ratings Summary and Distribution",
        body: [
          "An average alone hides a lot: 4.2 stars can mean consistent satisfaction or a split between delight and disappointment. A distribution chart shows which. Baymard's research sets out [[https://baymard.com/blog/user-ratings-distribution-summary|five requirements for the ratings distribution summary]]:",
        ],
        checklist: [
          "Include a graphical breakdown of how many reviews gave each rating",
          "Make the bars work as star filters; 90% of test users who wanted specific ratings tried to click them",
          "Show the distribution expanded by default, not hidden behind a toggle",
          "Use mutually exclusive rating filters, since users view one rating level at a time",
          "Consider hiding the distribution when there are fewer than five ratings",
        ],
      },
      {
        heading: "Filtering and Sorting Reviews",
        body: [
          "Popular products can have hundreds of reviews. Let shoppers filter by star rating, reviews with photos or video, verified purchases, and attributes that matter for the category, such as size bought, body type, skin type or how long the reviewer has used the product. Offer sorting by most helpful, most recent, highest and lowest rating. Show the active filter and how many reviews match, with an easy way to clear it.",
        ],
      },
      {
        heading: "Search Within Reviews",
        body: [
          "A search field inside the reviews section lets shoppers check their specific concern: “wide feet”, “battery”, “washing”. Highlight matching terms in results. Some stores also show common topics as tappable chips drawn from review text; if you do, base them on what reviewers actually mention and include negative topics as well as positive ones.",
        ],
      },
      {
        heading: "Structuring Each Review",
        body: [
          "The most useful reviews come with context. Alongside the rating and text, show the date, the reviewer's relevant details (size bought and usual size, for example), structured ratings for attributes such as fit or comfort, customer photos, helpfulness votes and the store's reply if there is one. Keep long reviews readable with a “read more” rather than cutting them off without warning.",
        ],
      },
      {
        heading: "Verified Purchases and Authenticity",
        body: [
          "Label reviews from confirmed buyers and explain what “verified” means. Publish how reviews are collected and moderated, disclose incentivized or gifted-product reviews, and never write, buy or selectively suppress reviews. Regulators including the US Federal Trade Commission have rules against fake reviews and review suppression, and the UK and EU have similar consumer protection requirements. Authentic, mixed reviews build more trust than a wall of five stars.",
        ],
        cta: {
          title: "Are your reviews helping shoppers decide?",
          description: "ZSpace designs review modules, Q&A and submission flows that make genuine customer feedback easy to use.",
        },
      },
      {
        heading: "Customer Photos and Video",
        body: [
          "Customer media shows products in real conditions. Let reviewers attach photos and short videos, show them in a gallery at the top of the reviews section, and link each item back to its review so shoppers can read the context. Moderate media for relevance and privacy, and give images alt text or a caption drawn from the review where possible.",
        ],
      },
      {
        heading: "Questions and Answers",
        body: [
          "Pre-purchase questions (“Is this dishwasher safe?”) differ from reviews and deserve their own section. Make it searchable, show who answered (the store, a verified owner or another shopper), answer quickly and fold frequent questions back into the product description. Unanswered questions sitting for weeks do more harm than having no Q&A.",
          "Q&A as part of a wider customer community is covered in [[/blogs/ecommerce-community-ux|community UX]].",
        ],
      },
      {
        heading: "Review Submission",
        body: [
          "Ask for a review once the customer has received and used the product, and let them submit from an email link without signing in. Keep the form short: star rating, review text, an optional title, a few attribute questions that make reviews more useful, and optional photos. Make the star input a properly labelled radio group so it works with keyboards and screen readers, and tell reviewers when their review will appear.",
        ],
      },
      {
        heading: "Moderation and Negative Reviews",
        body: [
          "Publish a clear moderation policy and remove reviews only for stated reasons such as abuse, personal data or irrelevance, never for being negative. Respond publicly to negative reviews: acknowledge the problem, explain what's been done and how to get help. Baymard reports that 87% of sites don't respond to negative reviews, which leaves shoppers with only one side of the story. Specific, calm replies often reassure more than the positive reviews do.",
        ],
      },
      {
        heading: "Reviews With Few Ratings",
        body: [
          "New products and smaller stores often have few reviews. Show them honestly, invite customers to write the first ones, and avoid visual treatments that make a single five-star rating look like strong evidence. Consider hiding the distribution until there are enough ratings to be meaningful, as Baymard suggests.",
        ],
      },
      {
        heading: "Reviews on Mobile",
        body: [
          "On mobile, keep the summary near the top of the product page and link it to the reviews section. In the section, show the distribution, a compact filter and sort control that opens a sheet, and a few reviews with “Show more”. Make customer photos swipeable and helpfulness buttons large enough to tap. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Accessible Reviews",
        body: [
          "Star ratings must be available as text (“4.3 out of 5 stars, 128 reviews”), not only as icons. Distribution bars need text labels and counts, filter controls need accessible names and pressed states, and updates to the review list should be announced. Submission forms need labelled fields and clear error messages. See [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
      },
      {
        heading: "Measuring Review UX",
        body: [],
        checklist: [
          "Share of products with enough reviews to be useful",
          "Review submission rate after purchase",
          "Use of filters, sorting and review search",
          "Questions asked and time to answer",
          "Returns reasons compared with themes in reviews",
          "Product page behaviour for shoppers who open reviews",
        ],
      },
      {
        heading: "Common Review Mistakes",
        body: [],
        checklist: [
          "Only an average rating with no distribution",
          "Distribution bars that can't be clicked",
          "No way to filter by rating, attributes or photos",
          "Negative reviews hidden or never answered",
          "Submission that requires creating an account",
          "Star ratings that screen readers can't read",
          "Q&A mixed into reviews or left unanswered",
        ],
        cta: {
          title: "Want reviews that build real confidence?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|ecommerce UX]] and [[/services/shopify-development|Shopify development]] for review experiences shoppers trust.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Reviews help shoppers decide when they're easy to navigate, honest and full of context. Show a summary that links to the full section, a clickable distribution, useful filters, sorting and search, verified labels, customer photos and a separate Q&A. Collect reviews with a short form, publish and answer the negative ones and make everything accessible. For the page reviews sit on, see [[/blogs/ecommerce-product-page-design|ecommerce product page design]].",
        ],
      },
    ],
  },

  // --------------------------------------------------------- CART UX
  {
    slug: "ecommerce-cart-ux",
    title: "Ecommerce Cart UX: How to Design a Better Shopping Cart",
    excerpt:
      "How to design a shopping cart shoppers can review and edit easily: add-to-cart feedback, line items, costs, discounts, errors, empty carts and mobile.",
    category: "UI/UX",
    banner: "cartflow",
    date: "2026-09-28",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    faqs: [
      { q: "What should an ecommerce cart page include?", a: "Each item with image, name, selected options, price, quantity control and line total; options to remove or save items; a summary with subtotal, discounts, estimated delivery cost, taxes where applicable and total; a clear checkout button; and reassurance about delivery and returns." },
      { q: "Should I use a cart drawer or a cart page?", a: "Drawers let shoppers confirm and keep browsing; pages give more room to review and edit. Many stores use a drawer or confirmation for adding items and a full cart page for reviewing. Whichever you choose, it must be easy to edit and show costs clearly." },
      { q: "What should happen after a shopper adds an item to the cart?", a: "Clear confirmation of what was added, an updated cart count, and easy options to continue shopping or go to the cart or checkout, without losing their place on the page." },
      { q: "Should the cart show shipping costs?", a: "Yes, at least an estimate. Unexpected extra costs are the top reason for checkout abandonment in Baymard's surveys, and 12% of shoppers who abandoned said they couldn't see or calculate the total cost up front." },
      { q: "Where should the promo code field go?", a: "In the cart or checkout summary, but collapsed behind a link such as “Add a discount code” so shoppers without a code aren't prompted to leave and search for one." },
      { q: "How should quantity controls work?", a: "Use a stepper with an editable number field, update totals immediately, respect stock limits with a clear message, and let shoppers remove items with an undo option." },
      { q: "What should an empty cart show?", a: "A friendly message, routes back into shopping such as main categories or recently viewed items, and for signed-out shoppers, a prompt to sign in to see a saved cart." },
      { q: "Should cross-sells appear in the cart?", a: "A few relevant, complementary items can help, but they shouldn't push the checkout button or cost summary out of view or distract from completing the order." },
      { q: "How should the cart handle stock or price changes?", a: "Tell the shopper exactly what changed on the affected line, such as reduced availability or a new price, keep the rest of the cart intact and let them decide what to do." },
      { q: "What is the difference between cart and checkout abandonment?", a: "Cart abandonment is leaving after adding items but before starting checkout; checkout abandonment is leaving after starting checkout. They have different causes and fixes." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A good shopping cart confirms what was added, makes every item easy to review and change, and shows the full cost before checkout. Give each line item its image, name, chosen options, price, quantity stepper and line total, with remove (plus undo) and save-for-later actions. Summarize subtotal, discounts, estimated delivery, taxes where relevant and the total. Keep the promo field collapsed, show only a few relevant cross-sells, explain stock or price changes on the affected line, design the empty state, keep the checkout button prominent on mobile and let shoppers move to checkout without forced sign-up.",
        ],
      },
      {
        heading: "What the Cart Is For",
        body: [
          "The cart has several jobs: confirm the right products and options were chosen, let shoppers change their mind, show what the order will really cost, and move them smoothly into checkout. For many shoppers it's also a holding area for comparing or saving items for later. The diagram above shows the path from add-to-cart through the cart to checkout, with saving for later as an alternative.",
          "This guide covers cart design on any platform. For Shopify-specific cart tactics such as drawers, free-shipping thresholds and upsell apps, see [[/blogs/shopify-cart-optimization|Shopify cart optimization]].",
        ],
      },
      {
        heading: "Add-to-Cart Feedback",
        body: [
          "The moment after “Add to cart” needs clear feedback. The button should show progress and then success, the cart count should update, and a confirmation should say what was added, including size and colour, with options to continue shopping or go to the cart.",
        ],
        table: {
          headers: ["Pattern", "Strength", "Risk"],
          rows: [
            ["Inline confirmation and cart count update", "Least disruptive", "Easy to miss if subtle"],
            ["Slide-out cart drawer", "Shows the cart without leaving the page", "Can feel intrusive for shoppers adding several items"],
            ["Confirmation dialog", "Clear and explicit", "Interrupts browsing"],
            ["Redirect to the cart page", "Obvious", "Breaks the flow for shoppers who want more items"],
          ],
        },
      },
      {
        heading: "Line Items",
        body: [
          "Each line should show a product image, name linked back to the product page, selected options (size, colour, personalization), unit price, quantity and line total. Add relevant status: low stock, backorder or estimated delivery date. Shoppers use the cart to double-check their choices, so the options must be visible, not hidden behind a “details” link.",
        ],
      },
      {
        heading: "Quantity Controls",
        body: [
          "Use a stepper with minus and plus buttons around an editable number, sized for touch. Update line totals and the order summary immediately, with a brief loading state if it takes a moment. Respect stock and purchase limits with a message on the line rather than a silent cap. Label the buttons for assistive technology (“Increase quantity of Trail runner, size 9”) and announce updated totals.",
        ],
      },
      {
        heading: "Changing Variants",
        body: [
          "Shoppers often realize they want a different size or colour at the cart stage. Let them change options directly on the line where the platform allows, rather than forcing them to remove the item, return to the product page and add it again.",
        ],
      },
      {
        heading: "Remove and Save for Later",
        body: [
          "Removing an item should be easy and reversible: remove immediately and offer undo, rather than a confirmation dialog for every removal. “Save for later” moves an item out of the order without losing it, which is useful for shoppers deciding between options or waiting for payday. Keep saved items visible below the cart and let guests use it too, not only signed-in customers.",
        ],
      },
      {
        heading: "Costs: Subtotal, Delivery, Taxes and Total",
        body: [
          "Cost surprises are the biggest checkout problem. In Baymard Institute's [[https://baymard.com/lists/cart-abandonment-rate|survey of US online shoppers who abandoned during checkout]], excluding those who were just browsing, 40% said extra costs such as shipping, tax and fees were too high, and 12% said they couldn't see or calculate the total order cost up front.",
          "Show an estimated delivery cost in the cart, using the shopper's location or a quick postcode or country input, along with expected delivery dates. Show taxes where they're known; in markets where prices include VAT, say so, and where tax is calculated later, say when. If you use a free-delivery threshold, state it honestly and show how far the cart is from it.",
        ],
      },
      {
        heading: "Discount Codes",
        body: [
          "A prominent empty “Promo code” field tells shoppers without a code that others are paying less, and some leave to search for one. Collapse it behind a link such as “Add a discount code”. When a code is applied, show the discount as its own line in the summary; when it fails, explain why (expired, minimum spend not met, not valid for these items) and keep the code in the field for editing.",
        ],
      },
      {
        heading: "Gift Options",
        body: [
          "If you offer gift wrap, gift messages or gift receipts, present them in the cart or early in checkout with their cost, and show the message preview. Make it clear whether prices will be hidden from the recipient. Keep gift options optional and out of the way for everyone else.",
        ],
        cta: {
          title: "Are shoppers adding to cart but not checking out?",
          description: "ZSpace reviews cart design, cost transparency and the path to checkout, and designs the fixes.",
        },
      },
      {
        heading: "Cross-Sells in the Cart",
        body: [
          "A few complementary items (batteries for the device, care products for the jacket) can be genuinely helpful. Keep them below the items and summary, avoid alternatives that reopen the decision the shopper just made, and never push the checkout button or total below the fold with recommendations. See [[/blogs/shopify-product-recommendations|product recommendations]] for how to choose them.",
        ],
      },
      {
        heading: "Error Handling in the Cart",
        body: [
          "Carts change while shoppers are away: items sell out, prices change, promotions end, delivery restrictions apply. Explain each change on the affected line in plain language, such as “Only 1 left in size 9, we've updated your quantity”, and never silently remove items. Keep the rest of the cart intact, and if an item can't be bought, offer alternatives or save-for-later.",
        ],
      },
      {
        heading: "The Empty Cart",
        body: [
          "An empty cart is a dead end unless you design it. Say the cart is empty, offer routes back into shopping such as main categories, recently viewed items or saved items, and for signed-out shoppers, a prompt to sign in to see a cart saved on another device.",
        ],
      },
      {
        heading: "Cart Persistence",
        body: [
          "Shoppers often add items on one visit or device and buy on another. Keep carts for returning guests on the same device, sync carts for signed-in customers across devices, and merge a guest cart with a saved cart when someone signs in, rather than discarding either.",
        ],
      },
      {
        heading: "The Mobile Cart",
        body: [
          "On mobile, keep line items compact but tappable, show the total and a checkout button in a sticky footer, and put express payment options where they're visible without crowding the main button. Make quantity controls and remove actions large enough to hit reliably. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "The Transition to Checkout",
        body: [
          "Make the checkout button the most prominent action, and repeat it above the items on long carts. Offer express payment options for shoppers who want them, don't force account creation before checkout, and keep the order summary visible and editable during checkout so shoppers don't feel they must go back to the cart to change something. The next step is covered in [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]].",
        ],
      },
      {
        heading: "Accessible Cart Design",
        body: [
          "Announce cart updates, such as items added, quantities changed and items removed, as status messages ([[https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html|WCAG 4.1.3]]). Give every control an accessible name that includes the product, manage focus sensibly after an item is removed, and make sure a cart drawer traps focus while open and returns it when closed.",
        ],
      },
      {
        heading: "Common Cart Friction Points",
        body: [],
        checklist: [
          "Unclear confirmation after adding an item",
          "Selected size or colour not shown on the line",
          "No delivery cost or date until checkout",
          "An empty promo code field front and centre",
          "Removing items requires a confirmation dialog",
          "Items silently removed or changed",
          "Cross-sells pushing the checkout button out of view",
          "Account creation required to continue",
        ],
        cta: {
          title: "Want a cart that moves shoppers forward?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|ecommerce UX design]], [[/services/shopify-development|Shopify development]] and [[/services/cro-audit|cart and checkout audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The cart is where shoppers confirm their choices and discover the real cost. Make items easy to review and change, show costs early and honestly, handle changes gracefully, keep recommendations modest, design the empty and mobile states, and hand off to checkout without obstacles.",
          "For related guides, see [[/blogs/ecommerce-wishlist-ux|wishlist UX]].",
        ],
      },
    ],
  },

  // ------------------------------------------------------ CHECKOUT UX
  {
    slug: "ecommerce-checkout-ux",
    title: "Ecommerce Checkout UX: How to Reduce Friction and Abandoned Carts",
    excerpt:
      "How to design a quick, trustworthy checkout: structure, guest checkout, forms, address entry, delivery, payment, validation, mobile, autofill and confirmation.",
    category: "UI/UX",
    banner: "checkoutux",
    date: "2026-09-28",
    readingTime: "16 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    faqs: [
      { q: "What is checkout UX?", a: "The design of the steps between the cart and a placed order: account choice, contact and address entry, delivery, payment, review and confirmation, including how errors and edge cases are handled." },
      { q: "Why do shoppers abandon checkout?", a: "In Baymard's survey of US shoppers who abandoned during checkout (excluding those just browsing), the top reasons include extra costs being too high, slow delivery, not trusting the site with card details, being required to create an account, a long or complicated checkout and site errors." },
      { q: "Should checkout offer guest checkout?", a: "Yes. Forcing account creation is a common reason for abandonment. Make guest checkout easy to find and offer account creation after the order, on the confirmation page." },
      { q: "Is a one-page checkout better than a multi-step checkout?", a: "Neither is always better. What matters is the number and clarity of fields and decisions. Multi-step and accordion checkouts can feel simpler on mobile; one-page checkouts can work well for short forms." },
      { q: "How many form fields should checkout have?", a: "As few as possible. Baymard's benchmark found an average of 11.3 form fields in checkout, while most sites need only 8." },
      { q: "How can you make address entry easier?", a: "Use address lookup with a manual fallback, support browser autofill with correct autocomplete attributes, default billing to the delivery address, and validate formats for each country." },
      { q: "What should a checkout confirmation page include?", a: "The order number, a summary of items and costs, delivery address and expected date, confirmation that an email was sent, what happens next, how to get help and an optional way to create an account." },
      { q: "How should checkout errors be handled?", a: "Show errors next to the field in plain language, explain how to fix them, keep everything the shopper entered and, after a failed submit, summarize errors at the top with links to each field." },
      { q: "What is a typical cart abandonment rate?", a: "Baymard's compilation of 50 studies puts the documented average online cart abandonment rate at around 70%. Many of those shoppers were only browsing, so not all abandonment is a checkout design problem." },
      { q: "Can I change the design of Shopify's checkout?", a: "Only within the limits Shopify allows, which differ by plan. See ZSpace's Shopify checkout optimization guide for what can and can't be customized." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To reduce checkout friction, make the path from cart to order short, predictable and trustworthy. Show full costs before checkout, make guest checkout the easy default and offer an account afterwards, and ask only for the fields you need, with autofill and address lookup. Present delivery options with dates and costs, offer the payment methods your customers expect including express wallets, validate inline, keep entered data after any error, show progress, and end with a clear confirmation. Design it on a phone first and test it with real cards, addresses and failure cases.",
        ],
      },
      {
        heading: "Why Shoppers Abandon Checkout",
        body: [
          "Baymard Institute's [[https://baymard.com/lists/cart-abandonment-rate|compilation of 50 studies]] puts the documented average cart abandonment rate at around 70%, but many of those shoppers were browsing, comparing or saving items, not trying to buy. The more useful data is why buyers leave. In Baymard's survey of US online shoppers who abandoned during checkout, excluding those just browsing:",
        ],
        table: {
          headers: ["Reason", "Share of respondents"],
          rows: [
            ["Extra costs too high (shipping, tax, fees)", "40%"],
            ["Delivery was too slow", "20%"],
            ["Didn't trust the site with card information", "19%"],
            ["The site wanted me to create an account", "18%"],
            ["Too long or complicated checkout process", "17%"],
            ["Website had errors or crashed", "17%"],
            ["Returns policy wasn't satisfactory", "13%"],
            ["Couldn't see or calculate total cost up front", "12%"],
            ["The card was declined", "10%"],
            ["Not enough payment methods", "9%"],
          ],
        },
      },
      {
        heading: "Checkout Architecture",
        body: [
          "The structure matters less than the total effort and clarity, but each option has trade-offs.",
        ],
        table: {
          headers: ["Structure", "Strengths", "Watch out for"],
          rows: [
            ["One page", "Everything visible; fewer page loads", "Long, dense page on mobile; errors hard to find"],
            ["Multi-step", "Focused steps; clear progress", "Too many steps; losing data when going back"],
            ["Accordion", "Focused steps on one page", "Unclear which sections are complete or editable"],
            ["Express wallet", "Very few inputs for returning wallet users", "Needs a clear fallback for everyone else"],
          ],
        },
      },
      {
        heading: "A Focused, Linear Flow",
        body: [
          "Checkout should feel like one path: account choice, contact and delivery, delivery method, payment, review, confirmation. The diagram above shows it, with a declined card handled as a recoverable error rather than a restart. Reduce distractions such as the full site navigation, but keep the logo, a link back to the cart and help or contact information. Keep an order summary visible or one tap away throughout.",
        ],
      },
      {
        heading: "Guest Checkout and Account Creation",
        body: [
          "Being asked to create an account is one of the most common reasons buyers give for abandoning. Make guest checkout the most obvious option, offer sign-in for returning customers, and ask for an email address early so you can send confirmations. Baymard recommends [[https://baymard.com/blog/delayed-account-creation|saving account creation for the confirmation step]]: after the order, offer to create an account with a single password field, since you already have the rest of their details.",
        ],
      },
      {
        heading: "Forms: Fewer, Clearer Fields",
        body: [
          "Baymard's [[https://baymard.com/blog/checkout-flow-average-form-fields|checkout benchmark]] found an average of 11.3 form fields, while most sites need only 8. Remove fields you don't need, such as a separate “confirm email” or a phone number you never use. Make optional fields clearly optional, and explain why you ask for anything sensitive.",
        ],
        checklist: [
          "Single-column layout with labels above fields",
          "Correct input types so mobile keyboards match the data",
          "Autocomplete attributes so browsers can fill details",
          "Billing address defaults to the delivery address",
          "Field widths that hint at the expected length",
          "No information requested twice ([[https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html|WCAG 3.3.7]])",
        ],
      },
      {
        heading: "Address Entry",
        body: [
          "Address fields are where most typing happens. Offer address lookup or autocomplete with a visible option to enter the address manually, support browser autofill, adapt field labels and validation to the selected country and don't reject valid addresses that don't fit one country's format. Check postcodes and delivery availability early, so shoppers don't discover at payment that you can't deliver to them.",
        ],
      },
      {
        heading: "Delivery Options",
        body: [
          "Show delivery options with the cost and an estimated delivery date, not just a speed name such as “Standard”. Preselect a sensible default, and show pickup or collection options where available. Slow delivery is the second most common reason in Baymard's list, so if faster options exist, make them visible with their price.",
        ],
        cta: {
          title: "Losing shoppers at checkout?",
          description: "ZSpace audits checkout flows field by field and designs the fixes, on Shopify and custom platforms.",
        },
      },
      {
        heading: "Payment",
        body: [
          "Offer the payment methods your customers expect in each market, including digital wallets and local methods where relevant. Place express wallet buttons early for shoppers who want them, without making them the only obvious route. Format card numbers as they're typed, detect the card type automatically, and put security reassurance next to the payment fields, where the concern arises. Handle card authentication steps such as 3-D Secure smoothly and return shoppers to checkout afterwards.",
          "When a payment fails, keep the order and all entered details, explain what happened in plain language and offer to try again or use another method. See [[/blogs/payment-gateway-integration|payment gateway integration]] for the technical side.",
        ],
      },
      {
        heading: "Order Review",
        body: [
          "Before the shopper commits, show items, delivery address and method, payment method and the full cost breakdown, with links to edit each part without starting over. Label the final button with the action, and the amount where possible, such as “Pay £84.50” or “Place order”, and make sure the total on the button matches the summary.",
        ],
      },
      {
        heading: "Validation and Error Handling",
        body: [
          "Validate each field when the shopper leaves it, not while they're still typing, and confirm when a problem is fixed. Error messages should appear next to the field, say what's wrong and how to fix it in plain language ([[https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html|WCAG 3.3.3]]), and never clear what was entered. If submission fails, show a summary at the top that links to each problem field. Test server errors, timeouts and lost connections as well as typing mistakes. See [[/blogs/ux-writing|UX writing]] for message examples.",
        ],
      },
      {
        heading: "Progress Indicators",
        body: [
          "In multi-step checkouts, show the named steps, where the shopper is and which steps are done, and let them go back to completed steps without losing data. Keep the number of steps small and honest; a progress bar that adds unexpected steps undermines trust.",
        ],
      },
      {
        heading: "Trust in Checkout",
        body: [
          "Nearly one in five buyers in Baymard's survey said they didn't trust the site with their card details. Use a clean, consistent design that matches the rest of the store, show recognizable payment options, keep delivery and returns information one click away, and make contact details visible. A few relevant reassurances beat a row of generic badges. See [[/blogs/website-trust-and-credibility|website trust and credibility]].",
        ],
      },
      {
        heading: "Mobile Checkout",
        body: [
          "Most checkout problems are amplified on a phone: small screens, on-screen keyboards and interruptions. Put express wallets near the top, use the right keyboards, keep a collapsible order summary, make buttons and fields large, avoid dropdowns for short option lists and keep the primary action within reach. Make sure the session survives a shopper switching apps to find a code or confirm a payment. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
          "Mobile-specific detail (input types, autocomplete attributes, interruptions and express wallets) is covered in [[/blogs/mobile-ecommerce-checkout|mobile ecommerce checkout]].",
        ],
      },
      {
        heading: "Autofill",
        body: [
          "Browsers and password managers can fill most checkout fields if the form tells them what each field is. Use the standard [[https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete|HTML autocomplete attribute]] values such as name, email, tel, street-address, postal-code, cc-number and cc-exp. Identifying input purpose this way is also a [[https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html|WCAG 1.3.5]] requirement. Avoid splitting fields in ways autofill can't handle.",
        ],
      },
      {
        heading: "The Confirmation Page",
        body: [
          "Confirm the order clearly: order number, items, costs, delivery address and expected date, and a note that a confirmation email has been sent. Explain what happens next and how to get help or make changes. This is also the right place to offer account creation, as a single optional step.",
        ],
      },
      {
        heading: "The Post-Purchase Transition",
        body: [
          "The experience continues after the order: confirmation and shipping emails, tracking, delivery and returns. Keep emails consistent with the store, link tracking directly and make returns easy to start. These moments shape whether a first order becomes a second. See [[/blogs/d2c-repeat-purchase-ux|D2C repeat purchase UX]].",
        ],
      },
      {
        heading: "Accessible Checkout",
        body: [
          "Checkout must work with a keyboard and screen reader: labelled fields, errors identified in text ([[https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html|WCAG 3.3.1]]), no information requested twice, sign-in that doesn't rely on memorizing or transcribing codes where alternatives exist (3.3.8), and enough time to finish, with warnings before any session timeout. See [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
      },
      {
        heading: "Platform Constraints",
        body: [
          "Hosted checkouts limit what you can change. On Shopify, for example, checkout customization depends on the plan and the extension points Shopify provides. Design within those limits and focus on what you control: cart clarity, costs shown early, payment options and trust. See [[/blogs/shopify-checkout-optimization|Shopify checkout optimization]].",
        ],
      },
      {
        heading: "Measuring Checkout",
        body: [],
        checklist: [
          "Drop-off at each step, split by device and new or returning customer",
          "Field-level errors and time spent per field",
          "Payment failures by method and reason",
          "Use of guest checkout, sign-in and express wallets",
          "Session recordings of abandoned checkouts",
          "Support contacts about orders and payment",
        ],
      },
      {
        heading: "Common Checkout Mistakes",
        body: [],
        checklist: [
          "Delivery costs revealed only at the final step",
          "Forced account creation before purchase",
          "Fields you don't need, including “confirm email”",
          "Address formats that reject valid international addresses",
          "Errors that clear the form or appear only after submit",
          "Payment failures that restart the checkout",
          "Tiny tap targets and wrong keyboards on mobile",
          "No clear confirmation of what happens next",
        ],
        cta: {
          title: "Want a faster, clearer checkout?",
          description: "Talk to ZSpace about [[/services/cro-audit|checkout audits]] and [[/services/shopify-development|Shopify development]] that remove friction where it costs most.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Checkout friction mostly comes from surprises, effort and doubt: unexpected costs, forced accounts, long forms, confusing errors and weak reassurance. Show costs early, default to guest checkout, trim and autofill fields, present delivery and payment clearly, recover gracefully from errors and design for mobile first. Then measure each step and keep improving. For the step before, see [[/blogs/ecommerce-cart-ux|ecommerce cart UX]]. For a cause-by-cause diagnosis of abandonment, see [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]].",
          "For related guides, see [[/blogs/global-ecommerce-checkout|global ecommerce checkout]], [[/blogs/ecommerce-subscription-checkout|subscription checkout]], [[/blogs/ecommerce-ab-testing-checkout|A/B testing checkout]] and [[/blogs/ecommerce-shipping-ux|shipping UX]].",
        ],
      },
    ],
  },

  // --------------------------------------------------- MOBILE ECOMMERCE UX
  {
    slug: "mobile-ecommerce-ux",
    title: "Mobile Ecommerce UX: How to Design Stores for Mobile Shoppers",
    excerpt:
      "How to design online stores for mobile shoppers: navigation, search, filters, listings, product pages, sticky actions, forms, checkout, touch and speed.",
    category: "UI/UX",
    banner: "mobilejourney",
    date: "2026-09-28",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    faqs: [
      { q: "What is mobile ecommerce UX?", a: "The design of the shopping experience on phones: how shoppers find, evaluate and buy products on small touch screens, often while distracted or on slower connections." },
      { q: "How is mobile ecommerce UX different from desktop?", a: "Shoppers see less of the page at once, interact by touch, type on on-screen keyboards and are interrupted more often. Layouts, navigation, filters, forms and checkout need designs made for those conditions, not shrunken desktop pages." },
      { q: "What are the most common mobile ecommerce usability problems?", a: "Baymard Institute highlights five overarching issues: lack of page overview, disorientation, technical glitches, accidental or unregistered taps and external interruptions." },
      { q: "How big should touch targets be?", a: "WCAG 2.2 level AA requires targets of at least 24 by 24 CSS pixels or enough spacing around them. Apple and Google recommend larger targets, around 44 points and 48 density-independent pixels respectively, which is a better goal for primary actions." },
      { q: "Should product listings use one or two columns on mobile?", a: "Two columns suit visually driven products where the image carries most of the decision. One column suits products where shoppers need more details on the card, such as specifications or prices by option." },
      { q: "Should mobile product pages have a sticky add-to-cart button?", a: "A sticky button helps on long pages, as long as it doesn't hide content, stays small and reflects the selected options." },
      { q: "How can mobile checkout be improved?", a: "Offer express wallets, guest checkout, address lookup and autofill, use correct keyboards and input types, keep the order summary collapsible and preserve progress if the shopper switches apps." },
      { q: "Why do mobile form fields zoom in on iPhone?", a: "Safari on iOS zooms into form fields whose text is smaller than 16 pixels. Using at least 16px text in inputs avoids the zoom and keeps the layout stable." },
      { q: "How should mobile ecommerce be tested?", a: "On real mid-range devices with throttled networks, one-handed, with usability tests on phones and analytics segmented by device, not only in desktop browser emulation." },
      { q: "Is a mobile app better than a mobile website for ecommerce?", a: "Most new customers arrive on the mobile web, so it has to work well regardless. Apps suit frequent, loyal customers who benefit from saved preferences, notifications and faster repeat purchases." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Design mobile stores around the conditions phone shoppers face: a small viewport, touch input, on-screen keyboards, interruptions and variable connections. Keep search visible and navigation easy to drill into and back out of. Use a full-screen filter panel with a result count and a gallery you can swipe and pinch. Put key product information high up with a compact sticky add-to-cart button, make forms work with autofill and the right keyboards, and offer express payment and guest checkout. Size targets generously, keep text readable, make pages fast on mid-range phones and test on real devices.",
        ],
      },
      {
        heading: "What Makes Mobile Shopping Different",
        body: [
          "Baymard Institute's [[https://baymard.com/blog/mobile-commerce-design|mobile ecommerce research]] identifies five overarching problems: shoppers lack an overview of the page because they see it in fragments, they become disoriented about where they are, technical glitches get in the way, taps are missed or land on the wrong element, and they're interrupted often, on average once every 20 minutes during testing. Baymard reports that 63% of mobile users in testing abandoned a product or site at least once solely because of preventable mobile usability issues.",
          "Responsive layout is the starting point, covered in [[/blogs/responsive-ui-design|responsive UI design]]. This guide covers the shopping-specific decisions on top of it, following the journey in the diagram above. For Shopify-specific mobile optimization, see [[/blogs/shopify-mobile-cro|Shopify mobile CRO]].",
        ],
      },
      {
        heading: "Mobile Navigation",
        body: [
          "Use a menu that drills down one level at a time, with the current level as a heading, a clear back control and a “Shop all” link at every level. Keep the cart and search in the header rather than hidden in the menu. Show where the shopper is on category and product pages with a parent link or short breadcrumb, which addresses the disorientation Baymard describes. See [[/blogs/ecommerce-navigation-design|ecommerce navigation design]].",
          "For menu, tab bar and back-navigation patterns in more depth, see [[/blogs/mobile-ecommerce-navigation|mobile ecommerce navigation]].",
        ],
      },
      {
        heading: "Search on Mobile",
        body: [
          "Many mobile shoppers search first. Keep search visible, open it into a focused full-screen view with recent searches, use the search keyboard, show a short autocomplete list that fits above the keyboard and keep the query visible on results. See [[/blogs/ecommerce-search-ux|ecommerce search UX]].",
        ],
      },
      {
        heading: "Category Discovery",
        body: [
          "Visual category tiles and clear labels help shoppers who browse rather than search. Avoid hiding key categories in horizontal carousels that extend off-screen with no cue, and make the scope of each link clear, especially for narrowed sets such as sale or new arrivals.",
        ],
      },
      {
        heading: "Filters and Sorting on Mobile",
        body: [
          "Put separate, clearly labelled Filter and Sort controls at the top of listings, ideally sticky as the shopper scrolls. Open filters in a full-screen panel with large controls and an apply button that shows the number of results. After applying, show the chosen filters as removable chips above the list. See [[/blogs/ecommerce-filters|ecommerce filters]].",
        ],
      },
      {
        heading: "Product Listings",
        body: [
          "Two-column grids suit visual products where the image carries the decision; one column suits products where shoppers compare details on the card. Keep card information to what helps choosing: image, name, price, rating and key variant or availability information. Baymard recommends [[https://baymard.com/blog/number-of-items-loaded-by-default|loading around 15 to 30 products]] by default on mobile, with a “Load more” button, and keeping the shopper's position and filters when they return from a product page.",
        ],
      },
      {
        heading: "Product Pages",
        body: [
          "Mobile product pages are long, so order matters. Start with the gallery, then the name, price, rating summary and variant selection, then the add-to-cart button, delivery and returns information, then details, specifications and reviews. Collapsible sections help with long content, but don't hide information shoppers need to decide, such as size guidance or delivery costs. See [[/blogs/ecommerce-product-page-design|ecommerce product page design]].",
        ],
      },
      {
        heading: "Images",
        body: [
          "Use a full-width swipe gallery with an image count, pinch zoom and a full-screen view. Don't let the gallery take the whole first screen, and make sure horizontal swipes don't block vertical scrolling. See [[/blogs/ecommerce-product-image-design|ecommerce product image design]].",
        ],
        cta: {
          title: "Is your store built for mobile shoppers?",
          description: "ZSpace designs mobile-first shopping journeys and tests them on real devices before launch.",
        },
      },
      {
        heading: "Sticky Actions",
        body: [
          "A sticky add-to-cart bar or checkout button keeps the main action in reach on long pages. Keep it compact, reflect the selected variant and price, and hide it when the original button is visible. Sticky headers and bars must not cover focused elements or form fields; WCAG 2.2 requires that focused elements aren't entirely hidden by author-created content ([[https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html|2.4.11]]). Stacking several sticky bars leaves little room for the page itself.",
        ],
      },
      {
        heading: "Forms",
        body: [
          "Mobile forms are where typing effort is most visible. Use the correct input types (email, tel, numeric) so the right keyboard appears, autocomplete attributes for autofill, visible labels above fields, and input text of at least 16 pixels so iOS Safari doesn't zoom into fields. Replace short dropdowns with radio buttons or segmented controls, and never clear entered data after an error.",
        ],
      },
      {
        heading: "Cart and Checkout",
        body: [
          "Keep cart items compact with large quantity and remove controls, and show the total with a sticky checkout button. In checkout, offer express wallets early, make guest checkout obvious, use address lookup and autofill, keep the order summary collapsible and preserve progress if shoppers leave to check a message or confirm a payment in another app. See [[/blogs/ecommerce-cart-ux|cart UX]] and [[/blogs/ecommerce-checkout-ux|checkout UX]].",
          "Field-by-field guidance for phones, including keyboards, autofill and wallets, is in [[/blogs/mobile-ecommerce-checkout|mobile ecommerce checkout]].",
        ],
      },
      {
        heading: "Touch Targets",
        body: [
          "Accidental and missed taps are one of Baymard's five core mobile problems. [[https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html|WCAG 2.5.8]] (level AA) requires targets of at least 24 by 24 CSS pixels or adequate spacing. Platform guidance is more generous: Apple recommends around 44 by 44 points and Material Design 48 by 48 density-independent pixels. Use those larger sizes for primary actions, variant buttons, quantity controls and filter options, and leave space between adjacent targets.",
        ],
      },
      {
        heading: "Typography and Readability",
        body: [
          "Use body text large enough to read without zooming, sufficient line height and contrast that meets WCAG AA. Keep product names from truncating mid-word on cards, avoid long lines of text in landscape and make sure layouts reflow when users enlarge text rather than cutting it off.",
        ],
      },
      {
        heading: "Performance on Real Phones",
        body: [
          "Mobile shoppers often use mid-range phones on variable networks. Watch Core Web Vitals in field data, especially Largest Contentful Paint for hero and product images and Interaction to Next Paint, which suffers when heavy scripts block taps. Compress and size images for mobile, limit third-party scripts and apps, and reserve space for content to avoid layout shift. See [[/blogs/website-performance-optimization|website performance optimization]].",
        ],
      },
      {
        heading: "Designing for Interruptions",
        body: [
          "Phone shoppers switch apps, lose signal and come back hours later. Keep carts persistent, preserve form input and filter state, make the back button behave predictably and let shoppers resume where they left off. Session timeouts in checkout should warn before expiring and save what they can.",
        ],
      },
      {
        heading: "Accessibility on Mobile",
        body: [
          "Mobile users include people using screen readers, switch control, magnification and large text. Don't disable pinch zoom, support both orientations ([[https://www.w3.org/WAI/WCAG22/Understanding/orientation.html|WCAG 1.3.4]]), make content reflow at narrow widths without horizontal scrolling (1.4.10), give gestures a visible alternative and label every icon button. See [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
      },
      {
        heading: "Mobile-Specific Friction Checklist",
        body: [],
        checklist: [
          "Search hidden inside the menu",
          "Menus with no back control or “Shop all” link",
          "Filters that reset after viewing a product",
          "Galleries without zoom or an image count",
          "Add-to-cart button far below the fold with no sticky option",
          "Wrong keyboards and no autofill in forms",
          "Input text small enough to trigger zoom",
          "Pop-ups that are hard to close on a small screen",
          "Tap targets crowded together",
          "Pages that are slow on a mid-range phone",
        ],
      },
      {
        heading: "Testing Mobile Ecommerce",
        body: [
          "Desktop browser emulation is a start, not a test. Use real mid-range iOS and Android phones with throttled networks, try tasks one-handed, and run [[/blogs/usability-testing|usability tests]] on phones with tasks such as “find a gift under a set budget and buy it”. Segment analytics by device to find steps where mobile performs worse than desktop, and watch mobile session recordings at those steps.",
        ],
      },
      {
        heading: "Mobile Web and Apps",
        body: [
          "Most new customers reach a store through the mobile web, so it has to work well regardless of whether you have an app. Apps suit frequent, loyal customers who benefit from saved preferences, notifications and faster reordering. Progressive web apps offer some app-like capabilities on the web; see [[/blogs/pwa-vs-native-app|PWA vs native app]] if you're weighing the options.",
          "The engineering side is covered in [[/blogs/mobile-ecommerce-development|mobile ecommerce development]]. If you are weighing surfaces, see [[/blogs/ecommerce-mobile-app-vs-mobile-website|ecommerce app vs mobile website]] and [[/blogs/ecommerce-pwa-ux|ecommerce PWA UX]].",
        ],
      },
      {
        heading: "Common Mobile Ecommerce Mistakes",
        body: [],
        checklist: [
          "Designing on desktop and squeezing onto mobile",
          "Hiding key information in hover states or tiny accordions",
          "Several stacked sticky bars covering content",
          "Forcing account creation on a small keyboard",
          "Disabling zoom",
          "Testing only in emulators",
        ],
        cta: {
          title: "Want a mobile store shoppers can use one-handed?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|mobile ecommerce UX]], [[/services/shopify-development|Shopify development]] and [[/services/cro-audit|mobile conversion audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Mobile ecommerce UX means designing for fragments of attention on a small touch screen: visible search, simple navigation, proper filter panels, readable listings, product pages ordered for decisions, compact sticky actions, forms that fill themselves and a fast, forgiving checkout. Make it quick on real phones, accessible and resilient to interruption, and test it where your shoppers actually use it. For D2C brands whose traffic comes mostly from social apps, see [[/blogs/d2c-mobile-ecommerce|D2C mobile ecommerce]].",
          "For related guides, see [[/blogs/fashion-ecommerce-mobile-ux|fashion mobile UX]] and [[/blogs/grocery-ecommerce-mobile-ux|grocery mobile UX]].",
        ],
      },
    ],
  },
];
