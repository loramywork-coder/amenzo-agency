"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const C = {
  bg: "#0C1220",
  surface: "#141E30",
  gold: "#C9A96E",
  cream: "#F5F0E8",
  muted: "#8A9AB5",
  border: "#1E2D45",
} as const;

const fontDisplay = "'Cormorant Garamond', Georgia, serif";
const fontBody = "Inter, system-ui, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Rooms", href: "/demos/hotel" },
  { label: "Events", href: "/demos/hotel/events" },
  { label: "Contact", href: "/demos/hotel/contact" },
];

/* ─── privacy sections ─── */
const sections = [
  {
    title: "1. Data Controller",
    body: "Grand Harbour Hotel & Spa, located at Valletta Waterfront, VLT 1971, Malta, is the data controller responsible for processing your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable Maltese data protection legislation.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect personal data that you provide directly when making a reservation, contacting us, or using our services. This may include your name, email address, telephone number, postal address, payment details, passport or ID information (where required by law), dietary requirements, and any special requests or preferences you share with us.",
  },
  {
    title: "3. How We Use Your Data",
    body: "Your personal data is processed for the following purposes: to manage and fulfil your reservation; to provide the services you have requested; to communicate with you regarding your stay; to comply with legal obligations; to improve our services and personalise your experience; and to send marketing communications where you have given your consent.",
  },
  {
    title: "4. Legal Basis for Processing",
    body: "We process your data on the following legal bases: performance of a contract (when you make a reservation); legitimate interest (to improve our services and ensure security); legal obligation (where required by law); and consent (for marketing communications and non-essential cookies).",
  },
  {
    title: "5. Data Sharing",
    body: "We may share your data with trusted third parties who assist in providing our services, including payment processors, booking platforms, and IT service providers. We may also share data with governmental authorities where required by law. We do not sell your personal data to third parties.",
  },
  {
    title: "6. Data Retention",
    body: "We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Reservation data is typically retained for a period of seven years following your stay.",
  },
  {
    title: "7. Your Rights",
    body: "Under the GDPR, you have the right to access your personal data; to request rectification of inaccurate data; to request erasure of your data; to restrict processing; to data portability; and to object to processing. You also have the right to withdraw consent at any time and to lodge a complaint with the Information and Data Protection Commissioner of Malta.",
  },
  {
    title: "8. Cookies",
    body: "Our website uses cookies to enhance your browsing experience. Essential cookies are necessary for the website to function. Analytics cookies help us understand how visitors interact with our site. Marketing cookies are used to deliver relevant advertisements. You may manage your cookie preferences at any time through your browser settings.",
  },
  {
    title: "9. Security",
    body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All payment data is processed through PCI-DSS compliant payment processors.",
  },
  {
    title: "10. Changes to This Policy",
    body: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
  },
  {
    title: "11. Contact Us",
    body: "If you have any questions about this privacy policy or wish to exercise your rights, please contact our Data Protection Officer at privacy@grandharbour.mt or write to Grand Harbour Hotel & Spa, Valletta Waterfront, VLT 1971, Malta. Telephone: +356 2124 0000.",
  },
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
          background: scrolled ? "rgba(12,18,32,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <Link href="/demos/hotel" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span style={{ display: "block", fontFamily: fontDisplay, fontWeight: 400, fontSize: 22, color: C.cream }}>Grand Harbour</span>
            <span style={{ display: "block", fontFamily: fontDisplay, fontWeight: 300, fontSize: 12, color: C.gold, letterSpacing: "0.12em" }}>Hotel &amp; Spa</span>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hotel-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase" as const, color: "rgba(245,240,232,0.6)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.6)"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel/contact"
            style={{
              fontFamily: fontBody, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase" as const, padding: "10px 22px", background: C.gold,
              color: C.bg, textDecoration: "none", transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Book Your Stay
          </Link>
        </nav>

        <button
          className="hotel-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column" as const, gap: 5, padding: 8 }}
        >
          <span style={{ width: 24, height: 1.5, background: C.cream, display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: C.cream, display: "block" }} />
          <span style={{ width: 16, height: 1.5, background: C.gold, display: "block" }} />
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
              style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.cream, fontSize: 28, cursor: "pointer" }}
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
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: fontDisplay, fontSize: 32, color: C.cream, textDecoration: "none" }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hotel-desktop-nav{display:flex!important;}
        .hotel-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .hotel-desktop-nav{display:none!important;}
          .hotel-mobile-hamburger{display:flex!important;}
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
    <footer style={{ background: C.bg, borderTop: `1px solid rgba(201,169,110,0.12)`, padding: "64px 24px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 40 }}>
        <div>
          <h4 style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 400, color: C.cream, marginBottom: 16 }}>Grand Harbour</h4>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.8 }}>Valletta Waterfront<br />VLT 1971<br />Malta</p>
        </div>
        <div>
          <h5 style={{ fontFamily: fontBody, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 16 }}>Quick Links</h5>
          {[
            { label: "Rooms & Suites", href: "/demos/hotel" },
            { label: "Events", href: "/demos/hotel/events" },
            { label: "Contact", href: "/demos/hotel/contact" },
          ].map((link) => (
            <Link key={link.label} href={link.href} style={{ display: "block", color: C.muted, fontSize: 13, marginBottom: 10, textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.cream)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
            >{link.label}</Link>
          ))}
        </div>
        <div>
          <h5 style={{ fontFamily: fontBody, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 16 }}>Contact</h5>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 2.1 }}>+356 2124 0000<br />reservations@grandharbour.mt<br />concierge@grandharbour.mt</p>
        </div>
        <div>
          <h5 style={{ fontFamily: fontBody, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 16 }}>Follow</h5>
          {["Instagram", "Facebook", "Pinterest", "TripAdvisor"].map((s) => (
            <p key={s} style={{ color: C.muted, fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.cream)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
            >{s}</p>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(201,169,110,0.08)", display: "flex", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 12 }}>
        <p style={{ color: C.muted, fontSize: 12 }}>&copy; {new Date().getFullYear()} Grand Harbour Hotel &amp; Spa. All rights reserved.</p>
        <div className="flex gap-6">
          {[
            { label: "Privacy Policy", href: "/demos/hotel/privacy" },
            { label: "Impressum", href: "/demos/hotel/impressum" },
          ].map((t) => (
            <Link key={t.label} href={t.href} style={{ color: t.href === "/demos/hotel/privacy" ? C.gold : C.muted, fontSize: 12, textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.gold)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = t.href === "/demos/hotel/privacy" ? C.gold : C.muted)}
            >{t.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function HotelPrivacyPage() {
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, paddingTop: 10 }}>
      <DemoBanner />
      <SiteHeader />

      {/* ═══════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════ */}
      <section style={{ paddingTop: 160, paddingBottom: 100, maxWidth: "48rem", margin: "0 auto", padding: "160px 24px 100px" }}>
        <Reveal type="fade" delay={0.1}>
          <p style={{ fontFamily: fontBody, color: C.gold, letterSpacing: "0.35em", fontSize: 13, fontWeight: 500, textTransform: "uppercase" as const, marginBottom: 16 }}>
            Legal
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.2}>
          <h1 style={{ fontFamily: fontDisplay, fontSize: 32, fontWeight: 300, lineHeight: 1.2, color: C.cream, margin: "0 0 12px" }}>
            Privacy Policy
          </h1>
        </Reveal>
        <Reveal type="fade" delay={0.3}>
          <p style={{ color: "rgba(138,154,181,0.5)", fontSize: 13, marginBottom: 48 }}>
            Last updated: January 2026
          </p>
        </Reveal>

        {sections.map((section, i) => (
          <Reveal key={section.title} type="fade" delay={0.1 + i * 0.04}>
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 400, color: C.cream, margin: "0 0 12px" }}>
                {section.title}
              </h2>
              <p style={{ color: "rgba(245,240,232,0.5)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                {section.body}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
