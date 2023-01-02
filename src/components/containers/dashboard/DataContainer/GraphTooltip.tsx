import React from "react";
import Icons from "../../../../assets/Icons";
import { createCollectSimilarPropertyDT } from "../../../../types/dashboardTypes";

const GraphTooltip = ({
  data,
  validBgColor,
  titleColor,
  align,
}: {
  data: createCollectSimilarPropertyDT;
  validBgColor: string;
  titleColor: string;
  align: "left" | "right" | "center";
}) => {
  console.log("data", data);
  return (
    <div className="px-5 py-6 bg-tooltip-bg rounded-[12px]">
      <h1 className={`text-base font-semibold ${titleColor} mb-0`}>
        {data.name}
      </h1>
      <div className="flex items-center gap-x-1 mt-4">
        <div className="py-1 px-2 rounded-[4px] bg-secondary-blue-50 bg-opacity-[0.12] w-24">
          <h3 className="mb-0 text-white text-xxs">Received</h3>
          <h3 className="mb-0 text-blue-10 font-medium">
            {data.totalReceived}h
          </h3>
        </div>
        <div
          className={`py-1 px-2 rounded-[4px] ${validBgColor} bg-opacity-[0.12] w-24`}
        >
          <h3 className="mb-0 text-white text-xxs">Valid</h3>
          <h3 className="mb-0 text-blue-10 font-medium">
            {data.totalReceived}h
          </h3>
        </div>
        <div className="py-1 px-2 rounded-[4px] bg-medium-purple-bg bg-opacity-[0.12] w-24">
          <h3 className="mb-0 text-white text-xxs">Received</h3>
          <h3 className="mb-0 text-blue-10 font-medium">
            {data.totalReceived}h
          </h3>
        </div>
      </div>
      <div className="w-full border-t border-blue-gray-75 bg-opacity-50 border-dashed mt-5" />
      <div className="mt-2 flex items-center">
        <img src={Icons.schedule} alt="schedule" />
        <h4 className="text-small text-white mb-0 ml-2">
          Last Update: {data.lastUpdate}
        </h4>
      </div>
      <img
        src={Icons.blackDropArrow}
        alt=""
        className={`w-10 h-6 absolute -bottom-3.5 ${
          align === "left"
            ? "left-5"
            : align === "right"
            ? "right-5"
            : " left-1/2 transform -translate-x-1/2"
        }`}
      />
    </div>
  );
};

export default GraphTooltip;
