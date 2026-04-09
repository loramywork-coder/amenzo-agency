import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porto Valletta — Contemporary Mediterranean, Valletta",
  description:
    "Porto Valletta is a fine-dining restaurant on the Valletta waterfront. A single tasting menu, six nights a week. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
