"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Shared card wrapper                                                */
/* ------------------------------------------------------------------ */
function CardShell({
  children,
  className = "",
  style,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={`relative bg-[#0A0A0A] border border-white/[0.04] rounded-2xl p-8 min-h-[240px] flex flex-col justify-between overflow-hidden ${className}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <span className="text-[10px] text-white/[0.15] font-mono mt-auto pt-6">
      {text}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 1 — Spotlight                                                 */
/* ------------------------------------------------------------------ */
function SpotlightCard() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <CardShell
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        hovered
          ? {
              background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent 50%)`,
              backgroundColor: "#0A0A0A",
            }
          : undefined
      }
    >
      <div>
        <h3 className="text-[18px] text-white font-semibold">Spotlight</h3>
        <p className="text-[13px] text-white/40 mt-2">
          Radial gradient follows your cursor inside the card.
        </p>
      </div>
      <Label text="radial-gradient" />
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 — Tilt 3D                                                   */
/* ------------------------------------------------------------------ */
function TiltCard() {
  const [transform, setTransform] = useState("");

  return (
    <CardShell
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / rect.height) * -10;
        const rotateY = ((x - centerX) / rect.width) * 10;
        setTransform(
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        );
      }}
      onMouseLeave={() => setTransform("")}
      style={{
        transform: transform || undefined,
        transition: "transform 0.15s ease-out",
      }}
    >
      <div>
        <h3 className="text-[18px] text-white font-semibold">Tilt 3D</h3>
        <p className="text-[13px] text-white/40 mt-2">
          Card tilts in 3D space following your cursor position.
        </p>
      </div>
      <Label text="perspective · rotateX/Y" />
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 3 — Glare                                                     */
/* ------------------------------------------------------------------ */
function GlareCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <CardShell
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
          transform: hovered ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 600ms ease-in-out",
        }}
      />
      <div className="relative z-20">
        <h3 className="text-[18px] text-white font-semibold">Glare</h3>
        <p className="text-[13px] text-white/40 mt-2">
          Diagonal light sweep crosses the card on hover.
        </p>
      </div>
      <Label text="linear-gradient sweep" />
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 4 — Border Gradient                                           */
/* ------------------------------------------------------------------ */
const borderGradientCSS = `
@property --card-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes borderSpin {
  to { --card-angle: 360deg; }
}
`;

function BorderGradientCard() {
  useEffect(() => {
    const id = "border-gradient-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = borderGradientCSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className="relative rounded-2xl p-[1px] min-h-[240px]"
      style={{
        backgroundImage:
          "conic-gradient(from var(--card-angle), #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
        animation: "borderSpin 3s linear infinite",
      }}
    >
      <div className="bg-[#0A0A0A] rounded-2xl p-8 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] text-white font-semibold">
            Border Gradient
          </h3>
          <p className="text-[13px] text-white/40 mt-2">
            Animated conic gradient spins around the card border.
          </p>
        </div>
        <Label text="conic-gradient · @property" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 5 — Lift & Glow                                               */
/* ------------------------------------------------------------------ */
function LiftGlowCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <CardShell
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(59,130,246,0.15), 0 0 40px rgba(139,92,246,0.08)"
          : "none",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      <div>
        <h3 className="text-[18px] text-white font-semibold">Lift & Glow</h3>
        <p className="text-[13px] text-white/40 mt-2">
          Card lifts up and casts a colored glow underneath.
        </p>
      </div>
      <Label text="translateY · box-shadow" />
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 6 — Magnetic                                                  */
/* ------------------------------------------------------------------ */
function MagneticCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`translate(${x * 0.2}px, ${y * 0.2}px)`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("")}
    >
      <CardShell
        style={{
          transform: transform || undefined,
          transition: transform ? "transform 0.15s ease-out" : "transform 0.4s ease-out",
        }}
      >
        <div>
          <h3 className="text-[18px] text-white font-semibold">Magnetic</h3>
          <p className="text-[13px] text-white/40 mt-2">
            The entire card attracts toward your cursor.
          </p>
        </div>
        <Label text="cursor attraction" />
      </CardShell>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 7 — Reveal Content                                            */
/* ------------------------------------------------------------------ */
function RevealCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <CardShell
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <h3 className="text-[18px] text-white font-semibold">
          Reveal Content
        </h3>
        <div
          style={{
            maxHeight: hovered ? "200px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.5s ease",
          }}
        >
          <p className="text-[13px] text-white/40 mt-2">
            Hidden content slides into view on hover. Use this pattern for
            progressive disclosure — show a title first, then reveal details
            when the user shows interest.
          </p>
          <div className="flex gap-2 mt-3">
            <span className="text-[11px] text-white/20 border border-white/10 rounded px-2 py-0.5">
              React
            </span>
            <span className="text-[11px] text-white/20 border border-white/10 rounded px-2 py-0.5">
              CSS
            </span>
            <span className="text-[11px] text-white/20 border border-white/10 rounded px-2 py-0.5">
              Motion
            </span>
          </div>
        </div>
      </div>
      <Label text="max-height transition" />
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 8 — Scramble                                                  */
/* ------------------------------------------------------------------ */
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

function ScrambleCard() {
  const target = "Scramble";
  const [display, setDisplay] = useState(target);
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!hovered) {
      setDisplay(target);
      cancelAnimationFrame(frameRef.current);
      return;
    }

    let iteration = 0;
    const totalFrames = target.length * 3;

    function tick() {
      setDisplay(
        target
          .split("")
          .map((char, i) => {
            if (i < Math.floor(iteration / 3)) return char;
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );
      iteration++;
      if (iteration <= totalFrames) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [hovered]);

  return (
    <CardShell
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <h3 className="text-[18px] text-white font-semibold font-mono tracking-wider">
          {display}
        </h3>
        <p className="text-[13px] text-white/40 mt-2">
          Title text scrambles through random characters then resolves.
        </p>
      </div>
      <Label text="character scramble" />
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 9 — Scale Pulse                                               */
/* ------------------------------------------------------------------ */
const scalePulseCSS = `
@keyframes scalePulse {
  0%, 100% { transform: scale(1.02); }
  50% { transform: scale(1.04); }
}
`;

function ScalePulseCard() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const id = "scale-pulse-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = scalePulseCSS;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <CardShell
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.03)" : "scale(1)",
        animation: hovered ? "scalePulse 1.5s ease-in-out infinite" : "none",
        transition: hovered ? undefined : "transform 0.3s ease",
      }}
    >
      <div>
        <h3 className="text-[18px] text-white font-semibold">Scale Pulse</h3>
        <p className="text-[13px] text-white/40 mt-2">
          Card scales up and pulses subtly while hovered.
        </p>
      </div>
      <Label text="transform · animation" />
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function SpotlightCardsPage() {
  return (
    <main className="min-h-screen bg-black pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-[40px] md:text-[60px] font-bold text-white tracking-tight leading-none">
          SPOTLIGHT CARDS
        </h1>
        <p className="text-sm text-white/20 mt-3">
          9 interactive card patterns. Hover each to experience.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SpotlightCard />
        <TiltCard />
        <GlareCard />
        <BorderGradientCard />
        <LiftGlowCard />
        <MagneticCard />
        <RevealCard />
        <ScrambleCard />
        <ScalePulseCard />
      </div>

      {/* Footer text */}
      <p className="text-sm text-white/20 text-center py-16">
        Every interaction is pure CSS + React. No libraries.
      </p>
    </main>
  );
}
