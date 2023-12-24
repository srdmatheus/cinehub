import { getMovieDetails } from '@/functions/fetch-api'

type MovieDetailsProps = {
  params: {
    movieId: number
  }
}
export default async function MovieDetails({ params }: MovieDetailsProps) {
  const data = await getMovieDetails({ id: params.movieId })

  return <div>{JSON.stringify(data)}</div>
}
