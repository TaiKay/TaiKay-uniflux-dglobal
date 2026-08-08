import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/site-chrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const siteUrl = "https://unifluxdglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "UNIFLUX-D Global | Engineering Intelligence. Empowering Growth.", template: "%s | UNIFLUX-D Global" },
  description: "UNIFLUX-D Global Limited helps organisations solve complex challenges through intelligent technology, operational excellence, governance, and leadership development.",
  openGraph: { type: "website", locale: "en_NG", url: siteUrl, siteName: "UNIFLUX-D Global", title: "UNIFLUX-D Global", description: "Engineering Intelligence. Empowering Growth.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "UNIFLUX-D Global — Engineering Intelligence. Empowering Growth." }] },
  twitter: { card: "summary_large_image", title: "UNIFLUX-D Global", description: "Engineering Intelligence. Empowering Growth.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "UNIFLUX-D Global Limited", url: siteUrl, slogan: "Engineering Intelligence. Empowering Growth.", address: { "@type": "PostalAddress", streetAddress: "Flat 5A, Casino Height Apartment, Yaba", addressLocality: "Lagos", addressCountry: "NG" } }, { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "UNIFLUX-D Global", url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en" }] };
  return <html lang="en" className={`${inter.variable} ${space.variable}`}><body><a href="#main-content" className="skip-link">Skip to main content</a><Header /><div id="main-content" tabIndex={-1}>{children}</div><Footer /><Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
