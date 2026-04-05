"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { DemoBanner } from "@/components/demos/demo-banner";
import { VideoHeroBg } from "@/components/video-hero-bg";

/* ─────────────────────────── DATA ─────────────────────────── */

const SELECTED_WORKS = [
  {
    id: 1,
    title: "Untitled No. 7",
    medium: "Oil on linen",
    year: "2024",
    src: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
  },
  {
    id: 2,
    title: "Harbour Study III",
    medium: "Acrylic and gold leaf on canvas",
    year: "2025",
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
  },
  {
    id: 3,
    title: "Erosion (Triptych, Panel I)",
    medium: "Mixed media on board",
    year: "2023",
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
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
      <nav
        className="fixed left-0 right-0 z-50 px-6 md:px-12"
        style={{
          top: 40,
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
          <Link
            href="/demos/gallery"
            className="text-[11px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Atelier Noir
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/60"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
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
                { label: "Exhibition", href: "/demos/gallery/exhibition" },
                { label: "Collection", href: "/demos/gallery/collection" },
                { label: "Visit", href: "#visit" },
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

/* ─────────────────────────── 1. HERO ─────────────────────────── */

function Hero() {
  const [revealed, setRevealed] = useState(false);
  const [noirBright, setNoirBright] = useState(false);

  useEffect(() => {
    setRevealed(true);
    const atelierDuration = "ATELIER".length * 40 + 200;
    const t = setTimeout(() => setNoirBright(true), atelierDuration);
    return () => clearTimeout(t);
  }, []);

  const staggerLetters = (text: string, baseDelay: number) =>
    text.split("").map((ch, i) => (
      <motion.span
        key={`${text}-${i}`}
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ duration: 0.08, delay: baseDelay + i * 0.04 }}
        className="inline-block"
      >
        {ch === " " ? "\u00A0" : ch}
      </motion.span>
    ));

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <VideoHeroBg src="/videos/demo-gallery.mp4" gradient="linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.95) 95%)" startOpacity={0.65} />
      <div className="relative z-10 text-center">
        <h1
          className="text-[80px] font-light tracking-[0.15em] uppercase leading-none"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          {staggerLetters("ATELIER", 0)}
        </h1>
        <h1
          className="text-[80px] font-light tracking-[0.15em] uppercase leading-none transition-colors"
          style={{
            color: noirBright
              ? "rgba(255,255,255,0.6)"
              : "rgba(255,255,255,0.05)",
            transitionDuration: "3000ms",
          }}
        >
          {staggerLetters("NOIR", "ATELIER".length * 0.04 + 0.1)}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={revealed ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-8 text-[11px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Contemporary Art Gallery &middot; Valletta
        </motion.p>
      </div>

      {/* Scroll indicator — thin pulsing line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-white/30" />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────── 2. CURRENT EXHIBITION ─────────────────────────── */

function CurrentExhibition() {
  return (
    <section className="bg-[#0A0A0A] pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <Reveal>
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-8"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Current Exhibition
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="text-[40px] font-light italic leading-tight"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Between Light &amp; Shadow
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="mt-4 text-[14px]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Mara Delacroix
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            className="mt-2 text-[14px]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            15 Mar &mdash; 30 May 2026
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&q=85"
            alt="Between Light and Shadow — exhibition view"
            className="w-full h-[70vh] object-cover"
            style={{ display: "block" }}
          />
        </div>
      </Reveal>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <Reveal delay={0.1}>
          <p
            className="text-[14px] leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            A body of work spanning fifteen years, tracing Delacroix&apos;s
            journey from gestural abstraction to the luminous, layered
            canvases that have become her signature. The exhibition brings
            together forty-two works that examine the interplay between
            presence and absence, light and its negation.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href="/demos/gallery/exhibition"
            className="inline-block mt-8 text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/50"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Enter Exhibition &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── 3. SELECTED WORKS ─────────────────────────── */

function SelectedWorks() {
  const [selected, setSelected] = useState<(typeof SELECTED_WORKS)[number] | null>(null);

  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {SELECTED_WORKS.map((work, i) => (
              <Reveal key={work.id} delay={i * 0.08}>
                <button
                  onClick={() => setSelected(work)}
                  className="block w-full relative group focus:outline-none"
                >
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full aspect-[4/5] object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 border border-transparent group-hover:border-white/10 transition-colors duration-300 pointer-events-none" />
                  <div className="mt-3 text-left">
                    <p
                      className="text-[11px] tracking-[0.05em]"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    >
                      {work.title}
                    </p>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    >
                      {work.medium}, {work.year}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
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
              className="max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src.replace("w=800", "w=1200")}
                alt={selected.title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <div className="mt-6 text-center">
                <p
                  className="text-[14px] font-light italic"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {selected.title}
                </p>
                <p
                  className="text-[11px] mt-2"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {selected.medium}, {selected.year}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-8 text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/40"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────── 4. ARTIST PREVIEW ─────────────────────────── */

function ArtistPreview() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Left 40%: studio image */}
          <Reveal className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&fit=crop&crop=face"
              alt="Mara Delacroix in her studio"
              className="w-full object-cover aspect-[3/4]"
            />
          </Reveal>

          {/* Right 60%: bio */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <Reveal>
              <h3
                className="text-[28px] font-light mb-6"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Mara Delacroix
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p
                className="text-[14px] leading-relaxed mb-5"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Mara Delacroix&apos;s painting practice negotiates the tension
                between figuration and abstraction, drawing on the
                Mediterranean light that floods her Valletta studio. Working
                primarily in oil on linen, she builds surfaces through dozens
                of translucent layers, creating depth that shifts with the
                viewer&apos;s position and the time of day.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <Link
                href="/demos/gallery/exhibition"
                className="text-[12px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/50"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Read Full Bio &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 5. NEWSLETTER ─────────────────────────── */

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="visit" className="bg-[#0A0A0A] py-28">
      <div className="max-w-lg mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <h3
            className="text-[20px] font-light mb-10"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Stay in the loop.
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 bg-transparent text-[14px] py-2 placeholder:text-white/15 focus:outline-none"
              style={{
                color: "rgba(255,255,255,0.5)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <button
              type="submit"
              className="text-[11px] tracking-[0.15em] uppercase pb-2 transition-colors duration-300 hover:text-white/50 shrink-0"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Subscribe
            </button>
          </form>
        </Reveal>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-6 text-[12px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Thank you.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
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

export default function GalleryPage() {
  return (
    <main className="bg-[#0A0A0A] text-white pt-10 min-h-screen">
      <DemoBanner />
      <Nav />
      <Hero />
      <CurrentExhibition />
      <SelectedWorks />
      <ArtistPreview />
      <Newsletter />
      <Footer />
    </main>
  );
}
