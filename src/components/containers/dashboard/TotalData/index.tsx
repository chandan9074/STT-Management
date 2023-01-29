import React, { useContext, useEffect, useState } from "react";
import ProgressBar from "../../../common/ProgressBar";
import GaugeComponent from "../../../common/Gauge";
import { ClockCircleOutlined } from "@ant-design/icons";
import { DashboardContext } from "../../../../context/DashboardProvider";
import { totalDataParamsDT } from "../../../../types/dashboardTypes";
import { CommonContext } from "../../../../context/CommonProvider";
import { STTMODULE } from "../../../../helpers/ConditionVariable";

const TotalData = () => {
  const dashboardContext = useContext(DashboardContext);
  const commonContext = useContext(CommonContext)
  const { type, role } = commonContext
  const { getTotalDataCollection, totalDataCollection } = dashboardContext;
 
  useEffect(() => {
    getTotalDataCollection({ module: type, role: role });
  }, [type]);


  return (
    <div className="bg-white h-[180px] p-5">
      <div className="flex gap-3 items-end -mb-3">
        <p className="text-heading-4 font-medium text-ct-blue-95">Total Data</p>
        <p className="text-small text-ct-blue-90-70% mb-1">
          Received : {totalDataCollection?.received}h
        </p>
      </div>
      <div className="flex items-center justify-between h-full ">
        <div className="">
          <div className="flex gap-2">
            <h1 className={`text-heading-1 mb-2 font-medium text-transparent bg-clip-text ${type === STTMODULE ? "bg-gradient-to-r from-primary-ct-blue-60 to-silver-tree" : "bg-gradient-to-r from-primary-ct-magenta-60 to-forest-green"}`}>
              {totalDataCollection?.achieved}
            </h1>
            <div>
              <p className={`text-heading-2 font-medium text-transparent bg-clip-text mt-2.5 ${type === STTMODULE ? "bg-gradient-to-r from-silver-tree to-tacao" : "bg-gradient-to-r from-forest-green to-pacifika"}`}>
                %
              </p>
              <p className="text-xxs text-ct-blue-90-70% mt-1">Achieved</p>
            </div>
          </div>
        </div>
        <div className="w-[850px]">
          <ProgressBar.Type1
            value={totalDataCollection?.achieved}
            bgColor={type === STTMODULE ?
              "linear-gradient(270deg, #FF24FB 2.01%, #4E2CBE 48.36%, #0093D9 98.4%)"
              : "linear-gradient(270deg, #F7F703 2.01%, #26851F 48.36%, #851F58 98.4%)"}

          />

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
              <p className={`mt-3 text-small font-semibold ${type === STTMODULE ? "text-ct-blue-60" : "text-primary-ct-magenta-60"}`}>
                Total Target : {totalDataCollection?.totalTarget}
              </p>
            </div>
          </div>
        </div>
        <div className="pb-[50px]">
          <GaugeComponent.Type1 data={totalDataCollection} />
        </div>
      </div>
    </div>
  );
};

export default TotalData;
