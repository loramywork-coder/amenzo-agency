"use client";

import { useEffect, useRef, useCallback } from "react";

interface Wave {
  amplitude: number;
  frequency: number;
  speed: number;
  color: string;
  phase: number;
}

const BASE_WAVES: Wave[] = [
  { amplitude: 40, frequency: 0.01, speed: 0.02, color: "rgba(255,255,255,0.3)", phase: 0 },
  { amplitude: 30, frequency: 0.015, speed: 0.025, color: "rgba(59,130,246,0.25)", phase: 0 },
  { amplitude: 50, frequency: 0.008, speed: 0.015, color: "rgba(139,92,246,0.2)", phase: 0 },
  { amplitude: 20, frequency: 0.02, speed: 0.03, color: "rgba(236,72,153,0.15)", phase: 0 },
  { amplitude: 35, frequency: 0.012, speed: 0.018, color: "rgba(6,182,212,0.2)", phase: 0 },
];

export default function WavesPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const ripplesRef = useRef<{ x: number; time: number; strength: number }[]>([]);
  const wavesRef = useRef<Wave[]>(BASE_WAVES.map((w) => ({ ...w })));
  const animRef = useRef<number>(0);

  const getWaveY = useCallback(
    (x: number, wave: Wave, centerY: number, ampMul: number, speedMul: number) => {
      let y =
        centerY +
        wave.amplitude *
          ampMul *
          Math.sin(wave.frequency * x + wave.phase * speedMul);

      // Apply ripple effects
      for (const ripple of ripplesRef.current) {
        const dist = Math.abs(x - ripple.x);
        const decay = Math.max(0, 1 - ripple.time / 120);
        const rippleEffect =
          decay * ripple.strength * Math.exp(-dist * 0.003) * Math.sin(dist * 0.05 - ripple.time * 0.1);
        y += rippleEffect;
      }

      return y;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    const onClick = (e: MouseEvent) => {
      ripplesRef.current.push({
        x: e.clientX,
        time: 0,
        strength: 40,
      });
    };
    window.addEventListener("click", onClick);

    const animate = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Background
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#0a0a1a");
      bg.addColorStop(1, "#000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const centerY = height * 0.5;
      const ampMultiplier = 0.5 + (1 - mouseRef.current.y) * 1.5;
      const speedMultiplier = 0.5 + mouseRef.current.x * 2;

      const waves = wavesRef.current;

      // Update phases
      for (const wave of waves) {
        wave.phase += wave.speed * speedMultiplier;
      }

      // Update ripples
      ripplesRef.current = ripplesRef.current
        .map((r) => ({ ...r, time: r.time + 1 }))
        .filter((r) => r.time < 120);

      // Draw waves (back to front)
      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];

        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 2) {
          const y = getWaveY(x, wave, centerY, ampMultiplier, 1);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      }

      // Draw "SINE" text that bobs on waves
      const text = "SINE";
      const fontSize = Math.min(100, width * 0.12);
      ctx.font = `900 ${fontSize}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textWidth = ctx.measureText(text).width;
      const startX = (width - textWidth) / 2;

      for (let c = 0; c < text.length; c++) {
        const charWidth = ctx.measureText(text[c]).width;
        const charX = startX + ctx.measureText(text.slice(0, c)).width + charWidth / 2;

        // Find nearest wave Y (use first wave for bobbing)
        const bobY = getWaveY(charX, waves[0], centerY, ampMultiplier, 1) - fontSize * 0.7;

        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fillText(text[c], charX, bobY);
      }

      // Subtitle
      ctx.font = `400 ${Math.min(18, width * 0.025)}px "Courier New", monospace`;
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.fillText("y = A sin(\u03C9x + \u03C6t)", width / 2, centerY + fontSize * 0.6);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, [getWaveY]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        paddingTop: "4rem",
        paddingBottom: "5rem",
        background: "#000",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          cursor: "crosshair",
        }}
      />
    </div>
  );
}
