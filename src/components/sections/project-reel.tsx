"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GrandHarbourLogo,
  PortoVallettaLogo,
  MaltaLivingLogo,
  FitZoneLogo,
  SwissHealthLogo,
  OliveAndStoneLogo,
  CyberShieldLogo,
} from "@/components/ui/project-logos";

/* ── Mini homepage previews — each mirrors the real demo ── */

function HotelPreview() {
  return (
    <div className="relative w-full h-full bg-[#0C1220] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" alt="" fill className="object-cover opacity-60" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220]/90 via-[#0C1220]/40 to-[#0C1220]/20" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <GrandHarbourLogo className="h-3.5 w-auto" variant="color" />
          <div className="flex gap-4">
            <span className="text-[8px] text-[#F5F0E8]/60 font-medium tracking-wider">ROOMS</span>
            <span className="text-[8px] text-[#F5F0E8]/60 font-medium tracking-wider">DINING</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.3em] text-[#C9A96E] mb-3 font-medium">VALLETTA, MALTA</p>
          <h3 className="text-[20px] md:text-[24px] text-[#F5F0E8] leading-[1.1] mb-1 font-light" style={{ fontFamily: "'Cormorant Garamond', 'Palatino Linotype', serif" }}>Grand Harbour</h3>
          <h3 className="text-[14px] md:text-[16px] text-[#F5F0E8] leading-[1.1] mb-3 font-light" style={{ fontFamily: "'Cormorant Garamond', 'Palatino Linotype', serif" }}>Hotel &amp; Spa</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-[#C9A96E] text-[#C9A96E]">Reserve a Stay</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-[#C9A96E] text-[#C9A96E]">Explore Suites</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview() {
  return (
    <div className="relative w-full h-full bg-[#0A0A08] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80" alt="" fill className="object-cover opacity-55" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08]/90 via-[#0A0A08]/30 to-[#0A0A08]/10" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <PortoVallettaLogo className="h-4 w-auto" variant="color" />
          <div className="flex gap-4">
            <span className="text-[8px] text-[#F5E6D3]/50 font-medium tracking-wider">MENU</span>
            <span className="text-[8px] text-[#C9935A] font-semibold tracking-wider">RESERVE</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#C9935A] mb-3 font-medium">FINE DINING &middot; VALLETTA</p>
          <h3 className="text-[20px] md:text-[24px] italic text-[#F5E6D3] leading-[1.1] mb-3 font-light" style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif" }}>Porto Valletta</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-5 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#C9935A] text-[#0A0A08]">Reserve a Table</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-[#C9935A] text-[#C9935A]">Explore the Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="relative w-full h-full bg-[#2D2015] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D2015]/90 via-[#2D2015]/40 to-[#2D2015]/20" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <OliveAndStoneLogo className="h-3.5 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-[#F5EDE3]/50 font-medium tracking-wider">SHOP</span>
            <span className="text-[8px] text-[#C07250] font-semibold tracking-wider">CART (0)</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[7px] tracking-[0.25em] text-[#C07250] mb-2 font-medium">FROM THE MALTESE ISLANDS</p>
          <h3 className="text-[17px] md:text-[20px] text-[#F5EDE3] leading-[1.2] mb-3 font-normal" style={{ fontFamily: "'DM Serif Display', 'Garamond', 'Times New Roman', serif" }}>Artisan Goods from the<br/>Maltese Islands</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#5C6B4F] text-[#F5EDE3]">SHOP COLLECTION</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-[#F5EDE3]/25 text-[#F5EDE3]/70">OUR STORY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealEstatePreview() {
  return (
    <div className="relative w-full h-full bg-[#0A0F1C] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" alt="" fill className="object-cover opacity-55" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-[#0A0F1C]/40 to-[#0A0F1C]/20" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <MaltaLivingLogo className="h-4 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">LISTINGS</span>
            <span className="text-[8px] text-white/50 font-medium tracking-wider">AGENTS</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.3em] text-[#D4A853] mb-3 font-medium">PREMIUM MALTA PROPERTY</p>
          <h3 className="text-[18px] md:text-[22px] font-bold text-white leading-[1.1] mb-3">Find Your Dream<br/>Home</h3>
          <div className="flex gap-1.5 mt-1">
            <span className="px-3 py-1.5 text-[8px] bg-white/10 border border-white/15 text-white/50">Location ▾</span>
            <span className="px-3 py-1.5 text-[8px] bg-white/10 border border-white/15 text-white/50">Type ▾</span>
            <span className="px-3 py-1.5 text-[8px] bg-white/10 border border-white/15 text-white/50">Price ▾</span>
            <span className="px-3.5 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#D4A853] text-white">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FitnessPreview() {
  return (
    <div className="relative w-full h-full bg-[#050505] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" alt="" fill className="object-cover opacity-35" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/60 to-[#050505]/30" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <FitZoneLogo className="h-4 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">CLASSES</span>
            <span className="text-[8px] text-[#22C55E] font-bold tracking-wider">JOIN NOW</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <h3 className="text-[22px] md:text-[28px] font-black text-white leading-none mb-0 uppercase tracking-tight">TRANSFORM</h3>
          <h3 className="text-[22px] md:text-[28px] font-black text-[#22C55E] leading-none mb-3 uppercase tracking-tight">YOUR BODY.</h3>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-bold bg-[#22C55E] text-black">Start Free Trial</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgoPreview() {
  return (
    <div className="relative w-full h-full bg-[#0E4D64] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" alt="" fill className="object-cover opacity-45" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E4D64]/90 via-[#0E4D64]/40 to-[#0E4D64]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <SwissHealthLogo className="h-3.5 w-auto" variant="white" />
          <span className="px-3 py-1 text-[8px] tracking-[0.1em] font-semibold bg-[#E07A5F] text-[#FEFCF9]">DONATE</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <h3 className="text-[17px] md:text-[20px] text-[#FEFCF9] leading-[1.15] mb-3 font-normal" style={{ fontFamily: "'Georgia', 'Cambria', 'Hoefler Text', serif" }}>Every Person Deserves<br/>Access to Healthcare</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#E07A5F] text-[#FEFCF9]">DONATE NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaasPreview() {
  return (
    <div className="relative w-full h-full bg-[#0F172A] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" alt="" fill className="object-cover opacity-25" draggable={false} sizes="500px" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.3) 0%, transparent 50%)' }} />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <CyberShieldLogo className="h-3.5 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/40 font-medium tracking-wider">FEATURES</span>
            <span className="text-[8px] text-[#3B82F6] font-semibold tracking-wider">GET STARTED</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[7px] tracking-[0.25em] text-[#60A5FA] mb-2 font-medium">AI-POWERED CYBERSECURITY</p>
          <h3 className="text-[18px] md:text-[22px] font-bold text-white leading-[1.1] mb-3" style={{ fontFamily: "'SF Pro Display', 'Segoe UI', system-ui, sans-serif" }}>Enterprise Security,<br/>Made Simple</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#3B82F6] text-white rounded-sm">START FREE TRIAL</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/20 text-white/70 rounded-sm">BOOK DEMO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpaPreview() {
  return (
    <div className="relative w-full h-full bg-[#3D3D3D] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/90 via-[#3D3D3D]/40 to-[#3D3D3D]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[10px] text-[#FDF8F3]/80 tracking-[0.15em] italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Serenit&agrave; Spa</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-[#FDF8F3]/40 font-medium tracking-wider">TREATMENTS</span>
            <span className="text-[8px] text-[#9CAF88] font-semibold tracking-wider">BOOK NOW</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[7px] tracking-[0.25em] text-[#9CAF88] mb-2 font-medium">WELLNESS &amp; BEAUTY</p>
          <h3 className="text-[18px] md:text-[22px] text-[#FDF8F3] leading-[1.1] mb-3 font-extralight italic" style={{ fontFamily: "'Cormorant Garamond', 'Baskerville', serif" }}>Restore. Renew.<br/>Rebalance.</h3>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#9CAF88] text-[#FDF8F3]">BOOK A TREATMENT</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-[#FDF8F3]/25 text-[#FDF8F3]/70">VIEW MENU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CinemaPreview() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[10px] font-bold text-white tracking-[0.15em]"><span className="text-[#E50914]">REEL</span> HOUSE</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">NOW SHOWING</span>
            <span className="text-[8px] text-[#E50914] font-semibold tracking-wider">TICKETS</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <h3 className="text-[20px] md:text-[26px] font-black text-white leading-[1.05] mb-3 uppercase tracking-wide" style={{ fontFamily: "'Impact', 'Haettenschweiler', 'Franklin Gothic Bold', sans-serif" }}>THE BIG SCREEN<br/>EXPERIENCE</h3>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#E50914] text-white">BOOK TICKETS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="relative w-full h-full bg-[#fafafa] overflow-hidden">
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[9px] font-light text-black tracking-[0.35em] uppercase">ELENA VOSS</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-black/40 font-medium tracking-wider">WORK</span>
            <span className="text-[8px] text-black/40 font-medium tracking-wider">ABOUT</span>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-1 p-1">
          <div className="relative overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80" alt="" fill className="object-cover" draggable={false} sizes="250px" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" alt="" fill className="object-cover" draggable={false} sizes="250px" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80" alt="" fill className="object-cover" draggable={false} sizes="250px" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" alt="" fill className="object-cover" draggable={false} sizes="250px" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryPreview() {
  return (
    <div className="relative w-full h-full bg-[#0A0A0A] overflow-hidden flex">
      {/* Left half: artwork */}
      <div className="relative w-1/2 h-full">
        <Image src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80" alt="" fill className="object-cover" draggable={false} sizes="250px" />
      </div>
      {/* Right half: dark panel */}
      <div className="relative w-1/2 h-full bg-[#0A0A0A] flex flex-col">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[8px] font-extralight text-white/80 tracking-[0.3em] uppercase">ATELIER NOIR</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-[14px] md:text-[17px] text-white leading-[1.1] mb-2 font-extralight italic" style={{ fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', serif" }}>Between Light<br/>&amp; Shadow</h3>
        </div>
      </div>
    </div>
  );
}

function MallPreview() {
  return (
    <div className="relative w-full h-full bg-[#1C1C1C] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/40 to-[#1C1C1C]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[10px] font-bold text-white tracking-[0.15em]"><span className="text-[#E67E5A]">HARBOUR</span> SQUARE</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">STORES</span>
            <span className="text-[8px] text-white/50 font-medium tracking-wider">DINING</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[7px] tracking-[0.25em] text-[#E67E5A] mb-2 font-medium">SLIEMA WATERFRONT</p>
          <h3 className="text-[18px] md:text-[22px] font-bold text-white leading-[1.1] mb-3">SHOP. DINE.<br/>EXPERIENCE.</h3>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#E67E5A] text-white">EXPLORE STORES</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/25 text-white/70">PLAN VISIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DentalPreview() {
  return (
    <div className="relative w-full h-full bg-[#0A1015] overflow-hidden">
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[10px] font-bold text-white tracking-[0.1em]">DR. VELLA DENTAL</span>
          <span className="text-[8px] text-[#0EA5E9] font-semibold tracking-wider">BOOK</span>
        </div>
        <div className="flex-1 flex items-center px-6">
          <div className="flex-1">
            <h3 className="text-[16px] md:text-[20px] font-bold text-white leading-[1.1] mb-1">Your Smile,</h3>
            <h3 className="text-[16px] md:text-[20px] font-bold text-[#0EA5E9] leading-[1.1] mb-3">Perfected.</h3>
            <span className="px-3 py-1 text-[7px] tracking-[0.1em] font-semibold bg-[#0EA5E9] text-white rounded-sm">Book Appointment</span>
          </div>
          <div className="w-[40%] h-[80%] rounded-xl overflow-hidden relative">
            <Image src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80" alt="" fill className="object-cover" draggable={false} sizes="200px" />
            <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 30px rgba(14,165,233,0.15)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const PREVIEW_MAP: Record<string, React.ComponentType> = {
  hotel: HotelPreview,
  restaurant: RestaurantPreview,
  realestate: RealEstatePreview,
  dental: DentalPreview,
  fitness: FitnessPreview,
  gallery: GalleryPreview,
};

const demos = [
  { slug: "hotel", url: "grandharbourhotel.com", glow: "201, 169, 110", tag: "HOSPITALITY", tagBg: "#C9A96E", tagText: "#0C1220" },
  { slug: "restaurant", url: "portovalletta.com", glow: "201, 147, 90", tag: "GASTRO", tagBg: "#C9935A", tagText: "#0A0A08" },
  { slug: "realestate", url: "maltaliving.com", glow: "212, 168, 83", tag: "REAL ESTATE", tagBg: "#D4A853", tagText: "#0A0F1C" },
  { slug: "dental", url: "drvelladental.com", glow: "14, 165, 233", tag: "DENTAL", tagBg: "#0EA5E9", tagText: "#fff" },
  { slug: "fitness", url: "fitzonemalta.com", glow: "34, 197, 94", tag: "FITNESS", tagBg: "#22C55E", tagText: "#000" },
  { slug: "gallery", url: "ateliernoir.com", glow: "200, 200, 200", tag: "ART & CULTURE", tagBg: "#ffffff", tagText: "#0A0A0A" },
];

export function ProjectReel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const dragDist = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const tick = () => {
      if (!isDragging.current && !isHovered.current && el) {
        el.scrollLeft += 0.5;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onDown = (e: MouseEvent) => {
      isDragging.current = true;
      dragDist.current = 0;
      startX.current = e.pageX;
      scrollStart.current = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const walk = (e.pageX - startX.current) * 1.5;
      dragDist.current = Math.abs(walk);
      el.scrollLeft = scrollStart.current - walk;
    };
    const onUp = () => { isDragging.current = false; el.style.cursor = "grab"; };
    const onEnter = () => { isHovered.current = true; };
    const onLeave = () => { isHovered.current = false; isDragging.current = false; el.style.cursor = "grab"; };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const reelItems = [...demos, ...demos];

  return (
    <section
      className="relative pt-0 pb-0 overflow-hidden bg-transparent"
    >
      <div className="h-16" />
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#555] text-center mb-10">
        Design Previews
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide select-none"
          style={{ cursor: "grab" }}
        >
          {reelItems.map((demo, i) => {
            const Preview = PREVIEW_MAP[demo.slug];
            return (
              <Link
                key={`${demo.slug}-${i}`}
                href={`/demos/${demo.slug}`}
                className="group shrink-0 w-[300px] md:w-[480px]"
                onClick={(e) => { if (dragDist.current > 5) e.preventDefault(); }}
                draggable={false}
              >
                <div
                  className="rounded-xl overflow-hidden bg-[#111] border border-[#1A1A1A] group-hover:border-[#333] transition-all duration-500 group-hover:-translate-y-2"
                  style={{ boxShadow: `0 4px 20px rgba(${demo.glow}, 0.08), 0 0 40px rgba(${demo.glow}, 0.04)`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 40px rgba(${demo.glow}, 0.25), 0 0 80px rgba(${demo.glow}, 0.12), inset 0 0 30px rgba(${demo.glow}, 0.03)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 4px 20px rgba(${demo.glow}, 0.08), 0 0 40px rgba(${demo.glow}, 0.04)`; }}
                >
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#161616] border-b border-[#1A1A1A]">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                    <span className="ml-3 text-[10px] text-[#444] font-mono flex-1">{demo.url}</span>
                    <span
                      className="px-2 py-0.5 text-[7px] font-bold uppercase tracking-[0.12em] rounded-sm"
                      style={{ background: demo.tagBg, color: demo.tagText }}
                    >
                      {demo.tag}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {Preview && <Preview />}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
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
      {/* Seamless fade into next section */}
      <div className="h-16" />
    </section>
  );
}
