import type { IndustryAccent, IndustryVisual } from "@/lib/industries-data";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 220 160" className="h-full w-full" aria-hidden="true">
      <rect x="0.5" y="0.5" width="219" height="159" rx="14" fill="#0b0c0e" />
      {children}
    </svg>
  );
}

export function IndustryGlyph({
  visual = "rows",
  accent = "blue",
}: {
  visual?: IndustryVisual;
  accent?: IndustryAccent;
}) {
  const a = accent === "blue" ? "#3b82f6" : "#ff6b35";
  const soft = "rgba(250,249,246,0.14)";
  const mid = "rgba(250,249,246,0.34)";

  if (visual === "rows") {
    return (
      <Frame>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="24" y={28 + i * 36} width="120" height="22" rx="5" fill={i === 0 ? mid : soft} />
            <rect x="150" y={28 + i * 36} width="46" height="22" rx="5" fill={soft} />
          </g>
        ))}
        <circle cx="184" cy="39" r="6" fill={a} />
      </Frame>
    );
  }

  if (visual === "grid") {
    return (
      <Frame>
        {[0, 1].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={24 + col * 60}
              y={26 + row * 58}
              width="48"
              height="48"
              rx="7"
              fill={row === 0 && col === 1 ? a : soft}
            />
          ))
        )}
      </Frame>
    );
  }

  if (visual === "shelf") {
    const heights = [70, 46, 86, 34, 60];
    return (
      <Frame>
        {heights.map((h, i) => (
          <rect
            key={i}
            x={26 + i * 34}
            y={122 - h}
            width="20"
            height={h}
            rx="8"
            fill={i === 2 ? a : soft}
          />
        ))}
      </Frame>
    );
  }

  if (visual === "bars") {
    const heights = [34, 52, 40, 68, 58, 80];
    return (
      <Frame>
        <polyline
          points={heights.map((h, i) => `${34 + i * 28},${128 - h}`).join(" ")}
          fill="none"
          stroke={a}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {heights.map((h, i) => (
          <rect key={i} x={26 + i * 28} y={128 - h} width="16" height={h} rx="3" fill={soft} />
        ))}
      </Frame>
    );
  }

  if (visual === "lines") {
    const widths = [150, 110, 130, 70, 100];
    return (
      <Frame>
        {widths.map((w, i) => (
          <rect key={i} x="26" y={30 + i * 20} width={w} height="10" rx="4" fill={i === 3 ? a : soft} />
        ))}
        <rect x={26 + widths[widths.length - 1] + 8} y={30 + 4 * 20} width="8" height="10" rx="1" fill={a} />
      </Frame>
    );
  }

  if (visual === "funnel") {
    const widths = [176, 142, 108, 74];
    return (
      <Frame>
        {widths.map((w, i) => (
          <rect
            key={i}
            x={110 - w / 2}
            y={26 + i * 26}
            width={w}
            height="18"
            rx="4"
            fill={i === widths.length - 1 ? a : soft}
          />
        ))}
      </Frame>
    );
  }

  if (visual === "phone") {
    return (
      <Frame>
        <rect x="78" y="18" width="64" height="124" rx="12" fill="none" stroke={mid} strokeWidth="2" />
        <rect x="88" y="30" width="44" height="8" rx="3" fill={soft} />
        <rect x="88" y="46" width="44" height="34" rx="6" fill={soft} />
        <circle cx="100" cy="98" r="3.5" fill={a} />
        <circle cx="110" cy="98" r="3.5" fill={mid} />
        <circle cx="120" cy="98" r="3.5" fill={mid} />
        <rect x="88" y="114" width="44" height="14" rx="7" fill={a} />
      </Frame>
    );
  }

  // pulse
  return (
    <Frame>
      <rect x="24" y="30" width="172" height="26" rx="6" fill={soft} />
      <circle cx="42" cy="43" r="6" fill={a} />
      <polyline
        points="60,86 84,86 96,62 112,110 128,86 172,86"
        fill="none"
        stroke={a}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="24" y="118" width="90" height="18" rx="5" fill={soft} />
    </Frame>
  );
}
