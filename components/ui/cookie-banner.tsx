'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function choose(choice: 'accepted' | 'declined') {
    localStorage.setItem('cookie-consent', choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-auto z-50 max-w-[420px] animate-fade-up">
      <div className="rounded-2xl bg-white text-body p-5 shadow-xl border border-line">
        <p className="text-sm text-body leading-relaxed mb-4">
          We use cookies to improve your experience. By continuing, you agree to our{' '}
          <a
            href="https://www.web-in.co.za/cookie-policy"
            className="text-brand underline underline-offset-2"
          >
            cookie policy
          </a>
          .
        </p>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => choose('accepted')}
            className="rounded-full bg-brand text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-hover"
          >
            Accept
          </button>
          <button
            onClick={() => choose('declined')}
            className="rounded-full border border-line text-navy px-4 py-2 text-sm font-medium transition-colors hover:border-brand"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
