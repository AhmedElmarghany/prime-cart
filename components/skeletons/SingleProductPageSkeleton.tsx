import { Skeleton } from "../ui/skeleton"

const SingleProductPageSkeleton = () => {
  return (
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-14 py-8 md:py-12">
      
      {/* Image panel skeleton */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <Skeleton className="w-full aspect-square rounded-2xl" />
        <div className="flex gap-2 overflow-x-auto p-1">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Info panel skeleton */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        {/* Title + description */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex items-center gap-1.5">
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        {/* Price + stock */}
        <div className="flex flex-wrap items-center gap-3 py-4 border-t border-b border-border">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <Skeleton className="flex-1 h-11 rounded-full" />
          <Skeleton className="h-11 w-11 rounded-full" />
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 p-4 border-t border-b border-border">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-24" />
          ))}
        </div>

        {/* Delivery info cards */}
        <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-start gap-4 p-4">
              <Skeleton className="h-10 w-10 rounded-xl shrink-0" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 
  )
}

export default SingleProductPageSkeleton