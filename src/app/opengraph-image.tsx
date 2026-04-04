import { ImageResponse } from "next/og";

export const alt = "Amenzo — Web Design Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          fontFamily: "sans-serif",
        }}
      >
        {/* A mark */}
        <svg viewBox="0 0 32 32" width="140" height="140">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6D5BF7" />
              <stop offset="50%" stopColor="#8B6CE0" />
              <stop offset="100%" stopColor="#B8923E" />
            </linearGradient>
          </defs>
          <polygon
            points="16,3 30,28 2,28"
            fill="none"
            stroke="url(#g)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line
            x1="9"
            y1="19"
            x2="23"
            y2="19"
            stroke="url(#g)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "#F0F0F0",
            marginTop: 32,
          }}
        >
          AMENZO
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#888888",
            marginTop: 16,
            letterSpacing: "0.12em",
          }}
        >
          WHERE CODE MEETS CRAFT
        </div>
      </div>
    ),
    { ...size }
  );
}
