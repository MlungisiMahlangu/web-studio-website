'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="bg-surface text-navy min-h-screen flex items-center justify-center p-8">
        <div className="max-w-[500px] text-center">
          <p className="text-xs font-semibold uppercase text-muted mb-4" style={{ letterSpacing: '0.14em' }}>
            Critical error
          </p>
          <h1 className="text-4xl font-extrabold mb-4">Something broke.</h1>
          <p className="text-muted mb-8">
            We hit an unexpected error. Try refreshing the page.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm font-semibold"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-navy"
            >
              Go home <ArrowLeft size={14} />
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
