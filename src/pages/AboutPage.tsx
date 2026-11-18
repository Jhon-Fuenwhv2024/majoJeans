import { Seo } from '../components/Seo'
import { storeConfig } from '../config/store'

export function AboutPage() {
  return (
    <>
      <Seo
        title="Nosotros"
        description={`Conoce ${storeConfig.brandName}: ${storeConfig.tagline}`}
        path="/nosotros"
      />
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <div className="flex flex-col items-center text-center">
          <span className="brand-ring animate-gold">
            <img
              src={storeConfig.logoSrc}
              alt={storeConfig.brandName}
              className="h-28 w-28 rounded-full object-cover md:h-36 md:w-36"
            />
          </span>
          <p className="mt-6 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            Nosotros
          </p>
          <h1 className="mt-2 font-display text-4xl text-[var(--accent-deep)] md:text-5xl">
            Majo Jeans
          </h1>
          <p className="font-script mt-4 text-3xl text-[var(--accent)] md:text-4xl">
            {storeConfig.tagline}
          </p>
        </div>

        <p className="mt-10 text-center text-lg leading-relaxed text-[var(--muted)]">
          {storeConfig.bio}
        </p>
        <p className="mt-6 text-center leading-relaxed text-[var(--muted)]">
          Esta tienda es la vitrina oficial para explorar el catálogo, armar el
          carrito y cerrar el pedido por WhatsApp. Síguenos en Instagram{' '}
          <a
            className="text-[var(--accent-deep)] underline-offset-2 hover:underline"
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
