import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center bg-ink text-cream">
      <Container className="py-32">
        <div className="max-w-[600px]">
          <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
            404 — Page not found
          </p>
          <h1 className="font-display text-display-lg leading-tight tracking-tight mb-6">
            This page doesn&apos;t <em className="text-accent">exist.</em>
          </h1>
          <p className="text-cream/50 text-lg leading-relaxed mb-10">
            The page you are looking for might have been moved, renamed, or
            doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-base font-medium transition-all duration-300 hover:bg-accent-dark"
            >
              Back to home
              <ArrowLeft size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 text-cream/70 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-cream/30 hover:text-cream"
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
