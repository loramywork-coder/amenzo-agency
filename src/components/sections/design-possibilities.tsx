"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const showcases = [
  { name: "Liquid Aurora", technique: "Gradient Orbs", slug: "aurora" },
  { name: "Light Beams", technique: "SVG Paths", slug: "beams" },
  { name: "Spotlight", technique: "Cursor Tracking", slug: "spotlight" },
  { name: "Constellation", technique: "Particle Field", slug: "particles" },
  { name: "Vortex", technique: "Spiral Tunnel", slug: "vortex" },
  { name: "Ripple", technique: "Grid Waves", slug: "ripple" },
  { name: "Prism", technique: "Glassmorphism", slug: "glass" },
  { name: "Kinetic", technique: "Typography", slug: "kinetic" },
  { name: "Chronology", technique: "Scroll Cinema", slug: "scroll" },
  { name: "Topography", technique: "Three.js 3D", slug: "terrain" },
  { name: "Mesh", technique: "Gradient Mesh", slug: "mesh" },
  { name: "Metamorphosis", technique: "Shape Morphing", slug: "morph" },
  { name: "Film Noir", technique: "Cinematic B&W", slug: "noir" },
  { name: "Sine", technique: "Math Waves", slug: "waves" },
  { name: "Spotlight Cards", technique: "9 Hover Effects", slug: "cards" },
  { name: "Horizon", technique: "GLSL Terrain", slug: "horizon" },
  { name: "Energy Beam", technique: "WebGL Particles", slug: "energy" },
];

