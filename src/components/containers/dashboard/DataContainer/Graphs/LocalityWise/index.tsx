import React from "react";
import Icons from "../../../../../../assets/Icons";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import Graph from "./Graph";

const LocalityWise = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
  return (
    <div className=" mt-3 flex">
      <Graph data={data} />
      <div></div>
    </div>
  );
};

export default LocalityWise;
