import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Harbour Hotel — Luxury 5★ Hotel, Valletta",
  description:
    "An intimate 5-star harbourside hotel in Valletta, Malta. Historic rooms, two restaurants, rooftop spa. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function HotelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
