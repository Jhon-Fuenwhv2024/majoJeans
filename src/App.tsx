import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductPage } from './pages/ProductPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ShippingPage } from './pages/ShippingPage'
import { ReturnsPage } from './pages/ReturnsPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tienda" element={<ShopPage />} />
            <Route path="producto/:slug" element={<ProductPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="nosotros" element={<AboutPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="envios" element={<ShippingPage />} />
            <Route path="cambios" element={<ReturnsPage />} />
            <Route
              path="*"
              element={
                <div className="mx-auto max-w-6xl px-4 py-20 text-center">
                  <h1 className="font-display text-3xl">Página no encontrada</h1>
                  <a href="/" className="btn-primary mt-6 inline-flex">
                    Volver al inicio
                  </a>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
