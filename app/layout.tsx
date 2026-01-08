import type { Metadata } from "next";
import { parabolica } from '@/lib/fonts';
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TransRussia & SkladTech 2026",
  description: "Eurasia's leading logistics exhibition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${parabolica.variable}`}>
      <body className="min-h-screen flex flex-col font-parabolica">
        <NavBar />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}