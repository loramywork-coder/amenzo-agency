export const SITE_NAME = "AMENZO";
export const SITE_URL = "https://amenzo.co";
export const SITE_DESCRIPTION =
  "Custom web design and development. Starting from EUR 5,000. Serving businesses worldwide.";
export const CONTACT_EMAIL = "info@amenzo.co";
export const CONTACT_PHONE = "+31 62 831 8123";
export const CONTACT_WHATSAPP = "31628318123";
export const CONTACT_ADDRESS = "";

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

/** Slim header nav — only primary conversion links. Footer uses NAV_LINKS for everything. */
export const HEADER_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const SERVICES = [
  {
    title: "Web Design & Development",
    slug: "web-design-development",
    shortDesc:
      "Custom websites built from scratch with Next.js and React. No templates, no WordPress.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript", "Vercel"],
    price: "1,000",
    icon: "Monitor",
  },
  {
    title: "Website Redesign",
    slug: "website-redesign",
    shortDesc:
      "Rebuild your existing site on modern technology. Content migrated, SEO preserved.",
    tags: ["Migration", "Next.js", "SEO Preservation", "Performance"],
    price: "750",
    icon: "RefreshCw",
  },
  {
    title: "E-Commerce",
    slug: "ecommerce",
    shortDesc:
      "Online stores with custom code and Stripe. Product pages, cart, checkout — built to convert.",
    tags: ["Next.js", "Stripe", "Custom Cart", "Product Pages"],
    price: "4,000",
    icon: "ShoppingBag",
  },
  {
    title: "SEO & Performance",
    slug: "seo-performance",
    shortDesc:
      "Fast, search-optimised sites from day one. Monthly monitoring and performance tuning.",
    tags: ["Technical SEO", "Core Web Vitals", "Schema", "Analytics"],
    price: "300/mo",
    icon: "TrendingUp",
  },
  {
    title: "Hosting & Maintenance",
    slug: "hosting-maintenance",
    shortDesc:
      "Managed hosting, SSL, backups, monitoring, and updates. Your site stays fast and secure.",
    tags: ["Vercel", "Monitoring", "Backups", "Updates"],
    price: "80/mo",
    icon: "Server",
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
      "They didn’t just redesign our website — they redesigned how our customers see us. Bookings tripled in the first month.",
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
    company: "Mediterranean Living",
    location: "St Julian’s",
  },
  {
    quote:
      "They built our entire e-commerce platform in 4 weeks. We’ve done \u20AC200K in sales in the first year.",
    name: "Luca Vella",
    title: "Founder",
    company: "Olive & Stone",
    location: "Mdina",
  },
  {
    quote:
      "The NGO world is used to ugly websites. They gave us something that finally matches the importance of our mission.",
    name: "Dr. Anna Müller",
    title: "Director",
    company: "Swiss Health Alliance",
    location: "Zürich",
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
    company: "Malta Financial Group",
    location: "Valletta",
  },
] as const;
