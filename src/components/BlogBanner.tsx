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
  | "cycle";

const INK = "#0b0c0e";
const LINE = "#d3d0c8";
const SOFT = "#eceae4";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";

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
