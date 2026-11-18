import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center">
      <Seo
        title="Página no encontrada"
        description="La página que buscas no existe en Majo Jeans."
        path="/404"
      />
      <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
        Error 404
      </p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">
        Página no encontrada
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
        Es posible que el enlace esté roto o que la página se haya movido.
      </p>
      <Link to="/" className="btn-primary mt-8 inline-flex">
        Volver al inicio
      </Link>
    </div>
  )
}
