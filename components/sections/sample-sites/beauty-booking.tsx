import { Sparkles, Calendar, Star, Scissors, Heart, Clock } from 'lucide-react'

export function LumiereDesktop() {
  return (
    <div className="h-full bg-[#fdf8f5] text-[#2d2226]" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-16 py-5 bg-white border-b border-[#f0e6df]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center">
            <Sparkles size={12} className="text-white" />
          </div>
          <div>
            <span className="text-sm tracking-wide">Lumière Studio</span>
            <p className="text-[8px] text-[#a08b82] tracking-[0.2em] uppercase">Beauty & Wellness</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-xs text-[#a08b82] tracking-wider">Services</span>
          <span className="text-xs text-[#a08b82] tracking-wider">Products</span>
          <span className="text-xs text-[#a08b82] tracking-wider">About</span>
          <span className="text-xs text-[#a08b82] tracking-wider">Journal</span>
          <span className="text-xs bg-[#2d2226] text-white px-5 py-2.5 rounded-full tracking-wider">Book now</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-16 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-pink-50/30" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-rose-400 mb-6">Beauty that feels as good as it looks</p>
            <h1 className="text-4xl leading-tight mb-6">
              Your ritual,<br />
              <em className="text-rose-400">reimagined.</em>
            </h1>
            <p className="text-sm text-[#a08b82] leading-relaxed mb-8 max-w-sm">
              Bespoke treatments tailored to you. Expert therapists. Clean beauty products that care for your skin and the planet.
            </p>
            <div className="flex gap-4">
              <span className="text-xs bg-[#2d2226] text-white px-6 py-3 rounded-full tracking-wider">Book appointment</span>
              <span className="text-xs border border-[#2d2226]/15 text-[#a08b82] px-6 py-3 rounded-full tracking-wider">Our services</span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Facials', icon: Sparkles, color: 'from-rose-100 to-pink-100' },
                { name: 'Massage', icon: Heart, color: 'from-amber-50 to-rose-100' },
                { name: 'Hair', icon: Scissors, color: 'from-pink-100 to-fuchsia-100' },
                { name: 'Nails', icon: Star, color: 'from-violet-100 to-rose-100' },
              ].map(({ name, icon: Icon, color }) => (
                <div key={name} className={`aspect-square rounded-2xl bg-gradient-to-br ${color} flex flex-col items-center justify-center border border-white/50`}>
                  <Icon size={24} className="text-[#a08b82]/40 mb-2" />
                  <p className="text-xs text-[#2d2226]/60">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-16 py-10 bg-white border-t border-[#f0e6df]">
        <div className="flex items-center gap-3 mb-6">
          <Calendar size={14} className="text-rose-400" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#a08b82]">Popular treatments</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { name: 'Signature Glow Facial', duration: '75 min', price: 'R850', desc: 'Deep cleanse, exfoliation, LED therapy' },
            { name: 'Hot Stone Massage', duration: '60 min', price: 'R720', desc: 'Full body relaxation with basalt stones' },
            { name: 'Gel Manicure', duration: '45 min', price: 'R380', desc: 'Shape, cuticle care, long-lasting colour' },
          ].map((service) => (
            <div key={service.name} className="rounded-xl bg-[#fdf8f5] border border-[#f0e6df] p-5">
              <p className="text-sm font-medium mb-1">{service.name}</p>
              <p className="text-[10px] text-[#a08b82] mb-3">{service.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-[#a08b82]">
                  <Clock size={10} />
                  <span>{service.duration}</span>
                </div>
                <span className="text-xs font-medium">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="px-16 py-4 bg-[#fdf8f5] border-t border-[#f0e6df] flex items-center justify-between">
        <span className="text-[10px] text-[#a08b82]">42 Kloof Street, Gardens, Cape Town</span>
        <span className="text-[10px] text-[#a08b82]">Mon–Sat · 09:00–19:00</span>
      </div>

      <div className="absolute bottom-3 right-4">
        <span className="text-[8px] tracking-wider uppercase text-[#a08b82]/30 bg-[#a08b82]/5 px-2 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}

export function LumiereTablet() {
  return (
    <div className="h-full bg-[#fdf8f5] text-[#2d2226]" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-[#f0e6df]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center">
            <Sparkles size={10} className="text-white" />
          </div>
          <div>
            <span className="text-sm tracking-wide">Lumière Studio</span>
            <p className="text-[8px] text-[#a08b82] tracking-[0.2em] uppercase">Beauty & Wellness</p>
          </div>
        </div>
        <span className="text-[10px] bg-[#2d2226] text-white px-4 py-2 rounded-full tracking-wider">Book now</span>
      </div>

      {/* Hero */}
      <div className="relative px-8 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-pink-50/30" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="relative">
          <p className="text-[10px] tracking-[0.3em] uppercase text-rose-400 mb-4">Beauty that feels as good as it looks</p>
          <h1 className="text-3xl leading-tight mb-4">
            Your ritual,<br />
            <em className="text-rose-400">reimagined.</em>
          </h1>
          <p className="text-xs text-[#a08b82] leading-relaxed mb-6 max-w-md">
            Bespoke treatments tailored to you. Expert therapists. Clean beauty products that care for your skin and the planet.
          </p>
          <div className="flex gap-3">
            <span className="text-[11px] bg-[#2d2226] text-white px-5 py-2.5 rounded-full tracking-wider">Book appointment</span>
            <span className="text-[11px] border border-[#2d2226]/15 text-[#a08b82] px-5 py-2.5 rounded-full tracking-wider">Our services</span>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="px-8 py-8 bg-white border-t border-[#f0e6df]">
        <div className="flex items-center gap-3 mb-5">
          <Calendar size={12} className="text-rose-400" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#a08b82]">Services</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Facials', icon: Sparkles, color: 'from-rose-100 to-pink-100' },
            { name: 'Massage', icon: Heart, color: 'from-amber-50 to-rose-100' },
            { name: 'Hair', icon: Scissors, color: 'from-pink-100 to-fuchsia-100' },
            { name: 'Nails', icon: Star, color: 'from-violet-100 to-rose-100' },
          ].map(({ name, icon: Icon, color }) => (
            <div key={name} className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${color} flex flex-col items-center justify-center border border-white/50`}>
              <Icon size={20} className="text-[#a08b82]/40 mb-2" />
              <p className="text-xs text-[#2d2226]/60">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatments */}
      <div className="px-8 py-6 border-t border-[#f0e6df]">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#a08b82] mb-4">Popular treatments</p>
        <div className="space-y-3">
          {[
            { name: 'Signature Glow Facial', duration: '75 min', price: 'R850', desc: 'Deep cleanse, exfoliation, LED therapy' },
            { name: 'Hot Stone Massage', duration: '60 min', price: 'R720', desc: 'Full body relaxation with basalt stones' },
          ].map((service) => (
            <div key={service.name} className="flex items-center justify-between bg-white rounded-xl p-4 border border-[#f0e6df]">
              <div>
                <p className="text-sm font-medium mb-1">{service.name}</p>
                <p className="text-[10px] text-[#a08b82]">{service.desc}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-medium">{service.price}</span>
                <p className="text-[10px] text-[#a08b82] mt-0.5">{service.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 py-4 border-t border-[#f0e6df]">
        <span className="text-[10px] text-[#a08b82]">42 Kloof Street, Gardens, Cape Town</span>
      </div>

      <div className="absolute bottom-3 right-4">
        <span className="text-[8px] tracking-wider uppercase text-[#a08b82]/30 bg-[#a08b82]/5 px-2 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}

export function LumierePhone() {
  return (
    <div className="h-full bg-[#fdf8f5] text-[#2d2226]" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-[#f0e6df]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center">
            <Sparkles size={8} className="text-white" />
          </div>
          <span className="text-xs tracking-wide">Lumière</span>
        </div>
        <span className="text-[9px] bg-[#2d2226] text-white px-2.5 py-1 rounded-full">Book</span>
      </div>

      {/* Hero */}
      <div className="relative px-4 py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-pink-50/30" />
        <div className="relative">
          <p className="text-[8px] tracking-[0.3em] uppercase text-rose-400 mb-3">Beauty that feels as good as it looks</p>
          <h1 className="text-xl leading-tight mb-3">
            Your ritual,<br /><em className="text-rose-400">reimagined.</em>
          </h1>
          <p className="text-[10px] text-[#a08b82] leading-relaxed mb-5">
            Bespoke treatments tailored to you. Expert therapists. Clean beauty.
          </p>
          <span className="text-[10px] bg-[#2d2226] text-white px-4 py-2.5 rounded-full tracking-wider">Book appointment</span>
        </div>
      </div>

      {/* Services grid */}
      <div className="px-4 py-4 border-t border-[#f0e6df]">
        <p className="text-[8px] tracking-[0.2em] uppercase text-[#a08b82] mb-3">Services</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'Facials', icon: Sparkles, color: 'from-rose-100 to-pink-100' },
            { name: 'Massage', icon: Heart, color: 'from-amber-50 to-rose-100' },
            { name: 'Hair', icon: Scissors, color: 'from-pink-100 to-fuchsia-100' },
            { name: 'Nails', icon: Star, color: 'from-violet-100 to-rose-100' },
          ].map(({ name, icon: Icon, color }) => (
            <div key={name} className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${color} flex flex-col items-center justify-center`}>
              <Icon size={16} className="text-[#a08b82]/40 mb-1" />
              <p className="text-[9px] text-[#2d2226]/60">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatments */}
      <div className="px-4 py-4 border-t border-[#f0e6df]">
        <p className="text-[8px] tracking-[0.2em] uppercase text-[#a08b82] mb-3">Popular</p>
        <div className="space-y-2">
          {[
            { name: 'Signature Glow', duration: '75 min', price: 'R850' },
            { name: 'Hot Stone Massage', duration: '60 min', price: 'R720' },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between bg-white rounded-lg p-3 border border-[#f0e6df]">
              <div>
                <p className="text-[10px] font-medium">{s.name}</p>
                <p className="text-[8px] text-[#a08b82]">{s.duration}</p>
              </div>
              <span className="text-[10px] font-medium">{s.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 right-3">
        <span className="text-[7px] tracking-wider uppercase text-[#a08b82]/30 bg-[#a08b82]/5 px-1.5 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}
