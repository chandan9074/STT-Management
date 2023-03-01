import React, { useState } from "react";

interface Props {
  total: number,
  pageSize: number,
  handlePageChange: (page: number) => void
}
const Type1 = ({ total, pageSize, handlePageChange }: Props) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [activePage, setActivePage] = useState(1);

  const handleNext = () => {
    if (activePage > 1) {
      if (currentPage < Math.floor(total / pageSize) - 2) {
        setCurrentPage(currentPage + 1);
      }
      if (activePage < Math.floor(total / pageSize)) {
        setActivePage(activePage + 1);
        handlePageChange(activePage + 1)
      }
    } else {
      setActivePage(activePage + 1);
      handlePageChange(activePage + 1)
    }
  };
  const handlePrev = () => {
    if (activePage > 2) {
      if (currentPage > 2 && activePage < Math.floor(total / pageSize)) {
        setCurrentPage(currentPage - 1);
      }
      setActivePage(activePage - 1);
      handlePageChange(activePage - 1)
    } else {
      if (activePage > 1) {
        setActivePage(activePage - 1);
        handlePageChange(activePage - 1)
      }
    }
  };
  return (
    <div className="flex items-center">
      {/* <button
        className="flex items-center py-2.5 px-4 bg-white-gray-hover-border rounded-[6px] outline-none mr-3"
        onClick={handlePrev}
      >
        <Image.Primary
          width="w-3"
          height="h-2.5"
          marginRight="mr-3"
          src="/assets/images/icons/left_arrow.svg"
        />
        <span>Previous</span>
      </button> */}
      <div className="sm:block hidden">
        <button onClick={handlePrev}>Prev</button>
      </div>
      <div className="sm:hidden block">
        <button onClick={handlePrev}>Prev</button>
      </div>
      {Math.floor(total / pageSize) > 4 ? (
        <>
          <button
            onClick={() => {
              setActivePage(1);
              setCurrentPage(2);
              handlePageChange(1)
            }}
            className={`text-sm ${activePage === 1
              ? "text-white bg-ct-blue-60 border border-ct-blue-60"
              : ""
              } font-bold py-1.5 px-2.5  mr-2.5 ml-3 rounded-[6px] duration-200 outline-none`}
          >
            1
          </button>
          {new Array(2).fill(0).map((_, index) => (
            <>
              {index === 0 &&
                currentPage > 2 &&
                currentPage < Math.floor(total / pageSize) - 1 && (
                  <span key={index} className="text-sm font-bold mr-2.5">. . .</span>
                )}
              <button
                onClick={() => {
                  setActivePage(currentPage + index)
                  handlePageChange(currentPage + index)
                }}
                key={index}
                className={`text-sm  font-bold py-1.5 px-2.5 ${activePage === index + currentPage
                  ? "text-white bg-ct-blue-60 border border-ct-blue-60"
                  : ""
                  } duration-200 mr-2.5 rounded-[6px] outline-none`}
              >
                {index + currentPage}
              </button>
              {index === 1 &&
                currentPage >= 2 &&
                currentPage < Math.floor(total / pageSize) - 2 && (
                  <span className="text-sm font-bold mr-2.5">. . .</span>
                )}
            </>
          ))}
          <button
            onClick={() => {
              setActivePage(Math.floor(total / pageSize));
              setCurrentPage(Math.floor(total / pageSize) - 2);
              handlePageChange(Math.floor(total / pageSize))
            }}
            className={`text-sm font-bold py-1.5 px-2.5 mr-2.5 ${activePage === Math.floor(total / pageSize)
              ? "text-white bg-ct-blue-60 "
              : ""
              } duration-200 rounded-[6px] outline-none`}
          >
            {Math.floor(total / pageSize)}
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {

              setActivePage(1)
              handlePageChange(1)
            }}
            className={`text-sm font-bold py-1.5 px-2.5 mr-2.5 ml-3 ${activePage === 1 ? "text-white bg-ct-blue-60 " : ""
              } duration-200 rounded-[6px] outline-none`}
          >
            1
          </button>
          {Math.floor(total / pageSize) > 1 && (
            <>
              {new Array(Math.floor(total / pageSize)).fill(0).map((_, index) => (
                <button
                  onClick={() => {
                    setActivePage(index + currentPage)
                    handlePageChange(index + currentPage)
                  }}
                  key={index}
                  className={`text-sm font-bold py-1.5 px-2.5 ${activePage === index + currentPage
                    ? "text-white bg-ct-blue-60 "
                    : ""
                    } duration-200 mr-2.5 rounded-[6px] outline-none`}
                >
                  {index + currentPage}
                </button>
              ))}</>
          )}
        </>
      )}
      {/* <button
        className="flex items-center py-2.5 px-4 bg-white-gray-hover-border rounded-[6px] outline-none ml-0.5"
        onClick={handleNext}
      >
        <span>Next</span>
        <Image.Primary
          width="w-3"
          height="h-2.5"
          marginRight="ml-3"
          src="/assets/images/icons/right_arrow.svg"
        />
      </button> */}
      <div className="sm:block hidden">
        <button onClick={handleNext} className="text-ct-blue-90 font-medium">
          Next
        </button>
      </div>
      <div className="sm:hidden block ">
        <button onClick={handleNext} className="text-ct-blue-90">
          Next
        </button>
      </div>
    </div>
  );
};

export default Type1;
