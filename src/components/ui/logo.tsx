"use client";

import { cn } from "@/lib/utils";

function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size }}
      className={className}
      aria-hidden="true"
    >
      <path d="M256 80 L420 400 L380 400 L256 140 L132 400 L92 400 Z" fill="white" opacity="0.9" />
      <path d="M256 160 L380 400 L345 400 L256 210 L167 400 L132 400 Z" fill="white" opacity="0.6" />
      <path d="M256 230 L345 400 L310 400 L256 280 L202 400 L167 400 Z" fill="white" opacity="0.35" />
    </svg>
  );
}

export function Logo({
  className,
  variant = "full",
  color = "white",
}: {
  className?: string;
  variant?: "full" | "icon" | "wordmark";
  color?: "white" | "dark";
  showGradientAccent?: boolean;
}) {
  const fillColor = color === "white" ? "#F0F0F0" : "#0A0A0A";

  if (variant === "icon") {
    return <LogoMark size={28} />;
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={32} />
      <span
        className="font-display text-[18px] font-bold tracking-[0.25em] uppercase"
        style={{ color: fillColor }}
      >
        AMENZO
      </span>
    </div>
  );
}
