import { forwardRef } from 'react'

import { cn } from '@/utils/cn'

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col gap-2 p-4 z-10 rounded-md backdrop-blur-md bg-background/30 ',
      className
    )}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'
