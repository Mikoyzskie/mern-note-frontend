const Skeleton = (() => {
    return (


        <div role="status" className="max-w-sm p-4 border border-gray-300 rounded shadow animate-pulse md:p-6 dark:border-gray-300 h-[300px]">

            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            <div className="flex items-center mt-4 space-x-3">

                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-300 rounded-full dark:bg-gray-300"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>


    )
})

export default Skeleton