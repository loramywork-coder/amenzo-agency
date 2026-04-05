"use client";

import { Check } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    price: "1,000",
    description: "Professional online presence, fast",
    features: [
      "1-5 responsive pages",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form",
      "1-2 week delivery",
    ],
    href: "/start-project",
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "2,000",
    description: "For businesses ready to grow online",
    featured: true,
    features: [
      "5-10 custom pages",
      "Bespoke branded design",
      "Full SEO + 2 languages",
      "Blog or news section",
      "Preview before launch",
      "2-3 week delivery",
    ],
    href: "/start-project",
    cta: "Get a Quote",
  },
  {
    name: "Premium",
    price: "4,000",
    description: "The complete digital transformation",
    features: [
      "10-20 custom pages",
      "Premium design + animations",
      "3+ languages",
      "Galleries, booking forms",
      "Lighthouse 95+ guaranteed",
      "3-4 week delivery",
    ],
    href: "/start-project",
    cta: "Get a Quote",
  },
  {
    name: "Custom",
    price: "5,000",
    suffix: "+",
    description: "E-commerce, platforms, complex builds",
    features: [
      "Unlimited pages",
      "Fully bespoke design",
      "E-commerce with Stripe",
      "Custom integrations",
      "Full demo before launch",
      "4-6 week delivery",
    ],
    href: "/contact",
    cta: "Book a Consultation",
  },
];

export function PricingPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-wide text-center">
        <AnimateIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">
            Investment
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-16">
            From single-page sites to enterprise platforms — a package for every
            budget
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <Link href={tier.href} className="block h-full group">
                {/* Gradient border wrapper for featured card */}
                <div className={tier.featured ? "p-[1px] rounded-xl bg-gradient-to-br from-[#B8923E] via-[#8B6CE0] to-[#6D5BF7] group-hover:-translate-y-2 transition-all duration-500" : ""}>
                <div
                  className={`relative h-full flex flex-col p-8 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    tier.featured
                      ? "bg-[#0A0A0A] shadow-lg shadow-[#6D5BF7]/10"
                      : "bg-surface border border-border group-hover:border-white/15 group-hover:-translate-y-2 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#B8923E] to-[#6D5BF7] rounded-full">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                    {tier.name}
                  </h3>

                  <div className="mb-2">
                    <span className="text-text-muted text-xs">from</span>
                    <span className="font-display text-4xl font-bold text-text-primary ml-2 tabular-nums">
                      €{tier.price}
                    </span>
                    {tier.suffix && (
                      <span className="font-display text-4xl font-bold text-text-primary">
                        {tier.suffix}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-secondary mb-6">
                    {tier.description}
                  </p>

                  <div className="flex-1">
                    <ul className="space-y-3 text-left mb-6">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-text-secondary"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-white/40"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`w-full py-3 text-center text-sm font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 ${
                      tier.featured
                        ? "bg-white text-[#0A0A0A] group-hover:bg-white/90"
                        : "border border-white/15 text-white/70 group-hover:border-white/30 group-hover:text-white/90"
                    }`}
                  >
                    {tier.cta}
                  </div>
                </div>
                {/* Close gradient border wrapper */}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.3}>
          <p className="text-sm text-text-muted">
            Every project includes a free consultation. No commitment required.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
