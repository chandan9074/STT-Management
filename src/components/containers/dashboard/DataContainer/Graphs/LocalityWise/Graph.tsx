import React from "react";
import Icons from "../../../../../../assets/Icons";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import GraphTooltip from "../../GraphTooltip";

const Graph = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
 
  return (
    <div className="w-[348px] h-full flex justify-center">
      <div className="w-[226px] h-[314px] relative">
        <div
          className={`absolute top-0 left-[3.3px] flex justify-start group hover:z-[80]`}
        >
          <div
            className={`absolute bottom-[95px] hidden group-hover:block z-50 animate-fadeIn`}
          >
            <GraphTooltip
              data={data.filter((item) => item.name === "Rajbongshi")[0]}
              validBgColor="bg-coral-90"
              titleColor="text-coral-90"
              align="left"
            />
          </div>
          <img
            src={Icons.Rajbongshi}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-9 left-[17px] group hover:z-[80] flex justify-start">
          <div className=" absolute bottom-[65px] -left-7 hidden group-hover:block z-50 animate-fadeIn">
            <GraphTooltip
              data={data.filter((item) => item.name === "Kamrupi")[0]}
              validBgColor="bg-red-A10"
              titleColor="text-red-A10"
              align="left"
            />
          </div>
          <img
            src={Icons.Kamrupi}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-[78px] left-0 flex justify-start group hover:z-[80]">
          <div className=" absolute bottom-[95px] hidden z-50 group-hover:block animate-fadeIn">
            <GraphTooltip
              data={data.filter((item) => item.name === "Barendri")[0]}
              validBgColor="bg-light-green-90"
              titleColor="text-light-green-90"
              align="left"
            />
          </div>
          <img
            src={Icons.Barendri}
            alt=""
            className="opacity-50 group-hover:opacity-100 duration-200 cursor-pointer"
          />
        </div>
        <div className="absolute top-[138px] left-[23px] flex justify-start group hover:z-[80]">
          <div className=" absolute bottom-[125px] z-50 hidden group-hover:block animate-fadeIn">
            <GraphTooltip
              data={data.filter((item) => item.name === "South-West Bangla")[0]}
              validBgColor="bg-water-90"
              titleColor="text-water-90"
              align="left"
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
            <GraphTooltip
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
            <GraphTooltip
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
            <GraphTooltip
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
    </div>
  );
};

export default Graph;
