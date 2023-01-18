import React, { useState } from "react";
import Icons from "../../assets/Icons";
import { FilterDT } from "../../types/script";

const Type1 = ({ filterData }: { filterData: FilterDT }) => {
  const [open, setOpen] = useState(true);
  const [currentState, setCurrentState] = useState<string>();
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
        <div className="border border-blue-gray-30 rounded-[8px] shadow-light-blue-2 absolute top-10 bg-white w-[442px]">
          <div className="pt-4 pb-2 px-5 w-full flex justify-between items-center">
            <h3 className="text-base font-medium text-ct-blue-90-68% mb-0">
              Filter
            </h3>
            <img src={Icons.CloseIconButton} alt="" />
          </div>
          <div
            className={`px-5 duration-200 ${
              currentState === "dataType" ? "bg-blue-gray-05" : "bg-white"
            }`}
          >
            <button
              onClick={() =>
                currentState === "dataType"
                  ? setCurrentState("")
                  : setCurrentState("dataType")
              }
              className="flex items-center py-2 w-full"
            >
              {currentState === "dataType" ? (
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
                Data Type
              </h6>
            </button>
            <div className="flex items-center gap-x-2 pb-5 pt-3">
              {filterData.dataType.map((item, index) => (
                <button className="py-2 px-3 rounded-full bg-white mb-0 text-small font-medium text-blue-gray-75">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="px-5">
            <button className="flex items-center py-2 w-full">
              <img src={Icons.dark_right_arrow} alt="" />
              <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2">
                Distribution Source
              </h6>
            </button>
          </div>
          <div className="px-5">
            <button className="flex items-center py-2 w-full">
              <img src={Icons.dark_right_arrow} alt="" />
              <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2">
                Domain
              </h6>
            </button>
          </div>
          <div className="px-5 mb-3">
            <button className="flex items-center py-2 w-full">
              <img src={Icons.dark_right_arrow} alt="" />
              <h6 className="text-small text-blue-gray-80 font-medium mb-0 ml-2">
                Subdomain
              </h6>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Type1;
