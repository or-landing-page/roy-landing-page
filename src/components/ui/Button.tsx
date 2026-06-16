import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer',
        {
          'bg-gold hover:bg-gold-light text-background hover:scale-105 shadow-lg shadow-gold/20':
            variant === 'primary',
          'border border-gold/50 hover:border-gold text-gold hover:bg-gold/5':
            variant === 'outline',
          'text-text-muted hover:text-text-primary': variant === 'ghost',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
