import { Seo } from '../components/Seo'
import { storeConfig, whatsappUrl } from '../config/store'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contacto"
        description="Escríbenos por WhatsApp o Instagram."
        path="/contacto"
      />
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          Contacto
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Hablemos</h1>
        <p className="mt-4 text-[var(--muted)]">
          Pedidos, tallas y disponibilidad se confirman por WhatsApp.
        </p>

        <ul className="mt-10 space-y-5 text-[var(--ink)]">
          <li>
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
              WhatsApp
            </p>
            <a
              className="mt-1 inline-block text-lg text-[var(--accent)] underline-offset-2 hover:underline"
              href={whatsappUrl(`Hola ${storeConfig.brandName}`)}
              target="_blank"
              rel="noreferrer"
            >
              +{storeConfig.whatsappNumber}
              {storeConfig.whatsappIsExample ? ' (ejemplo)' : ''}
            </a>
          </li>
          <li>
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
              Instagram
            </p>
            <a
              className="mt-1 inline-block text-lg text-[var(--accent)] underline-offset-2 hover:underline"
              href={storeConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              @{storeConfig.instagramHandle}
            </a>
          </li>
          <li>
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
              Correo
            </p>
            <a
              className="mt-1 inline-block text-lg text-[var(--accent)] underline-offset-2 hover:underline"
              href={`mailto:${storeConfig.email}`}
            >
              {storeConfig.email}
              {storeConfig.emailIsExample ? ' (ejemplo)' : ''}
            </a>
          </li>
        </ul>

        {(storeConfig.whatsappIsExample || storeConfig.emailIsExample) && (
          <p className="mt-8 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Teléfono y correo son de ejemplo: no se pudo leer un contacto
            público en Instagram sin iniciar sesión. Edítalos en{' '}
            <code>src/config/store.ts</code>.
          </p>
        )}
      </div>
    </>
  )
}
