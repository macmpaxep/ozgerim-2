import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { directions, getDirection, photos } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return directions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(
  props: PageProps<"/directions/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const d = getDirection(slug);
  if (!d) return {};
  return { title: d.title, description: d.tagline + ". " + d.description };
}

export default async function DirectionPage(props: PageProps<"/directions/[slug]">) {
  const { slug } = await props.params;
  const d = getDirection(slug);
  if (!d) notFound();

  const photo = photos[d.slug as keyof typeof photos];
  const idx = directions.findIndex((x) => x.slug === slug);
  const next = directions[(idx + 1) % directions.length];
  const prev = directions[(idx - 1 + directions.length) % directions.length];

  return (
    <>
      <Header />
      <main id="main">
        <section className="hero" style={{ minHeight: "auto" }}>
          <div className="wrap">
            <Link href="/#directions" className="link" style={{ marginBottom: 24 }}>
              <ArrowLeft size={16} style={{ marginRight: 8 }} /> Все направления
            </Link>
            <div className="hero__grid">
              <div data-enter>
                <p className="kicker">{d.short}</p>
                <h1 className="h1" style={{ marginTop: 16 }}>
                  {d.title}
                </h1>
                <p className="lede" style={{ marginTop: 24, color: "var(--ink)" }}>
                  {d.tagline}
                </p>
                <p className="lede" style={{ marginTop: 16 }}>
                  {d.description}
                </p>
                <dl className="facts" style={{ gridTemplateColumns: "repeat(3, auto)" }}>
                  {d.stats.map((s) => (
                    <div key={s.label}>
                      <dt>{s.value}</dt>
                      <dd>{s.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="photo hero__photo" data-enter style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={photo.src}
                  width={photo.w}
                  height={photo.h}
                  alt={photo.alt}
                  priority
                  sizes="(max-width: 860px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="wrap">
            <div className="head">
              <h2 className="h2">Чем занимается направление</h2>
            </div>
            <div className="focus">
              {d.focus.map((f, i) => (
                <div key={f.title}>
                  <span className="ledger__no">0{i + 1}</span>
                  <h3 className="h3">{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="head">
              <h2 className="h2">Проекты направления</h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Проект</th>
                  <th className="hide-sm">Год</th>
                  <th className="hide-sm">Статус</th>
                  <th className="num">Показатель</th>
                </tr>
              </thead>
              <tbody>
                {d.projects.map((p) => (
                  <tr key={p.title}>
                    <td>
                      {p.title}
                      <small>
                        {p.kind}
                        {p.location ? ` · ${p.location}` : ""}
                      </small>
                      <small>{p.summary}</small>
                    </td>
                    <td className="hide-sm">{p.year}</td>
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

        <nav className="pager" aria-label="Другие направления">
          <Link href={`/directions/${prev.slug}`}>
            <span className="kicker">
              <ArrowLeft size={14} style={{ display: "inline" }} /> Предыдущее
            </span>
            <div className="h3" style={{ marginTop: 6 }}>
              {prev.title}
            </div>
          </Link>
          <Link href={`/directions/${next.slug}`}>
            <span className="kicker">
              Следующее <ArrowRight size={14} style={{ display: "inline" }} />
            </span>
            <div className="h3" style={{ marginTop: 6 }}>
              {next.title}
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
