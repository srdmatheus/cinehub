import { forwardRef } from 'react'

import { cn } from '@/utils/cn'

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'z-10 flex flex-col gap-2 rounded-md bg-background/30 p-4 backdrop-blur-md ',
      className
    )}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'
