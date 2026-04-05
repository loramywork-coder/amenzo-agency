"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, MapPin, Bed, Bath, Maximize, Phone, Mail, ChevronDown,
  Home, Building2, Shield, TrendingUp, Globe, Award, ArrowRight,
  Clock, Briefcase, BarChart3, Heart, Star, Quote, Menu, X,
} from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { DemoBanner } from "@/components/demos/demo-banner";
import { VideoHeroBg } from "@/components/video-hero-bg";
import Counter from "@/components/demos/Counter";
import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";

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

interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  price: number;
  beds: number;
  baths: number;
  sqm: number;
  image: string;
  badge?: string;
}

const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Seaview Penthouse, Sliema",
    location: "Sliema",
    type: "Penthouse",
    price: 1450000,
    beds: 3,
    baths: 2,
    sqm: 180,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    badge: "FOR SALE",
  },
  {
    id: 2,
    title: "Historic Townhouse, Valletta",
    location: "Valletta",
    type: "Townhouse",
    price: 680000,
    beds: 4,
    baths: 3,
    sqm: 220,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?w=800&q=80",
    badge: "FOR SALE",
  },
  {
    id: 3,
    title: "Luxury Villa, Madliena",
    location: "Madliena",
    type: "Villa",
    price: 2200000,
    beds: 5,
    baths: 4,
    sqm: 350,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    badge: "FOR SALE",
  },
];

