'use client'

import { useState, FormEvent, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { enquiryServiceOptions, referralSourceOptions, FORMSPREE_ENDPOINT } from '@/lib/constants'

function EnquiryFormInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service') || ''
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        router.push('/contact/thank-you')
      } else {
        alert('Something went wrong. Please try again or contact us directly via email.')
        setIsSubmitting(false)
      }
    } catch (error) {
      alert('Something went wrong. Please try again or contact us directly via email.')
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Name
          <input required name="name" placeholder="Your full name" />
        </label>
        <label>
          Phone number
          <input required name="phone" type="tel" placeholder="+27 000 000 0000" />
        </label>
      </div>

      <label>
        Email address
        <input required name="email" type="email" placeholder="you@company.com" />
      </label>

      <div className="form-row">
        <label>
          What do you need?
          <select name="service" defaultValue={preselectedService} required>
            <option value="" disabled>
              Select a service
            </option>
            {enquiryServiceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          How did you learn about us?
          <select name="referral" required>
            <option value="" disabled>
              Select an option
            </option>
            {referralSourceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Tell us a little more
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us about your business, goals, timeline and any specific requirements..."
        />
      </label>

      <label className="checkbox-label">
        <input type="checkbox" required name="consent" />
        <span>
          I agree that WEB-IN may contact me regarding my enquiry. View our{' '}
          <a href="/privacy" target="_blank">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button className="button button-dark" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send message'} <CheckCircle2 />
      </button>
    </form>
  )
}

export function EnquiryForm() {
  return (
    <Suspense fallback={<div className="contact-form" style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>Loading form...</div>}>
      <EnquiryFormInner />
    </Suspense>
  )
}
