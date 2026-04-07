"use client";

import { useState, useRef, ReactNode } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─────────────────────────── DATA ─────────────────────────── */

const ARTWORKS = [
  {
    id: 1,
    title: "Untitled No. 7",
    medium: "Oil on linen",
    dimensions: "120 \u00d7 180 cm",
    year: "2024",
    price: "\u20ac14,000",
    src: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
    aspect: "4/5",
  },
  {
    id: 2,
    title: "Harbour Study III",
    medium: "Acrylic and gold leaf on canvas",
    dimensions: "90 \u00d7 120 cm",
    year: "2025",
    price: "\u20ac9,500",
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    aspect: "3/4",
  },
  {
    id: 3,
    title: "Erosion (Triptych, Panel I)",
    medium: "Mixed media on board",
    dimensions: "60 \u00d7 90 cm",
    year: "2023",
    price: "\u20ac7,200",
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    aspect: "5/7",
  },
  {
    id: 4,
    title: "Limestone Memory",
    medium: "Oil and pigment on raw canvas",
    dimensions: "150 \u00d7 200 cm",
    year: "2025",
    price: "\u20ac18,000",
    src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    aspect: "4/3",
  },
  {
    id: 5,
    title: "Threshold",
    medium: "Charcoal and gesso on paper",
    dimensions: "70 \u00d7 100 cm",
    year: "2024",
    price: "\u20ac5,800",
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
    aspect: "3/4",
  },
  {
    id: 6,
    title: "Nocturne for Valletta",
    medium: "Oil on linen",
    dimensions: "100 \u00d7 140 cm",
    year: "2026",
    price: "\u20ac12,500",
    src: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?w=800&q=80",
    aspect: "5/6",
  },
  {
    id: 7,
    title: "Still Life with Absence",
    medium: "Acrylic and ink on panel",
    dimensions: "80 \u00d7 80 cm",
    year: "2023",
    price: "\u20ac6,400",
    src: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&q=80",
    aspect: "1/1",
  },
  {
    id: 8,
    title: "Blue Hour, Grand Harbour",
    medium: "Oil on canvas",
    dimensions: "110 \u00d7 160 cm",
    year: "2025",
    price: "\u20ac15,000",
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    aspect: "4/5",
  },
  {
    id: 9,
    title: "Fragments (After Twombly)",
    medium: "Graphite and oil stick on canvas",
    dimensions: "130 \u00d7 170 cm",
    year: "2024",
    price: "\u20ac11,000",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    aspect: "3/4",
  },
];

/* ─────────────────────────── REVEAL ─────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-10 left-0 right-0 z-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
          <Link
            href="/demos/gallery"
            className="text-[11px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Atelier Noir
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/demos/gallery/exhibition"
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Exhibition
            </Link>
            <Link
              href="/demos/gallery/collection"
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/60"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Collection
            </Link>
            <a
              href="#enquire"
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/60"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Visit
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/60"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Menu
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-14 right-6 md:right-12 text-[11px] tracking-[0.15em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Close
            </button>
            <div className="flex flex-col items-center gap-8">
              {[
                { label: "Home", href: "/demos/gallery" },
                { label: "Exhibition", href: "/demos/gallery/exhibition" },
                { label: "Collection", href: "/demos/gallery/collection" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[28px] font-light tracking-[0.1em] uppercase transition-colors duration-300 hover:text-white/60"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p
              className="absolute bottom-10 text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              74 Strait Street, Valletta
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p
            className="tracking-[0.2em] uppercase font-light"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Atelier Noir
          </p>
          <p style={{ color: "rgba(255,255,255,0.15)" }}>
            74 Strait Street, Valletta VLT 1436
          </p>
          <a
            href="#"
            className="tracking-[0.1em] uppercase transition-colors duration-300 hover:text-white/30"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Instagram
          </a>
        </div>
        <p
          className="text-center mt-6 text-[10px]"
          style={{ color: "rgba(255,255,255,0.12)" }}
        >
          &copy; 2026 Atelier Noir
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function ExhibitionPage() {
  const [selected, setSelected] = useState<(typeof ARTWORKS)[number] | null>(
    null
  );

  /* Split into 3 columns for masonry */
  const cols: (typeof ARTWORKS)[] = [[], [], []];
  ARTWORKS.forEach((a, i) => cols[i % 3].push(a));

  return (
    <main className="bg-[#0A0A0A] text-white pt-10 min-h-screen">
      <DemoBanner />
      <Nav />

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h1
              className="text-[48px] font-light italic leading-tight"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Between Light &amp; Shadow
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              className="mt-4 text-[14px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Mara Delacroix
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className="mt-2 text-[14px]"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              15 Mar &mdash; 30 May 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Curatorial text ── */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <Reveal>
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              This exhibition traces the arc of Mara Delacroix&apos;s practice
              over fifteen years, from the raw gestural mark-making of her
              early career to the luminous, meditative canvases that have
              earned her international recognition. Each work is a study in
              restraint and accumulation, built through dozens of translucent
              layers that shift in the changing light of the gallery.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              The title, Between Light and Shadow, speaks to the central
              tension in Delacroix&apos;s work: the threshold where form
              dissolves into atmosphere, where the material insistence of paint
              yields to something closer to breath. Her palette is deliberately
              narrow, drawn from the limestone and sea-light of her adopted
              home in Valletta.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[14px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Forty-two works are presented across three interconnected
              galleries, arranged not chronologically but by resonance.
              Paintings from 2012 hang alongside works completed this year,
              revealing continuities and departures that a linear reading would
              obscure. The viewer is invited to move slowly, to return, to
              notice how meaning accumulates through adjacency.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Masonry grid ── */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px]">
            {cols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[3px]">
                {col.map((art, ai) => (
                  <Reveal key={art.id} delay={ai * 0.06}>
                    <button
                      onClick={() => setSelected(art)}
                      className="block w-full relative group focus:outline-none"
                    >
                      <img
                        src={art.src}
                        alt={art.title}
                        className="w-full object-cover transition-all duration-500"
                        style={{ aspectRatio: art.aspect }}
                      />
                      <div className="absolute inset-0 border border-transparent group-hover:border-white/10 transition-colors duration-300 pointer-events-none" />
                    </button>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquire ── */}
      <section id="enquire" className="pb-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <p
              className="text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Enquire
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p
              className="text-[14px]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Contact{" "}
              <a
                href="mailto:hello@ateliernoir.mt"
                className="transition-colors duration-300 hover:text-white/50"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                hello@ateliernoir.mt
              </a>{" "}
              for availability.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src.replace("w=800", "w=1200")}
                alt={selected.title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <div className="text-left shrink-0 max-w-xs">
                <h3
                  className="text-[22px] font-light italic mb-4"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {selected.title}
                </h3>
                <p
                  className="text-[12px]"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {selected.medium}
                </p>
                <p
                  className="text-[12px] mt-1"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {selected.dimensions}
                </p>
                <p
                  className="text-[12px] mt-1"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {selected.year}
                </p>
                <p
                  className="text-[14px] mt-4 font-light"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {selected.price}
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-8 text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/40"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
