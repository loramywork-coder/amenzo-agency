"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, Shield, Eye, Globe, BarChart3 } from "lucide-react";
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

const team = [
  { initials: "MB", name: "Marco Borg", role: "Founder & CEO", languages: "English, Maltese, Italian" },
  { initials: "SC", name: "Sophie Camilleri", role: "Head of Sales", languages: "English, Maltese, French" },
  { initials: "JV", name: "James Vella", role: "Senior Consultant", languages: "English, Maltese, German" },
  { initials: "LZ", name: "Lara Zammit", role: "Marketing Director", languages: "English, Maltese, Spanish" },
];

const values = [
  { icon: Shield, title: "Licensed", desc: "Fully regulated by the Malta Financial Services Authority with complete legal compliance across all operations." },
  { icon: Eye, title: "Transparent", desc: "No hidden fees, no surprises. Every cost, every step, and every document is shared openly with our clients." },
  { icon: Globe, title: "International", desc: "A global network spanning 40+ countries, connecting international buyers with the finest Maltese properties." },
  { icon: BarChart3, title: "Data-Driven", desc: "Proprietary market analytics and valuation models ensure our clients make informed, confident investment decisions." },
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
            MALTA <span style={{ color: C.gold }}>LIVING</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors hover:text-white"
              style={{ color: l.label === "About" ? C.white : C.muted }}
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

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${C.border}` }}>
          <p className="text-xs" style={{ color: C.muted }}>&copy; 2026 Malta Living. All rights reserved.</p>
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

export default function AboutPage() {
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
            ABOUT
          </p>
          <h1
            className="text-[36px] md:text-[44px] font-bold leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            Malta&apos;s Most Trusted Agency
          </h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p className="text-base leading-relaxed" style={{ color: C.muted }}>
            Founded in 2008, Malta Living was born from a simple conviction: that international buyers deserve the same quality of service, transparency, and market expertise that was traditionally reserved for local insiders. What began as a boutique consultancy in Sliema has grown into the island&apos;s most respected full-service real estate agency.
          </p>
          <p className="text-base leading-relaxed" style={{ color: C.muted }}>
            Over the past 18 years we have guided more than 2,000 families, investors, and entrepreneurs through every stage of the Maltese property journey. Our team combines deep local knowledge with a truly global perspective, serving clients from over 40 countries in seven languages. We do not simply list properties; we build long-term relationships founded on trust and results.
          </p>
          <p className="text-base leading-relaxed" style={{ color: C.muted }}>
            Today, Malta Living manages a curated portfolio of premium residences, commercial spaces, and development projects across every major district. We remain independently owned, fiercely client-focused, and committed to raising the standard of real estate practice in Malta.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
                style={{
                  background: C.surface,
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  className="w-20 h-20 mx-auto flex items-center justify-center text-xl font-bold mb-4"
                  style={{
                    borderRadius: "50%",
                    border: `2px solid ${C.gold}`,
                    color: C.gold,
                    background: "rgba(212,168,83,0.08)",
                  }}
                >
                  {member.initials}
                </div>
                <h3 className="text-base font-semibold mb-1">{member.name}</h3>
                <p className="text-sm mb-2" style={{ color: C.gold }}>{member.role}</p>
                <p className="text-xs" style={{ color: C.muted }}>{member.languages}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6"
                style={{
                  background: C.surface,
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-4"
                  style={{
                    borderRadius: 12,
                    background: "rgba(212,168,83,0.1)",
                  }}
                >
                  <val.icon size={22} style={{ color: C.gold }} />
                </div>
                <h3 className="text-base font-semibold mb-2">{val.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="px-6 pb-20">
        <div
          className="max-w-4xl mx-auto text-center py-10 px-8"
          style={{
            background: "rgba(212,168,83,0.06)",
            border: `1px solid rgba(212,168,83,0.15)`,
            borderRadius: 16,
          }}
        >
          <Shield size={32} style={{ color: C.gold, margin: "0 auto 12px" }} />
          <h3 className="text-lg font-semibold mb-2">Licensed by MFSA</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
            Malta Living is fully licensed and regulated by the Malta Financial Services Authority under Licence No. C-84729. We operate with full transparency and in strict compliance with Maltese and EU property legislation.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
