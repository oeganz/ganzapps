import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GanzApps — AI-Powered Development Studio",
  description:
    "Build smarter, scale faster. GanzApps delivers SaaS development, agentic AI systems, and AI business digitalization — from concept to production.",
  keywords: "SaaS development, AI agents, agentic AI, business digitalization, tech studio",
  authors: [{ name: "GanzApps" }],
  openGraph: {
    title: "GanzApps — AI-Powered Development Studio",
    description:
      "Build smarter, scale faster. SaaS development, agentic AI systems, and AI business digitalization.",
    url: "https://ganzapps.my.id",
    siteName: "GanzApps",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GanzApps — AI-Powered Development Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GanzApps — AI-Powered Development Studio",
    description:
      "Build smarter, scale faster. SaaS development, agentic AI systems, and AI business digitalization.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GanzApps",
  url: "https://ganzapps.my.id",
  logo: "https://ganzapps.my.id/logo-circle.png",
  description:
    "AI-powered development studio specializing in SaaS products, agentic AI systems, and business digitalization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = 'dark';
                var prefersDark = false;
                var theme = "dark"; // forced ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
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
