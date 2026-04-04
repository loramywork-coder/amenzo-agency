import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/seo";
import { Navigation } from "@/components/layout/navigation";
import { FooterWrapper } from "@/components/layout/footer-wrapper";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { LocalBusinessSchema } from "@/components/structured-data";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import WhatsAppButton from "@/components/whatsapp-button";
import CursorGlow from "@/components/cursor-glow";

import ExitIntent from "@/components/exit-intent";
import { Toaster } from "sonner";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Variable.woff2", style: "normal" },
    { path: "../fonts/Satoshi-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Amenzo \u2014 Where Code Meets Craft",
    template: "%s | Amenzo",
  },
  description: siteConfig.description,
  keywords: [
    "web design",
    "website design",
    "web developer",
    "custom website",
    "Next.js web design",
    "Amenzo",
    "hand-coded websites",
    "professional web design",
    "multilingual website",
    "responsive web design",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Amenzo \u2014 Where Code Meets Craft",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amenzo - Custom Web Design Studio - Hand-Coded Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenzo \u2014 Where Code Meets Craft",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-text-body font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <LocalBusinessSchema />
        <SmokeBackground smokeColor="#FFFFFF" />
        <ScrollProgress />
        <ScrollToTop />
        <Navigation />
        <main id="main" className="relative z-10">{children}</main>
        <FooterWrapper />
        <WhatsAppButton />
        <CursorGlow />
        <ExitIntent />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#141414",
              border: "1px solid #1E1E1E",
              color: "#F0F0F0",
            },
          }}
        />
      </body>
    </html>
  );
}
