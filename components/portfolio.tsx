"use client";

import { useMemo, useState } from "react";
import { allProjects, directions } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { Reveal, SectionHead } from "./ui";

export function Portfolio() {
  const [active, setActive] = useState<string>("all");
  const [status, setStatus] = useState<"all" | "done" | "active">("all");

  const list = useMemo(
    () =>
      allProjects.filter(
        (p) =>
          (active === "all" || p.directionSlug === active) &&
          (status === "all" || p.status === status),
      ),
    [active, status],
  );

  const chip = (on: boolean) =>
    `rounded-full border px-5 py-2.5 text-sm transition ${
      on
        ? "border-gold bg-gold text-black"
        : "border-line text-muted hover:border-gold/50 hover:text-gold-soft"
    }`;

  return (
    <section id="portfolio" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Портфолио"
          title={
            <>
              Проекты, которыми <span className="gold-text italic">мы гордимся</span>
            </>
          }
          text="Реализованные и текущие работы по всем направлениям холдинга."
        />

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-center gap-5">
            <div className="flex flex-wrap justify-center gap-3">
              <button className={chip(active === "all")} onClick={() => setActive("all")}>
                Все направления
              </button>
              {directions.map((d) => (
                <button
                  key={d.slug}
                  className={chip(active === d.slug)}
                  onClick={() => setActive(d.slug)}
                >
                  {d.title}
                </button>
              ))}
            </div>
            <div className="flex gap-2 rounded-full border border-line p-1 text-sm">
              {(
                [
                  ["all", "Все"],
                  ["done", "Реализованные"],
                  ["active", "В работе"],
                ] as const
              ).map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setStatus(k)}
                  className={`rounded-full px-5 py-2 transition ${
                    status === k ? "bg-white/10 text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <div key={`${p.directionSlug}-${p.title}`}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-14 text-center text-muted">В этой категории пока нет проектов.</p>
        )}
      </div>
    </section>
  );
}
