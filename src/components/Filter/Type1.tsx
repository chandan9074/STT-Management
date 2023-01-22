import React, { useState } from "react";
import Icons from "../../assets/Icons";
import { FilterDT } from "../../types/script";

type filterListDT = {
  dataType: string[];
  distributionSource: string[];
  domain: string[];
  subdomain: string[];
};

const Type1 = ({ filterData }: { filterData: FilterDT }) => {
  const [open, setOpen] = useState(true);
  const [currentState, setCurrentState] = useState<string>();
  const [filterList, setFilterList] = useState<filterListDT>({
    dataType: [],
    distributionSource: [],
    domain: [],
    subdomain: [],
  });
  return (
    <div className="relative flex justify-end">
      <button
        onClick={() => setOpen(!open)}
        className="py-2 px-2.5 bg-blue-gray-A10 rounded-[4px] flex items-center ml-2"
      >
        <img src={Icons.filter_list} alt="" className="" />
        <h6 className="text-ct-blue-90-70% text-small mb-0 ml-1.5 mr-2.5">
          Filter
        </h6>
        <img src={Icons.arrow_drop_down_blue_gray} alt="" className="" />
      </button>
      {open && (
        <div className="border border-blue-gray-30 rounded-[8px] shadow-light-blue-2 absolute z-50 top-10 bg-white w-[442px]">
          <div className="pt-4 pb-2 px-5 w-full flex justify-between items-center">
            <h3 className="text-base font-medium text-ct-blue-90-68% mb-0">
              Filter
            </h3>
            <img src={Icons.CloseIconButton} alt="" />
          </div>
          {[1, 2].map((item, dataIndex) => (
            <div
              className={`px-5 duration-200 ${
                currentState ===
                `${dataIndex === 0 ? "dataType" : "distributionSource"}`
                  ? "bg-blue-gray-05"
                  : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between py-2 w-full">
                <button
                  onClick={() =>
                    dataIndex === 0
                      ? currentState === "dataType"
                        ? setCurrentState("")
                        : setCurrentState("dataType")
                      : currentState === "distributionSource"
                      ? setCurrentState("")
                      : setCurrentState("distributionSource")
                  }
                  className="flex items-center w-full mr-5"
                >
                  {currentState ===
                  `${dataIndex === 0 ? "dataType" : "distributionSource"}` ? (
                    <img
                      src={Icons.dark_up_arrow}
                      alt=""
                      className="animate-fadeIn"
                    />
                  ) : (
                    <img
                      src={Icons.dark_right_arrow}
                      alt=""
                      className="animate-fadeIn"
                    />
                  )}
                  <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2">
                    {dataIndex === 0 ? "Data Source" : "Distribution Source"}{" "}
                    {filterList[
                      dataIndex === 0 ? "dataType" : "distributionSource"
                    ][0] &&
                      currentState !==
                        `${
                          dataIndex === 0 ? "dataType" : "distributionSource"
                        }` && (
                        <span className="animate-fadeIn text-xs font-medium text-ct-blue-60 ml-3">
                          {
                            filterList[
                              dataIndex === 0
                                ? "dataType"
                                : "distributionSource"
                            ][0]
                          }
                        </span>
                      )}
                  </h6>
                </button>
                {currentState ===
                  `${dataIndex === 0 ? "dataType" : "distributionSource"}` && (
                  <button
                    onClick={() =>
                      dataIndex === 0
                        ? setFilterList({ ...filterList, dataType: [] })
                        : setFilterList({
                            ...filterList,
                            distributionSource: [],
                          })
                    }
                    className="text-xxs font-medium text-ct-blue-60 animate-fadeIn"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div
                className={`flex items-center gap-x-2 pb-5 pt-3 animate-fadeIn ${
                  currentState ===
                  `${dataIndex === 0 ? "dataType" : "distributionSource"}`
                    ? "block"
                    : "hidden"
                }`}
              >
                {filterData[
                  dataIndex === 0 ? "dataType" : "distributionSource"
                ].map((item, index) => (
                  <button
                    onClick={() =>
                      dataIndex === 0
                        ? setFilterList({ ...filterList, dataType: [item] })
                        : setFilterList({
                            ...filterList,
                            distributionSource: [item],
                          })
                    }
                    className={`py-1.5 px-3 flex items-center border rounded-full duration-200 bg-white mb-0 text-small font-medium text-blue-gray-75 ${
                      filterList[
                        dataIndex === 0 ? "dataType" : "distributionSource"
                      ][0] === item
                        ? "bg-secondary-blue-50 bg-opacity-[0.12] border-secondary-blue-50"
                        : "border-white"
                    }`}
                  >
                    {filterList[
                      dataIndex === 0 ? "dataType" : "distributionSource"
                    ][0] === item && (
                      <img
                        src={Icons.CorrectIcon}
                        alt=""
                        className="w-[14px] h-[14px] mr-1.5 animate-fadeIn"
                      />
                    )}
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {[1, 2].map((item, dataIndex) => (
            <div
              className={`px-5 duration-200 ${
                currentState === `${dataIndex === 0 ? "domain" : "subdomain"}`
                  ? "bg-blue-gray-05"
                  : "bg-white"
              } ${dataIndex === 1 && "mb-3"}`}
            >
              <div className="flex items-center justify-between py-2 w-full">
                <button
                  onClick={() =>
                    dataIndex === 0
                      ? currentState === "domain"
                        ? setCurrentState("")
                        : setCurrentState("domain")
                      : currentState === "subdomain"
                      ? setCurrentState("")
                      : setCurrentState("subdomain")
                  }
                  className="flex items-center w-full mr-5"
                >
                  {currentState ===
                  `${dataIndex === 0 ? "domain" : "subdomain"}` ? (
                    <img
                      src={Icons.dark_up_arrow}
                      alt=""
                      className="animate-fadeIn"
                    />
                  ) : (
                    <img
                      src={Icons.dark_right_arrow}
                      alt=""
                      className="animate-fadeIn"
                    />
                  )}
                  <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2">
                    {dataIndex === 0 ? "Domain" : "Subdomain"}{" "}
                    {filterList[dataIndex === 0 ? "domain" : "subdomain"][0] &&
                      currentState !==
                        `${dataIndex === 0 ? "domain" : "subdomain"}` && (
                        <span className="animate-fadeIn text-xs font-medium text-ct-blue-60 ml-3">
                          {
                            filterList[
                              dataIndex === 0 ? "domain" : "subdomain"
                            ][0]
                          }
                        </span>
                      )}
                  </h6>
                </button>
                {currentState ===
                  `${dataIndex === 0 ? "domain" : "subdomain"}` && (
                  <button
                    onClick={() =>
                      dataIndex === 0
                        ? setFilterList({ ...filterList, domain: [] })
                        : setFilterList({
                            ...filterList,
                            subdomain: [],
                          })
                    }
                    className="text-xxs font-medium text-ct-blue-60 animate-fadeIn"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div
                className={`pt-3 pb-5  animate-fadeIn ${
                  currentState === `${dataIndex === 0 ? "domain" : "subdomain"}`
                    ? "block"
                    : "hidden"
                }`}
              >
                
              </div>
            </div>
          ))}
          {/* <div className="px-5 mb-3">
            <button
              className={`flex items-center py-2 w-full ${
                filterList.domain.length > 0
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              <img src={Icons.dark_right_arrow} alt="" />
              <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2">
                Subdomain
              </h6>
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Type1;
