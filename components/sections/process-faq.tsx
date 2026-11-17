import { ChevronDown } from 'lucide-react'
import { processFaqs } from '@/lib/constants'

export function ProcessFAQ() {
  return (
    <div className="flex flex-col">
      {processFaqs.map(([question, answer], index) => (
        <details
          key={question}
          open={index === 0}
          className="group border-b border-line transition-colors duration-200 open:bg-surface"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-4 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <span className="text-base font-medium">{question}</span>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p className="px-4 pb-5 text-sm leading-relaxed text-muted">{answer}</p>
        </details>
      ))}
    </div>
  )
}
