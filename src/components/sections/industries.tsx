"use client";

import Link from "next/link";
import {
  Building,
  UtensilsCrossed,
  Home,
  ShoppingCart,
  Heart,
  Globe,
  Briefcase,
  Dumbbell,
  GraduationCap,
  Cpu,
  Wrench,
  Landmark,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Building,
  UtensilsCrossed,
  Home,
  ShoppingCart,
  Heart,
  Globe,
  Briefcase,
  Dumbbell,
  GraduationCap,
  Cpu,
  Wrench,
  Landmark,
};

export function IndustriesSection() {
  return (
    <Section>
      <SectionHeader
        caption="WHO WE WORK WITH"
        title="Every Industry. Every Scale."
        subtitle="We design for businesses of all kinds"
      />

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {INDUSTRIES.map((industry) => {
          const Icon = iconMap[industry.icon] || Globe;
          return (
            <StaggerItem key={industry.name}>
              <Link
                href={`/work`}
                className="group block p-6 rounded-xl bg-surface border border-border hover:border-violet/30 hover:bg-surface-elevated transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center mb-4 group-hover:bg-violet/20 transition-colors">
                  <Icon
                    size={20}
                    className="text-violet"
                  />
                </div>
                <h3 className="font-display text-sm font-semibold text-text-primary mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {industry.desc}
                </p>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
