"use client";

import { useState } from "react";
import { essOrderUrl } from "@/lib/data";

type Status = "idle" | "sending" | "done" | "error";

export function EssForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const f = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/ess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          phone: f.get("phone"),
          city: f.get("city"),
          study: f.get("study"),
          level: f.get("level"),
          website: f.get("website"),
          consent: f.get("consent") === "on",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Не удалось отправить заявку");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Не удалось отправить заявку");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form__done" role="status">
        <h3 className="h3">Заявка отправлена</h3>
        <p className="body">Спасибо! Мы свяжемся с вами по указанному телефону в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__grid">
        <label className="field">
          <span>Имя и фамилия *</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} />
        </label>
        <label className="field">
          <span>Телефон (WhatsApp) *</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 ___ ___ __ __"
            required
            minLength={10}
            maxLength={40}
          />
        </label>
        <label className="field">
          <span>Город проживания</span>
          <input name="city" type="text" autoComplete="address-level2" maxLength={80} />
        </label>
        <label className="field">
          <span>Где хотите учиться</span>
          <select name="study" defaultValue="">
            <option value="">Выберите</option>
            <option>Стамбул</option>
            <option>Измир</option>
            <option>Пока не решил(а)</option>
          </select>
        </label>
        <label className="field field--wide">
          <span>Опыт в финансах</span>
          <select name="level" defaultValue="">
            <option value="">Выберите</option>
            <option>Нет опыта</option>
            <option>Немного разбираюсь</option>
            <option>Работаю или учусь в финансах</option>
          </select>
        </label>
      </div>

      {/* ловушка для ботов: людям не видна */}
      <div className="form__trap" aria-hidden="true">
        <label>
          Сайт
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="check">
        <input name="consent" type="checkbox" required />
        <span>Согласен(на) на обработку персональных данных для связи по заявке *</span>
      </label>

      <div className="form__actions">
        <button type="submit" className="pill" disabled={status === "sending"}>
          {status === "sending" ? "Отправляем…" : "Отправить заявку"}
        </button>
        <a href={essOrderUrl} target="_blank" rel="noopener noreferrer" className="form__alt">
          Написать в WhatsApp
        </a>
      </div>

      <p className="form__error" role="alert" hidden={status !== "error"}>
        {error} Можно написать нам в WhatsApp.
      </p>
    </form>
  );
}
