"use client";

import { PREVIEW_MAP } from "@/components/sections/project-reel";

interface CaseStudyHeroProps {
  demoSlug: string;
  categoryTag: string;
  color: string;
}

const DEMO_URLS: Record<string, string> = {
  hotel: "grandharbourhotel.com",
  restaurant: "portovalletta.com",
  ecommerce: "oliveandstone.com",
  realestate: "maltaliving.com",
  fitness: "fitzone.com",
  ngo: "swisshealthalliance.org",
  saas: "cybershield.io",
  trades: "serenitaspa.com",
  cinema: "reelhousecinema.com",
  mall: "harboursquare.com",
  portfolio: "elenavoss.com",
  gallery: "ateliernoir.com",
};

export function CaseStudyHero({ demoSlug, categoryTag, color }: CaseStudyHeroProps) {
  const Preview = PREVIEW_MAP[demoSlug];
  if (!Preview) return null;

  return (
    <div
      className="rounded-xl overflow-hidden border border-[#1A1A1A]"
      style={{ boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 60px ${color}15` }}
    >
      {/* Browser chrome header */}
      <div className="flex items-center gap-2 px-5 py-3 bg-[#161616] border-b border-[#1A1A1A]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-4 text-xs text-[#444] font-mono flex-1">
          {DEMO_URLS[demoSlug] || "yoursite.com"}
        </span>
        <span
          className="px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] rounded-sm"
          style={{ background: color, color: "#fff" }}
        >
          {categoryTag}
        </span>
      </div>
      {/* Preview component — same as carousel */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
        <Preview />
      </div>
    </div>
  );
}
