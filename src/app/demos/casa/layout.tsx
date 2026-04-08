import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa Luma — Mediterranean Restaurant, Bern",
  description:
    "Casa Luma is a Mediterranean fine-casual restaurant in the heart of Bern. Seasonal menu, thoughtful wines, warm hospitality. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function CasaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
