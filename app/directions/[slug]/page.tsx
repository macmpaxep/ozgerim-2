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
        <section className="hero hero--short">
          <div className="hero__img">
            <Image src={photo.src} width={photo.w} height={photo.h} alt={photo.alt} priority sizes="100vw" />
          </div>
          <div className="wrap hero__body">
            <div data-enter>
              <h1 className="h1">{d.title}</h1>
              <div className="hero__meta">
                <Link href="/#directions" className="pill pill--glass">
                  <ArrowLeft size={14} /> Все направления
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="intro">
            <div className="intro__col">
              <p className="small">{d.short}</p>
            </div>
            <div className="intro__col">
              <p className="body" style={{ color: "var(--ink)" }}>
                {d.tagline}
              </p>
              <p className="body" style={{ maxWidth: "26em" }}>
                {d.description}
              </p>
            </div>
          </div>
        </div>

        <section className="section section--deep" aria-label="Показатели направления">
          <div className="wrap">
            <dl className="numbers" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {d.stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2 className="h2" style={{ marginBottom: 56 }}>
              Чем занимается направление
            </h2>
            <div className="focus">
              {d.focus.map((f, i) => (
                <div key={f.title}>
                  <span className="no">0{i + 1}</span>
                  <h3 className="h3">{f.title}</h3>
                  <p className="small">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="wrap">
            <div className="list__head">
              <h2 className="h2">Проекты направления</h2>
            </div>
            <ul className="list">
              {d.projects.map((p) => (
                <li key={p.title}>
                  <span className="when">{p.year}</span>
                  <span className="title">
                    {p.title}
                    <small>
                      {p.kind}
                      {p.location ? ` · ${p.location}` : ""}
                    </small>
                    <small>{p.summary}</small>
                  </span>
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

        <nav className="pager" aria-label="Другие направления">
          <Link href={`/directions/${prev.slug}`}>
            <span className="small">
              <ArrowLeft size={14} style={{ display: "inline" }} /> Предыдущее
            </span>
            <div className="h3" style={{ marginTop: 6 }}>
              {prev.title}
            </div>
          </Link>
          <Link href={`/directions/${next.slug}`}>
            <span className="small">
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
