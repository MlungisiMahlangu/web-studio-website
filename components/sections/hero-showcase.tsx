'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import { BrowserWindow, PhoneFrame } from './browser-window'
import { EmberAndOakDesktop, EmberAndOakPhone } from './sample-sites/restaurant'
import { SterlingLawDesktop, SterlingLawPhone } from './sample-sites/law-firm'
import { ForgeAthleticDesktop, ForgeAthleticPhone } from './sample-sites/fitness'
import { LumiereDesktop, LumierePhone } from './sample-sites/beauty-booking'

const samples = [
  { name: 'Ember & Oak', url: 'emberandoak.co.za', Desktop: EmberAndOakDesktop, Phone: EmberAndOakPhone },
  { name: 'Sterling Law', url: 'sterlinglaw.co.za', Desktop: SterlingLawDesktop, Phone: SterlingLawPhone },
  { name: 'Forge Athletic', url: 'forgeathletic.co.za', Desktop: ForgeAthleticDesktop, Phone: ForgeAthleticPhone },
  { name: 'Lumière Studio', url: 'lumierebeauty.co.za', Desktop: LumiereDesktop, Phone: LumierePhone },
]

export function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 })

  // Check if mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-cycle
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % samples.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused, prefersReducedMotion])

  // Mouse move handler for 3D tilt
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isMobile || prefersReducedMotion) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    mouseX.set(x)
    mouseY.set(y)

    rotateX.set((y - 0.5) * -8)
    rotateY.set((x - 0.5) * 8)
  }, [isMobile, prefersReducedMotion, mouseX, rotateX, rotateY])

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  const togglePause = useCallback(() => setIsPaused((p) => !p), [])

  const currentSample = samples[currentIndex]

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(67,97,238,0.06), transparent 40%)`,
  }

  // Swipe handling for mobile
  const [touchStart, setTouchStart] = useState(0)
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      setCurrentIndex((i) => {
        if (diff > 0) return (i + 1) % samples.length
        return (i - 1 + samples.length) % samples.length
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Spotlight effect */}
      {!isMobile && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          style={spotlightStyle}
        />
      )}

      {/* 3D tilt wrapper */}
      <motion.div
        className="relative z-10"
        style={{
          perspective: isMobile ? 'none' : 1200,
        }}
      >
        <motion.div
          style={{
            rotateX: isMobile || prefersReducedMotion ? 0 : rotateX,
            rotateY: isMobile || prefersReducedMotion ? 0 : rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          {isMobile ? (
            /* Mobile layout: stacked */
            <div className="flex flex-col gap-6 items-center">
              <div className="w-full max-w-[340px]">
                <BrowserWindow
                  DesktopComponent={currentSample.Desktop}
                  url={currentSample.url}
                  isPaused={isPaused}
                  onTogglePause={togglePause}
                />
              </div>
              <div className="w-full max-w-[200px]">
                <PhoneFrame
                  PhoneComponent={currentSample.Phone}
                  url={currentSample.url}
                />
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/25">
                  {currentSample.name}
                </span>
              </div>
            </div>
          ) : (
            /* Desktop layout: side by side with overlapping phone */
            <div className="relative flex items-end justify-center gap-6">
              <div className="flex-1 max-w-[640px]">
                <BrowserWindow
                  DesktopComponent={currentSample.Desktop}
                  url={currentSample.url}
                  isPaused={isPaused}
                  onTogglePause={togglePause}
                />
                <div className="text-center mt-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/25">
                    {currentSample.name}
                  </span>
                </div>
              </div>
              <div className="absolute -right-8 bottom-0 w-[200px]">
                <PhoneFrame
                  PhoneComponent={currentSample.Phone}
                  url={currentSample.url}
                />
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Screen reader description */}
      <div className="sr-only">
        Sample website designs showing responsive layouts for {currentSample.name}
      </div>
    </div>
  )
}
