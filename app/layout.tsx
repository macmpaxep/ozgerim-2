import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.site),
  title: {
    default: "Özgerim Holding — капитал, который строит будущее",
    template: "%s · Özgerim Holding",
  },
  description:
    "Özgerim Holding: хедж-фонды, инвестиции в недвижимость, строительство, благотворительность и издание книг. Президент холдинга — Айбар Абилов.",
  openGraph: {
    title: "Özgerim Holding",
    description:
      "Хедж-фонды, недвижимость, строительство, благотворительность и издательство.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
