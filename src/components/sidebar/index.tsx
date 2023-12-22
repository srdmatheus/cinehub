import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { Navigation } from '../navigation'
import { BadgePlus, Clapperboard, Heart, Star, User } from 'lucide-react'
import { Divider } from '../ui/divider'

type SidebarProps = ComponentProps<'aside'>

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={cn(
        'flex h-screen w-80 flex-col gap-8 border-r border-accent px-4 pt-12',
        className
      )}
    >
      <Link href="/">
        <Image src="/logo.svg" width={180} height={60} alt="Logo" />
      </Link>

      <Navigation.Root>
        <Navigation.Section>
          <Navigation.Title>Perfil</Navigation.Title>
          <Navigation.List>
            <Navigation.Item href={'/'}>
              <User />
              Minha lista
            </Navigation.Item>
          </Navigation.List>
        </Navigation.Section>

        <Divider />

        <Navigation.Section>
          <Navigation.Title>Filmes</Navigation.Title>
          <Navigation.List>
            <Navigation.Item href={'/'}>
              <BadgePlus />
              Lançamentos
            </Navigation.Item>
            <Navigation.Item href={'/'}>
              <Clapperboard />
              Em alta
            </Navigation.Item>
            <Navigation.Item href={'/'}>
              <Star />
              Melhores avaliados
            </Navigation.Item>
          </Navigation.List>
        </Navigation.Section>
      </Navigation.Root>

      <footer className="flex items-center justify-center gap-1 justify-self-end text-xs">
        <span>Feito com </span> <Heart size={12} className="text-accent" />
        <span>
          por{' '}
          <Link
            href="https://linkedin.com/in/srdmatheus"
            target="_blank"
            className="hover:underline"
          >
            Matheus Ribeiro
          </Link>
        </span>
      </footer>
    </aside>
  )
}
