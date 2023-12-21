import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

export const CardContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex flex-col h-[375px] w-[250px] rounded-lg shadow-sm overflow-hidden justify-end p-2',
      className
    )}
    {...props}
  />
))

CardContainer.displayName = 'CardContainer'
