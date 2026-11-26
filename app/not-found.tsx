import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <div className="gold-text font-serif text-8xl">404</div>
        <p className="mt-4 text-muted">Страница не найдена</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-medium text-black"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
