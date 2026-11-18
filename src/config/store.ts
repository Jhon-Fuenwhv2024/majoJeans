/**
 * Configuración central de la tienda Majo Jeans.
 *
 * Del logo / Instagram oficiales:
 * - Marca, handle y slogan visibles en el logo.
 * WhatsApp y correo siguen siendo de ejemplo hasta confirmarlos.
 */

export const storeConfig = {
  brandName: 'Majo Jeans',
  /** Slogan del logo oficial */
  tagline: 'La moda también es una forma de adorar',
  logoSrc: '/images/logo-majo-jeans.png',
  /** Handle oficial */
  instagramHandle: 'majo_jeansoficial',
  instagramUrl: 'https://www.instagram.com/majo_jeansoficial',
  /**
   * EJEMPLO — aún no confirmado públicamente en Instagram sin login.
   * Formato internacional sin + ni espacios (ej. 57XXXXXXXXXX).
   */
  whatsappNumber: '573000000000',
  whatsappIsExample: true,
  /**
   * Basado en el slogan del logo; amplía con la bio real cuando la tengas.
   */
  bio: 'La moda también es una forma de adorar. Jeans y mezclilla para mujer. Pedidos por WhatsApp.',
  bioIsExample: false,
  email: 'hola@ejemplo-majojeans.co',
  emailIsExample: true,
  city: 'Colombia',
  currency: 'COP' as const,
  locale: 'es-CO',
  siteUrl: 'https://majojeans.pages.dev',
  announcement:
    'Envíos a todo Colombia · Pedidos por WhatsApp · @majo_jeansoficial',
  shippingNotes:
    'Los tiempos y costos de envío se confirman al cerrar el pedido por WhatsApp.',
  returnsNotes:
    'Política de cambios de ejemplo: 8 días hábiles con prenda sin uso y etiquetas.',
  seo: {
    title: 'Majo Jeans | La moda también es una forma de adorar',
    description:
      'Tienda oficial de Majo Jeans. Jeans, bermudas y chaquetas. Precios en COP. Pedidos por WhatsApp. Instagram @majo_jeansoficial.',
    ogImage: '/images/logo-majo-jeans.png',
  },
  categories: [
    { id: 'jeans', label: 'Jeans', slug: 'jeans' },
    { id: 'bermudas', label: 'Bermudas', slug: 'bermudas' },
    { id: 'chaquetas', label: 'Chaquetas', slug: 'chaquetas' },
    { id: 'novedades', label: 'Novedades', slug: 'novedades' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'] as const,
  /** Paleta tomada del logo oficial: beige cálido + oro */
  paletteNote:
    'Beige crema y oro metálico del logo oficial de Majo Jeans.',
} as const

export type StoreCategoryId = (typeof storeConfig.categories)[number]['id']
export type StoreSize = (typeof storeConfig.sizes)[number]

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${storeConfig.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
