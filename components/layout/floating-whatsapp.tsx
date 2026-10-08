import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  )
}
