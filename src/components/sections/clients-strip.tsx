"use client";

import { AnimateIn } from "@/components/ui/motion";

// Each client as a mini SVG logotype with distinctive styling
function ClientLogo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-8 text-white/[0.18] hover:text-white/[0.45] transition-all duration-500">
      {children}
    </div>
  );
}

export function ClientsStrip() {
  return (
    <section className="py-12 bg-transparent">
      <div className="container-wide">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1E1E1E] to-transparent mb-10" />

        <p className="text-[10px] uppercase tracking-[0.3em] text-[#333] text-center mb-8">
          Trusted by
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {/* Grand Harbour Hotel — elegant serif */}
          <ClientLogo>
            <svg viewBox="0 0 180 24" className="h-5 w-auto fill-current">
              <text x="0" y="18" fontFamily="Georgia, serif" fontSize="16" fontStyle="italic" fontWeight="400" letterSpacing="1">Grand Harbour</text>
            </svg>
          </ClientLogo>

          {/* Porto Valletta — script feel */}
          <ClientLogo>
            <svg viewBox="0 0 140 26" className="h-5 w-auto fill-current">
              <text x="0" y="20" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic" fontWeight="400">Porto Valletta</text>
            </svg>
          </ClientLogo>

          {/* MaltaLiving — bold geometric */}
          <ClientLogo>
            <svg viewBox="0 0 130 22" className="h-5 w-auto fill-current">
              <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.5">MaltaLiving</text>
            </svg>
          </ClientLogo>

          {/* FitZone — bold condensed */}
          <ClientLogo>
            <svg viewBox="0 0 90 24" className="h-5 w-auto fill-current">
              <text x="0" y="19" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="900" letterSpacing="-1">FITZONE</text>
            </svg>
          </ClientLogo>

          {/* Swiss Health Alliance — clean light caps */}
          <ClientLogo>
            <svg viewBox="0 0 200 18" className="h-4 w-auto fill-current">
              <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="300" letterSpacing="4">SWISS HEALTH ALLIANCE</text>
            </svg>
          </ClientLogo>

          {/* Sengha — geometric mono */}
          <ClientLogo>
            <svg viewBox="0 0 80 20" className="h-4 w-auto fill-current">
              <text x="0" y="16" fontFamily="Courier, monospace" fontSize="15" fontWeight="700" letterSpacing="2">SENGHA</text>
            </svg>
          </ClientLogo>

          {/* Olive & Stone — elegant serif */}
          <ClientLogo>
            <svg viewBox="0 0 130 24" className="h-5 w-auto fill-current">
              <text x="0" y="19" fontFamily="Georgia, serif" fontSize="16" fontStyle="italic" fontWeight="400" letterSpacing="0.5">Olive &amp; Stone</text>
            </svg>
          </ClientLogo>

          {/* CyberShield — tech mono */}
          <ClientLogo>
            <svg viewBox="0 0 120 18" className="h-4 w-auto fill-current">
              <text x="0" y="14" fontFamily="Courier, monospace" fontSize="13" fontWeight="400" letterSpacing="1.5">CyberShield</text>
            </svg>
          </ClientLogo>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#1E1E1E] to-transparent mt-10" />
      </div>
    </section>
  );
}
