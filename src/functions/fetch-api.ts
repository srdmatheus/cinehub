import { MovieDetails } from '@/types/details'
import { MovieListCategory, Movie } from '@/types/movies'

const APIKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

export const getMoviesByCategory = async ({
  category
}: MovieListCategory): Promise<Movie[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${APIKey}&language=pt-BR&page=1`
  )

  if (!response.ok) {
    throw new Error('Falha ao carregar')
  }

  const { results }: { results: Movie[] } = await response.json()

  return results
}

export const getMovieDetails = async ({ id }: { id: number }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`
  )

  if (!response.ok) {
    throw new Error('Falha ao carregar')
  }

  const data: MovieDetails = await response.json()

  return data
}

export const getBackdrops = async ({ id }: { id: number }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${APIKey}`
  )

  if (!response.ok) {
    throw new Error('Falha ao carregar')
  }

  const { backdrops } = await response.json()

  return backdrops
}
