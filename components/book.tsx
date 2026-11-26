import Image from "next/image";
import Link from "next/link";
import { book, company } from "@/lib/data";

export function Book() {
  return (
    <section id="book" className="section">
      <div className="wrap">
        <div className="split" style={{ alignItems: "center" }}>
          <div className="photo split__photo" style={{ aspectRatio: "3 / 4" }}>
            <Image
              src="/images/book.webp"
              width={1500}
              height={2000}
              alt={`Книга «${book.title}» на рабочем столе`}
              sizes="(max-width: 860px) 100vw, 40vw"
            />
          </div>
          <div>
            <p className="small">Издательство</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Книга «{book.title}»
            </h2>
            <p className="body" style={{ marginTop: 20, maxWidth: "26em", color: "var(--ink)" }}>
              {book.subtitle}
            </p>
            <p className="small" style={{ marginTop: 16 }}>
              {book.note}
            </p>
            <p className="small" style={{ marginTop: 16 }}>
              Авторы: {book.authors}
            </p>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#contact" className="pill">
                Заказать книгу
              </a>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="pill">
                Написать в WhatsApp
              </a>
              <Link href="/directions/publishing" className="pill">
                Все издания
              </Link>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
}