const areas = [
  { name: "Valletta", count: 24, image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=600&q=80&auto=format&fit=crop" },
  { name: "Sliema", count: 31, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { name: "St Julian's", count: 18, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" },
  { name: "Gozo", count: 15, image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80" },
  { name: "Mdina", count: 8, image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80" },
  { name: "Madliena", count: 12, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" },
];

const whyCards = [
  { icon: Shield, title: "Licensed & Regulated", desc: "Fully licensed by the Malta Financial Services Authority with complete regulatory compliance." },
  { icon: Globe, title: "International Reach", desc: "Global network spanning 40+ countries connecting buyers and sellers across borders." },
  { icon: Briefcase, title: "End-to-End Service", desc: "From property search to key handover, we manage every step of your journey." },
  { icon: BarChart3, title: "Market Intelligence", desc: "Data-driven insights and proprietary analytics to ensure optimal investment decisions." },
];

const testimonials = [
  {
    name: "James & Claire Thornton",
    role: "Purchased Villa in Madliena",
    text: "Mediterranean Living made our relocation from London seamless. Their knowledge of the local market is unparalleled and they found us a property that exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Dr. Marco Bellini",
    role: "Investment Portfolio Client",
    text: "As an overseas investor, I needed a team I could trust entirely. Their transparency, market insights, and end-to-end management gave me complete confidence in every transaction.",
    rating: 5,
  },
  {
    name: "Sofia Andersson",
    role: "Purchased Penthouse in Sliema",
    text: "From the first viewing to handing over the keys, the experience was flawless. They understood exactly what we were looking for and delivered beyond our expectations.",
    rating: 5,
  },
];

/* ═══════════════════════════ HELPERS ═══════════════════════════ */

function formatPriceFull(n: number) {
  return `\u20AC${n.toLocaleString()}`;
}

/* ═══════════════════════════ NAV ═════════════════════════════ */

function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Properties", href: "/demos/realestate/listings" },
    { label: "Areas", href: "#areas" },
    { label: "Insights", href: "#why-us" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      className="fixed left-0 right-0 z-50 transition-all duration-500"
      style={{
        top: 40,
        background: "rgba(10,15,28,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/demos/realestate" className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display), system-ui", color: C.white }}
          >
            MEDITERRANEAN{" "}
            <span style={{ color: C.gold }}>LIVING</span>
          </span>
        </Link>

        {/* Hamburger toggle */}
        <button
          className="p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} style={{ color: C.white }} /> : <Menu size={22} style={{ color: C.white }} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
            style={{ background: "rgba(10,15,28,0.98)", borderBottom: `1px solid ${C.border}` }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium py-2"
                  style={{ color: C.muted }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 text-sm font-semibold text-center mt-2"
                style={{ background: C.gold, color: C.bg, borderRadius: 10 }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ═══════════════════════════ DROPDOWN ══════════════════════════ */

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  icon: React.ReactNode;
}

function SearchDropdown({ label, options, value, onChange, icon }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative flex-1 min-w-[180px]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${open ? C.gold : "rgba(255,255,255,0.1)"}`,
          borderRadius: 12,
          color: value === options[0] ? C.muted : C.white,
        }}
      >
        <span style={{ color: C.gold }}>{icon}</span>
        <span className="flex-1 truncate text-sm">{value || label}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} style={{ color: C.muted }} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 right-0 mt-2 z-50 overflow-hidden"
            style={{
              background: C.surface,
              border: `1px solid ${C.goldBorder}`,
              borderRadius: 12,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className="w-full text-left px-5 py-3 text-sm transition-all"
                style={{
                  color: opt === value ? C.gold : C.white,
                  background: opt === value ? "rgba(212,168,83,0.08)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (opt !== value) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = opt === value ? "rgba(212,168,83,0.08)" : "transparent";
                }}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════ PROPERTY CARD ═════════════════════════ */

function PropertyCard({ p, large = false }: { p: Property; large?: boolean }) {
  return (
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
        <div className="relative overflow-hidden" style={{ height: large ? 280 : 220 }}>
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes={large ? "(max-width:768px) 100vw, 33vw" : "(max-width:768px) 100vw, 25vw"}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
          {p.badge && (
            <span
              className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wider"
              style={{ background: C.gold, color: C.bg, borderRadius: 6 }}
            >
              {p.badge}
            </span>
          )}
          <button
            className="absolute top-4 right-4 p-2 rounded-full transition-colors"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
            onClick={(e) => e.preventDefault()}
          >
            <Heart size={16} style={{ color: C.white }} />
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-base" style={{ color: C.white, fontFamily: "var(--font-display), system-ui" }}>
                {p.title}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <MapPin size={13} style={{ color: C.muted }} />
                <span className="text-xs" style={{ color: C.muted }}>{p.location}, Malta</span>
              </div>
            </div>
          </div>

          <p className="text-xl font-bold mt-3" style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}>
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
                  style={{
                    background: "rgba(212,168,83,0.1)",
                    borderRadius: 8,
                    color: C.gold,
                  }}
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

export default function RealEstatePage() {
  const listingsRef = useRef<HTMLDivElement>(null);

  /* Search state */
  const locationOptions = ["All Malta", "Valletta", "Sliema", "St Julian's", "Gozo", "Mellieha"];
  const typeOptions = ["All Types", "Apartment", "Penthouse", "Villa", "Townhouse", "Farmhouse"];
  const budgetOptions = ["Any Budget", "Under \u20AC200K", "\u20AC200-500K", "\u20AC500K-1M", "\u20AC1M+"];

  const [location, setLocation] = useState(locationOptions[0]);
  const [type, setType] = useState(typeOptions[0]);
  const [budget, setBudget] = useState(budgetOptions[0]);

  /* Testimonial rotation */
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    listingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: C.bg, color: C.white }} className="pt-10">
      <DemoBanner />
      <SiteNav />

      {/* ─── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center" style={{ minHeight: "100vh", position: "relative" }}>
        <VideoHeroBg src="/videos/demo-realestate.mp4" gradient="linear-gradient(to bottom, rgba(10,15,28,0.4) 0%, rgba(10,15,28,0.25) 40%, rgba(10,15,28,0.65) 75%, rgba(10,15,28,0.95) 95%)" startOpacity={0.7} />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center" style={{ position: "relative", zIndex: 2 }}>
          <Reveal type="fade" duration={1}>
            <p className="text-sm uppercase tracking-[0.3em] mb-6" style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}>
              Mediterranean Property Specialists
            </p>
          </Reveal>

          <Reveal type="slide-up" delay={0.15}>
            <h1
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontFamily: "var(--font-display), system-ui",
              }}
            >
              Find Your Dream{" "}
              <br />
              <span style={{ color: C.gold }}>Home in the Mediterranean</span>
            </h1>
          </Reveal>

          <Reveal type="fade" delay={0.3}>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Discover exceptional properties across the Maltese islands. From historic townhouses to contemporary penthouses with Mediterranean views.
            </p>
          </Reveal>

          {/* ── SEARCH BAR ─────────────────────── */}
          <Reveal type="slide-up" delay={0.45}>
            <div
              className="p-3 flex flex-wrap gap-3 items-center"
              style={{
                background: "rgba(17,24,39,0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: 16,
                border: `1px solid rgba(255,255,255,0.08)`,
              }}
            >
              <SearchDropdown
                label="Location"
                options={locationOptions}
                value={location}
                onChange={setLocation}
                icon={<MapPin size={18} />}
              />
              <SearchDropdown
                label="Type"
                options={typeOptions}
                value={type}
                onChange={setType}
                icon={<Home size={18} />}
              />
              <SearchDropdown
                label="Budget"
                options={budgetOptions}
                value={budget}
                onChange={setBudget}
                icon={<Building2 size={18} />}
              />
              <button
                onClick={handleSearch}
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm transition-all"
                style={{
                  background: C.gold,
                  color: C.bg,
                  borderRadius: 12,
                  minWidth: 140,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} style={{ color: "rgba(255,255,255,0.3)" }} />
        </motion.div>
      </section>

      {/* ─── 2. FEATURED PROPERTIES ───────────────────────────── */}
      <section className="py-24 px-6" ref={listingsRef}>
        <div className="max-w-7xl mx-auto">
          <Reveal type="slide-up">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.25em] mb-4" style={{ color: C.gold }}>
                Handpicked Selection
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display), system-ui" }}
              >
                Featured Properties
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((p, i) => (
              <Reveal key={p.id} type="slide-up" delay={i * 0.12}>
                <PropertyCard p={p} large />
              </Reveal>
            ))}
          </div>

          <Reveal type="fade" delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/demos/realestate/listings"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: C.gold }}
              >
                View All Properties <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 3. STATS ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal type="scale">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 md:p-16"
              style={{
                background: `linear-gradient(135deg, ${C.surface} 0%, rgba(212,168,83,0.06) 100%)`,
                borderRadius: 24,
                border: `1px solid ${C.goldBorder}`,
              }}
            >
              {[
                { target: 120, suffix: "+", label: "Properties Listed" },
                { target: 340, prefix: "\u20AC", suffix: "M", label: "Portfolio Value" },
                { target: 98, suffix: "%", label: "Client Satisfaction" },
                { target: 48, suffix: "hr", label: "Avg. Response Time" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}
                  >
                    <Counter target={s.target} prefix={s.prefix || ""} suffix={s.suffix} />
                  </div>
                  <p className="text-sm" style={{ color: C.muted }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 4. AREAS ─────────────────────────────────────────── */}
      <section id="areas" className="py-24 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal type="slide-up">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.25em] mb-4" style={{ color: C.gold }}>
                Explore Locations
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-display), system-ui" }}
              >
                Popular Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <Reveal key={area.name} type="scale" delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ borderRadius: 16, height: 220 }}
                >
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(10,15,28,0.85) 0%, rgba(10,15,28,0.3) 100%)" }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-display), system-ui" }}
                    >
                      {area.name}
                    </h3>
                    <p className="text-sm" style={{ color: C.muted }}>
                      {area.count} Properties
                    </p>
                  </div>
                  <div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center"
                      style={{ background: C.gold, borderRadius: 10 }}
                    >
                      <ArrowRight size={18} style={{ color: C.bg }} />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHY US ────────────────────────────────────────── */}
      <section id="why-us" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal type="slide-up">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.25em] mb-4" style={{ color: C.gold }}>
                The Difference
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-display), system-ui" }}
              >
                Why Choose Us
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <Reveal key={i} type="slide-up" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, borderColor: C.gold }}
                  transition={{ duration: 0.3 }}
                  className="p-8 h-full"
                  style={{
                    background: C.surface,
                    borderRadius: 16,
                    border: `1px solid rgba(255,255,255,0.06)`,
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(212,168,83,0.1)",
                      borderRadius: 14,
                    }}
                  >
                    <card.icon size={24} style={{ color: C.gold }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ fontFamily: "var(--font-display), system-ui", color: C.white }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {card.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal type="slide-up">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.25em] mb-4" style={{ color: C.gold }}>
                Client Stories
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-display), system-ui" }}
              >
                What Our Clients Say
              </h2>
            </div>
          </Reveal>

          <div className="relative" style={{ minHeight: 280 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <Quote size={40} style={{ color: C.gold, opacity: 0.4 }} />
                </div>
                <p
                  className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={16} fill={C.gold} style={{ color: C.gold }} />
                  ))}
                </div>
                <p className="font-semibold text-base" style={{ color: C.white, fontFamily: "var(--font-display), system-ui" }}>
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-sm mt-1" style={{ color: C.muted }}>
                  {testimonials[activeTestimonial].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  background: i === activeTestimonial ? C.gold : "rgba(255,255,255,0.15)",
                  transform: i === activeTestimonial ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. CTA ───────────────────────────────────────────── */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal type="scale">
            <p className="text-sm uppercase tracking-[0.25em] mb-6" style={{ color: C.gold }}>
              Ready to Move?
            </p>
            <h2
              className="font-bold mb-8 leading-tight"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontFamily: "var(--font-display), system-ui",
              }}
            >
              Your Next Chapter<br />Starts Here
            </h2>
            <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: C.muted }}>
              Whether you are buying your first home or expanding your portfolio, our team is ready to guide you every step of the way.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm"
                  style={{
                    background: C.gold,
                    color: C.bg,
                    borderRadius: 12,
                  }}
                >
                  <Award size={18} />
                  Schedule Viewing
                </span>
              </MagneticButton>

              <MagneticButton>
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm"
                  style={{
                    background: "transparent",
                    color: C.white,
                    borderRadius: 12,
                    border: `1px solid rgba(255,255,255,0.2)`,
                  }}
                >
                  <Phone size={18} />
                  Call Us
                </span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <SiteFooter />
    </div>
  );
}
