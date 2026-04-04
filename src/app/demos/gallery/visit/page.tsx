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
            style={{ color: l.label === "Visit" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)" }}
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
          <p style={{ color: "rgba(255,255,255,0.2)" }}>74 Strait Street, Valletta VLT 1436</p>
          <a href="/demos/gallery/impressum" className="tracking-[0.1em] uppercase hover:text-white/40 transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}>
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

/* ─────────────────────────── INFO BLOCK ─────────────────────────── */

function InfoBlock({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="mb-10">
        <h4
          className="text-[10px] tracking-[0.25em] uppercase mb-3"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {label}
        </h4>
        <div className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          {children}
        </div>
      </div>
    </Reveal>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function VisitPage() {
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

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.15)" }}>
            Visit
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="text-[36px] font-light leading-tight"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Plan Your Visit
          </h1>
        </Reveal>
      </section>

      {/* ── Info Grid ── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left column */}
          <div>
            <InfoBlock label="Address">
              <p>Atelier Noir</p>
              <p>14 St. Paul Street</p>
              <p>Valletta VLT 1211, Malta</p>
            </InfoBlock>

            <InfoBlock label="Hours" delay={0.05}>
              <div className="space-y-1">
                <p>Tuesday &mdash; Saturday&ensp;10:00 &mdash; 18:00</p>
                <p style={{ color: "rgba(255,255,255,0.3)" }}>Thursday late opening until 21:00</p>
                <p style={{ color: "rgba(255,255,255,0.25)" }}>Sunday &amp; Monday&ensp;Closed</p>
              </div>
            </InfoBlock>

            <InfoBlock label="Admission" delay={0.1}>
              <p>Free admission</p>
              <p style={{ color: "rgba(255,255,255,0.3)" }}>Donations welcome</p>
            </InfoBlock>

            <InfoBlock label="Accessibility" delay={0.15}>
              <ul className="space-y-1">
                <li>Wheelchair accessible throughout</li>
                <li>Lift to all floors</li>
                <li>Hearing loop available</li>
                <li>Large print guides on request</li>
              </ul>
            </InfoBlock>
          </div>

          {/* Right column */}
          <div>
            <InfoBlock label="Getting Here">
              <div className="space-y-2">
                <p>
                  The gallery is located near St. John&apos;s Co-Cathedral,
                  in the heart of Valletta&apos;s historic centre.
                </p>
                <p style={{ color: "rgba(255,255,255,0.3)" }}>
                  MCP car park &mdash; 5 min walk
                </p>
                <p style={{ color: "rgba(255,255,255,0.3)" }}>
                  Valletta ferry terminal &mdash; 8 min walk
                </p>
              </div>
            </InfoBlock>

            <InfoBlock label="Guided Tours" delay={0.05}>
              <div className="space-y-1">
                <p>Free guided tour every Thursday at 18:00</p>
                <p style={{ color: "rgba(255,255,255,0.3)" }}>
                  Private tours available by appointment
                </p>
              </div>
            </InfoBlock>

            <InfoBlock label="Events & Talks" delay={0.1}>
              <div className="space-y-1">
                <p>Monthly artist talks and panel discussions</p>
                <p style={{ color: "rgba(255,255,255,0.3)" }}>
                  Subscribe to our newsletter for announcements
                </p>
              </div>
            </InfoBlock>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div
            className="w-full flex items-center justify-center"
            style={{
              height: "280px",
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-[12px] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.15)" }}>
              Map
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Contact ── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="w-full h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />
        </Reveal>
        <Reveal>
          <p
            className="text-[10px] tracking-[0.25em] uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Contact
          </p>
        </Reveal>
        <div className="space-y-2">
          <Reveal delay={0.05}>
            <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              info@ateliernoir.mt
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              +356 2124 7000
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              @ateliernoir
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
