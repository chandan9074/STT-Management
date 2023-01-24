import React, { useContext, useEffect } from "react";
import CollectData from "./CollectData";
import CreateData from "./Createdata";
import { DashboardContext } from "../../../../context/DashboardProvider";
import { CommonContext } from "../../../../context/CommonProvider";

const DataContainer = () => {
  const dashboardContext = useContext(DashboardContext);
  const commonContext = useContext(CommonContext);

  useEffect(() => {
    dashboardContext.getCreateCollectData(
      commonContext.role,
      commonContext.type
    );
  }, []);
  return (
    <div className="grid grid-cols-12 gap-5 mt-4">
      <div
        className="col-span-6 rounded-xl shadow-bottom-light-blue-10"
        style={{ background: "white" }}
      >
        {dashboardContext.createCollectData && (
          <CreateData
            data={dashboardContext.createCollectData.data.createData}
          />
        )}
      </div>
      <div
        className="col-span-6 rounded-xl shadow-bottom-light-blue-10"
        style={{ background: "white" }}
      >
        {dashboardContext.createCollectData && (
          <CollectData
            data={dashboardContext.createCollectData.data.collectData}
          />
        )}
      </div>
    </div>
  );
};

export default DataContainer;
