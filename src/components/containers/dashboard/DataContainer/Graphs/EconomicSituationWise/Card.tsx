import React from "react";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";

type Props = {
  bgColor: string;
  borderRadius: string;
  width: number;
  height: number;
  data: createCollectSimilarPropertyDT;
};

const Card = ({ bgColor, borderRadius, height, width, data }: Props) => {
  return (
    <div
      className={`relative duration-300 ${bgColor} ${borderRadius}`}
      style={{ width: width, height: height }}
    >
      <h3 className="text-[#373C45] text-small absolute top-6 left-6">
        {data.name}
      </h3>
      <div className="absolute bottom-4 right-5 flex items-end">
        <h1
          className="text-heading-2 text-[#373C45] leading-9"
          style={{ fontWeight: 275 }}
        >
          {data.contribution}%
        </h1>
        <h1 className="text-small text-[#373C45] leading-4 ml-2 mb-0.5">
          {data.totalValid}h
        </h1>
      </div>
    </div>
  );
};

export default Card;
