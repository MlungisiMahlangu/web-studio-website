import { Plus } from 'lucide-react'
import { keyFaqs } from '@/lib/constants'
import { withBlackFridayFaq } from '@/lib/promo'

export function PricingFaq() {
  const faqs = withBlackFridayFaq(keyFaqs)
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 open:shadow-lg open:border-brand/20"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy list-none">
            {faq.question}
            <span className="shrink-0 rounded-full bg-surface p-1.5 transition-transform duration-300 group-open:rotate-45">
              <Plus size={16} className="text-navy" />
            </span>
          </summary>
          <p className="mt-4 text-body leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
