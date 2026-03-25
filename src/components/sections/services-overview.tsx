"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { getTagColor } from "@/lib/tag-colors";

const services = [
  {
    title: "Web Design & Development",
    caption: "CUSTOM BUILD",
    description:
      "Custom websites built from scratch. No templates. No WordPress themes. Hand-crafted code that performs, converts, and scales with your business.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript", "Vercel"],
    price: "1,500",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=3840&q=90",
    href: "/services",
  },
  {
    title: "Website Redesign",
    caption: "TRANSFORMATION",
    description:
      "Your current site not cutting it? We take what you have and transform it into something extraordinary. Full audit, fresh design, zero downtime migration.",
    tags: ["Audit", "Redesign", "Migration", "Optimisation"],
    price: "1,200",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=3840&q=90",
    href: "/services",
  },
  {
    title: "E-Commerce",
    caption: "ONLINE STORES",
    description:
      "Online stores that convert. From boutique shops to full-scale retail — beautiful product pages, seamless checkout, and built to sell.",
    tags: ["Shopify", "WooCommerce", "Stripe", "Custom"],
    price: "3,500",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=3840&q=90",
    href: "/services",
  },
  {
    title: "Branding & Identity",
    caption: "BRAND DESIGN",
    description:
      "Logos, colour systems, typography, brand guidelines — the foundation everything else is built on. We create identities that stick.",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
    price: "2,000",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=3840&q=90",
    href: "/services",
  },
  {
    title: "SEO & Performance",
    caption: "GROWTH",
    description:
      "Beautiful means nothing if nobody finds it. We build fast, accessible, and search-engine-optimised from day one. Page 1 or nothing.",
    tags: ["Technical SEO", "Core Web Vitals", "Schema", "Analytics"],
    price: "500/mo",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=3840&q=90",
    href: "/services",
  },
  {
    title: "Hosting & Maintenance",
    caption: "ONGOING CARE",
    description:
      "Launch is just the beginning. We keep your site fast, secure, updated, and backed up. Zero downtime. Zero stress.",
    tags: ["Vercel", "Monitoring", "Backups", "Updates"],
    price: "80/mo",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=3840&q=90",
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeader
        caption="WHAT WE DO"
        title="End-to-End Digital Solutions"
        subtitle="From first sketch to final pixel — and everything after launch"
      />

      <div className="space-y-20 md:space-y-28">
        {services.map((service, index) => {
          const isOdd = index % 2 === 0;
          return (
            <AnimateIn
              key={service.title}
              animation={isOdd ? "slideLeft" : "slideRight"}
              delay={0.1}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  !isOdd ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image side — 45% */}
                <div
                  className={`lg:col-span-5 ${!isOdd ? "lg:order-2" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#141414]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* Text side — 55% */}
                <div
                  className={`lg:col-span-7 ${!isOdd ? "lg:order-1" : ""}`}
                >
                  <span className="text-[11px] uppercase tracking-[0.15em] gradient-text font-semibold">
                    {service.caption}
                  </span>
                  <h3 className="font-display text-[24px] font-bold text-[#F0F0F0] tracking-[-0.02em] leading-[1.08] mt-3 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#B0B0B0] leading-relaxed mb-5 max-w-[520px]">
                    {service.description}
                  </p>

                  {/* Tech tags — vibrant colors */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag, tagIdx) => {
                      const c = getTagColor(tag, tagIdx);
                      return (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] uppercase font-mono rounded-md"
                          style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Price + Link */}
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-[#555555]">
                      From{" "}
                      <span className="text-[#F0F0F0] font-semibold">
                        EUR {service.price}
                      </span>
                    </span>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F0F0F0] hover:text-violet transition-colors"
                    >
                      Learn More
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </Section>
  );
}
