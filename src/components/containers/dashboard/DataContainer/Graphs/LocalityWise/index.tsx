import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import Graph from "./Graph";
import PropertyList from "./PropertyList";

const LocalityWise = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
  return (
    <div className=" mt-3 flex items-center justify-between">
      <Graph data={data} />
      <PropertyList data={data} />
    </div>
  );
};

export default LocalityWise;
