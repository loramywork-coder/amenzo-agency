import { generatePageMeta } from "@/lib/seo";
import { WebsiteSchema } from "@/components/structured-data";
import { HomePage } from "@/components/homepage";

export const metadata = generatePageMeta({
  title: "Amenzo — Web Design Studio | Custom Websites from \u20AC750",
  description:
    "Custom-built websites that convert. No templates, no WordPress. Next.js, React, Tailwind — built for speed. From \u20AC750.",
  path: "",
});

export default function Page() {
  return (
    <>
      <WebsiteSchema />
      <HomePage />
    </>
  );
}
