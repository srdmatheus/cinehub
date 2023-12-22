import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type NavigationSectionProps = ComponentProps<'div'>
export const NavigationSection = ({
  className,
  ...props
}: NavigationSectionProps) => {
  return <div className={cn('mb-4', className)} {...props} />
}
