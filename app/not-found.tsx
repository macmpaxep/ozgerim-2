import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: "100svh", paddingTop: 160 }}>
      <div className="wrap">
        <p className="small">Ошибка 404</p>
        <h1 className="h1" style={{ marginTop: 12 }}>
          Такой страницы нет
        </h1>
        <p className="body" style={{ marginTop: 20 }}>
          Возможно, адрес изменился. Вернитесь на главную и выберите направление.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/" className="pill">
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
