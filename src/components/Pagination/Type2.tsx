import React, { useState } from "react";

const Type2 = ({
  total,
  pageSize,
  handleDataChange,
}: {
  total: number;
  pageSize: number;
  handleDataChange: (value: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [activePage, setActivePage] = useState(1);

  const handleNext = () => {
    if (activePage > 1) {
      if (currentPage < Math.floor(total / pageSize) - 2) {
        setCurrentPage(currentPage + 1);
      }
      if (activePage < Math.floor(total / pageSize)) {
        setActivePage(activePage + 1);
        handleDataChange(activePage + 1);
      }
    } else {
      setActivePage(activePage + 1);
      handleDataChange(activePage + 1);
    }
  };
  const handlePrev = () => {
    if (activePage > 2) {
      if (currentPage > 2 && activePage < Math.floor(total / pageSize)) {
        setCurrentPage(currentPage - 1);
      }
      setActivePage(activePage - 1);
      handleDataChange(activePage - 1);
    } else {
      if (activePage > 1) {
        setActivePage(activePage - 1);
        handleDataChange(activePage - 1);
      }
    }
  };
  return (
    <div className="flex items-center">
      <div>
        <button
          onClick={handlePrev}
          className={`text-small font-medium ${activePage === 1 ? "text-blue-gray-A30" : "text-ct-blue-90-68%"}`}
        >
          Prev</button>
      </div>
      {Math.floor(total / pageSize) > 4 ? (
        <>
          <button
            onClick={() => {
              setActivePage(1);
              setCurrentPage(2);
              handleDataChange(1);
            }}
            className={`text-small ${activePage === 1
              ? "text-white bg-ct-blue-60 border border-ct-blue-60"
              : "text-blue-gray-A30 bg-white"
              } font-bold py-1 px-3  mr-2.5 ml-3 rounded-[6px] duration-200 outline-none`}
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
                  setActivePage(currentPage + index);
                  handleDataChange(currentPage + index);
                }}
                key={index}
                className={`text-sm  font-bold py-1 px-3 ${activePage === index + currentPage
                  ? "text-white bg-ct-blue-60 border border-ct-blue-60"
                  : "text-blue-gray-A30 bg-white"
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
              handleDataChange(Math.floor(total / pageSize));
            }}
            className={`text-small py-1 px-3 font-bold mr-2.5 ${activePage === Math.floor(total / pageSize)
              ? "text-white bg-ct-blue-60 "
              : "text-blue-gray-A30 bg-white"
              } duration-200 rounded-[4px] outline-none`}
          >
            {Math.ceil(total / pageSize)}
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setActivePage(1);
              handleDataChange(1);
            }}
            className={`text-small font-bold py-1 px-3  mr-2.5 ml-3 ${activePage === 1 ? "text-white bg-ct-blue-60 " : "text-blue-gray-A30 bg-white"
              } duration-200 rounded-[4px] outline-none`}
          >
            1
          </button>
          {Math.floor(total / pageSize) > 1 && (
            <>
              {new Array(total % pageSize === 0 ? Math.floor(total / pageSize) - 1 : Math.floor(total / pageSize))
                .fill(0)
                .map((_, index) => (
                  <button

                    onClick={() => {
                      setActivePage(index + currentPage);
                      handleDataChange(index + currentPage);
                    }}
                    key={index}
                    className={`text-small font-bold py-1 px-3 ${activePage === index + currentPage
                      ? "text-white bg-ct-blue-60"
                      : "text-blue-gray-A30 bg-white"
                      } duration-200 mr-2.5 rounded-[4px] outline-none`}
                  >
                    {index + currentPage}
                  </button>
                ))}
            </>
          )}
        </>
      )}
      <div>
        <button
          className={`text-small font-medium ${activePage === total ? "text-blue-gray-A30" : "text-ct-blue-90-68%"}`}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Type2;
