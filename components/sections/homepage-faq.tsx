'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const homepageFaqs = [
  {
    question: 'How much does a website cost?',
    answer:
      'Our websites start from R1,500 for a landing page. Final pricing depends on the scope, pages, functionality, integrations and project requirements.',
  },
  {
    question: 'How long does a website take?',
    answer:
      'Most projects take between one and six weeks depending on the website type, scope, functionality and feedback process.',
  },
  {
    question: 'Do I own my website?',
    answer:
      'Yes. Once the project is completed and paid according to the agreed terms, the client owns the website. Third-party software, subscriptions and licences remain subject to their respective terms.',
  },
  {
    question: 'Do you provide the domain?',
    answer:
      'Selected packages include a .co.za domain for the first year. Existing domains can also be used and configured.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes. Optional maintenance plans are available for businesses that want continued technical support, updates and website care after launch.',
  },
]

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
