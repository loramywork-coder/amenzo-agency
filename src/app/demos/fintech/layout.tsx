import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Meridian Capital — Global Financial Infrastructure",
  robots: { index: false, follow: false },
};

export default function FintechLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${mono.variable}`} style={{ scrollBehavior: "smooth" }}>
      {children}
    </div>
  );
}
