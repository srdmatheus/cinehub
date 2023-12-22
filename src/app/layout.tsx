import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/sidebar'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CineHub',
  description:
    'O CineHub é uma fonte valiosa para os amantes do cinema e da televisão que desejam descobrir, explorar e acompanhar os títulos mais populares, os ranqueados e os lançamentos mais recentes.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} relative flex bg-background text-primary`}
      >
        <Sidebar className="fixed left-0 top-0" />
        <main className="ml-80 px-4">{children}</main>
      </body>
    </html>
  )
}
