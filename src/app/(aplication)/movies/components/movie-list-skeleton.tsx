import { MovieCardSkeleton } from '@/components/ui/movie-card'

export const MovieListSkeleton = () => {
  return (
    <div className="flex gap-6">
      {
        <>
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
        </>
      }
    </div>
  )
}
