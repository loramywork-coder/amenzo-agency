"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const INFO_CARDS = [
  {
    title: "Concentric Ellipses",
    description:
      "60 ellipses are drawn each frame, each with depth-scaled radius, rotation speed, and squash ratio. Outer rings rotate slowly while inner rings spin fast, creating the spiralling tunnel illusion.",
  },
  {
    title: "Chromatic Gradient",
    description:
      "Hue shifts from cyan (190) at the outer edge to rose (330) at the core. Saturation and lightness also scale with depth, producing a vivid chromatic tunnel effect.",
  },
  {
    title: "Cursor Interaction",
    description:
      "Mouse position offsets the vortex center by up to 50 pixels, giving the feeling of steering the tunnel. The offset is smoothly interpolated each frame for fluid motion.",
  },
  {
    title: "Canvas 2D Rendering",
    description:
      "Pure Canvas 2D API — no WebGL, no libraries. Each ellipse is drawn with ctx.ellipse() using rotation, squash, and opacity calculated from its depth index.",
  },
];

export default function VortexPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, tX: 0, tY: 0 });
  const frozenRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const canvasScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = window.innerWidth * dpr;
      canvasEl.height = window.innerHeight * dpr;
      canvasEl.style.width = `${window.innerWidth}px`;
      canvasEl.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const RING_COUNT = 60;

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const maxRadius = Math.max(w, h) * 0.6;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.tX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.tY - mouseRef.current.y) * 0.05;

      // Vortex center offset by cursor
      const cx = w / 2 + (mouseRef.current.x - w / 2) * 0.1;
      const cy = h / 2 + (mouseRef.current.y - h / 2) * 0.1;

      // Check if frozen (scrolled)
      const scrollY = window.scrollY;
      frozenRef.current = scrollY > 100;

      if (!frozenRef.current) {
        timeRef.current += 0.008;
      }

      const time = timeRef.current;

      ctx.clearRect(0, 0, w, h);

      // Draw from outermost to innermost
      for (let i = 0; i < RING_COUNT; i++) {
        const depth = i / RING_COUNT;
        const radius = (1 - depth) * maxRadius;
        const opacity = 0.05 + depth * 0.4;
        const rotation = time * (0.5 + depth * 2) + i * 0.1;
        const squash = 0.6 + depth * 0.3;

        const hue = 190 + depth * 140;
        const sat = 70 + depth * 30;
        const light = 40 + depth * 20;

        ctx.beginPath();
        ctx.ellipse(cx, cy, radius, radius * squash, rotation, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`;
        ctx.lineWidth = 0.5 + depth * 2;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current.tX = e.clientX;
      mouseRef.current.tY = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current.tX = e.touches[0].clientX;
        mouseRef.current.tY = e.touches[0].clientY;
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* Canvas — fixed full viewport */}
      <motion.canvas
        ref={canvasRef}
        className="fixed inset-0"
        style={{ zIndex: 0, scale: isMounted ? canvasScale : 1 }}
      />

      {/* Hero text overlay */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen pt-16 pb-20 px-4">
        <div className="text-center pointer-events-none select-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[60px] md:text-[80px] font-black text-white leading-none"
            style={{
              animation: "vortexPulse 10s ease-in-out infinite",
            }}
          >
            VORTEX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-6 text-[10px] text-white/20 tracking-[0.3em] uppercase"
          >
            60 ellipses &middot; Depth rotation &middot; Chromatic gradient
          </motion.p>
        </div>
      </section>

      {/* Scroll section — info cards */}
      <section className="relative z-10 pt-16 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur border border-white/[0.05] rounded-2xl p-6"
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

      {/* CSS animation for text pulse */}
      <style jsx global>{`
        @keyframes vortexPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}
