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
    <section className="min-h-[80svh] flex items-center bg-surface" style={{ paddingTop: 'var(--header-h)' }}>
      <Container className="py-32">
        <div className="max-w-[600px]">
          <p className="text-xs font-semibold uppercase text-muted mb-6" style={{ letterSpacing: '0.14em' }}>
            Something went wrong
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-navy mb-6">
            An error occurred.
          </h1>
          <p className="text-body text-lg leading-relaxed mb-10">
            We couldn't load this page. Try refreshing, or head back to the
            homepage.
          </p>
          <div className="flex flex-wrap items-center gap-4">
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
              Back to home
              <ArrowLeft size={16} className="shrink-0" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
