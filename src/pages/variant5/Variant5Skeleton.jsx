import Skeleton from "../../components/skeleton/Skeleton.jsx";

/** Variant 5 skeleton — pulse style */
export default function Variant5Skeleton() {
  return (
    <div className="w-full pt-28 bg-surface">
      {/* Hero: sweeping strap ribbon layout */}
      <div className="relative min-h-[580px] flex flex-col justify-center gap-5 px-12 overflow-hidden bg-surface-container-low">
        <Skeleton variant="pulse" className="h-4 w-24" />
        <Skeleton variant="pulse" className="h-14 w-3/4" />
        <Skeleton variant="pulse" className="h-14 w-1/2" />
        <Skeleton variant="pulse" className="h-5 w-96 max-w-full" />
        <div className="flex gap-3 mt-2">
          <Skeleton variant="pulse" className="h-11 w-36" rounded="rounded-full" />
          <Skeleton variant="pulse" className="h-11 w-28" rounded="rounded-full" />
        </div>
        {/* Ribbon accent */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30"
          style={{ background: "linear-gradient(135deg, transparent 40%, #e3e1e8 100%)" }}
        />
      </div>

      {/* Trending search scroller */}
      <div className="py-5 px-8">
        <div className="flex gap-2 overflow-hidden">
          {[1,2,3,4,5,6,7].map(i => (
            <Skeleton key={i} variant="pulse" className="h-8 w-24 flex-shrink-0" rounded="rounded-full" />
          ))}
        </div>
      </div>

      {/* Category discovery crops */}
      <div className="py-10 px-8">
        <Skeleton variant="pulse" className="h-7 w-48 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton variant="pulse" className="h-52 w-full" rounded="rounded-2xl" />
              <Skeleton variant="pulse" className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>

      {/* Campaign carousel — 4 cards */}
      <div className="py-10 px-8 bg-surface-container-low">
        <div className="flex items-center justify-between mb-6">
          <Skeleton variant="pulse" className="h-7 w-48" />
          <Skeleton variant="pulse" className="h-5 w-32" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col gap-3 p-4 rounded-2xl bg-surface-container-lowest">
              <Skeleton variant="pulse" className="h-5 w-20" rounded="rounded-full" />
              <Skeleton variant="pulse" className="h-7 w-3/4" />
              <Skeleton variant="pulse" className="h-4 w-full" />
              <Skeleton variant="pulse" className="h-4 w-5/6" />
              <Skeleton variant="pulse" className="h-4 w-1/2 mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Bestsellers horizontal rail */}
      <div className="py-10 px-8">
        <div className="flex items-center justify-between mb-6">
          <Skeleton variant="pulse" className="h-7 w-40" />
          <Skeleton variant="pulse" className="h-5 w-20" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex-shrink-0 w-52 flex flex-col gap-2">
              <Skeleton variant="pulse" className="h-64 w-full" rounded="rounded-xl" />
              <Skeleton variant="pulse" className="h-4 w-3/4" />
              <Skeleton variant="pulse" className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
