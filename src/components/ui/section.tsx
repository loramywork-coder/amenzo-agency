import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Section({
  children,
  className,
  dark = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "bg-bg" : "bg-light-bg text-[#0A0A0A]",
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}

export function SectionHeader({
  caption,
  title,
  subtitle,
  className,
  align = "left",
  dark = true,
}: {
  caption?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {caption && (
        <p className="caption mb-4 text-violet">{caption}</p>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl font-bold leading-tight",
          dark ? "text-text-primary" : "text-[#0A0A0A]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl",
            dark ? "text-text-secondary" : "text-[#666666]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
