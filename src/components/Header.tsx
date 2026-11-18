import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { storeConfig } from '../config/store'
import { useCart } from '../context/CartContext'

const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/tienda?categoria=jeans', label: 'Jeans' },
  { to: '/tienda?categoria=shorts', label: 'Shorts' },
  { to: '/tienda?categoria=chaquetas', label: 'Chaquetas' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export function Header() {
  const { itemCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-md">
      <div className="bg-[var(--ink)] px-4 py-2 text-center text-[11px] tracking-[0.14em] text-[var(--paper)] uppercase">
        {storeConfig.announcement}
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>

        <Link
          to="/"
          className="font-display text-2xl tracking-[0.04em] text-[var(--ink)] md:text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          {storeConfig.brandName}
        </Link>

        <nav className="hidden items-center gap-5 text-[13px] tracking-[0.08em] uppercase md:flex" aria-label="Principal">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-[var(--accent)] ${isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="relative inline-flex h-10 items-center gap-2 rounded-md border border-[var(--line)] px-3 text-sm"
          aria-label={`Abrir carrito, ${itemCount} artículos`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 7h12l-1 12H7L6 7zm3-3h6l1 3H8l1-3z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span className="hidden sm:inline">Carrito</span>
          {itemCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[11px] text-white">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-[var(--line)] bg-[var(--bg)] px-4 py-3 md:hidden"
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block py-2 text-sm tracking-[0.08em] uppercase text-[var(--ink)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
