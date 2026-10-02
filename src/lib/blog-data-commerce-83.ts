import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch eleven, part one: cross-border costs and
 * marketplace catalog and trust. Slots 511-530 of the brief mostly duplicate
 * existing guides (international development, localization, i18n,
 * multi-currency, multi-language, global checkout, marketplace development,
 * onboarding, commissions, payments, orders and search), so this part only
 * covers the gaps: duties and landed cost, merchant of record (in place of
 * "cross-border ecommerce", which the international hub already owns),
 * marketplace catalog management and marketplace trust and safety (in place
 * of "marketplace website design", owned by multi-vendor-ecommerce-ux).
 * Regulatory statements were checked against official sources in October
 * 2026 and are phrased as general guidance. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts83: BlogPost[] = [
  // ---------------------------------------- 518 · DUTIES AND IMPORT TAXES
  {
    slug: "ecommerce-duties-import-taxes",
    title: "Ecommerce Duties and Import Taxes: How to Explain Cross-Border Costs",
    seoTitle: "Ecommerce Duties and Import Taxes: Landed Cost, DDP and DAP",
    excerpt:
      "How customs duties, import VAT and landed cost work in cross-border ecommerce, DDP versus DAP, how to calculate and show import charges at checkout, and what to confirm with advisers.",
    category: "Shopify & Ecommerce",
    banner: "dutieslandedcost",
    bannerAlt:
      "Landed cost at checkout in four columns: product (item price, currency, discounts, tax-inclusive price), shipping (carrier rate, service level, insurance, surcharges), import charges highlighted (customs duty, import VAT or GST, low-value rules, excise) and fees (brokerage, clearance, currency conversion, collection fee).",
    date: "2026-10-02",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    relatedSlugs: ["international-ecommerce-shipping", "ecommerce-merchant-of-record", "global-ecommerce-checkout"],
    faqs: [
      { q: "What is the difference between duties and import taxes?", a: "Customs duty is a tariff charged on imported goods, usually a percentage of their customs value that depends on the product's classification and origin. Import taxes are consumption taxes such as VAT or GST charged on imports, often calculated on the value including duty and shipping." },
      { q: "What is landed cost in ecommerce?", a: "The total cost of getting an order to the customer's door: product price, shipping, insurance, customs duty, import VAT or GST, and any brokerage, clearance or collection fees." },
      { q: "What is the difference between DDP and DAP?", a: "With DDP (delivered duty paid), the seller pays import charges and the customer pays nothing on delivery. With DAP (delivered at place), the customer or recipient pays import charges when the parcel arrives. Both names come from the ICC Incoterms rules, which ecommerce uses loosely." },
      { q: "Is DDU still used?", a: "DDU (delivered duty unpaid) was removed from the Incoterms rules in 2010 and replaced by DAP, although carriers and shoppers still use the term informally." },
      { q: "Should a store charge duties at checkout?", a: "For most consumer stores selling into markets where import charges are significant, collecting a landed cost at checkout (DDP) gives a clearer experience and fewer refused parcels. The trade-off is that you take on calculation accuracy and, in some setups, registration obligations." },
      { q: "What is an HS code?", a: "A Harmonized System code is the international product classification maintained by the World Customs Organization. The first six digits are shared internationally; countries add digits for their own tariffs. The code drives duty rates." },
      { q: "Does the US still have an $800 de minimis exemption?", a: "No. US Customs and Border Protection suspended duty-free de minimis treatment for low-value shipments from all countries from 29 August 2025, and legislation passed in July 2025 eliminates it by statute from 1 July 2027. Check CBP guidance for current procedures." },
      { q: "What changed for low-value parcels into the EU?", a: "The EU ended the €150 customs duty exemption for low-value consignments from 1 July 2026, introducing a transitional flat duty per item while a permanent system is built. Import VAT on these consignments has been collectable at checkout through IOSS since 2021." },
      { q: "Who is responsible if the duty calculation is wrong?", a: "It depends on the setup. If you are the importer of record and undercollect, you usually absorb the difference. Some services guarantee their quotes. Under a merchant of record model, the provider carries more of that liability." },
      { q: "Is this article tax or customs advice?", a: "No. It explains how import charges affect the buying journey and the systems behind it. Duty rates, thresholds and registration duties vary by destination and change often, so confirm your obligations with a customs broker or tax adviser." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Cross-border orders can attract customs duty, import VAT or GST, and brokerage or clearance fees on top of the product and shipping price. Together these make up the landed cost. A store either collects them at checkout and pays them on the customer's behalf (DDP), or leaves the customer to pay on delivery (DAP). DDP needs accurate product classification, origin and value data plus a calculation service, but it removes surprise charges and refused parcels. Whatever model you choose, show it clearly on product pages, in the cart and at checkout.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This guide covers the import-charge part of selling abroad. The wider build is in [[/blogs/international-ecommerce-website-development|international ecommerce website development]], carriers and customs paperwork are in [[/blogs/international-ecommerce-shipping|international ecommerce shipping]], and domestic sales tax and VAT calculation are in [[/blogs/ecommerce-tax-integration|ecommerce tax integration]]. If you would rather hand import obligations to a third party, read [[/blogs/ecommerce-merchant-of-record|merchant of record for ecommerce]].",
        ],
        callout: {
          type: "note",
          text: "This is general technical and UX guidance, not tax, customs or legal advice. Rates, thresholds and registration rules differ by destination and change often. Confirm your position with a customs broker or tax adviser before you launch in a market.",
        },
      },
      {
        heading: "What Are Duties, Import Taxes and Landed Cost?",
        body: [
          "**Customs duty** is a tariff on imported goods. The rate depends on what the product is (its tariff classification), where it was made (its origin) and sometimes on trade agreements between the two countries. It is usually a percentage of the customs value, though some goods carry fixed or specific duties.",
          "**Import VAT or GST** is the destination's consumption tax applied to imports, so imported goods are taxed like domestic ones. It is often calculated on a base that includes the goods, shipping and the duty itself, which is why duty and tax interact.",
          "**Fees** come from the carrier or broker for clearing the parcel: brokerage, disbursement or advancement fees, and sometimes a collection fee when the recipient pays on delivery. These are not taxes, but customers experience them the same way.",
          "**Landed cost** is the total of all of these plus product and shipping. It is the number the customer actually pays, and the number your checkout should be honest about.",
        ],
      },
      {
        heading: "What Determines the Amount?",
        body: [
          "Import charges depend on product data most stores do not hold by default. Classification uses the [[https://www.wcoomd.org/en/topics/nomenclature/overview/what-is-the-harmonized-system.aspx|Harmonized System]], where the first six digits are shared internationally and each country extends the code for its own tariff schedule.",
        ],
        table: {
          headers: ["Input", "What it means", "Where the data lives"],
          rows: [
            ["Tariff classification (HS code)", "What the product is, for customs purposes", "Product master or PIM, per product and often per destination"],
            ["Country of origin", "Where the goods were made or substantially transformed", "Supplier data, product master"],
            ["Customs value", "Transaction value; some countries add shipping and insurance", "Order data at the time of sale"],
            ["Destination rules", "Duty rates, tax rates and low-value thresholds", "Calculation service or tariff database"],
            ["Trade agreements", "Possible preferential rates when origin rules are met", "Origin documentation, broker"],
            ["Shipment details", "Weight, quantity, consignment value", "Order and shipping integration"],
          ],
        },
      },
      {
        heading: "DDP vs DAP: Who Pays and When?",
        body: [
          "The terms come from the [[https://iccwbo.org/business-solutions/incoterms-rules/|ICC Incoterms rules]], which define delivery responsibilities in trade contracts. Consumer ecommerce borrows them as shorthand. DDU, still common in carrier conversations, was retired from Incoterms in 2010 and replaced by DAP.",
          "**DDP (delivered duty paid):** the seller, or a service acting for the seller, pays import charges. The customer sees one total at checkout and nothing at the door. The store needs a reliable landed cost quote and a carrier or broker set up to bill duties to the shipper.",
          "**DAP (delivered at place):** the customer pays import charges on arrival, usually to the carrier before release. Checkout is simpler for the store, but the customer meets an unexpected bill plus a carrier fee, and some refuse the parcel. Refused parcels mean return shipping, write-offs and support time.",
        ],
        diagram: {
          variant: "ddpdapflow",
          alt: "Landed cost flow: classify product with an HS code, confirm origin and value, apply destination rules, quote landed cost (highlighted), collect at checkout under DDP, then clear and deliver; a branch notes that under DAP the buyer pays import charges on delivery.",
          caption: "Under DDP the quote happens before payment; under DAP the customer discovers the charge at the door.",
        },
      },
      {
        heading: "Low-Value Import Rules Are Changing",
        body: [
          "Many cross-border stores were built around low-value exemptions that let small parcels enter without duty. Those exemptions are being removed or reshaped, which is why a duty strategy that worked two years ago may now produce surprise charges. As of October 2026:",
        ],
        checklist: [
          "**United States:** [[https://www.cbp.gov/trade/basic-import-export/e-commerce|CBP]] suspended duty-free de minimis treatment for low-value shipments from all countries from 29 August 2025, and the exemption is eliminated by statute from 1 July 2027. Low-value parcels now need formal or informal entry and duty payment.",
          "**European Union:** the €150 customs duty exemption ended on 1 July 2026, replaced by a transitional flat duty per item on low-value consignments. Import VAT on consignments up to €150 can be collected at checkout through the [[https://vat-one-stop-shop.ec.europa.eu/|Import One-Stop Shop (IOSS)]].",
          "**United Kingdom:** for consignments of £135 or less, the seller or marketplace charges [[https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk|UK VAT at the point of sale]]. The government has announced that customs duty relief on low-value imports will end, so expect changes here too.",
          "**Australia:** registered overseas sellers and marketplaces collect [[https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/gst-on-low-value-imported-goods|GST on low-value imported goods]] of A$1,000 or less at checkout; higher-value consignments are taxed at the border.",
        ],
        callout: {
          type: "note",
          text: "Treat these as a snapshot. Thresholds and collection methods are actively changing in several markets. Build your system so rates and rules come from a maintained service or configuration, not from values hard-coded into themes or checkout scripts.",
        },
      },
      {
        heading: "How to Calculate Landed Cost in the Store",
        body: [
          "A landed cost quote needs product classification, origin, the order's value and destination, and current tariff and tax rules. Few teams should maintain tariff tables themselves. The usual options are the platform's built-in duty calculation (for example, duties and import taxes in [[/blogs/shopify-markets|Shopify Markets]]), a dedicated landed cost API, a tax engine with cross-border support, or a merchant of record that quotes and collects for you.",
          "Ask two questions about any calculation service. First, is the quote **guaranteed** (the provider covers the difference if customs charges more) or an **estimate**? Second, how does it handle products without a classification? A service that silently assumes zero duty for unclassified items creates the very surprises you are trying to remove.",
          "Calculate on the final basket: after discounts, with the chosen shipping method, in the shopper's currency. Recalculate when the address, basket or shipping option changes, and store the quoted breakdown on the order so refunds and reconciliation use the same numbers the customer saw.",
        ],
      },
      {
        heading: "How Should a Store Explain Import Charges to Shoppers?",
        body: [
          "[[https://baymard.com/lists/cart-abandonment-rate|Baymard Institute's checkout research]] consistently finds that extra costs revealed late are a leading reason shoppers abandon checkout. Import charges are the most surprising extra cost of all, because many shoppers do not know they exist. Explain them early and in plain words.",
        ],
        checklist: [
          "**Product page:** a short line such as 'Duties and taxes included for delivery to Canada' or 'Import charges may apply on delivery', driven by the shopper's market",
          "**Cart:** an estimate of duties and taxes once the destination is known, or a clear 'calculated at checkout' label",
          "**Checkout:** duties, import taxes and fees as separate, named lines, never hidden in shipping",
          "**DAP markets:** say who collects the charge (the carrier), roughly when, and that a handling fee may apply",
          "**Confirmation email and receipt:** repeat the breakdown and the model (paid or payable on delivery)",
          "**Help centre:** a market-by-market explanation linked from checkout, written for customers rather than customs specialists",
        ],
        cta: {
          title: "Planning cross-border checkout for new markets?",
          description: "ZSpace can connect landed cost calculation, product classification data and checkout messaging so international customers see the full price before they pay.",
        },
      },
      {
        heading: "Absorb, Include or Charge Separately?",
        body: [
          "Once you can calculate import charges, you still have to decide who bears them and how they appear. This is a pricing decision as much as a technical one, and it connects to [[/blogs/multi-currency-ecommerce|how you set local prices]].",
        ],
        table: {
          headers: ["Approach", "Customer sees", "Works well when", "Watch out for"],
          rows: [
            ["Charge separately (DDP)", "Product, shipping, duties and taxes as lines", "Charges vary a lot by product and basket", "Totals that jump late in checkout"],
            ["Include in price (DDP)", "One tax- and duty-inclusive price", "Markets where inclusive pricing is expected", "Margin swings when rates or thresholds change"],
            ["Absorb up to a threshold", "No import charges below a basket value", "Charges are small and predictable", "Cost exposure on large or high-duty baskets"],
            ["Customer pays on delivery (DAP)", "A warning that charges may apply", "Low volumes or markets you are testing", "Refused parcels and support load"],
          ],
        },
      },
      {
        heading: "Returns, Refunds and Refused Parcels",
        body: [
          "Duties complicate the return path. When a customer returns an item, refund the duties you collected for it unless your policy and local rules say otherwise, but recognise that reclaiming duty from customs authorities is a separate, often slow process that may not be worth it for low-value goods. Decide this policy before launch, show it on the returns page and build it into [[/blogs/ecommerce-refund-automation|refund calculations]] so duty refunds are applied consistently.",
          "Under DAP, refused parcels are the expensive failure. The carrier returns or abandons the parcel, you pay return shipping or lose the goods, and the customer often still wants a refund. Track refusal rates by market. A rising rate is usually the clearest signal that a market should move to DDP. The operational side is covered in [[/blogs/ecommerce-returns-management|ecommerce returns management]].",
        ],
      },
      {
        heading: "Data and Integration Requirements",
        body: [
          "Landed cost is only as accurate as the product data behind it. Add classification, origin, customs description, weight and material fields to your product model, and make them required for any product sold internationally. A [[/blogs/ecommerce-product-information-management|PIM]] is a natural home for this data when you have one.",
        ],
        checklist: [
          "HS code per product, with destination-specific extensions where your service needs them",
          "Country of origin per product or per variant when sourcing differs",
          "Clear customs descriptions (what it is and what it is made of), not marketing copy",
          "Accurate weights and declared values that match the order",
          "Duty and tax breakdown stored on each order and passed to the carrier for commercial invoices",
          "Reporting by market: import charges collected, paid and refunded, plus refused parcels",
          "Integration with [[/blogs/ecommerce-shipping-integration|carriers and labels]] so paperless documents carry the same data",
        ],
      },
      {
        heading: "DDP Advantages, Limitations and Trade-offs",
        body: [
          "Collecting import charges at checkout is usually the better customer experience, but it moves cost, risk and data work onto the store. Weigh both sides per market rather than switching every destination at once.",
        ],
        table: {
          headers: ["", "DDP (charges collected at checkout)", "DAP (charges paid on delivery)"],
          rows: [
            ["Customer experience", "One known total; no door charges", "Surprise bill and carrier fee at delivery"],
            ["Refused parcels", "Rare", "A recurring cost in some markets"],
            ["Store effort", "Classification data, calculation service, carrier billing setup", "Minimal at checkout"],
            ["Financial risk", "Undercollection if quotes are wrong (unless guaranteed)", "Lost goods and return shipping on refusals"],
            ["Registrations", "May be needed for import VAT schemes such as IOSS or UK VAT", "Often fewer, depending on the market"],
            ["Best fit", "Established markets with steady volume", "Low-volume or test markets"],
          ],
        },
      },
      {
        heading: "How to Implement Landed Cost Step by Step",
        body: [
          "A practical rollout sequence for a store that currently ships internationally without collecting import charges:",
        ],
        checklist: [
          "**1. Measure the problem:** refused parcels, duty-related tickets and international conversion by market",
          "**2. Clean product data:** add HS codes, origin and customs descriptions, starting with best-selling SKUs",
          "**3. Pick the model per market:** DDP where volume and refusals justify it, DAP or a [[/blogs/ecommerce-merchant-of-record|merchant of record]] elsewhere",
          "**4. Choose the calculation service:** platform feature, landed cost API, tax engine or MoR; confirm guaranteed versus estimated quotes",
          "**5. Configure carriers:** bill duties to the shipper for DDP markets and pass customs data on labels",
          "**6. Update the journey:** product page message, cart estimate, checkout lines, confirmation and help content, consistent with [[/blogs/global-ecommerce-checkout|international checkout]] design",
          "**7. Set returns policy for duties:** what is refunded and how",
          "**8. Pilot one market, then expand:** compare conversion, refusals and margin before and after",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a UK apparel brand ships to the US under DAP. After US de minimis treatment is suspended, support tickets about unexpected charges rise and some customers refuse parcels. The team adds HS codes and origin to every product, turns on duty calculation for the US market, and shows a 'duties included at checkout' line on product pages. Refusals fall, and the brand can now see exactly what import charges cost per order, which feeds into its US price list review.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Assuming low-value exemptions still apply because they did when the store launched",
          "Selling internationally without HS codes or country of origin on products",
          "Hiding import charges inside shipping fees",
          "Showing 'duties included' while the carrier is still set to bill the recipient",
          "Hard-coding rates or thresholds in theme code",
          "No policy for duties on returns",
          "Not measuring refused parcels by market",
        ],
        cta: {
          title: "Need landed cost and duty data built into your store?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify Markets and duty setup]], [[/services/website-development|custom checkout and integration work]] and a [[/services/cro-audit|checkout audit]] for international customers.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Import charges are part of the price for international customers. Collect accurate classification and origin data, use a maintained calculation service, choose DDP or DAP per market on evidence, and explain the model at every step from product page to receipt. Related reading: [[/blogs/international-ecommerce-shipping|international shipping]], [[/blogs/global-ecommerce-checkout|global checkout]] and [[/blogs/ecommerce-merchant-of-record|merchant of record]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 512 (alternative) · MERCHANT OF RECORD
  {
    slug: "ecommerce-merchant-of-record",
    title: "Merchant of Record for Ecommerce: When Should a Store Use One?",
    seoTitle: "Merchant of Record (MoR) for Ecommerce: How It Works, Pros and Cons",
    excerpt:
      "What a merchant of record does in cross-border ecommerce, how MoR checkout, tax and payments work, the trade-offs against selling through your own entity, and how to evaluate a provider.",
    category: "Shopify & Ecommerce",
    banner: "morcompare",
    bannerAlt:
      "Comparison of selling through your own entity, a merchant of record for physical goods (highlighted) and a merchant of record for digital goods, across legal seller, tax registration, checkout control, fees, customer data and speed to market.",
    date: "2026-10-02",
    readingTime: "9 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "saas-technology"],
    relatedSlugs: ["ecommerce-duties-import-taxes", "international-ecommerce-website-development", "country-specific-ecommerce-stores"],
    faqs: [
      { q: "What is a merchant of record?", a: "The legal entity that sells the goods or services to the customer. It appears on the customer's card statement, is responsible for collecting and remitting sales taxes, and carries liability for the transaction, including refunds and chargebacks." },
      { q: "How does a merchant of record differ from a payment processor?", a: "A processor moves money on behalf of a merchant who remains the seller. A merchant of record is itself the seller, so it also takes on tax registration, filing and much of the compliance burden." },
      { q: "Why do ecommerce brands use an MoR for cross-border sales?", a: "To enter markets without registering for taxes, setting up local payment methods and handling duties in each country themselves. The MoR already has those registrations and processes." },
      { q: "What does an MoR cost?", a: "Usually a percentage of each transaction that is higher than standard payment processing, sometimes with currency conversion margins and fees for duties services. Compare the full cost against what you would spend on registrations, advisers and operations." },
      { q: "Does Shopify offer a merchant of record?", a: "Shopify Managed Markets uses Global-e as the merchant of record for eligible cross-border orders, handling duties, tax remittance and local payment methods. Eligibility depends on where the business is based and other requirements, so check Shopify's current documentation." },
      { q: "Who owns the customer when an MoR is used?", a: "Contractually it varies. The MoR is the legal seller, but most ecommerce MoR services share customer and order data with the brand for fulfilment and marketing, subject to consent and privacy rules. Read the data terms carefully." },
      { q: "Who handles refunds and chargebacks?", a: "The MoR processes them because it took the payment, but the brand usually handles customer service and pays for refunds and lost disputes under the contract. Agree the process and evidence flow before launch." },
      { q: "When should a brand stop using an MoR?", a: "When volume in a market is large enough that the fee costs more than running local tax registrations, payments and duties yourself, or when you need checkout control the MoR cannot provide. Many brands use an MoR to test markets and move high-volume ones in-house." },
      { q: "Is a merchant of record the same for digital products?", a: "The concept is the same, but digital MoRs focus on VAT and sales tax on digital services and subscriptions, while physical-goods MoRs also handle duties, customs documents and cross-border shipping." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A merchant of record (MoR) is the legal seller in a transaction. In cross-border ecommerce, an MoR provider buys the sale from your store in effect: it takes the customer's payment in local currency and methods, collects and remits VAT, GST or sales tax, often calculates and pays duties, and then pays you while you fulfil the order. It shortens time to market and removes registrations in each country. In return you pay a higher transaction fee and give up some control over checkout, data and pricing.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This is one operating model for selling abroad. The full set of choices, including running your own entity and stores per country, is in [[/blogs/international-ecommerce-website-development|international ecommerce website development]] and [[/blogs/country-specific-ecommerce-stores|country-specific stores]]. Import charges are explained in [[/blogs/ecommerce-duties-import-taxes|ecommerce duties and import taxes]], and payment methods in [[/blogs/international-ecommerce-payments|international ecommerce payments]].",
        ],
      },
      {
        heading: "What Does a Merchant of Record Do?",
        body: [
          "The MoR is the business named on the customer's receipt and card statement. Because it is the seller, it carries the obligations that come with selling in that market. For a cross-border physical-goods MoR, those usually include:",
        ],
        checklist: [
          "Accepting payment in local currencies and local payment methods",
          "Registering for, collecting, filing and remitting consumption taxes where required",
          "Calculating, collecting and paying customs duties, often with a guaranteed quote",
          "Producing commercial invoices and customs documentation",
          "Handling fraud screening and taking on chargeback liability for the payment",
          "Applying local consumer rules for pricing display and receipts",
        ],
      },
      {
        heading: "How the MoR Transaction Flow Works",
        body: [
          "In a typical physical-goods setup, the shopper browses your storefront, and checkout for international orders runs through the MoR. The MoR sells the goods to the shopper, collects taxes and duties, and the order flows back to your store for fulfilment. You ship (often with the MoR's carrier arrangements and paperwork), the MoR settles to you net of its fees, and it handles filing and remittance in the destination.",
        ],
        diagram: {
          variant: "morflow",
          alt: "Merchant of record flow: shopper checkout, MoR sells to shopper (highlighted), MoR collects tax and duties, merchant fulfils, MoR pays the merchant, MoR files and remits.",
          caption: "Your store still fulfils the order; the legal sale, tax and payment sit with the MoR.",
        },
      },
      {
        heading: "Merchant of Record vs Payment Provider vs Own Entity",
        body: [
          "It helps to separate three roles that are often blurred in sales conversations.",
        ],
        table: {
          headers: ["Model", "Who is the seller", "Who handles tax and duties", "Best for"],
          rows: [
            ["Payment provider only", "Your business", "You (with advisers and tools)", "Markets you already know and are registered in"],
            ["Merchant of record", "The MoR provider", "The MoR provider", "Testing or serving many markets without local registrations"],
            ["Local entity", "Your local company", "Your local company", "High-volume markets with local operations"],
            ["Marketplace", "Usually the seller, sometimes the marketplace for tax", "Depends on market rules for marketplaces", "Reach through an existing audience"],
          ],
        },
      },
      {
        heading: "Advantages of Using an MoR",
        body: [
          "**Speed.** Opening a market can take weeks rather than months because registrations, payment methods and duty calculation already exist.",
          "**Compliance offloaded.** Tax registration, filing and remittance sit with the provider. For brands without in-house tax expertise, this is the main benefit.",
          "**Local payments and pricing.** Good providers support the payment methods and currency behaviour shoppers expect in each market.",
          "**Predictable landed cost.** Many physical-goods MoRs guarantee duty and tax quotes, which removes surprise charges and refused parcels.",
        ],
      },
      {
        heading: "Limitations and Trade-offs",
        body: [
          "**Cost.** MoR fees are a percentage of the order, typically well above standard processing, and currency conversion margins add more. At scale this can exceed the cost of doing it yourself.",
          "**Checkout control.** The MoR may own or constrain the checkout for international orders. Custom checkout features, some apps and some analytics may not work there.",
          "**Data and relationship.** The MoR is the legal seller, so data sharing, marketing consent and receipts follow its terms. Check what you receive and when.",
          "**Dependency.** Switching away later means re-registering, re-papering payments and possibly changing checkout. Plan an exit even if you never use it.",
          "**Refunds and disputes.** The MoR processes them, but you usually pay for them and must supply evidence quickly.",
        ],
        cta: {
          title: "Weighing an MoR against running markets yourself?",
          description: "ZSpace can map the checkout, data and integration changes either route requires, so the decision is based on your stack rather than a sales deck.",
        },
      },
      {
        heading: "Merchant of Record on Shopify",
        body: [
          "[[https://help.shopify.com/en/manual/international/managed-markets/overview|Shopify Managed Markets]] uses Global-e as the merchant of record for eligible cross-border orders, handling duties, tax remittance, commercial invoices and local payment methods. According to Shopify's documentation it requires Shopify Payments and is available to eligible businesses in a limited set of countries, so check current eligibility before planning around it. Brands can also integrate third-party MoR or cross-border providers directly. For the non-MoR route, see [[/blogs/shopify-markets|Shopify Markets]].",
        ],
      },
      {
        heading: "Physical Goods vs Digital Products",
        body: [
          "Digital product and software businesses also use MoRs, but the focus differs. Digital MoRs concentrate on VAT and sales tax on digital services, subscriptions and invoicing; there are no customs or shipping documents. Physical-goods MoRs add duties, customs paperwork, carrier arrangements and returns across borders. Make sure the provider you evaluate is built for your product type.",
        ],
      },
      {
        heading: "How to Evaluate an MoR Provider",
        body: [],
        checklist: [
          "Markets, currencies and local payment methods actually supported",
          "Whether duty and tax quotes are guaranteed, and who pays when they are wrong",
          "Fee structure, including currency conversion and duty service charges",
          "Checkout ownership: what you can customise and which apps and scripts still work",
          "Order, customer and consent data you receive, and how fast",
          "Refund, return and chargeback processes, including evidence deadlines",
          "Integration with your platform, OMS and carriers",
          "Settlement timing, currency and reporting for reconciliation",
          "Contract terms for exit, and what happens to registrations and data if you leave",
        ],
      },
      {
        heading: "When Should a Brand Use an MoR?",
        body: [
          "An MoR tends to fit when you are entering several markets at once, international revenue is still small relative to the cost of registrations and advisers, you lack in-house tax and customs expertise, or you want to test demand before committing. It fits less well when one or two international markets already generate significant revenue, when you need full checkout control, or when you already operate local entities.",
          "Many brands use both: an MoR for the long tail of markets and their own registrations and payment setup for the largest ones. Revisit the decision each year with real numbers.",
        ],
      },
      {
        heading: "What Changes in Your Systems When You Add an MoR",
        body: [
          "An MoR is a business decision, but it lands in your stack. Expect changes in these places:",
        ],
        checklist: [
          "**Checkout:** international orders may run through the MoR's checkout or payment layer, which affects scripts, apps, analytics tags and custom checkout features",
          "**Orders:** orders arrive with MoR-specific fields (their transaction ID, duties paid, currency) that your OMS, ERP and support tools must understand",
          "**Pricing:** local prices may be set in the MoR or converted by it; align this with [[/blogs/multi-currency-ecommerce|your multi-currency approach]]",
          "**Fulfilment:** labels and commercial invoices may come from the MoR's carrier arrangements; your [[/blogs/ecommerce-fulfilment-integration|3PL integration]] needs to carry them",
          "**Finance:** settlements arrive net of fees and in the MoR's reporting format; reconciliation needs a mapping",
          "**Customer data:** consent and marketing data may arrive later or in a different shape; check your email and CRM sync",
          "**Returns and refunds:** the MoR issues refunds against its payment, so your returns tools need its API or workflow",
        ],
      },
      {
        heading: "How to Implement an MoR Step by Step",
        body: [],
        checklist: [
          "**1. Model the economics:** MoR fees and FX margins versus registrations, advisers, payment setup and duty handling per market",
          "**2. Shortlist providers:** confirm product type, markets, payment methods and guaranteed duty quotes",
          "**3. Audit your checkout:** list apps, scripts and custom features that must work for international orders",
          "**4. Map data flows:** orders, refunds, disputes, settlements and consent between the MoR and your systems",
          "**5. Agree service processes:** who answers customers, who supplies dispute evidence and how fast",
          "**6. Pilot a few markets:** compare conversion, refusals, support tickets and margin against the previous setup",
          "**7. Review annually:** move high-volume markets in-house when the numbers say so, and keep the [[/blogs/ecommerce-duties-import-taxes|landed cost data]] you would need to do it",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a US home goods brand receives orders from 20 countries but only Canada and the UK are material. It uses an MoR for all international orders for its first year, which lets it sell without local registrations. After a year, Canada and the UK each generate enough revenue that MoR fees exceed the estimated cost of running them directly, so the brand registers in those markets, adds local payment methods through its own provider and keeps the MoR for the remaining countries.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Comparing MoR fees only with payment processing fees, not with the full cost of compliance",
          "Not checking which checkout features and apps stop working for international orders",
          "Assuming customer data and consent transfer automatically",
          "No plan for evidence when the MoR handles disputes",
          "Never revisiting the decision as markets grow",
        ],
        cta: {
          title: "Planning your international operating model?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify Markets and Managed Markets setups]] or [[/services/website-development|custom cross-border checkout and integrations]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A merchant of record is a way to buy speed and outsourced compliance in new markets. It is often the right first step and sometimes the wrong long-term one. Evaluate the full cost, the checkout and data constraints, and your exit, and keep the decision under review as markets grow. Related: [[/blogs/ecommerce-duties-import-taxes|duties and import taxes]] and [[/blogs/international-ecommerce-payments|international payments]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 527 · MARKETPLACE CATALOG MANAGEMENT
  {
    slug: "marketplace-product-catalog-management",
    title: "Marketplace Product Catalog Management: How to Organize Multi-Seller Listings",
    seoTitle: "Marketplace Catalog Management: Products, Offers and Matching",
    excerpt:
      "How to manage a multi-seller marketplace catalog: product versus offer models, ownership of content, product matching and duplicates, variants, attributes, listing quality and moderation.",
    category: "Shopify & Ecommerce",
    banner: "marketplacecatalog",
    bannerAlt:
      "Marketplace catalog model in four columns: product (canonical record, GTIN or MPN, attributes, content owner), offer highlighted (price, stock, condition, delivery promise), seller (seller SKU, terms, rating, fulfilment) and quality (match rules, duplicate checks, completeness, moderation).",
    date: "2026-10-02",
    readingTime: "9 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail", "b2b-enterprise"],
    relatedSlugs: ["multi-vendor-ecommerce-marketplace", "marketplace-product-discovery", "marketplace-trust-and-safety"],
    faqs: [
      { q: "What is marketplace catalog management?", a: "The rules, data model and workflows that decide how products from many sellers become listings buyers can search and compare: who owns product content, how duplicates are matched, which attributes are required and how quality is enforced." },
      { q: "What is the difference between a product and an offer?", a: "A product describes the item itself (title, attributes, images, identifiers). An offer is one seller's terms for selling it (price, stock, condition, delivery and returns). In a shared catalog, one product can have many offers." },
      { q: "Should every seller create their own listing?", a: "That works for unique goods such as handmade or used items. For standard branded products, separate listings create duplicates that fragment reviews and search. Most marketplaces with standard goods use one product with multiple offers." },
      { q: "How do marketplaces detect duplicate products?", a: "By matching on global identifiers such as GTINs first, then brand plus manufacturer part number, then normalized titles and attributes, and finally image or text similarity, with human review for uncertain matches." },
      { q: "Who owns product content in a shared catalog?", a: "The marketplace should own the canonical product record and decide which contribution wins, often trusting brand owners and high-quality sellers more. Sellers propose changes rather than overwriting content." },
      { q: "How should variants work across sellers?", a: "Define variant axes per category, such as size and colour, and map each seller's SKUs to specific variants. Sellers then make offers on variants, not on the parent product." },
      { q: "How do you keep listing quality high?", a: "Category-specific required attributes, controlled values instead of free text, image rules, automated validation at submission and risk-based review before publishing." },
      { q: "Which offer should show by default?", a: "Usually the offer with the best combination of total price including delivery, delivery speed, stock and seller performance. Make the rule transparent to sellers and do not hide the other offers." },
      { q: "Can AI help with marketplace catalogs?", a: "Yes, for attribute extraction, classification suggestions, duplicate detection and quality checks, with confidence thresholds and human review for low-confidence cases." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Marketplace catalog management decides how many sellers' listings become a catalog buyers can trust. Start by choosing the model: a shared catalog where one canonical product carries many seller offers, or seller-owned listings for unique goods. Separate product content (title, attributes, images, identifiers) from offer data (price, stock, condition, delivery). Match submissions to existing products using GTINs, brand and part numbers and attribute similarity, define category-specific required attributes and variant axes, and enforce quality with validation and risk-based review.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The overall marketplace build is in [[/blogs/marketplace-website-development|marketplace development]] and the operating model in [[/blogs/multi-vendor-ecommerce-marketplace|multi-vendor marketplaces]]. How buyers find products once the catalog exists is in [[/blogs/marketplace-product-discovery|marketplace product discovery]] and [[/blogs/marketplace-search-and-filters|marketplace search]]. For single-brand product data, see [[/blogs/ecommerce-product-information-management|product information management]].",
        ],
      },
      {
        heading: "Choose the Catalog Model First",
        body: [
          "Every later decision depends on whether sellers share product records. Changing the model after launch means migrating listings, reviews and URLs, so decide early.",
        ],
        table: {
          headers: ["Model", "How it works", "Fits", "Main risk"],
          rows: [
            ["Shared catalog (product + offers)", "One product page; sellers attach offers", "Branded, standard and identifiable goods", "Matching errors and content disputes"],
            ["Seller-owned listings", "Each seller creates and owns listings", "Unique, handmade, used or custom goods", "Duplicates for standard items"],
            ["Hybrid", "Shared products where identifiers exist, seller listings otherwise", "Mixed catalogs", "Complexity in search and ranking"],
          ],
        },
      },
      {
        heading: "Separate Product Data From Offer Data",
        body: [
          "The core data model has three parts. The **product** is the canonical description of an item: identifiers, brand, title, attributes, images and category. The **offer** is one seller's terms: price, quantity, condition, delivery promise, returns policy and fulfilment method. The **seller** carries account-level information: ratings, policies and performance.",
          "Keeping these separate prevents the most common catalog problem: sellers editing shared product content to suit their own offer. Price and stock belong to the offer; the product title does not change because one seller has a promotion.",
        ],
        code: {
          label: "Example: simplified product and offer records (illustrative)",
          text: "product {\n  id: \"p_1842\"\n  gtin: \"00012345678905\"\n  brand: \"Acme\"\n  mpn: \"AC-200\"\n  category: \"kitchen/blenders\"\n  attributes: { capacity_l: 1.5, power_w: 900, colour: \"black\" }\n}\n\noffer {\n  id: \"o_99120\"\n  product_id: \"p_1842\"\n  seller_id: \"s_311\"\n  seller_sku: \"BLND-900-BLK\"\n  price: { amount: 89.00, currency: \"USD\" }\n  quantity: 14\n  condition: \"new\"\n  ships_in_days: 2\n}",
        },
      },
      {
        heading: "Who Owns Product Content?",
        body: [
          "In a shared catalog, several sellers may submit different titles, images and attribute values for the same product. The marketplace needs a rule for which contribution becomes canonical. Common approaches rank sources by trust: verified brand owners first, then sellers with strong accuracy history, then everyone else. Changes from lower-trust sources become proposals that are validated or reviewed rather than applied directly.",
          "Keep an audit history of every change to a product record, with the source. When a buyer complains that a listing is wrong, you need to know who changed what and when.",
        ],
      },
      {
        heading: "How Does Product Matching Work?",
        body: [
          "Matching decides whether a new submission is an existing product or a new one. Get it wrong one way and buyers see five copies of the same item; get it wrong the other way and two different products merge, with one seller's offer attached to the wrong item.",
        ],
        checklist: [
          "**Global identifiers first:** [[https://www.gs1.org/standards/id-keys/gtin|GTINs]] (UPC, EAN, ISBN) are the strongest signal, after validating check digits and checking they belong to the stated brand",
          "**Brand plus manufacturer part number:** strong for goods without GTINs, after normalizing formatting",
          "**Normalized title and key attributes:** useful as a supporting signal, weak on its own",
          "**Image and text similarity:** helpful for catching duplicates without identifiers",
          "**Confidence thresholds:** auto-match above a high threshold, send the middle band to human review, create a new product below it",
          "**Merge and split tools:** operators need to merge duplicates and split wrong matches without losing offers or reviews",
        ],
        diagram: {
          variant: "listingingest",
          alt: "Listing ingestion flow: seller submits, validate attributes, match against existing products (highlighted), attach offer or create product, review by risk, publish and index.",
          caption: "Matching is the step that decides whether buyers see one product page or many copies.",
        },
      },
      {
        heading: "Variants Across Sellers",
        body: [
          "Variants are where shared catalogs most often break. One seller lists 'Navy, M' and another 'Blue / Medium'. Define variant axes per category (size, colour, capacity) with controlled values, and require sellers to map each SKU to a specific variant. Offers then attach to variants, so a buyer selecting 'Medium' sees only offers for that size.",
          "Size systems need particular care in fashion and footwear, where regional sizing differs. Store the size system as data rather than embedding it in labels.",
        ],
      },
      {
        heading: "Attributes and Listing Quality",
        body: [
          "Required attributes should vary by category. A blender needs capacity and power; a jacket needs material and size system. Use controlled values wherever filters and comparison depend on the attribute, and free text only for descriptions. This is what makes [[/blogs/marketplace-search-and-filters|filters]] work across sellers.",
        ],
        checklist: [
          "Category-specific required and recommended attributes",
          "Controlled vocabularies and units, normalized on import",
          "Image rules: minimum size, background where relevant, no watermarks or contact details",
          "Title templates per category to keep listings comparable",
          "Completeness scores visible to sellers in their [[/blogs/marketplace-seller-dashboard|seller dashboard]]",
          "Automated validation at submission with specific error messages",
        ],
        cta: {
          title: "Building a marketplace catalog that scales past the first hundred sellers?",
          description: "ZSpace designs product and offer data models, matching workflows and seller listing tools for multi-vendor marketplaces.",
        },
      },
      {
        heading: "Seller Onboarding to the Catalog",
        body: [
          "Sellers add products through a listing form, bulk file upload or API feed. Each channel should run the same validation and matching rules. Bulk and API imports need clear row-level error reports so sellers can fix problems without contacting support. New sellers' first listings are the right place for closer review; see [[/blogs/ecommerce-marketplace-seller-onboarding|seller onboarding]].",
        ],
      },
      {
        heading: "Moderation and Restricted Products",
        body: [
          "Catalog management overlaps with trust and safety. Prohibited and restricted items, counterfeit risk, misleading claims and intellectual property complaints all arrive through listings. Route high-risk categories and new sellers through review, and give buyers and rights owners a way to report listings. The wider policy and enforcement system is in [[/blogs/marketplace-trust-and-safety|marketplace trust and safety]].",
        ],
      },
      {
        heading: "Which Offer Shows by Default?",
        body: [
          "With many offers on one product, the page needs a default. Most marketplaces rank on total price including delivery, delivery speed, stock and seller performance, then list the other offers below. Whatever the rule, publish it to sellers in plain terms. Opaque rules lead to gaming and seller complaints, and they affect how [[/blogs/marketplace-product-discovery|discovery and ranking]] behave.",
        ],
      },
      {
        heading: "Architecture Notes",
        body: [
          "Store products and offers separately and index them together for search, with offer data (price, stock) updated far more often than product content. Process submissions asynchronously through a queue so matching and validation can scale; see [[/blogs/ecommerce-queue-architecture|queue architecture]]. At high seller counts, the catalog becomes one of the main [[/blogs/ecommerce-marketplace-scalability|marketplace scalability]] concerns.",
        ],
      },
      {
        heading: "Trade-offs of a Shared Catalog",
        body: [
          "A shared catalog gives buyers cleaner search and comparison, but it shifts work to the marketplace operator.",
        ],
        table: {
          headers: ["Benefit", "Cost or risk"],
          rows: [
            ["One page per product, so reviews and ratings accumulate", "Matching errors can attach offers to the wrong product"],
            ["Comparable offers on price, delivery and seller", "Sellers compete harder on price, which some resist"],
            ["Consistent attributes make filters work", "Operator must maintain category schemas and content rules"],
            ["Smaller, cleaner search index", "Content disputes between sellers and brands need a process"],
            ["Easier to spot counterfeit and price anomalies", "Brand owners expect control over their product pages"],
          ],
        },
      },
      {
        heading: "How to Build a Catalog Workflow Step by Step",
        body: [],
        checklist: [
          "**1. Choose the model per category:** shared products for identifiable goods, seller listings for unique ones",
          "**2. Define category schemas:** required attributes, controlled values, units and variant axes",
          "**3. Build the product and offer data model** with audit history on product changes",
          "**4. Implement validation** for every channel: form, file upload and API",
          "**5. Add matching** with identifiers first, confidence thresholds and a review queue",
          "**6. Add moderation hooks** for restricted categories and reports, connected to [[/blogs/marketplace-trust-and-safety|trust and safety]]",
          "**7. Define the default offer rule** and publish it to sellers",
          "**8. Give operators merge, split and bulk-edit tools** before launch, not after the first duplicate crisis",
          "**9. Measure catalog health:** duplicates found, completeness by category, match review backlog and listing rejection reasons",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a home appliance marketplace launches with seller-owned listings. Within a year a popular kettle has eleven listings with different titles, split reviews and inconsistent specs. The team introduces a shared product model for items with GTINs, auto-matches listings with valid identifiers, reviews the uncertain matches, merges reviews onto canonical products and shows one page with a default offer and an 'other sellers' list. Search results become shorter and comparison becomes possible.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Letting sellers overwrite shared product content",
          "Matching on titles alone",
          "Accepting GTINs without validation",
          "Free-text variant values",
          "The same required attributes for every category",
          "No tools to merge or split products",
          "Unpublished rules for the default offer",
        ],
        cta: {
          title: "Need help fixing a fragmented marketplace catalog?",
          description: "Talk to ZSpace about [[/services/website-development|marketplace platform development]], [[/services/ai-automation|AI-assisted matching and attribute extraction]] and [[/services/ui-ux-design|seller listing UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A marketplace catalog is a data product. Choose the model, separate products from offers, match carefully, define attributes and variants per category and enforce quality from submission onward. Related: [[/blogs/marketplace-product-discovery|marketplace product discovery]], [[/blogs/marketplace-trust-and-safety|trust and safety]] and [[/blogs/marketplace-order-management|marketplace order management]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 523 (alternative) · MARKETPLACE TRUST AND SAFETY
  {
    slug: "marketplace-trust-and-safety",
    title: "Marketplace Trust and Safety: How to Protect Buyers, Sellers and the Platform",
    seoTitle: "Marketplace Trust and Safety: Seller Verification, Moderation, Fraud",
    excerpt:
      "How to build trust and safety into an online marketplace: seller verification, listing moderation, prohibited items, fraud and payout controls, buyer protection, enforcement, appeals and regulatory duties.",
    category: "Shopify & Ecommerce",
    banner: "trustsafety",
    bannerAlt:
      "Marketplace trust and safety in four columns: sellers highlighted (verification, risk tiers, performance, enforcement), listings (prohibited items, counterfeits, claims, reports), transactions (fraud signals, payout holds, disputes, off-platform payment) and buyers (review integrity, protection, messaging, appeals).",
    date: "2026-10-02",
    readingTime: "9 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail", "creator-economy"],
    relatedSlugs: ["ecommerce-marketplace-seller-onboarding", "marketplace-product-catalog-management", "ecommerce-fraud-detection"],
    faqs: [
      { q: "What is trust and safety for a marketplace?", a: "The policies, tools and teams that keep fraudulent sellers, prohibited or counterfeit goods, fake reviews and abusive behaviour off the platform, and that resolve problems fairly when they happen." },
      { q: "Do marketplaces have to verify sellers?", a: "In several markets, yes. The EU Digital Services Act requires online marketplaces to collect and make best efforts to verify trader information before traders can sell, and the US INFORM Consumers Act requires marketplaces to collect and verify information from high-volume third-party sellers. Get legal advice on which rules apply to you." },
      { q: "What is a high-volume third-party seller under the INFORM Act?", a: "A seller with 200 or more discrete sales and $5,000 or more in gross revenue on the marketplace in a continuous 12-month period, according to FTC guidance." },
      { q: "How should a marketplace moderate listings?", a: "Combine automated checks at submission (prohibited keywords, restricted categories, image and price signals) with risk-based human review, user and rights-owner reports, and a clear action and appeal process." },
      { q: "How do marketplaces prevent seller fraud?", a: "Verify identity and payout accounts, start new sellers with limits, hold payouts until delivery for higher-risk sellers, watch for patterns such as sudden catalog changes or off-platform payment requests, and act quickly on buyer reports." },
      { q: "What is buyer protection?", a: "A promise that buyers will be refunded if an item does not arrive or is significantly not as described, funded by sellers or the marketplace, with a clear claim process." },
      { q: "Should sellers be able to appeal enforcement actions?", a: "Yes. Appeals catch mistakes, and some regulations require statements of reasons and complaint handling. Every action should have a recorded reason the seller can see." },
      { q: "How do we protect review integrity?", a: "Allow reviews only from verified purchases where possible, detect review patterns from related accounts, prohibit incentives that depend on positive ratings and disclose how reviews are collected." },
      { q: "How do we measure trust and safety?", a: "Track prohibited listings found by systems versus by users, time to action, buyer claim rates by seller, fraud losses, appeal overturn rates and seller and buyer satisfaction." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Marketplace trust and safety combines policy, software and people to keep bad actors and bad listings off the platform. Verify sellers and payout accounts before they sell, assign risk tiers with limits for new sellers, screen listings for prohibited, restricted and counterfeit goods, monitor transactions for fraud and off-platform payment, hold payouts where risk is high, offer clear buyer protection, and take documented, appealable enforcement actions. Check regulatory duties such as the EU Digital Services Act and the US INFORM Consumers Act with legal advisers.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Trust and safety runs through every marketplace system. Seller verification during sign-up is in [[/blogs/ecommerce-marketplace-seller-onboarding|seller onboarding]], listing quality in [[/blogs/marketplace-product-catalog-management|marketplace catalog management]], money movement in [[/blogs/marketplace-payment-architecture|marketplace payments]], and payment fraud in [[/blogs/ecommerce-fraud-detection|ecommerce fraud detection]].",
        ],
        callout: {
          type: "note",
          text: "Regulatory references below are general summaries, not legal advice. Which obligations apply depends on where you operate, your size and your business model.",
        },
      },
      {
        heading: "The Threats a Marketplace Faces",
        body: [],
        table: {
          headers: ["Threat", "Example", "Primary control"],
          rows: [
            ["Fraudulent sellers", "Takes orders, never ships, withdraws funds", "Verification, payout holds, limits for new sellers"],
            ["Prohibited or unsafe goods", "Recalled products, restricted items", "Listing screening, category restrictions, reports"],
            ["Counterfeits and IP infringement", "Fake branded goods", "Brand programmes, notice handling, matching signals"],
            ["Misleading listings", "Wrong specs, false claims", "Attribute rules, review, buyer claims"],
            ["Payment fraud by buyers", "Stolen cards, refund abuse", "Fraud screening, dispute handling"],
            ["Off-platform diversion", "Sellers asking buyers to pay directly", "Message scanning, policy enforcement"],
            ["Review manipulation", "Fake or incentivized reviews", "Verified purchases, pattern detection"],
          ],
        },
      },
      {
        heading: "Seller Verification and Regulatory Duties",
        body: [
          "Verification is both a safety control and, increasingly, a legal requirement. Under [[https://eur-lex.europa.eu/eli/reg/2022/2065/oj|Article 30 of the EU Digital Services Act]], online marketplaces must obtain traders' contact details, identification, payment account details, trade register details where applicable, and a self-certification that they will only offer compliant products, and make best efforts to assess whether the information is reliable before the trader can sell. The DSA's obligations for platforms have applied since 17 February 2024.",
          "In the US, the [[https://www.ftc.gov/business-guidance/resources/what-third-party-sellers-need-know-about-inform-consumers-act|INFORM Consumers Act]] requires online marketplaces to collect and verify bank account, tax ID and contact information from high-volume third-party sellers (200 or more sales and $5,000 or more in revenue in a 12-month period), to recertify it annually and, for larger sellers, to disclose certain information to buyers.",
          "Build verification as a workflow with states (submitted, verifying, verified, needs information, rejected) rather than a one-time form, because both regimes require keeping information current. Identity and business verification providers can automate much of this, with manual review for exceptions.",
        ],
      },
      {
        heading: "Risk Tiers and Limits for New Sellers",
        body: [
          "Not every seller needs the same scrutiny. Assign risk tiers from verification results, category, business history and early performance. New or higher-risk sellers start with lower listing or order limits, longer payout holds and closer listing review; limits lift as performance proves out. This keeps the onboarding path short for genuine sellers while limiting how much damage a fraudulent one can do.",
        ],
      },
      {
        heading: "Listing Moderation",
        body: [
          "Moderation should be layered. Automated checks at submission catch obvious problems: prohibited keywords, restricted categories without approval, contact details in descriptions, implausible prices for branded goods and images reused from other listings. Risk scores route uncertain listings to human review. After publishing, user reports, rights-owner notices and periodic re-checks catch what slipped through.",
        ],
        diagram: {
          variant: "moderationflow",
          alt: "Moderation flow: signal or report, triage by severity (highlighted), review with evidence, action, notify with reason, appeal and audit.",
          caption: "Severity triage keeps urgent safety issues from waiting behind routine quality reports.",
        },
      },
      {
        heading: "Counterfeits and Intellectual Property",
        body: [
          "Give brand and rights owners a structured way to report infringement, with evidence fields and a tracked outcome. Many marketplaces also run brand registries that let verified owners claim their brand, which feeds catalog matching and listing restrictions. Signals such as unusually low prices for branded goods, new sellers in high-counterfeit categories and stock images from the brand's own site are useful triggers for review.",
        ],
        cta: {
          title: "Building verification and moderation into your marketplace?",
          description: "ZSpace builds seller verification workflows, moderation queues and operator tools so trust and safety policies can actually be enforced.",
        },
      },
      {
        heading: "Transaction and Payout Controls",
        body: [
          "The fastest losses come from sellers who take payments and disappear. Controls that help:",
        ],
        checklist: [
          "Release payouts after delivery confirmation or a set period for new and higher-risk sellers",
          "Rolling reserves for sellers with elevated claim rates",
          "Alerts on sudden changes: new bank account, large price drops, catalog swaps, sales spikes",
          "Scanning buyer-seller messages for requests to pay off-platform",
          "Velocity limits on new sellers' orders",
          "Coordination with your payment provider's own risk controls; see [[/blogs/marketplace-payment-architecture|marketplace payments]]",
        ],
      },
      {
        heading: "Buyer Protection and Disputes",
        body: [
          "Buyer protection is the promise that makes buyers willing to try unknown sellers. State clearly what is covered (not received, significantly not as described), how to claim, response times and who pays. Give sellers a fair chance to respond with evidence, and resolve claims within published timelines. Claim rates by seller are one of the strongest risk signals you will have, and they connect to the order handling described in [[/blogs/marketplace-order-management|marketplace order management]].",
        ],
      },
      {
        heading: "Review Integrity",
        body: [
          "Reviews only build trust if buyers believe them. Restrict reviews to verified purchases where possible, detect clusters of reviews from related accounts or devices, prohibit incentives tied to positive ratings, and label any incentivized reviews. Show how reviews are collected. Consumer protection authorities in several markets treat fake reviews as unlawful, so this is also a compliance matter.",
        ],
      },
      {
        heading: "Enforcement, Notices and Appeals",
        body: [
          "Define an enforcement ladder: warning, listing removal, feature restriction, payout hold, suspension, termination. Every action needs a recorded reason, the policy it applies, the evidence and the decision maker. Tell the seller what happened and why, and give them a route to appeal. The DSA requires statements of reasons for many restrictions and an internal complaint-handling system, and good records protect you in disputes whatever the regulatory regime.",
        ],
      },
      {
        heading: "Operator Tooling",
        body: [
          "Trust and safety teams spend their day in internal tools. Give them a single case view per seller with verification status, listings, orders, claims, messages, payouts and previous actions; queues sorted by severity and age; bulk actions with safeguards; and full audit logs. Automation and AI can triage, summarize cases and spot patterns, but consequential actions such as suspensions should have human review.",
        ],
      },
      {
        heading: "Measuring Trust and Safety",
        body: [],
        checklist: [
          "Share of policy violations found by systems versus reported by users",
          "Time from report to action, by severity",
          "Buyer claim and dispute rates by seller cohort",
          "Fraud and protection losses as a share of GMV",
          "Appeal volumes and overturn rates (high overturns mean bad decisions)",
          "Verification completion time for genuine sellers",
        ],
      },
      {
        heading: "Trade-offs: Safety Versus Seller Friction",
        body: [
          "Every control slows someone down. Strict verification protects buyers but loses some genuine sellers during sign-up; long payout holds stop fraud but strain small sellers' cash flow; aggressive automated moderation removes bad listings but also good ones. The answer is usually proportionality: lighter controls for low-risk sellers and categories, heavier ones where harm is likely, and a fast path to appeal when automation gets it wrong.",
          "Track the cost of controls as carefully as their benefits: verification drop-off, time to first listing, wrongly removed listings and appeal overturns. If those rise, the controls need tuning, not just more enforcement.",
        ],
      },
      {
        heading: "How to Set Up Trust and Safety Step by Step",
        body: [],
        checklist: [
          "**1. Write policies first:** prohibited and restricted items, seller standards, review rules and the enforcement ladder",
          "**2. Map regulatory duties** for your markets with legal advisers (for example DSA trader traceability and INFORM high-volume seller rules)",
          "**3. Build verification as a workflow** with states and re-verification",
          "**4. Define risk tiers** and the limits, holds and review levels each tier gets",
          "**5. Add listing screening** at submission, linked to [[/blogs/marketplace-product-catalog-management|catalog validation]]",
          "**6. Create report and notice intake** for buyers and rights owners",
          "**7. Build the case tool and queues** with severity triage and audit logs",
          "**8. Connect payout controls** to [[/blogs/marketplace-payment-architecture|marketplace payments]]",
          "**9. Publish buyer protection** and the dispute process",
          "**10. Review metrics monthly** and adjust thresholds",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an electronics marketplace sees a wave of new sellers listing popular headphones well below market price, collecting orders and requesting payouts. The team adds risk tiers so new sellers in high-risk categories have payouts released only after delivery confirmation, flags branded listings priced far below the catalog average for review, and scans messages for off-platform payment requests. Losses fall, and genuine new sellers still list within a day.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Treating verification as a one-time form rather than a maintained state",
          "Paying new sellers immediately in high-risk categories",
          "Enforcement without recorded reasons or appeals",
          "No severity triage in report queues",
          "Relying only on user reports to find prohibited goods",
          "Writing policies the software cannot enforce",
        ],
        cta: {
          title: "Planning trust and safety for a new or growing marketplace?",
          description: "Talk to ZSpace about [[/services/website-development|marketplace platform and operator tools]], [[/services/ai-automation|AI-assisted moderation and triage]] and [[/services/ui-ux-design|seller and buyer protection UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Trust is the product a marketplace sells. Verify sellers, tier risk, moderate listings in layers, control payouts, protect buyers and enforce fairly with records and appeals, and treat regulatory duties as part of the design. Related: [[/blogs/ecommerce-marketplace-seller-onboarding|seller onboarding]], [[/blogs/marketplace-product-catalog-management|catalog management]] and [[/blogs/ecommerce-fraud-detection|fraud detection]].",
        ],
      },
    ],
  },
];
