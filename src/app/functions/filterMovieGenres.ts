import { genres } from '@/constants/genre'
import { Movie } from '@/types/movies'

export const filterMovieGenres = (movie: Movie) => {
  const { genre_ids } = movie

  const genreList = genre_ids.reduce((acc: string[], item) => {
    acc = [...acc, genres.find((genre) => genre.id === item)?.name || '']
    return acc
  }, [])

  return genreList
}
