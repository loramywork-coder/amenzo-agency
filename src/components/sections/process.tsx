"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Target,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, your customers, and your goals. Deep research before a single pixel is placed.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the sitemap, features, and technical approach. Every decision is intentional.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create stunning mockups you\u2019ll want to frame. Iterative, collaborative, pixel-perfect.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build with clean, fast, scalable code. No shortcuts, no bloat, no technical debt.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy, test, and go live \u2014 seamlessly. Monitoring from day one.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth",
    description:
      "We optimise, maintain, and help you scale. Launch is just the beginning.",
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    ["0%", "100%"]
  );

  return (
    <section ref={containerRef} className="section-padding bg-bg">
      <div className="container-wide">
        <SectionHeader
          caption="HOW WE WORK"
          title="Our Process"
          subtitle="Six steps from idea to impact"
        />

        {/* Progress line (desktop) */}
        <div className="hidden md:block relative h-1 bg-border rounded-full mb-16 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: progressWidth,
              background:
                "linear-gradient(90deg, #7C3AED, #06B6D4)",
            }}
          />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimateIn
                key={step.number}
                delay={index * 0.1}
                className="group"
              >
                <div className="p-8 rounded-xl bg-surface border border-border hover:border-violet/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-display text-4xl font-bold gradient-text">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
                      <Icon
                        size={20}
                        className="text-violet"
                      />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
