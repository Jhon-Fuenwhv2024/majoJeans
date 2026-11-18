import { Link } from 'react-router-dom'
import { storeConfig } from '../config/store'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={storeConfig.logoSrc}
              alt={storeConfig.brandName}
              className="h-16 w-16 rounded-full object-cover ring-1 ring-[var(--gold)]/50"
            />
            <div>
              <p className="font-display text-xl tracking-[0.12em] text-[var(--gold-shine)]">
                Majo
              </p>
              <p className="text-[10px] tracking-[0.28em] text-white/55 uppercase">
                Jeans
              </p>
            </div>
          </div>
          <p className="font-script mt-4 text-2xl text-[var(--gold-shine)]">
            {storeConfig.tagline}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            {storeConfig.bio}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] uppercase text-[var(--gold)]/80">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link className="hover:text-[var(--gold-shine)]" to="/tienda">
                Tienda
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--gold-shine)]" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--gold-shine)]" to="/envios">
                Envíos
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--gold-shine)]" to="/cambios">
                Cambios y devoluciones
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--gold-shine)]" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] uppercase text-[var(--gold)]/80">
            Redes y contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                className="hover:text-[var(--gold-shine)]"
                href={storeConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram @{storeConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--gold-shine)]"
                href={`https://wa.me/${storeConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
                {storeConfig.whatsappIsExample ? ' (ejemplo)' : ''}
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--gold-shine)]"
                href={`mailto:${storeConfig.email}`}
              >
                {storeConfig.email}
                {storeConfig.emailIsExample ? ' (ejemplo)' : ''}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs tracking-[0.12em] text-white/45 uppercase">
        © 2026 {storeConfig.brandName} · Made with purpose
      </div>
    </footer>
  )
}
