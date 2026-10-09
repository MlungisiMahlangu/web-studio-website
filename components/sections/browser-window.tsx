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
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      {/* Screen glow */}
      <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent rounded-3xl blur-xl pointer-events-none" />

      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0d0d10]">
        {/* Outer bezel gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-2xl" />

        {/* Title bar */}
        <div className="relative flex items-center gap-3 px-4 py-3 bg-gradient-to-b from-[#1e1e24] to-[#18181e] border-b border-white/[0.06]">
          {/* Traffic lights */}
          <div className="flex items-center gap-[7px]">
            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#28c840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
          </div>

          {/* URL bar */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white/[0.06] rounded-lg px-3 py-1.5 min-w-[220px] max-w-[320px] border border-white/[0.04]">
              {/* Lock icon */}
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-30">
                <path d="M12 7H4V5a4 4 0 1 1 8 0v2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
              </svg>
              <span className="text-[10px] text-white/40 font-mono truncate">
                {typedUrl}
                {isTyping && <span className="inline-block w-px h-3 bg-white/50 ml-0.5 animate-pulse" />}
              </span>
            </div>
          </div>

          {/* Pause/play */}
          <button
            onClick={onTogglePause}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/[0.06] transition-colors"
            aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
          >
            {isPaused ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white" opacity="0.4">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white" opacity="0.4">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            )}
          </button>
        </div>

        {/* Content area */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
          {/* Screen reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none z-10" />
          <AnimatePresence mode="wait">
            <motion.div
              key={url}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
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
    </motion.div>
  )
}

export function TabletFrame({
  TabletComponent,
  url,
}: {
  TabletComponent: React.ComponentType
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
    }, 1200)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(animationId)
    }
  }, [url])

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 30, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    >
      {/* Screen glow */}
      <div className="absolute -inset-3 bg-blue-500/5 rounded-3xl blur-lg pointer-events-none" />

      {/* Tablet body */}
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#2a2a30] to-[#1a1a1e] p-[3px]">
        {/* Inner bezel */}
        <div className="rounded-[calc(2rem-3px)] overflow-hidden bg-[#0d0d10] border border-white/[0.06]">
          {/* Camera area */}
          <div className="flex items-center justify-center py-2.5 bg-gradient-to-b from-[#1a1a1e] to-[#141418]">
            {/* Camera lens */}
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a22] border border-white/[0.08]" />
              <div className="absolute inset-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/10" />
            </div>
          </div>

          {/* Content */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none z-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={url}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  ref={scrollRef}
                  className="h-full overflow-hidden no-scrollbar"
                >
                  <TabletComponent />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Home indicator */}
          <div className="flex items-center justify-center py-1.5 bg-[#0d0d10]">
            <div className="w-10 h-1 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </motion.div>
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
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 40, scale: 0.85 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
    >
      {/* Screen glow */}
      <div className="absolute -inset-3 bg-blue-500/5 rounded-3xl blur-lg pointer-events-none" />

      {/* Phone body */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#2a2a30] to-[#1a1a1e] p-[3px]">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[20%] w-[3px] h-5 bg-[#2a2a30] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[30%] w-[3px] h-8 bg-[#2a2a30] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[42%] w-[3px] h-8 bg-[#2a2a30] rounded-l-sm" />
        <div className="absolute -right-[3px] top-[28%] w-[3px] h-10 bg-[#2a2a30] rounded-r-sm" />

        {/* Inner bezel */}
        <div className="rounded-[calc(2.5rem-3px)] overflow-hidden bg-[#0d0d10] border border-white/[0.06]">
          {/* Dynamic Island */}
          <div className="flex items-center justify-center pt-2.5 pb-1 bg-[#0d0d10]">
            <div className="relative w-20 h-6 rounded-full bg-black border border-white/[0.04] flex items-center justify-center">
              {/* Camera dot */}
              <div className="absolute right-3 w-2 h-2 rounded-full bg-[#0a0a12]">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-400/15 to-purple-400/10" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none z-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={url}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
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

          {/* Home indicator */}
          <div className="flex items-center justify-center py-2 bg-[#0d0d10]">
            <div className="w-12 h-1 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
