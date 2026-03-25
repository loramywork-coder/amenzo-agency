"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Animated neural network canvas
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // Draw connections
      const maxDist = 160;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.fillStyle = "rgba(124, 58, 237, 0.5)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", () => { init(); });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[2]"
      aria-hidden="true"
    />
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#040410]" />

      {/* Gradient blobs behind the network */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Neural network canvas */}
      <NeuralCanvas />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[3]"
        style={{ background: "radial-gradient(ellipse at center, transparent 20%, #040410 80%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center container-wide text-center px-6 pb-32 pt-28">
        <h1 className="font-display font-bold max-w-[800px] mx-auto mb-6">
          <RevealLine delay={0.4}>
            <span className="block text-[36px] sm:text-[46px] md:text-[56px] lg:text-[66px] leading-[1.05] tracking-[-0.03em] text-white text-center">
              We build digital <span className="gradient-text italic">experiences.</span>
            </span>
          </RevealLine>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-8 bg-violet/40" />
          <p className="text-[14px] md:text-[15px] text-white/40 tracking-wide">
            Code &middot; Craft &middot; Conversion
          </p>
          <div className="h-px w-8 bg-cyan/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/work"
            className="px-8 py-4 rounded-lg border border-white/12 text-white/90 text-[12px] uppercase tracking-[0.14em] font-semibold hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300"
          >
            View Work
          </Link>
          <Link
            href="/start-project"
            className="group px-8 py-4 rounded-lg text-white text-[12px] uppercase tracking-[0.14em] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            Start a Project
            <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="relative z-10 flex justify-center pb-8"
      >
        <div className="scroll-indicator-line" />
      </motion.div>
    </section>
  );
}
