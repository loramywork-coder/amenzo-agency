import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aura Beauty Studio — Where Beauty Meets Intention | Zürich",
  description:
    "Zurich's premier beauty destination. Bespoke facials, body treatments, brows & lashes. Swiss-sourced products. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function BeautyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
