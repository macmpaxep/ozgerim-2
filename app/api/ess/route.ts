import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

const CITIES = ["Стамбул", "Измир", "Пока не решил(а)"];
const LEVELS = ["Нет опыта", "Немного разбираюсь", "Работаю или учусь в финансах"];

// простая защита от спама: не больше 5 заявок за 10 минут с одного адреса
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Неверный запрос" }, { status: 400 });
  }

  // скрытое поле-ловушка для ботов: делаем вид, что всё хорошо
  if (clean(body.website, 100)) return Response.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (limited(ip)) {
    return Response.json({ error: "Слишком много заявок. Попробуйте позже." }, { status: 429 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const city = clean(body.city, 80);
  const study = clean(body.study, 40);
  const level = clean(body.level, 60);

  if (name.length < 2) return Response.json({ error: "Укажите имя" }, { status: 400 });
  if (phone.replace(/\D/g, "").length < 10) {
    return Response.json({ error: "Укажите телефон с кодом страны" }, { status: 400 });
  }
  if (body.consent !== true) {
    return Response.json({ error: "Нужно согласие на обработку данных" }, { status: 400 });
  }

  const application = {
    at: new Date().toISOString(),
    name,
    phone,
    city,
    study: CITIES.includes(study) ? study : "",
    level: LEVELS.includes(level) ? level : "",
  };

  const text = [
    "Новая заявка на обучение финансам в Турции",
    `Имя: ${application.name}`,
    `Телефон: ${application.phone}`,
    application.city && `Город: ${application.city}`,
    application.study && `Где учиться: ${application.study}`,
    application.level && `Опыт в финансах: ${application.level}`,
  ]
    .filter(Boolean)
    .join("\n");

  let delivered = false;

  // 1) Telegram — если заданы TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (token && chat) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chat, text }),
      });
      if (res.ok) delivered = true;
    } catch {
      /* пробуем запасной вариант */
    }
  }

  // 2) файл на сервере: data/ess-applications.jsonl
  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "ess-applications.jsonl"), JSON.stringify(application) + "\n");
    delivered = true;
  } catch {
    /* на хостинге без записи на диск файл не создаётся */
  }

  if (!delivered) {
    return Response.json({ error: "Не удалось отправить заявку" }, { status: 500 });
  }
  return Response.json({ ok: true });
}
