import { Seo } from '../components/Seo'
import { storeConfig } from '../config/store'

export function ReturnsPage() {
  return (
    <>
      <Seo
        title="Cambios y devoluciones"
        description="Política de cambios de Majo Jeans."
        path="/cambios"
      />
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          Políticas
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          Cambios y devoluciones
        </h1>
        <div className="mt-8 space-y-4 text-[var(--muted)]">
          <p>{storeConfig.returnsNotes}</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La prenda debe estar sin uso, sin olores y con etiquetas.</li>
            <li>
              Los cambios de talla están sujetos a disponibilidad del inventario.
            </li>
            <li>
              Escribe por WhatsApp con el número de pedido para iniciar el
              proceso.
            </li>
          </ul>
          <p className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Texto de ejemplo — reemplázalo con la política real de la marca.
          </p>
        </div>
      </div>
    </>
  )
}
