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
      <body className="bg-cream text-ink min-h-screen flex items-center justify-center p-8">
        <div className="max-w-[500px] text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
            Critical error
          </p>
          <h1 className="font-display text-4xl mb-4">Something broke.</h1>
          <p className="text-muted mb-8">
            We hit an unexpected error. Try refreshing the page.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
            >
              Go home <ArrowLeft size={14} />
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
