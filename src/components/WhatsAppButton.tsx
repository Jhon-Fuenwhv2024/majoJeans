import { storeConfig, whatsappUrl } from '../config/store'
import { useCart } from '../context/CartContext'

export function WhatsAppButton() {
  const { isOpen } = useCart()
  const message = `Hola ${storeConfig.brandName}, quiero información sobre sus productos.`

  if (isOpen) return null

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
      aria-label="Escribir por WhatsApp"
      title={
        storeConfig.whatsappIsExample
          ? 'WhatsApp de ejemplo — configura el número real'
          : 'WhatsApp'
      }
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9C21.95 6.43 17.5 2 12.04 2zm5.79 14.22c-.24.68-1.4 1.25-1.93 1.33-.5.08-1.13.11-1.82-.11-.42-.14-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.39-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.59-.36.79-.36h.57c.18 0 .43-.07.67.51.24.6.82 2.07.89 2.22.07.15.12.32.02.52-.1.19-.15.32-.29.49-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.7-.82.89-1.1.19-.28.38-.23.64-.14.26.1 1.66.78 1.94.93.28.14.47.22.54.34.07.12.07.7-.17 1.38z" />
      </svg>
    </a>
  )
}
