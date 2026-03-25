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
    <section className="py-16 bg-bg">
      <div className="container-wide">
        <AnimateIn animation="fadeIn">
          <p className="text-[11px] uppercase tracking-[0.15em] text-text-muted text-center mb-10">TRUSTED BY LEADING BUSINESSES ACROSS MALTA</p>
        </AnimateIn>
        <StaggerContainer
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          staggerDelay={0.05}
        >
          {clients.map((client) => (
            <StaggerItem key={client}>
              <span className="text-lg font-display font-semibold text-text-primary opacity-40 hover:opacity-80 transition-opacity duration-300 whitespace-nowrap h-10 flex items-center">
                {client}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
