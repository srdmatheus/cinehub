import { Title } from '@/components/ui/title'
import { MovieListSkeleton } from '../components/movie-list/movie-list-skeleton'
import { Suspense } from 'react'
import { MovieList } from '../components/movie-list'
import { getMoviesByCategory } from '@/functions/fetch-api'

export default async function Popular() {
  const movies = await getMoviesByCategory({ category: 'popular' })

  return (
    <>
      <Title variant="h2" className="mb-4">
        Em alta
      </Title>
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieList movies={movies} />
      </Suspense>
    </>
  )
}
