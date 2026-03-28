"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const artworks = [
  {
    title: "Fragments of Light",
    artist: "Mara Delacroix",
    medium: "Oil on canvas",
    year: "2024",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=85",
  },
  {
    title: "Urban Pulse",
    artist: "Kai Tanaka",
    medium: "Mixed media",
    year: "2025",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=85",
  },
  {
    title: "Chromatic Reverie",
    artist: "Lena Sorensen",
    medium: "Acrylic on linen",
    year: "2025",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=85",
  },
  {
    title: "Silent Form",
    artist: "Julian Vassallo",
    medium: "Bronze sculpture",
    year: "2023",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=85",
  },
  {
    title: "Parallel Worlds",
    artist: "Sofia Chen",
    medium: "Photography",
    year: "2025",
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&q=85",
  },
  {
    title: "Entropy Garden",
    artist: "Niko Alvarez",
    medium: "Installation",
    year: "2024",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=85",
  },
];

const upcomingExhibitions = [
  {
    title: "The Weight of Absence",
    artist: "Freya Lindqvist",
    dates: "15 May \u2013 28 July 2026",
    description: "An immersive exploration of memory and loss through large-scale textile works and sound installations.",
  },
  {
    title: "Concrete Poetry",
    artist: "Tomasz Wierzbicki",
    dates: "10 August \u2013 30 September 2026",
    description: "Monumental concrete sculptures that challenge the boundary between architecture and fine art.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const serifFont = "'Didot', 'Bodoni MT', 'Playfair Display', serif";

export default function GalleryDemo() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white text-center py-2 text-sm">
        This is an <strong>AMENZO</strong> design preview.{" "}
        <a href="/work" className="underline font-medium opacity-80 hover:opacity-100">View All Previews</a>{" \u00b7 "}<a href="/start-project?industry=Other&service=new-website&ref=Atelier+Noir+Gallery" className="underline font-semibold">Get a Quote &rarr;</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-40 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/demos/gallery" className="text-[15px] tracking-[0.35em] uppercase font-extralight text-[#1A1A1A]" style={{ fontFamily: serifFont }}>
            Atelier Noir
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A]/50">
            {["Exhibitions", "Artists", "Visit", "Shop"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#1A1A1A] transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen pt-10">
        <Image
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&q=85"
          alt="Gallery interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.4em] uppercase text-[#B8860B] mb-6 font-medium"
          >
            March 2026 &mdash; Now Open
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-extralight italic leading-[1.05]"
            style={{ fontFamily: serifFont }}
          >
            Between Light<br />&amp; Shadow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-[13px] tracking-[0.15em] text-white/60"
          >
            A retrospective by Mara Delacroix
          </motion.p>
        </div>
      </section>

      {/* Current Exhibition */}
      <section id="exhibitions" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#B8860B] mb-4 font-medium">Current Exhibition</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=85"
                  alt="Current exhibition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-extralight italic leading-tight mb-6" style={{ fontFamily: serifFont }}>
                Between Light<br />&amp; Shadow
              </h2>
              <p className="text-[13px] tracking-[0.15em] text-[#B8860B] uppercase mb-4 font-medium">
                Mara Delacroix
              </p>
              <p className="text-[13px] text-[#1A1A1A]/40 tracking-wider mb-8">
                1 March &ndash; 30 June 2026
              </p>
              <p className="text-[15px] leading-[1.9] text-[#1A1A1A]/65 mb-8 max-w-md">
                Delacroix&apos;s most ambitious body of work to date explores the tension between illumination and obscurity. Across thirty paintings and twelve sculptures, the artist interrogates how light shapes perception, memory, and emotional truth.
              </p>
              <p className="text-[15px] leading-[1.9] text-[#1A1A1A]/65 max-w-md">
                This exhibition marks the artist&apos;s first major solo presentation in the Mediterranean, bringing together works created over the past five years alongside a series of new site-specific pieces conceived for the gallery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#1A1A1A]/10" />
      </div>

      {/* Collection */}
      <section id="artists" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#B8860B] mb-4 font-medium">Collection</p>
            <h2 className="text-3xl md:text-4xl font-extralight italic" style={{ fontFamily: serifFont }}>
              Selected Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((work, i) => (
              <motion.div
                key={work.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div>
                      <p className="text-white text-[13px] font-medium">{work.title}</p>
                      <p className="text-white/60 text-[11px] mt-1">{work.medium}, {work.year}</p>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] font-medium text-[#1A1A1A]">{work.artist}</p>
                <p className="text-[11px] text-[#1A1A1A]/40 mt-1 italic" style={{ fontFamily: serifFont }}>{work.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#1A1A1A]/10" />
      </div>

      {/* Upcoming Exhibitions */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#B8860B] mb-4 font-medium">Upcoming</p>
            <h2 className="text-3xl md:text-4xl font-extralight italic" style={{ fontFamily: serifFont }}>
              Future Exhibitions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {upcomingExhibitions.map((exhibition, i) => (
              <motion.div
                key={exhibition.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-t border-[#1A1A1A]/10 pt-8"
              >
                <p className="text-[11px] tracking-[0.2em] text-[#B8860B] uppercase mb-3 font-medium">{exhibition.dates}</p>
                <h3 className="text-2xl font-extralight italic mb-2" style={{ fontFamily: serifFont }}>{exhibition.title}</h3>
                <p className="text-[13px] font-medium text-[#1A1A1A]/60 mb-4">{exhibition.artist}</p>
                <p className="text-[14px] leading-[1.8] text-[#1A1A1A]/50">{exhibition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#1A1A1A]/10" />
      </div>

      {/* Visit */}
      <section id="visit" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#B8860B] mb-4 font-medium">Plan Your Visit</p>
            <h2 className="text-3xl md:text-4xl font-extralight italic" style={{ fontFamily: serifFont }}>
              Visit the Gallery
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-5"
              >
                <Clock size={18} className="text-[#B8860B] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[13px] font-medium tracking-wide mb-2">Opening Hours</h4>
                  <p className="text-[13px] text-[#1A1A1A]/45 leading-relaxed">
                    Tuesday &ndash; Sunday: 10:00 &ndash; 19:00<br />
                    Thursday late opening until 21:00<br />
                    Monday: Closed
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start gap-5"
              >
                <MapPin size={18} className="text-[#B8860B] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[13px] font-medium tracking-wide mb-2">Address</h4>
                  <p className="text-[13px] text-[#1A1A1A]/45 leading-relaxed">
                    42 Republic Street<br />
                    Valletta VLT 1112, Malta
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-5"
              >
                <Mail size={18} className="text-[#B8860B] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[13px] font-medium tracking-wide mb-2">Contact</h4>
                  <p className="text-[13px] text-[#1A1A1A]/45 leading-relaxed">
                    info@ateliernoir.com<br />
                    +356 2124 5678
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-5"
              >
                <Phone size={18} className="text-[#B8860B] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[13px] font-medium tracking-wide mb-2">Admission</h4>
                  <p className="text-[13px] text-[#1A1A1A]/45 leading-relaxed">
                    General: &euro;12 &middot; Concession: &euro;8<br />
                    Under 18: Free &middot; Members: Free<br />
                    Free entry first Sunday of every month
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden border border-[#1A1A1A]/10 aspect-[4/3]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3232.5!2d14.5148!3d35.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smt!4v1700000000000!5m2!1sen!2smt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atelier Noir Gallery Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A]/10 py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[13px] tracking-[0.35em] uppercase font-extralight mb-1" style={{ fontFamily: serifFont }}>
                Atelier Noir
              </p>
              <p className="text-[#1A1A1A]/30 text-[11px]">Contemporary Art &middot; Valletta, Malta</p>
            </div>
            <div className="flex gap-8 text-[11px] tracking-[0.15em] uppercase text-[#1A1A1A]/30">
              <a href="#exhibitions" className="hover:text-[#1A1A1A] transition-colors">Exhibitions</a>
              <a href="#artists" className="hover:text-[#1A1A1A] transition-colors">Artists</a>
              <a href="#visit" className="hover:text-[#1A1A1A] transition-colors">Visit</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#1A1A1A]/5 text-center">
            <p className="text-[#1A1A1A]/20 text-[11px] leading-relaxed">
              This is a fictional demo website created by <a href="https://amenzo.com" className="underline hover:text-[#1A1A1A]/40">Amenzo</a> to showcase web design capabilities. Atelier Noir Gallery is not a real business. All artist names and exhibition titles are fictional. Images from Unsplash.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
