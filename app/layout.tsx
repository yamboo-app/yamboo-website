import type { Metadata } from "next";
import { env } from "./env";
import "./globals.css";

const siteName = "Yamboo Studio";
const title =
  "Yamboo Studio | Product Engineering, AI Automation & Technology Consulting";
const description =
  "Yamboo Studio is a product engineering agency helping businesses design, build, and scale custom software, AI-powered tools, workflow automation, and modern digital platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  applicationName: siteName,
  title,
  description,
  keywords: [
    "product engineering agency",
    "AI automation agency",
    "technology consulting",
    "custom software development",
    "AI-powered tools",
    "workflow automation",
    "software consulting",
    "product development studio",
    "digital product engineering",
    "business process automation",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Technology consulting",
  classification: "Product engineering and AI automation agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
