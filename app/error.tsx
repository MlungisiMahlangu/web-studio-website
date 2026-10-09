'use client'

import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'
import { Container } from '@/components/ui/container'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="min-h-[80svh] flex items-center bg-cream">
      <Container className="py-32">
        <div className="max-w-[600px]">
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-6">
            Something went wrong
          </p>
          <h1 className="font-display text-display-md leading-tight tracking-tight mb-6">
            An error occurred.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-10">
            We couldn&apos;t load this page. Try refreshing, or head back to the
            homepage.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 text-base font-medium transition-all duration-300 hover:bg-ink-light"
            >
              Try again
              <RefreshCw size={18} />
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 text-ink px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-ink/5"
            >
              Back to home
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
