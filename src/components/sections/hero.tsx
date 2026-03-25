"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";

const tickerItems = [
  "Web Design",
  "Development",
  "Branding",
  "E-Commerce",
  "SEO",
  "UI/UX",
  "Hotels",
  "Restaurants",
  "Enterprise",
  "Startups",
  "Apps",
  "Strategy",
];

function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      time += 0.005;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Gradient orbs
      const orbs = [
        {
          x: width * (0.3 + Math.sin(time * 0.7) * 0.1 + (mx - 0.5) * 0.15),
          y: height * (0.4 + Math.cos(time * 0.5) * 0.1 + (my - 0.5) * 0.1),
          r: Math.min(width, height) * 0.35,
          color: "rgba(124, 58, 237, 0.08)",
        },
        {
          x: width * (0.7 + Math.cos(time * 0.6) * 0.1 + (mx - 0.5) * 0.1),
          y: height * (0.6 + Math.sin(time * 0.4) * 0.1 + (my - 0.5) * 0.15),
          r: Math.min(width, height) * 0.3,
          color: "rgba(6, 182, 212, 0.06)",
        },
        {
          x: width * (0.5 + Math.sin(time * 0.3) * 0.15),
          y: height * (0.3 + Math.cos(time * 0.7) * 0.1),
          r: Math.min(width, height) * 0.25,
          color: "rgba(124, 58, 237, 0.04)",
        },
      ];

      orbs.forEach((orb) => {
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-bg overflow-hidden">
      {/* Background gradient mesh */}
      {mounted && <GradientMesh />}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-wide text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display font-bold text-text-primary mb-8">
            <TextReveal delay={0.3}>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight">
                We design websites
              </span>
            </TextReveal>
            <TextReveal delay={0.5}>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight">
                that make businesses
              </span>
            </TextReveal>
            <TextReveal delay={0.7}>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight gradient-text">
                impossible to ignore.
              </span>
            </TextReveal>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Premium web design, development & digital agency based in Malta.
          From startups to enterprises — we build digital experiences that
          drive results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/work" variant="outline" size="lg" magnetic>
            See Our Work
            <ArrowRight size={18} />
          </Button>
          <Button href="/start-project" size="lg" magnetic>
            Start a Project
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-border/50 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 text-sm font-medium text-text-muted uppercase tracking-widest flex items-center gap-6"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-violet/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
