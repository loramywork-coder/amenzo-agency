import React from "react";

type LogoProps = {
  className?: string;
  variant?: "white" | "dark" | "color";
};

function getFill(variant: "white" | "dark" | "color" | undefined, colorFill: string) {
  if (variant === "dark") return "#1a1a2e";
  if (variant === "color") return colorFill;
  return "#ffffff";
}

/* ─── 1. Grand Harbour Hotel ─── */
export function GrandHarbourLogo({ className, variant }: LogoProps) {
  const fill = getFill(variant, "#C9A96E");
  return (
    <svg viewBox="0 0 320 80" className={className} xmlns="http://www.w3.org/2000/svg">
      <text
        x="160"
        y="32"
        textAnchor="middle"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="300"
        fontSize="22"
        letterSpacing="6"
      >
        GRAND HARBOUR
      </text>
      <line x1="80" y1="44" x2="240" y2="44" stroke={fill} strokeWidth="0.75" />
      <text
        x="160"
        y="64"
        textAnchor="middle"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="300"
        fontSize="14"
        letterSpacing="10"
      >
        HOTEL
      </text>
    </svg>
  );
}

/* ─── 2. Porto Valletta ─── */
export function PortoVallettaLogo({ className, variant }: LogoProps) {
  const fill = getFill(variant, "#8B4513");
  return (
    <svg viewBox="0 0 280 80" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Decorative wine glass */}
      <g transform="translate(28, 18)" fill="none" stroke={fill} strokeWidth="1.2">
        <ellipse cx="12" cy="6" rx="8" ry="6" />
        <line x1="12" y1="12" x2="12" y2="30" />
        <line x1="5" y1="30" x2="19" y2="30" />
        <ellipse cx="12" cy="30" rx="7" ry="2" />
      </g>
      <text
        x="65"
        y="36"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="28"
      >
        Porto
      </text>
      <text
        x="65"
        y="62"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="400"
        fontSize="22"
      >
        Valletta
      </text>
    </svg>
  );
}

/* ─── 3. MaltaLiving ─── */
export function MaltaLivingLogo({ className, variant }: LogoProps) {
  const fill = getFill(variant, "#2563EB");
  return (
    <svg viewBox="0 0 300 70" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* ML monogram square */}
      <rect x="6" y="10" width="50" height="50" rx="6" fill="none" stroke={fill} strokeWidth="2" />
      <text
        x="31"
        y="45"
        textAnchor="middle"
        fill={fill}
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fontSize="24"
      >
        ML
      </text>
      {/* Stacked name */}
      <text
        x="72"
        y="34"
        fill={fill}
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fontSize="20"
        letterSpacing="3"
      >
        MALTA
      </text>
      <text
        x="72"
        y="56"
        fill={fill}
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        fontSize="20"
        letterSpacing="3"
      >
        LIVING
      </text>
    </svg>
  );
}

/* ─── 4. FitZone ─── */
export function FitZoneLogo({ className, variant }: LogoProps) {
  const fill = getFill(variant, "#EF4444");
  return (
    <svg viewBox="0 0 260 60" className={className} xmlns="http://www.w3.org/2000/svg">
      <text
        x="10"
        y="44"
        fill={fill}
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        fontSize="38"
        letterSpacing="1"
      >
        FIT
      </text>
      {/* "ZONE" with lightning bolt integrated into the Z */}
      <g transform="translate(100, 8)">
        {/* Z as a lightning bolt path */}
        <path
          d={`M 0 6 L 22 6 L 6 22 L 16 22 L -2 42 L 4 24 L -6 24 Z`}
          fill={fill}
        />
        {/* ONE text */}
        <text
          x="24"
          y="36"
          fill={fill}
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight="800"
          fontSize="38"
          letterSpacing="1"
        >
          ONE
        </text>
      </g>
    </svg>
  );
}

