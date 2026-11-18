import { storeConfig } from '../config/store'

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat(storeConfig.locale, {
    style: 'currency',
    currency: storeConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
