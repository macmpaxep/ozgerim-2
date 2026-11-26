import Link from "next/link";
import { directions, company } from "@/lib/data";
import { Logo } from "./header";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Многопрофильный холдинг: капитал, девелопмент, строительство, социальные проекты и
            издательство под одним брендом.
          </p>
        </div>
        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Направления</h4>
          <ul className="space-y-3 text-sm text-muted">
            {directions.map((d) => (
              <li key={d.slug}>
                <Link href={`/directions/${d.slug}`} className="transition hover:text-gold-soft">
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Контакты</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li>{company.city}</li>
            <li>
              <a href={`mailto:${company.email}`} className="transition hover:text-gold-soft">
                {company.email}
              </a>
            </li>
            <li>{company.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Özgerim Holding. Все права защищены.
      </div>
    </footer>
  );
}
