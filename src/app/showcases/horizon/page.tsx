"use client";

import { useEffect, useRef, useState } from "react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizonShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.3]);

  return (
    <div ref={sectionRef} className="relative">
      {/* GLSL Hills Background — fixed behind everything */}
      <div className="fixed inset-0 z-0">
        <GLSLHills speed={0.3} cameraZ={140} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="text-center pointer-events-none"
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 mb-6">
            Three.js &middot; GLSL Shaders &middot; Perlin Noise
          </p>
          <h1 className="text-[60px] md:text-[100px] lg:text-[140px] font-black text-white tracking-tighter leading-none">
            HORIZON
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/30 max-w-md mx-auto leading-relaxed">
            Procedural terrain generated in real-time on the GPU.
            Every frame is unique. Every hill is mathematics.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/15">Scroll</span>
          <div className="w-px h-8 bg-white/10 relative overflow-hidden">
            <div className="w-full bg-white/30 absolute" style={{ height: "30%", animation: "sc-s 2s ease-in-out infinite" }} />
          </div>
        </motion.div>
      </section>

      {/* Content section below */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-white/40 leading-relaxed mb-12">
              A 256&times;256 plane geometry with vertices displaced by 3-octave
              Perlin noise, computed entirely in the vertex shader. The camera
              drifts forward automatically, creating the illusion of infinite
              rolling terrain. No pre-made models. No heightmaps. Pure math.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Vertex Displacement", desc: "65,536 vertices repositioned every frame by a Perlin noise function running on the GPU at 60fps." },
              { title: "Perlin Noise", desc: "Three octaves of classic Perlin noise layered at different frequencies create organic, natural-looking terrain." },
              { title: "GLSL Shaders", desc: "Custom vertex and fragment shaders written in GLSL. The CPU does nothing — all computation happens on the graphics card." },
              { title: "Transparency", desc: "Fragment shader calculates opacity based on distance from center, creating a natural fade at the terrain edges." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] rounded-2xl p-6 hover:border-white/[0.08] transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technique pills */}
      <section className="relative z-10 py-16 px-6 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {["THREE.JS", "RAWSHADERMAT", "PERLIN NOISE", "VERTEX DISPLACEMENT", "256² GRID", "60FPS GPU"].map(t => (
            <span key={t} className="text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 border border-white/[0.06] rounded-full text-white/20">
              {t}
            </span>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes sc-s { 0%,100% { top: 0; } 50% { top: 70%; } }
      `}</style>
    </div>
  );
}
