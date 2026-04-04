import { generatePageMeta } from "@/lib/seo";

export const metadata = generatePageMeta({
  title: "Contact Amenzo — Free Web Design Consultation",
  description: "Get a free consultation for your website project. Amenzo — custom web design. Phone: +31 62 831 8123. Email: info@amenzo.co. Based in the Netherlands. Response within 24 hours.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
