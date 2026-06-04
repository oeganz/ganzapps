import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "GanzApps — AI development studio",
  description:
    "AI development studio. We design and ship SaaS products, autonomous AI agents, and end-to-end digital solutions — from spark to scale.",
  keywords: "SaaS development, AI agents, agentic AI, business digitalization, tech studio",
  authors: [{ name: "GanzApps" }],
  openGraph: {
    title: "GanzApps — AI development studio",
    description:
      "AI development studio. We design and ship SaaS products, autonomous AI agents, and end-to-end digital solutions.",
    url: "https://ganzapps.my.id",
    siteName: "GanzApps",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GanzApps — AI development studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GanzApps — AI development studio",
    description:
      "AI development studio. We design and ship SaaS products, autonomous AI agents, and end-to-end digital solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GanzApps",
  url: "https://ganzapps.my.id",
  logo: "https://ganzapps.my.id/logo.png",
  description:
    "AI development studio specializing in SaaS products, agentic AI systems, and business digitalization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className={GeistSans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <FloatingContact />
      </body>
    </html>
  );
}
