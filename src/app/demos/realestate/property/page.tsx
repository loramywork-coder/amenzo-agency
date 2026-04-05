"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Bed, Bath, Maximize, Phone, Mail, Heart, Share2,
  Menu, X, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight,
  Waves, Car, Building, Thermometer, Wifi, Shield, Sun,
  Eye, Layers, Sofa, UtensilsCrossed, Dumbbell,
} from "lucide-react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { DemoBanner } from "@/components/demos/demo-banner";
import Reveal from "@/components/demos/Reveal";

/* ═══════════════════════════ PALETTE ═══════════════════════════ */

const C = {
  bg: "#0A0F1C",
  surface: "#111827",
  gold: "#D4A853",
  white: "#FFFFFF",
  muted: "#6B7280",
  border: "#1F2937",
  goldHover: "#E4B863",
  goldBorder: "rgba(212,168,83,0.15)",
} as const;

/* ═══════════════════════════ DATA ══════════════════════════════ */

const property = {
  title: "Seaview Penthouse, Sliema",
  price: 1450000,
  location: "Tower Road, Sliema SLM 1600",
  type: "Penthouse",
  badge: "FOR SALE",
  specs: [
    { label: "3 Bed", icon: Bed },
    { label: "2 Bath", icon: Bath },
    { label: "180m\u00B2", icon: Maximize },
    { label: "15th Floor", icon: Building },
    { label: "Sea View", icon: Eye },
    { label: "2 Parking", icon: Car },
  ],
};

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
];

const features = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Sun, label: "Wraparound Terrace" },
  { icon: Thermometer, label: "Central A/C" },
  { icon: Wifi, label: "Smart Home System" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Car, label: "Double Garage" },
  { icon: Sofa, label: "Open Plan Living" },
  { icon: UtensilsCrossed, label: "Italian Kitchen" },
  { icon: Layers, label: "Marble Flooring" },
  { icon: Dumbbell, label: "Private Gym" },
  { icon: Eye, label: "Panoramic Views" },
  { icon: Building, label: "Concierge Service" },
];

interface SimilarProperty {
  id: number;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqm: number;
  image: string;
}

