'use client'

import { motion } from 'motion/react'

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(67,97,238,0.35) 0%, rgba(67,97,238,0.1) 40%, transparent 70%)',
          left: '5%',
          top: '10%',
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.25) 0%, rgba(34,211,238,0.08) 40%, transparent 70%)',
          right: '10%',
          top: '30%',
        }}
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)',
          left: '40%',
          bottom: '5%',
        }}
        animate={{
          x: [0, 25, -40, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Film grain */}
      <div className="absolute inset-0 grain grain-dark" />

      {/* Sweeping light beam */}
      <motion.div
        className="absolute w-[200%] h-[300px] -top-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(67,97,238,0.06) 30%, rgba(34,211,238,0.08) 50%, rgba(67,97,238,0.06) 70%, transparent 100%)',
          filter: 'blur(40px)',
        }}
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 50%, rgba(12,12,14,0.6) 100%)',
        }}
      />
    </div>
  )
}
