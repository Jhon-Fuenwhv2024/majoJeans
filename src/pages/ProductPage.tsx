import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ProductCard } from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { getProductBySlug, products } from '../data/products'
import type { StoreSize } from '../config/store'
import { formatCOP } from '../lib/format'

export function ProductPage() {
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()

  const [size, setSize] = useState<StoreSize | ''>('')
  const [colorId, setColorId] = useState('')
  const [imageIdx, setImageIdx] = useState(0)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  const related = useMemo(() => {
    if (!product) return []
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <Seo title="Producto no encontrado" path={`/producto/${slug}`} />
        <h1 className="font-display text-3xl">Producto no encontrado</h1>
        <Link to="/tienda" className="btn-primary mt-6 inline-flex">
          Volver a la tienda
        </Link>
      </div>
    )
  }

  const activeColor =
    product.colors.find((c) => c.id === colorId) ?? product.colors[0]

  function handleAdd() {
    setAdded(false)
    if (!size) {
      setError('Elige una talla')
      return
    }
    setError('')
    addItem({
      productId: product!.id,
      slug: product!.slug,
      name: product!.name,
      price: product!.price,
      size,
      colorId: activeColor.id,
      colorName: activeColor.name,
      image: product!.images[0],
    })
    setAdded(true)
  }

  return (
    <>
      <Seo
        title={product.name}
        description={product.description}
        path={`/producto/${product.slug}`}
        image={product.images[0]}
        type="product"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <nav className="mb-6 text-sm text-[var(--muted)]" aria-label="Migas">
          <Link to="/tienda" className="hover:text-[var(--ink)]">
            Tienda
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ink)]">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-[var(--sand)]">
              <img
                src={product.images[imageIdx]}
                alt={`${product.name} — imagen ${imageIdx + 1}`}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => setImageIdx(i)}
                    className={`overflow-hidden border-2 ${i === imageIdx ? 'border-[var(--accent)]' : 'border-transparent'}`}
                    aria-label={`Ver imagen ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${i + 1} de ${product.name}`}
                      className="h-20 w-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            {product.isExample && (
              <p className="mb-3 inline-block bg-amber-100 px-2 py-1 text-xs tracking-[0.08em] text-amber-900 uppercase">
                Producto de ejemplo
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl">{product.name}</h1>
            <div className="mt-3 flex items-baseline gap-3">
              <p className="text-xl font-medium">{formatCOP(product.price)}</p>
              {product.compareAtPrice && (
                <p className="text-[var(--muted)] line-through">
                  {formatCOP(product.compareAtPrice)}
                </p>
              )}
            </div>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              {product.description}
            </p>

            <fieldset className="mt-8">
              <legend className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
                Color: {activeColor.name}
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setColorId(c.id)}
                    className={`h-9 w-9 rounded-full border-2 ${
                      activeColor.id === c.id
                        ? 'border-[var(--ink)]'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                    aria-pressed={activeColor.id === c.id}
                    title={c.name}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
                Talla
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSize(s)
                      setError('')
                    }}
                    className={`min-w-12 border px-3 py-2 text-sm ${
                      size === s
                        ? 'border-[var(--ink)] bg-[var(--ink)] text-white'
                        : 'border-[var(--line)] hover:border-[var(--ink)]'
                    }`}
                    aria-pressed={size === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            {error && (
              <p className="mt-3 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}
            {added && (
              <p className="mt-3 text-sm text-emerald-700" role="status">
                Agregado al carrito
              </p>
            )}

            <button type="button" className="btn-primary mt-8 w-full sm:w-auto" onClick={handleAdd}>
              Agregar al carrito
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 border-t border-[var(--line)] pt-12">
            <h2 className="font-display text-3xl">También te puede gustar</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
