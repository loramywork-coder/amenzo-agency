"use client";

import { Search, Target, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section";
import { GradientDefs } from "@/components/ui/gradient-defs";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We deep-dive into your business, your customers, and your goals. No assumptions.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description: "We define the sitemap, features, technology, and timeline. You approve before we start.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design",
    description: "We create high-fidelity mockups you'll want to frame. Revisions until you love it.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Development",
    description: "Hand-crafted code. Every page, every interaction, every responsive breakpoint. Tested obsessively.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy to blazing-fast hosting, verify everything works, and hand you the keys.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth",
    description: "Ongoing maintenance, SEO, and performance optimisation. We're your digital partner.",
    icon: TrendingUp,
  },
];

// Each step gets a unique color for its radial glow
const STEP_COLORS = [
  { glow: "rgba(124,58,237,0.18)", fade: "rgba(124,58,237,0.04)", text: "#7C3AED" },   // Discovery — violet
  { glow: "rgba(6,182,212,0.18)", fade: "rgba(6,182,212,0.04)", text: "#06B6D4" },      // Strategy — cyan
  { glow: "rgba(245,158,11,0.16)", fade: "rgba(245,158,11,0.03)", text: "#F59E0B" },    // Design — amber
  { glow: "rgba(34,197,94,0.16)", fade: "rgba(34,197,94,0.03)", text: "#22C55E" },      // Development — green
  { glow: "rgba(249,112,104,0.16)", fade: "rgba(249,112,104,0.03)", text: "#F97068" },  // Launch — coral
  { glow: "rgba(99,102,241,0.18)", fade: "rgba(99,102,241,0.04)", text: "#6366F1" },    // Growth — indigo
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-[#0A0A0A]/50">
      <div className="container-wide">
        <GradientDefs />
        <SectionHeader
          caption="PROCESS"
          title="Six steps. Zero surprises."
          subtitle="Transparent from kickoff to launch day."
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const color = STEP_COLORS[index];
            return (
              <StaggerItem key={step.number}>
                <div className="glow-border rounded-xl overflow-hidden bg-surface border border-border hover:border-border-hover transition-all duration-500 group">
                  {/* Color-coded radial glow top */}
                  <div
                    className="relative h-40 flex items-center justify-center overflow-hidden"
                    style={{
                      background: `radial-gradient(ellipse at 50% 80%, ${color.glow} 0%, ${color.fade} 50%, transparent 80%)`,
                    }}
                  >
                    <span
                      className="relative font-display text-[72px] font-bold select-none opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500"
                      style={{ color: color.text }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: `${color.text}15` }}
                      >
                        <Icon
                          size={16}
                          style={{ color: color.text }}
                        />
                      </div>
                      <h3 className="font-display text-[18px] font-semibold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[15px] text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
