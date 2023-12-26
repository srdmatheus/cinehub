import { Image } from '@/components/image'
import { getMovieDetails } from '@/functions/fetch-api'

type BannerProps = {
  movieId: number
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const Banner = async ({ movieId }: BannerProps) => {
  const { backdrop_path, title } = await getMovieDetails({ id: movieId })
  const imageUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`

  return (
    <div
      className={`relative flex h-[300px] w-full items-center justify-start overflow-hidden rounded-md border border-background md:h-[600px]`}
    >
      <Image
        src={imageUrl}
        alt={title}
        quality={80}
        fill
        className=""
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />

      <div className="absolute left-0 top-0 z-10 h-full w-[1600px] bg-gradient-to-t from-background from-10% via-background/90 via-20% to-background/10" />
    </div>
  )
}
