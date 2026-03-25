// Vibrant tag color system — maps tags to accent colors
// Each tag gets a distinct color so the site feels alive

const tagColorMap: Record<string, { bg: string; text: string; border: string }> = {
  // Tech / frameworks — violet family
  "Next.js": { bg: "rgba(124,58,237,0.12)", text: "#A78BFA", border: "rgba(124,58,237,0.25)" },
  "React": { bg: "rgba(56,189,248,0.12)", text: "#38BDF8", border: "rgba(56,189,248,0.25)" },
  "Tailwind": { bg: "rgba(6,182,212,0.12)", text: "#06B6D4", border: "rgba(6,182,212,0.25)" },
  "Tailwind CSS": { bg: "rgba(6,182,212,0.12)", text: "#06B6D4", border: "rgba(6,182,212,0.25)" },
  "TypeScript": { bg: "rgba(59,130,246,0.12)", text: "#3B82F6", border: "rgba(59,130,246,0.25)" },
  "Vercel": { bg: "rgba(240,240,240,0.08)", text: "#D4D4D4", border: "rgba(240,240,240,0.15)" },
  "Supabase": { bg: "rgba(52,211,153,0.12)", text: "#34D399", border: "rgba(52,211,153,0.25)" },
  "Stripe": { bg: "rgba(99,102,241,0.12)", text: "#818CF8", border: "rgba(99,102,241,0.25)" },
  "Stripe Connect": { bg: "rgba(99,102,241,0.12)", text: "#818CF8", border: "rgba(99,102,241,0.25)" },
  "Sanity CMS": { bg: "rgba(249,115,22,0.12)", text: "#F97316", border: "rgba(249,115,22,0.25)" },
  "Framer Motion": { bg: "rgba(236,72,153,0.12)", text: "#EC4899", border: "rgba(236,72,153,0.25)" },
  "Mapbox": { bg: "rgba(52,211,153,0.12)", text: "#34D399", border: "rgba(52,211,153,0.25)" },
  "Three.js": { bg: "rgba(168,85,247,0.12)", text: "#A855F7", border: "rgba(168,85,247,0.25)" },
  "D3.js": { bg: "rgba(251,146,60,0.12)", text: "#FB923C", border: "rgba(251,146,60,0.25)" },
  "i18n": { bg: "rgba(34,197,94,0.12)", text: "#22C55E", border: "rgba(34,197,94,0.25)" },
  "Custom": { bg: "rgba(168,85,247,0.12)", text: "#A855F7", border: "rgba(168,85,247,0.25)" },

  // E-commerce
  "Shopify": { bg: "rgba(52,211,153,0.12)", text: "#34D399", border: "rgba(52,211,153,0.25)" },
  "WooCommerce": { bg: "rgba(168,85,247,0.12)", text: "#A855F7", border: "rgba(168,85,247,0.25)" },

  // Process / strategy — warm tones
  "Audit": { bg: "rgba(251,191,36,0.12)", text: "#FBBF24", border: "rgba(251,191,36,0.25)" },
  "Redesign": { bg: "rgba(249,115,22,0.12)", text: "#F97316", border: "rgba(249,115,22,0.25)" },
  "Migration": { bg: "rgba(236,72,153,0.12)", text: "#EC4899", border: "rgba(236,72,153,0.25)" },
  "Optimisation": { bg: "rgba(6,182,212,0.12)", text: "#06B6D4", border: "rgba(6,182,212,0.25)" },
  "Strategy": { bg: "rgba(251,191,36,0.12)", text: "#FBBF24", border: "rgba(251,191,36,0.25)" },
  "Roadmap": { bg: "rgba(249,115,22,0.12)", text: "#F97316", border: "rgba(249,115,22,0.25)" },
  "Training": { bg: "rgba(34,197,94,0.12)", text: "#22C55E", border: "rgba(34,197,94,0.25)" },

  // Design
  "Logo Design": { bg: "rgba(236,72,153,0.12)", text: "#EC4899", border: "rgba(236,72,153,0.25)" },
  "Brand Strategy": { bg: "rgba(251,146,60,0.12)", text: "#FB923C", border: "rgba(251,146,60,0.25)" },
  "Visual Identity": { bg: "rgba(168,85,247,0.12)", text: "#A855F7", border: "rgba(168,85,247,0.25)" },
  "Figma": { bg: "rgba(236,72,153,0.12)", text: "#EC4899", border: "rgba(236,72,153,0.25)" },
  "User Research": { bg: "rgba(52,211,153,0.12)", text: "#34D399", border: "rgba(52,211,153,0.25)" },
  "Prototyping": { bg: "rgba(59,130,246,0.12)", text: "#3B82F6", border: "rgba(59,130,246,0.25)" },
  "Design Systems": { bg: "rgba(124,58,237,0.12)", text: "#A78BFA", border: "rgba(124,58,237,0.25)" },

  // SEO
  "Technical SEO": { bg: "rgba(34,197,94,0.12)", text: "#22C55E", border: "rgba(34,197,94,0.25)" },
  "Core Web Vitals": { bg: "rgba(251,191,36,0.12)", text: "#FBBF24", border: "rgba(251,191,36,0.25)" },
  "Schema": { bg: "rgba(59,130,246,0.12)", text: "#3B82F6", border: "rgba(59,130,246,0.25)" },
  "Analytics": { bg: "rgba(6,182,212,0.12)", text: "#06B6D4", border: "rgba(6,182,212,0.25)" },

  // Hosting
  "Monitoring": { bg: "rgba(34,197,94,0.12)", text: "#22C55E", border: "rgba(34,197,94,0.25)" },
  "Backups": { bg: "rgba(59,130,246,0.12)", text: "#3B82F6", border: "rgba(59,130,246,0.25)" },
  "Updates": { bg: "rgba(168,85,247,0.12)", text: "#A855F7", border: "rgba(168,85,247,0.25)" },
};

