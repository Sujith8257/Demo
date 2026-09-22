import Skeleton from "../../components/skeleton/Skeleton.jsx";

export default function Variant5Skeleton() {
  return (
    <div className="w-full pt-28 pb-16 bg-surface">
      {/* Hero 16:6 banner skeleton */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <Skeleton variant="pulse" className="w-full aspect-[16/6] rounded-xl" />
        <div className="flex justify-center gap-2 mt-4">
          <Skeleton variant="pulse" className="h-2 w-8" rounded="rounded-full" />
          <Skeleton variant="pulse" className="h-2 w-2" rounded="rounded-full" />
          <Skeleton variant="pulse" className="h-2 w-2" rounded="rounded-full" />
        </div>
      </div>


      {/* Categories circular skeleton */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Skeleton variant="pulse" className="h-6 w-44 mb-5" />
        <div className="flex items-center justify-between gap-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton variant="pulse" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
              <Skeleton variant="pulse" className="h-3 w-16" />
              <Skeleton variant="pulse" className="h-2 w-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Deals skeleton */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Skeleton variant="pulse" className="h-6 w-36 mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-3 border border-outline-variant/20 rounded-lg bg-surface-container-lowest flex flex-col gap-2">
              <Skeleton variant="pulse" className="h-36 w-full rounded" />
              <Skeleton variant="pulse" className="h-3.5 w-3/4" />
              <Skeleton variant="pulse" className="h-3 w-1/2" />
              <Skeleton variant="pulse" className="h-4 w-20 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
