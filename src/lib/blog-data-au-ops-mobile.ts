import type { BlogPost } from "./blog-data";

/**
 * Batch 381–430 operations and mobile set: GIS application development
 * (absorbing location-based search), IoT monitoring platforms (absorbing cold
 * chain and environmental monitoring), route optimisation software, mobile
 * app release management and app store optimisation. Generic slugs in
 * Australian English with Australian notes where they change advice (G-NAF,
 * GDA2020, NHVR fatigue rules, regional connectivity, en-AU store listings).
 * No benchmarks, savings or ASO uplift figures are quoted.
 * Sources checked 2026-10-10: data.gov.au G-NAF; PostGIS; Google OR-Tools
 * routing; NHVR fatigue management; MQTT; Apple App Store Connect phased
 * release (7 days: 1, 2, 5, 10, 20, 50, 100 per cent; pauses up to 30 days in
 * total); Google Play staged rollouts (manual percentages, halt, fix forward);
 * Apple product page optimisation (up to three treatments, up to 90 days);
 * Apple custom product pages (up to 70, keyword assignment); Google Play
 * store listing experiments.
 */
export const auOpsMobilePosts: BlogPost[] = [
  {
    slug: "gis-application-development",
    title: "GIS Application Development: Turning Location Data into Operational Decisions",
    seoTitle: "GIS Application Development: A Practical Guide",
    excerpt:
      "How to build GIS and location features: Australian spatial data, PostGIS, maps, radius and polygon search, geofencing, offline maps and location privacy.",
    category: "Web Development",
    banner: "storelocatorux",
    sceneKind: "analytics",
    bannerAlt: "A map-based application showing assets, service areas and jobs, with radius search, geofences and layers from a spatial database feeding operational decisions",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["logistics-supply-chain", "construction-infrastructure", "agritech", "energy-cleantech", "real-estate"],
    relatedSlugs: ["route-optimization-software", "field-service-management-software-australia", "offline-first-mobile-app-development"],
    faqs: [
      {
        q: "What is a GIS application?",
        a: "Software that stores, analyses and displays data tied to locations: maps of assets, service areas, properties, routes or sensors, with queries such as what is within a distance, inside a boundary or nearest to a point. It ranges from a store locator to a full operational mapping platform.",
      },
      {
        q: "Which Australian spatial data is useful?",
        a: "G-NAF, the Geocoded National Address File, is an open dataset of Australian addresses with coordinates. State and federal agencies publish many other open spatial datasets. Australia's current datum is GDA2020; make sure all your data uses the same datum and coordinate system.",
      },
      {
        q: "Do we need a spatial database?",
        a: "For anything beyond simple distance calculations, yes. PostGIS (for PostgreSQL) and spatial features in other databases provide spatial indexes and functions for radius, polygon and nearest-neighbour queries at scale.",
      },
      {
        q: "What is geofencing?",
        a: "Triggering an action when a device enters or leaves a defined area, such as notifying a customer when a driver is near or recording when a technician arrives on site. Mobile platforms provide geofencing APIs with limits on how many regions an app can monitor and on battery use.",
      },
      {
        q: "Is location data personal information?",
        a: "It can be, especially precise or continuous location linked to a person, and it can reveal sensitive patterns. If the Privacy Act applies, collect only what you need, explain why, secure it and keep it only as long as necessary.",
      },
    ],
    content: [
      {
        heading: "How do you build a GIS application?",
        body: [
          "**Start from the operational decision the map supports, gather spatial data in a consistent datum (GDA2020 in Australia) from sources such as G-NAF and your own systems, store it in a spatial database such as PostGIS with spatial indexes, expose location queries (radius, polygon, nearest, routing) through APIs, render maps with a suitable library and tile service, add geofencing and offline maps for field users where needed, and treat location as sensitive data.** Buy GIS platforms for heavy analysis; build where location is part of your product or operations.",
          "This guide is for operations leaders and product teams in logistics, field services, property, agriculture and utilities. For field workers, see [[/blogs/field-service-management-software-australia|field service management software]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Design around decisions, not maps for their own sake.",
          "Use one datum and coordinate system consistently.",
          "Use spatial indexes for location queries.",
          "Plan offline maps for regional and remote work.",
          "Minimise and protect location data.",
        ],
      },
      {
        heading: "Architecture",
        body: [],
        table: {
          headers: ["Layer", "Typical choices"],
          rows: [
            ["**Spatial data store**", "PostgreSQL with [[https://postgis.net/|PostGIS]], or spatial features of your database"],
            ["**Reference data**", "[[https://data.gov.au/data/dataset/geocoded-national-address-file-g-naf|G-NAF]] addresses, government open spatial data, your assets and customers"],
            ["**Geocoding**", "Address to coordinates, with validation and manual correction"],
            ["**APIs**", "Location queries, routing, geofence events"],
            ["**Map rendering**", "Web and mobile map libraries with vector or raster tiles"],
            ["**Analysis**", "Desktop GIS or BI for deeper analysis"],
          ],
        },
      },
      {
        heading: "Location search",
        body: [],
        checklist: [
          "**Radius:** find items within a distance, using spatial indexes rather than calculating distance for every row.",
          "**Polygon:** items within service areas, council boundaries or zones.",
          "**Nearest:** closest technicians, stores or assets.",
          "**Travel time:** use routing services when straight-line distance misleads, which it often does in regional Australia.",
          "**Relevance:** combine distance with other factors such as availability or rating, and explain sorting to users.",
        ],
      },
      {
        heading: "Geofencing, offline and mobile",
        body: [
          "Geofences trigger events on arrival or departure; respect platform limits and battery use, and confirm events server-side where accuracy matters. Field users in regional areas need offline maps and queued updates; see [[/blogs/offline-first-mobile-app-development|offline-first mobile apps]]. Test accuracy on real devices outdoors, not just in the office.",
        ],
      },
      {
        heading: "Privacy and data quality",
        body: [
          "Continuous location tracking of staff or customers raises privacy and, for employees, workplace surveillance questions that vary by state. Collect only the precision and frequency you need, tell people what you collect and why, restrict access, and set retention. Validate coordinates, datum and address matches; geocoding errors are common with rural and new addresses.",
        ],
      },
      {
        heading: "Hypothetical example: a council contractor",
        body: [
          "**This example is hypothetical.** A contractor maintaining roadside assets for several councils kept locations in spreadsheets. It loaded assets into PostGIS in GDA2020, matched them to council boundaries, and built a web map for planners and a mobile app with offline maps for crews. Crews recorded inspections with photos and GPS position; planners filtered defects by area and priority. Tracking stopped outside shift hours.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Mixing datums or coordinate systems.",
          "Distance queries without spatial indexes.",
          "Straight-line distance where travel time matters.",
          "Tracking location more often or more precisely than needed.",
          "No offline mode for field users.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/route-optimization-software|Route optimisation software]] for planning routes.",
          "[[/blogs/iot-monitoring-platform-development|IoT monitoring platforms]] for located sensors.",
          "[[/blogs/agriculture-software-development-australia|Agriculture software]] for paddock mapping.",
          "[[/blogs/asset-maintenance-management-software|Asset maintenance software]] for asset registers.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "GIS applications turn location into decisions when the data is consistent, queries use spatial indexes, maps serve specific tasks and location data is handled with care. Build around operational questions and test in the field.",
        ],
        cta: {
          title: "Putting your operations on a map?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|map-based web applications]] and [[/services/mobile-app-development|field mobile apps]]. If it would help to plan location features, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "iot-monitoring-platform-development",
    title: "IoT Monitoring Platform Development: From Device Telemetry to Actionable Alerts",
    seoTitle: "IoT Monitoring Platform Development: A Practical Guide",
    excerpt:
      "How to build an IoT monitoring platform: devices, MQTT ingestion, time-series storage, alert rules, device security, regional connectivity and evidence.",
    category: "Web Development",
    banner: "observabilitymap",
    sceneKind: "monitor",
    bannerAlt: "Sensors and gateways sending telemetry over MQTT to an ingestion layer and time-series store, with alert rules, escalation, dashboards and exportable evidence records",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["logistics-supply-chain", "food-beverage", "agritech", "energy-cleantech", "manufacturing"],
    relatedSlugs: ["energy-management-software-australia", "asset-maintenance-management-software", "application-monitoring-observability"],
    faqs: [
      {
        q: "What does an IoT monitoring platform include?",
        a: "Devices and sensors, gateways or direct connectivity, an ingestion layer (often MQTT), storage for time-series data, rules that turn readings into alerts, notification and escalation, dashboards, device management and security, and exports or reports for evidence.",
      },
      {
        q: "How do we avoid alert fatigue?",
        a: "Alert on conditions that need action, not every threshold crossing. Use duration and hysteresis (a reading must stay out of range for a period and return by a margin), group related alerts, escalate if unacknowledged, and review alert volumes regularly.",
      },
      {
        q: "What about poor connectivity?",
        a: "Assume gaps, especially in regional Australia and inside cold rooms or vehicles. Devices or gateways should buffer readings with timestamps and send them when connected, and the platform should distinguish 'no data' from 'normal'. Options include cellular, LoRaWAN and satellite depending on location.",
      },
      {
        q: "Can sensor data be used as compliance evidence?",
        a: "It can support it, for example temperature records for food safety or environmental monitoring data. Make records trustworthy: calibrated sensors, synchronised clocks, tamper-evident storage, documented gaps and corrective actions. Check what your regulator or auditor accepts.",
      },
      {
        q: "How do we secure IoT devices?",
        a: "Unique credentials per device, encrypted connections, secure provisioning, signed firmware updates, no default passwords, least-privilege topics or APIs, and the ability to disable compromised devices. Follow current government and vendor IoT security guidance.",
      },
    ],
    content: [
      {
        heading: "How do you build an IoT monitoring platform?",
        body: [
          "**Choose sensors and connectivity that fit the environment, ingest telemetry through a secure, scalable protocol such as MQTT, store it in a time-series store with device metadata, turn readings into actionable alerts with durations, hysteresis and escalation, show status on dashboards and mobile devices, manage and update devices securely, and keep evidence-ready records with gaps and corrective actions documented.** The value is in reliable alerts and records, not in the dashboard.",
          "This guide is for operations and product teams building monitoring for cold chain, environment, equipment, energy or agriculture. For energy specifically, see [[/blogs/energy-management-software-australia|energy management software]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Design alerts around actions people take.",
          "Buffer data through connectivity gaps; show gaps clearly.",
          "Unique credentials and signed updates for every device.",
          "Store raw readings plus device and calibration metadata.",
          "Record corrective actions alongside alerts.",
        ],
      },
      {
        heading: "Architecture",
        body: [],
        table: {
          headers: ["Layer", "Purpose", "Notes"],
          rows: [
            ["**Devices and sensors**", "Measure temperature, humidity, vibration, levels, power", "Calibration, battery life, enclosure"],
            ["**Connectivity**", "Cellular, LoRaWAN, Wi-Fi, satellite", "Coverage at the actual site"],
            ["**Ingestion**", "Receive messages securely", "[[https://mqtt.org/|MQTT]] is common; authenticate each device"],
            ["**Storage**", "Time-series readings and metadata", "Retention and downsampling policies"],
            ["**Rules and alerts**", "Detect conditions and notify", "Durations, hysteresis, escalation, acknowledgement"],
            ["**Apps and dashboards**", "Status, history, actions", "Mobile for on-call staff"],
            ["**Device management**", "Provisioning, configuration, firmware updates", "Signed updates; remote disable"],
          ],
        },
      },
      {
        heading: "Alert design",
        body: [],
        checklist: [
          "Define who acts on each alert and what they do.",
          "Require a condition to persist before alerting, and to recover by a margin before clearing.",
          "Treat missing data as its own alert where it matters.",
          "Escalate unacknowledged alerts to the next person.",
          "Record acknowledgement, cause and corrective action.",
          "Review false alarms monthly and tune rules.",
        ],
      },
      {
        heading: "Cold chain and environmental records",
        body: [
          "Temperature-controlled storage and transport, and environmental monitoring for licences or permits, often need records that hold up to audits. Use calibrated sensors, synchronised clocks, tamper-evident storage, clear handling of gaps and documented corrective actions, and confirm what your regulator, auditor or customer requires. Food businesses should check the Food Standards Code requirements that apply to them, and environmental licensees their licence conditions.",
        ],
      },
      {
        heading: "Security and connectivity",
        body: [
          "Give every device unique credentials, encrypt connections, avoid default passwords, sign firmware updates and be able to revoke devices. In regional areas and inside metal structures, test coverage on site and buffer readings on devices or gateways. See [[/blogs/application-monitoring-observability|monitoring and observability]] for monitoring the platform itself.",
        ],
      },
      {
        heading: "Hypothetical example: a food distributor's cold rooms and trucks",
        body: [
          "**This example is hypothetical.** A distributor replaced paper temperature logs with sensors in cold rooms and refrigerated trucks. Readings went over cellular to an MQTT broker, buffered in the trucks when out of coverage. Alerts fired only after temperatures stayed out of range for a set period, escalated to a supervisor if not acknowledged, and required a corrective action note. Monthly reports showed readings, gaps and actions for customer audits.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Alerting on every threshold crossing.",
          "Treating missing data as normal.",
          "Shared credentials across devices.",
          "No process for firmware updates.",
          "Records without calibration or corrective actions.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/asset-maintenance-management-software|Asset maintenance software]] for turning alerts into work orders.",
          "[[/blogs/gis-application-development|GIS application development]] for mapping devices.",
          "[[/blogs/data-engineering-for-growing-businesses|Data engineering]] for reporting on telemetry.",
          "[[/blogs/agriculture-software-development-australia|Agriculture software]] for on-farm sensors.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "An IoT monitoring platform succeeds when it delivers trustworthy readings, actionable alerts and evidence-ready records, securely and through connectivity gaps. Start with the actions people need to take, then design devices, ingestion and rules around them.",
        ],
        cta: {
          title: "Monitoring equipment or environments?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|monitoring platforms and dashboards]] and [[/services/mobile-app-development|alerting mobile apps]]. If it would help to plan your IoT platform, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "route-optimization-software",
    title: "Route Optimisation Software: Constraints, Scheduling and Real-World Fleet Operations",
    seoTitle: "Route Optimisation Software: Constraints and Build vs Buy",
    excerpt:
      "How route optimisation software works: routing constraints, time windows, capacity, breaks, static vs dynamic routing, solvers vs SaaS and driver adoption.",
    category: "Web Development",
    banner: "fulfilmentflow",
    sceneKind: "workflow",
    bannerAlt: "Deliveries and jobs with time windows assigned to vehicles and drivers by an optimiser that respects capacity, skills and break rules, then adjusted during the day",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["logistics-supply-chain", "retail", "food-beverage", "professional-services"],
    relatedSlugs: ["logistics-software-development-australia", "field-service-management-software-australia", "gis-application-development"],
    faqs: [
      {
        q: "What does route optimisation software do?",
        a: "It assigns stops or jobs to vehicles and orders them to minimise cost, distance, time or lateness while respecting constraints such as time windows, vehicle capacity, driver skills, shift lengths and breaks. In optimisation terms it solves a vehicle routing problem.",
      },
      {
        q: "Should we buy or build route optimisation?",
        a: "Buy a routing SaaS if your constraints are standard deliveries or service visits. Build or extend, often using an open-source solver such as Google OR-Tools, when constraints are unusual, routing must be embedded in your own platform, or you need control over the objective.",
      },
      {
        q: "What data does it need?",
        a: "Accurate geocoded addresses, realistic service times per stop, time windows, vehicle capacities and types, driver shifts and skills, depots, and road network or travel-time data. Poor service times and addresses are the most common cause of unrealistic routes.",
      },
      {
        q: "What about heavy vehicle driver fatigue rules?",
        a: "Drivers of fatigue-regulated heavy vehicles in Australia must follow work and rest rules under the Heavy Vehicle National Law, administered by the NHVR, with different arrangements in some states. Routing should plan breaks and shift limits, but compliance remains the operator's responsibility.",
      },
      {
        q: "Why do drivers ignore optimised routes?",
        a: "Often because the routes ignore local knowledge: loading docks, parking, customer preferences or realistic service times. Involve drivers, capture their feedback as data, and compare planned with actual times to improve inputs.",
      },
    ],
    content: [
      {
        heading: "How does route optimisation work in practice?",
        body: [
          "**Route optimisation assigns jobs to vehicles and sequences them to meet an objective (cost, distance, lateness) within constraints: time windows, capacity, skills, shifts, breaks and depots. Good results depend more on accurate inputs, such as geocoded addresses and realistic service times, and on driver adoption than on the algorithm. Buy a routing product for standard needs; build with a solver when constraints or integration are unusual.**",
          "This guide is for logistics, delivery and field service managers. For the wider platform, see [[/blogs/logistics-software-development-australia|logistics software development]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Define the objective and constraints explicitly.",
          "Fix address quality and service time estimates first.",
          "Plan breaks and shift limits; operators remain responsible for compliance.",
          "Support re-optimisation during the day.",
          "Compare planned and actual to improve.",
        ],
      },
      {
        heading: "Constraints to model",
        body: [],
        table: {
          headers: ["Constraint", "Example"],
          rows: [
            ["**Time windows**", "Deliver between 7 and 10 am"],
            ["**Capacity**", "Weight, volume, pallets, temperature zones"],
            ["**Skills and equipment**", "Licensed technician, tail-lift truck"],
            ["**Shifts and breaks**", "Start and end times, required rest"],
            ["**Depots and returns**", "Multiple depots, mid-shift reloading"],
            ["**Priorities**", "Urgent jobs, service level agreements"],
            ["**Road restrictions**", "Vehicle size limits, access rules"],
          ],
        },
      },
      {
        heading: "Static vs dynamic routing",
        body: [
          "Static routing plans the day in advance, which suits scheduled deliveries. Dynamic routing re-optimises as jobs are added, cancelled or delayed, which suits on-demand services and field work. Most operations need both: a planned route plus controlled changes during the day, communicated clearly to drivers and customers.",
        ],
      },
      {
        heading: "Solvers vs SaaS",
        body: [],
        table: {
          headers: ["Option", "Fits when"],
          rows: [
            ["**Routing SaaS**", "Standard deliveries or visits; fast start"],
            ["**Solver library**", "Unusual constraints or objectives; embedded in your platform ([[https://developers.google.com/optimization/routing|Google OR-Tools]])"],
            ["**Hybrid**", "SaaS for routing, custom integration with orders, telematics and customer notifications"],
          ],
        },
      },
      {
        heading: "Australian considerations",
        body: [
          "Long regional distances, limited coverage and remote access make travel-time data and offline driver apps important. For heavy vehicles, plan work and rest in line with fatigue rules under the Heavy Vehicle National Law ([[https://www.nhvr.gov.au/safety-accreditation-compliance/fatigue-management|NHVR]]), noting that some states have different arrangements; software supports compliance but does not ensure it. See [[/blogs/gis-application-development|GIS application development]] for address and location data.",
        ],
      },
      {
        heading: "Hypothetical example: a building supplies distributor",
        body: [
          "**This example is hypothetical.** A distributor planned truck runs manually each afternoon. Routes often missed delivery windows because unloading at building sites took longer than assumed. It adopted a routing service integrated with its order system, captured actual unloading times from the driver app, and fed them back as service-time estimates by site type. Planners reviewed suggested routes, drivers flagged site access issues, and planned versus actual times were compared weekly.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Optimising with unrealistic service times.",
          "Ignoring driver knowledge and feedback.",
          "No re-planning when the day changes.",
          "Assuming software handles fatigue compliance.",
          "Measuring kilometres saved but not lateness and customer outcomes.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/field-service-management-software-australia|Field service management software]] for scheduling technicians.",
          "[[/blogs/offline-first-mobile-app-development|Offline-first mobile apps]] for driver apps.",
          "[[/blogs/predictive-analytics-vs-generative-ai|Predictive analytics vs generative AI]] for forecasting demand and service times.",
          "[[/blogs/integration-architecture-patterns|Integration architecture patterns]] for connecting orders and telematics.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Route optimisation delivers when constraints are modelled honestly, inputs are accurate, drivers trust the routes and plans adjust during the day. Choose SaaS or a solver based on how unusual your constraints are, and keep comparing planned with actual. For UK waste operators, see [[/blogs/digital-waste-tracking-software-uk|digital waste tracking software]]. For vehicle defects and inspections, see [[/blogs/fleet-maintenance-software-uk|fleet maintenance software in the UK]].",
        ],
        cta: {
          title: "Planning routes by hand?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|logistics platforms and routing integrations]] and [[/services/mobile-app-development|driver apps]]. If it would help to model your routing constraints, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "mobile-app-release-management",
    title: "Mobile App Release Management: Phased Rollouts, Feature Flags and Safe Recovery",
    seoTitle: "Mobile App Release Management: Rollouts and Flags",
    excerpt:
      "How to release mobile apps safely: release trains, App Store phased release, Google Play staged rollouts, feature flags, kill switches and hotfixes.",
    category: "Mobile Apps",
    banner: "releaseflow",
    sceneKind: "mobile",
    bannerAlt: "A mobile app version moving through a release train, phased App Store release and staged Google Play rollout, with feature flags, monitoring gates and a hotfix path",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["fintech", "retail", "healthcare-healthtech", "travel-hospitality", "d2c-consumer"],
    relatedSlugs: ["mobile-app-crash-reporting", "feature-flag-implementation", "mobile-app-maintenance"],
    faqs: [
      {
        q: "Can you roll back a mobile app release?",
        a: "Not in the way you roll back a web deployment. Users who installed a version keep it. You can pause or halt a rollout so no more users receive it, turn off problem features with flags, and ship a fixed version. Plan releases with this limitation in mind.",
      },
      {
        q: "How does App Store phased release work?",
        a: "Apple releases an update to users with automatic updates over seven days (1, 2, 5, 10, 20, 50 and 100 per cent). You can pause for up to 30 days in total, and anyone can still download the update manually from the App Store.",
      },
      {
        q: "How do Google Play staged rollouts work?",
        a: "You choose the percentage of users who receive the update and increase it manually. You can halt a rollout so no additional users receive it and resume later. To fix a problem, Google recommends releasing a new version with a fixed bundle.",
      },
      {
        q: "What is a kill switch?",
        a: "A remote setting that disables a feature or shows a message without a new release, for example turning off a broken payment method or forcing an upgrade. Kill switches need to be built and tested before you need them.",
      },
      {
        q: "How often should we release?",
        a: "Regular, predictable releases, such as every one or two weeks, keep changes small and reviews routine. The right cadence depends on team size, testing maturity and how often users update.",
      },
    ],
    content: [
      {
        heading: "How do you manage mobile app releases safely?",
        body: [
          "**Ship on a regular release train, put risky features behind remote flags, release gradually (App Store phased release and Google Play staged rollouts), watch crash-free sessions and key journeys at each step, pause or halt if metrics drop, use kill switches and minimum-version checks for serious problems, and keep a practised hotfix path, remembering that installed versions cannot be rolled back.** Backend APIs must stay compatible with older versions in use.",
          "This guide is for mobile product owners and engineering leads. For monitoring, see [[/blogs/mobile-app-crash-reporting|mobile app crash reporting]]; for flags, [[/blogs/feature-flag-implementation|feature flag implementation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "No true rollback: plan for pause, flags and fix-forward.",
          "Use phased and staged rollouts on every release.",
          "Gate progression on crash and journey metrics.",
          "Build kill switches and minimum-version checks early.",
          "Keep APIs compatible with older app versions.",
        ],
      },
      {
        heading: "Store rollout mechanics",
        body: [],
        table: {
          headers: ["Store", "How it works", "Recovery options"],
          rows: [
            ["**App Store phased release**", "Seven days: 1, 2, 5, 10, 20, 50, 100 per cent of users with automatic updates ([[https://developer.apple.com/help/app-store-connect/update-your-app/release-a-version-update-in-phases/|Apple]])", "Pause up to 30 days in total; release all at once; submit a fix"],
            ["**Google Play staged rollout**", "You set and increase the percentage; can target countries ([[https://support.google.com/googleplay/android-developer/answer/6346149|Google Play]])", "Halt and resume; release a fixed version"],
          ],
        },
      },
      {
        heading: "Release process",
        body: [],
        checklist: [
          "**Release train:** fixed cadence; features that miss the train wait.",
          "**Branching and builds:** reproducible builds from a release branch or tag.",
          "**Testing:** automated tests plus a focused manual pass on key journeys; see [[/blogs/mobile-app-testing|mobile app testing]].",
          "**Store review:** allow time; prepare release notes and screenshots.",
          "**Rollout:** start small, monitor, increase.",
          "**Communication:** support team briefed on changes and known issues.",
        ],
      },
      {
        heading: "Flags, kill switches and minimum versions",
        body: [
          "Remote feature flags let you ship code dark and enable it gradually, independent of store rollouts. Kill switches disable features in an emergency. Minimum-version checks prompt or require users to update when an old version is unsafe or incompatible; use forced updates sparingly. All three need clear ownership, audit logs and testing.",
        ],
      },
      {
        heading: "Monitoring gates",
        body: [
          "Define what must hold before increasing a rollout: crash-free sessions and users at or above the previous version, no rise in failed key journeys (sign-in, checkout, booking), stable API error rates and no surge in support contacts. Automate dashboards per version and have a named person decide at each step.",
        ],
      },
      {
        heading: "Hypothetical example: a booking app",
        body: [
          "**This example is hypothetical.** A booking app moved from ad hoc releases to a fortnightly train. A new payment flow shipped behind a flag. The update went out with phased release on iOS and a staged rollout on Android starting at a small percentage. On day two, failed payments rose on one Android device family; the team halted the Android rollout, turned off the new flow with the flag for that platform, and shipped a fix in the next release.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Releasing to everyone at once.",
          "No kill switch for risky features.",
          "Breaking API changes for older app versions.",
          "Increasing rollouts without checking metrics.",
          "Forgetting store review time before deadlines.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/mobile-app-maintenance|Mobile app maintenance]] for ongoing upkeep.",
          "[[/blogs/api-versioning|API versioning]] for supporting older apps.",
          "[[/blogs/zero-downtime-deployments|Zero-downtime deployments]] for backend releases.",
          "[[/blogs/app-store-optimization|App store optimisation]] for store listings.",
          "[[/blogs/mobile-app-launch-checklist|First app launch checklist]] for version 1, where staged and phased rollouts are not available.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Mobile release management is about limiting blast radius when you cannot roll back: regular trains, gradual store rollouts, flags and kill switches, metric gates and compatible APIs. Practise the recovery steps before you need them.",
        ],
        cta: {
          title: "Releases making you nervous?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/mobile-app-development|mobile app development, release pipelines and maintenance]]. If it would help to review your release process, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "app-store-optimization",
    title: "App Store Optimisation Checklist Before Launch: Metadata Limits, Screenshots, Experiments and Ratings",
    seoTitle: "App Store Optimisation Checklist Before Launch",
    excerpt:
      "A pre-launch ASO checklist: exact App Store and Google Play metadata limits, keyword rules, screenshots, custom pages, store experiments and ratings prompts.",
    category: "Mobile Apps",
    banner: "storebuildflow",
    sceneKind: "mobile",
    bannerAlt: "An app's store listing with name, subtitle, keywords, screenshots and ratings checked against App Store and Google Play limits before launch, then tested through store experiments and custom pages",
    date: "2026-10-10",
    updated: "2026-10-15",
    readingTime: "10 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["d2c-consumer", "fintech", "travel-hospitality", "sports-fitness", "media-entertainment"],
    relatedSlugs: ["mobile-app-launch-checklist", "mobile-app-analytics", "improve-mobile-app-retention"],
    faqs: [
      {
        q: "What is app store optimisation?",
        a: "Improving how an app is found and chosen in the App Store and Google Play: its name, subtitle or short description, keywords, descriptions, icon, screenshots, preview videos, ratings and localisation, measured by impressions, product page views, conversion to install and later retention.",
      },
      {
        q: "Can we A/B test our App Store page?",
        a: "Yes. Apple's product page optimisation lets you test up to three treatments of the icon, screenshots and app previews against the original for up to 90 days. Google Play store listing experiments let you test graphics and text against your current listing.",
      },
      {
        q: "What are custom product pages?",
        a: "Additional versions of an App Store product page, up to 70 per app, with different screenshots, previews and promotional text, which you can link to from campaigns and assign keywords to so they appear in relevant searches. Google Play offers up to 50 custom store listings, which can target countries, audiences or specific search keywords.",
      },
      {
        q: "Should we ask for reviews?",
        a: "Yes, at moments of success and using the platforms' in-app review prompts, which limit how often they appear. Do not offer incentives for reviews or ratings or filter who is asked based on sentiment; both stores prohibit manipulative practices.",
      },
      {
        q: "Should we create a separate listing for each country we target?",
        a: "Localise rather than duplicate. Both stores let you add localised metadata per language, so you can use local spelling and terms (English for Australia or the UK, for example), translated screenshots and keywords people in that market actually search. Measure each storefront separately before deciding a market needs more work.",
      },
      {
        q: "Does promotional text help the app rank in App Store search?",
        a: "No. Apple says promotional text does not affect search ranking. Use it for timely messages, such as a new feature or seasonal content, because you can change it without submitting a new version.",
      },
      {
        q: "Can we add a \"Rate this app\" button that opens the review prompt?",
        a: "Not with the system prompt. Apple advises against requesting a review as the result of a user action, and Google says not to trigger the In-App Review API from a button because the user may have hit the quota and see nothing. For a button in settings, link to the store's review page instead.",
      },
      {
        q: "Is the iOS keyword field 100 characters or 100 bytes?",
        a: "Apple's product page guide says 100 characters; the App Store Connect reference says 100 bytes. For English the two are the same. For scripts such as Hindi or Arabic, each character usually takes more than one byte, so plan for fewer characters and check what App Store Connect accepts.",
      },
    ],
    content: [
      {
        heading: "What should you check in your store listing before launch?",
        body: [
          "**Before launch, check that every listing field is used within its exact limit, that the iOS keyword field does not repeat words already in your name or subtitle, that the first screenshots show the app's core value, that each target market has localised metadata, and that ratings prompts are planned for moments of success rather than first launch.** Then, once traffic arrives, test with the stores' own tools: Apple product page optimisation and custom product pages, and Google Play store listing experiments and custom store listings. ASO helps the right users find and choose the app; it cannot fix a weak product.",
          "This guide covers discoverability and listing conversion. Submission requirements (screenshot sizes, privacy labels, review notes) are in the [[/blogs/mobile-app-launch-checklist|mobile app launch checklist]], so they are not repeated here. ZSpace Labs builds apps; it does not sell ASO retainers. For measurement inside the app, see [[/blogs/mobile-app-analytics|mobile app analytics]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Name, subtitle and Play title are all limited to 30 characters; spend them on what the app does.",
          "The iOS keyword field is 100 characters by one Apple page and 100 bytes by another; non-Latin scripts fit fewer characters.",
          "Promotional text on iOS does not affect search, so do not put keywords there.",
          "The first screenshots carry most of the message.",
          "Apple shows the system review prompt at most three times in 365 days; Google does not disclose its quota.",
          "Test with the stores' own experiment tools and measure retention, not just installs.",
        ],
      },
      {
        heading: "Pre-launch ASO checklist: field by field",
        body: [
          "Each limit below was checked on Apple's and Google's own pages on 15 October 2026. Store limits change, so recheck the linked pages before you finalise copy.",
        ],
        table: {
          headers: ["Field", "Platform", "Verified limit", "Affects", "Rule or common pitfall"],
          rows: [
            ["**App name**", "App Store", "30 characters (minimum 2)", "Search and conversion", "Can be localised. Lead with a brand plus a plain description of what the app does."],
            ["**Subtitle**", "App Store", "30 characters", "Search and conversion", "Shown under the name everywhere on the store. Do not repeat words from the name."],
            ["**Keywords**", "App Store", "100 characters ([[https://developer.apple.com/app-store/product-page/|product page guide]]) or 100 bytes ([[https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information|App Store Connect]])", "Search", "Comma-separated, no spaces after commas. Avoid plurals of words already included, category names, the word \"app\", duplicates, competitor names and special characters."],
            ["**Promotional text**", "App Store", "170 characters", "Conversion only", "Does not affect search ranking. Can be updated without a new app version."],
            ["**Description**", "App Store", "Check App Store Connect", "Conversion", "The first sentence matters most. Apple advises against keyword stuffing and against specific prices in the description."],
            ["**Screenshots**", "App Store", "Up to 10", "Conversion", "Lead with the outcome the user wants, not settings or login screens."],
            ["**App previews**", "App Store", "Up to 3 per device size and language, 15 to 30 seconds", "Conversion", "Choose the poster frame deliberately; it is what most people see."],
            ["**Title**", "Google Play", "30 characters", "Search and conversion", "No emoji, repeated special characters, ALL CAPS (unless your brand), ranking claims such as \"#1\" or \"Best\", or price and promotion wording."],
            ["**Short description**", "Google Play", "80 characters", "Search and conversion", "Visible before the full description is expanded; state the main benefit."],
            ["**Full description**", "Google Play", "4,000 characters", "Search and conversion", "Repetitive or irrelevant keywords can lead to suspension. No unattributed testimonials."],
            ["**Screenshots and video**", "Google Play", "At least 2, up to 8 per device type; video via YouTube", "Conversion", "Only the first 30 seconds of the video autoplay, so put the value first."],
            ["**Custom pages**", "Both", "Apple: 70 custom product pages. Play: 50 custom store listings", "Search and conversion", "Plan which audiences or keywords deserve their own page before launch, then build them once you have traffic."],
          ],
        },
        callout: {
          type: "note",
          text: "Characters or bytes? Apple's product page guide says the keyword field is limited to 100 characters, while the App Store Connect reference says 100 bytes. For English keywords the two match. Scripts such as Devanagari (Hindi) and Arabic typically use more than one byte per character, so a Hindi or Arabic keyword list will fit fewer characters than an English one. Draft those lists with room to spare and confirm in App Store Connect. On Google Play, the limits apply equally to full-width and half-width characters.",
        },
      },
      {
        heading: "Hypothetical example: filling the iOS keyword field",
        body: [
          "**This example is hypothetical.** A meal-planning app is called \"Platewise: Meal Planner\" (23 characters) with the subtitle \"Weekly recipes and grocery list\" (31 characters, so it has to be trimmed to \"Weekly recipes & grocery list\" at 29). Apple already indexes the words in the name and subtitle, so the keyword field should not repeat \"meal\", \"planner\", \"weekly\", \"recipes\", \"grocery\" or \"list\".",
          "A first draft of the keyword field might hold 15 words (diet, healthy, shopping, batch, cook, family, budget, vegetarian, vegan, keto, macro, calorie, prep, menu, dinner), typed as one comma-separated string with no spaces after the commas. That is 99 characters, no plurals of included words, no category name and no competitor brands. The team would then check which terms bring impressions in App Store Connect after launch and replace the weakest ones in the next version.",
        ],
      },
      {
        heading: "Screenshots, previews and the first impression",
        body: [
          "Screenshots and previews decide conversion more than any text field, because most people look rather than read. Show the core job being done in the first two or three frames, use real interface rather than mock-ups that the app cannot match, and keep captions short and readable at thumbnail size. If you localise, localise the screenshots too: captions, sample content and, for Arabic, a right-to-left layout that matches how the app actually renders.",
          "Designing these frames is closely tied to the first-run experience. If the screenshots promise something that takes five screens of onboarding to reach, fix the onboarding as well; see [[/blogs/what-a-good-mobile-app-onboarding-actually-does|what good mobile app onboarding does]].",
        ],
      },
      {
        heading: "Localisation before launch",
        body: [
          "Both stores let you add metadata per language. Apple recommends localising the description, keywords, screenshots and previews for each market, and the name can be translated. Decide which languages to launch with based on where you will actually acquire users, then for each one:",
        ],
        checklist: [
          "Research keywords in that language rather than translating the English list word for word.",
          "Use local spelling and terms for each English-speaking market (for example English for the UK or Australia), where the store offers that locale.",
          "For Hindi, Arabic and other non-Latin scripts, allow for the byte-based keyword count on iOS.",
          "For Arabic, check right-to-left screenshot layouts and text direction in captions.",
          "Keep regional pricing out of screenshots and descriptions; prices are shown by the store.",
          "Measure each storefront separately before investing in more locales.",
        ],
      },
      {
        heading: "Ratings prompts: Apple and Google side by side",
        body: [
          "Ratings affect both search and conversion, but the system prompts are rationed and the rules differ in detail. Plan the trigger points before launch.",
        ],
        table: {
          headers: ["", "Apple (App Store)", "Google Play"],
          rows: [
            ["**API**", "`RequestReviewAction` (SwiftUI `requestReview`) or `AppStore.requestReview(in:)`. `SKStoreReviewController` is deprecated.", "In-App Review API (`launchReviewFlow`)"],
            ["**How often it can appear**", "At most 3 times per user within a 365-day period", "Time-bound quota; the value is undisclosed and can change without notice"],
            ["**Triggering from a button**", "Avoid requesting a review as the result of a user action", "Do not trigger from a button or other call to action; link to the Play Store instead"],
            ["**Pre-questions**", "Ask only after people have shown engagement, not at first launch or during onboarding", "Do not ask questions before or during the card, such as \"Do you like the app?\""],
            ["**User-initiated reviews**", "Deep-link to the App Store with `action=write-review`", "Send the user to the Play Store listing"],
            ["**Manipulation**", "Incentivised, paid or filtered reviews can lead to removal from the Developer Program", "Do not modify or overlay the review card"],
          ],
        },
      },
      {
        heading: "Timeline: from four weeks out to after launch",
        body: [],
        table: {
          headers: ["When", "What to do"],
          rows: [
            ["**Four weeks before**", "Keyword research for each launch language; draft name, subtitle, Play title and short description; decide launch locales."],
            ["**Two weeks before**", "Produce screenshots and previews; write promotional text and descriptions; check Play metadata policy; plan review-prompt trigger points in the app."],
            ["**At launch**", "Publish the default listing in every launch locale. Confirm submission assets with the [[/blogs/mobile-app-launch-checklist|launch checklist]]."],
            ["**After enough traffic**", "Run Apple product page optimisation and Google Play store listing experiments; add custom product pages and custom store listings for distinct audiences or keywords."],
          ],
        },
      },
      {
        heading: "Testing and custom pages after launch",
        body: [],
        checklist: [
          "**Apple product page optimisation:** test up to three treatments of icon, screenshots and previews for up to 90 days, one test at a time. New metadata needs App Review, and alternate icons must be in the app binary ([[https://developer.apple.com/app-store/product-page-optimization/|Apple]]).",
          "**Apple custom product pages:** up to 70 additional pages with different screenshots, promotional text and previews, linkable from campaigns. You can assign keywords so a page appears in search for them; each keyword combination can belong to only one page ([[https://developer.apple.com/app-store/custom-product-pages/|Apple]]).",
          "**Google Play store listing experiments:** one default-graphics experiment or up to five localised experiments at a time, each with up to two variants against the current listing ([[https://support.google.com/googleplay/android-developer/answer/6227309|Google]]).",
          "**Google Play custom store listings:** up to 50, targetable by country or region, pre-registration, ads traffic, search keywords, lapsed or churned users, buyer segments and custom audiences. Name, icon, descriptions and graphics can change; contact details, privacy policy and category are shared ([[https://support.google.com/googleplay/android-developer/answer/9867158|Google]]).",
          "Test one idea at a time and run tests long enough for reliable results.",
        ],
      },
      {
        heading: "Measurement",
        body: [
          "Track impressions, product page views, conversion to install, and then activation and retention by traffic source and storefront, using App Store Connect analytics, Play Console and your own analytics. A listing that lifts installs but attracts users who leave quickly has not helped. Link store experiments to in-app outcomes where possible; see [[/blogs/mobile-app-analytics|mobile app analytics]] and [[/blogs/improve-mobile-app-retention|improving mobile app retention]].",
        ],
      },
      {
        heading: "Hypothetical example: a fitness app",
        body: [
          "**This example is hypothetical.** A fitness app's screenshots showed settings screens first. The team ran a product page optimisation test with screenshots leading with a workout in progress and progress tracking, created custom product pages for running and strength audiences linked from separate campaigns, and localised listings for its main English-speaking markets with local spelling. It compared conversion to install and 30-day retention for each variant before adopting changes.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Keyword stuffing names and descriptions.",
          "Repeating name and subtitle words in the iOS keyword field.",
          "Putting keywords in promotional text, which Apple does not index for search.",
          "Ranking claims, emoji or offers in a Google Play title.",
          "Screenshots of settings instead of value.",
          "Asking for a rating on first launch or from a button.",
          "Incentivised or filtered review requests.",
          "Changing several elements at once, so results are unclear.",
          "Measuring installs but not retention.",
        ],
      },
      {
        heading: "Limits of ASO",
        body: [
          "ASO improves how a listing is found and chosen. It will not compensate for an app that does not keep people, and store search is only one acquisition channel. Neither store publishes how its ranking works in detail, so treat keyword choices as hypotheses to test, not guarantees. If an app has few installs because few people need it, a better listing will not change that.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Apple: [[https://developer.apple.com/app-store/product-page/|Creating your product page]]; [[https://developer.apple.com/help/app-store-connect/reference/app-information/app-information|App Store Connect: app information]]; [[https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information|App Store Connect: platform version information]]; [[https://developer.apple.com/help/app-store-connect/reference/app-preview-specifications|App preview specifications]]; [[https://developer.apple.com/app-store/custom-product-pages/|Custom product pages]]; [[https://developer.apple.com/app-store/product-page-optimization/|Product page optimisation]]; [[https://developer.apple.com/documentation/storekit/requesting-app-store-reviews|Requesting App Store reviews]]; [[https://developer.apple.com/documentation/storekit/skstorereviewcontroller|SKStoreReviewController (deprecated)]]; [[https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews|Human Interface Guidelines: ratings and reviews]]; [[https://developer.apple.com/app-store/review/guidelines/|App Store Review Guidelines]].",
          "Google: [[https://support.google.com/googleplay/android-developer/answer/9859152|Play Console: store listing]]; [[https://support.google.com/googleplay/android-developer/answer/9898842|Play metadata policy]]; [[https://support.google.com/googleplay/android-developer/answer/9866151|Preview assets]]; [[https://support.google.com/googleplay/android-developer/answer/9867158|Custom store listings]]; [[https://support.google.com/googleplay/android-developer/answer/6227309|Store listing experiments]]; [[https://developer.android.com/guide/playcore/in-app-review|In-App Review API]].",
          "Accessed 15 October 2026. Store limits, APIs and policies change; check the current pages before you submit.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A launch-ready listing uses every field within its limit, keeps the iOS keyword field free of repeats, leads with value in screenshots, is localised for the markets you are targeting, and asks for ratings only after real success. After launch, the stores' experiments and custom pages let you improve it with evidence. Next step: fill in the field-by-field table for your app and each launch language, then plan your review-prompt moments in the build.",
        ],
        cta: {
          title: "Getting the app launch-ready?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/mobile-app-development|mobile app development]] and [[/services/ui-ux-design|app design]]. We do not sell ASO services, but if useful, we can talk through getting the app and its first-run experience ready for launch, including screenshots and review-prompt timing.",
        },
      },
    ],
  },
];
