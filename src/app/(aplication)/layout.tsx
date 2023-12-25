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
      <Sidebar className="left-0 top-0 ml-16 hidden md:fixed" />
      <main className="w-full overflow-x-hidden px-4 md:ml-80">{children}</main>
    </>
  )
}
