import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Automussh – Intelligent Fleet Management Dashboard",
  description:
    "A responsive and modern landing dashboard built with Next.js, TypeScript, and Tailwind CSS to showcase Automussh's innovative fleet monitoring and analytics platform.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
