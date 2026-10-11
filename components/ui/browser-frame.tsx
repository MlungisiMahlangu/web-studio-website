import Image from 'next/image'

interface BrowserFrameProps {
  url: string
  children?: React.ReactNode
  screenshot?: string
  screenshotAlt?: string
  bg?: string
  priority?: boolean
  sizes?: string
}

export function BrowserFrame({
  url,
  children,
  screenshot,
  screenshotAlt,
  bg = '#f8fafc',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 600px',
}: BrowserFrameProps) {
  let hostname = url
  try {
    hostname = new URL(url).hostname
  } catch {
    // keep original
  }

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-card border border-line"
      style={{ background: bg }}
    >
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10">
        <span className="w-3 h-3 rounded-full bg-red-400/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <span className="w-3 h-3 rounded-full bg-blue-400/60" />
        <span className="ml-3 text-xs text-body truncate">{hostname}</span>
      </div>
      {/* Content */}
      <div className="p-4">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={screenshotAlt || `${hostname} website screenshot`}
            width={1200}
            height={800}
            className="w-full rounded-lg shadow-sm"
            priority={priority}
            sizes={sizes}
          />
        ) : (
          children
        )}
      </div>
    </div>
  )
}
