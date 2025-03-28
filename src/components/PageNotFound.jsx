import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-8xl font-bold text-blue-600">404</h1>
            <h2 className="text-2xl text-gray-700 mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-500 mt-2 text-center">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Go Back Home
            </Link>
        </div>
    )
}

export default PageNotFound;
