import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { directions, photos } from "@/lib/data";

export function Directions() {
  return (
    <section id="directions" className="section section--white">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Пять направлений холдинга</h2>
          <p className="lede">
            Каждое направление ведёт отдельная команда. Общие — стандарты отчётности и подход к
            рискам.
          </p>
        </div>

        <div className="ledger">
          {directions.map((d, i) => {
            const p = photos[d.slug as keyof typeof photos];
            return (
              <Link key={d.slug} href={`/directions/${d.slug}`} className="ledger__row">
                <span className="ledger__no">0{i + 1}</span>
                <div>
                  <h3 className="h3">{d.title}</h3>
                  <p style={{ marginTop: 4 }}>{d.short}</p>
                </div>
                <p>{d.tagline}</p>
                <div className="photo">
                  <Image src={p.src} width={p.w} height={p.h} alt={p.alt} sizes="(max-width: 860px) 100vw, 220px" />
                </div>
                <ArrowRight className="ledger__arrow" size={20} aria-hidden />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Numbers() {
  const rows = [
    { v: "1,2 млн", l: "квадратных метров построено" },
    { v: "50 000+", l: "проданных книг" },
    { v: "5 000+", l: "получателей помощи" },
    { v: "9", l: "объектов недвижимости в портфеле" },
  ];
  return (
    <section className="section section--night on-night" aria-label="Холдинг в цифрах">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Что холдинг сделал к сегодняшнему дню</h2>
          <p className="lede">Показатели по направлениям на последнюю отчётную дату.</p>
        </div>
        <dl className="numbers">
          {rows.map((r) => (
            <div key={r.l}>
              <dt>{r.v}</dt>
              <dd>{r.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
