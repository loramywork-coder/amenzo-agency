import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flux Performance — Personal Training Studio, Zug",
  description:
    "Results-driven personal training in Zug. 1:1 coaching, small groups, and online programs with NSCA-certified coach Marc Alder. Demo by Amenzo Studio.",
  robots: { index: false, follow: false },
};

export default function FluxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
