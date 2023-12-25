import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

export const CardContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex h-[375px] w-[250px] flex-col justify-end overflow-hidden rounded-lg p-2 shadow-sm',
      className
    )}
    {...props}
  />
))

CardContainer.displayName = 'CardContainer'
