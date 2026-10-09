import { Scale, BookOpen, Users, Briefcase, ChevronRight, Shield } from 'lucide-react'

export function SterlingLawDesktop() {
  return (
    <div className="h-full bg-[#fafbfd] text-[#1a1f36]" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-16 py-5 bg-white border-b border-[#e5e7f0]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#1a1f36] flex items-center justify-center">
            <Scale size={14} className="text-white" />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-tight">Sterling & Associates</span>
            <p className="text-[9px] text-[#6b7294] tracking-wider uppercase">Attorneys at Law</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-xs text-[#6b7294]">Practice Areas</span>
          <span className="text-xs text-[#6b7294]">Our Team</span>
          <span className="text-xs text-[#6b7294]">Insights</span>
          <span className="text-xs text-[#6b7294]">Contact</span>
          <span className="text-xs bg-[#1a1f36] text-white px-5 py-2.5 rounded tracking-wider">Consultation</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-16 py-20 bg-gradient-to-b from-[#0f1629] to-[#1a1f36] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative grid grid-cols-5 gap-12 items-center">
          <div className="col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <Shield size={12} className="text-blue-400" />
              <p className="text-[10px] tracking-[0.25em] uppercase text-blue-300">Trusted counsel since 2005</p>
            </div>
            <h1 className="text-4xl leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Protecting your rights<br />and interests.
            </h1>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-md">
              Commercial law, litigation and corporate advisory services for businesses and individuals across South Africa.
            </p>
            <div className="flex gap-4">
              <span className="text-xs bg-blue-600 text-white px-6 py-3 rounded tracking-wider">Schedule consultation</span>
              <span className="text-xs border border-white/20 text-white/70 px-6 py-3 rounded tracking-wider">Our services</span>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-3">
            {[
              { icon: Scale, title: 'Commercial Law' },
              { icon: BookOpen, title: 'Litigation' },
              { icon: Briefcase, title: 'Corporate Advisory' },
              { icon: Users, title: 'Employment Law' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="bg-white/5 rounded-lg p-4 border border-white/5">
                <Icon size={18} className="text-blue-400 mb-2" />
                <p className="text-[10px] font-medium">{title}</p>
                <p className="text-[9px] text-white/30 mt-1">Learn more <ChevronRight size={8} className="inline" /></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial area */}
      <div className="px-16 py-12 bg-white border-b border-[#e5e7f0]">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={14} className="text-[#6b7294]" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b7294]">Our approach</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: 'Personal attention', text: 'Every client receives direct partner involvement from intake to resolution.' },
            { title: 'Clear communication', text: 'Plain-language advice with transparent fee structures and regular updates.' },
            { title: 'Practical solutions', text: 'Strategic counsel focused on outcomes that protect your interests.' },
          ].map(({ title, text }) => (
            <div key={title} className="border-l-2 border-blue-600/30 pl-5">
              <p className="text-sm font-semibold mb-2">{title}</p>
              <p className="text-xs text-[#6b7294] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact bar */}
      <div className="px-16 py-5 bg-[#f5f6fa] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-[10px] text-[#6b7294]">Johannesburg · Cape Town · Durban</span>
        </div>
        <span className="text-[10px] text-[#6b7294]">info@sterlinglaw.co.za</span>
      </div>

      <div className="absolute bottom-3 right-4">
        <span className="text-[8px] tracking-wider uppercase text-[#6b7294]/40 bg-[#6b7294]/5 px-2 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}

export function SterlingLawTablet() {
  return (
    <div className="h-full bg-[#fafbfd] text-[#1a1f36]" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-[#e5e7f0]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#1a1f36] flex items-center justify-center">
            <Scale size={12} className="text-white" />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-tight">Sterling & Associates</span>
            <p className="text-[8px] text-[#6b7294] tracking-wider uppercase">Attorneys at Law</p>
          </div>
        </div>
        <span className="text-[10px] bg-[#1a1f36] text-white px-4 py-2 rounded tracking-wider">Consultation</span>
      </div>

      {/* Hero */}
      <div className="relative px-8 py-12 bg-gradient-to-b from-[#0f1629] to-[#1a1f36] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '35px 35px',
        }} />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={10} className="text-blue-400" />
            <p className="text-[9px] tracking-[0.25em] uppercase text-blue-300">Trusted counsel since 2005</p>
          </div>
          <h1 className="text-3xl leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Protecting your rights<br />and interests.
          </h1>
          <p className="text-xs text-white/50 leading-relaxed mb-6 max-w-md">
            Commercial law, litigation and corporate advisory services for businesses and individuals across South Africa.
          </p>
          <div className="flex gap-3">
            <span className="text-[11px] bg-blue-600 text-white px-5 py-2.5 rounded tracking-wider">Schedule consultation</span>
            <span className="text-[11px] border border-white/20 text-white/70 px-5 py-2.5 rounded tracking-wider">Our services</span>
          </div>
        </div>
      </div>

      {/* Practice areas */}
      <div className="px-8 py-8 bg-white border-b border-[#e5e7f0]">
        <div className="flex items-center gap-3 mb-5">
          <BookOpen size={12} className="text-[#6b7294]" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b7294]">Practice areas</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Scale, title: 'Commercial Law' },
            { icon: BookOpen, title: 'Litigation' },
            { icon: Briefcase, title: 'Corporate Advisory' },
            { icon: Users, title: 'Employment Law' },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="bg-[#f5f6fa] rounded-lg p-4 border border-[#e5e7f0]">
              <Icon size={16} className="text-blue-600 mb-2" />
              <p className="text-xs font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div className="px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b7294]">Our approach</p>
        </div>
        <div className="space-y-3">
          {[
            { title: 'Personal attention', text: 'Direct partner involvement from intake to resolution.' },
            { title: 'Clear communication', text: 'Plain-language advice with transparent fees.' },
          ].map(({ title, text }) => (
            <div key={title} className="border-l-2 border-blue-600/30 pl-4">
              <p className="text-xs font-semibold mb-1">{title}</p>
              <p className="text-[10px] text-[#6b7294] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 py-4 border-t border-[#e5e7f0]">
        <span className="text-[10px] text-[#6b7294]">Johannesburg · Cape Town · Durban</span>
      </div>

      <div className="absolute bottom-3 right-4">
        <span className="text-[8px] tracking-wider uppercase text-[#6b7294]/40 bg-[#6b7294]/5 px-2 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}

export function SterlingLawPhone() {
  return (
    <div className="h-full bg-[#fafbfd] text-[#1a1f36]" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-[#e5e7f0]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#1a1f36] flex items-center justify-center">
            <Scale size={10} className="text-white" />
          </div>
          <span className="text-xs font-semibold">Sterling & Associates</span>
        </div>
        <span className="text-[9px] bg-[#1a1f36] text-white px-2.5 py-1 rounded">Consult</span>
      </div>

      {/* Hero */}
      <div className="relative px-4 py-8 bg-gradient-to-b from-[#0f1629] to-[#1a1f36] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="relative">
          <p className="text-[8px] tracking-[0.25em] uppercase text-blue-300 mb-3">Trusted counsel since 2005</p>
          <h1 className="text-xl leading-tight mb-3" style={{ fontFamily: 'Georgia, serif' }}>Protecting your rights and interests.</h1>
          <p className="text-[10px] text-white/50 leading-relaxed mb-5">
            Commercial law, litigation and corporate advisory services across South Africa.
          </p>
          <span className="text-[10px] bg-blue-600 text-white px-4 py-2 rounded tracking-wider">Schedule consultation</span>
        </div>
      </div>

      {/* Practice areas */}
      <div className="px-4 py-5">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#6b7294] mb-3">Practice areas</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Scale, title: 'Commercial' },
            { icon: BookOpen, title: 'Litigation' },
            { icon: Briefcase, title: 'Corporate' },
            { icon: Users, title: 'Employment' },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="bg-white rounded-lg p-3 border border-[#e5e7f0]">
              <Icon size={14} className="text-blue-600 mb-1.5" />
              <p className="text-[10px] font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-3 border-t border-[#e5e7f0]">
        <span className="text-[9px] text-[#6b7294]">JHB · CPT · DBN</span>
      </div>

      <div className="absolute bottom-2 right-3">
        <span className="text-[7px] tracking-wider uppercase text-[#6b7294]/40 bg-[#6b7294]/5 px-1.5 py-0.5 rounded">Sample design</span>
      </div>
    </div>
  )
}
