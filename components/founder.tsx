import Image from "next/image";
import Link from "next/link";
import { person } from "@/lib/data";
import { Reveal } from "./ui";

export function Founder() {
  return (
    <section id="founder" className="relative scroll-mt-20 overflow-hidden bg-ink-2 py-28 md:py-40">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute -right-40 top-40 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* portrait */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 translate-x-6 translate-y-6 rounded-[2rem] border border-gold/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
              <Image
                src={person.photo}
                alt={`${person.name} — президент Özgerim Holding`}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-[50%_55%]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="font-serif text-3xl">{person.name}</div>
                <div className="mt-1 text-sm text-gold-soft">Президент Özgerim Holding</div>
              </div>
            </div>
            <div className="absolute -left-5 top-10 hidden rounded-2xl border border-gold/30 bg-ink/90 px-5 py-4 backdrop-blur md:block">
              <div className="font-serif text-3xl text-gold">VC</div>
              <div className="text-xs text-muted">Венчурный инвестор</div>
            </div>
          </div>
        </Reveal>

        {/* text */}
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Личный бренд
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-4xl leading-[1.08] md:text-6xl">
              Айбар <span className="gold-text italic">Абилов</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 flex flex-wrap gap-2">
              {person.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-sm text-gold-soft"
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {person.bio.map((p, i) => (
              <Reveal key={i} delay={200 + i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={420}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-line py-8">
              {person.highlights.map((h) => (
                <div key={h.label}>
                  <dt className="font-serif text-4xl text-gold-soft">{h.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{h.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {person.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-panel/60 p-6 transition hover:border-gold/40">
                  <div className="font-serif text-xl text-gold-soft">{p.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <Link
              href="/#book"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/50 px-8 py-4 text-gold transition hover:bg-gold hover:text-black"
            >
              Читать «Тетрадь в клетку» →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
