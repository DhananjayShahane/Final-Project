const Skeleton = () =>{
    return(
        <>
           <div className="animate-pulse overflow-hidden rounded-lg bg-white h-full max-h-[550px] border border-default-200 p-5">
            <div className="h-64 bg-gray-200 rounded-md mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-md mb-4 w-3/4"></div>
            <div className="h-8 bg-gray-200 rounded-md w-full"></div>
        </div>
        </>
    )
}

export default Skeleton