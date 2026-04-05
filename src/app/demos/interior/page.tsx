"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

/* ─── palette ─── */
const P = {
  bg: "#F5F2ED",
  bgDark: "#EDE9E3",
  surface: "#FFFFFF",
  dark: "#1A1816",
  darkSurface: "#242220",
  text: "#1A1816",
  textBody: "#6B6560",
  textMuted: "#9E9891",
  accent: "#8B7355",
  accentLight: "#A89070",
  border: "#E2DED8",
  borderDark: "#333028",
};

const fHead = "var(--font-heading), 'Cormorant', Georgia, serif";
const fBody = "var(--font-body), 'Inter', system-ui, sans-serif";

/* ─── project data ─── */
const projects = [
  { title: "The Lake House", area: "320m²", type: "Residential", year: "2024", img: "/images/interior/project-01.jpg" },
  { title: "Alpine Retreat", area: "480m²", type: "Hospitality", year: "2023", img: "/images/interior/project-02.jpg" },
  { title: "Zürich Penthouse", area: "200m²", type: "Residential", year: "2025", img: "/images/interior/project-03.jpg" },
  { title: "Casa Pietra", area: "150m²", type: "Residential", year: "2024", img: "/images/interior/project-04.jpg" },
  { title: "Loft Noir", area: "90m²", type: "Commercial", year: "2023", img: "/images/interior/project-05.jpg" },
];

const galleryImages = [
  { src: "/images/interior/project-07.jpg", caption: "Villa Serena — Lake Como" },
  { src: "/images/interior/project-08.jpg", caption: "Maison du Lac — Annecy" },
  { src: "/images/interior/project-09.jpg", caption: "The Stone House — Vals" },
  { src: "/images/interior/project-10.jpg", caption: "Atelier Blanc — Geneva" },
  { src: "/images/interior/project-01.jpg", caption: "The Lake House — Zürich" },
  { src: "/images/interior/project-02.jpg", caption: "Alpine Retreat — Graubünden" },
];

const services = [
  { num: "01", title: "Interior Architecture", desc: "Spatial planning and structural interior modifications that redefine how you experience your home." },
  { num: "02", title: "Concept Development", desc: "Material palettes, mood boards, and design narratives that capture the essence of how you want to live." },
  { num: "03", title: "Furniture Design", desc: "Bespoke furniture pieces crafted by Swiss artisans, designed exclusively for your space." },
  { num: "04", title: "Art Curation", desc: "Curated collections sourced from emerging and established artists, placed to complete each room." },
  { num: "05", title: "Project Management", desc: "End-to-end coordination with architects, contractors, and suppliers — so you never have to." },
  { num: "06", title: "Styling & Staging", desc: "Final layer of life — textiles, objects, and greenery that make a space feel genuinely lived in." },
];

const press = ["Wallpaper*", "AD", "Elle Decoration", "Dezeen", "Frame", "Interior Design Magazine"];

const navLinks = ["Projects", "Studio", "Approach", "Contact"];

