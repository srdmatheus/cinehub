import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

export const buttonVariants = cva(
  'px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent hover:bg-accent/90 text-background',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        link: 'text-primary underline-offset-4 hover:underline'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
