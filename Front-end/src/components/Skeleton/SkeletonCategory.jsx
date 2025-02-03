const SkeletonCategory = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="hidden md:flex flex-col items-center justify-center w-1/4 border-r space-y-4 p-6">
          <div className="bg-gray-200 h-10 w-32 rounded-md mb-4"></div>
          <div className="flex space-x-4">
            <div className="p-2 bg-gray-200 rounded-full size-10"></div>
            <div className="p-2 bg-gray-200 rounded-full size-10"></div>
          </div>
        </div>

        <div
          className="w-full md:w-3/4 overflow-x-auto flex flex-nowrap"
        >
          <div className="flex flex-nowrap space-x-4 px-4 py-2">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 size-20 md:size-32 flex flex-col items-center justify-center p-3 md:p-2 animate-pulse"
              >
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div className="mt-2 bg-gray-300 h-4 w-24 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCategory;
