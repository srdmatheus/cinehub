import { cn } from '@/utils/cn'
import { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
  className?: string
}
export const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={cn(
        'rounded bg-primary/10 px-2 py-1 text-center text-xs',
        className
      )}
    >
      {children}
    </span>
  )
}