const similarProperties: SimilarProperty[] = [
  {
    id: 1,
    title: "Harbour Penthouse, Valletta",
    location: "Valletta",
    price: 1850000,
    beds: 3,
    baths: 2,
    sqm: 200,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Villa, Madliena",
    location: "Madliena",
    price: 2200000,
    beds: 5,
    baths: 4,
    sqm: 350,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 3,
    title: "Designer Flat, Sliema",
    location: "Sliema",
    price: 385000,
    beds: 2,
    baths: 1,
    sqm: 110,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
];

/* ═══════════════════════════ HELPERS ═══════════════════════════ */

function formatPriceFull(n: number) {
  return `\u20AC${n.toLocaleString()}`;
}

/* ═══════════════════════════ NAV ═════════════════════════════ */

function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Properties", href: "/demos/realestate/listings" },
    { label: "Areas", href: "/demos/realestate#areas" },
    { label: "Insights", href: "/demos/realestate#why-us" },
    { label: "About", href: "/demos/realestate#about" },
  ];

  return (
    <nav
      className="fixed top-10 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,15,28,0.95)" : "rgba(10,15,28,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/demos/realestate" className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display), system-ui", color: C.white }}
          >
            MEDITERRANEAN{" "}
            <span style={{ color: C.gold }}>LIVING</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors hover:text-white"
              style={{ color: C.muted }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demos/realestate#contact"
            className="px-5 py-2.5 text-sm font-semibold transition-all"
            style={{ background: C.gold, color: C.bg, borderRadius: 10 }}
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} style={{ color: C.white }} /> : <Menu size={22} style={{ color: C.white }} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(10,15,28,0.98)", borderBottom: `1px solid ${C.border}` }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium py-2"
                  style={{ color: C.muted }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/demos/realestate#contact"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 text-sm font-semibold text-center mt-2"
                style={{ background: C.gold, color: C.bg, borderRadius: 10 }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ═══════════════════════ LIGHTBOX ═════════════════════════════ */

function Lightbox({
  images: imgs,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % imgs.length);
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [imgs.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 p-3 rounded-full z-10"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={onClose}
      >
        <X size={24} style={{ color: C.white }} />
      </button>

      <button
        className="absolute left-4 md:left-8 p-3 rounded-full z-10"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((p) => (p - 1 + imgs.length) % imgs.length);
        }}
      >
        <ChevronLeft size={24} style={{ color: C.white }} />
      </button>

      <button
        className="absolute right-4 md:right-8 p-3 rounded-full z-10"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((p) => (p + 1) % imgs.length);
        }}
      >
        <ChevronRight size={24} style={{ color: C.white }} />
      </button>

      <div
        className="relative w-full max-w-5xl mx-4 md:mx-8"
        style={{ aspectRatio: "16/10" }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={imgs[current]}
              alt={`Gallery image ${current + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{
              background: i === current ? C.gold : "rgba(255,255,255,0.3)",
              transform: i === current ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════ MORTGAGE CALCULATOR ═════════════════════ */

function MortgageCalculator({ propertyPrice }: { propertyPrice: number }) {
  const [depositPct, setDepositPct] = useState(20);
  const [termYears, setTermYears] = useState(25);
  const [rate, setRate] = useState(3.5);

  const monthlyPayment = useMemo(() => {
    const principal = propertyPrice * (1 - depositPct / 100);
    const monthlyRate = rate / 100 / 12;
    const numPayments = termYears * 12;

    if (monthlyRate === 0) return principal / numPayments;

    const factor = Math.pow(1 + monthlyRate, numPayments);
    return (principal * monthlyRate * factor) / (factor - 1);
  }, [propertyPrice, depositPct, termYears, rate]);

  const depositAmount = propertyPrice * (depositPct / 100);
  const loanAmount = propertyPrice - depositAmount;

  return (
    <div
      className="p-8 md:p-10"
      style={{
        background: C.surface,
        borderRadius: 20,
        border: `1px solid rgba(255,255,255,0.06)`,
      }}
    >
      <h3
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-display), system-ui", color: C.white }}
      >
        Mortgage Calculator
      </h3>
      <p className="text-sm mb-8" style={{ color: C.muted }}>
        Estimate your monthly repayments
      </p>

      {/* Price (pre-filled) */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: C.muted }}>
          Property Price
        </label>
        <div
          className="px-5 py-4 text-lg font-bold"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            color: C.gold,
            fontFamily: "var(--font-display), system-ui",
          }}
        >
          {formatPriceFull(propertyPrice)}
        </div>
      </div>

      {/* Deposit slider */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium" style={{ color: C.muted }}>
            Deposit
          </label>
          <span className="text-sm font-semibold" style={{ color: C.gold }}>
            {depositPct}% ({formatPriceFull(depositAmount)})
          </span>
        </div>
        <input
          type="range"
          min={10}
          max={50}
          step={5}
          value={depositPct}
          onChange={(e) => setDepositPct(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${C.gold} 0%, ${C.gold} ${((depositPct - 10) / 40) * 100}%, ${C.border} ${((depositPct - 10) / 40) * 100}%, ${C.border} 100%)`,
            accentColor: C.gold,
          }}
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs" style={{ color: C.muted }}>10%</span>
          <span className="text-xs" style={{ color: C.muted }}>50%</span>
        </div>
      </div>

      {/* Term dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: C.muted }}>
          Mortgage Term
        </label>
        <select
          value={termYears}
          onChange={(e) => setTermYears(Number(e.target.value))}
          className="w-full px-5 py-4 text-sm appearance-none cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            color: C.white,
            outline: "none",
          }}
        >
          {[10, 15, 20, 25, 30, 35].map((y) => (
            <option key={y} value={y} style={{ background: C.surface, color: C.white }}>
              {y} years
            </option>
          ))}
        </select>
      </div>

      {/* Interest rate */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2" style={{ color: C.muted }}>
          Interest Rate (%)
        </label>
        <input
          type="number"
          step={0.1}
          min={0.1}
          max={15}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value) || 0)}
          className="w-full px-5 py-4 text-sm"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            color: C.white,
            outline: "none",
          }}
        />
      </div>

      {/* Result */}
      <div
        className="p-6 text-center"
        style={{
          background: "rgba(212,168,83,0.08)",
          borderRadius: 16,
          border: `1px solid ${C.goldBorder}`,
        }}
      >
        <p className="text-sm mb-2" style={{ color: C.muted }}>
          Estimated Monthly Payment
        </p>
        <p
          className="text-4xl font-bold"
          style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}
        >
          {formatPriceFull(Math.round(monthlyPayment))}
        </p>
        <p className="text-xs mt-3" style={{ color: C.muted }}>
          Loan amount: {formatPriceFull(loanAmount)} over {termYears} years at {rate}%
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════ SITE FOOTER ═════════════════════════ */

