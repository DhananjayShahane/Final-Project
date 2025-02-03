import React from 'react';

const useNotAvailable = (list, message, svgPath) => {
  if (list.length === 0) {
    return (
        <section class="flex items-center h-screen p-10">
        <div class="container flex flex-col items-center ">
            <div class="flex flex-col gap-6 max-w-md text-center">
                <div>
                    <img src={svgPath} alt="svg" />
                </div>
                <p class="text-2xl md:text-3xl dark:text-gray-300">{message}</p>
            </div>
        </div>
    </section>
    );
  }
  return null;
};

export default useNotAvailable;
