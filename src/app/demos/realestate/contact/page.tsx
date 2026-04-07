"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, Clock, Send } from "lucide-react";
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
        background: "transparent",
        borderBottom: "none",
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
              style={{ color: l.label === "Contact" ? C.white : C.muted }}
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

const enquiryTypes = ["Buying", "Selling", "Renting", "Investment", "Valuation"];
const budgetOptions = ["Under \u20AC200,000", "\u20AC200,000 – \u20AC500,000", "\u20AC500,000 – \u20AC1,000,000", "\u20AC1,000,000 – \u20AC2,000,000", "Over \u20AC2,000,000"];

export default function ContactPage() {
  const [enquiry, setEnquiry] = useState("Buying");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    color: C.white,
    padding: "12px 16px",
    fontSize: 14,
    width: "100%",
    outline: "none",
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
            CONTACT
          </p>
          <h1
            className="text-[36px] md:text-[44px] font-bold leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            Let&apos;s Start a Conversation
          </h1>
        </div>
      </section>

      {/* Split Layout */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[55%_45%] gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10"
            style={{
              background: C.surface,
              borderRadius: 20,
              border: `1px solid ${C.border}`,
            }}
          >
            {/* Enquiry type radio */}
            <label className="text-xs font-semibold uppercase tracking-wider mb-3 block" style={{ color: C.muted }}>
              I&apos;m interested in
            </label>
            <div className="flex flex-wrap gap-2 mb-6">
              {enquiryTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setEnquiry(type)}
                  className="px-4 py-2 text-sm font-medium transition-all"
                  style={{
                    borderRadius: 8,
                    border: `1px solid ${enquiry === type ? C.gold : C.border}`,
                    background: enquiry === type ? "rgba(212,168,83,0.12)" : "transparent",
                    color: enquiry === type ? C.gold : C.muted,
                  }}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: C.muted }}>Name</label>
                <input type="text" placeholder="Full name" style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: C.muted }}>Email</label>
                <input type="email" placeholder="Email address" style={inputStyle} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: C.muted }}>Phone</label>
                <input type="tel" placeholder="+356 ..." style={inputStyle} />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: C.muted }}>Budget</label>
                <select
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  defaultValue=""
                >
                  <option value="" disabled style={{ color: C.muted }}>Select budget</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} style={{ background: C.surface, color: C.white }}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: C.muted }}>Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              onClick={() => setToast("Thank you! Your enquiry has been received. We'll be in touch within 24 hours.")}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold transition-all w-full justify-center sm:w-auto"
              style={{ background: C.gold, color: C.bg, borderRadius: 10 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
            >
              <Send size={16} /> Send Enquiry
            </button>
          </motion.div>

          {/* Right: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Contact info */}
            <div
              className="p-8"
              style={{
                background: C.surface,
                borderRadius: 20,
                border: `1px solid ${C.border}`,
              }}
            >
              <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: "var(--font-display), system-ui" }}>
                Contact Information
              </h3>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,168,83,0.1)", borderRadius: 10 }}>
                  <Phone size={18} style={{ color: C.gold }} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">Phone</p>
                  <p className="text-sm" style={{ color: C.muted }}>+356 2134 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,168,83,0.1)", borderRadius: 10 }}>
                  <Mail size={18} style={{ color: C.gold }} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">Email</p>
                  <p className="text-sm" style={{ color: C.muted }}>info@mediterraneanliving.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,168,83,0.1)", borderRadius: 10 }}>
                  <MapPin size={18} style={{ color: C.gold }} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">Office</p>
                  <p className="text-sm" style={{ color: C.muted }}>Tower Road, Sliema SLM 1600, Malta</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,168,83,0.1)", borderRadius: 10 }}>
                  <Clock size={18} style={{ color: C.gold }} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">Office Hours</p>
                  <p className="text-sm" style={{ color: C.muted }}>Mon &ndash; Fri: 9:00 &ndash; 18:00</p>
                  <p className="text-sm" style={{ color: C.muted }}>Sat: 10:00 &ndash; 14:00</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="flex-1 min-h-[240px] flex items-center justify-center"
              style={{
                background: C.surface,
                borderRadius: 20,
                border: `1px solid ${C.border}`,
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212,168,83,0.06) 0%, transparent 70%)",
              }}
            >
              <div className="text-center">
                <MapPin size={32} style={{ color: C.gold, margin: "0 auto 8px" }} />
                <p className="text-sm font-medium mb-1">Sliema, Malta</p>
                <p className="text-xs" style={{ color: C.muted }}>Interactive map coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 text-sm font-medium max-w-md text-center"
            style={{
              background: C.surface,
              border: `1px solid ${C.gold}`,
              borderRadius: 12,
              color: C.white,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
