import { useEffect, useContext, useState } from "react";
import BarChart from "./BarChart";
import Header from "./Header";
import { DashboardContext } from "../../../../context/DashboardProvider";
import { overTheTimeGDT } from "../../../../types/dashboardTypes";
import { CommonContext } from "../../../../context/CommonProvider";
import { LoadingSkeleton } from "../../../../assets/loadingSkeleton";

const OverTheTime = () => {
  const [overTheTimeData, setOverTheTimeData] = useState<
    overTheTimeGDT | undefined
  >();
  const dashboardContext = useContext(DashboardContext);
  const commonContext = useContext(CommonContext);

  useEffect(() => {
    dashboardContext.getOverTheTimeData(commonContext.type, commonContext.role);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commonContext.type, commonContext.role]);

  useEffect(() => {
    setOverTheTimeData(dashboardContext.overTheTimeData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardContext.overTheTimeData]);
  return (
    <div className="p-4 bg-white border-t border-blue-gray-30">
      {overTheTimeData?.module ?
        <>
          <Header
            year={overTheTimeData.year}
            activeMonth={overTheTimeData.month}
          />
          <BarChart overTheTimeGData={overTheTimeData} />
        </>
        :
        <img src={LoadingSkeleton.overTheTimeSkeleton} alt="" className="w-full" />
      }
    </div>
  );
};

export default OverTheTime;
