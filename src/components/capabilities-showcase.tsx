"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  Check,
  Heart,
  Bell,
  Copy,
  ChevronDown,
  Play,
  Pause,
  Sun,
  Moon,
  Clipboard,
} from "lucide-react";

/* ─── helpers ────────────────────────────────────────────────────── */

function SectionDivider({
  num,
  title,
  useCase,
}: {
  num: string;
  title: string;
  useCase: string;
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 border-t border-white/[0.04]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] tracking-[0.5em] uppercase text-white/35 font-medium">
            {num}
          </p>
          <h3 className="text-lg font-bold text-white/80 mt-1">{title}</h3>
        </div>
        <p className="text-[11px] text-white/25 max-w-xs text-right hidden md:block">
          {useCase}
        </p>
      </div>
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 1 — BUTTONS & CTAs
   ═══════════════════════════════════════════════════════════════════ */

function ButtonsSection() {
  return (
    <>
      <SectionDivider
        num="01"
        title="Buttons & CTAs"
        useCase="Primary actions, hero CTAs, navigation links"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* 1 — Solid Pill */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full hover:scale-[1.03] transition-transform active:scale-[0.98]">
              Get Started
            </button>
            <span className="text-[10px] text-white/25">Solid Pill</span>
          </div>

          {/* 2 — Ghost Outline */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="px-6 py-2.5 border border-white/20 text-white/70 text-xs font-semibold rounded-full hover:border-white/50 hover:text-white transition-all">
              Learn More
            </button>
            <span className="text-[10px] text-white/25">Ghost Outline</span>
          </div>

          {/* 3 — Shimmer Sweep */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="group relative px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full overflow-hidden">
              <span className="relative z-10">Explore</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </button>
            <span className="text-[10px] text-white/25">Shimmer Sweep</span>
          </div>

          {/* 4 — Fill Reveal */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="group relative px-6 py-2.5 border border-white/30 text-xs font-semibold rounded-full overflow-hidden">
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                Discover
              </span>
              <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
            <span className="text-[10px] text-white/25">Fill Reveal</span>
          </div>

          {/* 5 — Arrow Slide */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full">
              Next{" "}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-[10px] text-white/25">Arrow Slide</span>
          </div>

          {/* 6 — Scale Pop */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full hover:scale-110 active:scale-95 transition-transform">
              Pop!
            </button>
            <span className="text-[10px] text-white/25">Scale Pop</span>
          </div>

          {/* 7 — Underline Expand */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="group relative text-white/70 text-xs font-semibold py-2.5">
              View Work
              <span className="absolute bottom-1 left-0 h-px bg-white w-0 group-hover:w-full transition-all duration-300" />
            </button>
            <span className="text-[10px] text-white/25">Underline Expand</span>
          </div>

          {/* 8 — Glow */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
            <button className="px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow">
              Launch
            </button>
            <span className="text-[10px] text-white/25">Glow</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 2 — CARD HOVER EFFECTS
   ═══════════════════════════════════════════════════════════════════ */

function SpotlightCard() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setPos({
      x: ((clientX - r.left) / r.width) * 100,
      y: ((clientY - r.top) / r.height) * 100,
    });
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative h-60 rounded-xl border border-white/[0.06] overflow-hidden flex items-center justify-center transition-all"
      style={{
        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
      }}
    >
      <div className="text-center">
        <p className="text-sm font-bold text-white/60">Spotlight</p>
        <p className="text-[10px] text-white/35 mt-1">Move your cursor</p>
      </div>
    </div>
  );
}

function TiltCard() {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    setRot({ x: -cy * 15, y: cx * 15 });
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      className="h-60 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center transition-transform duration-200"
      style={{
        transform: `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
      }}
    >
      <div className="text-center">
        <p className="text-sm font-bold text-white/60">3D Tilt</p>
        <p className="text-[10px] text-white/35 mt-1">Hover to tilt</p>
      </div>
    </div>
  );
}

function CardHoverSection() {
  const [hoveredReveal, setHoveredReveal] = useState(false);
  return (
    <>
      <SectionDivider
        num="02"
        title="Card Interactions"
        useCase="Portfolio items, product cards, feature blocks"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Spotlight */}
          <SpotlightCard />

          {/* 3D Tilt */}
          <TiltCard />

          {/* Border Glow */}
          <div className="h-60 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300">
            <div className="text-center">
              <p className="text-sm font-bold text-white/60">Border Glow</p>
              <p className="text-[10px] text-white/35 mt-1">Hover me</p>
            </div>
          </div>

          {/* Lift & Shadow */}
          <div className="h-60 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div className="text-center">
              <p className="text-sm font-bold text-white/60">Lift & Shadow</p>
              <p className="text-[10px] text-white/35 mt-1">Hover to lift</p>
            </div>
          </div>

          {/* Scale */}
          <div className="h-60 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center hover:scale-[1.03] transition-transform duration-300">
            <div className="text-center">
              <p className="text-sm font-bold text-white/60">Scale</p>
              <p className="text-[10px] text-white/35 mt-1">Subtle grow</p>
            </div>
          </div>

          {/* Content Reveal */}
          <div
            onClick={() => setHoveredReveal(!hoveredReveal)}
            onMouseEnter={() => setHoveredReveal(true)}
            onMouseLeave={() => setHoveredReveal(false)}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-500 cursor-pointer"
            style={{ height: hoveredReveal ? 240 : 140 }}
          >
            <div className="p-6">
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center mb-3">
                <ChevronDown className="w-4 h-4 text-white/40" />
              </div>
              <p className="text-sm font-bold text-white/60">Content Reveal</p>
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: hoveredReveal ? 120 : 0,
                  opacity: hoveredReveal ? 1 : 0,
                }}
              >
                <p className="text-xs text-white/30 mt-3 leading-relaxed">
                  Hidden content appears smoothly on hover. Great for previews
                  and compact layouts.
                </p>
                <span className="inline-block mt-3 text-[10px] text-white/40 border-b border-white/10">
                  Read more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 3 — GLASSMORPHISM
   ═══════════════════════════════════════════════════════════════════ */

function GlassSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <SectionDivider
        num="03"
        title="Glass & Depth"
        useCase="Overlays, modals, dashboards, media players"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative min-h-[420px] rounded-2xl overflow-hidden bg-black/40">
          {/* Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-64 h-64 rounded-full opacity-15"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)",
                top: "10%",
                left: "15%",
                animation: "driftA 18s ease-in-out infinite alternate",
              }}
            />
            <div
              className="absolute w-48 h-48 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)",
                bottom: "10%",
                right: "20%",
                animation: "driftB 22s ease-in-out infinite alternate",
              }}
            />
            <div
              className="absolute w-56 h-56 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)",
                top: "40%",
                right: "10%",
                animation: "driftC 25s ease-in-out infinite alternate",
              }}
            />
          </div>

          {/* Glass Cards */}
          <div className="relative z-10 p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Dashboard - large center */}
            <div className="md:col-span-2 backdrop-blur-3xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-4">
                Dashboard
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-white/80">2,847</p>
                  <p className="text-[10px] text-white/25 mt-1">Visitors</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white/80">4.2%</p>
                  <p className="text-[10px] text-white/25 mt-1">
                    Conversion
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white/80">12.8s</p>
                  <p className="text-[10px] text-white/25 mt-1">Avg. Time</p>
                </div>
              </div>
              <svg viewBox="0 0 300 60" className="w-full h-12 opacity-30">
                <polyline
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  points="0,50 30,42 60,45 90,30 120,35 150,20 180,25 210,15 240,18 270,10 300,12"
                />
              </svg>
            </div>

            {/* Player */}
            <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-4">
                Player
              </p>
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] mb-4" />
              <p className="text-sm font-medium text-white/60">Midnight</p>
              <p className="text-[10px] text-white/25 mt-0.5">
                Ambient Collection
              </p>
              <button
                onClick={() => setPlaying(!playing)}
                className="mt-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
              >
                {playing ? (
                  <Pause className="w-4 h-4 text-white/60" />
                ) : (
                  <Play className="w-4 h-4 text-white/60 ml-0.5" />
                )}
              </button>
            </div>

            {/* Notifications */}
            <div className="md:col-span-3 backdrop-blur-3xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-4">
                Notifications
              </p>
              <div className="space-y-3">
                {[
                  "New sign-up from Berlin, Germany",
                  "Payment received — Invoice #1042",
                  "Deployment successful on production",
                ].map((msg, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs text-white/40"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 4 — SCROLL REVEALS
   ═══════════════════════════════════════════════════════════════════ */

function ScrollRevealBlock({
  label,
  startClass,
  endClass,
}: {
  label: string;
  startClass: string;
  endClass: string;
}) {
  const { ref, inView } = useInView(0.2);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div
        className={`w-full h-28 rounded-xl bg-white/[0.04] border border-white/[0.06] transition-all duration-700 ${
          inView ? endClass : startClass
        }`}
      />
      <span className="text-[10px] text-white/40">{label}</span>
    </div>
  );
}

function StaggerBlock() {
  const { ref, inView } = useInView(0.2);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="w-full grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[52px] rounded-lg bg-white/[0.04] border border-white/[0.06] transition-all duration-500"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transitionDelay: inView ? `${i * 120}ms` : "0ms",
            }}
          />
        ))}
      </div>
      <span className="text-[10px] text-white/25">Stagger</span>
    </div>
  );
}

function ScrollRevealsSection() {
  return (
    <>
      <SectionDivider
        num="04"
        title="Scroll Animations"
        useCase="Section transitions, landing page reveals"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ScrollRevealBlock
            label="Fade Up"
            startClass="opacity-0 translate-y-8"
            endClass="opacity-100 translate-y-0"
          />
          <ScrollRevealBlock
            label="Fade Down"
            startClass="opacity-0 -translate-y-8"
            endClass="opacity-100 translate-y-0"
          />
          <ScrollRevealBlock
            label="Fade Left"
            startClass="opacity-0 -translate-x-8"
            endClass="opacity-100 translate-x-0"
          />
          <ScrollRevealBlock
            label="Fade Right"
            startClass="opacity-0 translate-x-8"
            endClass="opacity-100 translate-x-0"
          />
          <ScrollRevealBlock
            label="Scale"
            startClass="opacity-0 scale-75"
            endClass="opacity-100 scale-100"
          />
          <ScrollRevealBlock
            label="Blur"
            startClass="opacity-0 blur-md"
            endClass="opacity-100 blur-0"
          />
          <ScrollRevealBlock
            label="Flip"
            startClass="opacity-0 [transform:rotateX(-30deg)]"
            endClass="opacity-100 [transform:rotateX(0deg)]"
          />
          <StaggerBlock />
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 5 — TEXT EFFECTS
   ═══════════════════════════════════════════════════════════════════ */

function TypewriterText() {
  const full = "$ npx create-next-app";
  const [text, setText] = useState("");
  const { ref, inView } = useInView();
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(iv);
    }, 80);
    return () => clearInterval(iv);
  }, [inView]);

  return (
    <div ref={ref} className="py-6">
      <p className="text-[10px] text-white/35 mb-2">Typewriter</p>
      <p className="font-mono text-lg text-white/70">
        {text}
        <span className="inline-block w-2 h-5 bg-white/50 ml-0.5 animate-pulse align-middle" />
      </p>
    </div>
  );
}

function CounterText() {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const target = 12459;
    const dur = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  return (
    <div ref={ref} className="py-6">
      <p className="text-[10px] text-white/35 mb-2">Counter</p>
      <p className="text-5xl font-bold text-white/80 tabular-nums">
        {count.toLocaleString()}
      </p>
    </div>
  );
}

function TextEffectsSection() {
  return (
    <>
      <SectionDivider
        num="05"
        title="Typography"
        useCase="Headlines, code blocks, hero text, stats"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-2">
        {/* Gradient Shimmer */}
        <div className="py-6">
          <p className="text-[10px] text-white/35 mb-2">Gradient Shimmer</p>
          <p
            className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.3), rgba(255,255,255,0.9))",
              backgroundSize: "200% 100%",
              animation: "shimmerText 3s linear infinite",
            }}
          >
            Where Code Meets Craft
          </p>
        </div>

        {/* Typewriter */}
        <TypewriterText />

        {/* Split Color */}
        <div className="py-6">
          <p className="text-[10px] text-white/35 mb-2">Split Color</p>
          <div className="relative inline-block">
            <p className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white/30">
              DESIGN
            </p>
            <p
              className="absolute inset-0 text-6xl md:text-8xl font-black uppercase tracking-tighter text-white"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              DESIGN
            </p>
          </div>
        </div>

        {/* Counter */}
        <CounterText />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 6 — PRICING TABLE
   ═══════════════════════════════════════════════════════════════════ */

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "1,000",
      features: [
        "Single-page website",
        "Mobile responsive",
        "Contact form",
        "SEO basics",
        "1 revision round",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "2,000",
      features: [
        "Up to 8 pages",
        "Custom animations",
        "CMS integration",
        "Advanced SEO",
        "Analytics setup",
        "3 revision rounds",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "4,000",
      features: [
        "Unlimited pages",
        "WebGL effects",
        "E-commerce ready",
        "Multi-language",
        "Priority support",
        "Unlimited revisions",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <SectionDivider
        num="06"
        title="Pricing & Plans"
        useCase="SaaS pricing, service tiers, membership plans"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
                plan.popular
                  ? "border-white/15 bg-white/[0.04]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase bg-white text-black rounded-full">
                  Popular
                </span>
              )}
              <p className="text-sm font-medium text-white/50">{plan.name}</p>
              <p className="mt-2 text-4xl font-bold text-white/80">
                &euro;{plan.price}
              </p>
              <p className="text-[10px] text-white/35 mt-1">one-time</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-white/40"
                  >
                    <Check className="w-3.5 h-3.5 text-white/25 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-full text-xs font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 7 — TESTIMONIALS
   ═══════════════════════════════════════════════════════════════════ */

function TestimonialsSection() {
  return (
    <>
      <SectionDivider
        num="07"
        title="Social Proof"
        useCase="Reviews, client quotes, trust builders"
      />
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="relative py-12">
          <span className="absolute top-0 left-0 text-[120px] leading-none font-serif text-white/[0.04] select-none pointer-events-none">
            &ldquo;
          </span>
          <blockquote className="relative z-10 text-xl md:text-2xl italic text-white/50 leading-relaxed max-w-2xl mx-auto text-center">
            They turned our rough ideas into a website that feels like a
            premium product. Every interaction is intentional, every pixel
            considered.
          </blockquote>
          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-white/60">
              Marcus Reinhardt
            </p>
            <p className="text-[10px] text-white/25 mt-1">
              CEO, Reinhardt Interiors
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 8 — MICRO-INTERACTIONS
   ═══════════════════════════════════════════════════════════════════ */

function ToggleDemo() {
  const [on, setOn] = useState(false);
  return (
    <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
      <button
        onClick={() => setOn(!on)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
          on ? "bg-white/30" : "bg-white/10"
        }`}
      >
        <span
          className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 flex items-center justify-center"
          style={{ left: on ? "calc(100% - 22px)" : "2px" }}
        >
          {on ? (
            <Sun className="w-2.5 h-2.5 text-black" />
          ) : (
            <Moon className="w-2.5 h-2.5 text-black" />
          )}
        </span>
      </button>
      <span className="text-[10px] text-white/25">Toggle</span>
    </div>
  );
}

function LikeDemo() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
      <button
        onClick={() => setLiked(!liked)}
        className="transition-transform active:scale-75"
        style={{ transform: liked ? "scale(1.15)" : "scale(1)" }}
      >
        <Heart
          className={`w-7 h-7 transition-colors duration-300 ${
            liked ? "fill-white text-white" : "text-white/30"
          }`}
        />
      </button>
      <span className="text-[10px] text-white/25">Like</span>
    </div>
  );
}

function AccordionDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col gap-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-xs text-white/50">
          What frameworks do you use?
        </span>
        <ChevronDown
          className={`w-4 h-4 text-white/25 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 80 : 0, opacity: open ? 1 : 0 }}
      >
        <p className="text-[11px] text-white/30 leading-relaxed">
          We build with Next.js, React, and Tailwind CSS. Every project is
          hand-coded.
        </p>
      </div>
      <span className="text-[10px] text-white/25 text-center">Accordion</span>
    </div>
  );
}

function CopyDemo() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-xs text-white/40 hover:border-white/20 transition-all"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" /> Copied!
          </>
        ) : (
          <>
            <Clipboard className="w-3.5 h-3.5" /> Copy
          </>
        )}
      </button>
      <span className="text-[10px] text-white/25">Copy Button</span>
    </div>
  );
}

function ProgressDemo() {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3"
    >
      <div className="w-full">
        <div className="flex justify-between mb-2">
          <span className="text-[10px] text-white/30">Progress</span>
          <span className="text-[10px] text-white/30">85%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-white/30 transition-all duration-1000 ease-out"
            style={{ width: inView ? "85%" : "0%" }}
          />
        </div>
      </div>
      <span className="text-[10px] text-white/25">Progress Bar</span>
    </div>
  );
}

function BadgeDemo() {
  const [count, setCount] = useState(3);
  return (
    <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center gap-3">
      <button
        onClick={() => setCount((c) => Math.max(0, c - 1))}
        className="relative"
      >
        <Bell className="w-7 h-7 text-white/30" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[9px] font-bold rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
      <span className="text-[10px] text-white/25">Notification Badge</span>
    </div>
  );
}

function MicroInteractionsSection() {
  return (
    <>
      <SectionDivider
        num="08"
        title="Details"
        useCase="Toggles, likes, forms, feedback, badges"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ToggleDemo />
          <LikeDemo />
          <AccordionDemo />
          <CopyDemo />
          <ProgressDemo />
          <BadgeDemo />
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 9 — LOADING STATES
   ═══════════════════════════════════════════════════════════════════ */

function LoadingSection() {
  return (
    <>
      <SectionDivider
        num="09"
        title="Loading"
        useCase="Skeleton screens, spinners, placeholders"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skeleton */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6">
            <p className="text-[10px] text-white/25 mb-4 text-center">
              Skeleton Shimmer
            </p>
            <div className="space-y-3">
              {[100, 75, 90].map((w, i) => (
                <div
                  key={i}
                  className="h-3 rounded-full overflow-hidden"
                  style={{
                    width: `${w}%`,
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%)",
                    backgroundSize: "200% 100%",
                    animation: "skeletonSweep 1.5s ease-in-out infinite",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Ring Spinner */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center justify-center gap-4">
            <p className="text-[10px] text-white/25">Ring Spinner</p>
            <div
              className="w-10 h-10 rounded-full border-2 border-white/10 border-t-white/50"
              style={{ animation: "spin 0.8s linear infinite" }}
            />
          </div>

          {/* Dot Pulse */}
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-6 flex flex-col items-center justify-center gap-4">
            <p className="text-[10px] text-white/25">Dot Pulse</p>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-white/30"
                  style={{
                    animation: "dotPulse 1.2s ease-in-out infinite",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 10 — MARQUEES
   ═══════════════════════════════════════════════════════════════════ */

function Marquee({
  children,
  duration = "40s",
  className = "",
}: {
  children: React.ReactNode;
  duration?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee ${duration} linear infinite` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

function MarqueeSection() {
  const trustItems = [
    "Design & Development",
    "No Templates",
    "Lighthouse 95+",
    "Clients Worldwide",
    "Custom Code Only",
    "Next.js & React",
  ];
  const logoNames = [
    "Reinhardt Interiors",
    "Nordic Stays",
    "Berlin Dental",
    "Artisan Gallery",
    "Metro Fitness",
    "Coastal Real Estate",
  ];

  return (
    <>
      <SectionDivider
        num="10"
        title="Scrolling Text"
        useCase="Trust strips, logo clouds, announcements"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-6">
        {/* Trust strip */}
        <Marquee duration="40s" className="py-4 border-y border-white/[0.04]">
          <div className="flex items-center gap-8 pr-8">
            {trustItems.map((item) => (
              <span
                key={item}
                className="text-sm text-white/35 whitespace-nowrap"
              >
                {item}
                <span className="mx-8 text-white/10">&bull;</span>
              </span>
            ))}
          </div>
        </Marquee>

        {/* Logo cloud */}
        <Marquee duration="25s" className="py-4">
          <div className="flex items-center gap-12 pr-12">
            {logoNames.map((name) => (
              <span
                key={name}
                className="text-xs tracking-[0.15em] uppercase text-white/30 whitespace-nowrap font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </Marquee>

        {/* Speed marquee */}
        <Marquee duration="15s" className="py-6">
          <div className="flex items-center gap-6 pr-6">
            {["DESIGN", "CODE", "LAUNCH", "GROW"].map((word) => (
              <span
                key={word}
                className="text-5xl md:text-6xl font-black text-white/[0.06] uppercase whitespace-nowrap"
              >
                {word}
                <span className="mx-6 text-white/[0.04]">&middot;</span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 11 — BENTO GRID
   ═══════════════════════════════════════════════════════════════════ */

function BentoCounter() {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const target = 847;
    const dur = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="md:col-span-2 md:row-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col items-center justify-center"
    >
      <p className="text-6xl md:text-7xl font-bold text-white/80 tabular-nums">
        {count}
      </p>
      <p className="text-sm text-white/25 mt-2">Projects Delivered</p>
    </div>
  );
}

function BentoSection() {
  return (
    <>
      <SectionDivider
        num="11"
        title="Bento Layouts"
        useCase="Dashboards, feature grids, portfolio showcases"
      />
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] gap-4">
          {/* Large 2x2 — counter */}
          <BentoCounter />

          {/* Small 1x1 — stat */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col items-center justify-center">
            <ArrowRight className="w-5 h-5 text-white/25 mb-2" />
            <p className="text-2xl font-bold text-white/60">99.9%</p>
            <p className="text-[10px] text-white/35 mt-1">Uptime</p>
          </div>

          {/* Small 1x1 — stat */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col items-center justify-center">
            <Check className="w-5 h-5 text-white/25 mb-2" />
            <p className="text-2xl font-bold text-white/60">95+</p>
            <p className="text-[10px] text-white/35 mt-1">Lighthouse</p>
          </div>

          {/* Wide 2x1 — marquee */}
          <div className="col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center overflow-hidden">
            <Marquee duration="12s">
              <div className="flex items-center gap-6 px-6">
                {[
                  "NEXT.JS",
                  "REACT",
                  "TAILWIND",
                  "TYPESCRIPT",
                  "VERCEL",
                  "FIGMA",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs tracking-[0.2em] text-white/30 font-medium whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Tall 1x2 — list */}
          <div className="row-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-4">
              Services
            </p>
            {[
              "Web Design",
              "Development",
              "SEO",
              "Analytics",
              "Hosting",
            ].map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 py-2 border-b border-white/[0.04] last:border-0"
              >
                <span className="w-1 h-1 rounded-full bg-white/15 shrink-0" />
                <span className="text-xs text-white/30">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════════════════ */

function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Seen enough<span className="text-white/35">?</span>
        </h2>
        <p className="mt-6 text-sm text-white/40 max-w-md mx-auto">
          Every component on this page is something we can build for your
          website. Tell us what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="/start-project"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] rounded-full hover:bg-white/90 transition-all"
          >
            Start a Project{" "}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/pricing"
            className="px-10 py-4 border border-white/10 text-white/50 text-[11px] font-medium uppercase tracking-[0.15em] rounded-full hover:border-white/20 hover:text-white transition-all"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CSS KEYFRAMES (injected once)
   ═══════════════════════════════════════════════════════════════════ */

function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      @keyframes shimmerText {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
      @keyframes skeletonSweep {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes dotPulse {
        0%,
        80%,
        100% {
          transform: scale(0.6);
          opacity: 0.4;
        }
        40% {
          transform: scale(1);
          opacity: 1;
        }
      }
      @keyframes driftA {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(60px, -40px);
        }
      }
      @keyframes driftB {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(-50px, 30px);
        }
      }
      @keyframes driftC {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(40px, 50px);
        }
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════ */

export function CapabilitiesShowcase() {
  return (
    <>
      <GlobalStyles />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[9px] tracking-[0.6em] uppercase text-white/35 font-medium mb-6">
            Design Capabilities
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Everything We Can
            <br />
            Build For You<span className="text-white/35">.</span>
          </h1>
          <p className="mt-6 text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
            Every component below is live and interactive. Hover it. Click it.
            Scroll it. These are the building blocks of your next website.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <ButtonsSection />
      <CardHoverSection />
      <GlassSection />
      <ScrollRevealsSection />
      <TextEffectsSection />
      <PricingSection />
      <TestimonialsSection />
      <MicroInteractionsSection />
      <LoadingSection />
      <MarqueeSection />
      <BentoSection />

      {/* FINAL CTA */}
      <FinalCTA />
    </>
  );
}
