import React from 'react'

interface Ipagination {
    postsPerPage: number,
    totalPosts: number,
    paginate: (arg:number) =>  void,
    currentPage: number,
}


function Pagination({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
}: Ipagination) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
      <div className='py-2 my-4 flex flex-col items-center justify-center'>
          <div>
              <p className='text-sm text-gray-700'>
                  Showing
                  <span className='font-medium'>
                      {" "}
                      {currentPage * postsPerPage - postsPerPage}{" "}
                  </span>
                  to
                  <span className='font-medium'> {currentPage * postsPerPage} </span>
                  of
                  <span className='font-medium'> {totalPosts} </span>
                  results
              </p>
          </div>
          <nav aria-label="Page navigation example" className="my-4 ">
              <ul className="inline-flex items-center -space-x-px">
                  <li>
                      {pageNumbers.map((number) => (
                          <button
                              key={number}
                              onClick={() => {
                                  paginate(number);
                              }}
                             
                              className={
                                  currentPage === number
                                      ? "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300  dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                      : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              }
                          >
                            
                              {number}
                          </button>
                      ))}
                  </li>
              </ul>
          </nav>
      </div>
  )
}



export default Pagination