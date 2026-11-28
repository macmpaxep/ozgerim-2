"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#directions", label: "Направления" },
  { href: "/#founder", label: "Президент" },
  { href: "/#portfolio", label: "Проекты" },
  { href: "/#book", label: "Книга" },
  { href: "/#contact", label: "Контакты" },
];

export function Logo() {
  return <span className="logo">özgerim</span>;
}

export function Header({ action }: { action?: { href: string; label: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="site-header__row">
          <Link href="/" aria-label="Özgerim Holding — на главную">
            <Logo />
          </Link>

          {action ? (
            <a
              href={action.href}
              {...(action.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="pill pill--glass"
            >
              {action.label}
            </a>
          ) : null}

          {!action && (
            <nav className="nav" aria-label="Основное меню">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
          )}

          {!action && (
            <button
              className="menu-btn"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>

        {open && !action && (
          <nav className="nav-mobile" aria-label="Мобильное меню">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
