import React, { useContext, useEffect, useState } from "react";
import ProgressBar from "../../../common/ProgressBar";
import GaugeComponent from "../../../common/Gauge";
import { ClockCircleOutlined } from "@ant-design/icons";
import { DashboardContext } from "../../../../context/DashboardProvider";
import { totalDataParamsDT } from "../../../../types/dashboardTypes";

const TotalData = () => {
  const dashboardContext = useContext(DashboardContext);
  const { getTotalDataCollection, totalDataCollection } = dashboardContext;
  const [totalDataPrams, setTotalDataParams] = useState<totalDataParamsDT>({
    module: "stt",
    role: "Admin",
  });

  useEffect(() => {
    getTotalDataCollection(totalDataPrams);
  }, []);
  // console.log("total data", totalDataCollection?.speaker.female)
  return (
    <div className="bg-white h-52 p-5">
      <div className="flex gap-5 items-end">
        <p className="text-heading-4 font-medium">Total Data</p>
        <p className="text-small text-ct-blue-90-70% mb-1">
          Received : {totalDataCollection?.received}h
        </p>
      </div>
      <div className="flex items-center justify-between h-full ">
        <div className="">
          <div className="flex gap-2">
            <h1 className="text-heading-1 text-transparent bg-clip-text bg-gradient-to-r from-primary-ct-blue-60 to-silver-tree">
              {totalDataCollection?.achieved}
            </h1>
            <div>
              <p className="text-heading-2 text-transparent bg-clip-text bg-gradient-to-r from-silver-tree to-tacao mt-2.5">
                %
              </p>
              <p className="text-xxs text-ct-blue-90-70% ">Achieved</p>
            </div>
          </div>
        </div>
        <div className="w-[850px]">
          <ProgressBar.Type1 value={totalDataCollection?.achieved} />

          <div className="flex justify-between">
            <div className="flex gap-5 mt-3">
              <p className="text-small text-ct-blue-90-70% font-semibold">
                Total Valid : {totalDataCollection?.totalValid}h;{" "}
              </p>
              <div className="flex gap-2 items-center">
                <ClockCircleOutlined
                  style={{ color: "#5F6B7D", fontSize: "12px" }}
                />
                <p className="text-small text-ct-blue-90-70% ">
                  Last Update: {totalDataCollection?.lastUpdate}
                </p>
              </div>
            </div>
            <div>
              <p className="mt-3 text-small font-semibold text-ct-blue-60">
                Total Target : {totalDataCollection?.totalTarget}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <GaugeComponent.Type1 data={totalDataCollection} />
        </div>
      </div>
    </div>
  );
};

export default TotalData;
