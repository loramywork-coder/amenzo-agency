import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Design Previews & Case Studies",
  description:
    "Explore Amenzo's portfolio of concept showcases and case studies. Custom web design, e-commerce, and branding projects across hospitality, real estate, and tech.",
  openGraph: {
    title: "Our Work — Design Previews & Case Studies | Amenzo",
    description:
      "Explore Amenzo's portfolio of concept showcases and case studies. Custom web design, e-commerce, and branding projects across hospitality, real estate, and tech.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
