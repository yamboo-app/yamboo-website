import type { Metadata } from "next";
import { env } from "./env";
import "./globals.css";

const siteName = "Yamboo Tech";
const title =
  "Yamboo Tech | Software, AI Automation & Technology Consulting";
const description =
  "Yamboo Tech helps businesses design, build, and scale custom software, AI-powered tools, workflow automation, and modern digital platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  applicationName: siteName,
  title,
  description,
  keywords: [
    "product engineering agency",
    "AI automation agency",
    "software development agency",
    "technology consulting",
    "custom software development",
    "AI-powered tools",
    "workflow automation",
    "software consulting",
    "technology product development",
    "digital product engineering",
    "business process automation",
    "cloud integration",
    "technical consulting",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Technology consulting",
  classification: "Product engineering and AI automation agency",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
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
    card: "summary_large_image",
    title,
    description,
  },
  verification: {
    google: "ZZM8xJHgYIWCW5BFnOdKsZfJyk07ByyJDupPwkDd0eI",
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
