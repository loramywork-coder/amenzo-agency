"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  SmilePlus,
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  CalendarCheck,
  Menu,
  X,
  Siren,
  Check,
  Shield,
  CreditCard,
  BadgePercent,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   PALETTE & TOKENS
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg: "#0A1015",
  surface: "#111920",
  teal: "#0EA5E9",
  tealDark: "#0284C7",
  white: "#F8FAFC",
  muted: "#64748B",
  mutedLight: "#94A3B8",
  border: "#1E293B",
  gold: "#F59E0B",
};

const FONT =
  "var(--font-display), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

/* ═══════════════════════════════════════════════════════════
   REVEAL
   ═══════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, threshold]);
  return { ref: setRef, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Services", href: "/demos/dental/services" },
  { label: "Team", href: "/demos/dental/team" },
  { label: "Technology", href: "/demos/dental/technology" },
  { label: "Reviews", href: "/demos/dental/reviews" },
  { label: "FAQ", href: "/demos/dental/faq" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 40, left: 0, right: 0, zIndex: 90, background: "transparent", borderBottom: "none", transition: "all 0.3s ease", fontFamily: FONT }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/demos/dental" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontSize: 18, fontWeight: 300, color: C.white, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>Dr. Vella <span style={{ fontWeight: 600 }}>Dental</span></span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="dental-nav-desktop">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} style={{ fontSize: 14, fontWeight: 500, color: C.mutedLight, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = C.white)} onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}>{l.label}</Link>
          ))}
          <Link href="/demos/dental/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            <Phone size={15} />Book Appointment
          </Link>
        </div>
        <button className="dental-nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", color: C.white, cursor: "pointer", padding: 4 }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="dental-nav-mobile-menu" style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "16px 24px 24px" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px 0", fontSize: 15, fontWeight: 500, color: C.mutedLight, textDecoration: "none", borderBottom: `1px solid ${C.border}` }}>{l.label}</Link>
          ))}
          <Link href="/demos/dental/contact" onClick={() => setMobileOpen(false)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "12px 24px", borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            <Phone size={15} />Book Appointment
          </Link>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) { .dental-nav-desktop { display: none !important; } .dental-nav-mobile-toggle { display: block !important; } }
        @media (min-width: 769px) { .dental-nav-mobile-menu { display: none !important; } }
      `}</style>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "64px 24px 40px", fontFamily: FONT }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 18, fontWeight: 300, color: C.white, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>Dr. Vella <span style={{ fontWeight: 600 }}>Dental</span></span>
          </div>
          <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
            {[1, 2, 3, 4, 5].map((i) => (<Star key={i} size={16} fill={C.gold} color={C.gold} />))}
          </div>
          <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>Modern dental care in a warm, welcoming environment. Your smile is our passion.</p>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Services</h4>
          {["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics", "Emergency Care", "Children's Dentistry"].map((s) => (
            <Link key={s} href="/demos/dental/services" style={{ display: "block", fontSize: 14, color: C.muted, textDecoration: "none", padding: "4px 0", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = C.teal)} onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>{s}</Link>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Opening Hours</h4>
          {[["Mon - Fri", "8:00 AM - 7:00 PM"], ["Saturday", "9:00 AM - 2:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => (
            <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14 }}>
              <span style={{ color: C.muted }}>{day}</span><span style={{ color: C.mutedLight }}>{hours}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)", fontSize: 13, color: C.teal }}>
            <Siren size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />Emergency: Available 24/7
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[{ icon: <Phone size={15} />, text: "+356 2123 4567" }, { icon: <Mail size={15} />, text: "hello@drvella.mt" }, { icon: <MapPin size={15} />, text: "45 Republic Street, Valletta" }].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.muted }}>
                <span style={{ color: C.teal }}>{item.icon}</span>{item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 24, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 13, color: C.muted }}>
        <span>&copy; 2025 Dr. Vella Dental. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/demos/dental/impressum" style={{ color: C.muted, textDecoration: "none" }}>Impressum</Link>
          <Link href="/demos/dental/faq" style={{ color: C.muted, textDecoration: "none" }}>FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   PLAN DATA
   ═══════════════════════════════════════════════════════════ */
