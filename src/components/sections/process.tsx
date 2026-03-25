"use client";

import Image from "next/image";
import { Search, Target, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We deep-dive into your business, your customers, and your goals. No assumptions.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We define the sitemap, features, technology, and timeline. You approve before we start.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&q=80",
  },
  {
    number: "03",
    title: "Design",
    description: "We create high-fidelity mockups you'll want to frame. Revisions until you love it.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
  },
  {
    number: "04",
    title: "Development",
    description: "Hand-crafted code. Every page, every interaction, every responsive breakpoint. Tested obsessively.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy to blazing-fast hosting, verify everything works, and hand you the keys.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    number: "06",
    title: "Growth",
    description: "Ongoing maintenance, SEO, and performance optimisation. We're your digital partner.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-[#0F0F0F]">
      <div className="container-wide">
        <SectionHeader
          caption="HOW WE WORK"
          title="From Brief to Launch in Weeks, Not Months"
          subtitle="Six steps from idea to impact"
        />

        {/* Horizontal scroll on desktop, vertical on mobile */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimateIn key={step.number} delay={index * 0.08}>
                <div className="shrink-0 w-[280px] lg:w-auto snap-start bg-surface border border-border rounded-xl overflow-hidden hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-[400ms]">
                  {/* Step image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="font-display text-[32px] font-bold gradient-text leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  {/* Step content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center">
                        <Icon size={16} className="text-violet" />
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
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
