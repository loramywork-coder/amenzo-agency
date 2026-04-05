import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

const satoshi = localFont({
  src: [{ path: "../../../fonts/Satoshi-Variable.woff2", style: "normal" }],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Nova Space — Compact Satellite Propulsion",
  robots: { index: false, follow: false },
};

export default function StartupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${satoshi.variable} ${mono.variable}`} style={{ scrollBehavior: "smooth" }}>
      {children}
    </div>
  );
}
