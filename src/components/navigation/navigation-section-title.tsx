import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type NavigationSectionTitleProps = ComponentProps<'h3'>
export const NavigationSectionTitle = ({
  className,
  ...props
}: NavigationSectionTitleProps) => {
  return (
    <h3
      className={cn(
        'text-xs font-semibold uppercase tracking-widest',
        className
      )}
      {...props}
    />
  )
}
