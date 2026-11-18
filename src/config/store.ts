/**
 * Configuración central de la tienda Majo Jeans.
 *
 * Datos marcados como `isExample: true` NO provienen del Instagram público
 * (la bio, WhatsApp y detalles no fueron visibles sin iniciar sesión).
 * Reemplázalos con la información real antes de publicar.
 */

export const storeConfig = {
  brandName: 'Majo Jeans',
  tagline: 'Jeans colombianos con actitud',
  /** Handle público confirmado por el enlace de la marca */
  instagramHandle: 'majo_jeansoficial',
  instagramUrl: 'https://www.instagram.com/majo_jeansoficial',
  /**
   * EJEMPLO — no se pudo leer un WhatsApp público sin login en Instagram.
   * Formato internacional sin + ni espacios (ej. 57XXXXXXXXXX).
   */
  whatsappNumber: '573000000000',
  whatsappIsExample: true,
  /**
   * EJEMPLO — bio inventada para el sitio demo.
   * Sustituye con la bio real de Instagram cuando la tengas.
   */
  bio: 'Jeans y mezclilla para mujer. Hecho en Colombia. Pedidos por WhatsApp.',
  bioIsExample: true,
  email: 'hola@ejemplo-majojeans.co',
  emailIsExample: true,
  /** Sin dirección física real verificada públicamente */
  city: 'Colombia',
  currency: 'COP' as const,
  locale: 'es-CO',
  siteUrl: 'https://majojeans.example',
  announcement:
    'Envíos a todo Colombia · Pedidos por WhatsApp · Catálogo de ejemplo',
  shippingNotes:
    'Los tiempos y costos de envío se confirman al cerrar el pedido por WhatsApp.',
  returnsNotes:
    'Política de cambios de ejemplo: 8 días hábiles con prenda sin uso y etiquetas.',
  seo: {
    title: 'Majo Jeans | Tienda de jeans en Colombia',
    description:
      'Tienda en línea de Majo Jeans. Jeans, bermudas y chaquetas de mezclilla. Precios en COP. Pedidos por WhatsApp.',
    ogImage: '/images/hero-denim.jpg',
  },
  categories: [
    { id: 'jeans', label: 'Jeans', slug: 'jeans' },
    { id: 'bermudas', label: 'Bermudas', slug: 'bermudas' },
    { id: 'chaquetas', label: 'Chaquetas', slug: 'chaquetas' },
    { id: 'novedades', label: 'Novedades', slug: 'novedades' },
  ],
  /** Tallas internacionales usadas en tiendas de Colombia */
  sizes: ['XS', 'S', 'M', 'L', 'XL'] as const,
  /** Paleta de ejemplo inspirada en mezclilla (no tomada del Instagram) */
  paletteNote:
    'Paleta de ejemplo: índigo, arena y marfil. Ajusta en index.css si el IG muestra otros tonos.',
} as const

export type StoreCategoryId = (typeof storeConfig.categories)[number]['id']
export type StoreSize = (typeof storeConfig.sizes)[number]

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${storeConfig.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
