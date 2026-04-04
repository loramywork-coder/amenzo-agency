import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020202] text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between mix-blend-difference pointer-events-none">
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase pointer-events-auto">AMENZO</span>
        <a href="/" className="text-[10px] tracking-[0.2em] uppercase opacity-30 hover:opacity-100 transition-opacity duration-500 pointer-events-auto">
          &larr; Back
        </a>
      </nav>
      {children}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-2xl border-t border-white/[0.03] px-6 py-3 flex items-center justify-center">
        <a href="/start-project" className="text-[10px] text-white/50 hover:text-white tracking-[0.15em] uppercase transition-all duration-500 hover:tracking-[0.25em]">
          Build something like this &rarr;
        </a>
      </div>
    </div>
  );
}
