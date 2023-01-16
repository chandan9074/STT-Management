import React from "react";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import PercentageCard from "../../../../../common/PercentageCard";
import Graph from "./Graph";
import PropertyList from "./PropertyList";

const RecordingDistance = ({
  data,
}: {
  data: createCollectSimilarPropertyDT[];
}) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <PercentageCard
          name={data[0].name}
          value={data[0].contribution}
          hour={data[0].totalValid}
          BorderColor="border-[#FFD3D3]"
        />
        <PercentageCard
          name={data[1].name}
          value={data[1].contribution}
          hour={data[1].totalValid}
          BorderColor="border-[#E2FBD7]"
        />
        <PercentageCard
          name={data[2].name}
          value={data[2].contribution}
          hour={data[2].totalValid}
          BorderColor="border-[#FFF5CC]"
        />
      </div>
      <div className="  flex items-center justify-between h-[332px]">
        <Graph data={data} />
        <PropertyList data={data} />
      </div>
    </>
  );
};

export default RecordingDistance;
