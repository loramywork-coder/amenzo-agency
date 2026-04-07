"use client";

import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";
import { DemoBanner } from "@/components/demos/demo-banner";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

/* ─── unsplash helper ─── */
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/* ─── restaurant data ─── */
const harbourGrillDishes = [
  { name: "Dry-Aged Ribeye", desc: "Bone marrow butter, charred leek, red wine jus", price: "\u20AC52" },
  { name: "Grilled Mediterranean Lobster", desc: "Garlic herb butter, saffron risotto, micro greens", price: "\u20AC58" },
  { name: "Pan-Seared Sea Bass", desc: "Fennel purée, saffron beurre blanc, samphire", price: "\u20AC38" },
  { name: "Wagyu Tartare", desc: "Truffle aïoli, quail egg, sourdough crisps", price: "\u20AC42" },
  { name: "Rack of Maltese Lamb", desc: "Herb crust, pommes dauphine, rosemary jus", price: "\u20AC44" },
  { name: "Crème Brûlée", desc: "Tahitian vanilla, caramelised figs, almond tuile", price: "\u20AC18" },
] as const;

const laTerrazzaDishes = [
  { name: "Burrata Caprese", desc: "Heirloom tomatoes, basil oil, aged balsamic", price: "\u20AC22" },
  { name: "Hand-Made Pappardelle", desc: "Slow-braised rabbit ragù, pecorino, sage", price: "\u20AC28" },
  { name: "Grilled Octopus", desc: "Crispy potatoes, nduja, roasted peppers", price: "\u20AC32" },
  { name: "Margherita DOC", desc: "San Marzano, fior di latte, fresh basil", price: "\u20AC18" },
  { name: "Branzino al Cartoccio", desc: "Oven-baked whole fish, capers, cherry tomatoes", price: "\u20AC34" },
  { name: "Tiramisu Classico", desc: "Mascarpone, espresso, Marsala, cocoa", price: "\u20AC16" },
] as const;

