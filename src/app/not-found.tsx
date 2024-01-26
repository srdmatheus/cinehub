import { Title } from '@/components/ui/title'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-4">
      <Title variant="h1">Página não encontrada</Title>
      <Link href="/" className="underline transition-all hover:text-accent">
        Voltar para a página principal
      </Link>
    </div>
  )
}
