import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BADGE = "M20,0 L74,0 L100,26 L100,80 Q100,100 80,100 L20,100 Q0,100 0,80 L0,20 Q0,0 20,0 Z";
const TOP_BAR = "M24,24 L76,24 L76,34 L24,34 Z";
const DIAGONAL = "M70,34 L73.75,38.69 L39.61,66 L30,66 L26.25,61.31 L60.39,34 Z";
const BOTTOM_BAR = "M24,66 L76,66 L76,76 L24,76 Z";

export default function OpengraphImage() {
  return new ImageResponse(
    (
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="52" height="52" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d={BADGE} fill="#0b0c0e" />
            <path d={TOP_BAR} fill="#faf9f6" />
            <path d={DIAGONAL} fill="#faf9f6" />
            <path d={BOTTOM_BAR} fill="#faf9f6" />
          </svg>
          <span style={{ fontSize: 30, fontWeight: 600, color: "#0b0c0e" }}>Space</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.12,
              color: "#0b0c0e",
              maxWidth: 980,
            }}
          >
            We build digital products that move businesses forward.
          </div>
          <div style={{ fontSize: 26, color: "#4a4d52", maxWidth: 820 }}>{site.tagline}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
