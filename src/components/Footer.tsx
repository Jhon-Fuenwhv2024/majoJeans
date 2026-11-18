import { Link } from 'react-router-dom'
import { storeConfig } from '../config/store'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-[0.04em]">
            {storeConfig.brandName}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {storeConfig.bio}
            {storeConfig.bioIsExample && (
              <span className="mt-2 block text-xs text-amber-200/90">
                Bio de ejemplo — reemplázala en src/config/store.ts
              </span>
            )}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-white/50">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link className="hover:text-white" to="/tienda">
                Tienda
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/envios">
                Envíos
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/cambios">
                Cambios y devoluciones
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-white/50">
            Redes y contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                className="hover:text-white"
                href={storeConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram @{storeConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
                href={`https://wa.me/${storeConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
                {storeConfig.whatsappIsExample ? ' (ejemplo)' : ''}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${storeConfig.email}`}>
                {storeConfig.email}
                {storeConfig.emailIsExample ? ' (ejemplo)' : ''}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/45">
        © 2026 {storeConfig.brandName}. Catálogo de demostración — precios y
        productos de ejemplo.
      </div>
    </footer>
  )
}
