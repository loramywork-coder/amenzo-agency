"use client";

import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─────────────────────────── NAV ─────────────────────────── */

function Nav() {
  return (
    <nav className="absolute top-10 left-0 right-0 z-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
        <Link
          href="/demos/gallery"
          className="text-[11px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Atelier Noir
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Exhibition", href: "/demos/gallery/exhibition" },
            { label: "Collection", href: "/demos/gallery/collection" },
            { label: "About", href: "/demos/gallery/about" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/60"
              style={{
                color:
                  l.label === "About"
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(255,255,255,0.3)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ background: "#0A0A0A", borderColor: "rgba(255,255,255,0.05)" }}
    >
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

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] text-white pt-10 min-h-screen">
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
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <h1
            className="text-[48px] md:text-[64px] font-light leading-none"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            About
          </h1>
        </Reveal>
      </section>

      {/* ── Story: 2-column ── */}
      <section className="pb-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Text */}
          <div>
            <Reveal>
              <p
                className="text-[9px] tracking-[0.3em] uppercase mb-6"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                The Gallery
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p
                className="text-[15px] font-light leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Founded in 2019, Atelier Noir is a contemporary art gallery
                located in the heart of Valletta, Malta. The gallery is focused
                on emerging and mid-career artists working across painting,
                sculpture, photography, and installation.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                className="text-[15px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Our programme is built on the belief that meaningful art
                requires sustained attention. Each exhibition is developed
                through close collaboration with artists, often over the course
                of a year or more, resulting in presentations that are both
                rigorous and intimate.
              </p>
            </Reveal>
          </div>

          {/* Placeholder image */}
          <Reveal delay={0.1}>
            <div
              className="w-full aspect-[3/4]"
              style={{
                background:
                  "linear-gradient(180deg, #151515 0%, #0C0C0C 100%)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="pb-28 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div
            className="w-full h-px mb-16"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </Reveal>
        <Reveal>
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-12"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            Values
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {[
            {
              title: "Emerging Talent",
              text: "We champion artists at pivotal moments in their careers, providing a platform for new voices and experimental practices.",
            },
            {
              title: "Critical Dialogue",
              text: "Through talks, publications, and residencies, we foster conversation between artists, writers, and the public.",
            },
            {
              title: "Accessibility",
              text: "Free admission, open archives, and community programming ensure that contemporary art remains open to all.",
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div>
                <h3
                  className="text-[14px] font-medium mb-4"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-[13px] font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="pb-28 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div
            className="w-full h-px mb-16"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </Reveal>
        <Reveal>
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-12"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            Team
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
          {[
            { name: "Anna Borg", role: "Director" },
            { name: "Luca Fenech", role: "Curator" },
          ].map((person, i) => (
            <Reveal key={person.name} delay={i * 0.08}>
              <div>
                <p
                  className="text-[16px] font-light mb-1"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {person.name}
                </p>
                <p
                  className="text-[12px] tracking-[0.1em] uppercase"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {person.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Visit Info ── */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div
            className="w-full h-px mb-16"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </Reveal>
        <Reveal>
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-10"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            Visit
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Reveal delay={0.04}>
            <div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Address
              </p>
              <div
                className="text-[14px] leading-relaxed space-y-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <p>14 St. Paul Street</p>
                <p>Valletta VLT 1211</p>
                <p>Malta</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Hours
              </p>
              <div
                className="text-[14px] leading-relaxed space-y-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <p>Tue &mdash; Sat, 10:00 &mdash; 18:00</p>
                <p style={{ color: "rgba(255,255,255,0.25)" }}>
                  Thu late opening until 21:00
                </p>
                <p style={{ color: "rgba(255,255,255,0.2)" }}>
                  Sun &amp; Mon closed
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Contact
              </p>
              <div
                className="text-[14px] leading-relaxed space-y-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <p>info@ateliernoir.mt</p>
                <p>+356 2124 7000</p>
                <p style={{ color: "rgba(255,255,255,0.25)" }}>@ateliernoir</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
