import Link from "next/link";
import { directions } from "@/lib/data";

export function Portfolio() {
  const rows = directions.flatMap((d) =>
    d.projects.slice(0, 2).map((p) => ({ ...p, slug: d.slug, dir: d.short })),
  );
  return (
    <section id="portfolio" className="section section--soft">
      <div className="wrap">
        <div className="list__head">
          <h2 className="h2">Избранные проекты</h2>
          <p className="small" style={{ maxWidth: "20em" }}>
            Десять проектов из двадцати. Остальные — на страницах направлений.
          </p>
        </div>
        <ul className="list">
          {rows.map((p) => (
            <li key={p.title}>
              <span className="when">{p.year}</span>
              <Link href={`/directions/${p.slug}`} className="title">
                {p.title}
                <small>
                  {p.dir} · {p.kind}
                  {p.location ? ` · ${p.location}` : ""}
                </small>
              </Link>
              <span className={`small state ${p.status === "active" ? "state--active" : ""}`}>
                {p.status === "active" ? "В работе" : "Реализован"}
              </span>
              <span className="num">
                {p.metric.value}
                <small>{p.metric.label}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
