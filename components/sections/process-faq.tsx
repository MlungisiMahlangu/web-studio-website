'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { processFaqs } from '@/lib/constants'

export function ProcessFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="process-faq-list">
      {processFaqs.map(([question, answer], index) => (
        <div
          className={`process-faq-item ${openFaq === index ? 'open' : ''}`}
          key={question}
        >
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
  )
}
