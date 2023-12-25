import { Suspense } from 'react'
import { MovieListSkeleton } from './movies/components/movie-list/movie-list-skeleton'
import { MovieList } from './movies/components/movie-list'

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <section>
        <h2 className="mb-2 text-3xl font-semibold tracking-tighter">
          Nos cinemas
        </h2>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList category="now_playing" />
        </Suspense>
      </section>

      <section>
        <h2 className="mb-2 text-3xl font-semibold tracking-tighter">
          Em alta
        </h2>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList category="popular" />
        </Suspense>
      </section>

      <section>
        <div className="flex items-start gap-4">
          <h2 className="mb-2 text-3xl font-semibold tracking-tighter">
            Mais votados
          </h2>
        </div>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList category="top_rated" />
        </Suspense>
      </section>
    </main>
  )
}
