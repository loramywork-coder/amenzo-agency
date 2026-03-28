"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=85", title: "Presence", category: "PORTRAIT", tall: true },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85", title: "Radiance", category: "EDITORIAL", tall: false },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=85", title: "Grace", category: "FASHION", tall: true },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=85", title: "Poise", category: "FASHION", tall: false },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=85", title: "Luminance", category: "EDITORIAL", tall: false },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=85", title: "Warmth", category: "PORTRAIT", tall: true },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85", title: "Character", category: "COMMERCIAL", tall: false },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=85", title: "Edge", category: "FASHION", tall: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" as const } },
};

export default function PortfolioDemo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Futura', 'Century Gothic', 'Avant Garde', sans-serif" }}>
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/work" className="underline font-medium opacity-80 hover:opacity-100">View All Previews</a>{" · "}<a href="/start-project?industry=Other&service=new-website&ref=Elena+Voss+Photography" className="underline font-semibold">Get a Quote &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/demos/portfolio" className="text-[13px] font-light tracking-[0.35em] text-white uppercase">
            Elena Voss
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500 uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&q=85"
            alt="Elena Voss Photography"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[11px] tracking-[0.4em] text-white/50 uppercase mb-6"
          >
            Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-[0.1em] uppercase"
          >
            Elena Voss
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-16 h-px bg-white/30 mt-8"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-white/20 mx-auto mb-2 animate-pulse" />
          <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase">Scroll</p>
        </motion.div>
      </section>

      {/* Categories */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <p className="text-[11px] tracking-[0.4em] text-white/30">
          EDITORIAL &middot; FASHION &middot; PORTRAIT &middot; COMMERCIAL
        </p>
      </motion.section>

      {/* Selected Work */}
      <section id="work" className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.3em] text-white/30 uppercase mb-16 text-center"
          >
            Selected Work
          </motion.p>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative break-inside-avoid overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"} overflow-hidden`}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-500 ${
                      hoveredIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase mb-2">{img.category}</p>
                    <p className="text-lg font-extralight tracking-[0.15em] uppercase">{img.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.3em] text-white/30 uppercase mb-10"
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extralight leading-relaxed mb-8"
          >
            Capturing the quiet power in every face, every moment, every frame.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#999] text-base leading-relaxed mb-6"
          >
            Elena Voss is a Valletta-based photographer specializing in editorial, fashion, and portrait photography. With over a decade of experience working with leading publications, brands, and creative agencies across Europe, her work is defined by its intimacy, restraint, and timeless sensibility.
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.3em] text-white/30 uppercase"
          >
            Available for commissions worldwide
          </motion.p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.3em] text-white/30 uppercase mb-10"
          >
            Contact
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href="mailto:hello@elenavoss.com"
              className="block text-2xl md:text-3xl font-extralight text-white hover:text-[#999] transition-colors duration-500"
            >
              hello@elenavoss.com
            </a>
            <a
              href="https://instagram.com/elenavoss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.3em] text-white/40 hover:text-white transition-colors duration-500 uppercase"
            >
              Instagram &rarr;
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-white/5">
        <div className="w-full h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12960.0!2d14.5148!3d35.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smt!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(30%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Valletta, Malta"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5 text-center">
        <p className="text-[10px] tracking-[0.2em] text-white/20 uppercase mb-4">
          &copy; {new Date().getFullYear()} Elena Voss Photography. All rights reserved.
        </p>
        <p className="text-[9px] text-white/10 max-w-md mx-auto">
          This is a fictional portfolio created as a design preview by Amenzo. All images are from Unsplash and used for demonstration purposes only.
        </p>
      </footer>
    </div>
  );
}
