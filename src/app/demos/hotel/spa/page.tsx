"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { label: "Dining", href: "/demos/hotel" },
  { label: "Spa", href: "/demos/hotel/spa" },
  { label: "Experiences", href: "/demos/hotel/experiences" },
  { label: "Gallery", href: "/demos/hotel/gallery" },
];

/* ─── facility stats ─── */
const FACILITIES = [
  { label: "Total Area", value: "2,000 sqft" },
  { label: "Hammam", value: "Traditional" },
  { label: "Sauna & Steam", value: "Finnish & Herbal" },
  { label: "Treatment Suites", value: "8 Private" },
];

/* ─── treatment data ─── */
interface Treatment {
  name: string;
  duration: string;
  price: string;
}

interface TreatmentCategory {
  category: string;
  treatments: Treatment[];
}

const TREATMENTS: TreatmentCategory[] = [
  {
    category: "Massages",
    treatments: [
      { name: "Classic Relaxation", duration: "60 min", price: "\u20AC90" },
      { name: "Deep Tissue", duration: "60 min", price: "\u20AC110" },
      { name: "Hot Stone Therapy", duration: "75 min", price: "\u20AC130" },
    ],
  },
  {
    category: "Facials",
    treatments: [
      { name: "Express Glow", duration: "30 min", price: "\u20AC60" },
      { name: "Hydrating Facial", duration: "60 min", price: "\u20AC95" },
      { name: "Anti-Ageing Luxury", duration: "75 min", price: "\u20AC130" },
    ],
  },
  {
    category: "Body Treatments",
    treatments: [
      { name: "Mediterranean Salt Scrub", duration: "45 min", price: "\u20AC70" },
      { name: "Detox Body Wrap", duration: "60 min", price: "\u20AC90" },
      { name: "Thermal Mud Therapy", duration: "75 min", price: "\u20AC110" },
    ],
  },
  {
    category: "Hammam Rituals",
    treatments: [
      { name: "Traditional Hammam", duration: "60 min", price: "\u20AC85" },
      { name: "Couples Hammam Journey", duration: "90 min", price: "\u20AC160" },
    ],
  },
  {
    category: "Spa Packages",
    treatments: [
      { name: "Half Day Escape", duration: "3 hrs", price: "\u20AC250" },
      { name: "Full Day Indulgence", duration: "6 hrs", price: "\u20AC450" },
      { name: "Couples Retreat", duration: "Half Day", price: "\u20AC380" },
    ],
  },
  {
    category: "Wellness",
    treatments: [
      { name: "Yoga Class", duration: "60 min", price: "\u20AC25" },
      { name: "Personal Training", duration: "60 min", price: "\u20AC70" },
      { name: "Nutrition Consultation", duration: "45 min", price: "\u20AC50" },
    ],
  },
];

