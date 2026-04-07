"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code, RefreshCw, ShoppingCart, Search, Server, CodeXml, LayoutTemplate, CircleSlash, Gauge, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import HeroBackground from "@/components/hero-background";
import Reveal from "@/components/demos/Reveal";
import Counter from "@/components/demos/Counter";
import { GooeyReveal } from "@/components/ui/gooey-reveal";

/* ─── data ─── */

const projects = [
  { num: "01", name: "Grand Harbour Hotel", desc: "10-page luxury hotel with virtual tours & booking", cat: "HOSPITALITY", slug: "hotel" },
  { num: "02", name: "Porto Valletta", desc: "9-page fine dining with reservations & tasting menus", cat: "GASTRO", slug: "restaurant" },
  { num: "03", name: "Mediterranean Living", desc: "8-page property agency with listings & area guides", cat: "REAL ESTATE", slug: "realestate" },
  { num: "04", name: "Dr. Vella Dental", desc: "8-page dental clinic with booking & treatments", cat: "HEALTHCARE", slug: "dental" },
  { num: "05", name: "FitZone", desc: "8-page fitness gym with classes & membership", cat: "FITNESS", slug: "fitness" },
  { num: "06", name: "Atelier Noir", desc: "7-page art gallery with exhibitions & artists", cat: "ART & CULTURE", slug: "gallery" },
  { num: "07", name: "Nova Space", desc: "9-page deep-tech startup with mission log & investor deck", cat: "SPACE TECH", slug: "startup" },
  { num: "08", name: "Meridian Capital", desc: "9-page global fintech with 3D globe & live data", cat: "FINTECH", slug: "fintech" },
  { num: "09", name: "Studio Ēlan", desc: "9-page editorial interior design portfolio", cat: "INTERIOR", slug: "interior" },
];

const showcases = [
  { name: "Liquid Aurora", technique: "WebGL Shader", slug: "aurora", desc: "GPU-powered flowing gradients that react to your cursor" },
  { name: "Constellation", technique: "Particle Field", slug: "particles", desc: "400 interactive particles with real-time connections" },
  { name: "Topography", technique: "Three.js 3D", slug: "terrain", desc: "Procedural wireframe terrain generated on the GPU" },
  { name: "Chronology", technique: "Scroll Cinema", slug: "scroll", desc: "5-phase scroll-driven cinematic storytelling" },
  { name: "Spotlight Cards", technique: "9 Hover Effects", slug: "cards", desc: "Interactive card patterns with cursor-reactive effects" },
  { name: "Film Noir", technique: "Cinematic B&W", slug: "noir", desc: "High-contrast monochrome with animated film grain" },
];

