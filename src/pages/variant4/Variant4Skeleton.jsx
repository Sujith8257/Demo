import Skeleton from "../../components/skeleton/Skeleton.jsx";

/** Variant 4 skeleton — shimmer style, asymmetric layout */
export default function Variant4Skeleton() {
  return (
    <div className="w-full pt-28 bg-surface">
      {/* Hero: 60/40 asymmetric split */}
      <div className="grid grid-cols-1 md:grid-cols-5 min-h-[560px]">
        <div className="md:col-span-3 flex flex-col justify-center gap-4 p-12">
          <Skeleton variant="shimmer" className="h-4 w-28" />
          <Skeleton variant="shimmer" className="h-14 w-3/4" />
          <Skeleton variant="shimmer" className="h-14 w-2/3" />
          <Skeleton variant="shimmer" className="h-5 w-full" />
          <Skeleton variant="shimmer" className="h-5 w-4/5" />
          <div className="flex gap-3 mt-4">
            <Skeleton variant="shimmer" className="h-11 w-36" rounded="rounded-full" />
            <Skeleton variant="shimmer" className="h-11 w-28" rounded="rounded-full" />
          </div>
        </div>
        <Skeleton variant="shimmer" className="md:col-span-2 h-full min-h-[320px]" rounded="rounded-none" />
      </div>

      {/* Category mosaic — 3 blocks asymmetric */}
      <div className="py-10 px-8">
        <Skeleton variant="shimmer" className="h-7 w-48 mb-6" />
        <div className="grid grid-cols-3 gap-4 h-80">
          <Skeleton variant="shimmer" className="row-span-2 h-full" rounded="rounded-2xl" />
          <Skeleton variant="shimmer" className="h-full" rounded="rounded-2xl" />
          <Skeleton variant="shimmer" className="h-full" rounded="rounded-2xl" />
          <Skeleton variant="shimmer" className="col-span-2 h-full" rounded="rounded-2xl" />
        </div>
      </div>

      {/* New arrivals horizontal rail */}
      <div className="py-10 px-8 bg-surface-container-low">
        <div className="flex items-center justify-between mb-6">
          <Skeleton variant="shimmer" className="h-7 w-40" />
          <Skeleton variant="shimmer" className="h-5 w-20" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex-shrink-0 w-56 flex flex-col gap-2">
              <Skeleton variant="shimmer" className="h-72 w-full" rounded="rounded-xl" />
              <Skeleton variant="shimmer" className="h-4 w-3/4" />
              <Skeleton variant="shimmer" className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Dual feature + occasion gallery */}
      <div className="py-10 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton variant="shimmer" className="h-80 w-full" rounded="rounded-2xl" />
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <Skeleton key={i} variant="shimmer" className="h-36 w-full" rounded="rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
