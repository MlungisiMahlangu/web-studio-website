'use client'

import { useEffect } from 'react'
import { BLACK_FRIDAY_END_MS } from '@/lib/promo-config'

// ISR re-renders the promo within 15 minutes of expiry. This covers a stale
// cached page that is opened after the end time.
export function PromoExpiryGuard() {
  useEffect(() => {
    const check = () => {
      if (Date.now() <= BLACK_FRIDAY_END_MS) return
      const root = document.documentElement
      root.classList.remove('promo-active')
      root.classList.add('promo-expired')
    }
    check()
    const interval = window.setInterval(check, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return null
}
