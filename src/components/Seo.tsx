import { useEffect } from 'react'
import { storeConfig } from '../config/store'

type SeoProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'product'
}

function upsertMeta(
  attr: 'name' | 'property',
  key: string,
  content: string,
) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${storeConfig.brandName}`
      : storeConfig.seo.title
    const desc = description ?? storeConfig.seo.description
    const url = `${storeConfig.siteUrl}${path}`
    const img = `${storeConfig.siteUrl}${image ?? storeConfig.seo.ogImage}`

    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', img)
    upsertMeta('property', 'og:locale', 'es_CO')
    upsertMeta('property', 'og:site_name', storeConfig.brandName)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', img)

    let canonical = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path, image, type])

  return null
}
