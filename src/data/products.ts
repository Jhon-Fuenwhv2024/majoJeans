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
    slug: 'jean-ajustado-indigo',
    name: 'Jean ajustado índigo',
    description:
      'Corte ceñido que estiliza la silueta. Mezclilla elástica de lavado índigo medio. Ideal para el día a día. (Producto de ejemplo)',
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
    slug: 'jean-tiro-alto-claro',
    name: 'Jean tiro alto claro',
    description:
      'Corte de tiro alto y lavado claro. Cómodo, versátil y con caída suave. (Producto de ejemplo)',
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
    slug: 'jean-cargo-mezclilla',
    name: 'Jean cargo de mezclilla',
    description:
      'Silueta recta con bolsillos laterales. Mezclilla resistente en tono medio. (Producto de ejemplo)',
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
    slug: 'jean-ajustado-negro',
    name: 'Jean ajustado negro',
    description:
      'El básico que no falta. Jean negro ceñido con tela elástica para máxima comodidad. (Producto de ejemplo)',
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
    slug: 'bermuda-mezclilla-clara',
    name: 'Bermuda de mezclilla clara',
    description:
      'Bermuda de tiro medio en lavado claro. Perfecta para clima cálido. (Producto de ejemplo)',
    price: 89900,
    category: 'bermudas',
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
    slug: 'bermuda-mezclilla-media',
    name: 'Bermuda de mezclilla media',
    description:
      'Bermuda clásica con detalles desgastados suaves. (Producto de ejemplo)',
    price: 84900,
    category: 'bermudas',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'medio', name: 'Azul medio', hex: '#5b7c99' }],
    images: ['/images/product-shorts.jpg', '/images/product-mom-light.jpg'],
    isExample: true,
  },
  {
    id: 'ej-007',
    slug: 'chaqueta-mezclilla-clasica',
    name: 'Chaqueta clásica de mezclilla',
    description:
      'Chaqueta holgada en mezclilla azul. Ideal para combinar en capas. (Producto de ejemplo)',
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
    slug: 'jean-pierna-ancha',
    name: 'Jean de pierna ancha',
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
