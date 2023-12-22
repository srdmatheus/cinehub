'use client'

import Link, { LinkProps } from 'next/link'

import { cn } from '@/utils/cn'

type NavigationItemProps = LinkProps & {
  className?: string
  children: React.ReactNode
}

export const NavigationItem = ({
  children,
  href,
  className
}: NavigationItemProps) => {
  return (
    <li>
      <Link
        className={cn(
          'flex h-full w-full gap-2 rounded-md border-l-4 border-transparent px-2 py-3 transition-all hover:border-accent hover:bg-primary/20 hover:text-accent',
          className
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
