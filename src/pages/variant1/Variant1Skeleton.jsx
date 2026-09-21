import Skeleton from "../../components/skeleton/Skeleton.jsx";

/** Variant 1 skeleton — shimmer style */
export default function Variant1Skeleton() {
  return (
    <div className="w-full pt-28 bg-surface">
      {/* Hero: 2-column split */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
        <div className="flex flex-col justify-center gap-4 p-12">
          <Skeleton variant="shimmer" className="h-4 w-24" />
          <Skeleton variant="shimmer" className="h-12 w-3/4" />
          <Skeleton variant="shimmer" className="h-12 w-1/2" />
          <Skeleton variant="shimmer" className="h-5 w-full" />
          <Skeleton variant="shimmer" className="h-5 w-5/6" />
          <div className="flex gap-3 mt-4">
            <Skeleton variant="shimmer" className="h-11 w-36" rounded="rounded-full" />
            <Skeleton variant="shimmer" className="h-11 w-28" rounded="rounded-full" />
          </div>
        </div>
        <Skeleton variant="shimmer" className="h-full min-h-[320px]" rounded="rounded-none" />
      </div>

      {/* Category rail */}
      <div className="py-8 px-8">
        <div className="flex gap-3 overflow-hidden">
          {[1,2,3,4,5,6,7].map(i => (
            <Skeleton key={i} variant="shimmer" className="h-10 w-28 flex-shrink-0" rounded="rounded-full" />
          ))}
        </div>
      </div>

      {/* Shop The Edit */}
      <div className="py-10 px-8">
        <Skeleton variant="shimmer" className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton variant="shimmer" className="h-56 w-full" rounded="rounded-xl" />
              <Skeleton variant="shimmer" className="h-4 w-3/4" />
              <Skeleton variant="shimmer" className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee bar */}
      <Skeleton variant="shimmer" className="h-12 w-full mx-0" rounded="rounded-none" />

      {/* Product cards */}
      <div className="py-10 px-8">
        <Skeleton variant="shimmer" className="h-8 w-56 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton variant="shimmer" className="h-48 w-full" rounded="rounded-xl" />
              <Skeleton variant="shimmer" className="h-4 w-3/4" />
              <Skeleton variant="shimmer" className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
