import type { Metadata } from "next";
import Image from "next/image";
import { book, bookOrderUrl, company } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Questions } from "@/components/book";

const title = "Книга «Тетрадь в клетку» — Айбар Абилов и Каныш Абилов";
const description =
  "Роман-дневник казахского бизнесмена Айкена Муратовича: от мешка сахара в 1992-м до международного бизнеса. Основано на реальных событиях.";

export const metadata: Metadata = {
  title: "Книга «Тетрадь в клетку»",
  description,
  alternates: { canonical: `${company.site}/book` },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    url: `${company.site}/book`,
    images: [{ url: "/images/book.webp", width: 1333, height: 2000, alt: "Книга «Тетрадь в клетку»" }],
  },
};

export default function BookPage() {
  return (
    <>
      <Header action={{ href: bookOrderUrl, label: "Заказать книгу" }} />
      <main id="main" className="bookpage">
        <section className="bookhero">
          <div className="wrap">
            <div className="bookhero__grid">
              <div data-enter>
                <p className="small bookhero__kicker">Роман-дневник · Издательство Özgerim</p>
                <h1 className="h1">Тетрадь в клетку</h1>
                <p className="body bookhero__lead">{book.subtitle}</p>
                <p className="small bookhero__note">{book.note}</p>
                <p className="small bookhero__note">Авторы: {book.authors}</p>
                <div className="bookhero__cta">
                  <a href={bookOrderUrl} target="_blank" rel="noopener noreferrer" className="pill pill--glass">
                    Заказать книгу
                  </a>
                </div>
              </div>
              <div className="photo bookhero__photo" data-enter>
                <Image
                  src="/images/book.webp"
                  width={1333}
                  height={2000}
                  alt="Книга «Тетрадь в клетку»"
                  priority
                  sizes="(max-width: 860px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Questions />
          </div>
        </section>

        <section className="section section--deep">
          <div className="wrap bookend">
            <h2 className="h2">Хотите прочитать «Тетрадь в клетку»?</h2>
            <p className="body">Напишите нам в WhatsApp — подскажем, как купить книгу.</p>
            <a href={bookOrderUrl} target="_blank" rel="noopener noreferrer" className="pill">
              Заказать книгу
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <a href={bookOrderUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta">
        Заказать книгу в WhatsApp
      </a>
    </>
  );
}
