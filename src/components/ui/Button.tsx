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
        'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background',
        {
          'bg-gold hover:bg-gold-light text-text-primary hover:shadow-lg shadow-md shadow-gold/30 active:scale-95':
            variant === 'primary',
          'border-2 border-gold text-text-primary hover:bg-gold/10 hover:border-gold-light focus:border-gold-light':
            variant === 'outline',
          'text-text-muted hover:text-text-primary focus:text-text-primary': variant === 'ghost',
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
