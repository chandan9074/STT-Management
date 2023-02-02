import React from "react";
import Icons from "../../../../../../assets/Icons";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import { localityDataDT } from "../../../../../../types/userManagementTypes";
import GraphTooltip from "../../../../dashboard/DataContainer/GraphTooltip";
import MapTooltip from "./MapTooltip";

const MapChart = ({ data }: { data: localityDataDT[] }) => {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[226px] h-[314px] relative">
        <div
          className={`absolute top-0 left-[3.3px] flex justify-center group hover:z-[80]`}
        >
          <div
            className={`absolute bottom-[95px] hidden group-hover:block z-50 animate-fadeIn`}
          >
            <MapTooltip
              data={data.filter((item) => item.name === "Rajbongshi")[0]}
              validBgColor="bg-coral-90"
              titleColor="text-coral-90"
              align="center"
            />
          </div>
          <img
            src={Icons.Rajbongshi}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-9 left-[17px] group hover:z-[80] flex justify-center">
          <div className=" absolute bottom-[65px] hidden group-hover:block z-50 animate-fadeIn">
            <MapTooltip
              data={data.filter((item) => item.name === "Kamrupi")[0]}
              validBgColor="bg-red-A10"
              titleColor="text-red-A10"
              align="center"
            />
          </div>
          <img
            src={Icons.Kamrupi}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-[78px] left-0 flex justify-center group hover:z-[80]">
          <div className=" absolute bottom-[95px] hidden z-50 group-hover:block animate-fadeIn">
            <MapTooltip
              data={data.filter((item) => item.name === "Barendri")[0]}
              validBgColor="bg-light-green-90"
              titleColor="text-light-green-90"
              align="center"
            />
          </div>
          <img
            src={Icons.Barendri}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-[138px] left-[23px] flex justify-center group hover:z-[80]">
          <div className=" absolute bottom-[125px] z-50 hidden group-hover:block animate-fadeIn">
            <MapTooltip
              data={data.filter((item) => item.name === "South-West Bangla")[0]}
              validBgColor="bg-water-90"
              titleColor="text-water-90"
              align="center"
            />
          </div>
          <img
            src={Icons.SouthEastBangla}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-[72px] left-[76px] flex justify-center group hover:z-[80]">
          <div className=" absolute bottom-[120px] z-50 hidden group-hover:block animate-fadeIn">
            <MapTooltip
              data={
                data.filter((item) => item.name === "Middle East Bangla")[0]
              }
              validBgColor="bg-quack-90"
              titleColor="text-quack-90"
              align="center"
            />
          </div>
          <img
            src={Icons.MiddleEastBangla}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-[82.5px] left-[140px] flex justify-center group hover:z-[80]">
          <div className=" absolute bottom-[80px] z-50 hidden group-hover:block animate-fadeIn">
            <MapTooltip
              data={data.filter((item) => item.name === "North-East Bangla")[0]}
              validBgColor="bg-blue-gray-A40"
              titleColor="text-blue-gray-A40"
              align="center"
            />
          </div>
          <img
            src={Icons.NorthEastBangla}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-[129px] left-[122px] flex justify-center group hover:z-[80]">
          <div className=" absolute bottom-[200px] z-50 hidden group-hover:block animate-fadeIn">
            <MapTooltip
              data={data.filter((item) => item.name === "South Bangla")[0]}
              validBgColor="bg-cobalite-90"
              titleColor="text-cobalite-90"
              align="center"
            />
          </div>
          <img
            src={Icons.SouthBangla}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
      </div>
      <MapList data={data} />
    </div>
  );
};

export default MapChart;


const MapList = ({ data }: { data: localityDataDT[] }) => {
  return (
    <div className="grid grid-cols-2 w-full mt-1">
      <div>
        {data.slice(0, 4).map((item, index) => (
          <div className="flex items-center mb-3">
            <div
              className={`w-3 h-3 rounded-full mr-2 ${item.name === "Middle East Bangla"
                ? "bg-yellow-A10"
                : item.name === "South Bangla"
                  ? "bg-purple-A10"
                  : item.name === "Barendri"
                    ? "bg-green-A10"
                    : item.name === "Rajbongshi"
                      ? "bg-red-15"
                      : ""
                }`}
            />
            <span className="text-xs text-blue-gray-75">{item.name}</span>
          </div>
        ))}
      </div>
      <div>
        {data.slice(4, 7).map((item, index) => (
          <div className="flex items-center mb-3">
            <div
              className={`w-3 h-3 rounded-full mr-2 ${item.name === "Kamrupi"
                ? "bg-orange-A10"
                : item.name === "North-East Bangla"
                  ? "bg-blue-20"
                  : item.name === "South-West Bangla"
                    ? "bg-blue-A10"
                    : ""
                }`}
            />
            <span className="text-xs text-blue-gray-75">{item.name}</span>
          </div>
        ))}
        <h3><span>Tribal</span></h3>
      </div>
    </div>
  )
}
