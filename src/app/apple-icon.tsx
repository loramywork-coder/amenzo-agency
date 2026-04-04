import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, display: "flex", alignItems: "center", justifyContent: "center", background: "#030303", borderRadius: 36 }}>
        <svg viewBox="0 0 512 512" width="100" height="100">
          <path d="M256 80 L420 400 L380 400 L256 140 L132 400 L92 400 Z" fill="white" opacity="0.9" />
          <path d="M256 160 L380 400 L345 400 L256 210 L167 400 L132 400 Z" fill="white" opacity="0.6" />
          <path d="M256 230 L345 400 L310 400 L256 280 L202 400 L167 400 Z" fill="white" opacity="0.35" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
