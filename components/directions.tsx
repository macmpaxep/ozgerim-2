import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { directions } from "@/lib/data";
import { DirIcon } from "./icons";
import { Reveal, SectionHead } from "./ui";

export function Directions() {
  return (
    <section id="directions" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Направления"
          title={
            <>
              Пять сфер — <span className="gold-text italic">одна экосистема</span>
            </>
          }
          text="Каждое направление усиливает остальные: капитал финансирует девелопмент, строительство создаёт активы, а прибыль возвращается обществу и идеям."
        />

        <div className="mt-20 grid gap-5 md:grid-cols-6">
          {directions.map((d, i) => {
            const wide = i < 2; // first two larger
            return (
              <Reveal
                key={d.slug}
                delay={i * 90}
                className={wide ? "md:col-span-3" : "md:col-span-2"}
              >
                <Link
                  href={`/directions/${d.slug}`}
                  className="group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel p-8 transition duration-500 hover:-translate-y-1.5 hover:border-[color:var(--a)]/60"
                  style={{ "--a": d.accent } as React.CSSProperties}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(80% 70% at 100% 0%, ${d.accent}30, transparent 65%)`,
                    }}
                  />
                  <DirIcon
                    name={d.icon}
                    className="absolute -bottom-10 -right-8 h-56 w-56 opacity-[0.07] transition duration-700 group-hover:scale-110 group-hover:opacity-[0.16]"
                  />

                  <div className="relative flex items-start justify-between">
                    <span
                      className="grid h-14 w-14 place-items-center rounded-2xl border"
                      style={{ borderColor: `${d.accent}55`, color: d.accent }}
                    >
                      <DirIcon name={d.icon} className="h-7 w-7" />
                    </span>
                    <span className="text-xs tracking-[0.3em] text-muted">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative mt-16">
                    <div className="text-xs uppercase tracking-[0.25em]" style={{ color: d.accent }}>
                      {d.short}
                    </div>
                    <h3 className="mt-3 font-serif text-2xl leading-tight [overflow-wrap:anywhere] xl:text-3xl">{d.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{d.tagline}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
                      <span className="text-muted">{d.projects.length} проекта в портфолио</span>
                      <span
                        className="inline-flex items-center gap-1.5 transition group-hover:gap-3"
                        style={{ color: d.accent }}
                      >
                        Открыть <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
