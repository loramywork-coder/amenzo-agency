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
  ArrowRight,
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
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <SmilePlus size={20} color="#fff" strokeWidth={2} />
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.white, letterSpacing: "-0.02em" }}>Dr. Vella Dental</span>
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
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SmilePlus size={20} color="#fff" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 18, fontWeight: 700, color: C.white }}>Dr. Vella Dental</span>
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
   GALLERY DATA
   ═══════════════════════════════════════════════════════════ */
const TRANSFORMATIONS = [
  {
    procedure: "Porcelain Veneers",
    description: "Complete smile makeover with 10 ultra-thin porcelain veneers for a natural, radiant result.",
    beforeColor: "#2D1F14",
    afterColor: "#1A3A4A",
  },
  {
    procedure: "Professional Whitening",
    description: "In-office Zoom whitening achieving 6 shades brighter in a single 60-minute session.",
    beforeColor: "#3B2E1A",
    afterColor: "#1E3848",
  },
  {
    procedure: "Invisalign",
    description: "12-month clear aligner treatment correcting moderate crowding and bite alignment.",
    beforeColor: "#2A1E2E",
    afterColor: "#163040",
  },
  {
    procedure: "Dental Implants",
    description: "Single-tooth implant with custom zirconia crown replacing a missing upper premolar.",
    beforeColor: "#1F2A1A",
    afterColor: "#142E3E",
  },
  {
    procedure: "Dental Crown",
    description: "Full porcelain crown restoring a fractured molar to full function and aesthetics.",
    beforeColor: "#2E1A1A",
    afterColor: "#1A2E42",
  },
  {
    procedure: "Composite Bonding",
    description: "Same-day composite bonding to close gaps and reshape chipped front teeth.",
    beforeColor: "#1A2A1E",
    afterColor: "#182C3C",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function GalleryPage() {
  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: FONT, minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 152, paddingBottom: 48, maxWidth: 1200, margin: "0 auto", padding: "152px 24px 48px", textAlign: "center" }}>
        <Reveal>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
            Real Results
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginTop: 12, marginBottom: 16 }}>
            Smile <span style={{ color: C.teal }}>Gallery</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: C.mutedLight, maxWidth: 560, margin: "0 auto" }}>
            Browse real transformations from our patients. Every smile tells a story of confidence renewed.
          </p>
        </Reveal>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "32px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: 24,
          }}
          className="dental-gallery-grid"
        >
          {TRANSFORMATIONS.map((item, idx) => (
            <Reveal key={item.procedure} delay={idx * 0.08}>
              <div
                style={{
                  background: C.surface,
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                  overflow: "hidden",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                className="dental-gallery-card"
              >
                {/* Before / After panels */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: 220 }}>
                  {/* Before */}
                  <div
                    style={{
                      background: item.beforeColor,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      position: "relative",
                      borderRight: `1px solid ${C.border}`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(8px)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: C.mutedLight,
                      }}
                    >
                      Before
                    </div>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 12,
                        background: `linear-gradient(135deg, ${item.beforeColor}, rgba(255,255,255,0.05))`,
                        border: `1px solid rgba(255,255,255,0.08)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SmilePlus size={28} color={C.muted} strokeWidth={1.2} />
                    </div>
                  </div>

                  {/* After */}
                  <div
                    style={{
                      background: item.afterColor,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: `rgba(14,165,233,0.2)`,
                        backdropFilter: "blur(8px)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: C.teal,
                      }}
                    >
                      After
                    </div>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 12,
                        background: `linear-gradient(135deg, ${C.tealDark}33, ${C.teal}22)`,
                        border: `1px solid ${C.teal}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SmilePlus size={28} color={C.teal} strokeWidth={1.2} />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.white, marginBottom: 8, letterSpacing: "-0.01em" }}>
                    {item.procedure}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: C.mutedLight, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "40px 24px 80px" }}>
        <Reveal>
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              textAlign: "center",
              padding: "56px 40px",
              borderRadius: 20,
              background: C.surface,
              border: `1px solid ${C.border}`,
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Ready for <span style={{ color: C.teal }}>Your Transformation</span>?
            </h2>
            <p style={{ fontSize: 16, color: C.mutedLight, lineHeight: 1.7, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
              Every great smile starts with a conversation. Book your free consultation and let&apos;s create your personalised treatment plan.
            </p>
            <Link
              href="/demos/dental/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 32px",
                borderRadius: 12,
                background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              <CalendarCheck size={18} />
              Book Your Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />

      <style>{`
        .dental-gallery-card:hover {
          border-color: ${C.teal}44 !important;
          transform: translateY(-4px);
        }
        @media (max-width: 440px) {
          .dental-gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
