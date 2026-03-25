export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  categoryTag: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  resultHighlight: string;
  testimonial?: {
    quote: string;
    name: string;
    title: string;
  };
  techStack: string[];
  image: string;
  images: string[];
  demoSlug?: string;
  color: string;
}

export const projects: Project[] = [
  {
    slug: "grand-harbour-hotel",
    title: "Grand Harbour Hotel",
    client: "Grand Harbour Hotel",
    category: "Hospitality",
    categoryTag: "HOSPITALITY",
    description:
      "A complete digital transformation for one of Sliema\u2019s most prestigious hotels. From an outdated Wix site to a premium, trilingual booking experience.",
    challenge:
      "The hotel had a Wix website that hadn\u2019t been updated in 4 years. It was slow, not mobile-friendly, and didn\u2019t reflect the luxury experience guests received on-site. They were losing direct bookings to OTAs because their own site was embarrassing.",
    approach:
      "We started with a full brand audit and guest journey mapping. The design direction was luxury minimalism \u2014 letting the property speak for itself through large-format photography and seamless booking flows. We built a trilingual system (EN/DE/FR) to serve their core markets.",
    solution:
      "A bespoke Next.js website with integrated booking engine, virtual room tours, and a content management system that lets staff update rates and availability in real-time. Performance was paramount \u2014 the site loads in under 1.5 seconds on mobile.",
    results: [
      "+180% organic traffic",
      "+45% direct bookings",
      "Lighthouse score: 98",
      "3 languages supported",
    ],
    resultHighlight: "+180% organic traffic",
    testimonial: {
      quote:
        "They didn\u2019t just redesign our website \u2014 they redesigned how our customers see us.",
      name: "James Borg",
      title: "General Manager",
    },
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Sanity CMS", "i18n"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=3840&q=90",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=3840&q=90",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=3840&q=90",
    ],
    demoSlug: "hotel",
    color: "#C9A96E",
  },
  {
    slug: "porto-valletta",
    title: "Porto Valletta",
    client: "Porto Valletta",
    category: "Gastro",
    categoryTag: "GASTRO",
    description:
      "A moody, atmospheric website for Valletta\u2019s newest fine dining destination. The site needed to feel like walking into the restaurant.",
    challenge:
      "A brand-new restaurant with no online presence. They needed a website that captured the moody, intimate atmosphere of their venue while making it effortless to browse the menu and book a table.",
    approach:
      "Dark, rich design with cinematic photography. Every scroll feels intentional. We designed the menu as an experience, not a PDF download. The reservation system is integrated directly, no third-party redirects.",
    solution:
      "A visually stunning single-scroll experience with parallax imagery, animated menu sections, and an integrated reservation system. The design uses dark backgrounds with warm accent lighting to mirror the restaurant\u2019s ambiance.",
    results: [
      "+60% reservations in first month",
      "Average session: 3.2 minutes",
      "Lighthouse score: 96",
      "Zero PDF menus",
    ],
    resultHighlight: "+60% reservations",
    testimonial: {
      quote:
        "We went from no online presence to the most beautiful restaurant website in Malta.",
      name: "Maria Camilleri",
      title: "Owner",
    },
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=3840&q=90",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=3840&q=90",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=3840&q=90",
    ],
    demoSlug: "restaurant",
    color: "#8B4513",
  },
  {
    slug: "maltaliving",
    title: "MaltaLiving",
    client: "MaltaLiving",
    category: "Real Estate",
    categoryTag: "REAL ESTATE",
    description:
      "A comprehensive real estate platform with advanced search, interactive maps, and agent profiles. Built to handle 200+ property listings.",
    challenge:
      "An established real estate agency running on an outdated WordPress site with broken search functionality. Property pages took 6+ seconds to load, and their agents had no individual profiles.",
    approach:
      "We rebuilt from the ground up with a focus on search performance and lead generation. The property search uses faceted filtering with instant results, and every agent has a branded profile page with their listings and reviews.",
    solution:
      "A high-performance platform with map-based property search, saved searches, agent matchmaking, and a CMS that makes listing new properties a 2-minute task. Integrated with their existing CRM.",
    results: [
      "200+ properties listed in Q1",
      "Page load: 1.2s (was 6s)",
      "+140% lead generation",
      "3x more enquiries per listing",
    ],
    resultHighlight: "200+ properties in Q1",
    techStack: [
      "Next.js",
      "Supabase",
      "Mapbox",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=3840&q=90",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=3840&q=90",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=3840&q=90",
    ],
    demoSlug: "realestate",
    color: "#2563EB",
  },
  {
    slug: "fitzone-malta",
    title: "FitZone Malta",
    client: "FitZone Malta",
    category: "Fitness",
    categoryTag: "FITNESS",
    description:
      "An energetic, high-performance website for Malta\u2019s fastest-growing gym chain. Class bookings, membership management, and trainer profiles.",
    challenge:
      "A gym with 3 locations and no unified digital presence. Membership sign-ups were handled through paper forms, and class schedules were posted as images on Instagram.",
    approach:
      "Bold, high-energy design with a focus on conversion. We digitised their entire membership flow and built a class booking system that updates in real-time. The design screams energy without being chaotic.",
    solution:
      "A comprehensive fitness platform with online membership sign-up, class booking with capacity tracking, trainer profiles with specialisations, and a members-only area with workout plans.",
    results: [
      "+120 new members in month 1",
      "85% class bookings moved online",
      "30% reduction in admin time",
      "Lighthouse score: 97",
    ],
    resultHighlight: "+120 new members",
    techStack: [
      "Next.js",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=3840&q=90",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=3840&q=90",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=3840&q=90",
    ],
    demoSlug: "fitness",
    color: "#EF4444",
  },
  {
    slug: "swiss-health-alliance",
    title: "Swiss Health Alliance",
    client: "Swiss Health Alliance",
    category: "Non-Profit",
    categoryTag: "NGO",
    description:
      "A mission-driven website for a Swiss-based health NGO. Multilingual, donation-integrated, and built to amplify their impact.",
    challenge:
      "A critically important NGO with a website that looked like it was built in 2010. Online donations were almost non-existent because the process was broken. They needed something that matched the seriousness of their mission.",
    approach:
      "Clean, trustworthy design that puts the mission front and centre. We built a seamless donation flow with multiple payment options and recurring donation support. The bilingual system (DE/EN) serves their core audience.",
    solution:
      "A purpose-built platform with integrated donation processing, impact storytelling with data visualisation, publications library, and event management. The design balances professionalism with emotional storytelling.",
    results: [
      "+300% online donations",
      "Average donation: +40%",
      "Newsletter sign-ups: 5x",
      "2 languages supported",
    ],
    resultHighlight: "+300% online donations",
    techStack: [
      "Next.js",
      "Stripe",
      "Sanity CMS",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=3840&q=90",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=3840&q=90",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=3840&q=90",
    ],
    demoSlug: "ngo",
    color: "#059669",
  },
  {
    slug: "sengha",
    title: "Sengha",
    client: "Sengha",
    category: "Marketplace",
    categoryTag: "PLATFORM",
    description:
      "A full-scale trades marketplace connecting homeowners with verified tradespeople across Malta. Think Checkatrade, but Maltese.",
    challenge:
      "Malta had no dedicated platform for finding reliable tradespeople. Homeowners relied on word of mouth, and skilled workers had no way to build an online reputation.",
    approach:
      "We designed a two-sided marketplace with separate experiences for homeowners and tradespeople. The platform includes verification, reviews, messaging, and invoicing \u2014 everything needed for the transaction to happen on-platform.",
    solution:
      "A comprehensive marketplace with 25+ trade categories, tradesperson dashboards with portfolio management, a review system with verified job completion, in-platform messaging, and automated invoicing.",
    results: [
      "500+ tradespeople registered",
      "1,200+ jobs posted in 6 months",
      "4.8 average rating",
      "98% invoice completion rate",
    ],
    resultHighlight: "500+ tradespeople registered",
    techStack: [
      "Next.js",
      "Supabase",
      "Stripe Connect",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=3840&q=90",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=3840&q=90",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=3840&q=90",
    ],
    demoSlug: "trades",
    color: "#D97706",
  },
  {
    slug: "olive-and-stone",
    title: "Olive & Stone",
    client: "Olive & Stone",
    category: "E-Commerce",
    categoryTag: "E-COMMERCE",
    description:
      "An artisan e-commerce platform for premium Maltese products. Olive oils, honey, ceramics, and local crafts \u2014 beautifully presented and shipped worldwide.",
    challenge:
      "A collection of Maltese artisans with no unified online shop. They were selling through Instagram DMs and local markets, missing out on the tourist and export market entirely.",
    approach:
      "We created an e-commerce experience that tells the story behind every product. Each item has its maker\u2019s story, origin details, and craftsmanship process. The design is warm, Mediterranean, and premium.",
    solution:
      "A custom e-commerce platform with storytelling-driven product pages, gift box builder, subscription service for monthly Maltese products, and international shipping integration with real-time rates.",
    results: [
      "\u20AC50K revenue in 6 months",
      "Orders from 12 countries",
      "Average order: \u20AC85",
      "40% repeat customers",
    ],
    resultHighlight: "\u20AC50K revenue in 6 months",
    techStack: [
      "Next.js",
      "Stripe",
      "Sanity CMS",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=3840&q=90",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=3840&q=90",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=3840&q=90",
    ],
    demoSlug: "ecommerce",
    color: "#92400E",
  },
  {
    slug: "cybershield-malta",
    title: "CyberShield Malta",
    client: "CyberShield Malta",
    category: "Technology",
    categoryTag: "TECH",
    description:
      "A dark, technical, authority-building website for an enterprise cybersecurity firm. Every pixel communicates expertise and trust.",
    challenge:
      "A cybersecurity company whose website looked less secure than a Geocities page. They needed a digital presence that matched their technical expertise and inspired confidence in enterprise clients.",
    approach:
      "Dark, technical design with data visualisations and interactive threat maps. The content strategy focused on demonstrating expertise through thought leadership, case studies, and real-time security metrics.",
    solution:
      "A high-impact corporate website with interactive service explorer, live threat dashboard widget, detailed case studies with ROI metrics, and a gated resource library for lead generation.",
    results: [
      "+85% qualified leads",
      "3x more RFP responses",
      "Average session: 4.5 minutes",
      "Lighthouse score: 97",
    ],
    resultHighlight: "+85% qualified leads",
    testimonial: {
      quote:
        "Our website finally reflects our capabilities. Enterprise clients take us seriously now.",
      name: "Stefan Grech",
      title: "CEO",
    },
    techStack: [
      "Next.js",
      "Three.js",
      "D3.js",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=3840&q=90",
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=3840&q=90",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=3840&q=90",
    ],
    demoSlug: "saas",
    color: "#7C3AED",
  },
];

export const categories = [
  "All",
  "Hospitality",
  "Gastro",
  "Real Estate",
  "E-Commerce",
  "Technology",
  "Non-Profit",
  "Fitness",
  "Marketplace",
] as const;
