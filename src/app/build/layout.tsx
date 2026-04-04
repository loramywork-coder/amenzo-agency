import { generatePageMeta } from "@/lib/seo";
export const metadata = generatePageMeta({
  title: "Build Your Website — Interactive Web Design Quote",
  description: "Use our interactive builder to configure your custom website. Choose features, pages, and add-ons. Get an instant estimate. Web design from EUR 750.",
  path: "/build",
});
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
