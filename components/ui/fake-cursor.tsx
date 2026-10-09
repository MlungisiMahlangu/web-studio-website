'use client'

import { motion } from 'motion/react'

export function FakeCursor({
  containerRef,
  active,
}: {
  containerRef: React.RefObject<HTMLElement | null>
  active: boolean
}) {
  if (!active) return null

  return (
    <motion.div
      className="absolute z-50 pointer-events-none"
      style={{ width: 20, height: 20 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 3l14 8-6 2-3 6z"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}
