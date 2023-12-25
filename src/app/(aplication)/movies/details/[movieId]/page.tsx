import {
  getBackdrops,
  getCredits,
  getMovieDetails
} from '@/functions/fetch-api'
import { Banner } from '../../components/banner'
import { BackButton } from '../../components/back-button'

import { Divider } from '@/components/ui/divider'
import { CastList } from '../../components/cast-list'
import { Director } from '../../components/director'
import { Backdrops } from '../../components/backdrops'
import { Title } from '@/components/ui/title'
import { BadgeList } from '../../components/badge-list'
import { Details } from '../../components/details'
import { HeaderDetails } from '../../components/header-details'

type MovieDetailsProps = {
  params: {
    movieId: number
  }
}
export default async function MovieDetails({ params }: MovieDetailsProps) {
  const { movieId } = params

  const [movieDetails, credits, backdrops] = await Promise.all([
    getMovieDetails({ id: movieId }),
    getCredits({ id: movieId }),
    getBackdrops({ id: movieId })
  ])

  return (
    <main className="relative mt-4 flex w-full flex-col gap-4">
      <Banner movieId={movieDetails.id} />
      <BackButton className="absolute left-8 top-8 z-20" />

      <HeaderDetails data={movieDetails} />

      <BadgeList movieId={movieId} />

      <Divider />

      <section>
        <Title variant="h3">Detalhes</Title>
        <Details data={movieDetails} />
      </section>

      <Divider />

      <section>
        <Title variant="h3">Diretor (a)</Title>
        <Director data={credits} />
      </section>

      <Divider />

      <section>
        <Title variant="h3">Atores</Title>
        <CastList data={credits} />
      </section>

      <Divider />

      <section>
        <Title variant="h3">Galeria</Title>
        <Backdrops data={backdrops} />
      </section>
    </main>
  )
}
