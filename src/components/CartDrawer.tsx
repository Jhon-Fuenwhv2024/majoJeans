import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCOP } from '../lib/format'
import { storeConfig } from '../config/store'

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    itemKey,
    updateQuantity,
    removeItem,
  } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Carrito">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Cerrar carrito"
        onClick={closeCart}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[var(--bg)] shadow-2xl animate-slide-in">
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
          <h2 className="font-display text-2xl">Tu carrito</h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm"
          >
            Cerrar
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[var(--muted)]">Tu carrito está vacío.</p>
              <Link
                to="/tienda"
                onClick={closeCart}
                className="mt-4 inline-block text-sm tracking-[0.1em] uppercase text-[var(--accent)] underline-offset-4 hover:underline"
              >
                Ir a la tienda
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => {
                const key = itemKey(item)
                return (
                  <li key={key} className="flex gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="h-24 w-20 object-cover bg-[var(--sand)]"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-[var(--ink)]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        Talla {item.size} · {item.colorName}
                      </p>
                      <p className="mt-1 text-sm">{formatCOP(item.price)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          className="h-8 w-8 border border-[var(--line)]"
                          aria-label="Disminuir cantidad"
                          onClick={() =>
                            updateQuantity(key, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="h-8 w-8 border border-[var(--line)]"
                          aria-label="Aumentar cantidad"
                          onClick={() =>
                            updateQuantity(key, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="ml-auto text-xs text-[var(--muted)] underline"
                          onClick={() => removeItem(key)}
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-[var(--line)] px-5 py-4">
          <div className="mb-3 flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-medium">{formatCOP(subtotal)}</span>
          </div>
          {storeConfig.whatsappIsExample && (
            <p className="mb-3 text-xs text-amber-800">
              El checkout usa un WhatsApp de ejemplo configurable en{' '}
              <code className="text-[11px]">src/config/store.ts</code>.
            </p>
          )}
          <Link
            to="/checkout"
            onClick={closeCart}
            className={`btn-primary w-full text-center ${items.length === 0 ? 'pointer-events-none opacity-50' : ''}`}
            aria-disabled={items.length === 0}
          >
            Ir al checkout
          </Link>
        </div>
      </aside>
    </div>
  )
}
