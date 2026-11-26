import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/data";

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.site),
  title: {
    default: "Özgerim Holding — инвестиционный холдинг: фонды, недвижимость, строительство",
    template: "%s · Özgerim Holding",
  },
  description:
    "Özgerim Holding: хедж-фонды, инвестиции в недвижимость, строительство, благотворительность и издание книг. Президент холдинга — Айбар Абилов.",
  openGraph: {
    title: "Özgerim Holding",
    description: "Хедж-фонды, недвижимость, строительство, благотворительность и издательство.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f3ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="skip">
          К содержанию
        </a>
        {children}
      </body>
    </html>
  );
}
