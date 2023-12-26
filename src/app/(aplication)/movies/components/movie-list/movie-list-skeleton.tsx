import { MovieCardSkeleton } from '@/components/ui/movie-card'

export const MovieListSkeleton = () => {
  return (
    <div className="flex gap-6">
      {[...new Array(12)].map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  )
}
