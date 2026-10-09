'use client'

import { motion } from 'motion/react'

function DesktopSite() {
  return (
    <div className="h-full bg-white overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-amber-600" />
          <span className="font-serif text-sm font-bold text-gray-900">Osteria</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-[10px] text-gray-500">Menu</span>
          <span className="text-[10px] text-gray-500">About</span>
          <span className="text-[10px] text-gray-500">Events</span>
          <span className="text-[10px] text-gray-500">Contact</span>
          <span className="text-[9px] bg-amber-600 text-white px-3 py-1 rounded-full">Reserve</span>
        </div>
      </div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 px-6 py-8">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,200,100,0.3), transparent 60%)' }} />
        <div className="relative">
          <p className="text-[8px] uppercase tracking-widest text-amber-300 mb-2">Est. 2019 · Cape Town</p>
          <h2 className="font-serif text-xl text-white leading-tight mb-2">A taste of<br />the Mediterranean.</h2>
          <p className="text-[9px] text-amber-100/70 mb-4 max-w-[200px]">Seasonal ingredients, wood-fired cooking and an intimate dining experience.</p>
          <div className="flex gap-2">
            <span className="text-[9px] bg-amber-500 text-white px-3 py-1.5 rounded-full">Book a table</span>
            <span className="text-[9px] border border-amber-400/40 text-amber-200 px-3 py-1.5 rounded-full">View menu</span>
          </div>
        </div>
      </div>
      {/* Menu preview */}
      <div className="px-5 py-5">
        <p className="text-[8px] uppercase tracking-wider text-gray-400 mb-3">Popular dishes</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: 'Burrata', price: 'R185', color: 'bg-orange-100' },
            { name: 'Risotto', price: 'R220', color: 'bg-amber-100' },
            { name: 'Tiramisu', price: 'R95', color: 'bg-yellow-100' },
          ].map((dish) => (
            <div key={dish.name} className={`${dish.color} rounded-lg p-2`}>
              <div className="w-full aspect-square rounded-md bg-white/60 mb-1.5" />
              <p className="text-[8px] font-medium text-gray-800">{dish.name}</p>
              <p className="text-[7px] text-gray-500">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Info bar */}
      <div className="px-5 pb-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <div>
          <p className="text-[7px] text-gray-400">Open today</p>
          <p className="text-[8px] text-gray-700">12:00 – 22:00</p>
        </div>
        <div className="text-right">
          <p className="text-[7px] text-gray-400">Reservations</p>
          <p className="text-[8px] text-gray-700">+27 21 555 0142</p>
        </div>
      </div>
    </div>
  )
}

