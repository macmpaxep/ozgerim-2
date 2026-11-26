"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#directions", label: "Направления" },
  { href: "/#founder", label: "Айбар Абилов" },
  { href: "/#portfolio", label: "Портфолио" },
  { href: "/#book", label: "Книга" },
  { href: "/#contact", label: "Контакты" },
];

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 font-serif text-xl text-gold">
        Ö
      </span>
      <span className="leading-none">
        <span className="block font-serif text-lg tracking-[0.18em]">ÖZGERIM</span>
        <span className="block pt-1 text-[10px] uppercase tracking-[0.5em] text-gold">Holding</span>
      </span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Özgerim Holding — на главную">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-gold-soft"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden rounded-full border border-gold/50 px-6 py-2.5 text-sm text-gold transition hover:bg-gold hover:text-black lg:inline-block"
        >
          Связаться
        </Link>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-6 pb-8 pt-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 font-serif text-2xl"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
