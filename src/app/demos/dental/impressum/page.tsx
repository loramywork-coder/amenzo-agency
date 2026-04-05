"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const C = {
  bg: "#0A1015",
  surface: "#111920",
  teal: "#0EA5E9",
  warmWhite: "#F8FAFC",
  muted: "#64748B",
  border: "#1E293B",
  gold: "#F59E0B",
} as const;

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/dental" },
  { label: "Services", href: "/demos/dental/services" },
  { label: "Team", href: "/demos/dental/team" },
  { label: "Reviews", href: "/demos/dental/reviews" },
  { label: "FAQ", href: "/demos/dental/faq" },
  { label: "Contact", href: "/demos/dental/contact" },
];

/* ═══════════════════════════════════════════
   NAV HEADER
   ═══════════════════════════════════════════ */
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          borderBottom: "none",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <Link href="/demos/dental" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: 20, color: C.warmWhite, letterSpacing: "-0.02em" }}>
            Dr. Vella <span style={{ color: C.teal }}>Dental</span>
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="dental-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: FONT, fontSize: 13, fontWeight: 500,
                color: C.muted,
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.warmWhite; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.muted; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="dental-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column" as const, gap: 5, padding: 8 }}
        >
          <span style={{ width: 24, height: 1.5, background: C.warmWhite, display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: C.warmWhite, display: "block" }} />
          <span style={{ width: 16, height: 1.5, background: C.teal, display: "block" }} />
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 200, background: C.bg,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.warmWhite, fontSize: 28, cursor: "pointer" }}
            >
              &times;
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
              >
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: C.warmWhite, textDecoration: "none" }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .dental-desktop-nav{display:flex!important;}
        .dental-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .dental-desktop-nav{display:none!important;}
          .dental-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function SiteFooter() {
  return (
    <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "56px 24px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 40, marginBottom: 40 }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: FONT, color: C.warmWhite, marginBottom: 12, letterSpacing: "-0.02em" }}>
            Dr. Vella <span style={{ color: C.teal }}>Dental</span>
          </h3>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, maxWidth: 250 }}>
            Modern dental care in a calm, welcoming environment. Your comfort is our priority.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: C.muted }}>
            <span>78 Tower Road, Sliema</span>
            <span>+356 2123 4567</span>
            <span>hello@drvella.mt</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Hours</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: C.muted }}>
            <span>Mon - Fri: 08:00 - 17:00</span>
            <span>Saturday: 09:00 - 13:00</span>
            <span>Sunday: Closed</span>
            <span style={{ color: C.teal, fontWeight: 600, fontSize: 13 }}>Emergency line 24/7</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            {[
              { label: "Services", href: "/demos/dental/services" },
              { label: "Reviews", href: "/demos/dental/reviews" },
              { label: "FAQ", href: "/demos/dental/faq" },
              { label: "Impressum", href: "/demos/dental/impressum" },
            ].map((l) => (
              <Link key={l.label} href={l.href} style={{ color: C.muted, textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.warmWhite)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 13, color: C.muted, maxWidth: 1200, margin: "0 auto" }}>
        <span>&copy; 2026 Dr. Vella Dental. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/demos/dental/impressum" style={{ color: C.teal, textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.teal)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.teal)}
          >Impressum</Link>
          <span style={{ cursor: "pointer" }}>Privacy</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function DentalImpressumPage() {
  return (
    <div style={{ background: C.bg, color: C.warmWhite, fontFamily: FONT, minHeight: "100vh", paddingTop: 10 }}>
      <DemoBanner />
      <SiteHeader />

      {/* ═══════ CONTENT ═══════ */}
      <section style={{ paddingTop: 160, paddingBottom: 100, maxWidth: "48rem", margin: "0 auto", padding: "160px 24px 100px" }}>
        <Reveal type="fade" delay={0.1}>
          <p style={{ fontFamily: FONT, color: C.teal, letterSpacing: "0.25em", fontSize: 13, fontWeight: 600, textTransform: "uppercase" as const, marginBottom: 16 }}>
            Legal
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <h1 style={{ fontFamily: FONT, fontSize: 36, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.03em", color: C.warmWhite, margin: "0 0 48px" }}>
            Impressum
          </h1>
        </Reveal>

        {/* Practice info */}
        <Reveal type="fade" delay={0.25}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: C.warmWhite, margin: "0 0 16px" }}>
              Practice Information
            </h2>
            <div style={{ color: C.muted, fontSize: 15, lineHeight: 2 }}>
              <p style={{ margin: 0 }}><strong style={{ color: C.warmWhite }}>Dr. Sarah Vella</strong></p>
              <p style={{ margin: 0 }}>Trading as <strong style={{ color: C.warmWhite }}>Dr. Vella Dental</strong></p>
              <p style={{ margin: 0 }}>78 Tower Road</p>
              <p style={{ margin: 0 }}>Sliema SLM 1612, Malta</p>
            </div>
          </div>
        </Reveal>

        {/* Contact */}
        <Reveal type="fade" delay={0.3}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: C.warmWhite, margin: "0 0 16px" }}>
              Contact
            </h2>
            <div style={{ color: C.muted, fontSize: 15, lineHeight: 2 }}>
              <p style={{ margin: 0 }}>Phone: +356 2123 4567</p>
              <p style={{ margin: 0 }}>Email: hello@drvella.mt</p>
              <p style={{ margin: 0 }}>Website: www.drvella.mt</p>
            </div>
          </div>
        </Reveal>

        {/* Professional regulation */}
        <Reveal type="fade" delay={0.35}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: C.warmWhite, margin: "0 0 16px" }}>
              Professional Regulation
            </h2>
            <div style={{ color: C.muted, fontSize: 15, lineHeight: 2 }}>
              <p style={{ margin: 0 }}>Regulated under the Healthcare Professions Act (Cap. 464), Malta</p>
              <p style={{ margin: 0 }}>Medical Council Registration No. D-2018-0452</p>
              <p style={{ margin: 0 }}>VAT Number: MT 2345 6789</p>
            </div>
          </div>
        </Reveal>

        {/* Responsible person */}
        <Reveal type="fade" delay={0.4}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: C.warmWhite, margin: "0 0 16px" }}>
              Responsible for Content
            </h2>
            <div style={{ color: C.muted, fontSize: 15, lineHeight: 2 }}>
              <p style={{ margin: 0 }}>Dr. Sarah Vella, BChD (Hons), MJDF RCS (Eng)</p>
              <p style={{ margin: 0 }}>Principal Dentist &amp; Practice Owner</p>
            </div>
          </div>
        </Reveal>

        {/* Demo disclaimer */}
        <Reveal type="fade" delay={0.45}>
          <div
            style={{
              background: `${C.teal}08`,
              borderLeft: `4px solid ${C.teal}`,
              borderRadius: "0 12px 12px 0",
              padding: "20px 24px",
              marginTop: 48,
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 600, color: C.warmWhite, margin: "0 0 8px" }}>
              Demo Disclaimer
            </p>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>
              This is a design showcase created by Amenzo to demonstrate web design capabilities.
              All names, brands, addresses, and content on this page are entirely fictional.
              No real dental practice, person, or business is represented.
              Photography sourced from Unsplash.
            </p>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
