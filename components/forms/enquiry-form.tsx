'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { enquiryServiceOptions } from '@/lib/constants'

export function EnquiryForm() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="success-card">
        <Sparkles aria-hidden="true" />
        <h3>Brief received.</h3>
        <p>
          Thanks for reaching out. We will review the details and come back with a
          thoughtful next step.
        </p>
        <Link className="button button-dark" href="/">
          Back to home <ArrowUpRight />
        </Link>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Name
        <input required name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input required name="email" type="email" placeholder="you@company.com" />
      </label>
      <label>
        What do you need?
        <select name="service" defaultValue="" required>
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
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your business, goals and ideal launch..."
        />
      </label>
      <button className="button button-dark" type="submit">
        Send enquiry <ArrowUpRight />
      </button>
    </form>
  )
}
