import React from 'react'

const ProductCardLoader = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* Image skeleton */}
      <div className="h-52 w-full relative">
        <div className="h-52 w-full bg-gray-200 animate-pulse rounded-md dark:bg-gray-700" />
        {/* Heart icon placeholder */}
        <div className="absolute top-0 right-0 p-2">
          <div className="h-5 w-5 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700" />
        </div>
      </div>

      <div className="pt-6">
        {/* Badges skeleton */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="h-5 w-16 bg-gray-200 animate-pulse rounded dark:bg-gray-700" />
          <div className="h-5 w-20 bg-gray-200 animate-pulse rounded dark:bg-gray-700" />
        </div>

        {/* Title skeleton */}
        <div className="h-10 w-full bg-gray-200 animate-pulse rounded dark:bg-gray-700" />

        {/* Price and button skeleton */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="h-8 w-20 bg-gray-200 animate-pulse rounded dark:bg-gray-700" />
          <div className="h-10 w-28 bg-gray-200 animate-pulse rounded-lg dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

export default ProductCardLoader
