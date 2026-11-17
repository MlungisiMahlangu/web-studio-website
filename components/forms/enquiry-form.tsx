'use client'

import { useState, useEffect, useRef, type FormEvent, type ReactNode, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageCircle, Phone } from 'lucide-react'
import {
  buildServiceOptions,
  careServiceOptions,
  contactMethodOptions,
  domainStatusOptions,
  emailCountOptions,
  enquiryBudgetOptions,
  enquiryTimelineOptions,
  FORMSPREE_ENDPOINT,
  hasWebsiteOptions,
  referralSourceOptions,
  STUDIO_EMAIL,
  STUDIO_WHATSAPP,
} from '@/lib/constants'
import { carePlans, emailShort } from '@/lib/care-plans'
import { BLACK_FRIDAY, isBlackFridayActive, promoDealForBuild } from '@/lib/promo'

const DRAFT_KEY = 'webin:enquiry-draft'

interface Values {
  name: string
  business: string
  email: string
  phone: string
  city: string
  contactMethod: string
  buildService: string
  careService: string
  hasWebsite: string
  currentWebsite: string
  businessDescription: string
  message: string
  inspiration: string
  domainStatus: string
  domainName: string
  emailCount: string
  budget: string
  timeline: string
  referral: string
  referralOther: string
  consent: boolean
}

const EMPTY_VALUES: Values = {
  name: '',
  business: '',
  email: '',
  phone: '',
  city: '',
  contactMethod: '',
  buildService: '',
  careService: '',
  hasWebsite: '',
  currentWebsite: '',
  businessDescription: '',
  message: '',
  inspiration: '',
  domainStatus: '',
  domainName: '',
  emailCount: '',
  budget: '',
  timeline: '',
  referral: '',
  referralOther: '',
  consent: false,
}

const MAX_LENGTHS: Partial<Record<keyof Values, number>> = {
  name: 100,
  business: 120,
  email: 254,
  phone: 40,
  city: 80,
  currentWebsite: 200,
  businessDescription: 600,
  message: 3000,
  inspiration: 500,
  domainName: 120,
  referralOther: 120,
}

// Plain-text copy only: reject markup and script URLs outright.
const MALICIOUS_INPUT =
  /<\s*(script|iframe|object|embed)\b|javascript\s*:|on(?:error|load|click|mouseover)\s*=/i

const FIELD_ORDER: (keyof Values)[] = [
  'name',
  'email',
  'phone',
  'contactMethod',
  'buildService',
  'careService',
  'hasWebsite',
  'currentWebsite',
  'businessDescription',
  'message',
  'domainStatus',
  'domainName',
  'emailCount',
  'budget',
  'timeline',
  'referral',
  'referralOther',
  'consent',
]

const FIELD_LABELS: Partial<Record<keyof Values, string>> = {
  name: 'Your name',
  email: 'Email',
  phone: 'Phone',
  contactMethod: 'Preferred contact method',
  buildService: 'Website or application',
  careService: 'Monthly care & management',
  hasWebsite: 'Do you already have a website?',
  currentWebsite: 'Current website address',
  businessDescription: 'What your business does',
  message: 'Project details',
  domainStatus: 'Domain',
  domainName: 'Domain name',
  emailCount: 'Email addresses',
  budget: 'Budget',
  timeline: 'Timeline',
  referral: 'How you heard about us',
  consent: 'Consent',
}

const inputClass =
  'w-full min-h-11 scroll-mt-28 rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-muted focus:border-brand focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-brand)_12%,transparent)] aria-[invalid=true]:border-red-400'

const textareaClass = `${inputClass} resize-y`

