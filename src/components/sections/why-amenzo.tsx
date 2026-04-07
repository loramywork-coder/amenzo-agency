"use client";

import { Code2, Zap, Key } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const cards = [
  {
    icon: Code2,
    title: "Custom Code, Not Templates",
    text: "Every site is hand-built with Next.js and React. No WordPress themes, no page builders, no shared designs. Your site is yours alone.",
    color: "#06B6D4",
  },
  {
    icon: Zap,
    title: "Delivered in Weeks",
    text: "What takes traditional agencies months, we deliver in 1–4 weeks. You get a preview link before launch — no surprises.",
    color: "#7C3AED",
  },
  {
    icon: Key,
    title: "You Own Everything",
    text: "Full source code handover, no vendor lock-in, no platform dependencies. Your website belongs to you. Host it anywhere.",
    color: "#22C55E",
  },
];

export function WhyAmenzo() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <AnimateIn>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-14">
            Why businesses choose us
          </h2>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="rounded-xl border border-[#222] bg-[#111]/60 p-6 md:p-8 h-full backdrop-blur-sm">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: `${card.color}15` }}
                >
                  <card.icon size={20} style={{ color: card.color }} />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
