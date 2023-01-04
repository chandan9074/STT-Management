import React from "react";
import { distributionSourceWiseDT } from "../../../../../../types/dashboardTypes";

type Props = {
  data: distributionSourceWiseDT[];
  maxTarget: number;
  graphWidth: number;
};

const Graph = ({ data, maxTarget, graphWidth }: Props) => {
  //   const maxTarget = 1800;
  return (
    <div className="flex border-l border-blue-gray-20 h-[390px]">
      {/* <div className="h-[390px] w-0.5 bg-blue-gray-20" /> */}
      <div className="w-full flex flex-col h-[360px] my-auto">
        {data.map((item) => (
          <div className="w-full flex items-center  mb-8">
            <div
              className="flex items-center"
              style={{
                width: Math.round(graphWidth * item.target) / maxTarget,
              }}
            >
              <div className="w-full h-3 bg-red-600 rounded-r-full">
                <div
                  className="bg-yellow-500 h-3 rounded-r-full"
                  style={{ width: `${item.achieved}%` }}
                />
              </div>
              <h1 className="mb-0 ml-1">{item.achieved}%</h1>
            </div>
            <div
              className="border-t-2 ml-2 border-blue-gray-A20 border-dashed"
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
