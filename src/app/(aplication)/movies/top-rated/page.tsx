import { Title } from '@/components/ui/title'
import { Suspense } from 'react'
import { MovieListSkeleton } from '../components/movie-list/movie-list-skeleton'
import { MovieList } from '../components/movie-list'
import { getMoviesByCategory } from '@/functions/fetch-api'

export default async function TopRated() {
  const movies = await getMoviesByCategory({ category: 'top_rated' })

  return (
    <>
      <Title variant="h1" className="mb-4">
        Mais votados
      </Title>
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieList movies={movies} />
      </Suspense>
    </>
  )
}
