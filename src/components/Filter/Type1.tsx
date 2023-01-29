import React, { useEffect, useState } from "react";
import Icons from "../../assets/Icons";
import { FilterDT } from "../../types/script";
import Buttons from "../Buttons";
import Dropdown from "../Dropdown";

type filterListDT = {
  dataType: string[];
  distributionSource: string[];
  domain: string[];
  subdomain: string[];
};

const Type1 = ({ filterData }: { filterData: FilterDT }) => {
  const [open, setOpen] = useState(false);
  const [currentState, setCurrentState] = useState<string>("dataType");
  const [count, setCount] = useState<number>(0)
  const [filterList, setFilterList] = useState<filterListDT>({
    dataType: [],
    distributionSource: [],
    domain: [],
    subdomain: [],
  });

  useEffect(() => {
    let count = 0;
    for (const key in filterList) {
      if (filterList[key as keyof filterListDT].length > 0) {
        count += 1
      }
    }
    setCount(count)
  }, [filterList]);

  const handleClear = () => {
    setFilterList({
      dataType: [],
      distributionSource: [],
      domain: [],
      subdomain: [],
    });
  };

  const handleFilter = (data: string, subdomain: boolean) => {
    if (subdomain) {
      if (filterList.subdomain.includes(data)) {
        setFilterList({
          ...filterList,
          subdomain: filterList.subdomain.filter((item) => item !== data),
        });
      } else {
        setFilterList({
          ...filterList,
          subdomain: [...filterList.subdomain, data],
        });
      }
    } else {
      if (filterList.domain.includes(data)) {
        setFilterList({
          ...filterList,
          domain: filterList.domain.filter((item) => item !== data),
        });
      } else {
        setFilterList({
          ...filterList,
          domain: [...filterList.domain, data],
        });
      }
    }
  };

  return (
    <div className="relative flex justify-end">
      <div className="relative z-[90]">
        <Buttons.Filter label="Filter" count={count} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="bg-transparent fixed top-0 left-0 w-full h-full z-[80] animate-fadeIn"
        />
      )}
      {open && (
        <div className="border border-blue-gray-30 rounded-[8px] shadow-light-blue-2 absolute z-[80] top-10 bg-white min-w-[472px] max-w-[500px] animate-fadeIn">
          <div className="pt-4 pb-2 px-5 w-full flex justify-between items-center">
            <h3 className="text-base font-medium text-ct-blue-90-68% mb-0">
              Filter
            </h3>
            <div className="flex gap-x-2 animate-fadeIn">
              {count > 0 && (<><Buttons.LabelButton.Primary label="Apply" size="xSmall" variant="CT-Blue" />
                <Buttons.LabelButton.Tertiary label="Clear" size="xSmall" variant="CT-Blue" onClick={handleClear} /></>)}
              <button onClick={() => setOpen(!open)}>
                <img src={Icons.CloseIconButton} alt="" />
              </button>
            </div>
          </div>
          {[1, 2].map((item, dataIndex) => (
            <div
              className={`px-5 duration-200 ${currentState ===
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
                  <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2 flex items-center">
                    <span className="whitespace-nowrap">
                      {dataIndex === 0 ? "Data Source" : "Distribution Source"}
                    </span>{" "}
                    {filterList[
                      dataIndex === 0 ? "dataType" : "distributionSource"
                    ].length > 0 &&
                      currentState !==
                      `${dataIndex === 0 ? "dataType" : "distributionSource"
                      }` && (
                        // <span className="animate-fadeIn text-xs font-medium text-ct-blue-60 ml-3">
                        //   {
                        //     filterList[
                        //       dataIndex === 0
                        //         ? "dataType"
                        //         : "distributionSource"
                        //     ][0]
                        //   }
                        // </span>
                        <h6 className="flex text-left w-72 selected-items">
                          {filterList[
                            dataIndex === 0 ? "dataType" : "distributionSource"
                          ].map((item, index) => (
                            <span
                              className={`animate-fadeIn text-xs font-medium text-ct-blue-60 whitespace-nowrap ${index === 0 ? "ml-3" : "ml-1"
                                }`}
                            >
                              {item}
                              {filterList[
                                dataIndex === 0
                                  ? "dataType"
                                  : "distributionSource"
                              ].length -
                                1 !==
                                index && ","}
                            </span>
                          ))}
                        </h6>
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
                className={`flex items-center gap-x-2 pb-5 pt-3 animate-fadeIn ${currentState ===
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
                        ? filterList.dataType.includes(item)
                          ? setFilterList({
                            ...filterList,
                            dataType: filterList.dataType.filter(
                              (dataTypeItem) => dataTypeItem !== item
                            ),
                          })
                          : setFilterList({
                            ...filterList,
                            dataType: [...filterList.dataType, item],
                          })
                        : filterList.distributionSource.includes(item)
                          ? setFilterList({
                            ...filterList,
                            distributionSource:
                              filterList.distributionSource.filter(
                                (distributionSourceItem) =>
                                  distributionSourceItem !== item
                              ),
                          })
                          : setFilterList({
                            ...filterList,
                            distributionSource: [
                              ...filterList.distributionSource,
                              item,
                            ],
                          })
                    }
                    className={`py-1.5 px-3 flex items-center border rounded-full duration-200 bg-white mb-0 text-small font-medium text-blue-gray-75 ${filterList[
                      dataIndex === 0 ? "dataType" : "distributionSource"
                    ].includes(item)
                      ? "bg-secondary-blue-50 bg-opacity-[0.12] border-secondary-blue-50"
                      : "border-white"
                      }`}
                  >
                    {filterList[
                      dataIndex === 0 ? "dataType" : "distributionSource"
                    ].includes(item) && (
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
              className={`px-5 duration-200 ${currentState === `${dataIndex === 0 ? "domain" : "subdomain"}`
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
                        : filterList.domain.length > 0
                          ? setCurrentState("subdomain")
                          : setCurrentState("")
                  }
                  className={`flex items-center w-full mr-5 ${dataIndex === 1
                    ? filterList.domain.length > 0
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                    : ""
                    }`}
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
                  <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2 flex items-center">
                    {dataIndex === 0 ? "Domain" : "Subdomain"}{" "}
                    {filterList[dataIndex === 0 ? "domain" : "subdomain"][0] &&
                      currentState !==
                      `${dataIndex === 0 ? "domain" : "subdomain"}` && (
                        <h6 className="flex text-left w-72 selected-items">
                          {filterList[
                            dataIndex === 0 ? "domain" : "subdomain"
                          ].map((item, index) => (
                            <span
                              className={`animate-fadeIn text-xs font-medium text-ct-blue-60 whitespace-nowrap ${index === 0 ? "ml-3" : "ml-1"
                                }`}
                            >
                              {item}
                              {filterList[
                                dataIndex === 0 ? "domain" : "subdomain"
                              ].length -
                                1 !==
                                index && ","}
                            </span>
                          ))}
                        </h6>
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
                className={`pt-3 pb-5  animate-fadeIn ${currentState === `${dataIndex === 0 ? "domain" : "subdomain"}`
                  ? "block"
                  : "hidden"
                  }`}
              >
                <Dropdown.Type3
                  domainData={filterData["domain"]}
                  subdomain={dataIndex === 1}
                  filterList={filterList}
                  handleFilter={handleFilter}
                  subdomainData={filterData["subDomain"]}
                />
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
