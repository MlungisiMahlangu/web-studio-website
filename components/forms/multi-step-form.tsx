'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import {
  enquiryServiceOptions,
  enquiryFeatureOptions,
  enquiryBudgetOptions,
  enquiryTimelineOptions,
  enquiryGoalOptions,
  enquiryDesignOptions,
} from '@/lib/constants'

const TOTAL_STEPS = 6

export function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [textFields, setTextFields] = useState({ name: '', email: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  function toggleOption(key: string, value: string) {
    setSelected((prev) => {
      const current = prev[key] || []
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) }
      }
      return { ...prev, [key]: [...current, value] }
    })
  }

  function isSelected(key: string, value: string) {
    return (selected[key] || []).includes(value)
  }

  function next() {
    if (step < TOTAL_STEPS - 1) setStep(step + 1)
  }

  function prev() {
    if (step > 0) setStep(step - 1)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-card" style={{ textAlign: 'center', padding: 60 }}>
        <Check style={{ width: 40, height: 40, color: '#3B82F6' }} />
        <h3 style={{ fontSize: 28 }}>Your project brief is on its way.</h3>
        <p>
          We will review your requirements and get back to you within 1–2 business
          days with a tailored recommendation and quote.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
          <Link className="button button-dark" href="/">
            Back to home <ArrowUpRight />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form className="multi-step-form" onSubmit={handleSubmit}>
      <div className="form-progress">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={`form-progress-step ${i <= step ? 'active' : ''}`}
          />
        ))}
      </div>

      {step === 0 && (
        <div className="form-step">
          <h3>What service do you need?</h3>
          <p>Select one or more options.</p>
          <div className="form-options">
            {enquiryServiceOptions.map((option) => (
              <div
                key={option}
                className={`form-option ${isSelected('service', option) ? 'selected' : ''}`}
                onClick={() => toggleOption('service', option)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleOption('service', option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="form-step">
          <h3>What features do you need?</h3>
          <p>Select all that apply.</p>
          <div className="form-options">
            {enquiryFeatureOptions.map((option) => (
              <div
                key={option}
                className={`form-option ${isSelected('features', option) ? 'selected' : ''}`}
                onClick={() => toggleOption('features', option)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleOption('features', option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h3>What is your budget?</h3>
          <p>This helps us recommend the right service.</p>
          <div className="form-options">
            {enquiryBudgetOptions.map((option) => (
              <div
                key={option}
                className={`form-option ${isSelected('budget', option) ? 'selected' : ''}`}
                onClick={() => setSelected({ ...selected, budget: [option] })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelected({ ...selected, budget: [option] })}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h3>What is your timeline?</h3>
          <p>When do you need your website live?</p>
          <div className="form-options">
            {enquiryTimelineOptions.map((option) => (
              <div
                key={option}
                className={`form-option ${isSelected('timeline', option) ? 'selected' : ''}`}
                onClick={() => setSelected({ ...selected, timeline: [option] })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelected({ ...selected, timeline: [option] })}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="form-step">
          <h3>What are your goals?</h3>
          <p>What should your website achieve?</p>
          <div className="form-options">
            {enquiryGoalOptions.map((option) => (
              <div
                key={option}
                className={`form-option ${isSelected('goals', option) ? 'selected' : ''}`}
                onClick={() => toggleOption('goals', option)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleOption('goals', option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12 }}>Preferred design direction (optional)</p>
            <div className="form-options">
              {enquiryDesignOptions.map((option) => (
                <div
                  key={option}
                  className={`form-option ${isSelected('design', option) ? 'selected' : ''}`}
                  onClick={() => toggleOption('design', option)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleOption('design', option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="form-step">
          <h3>Your details</h3>
          <p>Tell us who you are and a bit about your project.</p>
          <label style={{ fontSize: 11, color: '#6B7280', display: 'grid', gap: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>
            Name
            <input
              required
              value={textFields.name}
              onChange={(e) => setTextFields({ ...textFields, name: e.target.value })}
              placeholder="Your name"
              style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '9px 0', outline: 'none', fontSize: 15 }}
            />
          </label>
          <label style={{ fontSize: 11, color: '#6B7280', display: 'grid', gap: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>
            Email
            <input
              required
              type="email"
              value={textFields.email}
              onChange={(e) => setTextFields({ ...textFields, email: e.target.value })}
              placeholder="you@company.com"
              style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '9px 0', outline: 'none', fontSize: 15 }}
            />
          </label>
          <label style={{ fontSize: 11, color: '#6B7280', display: 'grid', gap: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>
            Project details (optional)
            <textarea
              rows={4}
              value={textFields.details}
              onChange={(e) => setTextFields({ ...textFields, details: e.target.value })}
              placeholder="Tell us about your business, goals and any specific requirements..."
              style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '9px 0', outline: 'none', fontSize: 15, resize: 'vertical' }}
            />
          </label>
        </div>
      )}

      <div className="form-nav">
        {step > 0 ? (
          <button type="button" className="button button-outline button-small" onClick={prev}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < TOTAL_STEPS - 1 ? (
          <button type="button" className="button button-dark button-small" onClick={next}>
            Continue <ArrowUpRight />
          </button>
        ) : (
          <button type="submit" className="button button-dark">
            Submit enquiry <ArrowUpRight />
          </button>
        )}
      </div>
    </form>
  )
}
