import Image from "next/image";
import { person } from "@/lib/data";

export function Founder() {
  return (
    <section id="founder" className="section">
      <div className="wrap">
        <div className="split">
          <div className="photo split__photo">
            <Image
              src={person.photo}
              width={900}
              height={1125}
              alt={`${person.name}, президент Özgerim Holding`}
              sizes="(max-width: 860px) 100vw, 40vw"
            />
          </div>
          <div>
            <p className="small">Президент холдинга</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              {person.name}
            </h2>
            <ul className="roles small">
              {person.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div style={{ marginTop: 32, display: "grid", gap: 16, maxWidth: "36em" }}>
              {person.bio.map((t) => (
                <p key={t} className="body" style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
                  {t}
                </p>
              ))}
            </div>
            <div className="principles">
              {person.principles.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p className="small">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
