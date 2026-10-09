import { Dumbbell, Clock, Zap, Trophy, ChevronRight, Heart } from 'lucide-react'

export function ForgeAthleticDesktop() {
  return (
    <div className="h-full bg-[#0a0a0a] text-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-16 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center">
            <Zap size={14} className="text-white" />
          </div>
          <span className="text-sm font-black tracking-[0.15em] uppercase">Forge Athletic</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-[10px] text-white/40 tracking-wider uppercase">Classes</span>
          <span className="text-[10px] text-white/40 tracking-wider uppercase">Coaches</span>
          <span className="text-[10px] text-white/40 tracking-wider uppercase">Membership</span>
          <span className="text-[10px] text-white/40 tracking-wider uppercase">Schedule</span>
          <span className="text-[10px] bg-red-600 text-white px-5 py-2 rounded tracking-wider font-bold">Join now</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-16 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-black" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-red-600/5 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-red-400 mb-4">No excuses. Just results.</p>
            <h1 className="text-5xl font-black leading-none uppercase mb-6">
              Forge your<br />
              <span className="text-red-500">strongest</span><br />
              self.
            </h1>
            <p className="text-xs text-white/40 leading-relaxed mb-8 max-w-sm">
              Premium training facilities. Expert coaches. A community that pushes you further than you thought possible.
            </p>
            <div className="flex gap-4">
              <span className="text-xs bg-red-600 text-white px-6 py-3 rounded font-bold tracking-wider">Start free trial</span>
              <span className="text-xs border border-white/15 text-white/60 px-6 py-3 rounded tracking-wider">View classes</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-red-950/40 to-black border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)',
              }} />
              <div className="relative text-center">
                <Dumbbell size={64} className="text-red-500/30 mx-auto mb-4" />
                <p className="text-xs text-white/20 tracking-wider uppercase">Train hard</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classes */}
      <div className="px-16 py-10 border-t border-white/5">
        <div className="flex items-center gap-3 mb-6">
          <Clock size={14} className="text-red-400" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Today&apos;s classes</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { time: '06:00', name: 'HIIT Blast', trainer: 'Coach Dave', spots: '3 spots left' },
            { time: '08:30', name: 'Strength Lab', trainer: 'Coach Amy', spots: '8 spots left' },
            { time: '17:00', name: 'Boxing', trainer: 'Coach Mike', spots: '5 spots left' },
          ].map((cls) => (
            <div key={cls.time} className="bg-white/[0.03] rounded-xl p-5 border border-white/5">
              <p className="text-lg font-black text-white mb-1">{cls.time}</p>
              <p className="text-sm font-medium mb-1">{cls.name}</p>
              <p className="text-[10px] text-white/30 mb-3">{cls.trainer}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-red-400">{cls.spots}</span>
                <ChevronRight size={12} className="text-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Membership */}
      <div className="px-16 py-8 border-t border-white/5">
        <div className="flex items-center justify-between bg-gradient-to-r from-red-950/30 to-transparent rounded-xl p-6 border border-red-900/20">
          <div>
            <p className="text-[10px] tracking-wider uppercase text-red-400 mb-1">Unlimited membership</p>
            <p className="text-2xl font-black">R499<span className="text-xs text-white/30 font-normal">/month</span></p>
            <p className="text-[10px] text-white/30 mt-1">All classes · All facilities · No contract</p>
          </div>
          <span className="text-xs bg-red-600 text-white px-6 py-3 rounded font-bold tracking-wider">Join now</span>
        </div>
      </div>

      <div className="absolute bottom-3 right-4">
        <span className="text-[8px] tracking-wider uppercase text-white/15 bg-white/5 px-2 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}

export function ForgeAthleticTablet() {
  return (
    <div className="h-full bg-[#0a0a0a] text-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center">
            <Zap size={12} className="text-white" />
          </div>
          <span className="text-sm font-black tracking-[0.15em] uppercase">Forge Athletic</span>
        </div>
        <span className="text-[10px] bg-red-600 text-white px-4 py-2 rounded tracking-wider font-bold">Join now</span>
      </div>

      {/* Hero */}
      <div className="relative px-8 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-black" />
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-red-600/5 blur-3xl" />
        <div className="relative">
          <p className="text-[9px] tracking-[0.3em] uppercase text-red-400 mb-4">No excuses. Just results.</p>
          <h1 className="text-4xl font-black leading-none uppercase mb-4">
            Forge your<br />
            <span className="text-red-500">strongest</span><br />
            self.
          </h1>
          <p className="text-xs text-white/40 leading-relaxed mb-6 max-w-md">
            Premium training facilities. Expert coaches. A community that pushes you further.
          </p>
          <div className="flex gap-3">
            <span className="text-[11px] bg-red-600 text-white px-5 py-2.5 rounded font-bold tracking-wider">Start free trial</span>
            <span className="text-[11px] border border-white/15 text-white/60 px-5 py-2.5 rounded tracking-wider">View classes</span>
          </div>
        </div>
      </div>

      {/* Classes */}
      <div className="px-8 py-8 border-t border-white/5">
        <div className="flex items-center gap-3 mb-5">
          <Clock size={12} className="text-red-400" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Today&apos;s classes</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { time: '06:00', name: 'HIIT Blast', trainer: 'Coach Dave', spots: '3 spots left' },
            { time: '08:30', name: 'Strength Lab', trainer: 'Coach Amy', spots: '8 spots left' },
            { time: '17:00', name: 'Boxing', trainer: 'Coach Mike', spots: '5 spots left' },
          ].map((cls) => (
            <div key={cls.time} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
              <p className="text-base font-black text-white mb-1">{cls.time}</p>
              <p className="text-sm font-medium mb-1">{cls.name}</p>
              <p className="text-[10px] text-white/30 mb-2">{cls.trainer}</p>
              <span className="text-[10px] text-red-400">{cls.spots}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Membership */}
      <div className="px-8 py-6 border-t border-white/5">
        <div className="bg-gradient-to-r from-red-950/30 to-transparent rounded-xl p-5 border border-red-900/20">
          <p className="text-[10px] tracking-wider uppercase text-red-400 mb-1">Unlimited membership</p>
          <p className="text-xl font-black">R499<span className="text-xs text-white/30 font-normal">/month</span></p>
          <p className="text-[10px] text-white/30 mt-1">All classes · All facilities · No contract</p>
        </div>
      </div>

      <div className="absolute bottom-3 right-4">
        <span className="text-[8px] tracking-wider uppercase text-white/15 bg-white/5 px-2 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}

export function ForgeAthleticPhone() {
  return (
    <div className="h-full bg-[#0a0a0a] text-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center">
            <Zap size={10} className="text-white" />
          </div>
          <span className="text-[10px] font-black tracking-[0.15em] uppercase">Forge</span>
        </div>
        <span className="text-[9px] bg-red-600 text-white px-2.5 py-1 rounded font-bold">Join</span>
      </div>

      {/* Hero */}
      <div className="relative px-4 py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-black" />
        <div className="relative">
          <p className="text-[8px] tracking-[0.3em] uppercase text-red-400 mb-3">No excuses. Just results.</p>
          <h1 className="text-2xl font-black leading-none uppercase mb-4">
            Forge your<br /><span className="text-red-500">strongest</span><br />self.
          </h1>
          <p className="text-[10px] text-white/40 leading-relaxed mb-5">
            Premium training facilities. Expert coaches.
          </p>
          <span className="text-[10px] bg-red-600 text-white px-4 py-2.5 rounded font-bold tracking-wider">Start free trial</span>
        </div>
      </div>

      {/* Classes */}
      <div className="px-4 py-4 border-t border-white/5">
        <p className="text-[8px] tracking-[0.2em] uppercase text-white/40 mb-3">Today&apos;s classes</p>
        <div className="space-y-2">
          {[
            { time: '06:00', name: 'HIIT Blast', trainer: 'Coach Dave', spots: '3 left' },
            { time: '08:30', name: 'Strength', trainer: 'Coach Amy', spots: '8 left' },
            { time: '17:00', name: 'Boxing', trainer: 'Coach Mike', spots: '5 left' },
          ].map((cls) => (
            <div key={cls.time} className="flex items-center gap-3 bg-white/[0.03] rounded-lg px-3 py-2.5 border border-white/5">
              <p className="text-[10px] font-black">{cls.time}</p>
              <div className="w-px h-5 bg-white/10" />
              <div className="flex-1">
                <p className="text-[10px] font-medium">{cls.name}</p>
                <p className="text-[8px] text-white/30">{cls.trainer}</p>
              </div>
              <span className="text-[8px] text-red-400">{cls.spots}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Membership */}
      <div className="px-4 py-3 border-t border-white/5">
        <div className="bg-gradient-to-r from-red-950/30 to-transparent rounded-lg p-3 border border-red-900/20">
          <p className="text-[8px] tracking-wider uppercase text-red-400 mb-0.5">Unlimited</p>
          <p className="text-sm font-black">R499<span className="text-[8px] text-white/30 font-normal">/month</span></p>
        </div>
      </div>

      <div className="absolute bottom-2 right-3">
        <span className="text-[7px] tracking-wider uppercase text-white/15 bg-white/5 px-1.5 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}
