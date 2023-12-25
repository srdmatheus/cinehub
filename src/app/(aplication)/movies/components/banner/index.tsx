import { Image } from '@/components/image'
import { getMovieDetails } from '@/functions/fetch-api'

type BannerProps = {
  movieId: number
}
export const Banner = async ({ movieId }: BannerProps) => {
  const { backdrop_path, title } = await getMovieDetails({ id: movieId })
  const imageUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`

  return (
    <div
      className={`relative flex h-[300px] w-full items-center justify-start overflow-hidden rounded-md border border-background md:h-[600px]`}
    >
      <Image src={imageUrl} alt={title} quality={80} fill className="" />

      <div className="absolute left-0 top-0 z-10 h-full w-[1600px] bg-gradient-to-t from-background from-10% via-background/90 via-20% to-background/10" />
    </div>
  )
}
