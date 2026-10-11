'use client'

import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'

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
          <p className="text-body mb-8">
            We hit an unexpected error. Try refreshing the page.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
            >
              Try again
              <RefreshCw size={16} className="shrink-0" />
            </button>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-white text-navy h-12 px-7 text-sm font-medium transition-all duration-300 hover:border-brand/20 hover:shadow-lg"
            >
              Go home
              <ArrowLeft size={16} className="shrink-0" />
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
