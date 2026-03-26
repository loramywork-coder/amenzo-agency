import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project — Project Brief Wizard",
  description:
    "Submit your project brief to Amenzo. Walk through our guided wizard to define your requirements, timeline, and budget. Free consultation included.",
  openGraph: {
    title: "Start a Project — Project Brief Wizard | Amenzo",
    description:
      "Submit your project brief to Amenzo. Walk through our guided wizard to define your requirements, timeline, and budget. Free consultation included.",
  },
};

export default function StartProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
