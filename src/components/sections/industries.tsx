"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";

const industries = [
  {
    name: "Hotels & Resorts",
    desc: "Luxury digital experiences for hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
  {
    name: "Restaurants & Bars",
    desc: "Websites as atmospheric as your venue",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  },
  {
    name: "Real Estate",
    desc: "Property platforms that sell",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    name: "E-Commerce",
    desc: "Online stores that convert",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
  },
  {
    name: "Healthcare & Wellness",
    desc: "Trust-building digital presence",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    name: "NGOs & Non-Profits",
    desc: "Amplifying missions that matter",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
  },
  {
    name: "Finance & Professional",
    desc: "Credibility at first click",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    name: "Fitness & Lifestyle",
    desc: "Energetic brands, high-performing sites",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    name: "Education & Training",
    desc: "Knowledge platforms that engage",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    name: "Technology & SaaS",
    desc: "Products that scale",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    name: "Construction & Trades",
    desc: "Professional presence for skilled trades",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    name: "Government & Public",
    desc: "Accessible, compliant, trusted",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&q=80",
  },
];

export function IndustriesSection() {
  return (
    <Section>
      <SectionHeader
        caption="WHO WE WORK WITH"
        title="Every Industry. Every Scale."
        subtitle="We design for businesses of all kinds"
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
