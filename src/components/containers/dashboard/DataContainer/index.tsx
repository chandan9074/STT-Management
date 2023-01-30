import React, { useContext, useEffect } from "react";
import CollectData from "./CollectData";
import CreateData from "./Createdata";
import { DashboardContext } from "../../../../context/DashboardProvider";
import { CommonContext } from "../../../../context/CommonProvider";
import Icons from "../../../../assets/Icons";

const DataContainer = () => {
  const dashboardContext = useContext(DashboardContext);
  const commonContext = useContext(CommonContext);

  useEffect(() => {
    dashboardContext.getCreateCollectData(
      commonContext.role,
      commonContext.type
    );
  }, [commonContext.type]);
  return (
    <div className="grid grid-cols-12 gap-5 mt-4">
      <div
        className="col-span-6 rounded-xl shadow-bottom-light-blue-10"
        style={{ background: "white" }}
      >
        {dashboardContext.createCollectData ? (
          <CreateData
            data={dashboardContext.createCollectData.data.createData}
          />
        ) : (<img src={Icons.createSkeleton} alt="loading" />)}
      </div>
      <div
        className="col-span-6 rounded-xl shadow-bottom-light-blue-10"
        style={{ background: "white" }}
      >
        {dashboardContext.createCollectData ? (
          <CollectData
            data={dashboardContext.createCollectData.data.collectData}
          />
        ) : (<img src={Icons.collectSkeleton} alt="loading" />)}
      </div>
    </div>
  );
};

export default DataContainer;
