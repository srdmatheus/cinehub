import { Divider } from '@/components/ui/divider'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="relative mt-4 flex w-full flex-col gap-4">
      <Skeleton className="h-[600px]" />

      <div className="flex flex-col gap-4">
        <Skeleton className="h-16 w-96" />
        <Skeleton className="h-8 w-40" />

        <div className="mt-4 flex gap-2">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-6 w-28" />
        </div>
      </div>

      <div className="flex gap-4">
        <Skeleton className="h-24 w-32" />
        <Skeleton className="h-24 w-32" />
        <Skeleton className="h-24 w-32" />
      </div>

      <Divider />

      <div>
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-8 w-40" />
      </div>

      <div>
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-8 w-40" />
      </div>

      <div>
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-8 w-40" />
      </div>
    </div>
  )
}
