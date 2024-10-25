import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
    const skeletonCount = 12;

  return (
    <div className="flex flex-col space-y-3">
      {Array.from({ length: skeletonCount }, (_, index) => (
        <Skeleton key={index} className="bg-gray-200 h-10 w-full" />
      ))}
    </div>
  );
}
