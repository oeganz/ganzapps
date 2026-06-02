import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GanzApps — AI-Powered Development Studio",
  description:
    "Build smarter, scale faster. SaaS development, agentic AI systems, and AI business digitalization.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
