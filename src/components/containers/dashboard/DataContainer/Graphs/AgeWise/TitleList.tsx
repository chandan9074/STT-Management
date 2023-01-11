import React from "react";
import {
  createCollectSimilarPropertyDT,
  distributionSourceWiseDT,
} from "../../../../../../types/dashboardTypes";

const TitleList = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <h3
          className={`text-small text-blue-gray-80 leading-4 ${
            data.length - 1 === index ? "" : "mb-8"
          } text-right leading-4`}
        >
          {item.name}
        </h3>
      ))}
    </div>
  );
};

export default TitleList;
