"use client";

// ── Grand Harbour Hotel ── serif, thin lines above and below
function GrandHarbourHotel() {
  return (
    <svg viewBox="0 0 220 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <line x1="0" y1="2" x2="220" y2="2" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <text x="110" y="19" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="14" fontWeight="400" letterSpacing="2">
        GRAND HARBOUR
      </text>
      <text x="110" y="25" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="6" fontWeight="300" letterSpacing="4">
        HOTEL
      </text>
      <line x1="0" y1="27.5" x2="220" y2="27.5" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

// ── Porto Valletta ── elegant script-style italic
function PortoValletta() {
  return (
    <svg viewBox="0 0 180 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="90" y="20" textAnchor="middle" fontFamily="Georgia, 'Palatino Linotype', serif" fontSize="20" fontStyle="italic" fontWeight="400" letterSpacing="0.5">
        Porto Valletta
      </text>
      {/* decorative swash underline */}
      <path d="M 40 24 Q 90 28 140 24" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
    </svg>
  );
}

// ── MaltaLiving ── geometric sans with ML monogram
function MaltaLiving() {
  return (
    <svg viewBox="0 0 200 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      {/* ML monogram box */}
      <rect x="0" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <text x="10" y="19" textAnchor="middle" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="11" fontWeight="700" letterSpacing="-0.5">
        ML
      </text>
      {/* main text */}
      <text x="28" y="19" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="700" letterSpacing="-0.5">
        MaltaLiving
      </text>
    </svg>
  );
}

// ── FitZone ── bold condensed, Z is emphasized
function FitZone() {
  return (
    <svg viewBox="0 0 130 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="22" fontFamily="'Arial Black', 'Helvetica Neue', sans-serif" fontSize="24" fontWeight="900" letterSpacing="-1.5">
        FIT
      </text>
      <text x="48" y="22" fontFamily="'Arial Black', 'Helvetica Neue', sans-serif" fontSize="28" fontWeight="900" letterSpacing="-1.5" opacity="1">
        Z
      </text>
      {/* Z gets an accent line */}
      <line x1="48" y1="24" x2="68" y2="24" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <text x="66" y="22" fontFamily="'Arial Black', 'Helvetica Neue', sans-serif" fontSize="24" fontWeight="900" letterSpacing="-1.5">
        ONE
      </text>
    </svg>
  );
}

// ── Swiss Health Alliance ── thin serif, plus icon before text
function SwissHealthAlliance() {
  return (
    <svg viewBox="0 0 240 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      {/* Plus/cross icon */}
      <line x1="6" y1="8" x2="6" y2="20" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="1.2" />
      {/* text */}
      <text x="20" y="18" fontFamily="Georgia, 'Palatino Linotype', serif" fontSize="12" fontWeight="300" letterSpacing="3">
        SWISS HEALTH ALLIANCE
      </text>
    </svg>
  );
}

// ── Sengha ── modern geometric sans, distinctive
function Sengha() {
  return (
    <svg viewBox="0 0 110 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      {/* geometric dot accent */}
      <circle cx="6" cy="14" r="4" fill="currentColor" opacity="0.4" />
      <text x="16" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="18" fontWeight="600" letterSpacing="3">
        SENGHA
      </text>
    </svg>
  );
}

// ── Olive & Stone ── "Olive" italic, "& Stone" caps sans
function OliveAndStone() {
  return (
    <svg viewBox="0 0 170 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="20" fontFamily="Georgia, 'Palatino Linotype', serif" fontSize="18" fontStyle="italic" fontWeight="400">
        Olive
      </text>
      <text x="56" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="12" fontWeight="300" letterSpacing="1" opacity="0.7">
        &amp;
      </text>
      <text x="72" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="14" fontWeight="600" letterSpacing="2">
        STONE
      </text>
    </svg>
  );
}

// ── CyberShield ── monospace/tech, shield icon outline
function CyberShield() {
  return (
    <svg viewBox="0 0 180 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      {/* shield outline */}
      <path
        d="M 8 5 L 14 3 L 20 5 L 20 14 Q 14 20 8 14 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* small check inside shield */}
      <path d="M 11 11 L 13 13 L 17 8" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <text x="26" y="18" fontFamily="'Courier New', Courier, monospace" fontSize="14" fontWeight="400" letterSpacing="1">
        CyberShield
      </text>
    </svg>
  );
}

// ── Malta Financial ── conservative serif, MF monogram
function MaltaFinancial() {
  return (
    <svg viewBox="0 0 200 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      {/* MF monogram circle */}
      <circle cx="12" cy="14" r="10" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <text x="12" y="18" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="10" fontWeight="400" letterSpacing="-0.5">
        MF
      </text>
      {/* main text */}
      <text x="28" y="13" fontFamily="Georgia, 'Times New Roman', serif" fontSize="13" fontWeight="400" letterSpacing="1.5">
        MALTA
      </text>
      <text x="28" y="23" fontFamily="Georgia, 'Times New Roman', serif" fontSize="8" fontWeight="300" letterSpacing="3">
        FINANCIAL
      </text>
    </svg>
  );
}

// ── Bloom Boutique ── modern sans, flower dot on "i"
function BloomBoutique() {
  return (
    <svg viewBox="0 0 180 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="500" letterSpacing="1">
        Bloom Bout
      </text>
      {/* the "i" without dot */}
      <text x="114" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="500" letterSpacing="1">
        que
      </text>
      {/* "i" stem */}
      <line x1="111" y1="10" x2="111" y2="20" stroke="currentColor" strokeWidth="1.5" />
      {/* flower dot — 4 petals + center */}
      <circle cx="111" cy="6" r="1.2" fill="currentColor" />
      <circle cx="108.5" cy="6" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="113.5" cy="6" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="111" cy="3.8" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="111" cy="8.2" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// ── Logo wrapper ──
function ClientLogo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center text-white opacity-40 hover:opacity-70 transition-opacity duration-500 cursor-default">
      {children}
    </div>
  );
}

export function ClientsStrip() {
  return (
    <section className="py-16 bg-bg">
      <div className="container-wide">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/20 text-center mb-10">
          Trusted by leading businesses
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          <ClientLogo><GrandHarbourHotel /></ClientLogo>
          <ClientLogo><PortoValletta /></ClientLogo>
          <ClientLogo><MaltaLiving /></ClientLogo>
          <ClientLogo><FitZone /></ClientLogo>
          <ClientLogo><SwissHealthAlliance /></ClientLogo>
          <ClientLogo><Sengha /></ClientLogo>
          <ClientLogo><OliveAndStone /></ClientLogo>
          <ClientLogo><CyberShield /></ClientLogo>
          <ClientLogo><MaltaFinancial /></ClientLogo>
          <ClientLogo><BloomBoutique /></ClientLogo>
        </div>
      </div>
    </section>
  );
}
