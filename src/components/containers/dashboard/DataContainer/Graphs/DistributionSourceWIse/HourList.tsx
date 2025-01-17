import React from "react";
import { distributionSourceWiseDT } from "../../../../../../types/dashboardTypes";

const HourList = ({ data }: { data: distributionSourceWiseDT[] }) => {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <h3
          key={index}
          className={`text-small text-blue-gray-A30 ${data.length - 1 === index ? "" : "mb-8"
            } text-left leading-4`}
        >
          {item.target}h
        </h3>
      ))}
    </div>
  );
};

export default HourList;