function normaliseKey(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

// Accepts every ?service=, ?build= and ?care= value used across the site, plus slugs.
const BUILD_PRESELECT: Record<string, string> = {
  'starter website': 'Starter Website',
  'business website': 'Business Website',
  'website design': 'Business Website',
  'website design development': 'Business Website',
  'website design and development': 'Business Website',
  'website redesign': 'Website Redesign',
  'online store': 'Online Store',
  'custom web application': 'Custom Web Application',
}

const CARE_PRESELECT: Record<string, string> = {
  'essential web care': 'Essential Web Care',
  'business website care': 'Business Website Care',
  'advanced application management': 'Advanced Application Management',
}

function preselectFromParams(params: {
  service: string | null
  build: string | null
  care: string | null
}): Partial<Values> {
  const preselect: Partial<Values> = {}
  const serviceKey = params.service ? normaliseKey(params.service) : ''
  // Unknown values are ignored without errors.
  if (serviceKey && BUILD_PRESELECT[serviceKey]) preselect.buildService = BUILD_PRESELECT[serviceKey]
  else if (serviceKey && CARE_PRESELECT[serviceKey]) preselect.careService = CARE_PRESELECT[serviceKey]
  if (params.build) {
    const key = normaliseKey(params.build)
    if (BUILD_PRESELECT[key]) preselect.buildService = BUILD_PRESELECT[key]
  }
  if (params.care) {
    const key = normaliseKey(params.care)
    if (CARE_PRESELECT[key]) preselect.careService = CARE_PRESELECT[key]
  }
  return preselect
}

function validateName(value: string) {
  const name = value.trim()
  if (name.length < 2) return 'Please enter your full name.'
  if (name.length > 100) return 'Please keep your name under 100 characters.'
  // Letters from any language, combining marks, spaces, apostrophes, hyphens and full stops.
  if (!/^[\p{L}\p{M}][\p{L}\p{M}\s'’.\-]*$/u.test(name)) {
    return 'Please use letters, spaces, apostrophes, hyphens or full stops only.'
  }
  return ''
}

function validatePhone(value: string) {
  const digits = value.replace(/\D/g, '')
  if (!digits) return 'Please enter a phone number.'
  if (digits.length === 10 && digits.startsWith('0')) return ''
  if (digits.length === 11 && digits.startsWith('27')) return ''
  return 'Please enter a South African number like 082 123 4567 or +27 82 123 4567.'
}

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function validateEmail(value: string) {
  const email = value.trim()
  if (!email) return 'Please enter your email address.'
  if (!EMAIL_RE.test(email)) return 'Please enter a valid email, like you@company.co.za.'
  return ''
}

function stripProtocol(value: string) {
  return value
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '')
}

function validateWebsite(value: string) {
  if (!value.trim()) return ''
  const host = stripProtocol(value)
  if (!/^(www\.)?[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i.test(host)) {
    return 'Please enter a web address like www.yourbusiness.co.za.'
  }
  return ''
}

function validateField(field: keyof Values, values: Values): string {
  switch (field) {
    case 'name':
      return validateName(values.name)
    case 'email':
      return validateEmail(values.email)
    case 'phone':
      return validatePhone(values.phone)
    case 'contactMethod':
      return values.contactMethod ? '' : 'Please choose how you would like us to reply.'
    case 'buildService':
    case 'careService':
      return values.buildService || values.careService
        ? ''
        : 'Choose a website service, a care plan, or both.'
    case 'hasWebsite':
      return ''
    case 'currentWebsite':
      return values.hasWebsite === 'Yes' ? validateWebsite(values.currentWebsite) : ''
    case 'businessDescription':
      if (!values.businessDescription.trim()) {
        return 'Please tell us in a sentence what your business does.'
      }
      return ''
    case 'message':
      if (values.message.trim().length < 10) {
        return 'Please add a little more detail (at least 10 characters).'
      }
      return ''
    case 'budget':
      return values.budget ? '' : 'Please choose a budget range.'
    case 'timeline':
      return values.timeline ? '' : 'Please choose a timeline.'
    case 'referralOther':
      return ''
    case 'consent':
      return values.consent ? '' : 'Please agree before sending.'
    default:
      return ''
  }
}

function validateAll(values: Values) {
  const errors: Partial<Record<keyof Values, string>> = {}
  for (const field of FIELD_ORDER) {
    const message = validateField(field, values)
    if (message) errors[field] = message
  }
  return errors
}

// Asked when we need to know what already exists: any care plan or a redesign.
function showsWebsiteQuestion(values: Values) {
  const isCarePlan = careServiceOptions.some(
    (option) => option.planId && option.value === values.careService,
  )
  return isCarePlan || values.buildService === 'Website Redesign'
}

function Field({
  id,
  label,
  required,
  error,
  helper,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  helper?: ReactNode
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-medium text-navy">
        {label}
        {required && (
          <>
            <span className="text-brand" aria-hidden="true"> *</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {children}
      {helper && <div className="mt-1.5 text-xs leading-relaxed text-muted">{helper}</div>}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1 text-xs font-medium text-red-600">
          <AlertCircle size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

function SectionCard({
  id,
  number,
  title,
  helper,
  children,
}: {
  id: string
  number: string
  title: string
  helper?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="mb-6 flex items-start gap-3.5">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-semibold text-white"
        >
          {number}
        </span>
        <div>
          <h3 id={`${id}-title`} className="text-base font-semibold leading-tight text-navy">
            {title}
          </h3>
          {helper && <p className="mt-1 text-[13px] leading-relaxed text-muted">{helper}</p>}
        </div>
      </div>
      <div className="grid gap-5">{children}</div>
    </section>
  )
}

function RadioCard({
  name,
  value,
  checked,
  onChange,
  title,
  description,
  price,
  tag,
  icon,
  large,
}: {
  name: string
  value: string
  checked: boolean
  onChange: () => void
  title: string
  description?: string
  price?: { label: string }
  tag?: string
  icon?: ReactNode
  large?: boolean
}) {
  return (
    <label
      className={[
        'relative flex cursor-pointer gap-3 rounded-xl border p-4 text-sm transition-colors',
        'has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand has-[:focus-visible]:ring-offset-2',
        large ? 'flex-col' : 'items-start',
        checked ? 'border-brand bg-blue-tint' : 'border-line bg-white hover:border-brand',
      ].join(' ')}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="flex w-full items-start gap-3">
        <span
          aria-hidden="true"
          className={[
            'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
            checked ? 'border-[5px] border-brand' : 'border border-line bg-white',
          ].join(' ')}
        />
        {icon && <span className="text-brand">{icon}</span>}
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-navy">{title}</span>
            {tag && (
              <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                {tag}
              </span>
            )}
            {price && (
              <span className="ml-auto whitespace-nowrap">
                <span className="text-sm font-semibold text-navy">{price.label}</span>
                <span className="text-xs text-muted">/month</span>
              </span>
            )}
          </span>
          {description && (
            <span className="mt-1 block text-xs leading-relaxed text-muted">{description}</span>
          )}
        </span>
      </span>
    </label>
  )
}

function EnquiryFormInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get('service')
  const buildParam = searchParams.get('build')
  const careParam = searchParams.get('care')
  const dealParam = searchParams.get('deal')
  const preselect = preselectFromParams({
    service: serviceParam,
    build: buildParam,
    care: careParam,
  })

  const [values, setValues] = useState<Values>(() => ({ ...EMPTY_VALUES, ...preselect }))
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({})
  // Nothing is validated until the visitor presses Send.
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitFailed, setSubmitFailed] = useState(false)
  // Synchronous lock: state alone cannot stop same-tick double submits.
  const submitLock = useRef(false)
  const [gotcha, setGotcha] = useState('')
  const [draftLoaded, setDraftLoaded] = useState(false)

  // Restore an in-progress draft, but let ?service= win over an older saved choice.
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(DRAFT_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, unknown>
        const restored: Record<string, unknown> = {}
        for (const key of Object.keys(EMPTY_VALUES) as (keyof Values)[]) {
          if (key === 'consent') continue
          const value = parsed[key]
          if (typeof value === 'string') restored[key] = value
        }
        setValues((current) => ({ ...current, ...restored, ...preselect, consent: false }))
      }
    } catch {
      // Storage can be unavailable or full; the form still works without it.
    }
    setDraftLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!draftLoaded) return
    try {
      const draft: Record<string, unknown> = {}
      for (const key of Object.keys(EMPTY_VALUES) as (keyof Values)[]) {
        if (key === 'consent') continue
        draft[key] = values[key]
      }
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
    } catch {
      // Ignore storage errors.
    }
  }, [values, draftLoaded])

  const selectedCareOption = careServiceOptions.find(
    (option) => option.value === values.careService,
  )
  const selectedPlan = selectedCareOption?.planId
    ? carePlans.find((plan) => plan.id === selectedCareOption.planId)
    : undefined
  const websiteQuestion = showsWebsiteQuestion(values)
  const careOnly = !values.buildService && Boolean(values.careService)
  const buildAndCare = Boolean(values.buildService) && Boolean(values.careService)
  const promoRequested = dealParam === BLACK_FRIDAY.anchorId && isBlackFridayActive()
  const promoDeal = promoRequested ? promoDealForBuild(values.buildService) : undefined

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    const next = { ...values, [key]: value }

    if (key === 'hasWebsite' && value !== 'Yes') {
      next.currentWebsite = ''
    }
    if (key === 'referral' && value !== 'Other') {
      next.referralOther = ''
    }

    setValues(next)

    // Errors only exist after a failed send; from then on they clear as fields become valid.
    if (!submitAttempted) return

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors }
      const revalidate: (keyof Values)[] = [key]
      if (key === 'buildService' || key === 'careService') {
        revalidate.push('buildService', 'careService', 'currentWebsite', 'budget')
      }
      if (key === 'hasWebsite') revalidate.push('currentWebsite')
      for (const field of revalidate) {
        const message = validateField(field, next)
        if (message) nextErrors[field] = message
        else delete nextErrors[field]
      }
      return nextErrors
    })
  }

  function fieldProps(key: keyof Values) {
    const error = errors[key]
    return {
      id: `enquiry-${key}`,
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? `enquiry-${key}-error` : undefined,
    } as const
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitLock.current || isSubmitting) return

    // Honeypot: behave like a normal submission for bots, send nothing.
    if (gotcha.trim()) return

    submitLock.current = true
    setSubmitAttempted(true)
    setSubmitFailed(false)

    const nextErrors = validateAll(values)
    setErrors(nextErrors)

    const firstError = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstError) {
      submitLock.current = false
      requestAnimationFrame(() => {
        document.getElementById(`enquiry-${firstError}`)?.focus()
      })
      return
    }

    const maliciousField = (Object.keys(EMPTY_VALUES) as (keyof Values)[]).find((key) => {
      const value = values[key]
      return typeof value === 'string' && MALICIOUS_INPUT.test(value)
    })
    if (maliciousField) {
      submitLock.current = false
      const blocked = { [maliciousField]: 'Use plain text here — please remove links, HTML or script code.' }
      setErrors(blocked)
      requestAnimationFrame(() => {
        document.getElementById(`enquiry-${maliciousField}`)?.focus()
      })
      return
    }

    setIsSubmitting(true)

    const careValue = selectedPlan
      ? `${selectedPlan.name} \u2013 ${selectedPlan.priceLabel}/month`
      : values.careService
    const combinedService = [values.buildService, values.careService].filter(Boolean).join(' + ')

    const payload = new FormData()
    const skipped = new Set<keyof Values>([
      'consent',
      'contactMethod',
      'currentWebsite',
      'buildService',
      'careService',
    ])
    for (const key of Object.keys(EMPTY_VALUES) as (keyof Values)[]) {
      if (skipped.has(key)) continue
      const text = String(values[key] ?? '').trim()
      payload.append(key, text.slice(0, MAX_LENGTHS[key] ?? 3000))
    }
    payload.append('contactMethod', values.contactMethod)
    payload.append('buildService', values.buildService)
    payload.append('careService', careValue)
    payload.append('service', combinedService)
    payload.append('planPrice', selectedPlan ? `${selectedPlan.priceLabel}/month` : '')
    if (promoDeal) {
      payload.append('promo', BLACK_FRIDAY.code)
      payload.append('promoPrice', `${promoDeal.priceLabel} once-off`)
      payload.append('promoNormalPrice', promoDeal.normalLabel)
    }
    if (serviceParam) {
      // Preserve the exact package the visitor came from (e.g. Starter Website).
      payload.append('requestedService', serviceParam.trim().slice(0, 100))
    }
    payload.append(
      'currentWebsite',
      values.hasWebsite === 'Yes' && values.currentWebsite.trim()
        ? `https://${stripProtocol(values.currentWebsite)}`
        : '',
    )
    payload.append('_replyto', values.email.trim())
    payload.append(
      '_subject',
      `${promoDeal ? `${BLACK_FRIDAY.subjectTag} ` : ''}WEB-IN enquiry: ${combinedService || 'General'} from ${values.name.trim()}`,
    )

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Formspree rejected the submission')

      try {
        window.sessionStorage.removeItem(DRAFT_KEY)
        if (promoDeal) {
          window.sessionStorage.setItem(
            'webin:promo-enquiry',
            JSON.stringify({ package: promoDeal.name, price: promoDeal.priceLabel }),
          )
        }
      } catch {
        // Ignore storage errors.
      }
      setSubmitAttempted(false)
      setErrors({})
      // Jump to the top before navigating so the thank-you page opens at its hero,
      // even if the new route takes a moment to paint.
      window.scrollTo({ top: 0, behavior: 'instant' })
      router.push('/contact/thank-you')
    } catch {
      submitLock.current = false
      setSubmitFailed(true)
      setIsSubmitting(false)
    }
  }

  const errorFields = FIELD_ORDER.filter((field) => errors[field])
  const whatsappHref = `https://wa.me/${STUDIO_WHATSAPP}`
  const mailHref = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent('Website enquiry')}`

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      {promoDeal && (
        <>
          <input type="hidden" name="promo" value={BLACK_FRIDAY.code} />
          <input type="hidden" name="promoPrice" value={`${promoDeal.priceLabel} once-off`} />
          <input type="hidden" name="promoNormalPrice" value={promoDeal.normalLabel} />
        </>
      )}
      {submitFailed && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-red-200 border-l-[3px] border-l-red-600 bg-red-50 p-4 text-red-900"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <strong className="block text-sm font-semibold">We couldn&rsquo;t send that message.</strong>
            <p className="mt-1 text-[13px] leading-relaxed text-red-800">
              Nothing was submitted. Please try again, or reach us directly at{' '}
              <a href={mailHref} className="font-semibold underline">{STUDIO_EMAIL}</a>{' '}
              or on{' '}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {submitAttempted && errorFields.length > 0 && (
        <div
          tabIndex={-1}
          role="alert"
          aria-labelledby="enquiry-error-summary-title"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900"
        >
          <strong id="enquiry-error-summary-title" className="block text-sm font-semibold">
            Please check {errorFields.length === 1 ? 'one field' : `${errorFields.length} fields`} before sending.
          </strong>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px]">
            {errorFields.map((field) => (
              <li key={field}>
                <a
                  href={`#enquiry-${field}`}
                  className="underline"
                  onClick={(event) => {
                    event.preventDefault()
                    document.getElementById(`enquiry-${field}`)?.focus()
                  }}
                >
                  {FIELD_LABELS[field] ?? field}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Honeypot: hidden from sight, screen readers and the tab order. */}
      <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={gotcha}
          onChange={(event) => setGotcha(event.target.value)}
        />
      </div>

      <SectionCard
        id="enquiry-section-about"
        number="1"
        title="About you"
        helper="So we know who we're speaking to and how to reply."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="enquiry-name" label="Your name" required error={errors.name}>
            <input
              {...fieldProps('name')}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Thandi Mokoena"
              maxLength={MAX_LENGTHS.name}
              value={values.name}
              onChange={(event) => update('name', event.target.value)}
              className={inputClass}
            />
          </Field>

          <Field id="enquiry-business" label="Business / organisation">
            <input
              id="enquiry-business"
              name="business"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Mokoena Plumbing & Projects"
              maxLength={MAX_LENGTHS.business}
              value={values.business}
              onChange={(event) => update('business', event.target.value)}
              className={inputClass}
            />
          </Field>

          <Field id="enquiry-email" label="Email" required error={errors.email}>
            <input
              {...fieldProps('email')}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="hello@mybusiness.com"
              maxLength={MAX_LENGTHS.email}
              value={values.email}
              onChange={(event) => update('email', event.target.value)}
              className={inputClass}
            />
          </Field>

          <Field id="enquiry-phone" label="Phone" required error={errors.phone}>
            <input
              {...fieldProps('phone')}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="064 953 1145"
              maxLength={MAX_LENGTHS.phone}
              value={values.phone}
              onChange={(event) => update('phone', event.target.value)}
              className={inputClass}
            />
          </Field>

          <div className="sm:col-span-2">
            <Field id="enquiry-city" label="Town / city">
              <input
                id="enquiry-city"
                name="city"
                type="text"
                autoComplete="address-level2"
                placeholder="e.g. Johannesburg, Pretoria, Cape Town"
                maxLength={MAX_LENGTHS.city}
                value={values.city}
                onChange={(event) => update('city', event.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="sm:col-span-2">
            <p id="enquiry-contactMethod-label" className="mb-1.5 text-[13px] font-medium text-navy">
              How should we contact you?
              <span className="text-brand" aria-hidden="true"> *</span>
              <span className="sr-only"> (required)</span>
            </p>
            <div
              id="enquiry-contactMethod"
              role="radiogroup"
              aria-required="true"
              aria-labelledby="enquiry-contactMethod-label"
              aria-describedby={errors.contactMethod ? 'enquiry-contactMethod-error' : undefined}
              aria-invalid={errors.contactMethod ? true : undefined}
              tabIndex={-1}
              className="grid scroll-mt-28 gap-2.5 outline-none sm:grid-cols-3"
            >
              {contactMethodOptions.map((option) => {
                const Icon = option === 'WhatsApp' ? MessageCircle : option === 'Email' ? Mail : Phone
                return (
                  <RadioCard
                    key={option}
                    name="contactMethod"
                    value={option}
                    checked={values.contactMethod === option}
                    onChange={() => update('contactMethod', option)}
                    title={option}
                    icon={<Icon size={16} aria-hidden="true" />}
                  />
                )
              })}
            </div>
            {errors.contactMethod && (
              <p
                id="enquiry-contactMethod-error"
                className="mt-1.5 flex items-start gap-1 text-xs font-medium text-red-600"
              >
                <AlertCircle size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
                {errors.contactMethod}
              </p>
            )}
          </div>
        </div>
      </SectionCard>

      <SectionCard id="enquiry-section-needs" number="2" title="What do you need?">
        <div className="grid gap-5">
          <Field
            id="enquiry-buildService"
            label="Website or application"
            error={errors.buildService}
            helper={
              <>
                Once-off build fee.{' '}
                <a
                  href="/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand underline"
                >
                  See what&rsquo;s included
                </a>
              </>
            }
          >
            <select
              {...fieldProps('buildService')}
              name="buildService"
              value={values.buildService}
              onChange={(event) => update('buildService', event.target.value)}
              className={inputClass}
            >
              <option value="">Select service</option>
              {buildServiceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
            {promoDeal && (
              <div className="mt-2 rounded-lg border border-promo-line bg-promo-tint px-3 py-2 text-xs leading-relaxed text-promo-strong">
                <span className="font-semibold">{BLACK_FRIDAY.shortLabel} price:</span>{' '}
                {promoDeal.isFrom ? 'from ' : ''}
                {promoDeal.priceLabel} once-off{' '}
                <s className="font-normal text-muted">{promoDeal.normalLabel}</s>. We will
                confirm the offer and your project slot in our reply.
              </div>
            )}
          </Field>

          <Field
            id="enquiry-careService"
            label="Monthly care & management"
            error={errors.careService}
            helper={
              <>
                Optional monthly plan.{' '}
                <a
                  href="/website-care-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand underline"
                >
                  Compare care plans
                </a>
              </>
            }
          >
            <select
              {...fieldProps('careService')}
              name="careService"
              value={values.careService}
              onChange={(event) => update('careService', event.target.value)}
              className={inputClass}
            >
              <option value="">Select Monthly care</option>
              {careServiceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </Field>
        </div>

        {websiteQuestion && (
          <div>
            <p id="enquiry-hasWebsite-label" className="mb-1.5 text-[13px] font-medium text-navy">
              Do you already have a website?
            </p>
            <div
              id="enquiry-hasWebsite"
              role="radiogroup"
              aria-labelledby="enquiry-hasWebsite-label"
              tabIndex={-1}
              className="flex flex-wrap gap-2.5 outline-none"
            >
              {hasWebsiteOptions.map((option) => (
                <div key={option} className="min-w-[120px] flex-1 sm:max-w-[180px]">
                  <RadioCard
                    name="hasWebsite"
                    value={option}
                    checked={values.hasWebsite === option}
                    onChange={() => update('hasWebsite', option)}
                    title={option}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {websiteQuestion && values.hasWebsite === 'Yes' && (
          <Field
            id="enquiry-currentWebsite"
            label="Your current website address"
            error={errors.currentWebsite}
          >
            <input
              {...fieldProps('currentWebsite')}
              name="currentWebsite"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="www.yourbusiness.co.za"
              maxLength={MAX_LENGTHS.currentWebsite}
              value={values.currentWebsite}
              onChange={(event) => update('currentWebsite', event.target.value)}
              className={inputClass}
            />
          </Field>
        )}
      </SectionCard>

      <SectionCard
        id="enquiry-section-project"
        number="3"
        title="Your project"
        helper={
          careOnly
            ? 'Tell us about the site and what you need help with.'
            : 'A few sentences are enough. The more context, the better the quote.'
        }
      >
        <Field
          id="enquiry-businessDescription"
          label="What does your business or organisation do?"
          required
          error={errors.businessDescription}
        >
          <textarea
            {...fieldProps('businessDescription')}
            name="businessDescription"
            rows={3}
            maxLength={MAX_LENGTHS.businessDescription}
            placeholder="e.g. We're a family-owned bakery in Soweto selling custom cakes and catering for events."
            value={values.businessDescription}
            onChange={(event) => update('businessDescription', event.target.value)}
            className={textareaClass}
          />
        </Field>

        <Field
          id="enquiry-message"
          label={careOnly ? 'What do you need help with?' : 'Tell us about your project'}
          required
          error={errors.message}
          helper={
            buildAndCare
              ? '\u2026and tell us anything about your current website or hosting.'
              : undefined
          }
        >
          <textarea
            {...fieldProps('message')}
            name="message"
            rows={6}
            maxLength={MAX_LENGTHS.message}
            placeholder={
              careOnly
                ? 'e.g. My site is slow. I need hosting and email set up. I want someone to look after my site every month.'
                : 'What should the website do for you?\nWho are your customers?\nAnything you definitely want (or don\u2019t want)?'
            }
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            className={textareaClass}
          />
        </Field>

        <Field id="enquiry-inspiration" label="Websites you like">
          <textarea
            id="enquiry-inspiration"
            name="inspiration"
            rows={3}
            maxLength={MAX_LENGTHS.inspiration}
            placeholder="Paste links to 1–3 websites you like, and tell us what you like about them."
            value={values.inspiration}
            onChange={(event) => update('inspiration', event.target.value)}
            className={textareaClass}
          />
        </Field>
      </SectionCard>

      <SectionCard
        id="enquiry-section-domain"
        number="4"
        title="Domain & email"
        helper="Skip anything you're unsure about. We'll confirm the details with you."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="enquiry-domainStatus"
            label="Domain name"
            helper="The domain is registered in your name."
          >
            <select
              id="enquiry-domainStatus"
              name="domainStatus"
              value={values.domainStatus}
              onChange={(event) => update('domainStatus', event.target.value)}
              className={inputClass}
            >
              <option value="">Select an option</option>
              {domainStatusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field
            id="enquiry-domainName"
            label={
              values.domainStatus === 'I already have a domain'
                ? 'Your current domain'
                : 'Domain you have or want'
            }
          >
            <input
              id="enquiry-domainName"
              name="domainName"
              type="text"
              inputMode="url"
              placeholder="mybusiness.co.za"
              maxLength={MAX_LENGTHS.domainName}
              value={values.domainName}
              onChange={(event) => update('domainName', event.target.value)}
              className={inputClass}
            />
          </Field>

          {values.domainStatus && (
            <p className="text-xs leading-relaxed text-muted sm:col-span-2">
              {values.domainStatus === 'I need a new domain'
                ? "We'll confirm availability and register it in your name before launch."
                : values.domainStatus === 'I already have a domain'
                  ? "We'll check access and DNS with you before making any changes."
                  : "No problem \u2014 we can sort out the domain during scoping."}
            </p>
          )}

          <Field id="enquiry-emailCount" label="How many email addresses do you need?">
            <select
              id="enquiry-emailCount"
              name="emailCount"
              value={values.emailCount}
              onChange={(event) => update('emailCount', event.target.value)}
              className={inputClass}
            >
              <option value="">Select an option</option>
              {emailCountOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          {selectedPlan && (
            <p className="self-end rounded-xl bg-blue-tint px-4 py-3 text-xs leading-relaxed text-navy">
              {selectedPlan.name} includes {emailShort(selectedPlan)} on your domain. Extra mailboxes can be
              quoted separately.
            </p>
          )}
        </div>
      </SectionCard>

      <SectionCard
        id="enquiry-section-budget"
        number="5"
        title="Budget & timing"
        helper="This helps us suggest the right scope, not to pressure you."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="enquiry-budget"
            label="What is your budget?"
            required
            error={errors.budget}
            helper="For the once-off build, not a monthly plan."
          >
            <select
              {...fieldProps('budget')}
              name="budget"
              value={values.budget}
              onChange={(event) => update('budget', event.target.value)}
              className={inputClass}
            >
              <option value="">Select a range</option>
              {enquiryBudgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field id="enquiry-timeline" label="When do you need it?" required error={errors.timeline}>
            <select
              {...fieldProps('timeline')}
              name="timeline"
              value={values.timeline}
              onChange={(event) => update('timeline', event.target.value)}
              className={inputClass}
            >
              <option value="">Select a timeline</option>
              {enquiryTimelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field id="enquiry-referral" label="How did you hear about us?">
            <select
              id="enquiry-referral"
              name="referral"
              value={values.referral}
              onChange={(event) => update('referral', event.target.value)}
              className={inputClass}
            >
              <option value="">Select one</option>
              {referralSourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          {values.referral === 'Other' && (
            <Field id="enquiry-referralOther" label="Where did you hear about us?">
              <input
                id="enquiry-referralOther"
                name="referralOther"
                type="text"
                maxLength={MAX_LENGTHS.referralOther}
                placeholder="e.g. a flyer at a local market"
                value={values.referralOther}
                onChange={(event) => update('referralOther', event.target.value)}
                className={inputClass}
              />
            </Field>
          )}
        </div>
      </SectionCard>

      <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-7">
        <label className="flex cursor-pointer items-start gap-2.5 text-[13px] leading-relaxed text-muted">
          <input
            id="enquiry-consent"
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(event) => update('consent', event.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 scroll-mt-28 accent-[var(--color-brand)]"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? 'enquiry-consent-error' : undefined}
          />
          <span>
            I agree that WEB-IN may contact me about my enquiry. View our{' '}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p
            id="enquiry-consent-error"
            className="mt-2 flex items-start gap-1 text-xs font-medium text-red-600"
          >
            <AlertCircle size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
            {errors.consent}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-medium text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send enquiry <CheckCircle2 size={16} aria-hidden="true" />
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs leading-relaxed text-muted">
          Prefer to talk?{' '}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline"
          >
            WhatsApp
          </a>{' '}
          or{' '}
          <a href={mailHref} className="font-medium text-brand underline">
            email
          </a>{' '}
          us directly.
        </p>
      </div>
    </form>
  )
}

export function EnquiryForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-line bg-white p-8 text-center text-sm text-muted">
          Loading form…
        </div>
      }
    >
      <EnquiryFormInner />
    </Suspense>
  )
}
