'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { homepageFaqs } from '@/lib/constants'

export function HomePageFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="flex flex-col">
      {homepageFaqs.map(({ question, answer }, index) => {
        const isOpen = openFaq === index
        return (
          <div
            key={question}
            className={`border-b border-line transition-colors duration-200 ${isOpen ? 'bg-cream-light' : ''}`}
          >
            <button
              onClick={() => setOpenFaq(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex items-center justify-between w-full py-5 px-4 text-left gap-4"
            >
              <span className="text-base font-medium">{question}</span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out-expo ${
                isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-4 pb-5 text-sm text-muted leading-relaxed">{answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
