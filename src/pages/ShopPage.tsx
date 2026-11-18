import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ProductCard } from '../components/ProductCard'
import { storeConfig, type StoreSize } from '../config/store'
import { getPriceBounds, products } from '../data/products'
import { formatCOP } from '../lib/format'

export function ShopPage() {
  const [params, setParams] = useSearchParams()
  const bounds = getPriceBounds()

  const category = params.get('categoria') ?? 'todas'
  const size = (params.get('talla') ?? '') as StoreSize | ''
  const maxPrice = Number(params.get('precio') ?? bounds.max)
  const sort = params.get('orden') ?? 'destacados'

  const [draftMax, setDraftMax] = useState(maxPrice)

  const filtered = useMemo(() => {
    let list = [...products]
    if (category === 'novedades') {
      list = list.filter((p) => p.isNew)
    } else if (category !== 'todas') {
      list = list.filter((p) => p.category === category)
    }
    if (size) {
      list = list.filter((p) => p.sizes.includes(size))
    }
    list = list.filter((p) => p.price <= maxPrice)
    if (sort === 'precio-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'precio-desc') list.sort((a, b) => b.price - a.price)
    if (sort === 'nuevos')
      list.sort((a, b) => Number(b.isNew) - Number(a.isNew))
    return list
  }, [category, size, maxPrice, sort])

  function updateParam(key: string, value: string) {
    const next = new URLSearchParams(params)
    const clear =
      !value ||
      value === 'todas' ||
      (key === 'precio' && Number(value) >= bounds.max) ||
      (key === 'orden' && value === 'destacados')
    if (clear) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <>
      <Seo
        title="Tienda"
        description="Catálogo de jeans, shorts y chaquetas Majo Jeans. Precios en COP."
        path="/tienda"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <header className="mb-8 max-w-2xl">
          <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            Catálogo
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">Tienda</h1>
          <p className="mt-3 text-[var(--muted)]">
            Filtra por categoría, talla y precio. Todos los artículos están
            marcados como ejemplo.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-6 rounded-none border border-[var(--line)] p-4 h-fit lg:sticky lg:top-28">
            <div>
              <label htmlFor="categoria" className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
                Categoría
              </label>
              <select
                id="categoria"
                className="field mt-2"
                value={category}
                onChange={(e) => updateParam('categoria', e.target.value)}
              >
                <option value="todas">Todas</option>
                {storeConfig.categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="talla" className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
                Talla
              </label>
              <select
                id="talla"
                className="field mt-2"
                value={size}
                onChange={(e) => updateParam('talla', e.target.value)}
              >
                <option value="">Todas</option>
                {storeConfig.sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="precio" className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
                Precio máximo: {formatCOP(draftMax)}
              </label>
              <input
                id="precio"
                type="range"
                min={bounds.min}
                max={bounds.max}
                step={5000}
                value={draftMax}
                className="mt-3 w-full accent-[var(--accent)]"
                onChange={(e) => setDraftMax(Number(e.target.value))}
                onMouseUp={() => updateParam('precio', String(draftMax))}
                onTouchEnd={() => updateParam('precio', String(draftMax))}
                onBlur={() => updateParam('precio', String(draftMax))}
              />
            </div>

            <div>
              <label htmlFor="orden" className="text-xs tracking-[0.14em] uppercase text-[var(--muted)]">
                Orden
              </label>
              <select
                id="orden"
                className="field mt-2"
                value={sort}
                onChange={(e) => updateParam('orden', e.target.value)}
              >
                <option value="destacados">Destacados</option>
                <option value="nuevos">Novedades</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
              </select>
            </div>
          </aside>

          <div>
            <p className="mb-4 text-sm text-[var(--muted)]">
              {filtered.length} producto{filtered.length === 1 ? '' : 's'}
            </p>
            {filtered.length === 0 ? (
              <div className="border border-dashed border-[var(--line)] px-6 py-16 text-center">
                <p className="font-display text-2xl">Sin resultados</p>
                <p className="mt-2 text-[var(--muted)]">
                  Prueba otras tallas o sube el precio máximo.
                </p>
                <button
                  type="button"
                  className="btn-primary mt-6"
                  onClick={() => {
                    setParams({}, { replace: true })
                    setDraftMax(bounds.max)
                  }}
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
