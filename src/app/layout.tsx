import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Linguasud | Ihre Sprachschule für lebendiges Lernen",
    template: "%s | Linguasud",
  },
  description: "Lernen Sie Sprachen mit Muttersprachlern in kleinen Gruppen. Deutsch, Französisch, Englisch, Italienisch und Spanisch in Zürich und Bern.",
  keywords: [
    "Sprachschule",
    "Sprachkurse",
    "Deutsch lernen",
    "Französisch lernen",
    "Englisch lernen",
    "Italienisch lernen",
    "Spanisch lernen",
    "Zürich",
    "Bern",
    "Schweiz",
  ],
  authors: [{ name: "Linguasud Sprachschule" }],
  creator: "Linguasud Sprachschule",
  publisher: "Linguasud Sprachschule",
  metadataBase: new URL("https://linguasud.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Linguasud | Ihre Sprachschule für lebendiges Lernen",
    description: "Lernen Sie Sprachen mit Muttersprachlern in kleinen Gruppen. Deutsch, Französisch, Englisch, Italienisch und Spanisch in Zürich und Bern.",
    url: "https://linguasud.ch",
    siteName: "Linguasud",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Linguasud Sprachschule",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linguasud | Ihre Sprachschule für lebendiges Lernen",
    description: "Lernen Sie Sprachen mit Muttersprachlern in kleinen Gruppen.",
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
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
