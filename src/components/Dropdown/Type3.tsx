import React from "react";
import Icons from "../../assets/Icons";
import { subDomainDT } from "../../types/script";

type filterListDT = {
  dataType: string[];
  distributionSource: string[];
  domain: string[];
  subdomain: string[];
};

type Props = {
  data: string[] | subDomainDT[];
  subdomain: boolean;
  filterList: filterListDT;
  handleFilter: (value: string, subdomain: boolean) => void;
};

const Type3 = ({ data, subdomain, filterList, handleFilter }: Props) => {
  console.log(data, subdomain);
  return (
    <div className="relative w-72">
      <div className="p-3 border border-blue-gray-10 rounded-[7px] bg-white inline-flex">
        <div className="w-64 overflow-x-auto flex items-center">
          {subdomain ? (
            <></>
          ) : (
            <>
              {filterList.domain.length === 0 ? (
                <h5 className="text-xs text-blue-gray-60 mb-0 py-0.5">
                  Select One
                </h5>
              ) : (
                <>
                  {filterList.domain.map((item: any, index: number) => (
                    <div className="flex items-center py-1 px-2 rounded-[4px] bg-ct-blue-20 mr-2">
                      <h5 className="text-xs text-blue-gray-80 font-medium mb-0 mr-1 whitespace-nowrap">
                        {item}
                      </h5>
                      <button className="p-0.5 bg-white rounded-[3px]">
                        <img
                          src={Icons.CloseIconButton}
                          alt=""
                          className="w-2 h-2"
                        />
                      </button>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
          {/* <h5 className="text-xs text-blue-gray-60 mb-0">Select One</h5> */}
        </div>
        <img src={Icons.arrow_drop_down_blue_gray} alt="" className="ml-2" />
      </div>
      <div className="absolute py-1.5 bg-white w-full rounded-[8px] shadow-bottom-light-blue-20 top-12 max-h-72 overflow-y-auto">
        {subdomain ? (
          <></>
        ) : (
          <>
            {data.map((item: any, index: number) => (
              <button
                onClick={() => handleFilter(item, false)}
                className={`flex items-center justify-between py-3 px-4 w-full ${
                  filterList.domain.includes(item)
                    ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30"
                    : "hover:bg-ct-blue-05 active:bg-ct-blue-10"
                }`}
              >
                <span className="text-xs font-medium text-blue-gray-80">
                  {item}
                </span>
                {filterList.domain.includes(item) && (
                  <img src={Icons.CorrectIcon} alt="" />
                )}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Type3;
