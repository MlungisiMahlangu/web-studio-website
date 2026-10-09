'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function BrowserWindow({
  DesktopComponent,
  url,
  isPaused,
  onTogglePause,
}: {
  DesktopComponent: React.ComponentType
  url: string
  isPaused: boolean
  onTogglePause: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [typedUrl, setTypedUrl] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Auto-scroll effect
  useEffect(() => {
    const el = scrollRef.current
    if (!el || isPaused) return

    let scrollPos = 0
    let direction = 1
    let animationId: number

    const scroll = () => {
      if (!el) return
      const maxScroll = el.scrollHeight - el.clientHeight
      if (scrollPos >= maxScroll) direction = -1
      if (scrollPos <= 0) direction = 1

      scrollPos += direction * 0.5
      el.scrollTop = scrollPos
      animationId = requestAnimationFrame(scroll)
    }

    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(scroll)
    }, 1000)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(animationId)
    }
  }, [url, isPaused])

  // URL typing effect
  useEffect(() => {
    setTypedUrl('')
    setIsTyping(true)
    let i = 0
    const interval = setInterval(() => {
      if (i <= url.length) {
        setTypedUrl(url.slice(0, i))
        i++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [url])

  return (
    <div className="relative w-full">
      {/* Browser frame */}
      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/[0.08] bg-[#111114]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c22] border-b border-white/[0.06]">
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <div className="flex-1 ml-3 flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-1.5 min-w-[200px] max-w-[300px]">
              <span className="text-[10px] text-white/30 font-mono truncate">
                {typedUrl}
                {isTyping && <span className="inline-block w-px h-3 bg-white/40 ml-0.5 animate-pulse" />}
              </span>
            </div>
          </div>
          <button
            onClick={onTogglePause}
            className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
          >
            {isPaused ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white" opacity="0.4">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white" opacity="0.4">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            )}
          </button>
        </div>

        {/* Content area */}
        <div className="relative overflow-hidden" style={{ height: 'clamp(300px, 40vw, 480px)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={url}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                ref={scrollRef}
                className="h-full overflow-hidden no-scrollbar"
              >
                <DesktopComponent />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export function PhoneFrame({
  PhoneComponent,
  url,
}: {
  PhoneComponent: React.ComponentType
  url: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let scrollPos = 0
    let direction = 1
    let animationId: number

    const scroll = () => {
      if (!el) return
      const maxScroll = el.scrollHeight - el.clientHeight
      if (scrollPos >= maxScroll) direction = -1
      if (scrollPos <= 0) direction = 1

      scrollPos += direction * 0.4
      el.scrollTop = scrollPos
      animationId = requestAnimationFrame(scroll)
    }

    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(scroll)
    }, 1500)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(animationId)
    }
  }, [url])

  return (
    <div className="relative">
      <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/[0.08] bg-[#111114]">
        {/* Phone notch */}
        <div className="flex items-center justify-center py-2 bg-[#1c1c22] border-b border-white/[0.06]">
          <div className="w-16 h-4 rounded-full bg-black" />
        </div>

        {/* Content */}
        <div className="relative overflow-hidden" style={{ height: 'clamp(400px, 50vw, 600px)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={url}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                ref={scrollRef}
                className="h-full overflow-hidden no-scrollbar"
              >
                <PhoneComponent />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
