"use client";

import { HeroSection } from "@/components/sections/hero";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesOverview } from "@/components/sections/services-overview";
import { StatsSection } from "@/components/sections/stats";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { IndustriesSection } from "@/components/sections/industries";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsStrip />
      <SelectedWork />
      <ServicesOverview />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <IndustriesSection />
      <PricingPreview />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
