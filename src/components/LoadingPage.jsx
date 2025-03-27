

const LoadingPage = () => {
    return (

        <div className="flex h-screen w-full items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center space-y-4">
               
                <div className="relative flex items-center justify-center" aria-label="Loading">
                    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50"></div>
                    <div className="absolute h-8 w-8 rounded-full bg-gray-100"></div>
                </div>
                <p className="text-gray-600 text-lg font-semibold">Loading...</p>
            </div>
        </div>)
}

export default LoadingPage;