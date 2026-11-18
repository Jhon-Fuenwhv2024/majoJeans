# Majo Jeans — tienda web

Tienda demo en español (Colombia, precios en COP) para la marca **Majo Jeans** (`@majo_jeansoficial`). Catálogo con filtros, ficha de producto, carrito en `localStorage` y checkout por WhatsApp. Pensada para desplegar en **Cloudflare Pages**.

> Los productos, precios, WhatsApp y correo son **de ejemplo** (el Instagram no expuso bio/contacto sin iniciar sesión). Edítalos en los archivos de datos antes de publicar.

## Requisitos

- Node.js 20+
- npm 10+

## Cómo correr en local

```bash
npm install
npm run dev
```

Abre la URL que imprime Vite (por defecto `http://127.0.0.1:43127`).

Otros scripts:

```bash
npm run build    # salida en dist/
npm run preview  # sirve dist/ en el puerto 43127
npm run lint     # oxlint
```

## Editar productos

Archivo: [`src/data/products.ts`](src/data/products.ts)

- Agrega o modifica objetos en el array `products`.
- Campos clave: `name`, `price` (COP, sin decimales), `category`, `sizes`, `colors`, `images`.
- Coloca las fotos en `public/images/` y referencia rutas como `/images/mi-foto.jpg`.
- Marca `isExample: true` solo mientras sea contenido ficticio.

## Editar configuración de la tienda

Archivo: [`src/config/store.ts`](src/config/store.ts)

- `brandName`, `instagramHandle`, `instagramUrl`
- `whatsappNumber` — formato internacional sin `+` (ej. `573001112233`)
- `bio`, `email`, textos de envíos/cambios, SEO
- Categorías y tallas globales

El botón flotante y el checkout usan `https://wa.me/{whatsappNumber}`.

## Desplegar en Cloudflare Pages

1. `npm run build` → carpeta `dist/`
2. En Cloudflare Pages: framework preset **Vite**, build command `npm run build`, output directory `dist`
3. El archivo `public/_redirects` (`/* /index.html 200`) se copia a `dist` para el fallback SPA
4. Verifica que ningún asset supere 25 MiB (las imágenes de demo están por debajo)

Publicación directa con Wrangler (opcional):

```bash
npm run build
npx wrangler pages deploy dist --project-name majo-jeans
```

## Estructura útil

```
src/
  config/store.ts      # marca, WhatsApp, SEO
  data/products.ts     # catálogo
  context/CartContext.tsx
  pages/               # inicio, tienda, producto, checkout, etc.
public/
  _redirects           # SPA en Cloudflare Pages
  images/              # fotos del catálogo
```

## Datos del Instagram vs ejemplo

| Dato | Origen |
|------|--------|
| Nombre de marca Majo Jeans | Solicitado + handle `@majo_jeansoficial` |
| URL de Instagram | Pública |
| Bio, WhatsApp, correo, dirección, productos, precios | **Ejemplo** (IG no legible sin login) |
| Paleta visual | **Ejemplo** inspirada en denim (índigo / arena / marfil) |
| Estructura de tienda | Inspirada en Shop Martina (sin copiar textos, logos ni imágenes) |

## Licencia

Proyecto demo para la marca. Sustituye el contenido de ejemplo antes de usarlo en producción.
