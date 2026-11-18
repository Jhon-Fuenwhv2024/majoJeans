import { Seo } from '../components/Seo'
import { storeConfig } from '../config/store'

export function ShippingPage() {
  return (
    <>
      <Seo
        title="Envíos"
        description="Información de envíos Majo Jeans en Colombia."
        path="/envios"
      />
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <p className="text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          Políticas
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Envíos</h1>
        <div className="prose-store mt-8 space-y-4 text-[var(--muted)]">
          <p>{storeConfig.shippingNotes}</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Cobertura de ejemplo: ciudades principales de Colombia.</li>
            <li>
              El costo se calcula según ciudad y peso al confirmar por WhatsApp.
            </li>
            <li>
              Tiempo estimado de ejemplo: 2 a 5 días hábiles tras confirmar el
              pago.
            </li>
          </ul>
          <p className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Política de ejemplo — ajústala a la operación real de la marca.
          </p>
        </div>
      </div>
    </>
  )
}
