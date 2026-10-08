'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { enquiryServiceOptions } from '@/lib/constants'

export function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-card" role="status">
        <strong>Thanks — your enquiry is on its way.</strong>
        <p>We&apos;ll review the details and get back to you with a thoughtful next step.</p>
        <button className="text-link" type="button" onClick={() => setSubmitted(false)}>
          Send another enquiry <ArrowUpRight aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input required placeholder="Your name" />
      </label>
      <label>
        Email
        <input required type="email" placeholder="you@company.com" />
      </label>
      <label>
        What do you need?
        <select defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          {enquiryServiceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Tell us a little more
        <textarea rows={3} placeholder="A short description of your project..." />
      </label>
      <button className="button button-light" type="submit">
        Send enquiry <ArrowUpRight aria-hidden="true" />
      </button>
      <small>
        Prefer WhatsApp?{' '}
        <Link href="/contact">Start a chat instead →</Link>
      </small>
    </form>
  )
}
