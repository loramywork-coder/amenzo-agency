import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kova Coffee — Artisan Roastery & Café, Zürich",
  description:
    "Single-origin coffee, slow-brewed with intention. Kova Coffee is an artisan roastery and café in Zürich. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function KovaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
