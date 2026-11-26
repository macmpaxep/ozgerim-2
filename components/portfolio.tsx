import Link from "next/link";
import { directions } from "@/lib/data";

export function Portfolio() {
  const rows = directions.flatMap((d) =>
    d.projects.slice(0, 2).map((p) => ({ ...p, slug: d.slug, dir: d.short })),
  );
  return (
    <section id="portfolio" className="section section--white">
      <div className="wrap">
        <div className="head">
          <h2 className="h2">Избранные проекты</h2>
          <p className="lede">
            Десять проектов из двадцати. Полный список — на странице каждого направления.
          </p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Проект</th>
              <th className="hide-sm">Направление</th>
              <th className="hide-sm">Статус</th>
              <th className="num">Показатель</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.title}>
                <td>
                  <Link href={`/directions/${p.slug}`} className="link">
                    {p.title}
                  </Link>
                  <small>
                    {p.kind}
                    {p.location ? ` · ${p.location}` : ""}, {p.year}
                  </small>
                </td>
                <td className="hide-sm">{p.dir}</td>
                <td className="hide-sm">
                  <span className={`badge ${p.status === "active" ? "badge--active" : ""}`}>
                    {p.status === "active" ? "В работе" : "Реализован"}
                  </span>
                </td>
                <td className="num">
                  {p.metric.value}
                  <small>{p.metric.label}</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
