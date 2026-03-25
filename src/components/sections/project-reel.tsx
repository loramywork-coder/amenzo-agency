"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategoryColor } from "@/lib/tag-colors";

// Demo pages with their hero screenshots — these represent the actual demo homepages
const demos = [
  {
    slug: "hotel",
    name: "Grand Harbour Hotel",
    category: "HOSPITALITY",
    url: "grandharbourhotel.com",
    // Luxury hotel hero — pool, resort, golden hour
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=3840&q=90",
  },
  {
    slug: "restaurant",
    name: "Porto Valletta",
    category: "GASTRO",
    url: "portovalletta.com",
    // Moody fine dining interior
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=3840&q=90",
  },
  {
    slug: "ecommerce",
    name: "Olive & Stone",
    category: "E-COMMERCE",
    url: "oliveandstone.com",
    // Artisan products, warm styling
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=3840&q=90",
  },
  {
    slug: "realestate",
    name: "MaltaLiving",
    category: "REAL ESTATE",
    url: "maltaliving.com",
    // Modern architecture / property
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=3840&q=90",
  },
  {
    slug: "fitness",
    name: "FitZone",
    category: "FITNESS",
    url: "fitzone.com",
    // Modern gym interior, dark
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=3840&q=90",
  },
  {
    slug: "ngo",
    name: "Swiss Health Alliance",
    category: "NON-PROFIT",
    url: "swisshealthalliance.org",
    // Humanitarian, warm
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=3840&q=90",
  },
  {
    slug: "saas",
    name: "CyberShield",
    category: "TECHNOLOGY",
    url: "cybershield.io",
    // Tech, dark, cyber
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=3840&q=90",
  },
  {
    slug: "trades",
    name: "Daniel\u2019s Plumbing",
    category: "TRADES",
    url: "danielsplumbing.com",
    // Skilled work, tools
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=3840&q=90",
  },
];

export function ProjectReel() {
  const reelItems = [...demos, ...demos];

  return (
    <section
      className="relative pt-0 pb-16 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #040410, #0A0A0A)" }}
    >
      <div className="h-24 bg-gradient-to-b from-[#040410] to-transparent" />

      <p className="text-[11px] uppercase tracking-[0.2em] text-[#555] text-center mb-10">
        Design Previews
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-reel hover:[animation-play-state:paused]">
          {reelItems.map((demo, i) => {
            const cc = getCategoryColor(demo.category, i);
            return (
              <Link
                key={`${demo.slug}-${i}`}
                href={`/demos/${demo.slug}`}
                className="group shrink-0 w-[380px] md:w-[480px]"
              >
                <div className="rounded-xl overflow-hidden bg-[#111] border border-[#1A1A1A] group-hover:border-[#2A2A2A] transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(124,58,237,0.08)] group-hover:-translate-y-2">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#161616] border-b border-[#1A1A1A]">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                    <span className="ml-3 text-[10px] text-[#444] font-mono">
                      {demo.url}
                    </span>
                  </div>
                  {/* Demo homepage preview */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={demo.image}
                      alt={`${demo.name} demo homepage`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="500px"
                      quality={90}
                    />
                    {/* Overlay with demo info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span
                        className="inline-block px-2.5 py-0.5 text-[9px] uppercase tracking-[0.15em] font-semibold rounded-md mb-2"
                        style={{ background: cc.bg, color: cc.text, border: `1px solid ${cc.border}` }}
                      >
                        {demo.category}
                      </span>
                      <p className="text-[16px] font-display font-bold text-white leading-tight">
                        {demo.name}
                      </p>
                    </div>
                    {/* "Try Demo" button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        View Preview
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
