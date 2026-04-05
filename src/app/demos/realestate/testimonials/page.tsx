"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, Star } from "lucide-react";
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

const testimonials = [
  {
    quote: "Mediterranean Living made what could have been an overwhelming process feel effortless. From our very first call, Marco understood exactly what we were looking for. Within three weeks we had viewed five outstanding properties and signed on our dream penthouse in Sliema.",
    name: "Richard & Emma Thornton",
    location: "London, United Kingdom",
    property: "Seafront Penthouse, Sliema",
    rating: 5,
  },
  {
    quote: "As a first-time investor in Mediterranean property, I needed a team I could trust completely. The valuation was thorough, the legal process was transparent, and the ROI has exceeded every projection. My Valletta apartment now generates consistent rental income year-round.",
    name: "Henrik Johansson",
    location: "Stockholm, Sweden",
    property: "Heritage Apartment, Valletta",
    rating: 5,
  },
  {
    quote: "We relocated our entire family from Munich to Malta and the transition was seamless. Mediterranean Living did not just find us a beautiful villa in Madliena — they helped with school enrolment, healthcare, and even introduced us to the local community. Truly above and beyond.",
    name: "Klaus & Ingrid Weber",
    location: "Munich, Germany",
    property: "Detached Villa, Madliena",
    rating: 5,
  },
  {
    quote: "I have purchased three investment properties through Mediterranean Living over the past six years. Each time, their market analysis identified opportunities ahead of the curve. The property management service means I never worry about my Maltese portfolio, even from abroad.",
    name: "Catherine Dubois",
    location: "Paris, France",
    property: "Multiple Investment Properties",
    rating: 5,
  },
  {
    quote: "The attention to detail was remarkable. Sophie coordinated viewings around our tight schedule, the legal team explained every clause in plain English, and the entire purchase completed in under eight weeks. No other agency we spoke to came close to this level of service.",
    name: "David & Sarah Chen",
    location: "Singapore",
    property: "Luxury Apartment, St Julian's",
    rating: 5,
  },
  {
    quote: "After retiring, my wife and I wanted somewhere warm, safe, and with excellent healthcare. Mediterranean Living found us the perfect farmhouse conversion in Gozo. James walked us through the residency programme and handled everything with patience and professionalism.",
    name: "Patrick O'Brien",
    location: "Dublin, Ireland",
    property: "Converted Farmhouse, Gozo",
    rating: 4,
  },
];

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15", label: "Years Experience" },
  { value: "40+", label: "Countries Served" },
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
    { label: "Testimonials", href: "/demos/realestate/testimonials" },
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
              style={{ color: l.label === "Testimonials" ? C.white : C.muted }}
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

/* ═══════════════════════════ STARS ═══════════════════════════ */

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? C.gold : "transparent"}
          style={{ color: i < count ? C.gold : C.border }}
        />
      ))}
    </div>
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
              {["Properties", "Areas", "Testimonials", "About Us", "Contact"].map((item) => (
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

export default function TestimonialsPage() {
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
              TESTIMONIALS
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <h1
              className="text-[36px] md:text-[52px] font-bold leading-tight max-w-3xl mx-auto mb-6"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              Client Stories
            </h1>
          </Reveal>
          <Reveal type="slide-up" delay={0.35}>
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: C.muted }}
            >
              Hear from the families, investors, and entrepreneurs who trusted us with one of the biggest decisions of their lives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="px-6 pb-20">
        <Reveal type="scale">
          <div
            className="max-w-4xl mx-auto py-10 px-8"
            style={{
              background: "rgba(212,168,83,0.06)",
              border: `1px solid rgba(212,168,83,0.15)`,
              borderRadius: 20,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: C.gold, fontFamily: "var(--font-display), system-ui" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm" style={{ color: C.muted }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Decorative divider */}
      <div className="flex justify-center pb-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px" style={{ background: C.border }} />
          <div className="w-2 h-2 rotate-45" style={{ background: C.gold }} />
          <div className="w-12 h-px" style={{ background: C.border }} />
        </div>
      </div>

      {/* Testimonials */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {testimonials.map((t, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={t.name}
                type={isEven ? "slide-left" : "slide-right"}
                delay={i * 0.06}
              >
                <motion.div
                  className="group relative overflow-hidden"
                  style={{
                    background: C.surface,
                    borderRadius: 24,
                    border: `1px solid ${C.border}`,
                  }}
                  whileHover={{
                    borderColor: "rgba(212,168,83,0.25)",
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Accent stripe */}
                  <div
                    className="absolute top-0 bottom-0 w-1"
                    style={{
                      left: isEven ? 0 : "auto",
                      right: isEven ? "auto" : 0,
                      background: `linear-gradient(to bottom, ${C.gold}, rgba(212,168,83,0.2))`,
                      borderRadius: isEven ? "24px 0 0 24px" : "0 24px 24px 0",
                    }}
                  />

                  <div className={`p-8 md:p-10 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    {/* Quote mark */}
                    <div
                      className="text-5xl leading-none font-serif mb-4 select-none"
                      style={{ color: "rgba(212,168,83,0.2)" }}
                    >
                      &ldquo;
                    </div>

                    <p
                      className="text-base md:text-lg leading-relaxed mb-8"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {t.quote}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div
                          className="w-12 h-12 flex items-center justify-center text-sm font-bold shrink-0"
                          style={{
                            borderRadius: "50%",
                            border: `2px solid ${C.gold}`,
                            color: C.gold,
                            background: "rgba(212,168,83,0.08)",
                          }}
                        >
                          {t.name
                            .split(" ")
                            .filter((_, idx) => idx === 0 || idx === t.name.split(" ").length - 1)
                            .map((w) => w[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{t.name}</p>
                          <p className="text-xs" style={{ color: C.muted }}>
                            {t.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1.5">
                        <Stars count={t.rating} />
                        <p
                          className="text-xs font-medium px-3 py-1"
                          style={{
                            background: "rgba(212,168,83,0.08)",
                            borderRadius: 8,
                            color: C.gold,
                          }}
                        >
                          {t.property}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="px-6 pb-24">
        <Reveal type="fade">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="text-6xl leading-none font-serif mb-4 select-none"
              style={{ color: "rgba(212,168,83,0.15)" }}
            >
              &ldquo;
            </div>
            <p
              className="text-xl md:text-2xl leading-relaxed font-light italic mb-6"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              We do not measure our success by the number of transactions we close, but by the number of clients who return to us, year after year.
            </p>
            <p className="text-sm font-semibold" style={{ color: C.gold }}>
              Marco Borg, Founder & CEO
            </p>
          </div>
        </Reveal>
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
              Ready to write your own story?
            </h2>
            <p className="text-sm md:text-base mb-8 max-w-lg mx-auto" style={{ color: C.muted }}>
              Join hundreds of satisfied clients who have found their perfect property in Malta. Your journey starts with a single conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demos/realestate/contact"
                className="px-8 py-3.5 text-sm font-semibold transition-all"
                style={{ background: C.gold, color: C.bg, borderRadius: 12 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
              >
                Start Your Journey
              </Link>
              <Link
                href="/demos/realestate/services"
                className="px-8 py-3.5 text-sm font-semibold transition-all"
                style={{
                  background: "transparent",
                  color: C.white,
                  borderRadius: 12,
                  border: `1px solid ${C.border}`,
                }}
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
