import { generatePageMeta } from "@/lib/seo";
import { WebsiteSchema } from "@/components/structured-data";
import { HomePage } from "@/components/homepage";

export const metadata = generatePageMeta({
  title: "Amenzo \u2014 Web Design Studio | Custom Websites from \u20AC750",
  description:
    "Hand-coded websites that convert. No templates, no WordPress. Next.js, React, Tailwind \u2014 built for speed. From \u20AC750.",
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
