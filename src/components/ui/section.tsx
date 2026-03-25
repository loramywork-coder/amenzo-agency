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
        dark ? "bg-bg/50" : "bg-light-bg text-[#0A0A0A]",
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
        "mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {caption && (
        <p className="text-[11px] uppercase tracking-[0.15em] text-text-muted mb-5">
          {caption}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[36px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.08] max-w-[800px]",
          align === "center" && "mx-auto",
          dark ? "text-text-primary" : "text-[#0A0A0A]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-[17px] max-w-[640px] leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-text-secondary" : "text-[#666666]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
