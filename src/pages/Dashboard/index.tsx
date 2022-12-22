import React from "react";
import OverTheTime from "../../components/containers/dashboard/OverTheTime";
import Layouts from "../../components/Layouts";

const Dashboard = () => {
  return (
    <Layouts.Secondary>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <OverTheTime />
      </div>
    </Layouts.Secondary>
  );
};

export default Dashboard;
