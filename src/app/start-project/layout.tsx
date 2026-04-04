import { generatePageMeta } from "@/lib/seo";

export const metadata = generatePageMeta({
  title: "Start Your Website Project — Custom Web Design",
  description: "Ready to build your website? Tell us about your project and we will respond within 24 hours. Custom web design from EUR 750. No templates. You own the code.",
  path: "/start-project",
});

export default function StartProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
