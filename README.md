# Majo Jeans — tienda web

Tienda de demostración en español (Colombia, precios en COP) para la marca **Majo Jeans** (`@majo_jeansoficial`). Catálogo con filtros, ficha de producto, carrito en `localStorage` y cierre de pedido por WhatsApp. Lista para desplegar en **Cloudflare Pages**.

> Los productos, precios, WhatsApp y correo son **de ejemplo** (Instagram no expuso bio ni contacto sin iniciar sesión). Edítalos en los archivos de datos antes de publicar.

## Requisitos

- Node.js 20+
- npm 10+

## Cómo correr en local

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://127.0.0.1:43127`).

Otros comandos:

```bash
npm run build    # genera la carpeta dist/
npm run preview  # sirve dist/ en el puerto 43127
npm run lint     # oxlint
```

## Editar productos

Archivo: [`src/data/products.ts`](src/data/products.ts)

- Agrega o modifica objetos en el arreglo `products`.
- Campos clave: `name`, `price` (COP, sin decimales), `category`, `sizes`, `colors`, `images`.
- Coloca las fotos en `public/images/` y úsalas como `/images/mi-foto.jpg`.
- Deja `isExample: true` solo mientras el contenido sea ficticio.

## Editar configuración de la tienda

Archivo: [`src/config/store.ts`](src/config/store.ts)

- `brandName`, `instagramHandle`, `instagramUrl`
- `whatsappNumber` — formato internacional sin `+` (ej. `573001112233`)
- `bio`, `email`, textos de envíos/cambios y SEO
- Categorías y tallas globales

El botón flotante y el pedido usan `https://wa.me/{whatsappNumber}`.

## Desplegar en Cloudflare Pages

1. `npm run build` → carpeta `dist/`
2. En Cloudflare Pages: plantilla **Vite**, comando de compilación `npm run build`, directorio de salida `dist`
3. El archivo `public/_redirects` (`/* /index.html 200`) se copia a `dist` para el respaldo SPA
4. Verifica que ningún archivo supere 25 MiB

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
  pages/               # inicio, tienda, producto, pedido, etc.
public/
  _redirects           # SPA en Cloudflare Pages
  images/              # fotos del catálogo
```

## Datos del Instagram frente a ejemplo

| Dato | Origen |
|------|--------|
| Nombre de marca Majo Jeans | Solicitado + handle `@majo_jeansoficial` |
| URL de Instagram | Pública |
| Bio, WhatsApp, correo, dirección, productos, precios | **Ejemplo** (IG no legible sin inicio de sesión) |
| Paleta visual | **Ejemplo** inspirada en mezclilla (índigo / arena / marfil) |
| Estructura de tienda | Inspirada en Shop Martina (sin copiar textos, logos ni imágenes) |

## Licencia

Proyecto de demostración para la marca. Sustituye el contenido de ejemplo antes de usarlo en producción.
