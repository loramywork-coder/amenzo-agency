"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* ─── unsplash helper ─── */
const img = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/restaurant" },
  { label: "Menu", href: "/demos/restaurant/menu" },
  { label: "Wine", href: "/demos/restaurant/wine" },
  { label: "Gallery", href: "/demos/restaurant/gallery" },
  { label: "Private Dining", href: "/demos/restaurant/private" },
  { label: "About", href: "/demos/restaurant/about" },
  { label: "Contact", href: "/demos/restaurant/contact" },
];

/* ─── gallery images ─── */
const GALLERY_IMAGES = [
  { id: "photo-1550966871-3ed3cdb51f3a", alt: "Plated dish with dark background" },
  { id: "photo-1470337458703-46ad1756a187", alt: "Restaurant candlelit table" },
  { id: "photo-1559339352-11d035aa65de", alt: "Fine dining presentation" },
  { id: "photo-1514933651103-005eec06c04b", alt: "Wine bar interior" },
  { id: "photo-1585518419759-7fe2e0fbf8a6", alt: "Chef plating a course" },
  { id: "photo-1543007630-9710e4a00a20", alt: "Dark food photography" },
  { id: "photo-1520209759809-a9bcb6cb3241", alt: "Cocktail preparation" },
  { id: "photo-1507914464562-6ff4ac29692f", alt: "Restaurant exterior at night" },
  { id: "photo-1515669097368-22e68427d265", alt: "Dessert plating" },
  { id: "photo-1540189549336-e6e99c3679fe", alt: "Pasta dish close-up" },
  { id: "photo-1504674900247-0877df9cc836", alt: "Grilled meat presentation" },
  { id: "photo-1428515613728-6b4607e44363", alt: "Table setting detail" },
  { id: "photo-1476124369491-e7addf5db371", alt: "Risotto dish" },
  { id: "photo-1565557623262-b51c2513a641", alt: "Spiced dish" },
  { id: "photo-1579783902614-a3fb3927b6a5", alt: "Abstract food art" },
];

/* ━━━ PAGE COMPONENT ━━━ */
export default function GalleryPage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  /* lightbox navigation */
  const lbPrev = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null)),
    []
  );
  const lbNext = useCallback(
    () => setLightboxIdx((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null)),
    []
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, lbPrev, lbNext]);

  /* lock body scroll when lightbox is open */
  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, overflowX: "hidden", paddingTop: 40 }}>
      <DemoBanner />

      {/* ─── Navigation Header ─── */}
      <header style={{
        position: "fixed", top: 40, left: 0, right: 0, zIndex: 50,
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
            .rest-nav-links{display:none;gap:28px;align-items:center;}
            @media(min-width:768px){.rest-nav-links{display:flex;}}
          `}</style>
          <nav className="rest-nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: fontBody, fontSize: 13, letterSpacing: "0.06em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: link.href === "/demos/restaurant/gallery" ? C.gold : C.muted,
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    link.href === "/demos/restaurant/gallery" ? C.gold : C.muted;
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
        paddingTop: 160, paddingBottom: 80,
        textAlign: "center", padding: "160px 24px 80px",
      }}>
        <Reveal type="fade" delay={0.2}>
          <p style={{
            fontFamily: fontBody, fontSize: 12, letterSpacing: "0.35em",
            textTransform: "uppercase", color: C.gold, marginBottom: 20,
          }}>
            Gallery
          </p>
        </Reveal>
        <Reveal type="fade" delay={0.4}>
          <h1 style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
            fontSize: 48, lineHeight: 1.15, color: C.cream, margin: 0,
          }}>
            Moments at Porto
          </h1>
        </Reveal>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ height: 2, background: C.gold, margin: "28px auto 0" }}
        />
      </section>

      {/* ─── Masonry Gallery Grid ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 120px" }}>
        <style>{`
          .rest-gallery-masonry{columns:2;column-gap:20px;}
          @media(min-width:768px){.rest-gallery-masonry{columns:3;column-gap:24px;}}
          .rest-gallery-item{break-inside:avoid;margin-bottom:20px;position:relative;overflow:hidden;cursor:pointer;}
          @media(min-width:768px){.rest-gallery-item{margin-bottom:24px;}}
          .rest-gallery-item img{display:block;width:100%;transition:transform 0.5s cubic-bezier(0.25,0.1,0.25,1);}
          .rest-gallery-item:hover img{transform:scale(1.02);}
          .rest-gallery-item::after{content:'';position:absolute;inset:0;border:2px solid transparent;transition:border-color 0.4s;pointer-events:none;}
          .rest-gallery-item:hover::after{border-color:${C.gold};}
        `}</style>
        <div className="rest-gallery-masonry">
          {GALLERY_IMAGES.map((image, i) => (
            <Reveal key={image.id} type="fade" delay={i * 0.05}>
              <div
                className="rest-gallery-item"
                onClick={() => setLightboxIdx(i)}
              >
                <img
                  src={img(image.id, 800, 80)}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 200,
              background: "rgba(0,0,0,0.95)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onClick={() => setLightboxIdx(null)}
          >
            {/* close button */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
              style={{
                position: "absolute", top: 24, right: 24, zIndex: 210,
                background: "none", border: "none", cursor: "pointer",
                color: C.cream, fontSize: 28, lineHeight: 1, padding: 8,
                opacity: 0.7, transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
              aria-label="Close lightbox"
            >
              &#x2715;
            </button>

            {/* counter */}
            <span style={{
              position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)",
              fontFamily: fontBody, fontSize: 14, letterSpacing: "0.1em",
              color: "rgba(245,230,211,0.5)", zIndex: 210,
            }}>
              {lightboxIdx + 1}/{GALLERY_IMAGES.length}
            </span>

            {/* prev arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); lbPrev(); }}
              style={{
                position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
                zIndex: 210, background: "none", border: "none", cursor: "pointer",
                color: C.cream, fontSize: 36, padding: 12,
                opacity: 0.5, transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.5"; }}
              aria-label="Previous image"
            >
              &#x2039;
            </button>

            {/* next arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); lbNext(); }}
              style={{
                position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
                zIndex: 210, background: "none", border: "none", cursor: "pointer",
                color: C.cream, fontSize: 36, padding: 12,
                opacity: 0.5, transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.5"; }}
              aria-label="Next image"
            >
              &#x203A;
            </button>

            {/* image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIdx}
                src={img(GALLERY_IMAGES[lightboxIdx].id, 1400, 90)}
                alt={GALLERY_IMAGES[lightboxIdx].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "90vw", maxHeight: "85vh",
                  objectFit: "contain", display: "block",
                }}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

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
          {/* brand */}
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

          {/* nav */}
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

          {/* hours */}
          <div>
            <h4 style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.gold, margin: "0 0 16px",
            }}>
              Hours
            </h4>
            <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.8, color: C.muted, margin: 0 }}>
              Tue &ndash; Sat: 12:00 &ndash; 23:00<br />
              Sunday Brunch: 11:00 &ndash; 15:00<br />
              Monday: Closed
            </p>
          </div>

          {/* contact */}
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

        {/* bottom bar */}
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
