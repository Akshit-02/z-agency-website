export type BlogBannerVariant =
  | "speed"
  | "automation"
  | "commerce"
  | "systems"
  | "funnel"
  | "onboarding"
  | "storefront"
  | "ledger"
  | "roadmap"
  | "fork"
  | "appshelf"
  | "integration"
  | "gauge"
  | "waterfall"
  | "serp"
  | "migrate"
  | "framework"
  | "compare3"
  | "decisiontree"
  | "appblocks"
  | "hub"
  | "tiers"
  | "layers"
  | "salesfunnel"
  | "dashboard"
  | "cycle"
  | "agenthealth"
  | "agentbanking"
  | "agentcommerce"
  | "agentmanufacturing"
  | "agentrealestate"
  | "agentinsurance"
  | "agenttravel"
  | "agentlogistics"
  | "agenteducation"
  | "agentconstruction"
  | "agentmarketing"
  | "agentproperty"
  | "agentfinance"
  | "agentbrokerage"
  | "agentd2c"
  | "agentsaas"
  | "agentaccounting"
  | "agentprofessional"
  | "agentfood"
  | "agentgov"
  | "agentaviation"
  | "agentautomotive"
  | "agentpharma"
  | "agenthospital"
  | "agentfreight"
  | "agenthotel"
  | "agentacademic"
  | "agentprojectcontrols"
  | "agentmedia"
  | "agentagriculture"
  | "pdphotspots"
  | "checkoutflow"
  | "cartdrawer"
  | "mobileframe"
  | "splittest"
  | "auditgrid"
  | "journeymap"
  | "homepageanatomy"
  | "recommap"
  | "segmentsplit"
  | "exitcapture"
  | "trustmap"
  | "considerationfunnel"
  | "dtcframework"
  | "tipsrows"
  | "mistakeslist"
  | "heatmapviz"
  | "ctahierarchy"
  | "testmatrix"
  | "costbreakdown"
  | "reqchecklist"
  | "securitylock"
  | "a11ycheck"
  | "navmap"
  | "bounceviz"
  | "headlesscms"
  | "restgraphql"
  | "renderflow"
  | "archstack";

const INK = "#0b0c0e";
const LINE = "#d3d0c8";
const SOFT = "#eceae4";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";

/**
 * Shared "AI agent" hero graphic: a central agent node reading and acting on
 * four connected systems, plus a small mark that gives each industry its own
 * silhouette. Used by the ai-agents-in-[industry] article set.
 */
function AgentHub({
  industry,
  systems,
  mark,
}: {
  industry: string;
  systems: [string, string, string, string];
  mark: React.ReactNode;
}) {
  const spokes = [
    { x: 220, y: 110 },
    { x: 580, y: 110 },
    { x: 220, y: 340 },
    { x: 580, y: 340 },
  ];
  return (
    <Canvas>
      <g stroke={LINE} strokeWidth="1.5">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 12 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={40 + c * 65} cy={40 + r * 90} r="1.6" fill={LINE} />
          ))
        )}
      </g>
      <rect x="36" y="34" width="150" height="34" rx="17" fill="none" stroke={INK} strokeWidth="1.5" />
      <text x="111" y="56" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={INK} letterSpacing="0.5">
        {industry}
      </text>

      {spokes.map((s, i) => (
        <line key={i} x1="400" y1="225" x2={s.x} y2={s.y} stroke={i % 2 === 0 ? BLUE : ORANGE} strokeWidth="2" opacity="0.55" />
      ))}
      {spokes.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 78} y={s.y - 26} width="156" height="52" rx="10" fill="#ffffff" stroke={i % 2 === 0 ? BLUE : ORANGE} strokeWidth="2" />
          <text x={s.x} y={s.y + 5} textAnchor="middle" fontFamily="monospace" fontSize="13" fill={INK}>
            {systems[i]}
          </text>
        </g>
      ))}

      <circle cx="400" cy="225" r="58" fill={INK} />
      <circle cx="400" cy="225" r="58" fill="none" stroke={SOFT} strokeWidth="1" opacity="0.4" />
      <text x="400" y="219" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#faf9f6">
        AI AGENT
      </text>
      <g transform="translate(384,228)">{mark}</g>
    </Canvas>
  );
}

function Canvas({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 800 450"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="800" height="450" fill="#faf9f6" />
      {children}
    </svg>
  );
}

