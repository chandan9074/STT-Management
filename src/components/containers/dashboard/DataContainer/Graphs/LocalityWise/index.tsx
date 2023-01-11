import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import PercentageCard from "../../../../../common/PercentageCard";
import Graph from "./Graph";
import PropertyList from "./PropertyList";

const LocalityWise = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <PercentageCard
          name={data[0].name}
          value={data[0].contribution}
          hour={data[0].totalValid}
          BorderColor="border-[#EBC734]"
        />
        <PercentageCard
          name={data[1].name}
          value={data[1].contribution}
          hour={data[1].totalValid}
          BorderColor="border-[#8D84F5]"
        />
        <PercentageCard
          name={data[2].name}
          value={data[2].contribution}
          hour={data[2].totalValid}
          BorderColor="border-[#79F542]"
        />
      </div>
      <div className=" mt-3 flex items-center justify-between">
        <Graph data={data} />
        <PropertyList data={data} />
      </div>
    </>
  );
};

export default LocalityWise;
