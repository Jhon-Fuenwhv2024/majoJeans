import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { CategoryStrip } from './CategoryStrip'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { WhatsAppButton } from './WhatsAppButton'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-[var(--bg)] text-[var(--ink)]">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Header />
      <CategoryStrip />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  )
}
