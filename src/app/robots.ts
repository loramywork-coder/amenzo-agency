import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/demos/", "/api/", "/_next/"],
      },
    ],
    sitemap: "https://amenzo.co/sitemap.xml",
  };
}
