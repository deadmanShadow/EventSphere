import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const EventCardsSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="group relative overflow-hidden border-0 shadow-lg p-2">
          {/* Image Skeleton */}
          <div className="relative h-56 overflow-hidden bg-gray-100 rounded-t-md">
            <Skeleton className="h-full w-full" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="absolute bottom-2 right-2">
              <Skeleton className="h-8 w-12" />
            </div>
          </div>

          <CardHeader className="-mt-2 space-y-2">
            <div className="flex items-start justify-between">
              <div className="space-y-2 w-full">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </CardHeader>

          <CardContent className="pb-2 -mt-4 space-y-3">
            <div className="space-y-2">
              <div className="flex items-center">
                <Skeleton className="h-4 w-4 mr-3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="flex items-center">
                <Skeleton className="h-4 w-4 mr-3" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <div className="flex items-center">
                <Skeleton className="h-4 w-4 mr-3" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-2 w-full rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4 w-full">
              <Skeleton className="h-11 w-1/2 rounded-md" />
              <Skeleton className="h-11 w-1/2 rounded-md" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const HostCardsSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Skeleton className="h-20 w-20 rounded-full" />
              <div className="space-y-2 flex flex-col items-center w-full">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
              <Skeleton className="h-5 w-1/4" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const CategoryCardsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div 
          key={i} 
          className="h-[120px] p-6 flex flex-col items-center justify-center space-y-3 bg-white/10 backdrop-blur-sm border border-gray-400/30 rounded-md animate-pulse"
        >
          <Skeleton className="h-6 w-24 bg-gray-400/50" />
          <Skeleton className="h-4 w-16 bg-gray-400/30" />
        </div>
      ))}
    </div>
  );
};
