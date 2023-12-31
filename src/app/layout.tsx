import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cinehub',
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
        className={`${inter.className} relative mx-auto flex overflow-x-hidden bg-background text-primary md:px-16`}
      >
        {children}
      </body>
    </html>
  )
}
