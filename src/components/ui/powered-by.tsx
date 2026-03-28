"use client";

import { getTagColor } from "@/lib/tag-colors";

const TECH_LOGOS: Record<string, { icon: React.ReactNode; url: string; color: string }> = {
  "next.js": {
    url: "https://nextjs.org",
    color: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
      </svg>
    ),
  },
  "react": {
    url: "https://react.dev",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.846.194-1.164.578-1.417 2.388-.654 5.077a17.27 17.27 0 0 0-1.046 2.677c-.756 2.593-.625 4.334.402 4.93.253.147.576.22.938.22 1.345 0 3.107-.96 4.888-2.624 1.78 1.655 3.542 2.603 4.887 2.603.311 0 .593-.068.846-.193 1.165-.578 1.418-2.388.654-5.078.386-.89.714-1.79.983-2.677.757-2.693.626-4.435-.401-4.93a1.639 1.639 0 0 0-.846-.193z"/>
      </svg>
    ),
  },
  "typescript": {
    url: "https://typescriptlang.org",
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
  "tailwind css": {
    url: "https://tailwindcss.com",
    color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  "vercel": {
    url: "https://vercel.com",
    color: "#fff",
    icon: (
      <svg viewBox="0 0 76 65" fill="currentColor" className="w-6 h-6">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
      </svg>
    ),
  },
  "supabase": {
    url: "https://supabase.com",
    color: "#3FCF8E",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
      </svg>
    ),
  },
  "stripe": {
    url: "https://stripe.com",
    color: "#635BFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.19l-.89 5.494C5.108 22.88 8.09 24 11.324 24c2.618 0 4.78-.652 6.283-1.889 1.64-1.348 2.463-3.262 2.463-5.697.024-4.109-2.502-5.811-6.094-7.264z"/>
      </svg>
    ),
  },
  "stripe connect": {
    url: "https://stripe.com/connect",
    color: "#635BFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.19l-.89 5.494C5.108 22.88 8.09 24 11.324 24c2.618 0 4.78-.652 6.283-1.889 1.64-1.348 2.463-3.262 2.463-5.697.024-4.109-2.502-5.811-6.094-7.264z"/>
      </svg>
    ),
  },
  "figma": {
    url: "https://figma.com",
    color: "#F24E1E",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 8.137H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V8.137H8.148zm4.587 15.353H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 15.98c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V15.98H8.148zm7.704-7.843c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49 4.49-2.014 4.49-4.49-2.014-4.49-4.49-4.49zm0 7.51c-1.665 0-3.019-1.355-3.019-3.02s1.355-3.019 3.019-3.019 3.019 1.355 3.019 3.019-1.354 3.02-3.019 3.02z"/>
      </svg>
    ),
  },
  "mapbox": {
    url: "https://mapbox.com",
    color: "#4264FB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  "three.js": {
    url: "https://threejs.org",
    color: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0z"/>
      </svg>
    ),
  },
  "d3.js": {
    url: "https://d3js.org",
    color: "#F9A03C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <text x="4" y="18" fontSize="16" fontWeight="bold" fontFamily="sans-serif">D3</text>
      </svg>
    ),
  },
  "sanity cms": {
    url: "https://sanity.io",
    color: "#F03E2F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M7.394 4.4C7.394 7.247 9.143 9.105 12.6 10l3.632.91c3.2.81 5.168 2.593 5.168 5.61a6.523 6.523 0 0 1-1.474 4.28v-3.2c0-2.98-1.866-4.8-5.558-5.76l-3.554-.89c-2.823-.7-5.027-2.2-5.027-5.38a6.172 6.172 0 0 1 1.607-4.17zM16.29 2a6.152 6.152 0 0 1 3.11 5.44c-1.297-1.627-3.37-2.467-6.145-3.157L12.437 4.1C9.52 3.37 7.9 2.22 7.394 0zm.316 15.76c1.338 1.547 3.37 2.39 6.145 3.08l.818.183c2.956.737 4.528 1.867 5.037 4.097v-3.2C20.6 19.074 18.6 18.11 16.606 17.76z"/>
      </svg>
    ),
  },
  "framer motion": {
    url: "https://motion.dev",
    color: "#E040FB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    ),
  },
};

// Fallback for unknown techs
const DEFAULT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 12h8M12 8v8" />
  </svg>
);

export function PoweredByChip({ techStack, projectColor }: { techStack: string[]; projectColor: string }) {
  return (
    <div className="mt-12 mb-4">
      <div className="relative flex flex-col items-center">
        {/* Chip header */}
        <div className="relative z-10 flex items-center gap-2 px-5 py-2.5 bg-[#141414] border border-[#2A2A2A] rounded-lg shadow-lg">
          {/* Chip pins top */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-2.5 bg-[#333] rounded-sm" />
            ))}
          </div>
          {/* Chip pins bottom */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-2.5 bg-[#333] rounded-sm" />
            ))}
          </div>
          <span className="text-[13px] font-semibold text-white/70 tracking-wide">Powered By</span>
        </div>

        {/* Connection lines */}
        <div className="w-px h-6 bg-gradient-to-b from-[#2A2A2A] to-transparent" />

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full max-w-4xl">
          {techStack.map((tech) => {
            const entry = TECH_LOGOS[tech.toLowerCase()];
            const color = entry?.color || projectColor;
            const icon = entry?.icon || DEFAULT_ICON;
            const url = entry?.url;

            const card = (
              <div
                className="group relative flex flex-col items-center gap-2 p-4 rounded-xl bg-[#111] border border-[#1E1E1E] hover:border-[#333] transition-all duration-500 hover:-translate-y-1"
                style={{ boxShadow: `0 0 0 rgba(${hexToRgb(color)}, 0)`, transition: 'all 0.5s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px rgba(${hexToRgb(color)}, 0.15), inset 0 1px 0 rgba(${hexToRgb(color)}, 0.1)`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 rgba(${hexToRgb(color)}, 0)`; }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-3 right-3 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: color }} />
                <div style={{ color }}>{icon}</div>
                <span className="text-[11px] font-medium text-white/60 group-hover:text-white/90 transition-colors text-center">
                  {tech} {url && <span className="text-white/30">↗</span>}
                </span>
              </div>
            );

            return url ? (
              <a key={tech} href={url} target="_blank" rel="noopener noreferrer">{card}</a>
            ) : (
              <div key={tech}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '');
  if (h.length !== 6) return '255,255,255';
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `${r},${g},${b}`;
}
