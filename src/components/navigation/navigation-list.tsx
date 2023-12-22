import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type NavigationListProps = ComponentProps<'ul'>
export const NavigationList = ({
  className,
  ...props
}: NavigationListProps) => {
  return <ul className={cn('flex flex-col gap-4', className)} {...props} />
}