const PLANS = [
  {
    name: "Check-Up",
    price: "\u20AC45",
    period: "per visit",
    description: "Comprehensive examination with professional cleaning and personalised advice.",
    featured: false,
    features: [
      "Full oral examination",
      "Professional teeth cleaning",
      "Digital X-rays",
      "Gum health assessment",
      "Oral cancer screening",
      "Personalised care plan",
    ],
  },
  {
    name: "Whitening",
    price: "\u20AC299",
    period: "one-time",
    description: "Professional in-office whitening for a brighter, more confident smile.",
    featured: true,
    features: [
      "Consultation & shade analysis",
      "Professional in-office treatment",
      "Up to 8 shades whiter",
      "60-minute session",
      "Sensitivity management",
      "Take-home maintenance kit",
      "Touch-up session included",
    ],
  },
  {
    name: "Invisalign",
    price: "From \u20AC2,500",
    period: "full treatment",
    description: "Clear aligner therapy for straighter teeth without traditional braces.",
    featured: false,
    features: [
      "3D digital scan & simulation",
      "Custom-made aligners",
      "Regular progress check-ups",
      "Retainers included",
      "12–18 month treatment",
      "Flexible payment plans",
      "Free initial consultation",
    ],
  },
];

const INSURERS = [
  "Atlas Insurance",
  "GasanMamo",
  "Mapfre Middlesea",
  "Citadel Insurance",
  "Bupa Global",
  "Allianz Care",
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function PricingPage() {
  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: FONT, minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 152, paddingBottom: 48, maxWidth: 1200, margin: "0 auto", padding: "152px 24px 48px", textAlign: "center" }}>
        <Reveal>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
            Simple & Fair
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginTop: 12, marginBottom: 16 }}>
            Transparent <span style={{ color: C.teal }}>Pricing</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: C.mutedLight, maxWidth: 560, margin: "0 auto" }}>
            No hidden fees, no surprises. Quality dental care at fair prices with flexible payment options.
          </p>
        </Reveal>
      </section>

      {/* Plan Cards */}
      <section style={{ padding: "32px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
          className="dental-pricing-grid"
        >
          {PLANS.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 0.1}>
              <div
                style={{
                  background: C.surface,
                  borderRadius: 20,
                  border: plan.featured
                    ? `2px solid ${C.teal}`
                    : `1px solid ${C.border}`,
                  overflow: "hidden",
                  position: "relative",
                  transition: "transform 0.3s, border-color 0.3s",
                }}
                className="dental-pricing-card"
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${C.teal}, ${C.tealDark})`,
                    }}
                  />
                )}

                <div style={{ padding: "32px 28px 28px" }}>
                  {/* Popular tag */}
                  {plan.featured && (
                    <div
                      style={{
                        display: "inline-block",
                        marginBottom: 16,
                        padding: "5px 14px",
                        borderRadius: 20,
                        background: `${C.teal}18`,
                        border: `1px solid ${C.teal}33`,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: C.teal,
                      }}
                    >
                      Most Popular
                    </div>
                  )}

                  <h3 style={{ fontSize: 22, fontWeight: 700, color: C.white, marginBottom: 8, letterSpacing: "-0.01em" }}>
                    {plan.name}
                  </h3>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                    <span style={{ fontSize: 40, fontWeight: 800, color: C.white, letterSpacing: "-0.03em", lineHeight: 1 }}>
                      {plan.price}
                    </span>
                  </div>
                  <span style={{ fontSize: 13, color: C.muted, display: "block", marginBottom: 16 }}>
                    {plan.period}
                  </span>

                  <p style={{ fontSize: 14, lineHeight: 1.7, color: C.mutedLight, marginBottom: 24 }}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                    {plan.features.map((feature) => (
                      <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.mutedLight }}>
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 6,
                            background: plan.featured ? `${C.teal}18` : `rgba(255,255,255,0.05)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Check size={13} color={plan.featured ? C.teal : C.mutedLight} strokeWidth={2.5} />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/demos/dental/contact"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      width: "100%",
                      padding: "14px 24px",
                      borderRadius: 12,
                      background: plan.featured
                        ? `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`
                        : "transparent",
                      border: plan.featured ? "none" : `1px solid ${C.border}`,
                      color: plan.featured ? "#fff" : C.mutedLight,
                      fontSize: 15,
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    className={plan.featured ? "" : "dental-pricing-btn-outline"}
                  >
                    <CalendarCheck size={17} />
                    Book Now
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {/* Insurance */}
          <Reveal>
            <div
              style={{
                background: C.surface,
                borderRadius: 16,
                border: `1px solid ${C.border}`,
                padding: "32px 28px",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(14,165,233,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Shield size={24} color={C.teal} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.white, letterSpacing: "-0.01em" }}>
                    Insurance Partners
                  </h3>
                  <p style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>
                    We work with all major insurers
                  </p>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.mutedLight, marginBottom: 20 }}>
                We accept and process claims from all major Maltese and international health insurance providers. Our team handles the paperwork so you can focus on your smile.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {INSURERS.map((name) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 8,
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                      fontSize: 13,
                      fontWeight: 500,
                      color: C.mutedLight,
                    }}
                  >
                    <Check size={14} color={C.teal} strokeWidth={2.5} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Payment Plans */}
          <Reveal delay={0.1}>
            <div
              style={{
                background: C.surface,
                borderRadius: 16,
                border: `1px solid ${C.border}`,
                padding: "32px 28px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${C.gold}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CreditCard size={24} color={C.gold} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.white, letterSpacing: "-0.01em" }}>
                    Flexible Payments
                  </h3>
                  <p style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>
                    0% interest financing available
                  </p>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.mutedLight, marginBottom: 24 }}>
                We believe cost should never be a barrier to great dental care. Spread the cost of your treatment with our interest-free payment plans.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                {[
                  { label: "Pay in 3", desc: "Split any treatment over 3 monthly payments" },
                  { label: "Pay in 6", desc: "Spread larger treatments over 6 months" },
                  { label: "Pay in 12", desc: "Extended plans for treatments over \u20AC1,000" },
                ].map((option) => (
                  <div
                    key={option.label}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 10,
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <BadgePercent size={16} color={C.gold} />
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.white }}>{option.label}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: C.gold, background: `${C.gold}15`, padding: "2px 8px", borderRadius: 4, marginLeft: "auto" }}>0% APR</span>
                    </div>
                    <p style={{ fontSize: 13, color: C.muted, margin: 0, paddingLeft: 24 }}>{option.desc}</p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 24,
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: "rgba(14,165,233,0.06)",
                  border: "1px solid rgba(14,165,233,0.12)",
                  fontSize: 13,
                  color: C.teal,
                  lineHeight: 1.6,
                }}
              >
                <strong>No credit check required</strong> for plans under 6 months. Speak with our team for a personalised payment plan.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "0 24px 80px" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Questions About <span style={{ color: C.teal }}>Pricing</span>?
            </h2>
            <p style={{ fontSize: 17, color: C.mutedLight, lineHeight: 1.7, marginBottom: 32 }}>
              Every smile is unique. Book a free consultation and we&apos;ll provide a detailed, no-obligation treatment plan and quote.
            </p>
            <Link href="/demos/dental/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 12, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
              <CalendarCheck size={18} />
              Book Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />

      <style>{`
        .dental-pricing-card:hover { transform: translateY(-4px); }
        .dental-pricing-btn-outline:hover { border-color: ${C.teal} !important; color: ${C.teal} !important; }
        @media (max-width: 400px) {
          .dental-pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