/* Mini animated CSS previews for showcase cards */
function AuroraPreview() {
  return (<>
    <div className="absolute w-28 h-28 rounded-full top-2 left-4 opacity-[0.25]" style={{background:"#3b3bf6",filter:"blur(35px)",animation:"sc-a 5s ease-in-out infinite alternate"}}/>
    <div className="absolute w-24 h-24 rounded-full top-6 right-8 opacity-[0.2]" style={{background:"#8b3aed",filter:"blur(30px)",animation:"sc-b 7s ease-in-out infinite alternate"}}/>
    <div className="absolute w-20 h-20 rounded-full bottom-16 left-1/3 opacity-[0.15]" style={{background:"#c026d3",filter:"blur(28px)",animation:"sc-c 9s ease-in-out infinite alternate"}}/>
  </>);
}
function ParticlesPreview() {
  return (<>
    {Array.from({length:18},(_,i)=>(
      <div key={i} className="absolute w-[3px] h-[3px] rounded-full bg-white" style={{left:`${8+(i*5)%84}%`,top:`${10+(i*13)%55}%`,opacity:0.1+(i%5)*0.08,animation:`sc-f ${2.5+i%3}s ease-in-out ${i*0.15}s infinite alternate`}}/>
    ))}
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 100 70"><line x1="12" y1="20" x2="40" y2="30" stroke="white" strokeWidth="0.4"/><line x1="40" y1="30" x2="65" y2="18" stroke="white" strokeWidth="0.4"/><line x1="55" y1="45" x2="80" y2="35" stroke="white" strokeWidth="0.4"/><line x1="25" y1="50" x2="50" y2="42" stroke="white" strokeWidth="0.4"/></svg>
  </>);
}
function TerrainPreview() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 140 70" fill="none">
      {Array.from({length:8},(_,i)=>(
        <path key={i} d={`M0 ${30+i*4} Q25 ${20+i*4+Math.sin(i*1.5)*7} 50 ${28+i*4} Q75 ${36+i*4-Math.cos(i)*5} 100 ${30+i*4} Q125 ${24+i*4+Math.sin(i+1)*4} 140 ${30+i*4}`} stroke="white" strokeWidth="0.4" opacity={0.2+i*0.08}/>
      ))}
    </svg>
  );
}
function ScrollPreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <span className="text-[28px] font-black text-white/[0.06] tracking-tight">SCROLL</span>
        <div className="w-[1px] h-10 bg-white/10 relative overflow-hidden rounded-full">
          <div className="w-full bg-white/40 rounded-full absolute" style={{height:"30%",animation:"sc-s 2s ease-in-out infinite"}}/>
        </div>
      </div>
    </div>
  );
}
function CardsPreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-2 p-8">
      <div className="w-16 h-20 rounded-lg border border-white/[0.08] bg-white/[0.02]" style={{background:"radial-gradient(circle at 60% 40%, rgba(255,255,255,0.05), transparent 60%)"}}/>
      <div className="w-16 h-20 rounded-lg border border-white/[0.08] bg-white/[0.02] -translate-y-2" style={{transform:"perspective(400px) rotateY(-5deg) translateY(-8px)"}}/>
      <div className="w-16 h-20 rounded-lg border border-white/[0.08] bg-white/[0.02]"/>
    </div>
  );
}
function NoirPreview() {
  return (
    <div className="absolute inset-0" style={{background:"radial-gradient(circle, transparent 20%, rgba(0,0,0,0.7) 100%)"}}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-2xl font-bold text-white/[0.08] block" style={{fontFamily:"Georgia,serif"}}>FILM</span>
          <span className="text-2xl font-bold text-white/[0.04] block" style={{fontFamily:"Georgia,serif"}}>NOIR</span>
        </div>
      </div>
      {/* Grain effect */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:"100px"}}/>
    </div>
  );
}

const showcasePreviews: Record<string, React.ComponentType> = {
  aurora: AuroraPreview, particles: ParticlesPreview, terrain: TerrainPreview,
  scroll: ScrollPreview, cards: CardsPreview, noir: NoirPreview,
};

const steps = [
  { num: "01", title: "Discover", desc: "We learn your business, audience, and goals through a focused discovery call." },
  { num: "02", title: "Design", desc: "We craft wireframes and high-fidelity mockups tailored to your brand identity." },
  { num: "03", title: "Develop", desc: "We hand-code every page with React, ensuring speed and pixel-perfect results." },
  { num: "04", title: "Launch", desc: "We deploy, test across devices, and hand over everything with full ownership." },
];

const services = [
  { title: "Website Redesign", price: "From \u20AC1,500", icon: RefreshCw },
  { title: "E-Commerce", price: "From \u20AC2,500", icon: ShoppingCart },
  { title: "SEO Optimisation", price: "\u20AC300/mo", icon: Search },
  { title: "Hosting & Support", price: "\u20AC80/mo", icon: Server },
];

const stats = [
  { target: 95, suffix: "+", label: "LIGHTHOUSE SCORE" },
  { target: 2, label: "WEEK DELIVERY", suffix: "" },
  { target: 5, label: "SERVICES", suffix: "" },
  { target: 100, suffix: "%", label: "CUSTOM CODE" },
];

