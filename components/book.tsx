import Link from "next/link";
import { book } from "@/lib/data";

export function Book() {
  return (
    <section id="book" className="section">
      <div className="wrap">
        <div className="split" style={{ gridTemplateColumns: "0.8fr 1.2fr", alignItems: "center" }}>
          <div className="cover" role="img" aria-label={`Обложка книги «${book.title}»`}>
            <span>Özgerim</span>
            <b>
              Тетрадь
              <br />в клетку
            </b>
            <span>
              А. Абилов
              <br />и соавторы
            </span>
          </div>
          <div>
            <p className="kicker">Издательство</p>
            <h2 className="h2" style={{ marginTop: 12 }}>
              Книга «{book.title}»
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              {book.subtitle}. Авторы: {book.authors}.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn">
                Заказать книгу
              </a>
              <Link href="/directions/publishing" className="btn btn--line">
                Все издания
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
