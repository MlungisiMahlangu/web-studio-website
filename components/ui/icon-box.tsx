interface IconBoxProps {
  icon: React.ElementType
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function IconBox({ icon: Icon, size = 'md', className }: IconBoxProps) {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  return (
    <div
      className={`rounded-xl bg-blue-tint flex items-center justify-center ${sizeClasses[size]} ${className || ''}`}
    >
      <Icon size={iconSizes[size]} className="text-brand" />
    </div>
  )
}
