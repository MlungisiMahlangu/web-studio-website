export default function Loading() {
  return (
    <div className="min-h-[60svh] flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-line border-t-ink animate-spin" />
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          Loading
        </p>
      </div>
    </div>
  )
}
