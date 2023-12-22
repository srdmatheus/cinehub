import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'

type NavigationContainerProps = ComponentProps<'nav'>
export const NavigationContainer = ({
  className,
  ...props
}: NavigationContainerProps) => {
  return <nav className={cn('', className)} {...props} />
}
