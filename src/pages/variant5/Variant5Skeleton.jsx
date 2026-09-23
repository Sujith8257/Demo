import Skeleton from "../../components/skeleton/Skeleton.jsx";

export default function Variant5Skeleton() {
  return (
    <div className="w-full pt-28 pb-16 bg-[#F7F6F2]">
      {/* Hero banner skeleton fitting page */}
      <div className="w-full">
        <Skeleton variant="pulse" className="w-full h-[70vh] sm:h-[80vh] lg:h-[calc(100vh-92px)] min-h-[520px]" />
      </div>


      {/* Categories skeleton */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-10 sm:py-12">
        <Skeleton variant="pulse" className="h-6 w-48 mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Skeleton variant="pulse" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full" />
              <Skeleton variant="pulse" className="h-4 w-24" />
              <Skeleton variant="pulse" className="h-3 w-16" />
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
