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

async function assertNoEnglishUi(page, label) {
  const text = await page.locator('body').innerText()
  const banned = [
    /\bCheckout\b/,
    /\bAdd to cart\b/i,
    /\bShopping cart\b/i,
    /\bHome\b/,
    /\bShop now\b/i,
    /\bOut of stock\b/i,
    /\bWide Leg\b/,
    /\bSkinny\b/,
    /\bShorts\b/,
  ]
  for (const re of banned) {
    if (re.test(text)) {
      throw new Error(`[${label}] texto en inglés detectado: ${re}`)
    }
  }
}

// Escritorio: recorrido de páginas + pedido WhatsApp
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  await assertNoEnglishUi(page, 'inicio')
  await shot(page, 'es_desktop_inicio.png')

  for (const path of [
    '/tienda',
    '/nosotros',
    '/contacto',
    '/envios',
    '/cambios',
    '/ruta-inexistente',
  ]) {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(350)
    await assertNoEnglishUi(page, path)
  }
  await shot(page, 'es_desktop_404.png')

  await page.goto(`${BASE}/tienda`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(400)
  await shot(page, 'es_desktop_tienda.png')

  await page.locator('article a').first().click()
  await page.waitForURL('**/producto/**')
  await page.waitForTimeout(400)
  await assertNoEnglishUi(page, 'producto')
  await page.getByRole('button', { name: 'M', exact: true }).click()
  await page.getByRole('button', { name: 'Agregar al carrito' }).click()
  await page.waitForTimeout(400)
  await shot(page, 'es_desktop_carrito.png')

  await page.getByRole('link', { name: 'Finalizar pedido' }).click()
  await page.waitForURL('**/pedido**')
  await page.getByLabel('Nombre').fill('Cliente de prueba')
  await page.getByLabel('Ciudad').fill('Bogotá')
  await page.waitForTimeout(300)
  await assertNoEnglishUi(page, 'pedido')
  await shot(page, 'es_desktop_pedido.png')

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
  if (!opened.some((u) => u.includes('wa.me/') && decodeURIComponent(u).includes('Quiero hacer este pedido'))) {
    throw new Error('El pedido no generó el mensaje de WhatsApp en español')
  }
  await page.close()
}

// Móvil
{
  const iPhone = devices['iPhone 13']
  const context = await browser.newContext({
    ...iPhone,
    viewport: { width: 390, height: 844 },
  })
  const page = await context.newPage()
  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.waitForTimeout(600)
  await assertNoEnglishUi(page, 'movil-inicio')
  await shot(page, 'es_mobile_inicio.png')

  await page.getByRole('button', { name: /Abrir menú|Menú/i }).click()
  await page.waitForTimeout(250)
  await page.getByRole('link', { name: 'Tienda' }).first().click()
  await page.waitForTimeout(450)
  await assertNoEnglishUi(page, 'movil-tienda')
  await shot(page, 'es_mobile_tienda.png')

  await page.locator('article a').first().click()
  await page.waitForTimeout(400)
  await page.getByRole('button', { name: 'S', exact: true }).click()
  await page.getByRole('button', { name: 'Agregar al carrito' }).click()
  await page.waitForTimeout(400)
  await shot(page, 'es_mobile_carrito.png')
  await context.close()
}

await browser.close()
console.log('smoke_ok')