const techStack = [
  { name: "Next.js", icon: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
  )},
  { name: "React", icon: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.846.206-1.31.749-1.649 3.168-.856 6.133-2.97.851-4.891 2.204-4.891 3.657 0 1.464 1.944 2.838 4.94 3.694-.793 2.932-.445 5.323.856 6.065.254.14.54.21.846.21 1.347 0 3.108-.962 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .592-.069.846-.207 1.31-.75 1.649-3.168.856-6.133 2.969-.85 4.89-2.204 4.89-3.657 0-1.46-1.938-2.83-4.93-3.683.793-2.94.446-5.33-.856-6.07a1.606 1.606 0 0 0-.846-.207zM7.293 14.188c-.083-.262-.167-.527-.247-.794a33.523 33.523 0 0 0 1.85-.572 34.238 34.238 0 0 0 .86 1.482c-.633.11-1.27.194-1.907.255a12.88 12.88 0 0 1-.556-.37zm10.007-3.867c-.055-.175-.112-.35-.172-.524a34.146 34.146 0 0 0 1.665-.735c.214.59.388 1.183.516 1.77a25.398 25.398 0 0 1-2.009-.511zm-1.36-2.415c-.398-.69-.818-1.355-1.258-1.991.846-.069 1.67-.086 2.464-.05a22.396 22.396 0 0 1-.612 2.108 36.213 36.213 0 0 0-.594-.067zm-4.93.016a34.216 34.216 0 0 0-.593.065 23.204 23.204 0 0 1-.617-2.123c.802-.04 1.634-.022 2.487.053a33.289 33.289 0 0 0-1.278 2.005zm2.494 4.97a33.665 33.665 0 0 0 1.262-2.03c.206.02.413.037.62.053a23.002 23.002 0 0 1 .62 2.138c-.854.035-1.686.014-2.502-.16zm-5.212-3.616c.34-.767.718-1.527 1.13-2.271.182.308.368.62.558.934.19.314.384.627.58.938a34.735 34.735 0 0 1-2.268.399zm4.412 4.416c-.446-.5-.898-1.03-1.348-1.587.445.02.896.03 1.348.03.458 0 .915-.012 1.367-.034a30.707 30.707 0 0 1-1.367 1.591zm-1.106-3.746a32.65 32.65 0 0 1-1.543-2.615 32.652 32.652 0 0 1 1.543-2.614c.512-.84 1.04-1.636 1.575-2.384a32.37 32.37 0 0 1 1.577 2.387c.527.865 1.031 1.738 1.5 2.608a32.244 32.244 0 0 1-1.5 2.618 32.496 32.496 0 0 1-1.577 2.386c-.533-.745-1.06-1.537-1.575-2.386zm6.93.174a35.29 35.29 0 0 0-.575-.93 35.22 35.22 0 0 0-.558-.94 33.768 33.768 0 0 1 2.253-.393c-.34.78-.72 1.545-1.12 2.263zM12 22.784c-.285-.295-.582-.612-.882-.95a1.783 1.783 0 0 1-.154-.022c.51-.572 1.021-1.19 1.527-1.859.094.014.188.026.282.038a30.72 30.72 0 0 1-1.382 1.932c.212.3.406.578.609.86zm5.438-14.37c1.774.64 3.084 1.567 3.084 2.586 0 1.04-1.342 1.983-3.152 2.63.247-.793.44-1.623.574-2.482.133-.852.205-1.733.213-2.617a12.11 12.11 0 0 0-.72-.116z"/></svg>
  )},
  { name: "TypeScript", icon: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
  )},
  { name: "Tailwind CSS", icon: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
  )},
  { name: "Framer Motion", icon: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>
  )},
  { name: "Vercel", icon: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 22.525H0l12-21.05z"/></svg>
  )},
];

const trustItems = [
  { label: "Hand-Crafted Code", icon: CodeXml },
  { label: "No Templates", icon: LayoutTemplate },
  { label: "No WordPress", icon: CircleSlash },
  { label: "Lighthouse 95+", icon: Gauge },
  { label: "Delivered in Weeks", icon: Clock },
  { label: "Clients Worldwide", icon: Globe },
];

/* ─── component ─── */

