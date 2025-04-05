import { Skeleton } from "@/components/ui/skeleton";

export function SectionCardsSkeleton() {
  return (
    <div className="grid h-auto grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Skeleton className="h-48 w-auto rounded-xl" />
      <Skeleton className="h-48 w-auto rounded-xl" />
      <Skeleton className="h-48 w-auto rounded-xl" />
      <Skeleton className="h-48 w-auto rounded-xl" />
    </div>
  );
}
