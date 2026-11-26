import Link from "next/link";
import { directions, company, photoCredits } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer on-night">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <span className="logo">
              Özgerim <small style={{ color: "var(--night-muted)" }}>Holding</small>
            </span>
            <p style={{ marginTop: 12, maxWidth: "26em", color: "var(--night-muted)", fontSize: "0.95rem" }}>
              Фонды, недвижимость, строительство, социальные проекты и издательство.
            </p>
          </div>
          <div>
            <h4>Направления</h4>
            <ul>
              {directions.map((d) => (
                <li key={d.slug}>
                  <Link href={`/directions/${d.slug}`}>{d.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Контакты</h4>
            <ul>
              <li>
                <span>{company.city}</span>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <span>{company.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__credit">
          © {new Date().getFullYear()} Özgerim Holding. {photoCredits}
        </p>
      </div>
    </footer>
  );
}
