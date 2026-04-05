import { generatePageMeta } from "@/lib/seo";
import { CapabilitiesShowcase } from "@/components/capabilities-showcase";

export const metadata = generatePageMeta({
  title: "Design Capabilities — Interactive Components | Amenzo",
  description:
    "Tap, swipe, and scroll through 20+ interactive design components. Every element is live and touchable — on desktop and mobile.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return <CapabilitiesShowcase />;
}
