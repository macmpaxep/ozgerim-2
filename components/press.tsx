import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/data";

export function Press() {
  return (
    <section id="press" className="section section--soft">
      <div className="wrap">
        <h2 className="h2 press__title">Что пишут о нас в медиа?</h2>
        <ul className="press">
          {media.map((m) => (
            <li key={m.title}>
              <a href={m.url} target="_blank" rel="noopener noreferrer" className="press__item">
                <span className="small">
                  {m.source} | {m.kind}
                </span>
                <h3 className="h3">{m.title}</h3>
                <p className="press__lead">{m.lead}</p>
                <p className="small">{m.text}</p>
                <span className="press__more">
                  Читать на {m.source} <ArrowUpRight size={16} aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
