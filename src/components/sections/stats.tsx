"use client";

import { Counter, AnimateIn } from "@/components/ui/motion";

const stats = [
  { target: 150, suffix: "+", label: "Projects Delivered" },
  { target: 50, suffix: "+", label: "Happy Clients" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 3, suffix: "x", label: "Average Traffic Increase" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimateIn
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <p className="text-white/70 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5} className="text-center mt-16">
          <p className="font-display text-xl md:text-2xl text-white/90 font-medium">
            We don&apos;t just build websites. We build businesses.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
