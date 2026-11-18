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

Abre la URL que muestra Vite (por defecto `http://127.0.0.1:43127` en desarrollo).

Otros comandos:

```bash
npm run build    # genera la carpeta dist/
npm run preview  # sirve dist/ en el puerto 43128
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

## Desplegar en Cloudflare Pages (permanente)

Listo para Pages: build `npm run build`, salida `dist/`, fallback SPA en `public/_redirects`.

### Opción A — Wrangler (recomendado)

```bash
npm run build
npx wrangler pages deploy dist --project-name majo-jeans
```

La primera vez Wrangler pedirá iniciar sesión en Cloudflare y creará el proyecto `majo-jeans` si no existe.

### Opción B — Dashboard de Cloudflare Pages

1. `npm run build` → carpeta `dist/`
2. Conecta el repo o sube `dist/`
3. Plantilla **Vite**, comando de compilación `npm run build`, directorio de salida `dist`
4. Confirma que `dist/_redirects` tiene `/* /index.html 200`
5. Ningún archivo debe superar 25 MiB

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