export function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative flex items-center justify-center min-h-screen">
        <HeroBackground />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <Reveal type="fade" delay={0.1}>
            <p className="text-[12px] sm:text-[11px] text-white/70 tracking-[0.3em] sm:tracking-[0.5em] uppercase font-semibold mb-10 sm:mb-8">
              Web Design Studio
            </p>
          </Reveal>
          <Reveal type="fade" delay={0.2}>
            <h1
              className="font-bold text-white tracking-[-0.01em] leading-[1.02] font-display"
              style={{ fontSize: "clamp(54px, 14vw, 90px)" }}
            >
              Where Code<br />Meets Craft
            </h1>
          </Reveal>
          <Reveal type="fade" delay={0.5}>
            <p className="text-base sm:text-sm text-white/75 max-w-[300px] sm:max-w-xs mx-auto mt-7 sm:mt-8 leading-relaxed tracking-wide">
              We build websites that make businesses impossible to ignore
            </p>
          </Reveal>
          <Reveal type="fade" delay={0.65}>
            <div className="flex items-center justify-center gap-4 mt-10">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Start a Project <ArrowRight size={14} />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 border border-white/10 text-white/60 text-sm font-medium px-7 py-3 rounded-full hover:border-white/20 hover:text-white/80 transition-colors"
              >
                View Work
              </Link>
            </div>
          </Reveal>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[8px] text-white/45 tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-white/10 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* ── 2. TRUST STRIP ── */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-4 gap-x-2">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon size={14} className="text-white/40" strokeWidth={1.5} />
                  <span className="text-[10px] text-white/60 tracking-[0.15em] uppercase font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SELECTED WORK ── */}
      <section id="work" className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-[9px] text-white/60 tracking-[0.5em] uppercase font-medium mb-4">Portfolio</p>
          </Reveal>
          <GooeyReveal
            text="Selected Work"
            className="text-[52px] font-bold text-white tracking-tight leading-none mb-4"
          />
          <Reveal delay={0.15}>
            <p className="text-[14px] text-white/80 leading-relaxed max-w-md mb-16">
              Interactive, hand-coded websites built for real industries. Each one is a fully navigable demo.
            </p>
          </Reveal>
          <div>
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/demos/${p.slug}`}
                  className="group flex items-center gap-4 md:gap-6 border-b border-white/[0.04] py-6 hover:border-white/[0.1] transition-colors"
                >
                  <span className="text-[11px] font-mono text-white/50 w-8 shrink-0">{p.num}</span>
                  <span className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors w-[200px] md:w-[280px] shrink-0">
                    {p.name}
                  </span>
                  <span className="hidden md:block text-xs text-white/75 flex-1 min-w-0 truncate text-right">{p.desc}</span>
                  <span className="text-[10px] text-white/65 tracking-[0.15em] uppercase shrink-0 w-[100px] text-right">{p.cat}</span>
                  <span className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.05] group-hover:border-white/[0.12] transition-all shrink-0">
                    <ArrowUpRight size={12} className="text-white/50 group-hover:text-white/70 transition-colors" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CAPABILITIES ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-[9px] text-white/60 tracking-[0.5em] uppercase font-medium mb-4">Capabilities</p>
          </Reveal>
          <GooeyReveal
            text="Design Possibilities"
            className="text-[44px] font-bold text-white tracking-tight leading-none mb-6"
          />
          <Reveal delay={0.15}>
            <p className="text-sm text-white/75 max-w-lg mb-14">Interactive experiments that push what&apos;s possible in the browser. Click any to experience it live.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {showcases.map((s, i) => (
              <Reveal key={s.slug} type="fade" delay={i * 0.08}>
                <Link
                  href={`/showcases/${s.slug}`}
                  className="group relative h-48 md:h-56 bg-[#060606] rounded-2xl border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-end p-6 overflow-hidden"
                >
                  {/* Animated preview */}
                  {showcasePreviews[s.slug] && (() => { const P = showcasePreviews[s.slug]; return <P />; })()}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] text-white/65 tracking-[0.15em] uppercase">{s.technique}</span>
                    <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors mt-1">{s.name}</h3>
                    <p className="text-xs text-white/70 mt-1.5 leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="text-center mt-10">
              <Link href="/capabilities" className="text-[11px] text-white/40 hover:text-white/60 tracking-[0.15em] uppercase transition-colors">
                View all capabilities &rarr;
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 5. PROCESS ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-[9px] text-white/60 tracking-[0.5em] uppercase font-medium mb-4">Process</p>
          </Reveal>
          <GooeyReveal
            text="How We Build"
            className="text-[44px] font-bold text-white tracking-tight leading-none mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.1}>
                <div className="space-y-4">
                  <span className="block text-[48px] font-bold text-white/40 leading-none">{s.num}</span>
                  <h3 className="text-[16px] font-bold text-white/90">{s.title}</h3>
                  <p className="text-[13px] text-white/80 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SERVICES ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-[9px] text-white/60 tracking-[0.5em] uppercase font-medium mb-4">Services</p>
          </Reveal>
          <GooeyReveal
            text="What We Build"
            className="text-[44px] font-bold text-white tracking-tight leading-none mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto] gap-3">
            {/* large featured card — spans 2 rows on md+ */}
            <Reveal delay={0.15} className="md:row-span-2">
              <div className="bg-[#0A0A0A] border border-white/[0.04] rounded-2xl p-8 hover:border-white/[0.08] transition-colors flex flex-col justify-between h-full min-h-[280px]">
                <div>
                  <Code size={24} className="text-white/50" />
                  <p className="text-[9px] text-white/25 tracking-[0.3em] uppercase mt-4">
                    Core Service
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white/90 mb-2">
                    Web Design &amp; Development
                  </h3>
                  <p className="text-[13px] text-white/80 leading-relaxed mb-1">
                    Custom-coded websites built from scratch with React and
                    Next.js. No templates, no page builders, no compromises.
                  </p>
                  <p className="text-[13px] text-white/80 leading-relaxed mb-5">
                    Fully responsive, SEO-ready, and performance-optimised
                    out of the box.
                  </p>
                  <p className="text-sm text-white/75 font-medium">From &euro;1,000</p>
                </div>
              </div>
            </Reveal>

            {/* 4 standard service cards */}
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={0.2 + i * 0.05}>
                  <div className="bg-[#0A0A0A] border border-white/[0.04] rounded-2xl p-8 hover:border-white/[0.08] transition-colors h-full">
                    <Icon size={20} className="text-white/35 mb-6" />
                    <h3 className="text-[15px] font-bold text-white/90 mb-1">{s.title}</h3>
                    <p className="text-sm text-white/75">{s.price}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.4}>
            <div className="mt-8">
              <Link href="/pricing" className="text-[13px] text-white/60 hover:text-white/80 transition-colors inline-flex items-center gap-1">
                View full pricing <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. ABOUT ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[9px] text-white/60 tracking-[0.5em] uppercase font-medium mb-4">About</p>
          </Reveal>
          <GooeyReveal
            text="Two people. One obsession."
            className="text-[36px] font-bold text-white tracking-tight leading-tight mb-8 max-w-lg mx-auto"
          />
          <Reveal delay={0.2}>
            <p className="text-[14px] text-white/80 leading-relaxed max-w-lg mx-auto mb-8">
              We&apos;re a two-person studio working with clients worldwide. We pair modern AI
              tools with hand-written code to deliver agency-quality websites at a fraction of
              the cost. Every pixel is intentional. Every interaction is considered.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href="/about" className="text-[13px] text-white/60 hover:text-white/80 transition-colors inline-flex items-center gap-1">
              Learn more about us <ArrowRight size={12} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 8. NUMBERS ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div>
                  <Counter
                    target={s.target}
                    suffix={s.suffix}
                    className="text-[44px] md:text-[50px] font-bold text-white tracking-tight"
                  />
                  <p className="text-[11px] text-white/35 tracking-[0.2em] uppercase mt-2">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. TECH STACK ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[9px] text-white/55 tracking-[0.5em] uppercase font-medium mb-6">Built With</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {techStack.map((t) => (
                <div key={t.name} className="flex items-center gap-2 text-white/60">
                  {t.icon}
                  <span className="text-[12px] tracking-wider">{t.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 11. CTA ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-[40px] md:text-[52px] font-bold text-white tracking-tight leading-tight">
              Ready to build something{" "}
              <span className="text-white/70">extraordinary?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[14px] text-white/80 leading-relaxed max-w-md mx-auto mt-6">
              Tell us about your project and we&apos;ll respond within 24 hours with a free proposal.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Start a Project <ArrowRight size={14} />
              </Link>
              <Link
                href="mailto:info@amenzo.co"
                className="inline-flex items-center gap-2 border border-white/10 text-white/60 text-sm font-medium px-8 py-3.5 rounded-full hover:border-white/20 hover:text-white/80 transition-colors"
              >
                info@amenzo.co
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
