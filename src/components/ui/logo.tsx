"use client";

import { cn } from "@/lib/utils";

/*
 * AMENZO Logo — Clean geometric wordmark
 *
 * The mark is a minimal hexagonal "A" shape — represents precision,
 * technology, and structure. Clean lines, no clutter.
 *
 * The wordmark "AMENZO" uses custom letter-spacing for a sleek feel.
 */

function LogoMark({
  color = "currentColor",
  gradient = false,
  id = "m",
  size = 28,
}: {
  color?: string;
  gradient?: boolean;
  id?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {gradient && (
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      )}
      {/* Hexagonal A — clean geometric paths */}
      <path
        d="M14 2L25 8V20L14 26L3 20V8L14 2Z"
        stroke={gradient ? `url(#g-${id})` : color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M14 8L9 18H11.5L12.5 15.5H15.5L16.5 18H19L14 8ZM13.2 13.5L14 11.5L14.8 13.5H13.2Z"
        fill={gradient ? `url(#g-${id})` : color}
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Logo({
  className,
  variant = "full",
  color = "white",
  showGradientAccent = true,
}: {
  className?: string;
  variant?: "full" | "icon" | "wordmark";
  color?: "white" | "dark";
  showGradientAccent?: boolean;
}) {
  const fillColor = color === "white" ? "#F0F0F0" : "#0A0A0A";

  if (variant === "icon") {
    return <LogoMark color={fillColor} gradient={showGradientAccent} id="icon" />;
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark
        color={fillColor}
        gradient={showGradientAccent}
        id="full"
        size={26}
      />
      <span
        className="font-display text-[16px] font-bold tracking-[0.18em] text-text-primary"
        style={{ color: fillColor }}
      >
        AMENZO
      </span>
    </div>
  );
}
