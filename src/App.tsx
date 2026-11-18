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
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tienda" element={<ShopPage />} />
            <Route path="producto/:slug" element={<ProductPage />} />
            <Route path="pedido" element={<CheckoutPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="nosotros" element={<AboutPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="envios" element={<ShippingPage />} />
            <Route path="cambios" element={<ReturnsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
