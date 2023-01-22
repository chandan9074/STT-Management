import React from "react";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import GraphTooltip from "../../GraphTooltip";
import Card from "./Card";

const EconomicSituationWise = ({
  data,
}: {
  data: createCollectSimilarPropertyDT[];
}) => {
  return (
    <>
      <div className="flex">
        <div className="relative flex justify-center group">
          <div
            className={`absolute bottom-[220px] hidden z-[110] group-hover:block animate-fadeIn`}
          >
            <GraphTooltip
              data={
                data.filter((singleItem) => singleItem.name === data[1].name)[0]
              }
              validBgColor={`bg-[#518CFE] bg-opacity-[0.12]`}
              titleColor={` text-[#8CB3FE]`}
              align="center"
            />
          </div>
          <Card
            borderRadius="rounded-tl-[12px]"
            bgColor="bg-blue-20 hover:bg-blue-gray-A40"
            width={400}
            height={200}
            data={data.filter((item) => item.name === data[1].name)[0]}
          />
        </div>
        <div className="relative flex justify-center group">
          <div
            className={`absolute bottom-[220px] hidden z-[110] group-hover:block animate-fadeIn`}
          >
            <GraphTooltip
              data={
                data.filter((singleItem) => singleItem.name === data[2].name)[0]
              }
              validBgColor={`bg-[#FFE98C] bg-opacity-[0.12]`}
              titleColor={` text-[#FFE98C]`}
              align="center"
            />
          </div>
          <Card
            borderRadius="rounded-tr-[12px]"
            bgColor="bg-yellow-A10 hover:bg-quack-90"
            width={180}
            height={200}
            data={data.filter((item) => item.name === data[2].name)[0]}
          />
        </div>
      </div>
      <div className="relative flex justify-center group w-full">
        <div
          className={`absolute bottom-[220px] hidden z-[110] group-hover:block animate-fadeIn`}
        >
          <GraphTooltip
            data={
              data.filter((singleItem) => singleItem.name === data[0].name)[0]
            }
            validBgColor={`bg-[#FFE98C] bg-opacity-[0.12]`}
            titleColor={` text-[#FFE98C]`}
            align="center"
          />
        </div>
        <Card
          borderRadius="rounded-b-[12px]"
          bgColor="bg-green-A10 hover:bg-light-green-90"
          width={580}
          height={200}
          data={data.filter((item) => item.name === data[0].name)[0]}
        />
      </div>
    </>
  );
};

export default EconomicSituationWise;
