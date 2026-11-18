import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { formatCOP } from '../lib/format'

export function ProductCard({ product }: { product: Product }) {
  const second = product.images[1]

  return (
    <article className="group flex flex-col">
      <Link
        to={`/producto/${product.slug}`}
        className="relative block overflow-hidden bg-[var(--sand)]"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03] ${second ? 'group-hover:opacity-0' : ''}`}
          loading="lazy"
        />
        {second && (
          <img
            src={second}
            alt=""
            aria-hidden
            className="absolute inset-0 aspect-[3/4] h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-[var(--ink)]/80 px-3 py-2 text-center text-[11px] tracking-[0.16em] text-[var(--gold-shine)] uppercase transition group-hover:translate-y-0">
          Ver producto
        </div>
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--ink)] uppercase">
              Nuevo
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-[var(--ink)] px-2 py-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--gold-shine)] uppercase">
              Favorito
            </span>
          )}
        </div>
        {product.isExample && (
          <span className="absolute right-3 top-3 bg-[var(--paper)]/95 px-2 py-1 text-[10px] tracking-[0.08em] text-[var(--muted)] uppercase ring-1 ring-[var(--line)]">
            Ejemplo
          </span>
        )}
      </Link>
      <div className="mt-3 flex flex-1 flex-col gap-1">
        <Link
          to={`/producto/${product.slug}`}
          className="font-display text-lg text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] md:text-xl"
        >
          {product.name}
        </Link>
        <div className="flex items-baseline gap-2 text-sm">
          <span className="font-medium text-[var(--ink)]">
            {formatCOP(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-[var(--muted)] line-through">
              {formatCOP(product.compareAtPrice)}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs tracking-[0.08em] text-[var(--muted)] uppercase">
          {product.colors.map((c) => c.name).join(' · ')}
        </p>
        <p className="text-[10px] tracking-[0.12em] text-[var(--muted)] uppercase">
          Tallas {product.sizes.join(' · ')}
        </p>
      </div>
    </article>
  )
}
