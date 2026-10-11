interface StatCardProps {
  value: string
  label: string
  icon?: React.ElementType
  className?: string
}

export function StatCard({ value, label, icon: Icon, className }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl bg-white border border-line p-6 shadow-card ${className || ''}`}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center mb-4">
          <Icon size={20} className="text-brand" />
        </div>
      )}
      <p className="text-display-sm font-extrabold text-navy leading-tight">{value}</p>
      <p className="mt-2 text-sm text-body">{label}</p>
    </div>
  )
}
