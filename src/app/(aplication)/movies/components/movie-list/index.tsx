import { filterMovieGenres } from '@/app/functions/filterMovieGenres'
import { MovieCard } from '@/components/ui/movie-card'

import { getMoviesByCategory } from '@/functions/fetch-api'
import { MovieListCategory } from '@/types/movies'

export const MovieList = async ({ category }: MovieListCategory) => {
  const movies = await getMoviesByCategory({ category })

  return (
    <div className="flex flex-wrap justify-between gap-8">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          url={`/movies/details/${movie.id}`}
          title={movie.title}
          genre={filterMovieGenres(movie).join(', ')}
          releaseYear={movie.release_date.slice(0, 4)}
          poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      ))}
    </div>
  )
}
