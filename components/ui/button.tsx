"use client"
import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
const sizes: Record<Size, string> = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
}
const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-ring shadow-sm',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-ring shadow-sm',
  ghost: 'bg-transparent text-primary hover:bg-accent hover:text-accent-foreground focus:ring-ring',
  danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-ring shadow-sm',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, ...props },
  ref
) {
  return (
    <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...props} />
  )
})

Button.displayName = 'Button'

export default Button


