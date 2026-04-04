import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata = { robots: { index: false, follow: false } };

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} min-h-screen`}
      style={{
        background: "#0A0A08",
        color: "#F5E6D3",
        fontFamily: "var(--font-body), system-ui, sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </div>
  );
}
