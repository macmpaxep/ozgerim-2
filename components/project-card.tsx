import type { Project, IconName } from "@/lib/data";
import { DirIcon } from "./icons";

type Props = Project & {
  accent: string;
  icon: IconName;
  directionTitle?: string;
};

export function ProjectCard({
  title,
  year,
  status,
  kind,
  location,
  metric,
  summary,
  tags,
  accent,
  icon,
  directionTitle,
}: Props) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel transition duration-500 hover:-translate-y-1.5 hover:border-[color:var(--a)]/50"
      style={{ "--a": accent } as React.CSSProperties}
    >
      {/* cover */}
      <div className="relative h-44 overflow-hidden">
        <div
          className="absolute inset-0 transition duration-700 group-hover:scale-110"
          style={{
            background: `radial-gradient(120% 120% at 20% 0%, ${accent}55 0%, transparent 55%), radial-gradient(90% 90% at 100% 100%, ${accent}30 0%, transparent 60%), linear-gradient(160deg, #141b29, #0b0f17)`,
          }}
        />
        <div className="grid-bg absolute inset-0 opacity-60" />
        <DirIcon
          name={icon}
          className="absolute -bottom-6 -right-4 h-36 w-36 opacity-20 transition duration-500 group-hover:opacity-40"
        />
        <div className="absolute left-5 top-5 flex gap-2">
          <span
            className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-wider backdrop-blur"
            style={{ borderColor: `${accent}66`, color: accent }}
          >
            {status === "done" ? "Реализован" : "В работе"}
          </span>
          <span className="rounded-full border border-line bg-black/30 px-3 py-1 text-[11px] text-muted backdrop-blur">
            {year}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {directionTitle && (
          <div className="mb-2 text-[11px] uppercase tracking-[0.25em]" style={{ color: accent }}>
            {directionTitle}
          </div>
        )}
        <h3 className="font-serif text-2xl leading-snug">{title}</h3>
        <div className="mt-1 text-sm text-muted">
          {kind}
          {location ? ` · ${location}` : ""}
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{summary}</p>

        <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted">{metric.label}</div>
            <div className="mt-1 font-serif text-xl" style={{ color: accent }}>
              {metric.value}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
