"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  "DEVELOPMENT",
  "BRANDING",
  "E-COMMERCE",
  "SEO",
  "UI/UX",
  "STRATEGY",
];

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg">
      {/* Gradient mesh — pure CSS, GPU accelerated */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-blob hero-blob-4" />
      </div>

      {/* Main content — vertically centered in available space */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center container-wide text-center pb-32 pt-24">
        {/* Headline */}
        <h1 className="font-display font-bold max-w-[900px] mx-auto mb-8">
          <RevealLine delay={0.4}>
            <span className="block text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-text-primary">
              We design websites
            </span>
          </RevealLine>
          <RevealLine delay={0.55}>
            <span className="block text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-text-primary">
              that make businesses
            </span>
          </RevealLine>
          <RevealLine delay={0.7}>
            <span className="block text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] gradient-text">
              impossible to ignore.
            </span>
          </RevealLine>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[16px] md:text-[17px] text-text-secondary max-w-[520px] mx-auto mb-10 leading-[1.7]"
        >
          Premium web design, development & digital agency based in Malta.
          From startups to enterprises — we build digital experiences that
          drive results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link
            href="/work"
            className="px-9 py-4 border border-white/15 text-text-primary text-[13px] uppercase tracking-[0.15em] font-medium hover:border-white/40 hover:bg-white/[0.03] transition-all duration-300"
          >
            See Our Work
          </Link>
          <Link
            href="/start-project"
            className="group relative px-9 py-4 text-white text-[13px] uppercase tracking-[0.15em] font-medium overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom area — capability strip + scroll indicator, pinned to bottom */}
      <div className="relative z-10 pb-8">
        {/* Capability strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-0 flex-wrap">
            {capabilities.map((cap, i) => (
              <span key={cap} className="flex items-center">
                {i > 0 && (
                  <span className="text-[8px] text-[#333] px-4 select-none">·</span>
                )}
                <span className="text-[11px] uppercase tracking-[0.3em] text-text-muted hover:text-text-primary transition-colors duration-300">
                  {cap}
                </span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="flex justify-center"
        >
          <div className="scroll-indicator-line" />
        </motion.div>
      </div>
    </section>
  );
}
