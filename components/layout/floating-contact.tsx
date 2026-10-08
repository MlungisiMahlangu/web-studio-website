import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function FloatingContact() {
  return (
    <Link
      className="floating-contact"
      href="/contact"
      aria-label="Contact us"
    >
      <ArrowUpRight aria-hidden="true" />
    </Link>
  )
}
