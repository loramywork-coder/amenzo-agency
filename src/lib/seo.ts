import type { Metadata } from "next";

export const siteConfig = {
  name: "Amenzo",
  legalName: "ProgressPro",
  url: "https://amenzo.co",
  description:
    "Amenzo builds custom, hand-coded websites for businesses worldwide. No templates, no WordPress. Professional web design from EUR 750.",
  phone: "+31628318123",
  phoneDisplay: "+31 62 831 8123",
  email: "info@amenzo.co",
  founder: "Amenzo Studio",
  founders: ["Amy de Boers", "Lorenzo Senn"],
  foundingYear: 2024,
  address: {
    street: "Dammerweg 81",
    locality: "Nederhorst den Berg",
    region: "North Holland",
    postalCode: "1394 GR",
    country: "NL",
    countryFull: "Netherlands",
  },
  geo: { lat: 52.2636, lng: 5.0419 },
  social: {
    linkedin: "https://www.linkedin.com/company/amenzo-studio/",
  },
  priceRange: "\u20AC750 - \u20AC8,000+",
  currency: "EUR",
  keywords: {
    primary: [
      "web design",
      "website design",
      "web developer",
      "custom website",
      "web design studio",
    ],
    secondary: [
      "Next.js web design",
      "custom coded website",
      "affordable web design",
      "multilingual website",
      "restaurant website",
      "hotel website",
      "e-commerce website",
      "small business website",
    ],
    brand: ["Amenzo", "amenzo.co"],
  },
} as const;

export function generatePageMeta({
  title,
  description,
  path = "",
  image = "/opengraph-image",
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Amenzo`,
      description,
      url,
      siteName: siteConfig.name,
      type: type as "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Amenzo Custom Web Design`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Amenzo`,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
  };
}
