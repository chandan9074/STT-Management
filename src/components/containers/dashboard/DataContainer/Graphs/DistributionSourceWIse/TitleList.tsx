import React from "react";
import { distributionSourceWiseDT } from "../../../../../../types/dashboardTypes";

const TitleList = ({ data }: { data: distributionSourceWiseDT[] }) => {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <h3
          className={`text-small text-blue-gray-80 ${
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
