"use client";

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
  { label: "About", href: "/demos/restaurant/about" },
  { label: "Chef", href: "/demos/restaurant/chef" },
  { label: "Contact", href: "/demos/restaurant/contact" },
];

/* ─── career timeline ─── */
const TIMELINE = [
  {
    year: "2004",
    title: "Culinary Foundations in Rome",
    description:
      "Trained at the Accademia Italiana della Cucina under master chefs who instilled a reverence for simplicity, seasonal rhythm, and the discipline of classical technique.",
  },
  {
    year: "2010",
    title: "Michelin Star in London",
    description:
      "As Head Chef at Savour in Mayfair, Marco earned a Michelin star within two years, praised for bold Mediterranean flavours presented with exacting modern precision.",
  },
  {
    year: "2015",
    title: "Return to Malta",
    description:
      "Drawn by the pull of the island\u2019s terroir and the memory of his grandmother\u2019s kitchen, Marco returned home to build something deeply personal.",
  },
  {
    year: "2017",
    title: "Porto Valletta Opens",
    description:
      "On a quiet corner of Strait Street, Porto Valletta opened its doors. What began as a 28-seat dining room has since become one of Malta\u2019s most celebrated tables.",
  },
];

/* ─── signature dishes ─── */
const SIGNATURE_DISHES = [
  {
    name: "Lampuki Crudo",
    description:
      "Thinly sliced dolphinfish cured in Gozitan sea salt, finished with blood orange, fennel pollen, and Arbequina olive oil from our partner farm in Siggiewi.",
  },
  {
    name: "Slow-Braised Rabbit Ravioli",
    description:
      "Hand-rolled pasta filled with rabbit braised in red wine and bay leaf, served in a light saffron broth with shaved bottarga and crispy sage.",
  },
  {
    name: "Carob & Honey Semifreddo",
    description:
      "A frozen dessert of local carob and wildflower honey, layered over a dark-chocolate soil with candied kumquat and Fleur de Sel.",
  },
];

