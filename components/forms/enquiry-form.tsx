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

    // Honeypot check - if filled, it's a bot
    const honeypot = formData.get('website') as string
    if (honeypot) {
      return false
    }

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const service = formData.get('service') as string
    const referral = formData.get('referral') as string
    const message = formData.get('message') as string
    const consent = formData.get('consent')

    // Name: required, at least 2 characters, letters only
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Please enter your full name'
    } else if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      newErrors.name = 'Name should only contain letters'
    }

    // Phone: numbers only, exactly 10 digits (allow + prefix for country code)
    const phoneDigits = phone.replace(/[^0-9]/g, '')
    if (!phone || phoneDigits.length === 0) {
      newErrors.phone = 'Please enter your phone number'
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits'
    } else if (phoneDigits.length > 12) {
      newErrors.phone = 'Phone number is too long'
    } else if (!/^[0-9+\s\-\(\)]+$/.test(phone)) {
      newErrors.phone = 'Phone number should only contain numbers'
    }

    // Email: must be a valid format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!email || email.trim().length === 0) {
      newErrors.email = 'Please enter your email address'
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email (e.g. name@example.com)'
    }

    // Service: must select an option
    if (!service || service.trim().length === 0) {
      newErrors.service = 'Please select what you need'
    }

    // Referral: must select an option
    if (!referral || referral.trim().length === 0) {
      newErrors.referral = 'Please tell us how you found us'
    }

    // Message: required
    if (!message || message.trim().length < 10) {
      newErrors.message = 'Please tell us a bit more (at least 10 characters)'
    }

    // Consent: must agree
    if (!consent) {
      newErrors.consent = 'You must agree before submitting'
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
      {/* Honeypot field for spam protection */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
        <label>
          Website (leave blank)
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-row">
        <label>
          Name
          <input required name="name" placeholder="Your full name" autoComplete="name" />
          {errors.name && <span className="field-error"><AlertCircle size={12} /> {errors.name}</span>}
        </label>
        <label>
          Phone number
          <input
            required
            name="phone"
            type="tel"
            placeholder="071 234 5678"
            inputMode="numeric"
            pattern="[0-9+\s\-\(\)]*"
            autoComplete="tel"
            onInput={(e) => {
              const input = e.currentTarget
              input.value = input.value.replace(/[^0-9+\s\-\(\)]/g, '')
            }}
          />
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
          {errors.service && <span className="field-error"><AlertCircle size={12} /> {errors.service}</span>}
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
          {errors.referral && <span className="field-error"><AlertCircle size={12} /> {errors.referral}</span>}
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
        {errors.message && <span className="field-error"><AlertCircle size={12} /> {errors.message}</span>}
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

      <button className="button button-primary" type="submit" disabled={isSubmitting}>
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
