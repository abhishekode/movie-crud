import React, { useState } from 'react';

interface PaginationProps {
  total: number;
  getRequestData: (query: { page: number; size: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, getRequestData }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const totalPages = Math.ceil(total / pageSize);

  const changePage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPageNo(pageNumber);
      getRequestData({ page: pageNumber, size: pageSize });
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center space-x-2 p-4 my-14">
      {/* Previous Button */}
      <button
        onClick={() => changePage(pageNo - 1)}
        disabled={pageNo === 1}
        className={`text-sm focus:outline-none px-4 py-2 ${pageNo === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:text-gray-900'}`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
            className={`px-4 py-2 rounded-lg focus:outline-none text-sm ${
              pageNo === pageNumber
                ? 'bg-green-400 text-white'
                : (pageNo - 1 === pageNumber || pageNo + 1 === pageNumber)
                ? 'bg-green-100 text-green-700'
                : 'text-black hover:bg-gray-200'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => changePage(pageNo + 1)}
        disabled={pageNo === totalPages}
        className={`text-sm focus:outline-none px-4 py-2 ${pageNo === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:text-gray-900'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
