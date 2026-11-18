import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { storeConfig } from '../config/store'
import { useCart } from '../context/CartContext'

const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/tienda?categoria=jeans', label: 'Jeans' },
  { to: '/tienda?categoria=bermudas', label: 'Bermudas' },
  { to: '/tienda?categoria=chaquetas', label: 'Chaquetas' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export function Header() {
  const { itemCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] backdrop-blur-md">
      <div className="bg-[var(--ink)] px-4 py-2 text-center text-[11px] tracking-[0.18em] text-[var(--gold-shine)] uppercase">
        {storeConfig.announcement}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:grid-cols-[minmax(9rem,auto)_1fr_minmax(9rem,auto)] md:gap-6 md:py-4">
        {/* Izquierda: menú móvil + logo */}
        <div className="flex items-center gap-2 justify-self-start">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--ink)] md:hidden"
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
            className="flex shrink-0 items-center gap-2"
            onClick={() => setMenuOpen(false)}
            aria-label={storeConfig.brandName}
          >
            <span className="brand-ring animate-gold shrink-0">
              <img
                src={storeConfig.logoSrc}
                alt=""
                className="h-11 w-11 rounded-full object-cover md:h-12 md:w-12"
              />
            </span>
            {/* Solo el wordmark en pantallas anchas, separado del menú */}
            <span className="hidden min-[1100px]:flex flex-col leading-none">
              <span className="font-display text-base text-[var(--accent-deep)]">
                Majo
              </span>
              <span className="mt-0.5 text-[9px] tracking-[0.28em] text-[var(--muted)] uppercase">
                Jeans
              </span>
            </span>
          </Link>
        </div>

        {/* Centro: navegación (no se solapa con el logo) */}
        <nav
          className="hidden min-w-0 justify-self-center md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-5 md:gap-y-1 lg:gap-x-7"
          aria-label="Navegación principal"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-[var(--accent-deep)] lg:text-[12px] ${
                  isActive ? 'text-[var(--accent-deep)]' : 'text-[var(--muted)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Derecha: carrito */}
        <div className="justify-self-end">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 items-center gap-2 border border-[var(--line)] px-3 text-sm text-[var(--ink)]"
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
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[11px] font-semibold text-[var(--ink)]">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-[var(--line)] bg-[var(--bg)] px-4 py-3 md:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block py-2 text-sm tracking-[0.12em] uppercase text-[var(--ink)]"
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
