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
    <div>
      <div className="faq-list">
        {homepageFaqs.map(({ question, answer }, index) => (
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
