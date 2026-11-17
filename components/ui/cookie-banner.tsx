'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function dismiss() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-auto z-50 max-w-[420px] animate-fade-up">
      <div className="rounded-2xl bg-white text-body p-5 shadow-xl border border-line">
        <p className="text-sm text-body leading-relaxed mb-4">
          No tracking cookies here. We use cookie-free analytics and store one small
          preference in your browser. See our{' '}
          <Link href="/cookie-policy" className="text-brand underline underline-offset-2">
            cookie policy
          </Link>.
        </p>
        <button
          onClick={dismiss}
          className="rounded-full bg-brand text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-hover"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
