import React, { useContext, useEffect } from "react";
import CollectData from "./CollectData";
import CreateData from "./Createdata";
import { DashboardContext } from "../../../../context/DashboardProvider";

const DataContainer = () => {
  const dashboardContext = useContext(DashboardContext);

  useEffect(() => {
    dashboardContext.getCreateCollectData();
  });
  return (
    <div className="grid grid-cols-12 gap-5 mt-4">
      <div className="col-span-6">
        {dashboardContext.createCollectData && (
          <CreateData data={dashboardContext.createCollectData.data[0]} />
        )}
      </div>
      <div className="col-span-6">
        <CollectData />
      </div>
    </div>
  );
};

export default DataContainer;
