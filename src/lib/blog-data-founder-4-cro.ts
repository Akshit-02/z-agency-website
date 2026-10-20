import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 4, CRO cluster: topic 77 (pricing transparency for service
 * businesses, slug reserved by roadmap CRO-29; also covers service packages
 * briefly, deferred from Batch 6 topic 119).
 *
 * Sources checked 2026-10-15:
 * - GOV.UK, CMA209 summary "Providing clear and accurate information about
 *   prices" (updated 7 Jan 2026): "from"/indicative prices must include all
 *   mandatory charges; where the total cannot be calculated in advance, give
 *   the information needed to calculate it, as prominently as the price;
 *   penalties up to 10% of turnover or GBP 300,000.
 * - GOV.UK, CMA209 publication page (price transparency).
 * - SRA, "Transparency in price and service" guidance (updated 30 Sep 2024):
 *   the price and service items used as the model for the scope block.
 * - NN/g, "Trustworthiness in Web Design: 4 Credibility Factors" (Harley,
 *   8 May 2016): upfront disclosure of base cost, fees and what is included.
 * India (CCPA drip pricing, clinic rate display) and Australia (single-price
 * rule) are mentioned only as hedged "check" points: primary texts were not
 * verified. No conversion effects are claimed: no reliable study was found
 * showing that publishing prices raises or lowers service-business conversion.
 * No ZSpace prices and no market averages are given.
 */
