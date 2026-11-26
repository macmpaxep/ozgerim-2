import Link from "next/link";
import { book } from "@/lib/data";
import { Reveal } from "./ui";

export function Book() {
  return (
    <section id="book" className="relative scroll-mt-20 overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative grid items-center gap-12 overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-br from-[#161d2b] to-[#0b0f17] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-16">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-indigo-400/20 blur-[110px]" />

          {/* cover */}
          <Reveal className="relative mx-auto">
            <div
              className="relative h-[24rem] w-[17rem] rotate-[-4deg] rounded-r-xl rounded-l-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition duration-700 hover:rotate-0"
              style={{
                backgroundColor: "#f3efe3",
                backgroundImage:
                  "linear-gradient(rgba(60,90,160,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(60,90,160,0.25) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            >
              <div className="absolute inset-y-0 left-0 w-3 rounded-l-sm bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute inset-x-7 top-10 text-center">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#8a6d2a]">Özgerim</div>
                <div className="mt-6 font-serif text-4xl leading-tight text-[#12182a]">
                  Тетрадь
                  <br />в клетку
                </div>
                <div className="mx-auto mt-6 h-px w-14 bg-[#b68a34]" />
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-[#12182a]/70">
                  А. Абилов
                  <br />и соавторы
                </div>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <Reveal>
              <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-gold">
                Издание
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                «{book.title}»
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {book.subtitle}. Авторы: {book.authors}.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-gold px-8 py-4 font-medium text-black transition hover:bg-gold-soft"
                >
                  Заказать книгу
                </a>
                <Link
                  href="/directions/publishing"
                  className="rounded-full border border-line px-8 py-4 transition hover:border-gold/60 hover:text-gold-soft"
                >
                  Все издания
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
