"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  const imageY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Layer 1: Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Layer 2: Gradient mesh blobs for color depth */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Layer 3: Vignette overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Subtle grain texture */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center container-wide text-center pb-36 pt-28">
        {/* Pre-headline tag */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[0.2em] text-[#888] font-medium mb-8"
        >
          Premium Web Design Agency — Malta
        </motion.p>

        {/* Headline */}
        <h1 className="font-display font-bold max-w-[900px] mx-auto mb-8">
          <RevealLine delay={0.4}>
            <span className="block text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] text-white">
              We design websites
            </span>
          </RevealLine>
          <RevealLine delay={0.6}>
            <span className="block text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] text-white">
              that make businesses
            </span>
          </RevealLine>
          <RevealLine delay={0.8}>
            <span className="block text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] gradient-text italic">
              impossible to ignore.
            </span>
          </RevealLine>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-[17px] md:text-[18px] text-[#999] max-w-[520px] mx-auto mb-12 leading-[1.7]"
        >
          Premium web design, development & digital services. From startups
          to enterprises — we build digital experiences that drive results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link
            href="/work"
            className="px-10 py-[18px] border border-white/20 text-white text-[13px] uppercase tracking-[0.12em] font-bold hover:border-white/60 hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-2"
          >
            See Our Work
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/start-project"
            className="group px-10 py-[18px] text-white text-[13px] uppercase tracking-[0.12em] font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            Start a Project
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
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
