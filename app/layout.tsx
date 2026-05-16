import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yamboo Studio | Modern Software, AI, and Automation",
  description:
    "Yamboo Studio is a product studio and technology partner helping businesses design, build, and scale modern software, AI-powered tools, and automation systems.",
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
