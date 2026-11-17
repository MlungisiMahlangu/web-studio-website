'use client'

import { useEffect, useState } from 'react'

interface PromoEnquiry {
  package: string
  price: string
}

export function PromoThankYouNote() {
  const [note, setNote] = useState<PromoEnquiry | null>(null)

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem('webin:promo-enquiry')
      if (!raw) return
      window.sessionStorage.removeItem('webin:promo-enquiry')
      const parsed = JSON.parse(raw) as Partial<PromoEnquiry>
      if (typeof parsed.package === 'string' && typeof parsed.price === 'string') {
        setNote({ package: parsed.package, price: parsed.price })
      }
    } catch {
      // Ignore storage or parse errors.
    }
  }, [])

  if (!note) return null

  return (
    <div className="mx-auto mb-10 max-w-2xl rounded-xl border border-promo-line bg-promo-tint px-5 py-4 text-center text-sm leading-relaxed text-promo-strong">
      <span className="font-semibold">Black Friday request noted:</span> {note.package} at{' '}
      {note.price} once-off. We will confirm your project slot when we reply within 1–2
      business days.
    </div>
  )
}
