import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://ganzapps.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GanzApps — AI-Powered Development Studio",
    template: "%s | GanzApps",
  },
  description:
    "Build smarter, scale faster. GanzApps delivers SaaS development, agentic AI systems, and AI business digitalization — from concept to production.",
  keywords: [
    "AI development studio",
    "SaaS development",
    "agentic AI",
    "AI agents",
    "Next.js development",
    "Python AI agents",
    "business digitalization",
    "AI automation",
    "tech consulting",
    "SaaS builders",
  ],
  authors: [{ name: "GanzApps", url: BASE_URL }],
  creator: "GanzApps",
  publisher: "GanzApps",
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
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "GanzApps",
    title: "GanzApps — AI-Powered Development Studio",
    description:
      "Build smarter, scale faster. SaaS development, agentic AI systems, and AI business digitalization.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GanzApps — AI-Powered Development Studio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ganzapps",
    creator: "@ganzapps",
    title: "GanzApps — AI-Powered Development Studio",
    description:
      "Build smarter, scale faster. SaaS development, agentic AI systems, and AI business digitalization.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "facebook-domain-verification": "blb1m72442p6hcyqylaagqohq8l349",
  },
};

export const viewport: Viewport = {
  themeColor: "#4ADE80",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "GanzApps",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo-circle.png`,
        },
        description:
          "AI-powered development studio specializing in SaaS products, agentic AI systems, and business digitalization.",
        sameAs: [
          "https://linkedin.com/company/ganzapps",
          "https://discord.gg/ganzapps",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "oeganz1999@gmail.com",
          contactType: "customer service",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#software`,
        name: "GanzApps Development Platform",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "End-to-end AI-powered SaaS development and agentic AI deployment services.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Project consultation and scoping",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
