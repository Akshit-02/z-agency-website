import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const TOP_BAR = "M24,24 L76,24 L76,34 L24,34 Z";
const DIAGONAL = "M70,34 L73.75,38.69 L39.61,66 L30,66 L26.25,61.31 L60.39,34 Z";
const BOTTOM_BAR = "M24,66 L76,66 L76,76 L24,76 Z";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b0c0e",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d={TOP_BAR} fill="#faf9f6" />
          <path d={DIAGONAL} fill="#faf9f6" />
          <path d={BOTTOM_BAR} fill="#faf9f6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
