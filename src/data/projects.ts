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
      "Trilingual (EN/DE/FR)",
      "Room Gallery with Lightbox",
      "Integrated Booking System",
      "CMS-Ready Content",
    ],
    resultHighlight: "Trilingual · Booking System",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for hospitality businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Sanity CMS", "i18n"],
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=3840&q=90",
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
      "Dark Atmospheric Theme",
      "Full Interactive Menu",
      "Online Reservations",
      "Bilingual (EN/MT)",
    ],
    resultHighlight: "Full Menu · Reservations",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for restaurant businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=3840&q=90",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=3840&q=90",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=3840&q=90",
    ],
    demoSlug: "restaurant",
    color: "#8B4513",
  },
  {
    slug: "mediterranean-living",
    title: "Mediterranean Living",
    client: "Mediterranean Living",
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
      "Property Search with Filters",
      "Agent Profile Pages",
      "Map Integration",
      "Lead Capture Forms",
    ],
    resultHighlight: "Property Search · Filters",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for real estate businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: [
      "Next.js",
      "Supabase",
      "Mapbox",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=3840&q=90",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=3840&q=90",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=3840&q=90",
    ],
    demoSlug: "realestate",
    color: "#2563EB",
  },
  {
    slug: "fitzone",
    title: "FitZone",
    client: "FitZone",
    category: "Fitness",
    categoryTag: "FITNESS",
    description:
      "An energetic, high-performance website for a fast-growing gym chain. Class bookings, membership management, and trainer profiles.",
    challenge:
      "A gym with 3 locations and no unified digital presence. Membership sign-ups were handled through paper forms, and class schedules were posted as images on Instagram.",
    approach:
      "Bold, high-energy design with a focus on conversion. We digitised their entire membership flow and built a class booking system that updates in real-time. The design screams energy without being chaotic.",
    solution:
      "A comprehensive fitness platform with online membership sign-up, class booking with capacity tracking, trainer profiles with specialisations, and a members-only area with workout plans.",
    results: [
      "Interactive Class Schedule",
      "Online Membership Sign-up",
      "Trainer Profiles",
      "Class Booking System",
    ],
    resultHighlight: "Class Schedule · Bookings",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for fitness businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: [
      "Next.js",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=3840&q=90",
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
      "Donation Processing System",
      "Impact Data Visualisation",
      "Multilingual (DE/EN)",
      "Event Management",
    ],
    resultHighlight: "Donations · Impact Reports",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for non-profit businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: [
      "Next.js",
      "Stripe",
      "Sanity CMS",
      "Tailwind CSS",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=3840&q=90",
    images: [
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=3840&q=90",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=3840&q=90",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=3840&q=90",
    ],
    demoSlug: "ngo",
    color: "#059669",
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
      "Working Shopping Cart",
      "Product Gallery with Zoom",
      "Stripe Checkout Integration",
      "Brand Storytelling",
    ],
    resultHighlight: "E-Commerce · Shopping Cart",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for e-commerce businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
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
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=3840&q=90",
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
      "SaaS Landing Page Design",
      "3-Tier Pricing Comparison",
      "Feature Showcase Sections",
      "Lead Generation CTAs",
    ],
    resultHighlight: "SaaS Landing · Pricing Tiers",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for technology businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
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
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=3840&q=90",
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=3840&q=90",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=3840&q=90",
    ],
    demoSlug: "saas",
    color: "#7C3AED",
  },
  {
    slug: "serenita-spa",
    title: "Serenità Spa",
    client: "Serenità Spa",
    category: "Wellness",
    categoryTag: "WELLNESS",
    description: "A luxury spa website with treatment menus, online booking, and an atmosphere that relaxes you before you even arrive.",
    challenge: "A premium spa with no digital presence beyond an Instagram page. Clients had to call to book, and the brand's luxury positioning was invisible online.",
    approach: "We designed a serene, minimal experience that mirrors the calm of the spa itself. Warm tones, breathing whitespace, and a seamless booking flow.",
    solution: "A beautiful single-page site with treatment categories, pricing, online booking integration, gift voucher purchases, and a gallery that sells the experience.",
    results: ["Treatment Menu with Booking", "Gift Card System", "Photo Gallery with Lightbox", "Online Appointment Booking"],
    resultHighlight: "Treatment Booking · Gift Cards",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for wellness businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=3840&q=90",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=3840&q=90", "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=3840&q=90"],
    demoSlug: "trades",
    color: "#D4B896",
  },
  {
    slug: "reel-house-cinema",
    title: "Reel House Cinema",
    client: "Reel House Cinema",
    category: "Entertainment",
    categoryTag: "ENTERTAINMENT",
    description: "A premium cinema website with real-time showtimes, seat selection, and online ticket purchasing.",
    challenge: "A boutique cinema competing against multiplex chains. Their existing site was a static HTML page with no booking capability.",
    approach: "Bold, cinematic design with red and gold accents. The booking flow was designed to be faster than any competitor — 3 clicks from homepage to confirmed ticket.",
    solution: "A high-impact site with dynamic showtimes, IMAX/Dolby screen filters, seat maps, and Stripe-powered ticket purchases. Plus a loyalty programme integration.",
    results: ["Showtime Listings", "Interactive Seat Selection", "Film Detail Pages", "Pricing & Experience Guide"],
    resultHighlight: "Showtimes · Seat Selection",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for entertainment businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=3840&q=90",
    images: ["https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=3840&q=90", "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=3840&q=90"],
    demoSlug: "cinema",
    color: "#DC2626",
  },
  {
    slug: "harbour-square",
    title: "Harbour Square",
    client: "Harbour Square",
    category: "Retail",
    categoryTag: "RETAIL",
    description: "A shopping centre website with store directory, event listings, dining guide, and visitor planning tools.",
    challenge: "A major retail destination with 80+ stores but a website that was essentially a PDF directory. No events, no dining info, no reason to visit the site.",
    approach: "We built a living, breathing digital hub — not just a directory. Real-time events, dining recommendations, store promotions, and a visit planner.",
    solution: "A dynamic platform with filterable store directory, event calendar, dining guide with menus, parking availability, and a loyalty programme.",
    results: ["Store Directory with Search", "Event Listings", "Dining Guide", "Interactive Floor Plans"],
    resultHighlight: "Store Directory · Events",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for retail businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Mapbox", "Vercel"],
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=3840&q=90",
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=3840&q=90", "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=3840&q=90"],
    demoSlug: "mall",
    color: "#F43F5E",
  },
  {
    slug: "elena-voss",
    title: "Elena Voss Photography",
    client: "Elena Voss",
    category: "Creative",
    categoryTag: "CREATIVE",
    description: "An ultra-minimal photographer portfolio with masonry gallery, full-screen lightbox, and commission enquiry system.",
    challenge: "A fashion and editorial photographer using Squarespace with a generic template. The portfolio didn't do justice to the calibre of the work.",
    approach: "We stripped everything back. Black background, no clutter — just the photographs at maximum impact. Every design decision serves the imagery.",
    solution: "A bespoke portfolio with masonry layout, category filtering, full-screen lightbox with swipe navigation, and a discreet contact form for commissions.",
    results: ["Full-Screen Portfolio Grid", "Project Lightbox Gallery", "Minimal Editorial Design", "Responsive Image Layout"],
    resultHighlight: "Portfolio Grid · Lightbox",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for creative businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=3840&q=90",
    images: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=3840&q=90", "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=3840&q=90"],
    demoSlug: "portfolio",
    color: "#FFFFFF",
  },
  {
    slug: "atelier-noir",
    title: "Atelier Noir Gallery",
    client: "Atelier Noir",
    category: "Art & Culture",
    categoryTag: "ART & CULTURE",
    description: "A sophisticated art gallery website with exhibition showcases, artist profiles, and online art sales.",
    challenge: "A contemporary gallery with a static WordPress site that couldn't handle exhibition rotations or online viewing rooms — critical post-pandemic.",
    approach: "High-contrast design inspired by gallery walls — off-white backgrounds, charcoal text, and gold accents. The art is always the focal point.",
    solution: "A CMS-driven platform with rotating exhibitions, artist pages, online viewing room, artwork enquiry system, and newsletter integration.",
    results: ["Exhibition Pages", "Artist Profiles", "Event Calendar", "Dark Gallery Aesthetic"],
    resultHighlight: "Exhibitions · Artist Profiles",
    testimonial: {
      quote:
        "This is a design showcase demonstrating Amenzo's capabilities for art and culture businesses.",
      name: "Amenzo Design Team",
      title: "Design Showcase",
    },
    techStack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Stripe", "Vercel"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=3840&q=90",
    images: ["https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=3840&q=90", "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=3840&q=90"],
    demoSlug: "gallery",
    color: "#B8860B",
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
  "Wellness",
  "Entertainment",
  "Retail",
  "Creative",
  "Art & Culture",
] as const;
