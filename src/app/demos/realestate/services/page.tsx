"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
} as const;

/* ═══════════════════════════ DATA ═══════════════════════════ */

const services = [
  {
    icon: "\uD83C\uDFE0",
    title: "Property Search",
    desc: "Access our curated portfolio of premium Maltese properties. Our consultants hand-pick options tailored to your lifestyle, budget, and investment goals — saving you weeks of searching.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Valuation",
    desc: "Receive accurate, data-driven property valuations backed by 15 years of market intelligence. We analyse comparable sales, district trends, and development potential to determine true market value.",
  },
  {
    icon: "\u2696\uFE0F",
    title: "Legal Support",
    desc: "Navigate Maltese property law with confidence. Our in-house legal coordinators manage title searches, contract review, notarial deeds, and compliance with local and EU regulations.",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "Investment Advisory",
    desc: "Maximise returns with strategic guidance on rental yields, capital growth corridors, and residency-linked investment programmes including the Malta Permanent Residence Programme.",
  },
  {
    icon: "\uD83D\uDD11",
    title: "Property Management",
    desc: "Protect your asset while you are away. We offer full-service management including tenant sourcing, maintenance coordination, financial reporting, and regulatory compliance.",
  },
  {
    icon: "\u2708\uFE0F",
    title: "Relocation Assistance",
    desc: "Moving to Malta? We handle everything beyond the property — school enrolment, healthcare registration, banking setup, and community introductions to make your transition seamless.",
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
    { label: "Services", href: "/demos/realestate/services" },
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
              style={{ color: l.label === "Services" ? C.white : C.muted }}
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
              {["Properties", "Areas", "Services", "About Us", "Contact"].map((item) => (
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

export default function ServicesPage() {
  return (
    <div style={{ background: C.bg, color: C.white, minHeight: "100vh" }}>
      <DemoBanner />
      <SiteNav />

      {/* Hero */}
      <section className="pt-10">
        <div className="pt-32 pb-20 px-6 text-center">
          <Reveal type="fade" delay={0.1}>
            <p
              className="text-sm font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: C.gold }}
            >
              WHAT WE DO
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <h1
              className="text-[36px] md:text-[52px] font-bold leading-tight max-w-3xl mx-auto mb-6"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              Our Services
            </h1>
          </Reveal>
          <Reveal type="slide-up" delay={0.35}>
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: C.muted }}
            >
              From your first enquiry to the day you collect the keys, we provide end-to-end support across every aspect of the Maltese property journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex justify-center pb-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px" style={{ background: C.border }} />
          <div className="w-2 h-2 rotate-45" style={{ background: C.gold }} />
          <div className="w-12 h-px" style={{ background: C.border }} />
        </div>
      </div>

      {/* Services Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} type="slide-up" delay={i * 0.08}>
              <motion.div
                className="group relative p-8 h-full transition-all duration-500 cursor-default"
                style={{
                  background: C.surface,
                  borderRadius: 20,
                  border: `1px solid ${C.border}`,
                }}
                whileHover={{
                  borderColor: "rgba(212,168,83,0.3)",
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    borderRadius: 20,
                    background: "radial-gradient(ellipse at top left, rgba(212,168,83,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-2xl mb-6"
                    style={{
                      borderRadius: 14,
                      background: "rgba(212,168,83,0.08)",
                      border: "1px solid rgba(212,168,83,0.15)",
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ fontFamily: "var(--font-display), system-ui" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {service.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: C.gold }}>
                    <span>Learn more</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                    >
                      &rarr;
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process Strip */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal type="slide-up">
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-14"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              How It Works
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Consultation", text: "Share your goals and preferences in a free strategy session." },
              { step: "02", label: "Shortlist", text: "We curate a tailored selection from our exclusive portfolio." },
              { step: "03", label: "Viewings", text: "Tour properties with your dedicated consultant at your pace." },
              { step: "04", label: "Completion", text: "We handle negotiations, legal, and handover seamlessly." },
            ].map((item, i) => (
              <Reveal key={item.step} type="slide-up" delay={i * 0.1}>
                <div className="text-center p-6">
                  <div
                    className="text-3xl font-bold mb-3"
                    style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}
                  >
                    {item.step}
                  </div>
                  <h4 className="text-base font-semibold mb-2">{item.label}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <Reveal type="scale">
          <div
            className="max-w-4xl mx-auto text-center py-16 px-8"
            style={{
              background: "linear-gradient(135deg, rgba(212,168,83,0.1) 0%, rgba(212,168,83,0.03) 100%)",
              border: `1px solid rgba(212,168,83,0.2)`,
              borderRadius: 24,
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              Ready to find your dream property?
            </h2>
            <p className="text-sm md:text-base mb-8 max-w-lg mx-auto" style={{ color: C.muted }}>
              Book a complimentary consultation with one of our senior advisors and take the first step towards your new life in Malta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demos/realestate/contact"
                className="px-8 py-3.5 text-sm font-semibold transition-all"
                style={{ background: C.gold, color: C.bg, borderRadius: 12 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
              >
                Book a Consultation
              </Link>
              <Link
                href="/demos/realestate/listings"
                className="px-8 py-3.5 text-sm font-semibold transition-all"
                style={{
                  background: "transparent",
                  color: C.white,
                  borderRadius: 12,
                  border: `1px solid ${C.border}`,
                }}
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
