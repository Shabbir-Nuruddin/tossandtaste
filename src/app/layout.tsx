import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE } from "@/data/site";
import { VideoPlaybackProvider } from '@/components/VideoPlayback';

const heading = Outfit({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const description =
  "Fresh, calorie-counted salads and bowls delivered across Gurugram, Delhi and Noida. Protein Pack and Fat Loss meal plans for lunch, dinner or both.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Toss & Taste | Healthy Meal Plans in Gurugram & Delhi",
    template: "%s | Toss & Taste",
  },
  description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    title: "Toss & Taste | Healthy Meal Plans in Gurugram & Delhi",
    description,
    images: [{ url: "/food/cover-menu.webp", width: 1800, height: 1200, alt: "Toss & Taste salads and bowls" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f2",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  servesCuisine: "Healthy",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 55, Golf Course Road",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  areaServed: SITE.areas,
  sameAs: SITE.socials.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <VideoPlaybackProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </VideoPlaybackProvider>
      </body>
    </html>
  );
}
