import Link from "next/link";
import { book } from "@/lib/data";

export function Book() {
  return (
    <section id="book" className="section">
      <div className="wrap">
        <div className="split" style={{ alignItems: "center" }}>
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
            <p className="small">Издательство</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Книга «{book.title}»
            </h2>
            <p className="body" style={{ marginTop: 20, maxWidth: "26em" }}>
              {book.subtitle}. Авторы: {book.authors}.
            </p>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#contact" className="pill">
                Заказать книгу
              </a>
              <Link href="/directions/publishing" className="pill">
                Все издания
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
