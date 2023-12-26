import { Title } from '@/components/ui/title'
import { Suspense } from 'react'
import { MovieList } from '../components/movie-list'
import { MovieListSkeleton } from '../components/movie-list/movie-list-skeleton'
import { getMoviesByCategory } from '@/functions/fetch-api'

export default async function NowPlaying() {
  const movies = await getMoviesByCategory({ category: 'now_playing' })

  return (
    <>
      <Title variant="h2" className="mb-4">
        Nos cinemas
      </Title>
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieList movies={movies} />
      </Suspense>
    </>
  )
}
