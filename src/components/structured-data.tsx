import { siteConfig } from "@/lib/seo";

export function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description:
      "Custom web design studio specialising in hand-coded Next.js websites. We build fast, responsive, multilingual websites for businesses worldwide — no templates, no WordPress.",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    founders: siteConfig.founders.map((name) => ({
      "@type": "Person",
      name,
    })),
    foundingDate: String(siteConfig.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "EUR",
    paymentAccepted: "Bank Transfer",
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/favicon.svg`,
    sameAs: [siteConfig.social.linkedin],
    areaServed: [
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Continent", name: "Europe" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Startup Launch Package",
            description:
              "Hand-coded 1-5 page website for founders. Custom design, mobile responsive, Lighthouse 90+, deployed on Vercel. Delivered in 10 days.",
          },
          price: "750",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Basic Website Package",
            description:
              "Professional 1-5 page custom website with mobile-responsive design, contact form, basic SEO, and Google Analytics. Delivered in 1-2 weeks.",
          },
          price: "1000",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Website Package",
            description:
              "Custom designed 5-10 page website with 2 languages, blog section, SEO with schema markup, social media integration, and preview link. Delivered in 2-3 weeks.",
          },
          price: "2000",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Website Package",
            description:
              "Premium 10-20 page website with 3+ languages, animations, advanced features like galleries and booking forms, Lighthouse 95+ guaranteed. Delivered in 3-4 weeks.",
          },
          price: "4000",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Package",
            description:
              "Fully bespoke website with e-commerce, Stripe/PayPal integration, custom APIs, unlimited pages, and multi-language support. Delivered in 4-6 weeks.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "5000",
            maxPrice: "8000",
            priceCurrency: "EUR",
          },
        },
      ],
    },
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "E-Commerce",
      "SEO",
      "Responsive Design",
      "Multilingual Websites",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${siteConfig.url}${item.url}`,
      })),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${siteConfig.url}/insights/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: siteConfig.founder,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.svg`,
      },
    },
    image: image || `${siteConfig.url}/opengraph-image`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/${slug}`,
    },
    inLanguage: "en",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export const faqData = [
  {
    q: "How much does a website cost?",
    a: "At Amenzo, our website packages start from EUR 750 for our Startup Launch package (1-5 pages, 10-day delivery), EUR 1,000 for a basic site, EUR 2,000 for a standard bilingual site, EUR 4,000 for a premium multilingual site, and EUR 5,000+ for custom e-commerce builds. Every site is custom-coded with Next.js — no templates.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Delivery depends on the package: Basic sites take 1-2 weeks, Standard 2-3 weeks, Premium 3-4 weeks, and Custom builds 4-6 weeks. We provide a preview link before launch so you can review everything before going live.",
  },
  {
    q: "Do I own my website after it\u2019s built?",
    a: "Yes, you own everything. We hand over the full source code and all assets. There is no vendor lock-in \u2014 you are free to host it anywhere, modify it, or hire another developer. Your website is yours.",
  },
  {
    q: "Do you use WordPress?",
    a: "No. We build every website from scratch using Next.js, React, and Tailwind CSS \u2014 the same technology used by Netflix, Nike, and TikTok. Custom code means faster loading, better SEO, and a unique design that is not shared with thousands of other sites.",
  },
  {
    q: "Can you build multilingual websites?",
    a: "Yes. Our Standard package includes 2 languages, Premium includes 3 or more, and Custom packages support unlimited languages. We support any language combination your business needs.",
  },
  {
    q: "What is included in the monthly maintenance?",
    a: "Our Hosting and Maintenance plan (EUR 80 per month) includes hosting on Vercel global edge network, SSL certificates, security updates, daily backups, uptime monitoring, and minor content changes. Our Priority Support plan (EUR 200 per month) adds 2 hours per week of dedicated support, 12-hour response time, SEO monitoring, and quarterly performance reviews.",
  },
  {
    q: "Do you offer SEO services?",
    a: "Every website we build includes foundational SEO: meta tags, schema markup, sitemap, fast loading speeds, and mobile optimisation. For ongoing monthly SEO management, we offer it as an add-on at EUR 250 per month, which includes keyword tracking, content guidance, and performance reporting.",
  },
  {
    q: "Can you build an online shop?",
    a: "Yes. Our Custom package (EUR 5,000 to 8,000) includes full e-commerce with Stripe and PayPal integration, product management, shopping cart, checkout, and order notifications. We can also add e-commerce to any package as an add-on for EUR 1,500.",
  },
];
