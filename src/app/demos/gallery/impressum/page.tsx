"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";

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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */

function Nav() {
  return (
    <nav
      className="fixed top-10 left-0 right-0 z-50 h-12 flex items-center justify-between px-6 md:px-12"
      style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <a
        href="/demos/gallery"
        className="text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        Atelier Noir
      </a>
      <div className="flex gap-6">
        {[
          { label: "Works", href: "/demos/gallery" },
          { label: "Artist", href: "/demos/gallery/artist" },
          { label: "Upcoming", href: "/demos/gallery/upcoming" },
          { label: "Visit", href: "/demos/gallery/visit" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[11px] tracking-[0.15em] uppercase transition-colors hover:text-white/60"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t py-12" style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[13px]">
          <a href="/demos/gallery" className="tracking-[0.15em] uppercase font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            Atelier Noir
          </a>
          <p style={{ color: "rgba(255,255,255,0.2)" }}>14 St. Paul Street, Valletta VLT 1211</p>
          <a href="/demos/gallery/impressum" className="tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
            Impressum
          </a>
        </div>
        <p className="text-center mt-8 text-[12px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          &copy; 2026 Atelier Noir
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function ImpressumPage() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen pt-10">
      <DemoBanner />
      <Nav />

      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Content ── */}
      <section className="pt-32 pb-24 md:pb-32 px-6 md:px-12 max-w-2xl mx-auto">
        <Reveal>
          <h1
            className="text-[28px] font-light leading-tight mb-12"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Impressum
          </h1>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <div className="space-y-1 text-[13px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              <p style={{ color: "rgba(255,255,255,0.4)" }}>Atelier Noir</p>
              <p>14 St. Paul Street</p>
              <p>Valletta VLT 1211, Malta</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-1 text-[13px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              <p>info@ateliernoir.mt</p>
              <p>+356 2124 7000</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              Operated by Atelier Noir Ltd.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.2)" }}>
              This website is a design demonstration created by Amenzo. All
              artworks, exhibitions, artist biographies, and gallery details
              presented on this site are entirely fictional and used for
              illustrative purposes only. No real gallery, artist, or
              institution is represented.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
