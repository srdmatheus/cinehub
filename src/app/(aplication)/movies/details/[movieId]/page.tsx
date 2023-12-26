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
import { Metadata } from 'next'

type Props = {
  params: { movieId: number }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.movieId

  const movie = await getMovieDetails({ id })

  return {
    title: movie.title
  }
}

export default async function MovieDetails({ params }: Props) {
  const { movieId } = params

  const [movieDetails, credits, backdrops] = await Promise.all([
    getMovieDetails({ id: movieId }),
    getCredits({ id: movieId }),
    getBackdrops({ id: movieId })
  ])

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Banner movieId={movieDetails.id} />
        <BackButton className="absolute left-8 top-8 z-20" />
      </div>

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
    </div>
  )
}
