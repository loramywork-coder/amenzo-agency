"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-2">
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col">
      {/* No video, no overlay — neural vortex shader IS the background */}

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center container-wide text-center px-6 pb-32 pt-28">
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none max-w-4xl mx-auto">
          <RevealLine delay={0.3}>
            Where Code Meets Craft.
          </RevealLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 text-base md:text-lg text-white/40 tracking-wide uppercase font-medium mb-10"
        >
          Custom-built websites that make businesses impossible to ignore
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/start-project"
            className="px-8 py-3.5 bg-white text-[#0A0A0A] text-sm font-medium uppercase tracking-wide rounded-full hover:bg-white/90 hover:scale-[1.02] transition-all duration-200"
          >
            Start a Project
          </Link>
          <Link
            href="/work"
            className="px-8 py-3.5 border border-white/25 text-white/90 text-sm font-medium uppercase tracking-wide rounded-full hover:border-white hover:bg-white/5 transition-all duration-200"
          >
            View Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="relative z-10 flex flex-col items-center pb-8 gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-medium">Scroll to explore</span>
        <div className="scroll-indicator-line" />
      </motion.div>
    </section>
  );
}