function SiteFooter() {
  return (
    <footer className="py-20 px-6" style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Col 1: Brand + license */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              <span style={{ color: C.white }}>MEDITERRANEAN </span>
              <span style={{ color: C.gold }}>LIVING</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
              The premier property portal for luxury real estate across the Maltese islands since 2008.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: C.muted, opacity: 0.7 }}>
              Licensed by the Malta Financial Services Authority. Licence No. C-84729. Registered office: Tower Road, Sliema SLM 1600, Malta.
            </p>
          </div>

          {/* Col 2: Links + Areas */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: C.white }}>
                Quick Links
              </h4>
              {["Properties", "Areas", "Insights", "About Us", "Careers"].map((item) => (
                <p key={item} className="text-sm mb-3 cursor-pointer transition-colors hover:text-white" style={{ color: C.muted }}>
                  {item}
                </p>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: C.white }}>
                Areas
              </h4>
              {["Valletta", "Sliema", "St Julian's", "Gozo", "Mdina", "Madliena"].map((item) => (
                <p key={item} className="text-sm mb-3 cursor-pointer transition-colors hover:text-white" style={{ color: C.muted }}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Col 3: Contact + Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: C.white }}>
              Get in Touch
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <Phone size={14} style={{ color: C.gold }} />
              <span className="text-sm" style={{ color: C.muted }}>+356 2134 5678</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Mail size={14} style={{ color: C.gold }} />
              <span className="text-sm" style={{ color: C.muted }}>info@mediterraneanliving.com</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={14} style={{ color: C.gold }} />
              <span className="text-sm" style={{ color: C.muted }}>Tower Road, Sliema SLM 1600</span>
            </div>
            <div className="flex gap-3">
              {["Fb", "In", "Tw", "Ig"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 flex items-center justify-center text-xs font-semibold cursor-pointer transition-colors"
                  style={{ background: "rgba(212,168,83,0.1)", borderRadius: 8, color: C.gold }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <p className="text-xs" style={{ color: C.muted }}>
            &copy; 2026 Mediterranean Living. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <span key={item} className="text-xs cursor-pointer transition-colors hover:text-white" style={{ color: C.muted }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════ MAIN PAGE ════════════════════════════ */

export default function PropertyDetailPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div style={{ background: C.bg, color: C.white }} className="pt-10">
      <DemoBanner />
      <SiteNav />

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* ─── BACK LINK ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 100 }}>
        <Link
          href="/demos/realestate/listings"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
          style={{ color: C.muted }}
        >
          <ArrowLeft size={16} />
          Back to Listings
        </Link>
      </div>

      {/* ─── IMAGE GALLERY ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mt-6">
        <Reveal type="fade">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3" style={{ borderRadius: 20, overflow: "hidden" }}>
            {/* Large hero image */}
            <div
              className="md:col-span-2 md:row-span-2 relative cursor-pointer group"
              style={{ minHeight: 400 }}
              onClick={() => setLightboxIndex(0)}
            >
              <Image
                src={images[0]}
                alt="Property main"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* 4 thumbnails */}
            {images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="relative cursor-pointer group hidden md:block"
                style={{ minHeight: 195 }}
                onClick={() => setLightboxIndex(i + 1)}
              >
                <Image
                  src={img}
                  alt={`Property image ${i + 2}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {i === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="text-sm font-semibold" style={{ color: C.white }}>+{images.length - 4} Photos</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── TITLE + PRICE + ACTIONS ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <Reveal type="slide-up">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <span
                className="inline-block px-3 py-1 text-xs font-semibold tracking-wider mb-4"
                style={{ background: C.gold, color: C.bg, borderRadius: 6 }}
              >
                {property.badge}
              </span>
              <h1
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display), system-ui" }}
              >
                {property.title}
              </h1>
              <div className="flex items-center gap-2">
                <MapPin size={16} style={{ color: C.muted }} />
                <span className="text-sm" style={{ color: C.muted }}>{property.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}
              >
                {formatPriceFull(property.price)}
              </p>
              <div className="flex gap-2">
                <button
                  className="p-3 rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}` }}
                >
                  <Heart size={18} style={{ color: C.muted }} />
                </button>
                <button
                  className="p-3 rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}` }}
                >
                  <Share2 size={18} style={{ color: C.muted }} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── SPECS BAR ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <Reveal type="slide-up" delay={0.1}>
          <div
            className="flex flex-wrap gap-4 md:gap-0 p-6"
            style={{
              background: C.surface,
              borderRadius: 16,
              border: `1px solid rgba(255,255,255,0.06)`,
            }}
          >
            {property.specs.map((spec, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 md:px-6 py-2"
                style={i > 0 ? { borderLeft: `1px solid ${C.border}` } : undefined}
              >
                <spec.icon size={18} style={{ color: C.gold }} />
                <span className="text-sm font-medium" style={{ color: C.white }}>
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── MAIN CONTENT GRID ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left column: description, features, floor plan */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <Reveal type="slide-up">
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display), system-ui" }}
                >
                  Property Overview
                </h2>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <p>
                    This exceptional penthouse occupies the entire 15th floor of one of Sliema&apos;s most prestigious waterfront developments. With 180 square metres of refined living space and uninterrupted Mediterranean sea views, this property represents the pinnacle of coastal luxury in Malta.
                  </p>
                  <p>
                    The open-plan living area flows seamlessly onto a wraparound terrace, creating an extraordinary indoor-outdoor living experience. Floor-to-ceiling windows frame panoramic views stretching from Valletta&apos;s historic skyline to the distant horizon, flooding every room with natural light throughout the day.
                  </p>
                  <p>
                    Every detail has been considered, from the imported Italian marble flooring and bespoke cabinetry to the fully integrated smart home system. The property includes two secure underground parking spaces and access to the building&apos;s private residents&apos; facilities including an infinity pool, gymnasium, and 24-hour concierge service.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Features grid */}
            <Reveal type="slide-up" delay={0.1}>
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display), system-ui" }}
                >
                  Property Features
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        borderRadius: 12,
                        border: `1px solid rgba(255,255,255,0.04)`,
                      }}
                    >
                      <f.icon size={18} style={{ color: C.gold }} />
                      <span className="text-sm" style={{ color: C.white }}>{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Floor plan placeholder */}
            <Reveal type="slide-up" delay={0.15}>
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display), system-ui" }}
                >
                  Floor Plan
                </h2>
                <div
                  className="flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: 16,
                    border: `1px dashed ${C.border}`,
                    height: 300,
                  }}
                >
                  <div className="text-center">
                    <Layers size={48} style={{ color: C.border, margin: "0 auto 12px" }} />
                    <p className="text-sm font-medium" style={{ color: C.muted }}>
                      Floor plan available on request
                    </p>
                    <button
                      className="mt-4 px-6 py-2 text-sm font-semibold transition-all"
                      style={{
                        background: "transparent",
                        color: C.gold,
                        borderRadius: 8,
                        border: `1px solid ${C.gold}`,
                      }}
                    >
                      Request Floor Plan
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column: agent card + calculator */}
          <div className="space-y-8">
            {/* Agent card */}
            <Reveal type="slide-up" delay={0.1}>
              <div
                className="p-8"
                style={{
                  background: C.surface,
                  borderRadius: 20,
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 flex items-center justify-center text-xl font-bold"
                    style={{
                      background: "rgba(212,168,83,0.15)",
                      borderRadius: 16,
                      color: C.gold,
                      fontFamily: "var(--font-display), system-ui",
                    }}
                  >
                    SM
                  </div>
                  <div>
                    <h4
                      className="text-base font-semibold"
                      style={{ color: C.white, fontFamily: "var(--font-display), system-ui" }}
                    >
                      Sarah Mifsud
                    </h4>
                    <p className="text-xs mt-0.5" style={{ color: C.muted }}>
                      Senior Property Consultant
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone size={14} style={{ color: C.gold }} />
                    <span className="text-sm" style={{ color: C.muted }}>+356 9912 3456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} style={{ color: C.gold }} />
                    <span className="text-sm" style={{ color: C.muted }}>sarah@mediterraneanliving.com</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    className="w-full flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all"
                    style={{ background: C.gold, color: C.bg, borderRadius: 12 }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
                  >
                    <Phone size={16} />
                    Schedule Viewing
                  </button>
                  <button
                    className="w-full flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all"
                    style={{
                      background: "transparent",
                      color: C.white,
                      borderRadius: 12,
                      border: `1px solid rgba(255,255,255,0.15)`,
                    }}
                  >
                    <Mail size={16} />
                    Send Message
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Mortgage calculator */}
            <Reveal type="slide-up" delay={0.2}>
              <MortgageCalculator propertyPrice={property.price} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SIMILAR PROPERTIES ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal type="slide-up">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] mb-4" style={{ color: C.gold }}>
              You May Also Like
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              Similar Properties
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarProperties.map((p, i) => (
            <Reveal key={p.id} type="slide-up" delay={i * 0.1}>
              <Link href="/demos/realestate/property">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden cursor-pointer"
                  style={{
                    background: C.surface,
                    borderRadius: 16,
                    border: `1px solid rgba(255,255,255,0.06)`,
                  }}
                >
                  <div className="relative overflow-hidden" style={{ height: 220 }}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wider"
                      style={{ background: C.gold, color: C.bg, borderRadius: 6 }}
                    >
                      FOR SALE
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-base mb-1" style={{ color: C.white, fontFamily: "var(--font-display), system-ui" }}>
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <MapPin size={13} style={{ color: C.muted }} />
                      <span className="text-xs" style={{ color: C.muted }}>{p.location}, Malta</span>
                    </div>
                    <p className="text-xl font-bold" style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}>
                      {formatPriceFull(p.price)}
                    </p>
                    <div className="flex items-center gap-4 mt-4 pt-4" style={{ borderTop: `1px solid rgba(255,255,255,0.06)` }}>
                      <div className="flex items-center gap-1.5">
                        <Bed size={14} style={{ color: C.muted }} />
                        <span className="text-xs" style={{ color: C.muted }}>{p.beds} Bed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath size={14} style={{ color: C.muted }} />
                        <span className="text-xs" style={{ color: C.muted }}>{p.baths} Bath</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize size={14} style={{ color: C.muted }} />
                        <span className="text-xs" style={{ color: C.muted }}>{p.sqm}m&sup2;</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <SiteFooter />
    </div>
  );
}
