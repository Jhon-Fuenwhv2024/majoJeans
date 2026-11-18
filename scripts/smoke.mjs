import { chromium, devices } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE = process.env.BASE_URL || 'http://127.0.0.1:43127'
const OUT = '/opt/cursor/artifacts'

await mkdir(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})

async function shot(page, name) {
  const path = `${OUT}/${name}`
  await page.screenshot({ path, fullPage: false })
  console.log('saved', path)
}

// Desktop flow
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await shot(page, 'desktop_home.png')

  await page.getByRole('link', { name: 'Ver tienda' }).first().click()
  await page.waitForURL('**/tienda**')
  await page.waitForTimeout(500)
  await shot(page, 'desktop_shop.png')

  await page.locator('article a').first().click()
  await page.waitForURL('**/producto/**')
  await page.waitForTimeout(400)
  await page.getByRole('button', { name: 'M', exact: true }).click()
  await page.getByRole('button', { name: 'Agregar al carrito' }).click()
  await page.waitForTimeout(400)
  await shot(page, 'desktop_cart.png')

  await page.getByRole('link', { name: 'Ir al checkout' }).click()
  await page.waitForURL('**/checkout**')
  await page.getByLabel('Nombre').fill('Cliente Demo')
  await page.getByLabel('Ciudad').fill('Bogotá')
  await page.waitForTimeout(300)
  await shot(page, 'desktop_checkout.png')

  await page.evaluate(() => {
    window.__opened = []
    window.open = (url) => {
      window.__opened.push(String(url))
      return null
    }
  })
  await page.getByRole('button', { name: 'Enviar pedido por WhatsApp' }).click()
  const opened = await page.evaluate(() => window.__opened)
  console.log('whatsapp_urls', opened)
  if (!opened.some((u) => u.includes('wa.me/') && u.includes('text='))) {
    throw new Error('Checkout no generó enlace wa.me')
  }
  await page.close()
}

// Mobile viewport
{
  const iPhone = devices['iPhone 13']
  const context = await browser.newContext({
    ...iPhone,
    viewport: { width: 390, height: 844 },
  })
  const page = await context.newPage()
  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  await shot(page, 'mobile_home.png')

  await page.getByRole('button', { name: /Abrir menú|Menú/i }).click()
  await page.waitForTimeout(300)
  await page.getByRole('link', { name: 'Tienda' }).first().click()
  await page.waitForTimeout(500)
  await shot(page, 'mobile_shop.png')

  await page.locator('article a').first().click()
  await page.waitForTimeout(400)
  await page.getByRole('button', { name: 'S', exact: true }).click()
  await page.getByRole('button', { name: 'Agregar al carrito' }).click()
  await page.waitForTimeout(400)
  await shot(page, 'mobile_cart.png')
  await context.close()
}

await browser.close()
console.log('smoke_ok')
