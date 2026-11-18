import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { products } from '../data/products'
import type { StoreSize } from '../config/store'
import { storeConfig, whatsappUrl } from '../config/store'

const STORAGE_KEY = 'majo-jeans-cart-v1'

export type CartItem = {
  productId: string
  slug: string
  name: string
  price: number
  size: StoreSize
  colorId: string
  colorName: string
  image: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (key: string) => void
  updateQuantity: (key: string, quantity: number) => void
  clearCart: () => void
  itemKey: (item: Pick<CartItem, 'productId' | 'size' | 'colorId'>) => string
  buildWhatsAppOrder: (customer?: {
    name?: string
    city?: string
    notes?: string
  }) => string
  checkoutWhatsApp: (customer?: {
    name?: string
    city?: string
    notes?: string
  }) => void
}

const CartContext = createContext<CartContextValue | null>(null)

function itemKey(item: Pick<CartItem, 'productId' | 'size' | 'colorId'>) {
  return `${item.productId}::${item.size}::${item.colorId}`
}

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item) =>
      products.some((p) => p.id === item.productId),
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() =>
    typeof window === 'undefined' ? [] : loadCart(),
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback(
    (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
      const qty = item.quantity ?? 1
      setItems((prev) => {
        const key = itemKey(item)
        const existing = prev.find((i) => itemKey(i) === key)
        if (existing) {
          return prev.map((i) =>
            itemKey(i) === key
              ? { ...i, quantity: i.quantity + qty }
              : i,
          )
        }
        return [...prev, { ...item, quantity: qty }]
      })
      setIsOpen(true)
    },
    [],
  )

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => itemKey(i) !== key))
  }, [])

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          itemKey(i) === key ? { ...i, quantity: Math.max(0, quantity) } : i,
        )
        .filter((i) => i.quantity > 0),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const buildWhatsAppOrder = useCallback(
    (customer?: { name?: string; city?: string; notes?: string }) => {
      const lines = [
        `Hola ${storeConfig.brandName} 👋`,
        `Quiero hacer este pedido:`,
        '',
        ...items.map(
          (i, idx) =>
            `${idx + 1}. ${i.name} — Talla ${i.size} — Color ${i.colorName} — x${i.quantity} — $${i.price.toLocaleString('es-CO')} COP`,
        ),
        '',
        `Subtotal: $${items
          .reduce((s, i) => s + i.price * i.quantity, 0)
          .toLocaleString('es-CO')} COP`,
      ]
      if (customer?.name) lines.push(`Nombre: ${customer.name}`)
      if (customer?.city) lines.push(`Ciudad: ${customer.city}`)
      if (customer?.notes) lines.push(`Notas: ${customer.notes}`)
      if (storeConfig.whatsappIsExample) {
        lines.push(
          '',
          '(Pedido generado desde la tienda demo — confirma el número de WhatsApp real)',
        )
      }
      return lines.join('\n')
    },
    [items],
  )

  const checkoutWhatsApp = useCallback(
    (customer?: { name?: string; city?: string; notes?: string }) => {
      if (items.length === 0) return
      const msg = buildWhatsAppOrder(customer)
      window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer')
    },
    [items, buildWhatsAppOrder],
  )

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: items.reduce((s, i) => s + i.quantity, 0),
      subtotal: items.reduce((s, i) => s + i.price * i.quantity, 0),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemKey,
      buildWhatsAppOrder,
      checkoutWhatsApp,
    }),
    [
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      buildWhatsAppOrder,
      checkoutWhatsApp,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
