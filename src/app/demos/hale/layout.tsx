import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hale & Partners — Architecture & Interior Design, Zürich",
  description:
    "Hale & Partners is an architecture and interior design studio based in Zürich. Residential, commercial, and cultural projects across Europe. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function HaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
