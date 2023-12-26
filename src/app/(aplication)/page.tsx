import { Title } from '@/components/ui/title'
import { Search } from './movies/components/search'

export default function Home() {
  return (
    <>
      <Title variant="h1" className="mb-0.5 leading-none">
        Discover
      </Title>
      <p className="mb-6 text-base italic">
        Pesquise qualquer nome, encontre qualquer filme!
      </p>

      <Search />
    </>
  )
}
