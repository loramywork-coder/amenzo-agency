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

/* ─────────────────────────── DATA ─────────────────────────── */

const SOLO = [
  { year: "2026", title: "Between Light & Shadow", venue: "Atelier Noir, Valletta" },
  { year: "2024", title: "Threshold", venue: "Palais de Tokyo, Paris" },
  { year: "2023", title: "Limestone Memory", venue: "Kunsthalle Basel" },
  { year: "2022", title: "Harbour Nocturnes", venue: "MUDAM, Luxembourg" },
  { year: "2020", title: "Erosion", venue: "Fondation Cartier, Paris" },
  { year: "2018", title: "Still Life with Absence", venue: "MAXXI, Rome" },
];

const GROUP = [
  { year: "2025", title: "Venice Biennale", venue: "Arsenale, Venice" },
  { year: "2024", title: "New Mediterranean", venue: "Centre Pompidou, Paris" },
  { year: "2023", title: "Material Dialogues", venue: "Tate Modern, London" },
  { year: "2022", title: "After the Garden", venue: "Fondazione Prada, Milan" },
  { year: "2021", title: "Islands", venue: "Documenta, Kassel" },
  { year: "2020", title: "Surface Tension", venue: "MoMA PS1, New York" },
  { year: "2019", title: "Colour Field Redux", venue: "Whitechapel Gallery, London" },
  { year: "2017", title: "Beyond Figuration", venue: "Museo Reina Sofia, Madrid" },
];

const COLLECTIONS = [
  "Fondation Cartier pour l'Art Contemporain, Paris",
  "MUDAM \u2014 Mus\u00e9e d'Art Moderne Grand-Duc Jean, Luxembourg",
  "Centre Pompidou, Paris",
  "MAXXI \u2014 Museo nazionale delle arti del XXI secolo, Rome",
];

const RESIDENCIES = [
  { year: "2021", place: "K\u00fcnstlerhaus Bethanien, Berlin" },
  { year: "2019", place: "Le 18, Marrakech" },
  { year: "2017", place: "Residencia Art\u00edstica, S\u00e3o Paulo" },
];

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
            style={{ color: l.label === "Artist" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)" }}
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

/* ─────────────────────────── CV LIST ─────────────────────────── */

function CvSection({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: { year?: string; text: string }[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="mb-12">
        <h4
          className="text-[10px] tracking-[0.25em] uppercase mb-4"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {title}
        </h4>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
              {item.year && <span style={{ color: "rgba(255,255,255,0.15)" }}>{item.year}&ensp;</span>}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function ArtistPage() {
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
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <h1
            className="text-[48px] font-light leading-none"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Mara Delacroix
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-[13px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            b. 1987, Marseille. Lives and works in Valletta.
          </p>
        </Reveal>
      </section>

      {/* ── Studio image ── */}
      <Reveal>
        <div className="w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&q=85"
            alt="Studio view"
            className="w-full object-cover"
            style={{
              height: "50vh",
              filter: "grayscale(30%) contrast(1.1)",
            }}
          />
        </div>
      </Reveal>

      {/* ── Bio ── */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">

          {/* Early Life */}
          <Reveal>
            <h3
              className="text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Early Life
            </h3>
          </Reveal>
          <Reveal delay={0.05}>
            <p
              className="text-[15px] leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Born in Marseille in 1987, Mara Delacroix grew up surrounded by the
              Mediterranean coastline that would come to define her visual
              language. She studied at the \u00c9cole des Beaux-Arts de Marseille before
              moving to Paris at twenty to complete her studies at the \u00c9cole
              Nationale Sup\u00e9rieure des Beaux-Arts. It was during these formative
              years that she developed her distinctive approach to layered
              surfaces, building paintings through dozens of translucent glazes
              that capture and refract ambient light.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote
              className="text-[20px] italic leading-relaxed mb-12 pl-6"
              style={{
                color: "rgba(255,255,255,0.5)",
                borderLeft: "2px solid rgba(255,255,255,0.1)",
              }}
            >
              I paint what I cannot say.
            </blockquote>
          </Reveal>

          {/* Career */}
          <Reveal delay={0.05}>
            <h3
              className="text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Career
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[15px] leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Delacroix&apos;s career gained international momentum following a
              residency at K&uuml;nstlerhaus Bethanien in Berlin, where she
              produced the <em>Erosion</em> series that would later be acquired
              by the Fondation Cartier. Subsequent residencies in Marrakech and
              S&atilde;o Paulo expanded her material vocabulary, introducing
              found pigments and local earth into her practice. These
              experiences deepened her engagement with place, resulting in
              bodies of work that carry the geological memory of each site.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="text-[15px] leading-relaxed mb-12"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Solo exhibitions at the Palais de Tokyo, Kunsthalle Basel, and
              the Venice Biennale established her as one of the most compelling
              painters of her generation. Her work is held in the permanent
              collections of the Fondation Cartier, MUDAM Luxembourg, Centre
              Pompidou, and MAXXI Rome. In 2025 she was awarded the Prix Marcel
              Duchamp for her sustained investigation into the archaeology of
              colour.
            </p>
          </Reveal>

          {/* Current */}
          <Reveal delay={0.05}>
            <h3
              className="text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Current
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[15px] leading-relaxed mb-16"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Delacroix currently works from a converted warehouse studio
              overlooking the Grand Harbour in Valletta, Malta. She produces
              eight to twelve major works per year, primarily in oil on linen,
              though her recent practice increasingly incorporates found
              materials&mdash;fragments of Maltese limestone, salvaged maritime
              rope, and oxidized copper&mdash;embedded directly into the paint
              surface. She is represented by Atelier Noir.
            </p>
          </Reveal>
        </div>

        {/* ── CV ── */}
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="w-full h-px mb-16" style={{ background: "rgba(255,255,255,0.06)" }} />
          </Reveal>

          <CvSection
            title="Solo Exhibitions"
            items={SOLO.map((s) => ({ year: s.year, text: `${s.title} \u2014 ${s.venue}` }))}
            delay={0}
          />

          <CvSection
            title="Group Exhibitions"
            items={GROUP.map((g) => ({ year: g.year, text: `${g.title} \u2014 ${g.venue}` }))}
            delay={0.05}
          />

          <CvSection
            title="Collections"
            items={COLLECTIONS.map((c) => ({ text: c }))}
            delay={0.1}
          />

          <CvSection
            title="Residencies"
            items={RESIDENCIES.map((r) => ({ year: r.year, text: r.place }))}
            delay={0.15}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
