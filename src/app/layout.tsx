import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Linguasud | Ihre Sprachschule",
  description: "Lernen Sie Sprachen mit Muttersprachlern. Deutsch, Französisch, Englisch, Italienisch und Spanisch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${roboto.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
