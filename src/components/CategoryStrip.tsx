import { NavLink } from 'react-router-dom'
import { storeConfig } from '../config/store'

const links = [
  { to: '/tienda', label: 'Todo', end: true },
  ...storeConfig.categories.map((c) => ({
    to: `/tienda?categoria=${c.id}`,
    label: c.label,
    end: false,
  })),
]

export function CategoryStrip() {
  return (
    <div className="border-b border-[var(--line)] bg-[var(--paper)]/80">
      <nav
        className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 scrollbar-none"
        aria-label="Categorías"
      >
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `shrink-0 border px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition ${
                isActive
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)]'
                  : 'border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:text-[var(--ink)]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
