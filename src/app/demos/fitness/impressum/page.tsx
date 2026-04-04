"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ── palette ── */
const C = {
  bg: "#080808",
  surface: "#111111",
  green: "#22C55E",
  white: "#FFFFFF",
  muted: "#71717A",
  border: "#27272A",
} as const;

const fontBody = "Inter, system-ui, sans-serif";

/* ── nav links ── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/fitness" },
  { label: "Schedule", href: "/demos/fitness/schedule" },
  { label: "Gallery", href: "/demos/fitness/gallery" },
  { label: "Membership", href: "/demos/fitness/membership" },
  { label: "Contact", href: "/demos/fitness/contact" },
];

/* ── nav header ── */
function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          position: "fixed", top: 40, left: 0, right: 0, zIndex: 50, height: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px",
          background: "rgba(8,8,8,0.95)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <Link href="/demos/fitness" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: fontBody, fontWeight: 700, fontSize: 18, color: C.white, letterSpacing: "0.15em" }}>FITZONE</span>
        </Link>
        <nav className="fz-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                color: C.muted, textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.muted; }}
            >{link.label}</Link>
          ))}
        </nav>
        <button className="fz-mobile-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}>
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 14, height: 2, background: C.green, display: "block" }} />
        </button>
      </header>

      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.white, fontSize: 28, cursor: "pointer" }}>&times;</button>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: fontBody, fontSize: 24, fontWeight: 600, color: C.white, textDecoration: "none" }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        .fz-desktop-nav{display:flex!important;}
        .fz-mobile-hamburger{display:none!important;}
        @media(max-width:799px){
          .fz-desktop-nav{display:none!important;}
          .fz-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </>
  );
}

/* ━━━ PAGE ━━━ */
export default function ImpressumPage() {
  const sectionStyle: React.CSSProperties = {
    marginBottom: 36,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 700,
    color: C.white,
    margin: "0 0 12px",
    letterSpacing: "0.05em",
  };

  const textStyle: React.CSSProperties = {
    fontSize: 14,
    color: C.muted,
    lineHeight: 1.8,
    margin: 0,
  };

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: fontBody, minHeight: "100vh", paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ════════ CONTENT ════════ */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "140px 24px 100px" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: C.green, marginBottom: 16 }}>
          LEGAL
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 48px" }}>Impressum</h1>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Company Information</h2>
          <p style={textStyle}>
            FitZone Malta Ltd.<br />
            23 Strand Street<br />
            Sliema SLM 1022<br />
            Malta
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Contact</h2>
          <p style={textStyle}>
            Phone: +356 2123 4567<br />
            Email: hello@fitzonemalta.com<br />
            Website: www.fitzonemalta.com
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Registration</h2>
          <p style={textStyle}>
            Malta Business Registry: C 12345<br />
            VAT Number: MT 1234 5678
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Managing Director</h2>
          <p style={textStyle}>
            John Borg
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Responsible for Content</h2>
          <p style={textStyle}>
            FitZone Malta Ltd.<br />
            23 Strand Street, Sliema SLM 1022, Malta
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Website</h2>
          <p style={textStyle}>
            Design &amp; Development by{" "}
            <a
              href="https://amenzo.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: C.green, textDecoration: "none" }}
            >
              Amenzo
            </a>
          </p>
        </div>

        {/* Demo disclaimer */}
        <div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
          }}
        >
          <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: C.white }}>Demo Disclaimer:</strong> This is a fictional demonstration website created by Amenzo to showcase web design capabilities. FitZone Malta is not a real business. All content, names, addresses, and data are entirely fictitious and used for illustrative purposes only. No real services are offered through this website.
          </p>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: C.white, letterSpacing: "0.2em" }}>FITZONE</span>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
            <span>23 Strand Street, Sliema, Malta</span><br />
            <span>Daily 5:00 AM &ndash; 11:00 PM</span><br />
            <span>hello@fitzonemalta.com</span>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
            {["Privacy", "Impressum"].map((t) => (
              <Link key={t} href={`/demos/fitness/${t.toLowerCase()}`}
                style={{ fontSize: 12, color: t === "Impressum" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = t === "Impressum" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)"; }}
              >{t}</Link>
            ))}
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
              Site by <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" style={{ color: C.green, textDecoration: "none" }}>Amenzo</a>
            </span>
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>&copy; 2026 FitZone Malta</span>
        </div>
      </footer>
    </div>
  );
}