function TabletSite() {
  return (
    <div className="h-full bg-slate-50 overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-blue-900 flex items-center justify-center">
            <span className="text-[7px] text-white font-bold">M</span>
          </div>
          <span className="text-[10px] font-semibold text-slate-900">Mokoena & Associates</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[8px] text-slate-500">Practice Areas</span>
          <span className="text-[8px] text-slate-500">Our Team</span>
          <span className="text-[8px] text-slate-500">Insights</span>
          <span className="text-[8px] bg-blue-900 text-white px-2.5 py-1 rounded">Consult</span>
        </div>
      </div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 px-5 py-6">
        <p className="text-[7px] uppercase tracking-widest text-blue-300 mb-2">Trusted legal counsel since 2005</p>
        <h2 className="font-serif text-lg text-white leading-tight mb-2">Protecting your<br />rights and interests.</h2>
        <p className="text-[8px] text-slate-300 mb-4 max-w-[220px]">Commercial law, litigation and corporate advisory services for businesses and individuals across South Africa.</p>
        <div className="flex gap-2">
          <span className="text-[8px] bg-blue-600 text-white px-3 py-1.5 rounded">Schedule consultation</span>
          <span className="text-[8px] border border-slate-500 text-slate-300 px-3 py-1.5 rounded">Our services</span>
        </div>
      </div>
      {/* Practice areas */}
      <div className="px-4 py-4">
        <p className="text-[7px] uppercase tracking-wider text-slate-400 mb-2.5">Practice areas</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { title: 'Commercial Law', icon: '⚖' },
            { title: 'Litigation', icon: '📋' },
            { title: 'Corporate Advisory', icon: '🏢' },
            { title: 'Employment Law', icon: '👥' },
          ].map((area) => (
            <div key={area.title} className="bg-white rounded-lg p-2.5 border border-gray-100">
              <span className="text-sm">{area.icon}</span>
              <p className="text-[8px] font-medium text-slate-800 mt-1">{area.title}</p>
              <p className="text-[7px] text-slate-400 mt-0.5">Learn more →</p>
            </div>
          ))}
        </div>
      </div>
      {/* Stats */}
      <div className="px-4 pb-4 flex gap-3">
        {[
          { num: '18+', label: 'Years' },
          { num: '500+', label: 'Cases' },
          { num: '98%', label: 'Success' },
        ].map((stat) => (
          <div key={stat.label} className="flex-1 bg-white rounded-lg p-2 text-center border border-gray-100">
            <p className="text-[11px] font-bold text-blue-900">{stat.num}</p>
            <p className="text-[7px] text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneSite() {
  return (
    <div className="h-full bg-gray-950 overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-red-500" />
          <span className="text-[9px] font-bold text-white tracking-wider">IRON TEMPLE</span>
        </div>
        <div className="flex gap-1">
          <div className="w-4 h-0.5 bg-white/60 rounded" />
          <div className="w-4 h-0.5 bg-white/60 rounded" />
          <div className="w-4 h-0.5 bg-white/60 rounded" />
        </div>
      </div>
      {/* Hero */}
      <div className="px-4 pt-4 pb-6">
        <p className="text-[7px] uppercase tracking-widest text-red-400 mb-1.5">No excuses. Just results.</p>
        <h2 className="text-lg font-black text-white leading-tight mb-2">FORGE YOUR<br /><span className="text-red-500">STRONGEST</span><br />SELF.</h2>
        <p className="text-[8px] text-gray-400 mb-4">Premium training facilities. Expert coaches. A community that pushes you further.</p>
        <div className="bg-red-600 rounded-lg py-2 text-center">
          <span className="text-[9px] font-bold text-white">START FREE TRIAL</span>
        </div>
      </div>
      {/* Classes */}
      <div className="px-4 pb-3">
        <p className="text-[7px] uppercase tracking-wider text-gray-500 mb-2">Today&apos;s classes</p>
        <div className="space-y-1.5">
          {[
            { time: '06:00', name: 'HIIT Blast', trainer: 'Coach Dave', spots: '3 spots left' },
            { time: '08:30', name: 'Strength', trainer: 'Coach Amy', spots: '8 spots left' },
            { time: '17:00', name: 'Boxing', trainer: 'Coach Mike', spots: '5 spots left' },
          ].map((cls) => (
            <div key={cls.time} className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2 border border-gray-800">
              <div className="text-center">
                <p className="text-[8px] font-bold text-white">{cls.time}</p>
              </div>
              <div className="w-px h-6 bg-gray-700" />
              <div className="flex-1">
                <p className="text-[8px] font-medium text-white">{cls.name}</p>
                <p className="text-[7px] text-gray-500">{cls.trainer}</p>
              </div>
              <span className="text-[7px] text-red-400">{cls.spots}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Membership */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-r from-red-900/40 to-gray-900 rounded-lg p-3 border border-red-900/30">
          <p className="text-[7px] uppercase tracking-wider text-red-400 mb-1">Membership</p>
          <p className="text-[11px] font-bold text-white">R499<span className="text-[7px] text-gray-400 font-normal">/month</span></p>
          <p className="text-[7px] text-gray-400 mt-1">Unlimited classes · All facilities</p>
        </div>
      </div>
    </div>
  )
}

function BrowserFrame({
  children,
  url,
  className,
  rounded = 'rounded-xl',
}: {
  children: React.ReactNode
  url: string
  className?: string
  rounded?: string
}) {
  return (
    <div className={`${rounded} overflow-hidden shadow-2xl border border-white/[0.08] bg-[#111114] ${className ?? ''}`}>
      <div className={`flex items-center gap-1.5 px-3 py-2 bg-[#1c1c22] border-b border-white/[0.06] ${rounded.replace('rounded-', 'rounded-t-')}`}>
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="ml-2 text-[9px] text-white/25 truncate font-mono">{url}</span>
      </div>
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export function HeroShowcase() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #4361EE 0%, transparent 70%)',
            left: '10%',
            top: '10%',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
            right: '5%',
            bottom: '15%',
          }}
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 20, -25, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Three devices side by side */}
      <div className="relative z-10 flex items-end justify-center gap-4 sm:gap-6 w-full max-w-[680px] px-4">
        {/* Desktop */}
        <motion.div
          className="flex-1 max-w-[300px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <BrowserFrame url="osteria.co.za" rounded="rounded-lg">
            <div className="aspect-[16/11]">
              <DesktopSite />
            </div>
          </BrowserFrame>
          <p className="text-center mt-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/25">Desktop</span>
          </p>
        </motion.div>

        {/* Tablet */}
        <motion.div
          className="flex-1 max-w-[230px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <BrowserFrame url="mokoena-law.co.za" rounded="rounded-xl">
            <div className="aspect-[4/5]">
              <TabletSite />
            </div>
          </BrowserFrame>
          <p className="text-center mt-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/25">Tablet</span>
          </p>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex-1 max-w-[160px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <BrowserFrame url="irontemple.fit" rounded="rounded-2xl">
            <div className="aspect-[9/16]">
              <PhoneSite />
            </div>
          </BrowserFrame>
          <p className="text-center mt-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/25">Phone</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
