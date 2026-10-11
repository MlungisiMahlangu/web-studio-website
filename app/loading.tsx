export default function Loading() {
  return (
    <div className="min-h-[60svh] flex items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-line border-t-brand animate-spin" />
        <p className="text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.14em' }}>
          Loading
        </p>
      </div>
    </div>
  )
}
