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
  domainData: string[];
  subdomainData: subDomainDT[];
  subdomain: boolean;
  filterList: filterListDT;
  handleFilter: (value: string, subdomain: boolean) => void;
};

const Type3 = ({
  domainData,
  subdomain,
  filterList,
  handleFilter,
  subdomainData,
}: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative w-80">
      <div className="p-3 border border-blue-gray-10 rounded-[7px] bg-white inline-flex">
        <div className="w-72 overflow-x-auto flex items-center">
          {subdomain ? (
            <>
              {filterList.subdomain.length === 0 ? (
                <button
                  onClick={() => setOpen(!open)}
                  className="text-xs text-blue-gray-60 mb-0 py-0.5 w-full text-left"
                >
                  Select One
                </button>
              ) : (
                <>
                  {filterList.subdomain.map((item: string, index: number) => (
                    <div key={index} className="flex items-center py-1 px-2 rounded-[4px] bg-ct-blue-20 mr-2 animate-fadeIn">
                      <h5 className="text-xs text-blue-gray-80 font-medium mb-0 mr-1 whitespace-nowrap">
                        {item}
                      </h5>
                      <button
                        onClick={() => handleFilter(item, true)}
                        className="p-0.5 bg-white rounded-[3px] w-3 h-3 hover:bg-ct-blue-10 active:bg-ct-blue-30"
                      >
                        <img src={Icons.CloseIconButton} alt="" className="" />
                      </button>
                    </div>
                  ))}
                </>
              )}
            </>
          ) : (
            <>
              {filterList.domain.length === 0 ? (
                <button
                  onClick={() => setOpen(!open)}
                  className="text-xs text-blue-gray-60 mb-0 py-0.5 w-full text-left"
                >
                  Select One
                </button>
              ) : (
                <>
                  {filterList.domain.map((item: string, index: number) => (
                    <div key={index} className="flex items-center py-1 px-2 rounded-[4px] bg-ct-blue-20 mr-2 animate-fadeIn">
                      <h5 className="text-xs text-blue-gray-80 font-medium mb-0 mr-1 whitespace-nowrap">
                        {item}
                      </h5>
                      <button
                        onClick={() => handleFilter(item, false)}
                        className="p-0.5 bg-white rounded-[3px] w-3 h-3 hover:bg-ct-blue-10 active:bg-ct-blue-30"
                      >
                        <img src={Icons.CloseIconButton} alt="" className="" />
                      </button>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
          {/* <h5 className="text-xs text-blue-gray-60 mb-0">Select One</h5> */}
        </div>
        <button className="p-0.5" onClick={() => setOpen(!open)}>
          <img
            src={Icons.arrow_drop_down_blue_gray}
            alt=""
            className={`ml-2 ${open ? "rotate-180" : "rotate-0"} duration-200`}
          />
        </button>
      </div>
      <div
        className={`absolute animate-fadeIn py-1.5 bg-white w-full rounded-[8px] shadow-bottom-light-blue-20 top-14 max-h-72 overflow-y-auto ${open ? "block" : "hidden"
          }`}
      >
        {subdomain ? (
          <>
            {filterList.domain.length > 0
              ? filterList.domain.map((domainItem, index) => (
                <div key={index} className="flex flex-col">
                  <h5 className="mb-0 text-xxs text-blue-gray-60 py-3 px-4">
                    {domainItem}z
                  </h5>
                  {subdomainData
                    .filter((item) => item.name === domainItem)[0]
                    .subDomain.map((subdomainItem: string) => (
                      <button
                        onClick={() => handleFilter(subdomainItem, true)}
                        className={`flex items-center justify-between py-3 pl-8 pr-4 w-full ${filterList.subdomain.includes(subdomainItem)
                            ? "bg-blue-10 hover:bg-blue-20 active:bg-blue-30"
                            : "hover:bg-ct-blue-05 active:bg-ct-blue-10"
                          }`}
                      >
                        <span className="text-xs font-medium text-blue-gray-80">
                          {subdomainItem}
                        </span>
                        {filterList.subdomain.includes(subdomainItem) && (
                          <img src={Icons.CorrectIcon} alt="" />
                        )}
                      </button>
                    ))}
                </div>
              ))
              : null}
          </>
        ) : (
          <>
            {domainData.map((item: string, index: number) => (
              <button
                key={index}
                onClick={() => handleFilter(item, false)}
                className={`flex items-center justify-between py-3 px-4 w-full ${filterList.domain.includes(item)
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