/* ─────────────────── page ─────────────────── */
export default function InteriorPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start end", "end start"] });
  const galleryX = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <div style={{ background: P.bg, color: P.text, fontFamily: fBody }}>

      {/* ═══ 1. DemoBanner ═══ */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] h-10 flex items-center justify-center px-4 text-[12px]"
        style={{ background: `${P.bg}E6`, color: P.textBody, borderBottom: `1px solid ${P.border}` }}
      >
        <a
          href="https://amenzo.co"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors"
          style={{ color: P.textMuted }}
          onMouseEnter={e => (e.currentTarget.style.color = P.text)}
          onMouseLeave={e => (e.currentTarget.style.color = P.textMuted)}
        >
          <span>Design Showcase by</span>
          <strong style={{ color: P.text }}>Amenzo</strong>
          <span>&mdash;</span>
          <span style={{ color: P.accent, fontWeight: 500 }}>Visit amenzo.co &rarr;</span>
        </a>
      </div>

      {/* ═══ 2. Nav ═══ */}
      <nav
        className="fixed top-10 left-0 right-0 z-[90] flex items-center justify-between px-6 md:px-12 py-5"
        style={{ mixBlendMode: "difference" }}
      >
        <Link href="/demos/interior" className="text-white no-underline" style={{ fontFamily: fHead }}>
          <span className="text-[18px] md:text-[22px] font-light tracking-[0.4em] uppercase">
            Studio Ēlan
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(l => (
            <Link
              key={l}
              href={`/demos/interior/${l.toLowerCase()}`}
              className="text-white no-underline text-[13px] tracking-[0.15em] uppercase font-light transition-opacity hover:opacity-60"
              style={{ fontFamily: fBody }}
            >
              {l}
            </Link>
          ))}
        </div>

        {/* Hamburger — always visible */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[110] w-10 h-10 flex flex-col items-end justify-center gap-[6px] bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          <span
            className="block h-[1px] bg-white transition-all duration-500"
            style={{
              width: menuOpen ? 28 : 28,
              transform: menuOpen ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
            }}
          />
          <span
            className="block h-[1px] bg-white transition-all duration-500"
            style={{
              width: menuOpen ? 28 : 20,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-[1px] bg-white transition-all duration-500"
            style={{
              width: 28,
              transform: menuOpen ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[95] flex flex-col items-center justify-center transition-all duration-700"
        style={{
          background: P.dark,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 30 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: menuOpen ? 0.15 + i * 0.08 : 0, duration: 0.5 }}
          >
            <Link
              href={`/demos/interior/${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-[clamp(36px,6vw,64px)] font-light no-underline mb-4 transition-opacity hover:opacity-50"
              style={{ fontFamily: fHead, color: P.bgDark, letterSpacing: "0.04em" }}
            >
              {l}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ═══ 3. Hero ═══ */}
      <section className="relative w-full overflow-hidden" style={{ height: "110vh" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/demo-interior.mp4"
        />
        {/* Dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(26,24,22,0.35) 0%, rgba(26,24,22,0.15) 30%, rgba(26,24,22,0.4) 60%, rgba(26,24,22,0.85) 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20">
          <Reveal type="fade" delay={0.3}>
            <p
              className="text-[12px] md:text-[13px] tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: fBody, color: "rgba(255,255,255,0.7)" }}
            >
              Interior Design &middot; Zürich
            </p>
          </Reveal>

          <Reveal type="slide-up" delay={0.5}>
            <h1
              className="text-[clamp(48px,8vw,120px)] leading-[0.95] font-light mb-10"
              style={{ fontFamily: fHead, color: "#FFFFFF" }}
            >
              Spaces that<br />
              <em className="font-light" style={{ fontStyle: "italic" }}>breathe.</em>
            </h1>
          </Reveal>

          <div className="flex items-end justify-between">
            <Reveal type="fade" delay={0.8}>
              <p
                className="text-[13px] md:text-[14px] font-light max-w-[320px] leading-[1.7]"
                style={{ fontFamily: fBody, color: "rgba(255,255,255,0.6)" }}
              >
                Designing timeless interiors where light, material, and proportion exist in quiet harmony.
              </p>
            </Reveal>

            <Reveal type="fade" delay={1}>
              <div className="hidden md:flex flex-col items-center gap-3">
                <span
                  className="text-[11px] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: fBody }}
                >
                  Scroll
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[1px] h-12"
                  style={{ background: "rgba(255,255,255,0.3)" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 4. Selected Projects ═══ */}
      <section className="py-24 md:py-40 px-6 md:px-12" style={{ background: P.bg }}>
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 md:mb-24">
            <h2
              className="text-[clamp(32px,4vw,56px)] font-light"
              style={{ fontFamily: fHead, color: P.text }}
            >
              Selected Projects
            </h2>
            <span
              className="text-[12px] tracking-[0.2em] uppercase hidden md:block"
              style={{ color: P.textMuted, fontFamily: fBody }}
            >
              2022 — 2025
            </span>
          </div>
        </Reveal>

        {/* Project 1 — large left */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-28">
          <Reveal className="md:col-span-8">
            <div className="overflow-hidden" data-cursor="view">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}>
                <Image
                  src={projects[0].img}
                  alt={projects[0].title}
                  width={1200}
                  height={800}
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4 flex flex-col justify-end">
            <div>
              <p className="text-[12px] tracking-[0.2em] uppercase mb-3" style={{ color: P.textMuted, fontFamily: fBody }}>
                {projects[0].type} &middot; {projects[0].year}
              </p>
              <h3 className="text-[clamp(28px,3vw,44px)] font-light mb-3" style={{ fontFamily: fHead }}>
                {projects[0].title}
              </h3>
              <p className="text-[14px] font-light" style={{ color: P.textBody, fontFamily: fBody }}>
                {projects[0].area}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Project 2 — info left, large right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-28">
          <Reveal delay={0.15} className="md:col-span-4 flex flex-col justify-end order-2 md:order-1">
            <div>
              <p className="text-[12px] tracking-[0.2em] uppercase mb-3" style={{ color: P.textMuted, fontFamily: fBody }}>
                {projects[1].type} &middot; {projects[1].year}
              </p>
              <h3 className="text-[clamp(28px,3vw,44px)] font-light mb-3" style={{ fontFamily: fHead }}>
                {projects[1].title}
              </h3>
              <p className="text-[14px] font-light" style={{ color: P.textBody, fontFamily: fBody }}>
                {projects[1].area}
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-8 order-1 md:order-2">
            <div className="overflow-hidden" data-cursor="view">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}>
                <Image
                  src={projects[1].img}
                  alt={projects[1].title}
                  width={1200}
                  height={800}
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Project 3 — full width cinematic 21:9 */}
        <Reveal className="mb-16 md:mb-28">
          <div className="overflow-hidden" data-cursor="view">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}>
              <Image
                src={projects[2].img}
                alt={projects[2].title}
                width={1600}
                height={685}
                className="w-full object-cover"
                style={{ aspectRatio: "21/9" }}
              />
            </motion.div>
          </div>
          <div className="mt-6 flex items-baseline justify-between">
            <div>
              <h3 className="text-[clamp(28px,3vw,44px)] font-light mb-2" style={{ fontFamily: fHead }}>
                {projects[2].title}
              </h3>
              <p className="text-[12px] tracking-[0.2em] uppercase" style={{ color: P.textMuted, fontFamily: fBody }}>
                {projects[2].area} &middot; {projects[2].type} &middot; {projects[2].year}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Projects 4 + 5 — side by side portrait 3:4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {[projects[3], projects[4]].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div className="overflow-hidden" data-cursor="view">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={1067}
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                  />
                </motion.div>
              </div>
              <div className="mt-5">
                <h3 className="text-[clamp(22px,2.5vw,36px)] font-light mb-2" style={{ fontFamily: fHead }}>
                  {p.title}
                </h3>
                <p className="text-[12px] tracking-[0.2em] uppercase" style={{ color: P.textMuted, fontFamily: fBody }}>
                  {p.area} &middot; {p.type} &middot; {p.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal type="fade">
          <Link
            href="/demos/interior/projects"
            className="inline-flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase font-light no-underline transition-colors"
            style={{ color: P.accent, fontFamily: fBody }}
            onMouseEnter={e => (e.currentTarget.style.color = P.text)}
            onMouseLeave={e => (e.currentTarget.style.color = P.accent)}
          >
            View all projects <span className="text-[18px]">&rarr;</span>
          </Link>
        </Reveal>
      </section>

      {/* ═══ 5. About ═══ */}
      <section className="py-24 md:py-40 px-6 md:px-12" style={{ background: P.dark }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[1400px] mx-auto">
          <Reveal>
            <div className="overflow-hidden">
              <Image
                src="/images/interior/project-06.jpg"
                alt="Isabelle Morel, founder of Studio Ēlan"
                width={700}
                height={900}
                className="w-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.15}>
              <p
                className="text-[12px] tracking-[0.3em] uppercase mb-8"
                style={{ color: P.textMuted, fontFamily: fBody }}
              >
                About the Studio
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <blockquote
                className="text-[clamp(24px,3vw,40px)] font-light leading-[1.3] mb-10"
                style={{ fontFamily: fHead, color: P.bgDark, fontStyle: "italic" }}
              >
                We design spaces that feel like home before you move in.
              </blockquote>
            </Reveal>

            <Reveal delay={0.35}>
              <p
                className="text-[15px] font-light leading-[1.8] mb-4"
                style={{ color: P.textMuted, fontFamily: fBody }}
              >
                Founded in 2013 by Isabelle Morel — formerly of Yabu Pushelberg — Studio Ēlan
                is a Zürich-based interior design practice dedicated to creating spaces of enduring
                warmth. We work with natural materials, local craftspeople, and a deep respect for
                how light moves through a room.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <p
                className="text-[15px] font-light leading-[1.8] mb-12"
                style={{ color: P.textMuted, fontFamily: fBody }}
              >
                Every project begins with listening. We believe the best interiors are not imposed
                but discovered — a collaboration between designer, space, and the people who will
                inhabit it.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { num: "80+", label: "Projects" },
                  { num: "12", label: "Years" },
                  { num: "8", label: "People" },
                  { num: "6", label: "Awards" },
                ].map(s => (
                  <div key={s.label}>
                    <p
                      className="text-[clamp(32px,3vw,48px)] font-light mb-1"
                      style={{ fontFamily: fHead, color: P.bgDark }}
                    >
                      {s.num}
                    </p>
                    <p className="text-[12px] tracking-[0.15em] uppercase" style={{ color: P.textMuted, fontFamily: fBody }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 6. Horizontal Gallery ═══ */}
      <section
        ref={galleryRef}
        className="relative py-24 md:py-40 overflow-hidden"
        style={{ background: P.bgDark }}
      >
        <Reveal>
          <p
            className="text-[12px] tracking-[0.3em] uppercase mb-12 px-6 md:px-12"
            style={{ color: P.textMuted, fontFamily: fBody }}
          >
            Selected Work
          </p>
        </Reveal>

        <motion.div
          className="flex gap-6 md:gap-8 pl-6 md:pl-12"
          style={{ x: galleryX }}
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[70vw] md:w-[40vw] lg:w-[30vw]">
              <div className="overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <p
                className="mt-4 text-[13px] font-light"
                style={{ color: P.textBody, fontFamily: fBody }}
              >
                {img.caption}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══ 7. Services ═══ */}
      <section className="py-24 md:py-40 px-6 md:px-12" style={{ background: P.bg }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <Reveal>
              <p
                className="text-[12px] tracking-[0.3em] uppercase mb-6"
                style={{ color: P.textMuted, fontFamily: fBody }}
              >
                What We Do
              </p>
              <h2
                className="text-[clamp(32px,4vw,56px)] font-light leading-[1.1]"
                style={{ fontFamily: fHead, color: P.text }}
              >
                A full spectrum of design services
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.06}>
                <div
                  className="py-8 md:py-10"
                  style={{ borderBottom: `1px solid ${P.border}` }}
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span
                      className="text-[13px] tracking-[0.1em] font-light mt-1 flex-shrink-0"
                      style={{ color: P.textMuted, fontFamily: fBody }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h3
                        className="text-[clamp(22px,2vw,32px)] font-light mb-3"
                        style={{ fontFamily: fHead, color: P.text }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-[14px] font-light leading-[1.7] max-w-[500px]"
                        style={{ color: P.textBody, fontFamily: fBody }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. Press ═══ */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: P.bgDark }}>
        <Reveal>
          <p
            className="text-center text-[12px] tracking-[0.3em] uppercase mb-12 md:mb-16"
            style={{ color: P.textMuted, fontFamily: fBody }}
          >
            As Featured In
          </p>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-16 gap-y-6">
          {press.map((p, i) => (
            <Reveal key={p} type="fade" delay={i * 0.08}>
              <span
                className="text-[clamp(18px,2.5vw,28px)] font-light tracking-[0.06em]"
                style={{ fontFamily: fHead, color: P.textBody }}
              >
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ 9. Quote ═══ */}
      <section className="py-28 md:py-44 px-6 md:px-12" style={{ background: P.bg }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Reveal>
            <blockquote
              className="text-[clamp(26px,4vw,52px)] font-light leading-[1.25] mb-8"
              style={{ fontFamily: fHead, color: P.text, fontStyle: "italic" }}
            >
              &ldquo;A room should feel like it&rsquo;s been there forever — even if it was finished yesterday.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[13px] tracking-[0.2em] uppercase" style={{ color: P.textMuted, fontFamily: fBody }}>
              — Isabelle Morel
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 10. CTA + Footer ═══ */}
      <section className="py-28 md:py-44 px-6 md:px-12" style={{ background: P.dark }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32 md:mb-44">
            <Reveal>
              <p
                className="text-[12px] tracking-[0.3em] uppercase mb-6"
                style={{ color: P.textMuted, fontFamily: fBody }}
              >
                Start a Conversation
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2
                className="text-[clamp(36px,5vw,72px)] font-light leading-[1.1] mb-12"
                style={{ fontFamily: fHead, color: P.bgDark }}
              >
                Let&rsquo;s create your<br />next space.
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/demos/interior/contact"
                className="inline-block px-12 py-5 text-[13px] tracking-[0.2em] uppercase font-light no-underline transition-all duration-500"
                style={{
                  fontFamily: fBody,
                  color: P.dark,
                  background: P.bgDark,
                  borderRadius: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = P.accent;
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = P.bgDark;
                  e.currentTarget.style.color = P.dark;
                }}
              >
                Get in Touch
              </Link>
            </Reveal>
          </div>

          {/* Footer */}
          <footer style={{ borderTop: `1px solid ${P.borderDark}`, paddingTop: 48 }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {/* Brand */}
              <div>
                <p
                  className="text-[18px] font-light tracking-[0.3em] uppercase mb-4"
                  style={{ fontFamily: fHead, color: P.bgDark }}
                >
                  Studio Ēlan
                </p>
                <p className="text-[13px] font-light leading-[1.7]" style={{ color: P.textMuted, fontFamily: fBody }}>
                  Interior design studio based in Zürich, Switzerland. Creating spaces of enduring warmth since 2013.
                </p>
              </div>

              {/* Navigate */}
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase mb-6" style={{ color: P.textMuted, fontFamily: fBody }}>
                  Navigate
                </p>
                <div className="flex flex-col gap-3">
                  {["Projects", "Studio", "Approach", "Journal", "Contact"].map(l => (
                    <Link
                      key={l}
                      href={`/demos/interior/${l.toLowerCase()}`}
                      className="text-[14px] font-light no-underline transition-opacity hover:opacity-60"
                      style={{ color: P.bgDark, fontFamily: fBody }}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase mb-6" style={{ color: P.textMuted, fontFamily: fBody }}>
                  Contact
                </p>
                <div className="flex flex-col gap-3 text-[14px] font-light" style={{ color: P.bgDark, fontFamily: fBody }}>
                  <span>Bahnhofstrasse 42</span>
                  <span>8001 Zürich, Switzerland</span>
                  <a href="mailto:hello@studioelan.ch" className="no-underline transition-opacity hover:opacity-60" style={{ color: P.bgDark }}>
                    hello@studioelan.ch
                  </a>
                  <span>+41 44 123 45 67</span>
                </div>
              </div>

              {/* Follow */}
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase mb-6" style={{ color: P.textMuted, fontFamily: fBody }}>
                  Follow
                </p>
                <div className="flex flex-col gap-3">
                  {["Instagram", "Pinterest", "LinkedIn", "Behance"].map(l => (
                    <a
                      key={l}
                      href="#"
                      className="text-[14px] font-light no-underline transition-opacity hover:opacity-60"
                      style={{ color: P.bgDark, fontFamily: fBody }}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ borderTop: `1px solid ${P.borderDark}` }}
            >
              <p className="text-[12px] font-light" style={{ color: P.textMuted, fontFamily: fBody }}>
                &copy; 2025 Studio Ēlan. All rights reserved.
              </p>
              <div className="flex gap-8">
                <Link
                  href="/demos/interior/impressum"
                  className="text-[12px] font-light no-underline transition-opacity hover:opacity-60"
                  style={{ color: P.textMuted, fontFamily: fBody }}
                >
                  Impressum
                </Link>
                <a
                  href="#"
                  className="text-[12px] font-light no-underline transition-opacity hover:opacity-60"
                  style={{ color: P.textMuted, fontFamily: fBody }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
