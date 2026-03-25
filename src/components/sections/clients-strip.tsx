"use client";

import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const clients = [
  "Grand Harbour Hotel",
  "Porto Valletta",
  "MaltaLiving",
  "FitZone",
  "Swiss Health Alliance",
  "Sengha",
  "Olive & Stone",
  "CyberShield",
  "MediterraBank",
  "IslandTech",
];

export function ClientsStrip() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="container-wide">
        <AnimateIn animation="fadeIn">
          <p className="caption text-center mb-10">Trusted By</p>
        </AnimateIn>
        <StaggerContainer
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          staggerDelay={0.05}
        >
          {clients.map((client) => (
            <StaggerItem key={client}>
              <span className="text-lg font-display font-semibold text-text-muted/40 hover:text-text-muted/70 transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
