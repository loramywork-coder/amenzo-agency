"use client";

// ── Grand Harbour Hotel ── serif with sky blue accent lines
function GrandHarbourHotel() {
  return (
    <svg viewBox="0 0 220 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <line x1="0" y1="2" x2="220" y2="2" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.6" />
      <text x="110" y="19" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="14" fontWeight="400" letterSpacing="2">
        GRAND HARBOUR
      </text>
      <text x="110" y="25" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="6" fontWeight="300" letterSpacing="4" fill="#7DD3FC">
        HOTEL
      </text>
      <line x1="0" y1="27.5" x2="220" y2="27.5" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

// ── Porto Valletta ── elegant italic with wine red swash
function PortoValletta() {
  return (
    <svg viewBox="0 0 180 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="90" y="20" textAnchor="middle" fontFamily="Georgia, 'Palatino Linotype', serif" fontSize="20" fontStyle="italic" fontWeight="400" letterSpacing="0.5">
        Porto Valletta
      </text>
      <path d="M 40 24 Q 90 28 140 24" stroke="#C45050" strokeWidth="0.8" fill="none" opacity="0.7" />
    </svg>
  );
}

// ── MaltaLiving ── geometric sans with ML monogram
function MaltaLiving() {
  return (
    <svg viewBox="0 0 200 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      {/* ML monogram box — blue */}
      <rect x="0" y="4" width="20" height="20" rx="2" stroke="#2563EB" strokeWidth="1" fill="none" />
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
      {/* Z gets red accent line */}
      <line x1="48" y1="24" x2="68" y2="24" stroke="#EF4444" strokeWidth="2" opacity="0.8" />
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
      {/* Plus/cross icon — teal */}
      <line x1="6" y1="8" x2="6" y2="20" stroke="#0D9488" strokeWidth="1.2" />
      <line x1="0" y1="14" x2="12" y2="14" stroke="#0D9488" strokeWidth="1.2" />
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
      <text x="56" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="12" fontWeight="300" letterSpacing="1" fill="#8B9F6A">
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
      {/* shield outline — purple */}
      <path
        d="M 8 5 L 14 3 L 20 5 L 20 14 Q 14 20 8 14 Z"
        stroke="#7C3AED"
        strokeWidth="1"
        fill="none"
      />
      {/* check inside shield */}
      <path d="M 11 11 L 13 13 L 17 8" stroke="#7C3AED" strokeWidth="0.8" fill="none" />
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

// ── Bloom Boutique ── modern sans with flower accent
function BloomBoutique() {
  return (
    <svg viewBox="0 0 170 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="400" letterSpacing="1">
        Bloom
      </text>
      <text x="62" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="600" letterSpacing="2">
        BOUTIQUE
      </text>
      {/* flower accent */}
      <circle cx="55" cy="8" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// ── Reel House Cinema ── bold with red accent
function ReelHouse() {
  return (
    <svg viewBox="0 0 140 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="800" fill="#DC2626" letterSpacing="1">REEL</text>
      <text x="58" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="16" fontWeight="300" letterSpacing="2">HOUSE</text>
    </svg>
  );
}

// ── Harbour Square ── geometric with coral accent
function HarbourSquareLogo() {
  return (
    <svg viewBox="0 0 180 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="20" fontFamily="'Trebuchet MS', 'Century Gothic', sans-serif" fontSize="14" fontWeight="700" fill="#F43F5E" letterSpacing="2">HARBOUR</text>
      <text x="100" y="20" fontFamily="'Trebuchet MS', 'Century Gothic', sans-serif" fontSize="14" fontWeight="400" letterSpacing="2">SQUARE</text>
    </svg>
  );
}

// ── Elena Voss ── ultra-thin tracked
function ElenaVoss() {
  return (
    <svg viewBox="0 0 150 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="20" fontFamily="'Futura', 'Century Gothic', sans-serif" fontSize="13" fontWeight="200" letterSpacing="6">ELENA VOSS</text>
    </svg>
  );
}

// ── Atelier Noir ── sophisticated serif
function AtelierNoir() {
  return (
    <svg viewBox="0 0 160 28" className="h-6 md:h-7 w-auto" fill="currentColor">
      <text x="0" y="20" fontFamily="'Didot', 'Bodoni MT', 'Playfair Display', serif" fontSize="16" fontWeight="400" letterSpacing="3" fontStyle="italic">Atelier Noir</text>
    </svg>
  );
}

// ── Logo wrapper ──
function ClientLogo({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} className="flex items-center justify-center text-white/50 hover:text-white/90 transition-all duration-500 hover:scale-105">
      {children}
    </a>
  );
}

function TrustedBadge() {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-medium">Verified Agency Partner</span>
    </div>
  );
}

export function ClientsStrip() {
  return (
    <section className="pt-4 pb-16 bg-bg">
      <div className="container-wide">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/20 text-center mb-10">
          Trusted by leading businesses
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <ClientLogo href="/work/grand-harbour-hotel"><GrandHarbourHotel /></ClientLogo>
          <ClientLogo href="/work/porto-valletta"><PortoValletta /></ClientLogo>
          <ClientLogo href="/work/maltaliving"><MaltaLiving /></ClientLogo>
          <ClientLogo href="/work/fitzone-malta"><FitZone /></ClientLogo>
          <ClientLogo href="/work/swiss-health-alliance"><SwissHealthAlliance /></ClientLogo>
          <ClientLogo href="/work/olive-and-stone"><OliveAndStone /></ClientLogo>
          <ClientLogo href="/work/cybershield-malta"><CyberShield /></ClientLogo>
          <ClientLogo href="/work/reel-house-cinema"><ReelHouse /></ClientLogo>
          <ClientLogo href="/work/harbour-square"><HarbourSquareLogo /></ClientLogo>
          <ClientLogo href="/work/elena-voss"><ElenaVoss /></ClientLogo>
          <ClientLogo href="/work/atelier-noir"><AtelierNoir /></ClientLogo>
          <ClientLogo href="/demos/ecommerce"><BloomBoutique /></ClientLogo>
        </div>

        <TrustedBadge />
      </div>
    </section>
  );
}
