import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { directions, holdingStats } from "@/lib/data";
import { CountUp } from "./ui";

export function Hero() {
  const items = [...directions, ...directions];
  return (
    <section className="noise relative isolate flex min-h-screen flex-col overflow-hidden pt-20">
      {/* backgrounds */}
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="animate-float absolute -left-40 top-20 -z-10 h-[34rem] w-[34rem] rounded-full bg-gold/20 blur-[140px]" />
      <div
        className="animate-float absolute -right-32 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[140px]"
        style={{ animationDelay: "-5s" }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-20">
        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-gold/30 bg-gold/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-gold-soft">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Многопрофильный холдинг
        </div>

        <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] sm:text-6xl md:text-8xl">
          Капитал, который
          <br />
          строит <span className="gold-text italic">будущее</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Özgerim Holding объединяет хедж-фонды, инвестиции в недвижимость, строительство,
          благотворительность и издательское дело — пять направлений, один стандарт качества.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/#directions"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-medium text-black transition hover:bg-gold-soft"
          >
            Наши направления
            <ArrowRight className="transition group-hover:translate-x-1" size={18} />
          </Link>
          <Link
            href="/#founder"
            className="inline-flex items-center gap-3 rounded-full border border-line px-8 py-4 transition hover:border-gold/60 hover:text-gold-soft"
          >
            О президенте
          </Link>
        </div>

        <dl className="mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
          {holdingStats.map((s) => (
            <div key={s.label}>
              <dt className="font-serif text-4xl text-gold-soft md:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dt>
              <dd className="mt-2 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* marquee */}
      <div className="relative border-y border-line bg-ink/60 py-5 backdrop-blur">
        <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
          {items.map((d, i) => (
            <span key={i} className="flex items-center gap-14 font-serif text-2xl text-white/70">
              {d.title}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <ChevronDown className="absolute bottom-24 right-8 hidden animate-bounce text-gold/60 md:block" />
    </section>
  );
}
