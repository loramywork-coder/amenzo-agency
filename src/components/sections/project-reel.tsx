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
    <div className="relative w-full h-full bg-[#0c1a2e] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80" alt="" fill className="object-cover opacity-60" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/90 via-[#0c1a2e]/40 to-[#0c1a2e]/20" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <GrandHarbourLogo className="h-3.5 w-auto" variant="color" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/60 font-medium tracking-wider">ROOMS</span>
            <span className="text-[8px] text-white/60 font-medium tracking-wider">DINING</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#7DD3FC] mb-3 font-medium">LUXURY STAYS IN VALLETTA</p>
          <h3 className="text-[18px] md:text-[22px] text-white leading-[1.1] mb-3 font-light" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>Where History<br/>Meets Luxury</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#7DD3FC] text-[#0c1a2e]">BOOK YOUR STAY</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/30 text-white/80">VIEW ROOMS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview() {
  return (
    <div className="relative w-full h-full bg-[#1a0808] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80" alt="" fill className="object-cover opacity-55" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/90 via-[#1a0808]/30 to-[#1a0808]/10" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <PortoVallettaLogo className="h-4 w-auto" variant="color" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">MENU</span>
            <span className="text-[8px] text-[#E88B8B] font-semibold tracking-wider">RESERVE</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#E88B8B] mb-3 font-medium">FINE DINING · VALLETTA</p>
          <h3 className="text-[18px] md:text-[22px] italic text-white leading-[1.1] mb-3 font-light" style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif" }}>A Taste of the<br/>Mediterranean</h3>
          <span className="px-5 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#C45050] text-white mt-1">RESERVE A TABLE</span>
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="relative w-full h-full bg-[#0f1a10] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1200&q=80" alt="" fill className="object-cover opacity-45" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a10]/90 via-[#0f1a10]/40 to-[#0f1a10]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#8B9F6A]/15">
          <OliveAndStoneLogo className="h-3.5 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">SHOP</span>
            <span className="text-[8px] text-[#B8CC8E] font-semibold tracking-wider">CART (0)</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#B8CC8E] mb-3 font-medium">ARTISAN MALTESE GOODS</p>
          <h3 className="text-[18px] md:text-[22px] text-white leading-[1.1] mb-3 font-normal italic" style={{ fontFamily: "'Garamond', 'Cormorant Garamond', 'Times New Roman', serif" }}>Crafted with<br/>Tradition</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#8B9F6A] text-[#0f1a10]">SHOP NOW</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/25 text-white/60">OUR STORY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealEstatePreview() {
  return (
    <div className="relative w-full h-full bg-[#0a1628] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80" alt="" fill className="object-cover opacity-55" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-[#0a1628]/20" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <MaltaLivingLogo className="h-4 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">LISTINGS</span>
            <span className="text-[8px] text-white/50 font-medium tracking-wider">AGENTS</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#60A5FA] mb-3 font-medium">PREMIUM PROPERTIES</p>
          <h3 className="text-[18px] md:text-[22px] font-bold text-white leading-[1.1] mb-3" style={{ fontFamily: "'Segoe UI', 'SF Pro Display', system-ui, sans-serif" }}>Find Your Dream<br/>Home in Malta</h3>
          <div className="flex gap-1.5 mt-1">
            <span className="px-3 py-1.5 text-[8px] bg-white/10 border border-white/15 text-white/50">Location ▾</span>
            <span className="px-3 py-1.5 text-[8px] bg-white/10 border border-white/15 text-white/50">Type ▾</span>
            <span className="px-3.5 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#2563EB] text-white">SEARCH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FitnessPreview() {
  return (
    <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80" alt="" fill className="object-cover opacity-55" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <FitZoneLogo className="h-4 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">CLASSES</span>
            <span className="text-[8px] text-[#EF4444] font-bold tracking-wider">JOIN NOW</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <h3 className="text-[22px] md:text-[28px] font-black text-white leading-none mb-2 uppercase tracking-tight" style={{ fontFamily: "'Impact', 'Haettenschweiler', 'Franklin Gothic Bold', sans-serif" }}>Push Your<br/>Limits</h3>
          <p className="text-[8px] text-white/40 mb-4">Malta&apos;s premier fitness experience</p>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-bold bg-[#EF4444] text-white">START FREE TRIAL</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/25 text-white/70">VIEW CLASSES</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NgoPreview() {
  return (
    <div className="relative w-full h-full bg-[#0a1f1a] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a]/90 via-[#0a1f1a]/40 to-[#0a1f1a]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <SwissHealthLogo className="h-3.5 w-auto" variant="white" />
          <span className="px-3 py-1 text-[8px] tracking-[0.1em] font-semibold bg-[#0D9488] text-white">DONATE</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#5EEAD4] mb-3 font-medium">TRANSFORMING HEALTHCARE</p>
          <h3 className="text-[17px] md:text-[20px] text-white leading-[1.15] mb-3 font-normal" style={{ fontFamily: "'Georgia', 'Cambria', 'Hoefler Text', serif" }}>Every Person Deserves<br/>Access to Healthcare</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#0D9488] text-white">MAKE A DONATION</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/25 text-white/60">OUR PROGRAMS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaasPreview() {
  return (
    <div className="relative w-full h-full bg-[#09090F] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80" alt="" fill className="object-cover opacity-25" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/8 via-transparent to-[#06B6D4]/8" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <CyberShieldLogo className="h-3.5 w-auto" variant="white" />
          <div className="flex gap-4">
            <span className="text-[8px] text-white/40 font-medium tracking-wider">FEATURES</span>
            <span className="text-[8px] text-[#A78BFA] font-semibold tracking-wider">GET STARTED</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <span className="px-2.5 py-0.5 text-[7px] tracking-[0.15em] font-medium bg-[#7C3AED]/15 text-[#A78BFA] border border-[#7C3AED]/25 rounded-full mb-3">ENTERPRISE SECURITY</span>
          <h3 className="text-[18px] md:text-[22px] font-bold text-white leading-[1.1] mb-3" style={{ fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace" }}>Protect What<br/>Matters Most</h3>
          <div className="flex gap-2 mt-1">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white">START FREE TRIAL</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/15 text-white/60">SEE DEMO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpaPreview() {
  return (
    <div className="relative w-full h-full bg-[#1a1510] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510]/90 via-[#1a1510]/35 to-[#1a1510]/10" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[10px] font-serif text-[#D4B896] tracking-[0.15em]">SERENITÀ SPA</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">TREATMENTS</span>
            <span className="text-[8px] text-[#D4B896] font-semibold tracking-wider">BOOK NOW</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#D4B896] mb-3 font-medium">WELLNESS &amp; BEAUTY</p>
          <h3 className="text-[18px] md:text-[22px] text-white leading-[1.1] mb-3 font-extralight italic" style={{ fontFamily: "'Baskerville', 'Libre Baskerville', 'Lucida Bright', serif" }}>Restore. Renew.<br/>Rebalance.</h3>
          <p className="text-[8px] text-white/40 mb-4">Premium spa treatments in the heart of Sliema</p>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#D4B896] text-[#1a1510]">BOOK A TREATMENT</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/25 text-white/60">VIEW MENU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CinemaPreview() {
  return (
    <div className="relative w-full h-full bg-[#0C0C0C] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-[#0C0C0C]/40 to-[#0C0C0C]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[10px] font-bold text-white tracking-[0.15em]"><span className="text-[#DC2626]">REEL</span> HOUSE</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">NOW SHOWING</span>
            <span className="text-[8px] text-[#F59E0B] font-semibold tracking-wider">PRICES</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#F59E0B] mb-3 font-medium">SLIEMA&apos;S PREMIER CINEMA</p>
          <h3 className="text-[18px] md:text-[22px] font-bold text-white leading-[1.1] mb-3">The Big Screen<br/>Experience</h3>
          <p className="text-[8px] text-white/40 mb-4">IMAX &bull; Dolby Atmos &bull; VIP Screens</p>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#DC2626] text-white">BOOK TICKETS</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/20 text-white/60">VIEW PRICES</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="relative w-full h-full bg-[#0A0A0A] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80" alt="" fill className="object-cover opacity-50" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-[#0A0A0A]/10" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[9px] font-light text-white tracking-[0.35em] uppercase" style={{ fontFamily: "'Futura', 'Century Gothic', 'Avant Garde', sans-serif" }}>ELENA VOSS</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-white/40 font-medium tracking-wider">WORK</span>
            <span className="text-[8px] text-white/40 font-medium tracking-wider">CONTACT</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <h3 className="text-[28px] text-white leading-[1.1] mb-3 font-light" style={{ fontFamily: "'Futura', 'Century Gothic', 'Avant Garde', sans-serif" }}>Photography</h3>
          <p className="text-[8px] tracking-[0.25em] text-white/40">EDITORIAL &middot; FASHION &middot; PORTRAIT</p>
        </div>
      </div>
    </div>
  );
}

function GalleryPreview() {
  return (
    <div className="relative w-full h-full bg-[#1a1818] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80" alt="" fill className="object-cover opacity-25" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1818]/90 via-[#1a1818]/40 to-[#1a1818]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[9px] font-extralight text-white/80 tracking-[0.35em] uppercase" style={{ fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', serif" }}>ATELIER NOIR</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-white/40 font-medium tracking-wider">EXHIBITIONS</span>
            <span className="text-[8px] text-white/40 font-medium tracking-wider">ARTISTS</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#B8860B] mb-3 font-medium">CURRENT EXHIBITION</p>
          <h3 className="text-[18px] md:text-[22px] text-white leading-[1.1] mb-3 font-extralight italic" style={{ fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', serif" }}>Between Light<br/>&amp; Shadow</h3>
          <p className="text-[8px] text-white/30 tracking-wider">A retrospective by Mara Delacroix</p>
        </div>
      </div>
    </div>
  );
}

function MallPreview() {
  return (
    <div className="relative w-full h-full bg-[#12101a] overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" alt="" fill className="object-cover opacity-45" draggable={false} sizes="500px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#12101a]/90 via-[#12101a]/40 to-[#12101a]/15" />
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[10px] font-bold text-white tracking-[0.15em]" style={{ fontFamily: "'Gill Sans', 'Century Gothic', 'Trebuchet MS', sans-serif" }}><span className="text-[#F43F5E]">HARBOUR</span> SQUARE</span>
          <div className="flex gap-4">
            <span className="text-[8px] text-white/50 font-medium tracking-wider">STORES</span>
            <span className="text-[8px] text-white/50 font-medium tracking-wider">DINING</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <p className="text-[8px] tracking-[0.25em] text-[#F43F5E] mb-3 font-medium">SLIEMA WATERFRONT</p>
          <h3 className="text-[18px] md:text-[22px] font-bold text-white leading-[1.1] mb-3" style={{ fontFamily: "'Gill Sans', 'Century Gothic', 'Trebuchet MS', sans-serif" }}>Shop. Dine.<br/>Experience.</h3>
          <p className="text-[8px] text-white/40 mb-4">Malta&apos;s premier shopping destination</p>
          <div className="flex gap-2">
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-semibold bg-[#F43F5E] text-white">EXPLORE STORES</span>
            <span className="px-4 py-1.5 text-[8px] tracking-[0.1em] font-medium border border-white/20 text-white/60">PLAN VISIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const PREVIEW_MAP: Record<string, React.ComponentType> = {
  hotel: HotelPreview,
  restaurant: RestaurantPreview,
  ecommerce: EcommercePreview,
  realestate: RealEstatePreview,
  fitness: FitnessPreview,
  ngo: NgoPreview,
  saas: SaasPreview,
  trades: SpaPreview,
  cinema: CinemaPreview,
  mall: MallPreview,
  portfolio: PortfolioPreview,
  gallery: GalleryPreview,
};

const demos = [
  { slug: "hotel", url: "grandharbourhotel.com", glow: "125, 211, 252", tag: "HOSPITALITY", tagBg: "#7DD3FC", tagText: "#0c1a2e" },
  { slug: "restaurant", url: "portovalletta.com", glow: "196, 80, 80", tag: "GASTRO", tagBg: "#C45050", tagText: "#fff" },
  { slug: "ecommerce", url: "oliveandstone.com", glow: "139, 159, 106", tag: "E-COMMERCE", tagBg: "#8B9F6A", tagText: "#0f1a10" },
  { slug: "realestate", url: "maltaliving.com", glow: "37, 99, 235", tag: "REAL ESTATE", tagBg: "#2563EB", tagText: "#fff" },
  { slug: "fitness", url: "fitzone.com", glow: "239, 68, 68", tag: "FITNESS", tagBg: "#EF4444", tagText: "#fff" },
  { slug: "ngo", url: "swisshealthalliance.org", glow: "13, 148, 136", tag: "NON-PROFIT", tagBg: "#0D9488", tagText: "#fff" },
  { slug: "saas", url: "cybershield.io", glow: "124, 58, 237", tag: "TECHNOLOGY", tagBg: "#7C3AED", tagText: "#fff" },
  { slug: "trades", url: "serenitaspa.com", glow: "212, 184, 150", tag: "WELLNESS", tagBg: "#D4B896", tagText: "#1a1510" },
  { slug: "cinema", url: "reelhousecinema.com", glow: "220, 38, 38", tag: "ENTERTAINMENT", tagBg: "#DC2626", tagText: "#fff" },
  { slug: "mall", url: "harboursquare.com", glow: "244, 63, 94", tag: "RETAIL", tagBg: "#F43F5E", tagText: "#fff" },
  { slug: "portfolio", url: "elenavoss.com", glow: "255, 255, 255", tag: "PHOTOGRAPHY", tagBg: "#fff", tagText: "#0A0A0A" },
  { slug: "gallery", url: "ateliernoir.com", glow: "184, 134, 11", tag: "ART & CULTURE", tagBg: "#B8860B", tagText: "#fff" },
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
      className="relative pt-0 pb-0 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #040410, #0A0A0A)" }}
    >
      <div className="h-24 bg-gradient-to-b from-[#040410] to-transparent" />
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#555] text-center mb-10">
        Design Previews
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#080810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

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
      <div className="h-24 bg-gradient-to-b from-transparent to-[#0A0A0A]" />
    </section>
  );
}
