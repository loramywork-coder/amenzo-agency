import { generatePageMeta } from "@/lib/seo";

export const metadata = generatePageMeta({
  title: "Our Work — Custom Websites We've Built",
  description: "See the custom websites Amenzo has built for businesses worldwide. Real projects showcasing responsive design, multilingual support, and premium web development.",
  path: "/work",
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
