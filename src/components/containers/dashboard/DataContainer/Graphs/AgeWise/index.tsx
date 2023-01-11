import React from "react";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import PercentiseCard from "../../../../../common/PercentiseCard";
import Graph from "./Graph";
import TitleList from "./TitleList";

const AgeWise = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <PercentiseCard
          name={data[0].name}
          value={data[0].contribution}
          hour={data[0].totalValid}
          BorderColor="border-[#42F54A]"
        />
        <PercentiseCard
          name={data[1].name}
          value={data[1].contribution}
          hour={data[1].totalValid}
          BorderColor="border-[#42B9F5]"
        />
        <PercentiseCard
          name={data[2].name}
          value={data[2].contribution}
          hour={data[2].totalValid}
          BorderColor="border-[#B336C8]"
        />
      </div>
      <div className="flex justify-center items-stretch">
        <div className="pt-7 flex">
          <div className="w-[36px] mr-4 flex mt-2.5">
            <TitleList data={data} />
          </div>
          <div className="mr-4 h-full">
            <Graph data={data} />
            {/* <Graph data={data} maxTarget={maxTarget} graphWidth={graphWidth} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeWise;
