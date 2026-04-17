import { Skeleton } from "@/components/ui/skeleton";

export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      {/* Image placeholder */}
      <div className="aspect-video w-full overflow-hidden">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      {/* Content area */}
      <div className="flex flex-col space-y-3 p-4">
        {/* Category and Date row */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>

        {/* Title - 2 lines */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        {/* Read more link */}
        <Skeleton className="mt-2 h-4 w-24" />
      </div>
    </div>
  );
}