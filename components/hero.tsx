import Image from "next/image";
import Link from "next/link";
import { holdingStats, photos } from "@/lib/data";

export function Hero() {
  const p = photos.hero;
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__grid">
          <div data-enter>
            <p className="kicker">Инвестиционный холдинг · Алматы, Лондон</p>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Фонды, недвижимость и строительство под одним управлением
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Özgerim Holding объединяет пять направлений: хедж-фонды, инвестиции в недвижимость,
              строительство, благотворительность и издание книг. Холдингом руководит Айбар Абилов.
            </p>
            <div className="hero__actions">
              <Link href="/#directions" className="btn">
                Смотреть направления
              </Link>
              <Link href="/#contact" className="btn btn--line">
                Написать в холдинг
              </Link>
            </div>
            <dl className="facts">
              {holdingStats.map((s) => (
                <div key={s.label}>
                  <dt>
                    {s.value}
                    {s.suffix}
                  </dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="photo hero__photo" data-enter>
            <Image
              src={p.src}
              width={p.w}
              height={p.h}
              alt={p.alt}
              priority
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
