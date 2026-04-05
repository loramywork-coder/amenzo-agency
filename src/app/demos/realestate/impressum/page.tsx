"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
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
              style={{ color: C.muted }}
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

export default function ImpressumPage() {
  const sectionStyle: React.CSSProperties = {
    background: C.surface,
    borderRadius: 16,
    border: `1px solid ${C.border}`,
    padding: "32px",
    marginBottom: "20px",
  };

  return (
    <div style={{ background: C.bg, color: C.white, minHeight: "100vh" }}>
      <DemoBanner />
      <SiteNav />

      {/* Hero */}
      <section className="pt-10">
        <div className="pt-32 pb-12 px-6 text-center">
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: C.gold }}
          >
            LEGAL
          </p>
          <h1
            className="text-[36px] md:text-[44px] font-bold leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Company Information */}
          <div style={sectionStyle}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: C.gold }}>Company Information</h2>
            <div className="space-y-2 text-sm leading-relaxed" style={{ color: C.muted }}>
              <p><strong style={{ color: C.white }}>Mediterranean Living Ltd.</strong></p>
              <p>Tower Road, Sliema SLM 1600, Malta</p>
              <p>Registration No.: C-58234</p>
              <p>VAT No.: MT 2458-7231</p>
            </div>
          </div>

          {/* Regulatory Licence */}
          <div style={sectionStyle}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: C.gold }}>Regulatory Licence</h2>
            <div className="space-y-2 text-sm leading-relaxed" style={{ color: C.muted }}>
              <p>
                Mediterranean Living Ltd. is licensed by the <strong style={{ color: C.white }}>Malta Financial Services Authority (MFSA)</strong> to provide property brokerage and advisory services under Licence No. <strong style={{ color: C.white }}>C-84729</strong>.
              </p>
              <p>
                The company operates in full compliance with the Maltese Estate Agents Act (Cap. 615) and all applicable EU directives governing property transactions and consumer protection.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div style={sectionStyle}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: C.gold }}>Contact</h2>
            <div className="space-y-2 text-sm leading-relaxed" style={{ color: C.muted }}>
              <p>Telephone: +356 2134 5678</p>
              <p>Email: info@mediterraneanliving.com</p>
              <p>Website: www.mediterraneanliving.com</p>
            </div>
          </div>

          {/* Managing Directors */}
          <div style={sectionStyle}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: C.gold }}>Managing Directors</h2>
            <div className="space-y-1 text-sm leading-relaxed" style={{ color: C.muted }}>
              <p>Marco Borg, CEO</p>
              <p>Sophie Camilleri, Head of Sales</p>
            </div>
          </div>

          {/* Liability */}
          <div style={sectionStyle}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: C.gold }}>Liability Disclaimer</h2>
            <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
              All property listings, prices, descriptions, and images on this website are provided for informational purposes only and do not constitute a binding offer. While Mediterranean Living Ltd. takes reasonable care to ensure accuracy, we accept no liability for errors, omissions, or changes in the information presented. Prospective buyers and tenants are advised to verify all details independently before making any decisions.
            </p>
          </div>

          {/* Demo Disclaimer */}
          <div
            className="text-center py-8 px-6"
            style={{
              background: "rgba(212,168,83,0.06)",
              border: `1px solid rgba(212,168,83,0.15)`,
              borderRadius: 16,
            }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: C.gold }}>Demo Disclaimer</p>
            <p className="text-xs leading-relaxed max-w-lg mx-auto" style={{ color: C.muted }}>
              This website is a design demonstration created by Amenzo. Mediterranean Living is a fictitious company. No real properties are listed, no transactions can be made, and no personal data is collected or stored. All names, addresses, and licence numbers are fictional.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
