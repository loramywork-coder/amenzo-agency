"use client";

import { useRef, useMemo, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
  useSpring,
} from "framer-motion";

/* ================================================================== */
/*  PROGRESS BAR                                                        */
/* ================================================================== */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const width = useTransform(smooth, [0, 1], ["0%", "100%"]);
  return (
    <div className="fixed top-0 left-0 w-full h-px z-50 bg-white/5">
      <motion.div className="h-full bg-white/50" style={{ width }} />
    </div>
  );
}

/* ================================================================== */
/*  ACT 1 — TITLE                                                      */
/*  Simple hero with title that fades as you scroll                     */
/* ================================================================== */
function Act1() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="text-center px-6" style={{ opacity, scale, y }}>
        <p className="text-[10px] sm:text-[11px] text-white/30 tracking-[0.5em] uppercase mb-6">
          Scroll Cinema Presents
        </p>
        <h1 className="text-[clamp(48px,12vw,180px)] font-black text-white leading-none">
          CHRONOLOGY
        </h1>
        <p className="text-[11px] sm:text-[13px] text-white/20 tracking-[0.2em] uppercase mt-6">
          A story told in scroll
        </p>
        <div className="mt-16">
          <motion.div
            className="w-px h-8 bg-white/15 mx-auto origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ================================================================== */
/*  FULL-SCREEN TEXT SECTION — Shared component for big word reveals    */
/* ================================================================== */
function BigWord({
  word,
  subtitle,
  accent,
}: {
  word: string;
  subtitle: string;
  accent?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  return (
    <section ref={ref} className="h-screen flex items-center justify-center relative">
      {accent && (
        <div
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
        />
      )}
      <motion.div className="text-center relative z-10 px-6" style={{ opacity, y, scale }}>
        <h2 className="text-[clamp(40px,10vw,120px)] font-black text-white leading-none">
          {word}
        </h2>
        <p className="text-[11px] sm:text-[13px] text-white/25 tracking-[0.15em] uppercase mt-4">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}

/* ================================================================== */
/*  CONTENT CARD — Detail card that fades in/out on scroll              */
/* ================================================================== */
function ContentCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [60, 0, 0, -40]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <motion.div style={{ opacity, y }} className="w-full max-w-lg">
        {children}
      </motion.div>
    </section>
  );
}

