export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BADGE = "M20,0 L74,0 L100,26 L100,80 Q100,100 80,100 L20,100 Q0,100 0,80 L0,20 Q0,0 20,0 Z";
const TOP_BAR = "M24,24 L76,24 L76,34 L24,34 Z";
const DIAGONAL = "M70,34 L73.75,38.69 L39.61,66 L30,66 L26.25,61.31 L60.39,34 Z";
const BOTTOM_BAR = "M24,66 L76,66 L76,76 L24,76 Z";

export function OgBadge() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <svg width="52" height="52" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d={BADGE} fill="#0b0c0e" />
        <path d={TOP_BAR} fill="#faf9f6" />
        <path d={DIAGONAL} fill="#faf9f6" />
        <path d={BOTTOM_BAR} fill="#faf9f6" />
      </svg>
      <span style={{ fontSize: 30, fontWeight: 600, color: "#0b0c0e" }}>Space</span>
    </div>
  );
}

export function OgPage({
  eyebrow,
  eyebrowColor,
  title,
  description,
}: {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#faf9f6",
        padding: 80,
      }}
    >
      <OgBadge />
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: eyebrowColor }} />
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: eyebrowColor,
            }}
          >
            {eyebrow}
          </span>
        </div>
        <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.15, color: "#0b0c0e", maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ fontSize: 24, color: "#4a4d52", maxWidth: 860 }}>{description}</div>
      </div>
    </div>
  );
}
