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
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
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
              <div className="font-display text-[56px] md:text-[56px] font-bold text-text-primary mb-3">
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={1.5}
                />
              </div>
              <p className="text-[13px] uppercase tracking-[0.15em] text-text-secondary font-medium">
                {stat.label}
              </p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5} className="text-center mt-16">
          <p className="font-display text-xl md:text-2xl text-text-body font-medium">
            We don&apos;t just build websites. We build businesses.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
