"use client";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "icon" | "wordmark";
}) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-10 h-10", className)}
      >
        <rect
          width="40"
          height="40"
          rx="8"
          fill="url(#logo-gradient)"
        />
        <path
          d="M12 28L20 12L28 28H24L20 20L16 28H12Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "wordmark") {
    return (
      <span
        className={cn(
          "font-display text-2xl font-bold tracking-tight",
          className
        )}
      >
        AMENZO
      </span>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9"
      >
        <rect
          width="40"
          height="40"
          rx="8"
          fill="url(#logo-gradient-full)"
        />
        <path
          d="M12 28L20 12L28 28H24L20 20L16 28H12Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="logo-gradient-full"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={cn(
          "font-display text-xl font-bold tracking-tight text-text-primary"
        )}
      >
        AMENZO
      </span>
    </div>
  );
}
