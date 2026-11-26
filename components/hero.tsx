import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/data";

export function Hero() {
  const p = photos.hero;
  return (
    <section className="hero">
      <div className="hero__img">
        <Image src={p.src} width={p.w} height={p.h} alt={p.alt} priority sizes="100vw" />
      </div>
      <div className="wrap hero__body">
        <div data-enter>
          <h1 className="h1" style={{ maxWidth: "12em" }}>
            Фонды, недвижимость и строительство под одним управлением
          </h1>
          <div className="hero__meta">
            <Link href="/#directions" className="pill pill--glass">
              Шесть направлений холдинга
            </Link>
            <Link href="/#contact" className="pill pill--glass">
              Написать в холдинг
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <div className="wrap">
      <div className="intro">
        <div className="intro__col">
          <p className="small">О холдинге · Алматы, Лондон</p>
        </div>
        <div className="intro__col">
          <p className="body" style={{ color: "var(--ink)" }}>
            Мы направляем капитал в проекты, которые остаются на десятилетия.
          </p>
          <p className="body" style={{ maxWidth: "26em" }}>
            Özgerim Holding объединяет хедж-фонды, инвестиции в недвижимость, строительство,
            благотворительность и издание книг. Холдингом руководит Айбар Абилов.
            Направления работают отдельно, но по общим стандартам отчётности и управления
            рисками.
          </p>
          <Link href="/#founder" className="pill">
            О президенте
          </Link>
        </div>
      </div>
    </div>
  );
}
