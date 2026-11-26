import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/data";
import { Reveal } from "./ui";

export function Contact() {
  const rows = [
    { icon: Mail, label: "Почта", value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: "Телефон", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Офисы", value: company.city },
  ];
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-ink-2 py-28 md:py-40">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold">Контакты</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif text-4xl leading-[1.1] md:text-7xl">
            Обсудим <span className="gold-text italic">партнёрство</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Инвестиции, совместные проекты, издательские и благотворительные инициативы — напишите нам.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
          {rows.map((r, i) => {
            const body = (
              <div className="h-full rounded-2xl border border-line bg-panel/70 p-6 transition hover:border-gold/50">
                <r.icon className="text-gold" size={22} strokeWidth={1.5} />
                <div className="mt-4 text-xs uppercase tracking-widest text-muted">{r.label}</div>
                <div className="mt-1 break-words font-serif text-lg">{r.value}</div>
              </div>
            );
            return (
              <Reveal key={r.label} delay={i * 80}>
                {r.href ? <a href={r.href}>{body}</a> : body}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <a
            href={`mailto:${company.email}`}
            className="mt-12 inline-block rounded-full bg-gold px-10 py-4 font-medium text-black transition hover:bg-gold-soft"
          >
            Написать нам
          </a>
        </Reveal>
      </div>
    </section>
  );
}
