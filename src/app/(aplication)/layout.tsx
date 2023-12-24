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
      <Sidebar className="fixed left-0 top-0" />
      <main className="ml-80 overflow-x-hidden px-4">{children}</main>
    </>
  )
}
