import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { formatCOP } from '../lib/format'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <Link
        to={`/producto/${product.slug}`}
        className="relative block overflow-hidden bg-[var(--sand)]"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--ink)] uppercase">
            Nuevo
          </span>
        )}
        {product.isExample && (
          <span className="absolute right-3 top-3 bg-[var(--paper)]/95 px-2 py-1 text-[10px] tracking-[0.08em] text-[var(--muted)] uppercase ring-1 ring-[var(--line)]">
            Ejemplo
          </span>
        )}
      </Link>
      <div className="mt-3 flex flex-1 flex-col gap-1">
        <Link
          to={`/producto/${product.slug}`}
          className="font-display text-xl text-[var(--ink)] transition group-hover:text-[var(--accent)]"
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
      </div>
    </article>
  )
}
