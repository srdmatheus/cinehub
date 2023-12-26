import { Sidebar } from '@/components/sidebar'
import { ReactNode } from 'react'

type LayoutApplicationProps = {
  children: ReactNode
}

export default function LayoutApplication({
  children
}: LayoutApplicationProps) {
  return (
    <>
      <Sidebar className="sticky left-0 top-0 hidden md:flex" />
      <main className="w-full overflow-x-hidden px-4">{children}</main>
    </>
  )
}
