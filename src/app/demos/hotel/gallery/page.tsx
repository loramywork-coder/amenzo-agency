"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
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

/* ─── gallery categories ─── */
type Category = "All" | "Rooms" | "Dining" | "Spa" | "Pool" | "Exterior";
const CATEGORIES: Category[] = ["All", "Rooms", "Dining", "Spa", "Pool", "Exterior"];

/* ─── gallery images ─── */
interface GalleryImage {
  id: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const IMAGES: GalleryImage[] = [
  { id: "photo-1590490360182-c33d57733427", alt: "Luxury suite with harbour view", category: "Rooms" },
  { id: "photo-1582719478250-c89cae4dc85b", alt: "Deluxe sea view room", category: "Rooms" },
  { id: "photo-1631049307264-da0ec9d70304", alt: "Premium room with garden view", category: "Rooms" },
  { id: "photo-1414235077428-338989a2e8c0", alt: "Harbour Grill restaurant", category: "Dining" },
  { id: "photo-1517248135467-4c7edcad34c4", alt: "La Terrazza rooftop dining", category: "Dining" },
  { id: "photo-1470337458703-46ad1756a187", alt: "Bar Azure cocktails", category: "Dining" },
  { id: "photo-1544161515-4ab6ce6db874", alt: "Spa treatment room", category: "Spa" },
  { id: "photo-1540555700478-4be289fbec6d", alt: "Hammam steam room", category: "Spa" },
  { id: "photo-1571896349842-33c89424de2d", alt: "Spa relaxation lounge", category: "Spa" },
  { id: "photo-1573052905904-34ad8c27f0cc", alt: "Rooftop infinity pool", category: "Pool" },
  { id: "photo-1551882547-ff40c63fe5fa", alt: "Pool cabana at sunset", category: "Pool" },
  { id: "photo-1584132967334-10e028bd69f7", alt: "Indoor thermal pool", category: "Pool" },
  { id: "photo-1566073771259-6a8506099945", alt: "Hotel exterior at dusk", category: "Exterior" },
  { id: "photo-1564501049412-61c2a3083791", alt: "Grand entrance and courtyard", category: "Exterior" },
  { id: "photo-1520250497591-112f2f40a3f4", alt: "Aerial view of the property", category: "Exterior" },
];

/* ─── unsplash helper ─── */
const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

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
          background: scrolled ? "rgba(12,18,32,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
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
                color: link.href === "/demos/hotel/gallery" ? C.cream : "rgba(245,240,232,0.5)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/hotel/gallery" ? C.cream : "rgba(245,240,232,0.5)"; }}
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
export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? IMAGES : IMAGES.filter((img) => img.category === filter);

  /* ─── keyboard navigation for lightbox ─── */
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  /* ─── lock body scroll when lightbox open ─── */
  useEffect(() => {
    if (lightbox !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section style={{ padding: "140px 24px 60px", textAlign: "center" }}>
        <Reveal type="fade" delay={0.2}>
          <p style={{
            fontFamily: fontBody, color: C.gold, letterSpacing: "0.35em",
            fontSize: 13, fontWeight: 500, textTransform: "uppercase",
          }}>
            GALLERY
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.4}>
          <h1 style={{
            fontFamily: fontDisplay,
            fontSize: 44, fontWeight: 300, lineHeight: 1.15,
            color: C.cream, marginTop: 16,
          }}>
            Life at Grand Harbour
          </h1>
        </Reveal>
        <Reveal type="scale" delay={0.6}>
          <div style={{ width: 60, height: 1, background: C.gold, margin: "28px auto" }} />
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          FILTER TABS
          ═══════════════════════════════════════ */}
      <section style={{ padding: "0 24px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal type="fade" delay={0.3}>
          <div style={{
            display: "flex", justifyContent: "center", gap: 8,
            flexWrap: "wrap",
          }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setLightbox(null); }}
                style={{
                  fontFamily: fontBody, fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "10px 20px",
                  background: filter === cat ? C.gold : "transparent",
                  color: filter === cat ? C.bg : C.muted,
                  border: `1px solid ${filter === cat ? C.gold : C.border}`,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          MASONRY GRID
          ═══════════════════════════════════════ */}
      <section style={{ padding: "0 24px 100px", maxWidth: 1200, margin: "0 auto" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="gallery-masonry"
            style={{ columnGap: 20 }}
          >
            {filtered.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                style={{
                  breakInside: "avoid",
                  marginBottom: 20,
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                }}
                onClick={() => setLightbox(idx)}
              >
                <div
                  style={{ position: "relative", overflow: "hidden" }}
                  className="gallery-img-wrap"
                >
                  <Image
                    src={unsplash(img.id, 800)}
                    alt={img.alt}
                    width={600}
                    height={idx % 3 === 0 ? 450 : idx % 3 === 1 ? 360 : 400}
                    style={{
                      width: "100%", height: "auto", display: "block",
                      transition: "transform 0.5s cubic-bezier(0.25,0.1,0.25,1)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  />
                  <div
                    style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(12,18,32,0.6) 0%, transparent 50%)",
                      opacity: 0, transition: "opacity 0.3s", pointerEvents: "none",
                    }}
                    className="gallery-overlay"
                  />
                  <p
                    style={{
                      position: "absolute", bottom: 16, left: 16, right: 16,
                      fontFamily: fontBody, fontSize: 12, color: C.cream,
                      letterSpacing: "0.08em", opacity: 0, transition: "opacity 0.3s",
                      pointerEvents: "none",
                    }}
                    className="gallery-label"
                  >
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ═══════════════════════════════════════
          LIGHTBOX
          ═══════════════════════════════════════ */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 300,
              background: "rgba(12,18,32,0.96)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onClick={closeLightbox}
          >
            {/* close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                position: "absolute", top: 24, right: 24, zIndex: 310,
                background: "none", border: "none", color: C.cream,
                fontSize: 32, cursor: "pointer", lineHeight: 1,
              }}
            >
              &times;
            </button>

            {/* counter */}
            <p style={{
              position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)",
              fontFamily: fontBody, fontSize: 13, color: C.muted, zIndex: 310,
            }}>
              {lightbox + 1} / {filtered.length}
            </p>

            {/* prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
              style={{
                position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
                zIndex: 310, background: "rgba(255,255,255,0.08)",
                border: "none", color: C.cream, fontSize: 24,
                width: 48, height: 48, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
            >
              &#8249;
            </button>

            {/* next button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
              style={{
                position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
                zIndex: 310, background: "rgba(255,255,255,0.08)",
                border: "none", color: C.cream, fontSize: 24,
                width: 48, height: 48, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
            >
              &#8250;
            </button>

            {/* image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative",
                  maxWidth: "85vw", maxHeight: "80vh",
                }}
              >
                <Image
                  src={unsplash(filtered[lightbox].id, 1600)}
                  alt={filtered[lightbox].alt}
                  width={1400}
                  height={900}
                  style={{
                    maxWidth: "85vw", maxHeight: "80vh",
                    width: "auto", height: "auto",
                    objectFit: "contain",
                  }}
                />
                <p style={{
                  textAlign: "center", marginTop: 16,
                  fontFamily: fontBody, fontSize: 13, color: C.muted,
                }}>
                  {filtered[lightbox].alt}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* ─── styles ─── */}
      <style>{`
        .gallery-masonry{columns:3;column-gap:20px;}
        @media(max-width:899px){.gallery-masonry{columns:2;}}
        @media(max-width:499px){.gallery-masonry{columns:1;}}

        .gallery-img-wrap:hover .gallery-overlay{opacity:1!important;}
        .gallery-img-wrap:hover .gallery-label{opacity:1!important;}

        .hotel-desktop-nav{display:flex!important;}
        .hotel-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .hotel-desktop-nav{display:none!important;}
          .hotel-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </div>
  );
}
