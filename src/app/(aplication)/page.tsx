import { Suspense } from 'react'
import { MovieListSkeleton } from './movies/components/movie-list-skeleton'
import { MovieList } from './movies/components/movie-list'
import { Divider } from '@/components/ui/divider'

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <h2 className="mb-2 text-xl font-semibold tracking-tight">
          Nos cinemas
        </h2>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList category="now_playing" />
        </Suspense>
      </section>

      <Divider />

      <section>
        <h2 className="mb-2 text-xl font-semibold tracking-tight">Em alta</h2>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList category="popular" />
        </Suspense>
      </section>

      <Divider />

      <section>
        <div className="flex items-start gap-4">
          <h2 className="mb-2 text-xl font-semibold leading-none tracking-tight">
            Mais votados
          </h2>
        </div>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList category="top_rated" />
        </Suspense>
      </section>

      <Divider />

      <section>
        <h2 className="mb-2 text-xl font-semibold tracking-tight">Em breve</h2>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList category="upcoming" />
        </Suspense>
      </section>
    </main>
  )
}
