export const BLACK_FRIDAY = {
  enabled: true,
  campaignId: 'black-friday-2026',
  anchorId: 'black-friday',
  code: 'BLACKFRIDAY2026',
  label: 'Black Friday Deals',
  shortLabel: 'Black Friday',
  subjectTag: '[BLACK FRIDAY]',
  // No start gate: the campaign is live as soon as it is deployed.
  startsAt: null as string | null,
  endsAt: '2026-12-05T23:59:59+02:00',
  endDateLabel: '5 December 2026',
  endDateIso: '2026-12-05',
  slotsTotal: 5,
  slotsRemaining: null as number | null,
} as const

export const BLACK_FRIDAY_END_MS = Date.parse(BLACK_FRIDAY.endsAt)

export function isBlackFridayActive(now: Date = new Date()): boolean {
  if (!BLACK_FRIDAY.enabled) return false
  const time = now.getTime()
  if (BLACK_FRIDAY.startsAt) {
    const start = Date.parse(BLACK_FRIDAY.startsAt)
    if (Number.isFinite(start) && time < start) return false
  }
  return time <= BLACK_FRIDAY_END_MS
}

export function isBlackFridayOver(now: Date = new Date()): boolean {
  return !isBlackFridayActive(now)
}

export function formatZAR(value: number): string {
  return `R${new Intl.NumberFormat('en-US').format(value)}`
}
