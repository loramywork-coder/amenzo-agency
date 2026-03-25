"use client";

import { AnimateIn } from "@/components/ui/motion";

// Simple SVG text logotypes — each with distinctive styling
function ClientLogo({ name, style }: { name: string; style: "serif" | "sans" | "bold" | "light" | "mono" }) {
  const fontMap = {
    serif: "font-[Georgia,serif] italic",
    sans: "font-display",
    bold: "font-display font-extrabold tracking-tighter",
    light: "font-display font-light tracking-[0.2em] uppercase text-[13px]",
    mono: "font-mono text-[13px] tracking-wider",
  };

  return (
    <span
      className={`${fontMap[style]} text-white opacity-[0.4] hover:opacity-[0.8] transition-opacity duration-300 whitespace-nowrap select-none`}
      style={{ fontSize: style === "light" || style === "mono" ? undefined : "18px" }}
    >
      {name}
    </span>
  );
}

const clients = [
  { name: "Grand Harbour Hotel", style: "serif" as const },
  { name: "Porto Valletta", style: "serif" as const },
  { name: "MaltaLiving", style: "bold" as const },
  { name: "FitZone", style: "bold" as const },
  { name: "Swiss Health Alliance", style: "light" as const },
  { name: "SENGHA", style: "light" as const },
  { name: "Olive & Stone", style: "serif" as const },
  { name: "CyberShield", style: "mono" as const },
  { name: "MFG", style: "sans" as const },
  { name: "Bloom", style: "serif" as const },
];

export function ClientsStrip() {
  return (
    <section className="py-20 bg-bg">
      <div className="container-wide">
        <AnimateIn animation="fadeIn">
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted text-center mb-12">
            Trusted by leading businesses across Malta
          </p>
        </AnimateIn>
        <AnimateIn animation="fadeIn" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {clients.map((client) => (
              <ClientLogo key={client.name} name={client.name} style={client.style} />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
