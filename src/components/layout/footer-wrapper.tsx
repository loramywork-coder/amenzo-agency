"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

export function FooterWrapper() {
  const pathname = usePathname();
  if (pathname.startsWith("/demos") || pathname.startsWith("/showcases")) return null;
  return <Footer />;
}
