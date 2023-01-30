import React, { useContext, useEffect } from "react";
import OverTheTime from "../../components/containers/dashboard/OverTheTime";
import TotalData from "../../components/containers/dashboard/TotalData";
import Layouts from "../../components/Layouts";
import DataContainer from "../../components/containers/dashboard/DataContainer";
import { DashboardContext } from "../../context/DashboardProvider";
import { LoadingSkeleton } from "../../assets/loadingSkeleton";

const Dashboard = () => {
  const dashboardContext = useContext(DashboardContext)
  
  return (
    <Layouts.Secondary>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <div>
          <TotalData />
          <OverTheTime />
        </div>
        <DataContainer />
      </div>
    </Layouts.Secondary>
  );
};

export default Dashboard;
