import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kerala Tourism - God's Own Country",
  description: "Discover the wonders of Kerala, India's tropical paradise. Explore pristine beaches, lush green landscapes, cultural heritage, and create unforgettable memories in God's Own Country.",
  keywords: "Kerala, tourism, India, backwaters, beaches, culture, Ayurveda, spice plantations",
  authors: [{ name: "Kerala Tourism Board" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1a365d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
