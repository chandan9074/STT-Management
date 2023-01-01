import React, { useEffect, useContext, useState } from "react";
import BarChart from "./BarChart";
import Header from "./Header";
import { DashboardContext } from "../../../../context/DashboardProvider";
import { overTheTimeGDT } from "../../../../types/dashboardTypes";
import { CommonContext } from "../../../../context/CommonProvider";

const OverTheTime = () => {
  const [overTheTimeData, setOverTheTimeData] = useState<
    overTheTimeGDT | undefined
  >();
  const dashboardContext = useContext(DashboardContext);
  const commonContext = useContext(CommonContext);

  useEffect(() => {
    dashboardContext.getOverTheTimeData(commonContext.type, commonContext.role);
  }, []);

  useEffect(() => {
    setOverTheTimeData(dashboardContext.overTheTimeData);
  }, [dashboardContext.overTheTimeData]);
  return (
    <div className="p-4 bg-white border-t border-blue-gray-30">
      {overTheTimeData && (
        <>
          <Header
            year={overTheTimeData.year}
            activeMonth={overTheTimeData.month}
          />
          <BarChart />
        </>
      )}
    </div>
  );
};

export default OverTheTime;
