import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
// TypeScript may complain about side-effect CSS imports in some setups.
// @ts-ignore: Implicit any for CSS module import used for global styles
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PixelCat from "@/components/PixelCat";
import { profile } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://denseyzenel.dev"),
  title: `${profile.name} — Data Analyst Portfolio`,
  description:
    "Densey Zenel Maben — Data Analyst with an MSc Data Science for Business (Distinction). SQL, Python and Power BI work in data validation, quality and reporting.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${profile.name} — Data Analyst Portfolio`,
    description: profile.summary,
    url: "https://denseyzenel.dev",
    siteName: profile.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <div id="top" />
        <PixelCat />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
