import Link from 'next/link'
import { STUDIO_NAME, STUDIO_EMAIL } from '@/lib/constants'

const footerLinks = {
  Services: [
    { label: 'Business websites', href: '/services/business-websites' },
    { label: 'Portfolio websites', href: '/services/portfolio-websites' },
    { label: 'Landing pages', href: '/services/landing-pages' },
    { label: 'Booking websites', href: '/services/booking-websites' },
    { label: 'Online stores', href: '/services/online-stores' },
    { label: 'Custom applications', href: '/services/custom-web-applications' },
    { label: 'Website redesigns', href: '/services/website-redesigns' },
  ],
  Studio: [
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Terms and conditions', href: '/terms-and-conditions' },
    { label: 'Cookie policy', href: '/cookie-policy' },
    { label: 'Refund policy', href: '/refund-cancellation-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/" style={{ color: 'white' }}>
              <span className="brand-mark">W</span>
              {STUDIO_NAME}
            </Link>
            <p style={{ marginTop: 16 }}>
              Modern websites and web solutions for South African
              businesses, professionals and growing brands.
            </p>
            <p style={{ marginTop: 16 }}>
              <a href={`mailto:${STUDIO_EMAIL}`} style={{ color: '#2563EB' }}>
                {STUDIO_EMAIL}
              </a>
            </p>
          </div>
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16, color: '#6B7280' }}>
              Navigation
            </p>
            <div className="footer-links">
              {footerLinks.Services.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16, color: '#6B7280' }}>
              Studio & Legal
            </p>
            <div className="footer-links">
              {footerLinks.Studio.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
              {footerLinks.Legal.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/cookie-policy">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
