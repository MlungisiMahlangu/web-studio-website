import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center bg-dark-panel text-white">
      <Container className="py-32">
        <div className="max-w-[600px]">
          <p className="text-6xl font-extrabold text-brand mb-4">404</p>
          <p className="text-xs font-semibold uppercase text-white/50 mb-6" style={{ letterSpacing: '0.14em' }}>
            Page not found
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight mb-6">
            This page doesn't <span className="text-brand">exist.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            The page you are looking for might have been moved, renamed, or
            doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-brand text-white h-12 px-7 text-sm font-medium transition-all duration-300 hover:bg-brand-hover"
            >
              Back to home
              <ArrowLeft size={16} className="shrink-0" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 text-white/70 h-12 px-6 text-sm font-medium transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              Get in touch
              <ArrowUpRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
