"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Essential",
    price: "1,500",
    description: "Perfect for startups and small businesses",
  },
  {
    name: "Professional",
    price: "5,000",
    description: "For growing businesses that need more",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "15,000+",
    description: "Custom solutions at scale",
  },
];

export function PricingPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-wide text-center">
        <AnimateIn>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-16">
            From single-page sites to enterprise platforms — we have a
            package for every budget
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative p-8 bg-surface border border-border rounded-lg hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  tier.featured
                    ? "border-violet/50 shadow-lg shadow-violet/10"
                    : ""
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-violet to-cyan rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-text-muted text-sm">from</span>
                  <span className="font-display text-3xl font-bold text-text-primary ml-2">
                    EUR {tier.price}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  {tier.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/pricing" variant="outline" magnetic>
              View All Packages
              <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="ghost">
              Book a free consultation
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
