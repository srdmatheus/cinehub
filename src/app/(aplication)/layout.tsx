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
      <Sidebar className="fixed left-0 top-0 ml-16" />
      <main className="ml-80 w-full overflow-x-hidden px-4">{children}</main>
    </>
  )
}
