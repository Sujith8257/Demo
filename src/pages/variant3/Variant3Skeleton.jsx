import Skeleton from "../../components/skeleton/Skeleton.jsx";

/** Variant 3 skeleton — wave style (dark midnight theme) */
export default function Variant3Skeleton() {
  return (
    <div className="w-full pt-28 bg-surface">
      {/* Hero: dark full-bleed midnight */}
      <div
        className="min-h-[600px] flex flex-col justify-end p-12 gap-4"
        style={{ background: "linear-gradient(160deg,#10131B 60%,#1e2235)" }}
      >
        <Skeleton variant="wave" className="h-4 w-28" style={{ background: "rgba(255,255,255,0.08)" }} />
        <Skeleton variant="wave" className="h-14 w-2/3" style={{ background: "rgba(255,255,255,0.08)" }} />
        <Skeleton variant="wave" className="h-14 w-1/2" style={{ background: "rgba(255,255,255,0.08)" }} />
        <Skeleton variant="wave" className="h-5 w-96 max-w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="flex gap-3 mt-2">
          <Skeleton variant="wave" className="h-11 w-36" rounded="rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
          <Skeleton variant="wave" className="h-11 w-28" rounded="rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>
      </div>

      {/* Search dock bar */}
      <div className="py-6 px-8">
        <Skeleton variant="wave" className="h-14 w-full max-w-2xl mx-auto" rounded="rounded-2xl" />
      </div>

      {/* Bestsellers — 4 contrast cards */}
      <div className="py-10 px-8">
        <Skeleton variant="wave" className="h-7 w-48 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton variant="wave" className="h-64 w-full" rounded="rounded-xl" />
              <Skeleton variant="wave" className="h-4 w-3/4" />
              <Skeleton variant="wave" className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Collection carousel — 4 col */}
      <div className="py-10 px-8 bg-surface-container-low">
        <div className="flex items-center justify-between mb-6">
          <Skeleton variant="wave" className="h-7 w-48" />
          <div className="flex gap-2">
            <Skeleton variant="wave" className="h-10 w-10" rounded="rounded-full" />
            <Skeleton variant="wave" className="h-10 w-10" rounded="rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <Skeleton key={i} variant="wave" className="h-72 w-full" rounded="rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Artisan + Reviews */}
      <div className="py-10 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton variant="wave" className="h-64 w-full" rounded="rounded-2xl" />
          <div className="flex flex-col gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex gap-3">
                <Skeleton variant="wave" className="h-10 w-10 flex-shrink-0" rounded="rounded-full" />
                <div className="flex-1 flex flex-col gap-2">
                  <Skeleton variant="wave" className="h-4 w-1/2" />
                  <Skeleton variant="wave" className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