export const founderCroPosts4: BlogPost[] = [
  {
    slug: "should-you-show-prices-on-your-website",
    title: "Should You Show Prices on Your Website? How to Be Transparent Without Undervaluing Your Service",
    seoTitle: "Should You Show Prices on Your Website?",
    excerpt:
      "How service businesses can choose between fixed prices, ranges, 'from' prices, packages, calculators and quotes, with a scope block and the UK price rules.",
    category: "CRO",
    banner: "decisiontree",
    sceneKind: "cost",
    bannerAlt: "A decision tree that routes a service business from how standard its scope is to one of seven price-display formats, from a fixed price to contact for a quote",
    date: "2026-10-15",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["professional-services", "healthcare-healthtech", "b2b-enterprise", "startups"],
    relatedSlugs: ["improve-website-lead-quality", "improve-website-enquiry-form-conversions", "fixed-price-vs-time-and-materials"],
    faqs: [
      {
        q: "Will showing prices make us look cheap?",
        a: "A number on its own can, because visitors compare it with cheaper offers that cover less. A number placed next to a clear scope (what is included, what is not, who does the work and how long it takes) is much harder to misread. If you worry about looking cheap, fix the scope description before you decide to hide the price.",
      },
      {
        q: "Will competitors undercut us if we publish prices?",
        a: "They may see them, but most competitors can already find your prices by asking for a quote. What they cannot copy easily is your scope, process and the people doing the work. Publishing a range or typical project examples gives buyers a budget signal without handing out a line-by-line rate card.",
      },
      {
        q: "Is a 'from' price legal in the UK?",
        a: "Yes, for consumers, as long as it is not misleading. The CMA's price transparency guidance says a total price can be an indicative or 'from' price if it includes all mandatory charges, and that where the total depends on the customer's requirements you must explain how it is calculated, as prominently as the price itself. The 'from' figure should be a price customers can actually get.",
      },
      {
        q: "Do these price rules apply to B2B services?",
        a: "The CMA guidance discussed here is consumer protection law, so it is written for prices offered to consumers. Pure business-to-business offers are generally outside it, but misleading business customers can still create contract and reputational problems. Sector regulators can add their own rules: the SRA's transparency rules, for example, cover some services that law firms provide to businesses.",
      },
      {
        q: "Should we publish packages or a custom quote?",
        a: "Packages suit work you deliver the same way most of the time, with a small number of meaningful differences between tiers. Custom quotes suit work where scope varies widely. Many service firms do both: packages for the standard entry point and 'contact us' for anything outside them.",
      },
      {
        q: "How do we know if showing prices worked?",
        a: "Compare enquiry quality, not only enquiry volume, over a fixed period before and after the change: how many enquiries had a budget that fits, how many became proposals, and how many became paid work. Most service sites do not have enough traffic for a reliable A/B test of a pricing change, so a planned before-and-after comparison is usually more realistic.",
      },
    ],
    content: [
      {
        heading: "Should you show prices on your website?",
        body: [
          "**Usually, yes, show something: at least a range, a 'from' price or typical project examples, alongside a clear description of scope. Hide prices completely only when the work varies so much that any number would mislead, and even then explain how you price.** The real choice is not price or no price. It is which of seven formats fits how standard your service is, and what you put next to the number so it cannot be read as cheap.",
          "This guide is for owners and marketing leads of service businesses: agencies, consultancies, clinics, trades and professional firms. If you sell self-serve software plans, the [[/blogs/saas-pricing-page-optimization|SaaS pricing page guide]] covers plans, trials and cancellation instead.",
          "There is no reliable public study showing that publishing prices raises or lowers enquiries for service businesses in general. Owners report both outcomes. So treat this as a decision to make on your own site and measure, not as a known uplift.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Pick the format from how standard your scope is, not from what competitors do.",
          "A price is only undervalued when it appears without its scope. Put inclusions, exclusions and price drivers next to it.",
          "In the UK, a consumer 'from' price must include all mandatory charges, and the method for any variable part must be as prominent as the price.",
          "Packages work for repeatable services; keep tiers few and genuinely different.",
          "Judge the change by enquiry quality and won work over a fixed period, not by form submissions alone.",
        ],
      },
      {
        heading: "Why the fear of undervaluing is usually a scope problem",
        body: [
          "Owners resist publishing prices for three reasons: a single number might look cheap next to a competitor's, buyers might anchor on the lowest figure for a bigger job, and competitors might copy it. All three get worse when the number stands alone. A visitor who sees \"from £X\" with no description cannot tell a basic job from a thorough one, so they compare on the number.",
          "Research on credibility points the same way. Nielsen Norman Group's study of trustworthy design lists **upfront disclosure** as one of four credibility factors, including what the base cost covers and any additional fees, and notes that showing cost ranges is acceptable when the line items are visible. The lesson for a service business is that the scope description does the work of protecting your price.",
          "Hiding prices also has a cost. If visitors cannot tell whether you are in their budget, some will enquire anyway and use up sales time, and others will leave without asking. The [[/blogs/improve-website-lead-quality|guide to improving website lead quality]] covers that trade-off in more depth.",
        ],
      },
      {
        heading: "The price-display matrix: seven formats compared",
        body: [
          "Use this matrix to choose a format for each service, not for the whole site. A firm can sensibly use a fixed price for an audit, packages for a standard build and 'contact us' for large programmes. The lead-quality column is qualitative: it describes the likely direction, not a measured effect.",
        ],
        table: {
          headers: ["Format", "When it suits", "Likely effect on lead quality", "Risks and how to reduce them"],
          rows: [
            ["**Fixed price**", "The scope is the same every time: an audit, a set-up, a defined session or report", "Strong budget filter. Enquirers already accept the price, so conversations start on timing and fit", "Looks cheap if the deliverable is vague. Describe the output exactly and state what is not included"],
            ["**Range**", "Scope varies within known limits, such as by size, number of pages or locations", "Filters out enquiries far below the bottom of the range; buyers near the bottom may expect the lowest figure", "Explain what moves a job from the low end to the high end, so buyers can place themselves"],
            ["**\"From\" price**", "A clear entry point exists, but most jobs go above it", "Weaker filter than a range: it sets a floor but no ceiling", "Anchoring on the floor. Show the drivers next to it. For UK consumers, the floor must include mandatory charges and be achievable"],
            ["**Packages**", "Repeatable services with a few meaningful variations", "Usually clear: buyers self-select a tier before enquiring", "Too many tiers confuse; tiers that differ only in quantity invite haggling. Keep a route for work outside the packages"],
            ["**Calculator or estimator**", "Price follows a small number of inputs you can ask about online", "Can qualify well if the inputs are the real cost drivers", "Build and maintenance cost; estimates that differ from final quotes damage trust. Label the result as an estimate and say what can change it"],
            ["**\"Typical project\" examples**", "Work is custom, but past or illustrative jobs fall into recognisable shapes", "Gives a budget signal without committing to a rate; buyers compare their need with the example", "Examples must be honest. Label illustrative examples as such and do not present them as client projects"],
            ["**Contact for a quote**", "Scope varies so widely that any number would mislead, or the work is regulated or bespoke", "No budget filter: expect more enquiries that do not fit, and some qualified buyers leaving", "Explain how you price, what affects it and how quickly you reply, and qualify budget in the form"],
          ],
        },
        callout: {
          type: "tip",
          text: "If you cannot decide between two formats, choose the one that lets a visitor answer \"is this roughly in my budget?\" without contacting you. That is the question most hidden-price pages leave open.",
        },
      },
      {
        heading: "The scope-transparency block",
        body: [
          "Whatever format you choose, put a short scope block next to the price. It is what stops a number from being read as cheap, and it answers the questions buyers otherwise ask on a call.",
          "This structure is modelled on the price and service information that the Solicitors Regulation Authority requires law firms in England and Wales to publish for certain services, such as residential conveyancing and employment tribunal claims. The SRA guidance asks firms to state what the price covers and what a client might reasonably expect but is not included, whether VAT is included, the basis of any range and the factors that set the final price, typical timescales and key stages, and the experience and qualifications of the people doing the work. For most businesses this is a model to borrow, not a legal duty. For UK law firms offering the listed services, it is a duty.",
        ],
        checklist: [
          "**What's included:** the deliverables, sessions, revisions or visits the price covers, in concrete terms.",
          "**What's excluded:** things a buyer might reasonably assume are included but are not, such as third-party fees, licences, travel, content or later changes.",
          "**What moves the price:** the two to four factors that push a job up or down, in plain language.",
          "**Tax:** whether the price includes VAT or GST, and which applies.",
          "**Timescales:** typical duration and the key stages, with what you need from the client at each.",
          "**Who does the work:** the roles or named people involved and their relevant experience.",
          "**Next step:** what happens after an enquiry and when the buyer gets a firm quote.",
        ],
      },
      {
        heading: "Hypothetical example: one service, two presentations",
        body: [
          "Hypothetical example: a bookkeeping firm offers monthly bookkeeping for small companies. Version one shows \"From £X per month\" and a 'Get a quote' button. Version two shows the same figure, followed by: includes bank reconciliation and monthly management accounts for up to a stated number of transactions; excludes payroll and year-end accounts; the price rises with transaction volume and the number of bank accounts; onboarding takes two to three weeks; your books are handled by a named, qualified bookkeeper.",
          "Nothing about the price changed. In version two, a buyer with far more transactions knows the floor does not apply to them, and a buyer comparing with a cheaper competitor can see what the difference buys. That is how you are transparent without undervaluing the service.",
        ],
      },
      {
        heading: "Packages: a short guide",
        body: [
          "Packages turn a custom service into a small menu. They suit work you deliver in a broadly similar way each time. They work poorly when every client's needs are different, because the packages then end up as starting points for negotiation.",
        ],
        checklist: [
          "Use two to four tiers. Each should suit a recognisable type of buyer, not just add more units.",
          "Name tiers by outcome or buyer type, and state the scope of each with the same block as above.",
          "Show what is outside every package and how it is priced, such as an hourly rate or a separate quote.",
          "Keep a clear route for buyers who fit none of the packages.",
          "Review packages when your delivery changes. A package that no longer matches how you work causes scope disputes.",
        ],
        callout: {
          type: "note",
          text: "If you are unsure whether a fixed package suits the work at all, the comparison of [[/blogs/fixed-price-vs-time-and-materials|fixed price and time and materials]] explains when fixed scope protects both sides and when it does not.",
        },
      },
      {
        heading: "Rules that may apply",
        body: [
          "**UK, consumers.** The CMA's price transparency guidance (CMA209) treats a web page that tells a customer about a service and its price as normally an invitation to purchase, even if they cannot buy on the page. You must give the total price. The CMA's summary says \"the total price can be an 'indicative' or 'from' price as long as it includes all applicable mandatory charges\". Where the total depends on the customer's requirements, \"you must give the customer the information they need to be able to calculate the total price themselves\", and that information \"must be as prominent as the part of the price that you can calculate\". The CMA can fine up to 10% of turnover or £300,000, whichever is greater. In practice: put the price drivers next to the 'from' figure, not in a footnote.",
          "**UK, regulated professions.** Sector regulators can add duties. The SRA's transparency rules described above are one example. Check your own regulator's rules before changing a pricing page.",
          "**Business buyers.** The CMA guidance is consumer law. Pure B2B offers are generally outside it, but the same principles avoid disputes and wasted sales time.",
          "**India and Australia (check before relying on this).** India's consumer authority has issued dark-pattern guidelines that are reported to cover drip pricing, and clinics in some states face rules on displaying rates. Australian consumer law has a long-standing single-price rule for consumer offers that show part of a price. We have not verified the current primary texts for this article, so confirm them with the regulator or an adviser before you rely on them.",
        ],
        callout: {
          type: "note",
          text: "This is general information, not legal advice. Pricing rules change, and sector rules can be stricter than general consumer law.",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "A 'from' price that almost nobody pays, or that leaves out a charge every customer must pay.",
          "Price drivers hidden in an FAQ or a footnote instead of next to the price.",
          "Packages that differ only by quantity, so buyers negotiate rather than choose.",
          "A calculator that produces estimates far from the eventual quote.",
          "\"Typical project\" examples presented as real client work when they are illustrative.",
          "Prices that differ between the website, proposals and ads.",
          "Judging the change by form submissions alone, when the aim was fewer poor-fit enquiries.",
        ],
      },
      {
        heading: "How to test the change on your own site",
        body: [
          "Most service businesses do not have the traffic for a reliable A/B test of a pricing page, and splitting visitors between different prices for the same service can confuse buyers who return or compare notes. A planned before-and-after comparison is usually more practical.",
        ],
        checklist: [
          "**Set a baseline.** For the previous 8 to 12 weeks, record enquiries per week, the share with a budget that fits, proposals sent and work won. Add a budget or scope question to the form first if you do not capture it.",
          "**Change one thing.** Publish the new price format and scope block on one service page, not across the whole site at once.",
          "**Keep everything else steady.** Avoid launching a campaign or changing the form during the same period, or note it if you must.",
          "**Compare like with like.** Run for a similar period and compare the same measures, allowing for seasonality.",
          "**Ask the sales team.** Record whether first calls start further along, for example on timing rather than on cost.",
          "**Decide in advance** what result would make you keep, adjust or reverse the change.",
        ],
        callout: {
          type: "tip",
          text: "If you want a second opinion on what to measure before you change anything, a [[/services/cro-audit|CRO audit]] can review your services pages, enquiry form and tracking together.",
        },
      },
      {
        heading: "When showing prices is not the right move",
        body: [
          "Showing a number can mislead when every engagement is genuinely bespoke and a range would span an order of magnitude, when a regulator restricts how you can advertise, or when prices depend on confidential negotiations such as public-sector framework rates. In those cases, use 'contact for a quote', but publish how you price, what affects the price, what happens after an enquiry and how quickly you respond. A good enquiry form then does the qualifying: the [[/blogs/improve-website-enquiry-form-conversions|guide to enquiry form conversions]] covers which questions to ask without putting people off.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Regulators: CMA: providing clear and accurate information about prices, summary (updated 7 January 2026); CMA209: price transparency; SRA: transparency in price and service (updated 30 September 2024).",
          "Research: Nielsen Norman Group: Trustworthiness in Web Design, 4 Credibility Factors (Aurora Harley, 2016).",
          "Accessed 15 October 2026. Pricing rules change; check current guidance and take advice for your sector.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Decide service by service. Where scope is standard, publish a fixed price, range or packages. Where it varies, use 'from' prices or typical project examples. Use 'contact for a quote' only where a number would mislead. In every case, put the scope block next to the price, follow the CMA rules for consumer prices, and measure the change by enquiry quality and work won over a fixed period. Trust signals around the price matter too: see [[/blogs/website-trust-and-credibility|which trust signals to show on each page]].",
        ],
        cta: {
          title: "Restructuring your services and pricing pages?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|website development]] and [[/services/cro-audit|CRO audits]]. If useful, we can talk through how your services pages present price and scope, and how to measure enquiry quality before and after a change.",
        },
      },
    ],
  },
];
