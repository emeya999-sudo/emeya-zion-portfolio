import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: "SYNDORA — Marketing & Digital Solutions | Founded by Emeya Zion",
  description: "SYNDORA provides marketing and digital solutions, currently specialized in custom website design and development for businesses. Founded by Emeya Zion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
