"use client";

import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─────────────────────────── DATA ─────────────────────────── */

const EDITIONS = [
  {
    title: "Harbour Study III",
    medium: "Giclée print",
    edition: "Ed. of 25",
    price: "\u20ac480",
  },
  {
    title: "Erosion I",
    medium: "Archival pigment",
    edition: null,
    price: "\u20ac320",
  },
  {
    title: "Nocturne",
    medium: "Screenprint",
    edition: "Ed. of 15",
    price: "\u20ac650",
  },
  {
    title: "Untitled No. 12",
    medium: "C-type print",
    edition: null,
    price: "\u20ac280",
  },
];

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
            { label: "Collection", href: "/demos/gallery/collection" },
            { label: "Shop", href: "/demos/gallery/shop" },
            { label: "Visit", href: "/demos/gallery/visit" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white/60"
              style={{
                color:
                  l.label === "Shop"
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

export default function ShopPage() {
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
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            Shop
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="text-[48px] md:text-[64px] font-light leading-none"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Editions &amp; Prints
          </h1>
        </Reveal>
      </section>

      {/* ── Product Grid ── */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {EDITIONS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div>
                {/* Placeholder image area */}
                <div
                  className="w-full aspect-[4/5] mb-6"
                  style={{
                    background:
                      "linear-gradient(160deg, #141414 0%, #0E0E0E 50%, #181818 100%)",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                />

                <h3
                  className="text-[16px] font-light italic mb-2"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[12px] mb-1"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {item.medium}
                  {item.edition && (
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>
                      {" "}&mdash; {item.edition}
                    </span>
                  )}
                </p>
                <p
                  className="text-[14px] font-light mt-3 mb-5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {item.price}
                </p>
                <button
                  className="text-[11px] tracking-[0.15em] uppercase py-2 px-6 transition-colors duration-300 hover:text-white/60"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "transparent",
                  }}
                >
                  Enquire
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Note ── */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div
            className="w-full h-px mb-12"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </Reveal>
        <Reveal delay={0.05}>
          <p
            className="text-[12px] leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            All prints are signed, numbered, and shipped with a certificate of
            authenticity. For international shipping enquiries, please contact
            the gallery directly.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
