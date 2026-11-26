import Image from "next/image";
import { book, bookOrderUrl } from "@/lib/data";

export function Book() {
  return (
    <section id="book" className="section">
      <div className="wrap">
        <div className="bookhead">
          <div className="photo bookhead__photo">
            <Image
              src="/images/book.webp"
              width={1500}
              height={2000}
              alt={`Книга «${book.title}» на рабочем столе`}
              sizes="(max-width: 860px) 100vw, 420px"
            />
          </div>
          <div className="bookhead__text">
            <p className="small">Издательство</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Книга «{book.title}»
            </h2>
            <p className="body" style={{ marginTop: 20, color: "var(--ink)" }}>
              {book.subtitle}
            </p>
            <p className="small" style={{ marginTop: 16 }}>
              {book.note}
            </p>
            <p className="small" style={{ marginTop: 16 }}>
              Авторы: {book.authors}
            </p>
            <div style={{ marginTop: 32 }}>
              <a href={bookOrderUrl} target="_blank" rel="noopener noreferrer" className="pill">
                Заказать книгу
              </a>
            </div>
          </div>
        </div>

        <Questions />
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <div className="qa">
          <div className="qa__head">
            <h3 className="h2">{book.questionsTitle}</h3>
            <p className="small">{book.questionsLead}</p>
          </div>
          <ol className="qa__list">
            {book.questions.map((q, i) => (
              <li key={q.title}>
                <span className="qa__no">0{i + 1}</span>
                <h4 className="h3">{q.title}</h4>
                <p className="small">{q.text}</p>
              </li>
            ))}
          </ol>
        </div>
  );
}
