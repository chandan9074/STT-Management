import React from "react";
import { distributionSourceWiseDT } from "../../../../../../types/dashboardTypes";

type Props = {
  data: distributionSourceWiseDT[];
  maxTarget: number;
  graphWidth: number;
};

const Graph = ({ data, maxTarget, graphWidth }: Props) => {
    const handleColor = (name:string)=>{

    }
  return (
    <div className="flex border-l border-blue-gray-20 py-2.5">
      <div className="w-full flex flex-col my-auto">
        {data.map((item, index) => (
          <div
            className={`w-full flex items-center ${
              data.length - 1 === index ? "" : "mb-8"
            }`}
          >
            <div
              className="flex items-center"
              style={{
                width: Math.round(graphWidth * item.target) / maxTarget,
              }}
            >
              <div className={`w-full h-3 bg-red-600 rounded-r-full ${item.name}`}>
                <div
                  className="bg-yellow-500 h-3 rounded-r-full"
                  style={{ width: `${item.achieved}%` }} 
                />
              </div>
              <h1 className="mb-0 ml-1 text-small text-ct-blue-45 leading-4">
                {item.achieved}%
              </h1>
            </div>
            <div
              className={`border-t-2 ml-2 border-blue-gray-A20 border-dashed ${
                graphWidth -
                  Math.round(graphWidth * item.target) / maxTarget ===
                0
                  ? "hidden"
                  : "block"
              }`}
              style={{
                width:
                  graphWidth - Math.round(graphWidth * item.target) / maxTarget,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
