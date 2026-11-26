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
              sizes="(max-width: 860px) 100vw, 35vw"
            />
          </div>
          <div>
            <p className="kicker">Президент холдинга</p>
            <h2 className="h2" style={{ marginTop: 12 }}>
              {person.name}
            </h2>
            <ul className="roles" style={{ listStyle: "none", padding: 0 }}>
              {person.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div style={{ marginTop: 28, display: "grid", gap: 16, maxWidth: "40em" }}>
              {person.bio.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <div className="principles">
              {person.principles.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
