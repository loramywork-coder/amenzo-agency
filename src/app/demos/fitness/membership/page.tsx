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
  yellow: "#EAB308",
  red: "#EF4444",
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

/* ── plan data ── */
interface Plan {
  name: string;
  monthly: number;
  annual: number;
  popular: boolean;
  features: string[];
  buttonStyle: "bordered" | "green";
}

const PLANS: Plan[] = [
  {
    name: "Basic",
    monthly: 49,
    annual: 39,
    popular: false,
    features: [
      "Gym access 6AM\u201310PM",
      "Locker room",
      "Free WiFi",
      "1 guest pass / month",
      "App access",
    ],
    buttonStyle: "bordered",
  },
  {
    name: "Pro",
    monthly: 79,
    annual: 63,
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited classes",
      "Full 5AM\u201311PM hours",
      "1 PT session / month",
      "Sauna & steam",
      "Towel service",
      "Body comp quarterly",
    ],
    buttonStyle: "green",
  },
  {
    name: "Elite",
    monthly: 119,
    annual: 95,
    popular: false,
    features: [
      "Everything in Pro",
      "4 PT sessions / month",
      "Personalised nutrition plan",
      "Priority class booking",
      "2 guest passes / month",
      "Member-only events",
      "Recovery zone access",
    ],
    buttonStyle: "bordered",
  },
];

