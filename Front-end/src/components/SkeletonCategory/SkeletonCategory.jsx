import React from "react";

const SkeletonCategory = () => {
  return (
    <div className="flex flex-row lg:flex-col gap-2 mb-6 animate-pulse">
      {/* View All Skeleton */}
      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-200 min-w-[150px] lg:min-w-full h-14"></div>

      {/* Category Skeletons */}
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-200 min-w-[150px] lg:min-w-full h-14">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCategory;
