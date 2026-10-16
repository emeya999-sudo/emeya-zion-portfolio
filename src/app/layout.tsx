import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Footer } from "@/components/Footer";
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
  title: "Emeya Zion — Marketing & Digital Solutions",
  description: "Marketing and digital solutions by Emeya Zion, currently specialized in custom website design and development for businesses.",
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
        <Footer />
      </body>
    </html>
  );
}