/* ================================================================== */
/*  STRATEGY CARD CONTENT                                               */
/* ================================================================== */
function StrategyCard() {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Strategy & Planning</h3>
          <p className="text-[10px] text-white/25 tracking-wider uppercase">Phase 01</p>
        </div>
      </div>
      {["Competitive deep-dive", "User journey mapping", "Technical architecture", "Sprint roadmap"].map((txt, i) => (
        <div key={i} className="flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0">
          <span className="text-white/20 text-[11px] font-mono mt-0.5">0{i + 1}</span>
          <span className="text-white/60 text-[13px]">{txt}</span>
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  CODE EDITOR CARD                                                    */
/* ================================================================== */
function CodeCard() {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed">
      <div className="flex items-center gap-2 mb-5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
        </div>
        <span className="text-[9px] text-white/15 tracking-wider ml-2">app.tsx</span>
      </div>
      <div>
        <span className="text-purple-400/70">export default</span>{" "}
        <span className="text-blue-400/70">function</span>{" "}
        <span className="text-yellow-300/70">App</span>
        <span className="text-white/30">() {"{"}</span>
      </div>
      <div className="pl-4 sm:pl-6 mt-1">
        <span className="text-purple-400/70">return</span>{" "}
        <span className="text-blue-400/70">&lt;</span>
        <span className="text-green-400/70">Website</span>
        <span className="text-blue-400/70"> /&gt;</span>
      </div>
      <div className="mt-1">
        <span className="text-white/30">{"}"}</span>
        <span
          className="inline-block w-[2px] h-[1.1em] bg-white/50 ml-1 align-text-bottom"
          style={{ animation: "cursor-blink 1s step-end infinite" }}
        />
      </div>
      <style>{`@keyframes cursor-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </div>
  );
}

/* ================================================================== */
/*  WIREFRAME GRID                                                      */
/* ================================================================== */
function WireframeGrid() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase mb-2">Layout System</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-3 gap-2 w-[280px] sm:w-[380px] h-[200px] sm:h-[260px]">
        {[
          "col-span-2 row-span-2",
          "col-span-1 row-span-1",
          "col-span-1 row-span-1",
          "col-span-1 row-span-2 hidden sm:block",
          "col-span-1 row-span-1",
          "col-span-1 row-span-1",
          "col-span-1 row-span-1",
          "col-span-1 row-span-1 hidden sm:block",
        ].map((cls, i) => (
          <div key={i} className={`${cls} rounded-lg border border-white/[0.06] bg-white/[0.03]`} />
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MANIFESTO — Word-by-word reveal                                     */
/* ================================================================== */
const manifestoText =
  "Every website we build starts with a conversation. We listen to your goals, study your competitors, and design a digital experience that sets you apart. No templates. No shortcuts. No compromises. Just craft, code, and obsessive attention to the details that make the difference.";

function RevealWord({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.06, 1]);
  const [phase, setPhase] = useState<"dim" | "glow" | "done">("dim");

  useMotionValueEvent(opacity, "change", (v) => {
    if (v > 0.85) setPhase("done");
    else if (v > 0.15) setPhase("glow");
    else setPhase("dim");
  });

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em] sm:mr-[0.3em]">
      <span
        style={{
          color: phase === "glow" ? "#fff" : phase === "done" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.06)",
          textShadow: phase === "glow" ? "0 0 20px rgba(255,255,255,0.15)" : "none",
          transition: "color 0.25s, text-shadow 0.25s",
        }}
      >
        {word}
      </span>
    </motion.span>
  );
}

function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const words = useMemo(() => manifestoText.split(" "), []);

  return (
    <section ref={ref} className="min-h-[180vh] flex items-center justify-center px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold leading-[1.7] text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length + 0.02;
            return <RevealWord key={`${word}-${i}`} word={word} range={[start, end]} progress={scrollYProgress} />;
          })}
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FINALE — CTA with color inversion                                   */
/* ================================================================== */
function Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const bg = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], ["#000", "#fff", "#fff", "#000", "#000"]);
  const fg = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], ["#fff", "#000", "#000", "#fff", "#fff"]);
  const titleOp = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const btnOp = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.55, 0.75], [16, 0]);

  return (
    <motion.section ref={ref} className="h-screen flex flex-col items-center justify-center gap-4 px-6" style={{ backgroundColor: bg }}>
      <motion.h2
        style={{ opacity: titleOp, color: fg }}
        className="text-[clamp(36px,9vw,80px)] font-black leading-none tracking-tight"
      >
        AMENZO
      </motion.h2>
      <motion.p style={{ opacity: titleOp, color: fg }} className="text-[12px] tracking-wide opacity-30">
        Where Code Meets Craft
      </motion.p>
      <motion.a
        href="/contact"
        style={{ opacity: btnOp, y: btnY }}
        className="mt-4 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.12em] rounded-full bg-white text-black hover:bg-white/90 transition-colors"
      >
        Start a Project
      </motion.a>
    </motion.section>
  );
}

/* ================================================================== */
/*  PAGE                                                                */
/* ================================================================== */
export default function ScrollShowcase() {
  return (
    <main className="bg-black">
      <ProgressBar />

      {/* Act 1 — Title */}
      <Act1 />

      {/* Act 2 — Discover */}
      <BigWord word="DISCOVER" subtitle="Understanding your vision" accent="rgba(99, 102, 241, 0.08)" />
      <ContentCard><StrategyCard /></ContentCard>

      {/* Act 3 — Design */}
      <BigWord word="DESIGN" subtitle="Crafting the visual language" accent="rgba(168, 85, 247, 0.08)" />
      <ContentCard><WireframeGrid /></ContentCard>

      {/* Act 4 — Build */}
      <BigWord word="BUILD" subtitle="Engineering the experience" accent="rgba(236, 72, 153, 0.06)" />
      <ContentCard><CodeCard /></ContentCard>

      {/* Act 5 — Manifesto */}
      <Manifesto />

      {/* Act 6 — Finale */}
      <Finale />
    </main>
  );
}
