import Skeleton from "../../components/skeleton/Skeleton.jsx";

/** Variant 2 skeleton — pulse style */
export default function Variant2Skeleton() {
  return (
    <div className="w-full pt-28 bg-surface">
      {/* Hero: centered monumental circular */}
      <div className="flex flex-col items-center justify-center py-20 px-8 gap-6 min-h-[520px] bg-surface-container-low">
        <Skeleton variant="pulse" className="h-4 w-32" />
        <Skeleton variant="pulse" className="h-14 w-2/3" />
        <Skeleton variant="pulse" className="h-14 w-1/2" />
        <Skeleton variant="pulse" className="h-5 w-96 max-w-full" />
        <div className="flex gap-3 mt-2">
          <Skeleton variant="pulse" className="h-11 w-36" rounded="rounded-full" />
          <Skeleton variant="pulse" className="h-11 w-28" rounded="rounded-full" />
        </div>
        {/* Circular bezel graphic */}
        <Skeleton variant="pulse" className="h-64 w-64 mt-4" rounded="rounded-full" />
      </div>

      {/* Category discovery row */}
      <div className="py-10 px-8">
        <Skeleton variant="pulse" className="h-7 w-40 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton variant="pulse" className="h-52 w-full" rounded="rounded-2xl" />
              <Skeleton variant="pulse" className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>

      {/* Trending now — 4 cards */}
      <div className="py-10 px-8 bg-surface-container-low">
        <Skeleton variant="pulse" className="h-7 w-48 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton variant="pulse" className="h-64 w-full" rounded="rounded-xl" />
              <Skeleton variant="pulse" className="h-4 w-3/4" />
              <Skeleton variant="pulse" className="h-4 w-1/2" />
              <Skeleton variant="pulse" className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      </div>

      {/* Editorial bento */}
      <div className="py-10 px-8">
        <Skeleton variant="pulse" className="h-7 w-56 mb-6" />
        <div className="grid grid-cols-3 gap-4 h-96">
          <Skeleton variant="pulse" className="col-span-2 h-full" rounded="rounded-2xl" />
          <div className="flex flex-col gap-4">
            <Skeleton variant="pulse" className="flex-1" rounded="rounded-2xl" />
            <Skeleton variant="pulse" className="flex-1" rounded="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