function AuroraP() { return <><div className="absolute w-24 h-24 rounded-full top-3 left-3 opacity-[0.2]" style={{background:"#1e40ff",filter:"blur(30px)",animation:"sc-a 6s ease-in-out infinite alternate"}}/><div className="absolute w-20 h-20 rounded-full bottom-4 right-4 opacity-[0.15]" style={{background:"#7c3aed",filter:"blur(30px)",animation:"sc-b 8s ease-in-out infinite alternate"}}/><div className="absolute w-16 h-16 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" style={{background:"#c026d3",filter:"blur(25px)",animation:"sc-c 10s ease-in-out infinite alternate"}}/></>; }
function BeamsP() { return <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 100 60"><line x1="0" y1="15" x2="100" y2="45" stroke="white" strokeWidth="0.5" strokeDasharray="8 20" style={{animation:"sc-dash 3s linear infinite"}}/><line x1="100" y1="10" x2="0" y2="50" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="8 20" style={{animation:"sc-dash 4s linear infinite"}}/><line x1="50" y1="0" x2="50" y2="60" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="8 20" style={{animation:"sc-dash 5s linear infinite"}}/></svg>; }
function SpotlightP() { return <div className="absolute inset-0" style={{background:"radial-gradient(circle 60px at 40% 40%, rgba(255,255,255,0.08), transparent)"}}/>; }
function ParticlesP() { return <>{Array.from({length:12},(_,i)=><div key={i} className="absolute w-1 h-1 rounded-full bg-white" style={{left:`${10+(i*7)%80}%`,top:`${15+(i*11)%60}%`,opacity:0.15+(i%4)*0.1,animation:`sc-f ${3+i%3}s ease-in-out ${i*0.2}s infinite alternate`}}/>)}<svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 100 100"><line x1="15" y1="25" x2="45" y2="35" stroke="white" strokeWidth="0.5"/><line x1="55" y1="50" x2="80" y2="65" stroke="white" strokeWidth="0.5"/></svg></>; }
function VortexP() { return <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 100 80">{[0,1,2,3,4].map(i=><ellipse key={i} cx="50" cy="40" rx={35-i*6} ry={(35-i*6)*0.6} fill="none" stroke="white" strokeWidth="0.5" opacity={0.2+i*0.15} style={{animation:`sc-rot ${8-i}s linear infinite`,transformOrigin:"50px 40px"}}/>)}</svg>; }
function RippleP() { return <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-px p-4">{Array.from({length:12},(_,i)=><div key={i} className="rounded-sm border border-white/[0.04]" style={i===5?{background:"rgba(59,130,246,0.1)"}:{}}/>)}</div>; }
function GlassP() { return <><div className="absolute w-16 h-16 rounded-full opacity-[0.12]" style={{background:"#3B82F6",filter:"blur(20px)",top:"15%",left:"25%"}}/><div className="absolute w-14 h-18 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm -rotate-3" style={{top:"30%",left:"30%"}}/><div className="absolute w-14 h-18 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm rotate-2" style={{top:"25%",left:"42%"}}/></>; }
function KineticP() { return <div className="absolute inset-0 flex items-center justify-center"><span className="text-xl font-black text-white/15 tracking-tighter" style={{animation:"sc-p 2s ease-in-out infinite"}}>TYPE</span></div>; }
function ScrollP() { return <div className="absolute inset-0 flex items-center justify-center"><div className="w-0.5 h-12 rounded-full bg-white/10 relative overflow-hidden"><div className="w-full bg-white/30 rounded-full absolute" style={{height:"25%",animation:"sc-s 2.5s ease-in-out infinite"}}/></div></div>; }
function TerrainP() { return <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 120 80" fill="none">{Array.from({length:7},(_,i)=><path key={i} d={`M0 ${35+i*5} Q30 ${25+i*5+Math.sin(i)*8} 60 ${35+i*5} Q90 ${45+i*5-Math.sin(i)*6} 120 ${35+i*5}`} stroke="white" strokeWidth="0.5" opacity={0.3+i*0.08}/>)}</svg>; }
function MeshP() { return <><div className="absolute w-20 h-20 rounded-full opacity-[0.1]" style={{background:"#1e40ff",filter:"blur(25px)",top:"10%",left:"15%",animation:"sc-a 12s ease-in-out infinite alternate"}}/><div className="absolute w-16 h-16 rounded-full opacity-[0.08]" style={{background:"#8b5cf6",filter:"blur(25px)",bottom:"15%",right:"15%",animation:"sc-b 15s ease-in-out infinite alternate"}}/><div className="absolute w-14 h-14 rounded-full opacity-[0.06]" style={{background:"#ec4899",filter:"blur(25px)",top:"50%",left:"50%",animation:"sc-c 10s ease-in-out infinite alternate"}}/></>; }
function MorphP() { return <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16" style={{background:"radial-gradient(circle,#3b82f6,#0a0a2e)",boxShadow:"0 0 30px rgba(59,130,246,0.2)",animation:"sc-m 8s ease-in-out infinite"}}/></div>; }
function NoirP() { return <div className="absolute inset-0 flex items-center justify-center" style={{background:"radial-gradient(circle,transparent 30%,rgba(0,0,0,0.6))"}}><div className="text-center"><span className="text-lg font-bold text-white/60 block" style={{fontFamily:"Georgia,serif"}}>FILM</span><span className="text-lg font-bold text-white/15 block" style={{fontFamily:"Georgia,serif"}}>NOIR</span></div></div>; }
function WavesP() { return <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 60" fill="none"><path d="M0 30 Q15 20 30 30 Q45 40 60 30 Q75 20 90 30 Q105 40 120 30 L120 60 L0 60 Z" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" style={{animation:"sc-w 4s ease-in-out infinite"}}/><path d="M0 35 Q15 28 30 35 Q45 42 60 35 Q75 28 90 35 Q105 42 120 35 L120 60 L0 60 Z" fill="rgba(59,130,246,0.03)" stroke="rgba(59,130,246,0.12)" strokeWidth="0.5" style={{animation:"sc-w 5s ease-in-out 0.5s infinite"}}/></svg>; }
function CardsP() { return <div className="absolute inset-0 flex items-center justify-center"><div className="w-14 h-10 rounded-lg border border-white/10 bg-white/[0.02]" style={{background:"radial-gradient(circle at 60% 40%, rgba(255,255,255,0.06), transparent 60%)"}}/></div>; }

function HorizonP() { return <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 120 60" fill="none">{Array.from({length:5},(_,i)=><path key={i} d={`M0 ${40+i*3} Q20 ${30+i*3+Math.sin(i*2)*5} 40 ${38+i*3} Q60 ${45+i*3-Math.sin(i)*4} 80 ${40+i*3} Q100 ${35+i*3} 120 ${40+i*3}`} stroke="white" strokeWidth="0.4" opacity={0.15+i*0.08}/>)}</svg>; }
function EnergyP() { return <><div className="absolute w-full h-px top-1/2 left-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" style={{animation:"sc-p 2s ease-in-out infinite"}}/><div className="absolute w-full h-px top-[45%] left-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" style={{animation:"sc-p 2.5s ease-in-out 0.3s infinite"}}/><div className="absolute w-full h-px top-[55%] left-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" style={{animation:"sc-p 3s ease-in-out 0.6s infinite"}}/></>; }

const previews: Record<string, React.ComponentType> = { aurora:AuroraP, beams:BeamsP, spotlight:SpotlightP, particles:ParticlesP, vortex:VortexP, ripple:RippleP, glass:GlassP, kinetic:KineticP, scroll:ScrollP, terrain:TerrainP, mesh:MeshP, morph:MorphP, noir:NoirP, waves:WavesP, cards:CardsP, horizon:HorizonP, energy:EnergyP };

export function DesignPossibilities() {
  return (
    <section id="showcases" className="py-28 px-6">
      <style>{`
        @keyframes sc-a{0%{transform:translate(0,0)}100%{transform:translate(15px,-10px)}}
        @keyframes sc-b{0%{transform:translate(0,0)}100%{transform:translate(-10px,15px)}}
        @keyframes sc-c{0%{transform:translate(-50%,-50%) scale(1)}100%{transform:translate(-50%,-50%) scale(1.15)}}
        @keyframes sc-f{0%{transform:translateY(0)}100%{transform:translateY(-4px)}}
        @keyframes sc-p{0%,100%{opacity:0.15}50%{opacity:0.35}}
        @keyframes sc-s{0%,100%{top:0}50%{top:75%}}
        @keyframes sc-m{0%,100%{border-radius:40% 60% 60% 40%/60% 30% 70% 40%}25%{border-radius:60% 40% 30% 70%/40% 60% 70% 30%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}75%{border-radius:50% 40% 60% 50%/40% 50% 60% 50%}}
        @keyframes sc-w{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @keyframes sc-dash{to{stroke-dashoffset:-28}}
        @keyframes sc-rot{to{transform:rotate(360deg)}}
      `}</style>
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 text-center mb-4">Design Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center tracking-tight mb-3 font-display">Beyond Ordinary</h2>
          <p className="text-white/30 text-center max-w-md mx-auto mb-20 text-sm leading-relaxed">15 interactive experiments. Each one pushes a different boundary of what&apos;s possible in the browser.</p>
        </AnimateIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {showcases.map((s) => {
            const P = previews[s.slug];
            return (
              <StaggerItem key={s.slug}>
                <Link href={`/showcases/${s.slug}`} className="group block">
                  <div className="relative h-36 md:h-44 bg-[#080808] rounded-xl border border-white/[0.03] overflow-hidden hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
                    {P && <P />}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <h3 className="text-[11px] font-semibold text-white/60">{s.name}</h3>
                      <p className="text-[9px] text-white/20 tracking-wide uppercase">{s.technique}</p>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-3 h-3 text-white/40" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
