"use client";

import { Counter, AnimateIn } from "@/components/ui/motion";
import { Layers, Heart, Star, TrendingUp, Languages } from "lucide-react";

const stats = [
  { target: 150, suffix: "+", label: "Projects Delivered", icon: Layers },
  { target: 50, suffix: "+", label: "Happy Clients", icon: Heart },
  { target: 98, suffix: "%", label: "Client Satisfaction", icon: Star },
  { target: 3, suffix: "x", label: "Avg. Traffic Increase", icon: TrendingUp },
  { target: 12, suffix: "+", label: "Languages Available", icon: Languages },
];

export function StatsSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-bg/40" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container-wide">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimateIn key={stat.label} delay={index * 0.1} className="text-center">
                <div className="mb-4 flex justify-center">
                  <Icon size={24} className="text-violet" />
                </div>
                <div className="font-display text-[48px] md:text-[56px] font-bold text-white tracking-[-0.02em] leading-none mb-3" style={{ fontVariantNumeric: "tabular-nums" }}>
                  <Counter target={stat.target} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-[13px] uppercase tracking-[0.15em] text-text-secondary">
                  {stat.label}
                </p>
              </AnimateIn>
            );
          })}
        </div>
        <p className="text-center text-[11px] italic text-white/20 mt-10">
          Figures represent projected and illustrative metrics.
        </p>
      </div>
    </section>
  );
}
