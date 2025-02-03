import React from 'react';

const useNotAvailable = (list, message, svgPath) => {
  if (list.length === 0) {
    return (
        <section className="flex items-center h-screen p-10">
        <div className="container flex flex-col items-center ">
            <div className="flex flex-col gap-6 max-w-md text-center">
                <div className='mb-5'>
                    <img className='w-full max-w-md'  src={svgPath} alt="svg" />
                </div>
                <p className="text-2xl md:text-3xl dark:text-gray-300">{message}</p>
            </div>
        </div>
    </section>
    );
  }
  return null;
};

export default useNotAvailable;
