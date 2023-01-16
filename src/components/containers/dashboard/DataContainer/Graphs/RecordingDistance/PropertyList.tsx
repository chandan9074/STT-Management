import React from "react";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";

const PropertyList = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div className="flex items-center justify-between w-[230px] mb-3">
          <div className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full mr-2 ${
                item.name === "So far"
                  ? "bg-red-15"
                  : item.name === "So close"
                  ? "bg-green-A10"
                  : item.name === "Walking"
                  ? "bg-yellow-A10"
                  : item.name === "Close"
                  ? "bg-blue-A10"
                  : item.name === "Far"
                  ? "bg-orange-A10"
                  : item.name === "Round"
                  ? "bg-blue-20"
                  : item.name === "Moving"
                  ? "bg-purple-A10"
                  : ""
              }`}
            />
            <h3 className="text-blue-gray-75 text-xs mb-0">{item.name}</h3>
          </div>
          <h1 className="text-ct-blue-40 text-xs mb-0">{item.contribution}%</h1>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
