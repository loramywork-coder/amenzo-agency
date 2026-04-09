"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import Reveal from "@/components/demos/Reveal";

/* ------------------------------------------------------------------ */
/*  PALETTE                                                           */
/* ------------------------------------------------------------------ */
const BG      = "#080808";
const SURFACE = "#111111";
const GREEN   = "#22C55E";
const WHITE   = "#FFFFFF";
const MUTED   = "#71717A";
const BORDER  = "#27272A";

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { label: "Classes",    href: "/demos/fitness/classes" },
  { label: "Trainers",   href: "/demos/fitness/trainers" },
  { label: "Pricing",    href: "/demos/fitness/pricing" },
  { label: "Blog",       href: "/demos/fitness/blog" },
  { label: "Gallery",    href: "/demos/fitness/gallery" },
];

interface Article {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const ARTICLES: Article[] = [
  {
    title: "5 Mistakes Killing Your Gains",
    category: "Training",
    excerpt:
      "You're putting in the hours but the results aren't showing. These common training errors could be sabotaging your progress without you even knowing it.",
    date: "Mar 28, 2026",
    readTime: "6 min read",
    image: "/images/fitness/blog-1.jpg",
  },
  {
    title: "Meal Prep for Busy Professionals",
    category: "Nutrition",
    excerpt:
      "No time to cook? No excuse. Master the art of weekly meal prep with these dead-simple strategies that take under two hours every Sunday.",
    date: "Mar 21, 2026",
    readTime: "8 min read",
    image: "/images/fitness/blog-2.jpg",
  },
  {
    title: "Why Rest Days Matter More Than You Think",
    category: "Recovery",
    excerpt:
      "Overtraining is real and it's destroying your results. The science behind strategic rest and how elite athletes use recovery to get stronger.",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    image: "/images/fitness/blog-3.jpg",
  },
  {
    title: "HIIT vs Steady State: The Final Answer",
    category: "Cardio",
    excerpt:
      "The debate ends here. We break down the research on both training styles so you can pick the right approach for your specific goals.",
    date: "Mar 7, 2026",
    readTime: "7 min read",
    image: "/images/fitness/blog-4.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  INLINE NAV (absolute)                                             */
/* ------------------------------------------------------------------ */
function FitNav() {
  return (
    <nav
      className="absolute top-10 left-0 right-0 z-50"
      style={{ background: "transparent" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/demos/fitness"
          className="flex items-center gap-0 text-xl font-bold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
        >
          <span style={{ color: WHITE }}>FIT</span>
          <span style={{ color: GREEN }}>ZONE</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] uppercase tracking-wider transition-colors hover:text-white"
              style={{ color: MUTED, letterSpacing: "0.08em" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/demos/fitness#cta"
          className="hidden rounded-full px-6 py-2.5 text-[13px] font-medium uppercase tracking-wider transition-all hover:brightness-110 md:inline-block"
          style={{ background: GREEN, color: "#000" }}
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function BlogPage() {
  return (
    <main style={{ background: BG, color: WHITE, fontFamily: "var(--font-gym-display), Inter, system-ui, sans-serif" }}>
      <DemoBanner />
      <FitNav />

      {/* ════════════ HERO ════════════ */}
      <section className="px-6 pb-16 pt-36 md:px-12 lg:px-20" style={{ background: BG }}>
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase"
              style={{ color: GREEN, letterSpacing: "0.35em" }}
            >
              FITZONE JOURNAL
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-[52px] font-black uppercase tracking-tight md:text-[72px]"
              style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
            >
              INSI<span style={{ color: GREEN }}>GHTS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed"
              style={{ color: MUTED }}
            >
              Training tips, nutrition science, and recovery strategies from our
              coaches. Knowledge is the ultimate performance enhancer.
            </motion.p>
          </div>
        </Reveal>
      </section>

      {/* Hero Banner */}
      <section style={{ padding: "0 24px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "21 / 9", overflow: "hidden", border: "2px solid #22C55E" }}>
          <Image src="/images/fitness/blog-hero.jpg" alt="" fill priority className="object-cover" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 40%, rgba(8,8,8,0.8) 100%)" }} />
        </div>
      </section>


      {/* ════════════ ARTICLE GRID ════════════ */}
      <section className="px-6 pb-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.1}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 * i }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(17,17,17,0.9) 0%, transparent 60%)",
                    }}
                  />
                  {/* Category pill */}
                  <div className="absolute bottom-4 left-5">
                    <span
                      className="rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest"
                      style={{ background: "rgba(34,197,94,0.15)", color: GREEN, border: `1px solid rgba(34,197,94,0.3)` }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider" style={{ color: MUTED }}>
                    <span>{article.date}</span>
                    <span style={{ color: BORDER }}>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3
                    className="mt-3 text-[20px] font-black uppercase leading-tight tracking-tight md:text-[22px]"
                    style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
                  >
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[13px] leading-relaxed" style={{ color: MUTED }}>
                    {article.excerpt}
                  </p>

                  <div className="mt-6">
                    <span
                      className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider transition-colors group-hover:brightness-110"
                      style={{ color: GREEN }}
                    >
                      Read More
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════ NEWSLETTER CTA ════════════ */}
      <section className="px-6 pb-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <Reveal>
          <div
            className="mx-auto max-w-4xl rounded-2xl p-10 text-center md:p-14"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(34,197,94,0.06) 0%, transparent 50%)`,
            }}
          >
            <h3
              className="text-[28px] font-black uppercase tracking-tight md:text-[36px]"
              style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
            >
              STAY IN THE <span style={{ color: GREEN }}>GAME</span>
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed" style={{ color: MUTED }}>
              Get weekly training insights, nutrition hacks, and exclusive member
              content delivered straight to your inbox.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-5 py-3.5 text-[13px] outline-none placeholder:text-zinc-600"
                style={{
                  background: BG,
                  color: WHITE,
                  border: `1px solid ${BORDER}`,
                }}
              />
              <button
                className="rounded-full px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest transition-all hover:brightness-110"
                style={{ background: GREEN, color: "#000" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ background: "#000000", borderTop: `1px solid ${BORDER}` }} className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-0 text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
                <span style={{ color: WHITE }}>FIT</span>
                <span style={{ color: GREEN }}>ZONE</span>
              </div>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed" style={{ color: MUTED }}>
                Premium fitness facility. Transforming bodies and lives since 2018.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: WHITE }}>LOCATION</h4>
              <div className="mt-4 space-y-2 text-[13px]" style={{ color: MUTED }}>
                <p>23 Harbour Street</p>
                <p>Downtown</p>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: WHITE }}>HOURS</h4>
              <div className="mt-4 space-y-2 text-[13px]" style={{ color: MUTED }}>
                <p>Mon &ndash; Fri: 5:00 AM &ndash; 11:00 PM</p>
                <p>Sat &ndash; Sun: 6:00 AM &ndash; 10:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row" style={{ borderColor: BORDER }}>
            <div className="flex gap-6">
              {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
                <span key={s} className="cursor-pointer text-[12px] uppercase tracking-wider transition-colors hover:text-white" style={{ color: MUTED }}>
                  {s}
                </span>
              ))}
            </div>
            <span className="text-[12px]" style={{ color: MUTED }}>&copy; 2026 FitZone. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