/* ━━━ PAGE COMPONENT ━━━ */
export default function ChefPage() {
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, overflowX: "hidden", paddingTop: 40 }}>
      <DemoBanner />

      {/* ─── Navigation Header ─── */}
      <header style={{
        position: "absolute", top: 40, left: 0, right: 0, zIndex: 50,
        background: "rgba(10,10,8,0.75)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
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
            .chef-nav-links{display:none;gap:28px;align-items:center;}
            @media(min-width:768px){.chef-nav-links{display:flex;}}
          `}</style>
          <nav className="chef-nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: fontBody, fontSize: 13, letterSpacing: "0.06em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: link.href === "/demos/restaurant/chef" ? C.gold : C.muted,
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    link.href === "/demos/restaurant/chef" ? C.gold : C.muted;
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
        position: "relative",
        paddingTop: 200, paddingBottom: 120,
        textAlign: "center", padding: "200px 24px 120px",
      }}>
        {/* decorative line */}
        <Reveal type="fade" delay={0.1}>
          <div style={{
            width: 1, height: 60, background: `linear-gradient(to bottom, transparent, ${C.gold})`,
            margin: "0 auto 32px",
          }} />
        </Reveal>

        <Reveal type="fade" delay={0.3}>
          <p style={{
            fontFamily: fontBody, fontSize: 12, letterSpacing: "0.35em",
            textTransform: "uppercase", color: C.gold, marginBottom: 20,
          }}>
            Meet the Chef
          </p>
        </Reveal>

        <Reveal type="fade" delay={0.5}>
          <h1 style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
            fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.1, color: C.cream, margin: "0 0 12px",
          }}>
            Marco Azzopardi
          </h1>
        </Reveal>

        <Reveal type="fade" delay={0.7}>
          <p style={{
            fontFamily: fontBody, fontSize: 14, letterSpacing: "0.2em",
            textTransform: "uppercase", color: C.muted, margin: 0,
          }}>
            Executive Chef
          </p>
        </Reveal>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ height: 2, background: C.gold, margin: "36px auto 0" }}
        />
      </section>

      {/* ─── Philosophy Section ─── */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
          <Reveal type="slide-up">
            <p style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.3em",
              textTransform: "uppercase", color: C.gold, marginBottom: 28,
            }}>
              Philosophy
            </p>
          </Reveal>

          <Reveal type="fade" delay={0.2}>
            <blockquote style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 400,
              fontSize: "clamp(22px, 3vw, 30px)", lineHeight: 1.6,
              color: "rgba(245,230,211,0.75)", margin: "0 0 36px",
              borderLeft: "none",
            }}>
              &ldquo;Cooking is not about showing what you know. It is about listening &mdash; to the ingredient, to the season, to the person sitting at the table.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal type="fade" delay={0.35}>
            <div style={{
              width: 40, height: 1, background: C.gold, margin: "0 auto 36px",
            }} />
          </Reveal>

          <Reveal type="slide-up" delay={0.4}>
            <p style={{
              fontFamily: fontBody, fontSize: 16, lineHeight: 1.85,
              color: C.muted, margin: "0 0 20px", maxWidth: 600, marginLeft: "auto", marginRight: "auto",
            }}>
              Marco&apos;s approach is rooted in restraint. Every plate at Porto Valletta celebrates
              the ingredient at its peak &mdash; never masked, never forced. He draws from the
              classical Italian tradition but filters it through the lens of Malta&apos;s singular
              terroir: island herbs, sun-ripened stone fruit, the daily catch from Marsaxlokk.
            </p>
          </Reveal>

          <Reveal type="slide-up" delay={0.5}>
            <p style={{
              fontFamily: fontBody, fontSize: 16, lineHeight: 1.85,
              color: C.muted, margin: 0, maxWidth: 600, marginLeft: "auto", marginRight: "auto",
            }}>
              His menus shift with the tide and the harvest. Nothing is permanent except the
              commitment to honesty on the plate. It is this quiet discipline that has earned
              Porto Valletta a devoted following among those who seek not spectacle, but truth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Career Timeline ─── */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "100px 24px" }}>
        <Reveal type="slide-up">
          <p style={{
            fontFamily: fontBody, fontSize: 12, letterSpacing: "0.3em",
            textTransform: "uppercase", color: C.gold, marginBottom: 16, textAlign: "center",
          }}>
            The Journey
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2 style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 36px)", textAlign: "center", color: C.cream,
            margin: "0 0 64px",
          }}>
            A Career Shaped by Place
          </h2>
        </Reveal>

        <div style={{ position: "relative" }}>
          {/* vertical line */}
          <div style={{
            position: "absolute", left: 20, top: 0, bottom: 0, width: 1,
            background: `linear-gradient(to bottom, ${C.gold}, ${C.border})`,
          }} />

          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} type="slide-up" delay={i * 0.15}>
              <div style={{
                display: "flex", gap: 32, marginBottom: i < TIMELINE.length - 1 ? 52 : 0,
                position: "relative",
              }}>
                {/* dot */}
                <div style={{
                  width: 40, minWidth: 40, display: "flex", justifyContent: "center", paddingTop: 4,
                }}>
                  <div style={{
                    width: 11, height: 11, borderRadius: "50%",
                    border: `2px solid ${C.gold}`,
                    background: C.bg,
                  }} />
                </div>

                {/* content */}
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontFamily: fontBody, fontSize: 13, fontWeight: 600,
                    letterSpacing: "0.12em", color: C.gold,
                  }}>
                    {item.year}
                  </span>
                  <h3 style={{
                    fontFamily: fontDisplay, fontWeight: 600, fontSize: 22,
                    color: C.cream, margin: "8px 0 10px",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: fontBody, fontSize: 15, lineHeight: 1.75,
                    color: C.muted, margin: 0, maxWidth: 540,
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Signature Dishes ─── */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 24px" }}>
          <Reveal type="slide-up">
            <p style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.3em",
              textTransform: "uppercase", color: C.gold, marginBottom: 16, textAlign: "center",
            }}>
              From the Kitchen
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2 style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 36px)", textAlign: "center", color: C.cream,
              margin: "0 0 64px",
            }}>
              Signature Dishes
            </h2>
          </Reveal>

          <style>{`
            .chef-dishes-grid{display:grid;grid-template-columns:1fr;gap:32px;}
            @media(min-width:640px){.chef-dishes-grid{grid-template-columns:repeat(3,1fr);}}
          `}</style>
          <div className="chef-dishes-grid">
            {SIGNATURE_DISHES.map((dish, i) => (
              <Reveal key={dish.name} type="fade" delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    padding: "40px 28px",
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 2,
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {/* decorative number */}
                  <span style={{
                    fontFamily: fontDisplay, fontSize: 40, fontWeight: 300,
                    color: "rgba(201,147,90,0.15)", lineHeight: 1, display: "block",
                    marginBottom: 16,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{
                    fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 600,
                    fontSize: 22, color: C.cream, margin: "0 0 14px",
                  }}>
                    {dish.name}
                  </h3>
                  <p style={{
                    fontFamily: fontBody, fontSize: 14, lineHeight: 1.75,
                    color: C.muted, margin: 0,
                  }}>
                    {dish.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Quote ─── */}
      <section style={{ maxWidth: 680, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
        <Reveal type="fade">
          <div style={{
            borderTop: `1px solid ${C.border}`,
            borderBottom: `1px solid ${C.border}`,
            padding: "48px 0",
          }}>
            <p style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 400,
              fontSize: "clamp(20px, 3vw, 28px)", lineHeight: 1.6,
              color: "rgba(245,230,211,0.55)", margin: "0 0 20px",
            }}>
              &ldquo;The best dish I have ever made is always the next one. That is the only way to stay honest.&rdquo;
            </p>
            <p style={{
              fontFamily: fontBody, fontSize: 13, letterSpacing: "0.15em",
              textTransform: "uppercase", color: C.gold, margin: 0,
            }}>
              &mdash; Marco Azzopardi
            </p>
          </div>
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
