import { Backdrop } from '@/types/backdrops'
import { Credits } from '@/types/credits'
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

export const getBackdrops = async ({
  id
}: {
  id: number
}): Promise<Backdrop[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${APIKey}`
  )

  if (!response.ok) {
    throw new Error('Falha ao carregar')
  }

  const { backdrops }: { backdrops: Backdrop[] } = await response.json()

  return backdrops
}

export const getCredits = async ({ id }: { id: number }): Promise<Credits> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey}&language=pt-br`
  )

  const data = await response.json()

  return data
}

export const getMovieByQuery = async ({
  query
}: {
  query: string
}): Promise<Movie[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}&language=pt-br`
  )

  const { results }: { results: Movie[] } = await response.json()

  return results
}
