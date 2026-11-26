import Link from "next/link";
import { directions, company, photoCredits } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <span className="logo">özgerim</span>
            <p style={{ marginTop: 12, maxWidth: "26em", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
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
                <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                  {company.phone}
                </a>
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
