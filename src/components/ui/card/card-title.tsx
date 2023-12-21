import { forwardRef } from 'react'

import { cn } from '@/utils/cn'

export const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-medium leading-none tracking-tight text-secondary',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'
