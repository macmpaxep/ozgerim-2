import Image from "next/image";
import Link from "next/link";
import { directions, photos } from "@/lib/data";

export function Directions() {
  return (
    <section id="directions" className="section">
      <div className="wrap">
        <h2 className="h2 statement">
          Наши компании и проекты разделены на шесть направлений
        </h2>
        <div className="cards">
          {directions.map((d) => {
            const p = photos[d.slug as keyof typeof photos];
            return (
              <Link key={d.slug} href={`/directions/${d.slug}`} className="card">
                <div className="photo">
                  <Image
                    src={p.src}
                    width={p.w}
                    height={p.h}
                    alt={p.alt}
                    sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 20vw"
                  />
                  <span className="tag">{d.short}</span>
                </div>
                <h3 className="h3">{d.title}</h3>
                <p className="small">{d.tagline}</p>
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
    <section className="section section--deep" aria-label="Холдинг в цифрах">
      <div className="wrap">
        <h2 className="h2" style={{ maxWidth: "16em", marginBottom: 72 }}>
          Что холдинг сделал к сегодняшнему дню
        </h2>
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
