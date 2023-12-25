import { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

type SkeletonProps = ComponentProps<'div'>
export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  )
}
