import Link from 'next/link'
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { STUDIO_WHATSAPP } from '@/lib/constants'

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-ink/95 backdrop-blur-xl border-t border-line-dark">
      <div className="flex items-center gap-2 p-3">
        <a
          href={`tel:+27649531145`}
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-ink-light text-cream py-3 text-sm font-medium"
        >
          <Phone size={15} />
          Call
        </a>
        <a
          href={`https://wa.me/${STUDIO_WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-ink-light text-cream py-3 text-sm font-medium"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-accent text-white py-3 text-sm font-medium"
        >
          Get a quote
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  )
}
