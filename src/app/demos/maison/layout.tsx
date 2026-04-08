import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison Noir — Luxury Sustainable Fashion, Geneva",
  description:
    "Maison Noir is a Geneva-based sustainable fashion house. Timeless pieces, made slowly, made to last. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function MaisonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