const barAzureCocktails = [
  { name: "Mediterranean Sunset", desc: "Aperol, blood orange, prosecco, rosemary", price: "\u20AC16" },
  { name: "Maltese Negroni", desc: "Gin, bitter liqueur, local vermouth, orange peel", price: "\u20AC18" },
  { name: "Azure Spritz", desc: "Blue curaçao, elderflower, champagne, lime", price: "\u20AC17" },
  { name: "Harbour Old Fashioned", desc: "Bourbon, demerara, Angostura, smoked orange", price: "\u20AC19" },
  { name: "La Vie en Rosé", desc: "Rosé gin, lychee, rose water, sparkling", price: "\u20AC16" },
  { name: "Espresso Martini", desc: "Vodka, fresh espresso, coffee liqueur, vanilla", price: "\u20AC17" },
] as const;

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Rooms", href: "/demos/hotel/rooms" },
  { label: "Dining", href: "/demos/hotel/dining" },
  { label: "Spa", href: "/demos/hotel#spa" },
  { label: "Experiences", href: "/demos/hotel#amenities" },
  { label: "Gallery", href: "/demos/hotel#gallery" },
  { label: "Events", href: "/demos/hotel#events" },
] as const;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NAV HEADER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
    return () => {
      document.body.style.overflow = "";
    };
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
          transition:
            "background 0.4s, border-color 0.4s",
        }}
      >
        <Link href="/demos/hotel" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span
              style={{
                display: "block",
                fontFamily: fontDisplay,
                fontWeight: 400,
                fontSize: 20,
                color: C.cream,
              }}
            >
              Grand Harbour
            </span>
            <span
              style={{
                display: "block",
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: 13,
                color: C.gold,
                letterSpacing: "0.08em",
              }}
            >
              Hotel &amp; Spa
            </span>
          </div>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                fontWeight: 500,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.cream)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel/contact"
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              color: C.bg,
              background: C.gold,
              padding: "10px 24px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            Book Your Stay
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: 6,
          }}
        >
          <span
            style={{
              width: 24,
              height: 1.5,
              background: C.cream,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            style={{
              width: 24,
              height: 1.5,
              background: C.cream,
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <span
            style={{
              width: 24,
              height: 1.5,
              background: C.cream,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(12,18,32,0.98)",
            paddingTop: 140,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: fontDisplay,
                fontSize: 28,
                fontWeight: 300,
                color: C.cream,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 20,
              fontFamily: fontBody,
              fontSize: 13,
              fontWeight: 600,
              color: C.bg,
              background: C.gold,
              padding: "14px 40px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Book Your Stay
          </Link>
        </div>
      )}
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FOOTER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SiteFooter() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "64px 24px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 40,
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: fontDisplay,
              fontSize: 24,
              fontWeight: 400,
              color: C.cream,
              marginBottom: 12,
            }}
          >
            Grand Harbour
          </h4>
          <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={C.gold}
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
              </svg>
            ))}
          </div>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.8 }}>
            St. Barbara Bastion
            <br />
            Valletta VLT 1960, Malta
          </p>
        </div>

        <div>
          <h5
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: 16,
            }}
          >
            Explore
          </h5>
          {[
            { label: "Rooms & Suites", href: "/demos/hotel/rooms" },
            { label: "Dining", href: "/demos/hotel/dining" },
            { label: "Spa & Wellness", href: "/demos/hotel#spa" },
            { label: "Meetings & Events", href: "/demos/hotel#events" },
            { label: "Gallery", href: "/demos/hotel#gallery" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                display: "block",
                color: C.muted,
                fontSize: 13,
                marginBottom: 10,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.cream)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h5
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: 16,
            }}
          >
            Contact
          </h5>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 2.1 }}>
            +356 2124 0000
            <br />
            reservations@grandharbour.mt
            <br />
            concierge@grandharbour.mt
          </p>
        </div>

        <div>
          <h5
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: 16,
            }}
          >
            Follow
          </h5>
          {["Instagram", "Facebook", "Pinterest", "TripAdvisor"].map((s) => (
            <p
              key={s}
              style={{
                color: C.muted,
                fontSize: 13,
                marginBottom: 10,
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.cream)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {s}
            </p>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ color: C.muted, fontSize: 12 }}>
          &copy; {new Date().getFullYear()} Grand Harbour Hotel &amp; Spa. All
          rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms", "Accessibility"].map((t) => (
            <span
              key={t}
              style={{
                color: C.muted,
                fontSize: 12,
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.gold)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── dish list component ─── */
function DishList({
  items,
}: {
  items: ReadonlyArray<{ name: string; desc: string; price: string }>;
}) {
  return (
    <div style={{ display: "grid", gap: 0 }}>
      {items.map((dish, i) => (
        <Reveal key={dish.name} type="slide-up" delay={i * 0.06}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "20px 0",
              borderBottom: `1px solid ${C.border}`,
              gap: 16,
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,169,110,0.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: fontDisplay,
                  fontSize: 20,
                  fontWeight: 400,
                  color: C.cream,
                  marginBottom: 4,
                }}
              >
                {dish.name}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: C.muted,
                  lineHeight: 1.6,
                }}
              >
                {dish.desc}
              </p>
            </div>
            <p
              style={{
                fontFamily: fontDisplay,
                fontSize: 20,
                fontWeight: 600,
                color: C.gold,
                whiteSpace: "nowrap",
              }}
            >
              {dish.price}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   DINING PAGE
   ═══════════════════════════════════════════════════════ */
export default function DiningPage() {
  return (
    <div
      style={{
        background: C.bg,
        color: C.cream,
        fontFamily: fontBody,
        paddingTop: 40,
      }}
    >
      <DemoBanner />
      <NavHeader />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section
        style={{
          padding: "160px 24px 80px",
          textAlign: "center",
        }}
      >
        <Reveal type="fade">
          <p
            style={{
              fontFamily: fontBody,
              color: C.gold,
              letterSpacing: "0.35em",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Gastronomy
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.15}>
          <h1
            style={{
              fontFamily: fontDisplay,
              fontSize: "clamp(36px, 5vw, 48px)",
              fontWeight: 300,
              color: C.cream,
              marginBottom: 16,
            }}
          >
            Dining &amp; Drinks
          </h1>
        </Reveal>
        <Reveal type="fade" delay={0.3}>
          <div
            style={{
              width: 50,
              height: 1,
              background: C.gold,
              margin: "0 auto 24px",
            }}
          />
          <p
            style={{
              color: C.muted,
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Three distinctive restaurants and a rooftop bar, each celebrating the
            flavours of the Mediterranean with locally sourced ingredients and
            world-class technique.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          RESTAURANT 1 — HARBOUR GRILL
          ═══════════════════════════════════════ */}
      <section style={{ padding: "60px 24px 100px" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto" }}
          className="dining-section-grid"
        >
          {/* Image */}
          <Reveal type="slide-left">
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Image
                src={unsplash("photo-1559339352-11d035aa65de", 1000)}
                alt="Harbour Grill restaurant interior"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal type="fade">
              <p
                style={{
                  fontFamily: fontBody,
                  color: C.gold,
                  letterSpacing: "0.3em",
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Fine Dining
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.1}>
              <h2
                style={{
                  fontFamily: fontDisplay,
                  fontSize: "clamp(32px, 4vw, 42px)",
                  fontWeight: 300,
                  color: C.cream,
                  marginBottom: 20,
                }}
              >
                Harbour Grill
              </h2>
            </Reveal>
            <Reveal type="fade" delay={0.2}>
              <p
                style={{
                  color: C.muted,
                  fontSize: 15,
                  lineHeight: 1.8,
                  marginBottom: 24,
                  maxWidth: 520,
                }}
              >
                Our signature fine dining experience pairs dry-aged steaks and the
                freshest Mediterranean catch with panoramic harbour views. The
                open kitchen invites you to witness the artistry behind every
                course, while our sommelier curates pairings from an award-winning
                cellar.
              </p>
            </Reveal>

            {/* Details */}
            <Reveal type="fade" delay={0.25}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    padding: "12px 20px",
                    background: "rgba(201,169,110,0.06)",
                    borderRadius: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: C.gold,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Hours
                  </p>
                  <p style={{ fontSize: 14, color: C.cream }}>
                    Tue &ndash; Sat, 19:00 &ndash; 23:00
                  </p>
                </div>
                <div
                  style={{
                    padding: "12px 20px",
                    background: "rgba(201,169,110,0.06)",
                    borderRadius: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: C.gold,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Dress Code
                  </p>
                  <p style={{ fontSize: 14, color: C.cream }}>
                    Smart Elegant
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Dishes */}
            <Reveal type="fade" delay={0.3}>
              <h3
                style={{
                  fontFamily: fontDisplay,
                  fontSize: 22,
                  fontWeight: 400,
                  color: C.cream,
                  marginBottom: 8,
                }}
              >
                From the Menu
              </h3>
            </Reveal>
            <DishList items={harbourGrillDishes} />

            <Reveal type="slide-up" delay={0.4}>
              <div style={{ marginTop: 32 }}>
                <MagneticButton href="/demos/hotel/contact">
                  <span
                    style={{
                      display: "inline-block",
                      padding: "14px 36px",
                      background: C.gold,
                      color: C.bg,
                      fontFamily: fontBody,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Reserve a Table
                  </span>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RESTAURANT 2 — LA TERRAZZA
          ═══════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: C.surface }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto" }}
          className="dining-section-grid dining-section-reverse"
        >
          {/* Image */}
          <Reveal type="slide-right">
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Image
                src={unsplash("photo-1555396273-367ea4eb4db5", 1000)}
                alt="La Terrazza restaurant terrace"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal type="fade">
              <p
                style={{
                  fontFamily: fontBody,
                  color: C.gold,
                  letterSpacing: "0.3em",
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Casual Mediterranean
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.1}>
              <h2
                style={{
                  fontFamily: fontDisplay,
                  fontSize: "clamp(32px, 4vw, 42px)",
                  fontWeight: 300,
                  color: C.cream,
                  marginBottom: 20,
                }}
              >
                La Terrazza
              </h2>
            </Reveal>
            <Reveal type="fade" delay={0.2}>
              <p
                style={{
                  color: C.muted,
                  fontSize: 15,
                  lineHeight: 1.8,
                  marginBottom: 24,
                  maxWidth: 520,
                }}
              >
                Our sunlit rooftop terrace serves authentic Italian cuisine in an
                atmosphere that welcomes families and couples alike. Hand-made
                pasta, seasonal ingredients sourced from Maltese farms, and
                wood-fired pizzas make every meal feel like a celebration of
                Mediterranean living.
              </p>
            </Reveal>

            <Reveal type="fade" delay={0.25}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    padding: "12px 20px",
                    background: "rgba(201,169,110,0.06)",
                    borderRadius: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: C.gold,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Hours
                  </p>
                  <p style={{ fontSize: 14, color: C.cream }}>
                    Daily, 12:00 &ndash; 22:00
                  </p>
                </div>
                <div
                  style={{
                    padding: "12px 20px",
                    background: "rgba(201,169,110,0.06)",
                    borderRadius: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: C.gold,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Atmosphere
                  </p>
                  <p style={{ fontSize: 14, color: C.cream }}>
                    Family-Friendly
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal type="fade" delay={0.3}>
              <h3
                style={{
                  fontFamily: fontDisplay,
                  fontSize: 22,
                  fontWeight: 400,
                  color: C.cream,
                  marginBottom: 8,
                }}
              >
                From the Menu
              </h3>
            </Reveal>
            <DishList items={laTerrazzaDishes} />

            <Reveal type="slide-up" delay={0.4}>
              <div style={{ marginTop: 32 }}>
                <MagneticButton href="/demos/hotel/contact">
                  <span
                    style={{
                      display: "inline-block",
                      padding: "14px 36px",
                      background: C.gold,
                      color: C.bg,
                      fontFamily: fontBody,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Reserve a Table
                  </span>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RESTAURANT 3 — BAR AZURE
          ═══════════════════════════════════════ */}
      <section style={{ padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto" }}
          className="dining-section-grid"
        >
          {/* Image */}
          <Reveal type="slide-left">
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Image
                src={unsplash("photo-1470337458703-46ad1756a187", 1000)}
                alt="Bar Azure rooftop at sunset"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal type="fade">
              <p
                style={{
                  fontFamily: fontBody,
                  color: C.gold,
                  letterSpacing: "0.3em",
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Rooftop Bar
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.1}>
              <h2
                style={{
                  fontFamily: fontDisplay,
                  fontSize: "clamp(32px, 4vw, 42px)",
                  fontWeight: 300,
                  color: C.cream,
                  marginBottom: 20,
                }}
              >
                Bar Azure
              </h2>
            </Reveal>
            <Reveal type="fade" delay={0.2}>
              <p
                style={{
                  color: C.muted,
                  fontSize: 15,
                  lineHeight: 1.8,
                  marginBottom: 24,
                  maxWidth: 520,
                }}
              >
                Perched on our rooftop with uninterrupted views of the Grand
                Harbour, Bar Azure is where the day gently transitions into
                evening. Our mixologists craft signature cocktails using local
                spirits and seasonal botanicals, accompanied by a refined selection
                of small plates.
              </p>
            </Reveal>

            <Reveal type="fade" delay={0.25}>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  flexWrap: "wrap",
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    padding: "12px 20px",
                    background: "rgba(201,169,110,0.06)",
                    borderRadius: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: C.gold,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Hours
                  </p>
                  <p style={{ fontSize: 14, color: C.cream }}>
                    Daily, 16:00 &ndash; 01:00
                  </p>
                </div>
                <div
                  style={{
                    padding: "12px 20px",
                    background: "rgba(201,169,110,0.06)",
                    borderRadius: 4,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      color: C.gold,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Entertainment
                  </p>
                  <p style={{ fontSize: 14, color: C.cream }}>
                    Live Music Fridays
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal type="fade" delay={0.3}>
              <h3
                style={{
                  fontFamily: fontDisplay,
                  fontSize: 22,
                  fontWeight: 400,
                  color: C.cream,
                  marginBottom: 8,
                }}
              >
                Signature Cocktails
              </h3>
            </Reveal>
            <DishList items={barAzureCocktails} />

            <Reveal type="slide-up" delay={0.4}>
              <div style={{ marginTop: 32 }}>
                <MagneticButton href="/demos/hotel/contact">
                  <span
                    style={{
                      display: "inline-block",
                      padding: "14px 36px",
                      border: `1px solid ${C.gold}`,
                      color: C.gold,
                      fontFamily: fontBody,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Reserve a Table
                  </span>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <SiteFooter />

      {/* responsive grid */}
      <style jsx global>{`
        .dining-section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .dining-section-reverse {
          direction: rtl;
        }
        .dining-section-reverse > * {
          direction: ltr;
        }
        @media (max-width: 768px) {
          .dining-section-grid {
            grid-template-columns: 1fr !important;
          }
          .dining-section-reverse {
            direction: ltr !important;
          }
        }
      `}</style>
    </div>
  );
}
