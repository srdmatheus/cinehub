import { MovieCardSkeleton } from '@/components/ui/movie-card'

export const MovieListSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-between gap-8">
      {[...new Array(12)].map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  )
}
