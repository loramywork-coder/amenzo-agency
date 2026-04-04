import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bright Dental Studio | Modern Dental Care",
  description: "Premium dental care in a calm, spa-like environment. Cosmetic, general, and implant dentistry.",
  robots: { index: false, follow: false },
};

export default function DentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
