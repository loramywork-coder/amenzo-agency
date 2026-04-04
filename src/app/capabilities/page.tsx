import { generatePageMeta } from "@/lib/seo";
import { CapabilitiesShowcase } from "@/components/capabilities-showcase";

export const metadata = generatePageMeta({
  title: "Design Capabilities — What We Build | Amenzo",
  description:
    "Interactive showcase of design techniques. Buttons, cards, animations, layouts, forms — every component is live and touchable.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return <CapabilitiesShowcase />;
}
