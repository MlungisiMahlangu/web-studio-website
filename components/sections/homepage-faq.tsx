'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/constants'

export function HomePageFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const displayFaqs = faqs.slice(0, 6)

  return (
    <div>
      <div className="faq-list">
        {displayFaqs.map(([question, answer], index) => (
          <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}>
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index}
            >
              <span>{question}</span>
              <ChevronDown aria-hidden="true" />
            </button>
            {openFaq === index && <p>{answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
