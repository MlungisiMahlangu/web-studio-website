'use client'

import { useState, FormEvent, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { enquiryServiceOptions, referralSourceOptions, FORMSPREE_ENDPOINT } from '@/lib/constants'

function EnquiryFormInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service') || ''
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validateForm(formData: FormData): boolean {
    const newErrors: Record<string, string> = {}

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const consent = formData.get('consent')

    if (!name || name.trim().length < 2) {
      newErrors.name = 'Please enter your full name'
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/
    const phoneCleaned = phone.replace(/\s/g, '')
    const phoneDigits = phoneCleaned.replace(/[\+\-\(\)\.]/g, '')
    if (!phone || phoneDigits.length < 10 || phoneDigits.length > 12 || !phoneRegex.test(phoneCleaned)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!consent) {
      newErrors.consent = 'You must agree to be contacted'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrors({})

    const formData = new FormData(event.currentTarget)

    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)

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
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>
          Name
          <input required name="name" placeholder="Your full name" />
          {errors.name && <span className="field-error"><AlertCircle size={12} /> {errors.name}</span>}
        </label>
        <label>
          Phone number
          <input required name="phone" type="tel" placeholder="+27 00 000 0000" />
          {errors.phone && <span className="field-error"><AlertCircle size={12} /> {errors.phone}</span>}
        </label>
      </div>

      <label>
        Email address
        <input required name="email" type="email" placeholder="you@company.com" />
        {errors.email && <span className="field-error"><AlertCircle size={12} /> {errors.email}</span>}
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
          <a href="/pricing" className="field-helper-link" target="_blank" rel="noopener noreferrer">
            View our services
          </a>
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
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.consent && <span className="field-error checkbox-error"><AlertCircle size={12} /> {errors.consent}</span>}

      <button className="button button-light" type="submit" disabled={isSubmitting}>
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
