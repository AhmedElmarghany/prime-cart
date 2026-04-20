import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="text-sm border rounded-2xl border-border group bg-card">
      {/* Image section */}
      <div className="relative overflow-hidden rounded-t-2xl bg-secondary">
        <Skeleton className="w-full h-64 object-contain" />
        
        {/* Top menu placeholder */}
        <div className="absolute top-2 right-2 z-10 flex gap-1">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        
        {/* Status badge placeholder */}
        <div className="absolute top-4 left-2 z-10">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-3 flex flex-col gap-2">
        {/* Categories */}
        <Skeleton className="h-3 w-24 uppercase" />
        
        {/* Product name */}
        <Skeleton className="h-4 w-full" />
                
        {/* Stock info */}
        <div className="flex items-center gap-2.5">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-12" />
        </div>
        
        {/* Price */}
        <Skeleton className="h-5 w-28" />
        
        {/* Add to cart button */}
        <Skeleton className="h-9 w-full rounded-full" />
      </div>
    </div>
  );
}