// Fallback colors cycle through a vibrant palette
const fallbackColors = [
  { bg: "rgba(124,58,237,0.12)", text: "#A78BFA", border: "rgba(124,58,237,0.25)" },
  { bg: "rgba(6,182,212,0.12)", text: "#06B6D4", border: "rgba(6,182,212,0.25)" },
  { bg: "rgba(236,72,153,0.12)", text: "#EC4899", border: "rgba(236,72,153,0.25)" },
  { bg: "rgba(34,197,94,0.12)", text: "#22C55E", border: "rgba(34,197,94,0.25)" },
  { bg: "rgba(251,191,36,0.12)", text: "#FBBF24", border: "rgba(251,191,36,0.25)" },
  { bg: "rgba(249,115,22,0.12)", text: "#F97316", border: "rgba(249,115,22,0.25)" },
];

export function getTagColor(tag: string, index = 0) {
  return tagColorMap[tag] || fallbackColors[index % fallbackColors.length];
}

// Category colors — distinct vibrant accent per industry
const categoryColorMap: Record<string, { bg: string; text: string; border: string }> = {
  "HOSPITALITY": { bg: "rgba(251,191,36,0.15)", text: "#FBBF24", border: "rgba(251,191,36,0.3)" },
  "F&B": { bg: "rgba(249,115,22,0.15)", text: "#FB923C", border: "rgba(249,115,22,0.3)" },
  "GASTRO": { bg: "rgba(249,115,22,0.15)", text: "#FB923C", border: "rgba(249,115,22,0.3)" },
  "Gastro": { bg: "rgba(249,115,22,0.15)", text: "#FB923C", border: "rgba(249,115,22,0.3)" },
  "FOOD & BEVERAGE": { bg: "rgba(249,115,22,0.15)", text: "#FB923C", border: "rgba(249,115,22,0.3)" },
  "Food & Beverage": { bg: "rgba(249,115,22,0.15)", text: "#FB923C", border: "rgba(249,115,22,0.3)" },
  "REAL ESTATE": { bg: "rgba(59,130,246,0.15)", text: "#60A5FA", border: "rgba(59,130,246,0.3)" },
  "Real Estate": { bg: "rgba(59,130,246,0.15)", text: "#60A5FA", border: "rgba(59,130,246,0.3)" },
  "E-COMMERCE": { bg: "rgba(168,85,247,0.15)", text: "#C084FC", border: "rgba(168,85,247,0.3)" },
  "E-Commerce": { bg: "rgba(168,85,247,0.15)", text: "#C084FC", border: "rgba(168,85,247,0.3)" },
  "FITNESS": { bg: "rgba(239,68,68,0.15)", text: "#F87171", border: "rgba(239,68,68,0.3)" },
  "Fitness": { bg: "rgba(239,68,68,0.15)", text: "#F87171", border: "rgba(239,68,68,0.3)" },
  "NGO": { bg: "rgba(34,197,94,0.15)", text: "#4ADE80", border: "rgba(34,197,94,0.3)" },
  "NON-PROFIT": { bg: "rgba(34,197,94,0.15)", text: "#4ADE80", border: "rgba(34,197,94,0.3)" },
  "Non-Profit": { bg: "rgba(34,197,94,0.15)", text: "#4ADE80", border: "rgba(34,197,94,0.3)" },
  "TECH": { bg: "rgba(124,58,237,0.15)", text: "#A78BFA", border: "rgba(124,58,237,0.3)" },
  "TECHNOLOGY": { bg: "rgba(124,58,237,0.15)", text: "#A78BFA", border: "rgba(124,58,237,0.3)" },
  "Technology": { bg: "rgba(124,58,237,0.15)", text: "#A78BFA", border: "rgba(124,58,237,0.3)" },
  "PLATFORM": { bg: "rgba(6,182,212,0.15)", text: "#22D3EE", border: "rgba(6,182,212,0.3)" },
  "MARKETPLACE": { bg: "rgba(6,182,212,0.15)", text: "#22D3EE", border: "rgba(6,182,212,0.3)" },
  "Marketplace": { bg: "rgba(6,182,212,0.15)", text: "#22D3EE", border: "rgba(6,182,212,0.3)" },
  "Hospitality": { bg: "rgba(251,191,36,0.15)", text: "#FBBF24", border: "rgba(251,191,36,0.3)" },
};

const categoryFallback = [
  { bg: "rgba(124,58,237,0.15)", text: "#A78BFA", border: "rgba(124,58,237,0.3)" },
  { bg: "rgba(6,182,212,0.15)", text: "#22D3EE", border: "rgba(6,182,212,0.3)" },
  { bg: "rgba(236,72,153,0.15)", text: "#F472B6", border: "rgba(236,72,153,0.3)" },
  { bg: "rgba(34,197,94,0.15)", text: "#4ADE80", border: "rgba(34,197,94,0.3)" },
];

export function getCategoryColor(category: string, index = 0) {
  return categoryColorMap[category] || categoryFallback[index % categoryFallback.length];
}