export function BlogBanner({ variant }: { variant: BlogBannerVariant }) {
  if (variant === "agenthealth") {
    return (
      <AgentHub
        industry="Healthcare"
        systems={["Scheduling", "Records / EHR", "Prior Auth", "Care Team"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="3" strokeLinecap="round">
            <line x1="-9" y1="0" x2="9" y2="0" />
            <line x1="0" y1="-9" x2="0" y2="9" />
          </g>
        }
      />
    );
  }

  if (variant === "agentbanking") {
    return (
      <AgentHub
        industry="Banking"
        systems={["KYC / Onboarding", "AML / Fraud", "Compliance", "Core Banking"]}
        mark={
          <text x="0" y="7" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="#faf9f6">
            $
          </text>
        }
      />
    );
  }

  if (variant === "agentcommerce") {
    return (
      <AgentHub
        industry="Retail & Ecommerce"
        systems={["Catalog", "Inventory", "Checkout", "Customer Data"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.5" fill="none" strokeLinejoin="round">
            <path d="M-10,-6 h20 l-3,13 h-14 z" />
            <line x1="-10" y1="-6" x2="-13" y2="-12" strokeLinecap="round" />
          </g>
        }
      />
    );
  }

  if (variant === "agentmanufacturing") {
    return (
      <AgentHub
        industry="Manufacturing"
        systems={["Sensors / IoT", "Maintenance", "Production Schedule", "Quality Control"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.5" fill="none">
            <rect x="-9" y="-9" width="18" height="18" transform="rotate(45)" />
          </g>
        }
      />
    );
  }

  if (variant === "agentrealestate") {
    return (
      <AgentHub
        industry="Real Estate"
        systems={["Leads", "Listings", "CRM", "Calendar"]}
        mark={
          <path d="M-10,2 L0,-9 L10,2 V11 H-10 Z" fill="none" stroke="#faf9f6" strokeWidth="2.5" strokeLinejoin="round" />
        }
      />
    );
  }

  if (variant === "agentinsurance") {
    return (
      <AgentHub
        industry="Insurance"
        systems={["Claims Intake", "Documents", "Underwriting", "Fraud Signals"]}
        mark={
          <path d="M0,-10 L10,-5 V4 C10,10 5,13 0,15 C-5,13 -10,10 -10,4 V-5 Z" fill="none" stroke="#faf9f6" strokeWidth="2.2" strokeLinejoin="round" />
        }
      />
    );
  }

  if (variant === "agenttravel") {
    return (
      <AgentHub
        industry="Travel & Hospitality"
        systems={["Preferences", "Inventory", "Booking Engine", "Concierge"]}
        mark={
          <path d="M-11,4 L11,-8 L4,5 L6,11 L1,8 L-4,11 L-3,3 Z" fill="#faf9f6" />
        }
      />
    );
  }

  if (variant === "agentlogistics") {
    return (
      <AgentHub
        industry="Logistics & Supply Chain"
        systems={["Fleet", "Warehouse / WMS", "Routes", "Deliveries"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.3" fill="none" strokeLinejoin="round">
            <rect x="-11" y="-6" width="14" height="10" />
            <path d="M3,-2 h7 l4,5 v3 h-11 z" />
            <circle cx="-6" cy="8" r="2.6" fill="#faf9f6" stroke="none" />
            <circle cx="7" cy="8" r="2.6" fill="#faf9f6" stroke="none" />
          </g>
        }
      />
    );
  }

  if (variant === "agenteducation") {
    return (
      <AgentHub
        industry="Education"
        systems={["Admissions", "Students", "LMS", "Campus Ops"]}
        mark={
          <path d="M-11,-3 L0,-9 L11,-3 L0,3 Z M-6,0 v7 c3,3 9,3 12,0 v-7" fill="none" stroke="#faf9f6" strokeWidth="2.2" strokeLinejoin="round" />
        }
      />
    );
  }

  if (variant === "agentconstruction") {
    return (
      <AgentHub
        industry="Construction & AEC"
        systems={["Drawings", "Schedule", "Procurement", "Site Reports"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.3" fill="none" strokeLinejoin="round">
            <path d="M-10,10 L-10,-4 L6,-10 L6,10" />
            <line x1="-10" y1="2" x2="6" y2="2" />
          </g>
        }
      />
    );
  }

  if (variant === "agentmarketing") {
    return (
      <AgentHub
        industry="Marketing"
        systems={["Campaigns", "Audience Segments", "Ad Platforms", "Attribution / CRM"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.3" fill="none">
            <circle r="9" />
            <circle r="5" />
            <circle r="1.4" fill="#faf9f6" stroke="none" />
          </g>
        }
      />
    );
  }

  if (variant === "agentproperty") {
    return (
      <AgentHub
        industry="Property Management"
        systems={["Tenants", "Maintenance", "Rent & Payments", "Leases"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.4" fill="none" strokeLinejoin="round">
            <circle cx="-4" cy="-6" r="3.2" />
            <path d="M-2,-3.5 L7,7 M4,4 L1,7 M7,4 L4,7" strokeLinecap="round" />
          </g>
        }
      />
    );
  }

  if (variant === "agentfinance") {
    return (
      <AgentHub
        industry="Finance Operations"
        systems={["Invoices / AP-AR", "Bank Feeds", "Ledger / ERP", "Treasury"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.2" fill="none">
            <rect x="-8" y="-10" width="16" height="20" rx="1.5" />
            <line x1="-4.5" y1="-4" x2="4.5" y2="-4" />
            <line x1="-4.5" y1="0" x2="4.5" y2="0" />
            <line x1="-4.5" y1="4" x2="1.5" y2="4" />
          </g>
        }
      />
    );
  }

  if (variant === "agentbrokerage") {
    return (
      <AgentHub
        industry="Insurance Brokerage"
        systems={["Carrier Quotes", "Policies", "Clients", "Renewals"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.3" fill="none">
            <line x1="-9" y1="6" x2="-9" y2="-6" />
            <line x1="-9" y1="-6" x2="-2" y2="-2" />
            <line x1="9" y1="6" x2="9" y2="-6" />
            <line x1="9" y1="-6" x2="2" y2="-2" />
            <line x1="-9" y1="-6" x2="9" y2="-6" strokeDasharray="1.5 2.5" />
          </g>
        }
      />
    );
  }

  if (variant === "agentd2c") {
    return (
      <AgentHub
        industry="D2C Brands"
        systems={["Orders", "Support & Returns", "Lifecycle Marketing", "Reviews / UGC"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.3" fill="none" strokeLinejoin="round">
            <rect x="-8" y="-3" width="16" height="13" rx="1.5" />
            <path d="M-8,-3 L0,3 L8,-3" />
            <path d="M-4,-3 C-4,-9 4,-9 4,-3" />
          </g>
        }
      />
    );
  }

  if (variant === "agentsaas") {
    return (
      <AgentHub
        industry="SaaS"
        systems={["Product Usage", "Support Tickets", "CRM / Renewals", "Billing"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.3" fill="none" strokeLinejoin="round" strokeLinecap="round">
            <path d="M-4,-8 L-10,0 L-4,8" />
            <path d="M4,-8 L10,0 L4,8" />
          </g>
        }
      />
    );
  }

  if (variant === "agentaccounting") {
    return (
      <AgentHub
        industry="Accounting & Tax"
        systems={["Invoices", "Bank Reconciliation", "Ledger", "Tax Documents"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.1" fill="none">
            <rect x="-7" y="-10" width="14" height="20" rx="1.5" />
            {[-6, -2, 2, 6].map((y) => (
              <line key={y} x1="-4" y1={y} x2="4" y2={y} />
            ))}
          </g>
        }
      />
    );
  }

  if (variant === "agentprofessional") {
    return (
      <AgentHub
        industry="Professional Services"
        systems={["Research", "Proposals", "Client Documents", "Knowledge Base"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.3" fill="none">
            <circle cx="-2" cy="-2" r="6" />
            <line x1="2.5" y1="2.5" x2="9" y2="9" strokeLinecap="round" />
          </g>
        }
      />
    );
  }

  if (variant === "agentfood") {
    return (
      <AgentHub
        industry="Food & Beverage"
        systems={["Orders", "Reservations", "Inventory", "Delivery"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.2" strokeLinecap="round" fill="none">
            <line x1="-7" y1="-9" x2="-7" y2="9" />
            <line x1="-9" y1="-9" x2="-9" y2="-3" />
            <line x1="-5" y1="-9" x2="-5" y2="-3" />
            <path d="M6,-9 C2,-9 2,-2 6,-2 L6,9" />
          </g>
        }
      />
    );
  }

  if (variant === "agentgov") {
    return (
      <AgentHub
        industry="Government"
        systems={["Citizen Requests", "Case Management", "Departments", "Documents"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.2" fill="none" strokeLinecap="round">
            <line x1="-10" y1="8" x2="10" y2="8" />
            <line x1="-8" y1="8" x2="-8" y2="-2" />
            <line x1="-3" y1="8" x2="-3" y2="-2" />
            <line x1="3" y1="8" x2="3" y2="-2" />
            <line x1="8" y1="8" x2="8" y2="-2" />
            <path d="M-10,-2 L0,-9 L10,-2 Z" />
          </g>
        }
      />
    );
  }

  if (variant === "agentaviation") {
    return (
      <AgentHub
        industry="Aviation"
        systems={["Flight Status", "Bookings / Rebooking", "Baggage", "Crew & Ops"]}
        mark={
          <path
            d="M0,-11 L2,-4 L11,-1 L11,2 L2,0 L1,7 L5,10 L5,12 L0,10.5 L-5,12 L-5,10 L-1,7 L-2,0 L-11,2 L-11,-1 L-2,-4 Z"
            fill="#faf9f6"
          />
        }
      />
    );
  }

  if (variant === "agentautomotive") {
    return (
      <AgentHub
        industry="Automotive"
        systems={["Leads / CRM", "Inventory", "Service Scheduling", "Parts"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.2" fill="none" strokeLinejoin="round">
            <path d="M-11,3 L-8,-3 L8,-3 L11,3 Z" />
            <line x1="-11" y1="3" x2="11" y2="3" />
            <circle cx="-6" cy="5" r="2" fill="#faf9f6" stroke="none" />
            <circle cx="6" cy="5" r="2" fill="#faf9f6" stroke="none" />
          </g>
        }
      />
    );
  }

  if (variant === "agentpharma") {
    return (
      <AgentHub
        industry="Pharmaceuticals"
        systems={["Scientific Literature", "Trials / EHR", "LIMS", "Regulatory Docs"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.2" fill="none" strokeLinejoin="round">
            <path d="M-3,-10 L-3,-2 L-8,9 H8 L3,-2 L3,-10" />
            <line x1="-5" y1="-10" x2="5" y2="-10" />
            <line x1="-5.5" y1="3" x2="5.5" y2="3" />
          </g>
        }
      />
    );
  }

  if (variant === "agenthospital") {
    return (
      <AgentHub
        industry="Hospital Operations"
        systems={["Referrals", "Bed & Appointments", "Care Teams", "Clinical Docs"]}
        mark={
          <path
            d="M-11,0 L-6,0 L-4,-6 L-1,6 L1,-3 L3,0 L11,0"
            fill="none"
            stroke="#faf9f6"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        }
      />
    );
  }

  if (variant === "agentfreight") {
    return (
      <AgentHub
        industry="Freight & Customs"
        systems={["Shipment Docs", "Customs Filing", "Carrier Booking", "Compliance Checks"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.1" fill="none" strokeLinejoin="round">
            <rect x="-7" y="-10" width="14" height="20" rx="1.5" />
            <path d="M-3.5,0 L-1,3 L4,-4" strokeLinecap="round" />
          </g>
        }
      />
    );
  }

  if (variant === "agenthotel") {
    return (
      <AgentHub
        industry="Hotel Operations"
        systems={["Housekeeping", "Maintenance", "Room Status", "Multi-Property"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.2" fill="none" strokeLinejoin="round" strokeLinecap="round">
            <circle cx="-6" cy="-6" r="2.2" fill="#faf9f6" stroke="none" />
            <line x1="-4.5" y1="-4.5" x2="7" y2="7" />
            <line x1="1" y1="1" x2="7" y2="-5" />
          </g>
        }
      />
    );
  }

  if (variant === "agentacademic") {
    return (
      <AgentHub
        industry="Academic Support"
        systems={["Tutoring", "Faculty Support", "Course Materials", "Alumni & Career"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.1" fill="none" strokeLinejoin="round">
            <path d="M0,-7 C-4,-9 -10,-9 -10,-7 L-10,6 C-10,4 -4,4 0,6 Z" />
            <path d="M0,-7 C4,-9 10,-9 10,-7 L10,6 C10,4 4,4 0,6 Z" />
          </g>
        }
      />
    );
  }

  if (variant === "agentprojectcontrols") {
    return (
      <AgentHub
        industry="Construction Project Controls"
        systems={["Cost Tracking", "Change Orders", "Risk Flags", "Budget / ERP"]}
        mark={
          <g stroke="#faf9f6" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-10,8 L-3,-2 L2,3 L10,-9" />
            <path d="M4,-9 L10,-9 L10,-3" />
          </g>
        }
      />
    );
  }

  if (variant === "agentmedia") {
    return (
      <AgentHub
        industry="Media & Entertainment"
        systems={["Content Library", "Localization", "Rights & Licensing", "Distribution"]}
        mark={<path d="M-6,-9 L8,0 L-6,9 Z" fill="#faf9f6" />}
      />
    );
  }

  if (variant === "agentagriculture") {
    return (
      <AgentHub
        industry="Agriculture"
        systems={["Sensors / IoT", "Weather", "Crop Health", "Supply Chain"]}
        mark={
          <path
            d="M0,10 C0,10 -9,4 -9,-4 C-9,-10 -2,-11 0,-6 C2,-11 9,-10 9,-4 C9,4 0,10 0,10 Z M0,10 L0,-4"
            fill="none"
            stroke="#faf9f6"
            strokeWidth="2.1"
            strokeLinejoin="round"
          />
        }
      />
    );
  }

  if (variant === "pdphotspots") {
    return (
      <Canvas>
        <rect x="230" y="70" width="340" height="310" rx="14" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="254" y="94" width="292" height="170" rx="8" fill="#f3f2ee" />
        <rect x="254" y="278" width="180" height="16" rx="4" fill={INK} />
        <rect x="254" y="302" width="120" height="12" rx="4" fill={LINE} />
        <rect x="254" y="326" width="292" height="34" rx="17" fill={ORANGE} />
        {[
          { x: 254, y: 94, lx: 130, ly: 70 },
          { x: 434, y: 286, lx: 620, ly: 200 },
          { x: 254, y: 308, lx: 130, ly: 340 },
          { x: 400, y: 343, lx: 620, ly: 343 },
        ].map((p, i) => (
          <g key={i}>
            <line x1={p.x} y1={p.y} x2={p.lx} y2={p.ly} stroke={BLUE} strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx={p.x} cy={p.y} r="6" fill={BLUE} />
            <circle cx={p.lx} cy={p.ly} r="16" fill="none" stroke={BLUE} strokeWidth="1.5" />
            <text x={p.lx} y={p.ly + 5} textAnchor="middle" fontFamily="monospace" fontSize="13" fill={BLUE}>
              {i + 1}
            </text>
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "checkoutflow") {
    const steps = ["Cart", "Info", "Shipping", "Payment"];
    return (
      <Canvas>
        <line x1="120" y1="225" x2="680" y2="225" stroke={LINE} strokeWidth="3" />
        {steps.map((label, i) => {
          const x = 120 + i * 187;
          const friction = i === 2;
          return (
            <g key={label}>
              <circle cx={x} cy="225" r="24" fill={friction ? ORANGE : "#ffffff"} stroke={INK} strokeWidth="2.5" />
              {friction ? (
                <path d={`M${x - 7},${218} L${x + 7},${232} M${x + 7},${218} L${x - 7},${232}`} stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              ) : (
                <circle cx={x} cy="225" r="6" fill={BLUE} />
              )}
              <rect x={x - 50} y="266" width="100" height="10" rx="4" fill={LINE} />
              <text x={x} y="300" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={INK}>
                {label}
              </text>
            </g>
          );
        })}
      </Canvas>
    );
  }

  if (variant === "cartdrawer") {
    return (
      <Canvas>
        <rect x="0" y="0" width="800" height="450" fill="#f3f2ee" opacity="0.5" />
        <rect x="470" y="40" width="290" height="370" rx="0" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="498" y="66" width="90" height="16" rx="4" fill={INK} />
        {[0, 1].map((i) => (
          <g key={i}>
            <rect x="498" y={110 + i * 84} width="64" height="64" rx="8" fill="#f3f2ee" />
            <rect x="574" y={116 + i * 84} width="150" height="12" rx="4" fill={LINE} />
            <rect x="574" y={136 + i * 84} width="70" height="10" rx="4" fill={LINE} />
            <rect x="574" y={156 + i * 84} width="56" height="18" rx="4" fill="none" stroke={INK} strokeWidth="1.5" />
          </g>
        ))}
        <line x1="498" y1="290" x2="732" y2="290" stroke={LINE} strokeWidth="2" />
        <rect x="498" y="306" width="140" height="12" rx="4" fill={LINE} />
        <rect x="498" y="330" width="234" height="8" rx="4" fill={ORANGE} opacity="0.3" />
        <rect x="498" y="330" width="150" height="8" rx="4" fill={ORANGE} />
        <text x="498" y="356" fontFamily="monospace" fontSize="10" fill={ORANGE}>
          Free shipping at $75
        </text>
        <rect x="498" y="370" width="234" height="34" rx="17" fill={INK} />
      </Canvas>
    );
  }

  if (variant === "mobileframe") {
    return (
      <Canvas>
        <rect x="300" y="40" width="200" height="370" rx="28" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
        <rect x="320" y="70" width="160" height="120" rx="8" fill="#f3f2ee" />
        <rect x="320" y="200" width="100" height="14" rx="4" fill={LINE} />
        <rect x="320" y="222" width="140" height="10" rx="4" fill={LINE} />
        <rect x="320" y="242" width="70" height="10" rx="4" fill={LINE} />
        <rect x="320" y="336" width="160" height="34" rx="17" fill={ORANGE} />
        <circle cx="540" cy="120" r="26" fill="none" stroke={BLUE} strokeWidth="2.5" />
        <text x="540" y="126" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={BLUE}>
          44
        </text>
        <line x1="504" y1="120" x2="478" y2="120" stroke={BLUE} strokeWidth="1.5" strokeDasharray="3 4" />
        <circle cx="260" cy="353" r="16" fill="none" stroke={ORANGE} strokeWidth="2" />
        <line x1="276" y1="353" x2="300" y2="353" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="3 4" />
      </Canvas>
    );
  }

  if (variant === "splittest") {
    return (
      <Canvas>
        <line x1="400" y1="70" x2="400" y2="380" stroke={LINE} strokeWidth="2" strokeDasharray="5 6" />
        <rect x="130" y="90" width="230" height="270" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="156" y="114" width="60" height="18" rx="9" fill={SOFT} />
        <text x="186" y="127" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={INK}>
          A
        </text>
        <rect x="156" y="150" width="178" height="100" rx="6" fill="#f3f2ee" />
        <rect x="156" y="264" width="178" height="28" rx="14" fill="none" stroke={INK} strokeWidth="2" />
        <rect x="410" y="90" width="230" height="270" rx="12" fill="#ffffff" stroke={BLUE} strokeWidth="2.5" />
        <rect x="436" y="114" width="60" height="18" rx="9" fill={BLUE} opacity="0.15" />
        <text x="466" y="127" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BLUE}>
          B
        </text>
        <rect x="436" y="150" width="178" height="100" rx="6" fill={BLUE} opacity="0.1" />
        <rect x="436" y="264" width="178" height="28" rx="14" fill={ORANGE} />
        <path d="M540,240 L560,256 L600,214" fill="none" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </Canvas>
    );
  }

  if (variant === "auditgrid") {
    const cats = ["UX", "Product", "Trust", "Cart", "Checkout", "Mobile", "Perf", "Data", "Test"];
    return (
      <Canvas>
        {cats.map((label, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const flagged = i === 2 || i === 5;
          const x = 220 + col * 130;
          const y = 90 + row * 100;
          return (
            <g key={label}>
              <rect x={x} y={y} width="104" height="80" rx="10" fill="#ffffff" stroke={flagged ? ORANGE : INK} strokeWidth={flagged ? 2.5 : 1.5} />
              {flagged ? (
                <circle cx={x + 84} cy={y + 16} r="7" fill={ORANGE} />
              ) : (
                <circle cx={x + 84} cy={y + 16} r="7" fill="none" stroke={BLUE} strokeWidth="2" />
              )}
              <text x={x + 16} y={y + 46} fontFamily="monospace" fontSize="12" fill={INK}>
                {label}
              </text>
            </g>
          );
        })}
      </Canvas>
    );
  }

  if (variant === "journeymap") {
    const points = [
      { x: 120, y: 300 },
      { x: 240, y: 190 },
      { x: 360, y: 260 },
      { x: 480, y: 150 },
      { x: 600, y: 210 },
      { x: 680, y: 130 },
    ];
    const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
    return (
      <Canvas>
        <path d={path} fill="none" stroke={LINE} strokeWidth="2.5" />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={i === 0 || i === points.length - 1 ? 10 : 7} fill={i % 2 === 0 ? BLUE : ORANGE} />
            {i === points.length - 1 && <circle cx={p.x} cy={p.y} r="16" fill="none" stroke={ORANGE} strokeWidth="1.5" />}
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "homepageanatomy") {
    return (
      <Canvas>
        <rect x="150" y="70" width="500" height="310" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="150" y="70" width="500" height="40" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="172" y="86" width="60" height="10" rx="3" fill={INK} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={410 + i * 70} y="86" width="46" height="10" rx="3" fill={LINE} />
        ))}
        <rect x="176" y="130" width="280" height="140" rx="6" fill="#f3f2ee" />
        <rect x="196" y="156" width="180" height="16" rx="4" fill={INK} />
        <rect x="196" y="180" width="140" height="10" rx="4" fill={LINE} />
        <rect x="196" y="222" width="130" height="30" rx="15" fill={ORANGE} />
        <rect x="472" y="130" width="150" height="140" rx="6" fill="none" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 5" />
        <rect x="176" y="288" width="140" height="70" rx="6" fill="none" stroke={INK} strokeWidth="1.5" />
        <rect x="330" y="288" width="140" height="70" rx="6" fill="none" stroke={INK} strokeWidth="1.5" />
        <rect x="484" y="288" width="140" height="70" rx="6" fill="none" stroke={INK} strokeWidth="1.5" />
        {[203, 357, 511].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="336" r="14" fill="none" stroke={BLUE} strokeWidth="1.5" />
            <text x={x} y="341" textAnchor="middle" fontFamily="monospace" fontSize="12" fill={BLUE}>
              {i + 1}
            </text>
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "recommap") {
    return (
      <Canvas>
        <rect x="330" y="130" width="140" height="190" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
        <rect x="350" y="150" width="100" height="90" rx="6" fill="#f3f2ee" />
        <rect x="350" y="252" width="80" height="12" rx="4" fill={INK} />
        <rect x="350" y="272" width="100" height="26" rx="13" fill={INK} />
        <g>
          <rect x="120" y="90" width="130" height="80" rx="8" fill="#ffffff" stroke={BLUE} strokeWidth="2" />
          <text x="185" y="118" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BLUE}>
            Cross-sell
          </text>
          <rect x="140" y="132" width="90" height="8" rx="3" fill={LINE} />
          <line x1="250" y1="150" x2="320" y2="190" stroke={BLUE} strokeWidth="1.5" strokeDasharray="3 4" />
        </g>
        <g>
          <rect x="550" y="90" width="130" height="80" rx="8" fill="#ffffff" stroke={ORANGE} strokeWidth="2" />
          <text x="615" y="118" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={ORANGE}>
            Upsell
          </text>
          <rect x="570" y="132" width="90" height="8" rx="3" fill={LINE} />
          <line x1="550" y1="150" x2="480" y2="190" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="3 4" />
        </g>
        <g>
          <rect x="120" y="280" width="130" height="80" rx="8" fill="#ffffff" stroke={INK} strokeWidth="1.5" />
          <text x="185" y="308" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={INK}>
            Alternative
          </text>
          <rect x="140" y="322" width="90" height="8" rx="3" fill={LINE} />
          <line x1="250" y1="300" x2="320" y2="270" stroke={INK} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 4" />
        </g>
        <g>
          <rect x="550" y="280" width="130" height="80" rx="8" fill="#ffffff" stroke={INK} strokeWidth="1.5" />
          <text x="615" y="308" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={INK}>
            Personalized
          </text>
          <rect x="570" y="322" width="90" height="8" rx="3" fill={LINE} />
          <line x1="550" y1="300" x2="480" y2="270" stroke={INK} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 4" />
        </g>
      </Canvas>
    );
  }

  if (variant === "segmentsplit") {
    return (
      <Canvas>
        <circle cx="150" cy="225" r="26" fill={INK} />
        <circle cx="150" cy="216" r="9" fill="#faf9f6" />
        <path d="M132,240 a18,16 0 0 1 36,0 Z" fill="#faf9f6" />
        {[
          { y: 110, label: "New visitor", color: BLUE },
          { y: 225, label: "Returning", color: ORANGE },
          { y: 340, label: "By geography", color: INK },
        ].map((row, i) => (
          <g key={i}>
            <path d={`M176,225 C260,225 260,${row.y} 340,${row.y}`} fill="none" stroke={row.color} strokeWidth="1.5" strokeOpacity="0.6" />
            <rect x="340" y={row.y - 22} width="180" height="44" rx="10" fill="#ffffff" stroke={row.color} strokeWidth="2" />
            <text x="430" y={row.y + 5} textAnchor="middle" fontFamily="monospace" fontSize="12" fill={INK}>
              {row.label}
            </text>
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "exitcapture") {
    return (
      <Canvas>
        <rect x="0" y="0" width="800" height="450" fill="none" stroke={LINE} strokeWidth="3" />
        <line x1="0" y1="40" x2="800" y2="40" stroke={ORANGE} strokeWidth="3" strokeDasharray="10 8" />
        <path d="M420,220 L490,150" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <path d="M420,220 L400,190 M420,220 L450,205" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M420,220 L392,214 L398,242 Z" fill={INK} />
        <rect x="250" y="190" width="300" height="150" rx="14" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
        <rect x="278" y="218" width="180" height="16" rx="4" fill={INK} />
        <rect x="278" y="246" width="240" height="10" rx="4" fill={LINE} />
        <rect x="278" y="264" width="200" height="10" rx="4" fill={LINE} />
        <rect x="278" y="300" width="120" height="30" rx="15" fill={ORANGE} />
      </Canvas>
    );
  }

  if (variant === "trustmap") {
    return (
      <Canvas>
        <rect x="230" y="80" width="340" height="290" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="254" y="104" width="292" height="140" rx="8" fill="#f3f2ee" />
        <rect x="254" y="260" width="160" height="14" rx="4" fill={INK} />
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M${254 + i * 20},288 l3,7 l7,1 l-5,5 l1,7 l-6,-4 l-6,4 l1,-7 l-5,-5 l7,-1 z`}
            fill={i < 4 ? ORANGE : "none"}
            stroke={ORANGE}
            strokeWidth="1"
          />
        ))}
        <text x="360" y="298" fontFamily="monospace" fontSize="11" fill={INK}>
          4.6 (128)
        </text>
        <rect x="254" y="316" width="292" height="34" rx="17" fill={INK} />
        <g>
          <circle cx="640" cy="130" r="26" fill="none" stroke={BLUE} strokeWidth="2" />
          <path d="M628,130 l8,8 l16,-18" fill="none" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="640" y="172" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={INK}>
            Secure
          </text>
        </g>
        <g>
          <circle cx="640" cy="230" r="26" fill="none" stroke={ORANGE} strokeWidth="2" />
          <path d="M628,224 h24 M628,236 h16" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />
          <text x="640" y="272" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={INK}>
            Returns
          </text>
        </g>
        <g>
          <circle cx="640" cy="330" r="26" fill="none" stroke={INK} strokeWidth="2" />
          <circle cx="640" cy="322" r="6" fill={INK} />
          <path d="M628,340 a12,10 0 0 1 24,0 Z" fill={INK} />
          <text x="640" y="372" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={INK}>
            Verified
          </text>
        </g>
      </Canvas>
    );
  }

  if (variant === "considerationfunnel") {
    const stages = ["Discovery", "Education", "Evaluation", "Trust", "Intent", "Conversion"];
    return (
      <Canvas>
        <line x1="90" y1="225" x2="710" y2="225" stroke={LINE} strokeWidth="2" />
        {stages.map((label, i) => {
          const x = 90 + i * 124;
          const last = i === stages.length - 1;
          return (
            <g key={label}>
              <circle cx={x} cy="225" r="18" fill={last ? ORANGE : "#ffffff"} stroke={last ? ORANGE : INK} strokeWidth="2.2" />
              {last && <circle cx={x} cy="225" r="6" fill="#ffffff" />}
              <text x={x} y="264" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill={INK}>
                {label}
              </text>
            </g>
          );
        })}
        <path d="M700,225 L710,225" stroke={ORANGE} strokeWidth="2" markerEnd="url(#cf-arrow)" />
        <defs>
          <marker id="cf-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={ORANGE} />
          </marker>
        </defs>
      </Canvas>
    );
  }

  if (variant === "dtcframework") {
    const n = 10;
    return (
      <Canvas>
        <circle cx="400" cy="225" r="150" fill="none" stroke={LINE} strokeWidth="1.5" strokeDasharray="3 6" />
        {Array.from({ length: n }).map((_, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
          const cx = 400 + Math.cos(angle) * 150;
          const cy = 225 + Math.sin(angle) * 150;
          const active = i === 0;
          return (
            <g key={i}>
              <line x1="400" y1="225" x2={cx} y2={cy} stroke={i % 2 === 0 ? BLUE : ORANGE} strokeOpacity="0.25" strokeWidth="1.2" />
              <circle cx={cx} cy={cy} r={active ? 12 : 8} fill={active ? ORANGE : "#ffffff"} stroke={i % 2 === 0 ? BLUE : ORANGE} strokeWidth="2" />
            </g>
          );
        })}
        <circle cx="400" cy="225" r="54" fill={INK} />
        <text x="400" y="220" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#faf9f6">
          DTC CRO
        </text>
        <text x="400" y="235" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#faf9f6">
          FRAMEWORK
        </text>
      </Canvas>
    );
  }

  if (variant === "tipsrows") {
    return (
      <Canvas>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx="140" cy={100 + i * 70} r="18" fill="none" stroke={i % 2 === 0 ? BLUE : ORANGE} strokeWidth="2" />
            <text x="140" y={105 + i * 70} textAnchor="middle" fontFamily="monospace" fontSize="13" fill={INK}>
              {i + 1}
            </text>
            <rect x="184" y={90 + i * 70} width={i === 2 ? 420 : 480} height="20" rx="5" fill={i === 0 ? INK : LINE} opacity={i === 0 ? 1 : 0.7} />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "mistakeslist") {
    return (
      <Canvas>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx="140" cy={100 + i * 70} r="16" fill="none" stroke={ORANGE} strokeWidth="2.2" />
            <path d={`M133,${93 + i * 70} L147,${107 + i * 70} M147,${93 + i * 70} L133,${107 + i * 70}`} stroke={ORANGE} strokeWidth="2.2" strokeLinecap="round" />
            <rect x="184" y={90 + i * 70} width={460 - i * 30} height="20" rx="5" fill={LINE} opacity="0.8" />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "heatmapviz") {
    return (
      <Canvas>
        <rect x="180" y="70" width="440" height="310" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="204" y="94" width="392" height="40" rx="6" fill="#f3f2ee" />
        <rect x="204" y="150" width="180" height="90" rx="6" fill="#f3f2ee" />
        <rect x="404" y="150" width="192" height="90" rx="6" fill="#f3f2ee" />
        <rect x="204" y="256" width="392" height="34" rx="17" fill="#f3f2ee" />
        {[
          { cx: 260, cy: 275, r: 26, o: 0.55 },
          { cx: 300, cy: 272, r: 16, o: 0.35 },
          { cx: 470, cy: 190, r: 20, o: 0.3 },
          { cx: 250, cy: 112, r: 14, o: 0.25 },
          { cx: 340, cy: 195, r: 10, o: 0.2 },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={ORANGE} opacity={p.o} />
        ))}
        <circle cx="260" cy="275" r="8" fill={ORANGE} />
      </Canvas>
    );
  }

  if (variant === "ctahierarchy") {
    return (
      <Canvas>
        <rect x="230" y="140" width="230" height="60" rx="30" fill={INK} />
        <text x="345" y="176" textAnchor="middle" fontFamily="monospace" fontSize="15" fill="#faf9f6">
          Add to Cart
        </text>
        <rect x="490" y="150" width="170" height="42" rx="21" fill="none" stroke={INK} strokeOpacity="0.35" strokeWidth="2" />
        <text x="575" y="176" textAnchor="middle" fontFamily="monospace" fontSize="12" fill={INK} opacity="0.6">
          Add to wishlist
        </text>
        <path d="M345,220 L345,260" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="3 4" />
        <text x="345" y="280" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={ORANGE}>
          primary
        </text>
        <path d="M575,210 L575,260" stroke={INK} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 4" />
        <text x="575" y="280" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={INK} opacity="0.5">
          secondary
        </text>
      </Canvas>
    );
  }

  if (variant === "testmatrix") {
    return (
      <Canvas>
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => {
            const i = row * 3 + col;
            const active = i === 4;
            return (
              <g key={i}>
                <rect
                  x={150 + col * 170}
                  y={80 + row * 100}
                  width="150"
                  height="80"
                  rx="10"
                  fill="#ffffff"
                  stroke={active ? ORANGE : INK}
                  strokeWidth={active ? 2.5 : 1.3}
                  strokeOpacity={active ? 1 : 0.4}
                />
                <rect x={168 + col * 170} y={98 + row * 100} width={active ? 90 : 70} height="8" rx="3" fill={active ? ORANGE : LINE} />
                <rect x={168 + col * 170} y={116 + row * 100} width="60" height="6" rx="3" fill={LINE} />
                <rect x={168 + col * 170} y={132 + row * 100} width="40" height="6" rx="3" fill={BLUE} opacity={active ? 1 : 0.4} />
              </g>
            );
          })
        )}
      </Canvas>
    );
  }

  if (variant === "costbreakdown") {
    const bars = [
      { w: 420, c: INK },
      { w: 340, c: BLUE },
      { w: 380, c: ORANGE },
      { w: 260, c: BLUE },
      { w: 300, c: ORANGE },
      { w: 180, c: LINE },
    ];
    return (
      <Canvas>
        <line x1="150" y1="70" x2="150" y2="380" stroke={LINE} strokeWidth="2" />
        {bars.map((b, i) => (
          <g key={i}>
            <rect x="150" y={90 + i * 48} width={b.w} height="22" rx="4" fill={b.c} opacity={b.c === LINE ? 0.8 : 1} />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "reqchecklist") {
    return (
      <Canvas>
        <rect x="220" y="65" width="360" height="320" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="220" y="65" width="360" height="46" rx="10" fill={INK} />
        <rect x="246" y="85" width="140" height="10" rx="3" fill="#faf9f6" opacity="0.85" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="246" y={135 + i * 48} width="18" height="18" rx="4" fill="none" stroke={i < 3 ? ORANGE : INK} strokeWidth="2" strokeOpacity={i < 3 ? 1 : 0.3} />
            {i < 3 && <path d={`M250,${144 + i * 48} L258,${152 + i * 48} L266,${136 + i * 48}`} stroke={ORANGE} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
            <rect x="280" y={139 + i * 48} width={i % 2 === 0 ? 250 : 190} height="10" rx="3" fill={LINE} opacity="0.8" />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "securitylock") {
    const shields = [0, 1, 2, 3, 4, 5];
    return (
      <Canvas>
        {shields.map((i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const cx = 230 + col * 180;
          const cy = 130 + row * 170;
          const active = i < 4;
          return (
            <g key={i}>
              <path
                d={`M${cx},${cy - 46} L${cx + 40},${cy - 30} L${cx + 40},${cy + 6} C${cx + 40},${cy + 42} ${cx + 20},${cy + 62} ${cx},${cy + 70} C${cx - 20},${cy + 62} ${cx - 40},${cy + 42} ${cx - 40},${cy + 6} L${cx - 40},${cy - 30} Z`}
                fill={active ? "#ffffff" : "none"}
                stroke={active ? ORANGE : INK}
                strokeWidth="2.2"
                strokeOpacity={active ? 1 : 0.3}
              />
              <rect x={cx - 11} y={cy - 4} width="22" height="18" rx="3" fill="none" stroke={active ? ORANGE : INK} strokeWidth="2" strokeOpacity={active ? 1 : 0.3} />
              <path d={`M${cx - 7},${cy - 4} L${cx - 7},${cy - 12} A7,7 0 0 1 ${cx + 7},${cy - 12} L${cx + 7},${cy - 4}`} fill="none" stroke={active ? ORANGE : INK} strokeWidth="2" strokeOpacity={active ? 1 : 0.3} />
            </g>
          );
        })}
      </Canvas>
    );
  }

  if (variant === "a11ycheck") {
    const cards = [
      { label: "contrast" },
      { label: "keyboard" },
      { label: "structure" },
      { label: "motion" },
    ];
    return (
      <Canvas>
        {cards.map((c, i) => {
          const x = 110 + i * 155;
          return (
            <g key={i}>
              <rect x={x} y="110" width="120" height="140" rx="12" fill="#ffffff" stroke={INK} strokeWidth="1.6" strokeOpacity="0.5" />
              {c.label === "contrast" && (
                <>
                  <circle cx={x + 60} cy="165" r="26" fill={INK} />
                  <path d={`M${x + 60},139 A26,26 0 0 1 ${x + 60},191 Z`} fill={SOFT} />
                </>
              )}
              {c.label === "keyboard" && (
                <g>
                  <rect x={x + 24} y="150" width="72" height="34" rx="5" fill="none" stroke={BLUE} strokeWidth="2" />
                  {[0, 1, 2, 3].map((k) => (
                    <rect key={k} x={x + 30 + k * 16} y="158" width="10" height="10" rx="2" fill={BLUE} opacity="0.5" />
                  ))}
                </g>
              )}
              {c.label === "structure" && (
                <g stroke={ORANGE} strokeWidth="2.2" fill="none">
                  <line x1={x + 30} y1="145" x2={x + 90} y2="145" />
                  <line x1={x + 30} y1="165" x2={x + 75} y2="165" />
                  <line x1={x + 30} y1="185" x2={x + 90} y2="185" />
                </g>
              )}
              {c.label === "motion" && (
                <g fill="none" stroke={INK} strokeWidth="1.6" strokeOpacity="0.6">
                  <path d={`M${x + 24},165 Q${x + 45},140 ${x + 60},165 Q${x + 75},190 ${x + 96},165`} />
                </g>
              )}
              <rect x={x + 30} y="266" width="60" height="8" rx="4" fill={LINE} />
              <circle cx={x + 60} cy="292" r="9" fill="none" stroke={ORANGE} strokeWidth="2" />
              <path d={`M${x + 56},292 L${x + 59},296 L${x + 65},288`} stroke={ORANGE} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          );
        })}
      </Canvas>
    );
  }

  if (variant === "headlesscms") {
    const heads = [
      { y: 100, label: "Website" },
      { y: 195, label: "Mobile app" },
      { y: 290, label: "Other channel" },
    ];
    return (
      <Canvas>
        <rect x="110" y="165" width="170" height="110" rx="12" fill={INK} />
        <text x="195" y="215" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#faf9f6">Content</text>
        <text x="195" y="236" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#faf9f6" opacity="0.6">headless CMS</text>
        <rect x="345" y="195" width="90" height="50" rx="25" fill="none" stroke={ORANGE} strokeWidth="2.2" />
        <text x="390" y="225" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={ORANGE}>API</text>
        <line x1="280" y1="220" x2="345" y2="220" stroke={LINE} strokeWidth="2" />
        {heads.map((h, i) => (
          <g key={i}>
            <path d={`M435,220 C470,220 470,${h.y + 22} 505,${h.y + 22}`} stroke={LINE} strokeWidth="2" fill="none" />
            <rect x="505" y={h.y} width="180" height="44" rx="8" fill="#ffffff" stroke={i === 0 ? BLUE : INK} strokeWidth="1.8" strokeOpacity={i === 0 ? 1 : 0.4} />
            <text x="595" y={h.y + 27} textAnchor="middle" fontFamily="monospace" fontSize="12" fill={INK}>{h.label}</text>
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "restgraphql") {
    return (
      <Canvas>
        <text x="200" y="80" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={INK}>REST</text>
        <text x="600" y="80" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={INK}>GraphQL</text>
        <line x1="400" y1="70" x2="400" y2="380" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 5" />
        <rect x="80" y="200" width="70" height="50" rx="8" fill={INK} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <line x1="150" y1="225" x2="235" y2={140 + i * 85} stroke={BLUE} strokeWidth="2" />
            <rect x="235" y={120 + i * 85} width="110" height="40" rx="6" fill="#ffffff" stroke={BLUE} strokeWidth="1.8" />
            <rect x="250" y={136 + i * 85} width="70" height="8" rx="3" fill={LINE} />
          </g>
        ))}
        <rect x="455" y="200" width="70" height="50" rx="8" fill={INK} />
        <line x1="525" y1="225" x2="600" y2="225" stroke={ORANGE} strokeWidth="2.4" />
        <rect x="600" y="165" width="130" height="120" rx="8" fill="#ffffff" stroke={ORANGE} strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="618" y={185 + i * 24} width={i % 2 ? 60 : 90} height="8" rx="3" fill={i === 1 ? ORANGE : LINE} />
        ))}
      </Canvas>
    );
  }

  if (variant === "renderflow") {
    return (
      <Canvas>
        <rect x="90" y="150" width="170" height="150" rx="12" fill={INK} />
        <text x="175" y="232" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#faf9f6">Server</text>
        <rect x="540" y="150" width="170" height="150" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="540" y="150" width="170" height="28" rx="12" fill={SOFT} />
        <text x="625" y="245" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={INK}>Browser</text>
        <path d="M260,195 L540,195" stroke={ORANGE} strokeWidth="2.4" />
        <path d="M526,187 L540,195 L526,203" stroke={ORANGE} strokeWidth="2.4" fill="none" />
        <text x="400" y="182" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={ORANGE}>rendered HTML</text>
        <path d="M260,260 L540,260" stroke={BLUE} strokeWidth="2.4" strokeDasharray="6 5" />
        <path d="M526,252 L540,260 L526,268" stroke={BLUE} strokeWidth="2.4" fill="none" />
        <text x="400" y="288" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={BLUE}>JavaScript + data</text>
      </Canvas>
    );
  }

  if (variant === "archstack") {
    const layers = [
      { label: "CDN / edge cache", c: ORANGE },
      { label: "Frontend + rendering", c: INK },
      { label: "APIs + services", c: BLUE },
      { label: "Database + storage", c: INK },
    ];
    return (
      <Canvas>
        {layers.map((l, i) => (
          <g key={i}>
            <rect x="200" y={70 + i * 80} width="400" height="56" rx="10" fill={i === 1 ? INK : "#ffffff"} stroke={l.c} strokeWidth="2" strokeOpacity={l.c === INK && i !== 1 ? 0.5 : 1} />
            <text x="400" y={104 + i * 80} textAnchor="middle" fontFamily="monospace" fontSize="13" fill={i === 1 ? "#faf9f6" : INK}>{l.label}</text>
            {i < layers.length - 1 && <line x1="400" y1={126 + i * 80} x2="400" y2={150 + i * 80} stroke={LINE} strokeWidth="2" />}
          </g>
        ))}
        <rect x="630" y="70" width="60" height="296" rx="10" fill="none" stroke={INK} strokeOpacity="0.35" strokeWidth="1.6" strokeDasharray="5 5" />
        <text x="660" y="222" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={INK} opacity="0.6" transform="rotate(-90 660 222)">monitoring</text>
      </Canvas>
    );
  }

  if (variant === "navmap") {
    const children = [
      { x: 220, label: 0 },
      { x: 400, label: 1 },
      { x: 580, label: 2 },
    ];
    const grandchildren = [
      [180, 260],
      [360, 440],
      [540, 620],
    ];
    return (
      <Canvas>
        <rect x="340" y="70" width="120" height="36" rx="8" fill={INK} />
        {children.map((c, i) => (
          <g key={i}>
            <path d={`M400,106 L400,140 L${c.x},140 L${c.x},170`} stroke={LINE} strokeWidth="2" fill="none" />
            <rect x={c.x - 55} y="170" width="110" height="32" rx="7" fill="none" stroke={i === 1 ? ORANGE : INK} strokeWidth="2" strokeOpacity={i === 1 ? 1 : 0.45} />
          </g>
        ))}
        {grandchildren.map((pair, ci) =>
          pair.map((gx, gi) => (
            <g key={`${ci}-${gi}`}>
              <path d={`M${children[ci].x},202 L${children[ci].x},225 L${gx},225 L${gx},248`} stroke={LINE} strokeWidth="1.6" fill="none" />
              <rect x={gx - 38} y="248" width="76" height="24" rx="5" fill={SOFT} />
            </g>
          ))
        )}
      </Canvas>
    );
  }

  if (variant === "bounceviz") {
    return (
      <Canvas>
        <rect x="150" y="90" width="260" height="270" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="150" y="90" width="260" height="40" rx="12" fill={INK} />
        <rect x="176" y="150" width="200" height="16" rx="4" fill={LINE} />
        <rect x="176" y="178" width="150" height="16" rx="4" fill={LINE} />
        <rect x="176" y="206" width="180" height="16" rx="4" fill={LINE} />
        <path d="M410,150 C460,150 480,150 520,150" stroke={ORANGE} strokeWidth="2.4" strokeDasharray="6 5" fill="none" />
        <path d="M505,140 L522,150 L505,160" stroke={ORANGE} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[
          { cx: 560, cy: 210 },
          { cx: 630, cy: 250 },
          { cx: 650, cy: 320 },
          { cx: 560, cy: 340 },
        ].map((p, i) => (
          <g key={i}>
            <line x1="522" y1="155" x2={p.cx} y2={p.cy} stroke={LINE} strokeWidth="1.6" />
            <circle cx={p.cx} cy={p.cy} r="9" fill="none" stroke={INK} strokeWidth="2" strokeOpacity="0.5" />
          </g>
        ))}
        <circle cx="522" cy="155" r="6" fill={ORANGE} />
      </Canvas>
    );
  }

  if (variant === "speed") {
    return (
      <Canvas>
        <g stroke={LINE} strokeWidth="2">
          <line x1="60" y1="150" x2="220" y2="150" />
          <line x1="60" y1="180" x2="190" y2="180" />
          <line x1="60" y1="270" x2="220" y2="270" />
          <line x1="60" y1="300" x2="190" y2="300" />
        </g>
        <rect x="260" y="105" width="380" height="240" rx="16" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="260" y="105" width="380" height="38" rx="16" fill={INK} />
        <circle cx="284" cy="124" r="5" fill={SOFT} />
        <circle cx="302" cy="124" r="5" fill={SOFT} />
        <circle cx="320" cy="124" r="5" fill={SOFT} />
        <rect x="288" y="168" width="200" height="16" rx="4" fill={SOFT} />
        <rect x="288" y="196" width="320" height="10" rx="4" fill={SOFT} />
        <rect x="288" y="214" width="280" height="10" rx="4" fill={SOFT} />
        <rect x="288" y="250" width="316" height="60" rx="8" fill="#f3f2ee" />
        <rect x="288" y="250" width="252" height="60" rx="8" fill={BLUE} opacity="0.12" />
        <rect x="288" y="270" width="252" height="10" rx="5" fill={BLUE} />
        <circle cx="612" cy="150" r="30" fill="none" stroke={ORANGE} strokeWidth="3" />
        <path d="M612,150 L612,132 A18,18 0 0 1 626,158 Z" fill={ORANGE} />
      </Canvas>
    );
  }

  if (variant === "automation") {
    return (
      <Canvas>
        <g stroke={LINE} strokeWidth="1.5">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={80 + c * 72} cy={60 + r * 66} r="2" fill={LINE} />
            ))
          )}
        </g>
        {[
          { x: 110, fill: "#ffffff", stroke: INK },
          { x: 290, fill: BLUE, stroke: BLUE },
          { x: 470, fill: "#ffffff", stroke: INK },
          { x: 650, fill: ORANGE, stroke: ORANGE },
        ].map((node, i) => (
          <g key={i}>
            {i > 0 && (
              <line
                x1={node.x - 90}
                y1="225"
                x2={node.x - 40}
                y2="225"
                stroke={INK}
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
            )}
            <rect
              x={node.x - 40}
              y="185"
              width="80"
              height="80"
              rx="14"
              fill={node.fill}
              stroke={node.stroke}
              strokeWidth="2"
            />
          </g>
        ))}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
          </marker>
        </defs>
      </Canvas>
    );
  }

  if (variant === "commerce") {
    return (
      <Canvas>
        {[0, 1].map((row) =>
          [0, 1].map((col) => {
            const active = row === 0 && col === 1;
            return (
              <g key={`${row}-${col}`}>
                <rect
                  x={230 + col * 170}
                  y={90 + row * 170}
                  width="150"
                  height="150"
                  rx="12"
                  fill="#ffffff"
                  stroke={active ? ORANGE : INK}
                  strokeWidth={active ? 3 : 2}
                />
                <rect x={250 + col * 170} y={110 + row * 170} width="110" height="80" rx="6" fill="#f3f2ee" />
                <rect x={250 + col * 170} y={200 + row * 170} width="80" height="10" rx="4" fill={LINE} />
                <rect x={250 + col * 170} y={216 + row * 170} width="50" height="10" rx="4" fill={active ? ORANGE : LINE} />
              </g>
            );
          })
        )}
        <circle cx="612" cy="360" r="34" fill={INK} />
        <path d="M598,352 h28 l-6,20 h-16 z" fill="none" stroke="#faf9f6" strokeWidth="2.5" />
        <circle cx="602" cy="378" r="3" fill="#faf9f6" />
        <circle cx="620" cy="378" r="3" fill="#faf9f6" />
        <circle cx="645" cy="332" r="15" fill={BLUE} />
      </Canvas>
    );
  }

  if (variant === "systems") {
    return (
      <Canvas>
        <rect x="150" y="90" width="500" height="270" rx="14" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="180" y="120" width="60" height="60" rx="10" fill={BLUE} />
        <rect x="256" y="120" width="60" height="60" rx="30" fill={SOFT} stroke={INK} strokeWidth="2" />
        <rect x="332" y="120" width="60" height="60" rx="4" fill={ORANGE} />
        <rect x="408" y="120" width="120" height="60" rx="10" fill="none" stroke={INK} strokeWidth="2" />
        <rect x="180" y="210" width="348" height="14" rx="5" fill={LINE} />
        <rect x="180" y="234" width="260" height="14" rx="5" fill={LINE} />
        <rect x="180" y="270" width="150" height="34" rx="17" fill={INK} />
        <rect x="346" y="270" width="150" height="34" rx="17" fill="none" stroke={INK} strokeWidth="2" />
        <rect x="180" y="320" width="16" height="16" rx="3" fill={BLUE} />
        <rect x="206" y="320" width="16" height="16" rx="3" fill={ORANGE} />
        <rect x="232" y="320" width="16" height="16" rx="3" fill={INK} />
      </Canvas>
    );
  }

  if (variant === "funnel") {
    const stages = [
      { w: 420, fill: BLUE },
      { w: 320, fill: "#ffffff" },
      { w: 220, fill: "#ffffff" },
      { w: 120, fill: ORANGE },
    ];
    return (
      <Canvas>
        {stages.map((s, i) => (
          <rect
            key={i}
            x={400 - s.w / 2}
            y={80 + i * 66}
            width={s.w}
            height="48"
            rx="6"
            fill={s.fill}
            stroke={INK}
            strokeWidth="2"
          />
        ))}
        <line x1="400" y1="128" x2="400" y2="356" stroke={LINE} strokeWidth="2" strokeDasharray="4 6" />
        <text x="640" y="108" fontFamily="monospace" fontSize="16" fill={INK}>
          100%
        </text>
        <text x="640" y="350" fontFamily="monospace" fontSize="16" fill={ORANGE}>
          drop-off
        </text>
      </Canvas>
    );
  }

  if (variant === "storefront") {
    return (
      <Canvas>
        <rect x="150" y="90" width="500" height="270" rx="14" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="150" y="90" width="500" height="46" rx="14" fill={INK} />
        <rect x="176" y="106" width="90" height="14" rx="4" fill="#faf9f6" />
        <circle cx="590" cy="113" r="6" fill={ORANGE} />
        <circle cx="612" cy="113" r="6" fill={SOFT} />
        <rect x="176" y="162" width="140" height="100" rx="8" fill="#f3f2ee" stroke={LINE} strokeWidth="1.5" />
        <rect x="332" y="162" width="140" height="100" rx="8" fill="#f3f2ee" stroke={LINE} strokeWidth="1.5" />
        <rect x="488" y="162" width="140" height="100" rx="8" fill={BLUE} opacity="0.14" stroke={BLUE} strokeWidth="1.5" />
        <rect x="176" y="282" width="90" height="10" rx="4" fill={LINE} />
        <rect x="332" y="282" width="90" height="10" rx="4" fill={LINE} />
        <rect x="488" y="282" width="90" height="10" rx="4" fill={ORANGE} />
        <rect x="176" y="302" width="180" height="30" rx="15" fill={INK} />
      </Canvas>
    );
  }

  if (variant === "ledger") {
    return (
      <Canvas>
        <rect x="240" y="80" width="330" height="290" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="266" y="106" width="160" height="16" rx="4" fill={INK} />
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            <rect x="266" y={150 + row * 44} width="180" height="10" rx="4" fill={LINE} />
            <rect
              x="466"
              y={146 + row * 44}
              width="80"
              height="18"
              rx="4"
              fill={row === 3 ? ORANGE : "none"}
              stroke={row === 3 ? "none" : INK}
              strokeWidth="1.5"
            />
          </g>
        ))}
        <line x1="266" y1="322" x2="546" y2="322" stroke={INK} strokeWidth="2" />
        <circle cx="150" cy="150" r="34" fill="none" stroke={BLUE} strokeWidth="3" />
        <text x="134" y="158" fontFamily="monospace" fontSize="26" fill={BLUE}>
          $
        </text>
      </Canvas>
    );
  }

  if (variant === "roadmap") {
    const steps = [
      { x: 130, active: false },
      { x: 290, active: false },
      { x: 450, active: true },
      { x: 610, active: false },
    ];
    return (
      <Canvas>
        <line x1="130" y1="225" x2="610" y2="225" stroke={LINE} strokeWidth="3" />
        {steps.map((s, i) => (
          <g key={i}>
            <circle cx={s.x} cy="225" r="22" fill={s.active ? ORANGE : "#ffffff"} stroke={INK} strokeWidth="2.5" />
            <text x={s.x} y="232" textAnchor="middle" fontFamily="monospace" fontSize="16" fill={s.active ? "#ffffff" : INK}>
              {i + 1}
            </text>
            <rect x={s.x - 46} y="270" width="92" height="10" rx="4" fill={LINE} />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "fork") {
    return (
      <Canvas>
        <line x1="130" y1="225" x2="330" y2="225" stroke={INK} strokeWidth="3" />
        <path d="M330,225 L560,120" stroke={BLUE} strokeWidth="3" fill="none" />
        <path d="M330,225 L560,330" stroke={ORANGE} strokeWidth="3" fill="none" />
        <rect x="560" y="90" width="160" height="60" rx="10" fill="#ffffff" stroke={BLUE} strokeWidth="2" />
        <rect x="560" y="300" width="160" height="60" rx="10" fill="#ffffff" stroke={ORANGE} strokeWidth="2" />
        <rect x="580" y="110" width="90" height="10" rx="4" fill={BLUE} />
        <rect x="580" y="320" width="90" height="10" rx="4" fill={ORANGE} />
        <circle cx="130" cy="225" r="14" fill={INK} />
      </Canvas>
    );
  }

  if (variant === "appshelf") {
    return (
      <Canvas>
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => {
            const highlight = row === 0 && col === 1;
            return (
              <rect
                key={`${row}-${col}`}
                x={150 + col * 120}
                y={100 + row * 100}
                width="88"
                height="72"
                rx="16"
                fill={highlight ? BLUE : "#ffffff"}
                fillOpacity={highlight ? 0.14 : 1}
                stroke={highlight ? BLUE : INK}
                strokeWidth={highlight ? 2.5 : 1.5}
              />
            );
          })
        )}
        <path d="M600,336 l14,14 l24,-30" stroke={ORANGE} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </Canvas>
    );
  }

  if (variant === "integration") {
    return (
      <Canvas>
        <rect x="120" y="180" width="120" height="90" rx="12" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <text x="180" y="230" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={INK}>
          Store
        </text>
        <circle cx="400" cy="225" r="46" fill={INK} />
        <text x="400" y="231" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#faf9f6">
          API
        </text>
        <rect x="560" y="110" width="120" height="70" rx="10" fill={BLUE} opacity="0.12" stroke={BLUE} strokeWidth="2" />
        <rect x="560" y="270" width="120" height="70" rx="10" fill={ORANGE} opacity="0.12" stroke={ORANGE} strokeWidth="2" />
        <line x1="240" y1="215" x2="356" y2="215" stroke={INK} strokeWidth="2" />
        <line x1="446" y1="205" x2="560" y2="150" stroke={BLUE} strokeWidth="2" />
        <line x1="446" y1="245" x2="560" y2="300" stroke={ORANGE} strokeWidth="2" />
      </Canvas>
    );
  }

  if (variant === "gauge") {
    return (
      <Canvas>
        <path
          d="M280,300 A140,140 0 0 1 560,300"
          fill="none"
          stroke={LINE}
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M280,300 A140,140 0 0 1 470,175"
          fill="none"
          stroke={BLUE}
          strokeWidth="18"
          strokeLinecap="round"
        />
        <line x1="420" y1="300" x2="500" y2="220" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="420" cy="300" r="10" fill={INK} />
        <rect x="150" y="120" width="16" height="16" rx="3" fill={ORANGE} />
        <rect x="150" y="150" width="130" height="10" rx="4" fill={LINE} />
        <rect x="150" y="170" width="90" height="10" rx="4" fill={LINE} />
      </Canvas>
    );
  }

  if (variant === "waterfall") {
    const bars = [
      { w: 60, fill: INK },
      { w: 140, fill: BLUE },
      { w: 90, fill: BLUE },
      { w: 220, fill: ORANGE },
      { w: 60, fill: INK },
    ];
    return (
      <Canvas>
        {bars.map((b, i) => (
          <rect key={i} x="180" y={100 + i * 44} width={b.w} height="22" rx="4" fill={b.fill} />
        ))}
        <line x1="180" y1="90" x2="180" y2="340" stroke={LINE} strokeWidth="2" />
        <line x1="180" y1="340" x2="620" y2="340" stroke={LINE} strokeWidth="2" />
      </Canvas>
    );
  }

  if (variant === "serp") {
    return (
      <Canvas>
        <rect x="150" y="90" width="500" height="46" rx="8" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <circle cx="176" cy="113" r="10" fill={BLUE} />
        <rect x="200" y="106" width="300" height="14" rx="4" fill={LINE} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="150" y={166 + i * 66} width="500" height="50" rx="8" fill={i === 0 ? "#ffffff" : "#f3f2ee"} stroke={i === 0 ? ORANGE : LINE} strokeWidth={i === 0 ? 2 : 1.5} />
            <rect x="172" y={180 + i * 66} width="220" height="10" rx="4" fill={i === 0 ? ORANGE : INK} opacity={i === 0 ? 1 : 0.7} />
            <rect x="172" y={198 + i * 66} width="340" height="8" rx="4" fill={LINE} />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "migrate") {
    return (
      <Canvas>
        <rect x="110" y="150" width="180" height="130" rx="12" fill="#f3f2ee" stroke={LINE} strokeWidth="2" />
        <rect x="140" y="180" width="120" height="12" rx="4" fill={LINE} />
        <rect x="140" y="204" width="80" height="12" rx="4" fill={LINE} />
        <rect x="510" y="150" width="180" height="130" rx="12" fill="#ffffff" stroke={BLUE} strokeWidth="2.5" />
        <rect x="540" y="180" width="120" height="12" rx="4" fill={BLUE} />
        <rect x="540" y="204" width="80" height="12" rx="4" fill={BLUE} opacity="0.5" />
        <path d="M300,215 L500,215" stroke={INK} strokeWidth="3" markerEnd="url(#migrate-arrow)" />
        <text x="400" y="200" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={ORANGE}>
          301
        </text>
        <defs>
          <marker id="migrate-arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill={INK} />
          </marker>
        </defs>
      </Canvas>
    );
  }

  if (variant === "framework") {
    const rows = [true, true, true, false, true];
    return (
      <Canvas>
        <rect x="180" y="80" width="440" height="290" rx="14" fill="#ffffff" stroke={INK} strokeWidth="2" />
        {rows.map((checked, i) => (
          <g key={i}>
            <rect
              x="210"
              y={112 + i * 50}
              width="26"
              height="26"
              rx="6"
              fill={checked ? BLUE : "none"}
              stroke={checked ? BLUE : LINE}
              strokeWidth="2"
            />
            {checked && (
              <path
                d={`M217,${125 + i * 50} l6,7 l12,-14`}
                stroke="#faf9f6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <rect x="252" y={119 + i * 50} width={i === 3 ? 200 : 300} height="12" rx="4" fill={i === 3 ? ORANGE : LINE} opacity={i === 3 ? 0.6 : 1} />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "compare3") {
    const cols = [
      { x: 150, fill: "#ffffff", stroke: INK, h: 200 },
      { x: 340, fill: BLUE, stroke: BLUE, h: 260 },
      { x: 530, fill: ORANGE, stroke: ORANGE, h: 230 },
    ];
    return (
      <Canvas>
        <line x1="120" y1="370" x2="680" y2="370" stroke={INK} strokeWidth="2" />
        {cols.map((c, i) => (
          <g key={i}>
            <rect x={c.x} y={370 - c.h} width="150" height={c.h} rx="10" fill={c.fill} fillOpacity={i === 0 ? 1 : 0.14} stroke={c.stroke} strokeWidth="2" />
            <rect x={c.x + 20} y={390 - c.h} width="80" height="10" rx="4" fill={c.stroke} />
          </g>
        ))}
      </Canvas>
    );
  }

  if (variant === "decisiontree") {
    return (
      <Canvas>
        <circle cx="400" cy="70" r="10" fill={INK} />
        <line x1="400" y1="80" x2="400" y2="120" stroke={LINE} strokeWidth="2" />
        <rect x="320" y="120" width="160" height="42" rx="8" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <line x1="360" y1="162" x2="230" y2="210" stroke={LINE} strokeWidth="2" />
        <line x1="440" y1="162" x2="570" y2="210" stroke={LINE} strokeWidth="2" />
        <rect x="150" y="210" width="160" height="42" rx="8" fill="#ffffff" stroke={LINE} strokeWidth="2" />
        <rect x="490" y="210" width="160" height="42" rx="8" fill={BLUE} opacity="0.14" stroke={BLUE} strokeWidth="2" />
        <line x1="530" y1="252" x2="440" y2="300" stroke={LINE} strokeWidth="2" />
        <line x1="610" y1="252" x2="700" y2="300" stroke={LINE} strokeWidth="2" />
        <rect x="360" y="300" width="160" height="42" rx="8" fill="#ffffff" stroke={LINE} strokeWidth="2" />
        <rect x="600" y="300" width="150" height="42" rx="8" fill={ORANGE} opacity="0.14" stroke={ORANGE} strokeWidth="2" />
      </Canvas>
    );
  }

  if (variant === "appblocks") {
    return (
      <Canvas>
        <rect x="330" y="70" width="140" height="90" rx="12" fill={INK} />
        <text x="400" y="120" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#faf9f6">
          Custom App
        </text>
        <line x1="400" y1="160" x2="400" y2="200" stroke={INK} strokeWidth="2" />
        <rect x="230" y="200" width="150" height="70" rx="10" fill="#ffffff" stroke={BLUE} strokeWidth="2" />
        <rect x="420" y="200" width="150" height="70" rx="10" fill="#ffffff" stroke={BLUE} strokeWidth="2" />
        <text x="305" y="240" textAnchor="middle" fontFamily="monospace" fontSize="12" fill={BLUE}>
          Shopify
        </text>
        <text x="495" y="240" textAnchor="middle" fontFamily="monospace" fontSize="12" fill={BLUE}>
          Admin API
        </text>
        <line x1="330" y1="270" x2="270" y2="320" stroke={LINE} strokeWidth="2" />
        <line x1="470" y1="270" x2="550" y2="320" stroke={LINE} strokeWidth="2" />
        <rect x="190" y="320" width="160" height="60" rx="10" fill={ORANGE} opacity="0.14" stroke={ORANGE} strokeWidth="2" />
        <rect x="470" y="320" width="160" height="60" rx="10" fill={ORANGE} opacity="0.14" stroke={ORANGE} strokeWidth="2" />
      </Canvas>
    );
  }

  if (variant === "hub") {
    const spokes = [
      { x: 190, y: 100 }, { x: 610, y: 100 }, { x: 150, y: 260 },
      { x: 650, y: 260 }, { x: 300, y: 370 }, { x: 500, y: 370 },
    ];
    return (
      <Canvas>
        {spokes.map((s, i) => (
          <g key={i}>
            <line x1="400" y1="225" x2={s.x} y2={s.y} stroke={LINE} strokeWidth="2" />
            <rect x={s.x - 55} y={s.y - 24} width="110" height="48" rx="8" fill="#ffffff" stroke={i % 2 === 0 ? BLUE : ORANGE} strokeWidth="2" />
          </g>
        ))}
        <circle cx="400" cy="225" r="48" fill={INK} />
        <text x="400" y="231" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#faf9f6">
          Shopify
        </text>
      </Canvas>
    );
  }

  if (variant === "tiers") {
    return (
      <Canvas>
        <rect x="180" y="220" width="180" height="130" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="210" y="248" width="120" height="12" rx="4" fill={LINE} />
        <rect x="210" y="272" width="90" height="10" rx="4" fill={LINE} />
        <rect x="210" y="292" width="100" height="10" rx="4" fill={LINE} />
        <rect x="440" y="130" width="180" height="220" rx="10" fill={INK} />
        <rect x="470" y="160" width="120" height="14" rx="4" fill="#faf9f6" />
        <rect x="470" y="188" width="90" height="10" rx="4" fill="#faf9f6" opacity="0.7" />
        <rect x="470" y="208" width="100" height="10" rx="4" fill="#faf9f6" opacity="0.7" />
        <rect x="470" y="228" width="80" height="10" rx="4" fill={ORANGE} />
        <rect x="470" y="248" width="110" height="10" rx="4" fill="#faf9f6" opacity="0.7" />
      </Canvas>
    );
  }

  if (variant === "layers") {
    return (
      <Canvas>
        <rect x="180" y="90" width="440" height="70" rx="10" fill={BLUE} opacity="0.14" stroke={BLUE} strokeWidth="2" />
        <text x="400" y="130" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={BLUE}>
          Custom Frontend
        </text>
        <line x1="400" y1="160" x2="400" y2="195" stroke={INK} strokeWidth="2" strokeDasharray="4 5" />
        <rect x="180" y="195" width="440" height="60" rx="10" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <text x="400" y="230" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={INK}>
          Storefront / Admin API
        </text>
        <line x1="400" y1="255" x2="400" y2="285" stroke={INK} strokeWidth="2" />
        <rect x="180" y="285" width="440" height="70" rx="10" fill={ORANGE} opacity="0.14" stroke={ORANGE} strokeWidth="2" />
        <text x="400" y="325" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={ORANGE}>
          Shopify Commerce Backend
        </text>
      </Canvas>
    );
  }

  if (variant === "salesfunnel") {
    const stages = ["Traffic", "Landing", "Discovery", "Product", "Cart", "Checkout"];
    return (
      <Canvas>
        {stages.map((label, i) => {
          const w = 460 - i * 60;
          return (
            <g key={label}>
              <rect x={400 - w / 2} y={65 + i * 52} width={w} height="38" rx="6" fill={i === stages.length - 1 ? ORANGE : "#ffffff"} stroke={INK} strokeWidth="2" />
              <text x="400" y={89 + i * 52} textAnchor="middle" fontFamily="monospace" fontSize="13" fill={i === stages.length - 1 ? "#ffffff" : INK}>
                {label}
              </text>
            </g>
          );
        })}
      </Canvas>
    );
  }

  if (variant === "dashboard") {
    return (
      <Canvas>
        <rect x="150" y="90" width="500" height="270" rx="14" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <rect x="176" y="116" width="140" height="90" rx="8" fill={BLUE} opacity="0.12" stroke={BLUE} strokeWidth="1.5" />
        <rect x="330" y="116" width="140" height="90" rx="8" fill="#f3f2ee" stroke={LINE} strokeWidth="1.5" />
        <rect x="484" y="116" width="142" height="90" rx="8" fill={ORANGE} opacity="0.12" stroke={ORANGE} strokeWidth="1.5" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={200 + i * 22} y={280 - i * 14} width="14" height={14 + i * 14} rx="3" fill={i === 3 ? ORANGE : BLUE} />
        ))}
        <line x1="176" y1="330" x2="480" y2="330" stroke={LINE} strokeWidth="2" />
        <path d="M500,300 L540,270 L580,285 L620,240" fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
      </Canvas>
    );
  }

  if (variant === "cycle") {
    const n = 8;
    return (
      <Canvas>
        {Array.from({ length: n }).map((_, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
          const cx = 400 + Math.cos(angle) * 140;
          const cy = 225 + Math.sin(angle) * 140;
          return <circle key={i} cx={cx} cy={cy} r={i === 0 ? 14 : 9} fill={i === 0 ? ORANGE : i % 2 === 0 ? BLUE : INK} />;
        })}
        <circle cx="400" cy="225" r="110" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="6 8" />
        <circle cx="400" cy="225" r="34" fill="none" stroke={INK} strokeWidth="2.5" />
      </Canvas>
    );
  }

  // onboarding
  return (
    <Canvas>
      <g stroke={LINE} strokeWidth="2">
        <line x1="100" y1="120" x2="220" y2="120" />
        <line x1="100" y1="150" x2="190" y2="150" />
      </g>
      <rect x="300" y="55" width="200" height="340" rx="28" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
      <rect x="320" y="90" width="160" height="16" rx="5" fill={SOFT} />
      <rect x="320" y="118" width="120" height="10" rx="4" fill={LINE} />
      <rect x="320" y="160" width="160" height="120" rx="10" fill="#f3f2ee" />
      <rect x="320" y="160" width="120" height="120" rx="10" fill={BLUE} opacity="0.15" />
      <circle cx="378" cy="220" r="24" fill={BLUE} />
      <circle cx="372" cy="312" r="5" fill={ORANGE} />
      <circle cx="392" cy="312" r="5" fill={LINE} />
      <circle cx="412" cy="312" r="5" fill={LINE} />
      <rect x="320" y="336" width="160" height="34" rx="17" fill={INK} />
      <line x1="540" y1="130" x2="620" y2="130" stroke={LINE} strokeWidth="2" />
      <line x1="540" y1="160" x2="600" y2="160" stroke={LINE} strokeWidth="2" />
    </Canvas>
  );
}
