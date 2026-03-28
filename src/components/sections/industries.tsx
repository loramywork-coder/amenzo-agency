"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";

const industries = [
  {
    name: "Hotels & Resorts",
    desc: "Luxury digital experiences for hospitality",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=3840&q=90",
  },
  {
    name: "Restaurants & Bars",
    desc: "Websites as atmospheric as your venue",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=3840&q=90",
  },
  {
    name: "Real Estate",
    desc: "Property platforms that sell",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=3840&q=90",
  },
  {
    name: "E-Commerce",
    desc: "Online stores that convert",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=3840&q=90",
  },
  {
    name: "Healthcare & Wellness",
    desc: "Trust-building digital presence",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=3840&q=90",
  },
  {
    name: "NGOs & Non-Profits",
    desc: "Amplifying missions that matter",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=3840&q=90",
  },
  {
    name: "Entertainment",
    desc: "Cinemas, bowling, events",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=85",
  },
  {
    name: "Fitness & Lifestyle",
    desc: "Energetic brands, high-performing sites",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=3840&q=90",
  },
  {
    name: "Art & Culture",
    desc: "Galleries, museums, exhibitions",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&q=85",
  },
  {
    name: "Technology & SaaS",
    desc: "Products that scale",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=3840&q=90",
  },
  {
    name: "Construction & Trades",
    desc: "Professional presence for skilled trades",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=3840&q=90",
  },
  {
    name: "Creative & Photography",
    desc: "Studios, portfolios, agencies",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=85",
  },
];

export function IndustriesSection() {
  return (
    <Section>
      <SectionHeader
        caption="INDUSTRIES"
        title="If you serve customers, we serve you."
        subtitle="Hotels to hospitals. Startups to scale-ups."
      />

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {industries.map((industry) => (
          <StaggerItem key={industry.name}>
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] md:aspect-[3/2] cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              {/* Background image */}
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover transition-all duration-500 brightness-[0.3] group-hover:brightness-[0.45] group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Gradient overlay from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-violet/30 transition-colors duration-400" />

              {/* Content at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="font-display text-[14px] md:text-[16px] font-semibold text-white mb-1">
                  {industry.name}
                </h3>
                <p className="text-[11px] md:text-[12px] text-[#CCC] leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
