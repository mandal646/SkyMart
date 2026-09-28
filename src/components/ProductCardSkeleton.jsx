import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111]">

      {/* Image Skeleton */}
      <div className="relative h-64 animate-pulse bg-zinc-800">

        {/* Discount */}
        <div className="absolute left-4 top-4 h-6 w-12 rounded-lg bg-zinc-700" />

        {/* Image */}
        <div className="flex h-full items-center justify-center">
          <div className="h-40 w-40 rounded-xl bg-zinc-700" />
        </div>

        {/* Stock */}
        <div className="absolute right-4 top-4 h-6 w-20 rounded-lg bg-zinc-700" />
      </div>

      {/* Details */}
      <div className="animate-pulse p-5">

        {/* Category */}
        <div className="h-3 w-20 rounded bg-zinc-700" />

        {/* Title */}
        <div className="mt-3 space-y-2">
          <div className="h-4 w-full rounded bg-zinc-700" />
          <div className="h-4 w-3/4 rounded bg-zinc-700" />
        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-7 w-14 rounded-lg bg-zinc-700" />
          <div className="h-3 w-20 rounded bg-zinc-700" />
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-7 w-20 rounded bg-zinc-700" />
          <div className="h-4 w-14 rounded bg-zinc-700" />
        </div>

        {/* Button */}
        <div className="mt-5 h-12 w-full rounded-xl bg-zinc-700" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;