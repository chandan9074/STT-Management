import React from "react";
import OverTheTime from "../../components/containers/dashboard/OverTheTime";
import TotalData from "../../components/containers/dashboard/TotalData";
import Layouts from "../../components/Layouts";
import Practise from "../../components/containers/dashboard/TotalData/Practise";

const Dashboard = () => {
  return (
    <Layouts.Secondary>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <OverTheTime />
        <TotalData/>

      </div>
    </Layouts.Secondary>
  );
};

export default Dashboard;
