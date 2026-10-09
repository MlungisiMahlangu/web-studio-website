import { MapPin, Clock, Phone, Utensils, Flame, Leaf } from 'lucide-react'

export function EmberAndOakDesktop() {
  return (
    <div className="h-full bg-[#1a1410] text-white" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-16 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center">
            <Flame size={14} className="text-white" />
          </div>
          <span className="text-lg tracking-wide">Ember & Oak</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-xs tracking-widest uppercase text-white/50">Menu</span>
          <span className="text-xs tracking-widest uppercase text-white/50">Story</span>
          <span className="text-xs tracking-widest uppercase text-white/50">Events</span>
          <span className="text-xs tracking-widest uppercase text-white/50">Gallery</span>
          <span className="text-xs bg-amber-600 text-white px-5 py-2 rounded-full tracking-wider">Reserve</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-16 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-orange-950/30" />
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-amber-600/10 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Wood-fired kitchen · Cape Town</p>
            <h1 className="text-5xl leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Where fire<br />meets flavour.
            </h1>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
              Seasonal ingredients, open-flame cooking and an intimate dining experience rooted in the Mediterranean tradition.
            </p>
            <div className="flex gap-4">
              <span className="text-xs bg-amber-600 text-white px-6 py-3 rounded-full tracking-wider">Book a table</span>
              <span className="text-xs border border-white/20 text-white/70 px-6 py-3 rounded-full tracking-wider">View menu</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-800/60 to-orange-950/80 border border-white/5 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-600/20 flex items-center justify-center">
                <Flame size={48} className="text-amber-400/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu preview */}
      <div className="px-16 py-12 border-t border-white/5">
        <div className="flex items-center gap-3 mb-8">
          <Utensils size={14} className="text-amber-400" />
          <p className="text-xs tracking-[0.2em] uppercase text-white/40">Signature dishes</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { name: 'Wood-roasted bone marrow', price: 'R185', desc: 'Herb gremolata, sourdough', color: 'from-amber-900/40 to-amber-950/60' },
            { name: 'Charred octopus', price: 'R220', desc: 'Romesco, crispy potatoes', color: 'from-orange-900/40 to-red-950/60' },
            { name: 'Burnt basque cheesecake', price: 'R95', desc: 'Fig compote, honeycomb', color: 'from-yellow-900/40 to-amber-950/60' },
          ].map((dish) => (
            <div key={dish.name} className={`rounded-xl bg-gradient-to-br ${dish.color} border border-white/5 p-5`}>
              <div className="w-full aspect-[4/3] rounded-lg bg-white/5 mb-4 flex items-center justify-center">
                <Leaf size={24} className="text-white/10" />
              </div>
              <p className="text-sm font-medium mb-1">{dish.name}</p>
              <p className="text-xs text-white/40 mb-2">{dish.desc}</p>
              <p className="text-sm text-amber-400">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="px-16 py-8 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white/40">
          <MapPin size={12} />
          <span className="text-xs">21 Bree Street, Cape Town</span>
        </div>
        <div className="flex items-center gap-3 text-white/40">
          <Clock size={12} />
          <span className="text-xs">Tue–Sun · 12:00–22:00</span>
        </div>
        <div className="flex items-center gap-3 text-white/40">
          <Phone size={12} />
          <span className="text-xs">+27 21 555 0142</span>
        </div>
      </div>

      {/* Sample tag */}
      <div className="absolute bottom-3 right-4">
        <span className="text-[8px] tracking-wider uppercase text-white/20 bg-white/5 px-2 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}

export function EmberAndOakPhone() {
  return (
    <div className="h-full bg-[#1a1410] text-white" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center">
            <Flame size={10} className="text-white" />
          </div>
          <span className="text-sm tracking-wide">Ember & Oak</span>
        </div>
        <span className="text-[10px] bg-amber-600 text-white px-3 py-1.5 rounded-full">Reserve</span>
      </div>

      {/* Hero */}
      <div className="relative px-5 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-orange-950/30" />
        <div className="absolute top-5 right-5 w-32 h-32 rounded-full bg-amber-600/10 blur-2xl" />
        <div className="relative">
          <p className="text-[9px] tracking-[0.3em] uppercase text-amber-400 mb-4">Wood-fired kitchen</p>
          <h1 className="text-3xl leading-tight mb-4">Where fire<br />meets flavour.</h1>
          <p className="text-xs text-white/50 leading-relaxed mb-6 max-w-[260px]">
            Seasonal ingredients, open-flame cooking and an intimate dining experience.
          </p>
          <div className="flex gap-3">
            <span className="text-[10px] bg-amber-600 text-white px-5 py-2.5 rounded-full tracking-wider">Book a table</span>
            <span className="text-[10px] border border-white/20 text-white/70 px-5 py-2.5 rounded-full tracking-wider">Menu</span>
          </div>
        </div>
      </div>

      {/* Dishes */}
      <div className="px-5 py-6 border-t border-white/5">
        <p className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-4">Signature dishes</p>
        <div className="space-y-3">
          {[
            { name: 'Bone marrow', price: 'R185', color: 'from-amber-900/40 to-amber-950/60' },
            { name: 'Charred octopus', price: 'R220', color: 'from-orange-900/40 to-red-950/60' },
            { name: 'Basque cheesecake', price: 'R95', color: 'from-yellow-900/40 to-amber-950/60' },
          ].map((dish) => (
            <div key={dish.name} className={`flex items-center gap-3 rounded-xl bg-gradient-to-r ${dish.color} border border-white/5 p-3`}>
              <div className="w-12 h-12 rounded-lg bg-white/5 flex-shrink-0 flex items-center justify-center">
                <Leaf size={16} className="text-white/10" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium">{dish.name}</p>
              </div>
              <p className="text-xs text-amber-400">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4 border-t border-white/5 space-y-2">
        <div className="flex items-center gap-2 text-white/40">
          <MapPin size={10} />
          <span className="text-[10px]">21 Bree Street, Cape Town</span>
        </div>
        <div className="flex items-center gap-2 text-white/40">
          <Clock size={10} />
          <span className="text-[10px]">Tue–Sun · 12:00–22:00</span>
        </div>
      </div>

      <div className="absolute bottom-2 right-3">
        <span className="text-[7px] tracking-wider uppercase text-white/20 bg-white/5 px-1.5 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}
