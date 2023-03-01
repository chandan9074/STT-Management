import React, { useEffect, useState } from "react";
import { distributionSourceWiseDT } from "../../../../../../types/dashboardTypes";
import Graph from "./Graph";
import HourList from "./HourList";
import TitleList from "./TitleList";

const DistributionSourceWise = ({
  data,
}: {
  data: distributionSourceWiseDT[];
}) => {
  let targetArray: number[] = [];
  const [maxTarget, setMaxTarget] = useState(0);
  const graphWidth = 420;
  useEffect(() => {
    data.filter((item) => {
      return targetArray.push(item.target);
    });
    setMaxTarget(Math.max(...targetArray));
  }, [data]);
  return (
    <div className="flex justify-center items-stretch">
      <div className="py-5 flex">
        <div className="w-[90px] mr-4 flex mt-2.5">
          <TitleList data={data} />
        </div>
        <div className="mr-4" style={{ width: 420 }}>
          <Graph data={data} maxTarget={maxTarget} graphWidth={graphWidth} />
        </div>
        <div className="col-span-1 flex mt-2.5">
          <HourList data={data} />
        </div>
      </div>
    </div>
  );
};

export default DistributionSourceWise;
