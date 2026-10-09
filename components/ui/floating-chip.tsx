'use client'

import { motion } from 'motion/react'

const chipStyles = [
  { bg: 'rgba(67,97,238,0.12)', border: 'rgba(67,97,238,0.25)', color: '#93b4ff' },
  { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)', color: '#7dd3e8' },
  { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.25)', color: '#a5b4fc' },
]

export function FloatingChip({
  label,
  index = 0,
}: {
  label: string
  index?: number
}) {
  const style = chipStyles[index % chipStyles.length]
  const durations = [4.5, 5.2, 3.8, 4.8, 5.5]
  const duration = durations[index % durations.length]

  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium backdrop-blur-sm whitespace-nowrap"
      style={{
        background: style.bg,
        border: `1px solid ${style.border}`,
        color: style.color,
      }}
      animate={{
        y: [0, -8, 4, -6, 0],
        x: [0, 3, -2, 4, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {label}
    </motion.div>
  )
}
