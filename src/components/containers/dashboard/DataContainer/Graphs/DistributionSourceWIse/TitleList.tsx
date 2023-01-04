import React from "react";
import { distributionSourceWiseDT } from "../../../../../../types/dashboardTypes";

const TitleList = ({ data }: { data: distributionSourceWiseDT[] }) => {
  return (
    <div className="flex flex-col h-[360px]">
      {data.map((item) => (
        <h3 className="text-small text-blue-gray-80 mb-8 text-right">
          {item.name}
        </h3>
      ))}
    </div>
  );
};

export default TitleList;
