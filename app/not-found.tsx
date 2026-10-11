import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center bg-dark-panel text-white">
      <Container className="py-32">
        <div className="max-w-[600px]">
          <p className="text-xs font-semibold uppercase text-brand mb-6" style={{ letterSpacing: '0.14em' }}>
            404 — Page not found
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight mb-6">
            This page doesn&apos;t <span className="text-brand">exist.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            The page you are looking for might have been moved, renamed, or
            doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 text-base font-semibold transition-all duration-300 hover:bg-brand-hover"
            >
              Back to home
              <ArrowLeft size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white/70 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
