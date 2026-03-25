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
                className="group block p-6 bg-surface border border-border rounded-lg hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-4">
                  <Icon
                    size={20}
                    className="text-violet"
                  />
                </div>
                <h3 className="font-display text-[13px] font-semibold text-text-primary mb-1">
                  {industry.name}
                </h3>
                <p className="text-[12px] text-text-muted leading-relaxed">
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
