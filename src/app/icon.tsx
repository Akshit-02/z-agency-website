import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const BADGE = "M20,0 L74,0 L100,26 L100,80 Q100,100 80,100 L20,100 Q0,100 0,80 L0,20 Q0,0 20,0 Z";
const TOP_BAR = "M24,24 L76,24 L76,34 L24,34 Z";
const DIAGONAL = "M70,34 L73.75,38.69 L39.61,66 L30,66 L26.25,61.31 L60.39,34 Z";
const BOTTOM_BAR = "M24,66 L76,66 L76,76 L24,76 Z";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d={BADGE} fill="#0b0c0e" />
        <path d={TOP_BAR} fill="#faf9f6" />
        <path d={DIAGONAL} fill="#faf9f6" />
        <path d={BOTTOM_BAR} fill="#faf9f6" />
      </svg>
    ),
    { ...size }
  );
}
