import { MovieCardSkeleton } from '@/components/ui/movie-card'

export const MoviesListSkeleton = () => {
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
