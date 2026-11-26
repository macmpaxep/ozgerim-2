import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { directions, getDirection } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DirIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui";

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

  const idx = directions.findIndex((x) => x.slug === slug);
  const next = directions[(idx + 1) % directions.length];
  const prev = directions[(idx - 1 + directions.length) % directions.length];
  const done = d.projects.filter((p) => p.status === "done");
  const active = d.projects.filter((p) => p.status === "active");

  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <section className="noise relative isolate overflow-hidden pb-24 pt-40">
          <div className="grid-bg absolute inset-0 -z-10" />
          <div
            className="animate-float absolute -right-20 top-10 -z-10 h-[32rem] w-[32rem] rounded-full blur-[140px]"
            style={{ background: `${d.accent}33` }}
          />
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/#directions"
              className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-gold-soft"
            >
              <ArrowLeft size={16} /> Все направления
            </Link>

            <div className="mt-10 flex items-center gap-5">
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl border"
                style={{ borderColor: `${d.accent}66`, color: d.accent }}
              >
                <DirIcon name={d.icon} className="h-8 w-8" />
              </span>
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: d.accent }}>
                {d.short}
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] md:text-8xl">{d.title}</h1>
            <p className="mt-6 max-w-3xl font-serif text-2xl italic text-gold-soft md:text-3xl">
              {d.tagline}
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">{d.description}</p>

            <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-line pt-8">
              {d.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-3xl md:text-5xl" style={{ color: d.accent }}>
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* focus */}
        <section className="border-y border-line bg-ink-2 py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
            {d.focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-line bg-panel/70 p-8">
                  <div className="font-serif text-4xl" style={{ color: d.accent }}>
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* portfolio */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            {[
              { title: "Реализованные проекты", items: done },
              { title: "Проекты в работе", items: active },
            ]
              .filter((g) => g.items.length)
              .map((g) => (
                <div key={g.title} className="mb-20 last:mb-0">
                  <Reveal>
                    <div className="mb-10 flex items-end justify-between border-b border-line pb-5">
                      <h2 className="font-serif text-3xl md:text-5xl">{g.title}</h2>
                      <span className="font-serif text-2xl text-muted">{g.items.length}</span>
                    </div>
                  </Reveal>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {g.items.map((p, i) => (
                      <Reveal key={p.title} delay={i * 80}>
                        <ProjectCard {...p} accent={d.accent} icon={d.icon} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* prev / next */}
        <section className="border-t border-line">
          <div className="mx-auto grid max-w-7xl md:grid-cols-2">
            <Link
              href={`/directions/${prev.slug}`}
              className="group border-b border-line p-10 transition hover:bg-panel md:border-b-0 md:border-r"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
                <ArrowLeft size={14} /> Предыдущее
              </div>
              <div className="mt-3 font-serif text-3xl transition group-hover:text-gold-soft">
                {prev.title}
              </div>
            </Link>
            <Link
              href={`/directions/${next.slug}`}
              className="group p-10 text-right transition hover:bg-panel"
            >
              <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-widest text-muted">
                Следующее <ArrowRight size={14} />
              </div>
              <div className="mt-3 font-serif text-3xl transition group-hover:text-gold-soft">
                {next.title}
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
