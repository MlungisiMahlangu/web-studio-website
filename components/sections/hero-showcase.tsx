'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, animate } from 'motion/react'
import { BrowserWindow, TabletFrame, PhoneFrame } from './browser-window'
import { EmberAndOakDesktop, EmberAndOakTablet, EmberAndOakPhone } from './sample-sites/restaurant'
import { SterlingLawDesktop, SterlingLawTablet, SterlingLawPhone } from './sample-sites/law-firm'
import { ForgeAthleticDesktop, ForgeAthleticTablet, ForgeAthleticPhone } from './sample-sites/fitness'
import { LumiereDesktop, LumiereTablet, LumierePhone } from './sample-sites/beauty-booking'

const samples = [
  { name: 'Ember & Oak', url: 'emberandoak.co.za', Desktop: EmberAndOakDesktop, Tablet: EmberAndOakTablet, Phone: EmberAndOakPhone },
  { name: 'Sterling Law', url: 'sterlinglaw.co.za', Desktop: SterlingLawDesktop, Tablet: SterlingLawTablet, Phone: SterlingLawPhone },
  { name: 'Forge Athletic', url: 'forgeathletic.co.za', Desktop: ForgeAthleticDesktop, Tablet: ForgeAthleticTablet, Phone: ForgeAthleticPhone },
  { name: 'Lumière Studio', url: 'lumierebeauty.co.za', Desktop: LumiereDesktop, Tablet: LumiereTablet, Phone: LumierePhone },
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

  // Floating animation
  const floatY = useMotionValue(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    const controls = animate(floatY, [0, -6, 0], {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    })
    return () => controls.stop()
  }, [floatY, prefersReducedMotion])

  // Spotlight position (reactive)
  const spotlightX = useMotionValue(50)
  const spotlightY = useMotionValue(50)
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, rgba(67,97,238,0.06), transparent 40%)`
  )

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

  // Mouse move handler for 3D tilt and spotlight
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

    spotlightX.set(x * 100)
    spotlightY.set(y * 100)
  }, [isMobile, prefersReducedMotion, mouseX, mouseY, rotateX, rotateY, spotlightX, spotlightY])

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  const togglePause = useCallback(() => setIsPaused((p) => !p), [])

  const currentSample = samples[currentIndex]

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
      {/* Spotlight effect - now reactive via useTransform */}
      {!isMobile && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: spotlightBg }}
        />
      )}

      {/* Device showcase with 3D tilt */}
      <div className="relative z-10" style={{ perspective: isMobile || prefersReducedMotion ? 'none' : 1200 }}>
        <div className="flex items-end justify-center">
          <motion.div
            className={isMobile ? 'flex flex-col gap-4 items-center' : 'flex items-end gap-0'}
            style={{
              rotateX: isMobile || prefersReducedMotion ? 0 : rotateX,
              rotateY: isMobile || prefersReducedMotion ? 0 : rotateY,
              y: prefersReducedMotion ? 0 : floatY,
              transformStyle: 'preserve-3d',
            }}
          >
            {isMobile ? (
              <div className="flex flex-col gap-4 items-center">
                <div className="w-full max-w-[320px]">
                  <BrowserWindow
                    DesktopComponent={currentSample.Desktop}
                    url={currentSample.url}
                    isPaused={isPaused}
                    onTogglePause={togglePause}
                  />
                </div>
                <div className="flex gap-3 justify-center">
                  <div className="w-[140px]">
                    <TabletFrame
                      TabletComponent={currentSample.Tablet}
                      url={currentSample.url}
                    />
                  </div>
                  <div className="w-[100px]">
                    <PhoneFrame
                      PhoneComponent={currentSample.Phone}
                      url={currentSample.url}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-end gap-0">
                <div className="relative z-10 shrink-0" style={{ width: '500px' }}>
                  <BrowserWindow
                    DesktopComponent={currentSample.Desktop}
                    url={currentSample.url}
                    isPaused={isPaused}
                    onTogglePause={togglePause}
                  />
                </div>
                <div className="relative z-20 shrink-0" style={{ width: '150px', marginLeft: '-80px' }}>
                  <TabletFrame
                    TabletComponent={currentSample.Tablet}
                    url={currentSample.url}
                  />
                </div>
                <div className="relative z-30 shrink-0" style={{ width: '100px', marginLeft: '-50px' }}>
                  <PhoneFrame
                    PhoneComponent={currentSample.Phone}
                    url={currentSample.url}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
        {/* Site name caption */}
        <div className="text-center mt-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/25">
            {currentSample.name}
          </span>
        </div>
      </div>

      {/* Screen reader description */}
      <div className="sr-only">
        Sample website designs showing responsive layouts for {currentSample.name}
      </div>
    </div>
  )
}
