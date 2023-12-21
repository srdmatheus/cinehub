import { forwardRef } from 'react'

import { cn } from '@/utils/cn'

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-primary text-xs font-normal', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'