/* ─── unsplash helper ─── */
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format`;

/* ━━━ NAV HEADER ━━━ */
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
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          borderBottom: "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <Link href="/demos/hotel" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span style={{ display: "block", fontFamily: fontDisplay, fontWeight: 400, fontSize: 20, color: C.cream }}>Grand Harbour</span>
            <span style={{ display: "block", fontFamily: fontBody, fontWeight: 400, fontSize: 10, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase" }}>Hotel &amp; Spa</span>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hotel-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: link.href === "/demos/hotel/spa" ? C.cream : "rgba(245,240,232,0.5)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/hotel/spa" ? C.cream : "rgba(245,240,232,0.5)"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel"
            style={{
              fontFamily: fontBody, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "10px 22px", background: C.gold,
              color: C.bg, textDecoration: "none", transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Reserve a Stay
          </Link>
        </nav>

        <button
          className="hotel-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function SpaPage() {
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "70vh", minHeight: 480 }}>
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=85"
          alt="Spa treatment room with warm lighting"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(12,18,32,0.45) 0%, rgba(12,18,32,0.7) 60%, rgba(12,18,32,1) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <Reveal type="fade" delay={0.2}>
            <p style={{
              fontFamily: fontBody, color: C.gold, letterSpacing: "0.35em",
              fontSize: 13, fontWeight: 500, textTransform: "uppercase",
            }}>
              THE SPA
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.4}>
            <h1 style={{
              fontFamily: fontDisplay, fontStyle: "italic",
              fontSize: 48, fontWeight: 300, lineHeight: 1.15,
              color: C.cream, marginTop: 16,
            }}>
              Serenity, Restored.
            </h1>
          </Reveal>
          <Reveal type="scale" delay={0.6}>
            <div style={{ width: 60, height: 1, background: C.gold, margin: "28px auto" }} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FACILITY STATS
          ═══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <Reveal type="slide-up">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
              borderTop: `1px solid ${C.border}`,
              borderBottom: `1px solid ${C.border}`,
              padding: "48px 0",
            }}
          >
            {FACILITIES.map((f) => (
              <div key={f.label} style={{ textAlign: "center" }}>
                <p style={{
                  fontFamily: fontDisplay, fontSize: 28, fontWeight: 300,
                  color: C.gold, marginBottom: 8,
                }}>
                  {f.value}
                </p>
                <p style={{ fontFamily: fontBody, fontSize: 12, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal type="fade" delay={0.2}>
          <p style={{
            textAlign: "center", maxWidth: 640, margin: "48px auto 0",
            color: C.muted, fontSize: 15, lineHeight: 1.85,
          }}>
            Our award-winning spa draws on centuries of Mediterranean bathing tradition.
            From the warmth of the hammam to the precision of our bespoke facials,
            every treatment is designed to restore balance to body and mind.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          TREATMENT MENU
          ═══════════════════════════════════════ */}
      <section style={{ padding: "0 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
        <Reveal type="slide-up">
          <p style={{
            textAlign: "center", fontFamily: fontBody, color: C.gold,
            letterSpacing: "0.3em", fontSize: 12, fontWeight: 500,
            textTransform: "uppercase", marginBottom: 12,
          }}>
            Our Treatments
          </p>
          <h2 style={{
            textAlign: "center", fontFamily: fontDisplay,
            fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 300,
            color: C.cream, marginBottom: 64,
          }}>
            Treatment Menu
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48 }}>
          {TREATMENTS.map((cat, catIdx) => (
            <Reveal key={cat.category} type="slide-up" delay={catIdx * 0.1}>
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  padding: 32,
                }}
              >
                <h3 style={{
                  fontFamily: fontDisplay, fontSize: 24, fontWeight: 400,
                  color: C.gold, marginBottom: 24,
                  paddingBottom: 16, borderBottom: `1px solid ${C.border}`,
                }}>
                  {cat.category}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {cat.treatments.map((t, tIdx) => (
                    <div
                      key={t.name}
                      style={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "baseline", padding: "14px 0",
                        borderBottom: tIdx < cat.treatments.length - 1 ? `1px solid rgba(30,45,69,0.6)` : "none",
                      }}
                    >
                      <div>
                        <p style={{ fontSize: 14, color: C.cream, marginBottom: 4 }}>{t.name}</p>
                        <p style={{ fontSize: 12, color: C.muted }}>{t.duration}</p>
                      </div>
                      <p style={{ fontFamily: fontDisplay, fontSize: 18, color: C.gold, whiteSpace: "nowrap", marginLeft: 16 }}>
                        {t.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOURS & CTA
          ═══════════════════════════════════════ */}
      <section style={{
        padding: "80px 24px",
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <Reveal type="fade">
            <p style={{
              fontFamily: fontBody, color: C.gold,
              letterSpacing: "0.3em", fontSize: 12, fontWeight: 500,
              textTransform: "uppercase", marginBottom: 12,
            }}>
              Opening Hours
            </p>
            <h2 style={{
              fontFamily: fontDisplay, fontSize: 36, fontWeight: 300,
              color: C.cream, marginBottom: 16,
            }}>
              Daily 07:00 &ndash; 21:00
            </h2>
            <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.8, marginBottom: 40 }}>
              We recommend booking treatments in advance to secure your preferred
              time. Walk-in availability is subject to therapist schedules.
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <Link href="#">
              <span style={{
                display: "inline-block", padding: "16px 44px",
                background: C.gold, color: C.bg,
                fontFamily: fontBody, fontSize: 13, fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
                cursor: "pointer",
              }}>
                Book a Treatment
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer style={{
        background: C.bg,
        borderTop: "1px solid rgba(201,169,110,0.12)",
        padding: "64px 24px 48px",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 40,
        }}>
          <div>
            <h4 style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 400, color: C.cream, marginBottom: 16 }}>
              Grand Harbour
            </h4>
            <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.8 }}>
              St. Barbara Bastion<br />Valletta VLT 1960<br />Malta
            </p>
          </div>
          <div>
            <h5 style={{
              fontFamily: fontBody, fontSize: 12, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: C.gold, marginBottom: 16,
            }}>
              Quick Links
            </h5>
            {["Rooms & Suites", "Dining", "Spa & Wellness", "Experiences", "Gallery"].map((link) => (
              <p key={link} style={{ color: C.muted, fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.cream)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
              >
                {link}
              </p>
            ))}
          </div>
          <div>
            <h5 style={{
              fontFamily: fontBody, fontSize: 12, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: C.gold, marginBottom: 16,
            }}>
              Contact
            </h5>
            <p style={{ color: C.muted, fontSize: 13, lineHeight: 2.1 }}>
              +356 2124 0000<br />reservations@grandharbour.mt<br />concierge@grandharbour.mt
            </p>
          </div>
          <div>
            <h5 style={{
              fontFamily: fontBody, fontSize: 12, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: C.gold, marginBottom: 16,
            }}>
              Follow
            </h5>
            {["Instagram", "Facebook", "Pinterest", "TripAdvisor"].map((s) => (
              <p key={s} style={{ color: C.muted, fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.cream)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
              >
                {s}
              </p>
            ))}
          </div>
        </div>
        <div style={{
          maxWidth: 1100, margin: "48px auto 0", paddingTop: 24,
          borderTop: "1px solid rgba(201,169,110,0.08)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ color: C.muted, fontSize: 12 }}>
            &copy; {new Date().getFullYear()} Grand Harbour Hotel &amp; Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Accessibility"].map((t) => (
              <span key={t} style={{ color: C.muted, fontSize: 12, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.gold)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
