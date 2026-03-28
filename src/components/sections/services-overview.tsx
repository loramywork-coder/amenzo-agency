"use client";

import Link from "next/link";
import { ArrowRight, Code2, RefreshCw, ShoppingCart, Palette, TrendingUp, Shield } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GradientDefs } from "@/components/ui/gradient-defs";

const services = [
  {
    title: "Branding & Identity",
    description:
      "Logos, colour systems, typography, brand guidelines — the foundation everything else is built on.",
    price: "800",
    icon: Palette,
    href: "/services",
  },
  {
    title: "Web Design & Development",
    description:
      "Custom websites built from scratch. No templates. No WordPress themes. Hand-crafted code that performs, converts, and scales.",
    price: "750",
    icon: Code2,
    href: "/services",
  },
  {
    title: "Website Redesign",
    description:
      "Your current site not cutting it? We take what you have and transform it into something extraordinary. Zero downtime migration.",
    price: "750",
    icon: RefreshCw,
    href: "/services",
  },
  {
    title: "E-Commerce",
    description:
      "Online stores that convert. Beautiful product pages, seamless checkout, inventory management — built to sell.",
    price: "4,000",
    icon: ShoppingCart,
    href: "/services",
  },
  {
    title: "SEO & Performance",
    description:
      "Beautiful means nothing if nobody finds it. We build fast, accessible, and search-engine-optimised from day one.",
    price: "300/mo",
    icon: TrendingUp,
    href: "/services",
  },
  {
    title: "Hosting & Maintenance",
    description:
      "Launch is just the beginning. We keep your site fast, secure, updated, and backed up. Zero downtime.",
    price: "80/mo",
    icon: Shield,
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <Section>
      <GradientDefs />
      <SectionHeader
        caption="SERVICES"
        title="Everything you need. Nothing you don't."
        subtitle="Design. Code. Launch. Grow. We handle the entire stack."
      />

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.08}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.title}>
              <div className="card-float bg-surface rounded-xl p-8 h-full flex flex-col border border-border hover:border-border-hover transition-colors duration-300">
                {/* Icon with radial gradient background */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/[0.03] border border-white/[0.04]"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    style={{ stroke: "url(#icon-grad)" }}
                  />
                </div>

                <h3 className="font-display text-[20px] font-bold text-text-primary tracking-[-0.02em] mb-3">
                  {service.title}
                </h3>

                <p className="text-[15px] text-text-secondary leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-sm text-text-muted">
                    From{" "}
                    <span className="text-text-primary font-semibold">
                      EUR {service.price}
                    </span>
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet hover:text-cyan transition-colors"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
