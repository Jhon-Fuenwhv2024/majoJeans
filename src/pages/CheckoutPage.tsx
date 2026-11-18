import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { useCart } from '../context/CartContext'
import { storeConfig } from '../config/store'
import { formatCOP } from '../lib/format'

export function CheckoutPage() {
  const { items, subtotal, checkoutWhatsApp, itemKey } = useCart()
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [notes, setNotes] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (items.length === 0) return
    checkoutWhatsApp({
      name: name.trim() || undefined,
      city: city.trim() || undefined,
      notes: notes.trim() || undefined,
    })
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Finalizar pedido"
        description="Confirma tu pedido y envíalo por WhatsApp."
        path="/pedido"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Finalizar pedido</h1>
        <p className="mt-3 max-w-xl text-[var(--muted)]">
          No hay pasarela de pagos. Al confirmar se abre WhatsApp con el resumen
          del pedido para coordinar pago y envío.
        </p>

        {items.length === 0 ? (
          <div className="mt-12 border border-dashed border-[var(--line)] px-6 py-16 text-center">
            <p className="font-display text-2xl">No hay productos en el carrito</p>
            <Link to="/tienda" className="btn-primary mt-6 inline-flex">
              Ir a la tienda
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs tracking-[0.12em] uppercase text-[var(--muted)]">
                  Nombre
                </label>
                <input
                  id="name"
                  className="field mt-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="city" className="text-xs tracking-[0.12em] uppercase text-[var(--muted)]">
                  Ciudad
                </label>
                <input
                  id="city"
                  className="field mt-2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ej. Bogotá"
                  autoComplete="address-level2"
                />
              </div>
              <div>
                <label htmlFor="notes" className="text-xs tracking-[0.12em] uppercase text-[var(--muted)]">
                  Notas del pedido
                </label>
                <textarea
                  id="notes"
                  className="field mt-2 min-h-28"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Indicaciones de envío, preferencia de pago, etc."
                />
              </div>

              {storeConfig.whatsappIsExample && (
                <p className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                  Número de WhatsApp de ejemplo:{' '}
                  <strong>{storeConfig.whatsappNumber}</strong>. Cámbialo en{' '}
                  <code>src/config/store.ts</code> antes de usar en producción.
                </p>
              )}

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Enviar pedido por WhatsApp
              </button>

              {sent && (
                <p className="text-sm text-emerald-700" role="status">
                  Se abrió WhatsApp con tu pedido. Si no ves la ventana, revisa
                  el bloqueador de pop-ups.
                </p>
              )}
            </form>

            <aside className="border border-[var(--line)] p-5 h-fit">
              <h2 className="font-display text-2xl">Resumen</h2>
              <ul className="mt-4 space-y-4">
                {items.map((item) => (
                  <li key={itemKey(item)} className="flex justify-between gap-3 text-sm">
                    <span>
                      {item.name}
                      <span className="block text-[var(--muted)]">
                        {item.size} · {item.colorName} · x{item.quantity}
                      </span>
                    </span>
                    <span className="shrink-0">
                      {formatCOP(item.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex justify-between border-t border-[var(--line)] pt-4 font-medium">
                <span>Subtotal</span>
                <span>{formatCOP(subtotal)}</span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </>
  )
}
