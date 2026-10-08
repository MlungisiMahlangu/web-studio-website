import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { MultiStepForm } from '@/components/forms/multi-step-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start a project',
  description: 'Tell us about your project. Get a tailored quote with clear deliverables and timeline.',
}

export default function StartAProjectPage() {
  return (
    <>
      <Navbar />
      <section className="inner-hero container">
        <p className="eyebrow">Start your project</p>
        <h1>
          Let&apos;s build
          <br />
          <em>something good.</em>
        </h1>
        <p>
          Share as much or as little as you know. We will review your requirements
          and come back with a clear recommendation and quote.
        </p>
      </section>
      <section className="inner-content container" style={{ maxWidth: 720 }}>
        <MultiStepForm />
      </section>
      <Footer />
    </>
  )
}
