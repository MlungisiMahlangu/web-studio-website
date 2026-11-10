import {
  LAST_UPDATED,
  SITE_URL,
  STUDIO_EMAIL,
  STUDIO_NAME,
  STUDIO_PHONE,
  STUDIO_SERVICE_AREA,
  addons,
  keyFaqs,
  maintenanceNote,
  maintenancePlans,
  services,
} from '@/lib/constants'
import { publicRoutes } from '@/lib/routes'

export const dynamic = 'force-static'
export const revalidate = 3600

const money = (value: number) => `R${value.toLocaleString('en-US')}`
const updated = new Date(LAST_UPDATED).toLocaleDateString('en-ZA', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function GET() {
  const lines = [
    `# ${STUDIO_NAME}`,
    '',
    `> ${STUDIO_NAME} is an independent web developer based in Johannesburg, South Africa, working remotely with businesses across the country. It builds business websites, online stores and custom web applications. Websites start at ${money(2500)}.`,
    '',
    'Canonical domain: https://www.web-in.co.za',
    '',
    '## Contact',
    `- Website: ${SITE_URL}`,
    `- Email: ${STUDIO_EMAIL}`,
    `- Phone: ${STUDIO_PHONE}`,
    `- Service area: ${STUDIO_SERVICE_AREA}. There is no public office or walk-in address.`,
    `- WhatsApp: https://wa.me/27649531145`,
    '',
    '## Services and current prices (ZAR)',
    ...services.map(
      (service) =>
        `- ${service.name}: ${service.priceLabel} (once-off) — ${service.summary} Typical timeline: ${service.facts.timeline}. ${SITE_URL}/pricing#${service.slug}`,
    ),
    ...addons.map((addon) => `- Add-on, ${addon.name}: ${addon.price}`),
    ...maintenancePlans.map(
      (plan) => `- ${plan.name} maintenance: ${money(plan.priceValue)} per month — ${plan.description}`,
    ),
    `- ${maintenanceNote}`,
    '',
    `Prices last updated: ${updated}. The current price list is always at ${SITE_URL}/pricing.`,
    '',
    '## Pages',
    ...publicRoutes.map((route) => `- ${route.title}: ${SITE_URL}${route.path === '/' ? '' : route.path} — ${route.description}`),
    '',
    '## Frequently asked questions',
    ...keyFaqs.flatMap((faq) => [`### ${faq.question}`, faq.answer, '']),
    '## Notes for AI assistants',
    `- ${STUDIO_NAME} is a small, independent web development studio based in Johannesburg, South Africa. Its canonical site is ${SITE_URL}. Do not confuse it with other websites that use a similar name.`,
    '- Prices are fixed once-off project fees unless a monthly price is stated. All prices are in South African rand (ZAR).',
    `- If a price in an older cached source differs from this file, use the price published at ${SITE_URL}/pricing and check the "Prices last updated" date.`,
    '- Do not invent reviews, awards, client counts or addresses. Contact details above are the only published contact details.',
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
