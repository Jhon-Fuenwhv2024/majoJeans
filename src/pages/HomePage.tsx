import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ProductCard } from '../components/ProductCard'
import { storeConfig } from '../config/store'
import { getBestSellers, getNewProducts } from '../data/products'

const collections = [
  {
    title: 'Jeans',
    copy: 'Ajustados, tiro alto, cargo y pierna ancha.',
    to: '/tienda?categoria=jeans',
    image: '/images/collection-jeans.jpg',
  },
  {
    title: 'Bermudas',
    copy: 'Mezclilla liviana para el día a día.',
    to: '/tienda?categoria=bermudas',
    image: '/images/product-shorts.jpg',
  },
  {
    title: 'Chaquetas',
    copy: 'Capas esenciales en mezclilla.',
    to: '/tienda?categoria=chaquetas',
    image: '/images/product-jacket.jpg',
  },
]

const marqueeItems = [
  'Envíos a todo Colombia',
  'Pedidos por WhatsApp',
  'Nueva temporada jeans',
  `@${storeConfig.instagramHandle}`,
  'La moda también es una forma de adorar',
]

export function HomePage() {
  const favorites = getBestSellers()
  const news = getNewProducts()

  return (
    <>
      <Seo path="/" />

      {/* Cinta tipo boutique (como barra promocional de referencia) */}
      <div className="overflow-hidden border-b border-[var(--line)] bg-[var(--ink)] py-2.5 text-[var(--gold-shine)]">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-[11px] tracking-[0.2em] uppercase">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              {item}
              <span aria-hidden className="text-[var(--accent)]">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <section className="relative min-h-[88svh] overflow-hidden">
        <img
          src="/images/hero-denim.jpg"
          alt="Modelo con jeans Majo Jeans (imagen de ejemplo)"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/80 via-[var(--ink)]/50 to-[var(--ink)]/15" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:pb-24">
          <div className="animate-fade-up flex items-center gap-4 md:gap-6">
            <span className="brand-ring animate-gold shrink-0 shadow-lg">
              <img
                src={storeConfig.logoSrc}
                alt=""
                className="h-20 w-20 rounded-full object-cover md:h-28 md:w-28"
              />
            </span>
            <div>
              <p className="font-display text-4xl text-[var(--gold-shine)] md:text-6xl lg:text-7xl">
                Majo
              </p>
              <p className="mt-1 text-xs tracking-[0.42em] text-white/80 uppercase md:text-sm">
                Jeans
              </p>
            </div>
          </div>
          <h1 className="font-script animate-fade-up-delay mt-5 max-w-lg text-3xl text-[var(--gold-shine)] md:text-4xl">
            {storeConfig.tagline}
          </h1>
          <p className="mt-3 max-w-md text-base text-white/85 md:text-lg">
            Jeans para mujer con identidad. Compra en línea y confirma tu pedido
            por WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay">
            <Link to="/tienda" className="btn-primary">
              Ver tienda
            </Link>
            <a
              href={storeConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost border-[var(--gold)]/50 text-[var(--gold-shine)]"
            >
              @{storeConfig.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      {/* Banners duales (estructura tipo referencia) */}
      <section className="mx-auto grid max-w-6xl gap-3 px-4 py-6 md:grid-cols-2 md:gap-4 md:py-8">
        <Link
          to="/tienda?categoria=novedades"
          className="group relative min-h-52 overflow-hidden md:min-h-72"
        >
          <img
            src="/images/product-mom-light.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/45" />
          <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold-shine)]">
              Recién llegados
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Novedades</h2>
            <span className="mt-3 text-sm tracking-[0.12em] uppercase underline underline-offset-4">
              Ver colección
            </span>
          </div>
        </Link>
        <Link
          to="/tienda?orden=favoritos"
          className="group relative min-h-52 overflow-hidden md:min-h-72"
        >
          <img
            src="/images/product-skinny-indigo.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/45" />
          <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold-shine)]">
              Los más pedidos
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Favoritos</h2>
            <span className="mt-3 text-sm tracking-[0.12em] uppercase underline underline-offset-4">
              Ver favoritos
            </span>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
              Colecciones
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">
              Elige tu silueta
            </h2>
          </div>
          <Link
            to="/tienda"
            className="hidden text-sm tracking-[0.1em] uppercase text-[var(--accent-deep)] underline-offset-4 hover:underline md:inline"
          >
            Ver todo
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group relative block min-h-56 overflow-hidden"
            >
              <img
                src={c.image}
                alt={`Colección ${c.title}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--ink)]/45 transition group-hover:bg-[var(--ink)]/35" />
              <div className="relative flex h-full flex-col justify-end p-5 text-white">
                <h3 className="font-display text-3xl">{c.title}</h3>
                <p className="mt-1 text-sm text-white/80">{c.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
                Los favoritos
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">
                Lo más pedido
              </h2>
            </div>
            <Link
              to="/tienda?orden=favoritos"
              className="text-sm tracking-[0.1em] uppercase text-[var(--accent-deep)] underline-offset-4 hover:underline"
            >
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {favorites.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
              Novedades
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">
              Recién llegados
            </h2>
          </div>
          <Link
            to="/tienda?categoria=novedades"
            className="text-sm tracking-[0.1em] uppercase text-[var(--accent-deep)] underline-offset-4 hover:underline"
          >
            Ver novedades
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {news.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            La marca
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">
            Hecho con propósito
          </h2>
          <p className="font-script mt-3 text-3xl text-[var(--accent-deep)]">
            {storeConfig.tagline}
          </p>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            {storeConfig.bio} Sigue a @{storeConfig.instagramHandle} para
            lanzamientos y estilos del día.
          </p>
          <Link to="/nosotros" className="btn-primary mt-6 inline-flex">
            Conocer la marca
          </Link>
        </div>
        <img
          src="/images/collection-jeans.jpg"
          alt="Selección de jeans Majo Jeans (imagen de ejemplo)"
          className="aspect-[4/3] w-full object-cover"
        />
      </section>

      {/* Franja Instagram (inspirada en cierre social de tiendas boutique) */}
      <section className="border-y border-[var(--line)] bg-[var(--ink)] px-4 py-14 text-center text-[var(--paper)]">
        <p className="text-xs tracking-[0.2em] text-[var(--gold)] uppercase">
          Síguenos
        </p>
        <p className="font-display mt-3 text-3xl text-[var(--gold-shine)] md:text-4xl">
          @{storeConfig.instagramHandle}
        </p>
        <p className="font-script mx-auto mt-3 max-w-md text-2xl text-[var(--gold-shine)]">
          {storeConfig.tagline}
        </p>
        <a
          href={storeConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-8 inline-flex"
        >
          Ver Instagram
        </a>
      </section>

      {/* CTA tipo “visita / contacto” sin inventar dirección real */}
      <section className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
        <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          Pedidos
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">
          Compra fácil por WhatsApp
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[var(--muted)]">
          Arma tu carrito en la tienda y envía el pedido. Coordinamos pago y
          envío a todo Colombia.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/tienda" className="btn-primary">
            Ir a la tienda
          </Link>
          <Link to="/contacto" className="btn-ghost">
            Contacto
          </Link>
        </div>
      </section>
    </>
  )
}
