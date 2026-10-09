'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const words = ['attract clients', 'convert visitors', 'load fast', 'build trust', 'rank higher', 'grow revenue']

export function WordRotator({ interval = 3000 }: { interval?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [interval])

  return (
    <span className="relative inline-block overflow-hidden align-bottom h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="absolute left-0 text-accent italic"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
