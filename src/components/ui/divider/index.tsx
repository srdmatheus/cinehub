import { cn } from '@/utils/cn'

type DividerProps = {
  className?: string
}
export const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={cn('flex w-full border-t border-primary/60 py-4', className)}
    />
  )
}
