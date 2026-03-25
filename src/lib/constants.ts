export const SITE_NAME = "AMENZO";
export const SITE_URL = "https://amenzo.com";
export const SITE_DESCRIPTION =
  "Premium web design, development & digital agency. Custom websites that make businesses impossible to ignore.";
export const CONTACT_EMAIL = "hello@amenzo.com";
export const CONTACT_PHONE = "+356 9999 0000";
export const CONTACT_WHATSAPP = "35699990000";
export const CONTACT_ADDRESS = "Europe";

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Web Design & Development",
    slug: "web-design-development",
    shortDesc:
      "Custom websites built from scratch. No templates. No WordPress themes. Hand-crafted code that performs.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript", "Vercel"],
    price: "1,500",
    icon: "Monitor",
  },
  {
    title: "E-Commerce",
    slug: "ecommerce",
    shortDesc:
      "Online stores that convert. From boutique shops to full-scale retail \u2014 beautiful and built to sell.",
    tags: ["Shopify", "WooCommerce", "Stripe", "Custom"],
    price: "3,500",
    icon: "ShoppingBag",
  },
  {
    title: "Branding & Identity",
    slug: "branding-identity",
    shortDesc:
      "Logos, colour systems, typography, brand guidelines \u2014 the foundation everything else is built on.",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
    price: "2,000",
    icon: "Palette",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    shortDesc:
      "User-centred design that looks stunning and converts. Research, wireframes, prototypes, and pixel-perfect interfaces.",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
    price: "2,500",
    icon: "Layers",
  },
  {
    title: "SEO & Performance",
    slug: "seo-performance",
    shortDesc:
      "Beautiful means nothing if nobody finds it. We build fast, accessible, and search-engine-optimised from day one.",
    tags: ["Technical SEO", "Core Web Vitals", "Schema", "Analytics"],
    price: "500/mo",
    icon: "TrendingUp",
  },
  {
    title: "Website Redesign",
    slug: "website-redesign",
    shortDesc:
      "Your current site not cutting it? We take what you have and transform it into something extraordinary.",
    tags: ["Audit", "Redesign", "Migration", "Optimisation"],
    price: "1,200",
    icon: "RefreshCw",
  },
  {
    title: "Hosting & Maintenance",
    slug: "hosting-maintenance",
    shortDesc:
      "Launch is just the beginning. We keep your site fast, secure, updated, and backed up.",
    tags: ["Vercel", "Monitoring", "Backups", "Updates"],
    price: "80/mo",
    icon: "Server",
  },
  {
    title: "Digital Strategy",
    slug: "digital-strategy",
    shortDesc:
      "Not sure where to start? We help you define your digital roadmap and prioritise what moves the needle.",
    tags: ["Audit", "Strategy", "Roadmap", "Training"],
    price: "2,000",
    icon: "Compass",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Hotels & Resorts",
    desc: "Luxury digital experiences for hospitality",
    icon: "Building",
  },
  {
    name: "Restaurants & Bars",
    desc: "Websites as atmospheric as your venue",
    icon: "UtensilsCrossed",
  },
  {
    name: "Real Estate",
    desc: "Property platforms that sell",
    icon: "Home",
  },
  {
    name: "E-Commerce",
    desc: "Online stores that convert",
    icon: "ShoppingCart",
  },
  {
    name: "Healthcare & Wellness",
    desc: "Trust-building digital presence",
    icon: "Heart",
  },
  {
    name: "NGOs & Non-Profits",
    desc: "Amplifying missions that matter",
    icon: "Globe",
  },
  {
    name: "Finance & Professional",
    desc: "Credibility at first click",
    icon: "Briefcase",
  },
  {
    name: "Fitness & Lifestyle",
    desc: "Energetic brands, high-performing sites",
    icon: "Dumbbell",
  },
  {
    name: "Education & Training",
    desc: "Knowledge platforms that engage",
    icon: "GraduationCap",
  },
  {
    name: "Technology & SaaS",
    desc: "Products that scale",
    icon: "Cpu",
  },
  {
    name: "Construction & Trades",
    desc: "Professional presence for skilled trades",
    icon: "Wrench",
  },
  {
    name: "Government & Public",
    desc: "Accessible, compliant, trusted",
    icon: "Landmark",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "They didn\u2019t just redesign our website \u2014 they redesigned how our customers see us. Bookings tripled in the first month.",
    name: "James Borg",
    title: "General Manager",
    company: "Grand Harbour Hotel",
    location: "Sliema",
  },
  {
    quote:
      "We went from an embarrassing Wix site to something that looks like a million euros. The ROI was immediate.",
    name: "Maria Camilleri",
    title: "Owner",
    company: "Porto Valletta",
    location: "Valletta",
  },
  {
    quote:
      "The team understood our vision from the first meeting. The process was transparent, the delivery was flawless.",
    name: "Stefan Grech",
    title: "CEO",
    company: "CyberShield Malta",
    location: "Smart City Malta",
  },
  {
    quote:
      "Our old site loaded in 8 seconds. The new one loads in 1.2. Our Google rankings went from page 3 to page 1.",
    name: "Diana Fenech",
    title: "Marketing Director",
    company: "MaltaLiving",
    location: "St Julian\u2019s",
  },
  {
    quote:
      "They built our entire e-commerce platform in 4 weeks. We\u2019ve done \u20AC200K in sales in the first year.",
    name: "Luca Vella",
    title: "Founder",
    company: "Olive & Stone",
    location: "Mdina",
  },
  {
    quote:
      "The NGO world is used to ugly websites. They gave us something that finally matches the importance of our mission.",
    name: "Dr. Anna M\u00fcller",
    title: "Director",
    company: "Swiss Health Alliance",
    location: "Z\u00fcrich",
  },
  {
    quote:
      "We interviewed five agencies. They were the only ones who asked about our business goals before showing templates.",
    name: "Robert Mifsud",
    title: "COO",
    company: "FinanceFirst Malta",
    location: "Sliema",
  },
  {
    quote:
      "The maintenance package alone is worth it. Zero downtime in 18 months.",
    name: "Mark Zammit",
    title: "IT Manager",
    company: "Sengha",
    location: "Valletta",
  },
] as const;
