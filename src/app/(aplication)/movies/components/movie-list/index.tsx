import { filterMovieGenres } from '@/functions/filterMovieGenres'
import { MovieCard, MovieCardSkeleton } from '@/components/ui/movie-card'
import { Movie } from '@/types/movies'

type MovieListProps = {
  movies: Movie[]
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-8">
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.poster_path ? (
            <MovieCard
              url={`/movies/details/${movie.id}`}
              title={movie.title}
              genre={filterMovieGenres(movie).join(', ')}
              releaseYear={movie.release_date.slice(0, 4)}
              poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ) : (
            <MovieCardSkeleton />
          )}
        </div>
      ))}
    </div>
  )
}
