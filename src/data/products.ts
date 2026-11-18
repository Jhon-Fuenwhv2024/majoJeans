/**
 * Catálogo de ejemplo — NO son productos reales de Majo Jeans.
 * Edita este archivo para cargar el inventario real (nombres, precios COP,
 * tallas, colores e imágenes en /public/images).
 */

import type { StoreCategoryId, StoreSize } from '../config/store'

export type ProductColor = {
  id: string
  name: string
  hex: string
}

export type Product = {
  id: string
  slug: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  category: StoreCategoryId
  sizes: StoreSize[]
  colors: ProductColor[]
  images: string[]
  featured?: boolean
  isNew?: boolean
  /** Siempre true en este demo: marca el contenido como ficticio */
  isExample: true
}

export const products: Product[] = [
  {
    id: 'ej-001',
    slug: 'jean-skinny-indigo',
    name: 'Jean Skinny Índigo',
    description:
      'Ajuste ceñido que estiliza la silueta. Denim elástico de lavado índigo medio. Ideal para el día a día. (Producto de ejemplo)',
    price: 129900,
    category: 'jeans',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { id: 'indigo', name: 'Índigo', hex: '#2c3e6b' },
      { id: 'negro', name: 'Negro', hex: '#1a1a1a' },
    ],
    images: [
      '/images/product-skinny-indigo.jpg',
      '/images/product-skinny-black.jpg',
    ],
    featured: true,
    isNew: true,
    isExample: true,
  },
  {
    id: 'ej-002',
    slug: 'jean-mom-claro',
    name: 'Jean Mom Claro',
    description:
      'Corte mom de tiro medio y lavado claro. Cómodo, versátil y con caída suave. (Producto de ejemplo)',
    price: 139900,
    compareAtPrice: 159900,
    category: 'jeans',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'claro', name: 'Lavado claro', hex: '#9eb4c8' },
      { id: 'medio', name: 'Lavado medio', hex: '#5a7a9a' },
    ],
    images: ['/images/product-mom-light.jpg', '/images/collection-jeans.jpg'],
    featured: true,
    isExample: true,
  },
  {
    id: 'ej-003',
    slug: 'jean-cargo-denim',
    name: 'Jean Cargo Denim',
    description:
      'Silueta recta con bolsillos cargo. Denim resistente en tono medio. (Producto de ejemplo)',
    price: 149900,
    category: 'jeans',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'medio', name: 'Azul medio', hex: '#4a6d8c' },
      { id: 'verde', name: 'Verde militar', hex: '#4a5c4e' },
    ],
    images: ['/images/product-cargo.jpg', '/images/collection-jeans.jpg'],
    featured: true,
    isNew: true,
    isExample: true,
  },
  {
    id: 'ej-004',
    slug: 'jean-skinny-negro',
    name: 'Jean Skinny Negro',
    description:
      'El básico que no falta. Skinny negro con stretch para máxima comodidad. (Producto de ejemplo)',
    price: 124900,
    category: 'jeans',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ id: 'negro', name: 'Negro', hex: '#1a1a1a' }],
    images: [
      '/images/product-skinny-black.jpg',
      '/images/product-skinny-indigo.jpg',
    ],
    featured: true,
    isExample: true,
  },
  {
    id: 'ej-005',
    slug: 'short-denim-claro',
    name: 'Short Denim Claro',
    description:
      'Short de tiro medio en lavado claro. Perfecto para clima cálido. (Producto de ejemplo)',
    price: 89900,
    category: 'shorts',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'claro', name: 'Lavado claro', hex: '#a8bdd0' },
      { id: 'blanco', name: 'Blanco roto', hex: '#e8e4dc' },
    ],
    images: ['/images/product-shorts.jpg', '/images/collection-jeans.jpg'],
    featured: true,
    isNew: true,
    isExample: true,
  },
  {
    id: 'ej-006',
    slug: 'short-denim-medio',
    name: 'Short Denim Medio',
    description:
      'Short clásico con detalles desgastados suaves. (Producto de ejemplo)',
    price: 84900,
    category: 'shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'medio', name: 'Azul medio', hex: '#5b7c99' }],
    images: ['/images/product-shorts.jpg', '/images/product-mom-light.jpg'],
    isExample: true,
  },
  {
    id: 'ej-007',
    slug: 'chaqueta-denim-clasica',
    name: 'Chaqueta Denim Clásica',
    description:
      'Chaqueta oversized en denim azul. Capas esenciales para cualquier look. (Producto de ejemplo)',
    price: 179900,
    category: 'chaquetas',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'azul', name: 'Azul clásico', hex: '#3d5a80' },
      { id: 'negro', name: 'Negro', hex: '#222' },
    ],
    images: ['/images/product-jacket.jpg', '/images/collection-jeans.jpg'],
    featured: true,
    isExample: true,
  },
  {
    id: 'ej-008',
    slug: 'jean-wide-leg',
    name: 'Jean Wide Leg',
    description:
      'Pierna ancha y tiro alto. Silueta contemporánea con caída fluida. (Producto de ejemplo)',
    price: 154900,
    category: 'jeans',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { id: 'medio', name: 'Azul medio', hex: '#4e6f8f' },
      { id: 'oscuro', name: 'Azul oscuro', hex: '#243447' },
    ],
    images: ['/images/product-cargo.jpg', '/images/product-mom-light.jpg'],
    isNew: true,
    isExample: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductsByCategory(category: StoreCategoryId): Product[] {
  return products.filter((p) => p.category === category)
}

export function getPriceBounds(): { min: number; max: number } {
  const prices = products.map((p) => p.price)
  return { min: Math.min(...prices), max: Math.max(...prices) }
}