/* ─── 5. Swiss Health Alliance ─── */
export function SwissHealthLogo({ className, variant }: LogoProps) {
  const fill = getFill(variant, "#059669");
  const crossColor = variant === "color" ? "#DC2626" : fill;
  return (
    <svg viewBox="0 0 340 70" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Swiss cross icon */}
      <rect x="6" y="10" width="44" height="44" rx="6" fill="none" stroke={crossColor} strokeWidth="1.5" />
      <rect x="22" y="18" width="12" height="28" rx="1" fill={crossColor} />
      <rect x="14" y="26" width="28" height="12" rx="1" fill={crossColor} />
      {/* Text */}
      <text
        x="64"
        y="32"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="300"
        fontSize="18"
        letterSpacing="4"
      >
        SWISS HEALTH
      </text>
      <text
        x="64"
        y="54"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="300"
        fontSize="14"
        letterSpacing="6"
      >
        ALLIANCE
      </text>
    </svg>
  );
}

/* ─── 6. Olive & Stone ─── */
export function OliveAndStoneLogo({ className, variant }: LogoProps) {
  const fill = getFill(variant, "#92400E");
  return (
    <svg viewBox="0 0 300 70" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Olive branch sprig */}
      <g transform="translate(8, 12)" fill="none" stroke={fill} strokeWidth="1.2" strokeLinecap="round">
        <path d="M 2 40 Q 12 28 24 18 Q 32 12 38 4" />
        {/* leaves */}
        <ellipse cx="14" cy="30" rx="6" ry="3" transform="rotate(-30, 14, 30)" fill={fill} opacity="0.6" />
        <ellipse cx="22" cy="22" rx="6" ry="3" transform="rotate(-40, 22, 22)" fill={fill} opacity="0.6" />
        <ellipse cx="30" cy="14" rx="5" ry="2.5" transform="rotate(-50, 30, 14)" fill={fill} opacity="0.6" />
        {/* olives */}
        <circle cx="10" cy="34" r="2.5" fill={fill} opacity="0.8" />
        <circle cx="26" cy="18" r="2" fill={fill} opacity="0.8" />
      </g>
      {/* Text */}
      <text
        x="58"
        y="34"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="26"
      >
        Olive
      </text>
      <text
        x="145"
        y="34"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="300"
        fontSize="18"
      >
        &amp;
      </text>
      <text
        x="164"
        y="34"
        fill={fill}
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="600"
        fontSize="22"
        letterSpacing="3"
      >
        STONE
      </text>
      <text
        x="58"
        y="56"
        fill={fill}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="300"
        fontSize="11"
        letterSpacing="3"
        opacity="0.7"
      >
        ARTISAN MALTESE GOODS
      </text>
    </svg>
  );
}

/* ─── 7. CyberShield ─── */
export function CyberShieldLogo({ className, variant }: LogoProps) {
  const fill = getFill(variant, "#7C3AED");
  return (
    <svg viewBox="0 0 300 70" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Shield outline */}
      <path
        d="M 28 8 L 48 8 Q 52 8 52 12 L 52 36 Q 52 52 38 60 Q 24 52 24 36 L 24 12 Q 24 8 28 8 Z"
        fill="none"
        stroke={fill}
        strokeWidth="2"
      />
      {/* Shield inner check/lock */}
      <path
        d="M 34 30 L 38 36 L 44 22"
        fill="none"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* CYBER in lighter weight */}
      <text
        x="64"
        y="32"
        fill={fill}
        fontFamily="'Courier New', 'Lucida Console', monospace"
        fontWeight="300"
        fontSize="20"
        letterSpacing="4"
      >
        CYBER
      </text>
      {/* SHIELD in bold */}
      <text
        x="64"
        y="54"
        fill={fill}
        fontFamily="'Courier New', 'Lucida Console', monospace"
        fontWeight="700"
        fontSize="20"
        letterSpacing="4"
      >
        SHIELD
      </text>
    </svg>
  );
}

/* ─── Slug → Logo mapping ─── */
const logoMap: Record<string, React.ComponentType<LogoProps>> = {
  "grand-harbour-hotel": GrandHarbourLogo,
  "porto-valletta": PortoVallettaLogo,
  maltaliving: MaltaLivingLogo,
  "fitzone-malta": FitZoneLogo,
  "swiss-health-alliance": SwissHealthLogo,
  "olive-and-stone": OliveAndStoneLogo,
  "cybershield-malta": CyberShieldLogo,
};

export function getProjectLogo(
  slug: string
): React.ComponentType<{ className?: string }> | null {
  return logoMap[slug] ?? null;
}
