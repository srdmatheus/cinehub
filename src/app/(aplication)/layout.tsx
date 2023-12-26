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
      <main className="flex-1 overflow-x-hidden px-4 py-8">{children}</main>
    </>
  )
}
