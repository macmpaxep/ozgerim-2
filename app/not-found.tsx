import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: "100svh" }}>
      <div className="wrap">
        <p className="kicker">Ошибка 404</p>
        <h1 className="h1" style={{ marginTop: 12 }}>
          Такой страницы нет
        </h1>
        <p className="lede" style={{ marginTop: 20 }}>
          Возможно, адрес изменился. Вернитесь на главную и выберите направление.
        </p>
        <div className="hero__actions">
          <Link href="/" className="btn">
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
