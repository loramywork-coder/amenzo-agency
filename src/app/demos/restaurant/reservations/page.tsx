"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const C = {
  bg: "#0A0A08",
  surface: "#121210",
  gold: "#C9935A",
  cream: "#F5E6D3",
  muted: "#8A7E70",
  border: "#2A2620",
} as const;

/* ─── font stacks ─── */
const fontDisplay = "var(--font-heading), 'Playfair Display', Georgia, serif";
const fontBody = "var(--font-body), 'DM Sans', system-ui, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/restaurant" },
  { label: "Menu", href: "/demos/restaurant/menu" },
  { label: "Wine", href: "/demos/restaurant/wine" },
  { label: "Gallery", href: "/demos/restaurant/gallery" },
  { label: "Reservations", href: "/demos/restaurant/reservations" },
  { label: "About", href: "/demos/restaurant/about" },
  { label: "Contact", href: "/demos/restaurant/contact" },
];

/* ─── time slots ─── */
const TIME_SLOTS = [
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
];

/* ─── info cards ─── */
const INFO_CARDS = [
  {
    title: "Opening Hours",
    lines: ["Tue – Sat: 18:00 – 23:00", "Sunday Brunch: 11:00 – 15:00", "Monday: Closed"],
    icon: "\u231A",
  },
  {
    title: "Dress Code",
    lines: ["Smart Casual", "We kindly ask guests to refrain", "from beachwear and sportswear."],
    icon: "\u2726",
  },
  {
    title: "Private Dining",
    lines: ["Our limestone cellar seats up to 14", "for intimate celebrations.", "Inquire for availability."],
    icon: "\u2B29",
  },
];

