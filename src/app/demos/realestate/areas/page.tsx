"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ═══════════════════════════ PALETTE ═══════════════════════════ */

const C = {
  bg: "#0A0F1C",
  surface: "#111827",
  gold: "#D4A853",
  white: "#FFFFFF",
  muted: "#6B7280",
  border: "#1F2937",
  goldHover: "#E4B863",
} as const;

/* ═══════════════════════════ DATA ═══════════════════════════ */

const areasData = [
  {
    name: "Valletta",
    count: 24,
    avgPrice: "4,200",
    image: "https://images.unsplash.com/photo-1568538001655-0d85c0e0f1b3?w=1200&q=80",
    description:
      "Malta's UNESCO-listed capital is a masterclass in Baroque architecture and Mediterranean charm. Its compact grid of golden limestone streets houses some of the island's most exclusive addresses. Valletta offers a rare combination of cultural heritage, waterfront living, and vibrant gastronomy.",
  },
  {
    name: "Sliema",
    count: 31,
    avgPrice: "3,800",
    image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=1200&q=80",
    description:
      "Sliema is Malta's cosmopolitan waterfront hub, stretching along a scenic promenade with panoramic harbour views. The area blends modern high-rise living with charming townhouses and is home to premier shopping, dining, and nightlife. Its central location makes it the preferred base for professionals and expats alike.",
  },
  {
    name: "St. Julian's",
    count: 18,
    avgPrice: "4,500",
    image: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1200&q=80",
    description:
      "Once a quiet fishing village, St. Julian's has evolved into Malta's entertainment and luxury living capital. The Portomaso and Tigne developments offer world-class residences with marina access. Demand for premium property here consistently outpaces supply, making it a top-tier investment destination.",
  },
  {
    name: "Gozo",
    count: 15,
    avgPrice: "2,200",
    image: "https://images.unsplash.com/photo-1584890131872-27e1a54e2623?w=1200&q=80",
    description:
      "Malta's sister island offers a slower pace of life set against dramatic cliffs, terraced hills, and crystal-clear waters. Gozo is increasingly popular with remote workers and retirees seeking tranquillity without sacrificing quality. Property prices remain significantly below the main island, presenting strong value.",
  },
  {
    name: "Mdina",
    count: 8,
    avgPrice: "3,500",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80",
    description:
      "Known as the Silent City, Mdina is a fortified medieval town perched on a hilltop at the heart of Malta. Its narrow cobbled streets, ancient palazzos, and breathtaking bastions make it one of the most prestigious addresses on the island. Properties here are rare and highly sought after.",
  },
  {
    name: "Madliena",
    count: 10,
    avgPrice: "3,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    description:
      "Madliena is an upscale residential enclave on the northern ridge, prized for its spacious villas and lush gardens. The area offers panoramic countryside and sea views while remaining just minutes from the commercial centres. It is the neighbourhood of choice for families seeking privacy and prestige.",
  },
];

/* ═══════════════════════════ NAV ═══════════════════════════ */

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
    { label: "Areas", href: "/demos/realestate/areas" },
    { label: "Insights", href: "/demos/realestate/insights" },
    { label: "About", href: "/demos/realestate/about" },
    { label: "Contact", href: "/demos/realestate/contact" },
  ];

  return (
    <nav
      className="fixed top-10 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,15,28,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/demos/realestate" className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display), system-ui", color: C.white }}
          >
            MEDITERRANEAN <span style={{ color: C.gold }}>LIVING</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors hover:text-white"
              style={{ color: l.label === "Areas" ? C.white : C.muted }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demos/realestate/contact"
            className="px-5 py-2.5 text-sm font-semibold transition-all"
            style={{ background: C.gold, color: C.bg, borderRadius: 10 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
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
                href="/demos/realestate/contact"
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

/* ═══════════════════════════ FOOTER ═══════════════════════════ */

function SiteFooter() {
  return (
    <footer className="py-20 px-6" style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display), system-ui" }}>
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

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: C.white }}>Quick Links</h4>
              {["Properties", "Areas", "Insights", "About Us", "Careers"].map((item) => (
                <p key={item} className="text-sm mb-3 cursor-pointer transition-colors hover:text-white" style={{ color: C.muted }}>{item}</p>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: C.white }}>Areas</h4>
              {["Valletta", "Sliema", "St Julian's", "Gozo", "Mdina", "Madliena"].map((item) => (
                <p key={item} className="text-sm mb-3 cursor-pointer transition-colors hover:text-white" style={{ color: C.muted }}>{item}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: C.white }}>Get in Touch</h4>
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

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${C.border}` }}>
          <p className="text-xs" style={{ color: C.muted }}>&copy; 2026 Mediterranean Living. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <span key={item} className="text-xs cursor-pointer transition-colors hover:text-white" style={{ color: C.muted }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function AreasPage() {
  return (
    <div style={{ background: C.bg, color: C.white, minHeight: "100vh" }}>
      <DemoBanner />
      <SiteNav />

      {/* Hero */}
      <section className="pt-10">
        <div className="pt-32 pb-16 px-6 text-center">
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: C.gold }}
          >
            AREAS
          </p>
          <h1
            className="text-[36px] md:text-[44px] font-bold leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            Discover Malta&apos;s Neighbourhoods
          </h1>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: C.muted }}>
            From the historic capital to tranquil island retreats, explore the areas that define Mediterranean living at its finest.
          </p>
        </div>
      </section>

      {/* Area Sections */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {areasData.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Full-width image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: "40vh", minHeight: 280, borderRadius: 16 }}
              >
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 1200px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{ fontFamily: "var(--font-display), system-ui" }}
                  >
                    {area.name}
                  </h2>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider" style={{ color: C.muted }}>Properties</span>
                      <p className="text-lg font-semibold" style={{ color: C.gold }}>{area.count}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider" style={{ color: C.muted }}>Avg. Price/m&sup2;</span>
                      <p className="text-lg font-semibold" style={{ color: C.gold }}>&euro;{area.avgPrice}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {area.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/demos/realestate/listings"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all"
                    style={{
                      border: `1px solid ${C.gold}`,
                      borderRadius: 10,
                      color: C.gold,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.gold;
                      e.currentTarget.style.color = C.bg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = C.gold;
                    }}
                  >
                    View Properties <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
