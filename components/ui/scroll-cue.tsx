'use client'

import { motion } from 'motion/react'

export function ScrollCue() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="text-[10px] font-mono uppercase tracking-wider text-cream/20">Scroll</span>
      <div className="w-px h-8 bg-gradient-to-b from-cream/20 to-transparent" />
    </motion.div>
  )
}