/* ━━━ PAGE COMPONENT ━━━ */
export default function ReservationsPage() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, overflowX: "hidden", paddingTop: 40 }}>
      <DemoBanner />

      {/* ─── Navigation Header ─── */}
      <header style={{
        position: "absolute", top: 40, left: 0, right: 0, zIndex: 50,
        background: "transparent",
        borderBottom: "none",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}>
          <a href="/demos/restaurant" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 600,
              fontSize: 22, color: C.cream,
            }}>
              Porto Valletta
            </span>
          </a>
          <style>{`
            .res-nav-links{display:none;gap:28px;align-items:center;}
            @media(min-width:768px){.res-nav-links{display:flex;}}
          `}</style>
          <nav className="res-nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: fontBody, fontSize: 13, letterSpacing: "0.06em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: link.href === "/demos/restaurant/reservations" ? C.gold : C.muted,
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    link.href === "/demos/restaurant/reservations" ? C.gold : C.muted;
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section style={{
        paddingTop: 180, paddingBottom: 60,
        textAlign: "center", padding: "180px 24px 60px",
      }}>
        <Reveal type="fade" delay={0.2}>
          <p style={{
            fontFamily: fontBody, fontSize: 12, letterSpacing: "0.35em",
            textTransform: "uppercase", color: C.gold, marginBottom: 20,
          }}>
            Dining Experience
          </p>
        </Reveal>
        <Reveal type="fade" delay={0.4}>
          <h1 style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
            fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.15, color: C.cream, margin: 0,
          }}>
            Reserve a Table
          </h1>
        </Reveal>
        <Reveal type="fade" delay={0.6}>
          <p style={{
            fontFamily: fontBody, fontSize: 16, lineHeight: 1.7,
            color: C.muted, maxWidth: 520, margin: "24px auto 0",
          }}>
            Join us for an evening of Mediterranean elegance. We recommend booking
            at least 48 hours in advance for the best availability.
          </p>
        </Reveal>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ height: 2, background: C.gold, margin: "32px auto 0" }}
        />
      </section>

      {/* ─── Reservation Form ─── */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 100px" }}>
        <Reveal type="slide-up" delay={0.1}>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 2,
              padding: "48px 40px",
            }}
          >
            {/* ─── Date & Party Size Row ─── */}
            <style>{`
              .res-form-row{display:grid;grid-template-columns:1fr;gap:24px;margin-bottom:24px;}
              @media(min-width:560px){.res-form-row{grid-template-columns:1fr 1fr;}}
            `}</style>
            <div className="res-form-row">
              <div>
                <label style={{
                  fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 10,
                }}>
                  Date
                </label>
                <input
                  type="date"
                  style={{
                    width: "100%", padding: "14px 16px", fontFamily: fontBody, fontSize: 15,
                    background: C.bg, border: `1px solid ${C.border}`, borderRadius: 2,
                    color: C.cream, outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{
                  fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 10,
                }}>
                  Party Size
                </label>
                <select
                  style={{
                    width: "100%", padding: "14px 16px", fontFamily: fontBody, fontSize: 15,
                    background: C.bg, border: `1px solid ${C.border}`, borderRadius: 2,
                    color: C.cream, outline: "none", appearance: "none", boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} style={{ background: C.bg, color: C.cream }}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ─── Preferred Time ─── */}
            <div style={{ marginBottom: 32 }}>
              <label style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 14,
              }}>
                Preferred Time
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {TIME_SLOTS.map((slot) => {
                  const active = selectedTime === slot;
                  return (
                    <motion.button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        fontFamily: fontBody, fontSize: 14, letterSpacing: "0.04em",
                        padding: "10px 20px", borderRadius: 100, cursor: "pointer",
                        border: `1px solid ${active ? C.gold : C.border}`,
                        background: active ? "rgba(201,147,90,0.15)" : "transparent",
                        color: active ? C.gold : C.muted,
                        transition: "all 0.25s",
                      }}
                    >
                      {slot}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* ─── Name, Phone, Email ─── */}
            <div className="res-form-row">
              <div>
                <label style={{
                  fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 10,
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  style={{
                    width: "100%", padding: "14px 16px", fontFamily: fontBody, fontSize: 15,
                    background: C.bg, border: `1px solid ${C.border}`, borderRadius: 2,
                    color: C.cream, outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{
                  fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 10,
                }}>
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+356 2124 5678"
                  style={{
                    width: "100%", padding: "14px 16px", fontFamily: fontBody, fontSize: 15,
                    background: C.bg, border: `1px solid ${C.border}`, borderRadius: 2,
                    color: C.cream, outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            {/* ─── Email ─── */}
            <div style={{ marginBottom: 24 }}>
              <label style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 10,
              }}>
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                style={{
                  width: "100%", padding: "14px 16px", fontFamily: fontBody, fontSize: 15,
                  background: C.bg, border: `1px solid ${C.border}`, borderRadius: 2,
                  color: C.cream, outline: "none", boxSizing: "border-box",
                }}
              />
            </div>

            {/* ─── Special Requests ─── */}
            <div style={{ marginBottom: 36 }}>
              <label style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 10,
              }}>
                Special Requests
              </label>
              <textarea
                rows={4}
                placeholder="Dietary requirements, celebrations, seating preferences..."
                style={{
                  width: "100%", padding: "14px 16px", fontFamily: fontBody, fontSize: 15,
                  background: C.bg, border: `1px solid ${C.border}`, borderRadius: 2,
                  color: C.cream, outline: "none", resize: "vertical", boxSizing: "border-box",
                  lineHeight: 1.6,
                }}
              />
            </div>

            {/* ─── Submit Button ─── */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              style={{
                width: "100%", padding: "18px 32px",
                fontFamily: fontBody, fontSize: 13, fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase",
                background: C.gold, color: C.bg, border: "none",
                borderRadius: 2, cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#D4A46A"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.gold; }}
            >
              Request Reservation
            </motion.button>

            <p style={{
              fontFamily: fontBody, fontSize: 12, color: C.muted,
              textAlign: "center", marginTop: 16, marginBottom: 0, lineHeight: 1.6,
            }}>
              You will receive a confirmation email within 24 hours.
              <br />
              For parties larger than 10, please call us directly.
            </p>
          </form>
        </Reveal>
      </section>

      {/* ─── Info Cards ─── */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}>
          <style>{`
            .res-info-grid{display:grid;grid-template-columns:1fr;gap:28px;}
            @media(min-width:640px){.res-info-grid{grid-template-columns:repeat(3,1fr);}}
          `}</style>
          <div className="res-info-grid">
            {INFO_CARDS.map((card, i) => (
              <Reveal key={card.title} type="fade" delay={i * 0.15}>
                <div style={{
                  textAlign: "center", padding: "40px 28px",
                  background: C.bg, border: `1px solid ${C.border}`,
                  borderRadius: 2,
                }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 16, opacity: 0.7 }}>
                    {card.icon}
                  </span>
                  <h3 style={{
                    fontFamily: fontDisplay, fontWeight: 600, fontSize: 20,
                    color: C.cream, margin: "0 0 14px",
                  }}>
                    {card.title}
                  </h3>
                  {card.lines.map((line, j) => (
                    <p key={j} style={{
                      fontFamily: fontBody, fontSize: 14, lineHeight: 1.7,
                      color: C.muted, margin: j === 0 ? 0 : "2px 0 0",
                    }}>
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom Quote ─── */}
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <Reveal type="fade">
          <p style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 400,
            fontSize: "clamp(20px, 3vw, 26px)", lineHeight: 1.6,
            color: "rgba(245,230,211,0.5)", margin: 0,
          }}>
            &ldquo;A great meal begins long before the first course &mdash; it starts the moment you decide to come.&rdquo;
          </p>
        </Reveal>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        background: C.bg,
        borderTop: "1px solid rgba(201,147,90,0.1)",
        padding: "60px 24px 40px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, marginBottom: 48,
        }}>
          <div>
            <h3 style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 600,
              fontSize: 24, color: C.cream, margin: "0 0 12px",
            }}>
              Porto Valletta
            </h3>
            <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.7, color: C.muted, margin: 0 }}>
              42 Strait Street<br />
              Valletta VLT 1432<br />
              Malta
            </p>
          </div>
          <div>
            <h4 style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.gold, margin: "0 0 16px",
            }}>
              Navigate
            </h4>
            {["The Menu", "Wine List", "Private Dining", "Gift Cards", "Careers"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  display: "block", fontFamily: fontBody, fontSize: 14,
                  color: C.muted, textDecoration: "none", padding: "4px 0",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.muted; }}
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            <h4 style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.gold, margin: "0 0 16px",
            }}>
              Hours
            </h4>
            <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.8, color: C.muted, margin: 0 }}>
              Tue &ndash; Sat: 18:00 &ndash; 23:00<br />
              Sunday Brunch: 11:00 &ndash; 15:00<br />
              Monday: Closed
            </p>
          </div>
          <div>
            <h4 style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.gold, margin: "0 0 16px",
            }}>
              Contact
            </h4>
            <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.8, color: C.muted, margin: 0 }}>
              +356 2124 5678<br />
              reservations@portovalletta.mt
            </p>
          </div>
        </div>
        <div style={{
          borderTop: "1px solid rgba(201,147,90,0.08)",
          paddingTop: 24,
          display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: 12,
        }}>
          <p style={{
            fontFamily: fontBody, fontSize: 13, color: "rgba(138,126,112,0.6)", margin: 0,
          }}>
            &copy; {new Date().getFullYear()} Porto Valletta. All rights reserved.
          </p>
          <p style={{
            fontFamily: fontBody, fontSize: 13, color: "rgba(138,126,112,0.4)", margin: 0,
          }}>
            Site by <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" style={{ color: C.gold, textDecoration: "none" }}>Amenzo</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
