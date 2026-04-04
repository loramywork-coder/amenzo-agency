import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-gym-display",
});

export const metadata = { robots: { index: false, follow: false } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={spaceGrotesk.variable} style={{ scrollBehavior: "smooth" }}>
      {children}
    </div>
  );
}
