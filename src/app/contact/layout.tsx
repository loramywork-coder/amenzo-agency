import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Contact Amenzo for web design, development, and digital strategy. Based in Sliema, Malta. Free 30-minute consultation available.",
  openGraph: {
    title: "Contact Us — Get in Touch | Amenzo",
    description:
      "Contact Amenzo for web design, development, and digital strategy. Based in Sliema, Malta. Free 30-minute consultation available.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
