"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Lerp Interpolation",
    description:
      "Each spotlight uses linear interpolation with a different factor, creating cascading delays that feel organic and physical.",
  },
  {
    title: "Radial Gradients",
    description:
      "Three layered radial gradients create depth — white for direct light, blue for ambient fill, and violet for theatrical atmosphere.",
  },
  {
    title: "Proximity Detection",
    description:
      "Cards measure their distance to each spotlight and increase opacity when illuminated, simulating real light falloff.",
  },
  {
    title: "requestAnimationFrame",
    description:
      "Smooth 60fps updates via rAF ensure the lerp calculations stay in sync with the browser's paint cycle.",
  },
  {
    title: "Touch Fallback",
    description:
      "On mobile, spotlights orbit in a figure-8 pattern automatically, ensuring the theatrical effect works without a cursor.",
  },
  {
    title: "Theatrical Depth",
    description:
      "Layering three lights at different sizes and opacities mimics stage lighting rigs where key, fill, and back lights overlap.",
  },
];

function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

export default function SpotlightPage() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const spot1Ref = useRef({ x: 0, y: 0 });
  const spot2Ref = useRef({ x: 0, y: 0 });
  const spot3Ref = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isTouchRef = useRef(false);
  const timeRef = useRef(0);

  const [spots, setSpots] = useState({
    x1: 0, y1: 0,
    x2: 0, y2: 0,
    x3: 0, y3: 0,
  });
  const [heroGlow, setHeroGlow] = useState(0);
  const [cardGlows, setCardGlows] = useState<number[]>(
    new Array(CARDS.length).fill(0)
  );

  const updateCardGlows = useCallback(() => {
    const newGlows = cardRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const threshold = 350;

      const d1 = distance(spot1Ref.current.x, spot1Ref.current.y, cx, cy);
      const d2 = distance(spot2Ref.current.x, spot2Ref.current.y, cx, cy);
      const d3 = distance(spot3Ref.current.x, spot3Ref.current.y, cx, cy);
      const minD = Math.min(d1, d2, d3);

      if (minD < threshold) {
        return 0.15 + 0.65 * (1 - minD / threshold);
      }
      return 0.15;
    });
    setCardGlows(newGlows);
  }, []);

  const updateHeroGlow = useCallback(() => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const threshold = 400;

    const d1 = distance(spot1Ref.current.x, spot1Ref.current.y, cx, cy);
    const d2 = distance(spot2Ref.current.x, spot2Ref.current.y, cx, cy);
    const d3 = distance(spot3Ref.current.x, spot3Ref.current.y, cx, cy);
    const minD = Math.min(d1, d2, d3);

    if (minD < threshold) {
      setHeroGlow(0.15 + 0.85 * (1 - minD / threshold));
    } else {
      setHeroGlow(0.15);
    }
  }, []);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    isTouchRef.current = isMobile;

    // Initialize positions to center
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseRef.current = { x: cx, y: cy };
    spot1Ref.current = { x: cx, y: cy };
    spot2Ref.current = { x: cx, y: cy };
    spot3Ref.current = { x: cx, y: cy };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      isTouchRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        isTouchRef.current = false;
      }
    };

    const loop = () => {
      timeRef.current += 0.01;

      if (isTouchRef.current) {
        // Figure-8 auto-orbit on mobile
        const w = window.innerWidth;
        const h = window.innerHeight;
        const t = timeRef.current;
        mouseRef.current.x = w / 2 + (w * 0.3) * Math.sin(t);
        mouseRef.current.y = h / 2 + (h * 0.15) * Math.sin(t * 2);
      }

      // Spot 1: follows directly
      spot1Ref.current.x = mouseRef.current.x;
      spot1Ref.current.y = mouseRef.current.y;

      // Spot 2: lerp at 0.05
      spot2Ref.current.x +=
        (mouseRef.current.x - spot2Ref.current.x) * 0.05;
      spot2Ref.current.y +=
        (mouseRef.current.y - spot2Ref.current.y) * 0.05;

      // Spot 3: lerp at 0.02
      spot3Ref.current.x +=
        (mouseRef.current.x - spot3Ref.current.x) * 0.02;
      spot3Ref.current.y +=
        (mouseRef.current.y - spot3Ref.current.y) * 0.02;

      setSpots({
        x1: spot1Ref.current.x,
        y1: spot1Ref.current.y,
        x2: spot2Ref.current.x,
        y2: spot2Ref.current.y,
        x3: spot3Ref.current.x,
        y3: spot3Ref.current.y,
      });

      updateHeroGlow();
      updateCardGlows();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [updateCardGlows, updateHeroGlow]);

  const gradientStyle = {
    background: [
      `radial-gradient(circle 300px at ${spots.x1}px ${spots.y1}px, rgba(255,255,255,0.06), transparent)`,
      `radial-gradient(circle 400px at ${spots.x2}px ${spots.y2}px, rgba(59,130,246,0.04), transparent)`,
      `radial-gradient(circle 500px at ${spots.x3}px ${spots.y3}px, rgba(139,92,246,0.03), transparent)`,
    ].join(", "),
  };

  return (
    <>
      {/* Spotlight gradient layer — fixed full viewport */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ ...gradientStyle, zIndex: 1 }}
      />

      {/* Section 1: Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen pt-16 pb-20 px-4">
        <div className="text-center">
          <motion.h1
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[80px] md:text-[120px] font-black tracking-tighter leading-none transition-colors duration-150"
            style={{ color: `rgba(255,255,255,${heroGlow})` }}
          >
            SPOTLIGHT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-4 text-xs tracking-[0.25em] uppercase"
            style={{ color: `rgba(255,255,255,0.08)` }}
          >
            Move your cursor to light the stage
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {["3 lights", "Delayed lerp", "Theatrical depth"].map(
              (pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase border border-white/[0.06] text-white/20 bg-white/[0.02]"
                >
                  {pill}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Technique cards */}
      <section className="relative z-10 pt-16 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              className="rounded-2xl p-6 border transition-opacity duration-150"
              style={{
                opacity: cardGlows[i] ?? 0.15,
                backgroundColor: `rgba(255,255,255,0.02)`,
                borderColor: `rgba(255,255,255,0.03)`,
              }}
            >
              <h3 className="text-sm font-semibold text-white/80 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
