"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Bed, Bath, Maximize, Phone, Mail, Heart,
  Menu, X, ArrowRight, ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { DemoBanner } from "@/components/demos/demo-banner";
import { useDemoToast, DemoToast } from "@/components/demos/demo-toast";
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
  badge: string;
}

const properties: Property[] = [
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
  {
    id: 4,
    title: "Modern Apartment, St Julian's",
    location: "St Julian's",
    type: "Apartment",
    price: 295000,
    beds: 2,
    baths: 1,
    sqm: 95,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    badge: "FOR SALE",
  },
  {
    id: 5,
    title: "Harbour Penthouse, Valletta",
    location: "Valletta",
    type: "Penthouse",
    price: 1850000,
    beds: 3,
    baths: 2,
    sqm: 200,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    badge: "FOR SALE",
  },
  {
    id: 6,
    title: "Converted Farmhouse, Gozo",
    location: "Gozo",
    type: "Farmhouse",
    price: 520000,
    beds: 4,
    baths: 3,
    sqm: 280,
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    badge: "FOR SALE",
  },
  {
    id: 7,
    title: "Seafront Villa, Mellieha",
    location: "Mellieha",
    type: "Villa",
    price: 3100000,
    beds: 6,
    baths: 5,
    sqm: 420,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    badge: "FOR SALE",
  },
  {
    id: 8,
    title: "Designer Flat, Sliema",
    location: "Sliema",
    type: "Apartment",
    price: 385000,
    beds: 2,
    baths: 1,
    sqm: 110,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    badge: "FOR SALE",
  },
  {
    id: 9,
    title: "Grand Townhouse, Mdina",
    location: "Mdina",
    type: "Townhouse",
    price: 890000,
    beds: 5,
    baths: 3,
    sqm: 300,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    badge: "FOR SALE",
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
            MALTA{" "}
            <span style={{ color: C.gold }}>LIVING</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors hover:text-white"
              style={{ color: l.label === "Properties" ? C.gold : C.muted }}
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

/* ═══════════════════════ PROPERTY CARD ═════════════════════════ */

function PropertyCard({ p }: { p: Property }) {
  return (
    <Link href="/demos/realestate/property">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden cursor-pointer h-full"
        style={{
          background: C.surface,
          borderRadius: 16,
          border: `1px solid rgba(255,255,255,0.06)`,
        }}
      >
        <div className="relative overflow-hidden" style={{ height: 240 }}>
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
            {p.badge}
          </span>
          <button
            className="absolute top-4 right-4 p-2 rounded-full transition-colors"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
            onClick={(e) => e.preventDefault()}
          >
            <Heart size={16} style={{ color: C.white }} />
          </button>
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
              <span style={{ color: C.white }}>MALTA </span>
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
              <span className="text-sm" style={{ color: C.muted }}>info@maltaliving.mt</span>
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
            &copy; 2026 Malta Living. All rights reserved.
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

export default function ListingsPage() {
  const { toast, showToast } = useDemoToast();

  return (
    <div style={{ background: C.bg, color: C.white }} className="pt-10">
      <DemoBanner />
      <SiteNav />
      <DemoToast message={toast} />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center px-6"
        style={{ minHeight: 420, paddingTop: 120, paddingBottom: 80 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${C.bg} 0%, rgba(212,168,83,0.05) 50%, ${C.bg} 100%)`,
          }}
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal type="fade">
            <p
              className="text-sm uppercase tracking-[0.3em] mb-6"
              style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}
            >
              Properties
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.15}>
            <h1
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(32px, 4.5vw, 44px)",
                fontFamily: "var(--font-display), system-ui",
              }}
            >
              Browse Our Portfolio
            </h1>
          </Reveal>
          <Reveal type="fade" delay={0.3}>
            <p className="text-lg max-w-xl mx-auto" style={{ color: C.muted }}>
              Explore our curated selection of premium properties across Malta and Gozo, handpicked for discerning buyers and investors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── PROPERTY GRID (3x3) ──────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal type="fade">
            <div className="flex items-center justify-between mb-10">
              <p className="text-sm" style={{ color: C.muted }}>
                Showing <span style={{ color: C.white }}>{properties.length}</span> properties
              </p>
              <div className="flex items-center gap-2 text-sm" style={{ color: C.muted }}>
                Sort by: <span style={{ color: C.gold }} className="font-medium">Newest</span>
                <ChevronDown size={14} style={{ color: C.gold }} />
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((p, i) => (
              <Reveal key={p.id} type="slide-up" delay={i * 0.06}>
                <PropertyCard p={p} />
              </Reveal>
            ))}
          </div>

          {/* Load More */}
          <Reveal type="fade" delay={0.5}>
            <div className="text-center mt-16">
              <button
                onClick={() => showToast("More listings coming soon")}
                className="inline-flex items-center gap-2 px-10 py-4 font-semibold text-sm transition-all"
                style={{
                  background: "transparent",
                  color: C.gold,
                  borderRadius: 12,
                  border: `1px solid ${C.gold}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,168,83,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Load More Properties
                <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <SiteFooter />
    </div>
  );
}
