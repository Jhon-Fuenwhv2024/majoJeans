import { Seo } from '../components/Seo'
import { storeConfig } from '../config/store'

export function AboutPage() {
  return (
    <>
      <Seo
        title="Nosotros"
        description={`Conoce ${storeConfig.brandName}, marca de jeans colombiana.`}
        path="/nosotros"
      />
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          Nosotros
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {storeConfig.brandName}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
          {storeConfig.bio}
        </p>
        {storeConfig.bioIsExample && (
          <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Este texto es de ejemplo: la bio pública de Instagram no estuvo
            disponible sin iniciar sesión. Actualízala en{' '}
            <code>src/config/store.ts</code>.
          </p>
        )}
        <p className="mt-6 leading-relaxed text-[var(--muted)]">
          Esta tienda web es una vitrina para explorar el catálogo, armar el
          carrito y cerrar el pedido por WhatsApp. Síguenos en Instagram{' '}
          <a
            className="text-[var(--accent)] underline-offset-2 hover:underline"
            href={storeConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            @{storeConfig.instagramHandle}
          </a>
          .
        </p>
        <img
          src="/images/hero-denim.jpg"
          alt="Estilo de jeans Majo Jeans (imagen de ejemplo)"
          className="mt-10 aspect-[16/9] w-full object-cover"
        />
      </div>
    </>
  )
}