const INCLUDED = [
  "No joining fee",
  "No contract",
  "Freeze option",
  "Cancel anytime",
  "Free induction",
  "App included",
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
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          background: "transparent",
          borderBottom: "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <Link href="/demos/fitness" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: fontBody, fontWeight: 700, fontSize: 18, color: C.white, letterSpacing: "0.15em" }}>
            FITZONE
          </span>
        </Link>

        <nav className="fz-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody,
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: link.href === "/demos/fitness/membership" ? C.white : C.muted,
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/fitness/membership" ? C.white : C.muted; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="fz-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}
        >
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 14, height: 2, background: C.green, display: "block" }} />
        </button>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: C.bg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.white, fontSize: 28, cursor: "pointer" }}
          >
            &times;
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: fontBody, fontSize: 24, fontWeight: 600, color: C.white, textDecoration: "none" }}
            >
              {link.label}
            </Link>
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
export default function MembershipPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: fontBody, minHeight: "100vh", paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ════════ HERO ════════ */}
      <section style={{ paddingTop: 140, paddingBottom: 60, textAlign: "center" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: C.green, marginBottom: 16 }}>
          MEMBERSHIP
        </p>
        <h1 style={{ fontSize: 42, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.15, margin: 0 }}>
          Invest in Yourself
        </h1>
      </section>

      {/* ════════ TOGGLE ════════ */}
      <section style={{ textAlign: "center", paddingBottom: 48 }}>
        <div
          style={{
            display: "inline-flex",
            borderRadius: 9999,
            background: C.surface,
            border: `1px solid ${C.border}`,
            padding: 4,
          }}
        >
          <button
            onClick={() => setIsAnnual(false)}
            style={{
              padding: "10px 24px",
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: fontBody,
              letterSpacing: "0.05em",
              background: !isAnnual ? C.green : "transparent",
              color: !isAnnual ? "#000" : C.muted,
              transition: "all 0.25s",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            style={{
              padding: "10px 24px",
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: fontBody,
              letterSpacing: "0.05em",
              background: isAnnual ? C.green : "transparent",
              color: isAnnual ? "#000" : C.muted,
              transition: "all 0.25s",
            }}
          >
            Annual <span style={{ fontSize: 11, opacity: 0.8 }}>-20%</span>
          </button>
        </div>
      </section>

      {/* ════════ PLAN CARDS ════════ */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <style>{`
          .fz-plans-grid{display:grid;grid-template-columns:1fr;gap:24px;}
          @media(min-width:768px){.fz-plans-grid{grid-template-columns:repeat(3,1fr);}}
          .fz-plan-card{transition:transform 0.3s,box-shadow 0.3s;}
          .fz-plan-card:hover{transform:translateY(-6px);box-shadow:0 8px 40px rgba(34,197,94,0.15);}
          @keyframes fz-pulse{0%,100%{opacity:1;}50%{opacity:0.6;}}
          .fz-badge-pulse{animation:fz-pulse 2s ease-in-out infinite;}
        `}</style>
        <div className="fz-plans-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="fz-plan-card"
              style={{
                background: C.surface,
                borderRadius: 16,
                border: plan.popular ? `2px solid ${C.green}` : `1px solid ${C.border}`,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transform: plan.popular ? "translateY(-8px)" : undefined,
              }}
            >
              {plan.popular && (
                <span
                  className="fz-badge-pulse"
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: C.green,
                    color: "#000",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "6px 18px",
                    borderRadius: 9999,
                  }}
                >
                  MOST POPULAR
                </span>
              )}

              <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, margin: 0 }}>
                {plan.name}
              </h3>

              <div style={{ marginTop: 20, display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: 48, fontWeight: 700, color: C.white, fontVariantNumeric: "tabular-nums" }}>
                  &euro;{isAnnual ? plan.annual : plan.monthly}
                </span>
                <span style={{ fontSize: 14, color: C.muted }}>/mo</span>
              </div>

              {isAnnual && (
                <p style={{ fontSize: 12, color: C.green, marginTop: 4 }}>
                  Billed &euro;{plan.annual * 12}/year &middot; Save &euro;{(plan.monthly - plan.annual) * 12}
                </p>
              )}

              <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.6)",
                      padding: "6px 0",
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  marginTop: 28,
                  width: "100%",
                  padding: plan.popular ? "16px" : "14px",
                  borderRadius: 9999,
                  border: plan.buttonStyle === "green" ? "none" : `1px solid ${C.border}`,
                  background: plan.buttonStyle === "green" ? C.green : "transparent",
                  color: plan.buttonStyle === "green" ? "#000" : C.white,
                  fontSize: plan.popular ? 15 : 14,
                  fontWeight: 600,
                  fontFamily: fontBody,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 0.25s, background 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (plan.buttonStyle === "bordered") {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  } else {
                    (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.buttonStyle === "bordered") {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  } else {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ INCLUDED STRIP ════════ */}
      <section style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: C.white, marginBottom: 24 }}>
            What&apos;s Included in Every Membership
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {INCLUDED.map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.muted }}>
                <span style={{ color: C.green }}>&#10003;</span>
                {item}
                {i < INCLUDED.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.15)", marginLeft: 4 }}>&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CORPORATE CTA ════════ */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "40px 32px",
          }}
        >
          <p style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: C.green, marginBottom: 12 }}>
            CORPORATE WELLNESS
          </p>
          <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>
            Special Corporate Rates
          </h3>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 24px" }}>
            Get your team moving with discounted group memberships, dedicated class slots, and wellness programmes.
          </p>
          <Link
            href="/demos/fitness/contact"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              borderRadius: 9999,
              border: `1px solid ${C.green}`,
              color: C.green,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = C.green;
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = C.green;
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
          <span style={{ fontFamily: fontBody, fontWeight: 700, fontSize: 14, color: C.white, letterSpacing: "0.2em" }}>FITZONE</span>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
            <span>23 Harbour Street, Downtown</span><br />
            <span>Daily 5:00 AM &ndash; 11:00 PM</span><br />
            <span>hello@fitzone.com</span>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
            {["Privacy", "Impressum"].map((t) => (
              <Link
                key={t}
                href={`/demos/fitness/${t.toLowerCase()}`}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"; }}
              >
                {t}
              </Link>
            ))}
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
              Site by{" "}
              <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" style={{ color: C.green, textDecoration: "none" }}>
                Amenzo
              </a>
            </span>
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>&copy; 2026 FitZone</span>
        </div>
      </footer>
    </div>
  );
}
