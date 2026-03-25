"use client";

import { cn } from "@/lib/utils";

/*
 * AMENZO Logo — "The Cut A" wordmark
 *
 * Hand-crafted SVG paths. The "A" has a geometric triangle form with
 * the crossbar replaced by a horizontal gap/cut — the signature mark.
 * Letters are geometric sans-serif at weight ~600.
 *
 * The standalone "A" icon works as favicon and app icon.
 *
 * viewBox: 0 0 220 32 (full wordmark)
 * viewBox: 0 0 32 32 (icon mark)
 */

// The "Cut A" icon mark — geometric A with gap instead of crossbar
function IconMark({
  color = "currentColor",
  gradient = false,
  id = "icon",
}: {
  color?: string;
  gradient?: boolean;
  id?: string;
}) {
  return (
    <>
      {gradient && (
        <defs>
          <linearGradient
            id={`grad-${id}`}
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      )}
      {/* Geometric A with cut — two triangular legs with a horizontal gap */}
      <path
        d="M16 2L4 30H9.5L13.2 21.5H18.8L22.5 30H28L16 2ZM14.5 17.5L16 14L17.5 17.5H14.5Z"
        fill={gradient ? `url(#grad-${id})` : color}
        fillRule="evenodd"
      />
    </>
  );
}

// Full "AMENZO" wordmark as SVG paths
function WordmarkPaths({
  color = "currentColor",
  accentGradient = false,
  id = "wm",
}: {
  color?: string;
  accentGradient?: boolean;
  id?: string;
}) {
  return (
    <>
      {accentGradient && (
        <defs>
          <linearGradient
            id={`wm-grad-${id}`}
            x1="0"
            y1="0"
            x2="40"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      )}
      {/* A — Cut A with gap */}
      <path
        d="M15.5 4L3 30H8.2L11.6 22H19.4L22.8 30H28L15.5 4ZM13 18.2L15.5 12.4L18 18.2H13Z"
        fill={accentGradient ? `url(#wm-grad-${id})` : color}
        fillRule="evenodd"
      />
      {/* M */}
      <path
        d="M36 30V4H41.2L50 18.8L58.8 4H64V30H59.2V13.2L51.2 26.6H48.8L40.8 13.2V30H36Z"
        fill={color}
      />
      {/* E */}
      <path
        d="M72 30V4H92V8.4H76.8V14.6H90V19H76.8V25.6H92V30H72Z"
        fill={color}
      />
      {/* N */}
      <path
        d="M100 30V4H105L120 22V4H124.8V30H120L105 12V30H100Z"
        fill={color}
      />
      {/* Z */}
      <path
        d="M132 30V26.2L148.4 8.4H132.8V4H154V7.8L137.6 25.6H154V30H132Z"
        fill={color}
      />
      {/* O */}
      <path
        d="M170 4C161.6 4 156 10.4 156 17C156 23.6 161.6 30 170 30C178.4 30 184 23.6 184 17C184 10.4 178.4 4 170 4ZM170 8.4C175.6 8.4 179.2 12.2 179.2 17C179.2 21.8 175.6 25.6 170 25.6C164.4 25.6 160.8 21.8 160.8 17C160.8 12.2 164.4 8.4 170 8.4Z"
        fill={color}
        fillRule="evenodd"
      />
    </>
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
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-8 h-8", className)}
        aria-label="AMENZO"
      >
        <IconMark
          color={fillColor}
          gradient={showGradientAccent}
          id="logo-icon"
        />
      </svg>
    );
  }

  if (variant === "wordmark") {
    return (
      <svg
        viewBox="0 0 188 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-6", className)}
        aria-label="AMENZO"
      >
        <WordmarkPaths
          color={fillColor}
          accentGradient={showGradientAccent}
          id="logo-wordmark"
        />
      </svg>
    );
  }

  // Full logo: icon + wordmark
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 shrink-0"
        aria-label="AMENZO icon"
      >
        <IconMark
          color={fillColor}
          gradient={showGradientAccent}
          id="logo-full-icon"
        />
      </svg>
      <svg
        viewBox="0 0 188 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5"
        aria-label="AMENZO"
      >
        <WordmarkPaths
          color={fillColor}
          accentGradient={showGradientAccent}
          id="logo-full-wm"
        />
      </svg>
    </div>
  );
}

// Favicon component — gradient background with white icon
export function LogoFavicon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="fav-grad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#fav-grad)" />
      <path
        d="M16 5L6 27H10.2L13 21H19L21.8 27H26L16 5ZM14.2 17.5L16 13.2L17.8 17.5H14.2Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}
