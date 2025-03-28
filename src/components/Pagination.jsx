import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center justify-center space-x-2 mt-8">

            {/* Prev Button */}

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md text-sm font-medium cursor-pointer ${currentPage === 1 ? "bg-gray-300 text-slate-50 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-600"
                    }`}
            >
                Prev
            </button>


            {/* Current Button */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded-md text-sm font-medium cursor-pointer ${currentPage === page ? "bg-blue-600 text-white" : "bg-blue-200 hover:bg-gray-300"
                        }`}
                >
                    {page}
                </button>
            ))}


            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md text-sm font-medium cursor-pointer ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed text-slate-50" : "bg-red-500 text-white hover:bg-red-600"
                    }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
