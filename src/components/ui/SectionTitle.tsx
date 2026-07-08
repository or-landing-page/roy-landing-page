import { cn } from '@/lib/utils'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-6xl font-black text-text-primary leading-tight">
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="text-gold">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && <p className="text-text-muted text-lg mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
