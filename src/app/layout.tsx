import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Propsoch | Visit curated homes, negotiate smarter & buy intelligently",
  description: "Get end-to-end guidance from property wizards who've helped intelligent homebuyers buy 200+ homes. Experience delightful, unbiased home buying with floor plan analysis, lighting and ventilation assessments, risk analysis, and professional negotiations.",
  keywords: ["Propsoch", "Home buying advisor", "Bangalore real estate", "Mumbai real estate", "Property wizards", "Guided home buying"],
  authors: [{ name: "Thinkr Proptech Private Limited" }],
  metadataBase: new URL("https://www.propsoch.com"),
  openGraph: {
    title: "Propsoch | Guided Home Buying & Unbiased Real Estate Advisory",
    description: "Get end-to-end guidance from property wizards. Floor plan analysis, cost breakdowns, lighting assessments, and price negotiations.",
    url: "https://www.propsoch.com",
    siteName: "Propsoch",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propsoch | Guided Home Buying & Unbiased Real Estate Advisory",
    description: "Get end-to-end guidance from property wizards. Buy homes intelligently and negotiate smarter.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6D33",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="bg-background text-foreground antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
