import { Cormorant, Inter } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400"],
});

export const metadata = {
  title: "Studio Ēlan — Interior Design",
  robots: { index: false, follow: false },
};

export default function InteriorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} ${inter.variable}`} style={{ scrollBehavior: "smooth" }}>
      {children}
    </div>
  );
}
